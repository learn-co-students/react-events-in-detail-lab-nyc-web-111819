// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  clickHandler (e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render (){
    return (
      <button onClick={(e) => this.clickHandler(e)}></button>
    )
  }
}

export default CoordinatesButton