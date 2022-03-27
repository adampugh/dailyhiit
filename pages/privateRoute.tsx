import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
    const { authUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !authUser) router.push('/');
    }, [authUser, loading]);

    return (
        <>
            {loading ? (
                <>
                    <Navbar />
                    <Loader />
                    <Footer />
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};

export default PrivateRoute;
