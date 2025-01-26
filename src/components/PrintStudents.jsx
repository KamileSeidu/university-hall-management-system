import logo from "../assets/commonwealth_logo.png";

const PrintStudents = ({ students }) => {
  // Sorted students in alphabetical order
  const sortedStudents = [...students].sort((a, b) => {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
      return -1;
    }
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  const studentsList = sortedStudents.map((student) => {
    return (
      <li key={student._id} className="table-list">
        <p>{student.studentId}</p>
        <p>{`${student.firstName} ${student.middleName} ${student.lastName} `}</p>
        <p>{student.programOfStudy}</p>
        <p>{` ${student.roomNumber} - ${student.bedNumber}`}</p>
        <p>{student.phoneNumber}</p>
        <p>{student.lastSignInDate.slice(0, 10)}</p>
        <p>
          {student.lastSignOutDate ? student.lastSignOutDate.slice(0, 10) : ""}
        </p>
      </li>
    );
  });

  return (
    <main className="main" id="printable-content">
      <header className="header">
        <div className="header-text">
          <h1>COMMONWEALTH HALL</h1>
          <h1>(UNIVERSITY OF GHANA)</h1>
        </div>
        <img src={logo} alt="" />
        <h2> LIST OF LEVEL 100&apos;S</h2>
      </header>
      <hr />
      <div>
        <ul className="table-list">
          <h1>Student ID</h1>
          <h1>Full Name</h1>
          <h1>Program of Study</h1>
          <h1>Room No.</h1>
          <h1>Phone Number</h1>
          <h1>Date Signed In</h1>
          <h1>Date Signed Out</h1>
        </ul>
        <ul>{studentsList}</ul>
      </div>
    </main>
  );
};

export default PrintStudents;
