import React from "react";
import MessageInput from "./../MessageInput/MessageInput";

import "./Dialog.css";
import Messages from "./../Messages/Messages";

const Dialog = () => {
	return (
		<div className="dialog">
			<Messages />
			<MessageInput />
		</div>
	);
};

export default Dialog;
