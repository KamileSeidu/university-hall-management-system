import StudentForm from "../components/StudentForm";

import classes from "./AddStudent.module.css";

function AddStudentPage() {
  return (
    <>
      <div className={`${classes["section-group"]} ${classes["card"]}`}>
        <h1 className={classes.heading}>Create Student Record</h1>
        <StudentForm />
      </div>
    </>
  );
}

export default AddStudentPage;
