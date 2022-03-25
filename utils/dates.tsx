export const getDayIndex = () => {
    const date = new Date();
    const day = date.getDay();
    return 0 ? 6 : day - 1;
};
