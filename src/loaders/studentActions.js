import { redirect } from "react-router-dom";
import { getAuthToken } from "./getToken";

export const addNewStudentAction = async ({ request }) => {
  const token = getAuthToken();
  const formData = await request.formData();

  const errors = {};

  // Extract fields from formData
  const studentId = formData.get("studentId");
  const phoneNumber = formData.get("phoneNumber");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const roomNumber = formData.get("roomNumber");
  const bedNumber = formData.get("bedNumber");
  const programOfStudy = formData.get("programOfStudy");
  const photoFileName = formData.get("photoFileName");

  // Validation logic
  if (!studentId || !/^\d{8}$/.test(studentId)) {
    errors.studentId = "Student ID must be a valid 8-digit number.";
  }
  if (
    !phoneNumber ||
    phoneNumber.trim() === "" ||
    !/^[0-9]{10}$/.test(phoneNumber)
  ) {
    errors.phoneNumber = "Phone number must be a valid 10-digit number.";
  }
  if (!firstName || firstName.trim() === "") {
    errors.firstName = "First name is required.";
  }
  if (!lastName || lastName.trim() === "") {
    errors.lastName = "Last name is required.";
  }
  if (!roomNumber || roomNumber.trim() === "") {
    errors.roomNumber = "Room number is required.";
  }
  if (!bedNumber || isNaN(bedNumber)) {
    errors.bedNumber = "Bed number must be a valid number.";
  }
  if (!programOfStudy || programOfStudy.trim() === "") {
    errors.programOfStudy = "Program of study is required.";
  }
  if (!photoFileName || !photoFileName.name.match(/\.(jpg|jpeg|png)$/)) {
    errors.photoFileName = "Please upload a valid image file (jpg, jpeg, png).";
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    const response = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: {
        "x-auth-token": token,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return redirect("/students");
  } catch (error) {
    console.error("Error submitting student:", error);
    return { success: false, error: error.message };
  }
};

export const editStudentAction = async ({ request, params }) => {
  const token = getAuthToken();
  const formData = await request.formData();
  const { studentId } = params;

  const errors = {};

  // Extract fields from formData
  const student_Id = formData.get("studentId"); //Did some giminastics here to avoid studentId name clash
  const phoneNumber = formData.get("phoneNumber");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const roomNumber = formData.get("roomNumber");
  const bedNumber = formData.get("bedNumber");
  const programOfStudy = formData.get("programOfStudy");

  // Validation logic
  if (!student_Id || !/^\d{8}$/.test(student_Id)) {
    errors.studentId = "Student ID must be a valid 8-digit number.";
  }
  if (
    !phoneNumber ||
    phoneNumber.trim() === "" ||
    !/^[0-9]{10}$/.test(phoneNumber)
  ) {
    errors.phoneNumber = "Phone number must be a valid 10-digit number.";
  }
  if (!firstName || firstName.trim() === "") {
    errors.firstName = "First name is required.";
  }
  if (!lastName || lastName.trim() === "") {
    errors.lastName = "Last name is required.";
  }
  if (!roomNumber || roomNumber.trim() === "") {
    errors.roomNumber = "Room number is required.";
  }
  if (!bedNumber || isNaN(bedNumber)) {
    errors.bedNumber = "Bed number must be a valid number.";
  }
  if (!programOfStudy || programOfStudy.trim() === "") {
    errors.programOfStudy = "Program of study is required.";
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    const response = await fetch(
      `http://localhost:3000/api/students/${studentId}`,
      {
        method: "PATCH",
        headers: {
          "x-auth-token": token,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    // const updatedStudent = await response.json();
    return redirect(`/students`);
  } catch (error) {
    console.error("Error updating student:", error);
    return { success: false, error: error.message };
  }
};

export const deleteStudentAction = async ({ params }) => {
  const token = getAuthToken();
  const { studentId } = params;
  try {
    const response = await fetch(
      `http://localhost:3000/api/students/${studentId}`,
      {
        method: "DELETE",
        headers: {
          "x-auth-token": token,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return redirect("/students");
  } catch (error) {
    console.error("Error deleting student:", error);
    return { success: false, error: error.message };
  }
};
