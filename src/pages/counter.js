import React, { Component } from 'react'

export default class counter extends Component{
  constructor() {
    super();
    this.state = {
      count:0
    }
  }

  render(){
    return(
      <div>
        <h1>counter</h1>
        <p>the current count is: {this.state.count}</p>
        <button
          onClick={() => this.setState({
            count: this.state.count + 1
          })}
        >
          plus
        </button>
        <button
          onClick={() => this.setState({
            count: this.state.count - 1
          })}
        >
          minus
        </button>
      </div>
    )
  }
}
