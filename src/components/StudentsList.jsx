import StudentDetails from "./StudentDetails";
import classes from "./StudentsList.module.css";
import Search from "../components/Search";
import profilePlus from "../assets/profile-plus.svg";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { Outlet } from "react-router-dom";

function StudentsList({ students }) {
  const studentsList = students?.length ? (
    students.map((student) => <StudentDetails key={student._id} {...student} />)
  ) : (
    <p>No students available</p>
  );

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
        <h1>Date of Registration</h1>
        <h1>Action</h1>
      </header>
      <ul className={classes["student-list"]}>{studentsList}</ul>
      <Outlet />
    </Card>
  );
}

export default StudentsList;
