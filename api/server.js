const express = require("express")

const server = express()

// DO YOUR MAGIC
server.use(express.json())

server.use('*', (req, res, next) => {
    next({status: 404, message: 'not found'})
})

module.exports = server
