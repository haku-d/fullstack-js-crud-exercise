import React from 'react'

import DropDownItem from './DropDownItem'

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  toggle(open) {
    this.setState({
      isOpen: open !== undefined ? open : !this.state.isOpen
    })
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggle(false)
    }
  }

  render() {
    const { isOpen } = this.state
    return (
      <div
        className={isOpen ? 'dropdown show' : 'dropdown'}
        ref={this.setWrapperRef}
        style={{
          display: 'inline-block'
        }}
      >
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => this.toggle()}
        >
          {this.props.title}
        </button>
        <div
          className={isOpen ? 'dropdown-menu show' : 'dropdown-menu'}
          aria-labelledby="dropdownMenuButton"
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

DropDown.Item = DropDownItem

export default DropDown
