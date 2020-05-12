const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

//#region Definición del schema user
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,                       // tipo de dato
        minlength: 1,                       // minima longitud
        maxlength: 42,                      // maxima longitud
        trim: true,                         // elimina espacios en blanco innecesarios
        required: true,                     // si es obligatorio
    },
    lastName: {
        type: String,                      
        minlength: 1,                      
        maxlength: 99,                  
        trim: true,                         
        required: true
    },
    email: {
        type: String,                      
        minlength: 1,                      
        maxlength: 99,                  
        trim: true,
        required: true,
        unique: true                      
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 99,
        require: true
    },
    role: {
        type: String,
        minlength: 1,
        maxlength: 42,
        trim: true
    },
    address: {
        type: String,                      
        minlength: 1,                      
        maxlength: 99,                  
        trim: true                        

    },
    country: {
        type: String,                      
        minlength: 1,                      
        maxlength: 42,                  
        trim: true                       

    },
    province: {
        type: String,                      
        minlength: 1,                      
        maxlength: 42,                  
        trim: true                      

    },
    zip: {
        type: Number,                      
        minlength: 5,                      
        maxlength: 5,                  
        trim: true                        
        
    },
    /*imageUrl: {
        type: String
    },*/
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
