import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
    const { authUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !authUser) router.push('/');
    }, [authUser, loading]);

    return <>{loading ? <Loader /> : <>{children}</>}</>;
};

export default PrivateRoute;
