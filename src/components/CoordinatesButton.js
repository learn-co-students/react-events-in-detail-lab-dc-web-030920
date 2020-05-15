// Code CoordinatesButton Component Here
import React from 'react';


export default class CoordinatesButton extends React.Component {



    onCoordinatesClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      };

    render(){
       return  <button onClick={this.onCoordinatesClick}>Coordinates Button</button>
    }
}