import User from '../models/User';
import * as Yup from 'yup';
import BusinessUser from '../business/User'

class UserController {
    async list(request, response) {
        try {

            const user = await BusinessUser.List();
            return response.json(user);

        } catch (error) {
            return response.status(400).json(error)
        }

    }

    async get(request, response) {
        const { id } = request.params;
        try {
            const user = await BusinessUser.GetUserId(id);
            if (!user)
                return response.status(400).json({
                    error: 'Usuário não encontrado.'
                })
            return response.json(user);
        } catch (error) {
            return response.status(400).json(error);

        }


    }

    async create(request, response) {

        try {
            console.log('entrei')
            const userExist = await BusinessUser.UserExist(request.body.email);
            console.log('userExist', userExist)

            if(userExist) return {error: "Usuário já está cadastrado."};
                        
            const schema = await BusinessUser.CreateSchema( 'create');
            console.log('schema', schema)

            const validFields = await schema.validate(request.body, {
                abortEarly: false,
                stripUnknown: true
            })
    
            const {id, name, email, status}  = await BusinessUser.Create(validFields);
            
            return response.json({id, name, email, status}); 

        } catch (error) {
            return response.status(400).json(error);
        }
    }

    async update(request, response) {

        try {
            const { id } = request.body

            console.log('aqui esta o body', request.body, id)

            const user = await BusinessUser.GetUserId(id);


            if (!user) return response.status(400).json({ erro: "Usuário não encontrado." })

            const schema = await BusinessUser.CreateSchema('update');

            const validFields = await schema.validate(request.body, {
                abortEarly: false,
                stripUnknown: true
            });

            const { name } = await BusinessUser.Update(validFields, user);

            return response.json({ name });

        } catch (error) {
            return response.status(400).json(error);
        }


    }

    async delete(request, response){

        try {
            const {id} = request.params;

            const user = await BusinessUser.GetUserId(id);
            
            if(!user) return response.status(400).json({ erro: "Usuário não encontrado." })
    
            const deleted = await BusinessUser.Delete(id);

            return response.json({'status': deleted});

        } catch (error) {
            return response.status(404).json(error);
        }

    }



}

export default new UserController();