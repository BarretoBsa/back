import Animal from '../models/Animal';
import ProductionPhase from '../models/ProductionPhase';
import TypeFarm from '../models/TypeFarm';

class Repositories {

    async ListAnimals() {
        const animal = await Animal.findAll({
            include: [
                { 
                    association: 'type_farms',
                    attributes: ['id', 'sigla', 'descricao' ]
                },
                { 
                    association: 'production_phases',
                    attributes: ['id', 'sigla', 'descricao' ]

                },

            ]
        });
        return animal;
    }


    async GetAnimalId(id) {
        const animal = await Animal.findByPk(id, {
            include: [
                { 
                    association: 'type_farms',
                    attributes: ['id', 'sigla', 'descricao' ]
                },
                { 
                    association: 'production_phases',
                    attributes: ['id', 'sigla', 'descricao' ]

                },

            ]
        });
        return animal;
    }

    async Create(validFields) {
            const animal = await Animal.create(validFields, {
                
                    include: [
                        { 
                            association: 'type_farms'
                        },
                        { 
                            association: 'production_phases'
                        },
    
                    ]
                
            });

            return animal;

    }

    async Update(animalExist, validFields) {

        try {

            const {type_farms,production_phases, ...animal} = animalExist;

            const update_animal = await animalExist.update(validFields);
            const update_type_farm = await type_farms.update(validFields.type_farms);
            const update_production_phase = await production_phases.update(validFields.production_phases);
        
    
            return 1; 
        } catch (error) {
            return error;
        }


}



    async Delete(id){
        const deleted = await Animal.destroy({
            where: {
                id: id
            }
        });

        return deleted;

    }

   
}
export default new Repositories(); 