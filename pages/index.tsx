import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import Button from '../components/Shared/Button';
import Delete from '../components/Shared/Delete';
import Layout from '../components/Layout/Layout';
import NewTask from '../components/Layout/NewTask';
import SharedMenu from '../components/Shared/SharedMenu';
import UpdateTask from '../components/Layout/UpdateTask';
import { getAll } from '../store/actions/todos';

const Tasks = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [titleToDelete, setTitleToDelete] = useState('');
  const state = useSelector((state) => state.todos);

  const todos = state.todos;

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickAdd = () => {
    setOpen(!open);
  };
  const handleOpenDelete = (title) => {
    setTitleToDelete(title);
    setIsOpenDelete(!isOpenDelete);
  };
  const handleOpenUpdate = (title) => {
    localStorage.setItem('title', title);
    setIsOpenUpdate(!isOpenUpdate);
  };
  const handleHandleOpenSingleTopic = (slug) => {
    Router.push(`/task`);
    localStorage.setItem('slug', slug);
    setTimeout(() => {
      Router.reload();
    }, 500);
  };

  return (
    <Layout>
      {todos.length === 0 && (
        <SharedMenu
          classes='flex justify-center items-center h-60vh'
          onClick={handleClick}
          onClickAdd={handleClickAdd}
          open={isOpen}
          isOpen={open}
        >
          <div className='text-center'>
            <h3 className='uppercase font-bold'>nothing here</h3>
            <h3 className='font-light'>Just like your crush's replies</h3>
            <NewTask
              onClickAdd={handleClickAdd}
              isOpen={open}
              title='START WITH NEW TASK'
              classes='mt-5 bg-dark-default text-light-light px-5 py-3 rounded-lg'
            />
          </div>
        </SharedMenu>
      )}
      {todos.length > 0 && (
        <SharedMenu
          count={todos.length}
          classes='overflow-y-auto border-r-dark-light h-60vh'
          onClick={handleClick}
          onClickAdd={handleClickAdd}
          open={isOpen}
          isOpen={open}
        >
          <div className='w-11/12 mx-auto'>
            <h3 className='font-bold mt-5'>{todos.length} Tasks</h3>

            <table className='w-full mt-5'>
              <tbody className='py-5'>
                {todos.length > 0
                  ? todos.map((todo, index) => (
                      <tr>
                        <td className='font-bold'>{index + 1}</td>
                        <td className='font-bold'>
                          <a
                            onClick={() =>
                              handleHandleOpenSingleTopic(todo.title)
                            }
                            className='cursor-pointer'
                          >
                            {todo.title}
                          </a>
                        </td>
                        <td>
                          <Button
                            title={todo.priority}
                            classes={`rounded-lg ${
                              todo.priority.toLowerCase() === 'low' &&
                              'bg-light-light text-dark-dark'
                            } ${
                              todo.priority.toLowerCase() === 'medium' &&
                              'bg-dark-light text-light-light'
                            }  ${
                              todo.priority.toLowerCase() === 'high' &&
                              'bg-dark-dark text-light-light'
                            }  text-light-light px-5`}
                          />
                        </td>
                        <td>{todo.createdAt}</td>
                        <td>{todo.updatedAt}</td>
                        <td>
                          <UpdateTask
                            isOpen={isOpenUpdate}
                            onClickUpdate={() => handleOpenUpdate(todo.title)}
                          />
                        </td>
                        <td>
                          <Delete
                            open={isOpenDelete}
                            handleOpenDelete={() =>
                              handleOpenDelete(todo.title)
                            }
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
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </SharedMenu>
      )}
    </Layout>
  );
};
export default Tasks;
