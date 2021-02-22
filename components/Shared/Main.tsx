interface mainProps {
  children: any;
  classes?: string;
}

const Main = ({ children, classes }: mainProps) => {
  return <div className={`bg-white w-full ${classes}`}>{children}</div>;
};
export default Main;
