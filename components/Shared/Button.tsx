interface buttonProps {
  classes?: string;
  title: string;
}

const Button = ({ classes, title }: buttonProps) => {
  return <button className={classes}>{title}</button>;
};
export default Button;
