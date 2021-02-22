import Cards from '../Layout/Cards';
import Main from '../Shared/Main';
import Navs from '../Layout/Navbar';

interface sharedMenuProps {
  children: any;
  count?: number;
  classes?: string;
  onClick?: any;
  open?: boolean;
  isOpen?: boolean;
  onClickAdd?: any;
}

const SharedMenu = ({
  children,
  count,
  classes,
  onClick,
  open,
  isOpen,
  onClickAdd,
}: sharedMenuProps) => {
  return (
    <div className='mx-auto w-4/5 bg-white z-10 -m-36 border-opacity-10 border-2'>
      <Navs
        onClick={onClick}
        open={open}
        isOpen={isOpen}
        onClickAdd={onClickAdd}
      />
      <Cards count={count} />
      <Main classes={classes}>{children}</Main>
    </div>
  );
};
export default SharedMenu;
