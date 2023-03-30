import { useState, useEffect } from "react";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProfileInfo: React.FC<{ name: string, lifeTimeHours: number }> = (props) => {

    const [time, setTime] = useState("Hours")
    const [isEdditing, setIsEdditing] = useState(false)
    const [name, setName] = useState(props.name)
    const [user] = useAuthState(auth)

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    useEffect(() => {
        setName(props.name)
    }, [props.name])



    const handleSave = async () => {
        setIsEdditing(false)
if(user && props.name !== ""){
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
            displayName: name
        });
    }
        else if(user && props.name === ""){
            const docRef = doc(db, "users", user.uid);
            await setDoc(docRef, {
                displayName: name
            });
        }
    }

    return (
        <div className="w-1/3 min-w-[400px] flex flex-col gap-10 bg-secondary p-10 rounded-xl shadow-xl ">
<h1 className="text-2xl font-semibold mr-auto ml-auto">Display name</h1>
            <div className="flex justify-between border-2 border-base-100 p-3 rounded-lg items-center">
                {isEdditing && (
                    <>
                        <input onChange={handleName} value={name} className="input input-bordered w-1/2" type="text" placeholder={props.name} />

                        <button className="btn btn-secondary text-lg font-semibold w-1/4" onClick={handleSave}>Save</button>
                    </>)}
                {!isEdditing && (
                    <>

                        <h1 className="text-3xl font-bold">{name}</h1>
                        <button className="btn btn-secondary text-lg font-semibold w-1/4" onClick={() => setIsEdditing(true)}>Edit</button>
                    </>
                )}

            </div>
            <h1 className="text-2xl font-semibold mr-auto ml-auto">Life time hours</h1>
            <div className="flex justify-between  border-2 border-base-100 p-3 rounded-lg items-center">
                <h1 className="text-3xl font-bold">{props.lifeTimeHours}</h1>
                <div className="dropdown w-1/4">
                    <label tabIndex={0} className="btn btn-secondary text-lg font-semibold ">{time}</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => setTime("Minutes")}><a>Minutes</a></li>
                        <li onClick={() => setTime("Hours")}><a>Hours</a></li>
                        <li onClick={() => setTime("Days")}><a>Days</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
