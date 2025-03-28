import { getAuthToken } from "../getToken";
const apiUrl = import.meta.env.VITE_API_URL;

export const personnelsLoader = async () => {
  const token = getAuthToken();

  const response = await fetch(`${apiUrl}/nssPersonnels`, {
    headers: {
      "x-auth-token": token,
    },
  });

  if (!response.ok) {
    // Manually throw a JSON response
    throw new Response(
      JSON.stringify({ message: "Could not fetch personnels" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
};

export const personnelDetailsLoader = async ({ params }) => {
  const id = params.personnelId;
  const token = getAuthToken();
  // console.log(id);
  const response = await fetch(`${apiUrl}/nssPersonnels/${id}`, {
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
