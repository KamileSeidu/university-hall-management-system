import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import classes from "./StudentDetails.module.css";

function StudentDetails({
  studentId,
  roomNumber,
  bedNumber,
  firstName,
  lastName,
  programOfStudy,
  registeredAt,
}) {
  const dateOnly = registeredAt.slice(0, 10);
  return (
    <li className={classes["student-info"]}>
      <h2>{studentId}</h2>
      <h3>{`${firstName} ${lastName}`}</h3>
      <h4>{`${roomNumber} - ${bedNumber}`}</h4>
      <h5>{programOfStudy}</h5>
      <h5>{dateOnly}</h5>
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
