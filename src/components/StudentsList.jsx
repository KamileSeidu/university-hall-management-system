import StudentDetails from "./StudentDetails";
import classes from "./StudentsList.module.css";
import Search from "../components/Search";
import profilePlus from "../assets/profile-plus.svg";

import Card from "./UI/Card";
import Button from "./UI/Button";

function StudentsList() {
  return (
    <Card>
      <div className={classes["function-grp"]}>
        <Search />
        <Button>
          {" "}
          <img src={profilePlus} alt="" />
          Add New
        </Button>
      </div>
      <header className={classes.header}>
        <h1>ID Number</h1>
        <h1>Full Name</h1>
        <h1>Room No.</h1>
        <h1>Program</h1>
        <h1>Action</h1>
      </header>
      <ul className={classes["student-list"]}>
        <StudentDetails />
        <StudentDetails />
      </ul>
    </Card>
  );
}

export default StudentsList;
