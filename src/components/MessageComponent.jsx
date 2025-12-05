import { use } from 'react';

function MessageComponent({ messagePromise }) {
  const message = use(messagePromise);

  return (
    <div className="message-card">
      <h2>{message.title}</h2>
      <p>{message.content}</p>
      <small>Отримано: {message.timestamp}</small>
    </div>
  );
}

export default MessageComponent;
