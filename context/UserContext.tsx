// @ts-nocheck
import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';
import { getDayIndex } from '../utils/dates';
import { WorkoutType } from '../types';
import { isToday, isYesterday, format, differenceInDays } from 'date-fns';

const getQueryParams = (query: string) => {
    const getParams = (params: { [key: string]: string }, param: string) => {
        const [key, value] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
    };

    return query ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce(getParams, {}) : {};
};

type UserContextType = {
    weeklyWorkouts: WorkoutType[] | [];
    weeklyStats: [];
    todaysWorkout: WorkoutType;
    addWorkout: (workout: WorkoutType) => void;
    deleteWorkout: (index: number) => void;
    updateStats: (index: string) => void;
};

const userContext = createContext({
    isAdmin: null,
    weeklyWorkouts: [],
    weeklyStats: [],
    todaysWorkout: null,
    addWorkout: async (workout: WorkoutType) => {},
    deleteWorkout: async (index: number) => {},
    updateStats: async (index: string) => {},
});

export function UserContextProvider({ children }) {
    const [weeklyWorkouts, setWeeklyWorkouts] = useState([null]);
    const [isAdmin, setIsAdmin] = useState(null);
    const [weeklyStats, setWeeklyStats] = useState(null);
    const [todaysWorkout, setTodaysWorkout] = useState<WorkoutType | {} | null>(null);
    const { authUser } = useAuth();
    const router = useRouter();

    const fetchUserData = () => {
        if (authUser !== null) {
            const userRef = db.collection('users').doc(authUser.uid);
            userRef.get().then((doc) => {
                const userData = doc.data();
                const { weeklyWorkouts, weeklyStats, admin } = userData;
                setIsAdmin(!!admin);
                setWeeklyWorkouts(weeklyWorkouts);
                setWeeklyStats(weeklyStats);
                setTodaysWorkout(weeklyWorkouts[getDayIndex()]);
            });
        }
    };

    useEffect(() => {
        if (authUser) {
            fetchUserData();
        }
    }, [authUser]);

    const addWorkout = (workout: WorkoutType) => {
        const { index } = getQueryParams(window.location.search);
        db.collection('users')
            .doc(`${authUser.uid}`)
            .update({ [`weeklyWorkouts.${index}`]: workout })
            .then(() => {
                fetchUserData();
                router.push('/dashboard');
            })
            .catch((error) => console.log('Error adding workout: ' + error.message));
    };

    const deleteWorkout = (index: number) => {
        db.collection('users')
            .doc(`${authUser.uid}`)
            .update({ [`weeklyWorkouts.${index}`]: {} })
            .then(() => fetchUserData())
            .catch((error) => console.log('Error adding workout: ' + error.message));
    };

    const getUpdatedGraphData = ({ workoutGraphData }, time) => {
        const updatedGraphData = { ...workoutGraphData };
        const date = new Date();
        const dayValue = date.valueOf(); // 3234234234
        const day = format(dayValue, 'EEEE').toLowerCase();

        if (isToday(workoutGraphData[day].date)) {
            updatedGraphData[day].totalTime = workoutGraphData[day].totalTime + time;
        } else {
            updatedGraphData[day] = { date: dayValue, totalTime: time };
        }

        for (let key in updatedGraphData) {
            if (differenceInDays(updatedGraphData[key].date, dayValue) < -6) {
                updatedGraphData[key] = { date: 0, totalTime: 0 };
            }
        }

        return updatedGraphData;
    };

    const getUpdatedStreak = ({ currentStreak }) => {
        const { lastWorkout } = currentStreak;
        const updatedStreak = {};
        const date = new Date();
        const today = date.valueOf();
        if (isToday(lastWorkout)) {
            return currentStreak;
        } else {
            if (isYesterday(lastWorkout)) {
                updatedStreak.lastWorkout = today;
                updatedStreak.streakCount = currentStreak.streakCount + 1;
            } else {
                updatedStreak.lastWorkout = today;
                updatedStreak.streakCount = 1;
            }
        }
        return updatedStreak;
    };

    const updateStats = (time) => {
        const userRef = db.collection('users').doc(`${authUser.uid}`);
        userRef.get().then((doc) => {
            const { weeklyStats } = doc.data();
            console.log(weeklyStats);
            const updatedStats = {
                ...weeklyStats,
                completedWorkouts: +weeklyStats.completedWorkouts + 1,
                totalWorkoutTime: +weeklyStats.totalWorkoutTime + time,
                currentStreak: getUpdatedStreak(weeklyStats),
                workoutGraphData: getUpdatedGraphData(weeklyStats, time),
            };
            userRef
                .update({ weeklyStats: updatedStats })
                .then(() => fetchUserData())
                .catch((error) => console.log('Error adding workout: ' + error.message));
        });
    };

    const userData: UserContextType = {
        isAdmin,
        weeklyWorkouts,
        weeklyStats,
        todaysWorkout,
        addWorkout,
        deleteWorkout,
        updateStats,
    };

    return <userContext.Provider value={userData}>{children}</userContext.Provider>;
}

export const useUser = () => useContext(userContext);
