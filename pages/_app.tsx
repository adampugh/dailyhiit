import { AuthUserProvider } from '../context/AuthUserContext';
import { UserContextProvider } from '../context/UserContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthUserProvider>
            <UserContextProvider>
                <Component {...pageProps} />
            </UserContextProvider>
        </AuthUserProvider>
    );
}

export default MyApp;
