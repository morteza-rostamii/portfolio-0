import React, { createContext, useEffect, useState } from 'react'
import { createUsers, generateMessage } from '../data/data';

let users = JSON.parse(localStorage.getItem('users'));

// if: localStorage has users =: do not create users again.
if (!users) {
  const users = createUsers(2);
  localStorage.setItem('users', JSON.stringify(users));
}

// context
export const ChatContext = createContext({});

const ChatProvider = ({
  children,
}) => {

  const [messages, setMessages] = useState([]);
  const [authUser, setAuthUser] = useState(users[0]);
  const [receiver, setReceiver] = useState(users[1]);

  const [isTyping, setIsTyping] = useState(false);

  function mixMessages() {
    const msgs = [...authUser.messages, ...receiver.messages];
    // sort by timestemp
    msgs.sort((a, b) => a.timestemp - b.timestemp);
    //console.log('-msgs:: ', msgs)
    setMessages(msgs);
  }

  function receiverSendMessage() {
    // start: typing indecator animation
    setIsTyping(true);

    setTimeout(() => {
      // receiver posts message
      setReceiver(c => ({
        ...c,
        messages: [
          ...c.messages,
          generateMessage(c.id),
        ]
      }));

      // stop: typing animation
      setIsTyping(false);
    }, 3000);
  }

  // run if new message posted
  useEffect(() => {
    console.log('new message');
    mixMessages();
    
  }, [authUser.messages, receiver.messages]);

  

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
  }, []);

  return (
    <ChatContext.Provider
    value={{
      messages: messages,
      authUser: authUser,
      setAuthUser: setAuthUser,
      receiver: receiver,
      mixMessages: mixMessages, 
      users: users,
      isTyping: isTyping,
      receiverSendMessage: receiverSendMessage,
    }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider