interface logoProps {
  icon: string;
}

const Logo = ({ icon }: logoProps) => {
  return (
    <div className='flex items-center '>
      <img src={icon} alt='logo' className='w-10 h-10 m-5 cursor-pointer' />
    </div>
  );
};
export default Logo;
