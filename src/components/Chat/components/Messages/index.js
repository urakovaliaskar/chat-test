import React from 'react';
import Message from '../Message'

const Messages = ({messages}) => {
  return (
    <div className="chat__messages">
      {messages && messages.map(message => (
        <Message message={message} />
      ))}
    </div>
  );
}

export default Messages;
