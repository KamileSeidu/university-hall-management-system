import classes from "./StudentProfile.module.css";
import Button from "./UI/Button";
import thumbs from "../assets/profileIcons/thumbs.svg";
import Icon from "./UI/icon";
import { Link } from "react-router-dom";

function StudentProfile({ student, onClose }) {
  console.log(student);
  console.log(student.photoFileName);
  const fullMiddleName = student.middleName ? student.middleName : "";

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        <Link onClick={onClose} className={classes.link}>
          {" "}
          ✕
        </Link>
        <div className={classes.profile}>
          <img
            className={classes["profile__photo"]}
            src={`http://localhost:3000/uploads/student-photos/${student.photoFileName}`}
            alt="profle-photo"
          />
          <h1>{`${student.firstName} ${fullMiddleName}, ${student.lastName}`}</h1>
          <div className={classes["profile__info"]}>
            <Icon name="barcode" />
            <div>
              <h2>Student ID, Nbr</h2>
              <h3>{student.studentId}</h3>
            </div>
          </div>
          <div className={classes["profile__info"]}>
            <Icon name="house" />
            <div>
              <h2>Room Number</h2>
              <h3>{`${student.roomNumber} - ${student.bedNumber}`}</h3>
            </div>
          </div>
          <div className={classes["profile__info"]}>
            <Icon name="phone" />
            <div>
              <h2>Contact</h2>
              <h3>{student.phoneNumber}</h3>
            </div>
          </div>
          <div className={classes["profile__info"]}>
            <Icon name="book" />
            <div>
              <h2>Program</h2>
              <h3>{student.programOfStudy}</h3>
            </div>
          </div>
        </div>
        <Button size="btn--block" onClick={onClose}>
          V-Mate <img src={thumbs} className={classes.thumbs} alt="thumbs-up" />
        </Button>
      </div>
    </>
  );
}

export default StudentProfile;
