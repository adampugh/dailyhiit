interface ButtonProps {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button className='font-heading mt-10 text2xl pl-16 pr-16 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple'>
            {text}
        </button>
    );
};

export default Button;
