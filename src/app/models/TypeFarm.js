import Sequelize, {Model} from 'sequelize'

class TypeFarm extends Model {

    static init(sequelize){
        super.init({
            sigla:Sequelize.STRING(3),
            descricao:Sequelize.STRING(250),
        },
        {
            sequelize
        })

        return this;

        
    }
    static associate(models){
        this.belongsTo(models.Animal, {foreignKey: 'animals_id', as: 'animals'});
      }
}

export default TypeFarm;