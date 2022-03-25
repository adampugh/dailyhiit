import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAuth } from '../context/AuthUserContext';
import Button from './Button';

const SignUpForm = () => {
    const router = useRouter();
    const [error, setError] = useState(null);
    const { createUserWithEmailAndPassword } = useAuth();

    const handleOnSubmit = ({ email, password }, { setSubmitting }) => {
        setSubmitting(true);
        setError(null);
        createUserWithEmailAndPassword(email, password) // sign up
            .then((authUser) => {
                setSubmitting(false);
                router.push('/dashboard');
            })
            .catch((error) => {
                setSubmitting(false);
                setError(error.message);
            });
    };

    return (
        <div className='mx-auto rounded-3xl p-10 max-w-screen-sm bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70 mx-auto w-96'>
            <h1 className='font-heading text-center'>SIGN UP</h1>
            <h1 className='text-red-400 text-center'>{error}</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.email = 'Required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Password must be at least 6 characters';
                    }
                    return errors;
                }}
                onSubmit={handleOnSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor='email' className='block font-heading pt-10 pb-2'>
                            EMAIL
                        </label>
                        <Field type='email' name='email' className='text-purple-900 pl-2 pr-2 rounded-3xl w-full' />
                        <ErrorMessage name='email' component='div' />
                        <label htmlFor='password' className='block font-heading pt-10 pb-2'>
                            PASSWORD
                        </label>
                        <Field
                            type='password'
                            name='password'
                            className='text-purple-900 pl-2 pr-2 rounded-3xl w-full'
                        />
                        <ErrorMessage name='password' component='div' />

                        <div className='mt-10 text-center'>
                            <div className='pb-5'>
                                <Link href='/login'>
                                    <a>
                                        Already have an account? <span className='text-purple-400'>Log in!</span>
                                    </a>
                                </Link>
                            </div>
                            <Button text='SIGN UP' disabled={isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SignUpForm;