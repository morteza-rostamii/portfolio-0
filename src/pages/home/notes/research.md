<!-- 

# carousel:
==

# Card
# Deck

  cards = []

==

# left side of deck

# active card

# right side of deck

# elements:
==

<>

button: prev
button: next

div: touch_area
div: view_port
div: images_container
  cards.map

# Card:
==
  div: card
    # img

# how to make a carousel: 
==

# view_port:  
  margin: 0
  padding: 0
  width: 500px
  height: 300px
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  overflow: hidden

# images_container:
  margin: 0
  padding: 0
  width: inherit
  height: inherit
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  overflow: hidden

# touch_area:  
  margin: 0
  padding: 0
  width: 100vw
  height: 300px
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  overflow: hidden
  background: rgba(255, 0, 0, 0.2)
  z-index: 9999  

# card style:

# card
  margin: 0
  padding: 0
  width: inherit
  height: inherit
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

# img
  max-height: 100%
  max-width: 100%
  position: relative
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  
</>

# state:
  # img_width_as_percentage = 50;

  // if: window.innerWidth < 768 =: img_width = 100%
  // else: img_width = 50%
  img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;

  window.addEventListener('resize', () => {
    // set the card_width based on: img_width_as_percentage

    card_width = 0

    if (
    /Android|webOS|IPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      card_width = (img_width_as_percentage / 100) * window.screen.width;
    } else {
      card_width = (img_width_as_percentage / 100) * window.innerWidth;
    }

    this.view_port.style.width = `${this.card_width}px`;

    this.order_cards();
  })

// laysout the images on the deck
# order_cards() {
  // width of each card
  const card_width = styles.view_port.width

  // number_of_cards_by_index =: [0 , 1] =: 2 cards
  // total_cards / 2 = middle_index_of_array
  const middle_card_by_index = Math.floor(this.state.number_of_cards_by_index / 2);

  let counter_for_right = 1;

  let counter_for_left = middle_card_by_index;

  // loop through number of images: slides
  for (let i = 0; i < this.images.children.length; i++) {
    // set transition
    this.images.children[i].style.transitionDuration = 0.0s

    // if: left side of the array
    if (i < middle_card_by_index) {
      // set the: image.style.left = pull the image to the left:
      // -left = mid=2 * card_width =: pull card to left as much as width_of_2_cards;
      // - card_width / 2 =: go another half to the left =: to center the middle_card
      ==============================================================
      this.images.children[i].style.left = `-${(counter_for_left * card_width) - (card_width / 2)}`;

      /*
      middle_card_by_index = 1
      counter_for_left = middle_card_by_index;

      counter_for_left --; =: 0

      when: counter_for_left = 0 =: counter_for_left * card_width = 0
      so: we can't go to left anymore
      */

      counter_for_left--;
    }
    else if (i > middle_card_by_index) {

      // an array of ref to each image:
      // counter_for_right = 1 =: then: 2 and so on...
      this.images.children[i].style.left = `${(counter_for_right * card_width) + (card_width / 2)}`;

      counter_for_right++;
    }
    else {
      // i === middle_card_by_index
      // drag to left =: just half of card_width
      this.images.children[i].style.left = `${(card_width / 2)px}`;
    }
  }


}

 -->

<!-- 

# touch navigation:

const start_touch_position = 0.0
const updated_position = 0.0
const speed_modifier = 0.8
const last_positions = []

for (let i = 0; i < refs.length; i++) {
  last_position.push(parseFloat(refs[i].style.left))
}

// events

touch_area.addEventListener('touchstart', handleTouchStart, {passive: false});
touch_area.addEventListener('touchmove', handleTouchMove, {passive: false});
touch_area.addEventListener('touchend', handleTouchEnd, {passive: false});

// handlers

function handleTouchStart(event) {
  start_touch_position = event.changedTouches[0].screen;

  for (let i =0; i < refs.length; i++) {
    refs[i].style.transitionDuration = '0.0s';
  }
}

function handleTouchMove(event) {
  event.preventDefault();

  const current_touch_position = event.changedTouches[0].screen;
  let difference = current_touch_position - start_touch_position;
  difference *= speed_modifier;

  start_touch_position = current_touch_position;

  for (let i =0; i < refs.length; i++) {

    // between: start_touch_position vs end_touch_position = difference
    // add this difference to each card last_position
    updated_position = last_positions[i] + difference;

    // we moved: -negative or +position =: add that to previous card.left to move each card 
    refs[i].style.left = `${updated_position}px`;

    // last_position = new updated_position
    last_positions[i] = updated_position;
  }
}

function handleTouchEnd() {
  // snap back animation
}

# button navigation:

# wheel navigation:

-->

<!-- 

# infinite loop of cards: repeat
==

// start and end of cards: 
// card at far_left and far_right
const right_boundary = refs[refs.length - 1].style.left + card_width;
const left_boundary = refs[0].style.left - card_width;

/*

card_width = 20
last_positions: [-50, -30, -10, 4]
*/

function handleBoundaries() {
  // if: lastCard.style.left >= right_boundary
  if (last_positions[refs.length - 1] >= right_boundary) {
    const beginning_of_deck = last_positions[0] - card_width;
    refs[refs.length - 1].style.left = `${beginning_of_deck}px`;
    last_positions[refs.length - 1] = beginning_of_deck;

    items.insertBefore(items[items.length - 1], items[0]);
    last_positions.splice(0, 0, last_positions.pop());
  }
  else if (last_positions[0] <= left_boundary) {
    const end_of_deck = last_positions[items.length - 1] + card_width;
    refs[0].style.left = `${end_of_deck}px`;
    last_positions[0] = end_of_deck;

    items.appendChild(items[0], items[items.length - 1]);
    last_positions.splice(items.length - 1, 0, last_positions.shift());
  }
}


 -->