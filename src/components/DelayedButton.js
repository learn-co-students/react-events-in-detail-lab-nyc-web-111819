import React from 'react'
// import { render } from 'enzyme'

class DelayedButton extends React.Component {

    clickHandler = event => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    
    render() {
       return <button onClick={this.clickHandler}>Delayed</button>
    }
}

export default DelayedButton
