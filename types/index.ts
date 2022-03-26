export type Category = 'upperBody' | 'lowerBody' | 'fullBody';

export type Exercise = {
    name: string;
    id: string;
    time: number;
};

export type Workout = {
    id: string;
    title: string;
    index: number;
    img: string;
    exercises: Exercise[];
    category: Category[];
    intensity: string;
    button?: boolean;
    time?: number;
};

export type WorkoutType = {} | Workout;

export type FormValues = {
    email: string;
    password: string;
};

export type FormEvents = {
    setSubmitting: (value: boolean) => void;
};

export type ErrorType = {
    email?: string;
    password?: string;
};
