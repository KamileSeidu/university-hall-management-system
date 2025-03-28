import { useState } from "react";
import RoomMember from "./RoomMember";
import classes from "./RoomMembers.module.css";
import VerificationProfile from "./VerificationProfile";

function RoomMembers({ fetchRoomsData, roomMembers }) {
  const [selectedRoomMember, setSelectedRoomMember] = useState(null);

  const roomMemberElements = roomMembers.map((roomMemberData, index) => (
    <RoomMember
      key={roomMemberData._id || index}
      member={roomMemberData.member}
      memberType={roomMemberData.memberType}
      onSelect={() => setSelectedRoomMember(roomMemberData)}
    />
  ));

  return (
    <div>
      <ul className={classes["room-members"]}>{roomMemberElements}</ul>

      {selectedRoomMember && (
        <VerificationProfile
          member={selectedRoomMember}
          onClose={() => setSelectedRoomMember(null)}
          fetchRoomsData={fetchRoomsData}
        />
      )}
    </div>
  );
}

export default RoomMembers;
