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
}> = (props) => {

    const handleReset = () => {
        props.setIsStarted(false);
        props.setIsReset(true);
    }

    const handleStart = () => {
        if (!props.isStarted)
            props.setStartedAt(Date.now());
        props.setIsStarted(!props.isStarted);
    }

    return (
        <div className="flex gap-10 mt-5">
            <button className='btn btn-ghost' onClick={() => props.setIsPaused(!props.isPaused)}>Pause</button>
            <button className='btn btn-primary' onClick={handleStart}>{props.isStarted ? "stop" : "start"}</button>
            <button className='btn btn-ghost' onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Control;
