import Image from 'next/image';
import Button from './Button';

const HomeInfo = () => {
    return (
        <section className=' pt-20 pb-20'>
            <div className='md:container mx-auto grid gap-20 grid-cols-2'>
                <div className='text-left'>
                    <h2 className='text-xl mt-10 font-heading'>KEEPING TO YOUR FITNESS GOALS</h2>
                    <p className=' pt-6'>
                        Designed with productivity in mind , make sure that you keep up with your goals with our Daily
                        HIIT App. Track your weekly progress. Add HIIT workouts from some of the world’s greatest
                        trainers to make sure you feel the burn. There are over 20+ workouts for all different workout
                        needs and goals. Available on desktop and mobile, simply start your workout and see the results
                        appear.
                    </p>
                    <Button text='SIGN UP' />
                </div>
                <div className='text-right'>
                    <Image src='/images/dashboard.png' alt='daily hiit logo' width={500} height={500} />
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;
