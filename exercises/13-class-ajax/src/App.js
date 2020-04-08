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
    
    return (
      <div>
        {this.state.isLoading && <p>Loading...</p>}     

        {this.state.hasError 
          ? 
          <p style={{color: 'red'}}>ERROR MESSAGE: {this.state.errorMessage}</p>
          :
          <p>{this.state.quote}</p>
        }      
      </div>
    )
  }
}

