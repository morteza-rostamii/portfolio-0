import React from 'react'
import { styled } from 'styled-components'
import { cardSizes } from '../data/pinData'

import {HiDotsVertical, HiDownload, HiOutlineDotsVertical, HiOutlineDownload, HiOutlineExternalLink} from 'react-icons/hi'

const PinCard = ({
  card,
}) => {

  if (!cardSizes) return <></>; 

  return (
    <CssCard
    className='
    relative
    overflow-hidden
    rounded-lg
    cursor-pointer
    group
    transition-all ease-in-out
    '
    card_type={card.type}
    >
      <img 
      className='
      object-cover
      max-w-full h-full
      '
      src={card.image} 
      alt="pin-card-img" 
      />

      <div
      id='pin-card-overlay'
      className='
      absolute top-0 left-0 right-0 bottom-0
      flex flex-col justify-between
      
      transition-all ease-in-out
      group-hover:bg-neutral-400 
      group-hover:bg-opacity-20
      '
      >
        {/* top */}
        <div
        className='
        flex items-center justify-end
        p-4
        '
        >
        <button
        className='
        bg-rose-700 text-white
        p-2 px-3 rounded-full
        hover:bg-rose-800
        '
        >
          save
        </button>
        </div>

        {/* bottom */}
        <div
        id='card-foot'
        className='
        flex gap-2 items-center
        text-white p-3
        '
        >
          <button
          className='
          flex gap-2 items-center
          bg-neutral-600 bg-opacity-70
          p-1 px-4 rounded-full
          flex-1
          h-8

          hover:bg-neutral-700
          '
          >
            <span>
            <HiOutlineExternalLink/>
            </span>
            <span>
              something...
            </span>
          </button>
          <button
          className='
          grid place-items-center
          bg-neutral-700 bg-opacity-70
          h-8 w-8 rounded-full
          hover:bg-neutral-700
          '
          >
            <HiOutlineDownload/>
          </button>
          <button
          className='
          grid place-items-center
          bg-neutral-700 bg-opacity-70
          h-8 w-8 rounded-full
          hover:bg-neutral-700
          '
          >
            <HiOutlineDotsVertical/>
          </button>
        </div>
      </div>
    </CssCard>
  )
}

const CssCard = styled.div`
  background-color: #6ee7b7;
  //border-radius: ${props => props.card_border_radius};
  grid-row-end: span ${props => cardSizes[props.card_type] };
`

export default PinCard