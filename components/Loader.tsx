import { Triangle } from 'react-loader-spinner';

const Loader = () => (
    <div className='container flex justify-center items-center h-screen '>
        <Triangle ariaLabel='loading-indicator' color='purple' />
    </div>
);

export default Loader;
