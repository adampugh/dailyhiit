import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './Button';

const LoginInForm = () => (
    <div className='mx-auto rounded-3xl p-10 max-w-screen-sm bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70 mx-auto w-96'>
        <h1 className='font-heading text-center'>LOGIN / SIGNUP</h1>
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
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}>
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
                    <Field type='password' name='password' className='text-purple-900 pl-2 pr-2 rounded-3xl w-full' />
                    <ErrorMessage name='password' component='div' />
                    <div className='mt-10 text-center'>
                        <Button text='LOGIN / SIGN UP' disabled={isSubmitting} />
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default LoginInForm;
