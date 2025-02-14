import AddPersonnelForm from "../../components/service_personnel/AddPersonnelForm";
import classes from "./AddPersonnel.module.css";

function AddPersonnelPage() {
  return (
    <div>
      <div className={classes.nav} />
      <div className={classes["section-group"]}>
        <h1 className={classes.heading}>Create A Personnel Record</h1>
        <AddPersonnelForm />
      </div>
    </div>
  );
}

export default AddPersonnelPage;
