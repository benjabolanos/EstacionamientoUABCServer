'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  queryInterface.bulkInsert('ParkingLots', [
    {
      city: "Mexicali",
      faculty: "Central",
      identifier: "F",
      capacity: 120,
      latitude: 32.631568,
      longitude: -115.442809
    },
    {
      city: "Mexicali",
      faculty: "Central",
      identifier: "D`",
      capacity: 120,
      latitude: 32.632635,
      longitude: -115.442786
    },
    {
      city: "Mexicali",
      faculty: "Central",
      identifier: "C",
      capacity: 120,
      latitude: 32.6336638,
      longitude: -115.4428034
    },
  ])
}

export async function down(queryInterface, Sequelize) {
  
}
