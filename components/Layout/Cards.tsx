import Card from '../Shared/Card';

interface cardsProps {
  count?: number;
}

const Cards = ({ count = 0 }: cardsProps) => {
  return (
    <div className='h-40 bg-light-light w-full grid grid-cols-5 p-5'>
      <Card title='Total tasks' count={count} classes='ml-5' />
      <Card title='active tasks' count={count} />
      <Card title='tasks done' count={count} />
      <Card title='active high priority' count={count} />
      <Card title='closed high priority' count={count} classes='-mr-2' />
    </div>
  );
};
export default Cards;
