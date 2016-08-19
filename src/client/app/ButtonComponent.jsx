import React from 'react';

class ButtonComponent extends React.Component {

  constructor(props) {
    super(props);  
    this.handleClick = this.handleClick.bind(this);  
  }

 handleClick(e) {
   e.preventDefault();
   this.props.onClick();
 }

  render () {
    return (
        <button onClick={this.handleClick} >Click Me!</button>
    );
  }
}

export default ButtonComponent;
