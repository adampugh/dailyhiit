export type Category = 'upperBody' | 'lowerBody' | 'fullBody';

export type Exercise = {
    name: string;
    id: string;
    time: number;
};

export type WorkoutType = {
    id: string;
    title: string;
    index: number;
    img: string;
    exercises: [];
    category: Category[];
    intensity: string;
    button?: boolean;
    time?: number;
};

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
