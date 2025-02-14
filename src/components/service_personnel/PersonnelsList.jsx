import Card from "../UI/Card";
import Button from "../UI/Button";
import Search from "../Search";
import profilePlus from "../../assets/profile-plus.svg";
import classes from "./PersonnelsList.module.css";
import { Outlet, useNavigate } from "react-router-dom";

function PersonnelsList() {
  const navigate = useNavigate();
  const handleAddPersonnel = () => {
    navigate("/nss-personnels/addPersonnel");
  };

  return (
    <Card>
      <div className={classes["function-grp"]}>
        <Search /*onSearchParam={searchData}*/ />
        <Button onClick={handleAddPersonnel}>
          {" "}
          <img src={profilePlus} alt="" />
          Add New
        </Button>
      </div>
      <header className={classes.header}>
        <h1>ID Number</h1>
        <h1>Full Name</h1>
        <h1>Room / Bed No.</h1>
        <h1>Place of Work</h1>
        <h1>Date of Registration</h1>
        <h1>Action</h1>
      </header>
      <ul className={classes["personnel-list"]}>
        <li>No Personnel available!</li>
        <Outlet />
      </ul>
    </Card>
  );
}

export default PersonnelsList;
