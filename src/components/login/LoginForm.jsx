import classes from "./LoginForm.module.css";
import Button from "../UI/Button";
import { Form, useActionData, useNavigation } from "react-router-dom";

function LoginForm() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
        {actionData && actionData.error && (
          <p className={classes.error}>{actionData.error}</p>
        )}

        <Button>{isSubmitting ? "Logging in...." : "Login"}</Button>
      </Form>
    </div>
  );
}

export default LoginForm;
