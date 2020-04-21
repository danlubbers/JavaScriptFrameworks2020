import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    quote: "",
    isLoading: true,
    hasError: false,
  };

  componentDidMount() {
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => this.setState({ quote: response.data }))
      .catch((err) => this.setState({ hasError: true }))
      .then(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div className="App">
        <h1>Ron Swanson</h1>
        <p>{this.state.quote}</p>
        {this.state.isLoading && <p>Loading ...</p>}
        {this.state.hasError && <p>There is an error</p>}
      </div>
    );
  }
}

export default App;
