'use strict';



const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('users', [{
        name: 'administrador',
        email: 'admin@gmail.com',
        password_hash: await bcrypt.hash('admin', 4),
        status: true,
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date()
      }], {});
   
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('users', {
       email: 'admin@gmail.com'
     }, {});
   
  }
};