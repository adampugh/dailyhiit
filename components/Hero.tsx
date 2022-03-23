import SignUpButton from './SignUpButton';

const Hero = () => {
    return (
        <div id='hero' className='bg-cover bg-bottom bg-center bg-hero-background h-screen'>
            <div className='flex h-full flex-start items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-8xl font-heading'>Daily HIIT App</h1>
                    <h2 className='text-xl mt-10 font-heading'>THE ULTIMATE APP IN KEEPING TO YOUR FITNESS GOALS</h2>
                    <p className='max-w-md mx-auto pt-6 mb-10'>
                        Designed with productivity in mind , make sure that you keep up with your goals with our Daily
                        HIIT App. Track your weekly progress. Add HIIT workouts from some of the world’s greatest
                        trainers to make sure you feel the burn.
                    </p>
                    <div className='flex justify-center'>
                        <SignUpButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
