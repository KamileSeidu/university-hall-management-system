import SearchBox from "../Search";
import Room from "./Room";
import classes from "./RoomManagement.module.css";

function RoomManagement() {
  return (
    <div className={classes["section-group"]}>
      <div className={classes["header"]}>
        <h1 className={classes.heading}>Room Management</h1>
        <SearchBox />
      </div>
      <div
        className={`${classes.rooms} ${classes.card} ${classes["room-grid"]}`}
      >
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
}

export default RoomManagement;
