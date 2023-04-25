import { Dispatch, SetStateAction } from "react";
import SoundItem from "./SoundItem";

const SoundPicker: React.FC<{currentSound: string, setCurrentSound: React.Dispatch<SetStateAction<string>>}> = () => {

    return (
        <div className="grid">
            <div>
                <SoundItem name="Augh" source="/augh.mp3"/>
            </div>
        </div>
    )
}

export default SoundPicker
