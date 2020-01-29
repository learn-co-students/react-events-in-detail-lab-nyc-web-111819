// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  delayHandler = (event) => {
    event.persist()
    // const myVar = event
    // console.log(event)
    // let delayArray = []
    // delayArray.push(event.clientX, event.clientY)
    this.props.onDelayedClick(event)

  }


  render() {
    return (

      <button onClick={(event) => this.delayHandler(event)}>DELAYER</button>

    )
  }
}