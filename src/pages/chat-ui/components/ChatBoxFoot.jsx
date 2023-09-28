import React from 'react'
import FlyoutBtn from './FlyoutBtn'
import ChatInput from './ChatInput'

const ChatBoxFoot = () => {
  return (
    <div
    className='
    flex justify-between items-center gap-3
    bg-white border-t-2 p-3
    '
    >
      {/* flyout button */}
      <FlyoutBtn/>
      {/* chat input */}
      <ChatInput/>
    </div>
  )
}

export default ChatBoxFoot