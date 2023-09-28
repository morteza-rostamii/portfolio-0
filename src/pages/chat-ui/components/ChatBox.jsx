import React, { useContext } from 'react'
import ChatItem from './ChatItem'
import TypingIndicator from './TypingIndicator'
import { ChatContext } from '../providers/ChatProvider';

const ChatBox = ({
  messages,
  authUser,
  users,
}) => {
  const {
    isTyping,
  } = useContext(ChatContext);

  return (
    <div
    id='chat-box'
    className='
    relative
    flex flex-col gap-14
    bg-white
    w-full p-3
    flex-1
    #overflow-y-scroll
    #h-96
    '

    style={{
      flex: '1 1 auto',
      overflowY: "auto",
      height: "0px",
    }}
    
    >
      {
        messages && messages.length
        ?(
          messages.map(x => {
            /* console.log('-boob', users.filter(u => {
              console.log(u.id, '-e-o-*', x.userId)
              return u.id === x.userId;
            })) */
            return (
              <ChatItem
              key={x.id}
              msg={x}
              user={[...users].filter(u => u.id === x.userId)}
              authUser={authUser}

              />
            )
          })
        ):('')
      }

      {/* typing indicator */}
      {
        isTyping && <TypingIndicator/>
      }
    </div>
  )
}

export default ChatBox