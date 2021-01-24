import React, {useState} from "react";
import Header from "./components/Header";
import Messages from './components/Messages';
import Footer from './components/Footer';

const currentUser = 'me';

const Chat = () => {
	const [messages, setMessage] = useState([
		{
			id: 0,
			author: "Михаилов Алексей",
			text:
				"Равным образом дальнейшее развитие различных форм деятельности способствует подготовке и реализации существенных финансовых условий.",
			reply: null,
      date: new Date("12.10.2020 12:20"),
      like: 2,
		},
  ]);

  
  const handleMessageSubmit = message => {
    setMessage([...messages, {
      id: messages.length,
      author: currentUser,
      text: message,
      reply: null,
      date: new Date(),
      like: 0,
      received: false,
      read: false
    }])
  }

	return (
		<div className="chat">
			<Header />
			<Messages messages={messages} />
      <Footer onSubmit={handleMessageSubmit} />
		</div>
	);
};

export default Chat;
