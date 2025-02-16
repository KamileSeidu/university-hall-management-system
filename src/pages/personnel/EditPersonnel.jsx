import { useLoaderData } from "react-router-dom";
import EditPersonnelForm from "../../components/service_personnel/EditPersonnelForm";
import classes from "./EditPersonnel.module.css";
import { useState, useEffect } from "react";

function EditPersonnelPage() {
  const personnel = useLoaderData();

  const [personnelData, setPersonnelData] = useState(null);

  useEffect(() => {
    setPersonnelData(personnel);
  }, [personnel]);

  //   console.log(personnel);
  return (
    <>
      <div className={`${classes["section-group"]} ${classes["card"]}`}>
        <h1 className={classes.heading}>Edit Personnel Record</h1>
        <EditPersonnelForm personnel={personnelData} />
      </div>
    </>
  );
}

export default EditPersonnelPage;
