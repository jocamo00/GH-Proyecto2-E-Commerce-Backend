//#region require
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors')
const app = express();

const user = require('./routes/users');
const auth = require('./routes/auths');
//#endregion


app.use(cors())
//Recoje la petición y la convierte en JSON
app.use(express.json());
app.use('/public', express.static('public')) // para darle acceso desde el navegar a public y poder ver las imagenes


// Rutas padre
app.use('/api/users', user);
app.use('/api/auths', auth);



//#region Configuración del puerto
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Escuchando Puerto ${port}`))
//#endregion

// valor de la variable de entorno de la key del JWT
// console.log(process.env.SECRET_KEY_JWT_NETFLIX_API)


//#region Conexión a la BD
mongoose.connect('mongodb://localhost:27017/ecommercedb', { useNewUrlParser: true, 
                                                            useUnifiedTopology: true, 
                                                            useFindAndModify: false, 
                                                            useCreateIndex: true})

    .then(() => console.log('Conectado correctamente a MongoDB'))
    .catch(() => console.log('Error al conectarse a MongoDB'))
//#endregion