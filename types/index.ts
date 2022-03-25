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
};
