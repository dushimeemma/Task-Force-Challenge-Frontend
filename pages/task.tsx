import { useEffect, useState } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Delete from '../components/Shared/Delete';
import Layout from '../components/Layout/Layout';
import Logo from '../components/Shared/Logo';
import Icon from '../components/Shared/Icon';
import Main from '../components/Shared/Main';
import Button from '../components/Shared/Button';
import { getOne } from '../store/actions/todos';

const Task = () => {
  const dispatch = useDispatch();
  const [slug, setSlug] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [titleToDelete, setTitleToDelete] = useState('');
  useEffect(() => {
    const slug = localStorage.getItem('slug');
    setSlug(slug);
    dispatch(getOne(slug));
  }, []);
  const state = useSelector((state) => state.todos);

  const { todo } = state;

  const handleOpen = (title) => {
    setIsOpen(!isOpen);
    setTitleToDelete(title);
  };

  const handleBack = () => {
    Router.push('/');
    localStorage.removeItem('slug');
    setTimeout(() => {
      Router.reload();
    }, 500);
  };

  return (
    <Layout>
      <div className='mx-auto w-4/5 bg-white z-10 -m-36 border-opacity-10 border-2'>
        <div className='h-20 bg-white w-full grid grid-cols-2 gap-4'>
          <Logo icon='Assets_IB_logo.png' />
          <div className='w-full'>
            <Icon
              title='cross.jpg'
              classes='w-12 h-12 float-right m-5'
              onClick={handleBack}
            />
          </div>
        </div>
        <div className='h-80 bg-light-light w-full grid grid-cols-5 p-5 background'></div>
        <Main classes='h-23 p-5'>
          <table className='w-full mt-5'>
            <tbody>
              <tr>
                <td>
                  <Button
                    title={todo.priority}
                    classes={`rounded-lg bg-dark-dark text-light-light px-5`}
                  />
                </td>
                <td>{todo.createdAt}</td>
                <td>{todo.updatedAt}</td>
                <td>
                  <Icon title='pen.jpg' />
                </td>
                <td>
                  <Delete
                    open={isOpen}
                    handleOpenDelete={() => handleOpen(todo.title)}
                    titleToDelete={titleToDelete}
                  />
                </td>
                <td>
                  <Button
                    title='done'
                    classes='uppercase border-2 border-dark-dark px-3 rounded-md'
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <h1 className='font-bold my-5 text-2xl'>{todo.title}</h1>
          <h3 className='font-bold mb-5'>Description</h3>
          <p className='font-light'>{todo.description}</p>
        </Main>
      </div>
    </Layout>
  );
};
export default Task;
