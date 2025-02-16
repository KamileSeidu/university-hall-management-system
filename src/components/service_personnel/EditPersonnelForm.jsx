import Button from "../UI/Button";
import classes from "./AddPersonnelForm.module.css";
import upload from "../../assets/upload.svg";
import {
  Form,
  useActionData,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function EditPersonnelForm({ personnel }) {
  //   console.log(personnel);

  //New
  const [isLoading, setIsLoading] = useState(true);

  //New
  const [formData, setFormData] = useState({
    nssNumber: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    middleName: "",
    placeOfWork: "",
    roomNumber: "",
    bedNumber: "",
    photoFileName: "",
  });

  //New
  useEffect(() => {
    // console.log("Personnel in useEffect:", personnel);
    // Check if personnel is an array and has at least one item
    if (personnel && Array.isArray(personnel) && personnel.length > 0) {
      const personnelData = personnel[0]; // Get the first item from the array
      //   console.log("Setting form data with:", personnelData);
      setFormData({
        nssNumber: personnelData.nssNumber || "",
        phoneNumber: personnelData.phoneNumber || "",
        firstName: personnelData.firstName || "",
        lastName: personnelData.lastName || "",
        middleName: personnelData.middleName || "",
        placeOfWork: personnelData.placeOfWork || "",
        roomNumber: personnelData.roomNumber || "",
        bedNumber: personnelData.bedNumber || "",
      });
      setIsLoading(false);
    }
  }, [personnel]);

  const actionData = useActionData();
  const navigation = useNavigation();
  const canvasRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  const closePageHandler = () => {
    navigate(-1);
  };

  // New
  if (isLoading) {
    return <p>Loading...</p>;
  }

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
    <div>
      <Form
        method="patch"
        encType="multipart/form-data"
        className={classes.form}
      >
        <div className={classes.group}>
          <div className={classes["input-group"]}>
            <label htmlFor="nssNumber">Nss Number</label>
            <input
              type="text"
              id="nssNumber"
              name="nssNumber"
              placeholder="NSSGUG5279223"
              value={formData.nssNumber}
              onChange={(e) =>
                setFormData({ ...formData, nssNumber: e.target.value })
              }
              //   defaultValue={personnel?.nssNumber ?? ""}
              required
            />
            {actionData?.errors?.nssNumber && (
              <p className={classes.error}>{actionData.errors.nssNumber}</p>
            )}
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="0205254977"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              //   defaultValue={personnel ? personnel.phoneNumber : ""}
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
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              //   defaultValue={personnel ? personnel.firstName : ""}
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
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              //   defaultValue={personnel ? personnel.lastName : ""}
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
              value={formData.middleName}
              onChange={(e) =>
                setFormData({ ...formData, middleName: e.target.value })
              }
              //   defaultValue={personnel ? personnel.middleName : ""}
            />
            {actionData?.errors?.middleName && (
              <p className={classes.error}>{actionData.errors.middleName}</p>
            )}
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="placeOfWork">Place of Work</label>
            <input
              type="text"
              id="placeOfWork"
              name="placeOfWork"
              placeholder="UG - Medical Center"
              value={formData.placeOfWork}
              onChange={(e) =>
                setFormData({ ...formData, placeOfWork: e.target.value })
              }
              //   defaultValue={personnel ? personnel.placeOfWork : ""}
              required
            />
            {actionData?.errors?.placeOfwork && (
              <p className={classes.error}>{actionData.errors.placeOfwork}</p>
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
              value={formData.roomNumber}
              onChange={(e) =>
                setFormData({ ...formData, roomNumber: e.target.value })
              }
              //   defaultValue={personnel ? personnel.roomNumber : ""}
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
              value={formData.bedNumber}
              onChange={(e) =>
                setFormData({ ...formData, bedNumber: e.target.value })
              }
              //   defaultValue={personnel ? personnel.bedNumber : ""}
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
          <Button size={"btn--block"}>
            {isSubmitting ? "Updating...." : "Update Record"}
          </Button>
          <Button
            size="btn--block"
            type="btn--secondary"
            onClick={closePageHandler}
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
  );
}

export default EditPersonnelForm;
