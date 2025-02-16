import { useLoaderData } from "react-router-dom";
import EditStudentForm from "../components/EditStudentForm";
import classes from "./EditStudent.module.css";
import { useState, useEffect } from "react";

function EditStudentPage() {
  const student = useLoaderData();

  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    setStudentData(student);
  }, [student]);

  return (
    <div className={`${classes["section-group"]} ${classes.card}`}>
      <h1 className={classes.heading}>Edit Student Record</h1>
      <EditStudentForm student={studentData} />
    </div>
  );
}

export default EditStudentPage;
