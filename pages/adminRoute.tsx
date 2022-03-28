// @ts-nocheck
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import { useUser } from '../context/UserContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const AdminRoute = ({ children }) => {
    const { isAdmin } = useUser();
    const { authUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        console.log(loading, isAdmin);
        if (!loading && !isAdmin) {
            authUser ? router.push('/dashboard') : router.push('/');
        }
    }, [authUser, loading, isAdmin]);

    return (
        <>
            {loading || !isAdmin ? (
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

export default AdminRoute;
