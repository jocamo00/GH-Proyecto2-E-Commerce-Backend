const User = require('../models/user')
const bcrypt = require('bcrypt')



const AuthController = {

    async login(req, res) {
        try {
            // Recoje el email y comprueba si existe o no
            let user = await User.findOne({email: req.body.email})
            if(!user) return res.status(400).send('Usuarios o contraseña incorrectos')
        
        
            // Se compara el password( el que introduce el usuario con el que tenemos guardado haseado)
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if(!validPassword) return res.status(400).send('Usuario o contraseña incorrectos')
        
        
            // Llama a la función que genera el token
            const jwtToken = user.generateJWT()
        
            // Le pasamos el token 
            res.status(201).header('Authorization', jwtToken)
            //res.status(201).send({jwtToken})
        } catch (error) {
            res.status(404).send(error.message)
          }
    }
}


module.exports = AuthController;