import React, { Component } from 'react'

export default class CharacterCount extends Component {

  state = {
    count: 0
  };

  render() {

    return (
      <div>
        
        <textarea cols="60" rows="5" onChange={e => this.setState({count: e.target.value.length})}></textarea>

        <p>Character Count: {this.state.count}</p>

      </div>
    )
  }
}
