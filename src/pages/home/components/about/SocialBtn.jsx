import React from 'react'
import { styled } from 'styled-components'

const SocialBtn = ({
  social,
}) => {
  return (
    <CssSocialBtn
    className='
    flex items-center gap-2
    bg-emerald-400 p-3 rounded-full
    '
    >
      <span>
        {social.icon}
      </span>
    </CssSocialBtn>
  )
}

const CssSocialBtn = styled.div`
  cursor: pointer;
  &:hover {
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    animation: gelatine 0.5s 1;
  } 

  @keyframes gelatine {
  
    0%, 100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`

export default SocialBtn