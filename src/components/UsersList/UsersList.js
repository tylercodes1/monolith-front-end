import React, { useContext } from "react";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import UserIcon from "./../UserIcon/UserIcon";

import "./UsersList.css";

export default function UserList() {
	const { selectedGroup, groups } = useContext(MessagePageContext);

	const members = groups.filter(
		(userGroup) => userGroup.group.groupId === selectedGroup.group.groupId
	);

	return (
		<div className="user-list">
			<p>Group Members</p>
			{members.map((userGroup) => (
				<UserCard
					key={userGroup.user.userId + userGroup.user.username}
					user={userGroup.user}
				/>
			))}
		</div>
	);
}

export function UserCard({ user }) {
	return (
		<div className="user-card">
			<UserIcon user={user} />
			<p>{user.username}</p>
		</div>
	);
}
