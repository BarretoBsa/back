import BusinessAnimal from '../business/Animal'

class AnimalController {
    async list(request, response) {
        try {

            const animal = await BusinessAnimal.List();
            return response.json(animal);

        } catch (error) {
            return response.status(400).json(error)
        }

    }

    async get(request, response) {
        const { id } = request.params;
        console.log("cheguei aqui")
        try {
            const animal = await BusinessAnimal.GetAnimalId(id);
            if (!animal)
                return response.status(400).json({
                    error: 'Animal não encontrado.'
                })
            return response.json(animal);
        } catch (error) {
            return response.status(400).json(error);

        }

    }

    async create(request, response) {

        try {
                   
            const schema = await BusinessAnimal.CreateSchema('create');

            const validFields = await schema.validate(request.body, {
                abortEarly: false,
                stripUnknown: true
            })
    

            const animal  = await BusinessAnimal.Create(validFields);
 
            return response.json(animal); 

        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async update(request, response) {

        try {

            console.log('o que chegou aqui: ',request.body)
            const animalExist = await BusinessAnimal.GetAnimalId(request.body.id);
            
            if(!animalExist) return response.status(400).json({error: "Animal não encontrado!"});


            console.log('o que chegou aqui animalExist: ',animalExist)

            const schema = await BusinessAnimal.CreateSchema('update');

            const validFields = await schema.validate(request.body, {
                abortEarly: false,
                stripUnknown: true
            })
    

            const animal  = await BusinessAnimal.Update(animalExist, validFields);
 
            return response.json(animal); 

        } catch (error) {
            return response.status(400).json(error);
        }

    }

    async delete(request, response){

        try {
            const {id} = request.params;
            console.log('cheguei aqui', id)

            const animal  = await BusinessAnimal.GetAnimalId(id);
            
            if(!animal) return response.status(400).json({ erro: "Animal não encontrado." })
    
            const deleted = await BusinessAnimal.Delete(id);

            return response.json({'status': deleted});

        } catch (error) {
            return response.status(404).json(error);
        }

    }

}

export default new AnimalController();