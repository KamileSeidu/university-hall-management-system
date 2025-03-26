import { getAuthToken } from "../getToken";

export const roomsLoader = async () => {
  const token = getAuthToken();

  const response = await fetch("http://localhost:3000/api/rooms", {
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
