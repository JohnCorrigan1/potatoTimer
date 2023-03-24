import React, { useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, app } from "../lib/firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';


const Timer = (props) => {
    const [timeLeft, setTimeLeft] = useState(props.minutes * 60);
    const [isOver, setIsOver] = useState(false);
    const aughRef = useRef(null);
    const roosterRef = useRef(null);



    const incrementTodaysSessions = () => {
        // const db = getFirestore();
        // const userRef = doc(db, "users", uid);
        // const todaysSessionsRef = doc(userRef, "todaysSessions", "todaysSessions");
        // updateDoc(todaysSessionsRef, {
        //     sessions: increment(1)
        // })

        const userRef = db.collection('users').doc(user.uid);
const sessionsRef = userRef.collection('sessions');// Get the current date
        const now = new Date();
        const mm_dd_yyyy = `${now.getMonth()+1}_${now.getDate()}_${now.getFullYear()}`;

// Update the session count for the current date
sessionsRef.doc(mm_dd_yyyy).set({
  count: firebase.firestore.fieldvalue.increment(1)
}, { merge: true })
.then(() => {
  console.log('session count updated successfully!');
})
.catch((error) => {
  console.error('error updating session count: ', error);
});
    }

    const [user] = useAuthState(auth);


    useEffect(() => {
        if(timeLeft === 0)
            setIsOver(true)
    }, [timeLeft])

    useEffect(() => {
        if(props.isReset){
            setTimeLeft(props.minutes * 60);
            props.setIsReset(false);
            props.setIsStarted(false);
        }
        if(props.isPaused)
            return
        if(!props.isStarted)
            return
        if(timeLeft === 0 && !props.isBreak){
            playAugh();
            props.setIsStarted(false)
            props.setIsBreak(true)
            setTimeLeft(props.breakTime * 60)
            props.setSessions(props.sessions + 1);
            if(user){
                incrementTodaysSessions(user.uid);
            }
        }
        if(timeLeft === 0 && props.isBreak){
            playRooster();
            props.setIsStarted(false)
            props.setIsBreak(false)
            setTimeLeft(props.minutes * 60)
        }


        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [props.isPaused, props.isReset, props.isStarted, timeLeft]);

    const playAugh = () => {
        aughRef.current?.play();
    }

    const playRooster = () => {
        roosterRef.current?.play();
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
            <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-8xl">
                    <span style={{ 
                    "--value": minutes }}></span>
                </span>
                min
            </div>
            <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
                <span className="countdown font-mono text-8xl">
                    <span style={{ 
                    "--value": seconds }}></span>
                </span>
                sec
            </div>
            <audio ref={aughRef} src="/augh.mp3"/>
            <audio ref={roosterRef} src="/minecraft-scream1.mp3"/>
        </div>
    );
};

export default Timer;



// import React, { useState, useEffect, useRef, Dispatch, SetStateAction, AudioHTMLAttributes } from "react";

// const Timer: React.FC<{ minutes: number, isStarted: boolean;
//   setIsStarted: Dispatch<SetStateAction<boolean>>;
//   isPaused: boolean;
//   setIsPaused: Dispatch<SetStateAction<boolean>>;
//   isReset: boolean;
//   setIsReset: Dispatch<SetStateAction<boolean>>;
// isBreak: boolean;
// setIsBreak: Dispatch<SetStateAction<boolean>>;
// breakTime: number;
// setBreakTime: Dispatch<SetStateAction<number>>
// sessions: number;
// setSessions: Dispatch<SetStateAction<number>>}> = (props) => {
//     const [timeLeft, setTimeLeft] = useState(props.minutes * 60);
//     const [isOver, setIsOver] = useState(false);
//     const aughRef = useRef<HTMLAudioElement>(null);
//     const roosterRef = useRef<HTMLAudioElement>(null);

//     useEffect(() => {
//         if(timeLeft === 0)
//             setIsOver(true)
//     }, [timeLeft])

//     useEffect(() => {
//         if(props.isReset){
//             setTimeLeft(props.minutes * 60);
//             props.setIsReset(false);
//             props.setIsStarted(false);
//         }
//         if(props.isPaused)
//             return
//         if(!props.isStarted)
//             return
//         if(timeLeft === 0 && !props.isBreak){
//             playAugh();
//             props.setIsStarted(false)
//             props.setIsBreak(true)
//             setTimeLeft(props.breakTime * 60)
//             props.setSessions(props.sessions + 1);
//         }
//         if(timeLeft === 0 && props.isBreak){
//             playRooster();
//             props.setIsStarted(false)
//             props.setIsBreak(false)
//             setTimeLeft(props.minutes * 60)
//         }


//         const interval = setInterval(() => {
//             setTimeLeft((timeLeft) => timeLeft - 1);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, [props.isPaused, props.isReset, props.isStarted, timeLeft]);

//     const playAugh = () => {
//         aughRef.current?.play();
//     }

//     const playRooster = () => {
//         roosterRef.current?.play();
//     }

//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;

//     return (
//         <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
//             <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
//                 <span className="countdown font-mono text-8xl">
//                     <span style={{ "--value": minutes }}></span>
//                 </span>
//                 min
//             </div>
//             <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
//                 <span className="countdown font-mono text-8xl">
//                     <span style={{ "--value": seconds }}></span>
//                 </span>
//                 sec
//             </div>
//             <audio ref={aughRef} src="/augh.mp3"/>
//             <audio ref={roosterRef} src="/minecraft-scream1.mp3"/>
//         </div>
//     );
// };

// export default Timer;

