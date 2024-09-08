import Students from "./pages/Students";
import MainNavigation from "./components/MainNavigation";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <section className={classes.app}>
        <MainNavigation />
        <Students />
      </section>
    </>
  );
}

export default App;
