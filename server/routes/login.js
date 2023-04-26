const express = require('express')
const User = require('../model/login')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = express.Router()

router.post('/', async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json('User Not Found')
        }
        if(user.password !== password){
            return res.status(400).json('Invalid Credentials')
        }
        const payload={
            user:{
                id: user.id
            }
        }
        jwt.sign(payload, process.env.JWT_KEY, {expiresIn:36000000}, (err, token)=>{
            if(err) throw err;
            return res.json({token})
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internval Server Error')
    }
})

module.exports = router