const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()
const bcrypt = require('bcrypt')
const Order = require('../models/Order')




// //TODO: CREATE 
router.post('/', verifyToken, async(req, res) => {
    const NewOrder = new Order(req.body)
    try {
        const saveOrder = await NewOrder.save()
        res.status(200).json(saveOrder)
    } catch (e) {
        res.status(500).json(e)
    }


})


// //TODO: UPDATE 

router.put('/:id', verifyTokenAndAdmin, async(req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        )

        res.status(200).json(updatedOrder)
    } catch (e) {
        res.status(500).json(e)
    }
})

// //TODO: DELETE
router.delete('/:id', verifyTokenAndAdmin, async(req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id)

        res.status(200).json(deletedOrder)
    } catch (e) {
        res.status(500).json(e)
    }
})


// //TODO: GET Order
router.get('/find/:id', verifyTokenAndAuthorization, async(req, res) => {
    try {
        const fetchedOrder = await Order.find({ userId: req.params.id })

        res.status(200).json(fetchedOrder)
    } catch (e) {
        res.status(500).json(e)
    }
})

//TODO: GET ALL Orders
router.get('/', verifyTokenAndAdmin, async(req, res) => {
    try {
        const fetchedOrder = await Order.find({})
        res.status(200).json(fetchedOrder)
    } catch (e) {
        res.status(500).json(e)
    }
})


//TODO: GET MONTHLY INCOMR

router.get('/income', verifyTokenAndAdmin, async(req, res) => {

    const date = new Date();

    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {

        const income = await Order.aggregate([{
                $match: {
                    createdAt: { $gte: previousMonth }
                }
            },

            {
                $project: {
                    month: { $month: '$createdAt' },
                    sales: '$amount'
                }
            },

            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' }

                }
            }
        ])
        res.status(200).json(income)
    } catch (e) {
        res.status(500).json(e)
    }

})

module.exports = router