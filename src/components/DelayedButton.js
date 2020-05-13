// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component{


    render(){
        return <button onClick={(event) => { setTimeout(() => {event.persist(); this.props.onDelayedClick(event)}, this.props.delay) }}>Hello buddy</button>
    }

}