import SearchBox from "../Search";
import Room from "./Room";
import classes from "./RoomManagement.module.css";
import { useState } from "react";

function RoomManagement({ roomsData, fetchRoomsData }) {
  const [searchParam, setSearchParam] = useState("");

  const filteredRooms = roomsData.filter((item) => {
    return item.roomNumber.toUpperCase() === searchParam;
  });

  let filteredRoomsData = searchParam.trim() ? filteredRooms : roomsData;

  const roomElements = filteredRoomsData?.length ? (
    filteredRoomsData.map((room) => (
      <Room
        key={room._id}
        id={room._id}
        roomNumber={room.roomNumber}
        currentKeyHolder={room.currentKeyHolder}
        // keyHistory={room.keyHistory}
        lastKeySubmission={room.lastKeySubmission}
        roomMembers={room.roomMembers}
        fetchRoomsData={fetchRoomsData}
      />
    ))
  ) : (
    <p>No rooms available</p>
  );

  const searchData = (data) => {
    setSearchParam(data);
  };

  return (
    <div className={classes["section-group"]}>
      <div className={classes["header"]}>
        <h1 className={classes.heading}>Room Management</h1>
        <SearchBox onSearchParam={searchData} />
      </div>
      <div
        className={`${classes.rooms} ${classes.card} ${classes["room-grid"]}`}
      >
        {roomElements}
      </div>
    </div>
  );
}
export default RoomManagement;
