import React, { useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, app } from "../lib/firebase";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { doc, setDoc, increment, getDoc, updateDoc } from "firebase/firestore";



const Timer = (props) => {

  const [isOver, setIsOver] = useState(false);
  const aughRef = useRef(null);
  const roosterRef = useRef(null);
  const [user] = useAuthState(auth);

  const incrementTodaysHours = async () => {
    const now = new Date();
    const dateStr = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`;
    const hoursRef = doc(db, "users", user.uid, "hours", dateStr);
    const docSnap = await getDoc(hoursRef);
    if (docSnap.exists()) {
      await updateDoc(hoursRef, {
        hours: increment(props.minutes / 60),
        sessions: increment(1)
      })
    } else {
      await setDoc(hoursRef, {
        hours: props.minutes / 60,
        sessions: 1
      })
    }
    getData();
  };

  useEffect(() => {
    if (!props.isStarted) return
    if (props.isPaused) return

      if (props.timeLeft % 5 === 0 && !props.isBreak) {
          props.setTimeLeft(Math.round((props.startedAt + (props.minutes * 60000) - Date.now()) / 1000))
    }

      if (props.timeLeft % 5 === 0 && props.isBreak) {
          props.setTimeLeft(Math.round((props.startedAt + (props.breakTime * 60000) - Date.now()) / 1000))
    }

      if (props.timeLeft === 0)
      setIsOver(true)

    const timer = setTimeout(() => {
        props.setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer)

  }, [props.timeLeft, props.isPaused, props.isStarted]);

  useEffect(() => {
    if (props.isReset) {
      props.setTimeLeft(props.minutes * 60);
      props.setIsReset(false);
      props.setIsStarted(false);
      props.setIsBreak(false);
    }
    if (!props.isStarted)
      return


      if (props.timeLeft === 0 && !props.isBreak) {
      const hours = props.hours + (props.minutes / 60);
      props.setHours(parseInt(hours).toFixed(2));
      playAugh();
      props.setIsStarted(false)
      props.setIsBreak(true)
        props.setTimeLeft(props.breakTime * 60)
      if (user) {
        incrementTodaysHours(user.uid);
      }
    }
      if (props.timeLeft === 0 && props.isBreak) {
      playRooster();
      props.setIsStarted(false)
      props.setIsBreak(false)
          props.setTimeLeft(props.minutes * 60)
    }

  }, [props.isPaused, props.isReset, props.isStarted, isOver, props.timeLeft]);

  const getData = async () => {

    const now = new Date();
    const dateStr = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`;

    const docRef = doc(db, "users", user.uid, "hours", dateStr);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      props.setHours(docSnap.data().hours.toFixed(2))
    } else {
      props.setHours(0);
    }
  }

  const playAugh = () => {
    aughRef.current?.play();
  }

  const playRooster = () => {
    roosterRef.current?.play();
  }

    const minutes = Math.floor(props.timeLeft / 60);
    const seconds = props.timeLeft % 60;

  return (
    <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-8xl">
          <span style={{
            "--value": minutes
          }}></span>
        </span>
        min
      </div>
      <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
        <span className="countdown font-mono text-8xl">
          <span style={{
            "--value": seconds
          }}></span>
        </span>
        sec
      </div>
      <audio ref={aughRef} src={props.soundSource} />
      <audio ref={roosterRef} src={props.soundSource} />
    </div>
  );
};

export default Timer;
