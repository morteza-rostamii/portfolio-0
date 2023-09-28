import React from 'react'

import Typewriter from 'typewriter-effect'

const TypeWriter = () => {
  return (
    <Typewriter
    options={{
      autoStart: true,
      loop: true,
    }}
    onInit={(typewriter) => {
    typewriter.typeString('-> Frontend Developer')
      .callFunction(() => {
        //console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        //console.log('All strings were deleted');
      })
      .start();
    }}
    />
  )
}

export default TypeWriter