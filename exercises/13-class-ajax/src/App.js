import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {

  state = {
    quote: '',
    isLoading: true,
    errorMessage: '',
    hasError: false
  }

  async componentDidMount() {
    try {
      let res = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
      console.log(res.data);
      this.setState({
        quote: res.data[0], 
        isLoading: false
      })
      
    } catch(err) {
        console.error(err.response.data)
        this.setState({
          errorMessage: err.response.data,
          hasError: true,
          isLoading: false
        })
    }
  };

  render() {

    // Destructure off this.state
    const {isLoading, hasError, errorMessage, quote} = this.state; 
    
    return (
      <div>

        {/* If isLoading is true show Loading */}
        {isLoading && <p>Loading...</p>}     

        {/* If hasError is true, show error else show quote */}
        {hasError 
          ? 
          <p style={{color: 'red'}}>ERROR MESSAGE: {errorMessage}</p>
          :
          <p>{quote}</p>
        }      
      </div>
    )
  }
}

