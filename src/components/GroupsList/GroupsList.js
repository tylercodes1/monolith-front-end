import React from "react";
import "./GroupsList.css";
import { Joiner } from "./../../helpers";
import ReactTooltip from 'react-tooltip';

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
    {
      group: {
        groupId: 2,
        groupName: "Potato Landers",
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
      {groups.map((userGroup) => (
        <GroupIcon
        userGroup={userGroup}
          onSelect={onSelect}
          selected={selected}
          key={userGroup.group.groupId}
        />
      ))}
    </div>
  );
}

function GroupIcon({ userGroup, onSelect, selected }) {
  return (
    <>
      <div
        data-tip={userGroup.group.groupName} data-for={userGroup.group.groupId.toString()}
        onClick={() => onSelect(userGroup)}
        className={Joiner(
          "group-icon",
          userGroup.group.groupId === selected.group.groupId && "selected-group"
        )}
      >
        {userGroup.group.groupName.substring(0, 1)}
      </div>
      <ReactTooltip place="right" type="dark" effect="solid" id={userGroup.group.groupId.toString()} />
    </> 
  );
}
