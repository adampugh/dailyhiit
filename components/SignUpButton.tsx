import Image from 'next/image';

const SignUpButton = () => {
    return (
        <button className='flex justify-center font-heading text2xl w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple'>
            <span className='mr-1'>SIGN UP</span>
            <Image src='/images/google.png' height={20} width={20} alt='google sign up' className='' />
        </button>
    );
};

export default SignUpButton;
