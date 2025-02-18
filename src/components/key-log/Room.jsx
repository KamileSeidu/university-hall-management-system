import classes from "./Room.module.css";
import RoomMembers from "./RoomMembers";

function Room() {
  return (
    <div className={`${classes["room-card"]} `}>
      <div className={classes["room-header"]}>
        <h1>Room J40</h1>
        <h2>Key Holder: Abubakari Salisu</h2>
        <button className={`${classes.btn} ${classes["key-history"]}`}>
          Key History
        </button>
      </div>
      <RoomMembers />
    </div>
  );
}

export default Room;
