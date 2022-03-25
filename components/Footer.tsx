import Link from 'next/link';
import Image from 'next/image';

const Footer = () => (
    <footer className='bg-hiit-black py-6 px-6'>
        <div className='container flex mx-auto items-center justify-between'>
            <Link href='/'>
                <>
                    <a className='inline-flex items-center'>
                        <h2 className='font-heading pr-4'>DAILYHIIT</h2>
                        <Image src='/images/dumbbell.png' alt='daily hiit logo' height={30} width={30} />
                    </a>
                </>
            </Link>
            <p>© 2022 Design by Kokonoka</p>
            <div className='text-right'>
                <p>204 Hawley Rd.</p>
                <p>Water Town</p>
                <p>LR4 8BH</p>
            </div>
        </div>
    </footer>
);

export default Footer;
