// import { useState } from "react";
// import classes from "./Room.module.css";
// import RoomMembers from "./RoomMembers";
// import { getAuthToken } from "../../loaders/getToken";
// import { motion } from "framer-motion";

// function Room({ fetchRoomsData, currentKeyHolder, roomMembers, roomNumber }) {
//   const [keyHistory, setKeyHistory] = useState([]); // Store key history
//   const [showKeyHistory, setShowKeyHistory] = useState(false); // Toggle view

//   const token = getAuthToken();

//   let keyHolderDisplay = "Hall Assistant";
//   if (currentKeyHolder?.holder?.firstName && currentKeyHolder.holder.lastName) {
//     keyHolderDisplay = `${currentKeyHolder.holder.firstName} ${currentKeyHolder.holder.lastName}`;
//   }

//   // Fetch key history and toggle view
//   async function toggleView() {
//     if (!showKeyHistory) {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/rooms/${roomNumber}/key-history`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               "x-auth-token": token,
//             },
//           }
//         );

//         if (!response.ok) {
//           const error = await response.text();
//           throw new Error(error || "Failed to fetch history");
//         }

//         const data = await response.json();

//         // Get the last 5 transactions
//         const lastFiveTransactions = data.slice(-5).reverse();
//         setKeyHistory(lastFiveTransactions);
//       } catch (error) {
//         console.error("Error fetching history:", error.message);
//       }
//     }

//     setShowKeyHistory((prev) => !prev); // Toggle the view
//   }

//   // Format date and time
//   function formatDateTime(timestamp) {
//     const date = new Date(timestamp);
//     return date.toLocaleString(); // Formats to "MM/DD/YYYY, HH:MM:SS AM/PM"
//   }

//   return (
//     <div className={`${classes["room-card"]} `}>
//       <div className={classes["room-header"]}>
//         <h1>Room {roomNumber}</h1>
//         <h2>Key Holder: {keyHolderDisplay}</h2>
//         <button
//           onClick={toggleView}
//           className={`${classes.btn} ${classes["key-history"]}`}
//         >
//           {showKeyHistory ? "Show Room Members" : "Show Key History"}
//         </button>
//       </div>

//       {/* Toggle between Key History and Room Members */}
//       {showKeyHistory ? (
//         <motion.div layout className={classes["history-container"]}>
//           <h3>Last 5 Key Transactions:</h3>
//           {keyHistory.length > 0 ? (
//             <motion.ul layout>
//               {keyHistory.map((entry, index) => {
//                 const isIssued = entry.action === "ISSUED";
//                 const person = isIssued ? entry.holder : entry.submittedBy;

//                 return (
//                   <li key={index}>
//                     <strong>{isIssued ? "Collected" : "Submitted"} by:</strong>{" "}
//                     {person?.firstName || "Unknown"}{" "}
//                     {person?.lastName || "User"} <br />
//                     <strong>Date:</strong> {formatDateTime(entry.timestamp)}
//                   </li>
//                 );
//               })}
//             </motion.ul>
//           ) : (
//             <p>No key history available.</p>
//           )}
//         </motion.div>
//       ) : (
//         <RoomMembers
//           roomMembers={roomMembers}
//           fetchRoomsData={fetchRoomsData}
//         />
//       )}
//     </div>
//   );
// }

// export default Room;

import { useState } from "react";
import classes from "./Room.module.css";
import RoomMembers from "./RoomMembers";
import { getAuthToken } from "../../loaders/getToken";
import { motion, AnimatePresence } from "framer-motion";

function Room({ fetchRoomsData, currentKeyHolder, roomMembers, roomNumber }) {
  const [keyHistory, setKeyHistory] = useState([]); // Store key history
  const [showKeyHistory, setShowKeyHistory] = useState(false); // Toggle view

  const token = getAuthToken();

  let keyHolderDisplay = "Hall Assistant";
  if (currentKeyHolder?.holder?.firstName && currentKeyHolder.holder.lastName) {
    keyHolderDisplay = `${currentKeyHolder.holder.firstName} ${currentKeyHolder.holder.lastName}`;
  }

  // Fetch key history and toggle view
  async function toggleView() {
    if (!showKeyHistory) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/rooms/${roomNumber}/key-history`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          }
        );

        if (!response.ok) {
          const error = await response.text();
          throw new Error(error || "Failed to fetch history");
        }

        const data = await response.json();

        // Get the last 5 transactions
        const lastFiveTransactions = data.slice(-5).reverse();
        setKeyHistory(lastFiveTransactions);
      } catch (error) {
        console.error("Error fetching history:", error.message);
      }
    }

    setShowKeyHistory((prev) => !prev); // Toggle the view
  }

  // Format date and time
  function formatDateTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Formats to "MM/DD/YYYY, HH:MM:SS AM/PM"
  }

  return (
    <div className={`${classes["room-card"]}`}>
      <div className={classes["room-header"]}>
        <h1>Room {roomNumber}</h1>
        <h2>Key Holder: {keyHolderDisplay}</h2>

        {/* Animated Button */}
        <motion.button
          onClick={toggleView}
          className={`${classes.btn} ${classes["key-history"]}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {showKeyHistory ? "Show Room Members" : "Show Key History"}
        </motion.button>
      </div>

      {/* View Transition Animation */}
      <AnimatePresence mode="wait">
        {showKeyHistory ? (
          <motion.div
            key="history"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={classes["history-container"]}
          >
            <h3>Last 5 Key Transactions:</h3>
            {keyHistory.length > 0 ? (
              <motion.ul layout>
                {keyHistory.map((entry, index) => {
                  const isIssued = entry.action === "ISSUED";
                  const person = isIssued ? entry.holder : entry.submittedBy;

                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <strong>
                        {isIssued ? "Collected" : "Submitted"} by:
                      </strong>{" "}
                      {person?.firstName || "Unknown"}{" "}
                      {person?.lastName || "User"} <br />
                      <strong>Date:</strong> {formatDateTime(entry.timestamp)}
                    </motion.li>
                  );
                })}
              </motion.ul>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                No key history available.
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="room-members"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <RoomMembers
              roomMembers={roomMembers}
              fetchRoomsData={fetchRoomsData}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Room;
