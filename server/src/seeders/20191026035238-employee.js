'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Employees',
      [
        {
          name: 'Kyle Lowry',
          code: 'F100',
          profession: 'Drywall Installer',
          color: '#FF6600',
          city: 'Brampton',
          branch: 'Abacus',
          assigned: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'DeMar DeRozan',
          code: 'F101',
          profession: 'Drywall Installer',
          color: 'yellow',
          city: 'Brampton',
          branch: 'Pillsworth',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Fred Van Vleet',
          code: 'F102',
          profession: 'Drywall Installer',
          color: 'green',
          city: 'Bolton',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Jonas Valanciunas',
          code: 'F103',
          profession: 'Drywall Installer',
          color: '#333333',
          city: 'Bolton',
          branch: 'Pillsworth',
          assigned: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Chris Bosh',
          code: 'F104',
          profession: 'Drywall Installer',
          color: '#FF6600',
          city: 'Brampton',
          branch: 'Abacus',
          assigned: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Marcus Camby',
          code: 'F105',
          profession: 'Runner',
          color: 'red',
          city: 'Brampton',
          branch: 'Pillsworth',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Vince Carter',
          code: 'F106',
          profession: 'Runner',
          color: 'red',
          city: 'Toronto',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Muhamed Campbell',
          code: 'F106',
          profession: 'Runner',
          color: 'red',
          city: 'Toronto',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Brady Simons',
          code: 'F106',
          profession: 'Runner',
          color: 'red',
          city: 'Toronto',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Sofija Holcomb',
          code: 'F106',
          profession: 'Runner',
          color: 'red',
          city: 'Toronto',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Louis Busby',
          code: 'F106',
          profession: 'Runner',
          color: 'red',
          city: 'Toronto',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Bryony Vaughan',
          code: 'F106',
          profession: 'Runner',
          color: 'red',
          city: 'Toronto',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Guto Zuniga',
          code: 'F106',
          profession: 'Runner',
          color: 'red',
          city: 'Toronto',
          branch: 'Abacus',
          assigned: false,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {})
  }
}
