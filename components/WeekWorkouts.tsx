import Card from './Card';

const WeekWorkouts = () => {
    return (
        <div className='bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70 pt-10 pb-10'>
            <div className='container'>
                <h3>This Week&apos;s Workouts</h3>
                <div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default WeekWorkouts;
