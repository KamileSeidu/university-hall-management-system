import classes from "./RoomMembers.module.css";

function RoomMembers() {
  return (
    <ul className={classes["room-members"]}>
      <li className={classes["room-member"]}>
        <p>Kamile Seidu</p>
        <p>0557148772</p>
        <p>Bsc Computer Science</p>

        <button className={`${classes.btn} ${classes["btn--verify"]}`}>
          Verify
        </button>
      </li>
    </ul>
  );
}

export default RoomMembers;
