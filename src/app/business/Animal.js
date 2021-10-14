import RepositoryAnimal from '../repository/Animal'
import * as Yup from 'yup';

class Business {

    async List() {
        const animal = RepositoryAnimal.ListAnimals();
        return animal;
    };

    async GetAnimalId(id) {
        const Animal = await RepositoryAnimal.GetAnimalId(id);
        return Animal;
    };

    async Delete(id) {
        const deleted = await RepositoryAnimal.Delete(id);
        return deleted;
    };

    async CreateSchema(type) {
        try {
            let schema = '';
            if(type === 'create'){
                return schema = Yup.object().shape({
                    nome: Yup.string().required().max(100), 
                    tipo_animal: Yup.mixed().oneOf(['POULTRY', 'SWINE']),
                    status_animal: Yup.number().required().max(5),
                    localizacao:Yup.string().required().max(200), 
                    data_nascimento:Yup.date().required(),
                    entrada_plantel:Yup.date().required(),
                    peso_compra: Yup.number().test(
                        "maxDigitsAfterDecimal",
                        "number field must have 3 digits after decimal or less",
                        (number) => /^\d+(\.\d{1,3})?$/.test(number)
                      ).min(2),
                    raca:Yup.string().required().max(100),
                    codigo_rastreamento:Yup.string().required().max(100),
                    type_farms: Yup.object().shape({
                        sigla:Yup.string().required().max(3),
                        descricao:Yup.string().required().max(250),
                    }),
                    production_phases: Yup.object().shape({
                        sigla:Yup.string().required().max(3),
                        descricao:Yup.string().required().max(250),
                    }),

                }).noUnknown(); 
            }else{
                return schema = Yup.object().shape({
                    nome: Yup.string().required().max(100), 
                    status_animal: Yup.number().required().max(5),
                    localizacao:Yup.string().required().max(200), 
                    
                }).noUnknown(); 
            }
   
                
           
        } catch (error) {
            return error

        }

    }

    async AnimalExist(email) {
        const animalExist = await RepositoryAnimal.GetByEmail(email);
        return animalExist;
    }


    async Create(validFields) {
        try {

            const animal = await RepositoryAnimal.Create(validFields);
            return animal;

        } catch (error) {
            return error;
        }


    }

    async Update(animalExist, validFields) {
        try {
            console.log('cheguei no business')
            const animal = await RepositoryAnimal.Update(animalExist, validFields);
            return animal;

        } catch (error) {
            return error;
        }


    }


}

export default new Business();