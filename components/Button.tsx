interface ButtonProps {
    text: string;
    disabled?: boolean;
}

const Button = ({ text, disabled = false }: ButtonProps) => {
    return (
        <button
            type='submit'
            disabled={disabled}
            className='font-heading text2xl w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple'>
            {text}
        </button>
    );
};

export default Button;
