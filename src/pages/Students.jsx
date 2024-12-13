import classes from "./Students.module.css";
import StudentsList from "../components/StudentsList";
import { useLoaderData } from "react-router-dom";

function StudentsPage() {
  const students = useLoaderData();

  return (
    <section className={`${classes.grid} `}>
      <StudentsList students={students} />
    </section>
  );
}

export default StudentsPage;
