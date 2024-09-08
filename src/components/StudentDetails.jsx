import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import classes from "./StudentDetails.module.css";

function StudentDetails() {
  return (
    <li className={classes["student-info"]}>
      <h2>22014129</h2>
      <h3>Kamile Seidu</h3>
      <h4>J40 - 1</h4>
      <h5>Bsc Mathematical Science</h5>
      <p className={classes.action}>
        <button>
          <img src={editIcon} alt="edit-icon" />
        </button>
        <button>
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </p>
    </li>
  );
}

export default StudentDetails;
