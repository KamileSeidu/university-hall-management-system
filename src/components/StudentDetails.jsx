import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import classes from "./StudentDetails.module.css";
import { Link, useNavigate, useSubmit } from "react-router-dom";

function StudentDetails({
  _id,
  studentId,
  roomNumber,
  bedNumber,
  firstName,
  middleName,
  lastName,
  programOfStudy,
  registeredAt,
}) {
  const dateOnly = registeredAt.slice(0, 10);
  const submit = useSubmit();
  const navigate = useNavigate();

  function handleEdithandler() {
    navigate(`/students/${_id}/edit`);
  }

  const middleNameAbbreviation = middleName ? middleName.slice(0, 1) : "";

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure you want to delete?");

    if (proceed) {
      submit(null, { method: "DELETE", action: `/students/${_id}` });
    }
  }
  return (
    <>
      <li className={classes["student-info"]}>
        <Link to={`/students/${_id}`} className={classes.link}>
          <ul className={classes["student-info-list"]}>
            <li>{studentId}</li>
            <li>{`${firstName} ${middleNameAbbreviation}${
              middleName ? "." : ""
            } ${lastName}`}</li>
            <li>{roomNumber}</li>
            <li>{bedNumber}</li>
            <li>{programOfStudy}</li>
            <li>{dateOnly}</li>
          </ul>
        </Link>
        <p className={classes.action}>
          <button onClick={handleEdithandler}>
            <img src={editIcon} alt="edit-icon" />
          </button>
          <button onClick={startDeleteHandler}>
            <img src={deleteIcon} alt="delete-icon" />
          </button>
        </p>
      </li>
    </>
  );
}

export default StudentDetails;
