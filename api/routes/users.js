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
        const fetchedUsers = query ? await User.find({}).sort({ _id: -1 }).limit(1) : await User.find({})
        const { password, ...others } = fetchedUsers._doc
        res.status(200).json(fetchedUsers)
    } catch (e) {
        res.status(500).json(e)
    }

})



module.exports = router