import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';

import UserButton from './UserButton';
import LogOutButton from './LogOutButton';

const Navbar = () => {
    const { authUser, signOut } = useAuth();
    const router = useRouter();

    const handleSignOut = () => {
        signOut().then(() => {
            router.push('/');
        });
    };

    return (
        <nav className='bg-hiit-black pt-4 pb-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href={authUser ? '/dashboard' : '/'}>
                    <a>
                        <h2 className='font-heading lg:w-52'>DAILYHIIT</h2>
                    </a>
                </Link>
                <Image src='/images/dumbbell.png' alt='daily hiit logo' height={45} width={48} />
                <div className='lg:w-52'>
                    {authUser ? <LogOutButton handleSignOut={handleSignOut} /> : <UserButton text='LOGIN' />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
