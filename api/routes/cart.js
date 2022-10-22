const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()
const bcrypt = require('bcrypt')
const Cart = require('../models/Cart')




// //TODO: CREATE 
router.post('/', verifyToken, async(req, res) => {
    const NewCart = new Cart(req.body)
    try {
        const saveCart = await NewCart.save()
        res.status(200).json(saveCart)
    } catch (e) {
        res.status(500).json(e)
    }


})


// //TODO: UPDATE 

router.put('/:id', verifyTokenAndAuthorization, async(req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        )

        res.status(200).json(updatedCart)
    } catch (e) {
        res.status(500).json(e)
    }
})

// //TODO: DELETE
router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id)

        res.status(200).json(deletedCart)
    } catch (e) {
        res.status(500).json(e)
    }
})


// //TODO: GET Cart
router.get('/find/:id', verifyTokenAndAuthorization, async(req, res) => {
    try {
        const fetchedCart = await Cart.findOne({ userId: req.params.id })

        res.status(200).json(fetchedCart)
    } catch (e) {
        res.status(500).json(e)
    }
})

//TODO: GET ALL Carts
router.get('/', verifyTokenAndAdmin, async(req, res) => {
    try {
        const fetchedCart = await Cart.find({})
        res.status(200).json(fetchedCart)
    } catch (e) {
        res.status(500).json(e)
    }
})


module.exports = router