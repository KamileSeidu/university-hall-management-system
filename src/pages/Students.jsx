import classes from "./Students.module.css";
import StudentsList from "../components/StudentsList";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

import { getAuthToken } from "../loaders/getToken";

function StudentsPage() {
  // const students = useLoaderData();
  const token = getAuthToken();

  const initialStudents = useLoaderData();
  const [students, setStudents] = useState(initialStudents);

  // Function to refetch students from the backend
  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3000/api/students", {
      headers: {
        "x-auth-token": token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }
    const data = await response.json();
    setStudents(data);
  };

  // useEffect(() => {
  //   // Poll for updates periodically
  //   const interval = setInterval(() => {
  //     fetchStudents();
  //   }, 20000);

  //   // Cleanup on unmount
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className={classes["section-group"]}>
      <StudentsList students={students} fetchStudents={fetchStudents} />
    </section>
  );
}

export default StudentsPage;
