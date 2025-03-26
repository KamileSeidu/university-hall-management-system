import classes from "./KeyLogs.module.css";
import RoomManagement from "../../components/key-log/RoomManagement";
import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../../loaders/getToken";
import { useState } from "react";

function KeyLogsPage() {
  const token = getAuthToken();

  const initialRoomsData = useLoaderData();
  const [roomsData, setRoomsData] = useState(initialRoomsData);

  //Function to refetch rooms data from backend

  const fetchRoomsData = async () => {
    const response = await fetch("http://localhost:3000/api/rooms", {
      headers: {
        "x-auth-token": token,
      },
    });

    if (!response.ok) {
      // Manually throw a JSON response
      throw new Response(
        JSON.stringify({ message: "Could not fetch students" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    } else {
      const resData = await response.json();
      setRoomsData(resData);
    }
  };
  // console.log(roomsData);
  return (
    <div className={`${classes["section-group"]} ${classes.card}`}>
      <RoomManagement roomsData={roomsData} fetchRoomsData={fetchRoomsData} />
    </div>
  );
}

export default KeyLogsPage;
