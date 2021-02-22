interface inputProps {
  classes?: string;
  placeholder?: string;
  type: string;
  name: string;
  value?: string;
  onChange?: any;
  onBlur?: any;
}

const Input = ({
  classes,
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
}: inputProps) => {
  return (
    <div
      className={`w-full border-2 bg-light-light rounded-md mt-2 mb-5 ${classes}`}
    >
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='w-full h-full p-2'
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </div>
  );
};
export default Input;
