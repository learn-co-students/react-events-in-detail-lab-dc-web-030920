import React, {Component} from 'react'

class CoordinatesButton extends Component{


    coordArray = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return(
            <button onClick={this.coordArray}>Create Coordinates Array</button>
        )
    }


}

export default CoordinatesButton