import { Dispatch, SetStateAction } from "react";
import SoundItem from "./SoundItem";
import AddSound from "./AddSound";
import { useEffect, useState } from "react"
import { auth, db } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";


const SoundPicker: React.FC<{currentSound: string, setCurrentSound: Dispatch<SetStateAction<string>>, currentName: string, setCurrentName: Dispatch<SetStateAction<string>>}> = (props) => {

    const [user] = useAuthState(auth)
    const [soundAdded, setSoundAdded] = useState(false)
    const [sounds, setSounds] = useState<any>([])
    useEffect(() => {
        const getSounds = async () => {
            const soundsRef = collection(db, 'sounds')
            const soundsSnapshot = await getDocs(soundsRef)
            const soundsList = soundsSnapshot.docs.map(doc => doc.data())
            setSounds(soundsList)
        }
        setSoundAdded(false)
        getSounds()
    }, [soundAdded])

    return (
        <div className="flex flex-col w-full mt-10">
            <div className="min-w-[250px] w-1/5 mr-auto ml-auto">
                <h1 className="text-2xl font-bold text-center text-accent">Current</h1>
                <SoundItem name={props.currentName} source={props.currentSound} setCurrentName={props.setCurrentName} setCurrentSound={props.setCurrentSound}/>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 p-5 justify-center items-center">
                <SoundItem name="Taco Bell" source="/tacoBell.mp3" setCurrentName={props.setCurrentName} setCurrentSound={props.setCurrentSound} />
                <SoundItem name="Another One" source="/anotherOne.mp3" setCurrentName={props.setCurrentName} setCurrentSound={props.setCurrentSound} />
                <SoundItem name="Augh" source="/augh.mp3" setCurrentName={props.setCurrentName} setCurrentSound={props.setCurrentSound}/>
                {sounds.map((sound: any) => {
                    return <SoundItem name={sound.name} source={sound.url} setCurrentName={props.setCurrentName} setCurrentSound={props.setCurrentSound}/>
                })}
                <AddSound setSoundAdded={setSoundAdded} />
            </div>
            </div>
    )
}

export default SoundPicker
