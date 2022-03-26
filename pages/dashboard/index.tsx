import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import Head from 'next/head';

import PrivateRoute from '../privateRoute';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';
import Stats from '../../components/Stats';
import WeekWorkout from '../../components/WeekWorkouts';
import Footer from '../../components/Footer';

const Dashboard: NextPage = () => {
    const [loading, setLoading] = useState(true);
    const { weeklyWorkouts, weeklyStats } = useUser();

    useEffect(() => {
        if (weeklyWorkouts && weeklyStats) {
            setLoading(false);
        }
    }, [weeklyStats, weeklyWorkouts]);

    return (
        <PrivateRoute>
            <Head>
                <title>Daily HIIT - Dashboard</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Stats />
                    <WeekWorkout weeklyWorkouts={weeklyWorkouts} />
                </>
            )}
            <Footer />
        </PrivateRoute>
    );
};

export default Dashboard;
