import React from 'react'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { Link } from 'react-router-dom'

import { addEmployee } from 'reducers/EmployeeReducer'

const defaultState = {
  name: '',
  code: '',
  profession: '',
  color: '',
  city: '',
  branch: '',
  assigned: false,
  addEmployeeCompleted: false
}

class AddEmployeePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...defaultState
    }
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  submit(e) {
    e.preventDefault()
    this.setState({
      addEmployeeCompleted: false
    })
    this.props.form.validateFields((error, value) => {
      if (error) return
      this.props.addEmployee(value).then(action => {
        if (action.type === 'add_employee_completed') {
          // Clear current state and display succesful message
          const { name, code, profession, color, city, branch } = defaultState
          this.props.form.setFieldsValue({
            name,
            code,
            profession,
            color,
            city,
            branch
          })
          this.setState({
            addEmployeeCompleted: true
          })
        }
      })
    })
  }

  render() {
    let errors
    const { getFieldError } = this.props.form
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <form>
              {this.state.addEmployeeCompleted ? (
                <div className="alert alert-success" role="alert">
                  A new employee was added successfully
                </div>
              ) : null}
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-3">
                  {this.props.form.getFieldDecorator('name', {
                    initialValue: this.state.name,
                    rules: [{ required: true }]
                  })(
                    <input
                      type="text"
                      name="name"
                      className={
                        getFieldError('name')
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                      onChange={this.handleOnChange.bind(this)}
                    />
                  )}
                  {(errors = getFieldError('name')) ? (
                    <div className="invalid-feedback">{errors.join(',')}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Code</label>
                <div className="col-sm-3">
                  {this.props.form.getFieldDecorator('code', {
                    initialValue: this.state.code,
                    rules: [{ required: true }]
                  })(
                    <input
                      type="text"
                      name="code"
                      className={
                        getFieldError('code')
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                      onChange={this.handleOnChange.bind(this)}
                    />
                  )}
                  {(errors = getFieldError('code')) ? (
                    <div className="invalid-feedback">{errors.join(',')}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Profession</label>
                <div className="col-sm-3">
                  {this.props.form.getFieldDecorator('profession', {
                    initialValue: this.state.profession,
                    rules: [{ required: true }]
                  })(
                    <input
                      type="text"
                      name="profession"
                      className={
                        getFieldError('profession')
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                      onChange={this.handleOnChange.bind(this)}
                    />
                  )}
                  {(errors = getFieldError('profession')) ? (
                    <div className="invalid-feedback">{errors.join(',')}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Color</label>
                <div className="col-sm-3">
                  {this.props.form.getFieldDecorator('color', {
                    initialValue: this.state.color,
                    rules: [{ required: true }]
                  })(
                    <input
                      type="color"
                      name="color"
                      className={
                        getFieldError('color')
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                      onChange={this.handleOnChange.bind(this)}
                    />
                  )}
                  {(errors = getFieldError('color')) ? (
                    <div className="invalid-feedback">{errors.join(',')}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-2">
                  {this.props.form.getFieldDecorator('city', {
                    initialValue: this.state.city,
                    rules: [{ required: true }]
                  })(
                    <input
                      type="text"
                      name="city"
                      className={
                        getFieldError('city')
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                      onChange={this.handleOnChange.bind(this)}
                    />
                  )}
                  {(errors = getFieldError('city')) ? (
                    <div className="invalid-feedback">{errors.join(',')}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Branch</label>
                <div className="col-sm-2">
                  {this.props.form.getFieldDecorator('branch', {
                    initialValue: this.state.branch,
                    rules: [{ required: true }]
                  })(
                    <input
                      type="text"
                      name="branch"
                      className={
                        getFieldError('branch')
                          ? 'form-control is-invalid'
                          : 'form-control'
                      }
                      onChange={this.handleOnChange.bind(this)}
                    />
                  )}
                  {(errors = getFieldError('branch')) ? (
                    <div className="invalid-feedback">{errors.join(',')}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Assigned</label>
                <div className="col-sm-2">
                  <input
                    type="checkbox"
                    name="assigned"
                    className="form-control"
                    onChange={this.handleOnChange.bind(this)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                  <Link className="btn btn-light mr-2" to="/">
                    Back
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.submit.bind(this)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addEmployee: employee => dispatch(addEmployee(employee))
})

export default connect(
  null,
  mapDispatchToProps
)(createForm()(AddEmployeePage))
