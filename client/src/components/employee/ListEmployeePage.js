import React from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import 'react-table/react-table.css'
import Octicon, { Plus, Trashcan, Tools } from '@primer/octicons-react'
import { debounce } from 'underscore'

import { destObject, isEqual } from 'Utils'
import DropDown from 'components/commons/ui/DropDown'
import ConfirmModal from 'components/commons/ui/ConfirmModal'
import {
  getEmployees,
  updateEmployee,
  deleteEmployee
} from 'reducers/EmployeeReducer'

class ListEmployeePage extends React.Component {
  constructor() {
    super()
    this.renderEditable = this.renderEditable.bind(this)
    this.fetchData = debounce(this.fetchData, 500)
    this.state = {
      pageIndex: 0,
      columns: [
        {
          Header: 'ID',
          width: 50,
          filterable: false,
          accessor: 'id',
          style: {
            textAlign: 'center'
          }
        },
        {
          Header: 'Name',
          accessor: 'name',
          Cell: this.renderEditable
        },
        {
          Header: 'Code',
          accessor: 'code',
          Cell: this.renderEditable
        },
        {
          Header: 'Profession',
          accessor: 'profession',
          show: false,
          configable: true
        },
        {
          Header: 'Color',
          accessor: 'color',
          show: false,
          configable: true,
          Cell: this.renderEditable
        },
        {
          Header: 'City',
          accessor: 'city',
          show: false,
          configable: true,
          Cell: this.renderEditable
        },
        {
          Header: 'Branch',
          accessor: 'branch',
          show: false,
          configable: true,
          Cell: this.renderEditable
        },
        {
          Header: 'Assigned',
          accessor: 'assigned',
          show: false,
          configable: true,
          Cell: this.renderEditable
        },
        {
          Header: 'Action',
          width: 150,
          style: {
            textAlign: 'center'
          },
          filterable: false,
          sortable: false,
          Cell: ({ row }) => (
            <ConfirmModal
              title="Confirm"
              message={`Do you want to delete ${row.name}'s information?`}
            >
              {confirm => (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={confirm(() => this.deleteEmployee(row.id))}
                >
                  <Octicon icon={Trashcan} /> Delete
                </button>
              )}
            </ConfirmModal>
          )
        }
      ]
    }
  }

  fetchData(state, instance) {
    // Keep the page index for next fetching data
    this.setState({ pageIndex: state.page })
    this.props
      .getEmployees(state.filtered, state.sorted, state.page + 1)
      .catch(err => console.log(err))
  }

  deleteEmployee(id) {
    this.props.deleteEmployee(id).then(action => {
      if (action.type === 'delete_employee_completed') {
        this.props.getEmployees(this.state.pageIndex + 1)
      }
    })
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const rows = [...this.props.rows]
          rows[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
        }}
        dangerouslySetInnerHTML={{
          __html: this.props.rows[cellInfo.index][cellInfo.column.id]
        }}
      />
    )
  }

  updateDisplay(column) {
    this.setState({
      columns: this.state.columns.map(c => {
        if (c.accessor === column.accessor) {
          c.show = !c.show
        }
        return c
      })
    })
  }

  dropdownButton() {
    return (
      <React.Fragment>
        <Octicon icon={Tools} /> Display Setting
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col mb-2">
            <Link className="btn btn-primary mr-2" to="/new-employee">
              <Octicon icon={Plus} /> New Employee
            </Link>
            <DropDown title={this.dropdownButton()}>
              {this.state.columns
                .filter(column => column.configable)
                .map(column => (
                  <DropDown.Item key={column.accessor}>
                    <input
                      type="checkbox"
                      className="drop-check"
                      id={column.accessor}
                      onChange={() => this.updateDisplay(column)}
                    />
                    <label
                      className="drop-check-label"
                      htmlFor={column.accessor}
                    >
                      {typeof column.Header === 'string' ? column.Header : ''}
                    </label>
                  </DropDown.Item>
                ))}
            </DropDown>
          </div>
        </div>
        <ReactTable
          filterable
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={this.props.rows}
          pages={this.props.pages}
          columns={this.state.columns}
          loading={this.props.loading}
          onFetchData={this.fetchData.bind(this)}
          style={{
            height: '650px' // perfect height for page size of 10 item
          }}
          showPageSizeOptions={false}
          defaultPageSize={10}
          getTrProps={(state, rowInfo, column, instance) => {
            return {
              onBlur: e => {
                const fields = [
                  'name',
                  'code',
                  'profession',
                  'color',
                  'city',
                  'branch'
                ]
                // Trying to destructuring data object
                const newData = destObject(rowInfo.original, fields)
                const oldData = destObject(rowInfo.row, fields)
                if (isEqual(newData, oldData)) {
                  return
                }
                this.props.updateEmployee(rowInfo.original)
              }
            }
          }}
        ></ReactTable>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.employee
})
const mapDispatchToProps = dispatch => ({
  getEmployees: (filtered, sorted, page) =>
    dispatch(getEmployees(filtered, sorted, page)),
  updateEmployee: employee => dispatch(updateEmployee(employee)),
  deleteEmployee: id => dispatch(deleteEmployee(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListEmployeePage)
