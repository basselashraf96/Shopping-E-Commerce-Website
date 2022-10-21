const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const users = require('./routes/users')
const auth = require('./routes/auth')

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('CONNECTED TO DB');
    })
    .catch(e => {
        console.log(e);
    })

app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/users', users)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`LISTENING TO PORT:${port}`);
})