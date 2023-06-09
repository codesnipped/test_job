'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    }) */
    await queryInterface.bulkInsert('Charts', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Charts', null, {});
  }
};

const data = [
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-01-01 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-01-02 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-03 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-01-04 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-05 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-01-06 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-01-07 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-01-08 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-01-09 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-10 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-11 00:00:01"
  },
  {
    "kwh": 35,
    "temp": 70,
    "created_at": "2023-01-12 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-13 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-01-14 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-01-15 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-01-16 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-01-17 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-18 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-01-19 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-20 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-01-21 00:00:01"
  },
  {
    "kwh": 35,
    "temp": 70,
    "created_at": "2023-01-22 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-01-23 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-01-24 00:00:01"
  },
  {
    "kwh": 30,
    "temp": 60,
    "created_at": "2023-01-25 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-01-26 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-01-27 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-01-28 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-01-29 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-30 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-01-31 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-02-01 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-02 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-02-03 00:00:01"
  },
  {
    "kwh": 30,
    "temp": 60,
    "created_at": "2023-02-04 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-02-05 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-02-06 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-07 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-02-08 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-02-09 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-10 00:00:01"
  },
  {
    "kwh": 35,
    "temp": 70,
    "created_at": "2023-02-22 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-12 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-13 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-02-14 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-02-15 00:00:01"
  },
  {
    "kwh": 10,
    "temp": 20,
    "created_at": "2023-02-16 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-17 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-02-18 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-02-19 00:00:01"
  },
  {
    "kwh": 30,
    "temp": 60,
    "created_at": "2023-02-20 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-02-21 00:00:01"
  },
  {
    "kwh": 25,
    "temp": 50,
    "created_at": "2023-02-22 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-23 00:00:01"
  },
  {
    "kwh": 20,
    "temp": 40,
    "created_at": "2023-02-24 00:00:01"
  },
  {
    "kwh": 5,
    "temp": 10,
    "created_at": "2023-02-25 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-26 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-27 00:00:01"
  },
  {
    "kwh": 15,
    "temp": 30,
    "created_at": "2023-02-28 00:00:01"
  },
]
