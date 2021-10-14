import Sequelize, {Model} from 'sequelize'


class Animal extends Model{

    static init(sequelize){
        super.init({
        nome:Sequelize.STRING(100),

        tipo_animal:Sequelize.ENUM('POULTRY', 'SWINE'),

        status_animal:Sequelize.NUMBER(5),
        localizacao:Sequelize.STRING(250),
        data_nascimento:Sequelize.DATE,
        entrada_plantel:Sequelize.DATE,
        peso_compra:Sequelize.DECIMAL(5,2),
        raca:Sequelize.STRING(100),
        codigo_rastreamento:Sequelize.STRING(200),

        }
        ,
        {
        sequelize
        })
        return this;

    }

    static associate(models){
      this.hasOne(models.TypeFarm, {foreignKey: 'animals_id', as: 'type_farms'} )
      this.hasOne(models.ProductionPhase, {foreignKey: 'animals_id', as: 'production_phases'} )

    }
}

export default Animal;