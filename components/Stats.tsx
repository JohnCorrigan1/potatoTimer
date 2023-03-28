import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const Stats: React.FC<{ hours: number }> = (props) => {

    const [weekly, setWeekly] = useState("0");
    const [monthly, setMonthly] = useState(0);
    const [user] = useAuthState(auth);
    const dayInMilliseconds = 86400000;

    useEffect(() => {
        const getPastWeekHours = async () => {
            if (!user) return;
            let hours = 0;
            const now = new Date();
            for (let i = 0; i < 7; i++) {
                const then = new Date(now.getTime() - (i * dayInMilliseconds));
                const dateStr = `${then.getMonth() + 1}-${then.getDate()}-${then.getFullYear()}`;
                const docRef = doc(db, "users", user.uid, "hours", dateStr);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log(typeof (docSnap.data().hours));
                    hours += docSnap.data().hours;
                };
            }
            setWeekly(hours.toFixed(2));
        };
        getPastWeekHours();
    }, [user, props.hours]);

    return (
        <>
            <div className="mt-10">
                <h1 className="text-primary-content text-2xl font-bold">
                    Hours Worked
                </h1>
            </div>
            <div className="stats shadow bg-base-300">
                <div className="stat place-items-center w-[120px]">
                    <div className="stat-title">Today</div>
                    <div className="stat-value">{props.hours}</div>
                </div>

                <div className="stat place-items-center w-[120px]">
                    <div className="stat-title">Past 7d</div>
                    <div className="stat-value text-secondary">{weekly}</div>
                </div>

                <div className="stat place-items-center w-[120px]">
                    <div className="stat-title">Past 30d</div>
                    <div className="stat-value">{monthly}</div>
                </div>
            </div>
        </>
    );
};

export default Stats;
