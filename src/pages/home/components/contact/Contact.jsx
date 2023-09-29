import React, { useRef } from 'react'
import useIsInViewport from '../../hooks/useIsInViewport';

import TextareaAutosize from 'react-textarea-autosize';
import useValidateForm from '../../hooks/useValidateForm';
import useSendEmail from '../../hooks/useSendEmail';
import { Toaster } from 'react-hot-toast';
import PreLoader from '../PreLoader';

import {motion} from 'framer-motion'
import Error from './Error';

const Contact = () => {
  const ref = useRef(null);
  const [
    isIntersecting,
  ] = useIsInViewport(ref)

  // form input
  const [
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    handSubmitForm,
    loading,
  ] = useValidateForm();

  return (
    <div
    id='contact'
    className='
    relative
    #grid #place-items-center
    flex flex-col justify-center
    w-full h-full p-4
    '
    >
      
      <div
      id='contact-section-wrapper'
      className='
      flex flex-col gap-4 items-center full-w
      mx-auto
      w-full
      md:w-8/12
      lg:w-5/12
      '
      
      >
        <motion.div
        className='
        absolute top-24 text-center
        left-0 right-0 mx-auto
        flex flex-col items-center justify-center gap-2
        '
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        >
          <h2
          className='
          text-2xl text-gray-800 font-bold
          self-center
          border-b-4 border-emerald-400

          uppercase tracking-[20px] text-center
          '
          
          >
            Contact Me
          </h2>
          <p
          className='
          text-gray-500 tracking-[3px] text-sm
          '
          >
            send me an email here!
          </p>
        </motion.div>

        {/* form */}
        <form
        id='contact-form'
        className='
        flex flex-col gap-3 
        w-full mt-24 z-10
        '

        onSubmit={(e) => handSubmitForm(e)}
        >
          <div
          className='
          flex flex-col
          '
          >
            <input 
            className='
            bg-neutral-100 p-4 rounded-md
            border-none w-full text-gray-500
            focus:outline-purple-400 
            '
            id={'contact-name'} 
            type="text" 
            name='name'
            placeholder='enter name..'

            value={name.name}
            onChange={(e) => setName(c => ({
              ...c,
              name: e.target.value,
            }))}
            />

            {
              name.errors && name.errors.length
              ?(
                name.errors.map((err) => (
                  <Error
                  err={err}
                  />
                ))
              ):('')
            }
          </div>

          <div
          className='
          flex flex-col
          '
          >
            <input 
            id="contact-email" 
            className='
            bg-neutral-100 p-4 rounded-md
            border-none w-full text-gray-500
            focus:outline-purple-400 
            '
            type="email" 
            name="email" 
            placeholder='enter email..'

            value={email.email}
            onChange={(e) => setEmail(c => ({
              ...c, email: e.target.value,
            }))}
            />

            {
              email.errors && email.errors.length
              ?(
                email.errors.map((err) => (
                  <Error
                  err={err}
                  />
                ))
              ):('')
            }
          </div>

          <div
          className='
          flex flex-col
          '
          >
            <TextareaAutosize
            className='
            bg-neutral-100 p-4 rounded-md
            border-none w-full text-gray-500
            focus:outline-purple-400 
            '
            placeholder='enter your message..'
            minRows={3}

            value={message.message}
            onChange={(e) => setMessage(c => ({
              ...c, message: e.target.value,
            }))}
            />

            {
              message.errors && message.errors.length
              ?(
                message.errors.map((err) => (
                  <Error
                  err={err}
                  />
                ))
              ):('')
            }
          </div>

          <button
          className='
          bg-emerald-400
          py-3 px-4 rounded-md 
          text-white font-bold capitalize
          hover:bg-emerald-500 transition-all
          '
          >
            send
          </button>
        </form>

      </div>
      
      {/* toast */}
      <Toaster />

      {/* loading screen */}
      {
        loading
        ? (
          <PreLoader/>
        ):('')
      }

      {/* api observer */}
      <div
      className='
      absolute bottom-10 left-0
      '
      ref={ref}
      ></div>
    </div>
  )
}

export default Contact