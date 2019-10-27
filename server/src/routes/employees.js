const express = require('express')

const router = express.Router()
const models = require('../models')
const { makeResponse } = require('../utils')

router.get('/', (req, res) => {
  const page = req.query.page || 1
  const limit = 10
  models.Employee.findAndCountAll({
    where: {
      deleted_at: null
    },
    order: [['created_at', 'DESC']],
    limit,
    offset: (page - 1) * limit
  }).then(employees => {
    makeResponse(res, {
      pages: Math.ceil(employees.count / limit),
      rows: employees.rows
    })
  })
})

router.post('/', (req, res) => {
  models.Employee.create(
    ({ name, code, profession, color, city, branch } = req.body)
  )
    .then(() => {
      makeResponse(res, {})
    })
    .catch(err => {
      makeResponse(
        res,
        {
          err: err.toString()
        },
        500
      )
    })
})

router.put('/:id', (req, res) => {
  models.Employee.findOne({
    where: { id: req.params.id }
  }).then(employee => {
    if (!employee) {
      makeResponse(res, { err: 'Employee not found' }, 404)
    } else {
      employee
        .update(({ name, code, profession, color, city, branch } = req.body))
        .then(() => {
          makeResponse(res, {})
        })
        .catch(err => {
          makeResponse(res, { err: err.toString() }, 500)
        })
    }
  })
})

router.delete('/:id', (req, res) => {
  models.Employee.findOne({
    where: { id: req.params.id }
  }).then(employee => {
    if (employee) {
      employee.update({ deleted_at: Date.now() }).then(() => {
        makeResponse(res, {})
      })
    } else {
      makeResponse(res, { err: 'Employee not found' }, 404)
    }
  })
})

module.exports = router
