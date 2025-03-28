import classes from "./RoomMember.module.css";
import { motion } from "framer-motion";

function RoomMember({ member, onSelect }) {
  const {
    nssNumber,
    studentId,
    firstName,
    lastName,
    placeOfWork,
    programOfStudy,
    phoneNumber,
  } = member;

  return (
    <motion.li layout className={classes["room-member"]}>
      <p>{nssNumber || studentId}</p>
      <p>
        {firstName} {lastName}
      </p>
      <p>{phoneNumber}</p>
      <p>{programOfStudy || placeOfWork}</p>

      <button
        onClick={onSelect}
        className={`${classes.btn} ${classes["btn--verify"]}`}
      >
        Verify
      </button>
    </motion.li>
  );
}

export default RoomMember;
