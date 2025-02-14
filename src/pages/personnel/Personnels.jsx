import PersonnelsList from "../../components/service_personnel/PersonnelsList";
import classes from "./Personnels.module.css";

function PersonnelsPage() {
  return (
    <section className={classes["section-group"]}>
      <PersonnelsList />
    </section>
  );
}

export default PersonnelsPage;
