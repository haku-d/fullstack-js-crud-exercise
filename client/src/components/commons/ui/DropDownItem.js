import React from 'react'

export default class DropDownItem extends React.Component {
  render() {
    return <div className="dropdown-item">{this.props.children}</div>
  }
}
