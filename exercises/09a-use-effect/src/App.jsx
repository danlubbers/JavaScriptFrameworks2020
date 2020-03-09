// Import useEffect here
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  /**
   * Make an AJAX call with the useEffect hook
   */

  useEffect(() => {
    async function fetchData() {
      try {

      let res = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`);
      setQuote(res.data[0])
      setIsLoading(false);
      
      } catch(err) {
        console.error(err)
        setError(true);
      
        }
      }
      fetchData();
      
  }, [])

    console.log(quote)
  return (
    <div className="bg-warning text-center body">
    <img
      src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
      alt=""
      width="450"
      height="423"
      className="mt-4"
    />
    <div className="container">

      {isLoading && <div style={{color: 'black', fontSize: '1.5em'}}>...Quote is being generated!</div>}

      {error && <div style={{color: 'red', fontSize: '1.5em'}}>An Error has occuried, check back later...</div>}
      
      <blockquote
        id="quote"
        className="blockquote bg-dark text-white border-0 mb-4"
      >
        {quote}
      </blockquote>
    </div>
  </div>
  );
}

export default App;
