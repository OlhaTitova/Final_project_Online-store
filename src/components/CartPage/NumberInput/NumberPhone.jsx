import React from 'react';
import NumericInput from './NumericInput';

class NumberPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  
    onChange = (value) => {
      this.setState({ value });
    };
  
    render() {
      const {value} = this.state;
      return (
        <NumericInput style={{ width: 120 }} value={value} onChange={this.onChange} />
      );
    }
}

export default NumberPhone;