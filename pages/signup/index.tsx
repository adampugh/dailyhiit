import Head from 'next/head';
import Navbar from '../../components/Navbar';
import SignUpForm from '../../components/SignUpForm';
import Footer from '../../components/Footer';

const SignUp = () => (
    <>
        <Head>
            <title>Daily HIIT - Sign Up</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <SignUpForm />
            <Footer />
        </div>
    </>
);

export default SignUp;
