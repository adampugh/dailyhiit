import Link from 'next/link';

interface ButtonProps {
    text: 'LOGIN' | 'SIGN UP';
    disabled?: boolean;
}

const Button = ({ text, disabled = false }: ButtonProps) => {
    const formatLink = text.toLowerCase().replace(' ', '');

    return (
        <Link href={`/${formatLink}`}>
            <a>
                <button
                    type='submit'
                    disabled={disabled}
                    className='font-heading text2xl pr-4 pl-4 lg:w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple text-center'>
                    {text}
                </button>
            </a>
        </Link>
    );
};

export default Button;
