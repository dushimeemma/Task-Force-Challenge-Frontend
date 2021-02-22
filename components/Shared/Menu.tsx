import Modal from '@material-ui/core/Modal';

interface menuProps {
  onClick?: any;
  open?: boolean;
}

const Menu = ({ onClick, open }: menuProps) => {
  return (
    <>
      <button className='bg-white border-2 mx-4 w-20' onClick={onClick}>
        <img src='menu.png' alt='' className='w-full h-full px-5 py-2' />
      </button>
      <Modal
        open={open}
        onClose={onClick}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div className='bg-white position'>
          <h3 className='uppercase font-bold mx-3 py-3'>Filter by priority</h3>
          <hr />
          <h3 className='font-light m-3'>Low priority</h3>
          <h3 className='font-light m-3'>Medium priority</h3>
          <h3 className='font-light m-3'>High priority</h3>
        </div>
      </Modal>
    </>
  );
};
export default Menu;
