import React from "react";
import "./GroupsList.css";
import { Joiner } from "./../../helpers";

export default function GroupsList({ onSelect, selected }) {
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
        <GroupIcon group={group} onSelect={onSelect} selected={selected} key={group.group.groupId}/>
      ))}
    </div>
  );
}

function GroupIcon({ group, onSelect, selected }) {
  return (
    <div onClick={() => onSelect(group)} className={Joiner("group-icon", (group.group.groupId === selected.group.groupId && "selected-group"))}>{group.group.groupName.substring(0, 1)}</div>
  );
}
