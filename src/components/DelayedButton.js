// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  eventHandler (e) {
    e.persist()
    this.props.onDelayedClick(e)
  }

  render (){
  return (
    <button onClick={(e) => this.eventHandler(e)}></button>
  )
  }
}

export default DelayedButton