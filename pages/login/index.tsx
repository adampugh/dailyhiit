import Head from 'next/head';
import Navbar from '../../components/Navbar';
import LoginInForm from '../../components/LogInForm';
import Footer from '../../components/Footer';

const Login = () => (
    <>
        <Head>
            <title>Daily HIIT - Login</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <LoginInForm />
            <Footer />
        </div>
    </>
);

export default Login;
