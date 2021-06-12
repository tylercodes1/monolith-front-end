import React, { useState } from "react";
import "./MessagePage.css";
import Dialog from "./../Dialog/Dialog";
import UsersList from "./../UsersList/UsersList";
import GroupsList from "./../GroupsList/GroupsList";

const MessagePage = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedGroup, setSelectedGroup] = useState({
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
  });

  return (
    <div className="message-page">
      <GroupsList onSelect={setSelectedGroup} selected={selectedGroup} />
      <Dialog />
      <UsersList onSelect={setSelectedUser} selected={selectedUser} />
    </div>
  );
};

export default MessagePage;
