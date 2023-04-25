import { Dispatch, SetStateAction } from "react";
import SoundItem from "./SoundItem";

const SoundPicker: React.FC<{currentSound: string, setCurrentSound: React.Dispatch<SetStateAction<string>>}> = () => {

    return (
        <div className="grid justify-center items-center w-full mt-10">
            <div className="">
                <h1 className="text-xl font-bold">Current</h1>
                <SoundItem name="Augh" source="/augh.mp3"/>
            </div>
        </div>
    )
}

export default SoundPicker
