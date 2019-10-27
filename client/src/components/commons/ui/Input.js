import React from 'react'

class Input extends React.Component {
  validate() {
    return this.props.validators.reduce((a, c) => {
      return a && c.validate
    }, true)
  }

  render() {
    return (
      <input
        type={this.props.type}
        onChange={this.props.onChange}
        defaultValue={this.props.defaultValue}
      />
    )
  }
}

Input.defaultProps = {
  type: 'text', // available types are checkbox, radio, email, number, phone, password
  defaultValue: '',
  validators: [],
  onChange: () => {}
}

export default Input
