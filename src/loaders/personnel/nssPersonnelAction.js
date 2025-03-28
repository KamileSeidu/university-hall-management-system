import { redirect } from "react-router-dom";
import { getAuthToken } from "../getToken";
const apiUrl = import.meta.env.VITE_API_URL;

export const addNewPersonnelAction = async ({ request }) => {
  const token = getAuthToken();
  const formData = await request.formData();

  const errors = {};

  // Extract fields from formData
  const nssNumber = formData.get("nssNumber");
  const phoneNumber = formData.get("phoneNumber");
  const emmergencyNumber = formData.get("emmergencyNumber");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const roomNumber = formData.get("roomNumber");
  const bedNumber = formData.get("bedNumber");
  const placeOfWork = formData.get("placeOfWork");
  const photoFileName = formData.get("photoFileName");

  // Validation logic
  if (!nssNumber || !/^NSS[A-Za-z]{3}\d{7}$/.test(nssNumber)) {
    errors.nssNumber =
      "Nss number must be valid. Should contain 6 letters and 7 digits.";
  }
  if (
    !phoneNumber ||
    phoneNumber.trim() === "" ||
    !/^[0-9]{10}$/.test(phoneNumber)
  ) {
    errors.phoneNumber = "Phone number must be a valid 10-digit number.";
  }
  if (
    !emmergencyNumber ||
    emmergencyNumber.trim() === "" ||
    !/^[0-9]{10}$/.test(emmergencyNumber)
  ) {
    errors.emmergencyNumber = "Phone number must be a valid 10-digit number.";
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
  if (!placeOfWork || placeOfWork.trim() === "") {
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
    const response = await fetch(`${apiUrl}/nssPersonnels`, {
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

    return redirect("/nss-personnels");
  } catch (error) {
    console.error("Error submitting Nss Personnel:", error);
    return { success: false, error: error.message };
  }
};

export const editPersonnelAction = async ({ request, params }) => {
  const token = getAuthToken();
  const formData = await request.formData();
  const { personnelId } = params;

  // console.log("nssNumber", personnelId);

  const errors = {};

  // Extract fields from formData
  const nssNumber = formData.get("nssNumber"); //Did some giminastics here to avoid NssNumber name clash
  const phoneNumber = formData.get("phoneNumber");
  const emmergencyNumber = formData.get("emmergencyNumber");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const roomNumber = formData.get("roomNumber");
  const bedNumber = formData.get("bedNumber");
  const placeOfWork = formData.get("placeOfWork");

  // Validation logic
  if (!nssNumber || !/^NSS[A-Za-z]{3}\d{7}$/.test(nssNumber)) {
    errors.nssNumber =
      "Nss Number must be valid. Should contain 6 letters and 7 digits.";
  }
  if (
    !phoneNumber ||
    phoneNumber.trim() === "" ||
    !/^[0-9]{10}$/.test(phoneNumber)
  ) {
    errors.phoneNumber = "Phone number must be a valid 10-digit number.";
  }
  if (
    !emmergencyNumber ||
    emmergencyNumber.trim() === "" ||
    !/^[0-9]{10}$/.test(emmergencyNumber)
  ) {
    errors.emmergencyNumber = "Phone number must be a valid 10-digit number.";
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
  if (!placeOfWork || placeOfWork.trim() === "") {
    errors.programOfStudy = "Program of study is required.";
  }

  // If there are validation errors, return them
  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    const response = await fetch(`${apiUrl}/nssPersonnels/${personnelId}`, {
      method: "PATCH",
      headers: {
        "x-auth-token": token,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    // const updatedNssPersonnel = await response.json();
    return redirect(`/nss-personnels`);
  } catch (error) {
    console.error("Error updating nssPersonnel:", error);
    return { success: false, error: error.message };
  }
};

export const deletePersonnelAction = async ({ params }) => {
  const token = getAuthToken();
  const { personnelId } = params;
  try {
    const response = await fetch(`${apiUrl}/nssPersonnels/${personnelId}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return redirect("/nss-personnels");
  } catch (error) {
    console.error("Error deleting Nss Personnel:", error);
    return { success: false, error: error.message };
  }
};
