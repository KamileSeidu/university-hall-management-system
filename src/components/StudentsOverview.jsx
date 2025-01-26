import LineGraph from "./LineGraph";
import clasess from "./StudentsOverview.module.css";
import groupImage from "../assets/people-group.svg";
import { useState } from "react";
import PrintStudents from "./PrintStudents";

function StudentsOverview({ students }) {
  //Total Number of Signed In Students
  const signedInCount = students.filter(
    (student) => student.isSignedIn === true
  ).length;

  //Total Number of Signed out Students
  const unsignedInCount = students.filter(
    (student) => student.isSignedIn === false
  ).length;

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

  const handlePrint = () => {
    // Clean up any existing print iframes
    const existingFrames = document.querySelectorAll(
      "iframe[data-print-frame]"
    );
    existingFrames.forEach((frame) => frame.remove());

    const printFrame = document.createElement("iframe");
    printFrame.style.display = "none";
    printFrame.setAttribute("data-print-frame", "true");
    document.body.appendChild(printFrame);

    const contentToPrint = document.getElementById("printable-content");

    if (!contentToPrint) {
      console.error("Printable content not found");
      return;
    }

    // Get all the classes from the original element
    // const originalClasses = [
    //   ...contentToPrint.getElementsByClassName("table-list"),
    // ];

    // Create a unique class prefix for print
    const printPrefix = "print-document";

    // Copy the content and replace classes
    const contentCopy = contentToPrint.cloneNode(true);
    contentCopy.classList.add(printPrefix);

    // Define the styles matching your module.css
    const printStyles = `
      @page {
        margin: 0;
        size: A4;
      }

      body {
        // margin: 0;
        // padding: 2rem;
      }

      img {
        width: 250px !important;
        height: auto !important;
      }

      hr {
        display: block;
        content: "";
        margin-top: 1rem;
        border: 1px solid #ccc;
      }

      .header {
        display: flex !important;
        flex-direction: column !important;
        justify-content: start !important;
        align-items: center !important;
        
      }

      .header-text {
        text-align: center;     
        margin-bottom: 0.5rem;
      }

      .header h1 {
        color: red;
        margin: 0;
      }

      .header-text > h1:first-child {
        font-size: 5rem !important;
        font-weight: 800 !important;
      }

      .header-text > h1:last-child {
        margin-top: 0.5rem !important;
        margin-left: 0.2rem !important;
        font-size: 2.5rem !important;
        font-weight: 400 !important;
      }

      .header h2 {
        font-size: 1.4rem !important;
        font-weight: 300 !important;
        text-decoration: underline !important;
        margin-bottom: 0.5rem !important;
      
      }

      ul {
        list-style-type: none !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      .table-list {
        display: grid !important;
        grid-template-columns: 120px 250px 250px 110px 140px 120px 125px !important;
        gap: 0.5rem !important;
        margin-bottom: 0.5rem !important;
        padding: 0.5rem !important;
      }

      .table-list h1 {
        margin: 0 !important;
        font-size: 1rem !important;
        padding-right: 1rem !important;
        font-weight: 400 !important;
      }

      .table-list p {
        margin: 0 !important;
        font-size: 0.9rem !important;
      }

      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          padding: 20px !important;

        }

        .main {
          margin: 0 !important;
          // padding: 20px !important;
          // padding-top: 50px !important;
        }
      }
    `;

    // Write the content to the iframe with styles
    printFrame.contentWindow.document.open();
    printFrame.contentWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Students Record</title>
          <style>${printStyles}</style>
        </head>
        <body>
          ${contentToPrint.outerHTML}
        </body>
      </html>
    `);
    printFrame.contentWindow.document.close();

    // Wait for images to load before printing
    printFrame.contentWindow.onload = () => {
      setTimeout(() => {
        printFrame.contentWindow.print();

        // Cleanup after printing
        setTimeout(() => {
          if (document.body.contains(printFrame)) {
            document.body.removeChild(printFrame);
          }
        }, 1000);
      }, 500);
    };
  };
  return (
    <>
      <section className={clasess.container}>
        <div className={`${clasess.card} ${clasess["card--1"]}`}>
          <img className={clasess.image} src={groupImage} alt="group-Image" />
          <h1>Total Number of Students</h1>
          <h2>{numberOfStudents}</h2>
        </div>
        <div className={`${clasess.card} ${clasess["card--2"]}`}>
          <div className={clasess["card--2__content"]}>
            <h1>No. of Students Registered On</h1>
            <div className={clasess["card--2__content--date"]}>
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
          <div className={clasess["card--2__footer"]}>
            <button onClick={handlePrint} className={clasess["button-print"]}>
              Print Records
            </button>
            <div className={clasess["card--2__footer--signedOut"]}>
              <h1>Number of Sign: </h1>
              <div className={clasess["card--2__footer--signedOut--count"]}>
                <span className={clasess[`signedIn`]}>
                  <h1>Ins</h1>
                  <p>{signedInCount}</p>
                </span>
                <span className={clasess[`signedOut`]}>
                  <h1>Outs</h1>
                  <p>{unsignedInCount}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${clasess.card} ${clasess.chart}`}>
          <LineGraph frequencyMap={frequencyMap} />
        </div>
      </section>

      <div style={{ display: "none" }}>
        <PrintStudents students={students} />
      </div>
    </>
  );
}

export default StudentsOverview;
