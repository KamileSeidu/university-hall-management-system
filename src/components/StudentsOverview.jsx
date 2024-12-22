import LineGraph from "./LineGraph";
import clasess from "./StudentsOverview.module.css";
import groupImage from "../assets/people-group.svg";
import { useState } from "react";

function StudentsOverview({ students }) {
  const numberOfStudents = students.length;
  // Step 1: Transform dates and count frequencies
  const frequencyMap = students.reduce((acc, student) => {
    // Extract and format the date
    const date = new Date(student.registeredAt).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    });

    // Increment the count for this date
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Function to filter and count registrations
  function countRegistrations(students, selectedDate) {
    return students.filter((item) => {
      const registeredDate = new Date(item.registeredAt)
        .toISOString()
        .split("T")[0]; // Extract date only
      return registeredDate === selectedDate;
    }).length;
  }

  // Get the count
  const count = countRegistrations(students, selectedDate);

  return (
    <>
      <section className={clasess.container}>
        <div className={`${clasess.card} ${clasess["card--1"]}`}>
          <img className={clasess.image} src={groupImage} alt="group-Image" />
          <h1>Total Number of Students</h1>
          <h2>{numberOfStudents}</h2>
        </div>
        <div className={`${clasess.card} ${clasess["card--2"]}`}>
          <div>
            <h1>No. of Students Registered On</h1>
            <input
              type="date"
              id="date"
              name="date"
              min="2024-01-01"
              max="2070-01-31"
              onChange={handleDateChange}
            ></input>
            <h2>{count}</h2>
          </div>
        </div>
        <div className={`${clasess.card} ${clasess.chart}`}>
          <LineGraph frequencyMap={frequencyMap} />
        </div>
      </section>
    </>
  );
}

export default StudentsOverview;
