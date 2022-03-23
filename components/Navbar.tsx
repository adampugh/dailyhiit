import Link from 'next/link';
import Image from 'next/image';
import SignUpButton from './SignUpButton';

const Navbar = () => {
    return (
        <nav className='bg-hiit-black pt-4 pb-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <a>
                        <h2 className='font-heading w-52'>DAILYHIIT</h2>
                    </a>
                </Link>
                <Image src='/images/dumbbell.png' alt='daily hiit logo' height={40} width={40} />
                <div className='w-52'>
                    <SignUpButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
