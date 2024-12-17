import { Form } from "react-router-dom";
import classes from "./StudentForm.module.css";
import Button from "./UI/Button";

function StudentForm() {
  return (
    <div className={classes.card}>
      <Form
        method="post"
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
            required
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photoFileName"
            accept="image/*"
            capture="camera"
            required
          />
        </div>
        <Button size="btn--block">Register</Button>
      </Form>
    </div>
  );
}

export default StudentForm;
