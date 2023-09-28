import React, { useEffect, useState } from 'react'
import BlankSpot from './components/BlankSpot';

const texts = [
  "I went to the ___ and I bought some ___ . when i came back to ___ , the door was ___ !",

  "I wondered who left the door ___ ! when I ___ the door, I entered the room. a tall ___ was sitting on the ___ and ___ was ___ at me!",
  
  "i ran towards him ___ and at the same time ___ got up and jumped out of the ___ ! I watched him ___ under the ___ ! as he was smiling manically! showed his ___ towards me and ___ in the traffic!",
];

const MadLibsPage = () => {
  const [gameDone, setGameDone] = useState(false);
  const [story, setStory] = useState([]);
  const [answers, setAnswers] = useState({});
  // final results
  const [results, setResults] = useState([]);

  function getRandomText() {
    const index = Math.floor(Math.random() * texts.length);
    return texts[index];
  }
  
  function setupBlank() {
    //const obj = {};
    const text = getRandomText();
    const textArr = text.split(' ');
    //const blankIndex = textArr.indexOf('___');
    
    // replace ___ with: component
    const arr = textArr.map((x, i) => {
      //console.log(x)
      if (x === '___') {
        return {};
      } else {
        return x;
      }
    })

    let finalArr = [];
    let part = '';
    // concat the string items with ' ' and make it into one string. 
    arr.forEach((x) => {

      if (typeof x === 'string') {
        part += x + ' ';
      } else {
        finalArr.push(part);
        finalArr.push(x);
        part = '';
      }
    })

    setStory(finalArr);
    //console.log(finalArr)
  }

  // replace the <Compo/> with the answer.
  function makeResult() {
    const statement = [...story];

    for (let [key, val] of Object.entries(answers)) {
      statement[key] = val;
    }

    setResults(statement);
  }

  // submit end Game
  function submitGame() {
    // set game over
    setGameDone(true);
    // show final text (modal)
    console.log(answers);
    makeResult();
  }

  // render the text
  useEffect(() => {
    setupBlank();
  }, [])
  
  console.log('main', gameDone)
  return (
    <div
    className='
    grid place-items-center
    flex-1 p-4
    '
    >
      
      <section
      className='
      flex flex-col gap-6
    bg-neutral-100
      p-4 shadow-md
      '
      >
        <h1 
        className='
        text-center text-xl font-bold
        border-b-4 border-emerald-200 
        w-fit mx-auto
        '
        >
        Mad Libs
        </h1>
        <p
        style={{
          lineHeight: '3'
        }}
        >
          {
            story && story.length
            ?(
              story.map((x, i) => {

                //console.log(x)
                if (typeof x !== 'string') {
                  return (
                    <BlankSpot 
                    id={i}
                    key={i} 
                    gameDone={gameDone} 
                    setAnswers={setAnswers}
                    />
                  )
                }
                return (
                  <span key={i}>{x}</span>
                )
              })
            ):('')
          }
        </p>

        {/* submit Game */}
        <button
        className='
        bg-neutral-700 text-white
        py-2 px-2 rounded-sm
        hover:bg-neutral-600
        '
        onClick={submitGame}
        >
          Submit Game
        </button>
      </section>

      <p>
        {
          results && results.length
          ?(
            results.join(' ')
          ):(
            ''
          )
        }
      </p>
    </div>
  )
}

export default MadLibsPage