import React, { useEffect } from "react";
import smile from "../../../../assets/images/emotion-happy-line.svg";
import attach from "../../../../assets/images/attachment-2.svg";

const Footer = ({ onSubmit }) => {
	useEffect(() => {
		const input = document.querySelector("#input");
		input.addEventListener("keydown", (e) => {
			if (e.keyCode === 13) {
				if (e.ctrlKey) {
					e.target.value += "\n";
					e.target.scrollTop = e.target.scrollHeight;
				} else {
					onSubmit(e.target.value);
					e.target.value = "";
				}
			}
		});
		return () => {
			input.removeEventListener("keydown", () => {});
		};
	}, []);

	const handleSubmit = () => {
		const input = document.querySelector("#input");

		onSubmit(input.value);
		input.value = "";
	};

	return (
		<footer className="chat__footer">
			<textarea id="input" placeholder="Написать сообщение..." />
			<img className="smile" src={smile} alt="" />
			<img className="attach" src={attach} alt="" />
			<button onClick={handleSubmit}>Отправить</button>
		</footer>
	);
};

export default Footer;
