import { getAuthToken } from "../getToken";
const apiUrl = import.meta.env.VITE_API_URL;

export const roomsLoader = async () => {
  const token = getAuthToken();

  const response = await fetch(`${apiUrl}/rooms`, {
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
