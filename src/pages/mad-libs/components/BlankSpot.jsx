import React, { useEffect, useRef, useState } from 'react'

const BlankSpot = ({
  id,
  setAnswers, 
  gameDone,
}) => {
  const [answer, setAnswer] = useState('');
  const [hasValue, setHasValue] = useState(false);
  const ref = useRef(null);
  const refText = useRef(null);

  // record input on enter
  function handSetInput(e) {
    if (e.key === 'Enter') {
      if (answer)
        setHasValue(true);
    }
  }

  function handDoubleClick() {
    if (!ref) return;
    const inputEl = ref.current;
    //console.log('double', answer)
    setHasValue(false);
    //console.log(inputEl)
    inputEl.focus();
  }

  function handInputOutFocus(e) {
    console.log('--', answer)
    if (answer)
      setHasValue(true);
  }

  function handChange(e) {
    if (!ref) return;
    const value = e.target.value;
    //console.log('chanete', answer, value)
    setAnswer(value);
  }

  // when we set: answer =: update the events
  useEffect(() => {
    if (!ref || !refText) return;
    const inputEl = ref.current;
    const textEl = refText.current;

    console.log('------------------------------')
    textEl.addEventListener('dblclick', handDoubleClick);

    inputEl.addEventListener('focusout', handInputOutFocus);

    return () => {
      inputEl.removeEventListener('dblclick', handDoubleClick);
      inputEl.removeEventListener('focusout', handInputOutFocus);
    }

    // component render: functions are new definded
  }, [handInputOutFocus, handInputOutFocus]);

  // set the answer
  useEffect(() => {
    setTimeout(() => {
      setAnswers(c => ({
        ...c,
        [id]: answer,
      }));
    }, 1000);
  }, [answer])

  console.log(gameDone)
  return (
    <span
    className='
    #bg-red-200
    mx-2
    '
    >
  
      <>
        <span
        className={`
        ${hasValue ? 'inline' : 'hidden'}
        bg-purple-200 p-1 rounded-sm
        `}
        ref={refText}
        >
          {answer}
        </span>
      
        <input 
        id={id}
        className={`
        mad-libs-input
        ${hasValue ? 'hidden' : 'inline'}
        ${hasValue ? 'bg-green-200' : 'bg-purple-300'}
        ${gameDone && !answer ? "bg-red-500" : 'bg-purple-300'}
        select-none
        w-28 h-8 p-2 rounded-sm
        `}
        type="text"
  
        ref={ref}
        onChange={(e) => handChange(e)}
        value={answer}
        onKeyDown={(e) => handSetInput(e)}
        //onDoubleClickCapture={handDoubleClick}
        disabled={hasValue ? true : false}
        //autoFocus={true}
  
        style={{
          userSelect: 'none'
        }}
        />
      
      </>
    
    </span>
  )
}

export default BlankSpot