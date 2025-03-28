import logo from "../assets/commonwealth_logo.png";

function PrintBlockData({ block }) {
  if (!block) return null;

  const studentsList = block.students.map((student) => {
    return (
      <li key={student._id} className="table-list">
        <p>{student.studentId}</p>
        <p>{`${student.firstName} ${
          student.middleName ? student.middleName : ""
        } ${student.lastName} `}</p>
        <p>{student.programOfStudy}</p>
        <p>{student.roomNumber}</p>
        <p>{student.phoneNumber}</p>
        <p>{student.isSignedIn ? "Yes" : "No"}</p>
      </li>
    );
  });

  const nssList = block.nssPersonnels.map((nss) => {
    return (
      <li key={nss._id} className="table-list">
        <p>{nss.nssNumber}</p>
        <p>{`${nss.firstName} ${nss.middleName ? nss.middleName : ""} ${
          nss.lastName
        } `}</p>
        <p>{nss.placeOfWork}</p>
        <p>{nss.roomNumber}</p>
        <p>{nss.phoneNumber}</p>
        <p>{nss.isSignedIn ? "Yes" : "No"}</p>
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
        <h2> LIST OF {block.blockLetter} BLOCK MEMBERS</h2>
      </header>
      <div>
        <ul className="table-list">
          <h1>Student ID</h1>
          <h1>Full Name</h1>
          <h1>Program of Study</h1>
          <h1>Room No.</h1>
          <h1>Phone Number</h1>
          <h1>Signed In</h1>
        </ul>
        <hr />
        <ul>{studentsList}</ul>
        <br />
        <ul className="table-list">
          <h1>NSS ID</h1>
          <h1>Full Name</h1>
          <h1>Place of Work</h1>
          <h1>Room No.</h1>
          <h1>Phone Number</h1>
          <h1>Signed In</h1>
        </ul>
        <hr />
        <ul>{nssList}</ul>
      </div>
    </main>
  );
}

export default PrintBlockData;
