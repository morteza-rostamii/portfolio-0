import React, { useState } from 'react'

import {HiPlusSm} from 'react-icons/hi'
import {AiFillFileAdd} from 'react-icons/ai'
import {BsCameraVideo, BsImageFill, BsPersonVideo2} from 'react-icons/bs'

const buttons = [
  {
    id: 0,
    icon: <HiPlusSm size={24}/>,
    styles: 'z-40'
  },
  {
    id: 1,
    icon: <AiFillFileAdd size={24}/>,
    styles: 'z-30'
  },
  {
    id: 2,
    icon: <BsImageFill size={24}/>,
    styles: 'z-20'
  },
  {
    id: 3,
    icon: <BsCameraVideo size={24}/>,
    styles: 'z-10'
  },
]

const FlyoutBtn = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
    id='flyout-container'
    className='
    relative
    #bg-red-200
    w-10 h-10
    '
    >
      {
        buttons && buttons.length
        ?(
          buttons.map(b => (
            <Btn
            key={b.id}
            id={b.id}
            styles={b.styles}
            icon={b.icon}
            hover={hover}
            setHover={setHover}
            />
          ))
        ):('')
      }
    </div>
  )
}

const Btn = ({
  icon,
  styles,
  id,
  hover, setHover,
}) => {
  const gap = 10;
  const btnHeight = '40';

  const transY = id !== 0 && hover ? -((id * btnHeight) + (id * 10)) + 'px' : 0

  return (
    <button
    className={`
    ${styles}
    absolute top-0 left-0
    bg-sky-400
    p-2 rounded-full
    transition-all
    hover:bg-sky-300
    `}

    style={{
      /* id !== 1 &&  */
      //marginTop: id !== 0 && hover ? -((id * btnHeight) + (id * 10)) + 'px' : 0, 
      transform: `translateY(${transY})`, 

      height: btnHeight + 'px',
    }}

    /* on hover */
    /* hover only on the first btn */
    /* onMouseEnter={id === 0 ? () => setHover(true) : () => {}}
    onMouseLeave={id === 0 ? () => setHover(false) : () => {}} */
    onClick={() => setHover(c => !c)}
    >
      {icon}
    </button>
  )
}

export default FlyoutBtn


/* 
const Btn = ({
  icon,
  styles,
  id,
  hover, setHover,
}) => {
  const gap = 10;
  const btnHeight = '40';

  console.log(hover, -((id * btnHeight) + 10) + 'px')
  return (
    <button
    className={`
    ${styles}
    absolute top-0 left-0
    bg-sky-400
    p-2 rounded-full
    hover:bg-sky-300
    `}

    style={{
      marginTop: id !== 0 && hover ? -((id * btnHeight) + (id * 10)) + 'px' : 0, 
      height: btnHeight + 'px',
    }}

    onMouseEnter={id === 0 ? () => setHover(true) : () => {}}
    onMouseLeave={id === 0 ? () => setHover(false) : () => {}}
    >
      {icon}
    </button>
  )
}

*/