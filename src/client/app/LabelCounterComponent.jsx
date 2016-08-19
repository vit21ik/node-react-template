import React from 'react';

class LabelComponent extends React.Component {

  constructor(props) {
    super(props);  
  }

  render () {
    return (
        <span>Clicked: {this.props.text}</span>
    );
  }
}

export default LabelComponent;
