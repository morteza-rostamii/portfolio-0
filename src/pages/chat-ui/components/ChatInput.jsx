import React, { useContext, useState } from 'react'
import { FaFaceSmile } from 'react-icons/fa6'
//import {BsSendFill} from 'react-icons/bs'
import {BiSolidSend} from 'react-icons/bi'
import { ChatContext } from '../providers/ChatProvider';
import { faker } from '@faker-js/faker';
//import { generateMessage } from '../data/data';

const ChatInput = () => {
  const [msgInput, setMsgInput] = useState(''); 
  const {
    authUser,
    setAuthUser,
    receiverSendMessage,
  } = useContext(ChatContext);

  function handSubmit(e) {
    e.preventDefault();

    setAuthUser(c => ({
      ...c,
      messages: [
        ...c.messages,
        {
          id: faker.string.uuid(),
          text: msgInput,
          userId: authUser.id,
          timestemp: new Date().getTime(),
        },
      ]
    }))

    setMsgInput('');

    receiverSendMessage();
  }

  return (
    <form
    className='
    flex gap-3
    w-full
    '
    onSubmit={(e) => handSubmit(e)}
    >
      <input 
      id="" 
      className='
      border-none
      outline-none
      bg-neutral-100 
      p-3 rounded-sm
      flex-1
      '
      type="text" 
      placeholder='type a message now'

      value={msgInput}
      onChange={(e) => setMsgInput(e.target.value)}
      />

      <div
      className='
      flex items-center gap-3
      '
      >
        <button
        type='button'
        className='
        text-yellow-400
        '
        >
          <FaFaceSmile 
          size={24}
          />
        </button>
        <button
        className='
        text-sky-400
        '
        >
          <BiSolidSend
          size={24}
          />
        </button>
      </div>
    </form>
  )
}

export default ChatInput