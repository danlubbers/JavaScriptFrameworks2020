import React, { useState } from 'react'

const CharacterCount = () => {
  const [text, setText] = useState('');

  const textCount = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <p>Records the amount of words you type!</p>
      <textarea cols="75" rows="2" onChange={textCount}></textarea>
      <p>Character Count: {text.length}</p>
    </>
  )
}

export default CharacterCount
