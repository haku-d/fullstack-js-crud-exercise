# Plexxis Interview Exercise

## Source code structure

```
.
├── Dockerfile
├── README.md
├── client
│   ├── build
│   │   ├── asset-manifest.json
│   │   ├── avatar
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── service-worker.js
│   │   └── static
│   ├── netlify.toml
│   ├── package.json
│   ├── public
│   │   ├── avatar
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── manifest.json
│   └── src
│       ├── Utils.js
│       ├── client.js
│       ├── components
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reducers
│       ├── registerServiceWorker.js
│       ├── store
│       └── styles
├── jsconfig.json
├── package.json
├── server
│   ├── package.json
│   └── src
│       ├── bin
│       ├── config
│       ├── data
│       ├── index.js
│       ├── migrations
│       ├── models
│       ├── routes
│       ├── seeders
│       └── utils.js
└── yarn.lock
```

> Front-End (FE) and Back-End (BE) application was organized in 2 separated folders (client & server)
> with different package.json file.
> I was using `yarn` for package management instead of `npm` with supported cool features such as Yarn Workspace

### Benefit which using `Yarn workspace`

> 1. Separate source code for FE vs BE
> 2. Manage dependencies in same place
> 3. Build and deploy independently

## Build and run locally

### 1. Install npm dependencies

```
yarn install
```

### 2. Start applications (server & client)

```
yarn start
```

### 3. Generate sample data

Open your new terminal and run below command to generate sample data

```
yarn db:seed
```

## Front-End Application

### Features

1. Gets and displays list of employees with `react-table` (Supports pagination)
2. Allows adding new employee
3. Allows configuring displayed columns on `react-table`
4. Able to edit employee's informations directly on `react-table`
5. Able to delete employee's informations
6. Able to sort and fitler list of employees

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
