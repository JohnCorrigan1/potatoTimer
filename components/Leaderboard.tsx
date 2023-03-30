import { auth, db, app } from "@/lib/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { doc, getDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

const Leaderboard: React.FC = () => {

    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const dayInMs = 86400000;
    const [users, setUsers] = useState<any>([])


const data: any = []
    useEffect(() => {
        if(!user) return
        setUserData([])
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                getData(doc.id, doc.data().displayName);
            });
        }
        getUsers();

    }, [])

    const getData = async (id: string, name: string) => {
    let hours = 0;
    const now = new Date();
    for (let i = 0; i < 7; i++) {
        const then = new Date(now.getTime() - (dayInMs * i));
        const dateStr = `${then.getMonth() + 1}-${then.getDate()}-${then.getFullYear()}`;
        const docRef = doc(db, "users", id, "hours", dateStr);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            hours += docSnap.data().hours;
        }
    }
        data.push({ displayName: name, hours: hours.toFixed(2) })
        setUserData(data.sort((a: any, b: any) => b.hours - a.hours))
    }

    return (
        <div>
        <div className="w-full flex justify-center items-center p-10">
            <h1 className="text-3xl font-bold">Leaderboard</h1>
        </div>
            <div className=" table">

                    <h2 className="w-full flex justify-center text-xl">Rank</h2>
                    <h2 className="w-full flex justify-center text-xl">Hacker</h2>
                    <h2 className="w-full flex justify-center text-xl">Hours Worked</h2>
               {userData.map((user: any, index: any) => (
                    <>
                        <h2 className="w-full flex justify-center text-xl">{index + 1}</h2>
                        <h2 className="w-full flex justify-center text-xl">{user.displayName}</h2>
                        <h2 className="w-full flex justify-center text-xl">{user.hours}</h2>
                    </>
                ))}

            </div>
        </div>
    )
}

export default Leaderboard
