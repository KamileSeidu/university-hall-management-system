import PersonnelsList from "../../components/service_personnel/PersonnelsList";
import classes from "./Personnels.module.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { getAuthToken } from "../../loaders/getToken";

function PersonnelsPage() {
  const token = getAuthToken();

  const initialPersonnels = useLoaderData();
  const [personnels, setPersonnels] = useState(initialPersonnels);

  const apiUrl = import.meta.env.VITE_API_URL;

  // Function to refetch students from the backend
  const fetchPersonnels = async () => {
    const response = await fetch(`${apiUrl}/nssPersonnels`, {
      headers: {
        "x-auth-token": token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch personnels");
    }
    const data = await response.json();
    setPersonnels(data);
  };

  return (
    <section className={classes["section-group"]}>
      <PersonnelsList
        personnels={personnels}
        fetchPersonnels={fetchPersonnels}
      />
    </section>
  );
}

export default PersonnelsPage;
