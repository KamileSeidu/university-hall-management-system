import classes from "./KeyLogs.module.css";
import RoomManagement from "../../components/key-log/RoomManagement";

function KeyLogsPage() {
  return (
    <div className={`${classes["section-group"]} ${classes.card}`}>
      <RoomManagement />
    </div>
  );
}

export default KeyLogsPage;
