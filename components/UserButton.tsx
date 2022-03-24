import Link from 'next/link';

interface ButtonProps {
    text: 'LOGIN' | 'SIGN UP';
    disabled?: boolean;
}

const Button = ({ text, disabled = false }: ButtonProps) => {
    const formatLink = text.toLowerCase().replace(' ', '');

    return (
        <div className='font-heading text2xl w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple text-center'>
            <Link href={`/${formatLink}`}>
                <a>
                    <button type='submit' disabled={disabled}>
                        {text}
                    </button>
                </a>
            </Link>
        </div>
    );
};

export default Button;
