const express = require("express")
const routes = require('./routes')
const models = require('./models')
const serverless = require('serverless-http')

const sequelize = require("./config/connection")
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/.netlify/functions/api', routes)

sequelize.sync({sequelize}).then(() => {
    app.listen(port, () => {
        console.log(`Express server listening on port ${port}.`)
    })
})

module.exports.handler = serverless(app)