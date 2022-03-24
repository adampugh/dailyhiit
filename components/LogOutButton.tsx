import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';

interface ButtonProps {
    disabled?: boolean;
}

const LogOutButton = ({ disabled = false }: ButtonProps) => {
    const { authUser, loading, signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        console.log('this shoudl lg out');
        if (!loading && !authUser) router.push('/');
    }, [authUser, loading, router]);

    return (
        <div className='font-heading text2xl w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple text-center'>
            <button type='submit' disabled={disabled} className='' onClick={signOut}>
                LOGOUT
            </button>
        </div>
    );
};

export default LogOutButton;
