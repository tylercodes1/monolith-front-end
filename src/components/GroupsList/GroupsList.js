import React from "react";
import "./GroupsList.css";

export default function GroupsList() {
  const groups = [
    {
      group: {
        groupId: 0,
        groupName: "Burger Lovers",
      },
      id: 0,
      user: {
        email: "abc@gmail.com",
        firstName: "Annie",
        lastName: "Tang",
        userId: 0,
        username: "Tangry",
      },
    },
    {
      group: {
        groupId: 1,
        groupName: "Safemoon To the Moon",
      },
      id: 1,
      user: {
        email: "def@gmail.com",
        firstName: "Tyler",
        lastName: "Kim",
        userId: 1,
        username: "GamerGhost99",
      },
    },
  ];

  return (
    <div>
      {groups.map((group) => (
        <GroupIcon group={group} />
      ))}
    </div>
  );
}

function GroupIcon({ group }) {
  return <div className="group-icon">{group.group.groupName.substring(0, 1)}</div>;
}
