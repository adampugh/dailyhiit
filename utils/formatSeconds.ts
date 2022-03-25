export const formatSeconds = (seconds: number) => {
    if (seconds > 60) {
        const remainder = seconds % 60;
        const secondsText = !!remainder ? ` ${remainder} SECS` : '';
        return `${Math.floor(seconds / 60)} MINS` + secondsText;
    } else {
        return `${seconds} SECS`;
    }
};

export const formatSecondsCondensed = (seconds: number) => {
    if (seconds > 9) {
        const remainder = seconds % 60;
        const secondsText = !!remainder ? (remainder < 10 ? `0${remainder}` : `${remainder}`) : `${remainder}0`;
        return `${Math.floor(seconds / 60)}:${secondsText}`;
    } else {
        return `0:0${seconds}`;
    }
};

export const calculateTotalTime = (exercisesArr: []) => {
    return exercisesArr.reduce((acc, { time }) => acc + time, 0);
};
