// import { Form, useActionData, useNavigation } from "react-router-dom";
// import classes from "./StudentForm.module.css";
// import Button from "./UI/Button";

// function StudentForm() {
//   const actionData = useActionData();
//   const navigation = useNavigation();

//   const isSubmitting = navigation.state === "submitting";

//   return (
//     <div className={classes.card}>
//       <Form
//         method="post"
//         encType="multipart/form-data"
//         className={classes.form}
//       >
//         <div className={classes.group}>
//           <div className={classes["input-group"]}>
//             <label htmlFor="studentId">ID Number</label>
//             <input
//               type="number"
//               id="studentId"
//               name="studentId"
//               placeholder="220104304"
//               required
//             />
//             {actionData?.errors?.studentId && (
//               <p className={classes.error}>{actionData.errors.studentId}</p>
//             )}
//           </div>
//           <div className={classes["input-group"]}>
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="number"
//               id="phoneNumber"
//               name="phoneNumber"
//               placeholder="0205254977"
//               required
//             />
//             {actionData?.errors?.phoneNumber && (
//               <p className={classes.error}>{actionData.errors.phoneNumber}</p>
//             )}
//           </div>
//         </div>
//         <div className={classes.group}>
//           <div className={classes["input-group"]}>
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               placeholder="John"
//               required
//             />
//             {actionData?.errors?.firstName && (
//               <p className={classes.error}>{actionData.errors.firstName}</p>
//             )}
//           </div>
//           <div className={classes["input-group"]}>
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               placeholder="Doe"
//               required
//             />
//             {actionData?.errors?.lastName && (
//               <p className={classes.error}>{actionData.errors.lastName}</p>
//             )}
//           </div>
//         </div>
//         <div className={classes.group}>
//           <div className={classes["input-group"]}>
//             <label htmlFor="roomNumber">Room Number</label>
//             <input
//               type="text"
//               id="roomNumber"
//               name="roomNumber"
//               placeholder="J40"
//               required
//             />
//             {actionData?.errors?.roomNumber && (
//               <p className={classes.error}>{actionData.errors.roomNumber}</p>
//             )}
//           </div>
//           <div className={classes["input-group"]}>
//             <label htmlFor="bedNumber">Bed Number</label>
//             <input
//               type="number"
//               id="bedNumber"
//               name="bedNumber"
//               placeholder="1"
//               required
//             />
//             {actionData?.errors?.bedNumber && (
//               <p className={classes.error}>{actionData.errors.bedNumber}</p>
//             )}
//           </div>
//         </div>
//         <div className={classes["input-group"]}>
//           <label htmlFor="program">Program</label>
//           <input
//             type="text"
//             id="program"
//             name="programOfStudy"
//             placeholder="Bsc Mathematical Sciences"
//             required
//           />
//           {actionData?.errors?.programOfStudy && (
//             <p className={classes.error}>{actionData.errors.programOfStudy}</p>
//           )}
//         </div>
//         <div className={classes["input-group"]}>
//           <label htmlFor="photo">Upload Photo</label>
//           <input
//             type="file"
//             id="photo"
//             name="photoFileName"
//             accept="image/*"
//             capture="camera"
//             required
//           />
//           {actionData?.errors?.photoFileName && (
//             <p className={classes.error}>{actionData.errors.photoFileName}</p>
//           )}
//         </div>
//         <Button size={"btn--block"}>
//           {isSubmitting ? "Registering...." : "Register"}
//         </Button>
//         {actionData?.error && (
//           <p className={`${classes.error} ${classes["error-margin"]}`}>
//             {actionData.error}
//           </p>
//         )}
//       </Form>
//     </div>
//   );
// }

// export default StudentForm;

import { Form, useActionData, useNavigation } from "react-router-dom";
import { useRef, useState } from "react";
import classes from "./StudentForm.module.css";
import Button from "./UI/Button";

function StudentForm() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const canvasRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const isSubmitting = navigation.state === "submitting";

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
            <label htmlFor="middleName">Middle Name</label>
            <input
              type="text"
              id="program"
              name="middleName"
              placeholder="Kwame"
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
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photoFileName"
            accept="image/*"
            capture="camera"
            onChange={handleImageChange}
            required
          />
          {actionData?.errors?.photoFileName && (
            <p className={classes.error}>{actionData.errors.photoFileName}</p>
          )}
          {selectedImage && (
            <div className={classes.preview}>
              <img
                src={selectedImage}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </div>
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
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default StudentForm;
