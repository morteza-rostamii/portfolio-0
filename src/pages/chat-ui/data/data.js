import { faker } from "@faker-js/faker";

const colors = ['orange', 'lightblue'];

// generate message
export function generateMessage(userId) {
  return {
    id: faker.string.uuid(),
    text: faker.lorem.sentence(10),
    userId: userId,
    timestemp: new Date().getTime(),
  }
}

function generateUser(inx) {
  // i have 2 colors
  //if (inx > 1) return;
  const id = faker.string.uuid();
  return {
    id: id,
    name: faker.name.firstName() + faker.name.lastName(),
    avatar: faker.image.avatar(),
    color: colors[inx],
    messages: Array.from(Array(1).keys()).map(x => {
      return generateMessage(id);
    }),
  }
}

export function createUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUser(i))
  }
  return users;
}

// call only once
/* export const once = (fn) => {
  let called = false;
  console.log('outer', called)
  return function(...args) {
    console.log('called', called)
    if (called) return;
    called = true;
    console.log('called', called)
    return fn(args);
  }
} */

/* 
const users = [
  {
    id: 0,
    name: 'morteza rostami',
    avatar: 'https://img.freepik.com/free-photo/close-up-portrait-amazing-beauty-woman-with-fluffy-brunette-hairs-big-blue-yes-looking-straight-wearing-white-watch-bright-make-up_291049-2329.jpg?w=1380&t=st=1694112198~exp=1694112798~hmac=fbca26ddc601e57ceb910f086987d4c9bbd2f95d4fca3833c6b139e643049407',
    color: 'lightblue',
    messages: [
      //id
      // text
      // timestemp
    ],
  },
  {
    id: 1,
    name: 'sarah jamali',
    avatar: 'https://img.freepik.com/free-photo/close-up-portrait-beautiful-woman-with-makeup-red-lips-beautiful-hair_78492-3918.jpg?w=1380&t=st=1694112253~exp=1694112853~hmac=4834e8cd338f7ba204ba69a4d03d3132caa65953d527c15c952fe3f824594940',
    color: 'lightgreen',
    messages: [
      //id
      // text
      // timestemp
    ],
  }
]

*/