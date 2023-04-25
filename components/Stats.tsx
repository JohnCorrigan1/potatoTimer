import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const Stats: React.FC<{ hours: number, sessions: number }> = (props) => {
    const [isHours, setIsHours] = useState(false);
    const [monthlyHours, setMonthlyHours] = useState(0);
    const [monthlySessions, setMonthlySessions] = useState(0);
    const [hours, setHours] = useState(0);
    const [sessions, setSessions] = useState(0);
    const [daily, setDaily] = useState(0);
    const [weekly, setWeekly] = useState("0");
    const [monthly, setMonthly] = useState("0");
    const [user] = useAuthState(auth);
    const dayInMilliseconds = 86400000;

    useEffect(() => {
        const getPastWeekHours = async () => {
            if (!user) return;
            let hours = 0;
            let sessions = 0;
            const now = new Date();
            for (let i = 0; i < 7; i++) {
                const then = new Date(now.getTime() - (i * dayInMilliseconds));
                const dateStr = `${then.getMonth() + 1}-${then.getDate()}-${then.getFullYear()}`;
                const docRef = doc(db, "users", user.uid, "hours", dateStr);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log(typeof (docSnap.data().hours));
                    hours += docSnap.data().hours;
                    sessions += docSnap.data().sessions;
                };
            }
            setSessions(sessions);
            setWeekly(sessions.toString());
            setHours(hours);
        };
        const getPastMonthHours = async () => {
            if (!user) return;
            let hours = 0;
            let sessions = 0;
            const now = new Date();
            for (let i = 0; i < 30; i++) {
                const then = new Date(now.getTime() - (i * dayInMilliseconds));
                const dateStr = `${then.getMonth() + 1}-${then.getDate()}-${then.getFullYear()}`;
                const docRef = doc(db, "users", user.uid, "hours", dateStr);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log(typeof (docSnap.data().hours));
                    hours += docSnap.data().hours;
                    sessions += docSnap.data().sessions;
                };
            }
            setMonthlySessions(sessions);
            setMonthly(sessions.toString());
            setMonthlyHours(hours);
        };
        getPastWeekHours();
        getPastMonthHours();
    }, [user, props.hours]);

    useEffect(() => {
        if(isHours){
            setDaily(props.hours);
            setWeekly(hours.toFixed(2));
            setMonthly(monthlyHours.toFixed(2));
        }
        else {
            setWeekly(sessions.toString());
            setDaily(props.sessions);
            setMonthly(monthlySessions.toString());
        }
    }, [isHours, weekly, monthly])

    return (
        <>
            <button onClick={() => setIsHours(!isHours)} className="text-primary-content text-xl font-semibold bg-primary p-3 rounded-xl mt-10 active:scale-95 hover:scale-105 duration-200">
                   Hours/Sessions
                </button>
            <div className="stats shadow bg-base-300">
                <div className="stat place-items-center w-[150px]">
                    <div className="stat-title">Today</div>
                    <div className="stat-value">{daily}</div>
                </div>

                <div className="stat place-items-center w-[150px]">
                    <div className="stat-title">Past 7d</div>
                    <div className="stat-value text-secondary">{weekly}</div>
                </div>

                <div className="stat place-items-center w-[180px]">
                    <div className="stat-title">Past 30d</div>
                    <div className="stat-value p-2">{monthly}</div>
                </div>
            </div>
        </>
    );
};

export default Stats;
