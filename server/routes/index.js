const router = require('express').Router()

const teamRoutes = require('./teamsRoutes')
router.use('/teams', teamRoutes)

const userRoutes = require('./userRoutes')
router.use('/user', userRoutes)

module.exports = router