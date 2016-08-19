import React from 'react';

import ButtonComponent from './ButtonComponent.jsx';
import LabelCounterComponent from './LabelCounterComponent.jsx';

class CounterComponent extends React.Component {

  constructor(props) {
    super(props);    
    this.state = {
      count: 0
    };
    this.increaseCount = this.increaseCount.bind(this);  
  }

  increaseCount() {
	this.setState({
		count: this.state.count+1
	});	
  }

  render () {
    return (
        <div>
	  <ButtonComponent onClick={this.increaseCount} />
	  <LabelCounterComponent text={this.state.count} />	   
        </div>
    );
  }
}

export default CounterComponent;
module.exports = CounterComponent;
