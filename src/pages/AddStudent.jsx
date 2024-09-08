import StudentForm from "../components/StudentForm";

import classes from "./AddStudent.module.css";

function AddStudentPage() {
  return (
    <>
      <h1 className={classes.heading}>Create Student Record</h1>
      <StudentForm />
    </>
  );
}

export default AddStudentPage;
