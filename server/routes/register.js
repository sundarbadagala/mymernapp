const express = require('express')
const User = require('../model/register')

const router = express.Router()

router.post('/', async (req, res)=>{
    try {
        const {username, email, password, confirmpassword} = req.body
        const isEmailExist = await User.findOne({email})
        if(isEmailExist){
            return res.status(400).json('User Already Exist')
        }
        if(password !== confirmpassword){
            return res.status(400).json('Password Does Not Match')
        }
        const newUser = new User({
            username,
            email,
            password,
            confirmpassword
        })
        await newUser.save()
        return res.status(200).json('Success')
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal Server Error')
    }
})

module.exports = router