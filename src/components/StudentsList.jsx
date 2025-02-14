import StudentDetails from "./StudentDetails";
import classes from "./StudentsList.module.css";
import Search from "./Search";
import profilePlus from "../assets/profile-plus.svg";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function StudentsList({ students, fetchStudents }) {
  const [searchParam, setSearchParam] = useState("");

  // console.log(fetchStudents);

  const filteredStudents = students.filter((item) => {
    const isSignedInSearch =
      searchParam.toLowerCase() === "in"
        ? true
        : searchParam.toLowerCase() === "out"
        ? false
        : null;

    return (
      item.roomNumber.toUpperCase() === searchParam ||
      item.studentId === searchParam ||
      item.firstName.toLowerCase().includes(searchParam.toLowerCase()) ||
      item.phoneNumber === searchParam ||
      item.lastName.toLowerCase().includes(searchParam.toLowerCase()) ||
      (isSignedInSearch !== null && item.isSignedIn === isSignedInSearch)
    );
  });

  let studentsData = searchParam.trim() ? filteredStudents : students;

  const searchData = (data) => {
    setSearchParam(data);
  };

  const navigate = useNavigate();
  const handleAddStudent = () => {
    navigate("/students/addStudent");
  };

  const studentsList = studentsData?.length ? (
    studentsData.map((student) => (
      <StudentDetails
        key={student._id}
        {...student}
        fetchStudents={fetchStudents}
      />
    ))
  ) : (
    <p>No students available</p>
  );

  return (
    <Card>
      <div className={classes["function-grp"]}>
        <Search onSearchParam={searchData} />
        <Button onClick={handleAddStudent}>
          {" "}
          <img src={profilePlus} alt="" />
          Add New
        </Button>
      </div>
      <header className={classes.header}>
        <h1>ID Number</h1>
        <h1>Full Name</h1>
        <h1>Room / Bed No.</h1>
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
