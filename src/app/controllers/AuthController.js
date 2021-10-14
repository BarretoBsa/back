import jwt from 'jsonwebtoken'
import auth from '../../config/auth';
import authConfig from '../../config/auth'
import User from '../models/User'


class AuthController {
    async create (request, response){
        console.log('entrei')
        const {email, password} = request.body;

        console.log('email, password',email, password)

        const email_min = email.toLowerCase();
        console.log('email, email_min',email_min, email_min)

        const user = await User.findOne({where:{email: email_min}});

        console.log('achei o user', user)


        if(!user) return error;

        if(!(await user.checkPassword(password))) return 'lixo';

        const {id, name } = user;    
        
        return response.json({
            user: {id, name, email},
            token: jwt.sign({id}, authConfig.secret,{
                expiresIn:authConfig.expiresIn
            })
        });
    }
}

export default new AuthController();