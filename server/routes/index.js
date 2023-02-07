const router = require('express').Router()

const teamRoutes = require('./teamsRoutes')
router.use('/api/teams', teamRoutes)

const userRoutes = require('./userRoutes')
router.use('/api/user', userRoutes)

module.exports = router