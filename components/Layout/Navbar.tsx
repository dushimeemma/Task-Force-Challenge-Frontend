import Logo from '../Shared/Logo';
import Menu from '../Shared/Menu';
import Search from '../Shared/Search';
import NewTask from '../Layout/NewTask';

interface navProps {
  onClick?: any;
  open?: boolean;
  isOpen?: boolean;
  onClickAdd?: any;
}

const Navs = ({ onClick, open, isOpen, onClickAdd }: navProps) => {
  return (
    <div className='h-20 bg-white w-full grid grid-cols-2 gap-4'>
      <Logo icon='Assets_IB_logo.png' />
      <div className='flex items-center'>
        <Search />
        <Menu onClick={onClick} open={open} />
        <NewTask onClickAdd={onClickAdd} isOpen={isOpen} title='NEW TASK' />
      </div>
    </div>
  );
};
export default Navs;
