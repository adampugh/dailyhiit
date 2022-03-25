import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';
import { getDayIndex } from '../utils/dates';

const getQueryParams = (query) => {
    const getParams = (params, param) => {
        const [key, value] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
    };

    return query ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce(getParams, {}) : {};
};

const userContext = createContext({
    weeklyWorkouts: [],
    weeklyStats: [],
    todaysWorkout: {},
    addWorkout: async () => {},
    deleteWorkout: async (index: number) => {},
});

export function UserContextProvider({ children }) {
    const [weeklyWorkouts, setWeeklyWorkouts] = useState(null);
    const [weeklyStats, setWeeklyStats] = useState(null);
    const [todaysWorkout, setTodaysWorkout] = useState(null);
    const { authUser } = useAuth();
    const router = useRouter();

    const fetchUserData = () => {
        const userRef = db.collection('users').doc(authUser.uid);
        userRef.get().then((doc) => {
            const userData = doc.data();
            const { weeklyWorkouts, weeklyStats } = userData;
            setWeeklyWorkouts(weeklyWorkouts);
            setWeeklyStats(weeklyStats);
            setTodaysWorkout(weeklyWorkouts[getDayIndex()]);
        });
    };

    useEffect(() => {
        if (authUser) {
            fetchUserData();
        }
    }, [authUser]);

    const addWorkout = (workout) => {
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
        console.log('deleting');
        db.collection('users')
            .doc(`${authUser.uid}`)
            .update({ [`weeklyWorkouts.${index}`]: {} })
            .then(() => fetchUserData())
            .catch((error) => console.log('Error adding workout: ' + error.message));
    };

    const userData = {
        weeklyWorkouts,
        weeklyStats,
        todaysWorkout,
        addWorkout,
        deleteWorkout,
    };

    return <userContext.Provider value={userData}>{children}</userContext.Provider>;
}

export const useUser = () => useContext(userContext);
