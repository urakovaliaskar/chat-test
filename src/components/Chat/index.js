import React, { useState } from "react";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Footer from "./components/Footer";

const currentUser = "me";

const Chat = () => {
	const [messages, setMessage] = useState([
		{
			id: 0,
			author: "Михаилов Константин",
			text:
				"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			reply: null,
			date: new Date("12.10.2020 14:23"),
			like: 2,
		},
		{
			id: 1,
			author: "me",
			text:
				"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			reply: {
				id: 2,
				author: "Михаилов Алексей",
				text:
					"Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный...",
				date: new Date("12.10.2020 12:20"),
			},
			date: new Date("12.10.2020 14:23"),
			like: 1,
			status: "read",
    },
    {
			id: 0,
			author: "Михаилов Константин",
			text:
				"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			reply: null,
			date: new Date("04.11.2020 14:23"),
			like: 0,
    },
    {
			id: 0,
			author: "me",
			text:
				"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			reply: null,
			date: new Date("04.11.2020 14:23"),
      like: 0,
      status: 'send'
		},
	]);

	const handleMessageSubmit = (message) => {
		setMessage([
			...messages,
			{
				id: messages.length,
				author: currentUser,
				text: message,
				reply: null,
				date: new Date(),
				like: 0,
				status: "send",
			},
		]);
	};

	return (
		<div className="chat">
			<Header />
			<Messages messages={messages} />
			<Footer onSubmit={handleMessageSubmit} />
		</div>
	);
};

export default Chat;
