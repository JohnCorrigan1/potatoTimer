import { auth, db, app} from "@/lib/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"

const Leaderboard: React.FC = () => {

    const [user] = useAuthState(auth)
    const [userData, setUserData] = useState<any>(null)

useEffect(() => {
        if (user) {
            getData()
        }
    }, [user])

        const getData = async () => {
            const usersRef = doc(db, "users")
            const docSnap = await getDoc(usersRef)
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data())
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!")
            }

        }
    return (
        <div>
            <h1>Leaderboard</h1>
            <div className=" table">
                <>
                    <h2 className="w-full flex justify-center text-xl">Rank</h2>
                    <h2 className="w-full flex justify-center text-xl">Hacker</h2>
                    <h2 className="w-full flex justify-center text-xl">Hours Worked</h2>
                </>
                <>
                    <h2 className="w-full flex justify-center text-xl">1</h2>
                    <h2 className="w-full flex justify-center text-xl">John Doe</h2>
                    <h2 className="w-full flex justify-center text-xl">100</h2>
                </>
                <>
                    <h2 className="w-full flex justify-center text-xl">2</h2>
                    <h2 className="w-full flex justify-center text-xl">John Doe</h2>
                    <h2 className="w-full flex justify-center text-xl">100</h2>
                </>

            </div>
        </div>
    )
}

export default Leaderboard
