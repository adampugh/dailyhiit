export const getDayIndex = () => {
    const date = new Date();
    const day = date.getDay();
    return day === 0 ? 6 : day - 1;
};
