const mongoose = require('mongoose')


//#region Definición del schema product
const productSchema = new mongoose.Schema({
    brand: {
        type: String                                               
    },
    model: {
        type: String                                                             
    },
    processor: {
        type: String                                                              
    },
    memory: {
        type: String                                     
    },
    hardDisk: {
        type: String                                    
    },
    sizeMonitor: {
        type: String                                      
    },
    description: {
        type: String                                                        
    },
    price: {
        type: Number                                                        
    },
    imgUrl: {
        type: String                                
    },
    stock: {
        type: Number
    },
    numOrders: {
        type: Number
    },
    promotion: {
        type: Boolean
    },
},
{
    timestamps: true 
})
//#endregion
  
  
  //#region Definición del modelo
  const Product = mongoose.model('product', productSchema)
  //#endregion


  module.exports = Product

