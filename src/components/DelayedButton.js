import React, {Component} from 'react'

class DelayedButton extends Component{


    delayTimeout = (event) => {
        // const eventSaved = event
       // persisting the event to be passed back to the callback in index.js
        event.persist()
        window.setTimeout( () => 
        {this.props.onDelayedClick(event)}, this.props.delay)
        }
    

    render(){
        return(
            <button onClick={this.delayTimeout}>Delay Button</button>
        )
    }


}

export default DelayedButton
