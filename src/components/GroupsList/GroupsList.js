import React, { useContext } from "react";
import "./GroupsList.css";
import { Joiner } from "./../../helpers";
import ReactTooltip from "react-tooltip";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import allGroups from "./../../dummyData";

export default function GroupsList() {
  const { selectedUser, setSelectedGroup, selectedGroup } = useContext(MessagePageContext);

  const currUsersGroups = getCurrGroups(selectedUser);

  return (
    <div>
      {currUsersGroups.map((userGroup) => (
        <GroupIcon
          userGroup={userGroup}
          onSelect={setSelectedGroup}
          selected={selectedGroup}
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
        data-tip={userGroup.group.groupName}
        data-for={userGroup.group.groupId.toString()}
        onClick={() => onSelect(userGroup)}
        className={Joiner(
          "group-icon",
          userGroup.group.groupId === selected.group.groupId && "selected-group"
        )}
      >
        {userGroup.group.groupName.substring(0, 1)}
      </div>
      <ReactTooltip
        place="right"
        type="dark"
        effect="solid"
        id={userGroup.group.groupId.toString()}
      />
    </>
  );
}

function getCurrGroups(user) {
  return allGroups.filter((userGroup) => userGroup.user.userId === user.userId);
}