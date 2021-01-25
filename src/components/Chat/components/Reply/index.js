import React from "react";

const Reply = ({ reply }) => {
	return (
		<div className="chat__messages__message__text__reply">
			<span>{reply.author}</span>
			<date>{reply.date.toLocaleDateString()}</date>
			<date>
				{reply.date.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				})}
			</date>
			<br />
			<span>{reply.text}</span>
		</div>
	);
};

export default Reply;
