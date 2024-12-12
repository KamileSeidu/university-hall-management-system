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

export async function loader() {
  const response = await fetch("http://localhost:3000/api/students");

  if (!response.ok) {
    //
  } else {
    const resData = await response.json();
    return resData;
  }
}
