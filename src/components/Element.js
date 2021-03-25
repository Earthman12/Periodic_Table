import React, { Component } from 'react';
import { elements } from './element_data';

export default class Element extends Component {

    // Element object's state has the variable 'hover' to determine if the mouse is over it or not
    state = {
        hover: false
    };

    // This is the event function that is called when the mouse is over the Element object and sets the state of hover to true
    onMouseEnter = (event) => {
        this.setState(
            {hover: true}
        );
    };

    // This is the event function that is called when the mouse moves off of the Element object and sets the state of hover back to false
    onMouseClose = (event) => {
        this.setState(
            {hover: false}
        );
    };

    render() {

        // elementNum is the number recieved from App.js as the prop 'num' which corresponds to the corresponding element's number
        // element is then assigned the object from the array from element_data.js that has all that element's data
        let elementNum = this.props.num;
        let element = elements[elementNum];

        return(

            // This div surrounds the element info with a border and when clicked will change the selected element to this one and display its properties/summary
            // An inline conditional is called on the className to have it set the state of hover to active or empty based on whether the mouse is on it or not
           <div
            onMouseEnter = {this.onMouseEnter}
            onMouseLeave = {this.onMouseClose}
            onClick = {event => this.props.onClick(element.number)}
            className = {`element element-${elementNum} ${element.category} ${this.state.hover ? 'active':''}`}
           >

                <div className = "number">{element.number}</div>
                <div className = "symbol">{element.symbol}</div>
                <div className = "name">{element.name}</div>

           </div>

        );

    }

}