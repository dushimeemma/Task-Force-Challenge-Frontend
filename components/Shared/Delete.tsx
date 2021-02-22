import { useState } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import Modal from '@material-ui/core/Modal';

import Icon from './Icon';
import { deleteOne } from '../../store/actions/todos';

interface deleteProps {
  open: boolean;
  handleOpenDelete: any;
  titleToDelete?: string;
}

const Delete = ({ open, handleOpenDelete, titleToDelete }: deleteProps) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const handleDelete = () => {
    dispatch(deleteOne(titleToDelete));
    setMessage('Success');
    setTimeout(() => {
      setMessage('');
      Router.reload();
    }, 5000);
  };

  return (
    <>
      <button onClick={handleOpenDelete}>
        <Icon title='cross.jpg' />
      </button>
      <Modal
        open={open}
        onClose={handleOpenDelete}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div className='w-200 bg-white m-auto p-5 rounded-lg'>
          {message && (
            <div className='text-green-300 text-center'>{message}</div>
          )}
          <h3 className='capitalize font-bold my-5'>Are you sure?</h3>
          <p className='font-light'>
            if you delete this task you wont be able to reverse this action
          </p>
          <button
            className='uppercase text-light-light bg-dark-dark px-5 py-2 mx-3 my-2 rounded-lg'
            onClick={handleDelete}
          >
            DELETE TASK
          </button>
          <button
            className='uppercase text-dark-dark px-5 py-2 mx-5 my-2 rounded-lg'
            onClick={handleOpenDelete}
          >
            CANCEL
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Delete;
