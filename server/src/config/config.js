const path = require('path')

const dbPath = path.resolve(__dirname, '../data/development.sqlite')

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: dbPath
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL'
  }
}
