import React, { Component } from 'react';
import { elements } from './element_data';

export default class ElementSummary extends Component {

    render() {

      // elementNum is the number recieved from App.js as the prop 'num' which corresponds to the corresponding element's number
      // element is then assigned the object from the array from element_data.js that has all that element's data
      let elementNum = this.props.num;
      let element = elements[elementNum]

        return(

          // The surrounding div around the summary
            <div className = "elementBox">

              <div className = {`elementSquare element-${elementNum} ${element.category}`}>
                  <div className = "number">{element.number}</div>
                  <div className = "symbol">{element.symbol}</div>
                  <div className = "name">{element.name}</div>
              </div>

              <div className = "elementPropertiesSquare">
                <div className = "appearance">Appearance: {element.appearance}</div>
                <div className = "atomicMass">Atomic Mass: {element.atomic_mass}u</div>
                <div className = "density">Density: {element.density}</div>
                <div className = "discovered_By">Discovered by: {element.discovered_by}</div>
                <div className = "phase">Phase: {element.phase}</div>
                <div className = "category">Category: {element.category}</div>
              </div>

              <div className = "elementSummary">
                <div className = "summary">{element.summary}</div>
              </div>

            </div>

        );

    }

}