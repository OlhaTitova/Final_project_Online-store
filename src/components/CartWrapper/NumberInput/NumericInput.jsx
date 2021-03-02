import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

class NumericInput extends React.Component {
  onChange = (e) => {
    const { value } = e.target;
    const {onChange} = this.props;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '') {
      onChange(value);
    }
  };

  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    if (onBlur) {
      onBlur();
    }
  };

  render() {
    const { value } = this.props;
    
    return (
      
      <Input
        value={value}
        onChange={this.onChange}
        onBlur={this.onBlur}
        placeholder="Phone number"
        maxLength={25}
      />
    );
  }
}

export default NumericInput;

NumericInput.propTypes = {
  value: PropTypes.number.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,

}
