import React, { Component } from 'react'

export default class LessText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };
  }

  readMore = () => {
    return this.setState({text: this.props.text});
  }

  readLess = () => {
    let trunc = this.state.text.slice(0, this.props.maxLength)
    return this.setState({text: `${trunc}...`})
  }
  
  render() {

    return (
      <div>
        <p>{this.state.text}</p>
        <button onClick={this.readMore}>Read More</button>
        <button onClick={this.readLess}>Read Less</button>
      </div>
    )
  }
}
