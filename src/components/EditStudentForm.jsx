import Button from "./UI/Button";
import classes from "./StudentForm.module.css";
import { Form, useNavigate } from "react-router-dom";

function EditStudentForm({ student }) {
  const navigate = useNavigate();
  const closeModalHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <h1 className={classes.heading}>Edit Student Record</h1>
        <Form
          method="patch"
          encType="multipart/form-data"
          className={classes.form}
        >
          <div className={classes.group}>
            <div className={classes["input-group"]}>
              <label htmlFor="idNumber">ID Number</label>
              <input
                type="number"
                id="studentId"
                name="studentId"
                placeholder="220104304"
                defaultValue={student ? student.studentId : ""}
                required
              />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="0205254977"
                defaultValue={student ? student.phoneNumber : ""}
                required
              />
            </div>
          </div>
          <div className={classes.group}>
            <div className={classes["input-group"]}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                defaultValue={student ? student.firstName : ""}
                required
              />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                defaultValue={student ? student.lastName : ""}
                required
              />
            </div>
          </div>
          <div className={classes.group}>
            <div className={classes["input-group"]}>
              <label htmlFor="roomNumber">Room Number</label>
              <input
                type="text"
                id="roomNumber"
                name="roomNumber"
                placeholder="J40"
                defaultValue={student ? student.roomNumber : ""}
                required
              />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="bedNumber">Bed Number</label>
              <input
                type="number"
                id="bedNumber"
                name="bedNumber"
                placeholder="1"
                defaultValue={student ? student.bedNumber : ""}
                required
              />
            </div>
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="program">Program</label>
            <input
              type="text"
              id="program"
              name="programOfStudy"
              placeholder="Bsc Mathematical Sciences"
              defaultValue={student ? student.programOfStudy : ""}
              required
            />
          </div>
          <div className={classes["btn-grp"]}>
            <Button size="btn--block">Update Record</Button>
            <Button
              onClick={closeModalHandler}
              type="btn--secondary"
              size="btn--block"
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default EditStudentForm;
