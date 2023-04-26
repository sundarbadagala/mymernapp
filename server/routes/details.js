const express = require('express')
const Details = require('../model/details')

const router = express.Router()

router.post('/', async (req, res)=>{
    try {
        const newDetails = new Details(req.body)
        await newDetails.save()
        return res.json(newDetails)
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res)=>{
    try {
        return res.json(await Details.find())
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
