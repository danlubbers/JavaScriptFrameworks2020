import React,  {useState} from 'react';

const LessText = (props) => {
  const [show, setShow] = useState(true)

  const readMore = () => {
    setShow(true);
  }
  
  const readLess = () => {
    setShow(false);
  }

  let truncated = `${props.text.slice(0, props.maxLength)}...`

  return (
    <>
      {show ? <p>{props.text}</p> : <p>{truncated}</p>}        
      <button onClick={readMore}>Read More</button>
      <button onClick={readLess}>Read Less</button>
    </>
  )
}

export default LessText;