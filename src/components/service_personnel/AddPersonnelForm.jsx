import Button from "../UI/Button";
import classes from "./AddPersonnelForm.module.css";
import upload from "../../assets/upload.svg";
import { Form } from "react-router-dom";

function PersonnelForm() {
  return (
    <div>
      <Form className={classes.form}>
        <div className={classes.group}>
          <div className={classes["input-group"]}>
            <label htmlFor="studentId">ID Number</label>
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
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              id="program"
              name="middleName"
              placeholder="Kwame"
            />
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
        <div className={classes["file-upload-container"]}>
          <label htmlFor="photo" className={classes["file-upload-button"]}>
            <img className={classes["upload-icon"]} src={upload} alt="" />
            <span>Upload Photo</span>
          </label>
          <input
            className={classes["file-input"]}
            type="file"
            id="photo"
            name="photoFileName"
            accept="image/*"
            capture="camera"
            // onChange={handleImageChange}
            required
          />
        </div>

        {/* <div className={classes["input-group"]}>
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photoFileName"
            accept="image/*"
            capture="camera"
            // onChange={handleImageChange}
            required
          />
        </div> */}
        <Button size={"btn--block"}>Register</Button>
      </Form>
    </div>
  );
}

export default PersonnelForm;
