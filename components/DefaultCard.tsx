import Link from 'next/link';

const DefaultCard = ({ index }) => {
    const handleClick = () => {
        console.log(index);
    };

    return (
        <div
            className='rounded-3xl h-96 w-64 pt-6 pb-4 text-center flex flex-col justify-center pl-8 pr-8 inline-block'
            style={{
                backgroundImage: `linear-gradient(4deg, rgba(18,18,18,0.8743872549019608) 0%, rgba(91,91,91,0.5466561624649859) 35%, rgba(0,212,255,0) 100%)`,
                backgroundSize: 'cover',
            }}>
            <Link
                href={{
                    pathname: '/workouts',
                    query: { index },
                }}>
                <a className='border rounded-3xl p-2' onClick={handleClick}>
                    <h1 className='font-heading'>+ ADD WORKOUT</h1>
                </a>
            </Link>
        </div>
    );
};

export default DefaultCard;
