import { Dispatch, SetStateAction } from "react";

const Control: React.FC<{
  isStarted: boolean;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
  isPaused: boolean;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  isReset: boolean;
  setIsReset: Dispatch<SetStateAction<boolean>>;
}> = (props) => {

    const handleReset = () => {
        props.setIsStarted(false);
        props.setIsReset(true);
    }
  return (
    <div className="flex gap-10 mt-5">
      <button className='btn btn-ghost' onClick={() => props.setIsPaused(!props.isPaused)}>Pause</button>
      <button className='btn btn-primary' onClick={() => props.setIsStarted(!props.isStarted)}>{props.isStarted ? "Stop" : "Start"}</button>
      <button className='btn btn-ghost' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Control;
