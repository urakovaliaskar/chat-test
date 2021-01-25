import React from "react";
import Avatar from "../../../Avatar";
import Reply from "../Reply";
import like from "../../../../assets/images/thumb-up-fill.svg";
import send from "../../../../assets/images/check-line.svg";
import received from "../../../../assets/images/check-double-line.svg";
import read from "../../../../assets/images/check-double-primary.svg";

const status = {
	send,
	received,
	read,
};

const index = ({ message }) => {
	const style = {
		justifyContent: message.author !== "me" ? "flex-start" : "flex-end",
	};
	return (
		<div className="chat__messages__message" style={style}>
			{message.author !== "me" && (
				<Avatar name={message.author} width={38} fontSize={16} bordered />
			)}
			<div className="chat__messages__message__text">
				{message.reply && <Reply reply={message.reply} />}
				{message.text}
				<div className="chat__messages__message__footer">
					{message.like > 0 && <button>
						<img src={like} alt="like" />
						{message.like}
					</button>}
					<date>
						{message.date.toLocaleTimeString([], {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</date>
					<img src={status[message.status]} alt="" />
				</div>
			</div>
		</div>
	);
};

export default index;
