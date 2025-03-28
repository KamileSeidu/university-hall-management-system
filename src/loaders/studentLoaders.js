import { getAuthToken } from "./getToken";
const apiUrl = import.meta.env.VITE_API_URL;

export const studentsLoader = async () => {
  const token = getAuthToken();

  const response = await fetch(`${apiUrl}/students`, {
    headers: {
      "x-auth-token": token,
    },
  });

  if (!response.ok) {
    // Manually throw a JSON response
    throw new Response(
      JSON.stringify({ message: "Could not fetch students" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const studentDetailsLoader = async ({ params }) => {
  const id = params.studentId;
  const token = getAuthToken();
  const response = await fetch(`${apiUrl}/students/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });

  if (!response.ok) {
    // Manually throw a JSON response
    throw new Response(JSON.stringify({ message: "Could not fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    const resData = await response.json();
    return resData;
  }
};
