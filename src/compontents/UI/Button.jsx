const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`bg-primaryColor lg:hover:bg-opacity-[60%] ${className} p-2 font-bold text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
