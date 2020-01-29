// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  clickHandler = (event) => {
    let array = []
    array.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return (

      <button onClick={(event) => this.clickHandler(event)}>test</button>
    )
  }
} 