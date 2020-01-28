import React from 'react';

export default class CoordinatesButton extends React.Component {

    
    createArray = (event) => {
        let coordinateArray = []
        coordinateArray.push(event.clientX, event.clientY)
        return this.props.onReceiveCoordinates(coordinateArray)
    }


    render(){
        return (
        <button onClick={(event) => this.createArray(event)}>
        </button>
        )
    }
}

