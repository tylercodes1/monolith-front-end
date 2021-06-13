import React, { useContext } from "react";
import "./UsersList.css";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import UserIcon from "./../UserIcon/UserIcon";
import allGroups from "./../../dummyData";

export default function UserList() {
	const { selectedGroup, allGroups } = useContext(MessagePageContext);

	const members = allGroups.filter(
		(userGroup) => userGroup.group.groupId === selectedGroup.group.groupId
	);

	return (
		<div>
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
