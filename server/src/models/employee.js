'use strict'
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: DataTypes.STRING,
        validate: { notEmpty: true }
      },
      code: {
        type: DataTypes.STRING,
        validate: { notEmpty: true }
      },
      profession: DataTypes.STRING,
      color: DataTypes.STRING,
      city: DataTypes.STRING,
      branch: DataTypes.STRING,
      assigned: DataTypes.BOOLEAN,
      deleted_at: DataTypes.DATE,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {
      underscored: true
    }
  )
  Employee.associate = function(models) {
    // associations can be defined here
  }
  return Employee
}
