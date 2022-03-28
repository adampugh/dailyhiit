import { AuthUserProvider } from '../context/AuthUserContext';
import { UserContextProvider } from '../context/UserContext';
import '../styles/globals.css';
import { install } from 'resize-observer';
import type { AppProps } from 'next/app';

if (typeof window !== 'undefined') {
    if (!window.ResizeObserver) install();
}

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
