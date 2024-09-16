import Students from "./pages/Students";
import MainNavigation from "./components/MainNavigation";
import classes from "./App.module.css";
// import StudentForm from "./components/StudentForm";

function App() {
  return (
    <>
      {/* <StudentForm /> */}
      <section className={classes.app}>
        <MainNavigation />
        <Students />
      </section>
    </>
  );
}

export default App;
