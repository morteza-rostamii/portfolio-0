import { faker } from '@faker-js/faker';
import React from 'react'
import { styled } from 'styled-components'
import { getPinCards } from './data/pinData';
import { cardSizes } from './data/pinData';
import PinCard from './components/PinCard';

const cardWidth = '250px';
//const cardBorderRadius = '16px';
const rowSize = 10;

// get the cards from db
const cards = getPinCards();

const Pinterest = () => {

  //console.log(cards)
  return (
    <div
    className='
    flex flex-col #items-center #justify-center
    flex-1 bg-neutral-100   
    '
    >

      <CssGrid
      className='
      container mx-auto
      #bg-white
      mt-10
      '
      cardwidth={cardWidth}
      row_size={rowSize}
      >
        {
          cards && cards.length
          ?(
            cards.map((c) => (
              <PinCard
              key={c.id}
              card={c}
              />
            ))
          ):('')
        }
      </CssGrid>
    </div>
  )
}

const CssGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${props => props.cardwidth});
  grid-template-rows: ${props => props.row_size};
  grid-gap: 10px;
  justify-content: center;
`

export default Pinterest