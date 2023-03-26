const Leaderboard: React.FC = () => {
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
