# Plexxis Interview Exercise

## Front-End Application

### Features

1. Gets and displays list of employees with `react-table` (Supports pagination)
2. Allows adding new employee
3. Allows configuring displayed columns on `react-table`
4. Able to edit employee's information on `react-table` directly
5. Able to delete employee information

### Tech Stack

- **@primer/octicons-react**: Free github's icons as react components
- **axios**: HTTP client
- **bootstrap**: CSS Framework
- **rc-form**: React component form
- **react-redux**: State management for react

## Back-End Application

### API Specs

| API                         | METHOD | Path               |
| --------------------------- | ------ | ------------------ |
| List Employee               | GET    | /api/employees     |
| Create Employee             | POST   | /api/employees     |
| Update Employee Information | PUT    | /api/employees/:id |
| Delete Employee             | DELETE | /api/employees/:id |

### Tech Stack

- **Express.js**: Node.js framework for web development
- **sqlite3**: Database
- **sequelize**: A promise-based Node.js ORM
