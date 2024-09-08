import classes from "./Students.module.css";
import StudentProfile from "../components/StudentProfile";
import StudentsList from "../components/StudentsList";

function StudentsPage() {
  return (
    <section className={`${classes.grid} ${classes["grid-1x2"]}`}>
      <StudentsList />
      <StudentProfile />
    </section>
  );
}

export default StudentsPage;
