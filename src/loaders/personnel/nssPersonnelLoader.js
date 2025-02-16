import { getAuthToken } from "../getToken";

export const personnelsLoader = async () => {
  const token = getAuthToken();

  const response = await fetch("http://localhost:3000/api/nssPersonnels", {
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

export const PersonnelDetailsLoader = async ({ params }) => {
  const id = params.nssNumber;
  console.log(id);
  const token = getAuthToken();
  const response = await fetch(
    `http://localhost:3000/api/nssPersonnels/${id}`,
    {
      headers: {
        "x-auth-token": token,
      },
    }
  );

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
