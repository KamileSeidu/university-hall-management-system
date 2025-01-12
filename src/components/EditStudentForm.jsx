import Button from "./UI/Button";
import classes from "./StudentForm.module.css";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";

function EditStudentForm({ student }) {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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
                defaultValue={student ? student.phoneNumber : ""}
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
                defaultValue={student ? student.firstName : ""}
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
                defaultValue={student ? student.lastName : ""}
                required
              />
              {actionData?.errors?.lastName && (
                <p className={classes.error}>{actionData.errors.lastName}</p>
              )}
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
                defaultValue={student ? student.middleName : ""}
              />
              {actionData?.errors?.middleName && (
                <p className={classes.error}>{actionData.errors.middleName}</p>
              )}
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
              {actionData?.errors?.programOfStudy && (
                <p className={classes.error}>
                  {actionData.errors.programOfStudy}
                </p>
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
                defaultValue={student ? student.roomNumber : ""}
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
                defaultValue={student ? student.bedNumber : ""}
                required
              />
              {actionData?.errors?.bedNumber && (
                <p className={classes.error}>{actionData.errors.bedNumber}</p>
              )}
            </div>
          </div>
          {/* <div className={classes["input-group"]}>
            <label htmlFor="program">Program</label>
            <input
              type="text"
              id="program"
              name="programOfStudy"
              placeholder="Bsc Mathematical Sciences"
              defaultValue={student ? student.programOfStudy : ""}
              required
            />
            {actionData?.errors?.programOfStudy && (
              <p className={classes.error}>
                {actionData.errors.programOfStudy}
              </p>
            )}
          </div> */}
          <div className={classes["btn-grp"]}>
            <Button size="btn--block">
              {isSubmitting ? "Updating..." : "Update Record"}
            </Button>
            <Button
              onClick={closeModalHandler}
              type="btn--secondary"
              size="btn--block"
            >
              Cancel
            </Button>
            {actionData?.error && (
              <p className={`${classes.error} ${classes["error-margin"]}`}>
                {actionData.error}
              </p>
            )}
          </div>
        </Form>
      </div>
    </>
  );
}

export default EditStudentForm;
