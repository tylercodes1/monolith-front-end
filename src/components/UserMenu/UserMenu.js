import React, { useContext } from "react";
import { Joiner } from "../../helpers";
import MessagePageContext from "./../pages/Context/MessagePageContext";
import UserIcon from "./../UserIcon/UserIcon";
import "./UserMenu.css";

export default function UserMenu() {
	const { users, setSelectedUser, selectedUser } =
		useContext(MessagePageContext);
	return (
		<div id="user-menu">
			<p>Select the user you'd like to be!</p>
			<div id="user-menu-items">
				{users.map((user) => (
					<UserMenuItem
						key={user.userId}
						user={user}
						setSelected={setSelectedUser}
						selected={selectedUser}
					/>
				))}
			</div>
		</div>
	);
}

function UserMenuItem({ user, setSelected, selected }) {
	console.log(selected, user);

	return (
		<div
			key={user.userId}
			className={Joiner(
				"user-menu-item",
				selected.userId === user.userId && "selected-user"
			)}
			onClick={() => setSelected(user)}
		>
			<UserIcon user={user} small />
			<p>{user.username}</p>
		</div>
	);
}
