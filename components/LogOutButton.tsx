interface ButtonProps {
    disabled?: boolean;
    handleSignOut: () => void;
}

const LogOutButton = ({ disabled = false, handleSignOut }: ButtonProps) => (
    <div className='font-heading text2xl pr-4 pl-4 lg:w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple text-center ml-auto'>
        <button type='submit' disabled={disabled} className='' onClick={handleSignOut}>
            LOGOUT
        </button>
    </div>
);

export default LogOutButton;
