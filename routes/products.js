//#region Requires
const express = require('express')
const auth = require('../middleware/auth')
const Role = require('../helpers/role')
const authorize = require('../middleware/role')
const Product = require('../models/product')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
//#endregion


//#region Listar todos los productos
router.get('/', ProductController.getAll);
//#endregion


//#region  Listar producto por id
router.get('/:_id', ProductController.getId);
//#endregion


//#region Filtrar producto por marca
router.get('/brand/:brand', ProductController.getBrand); 
//#endregion


//#region Filtrar productos en promoción
router.get('/promotion/:promotion', ProductController.getPromotion);
//#endregion


//#region Introducir producto
router.post('/', ProductController.insert);
//#endregion


//#region Editar el producto seleccionado por id  
router.put('/:_id', ProductController.updateId);
//#endregion 


//#region Eliminar producto por id  
router.delete('/:_id', ProductController.deleteId);
//#endregion



module.exports = router;