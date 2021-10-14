'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('production_phases', { 
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
      descricao:{
        type: Sequelize.STRING(250),
        allowNull: false
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
   
    await queryInterface.dropTable('production_phases');
    
  }
};
