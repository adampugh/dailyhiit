import { formatSeconds } from '../utils/formatSeconds';

const WorkoutInfo = ({ title, intensity, exercises }) => (
    <div className='h-96 bg-gradient-to-br from-[#1B0E28]/80 to-[#2A2830]/70'>
        <div className='container'>
            <div className='flex justify-center '>
                <div className=' mt-20 mb-20 align-center'>
                    <h2 className='font-heading'>{title}</h2>
                    <div className='mr-4'>
                        <p className='inline'>Intensity </p>
                        {new Array(+intensity).fill('').map((v, i) => (
                            <div
                                className='ml-2 inline-block rounded-full bg-green-300'
                                style={{ height: '8px', width: '32px' }}
                                key={i}></div>
                        ))}
                    </div>
                    <div className=' mt-10 mb-10 relative lg:w-96'>
                        {exercises.map(({ name, time, id }) => {
                            return (
                                <div className='ml-5 flex justify-between' key={id}>
                                    <p>{name}</p>
                                    <p>{formatSeconds(time)}</p>
                                </div>
                            );
                        })}
                        <div className='h-full w-1 rounded-3xl bg-gradient-to-b from-[#7253A0] to-[#E8A0AC] absolute top-0'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default WorkoutInfo;
