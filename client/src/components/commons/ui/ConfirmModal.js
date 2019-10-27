import React from 'react'

import Modal from './Modal'

export default class ConfirmModal extends React.Component {
  state = {
    open: false,
    callback: null
  }

  show = callback => event => {
    event.preventDefault()

    event = {
      ...event,
      target: { ...event.target, value: event.target.value }
    }

    this.setState({
      open: true,
      callback: () => callback(event)
    })
  }

  hide = () => this.setState({ open: false, callback: null })

  confirm = () => {
    this.state.callback()
    this.hide()
  }

  modalClassName() {
    return this.state.open ? 'modal fade show' : 'modal fade'
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children(this.show)}
        {this.state.open ? (
          <Modal
            modalSize={'modal-dialog modal-md'}
            modalShow={true}
            tabIndex="0"
          >
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
            </div>
            <div className="modal-body">
              <p>{this.props.message}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                onClick={this.hide}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.confirm}
              >
                OK
              </button>
            </div>
          </Modal>
        ) : null}
      </React.Fragment>
    )
  }
}
