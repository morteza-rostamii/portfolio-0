import React, { useContext, useEffect, useMemo, useState } from 'react'

import { createUsers, once } from './data/data';
import ChatItem from './components/ChatItem';
import useOnce from '../../hooks/useOnce';
import ChatBox from './components/ChatBox';
import ChatBoxHead from './components/ChatBoxHead';
import ChatBoxFoot from './components/ChatBoxFoot';
import ChatProvider, { ChatContext } from './providers/ChatProvider';

const ChatUi = () => {
  
  const {
    messages, 
    authUser,
    receiver,
    mixMessages,
    users,
  } = useContext(ChatContext);

  if (!messages) return <></>

  return (

    <div
    className='
    grid place-items-center
    flex-1 p-4
    '
    >
      <section
      id='chat-section'
      className='
      flex flex-col
      bg-neutral-50 p-4 rounded-md
      w-full h-full
      lg:w-8/12
      '
      >
        <ChatBoxHead
        authUser={authUser}
        />
        <ChatBox
        messages={messages}
        authUser={authUser}
        users={users}
        />
        <ChatBoxFoot/>
      </section>
    </div>

  )
}

export default ChatUi