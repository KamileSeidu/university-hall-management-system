import Button from "./UI/Button";
import classes from "./StudentForm.module.css";
import upload from "../assets/upload.svg";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { useState, useRef } from "react";

function EditStudentForm({ student }) {
  const actionData = useActionData();
  const navigation = useNavigation();
  const canvasRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const closeModalHandler = () => {
    navigate(-1);
  };

  const resizeImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");

          // Make it a square using the smaller dimension
          const size = Math.min(img.width, img.height);
          canvas.width = size;
          canvas.height = size;

          // Calculate centering
          const offsetX = (img.width - size) / 2;
          const offsetY = (img.height - size) / 2;

          // Draw the centered square image
          ctx.drawImage(img, offsetX, offsetY, size, size, 0, 0, size, size);

          // Convert to blob
          canvas.toBlob(
            (blob) => {
              resolve(new File([blob], file.name, { type: "image/jpeg" }));
            },
            "image/jpeg",
            0.8
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      const resizedFile = await resizeImage(file);

      // Create a new FileList-like object with the resized image
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(resizedFile);

      // Update the file input with the resized image
      event.target.files = dataTransfer.files;
    }
  };

  return (
    <>
      <div>
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
              onChange={handleImageChange}
            />
            {actionData?.errors?.photoFileName && (
              <p className={classes.error}>{actionData.errors.photoFileName}</p>
            )}
            {selectedImage && (
              <div className={classes.preview}>
                <img
                  src={selectedImage}
                  alt="Preview"
                  style={{ maxWidth: "150px", maxHeight: "150px" }}
                />
              </div>
            )}
          </div>

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
          </div>
          {actionData?.error && (
            <p className={`${classes.error} ${classes["error-margin"]}`}>
              {actionData.error}
            </p>
          )}
        </Form>
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    </>
  );
}

export default EditStudentForm;
