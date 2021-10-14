import RepositoryUser from '../repository/User'
import * as Yup from 'yup';

class Business {

    async List() {
        const user = RepositoryUser.ListUsers();
        return user;
    };

    async GetUserId(id) {
        const user = await RepositoryUser.GetUserId(id);
        return user;
    };

    async Delete(id) {
        const deleted = await RepositoryUser.Delete(id);
        return deleted;
    };

    async CreateSchema(type) {
        try {
            let schema = '';
            if(type === 'create'){

                return  schema = Yup.object().shape({
                        name: Yup.string().required().max(120),
                        email: Yup.string().email().required().max(120),
                        password: Yup.string().required().min(4)
                    }).noUnknown();
                }
                else{
                    return schema = Yup.object().shape({
                        name: Yup.string().required().max(120),
                        password: Yup.string().min(4)
                    });
               }
           

        } catch (error) {
            return error

        }

    }

    async UserExist(email) {
        const userExist = await RepositoryUser.GetByEmail(email);
        return userExist;
    }
    async ValidPasswordUser(user) {
        const validUser = await RepositoryUser.ValidPasswordUser(user);
        return validUser;
    }
    


    async Create(validFields) {
        try {

            const user = await RepositoryUser.Create(validFields);
            return user;

        } catch (error) {
            return error;
        }


    }

    async Update(validFields, user) {
        try {

            const updateUser = await RepositoryUser.Update(validFields, user);
            return updateUser;

        } catch (error) {
            return error;
        }


    }


}

export default new Business();