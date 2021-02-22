interface iconProps {
  title: string;
  classes?: string;
  onClick?: any;
}

const Icon = ({ title, classes, onClick }: iconProps) => {
  return (
    <button
      className={`w-5 h-5 rounded-md border-2 ${classes}`}
      onClick={onClick}
    >
      <img src={title} alt='icon' className='w-full' />
    </button>
  );
};
export default Icon;
