import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import Card from './Card';
import Info from './Info';

const workout1 = {
    id: '123',
    title: 'ULTIMATE BODY WORKOUT',
    category: ['upperBody', 'fullBody'],
    time: '10 Mins',
    intensity: '2',
    img: '/images/mobile.png',
    exercises: [
        { id: '1', name: 'Pressups', time: 1 },
        { id: '2', name: 'Sit Ups', time: 1 },
        { id: '3', name: 'Jumping Jacks', time: 1 },
        { id: '4', name: 'Rest', time: 1 },
    ],
};

const initialValues = { title: '', category: [], intensity: '', img: '', exercises: [{ name: '', time: 0, id: '0' }] };

const CreateWorkoutForm = () => {
    const handleOnSubmit = (values, { setSubmitting }) => {
        console.log(values);
        // calculate time
        // create id
    };

    return (
        <div className=' rounded-3xl p-10 max-w-screen-sm bg-gradient-to-br from-[#1B0E28]/40 to-[#2A2830]/70 mx-auto'>
            <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
                {({
                    values,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor='firstName' className='block font-heading'>
                            TITLE
                        </label>
                        <Field
                            id='title'
                            name='title'
                            placeholder='ULTIMATE WORKOUT'
                            className='text-purple-900 pl-2 pr-2 rounded-3xl w-full'
                        />
                        <div className='grid grid-cols-2 gap-10'>
                            <div>
                                <div role='group' aria-labelledby='checkbox-group' className='mt-10'>
                                    <label htmlFor='checkboxes' className='block mt-10 font-heading'>
                                        CATEGORY
                                    </label>
                                    <label className='block'>
                                        <Field
                                            type='checkbox'
                                            name='category'
                                            value='upperBody'
                                            className='mr-2 rounded-3xl'
                                        />
                                        Upper Body
                                    </label>
                                    <label className='block'>
                                        <Field
                                            type='checkbox'
                                            name='category'
                                            value='lowerBody'
                                            className='mr-2 rounded-3xl'
                                        />
                                        Lower Body
                                    </label>
                                    <label className='block'>
                                        <Field
                                            type='checkbox'
                                            name='category'
                                            value='fullBody'
                                            className='mr-2 rounded-3xl'
                                        />
                                        Full Body
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div id='my-radio-group' className='mt-10 font-heading'>
                                    INTENSITY
                                </div>
                                <div role='group' aria-labelledby='my-radio-group'>
                                    <label className='block'>
                                        <Field type='radio' name='intensity' value='1' className='mr-2 rounded-3xl' />
                                        One
                                    </label>
                                    <label className='block'>
                                        <Field type='radio' name='intensity' value='2' className='mr-2 rounded-3xl' />
                                        Two
                                    </label>
                                    <label className='block'>
                                        <Field type='radio' name='intensity' value='3' className='mr-2 rounded-3xl' />
                                        Three
                                    </label>
                                </div>
                            </div>
                        </div>

                        <label htmlFor='img' className='block mt-10 font-heading'>
                            IMAGE URL
                        </label>
                        <Field
                            id='img'
                            name='img'
                            placeholder='https://dailyhiit.com/images/logo.png'
                            className='text-purple-900 pl-2 pr-2 rounded-3xl w-full'
                        />
                        <div className='mt-10 font-heading'>EXERCISES</div>
                        <FieldArray name='exercises'>
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.exercises.length > 0 &&
                                        values.exercises.map((exercise, index) => (
                                            <div className='relative' key={index}>
                                                <div className='grid grid-cols-2 mb-10 gap-10'>
                                                    <div className=''>
                                                        <label
                                                            htmlFor={`exercises.${index}.name`}
                                                            className='block mr-2'>
                                                            Name
                                                        </label>
                                                        <Field
                                                            name={`exercises.${index}.name`}
                                                            placeholder='pressups'
                                                            type='text'
                                                            className='text-purple-900 pl-2 pr-2 rounded-3xl w-full'
                                                        />
                                                    </div>
                                                    <div className=''>
                                                        <label
                                                            htmlFor={`exercises.${index}.time`}
                                                            className='block mr-2'>
                                                            Time (seconds)
                                                        </label>
                                                        <Field
                                                            name={`exercises.${index}.time`}
                                                            placeholder='30'
                                                            type='number'
                                                            className='text-purple-900 pl-2 pr-2 rounded-3xl w-full'
                                                        />
                                                    </div>
                                                </div>

                                                <div className='mb-5 absolute right-2 top-0'>
                                                    <button
                                                        type='button'
                                                        className='secondary '
                                                        onClick={() => remove(index)}>
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type='button'
                                        className='secondary font-heading text2xl w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple'
                                        onClick={() => push({ name: '', time: 0, id: `${values.exercises.length}` })}>
                                        + Exercise
                                    </button>
                                </div>
                            )}
                        </FieldArray>

                        {values.img && values.exercises.length > 1 && (
                            <div>
                                <h2 className='font-heading mt-10'>PREVIEW</h2>
                                <div className='grid grid-cols-2'>
                                    <Card
                                        time={'10 MINS'}
                                        title={values.title}
                                        intensity={values.intensity}
                                        img={values.img}
                                        id={'123'}
                                    />
                                    <Info title={values.title} exercises={values.exercises} button={false} />
                                </div>
                            </div>
                        )}

                        <div className='mt-10 text-center'>
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className=' font-heading text2xl w-48 pt-3 pb-3 rounded-3xl bg-gradient-to-br from-hiit-gradient-grey to-hiit-gradient-purple'>
                                SUBMIT
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateWorkoutForm;
