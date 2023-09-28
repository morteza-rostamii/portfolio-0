import React from 'react'

import {FaEllipsisVertical, FaPaperclip} from 'react-icons/fa6'

const ChatBoxHead = ({
  authUser,
}) => {
  return (
    <div
    id='chat-box-head'
    className='
    flex justify-between items-center
    bg-white
    border-b-2 p-3
    '
    >
      {/* left */}
      <div
      id='box-head-left'
      className='
      flex gap-3 items-center
      '
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
          src={authUser.avatar} 
          alt="" />
        </div>

        <div
        className='
        '
        >
          <p>
            {authUser.name}
          </p>
          <p>
            last online 5 hours ago
          </p>
        </div>
      </div>
    
      {/* right */}
      <div
      id='box-head-right'
      className='
      flex gap-3 items-center
      '
      >
        <button>
          <FaPaperclip
          size={24}
          />
        </button>
        <button>
          <FaEllipsisVertical
          size={24}
          />
        </button>
      </div>
    </div>
  )
}

export default ChatBoxHead