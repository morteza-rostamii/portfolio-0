import React from 'react'
import ChatProvider from './providers/ChatProvider'
import ChatUi from './ChatUi'

const ChatUiPage = () => {
  return (
    <ChatProvider>
      <ChatUi/>
    </ChatProvider>
  )
}

export default ChatUiPage