const express = require("express")
const routes = require('./routes')
const models = require('./models')

const sequelize = require("./config/connection")
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

sequelize.sync({force: true}).then(() => {
    app.listen(port, () => {
        console.log(`Express server listening on port ${port}.`)
    })
})
