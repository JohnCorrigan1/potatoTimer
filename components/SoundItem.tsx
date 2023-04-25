import { Dispatch, SetStateAction, useRef } from "react";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SoundItem: React.FC<{ setCurrentSound: Dispatch<SetStateAction<string>>, setCurrentName: Dispatch<SetStateAction<string>>, name: string, source: string}> = (props) => {

const [user] = useAuthState(auth)
const soundRef = useRef<any>(null);

    const handleSound = () => {
        soundRef.current.play();
    }

    const handleSelect = async () => {
        props.setCurrentSound(props.source);
        props.setCurrentName(props.name);

        const docRef = doc(db, "users", user!.uid);
            await updateDoc(docRef, {
                sound: props.source,
                soundName: props.name
            });
    }

    return (
        <div className="flex flex-col w-full items-center justify-center gap-5 p-5 border h-56">
            <h1 className="text-primary-content text-xl font-bold">{props.name}</h1>
            <button onClick={handleSound} className="btn btn-primary w-1/2">Try Me</button>
            <button onClick={handleSelect} className="btn btn-seconday w-1/2">Select</button>
            <audio ref={soundRef} src={props.source} />
        </div>
    )
}

export default SoundItem;
