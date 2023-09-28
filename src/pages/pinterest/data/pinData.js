import { faker } from "@faker-js/faker";

const cardTypes = ['small', 'medium', 'large'];
export const cardSizes = {
  small: 26,
  medium: 33,
  large: 45,
};

function generatePost(inx) {
  let img = '';
  if (inx % 2 === 0) {
    console.log('-love')
    img = faker.image.urlPlaceholder({
      format: 'gif',
    });
  } {
    img = faker.image.urlPicsumPhotos();
  }

  return {
    id: faker.string.uuid(),
    image: img,
    type: cardTypes[faker.datatype.number({
      max: cardTypes.length - 1,
    })]
  }
}

function createCards(count) {
  const cards = 
    Array.from(Array(count).keys()).map((x, i) => {
      return generatePost(i);
    })
  return cards;
}

function getPinCards() {
  let cards = JSON.parse(localStorage.getItem('pin-cards'));

  if (!cards) {
    cards = createCards(30);
    localStorage.setItem('pin-cards', JSON.stringify(cards));
  }
  return cards;
}

export {getPinCards}