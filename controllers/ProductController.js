const Product = require('../models/product')


const ProductControler = {

    async getAll(req, res) {
        try {
            const products = await Product.find()
            res.send(products)

        } catch (error) {
            res.status(404).send(error.message)
          }
    },
    async getId(req, res) {
        try {
            // recoje el id de la url
        const product = await Product.findById(req.params._id)
        res.send(product)

        } catch (error) {
            res.status(404).send('No hemos encontrado ningun producto con ese ID' + '\n' + error.message)
          }
    },
    async getBrand(req, res) {
        try {
            const products = await Product.find({title: req.params.title})
            res.send(products)

        } catch (error) {
            res.status(404).send('No hemos encontrado un producto de esa marca' + '\n' + error.message)
          }
    },
    async getPromotion(req, res) {
        try {
            const products = await Product.find({promotion: req.params.promotion})
            res.send(products)

        } catch (error) {
            res.status(404).send('No hemos encontrado ningun producto en promoción' + '\n' + error.message)
          }
    },
    async insert(req, res) {
        try {

            const product = new Product({

                      brand: req.body.brand,
                      model: req.body.model,
                  processor: req.body.processor,
                     memory: req.body.memory,
                   hardDisk: req.body.hardDisk,
                sizeMonitor: req.body.sizeMonitor,
                description: req.body.description,
                      price: req.body.price,
                     imgUrl: req.body.imgUrl,
                      stock: req.body.stock,
                  numOrders: req.body.numOrders,
                  promotion: req.body.promotion,
        })
      
        // Guarda el producto
        const result = await product.save()
        res.status(201).send(result)

        } catch (error) {
            res.status(404).send('No se ha podido insertar el producto' + '\n' + error.message)
          }
    },
    async updateId(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, {
                      brand: req.body.brand,
                      model: req.body.model,
                  processor: req.body.processor,
                     memory: req.body.memory,
                   hardDisk: req.body.hardDisk,
                sizeMonitor: req.body.sizeMonitor,
                description: req.body.description,
                      price: req.body.price,
                     imgUrl: req.body.imgUrl,
                      stock: req.body.stock,
                  numOrders: req.body.numOrders,
                  promotion: req.body.promotion,
            },
            {
            // Devuelve el documento modificado
            new: true
            })
            res.status(204).send()

        } catch (error) {
            res.status(404).send('El producto con ese ID no esta');
          }
    },
    async deleteId(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params._id)
            res.status(200).send('producto borrado');

        } catch (error) {
            res.status(404).send('El producto con ese ID no esta, no se puede eliminar');
          }
    }
}


module.exports = ProductControler;