import Sequelize, {Model} from 'sequelize'

class ProductionPhase extends Model {

    static init(sequelize){
        super.init({
            sigla:Sequelize.STRING(3),
            descricao:Sequelize.STRING(200),
        },
        {
            sequelize
        })

        return this;
    }

    static associate(models){
        this.belongsTo(models.Animal, {foreignKey: 'animals_id', as: 'animals'} )
      }
}

export default ProductionPhase;