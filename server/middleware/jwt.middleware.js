const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function(req, res, next){
    try {
        const token = req.header('x-token')
        if(!token){
            return res.status(401).json('Unathorized Access')
        }
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.user = decode.user
        next()
    } catch (error) {
        console.log(error)
        return res.status(400).json('Invalid Token')
    }
}