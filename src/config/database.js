require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    host: 'recipes-db',
    port: 5432,
    username:'postgres',
    password: 123456,
    database: 'recipes',
    seederStorage: 'sequelize',
    define:{
        timestamp:true,
        underscored:true,
        underscoredAll:true
    }
}