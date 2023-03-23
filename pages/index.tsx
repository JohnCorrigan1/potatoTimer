import { type NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Timer from "@/components/Timer";
import NavBar from "@/components/NavBar";
import Control from "@/components/Control";
import Stats from "@/components/Stats";


const Home: NextPage = () => {

  const [minutes, setMinutes] = useState(25);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakTime, setBreakTime] = useState(5);
  const [sessions, setSessions] = useState(0);


  return (
    <>
      <Head>
        <title>Potato Timer</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-h-[100vh]">
        <NavBar />
        <div className="flex flex-col items-center w-full mt-auto h-[70vh] justify-center gap-5 ">
        <Timer minutes={minutes}
        isStarted={isStarted} setIsStarted={setIsStarted} isPaused={isPaused}
        setIsPaused={setIsPaused} isReset={isReset} setIsReset={setIsReset}
               breakTime={breakTime} setBreakTime={setBreakTime} setIsBreak={setIsBreak}
               isBreak={isBreak} sessions={sessions} setSessions={setSessions}
        />
        <Control isStarted={isStarted} setIsStarted={setIsStarted} isPaused={isPaused}
        setIsPaused={setIsPaused} isReset={isReset} setIsReset={setIsReset}
        />
        <Stats sessions={sessions} />
        </div>
      </main>
    </>
  );
};

export default Home;
