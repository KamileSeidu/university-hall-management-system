import AddStudentForm from "../components/AddStudentForm";

import classes from "./AddStudent.module.css";

function AddStudentPage() {
  return (
    <>
      <h1 className={classes.heading}>Create Student Record</h1>
      <AddStudentForm />
    </>
  );
}

export default AddStudentPage;
