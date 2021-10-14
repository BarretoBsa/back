'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('animals', { 
     id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement:true
     },
     nome: {
       allowNull: false,
       type: Sequelize.STRING(200),
     },
     tipo_animal:{
      type: Sequelize.ENUM,
      values: [
        'POULTRY', 'SWINE'
      ],
     allowNull: false,
   },
     peso_compra: {
      type: Sequelize.DECIMAL(5,2),
      allowNull: false
    },
     status_animal: {
       type: Sequelize.INTEGER,
       allowNull: false
     },
     localizacao:{
       type: Sequelize.STRING(250),
       allowNull: false
     },
     data_nascimento: {
       type: Sequelize.DATE,
       allowNull: false
     },
     entrada_plantel: {
       type: Sequelize.DATE,
       allowNull: false
     },

     raca: {
       type: Sequelize.STRING(100),
       allowNull: false
     },
     codigo_rastreamento: {
       type: Sequelize.STRING(200),
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

    await queryInterface.dropTable('animals');
    
 }
};
