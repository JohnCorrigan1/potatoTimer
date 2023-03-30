import { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Leaderboard from "../components/Leaderboard";

const LeaderboardPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Leaderboard</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Leaderboard />
        </>

    );
};

export default LeaderboardPage;
