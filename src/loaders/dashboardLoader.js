import { getAuthToken } from "./getToken";

export const dashboardLoader = async () => {
  const token = getAuthToken();
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch data from both endpoints concurrently
  const [studentsResponse, hallBlocksResponse, roomsResponse] =
    await Promise.all([
      fetch(`${apiUrl}/students`, {
        headers: {
          "x-auth-token": token,
        },
      }),
      fetch(`${apiUrl}/hallblocks`, {
        headers: {
          "x-auth-token": token,
        },
      }),
      fetch(`${apiUrl}/rooms`, {
        headers: {
          "x-auth-token": token,
        },
      }),
    ]);

  // Handle errors for each fetch request
  if (!studentsResponse.ok || !hallBlocksResponse.ok || !roomsResponse.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch required data",
        errors: {
          students: studentsResponse.ok ? null : "Failed to fetch students",
          hallBlocks: hallBlocksResponse.ok
            ? null
            : "Failed to fetch hall blocks",
          rooms: roomsResponse.ok ? null : "Failed to fetch rooms",
        },
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // Parse responses
  const [studentsData, hallBlocksData, roomsData] = await Promise.all([
    studentsResponse.json(),
    hallBlocksResponse.json(),
    roomsResponse.json(),
  ]);

  // Return both datasets as an object
  return {
    students: studentsData,
    hallBlocks: hallBlocksData,
    rooms: roomsData,
  };
};
