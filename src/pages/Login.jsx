import classes from "./Login.module.css";
import LoginForm from "../components/login/LoginForm";
import uniIcon from "../assets/university.svg";

function LoginPage() {
  return (
    <section className={classes["login-section"]}>
      <header className={classes.header}>
        <h1>
          <img src={uniIcon} alt="university icon" />
          Commonwealth Hall Management Portal
        </h1>
        <h2>Admin Login</h2>
      </header>

      <LoginForm />

      <footer className={classes.footer}>
        <p>© 2024 Commonwealth Hall, All Rights Reserved.</p>
      </footer>
    </section>
  );
}

export default LoginPage;
