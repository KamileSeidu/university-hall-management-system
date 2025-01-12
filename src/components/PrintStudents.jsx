import logo from "../assets/commonwealth_logo.png";

const PrintStudents = ({ students }) => {
  // console.log(students);
  const studentsList = students.map((student) => {
    return (
      <li key={student._id} className="table-list">
        <p>{`${student.firstName} ${student.middleName} ${student.lastName} `}</p>
        <p>{student.programOfStudy}</p>
        <p>{` ${student.roomNumber} - ${student.bedNumber}`}</p>
        <p>{student.phoneNumber}</p>
        <p>{student.dateSignedIn}</p>
        <p>{student.dateSignedOut}</p>
      </li>
    );
  });

  return (
    <main className="main" id="printable-content">
      <header className="header">
        <img src={logo} alt="" />
        <div className="header-text">
          <h1>University of Ghana</h1>
          <h1>Commonwealth Hall Students List</h1>
        </div>
      </header>
      <hr />
      <div>
        <ul className="table-list">
          <h1>Full Name</h1>
          <h1>Program of Study</h1>
          <h1>Room No.</h1>
          <h1>Phone Number</h1>
          <h1>Date Signed In</h1>
          <h1>Date Signed Out</h1>
        </ul>
        <ul>
          {studentsList}
          {/* <li className="table-list">
            <p>John Doe Kamile Ghana Seidu</p>
            <p>BSc. Computer Science</p>
            <p>12</p>
            <p>0241234567</p>
            <p>12/12/2021</p>
            <p>12/12/2021</p>
          </li> */}
        </ul>
      </div>
    </main>
  );
};

export default PrintStudents;
