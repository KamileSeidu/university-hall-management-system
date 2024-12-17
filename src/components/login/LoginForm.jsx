import classes from "./LoginForm.module.css";
import Button from "../UI/Button";
import { Form } from "react-router-dom";

function LoginForm() {
  return (
    <div className={classes.card}>
      <Form method="post" className={classes.form}>
        <div className={classes["input-group"]}>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input
            className={classes.input}
            type="email"
            id="email"
            name="email"
            placeholder="Enter an authorized email"
            required
          />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            className={classes.input}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <Button>Login</Button>
      </Form>
    </div>
  );
}

export default LoginForm;
