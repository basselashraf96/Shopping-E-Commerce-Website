const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const users = require('./routes/users')
const product = require('./routes/product')
const cart = require('./routes/cart')
const order = require('./routes/order')

const auth = require('./routes/auth')

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('CONNECTED TO DB');
    })
    .catch(e => {
        console.log(e);
    })
app.use(cors())
app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/products', product)
app.use('/api/cart', cart)
app.use('/api/order', order)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`LISTENING TO PORT:${port}`);
})