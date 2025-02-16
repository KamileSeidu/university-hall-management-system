import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import checkIn from "../assets/check-in.svg";
import checkOut from "../assets/check-out.svg";
import classes from "./StudentDetails.module.css";
import { Link, useNavigate, useSubmit } from "react-router-dom";
import { useState } from "react";
import { getAuthToken } from "../loaders/getToken";

function StudentDetails({
  _id,
  studentId,
  roomNumber,
  bedNumber,
  firstName,
  middleName,
  lastName,
  programOfStudy,
  registeredAt,
  isSignedIn = false,
  fetchStudents,
  onSelect,
}) {
  const [loading, setLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(isSignedIn);
  const token = getAuthToken();
  const dateOnly = registeredAt.slice(0, 10);
  // const submit = useSubmit();
  const navigate = useNavigate();

  // console.log(fetchStudents);

  function handleEdithandler() {
    navigate(`/students/${_id}/edit`);
  }

  const middleNameAbbreviation = middleName ? middleName.slice(0, 1) : "";

  // function startDeleteHandler() {
  //   const proceed = window.confirm("Are you sure you want to delete?");

  //   if (proceed) {
  //     submit(null, { method: "DELETE", action: `/students/${_id}` });
  //   }
  // }

  async function startDeleteHandler() {
    const proceed = window.confirm("Are you sure you want to delete?");

    if (proceed) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/students/${_id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          }
        );

        if (!response.ok) {
          const error = await response.text();
          throw new Error(error || "Failed to delete student");
        }

        // Refresh the list immediately after successful deletion
        fetchStudents();
      } catch (error) {
        alert(error.message);
      }
    }
  }

  async function handleSignInOut(action) {
    if (loading) return;

    const actionVariable = action === "signin" ? "signin" : "signout";
    const proceed = window.confirm(
      `Are you sure you want to ${actionVariable} ?`
    );

    if (proceed) {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/students/${_id}/${action}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          }
        );

        if (!response.ok) {
          const error = await response.text();
          throw new Error(error || `Failed to ${action}`);
        }

        // Update local state
        setCurrentStatus(action === "signin");

        fetchStudents();
        // console.log(` I have been executed ${fetchStudents}`);

        // Optional: Show success message
        const actionText = action === "signin" ? "signed in" : "signed out";
        alert(`Student successfully ${actionText}`);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <li className={classes["student-info"]}>
        <Link onClick={onSelect} className={classes.link}>
          <ul className={classes["student-info-list"]}>
            <li>{studentId}</li>
            <li>{`${firstName} ${middleNameAbbreviation}${
              middleName ? "." : ""
            } ${lastName}`}</li>
            <li>{`${roomNumber} - ${bedNumber}`}</li>
            {/* <li>{bedNumber}</li> */}
            <li>{programOfStudy}</li>
            <li>{dateOnly}</li>
          </ul>
        </Link>
        <p className={classes.action}>
          {/* Show check-in button only when signed out */}
          {!currentStatus && (
            <button
              className={classes[`check-in`]}
              onClick={() => handleSignInOut("signin")}
              disabled={loading}
              title="Sign in student"
            >
              <img src={checkIn} alt="check-in" />
            </button>
          )}

          {/* Show check-out button only when signed in */}
          {currentStatus && (
            <button
              className={classes[`check-out`]}
              onClick={() => handleSignInOut("signout")}
              disabled={loading}
              title="Sign out student"
            >
              <img src={checkOut} alt="check-out" />
            </button>
          )}
          <button
            className={classes.edit}
            onClick={handleEdithandler}
            title="Edit student record"
          >
            <img src={editIcon} alt="edit" />
          </button>
          <button
            className={classes.delete}
            onClick={startDeleteHandler}
            title="Delete student record"
          >
            <img src={deleteIcon} alt="delete" />
          </button>
        </p>
      </li>
    </>
  );
}

export default StudentDetails;
