import classes from "./Button.module.css";

function Button({ children }) {
  return (
    <button className={`${classes.btn} ${classes["btn--primary"]}`}>
      {children}
    </button>
  );
}

export default Button;
