import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import classes from "./StudentDetails.module.css";
import { Link } from "react-router-dom";

function StudentDetails({
  _id,
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
    <>
      <li className={classes["student-info"]}>
        <Link to={`/students/${_id}`} className={classes.link}>
          <ul className={classes["student-info-list"]}>
            <li>{studentId}</li>
            <li>{`${firstName} ${lastName}`}</li>
            <li>{roomNumber}</li>
            <li>{bedNumber}</li>
            <li>{programOfStudy}</li>
            <li>{dateOnly}</li>
          </ul>
        </Link>
        <p className={classes.action}>
          <button>
            <img src={editIcon} alt="edit-icon" />
          </button>
          <button>
            <img src={deleteIcon} alt="delete-icon" />
          </button>
        </p>
      </li>
    </>
  );
}

export default StudentDetails;
