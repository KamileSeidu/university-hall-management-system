import StudentForm from "../components/StudentForm";

import classes from "./AddStudent.module.css";

function AddStudentPage() {
  return (
    <div>
      <div className={classes.nav} />
      <div className={classes["section-group"]}>
        <h1 className={classes.heading}>Create Student Record</h1>
        <StudentForm />
      </div>
    </div>
  );
}

export default AddStudentPage;
