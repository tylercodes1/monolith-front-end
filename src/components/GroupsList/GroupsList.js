import React, { useContext } from "react";
import "./GroupsList.css";
import { Joiner } from "./../../helpers";
import ReactTooltip from "react-tooltip";
import MessagePageContext from "./../pages/Context/MessagePageContext";

export default function GroupsList() {
	const { currUsersGroups, setSelectedGroup, selectedGroup } =
		useContext(MessagePageContext);

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
				data-class="shadow"
				onClick={() => onSelect(userGroup)}
				className={Joiner(
					"group-icon",
					userGroup.group.groupId === selected.group.groupId &&
						"selected-group"
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
