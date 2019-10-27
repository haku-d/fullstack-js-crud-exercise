import React from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { Switch, withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

import ListEmployeePage from './employee/ListEmployeePage'
import AddEmployeePage from './employee/AddEmployeePage'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Plexxis Employees</h1>
        <Switch>
          <Route exact path="/">
            <ListEmployeePage />
          </Route>
          <Route path="/new-employee">
            <AddEmployeePage />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default hot(module)(withRouter(connect()(App)))
