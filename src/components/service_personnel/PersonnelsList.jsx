import Card from "../UI/Card";
import Button from "../UI/Button";
import Search from "../Search";
import profilePlus from "../../assets/profile-plus.svg";
import classes from "./PersonnelsList.module.css";
import PersonnelDetails from "./PersonnelDetails";
import PersonnelProfile from "./PersonnelProfile";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PersonnelsList({ personnels, fetchPersonnels }) {
  const [searchParam, setSearchParam] = useState("");
  const [selectedPersonnel, setSelectedPersonnel] = useState(null); //new

  const filteredPersonnels = personnels.filter((item) => {
    const isSignedInSearch =
      searchParam.toLowerCase() === "in"
        ? true
        : searchParam.toLowerCase() === "out"
        ? false
        : null;
    return (
      item.roomNumber.toUpperCase() === searchParam ||
      item.nssNumber === searchParam ||
      item.firstName.toLowerCase().includes(searchParam.toLowerCase()) ||
      item.phoneNumber === searchParam ||
      item.lastName.toLowerCase().includes(searchParam.toLowerCase()) ||
      (isSignedInSearch !== null && item.isSignedIn === isSignedInSearch)
    );
  });

  let personnelsData = searchParam.trim() ? filteredPersonnels : personnels;

  const searchData = (data) => {
    setSearchParam(data);
  };

  const personnelsList = personnelsData?.length ? (
    personnelsData.map((personnel) => (
      <PersonnelDetails
        key={personnel._id}
        {...personnel}
        fetchPersonnels={fetchPersonnels}
        onSelect={() => setSelectedPersonnel(personnel)} //new
      />
    ))
  ) : (
    <p>No personnels available</p>
  );

  const navigate = useNavigate();
  const handleAddPersonnel = () => {
    navigate("/nss-personnels/addPersonnel");
  };

  return (
    <Card>
      <div className={classes["function-grp"]}>
        <Search onSearchParam={searchData} />
        <Button onClick={handleAddPersonnel}>
          {" "}
          <img src={profilePlus} alt="" />
          Add New
        </Button>
      </div>
      <header className={classes.header}>
        <h1>Nss Number</h1>
        <h1>Full Name</h1>
        <h1>Room / Bed No.</h1>
        <h1>Place of Work</h1>
        <h1>Date of Registration</h1>
        <h1>Action</h1>
      </header>
      <ul className={classes["personnel-list"]}>{personnelsList}</ul>
      {
        //new
        selectedPersonnel && (
          <PersonnelProfile
            personnel={selectedPersonnel}
            onClose={() => setSelectedPersonnel(null)}
          />
        )
      }
    </Card>
  );
}

export default PersonnelsList;
