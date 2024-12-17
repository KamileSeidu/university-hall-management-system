import Button from "./UI/Button";
import classes from "./MainNavigation.module.css";
import logo from "../assets/CWHLOGO.png";
import dashboard from "../assets/dashboard.svg";
import list from "../assets/list.svg";
import exit from "../assets/exit.svg";
import { NavLink, useSubmit } from "react-router-dom";
import { getAuthToken, getTokenDuration } from "../loaders/getToken";
import { useEffect } from "react";

function MainNavigation() {
  const submit = useSubmit();
  const token = getAuthToken();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
    }
    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  const handleLogout = () => {
    submit(null, { action: "/logout", method: "post" });
  };
  return (
    <nav className={classes["nav-bar"]}>
      <header className={classes["nav-logo"]}>
        <img src={logo} alt="commonwealth Hall Logo" />
      </header>
      <ul className={classes["nav-list"]}>
        <li className={`${classes["nav-item"]} ${classes.active}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <img
              src={dashboard}
              className={classes["nav-icon"]}
              alt="dashboard-icon"
            />
            Dashboard
          </NavLink>
        </li>
        <li className={`${classes["nav-item"]}`}>
          <NavLink
            to={"/students"}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <img src={list} className={classes["nav-icon"]} alt="list-icon" />{" "}
            Students
          </NavLink>
        </li>
      </ul>
      <span className={classes.logout}>
        <Button onClick={handleLogout} size="btn--block">
          <img className={` ${classes["logout-icon"]}`} src={exit} alt="" />
          Logout
        </Button>
      </span>
    </nav>
  );
}

export default MainNavigation;
