import React, { Component } from 'react'

const divStyle = {
  width: '600px',
  height: '50vh',
  margin: '200px auto 0 auto',
  textAlign: 'center'
}

export default class NoMatch extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h2>Sorry, the page you are visiting does not exist.</h2>
      </div>
    )
  }
}
