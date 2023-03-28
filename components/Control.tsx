import { Dispatch, SetStateAction } from "react";

const Control: React.FC<{
    isStarted: boolean;
    setIsStarted: Dispatch<SetStateAction<boolean>>;
    isPaused: boolean;
    setIsPaused: Dispatch<SetStateAction<boolean>>;
    isReset: boolean;
    setIsReset: Dispatch<SetStateAction<boolean>>;
    startedAt: number;
    setStartedAt: Dispatch<SetStateAction<number>>;
    timeLeft: number;
    setTimeLeft: Dispatch<SetStateAction<number>>;
    minutes: number;
    isBreak: boolean;
    breakTime: number;
}> = (props) => {

    const handleReset = () => {
        props.setIsStarted(false);
        props.setIsReset(true);
    }

    const handleStart = () => {
        if (props.isPaused) return
        if (!props.isStarted){
            props.setStartedAt(Date.now());
          props.setTimeLeft(props.minutes * 60 * 1000);
        }
        props.setIsStarted(!props.isStarted);
    }

    const handlePause = () => {
        if (!props.isStarted) return;
        if (props.isPaused)
            props.setStartedAt(Date.now() - (props.minutes * 60 * 1000 - props.timeLeft));

        props.setIsPaused(!props.isPaused);
    }

    return (
        <div className="flex gap-10 mt-5">
            <button className='btn btn-ghost' onClick={handlePause}>{props.isPaused ? "resume" : "pause"}</button>
            <button className='btn btn-primary' onClick={handleStart}>{props.isStarted ? "stop" : "start"}</button>
            <button className='btn btn-ghost' onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Control;
