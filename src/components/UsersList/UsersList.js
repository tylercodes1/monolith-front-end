import React, { useContext } from "react";
import "./UsersList.css";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import UserIcon from "./../UserIcon/UserIcon";

export default function UserList() {
	const { currUsersGroups } = useContext(MessagePageContext);
	return (
		<div>
			<p>Group Members</p>
			{currUsersGroups.map((userGroup) => (
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
