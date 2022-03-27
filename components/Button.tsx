interface ButtonProps {
    text: string;
    disabled?: boolean;
}

const Button = ({ text, disabled = false }: ButtonProps) => (
    <button
        type='submit'
        disabled={disabled}
        className=' font-heading text2xl pr-4 pl-4 lg:w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple'>
        {text}
    </button>
);

export default Button;
