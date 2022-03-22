import Card from './Card';
import Button from './Button';

const CardInfo = (workout) => {
    const { title, intensity, exercises } = workout;

    return (
        <div>
            <Card {...workout} />
            <div className=' mt-6 mb-6 p-5 bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70'>
                <h2 className='font-heading'>{title}</h2>
                {/* <p className='mr-4 mb-10'>
                    Intensity{' '}
                    {new Array(+intensity).fill('').map((v, i) => (
                        <div
                            className='ml-2 inline-block rounded-full bg-green-300'
                            style={{ height: '8px', width: '32px' }}
                            key={i}></div>
                    ))}
                </p> */}
                <div className='mt-10 mb-10 relative'>
                    {exercises.map(({ name, time, id }) => {
                        return (
                            <div className='ml-5 flex justify-between' key={id}>
                                <p>{name}</p>
                                <p>({time.toUpperCase()})</p>
                            </div>
                        );
                    })}
                    <div className='h-full w-1 rounded-3xl bg-gradient-to-b from-[#7253A0] to-[#E8A0AC] absolute top-0'></div>
                </div>
                <div className='text-center'>
                    <Button text='ADD WORKOUT' />
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
