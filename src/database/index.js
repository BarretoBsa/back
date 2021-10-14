import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../app/models/User';
import TypeFarm from '../app/models/TypeFarm';
import ProductionPhase from '../app/models/ProductionPhase';
import Animal from '../app/models/Animal'
const models = [
    User,
    TypeFarm,
    ProductionPhase,
    Animal
    
]
class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }
}

export default new Database()