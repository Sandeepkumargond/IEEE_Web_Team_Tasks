const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`gradient-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;