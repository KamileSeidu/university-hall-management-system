import classes from "./AddStudentForm.module.css";
import Card from "../components/UI/Card";
import Button from "./UI/Button";

function AddStudentForm() {
  return (
    <Card>
      <form action="" className={classes.form}>
        <div className={classes.group}>
          <div className={classes["input-group"]}>
            <label htmlFor="idNumber">ID</label>
            <input type="number" id="idNumber" placeholder="220104304" />
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" id="phoneNumber" placeholder="0205254977" />
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes["input-group"]}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="John" />
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Doe" />
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes["input-group"]}>
            <label htmlFor="roomNumber">Room Number</label>
            <input type="text" id="roomNumber" placeholder="J40" />
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="bedNumber">Bed Number</label>
            <input type="number" id="bedNumber" placeholder="1" />
          </div>
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="program">Program</label>
          <input
            type="text"
            id="program"
            placeholder="Bsc Mathematical Sciences"
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="photo">Upload Photo</label>
          <input type="file" id="photo" accept="image/*" capture="camera" />
        </div>
        <Button size="btn--block">Register</Button>
      </form>
    </Card>
  );
}

export default AddStudentForm;
