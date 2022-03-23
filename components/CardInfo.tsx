import Card from './Card';
import Info from './Info';

const CardInfo = (workout) => {
    return (
        <>
            <Card {...workout} />
            <Info {...workout} />
        </>
    );
};

export default CardInfo;
