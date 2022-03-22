import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const Card = ({ id, time, title, intensity, img }) => {
    return (
        <div
            className='rounded-3xl h-96 w-64 pt-6 pb-4 relative pl-8 pr-8 inline-block'
            style={{
                backgroundImage: `linear-gradient(4deg, rgba(18,18,18,0.8743872549019608) 0%, rgba(91,91,91,0.5466561624649859) 35%, rgba(0,212,255,0) 100%), url("${img}")`,
                backgroundSize: 'cover',
            }}>
            <div className='flex justify-between'>
                <div>
                    <FontAwesomeIcon icon={faClock} /> {time}
                </div>
                <div>
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            </div>
            <div className='absolute bottom-10'>
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
            </div>
        </div>
    );
};

export default Card;
