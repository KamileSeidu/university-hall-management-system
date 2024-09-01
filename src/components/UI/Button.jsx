import classes from "./Button.module.css";

function Button({
  type = "btn--primary",
  size = "btn-auto",
  children,
  onClick,
}) {
  const classNames = `${classes.btn} ${classes[type]} ${classes[size]}`;
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
