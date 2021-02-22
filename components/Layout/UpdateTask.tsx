import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Modal from '@material-ui/core/Modal';

import Input from '../Shared/Input';

import Icon from '../Shared/Icon';
import { getOne, updateOne } from '../../store/actions/todos';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(14).label('Title'),
  description: Yup.string().required().min(240).label('Description'),
  priority: Yup.string().required().min(2).label('Priority'),
});

interface updateProps {
  isOpen: boolean;
  onClickUpdate: any;
}

const UpdateTask = ({ isOpen, onClickUpdate }: updateProps) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const slug = localStorage.getItem('title');

  const state = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getOne(slug));
  }, []);

  const { todo } = state;

  let title;
  let description;
  let priority;

  if (typeof todo !== 'undefined' && Object.keys(todo).length > 0) {
    title = todo.title;
    description = todo.description;
    priority = todo.priority;
  }

  const handleUpdate = (values) => {
    dispatch(updateOne(slug, values));
    setMessage('Success');
    setTimeout(() => {
      setMessage('');
      Router.reload();
    }, 5000);
  };

  return (
    <>
      <Icon title='pen.jpg' onClick={onClickUpdate} />
      <Modal
        open={isOpen}
        onClose={onClickUpdate}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Formik
          initialValues={{ title, description, priority }}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              className='w-1/2 bg-white mx-auto h-80vh my-8 p-5 rounded-lg'
              onSubmit={handleSubmit}
            >
              <h1 className='font-bold m-5 text-3xl'>Update Task</h1>
              {message && (
                <div className='text-green-300 text-center'>{message}</div>
              )}
              <div className='font-light m-5'>
                <label className='capitalize'>Add Image</label>
                <div className='w-60 h-24 border-2 rounded-lg flex items-center justify-center mt-2 mb-5'>
                  <label className='text-gray-400'>Tap to add Image</label>
                  <input type='file' name='' className='w-full h-full' hidden />
                </div>
                <label className='my-5'>Title</label>
                <Input
                  placeholder='Task Title (140characters)'
                  name='title'
                  type='text'
                  value={values.title}
                  onChange={handleChange('title')}
                  onBlur={handleBlur('title')}
                  classes='bg-light-light'
                />
                {errors.title && touched.title && (
                  <div className='text-red-300'>{errors.title}</div>
                )}
                <label className='my-5'>Description</label>
                <Input
                  placeholder='240 characters'
                  name='description'
                  type='text'
                  value={values.description}
                  onChange={handleChange('description')}
                  onBlur={handleBlur('description')}
                  classes='h-32 bg-light-light'
                />
                {errors.description && touched.description && (
                  <div className='text-red-300'>{errors.description}</div>
                )}
                <label className='my-5'>Priority</label>
                <div className='w-full border-2  rounded-md mt-2 mb-5'>
                  <select
                    name='priority'
                    onChange={handleChange('priority')}
                    onBlur={handleBlur('priority')}
                    className='w-full h-full p-2 bg-light-light'
                    value={priority}
                  >
                    <option>CHOOSE</option>
                    <option value='LOW'>LOW</option>
                    <option value='MEDIUM'>MEDIUM</option>
                    <option value='HIGH'>HIGH</option>
                  </select>
                </div>
                {errors.priority && touched.priority && (
                  <div className='text-red-300'>{errors.priority}</div>
                )}
              </div>
              <button
                type='submit'
                className='bg-dark-dark text-light-light px-5 py-2 m-5 rounded-lg float-right'
              >
                UPDATE TASK
              </button>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
export default UpdateTask;
