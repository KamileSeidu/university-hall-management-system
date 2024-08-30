import classes from "./LoginForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

function LoginForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes["input-group"]}>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input className={classes.input} type="text" id="username" />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input className={classes.input} type="text" id="password" />
        </div>
        <Button>Login</Button>
      </form>
    </Card>
  );
}

export default LoginForm;
