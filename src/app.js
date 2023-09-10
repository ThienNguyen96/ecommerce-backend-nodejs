const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

//init middlewares
app.use(morgan("dev")) //'dev' or 'combined' to view log
app.use(helmet())
app.use(compression())


//init db

//init routes

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello world'
    })
})


module.exports = app