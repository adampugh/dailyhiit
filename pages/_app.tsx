import { AuthUserProvider } from '../context/AuthUserContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthUserProvider>
            <Component {...pageProps} />
        </AuthUserProvider>
    );
}

export default MyApp;
