// @ts-nocheck
import { useEffect, useState } from 'react';
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
        if (!loading && isAdmin === false) {
            authUser ? router.push('/dashboard') : router.push('/');
        }
    }, [authUser, loading, isAdmin]);

    return (
        <>
            {loading && isAdmin === null ? (
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
