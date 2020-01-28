import React from 'react';

export default class DelayedButton extends React.Component {
    
  
    myFunc = (event) => {
        event.persist()
        this.props.onDelayedClick(event)
    }
    
    render(){
        return (
            <button onClick={(event) => this.myFunc(event)}>
            </button>
        )
    }
}
