interface cardProps {
  classes?: string;
  count: number;
  title: string;
}

const Card = ({ title, count, classes }: cardProps) => {
  return (
    <div
      className={`w-64 h-28 bg-white border-opacity-10 border-2 rounded-md flex items-center cursor-pointer ${classes}`}
    >
      <div className='m-5'>
        <h3 className='text-success-default font-extrabold'>{count}</h3>
        <h3 className='font-bold capitalize'>{title}</h3>
      </div>
    </div>
  );
};
export default Card;
