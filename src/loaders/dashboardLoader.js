import { getAuthToken } from "./getToken";

export const dashboardLoader = async () => {
  const token = getAuthToken();

  // Fetch data from both endpoints concurrently
  const [studentsResponse, hallBlocksResponse] = await Promise.all([
    fetch("http://localhost:3000/api/students", {
      headers: {
        "x-auth-token": token,
      },
    }),
    fetch("http://localhost:3000/api/hallblocks", {
      headers: {
        "x-auth-token": token,
      },
    }),
  ]);

  // Handle errors for each fetch request
  if (!studentsResponse.ok || !hallBlocksResponse.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch required data",
        errors: {
          students: studentsResponse.ok ? null : "Failed to fetch students",
          hallBlocks: hallBlocksResponse.ok
            ? null
            : "Failed to fetch hall blocks",
        },
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // Parse responses
  const [studentsData, hallBlocksData] = await Promise.all([
    studentsResponse.json(),
    hallBlocksResponse.json(),
  ]);

  // Return both datasets as an object
  return { students: studentsData, hallBlocks: hallBlocksData };
};
