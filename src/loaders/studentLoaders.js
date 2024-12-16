export const studentsLoader = async () => {
  const response = await fetch("http://localhost:3000/api/students");

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
  const response = await fetch(`http://localhost:3000/api/students/${id}`);

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
