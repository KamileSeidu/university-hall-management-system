import { Form, useActionData, useNavigation } from "react-router-dom";
import classes from "./StudentForm.module.css";
import Button from "./UI/Button";

function StudentForm() {
  const actionData = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className={classes.card}>
      <Form
        method="post"
        encType="multipart/form-data"
        className={classes.form}
      >
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
            {actionData?.errors?.studentId && (
              <p className={classes.error}>{actionData.errors.studentId}</p>
            )}
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
            {actionData?.errors?.phoneNumber && (
              <p className={classes.error}>{actionData.errors.phoneNumber}</p>
            )}
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
            {actionData?.errors?.firstName && (
              <p className={classes.error}>{actionData.errors.firstName}</p>
            )}
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
            {actionData?.errors?.lastName && (
              <p className={classes.error}>{actionData.errors.lastName}</p>
            )}
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
            {actionData?.errors?.roomNumber && (
              <p className={classes.error}>{actionData.errors.roomNumber}</p>
            )}
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
            {actionData?.errors?.bedNumber && (
              <p className={classes.error}>{actionData.errors.bedNumber}</p>
            )}
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
          {actionData?.errors?.programOfStudy && (
            <p className={classes.error}>{actionData.errors.programOfStudy}</p>
          )}
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
          {actionData?.errors?.photoFileName && (
            <p className={classes.error}>{actionData.errors.photoFileName}</p>
          )}
        </div>
        <Button size={"btn--block"}>
          {isSubmitting ? "Registering...." : "Register"}
        </Button>
        {actionData?.error && (
          <p className={`${classes.error} ${classes["error-margin"]}`}>
            {actionData.error}
          </p>
        )}
      </Form>
    </div>
  );
}

export default StudentForm;
