import Button from "./UI/Button";

import classes from "./MainNavigation.module.css";
import logo from "../assets/commonwealth_logo.png";
import dashboard from "../assets/dashboard.svg";
import list from "../assets/list.svg";
import exit from "../assets/exit.svg";

function MainNavigation() {
  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes["nav-logo"]}>
        <img src={logo} alt="commonwealth Hall Logo" />
        <h1>
          Commonwealth <span>Hall</span>
        </h1>
      </div>
      <ul className={classes["nav-list"]}>
        <li className={`${classes["nav-item"]} ${classes.active}`}>
          <a href="">
            <img
              src={dashboard}
              className={classes["nav-icon"]}
              alt="dashboard-icon"
            />{" "}
            Dashboard
          </a>
        </li>
        <li className={`${classes["nav-item"]}`}>
          <a href="">
            <img src={list} className={classes["nav-icon"]} alt="list-icon" />{" "}
            Students
          </a>
        </li>
      </ul>
      <span className={classes.logout}>
        <Button size="btn--block">
          <img className={` ${classes["logout-icon"]}`} src={exit} alt="" />
          Logout
        </Button>
      </span>
    </nav>
  );
}

export default MainNavigation;
