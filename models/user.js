const      jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

//#region Definición del schema user
const userSchema = new mongoose.Schema({
    firstName: {
             type: String,                      
        minlength: 1,                       
        maxlength: 42            
    },
    lastName: {
             type: String,                      
        minlength: 1,                      
        maxlength: 99          
    },
    email: {
             type: String,                      
        minlength: 1,                      
        maxlength: 99,                 
           unique: true                      
    },
    password: {
             type: String,
        minlength: 6,
        maxlength: 99
    },
    role: {
             type: String,
        minlength: 1,
        maxlength: 42
    },
},
{
    timestamps: true 
  })
  //#endregion


// Genera el token, le pasamos los datos que queramos enviar (payload) y la key
// Generar variable de entorno = export SECRET_KEY_JWT_NETFLIX_API=key 
// process.env.SECRET_KEY_JWT_NETFLIX_API
userSchema.methods.generateJWT = function() {
return jwt.sign({     _id: this._id, 
                firstName: this.firstName,
                     role: this.role 
                }, process.env.SECRET_KEY_JWT_NETFLIX_API)
}
//#endregion
  
  
  //#region Definición del modelo
  const User = mongoose.model('user', userSchema)
  //#endregion


  module.exports = User
  //module.exports.userSchema = userSchema
