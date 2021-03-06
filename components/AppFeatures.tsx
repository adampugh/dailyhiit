import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const AppFeatures = () => (
    <section className='hidden xl:block bg-gradient-to-br from-[#3D3751]/80 to-[#010103]/80'>
        <div className='container pt-20 pb-20 '>
            <h2 className='font-heading text-xl mb-2 border-purple-4000'>APP FEATURES</h2>
            <div className='text-center bg-gradient-to-bl from-[#7253A0]/40 to-[#3D3751]/10 rounded-3xl pt-10 pb-10 relative'>
                <Image src='/images/mobile.png' alt='mobile' height={600} width={280} />
                <div className='text-left absolute top-1/4 left-20 max-w-xs'>
                    <h3 className='text-xl font-medium'>
                        <FontAwesomeIcon
                            style={{ height: '12px', paddingBottom: '2px', color: 'grey' }}
                            icon={faDumbbell}
                            className='inline'
                        />{' '}
                        TOTAL WORKOUT LENGTH
                    </h3>
                    <hr className='mb-2 border-purple-400' />
                    <p>Keep track of the total workout length and keep motivated</p>
                </div>
                <div className='text-left absolute top-2/4 left-40 max-w-xs'>
                    <h3 className='text-xl font-medium'>
                        <FontAwesomeIcon
                            style={{ height: '12px', paddingBottom: '2px', color: 'grey' }}
                            icon={faDumbbell}
                            className='inline'
                        />{' '}
                        TRACK THE NEXT EXERCISE
                    </h3>
                    <hr className='mb-2 border-purple-400' />
                    <p>Keep an eye on the next exercise, be prepared!</p>
                </div>
                <div className='text-left absolute top-3/4 left-20 max-w-xs'>
                    <h3 className='text-xl font-medium'>
                        <FontAwesomeIcon
                            style={{ height: '12px', paddingBottom: '2px', color: 'grey' }}
                            icon={faDumbbell}
                            className='inline'
                        />{' '}
                        CURRENT WORKOUT
                    </h3>
                    <hr className='mb-2 border-purple-400' />
                    <p>Lists out the current workout, with details about the next exercise and workout intensity</p>
                </div>
                <div className=' text-left absolute top-1/3 right-40 max-w-xs'>
                    <h3 className='text-xl font-medium'>
                        <FontAwesomeIcon
                            style={{ height: '12px', paddingBottom: '2px', color: 'grey' }}
                            icon={faDumbbell}
                            className='inline'
                        />{' '}
                        TRACK YOUR TIME
                    </h3>
                    <hr className='mb-2 border-purple-400' />
                    <p>Track your current execise time</p>
                </div>
                <div className=' text-left absolute top-2/3 right-20 max-w-xs'>
                    <h3 className='text-xl font-medium'>
                        <FontAwesomeIcon
                            style={{ height: '12px', paddingBottom: '2px', color: 'grey' }}
                            icon={faDumbbell}
                            className='inline'
                        />{' '}
                        LIST OF UPCOMING EXERCISES
                    </h3>
                    <hr className='mb-2 border-purple-400' />
                    <p>Keep track of the upcoming exercises in the workout</p>
                </div>
            </div>
        </div>
    </section>
);

export default AppFeatures;
