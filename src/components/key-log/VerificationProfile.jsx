import classes from "./VerificationProfile.module.css";
import { useState } from "react";
import { getAuthToken } from "../../loaders/getToken";
import { motion, AnimatePresence } from "framer-motion";

function VerificationProfile({ fetchRoomsData, member, onClose }) {
  const token = getAuthToken();

  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const imgUrl = import.meta.env.VITE_IMG_URL;

  let url = `${imgUrl}/nssPersonnel-photos/`;
  if (member.memberType === "Student") {
    url = `${imgUrl}/student-photos/`;
  }

  async function handleKeyCollectionSubmission(action) {
    if (loading) return;

    const isTransferring = action === "transfer-to-member";

    const actionDisplay = isTransferring
      ? "transfer the key to this member"
      : "return the key to authority";

    const proceed = window.confirm(
      `Are you sure you want to ${actionDisplay}?`
    );

    const requestBody = isTransferring
      ? {
          action,
          newHolderId: member.member._id,
          newHolderType: member.memberType,
        }
      : {
          action,
          submittedBy: member.member._id,
          submitterType: member.memberType,
        };

    if (proceed) {
      try {
        setLoading(true);
        const response = await fetch(
          `${apiUrl}/rooms/${member.member.roomNumber}/transfer-key`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          const error = await response.text();
          throw new Error(
            error ||
              `Failed to ${isTransferring ? "transfer key" : "return key"}`
          );
        }

        const successMessage = isTransferring
          ? "Key successfully transferred to member"
          : "Key successfully returned to authority";

        alert(successMessage);
        fetchRoomsData();
        onClose();
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        <div onClick={onClose} className={classes.link}>
          {" "}
          ✕
        </div>
        <div className={classes["profile-content"]}>
          <img
            src={`${url}${member.member.photoFileName}`}
            alt=""
            className={classes["profile-image"]}
          />
          <h2 className={classes["profile-name"]}>
            {member.member.firstName} {member.member.lastName}
          </h2>
          <div className={classes["action-btn"]}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() =>
                handleKeyCollectionSubmission("transfer-to-member")
              }
              className={`${classes.btn} ${classes["btn--collect"]}`}
            >
              Collect Key
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() =>
                handleKeyCollectionSubmission("return-to-authority")
              }
              className={`${classes.btn} ${classes["btn--submit"]}`}
            >
              Submit Key
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerificationProfile;
