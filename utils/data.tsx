export const workout1 = {
    id: '123',
    title: 'ULTIMATE BODY WORKOUT',
    category: ['upperBody', 'fullBody'],
    time: '10 Mins',
    intensity: '2',
    img: '/images/mobile.png',
    exercises: [
        { id: '1', name: 'Pressups', time: '30 secs' },
        { id: '2', name: 'Sit Ups', time: '30 secs' },
        { id: '3', name: 'Jumping Jacks', time: '30 secs' },
        { id: '4', name: 'Rest', time: '30 secs' },
    ],
};

const w = new Array(7).fill(workout1);

export const weeklyWorkouts = w.map((workout) => ({ id: Math.random(), ...workout }));

export const workouts = [workout1, workout1, workout1];
