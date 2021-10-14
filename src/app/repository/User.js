import User from '../models/User';

class Repositories {

    async ListUsers() {
        const user = await User.findAll();
        return user;
    }


    async GetUserId(id) {
        const user = await User.findByPk(id);
        return user;
    }

    async Create(validFields) {
            const user = await User.create(validFields);
            return user;

    }

    async Update(validFields, user) {

        const updateUser = await user.update(validFields);
        return updateUser;

}

    async GetByEmail(email) {

        const user = await User.findOne({
            where: {
                email: email
            }
        });
        return user;
    }

    async ValidPasswordUser(user) {

    
        const res = await user.checkePassword(password)

        return res;
    }

    async Delete(id){
        const deleted = await User.destroy({
            where: {
                id: id
            }
        });

        return deleted;

    }



   
}
export default new Repositories(); 