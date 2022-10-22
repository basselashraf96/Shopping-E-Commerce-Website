const jwt = require('jsonwebtoken')


//! this is a middleware to verify token for logged in users
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token //@get the token value from the headers entered Key (try it in postman headres section)

    if (authHeader) {

        const token = authHeader.split(' ')[1] //? Bearer is index[0] and token is index[1] (because you split them by space)

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

            if (err) {
                return res.status(401).json('Token is not valid')
            }

            req.user = user //! (user) here is the object of jwt.sign() in auth.js section which contains id and isAdmin

            next(); //! middlewares must provide another callback and not making a response it want stop the main operations which in this case next()
        })
    } else {
        return res.status(401).json('you are not authenticated')
    }
}

//! its a middleware to allow user to perform crud on certain endpints(only endpoints that hast that middleware applied)
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {

            next(); //! you are now allowed to perform crud operations because you are a logged in user with a token or your are the admin
        } else {
            res.status(403).json('You are not allowed to do that!')
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {

            next(); //! Only admin allowed to perform crud operations
        } else {
            res.status(403).json('You are not allowed to do that only admin!')
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }