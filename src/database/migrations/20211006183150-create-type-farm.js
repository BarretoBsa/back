
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('type_farms', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      sigla: {
        allowNull: false,
        type: Sequelize.STRING(3),
      },
      animals_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'animals',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      descricao:{
        type: Sequelize.STRING(250),
        allowNull: false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull: false

      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull: false

      }
          
      });

  },

  down: async (queryInterface) => {

    await queryInterface.dropTable('type_farms');

  }
};
