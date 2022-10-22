const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()
const bcrypt = require('bcrypt')
const Product = require('../models/Products')




// //TODO: CREATE 
router.post('/', verifyTokenAndAdmin, async(req, res) => {
    const NewProduct = new Product(req.body)
    try {
        const saveProduct = await NewProduct.save()
        res.status(200).json(saveProduct)
    } catch (e) {
        res.status(500).json(e)
    }


})


// //TODO: UPDATE 

router.put('/:id', verifyTokenAndAdmin, async(req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        )

        res.status(200).json(updatedProduct)
    } catch (e) {
        res.status(500).json(e)
    }
})

// //TODO: DELETE
router.delete('/:id', verifyTokenAndAdmin, async(req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)

        res.status(200).json(deletedProduct)
    } catch (e) {
        res.status(500).json(e)
    }
})


// //TODO: GET Product
router.get('/find/:id', async(req, res) => {
    try {
        const fetchedProduct = await Product.findById(req.params.id)

        res.status(200).json(fetchedProduct)
    } catch (e) {
        res.status(500).json(e)
    }
})

//TODO: GET ALL Products
router.get('/', async(req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products;
        if (qNew) {
            products = await Product.find({}).sort({ createdAt: -1 }).limit(1)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            })
        } else {
            products = await Product.find({})
        }

        res.status(200).json(products)
    } catch (e) {
        res.status(500).json(e)
    }

})



module.exports = router