// Code DelayedButton Component Here
// Code CoordinatesButton Component Here
import React from 'react';


export default class DelayedButton extends React.Component {

    onDClick = (event) => {
        event.persist();  //need to persist the event first....
        window.setTimeout(() => {this.props.onDelayedClick(event);}, this.props.delay)
    }

    render(){
        return <button onClick={this.onDClick}>Delayed Button</button>
    }
}