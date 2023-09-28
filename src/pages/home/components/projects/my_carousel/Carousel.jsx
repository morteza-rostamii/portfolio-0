import React, { useEffect, useRef, useState } from 'react'
import ProjCard from './ProjCard'
import { styled } from 'styled-components';

const Carousel = ({
  items,
}) => {
  const num_of_cards = items.length; 
  const index_of_last_card = num_of_cards - 1;
  let img_width_as_percentage = 50;

  // reference to each card
  const [refs, setRefs] = React.useState([]);  
  // reference to touch area
  const ref_touch_area = useRef(null); 
  // width of each card: changes by screen width
  const [card_width, set_card_width] = useState(500); 

  // last position of each card: in terms of: style.left
  const last_positions = [];

  function orderCards() {
    let mid_card_index = Math.floor(num_of_cards / 2);
    let left_cards_counter = mid_card_index;
    let right_cards_counter = 1;
    
    for (let i = 0; i < refs.length; i++) {
      const curCard = refs[i].current;
      // set transition for each card
      curCard.style.transitionDuration = '0.1s';

      if (i < mid_card_index) {
        curCard.style.left = `-${(left_cards_counter * card_width) - (card_width / 2)}px`;

        left_cards_counter--;
      }
      else if (i > mid_card_index) {
        curCard.style.left = `${(right_cards_counter * card_width) + (card_width / 2)}px`;

        right_cards_counter++;
      }
      else {
        // middle_card
        curCard.style.left = `${card_width / 2}px`
      }

    }
  }

  function setupCards() {
    // screen.width < 768 =: width: 100%
    img_width_as_percentage = window.innerWidth < 768 ? 100 : 50;

    

    if (
    /Android|webOS|IPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      // set card width: mobile
      set_card_width((img_width_as_percentage / 100) * window.screen.width);
    } else {
      // on widows
      set_card_width((img_width_as_percentage / 100) * window.innerWidth);

    }
  
    //this.view_port.style.width = `${this.card_width}px`;
  }

  function setupTouchNavigation() {
    if (!ref_touch_area) return;

    const touch_area = ref_touch_area.current;
    const speed_modifier = 0.8
    let start_touch_position = 0.0
    let updated_position = 0.0
    
    // initialize the: position of each card before touch

    // empty i case runs again
    //set_last_positions([])

    if (!last_positions.length) {
      for (let i = 0; i < refs.length; i++) {
        const card = refs[i].current;
        
        last_positions.push(parseFloat(card.style.left));
      }
    }

    // touch events
    touch_area.addEventListener('touchstart', handleTouchStart, {passive: false});
    touch_area.addEventListener('touchmove', handleTouchMove, {passive: false});
    touch_area.addEventListener('touchend', handleTouchEnd, {passive: false});

    // remove event listeners:
    function removeEvents() {
      touch_area.removeEventListener('touchstart', handleTouchStart, {passive: false});
      touch_area.removeEventListener('touchmove', handleTouchMove, {passive: false});
      touch_area.removeEventListener('touchend', handleTouchEnd, {passive: false});
    }
    
    // touch handlers
    function handleTouchStart(event) {
      // where user starts the touch
      start_touch_position = event.changedTouches[0].screenX;
      for (let i =0; i < refs.length; i++) {
        const card = refs[i].current;
        card.style.transitionDuration = '0.0s';
      }
    }

    function handleTouchMove(event) {
      event.preventDefault();
      // current position after user moves finger
      const current_touch_position = event.changedTouches[0].screenX;

      // start - current = difference =: how much finger moved
      let difference = current_touch_position - start_touch_position;
      // as user moves finger =: carousel kinda lags behind
      // 45 * 0.8 = 80% of the real position
      difference *= speed_modifier;
      
      // new start position = current finger pos
      start_touch_position = current_touch_position;
      
      // loop cards and add to style.left of each
      for (let i =0; i < refs.length; i++) {
        const card = refs[i].current;
        // style.left + difference =: - or +
        updated_position = last_positions[i] + difference;
        
      
        // we moved: -negative or +position =: add that to previous card.left to move each card 
        card.style.left = `${updated_position}px`;
        
        last_positions[i] = updated_position;
       
      }
    }
    
    function handleTouchEnd() {
      // snap back animation
    }    

    return removeEvents;
  }

  function setupInfiniteLoop() {
    const right_boundary = refs[index_of_last_card].style.left + card_width;
    const left_boundary = refs[0].style.left - card_width;

    
  }

  // create one ref for each card
  useEffect(() => {
    setRefs(
      items.map(() => React.createRef())
    );
  }, [items]);

  // order cards on carousel deck
  useEffect(() => {
    if (!refs) return;

    const listenResize = () => {
      setupCards(); 
    }

    // on resize window =: set the card_width again
    window.addEventListener('resize', listenResize);

    setupCards();
    return () => window.removeEventListener('resize', listenResize);
  }, [refs])

  // on card_width change =: order cards on ui again.
  useEffect(() => {
    if (!ref_touch_area?.current || !refs[0]?.current) return;
    const touch_area = ref_touch_area.current;
    orderCards();
    const removeEvents = setupTouchNavigation();


    return () => removeEvents();
  }, [card_width, ref_touch_area.current, refs[0]?.current]);


  if (!refs.length) return <></>

  return (
    <CssViewPort
    id='view_port'
    className='
    bg-red-200
    '
    //style={styles.view_port}
    card_width={card_width}
    >
      <div
      id='touch_area'
      className='
      '
      style={styles.touch_area}
      ref={ref_touch_area}
      >
      </div>
      <div
      id='image_container'
      className='
      bg-green-100
      '
      style={styles.image_container}
      >
        {
          items && items.length
          ?(
            items.map((x, i) => {

              return (
                <ProjCard
                ref={refs[i]}
                item={x}
                />
              )
          })
          ):('')
        }
      </div>
    </CssViewPort>
  )
}

const CssViewPort = styled.div`
  margin: 0;
  padding: 0;
  width: ${props => props.card_width}px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //overflow: hidden;
`

/* styles */
const styles = {
  view_port: {
    margin: 0,
    padding: '0',
    width: `500px`,
    height: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //overflow: 'hidden',
  },
  image_container: {
    margin: '0',
    padding: '0',
    width: 'inherit',
    height: 'inherit',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //overflow: 'hidden',
  },
  touch_area: {
    margin: '0',
    padding: '0',
    width: '100vw',
    height: '400px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //overflow: 'hidden',
    background: 'rgba(255, 0, 0, 0.2)',
    zIndex: '9999',
  }
}

export default Carousel