const Button = (props) => {
  return (
    <button
      className={`btn btn-primary shadow ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
