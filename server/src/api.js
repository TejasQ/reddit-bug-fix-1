const express = require('express')
const serverless = require('serverless-http')
const app = express()


module.exports.handler = serverless(app)