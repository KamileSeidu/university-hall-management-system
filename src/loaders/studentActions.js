import { redirect } from "react-router-dom";
import { getAuthToken } from "./getToken";

export const addNewStudentAction = async ({ request }) => {
  const token = getAuthToken();
  const formData = await request.formData();
  try {
    const response = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: {
        "x-auth-token": token,
      },
      body: formData,
    });

    // console.log(getAuthToken);

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
