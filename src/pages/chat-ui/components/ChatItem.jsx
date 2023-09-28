import React from 'react'

const ChatItem = ({
  msg,
  // [{}]
  user,
  authUser,
}) => {
  user = user[0];

  if (!user || !authUser) return <></>

  //console.log('___4', msg)
  return (
    <div
    className={`
    ${user.id === authUser.id ? 'flex-row-reverse' : 'flex-row'}
    ${user.id === authUser.id ? 'self-end' : 'self-start'}
    flex gap-3
    `}

    >
      <div
      id='chat-avatar-container'
      className='
      shrink-0
      '
      >
        <img 
        className='
        w-12 h-12 rounded-full
        max-w-full
        '
        src={user.avatar} 
        alt="" />
      </div>

      <div
      id='chat-text-container'
      className='
      p-3 rounded-md
      w-fit
      max-w-sm
      '
      style={{
        backgroundColor: user.color
      }}
      >
        <p
        id='chat-text'
        >
          {msg.text}
        </p>
      </div>
    </div>
  )
}

export default ChatItem