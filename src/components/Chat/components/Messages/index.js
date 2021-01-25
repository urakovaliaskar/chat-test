import React from "react";
import Message from "../Message";

const Messages = ({ messages }) => {
	return (
		<div className="chat__messages">
			{messages &&
				messages.map((message, index) => (
					<>
						{index === 2 && <div className="chat__messages__date">Сегодня, 4 ноября</div>}
						<Message message={message} />
					</>
				))}
		</div>
	);
};

export default Messages;
