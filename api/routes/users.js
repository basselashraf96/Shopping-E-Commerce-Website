const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken')

const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/Users')

//TODO: UPDATE 

router.put('/:id', verifyTokenAndAuthorization, async(req, res) => {
    if (req.body.password) {

        //! hash the password again if its passed in the body of PUT request(security)

        req.body.password = await bcrypt.hash(req.body.password.toString(), parseInt(process.env.SALT_ROUNDS))
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true } //! to return (updatedUser)  not the original one
        )

        res.status(200).json(updatedUser)
    } catch (e) {
        res.status(500).json(e)
    }
})

//TODO: DELETE
router.delete('/:id', verifyTokenAndAuthorization, async(req, res) => {

    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)

        res.status(200).json(deletedUser)
    } catch (e) {
        res.status(500).json(e)
    }

})


//TODO: GET USER
router.get('/find/:id', verifyTokenAndAdmin, async(req, res) => {

    try {
        const fetchedUser = await User.findById(req.params.id)
        const { password, ...others } = fetchedUser._doc
        res.status(200).json(others)
    } catch (e) {
        res.status(500).json(e)
    }

})

//TODO: GET ALL USERS
router.get('/', verifyTokenAndAdmin, async(req, res) => {
    const query = req.query.new

    try {

        const fetchedUsers = query ? await User.find({}).sort({ _id: -1 }).limit(5) : await User.find({});
        res.status(200).json(fetchedUsers)
    } catch (e) {
        res.status(500).json(e)
    }

})


//TODO: GET USER STATS

router.get('/stats', verifyTokenAndAdmin, async(req, res) => {

    //! get current date and asign it to a variable
    const date = new Date();

    //! get the last year date by substracting 1 year from the current date year (2022 - 1 = 2021)
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))


    try {

        //! aggregate framework is use to make computed result database
        const data = await User.aggregate([

            //! ($match) is like filter method to extract some data from a collections
            { $match: { createdAt: { $gte: lastYear } } },
            {

                //! ($project) is like showing only what you want to see from a collection you can [ <field>:0 to hide , <field>:1 to show , <field>: '$expression' to assign other fields expression to that field], _id is shown by default
                $project: {

                    //! ($month) to take only the month from the date
                    month: { $month: "$createdAt" }
                }
            },
            {
                //! ($group) is to group fields with same name as one with a unique _id and do an expression on them
                $group: {
                    _id: '$month',

                    //! ($sum) to get all months with the same value and add them together to get the total user created at the same month in last and current year
                    total: { $sum: 1 }
                }
            }
        ])
        res.status(200).json(data)

    } catch (e) {
        res.status(500).json(e)
    }


})


module.exports = router