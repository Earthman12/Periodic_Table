import React, { Component} from 'react';
import Element from './components/Element';
import ElementSummary from './components/ElementSummary';
import './components/style.css';

export default class App extends Component{

  // App state has one variable to keep track of what number element is selected, sets the intial selected element to 1(Hydrogen)
  constructor(props) {
    super(props);
    this.state = {
      elementNum : 1
    };
    this.changeElement = this.changeElement.bind(this);
  }

  // A function to change the current selected element to the new one by changing the state to the new number 
  changeElement(newElementNum){
    this.setState({
      elementNum : newElementNum
    });
  }

  render() {


    return(

      <div className = "body">

        <h1>The Periodic Table of Elements</h1>

        <div className = "table">

          {/* All 119 Element objects with props 'num': corresponding to its Element number and onClick which passes the function 'changeElement(newElementNum)' */}
          <Element num = "1" onClick = {this.changeElement} />
          <Element num = "2" onClick = {this.changeElement} />
          <Element num = "3" onClick = {this.changeElement} />
          <Element num = "4" onClick = {this.changeElement} />
          <Element num = "5" onClick = {this.changeElement} />
          <Element num = "6" onClick = {this.changeElement} />
          <Element num = "7" onClick = {this.changeElement} />
          <Element num = "8" onClick = {this.changeElement} />
          <Element num = "9" onClick = {this.changeElement} />
          <Element num = "10" onClick = {this.changeElement} />
          <Element num = "11" onClick = {this.changeElement} />
          <Element num = "12" onClick = {this.changeElement} />
          <Element num = "13" onClick = {this.changeElement} />
          <Element num = "14" onClick = {this.changeElement} />
          <Element num = "15" onClick = {this.changeElement} />
          <Element num = "16" onClick = {this.changeElement} />
          <Element num = "17" onClick = {this.changeElement} />
          <Element num = "18" onClick = {this.changeElement} />
          <Element num = "19" onClick = {this.changeElement} />
          <Element num = "20" onClick = {this.changeElement} />
          <Element num = "21" onClick = {this.changeElement} />
          <Element num = "22" onClick = {this.changeElement} />
          <Element num = "23" onClick = {this.changeElement} />
          <Element num = "24" onClick = {this.changeElement} />
          <Element num = "25" onClick = {this.changeElement} />
          <Element num = "26" onClick = {this.changeElement} />
          <Element num = "27" onClick = {this.changeElement} />
          <Element num = "28" onClick = {this.changeElement} />
          <Element num = "29" onClick = {this.changeElement} />
          <Element num = "30" onClick = {this.changeElement} />
          <Element num = "31" onClick = {this.changeElement} />
          <Element num = "32" onClick = {this.changeElement} />
          <Element num = "33" onClick = {this.changeElement} />
          <Element num = "34" onClick = {this.changeElement} />
          <Element num = "35" onClick = {this.changeElement} />
          <Element num = "36" onClick = {this.changeElement} />
          <Element num = "37" onClick = {this.changeElement} />
          <Element num = "38" onClick = {this.changeElement} />
          <Element num = "39" onClick = {this.changeElement} />
          <Element num = "40" onClick = {this.changeElement} />
          <Element num = "41" onClick = {this.changeElement} />
          <Element num = "42" onClick = {this.changeElement} />
          <Element num = "43" onClick = {this.changeElement} />
          <Element num = "44" onClick = {this.changeElement} />
          <Element num = "45" onClick = {this.changeElement} />
          <Element num = "46" onClick = {this.changeElement} />
          <Element num = "47" onClick = {this.changeElement} />
          <Element num = "48" onClick = {this.changeElement} />
          <Element num = "49" onClick = {this.changeElement} />
          <Element num = "50" onClick = {this.changeElement} />
          <Element num = "51" onClick = {this.changeElement} />
          <Element num = "52" onClick = {this.changeElement} />
          <Element num = "53" onClick = {this.changeElement} />
          <Element num = "54" onClick = {this.changeElement} />
          <Element num = "55" onClick = {this.changeElement} />
          <Element num = "56" onClick = {this.changeElement} />
          <Element num = "57" onClick = {this.changeElement} />
          
          {/* Lanthoid Series Split */}
          <Element num = "72" onClick = {this.changeElement} />
          <Element num = "73" onClick = {this.changeElement} />
          <Element num = "74" onClick = {this.changeElement} />
          <Element num = "75" onClick = {this.changeElement} />
          <Element num = "76" onClick = {this.changeElement} />
          <Element num = "77" onClick = {this.changeElement} />
          <Element num = "78" onClick = {this.changeElement} />
          <Element num = "79" onClick = {this.changeElement} />
          <Element num = "80" onClick = {this.changeElement} />
          <Element num = "81" onClick = {this.changeElement} />
          <Element num = "82" onClick = {this.changeElement} />
          <Element num = "83" onClick = {this.changeElement} />
          <Element num = "84" onClick = {this.changeElement} />
          <Element num = "85" onClick = {this.changeElement} />
          <Element num = "86" onClick = {this.changeElement} />
          <Element num = "87" onClick = {this.changeElement} />
          <Element num = "88" onClick = {this.changeElement} />
          <Element num = "89" onClick = {this.changeElement} />
          {/* Actinoid Series Split */}
          <Element num = "104" onClick = {this.changeElement} />
          <Element num = "105" onClick = {this.changeElement} />
          <Element num = "106" onClick = {this.changeElement} />
          <Element num = "107" onClick = {this.changeElement} />
          <Element num = "108" onClick = {this.changeElement} />
          <Element num = "109" onClick = {this.changeElement} />
          <Element num = "110" onClick = {this.changeElement} />
          <Element num = "111" onClick = {this.changeElement} />
          <Element num = "112" onClick = {this.changeElement} />
          <Element num = "113" onClick = {this.changeElement} />
          <Element num = "114" onClick = {this.changeElement} />
          <Element num = "115" onClick = {this.changeElement} />
          <Element num = "116" onClick = {this.changeElement} />
          <Element num = "117" onClick = {this.changeElement} />
          <Element num = "118" onClick = {this.changeElement} />

          <Element num = "119" onClick = {this.changeElement} />

          {/* Lanthanoid Serires Elements */}
          
          <Element num = "58" onClick = {this.changeElement} />
          <Element num = "59" onClick = {this.changeElement} />
          <Element num = "60" onClick = {this.changeElement} />
          <Element num = "61" onClick = {this.changeElement} />
          <Element num = "62" onClick = {this.changeElement} />
          <Element num = "63" onClick = {this.changeElement} />
          <Element num = "64" onClick = {this.changeElement} />
          <Element num = "65" onClick = {this.changeElement} />
          <Element num = "66" onClick = {this.changeElement} />
          <Element num = "67" onClick = {this.changeElement} />
          <Element num = "68" onClick = {this.changeElement} />
          <Element num = "69" onClick = {this.changeElement} />
          <Element num = "70" onClick = {this.changeElement} />
          <Element num = "71" onClick = {this.changeElement} />
          {/* Actinoid Series Elements */}
          
          <Element num = "90" onClick = {this.changeElement} />
          <Element num = "91" onClick = {this.changeElement} />
          <Element num = "92" onClick = {this.changeElement} />
          <Element num = "93" onClick = {this.changeElement} />
          <Element num = "94" onClick = {this.changeElement} />
          <Element num = "95" onClick = {this.changeElement} />
          <Element num = "96" onClick = {this.changeElement} />
          <Element num = "97" onClick = {this.changeElement} />
          <Element num = "98" onClick = {this.changeElement} />
          <Element num = "99" onClick = {this.changeElement} />
          <Element num = "100" onClick = {this.changeElement} />
          <Element num = "101" onClick = {this.changeElement} />
          <Element num = "102" onClick = {this.changeElement} />
          <Element num = "103" onClick = {this.changeElement} />

        </div>

        {/* Selected Element Display */}
        <h1>Current Selected Element: </h1>
        <ElementSummary num = {this.state.elementNum} />

      </div>

    );

  }

}