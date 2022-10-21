const router = require('express').Router()
const User = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//REGISTER

router.post('/register', async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password.toString(), parseInt(process.env.SALT_ROUNDS)),
    })
    try {

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (e) {
        res.status(500).json(e)
    }
})

//login

router.post('/login', async(req, res) => {

    try {
        const loginUser = await User.findOne({ username: req.body.username, });
        !loginUser && res.status(401).json('Wrong credentials')

        const { password, ...others } = loginUser._doc

        const isPassword = await bcrypt.compare(req.body.password.toString(), password.toString());

        if (isPassword) {

            //! give every loggined user a json web token
            //! the jwt sign will make an object with two params id and isAdmin
            //! to verify later on if the user is able to perform some crud or not
            //! if he is a logged in user with userId has json token or if he is the admin (see verifyToken.js)

            const accessToken = jwt.sign({
                id: loginUser._id,
                isAdmin: loginUser.isAdmin
            }, process.env.JWT_SECRET, { expiresIn: '3d' })

            res.status(200).json({...others, accessToken })
        } else {
            res.status(401).json('wrong password')
        }


    } catch (e) {
        res.status(500).json(e)
    }


})

module.exports = router