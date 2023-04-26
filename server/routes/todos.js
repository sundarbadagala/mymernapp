const express = require('express')
const Todos = require('../model/todos')

const router = express.Router()

router.post('/', async(req, res)=>{
    try {
        const newTodo = new Todos(req.body)
        await newTodo.save()
        return res.json(newTodo)
    } catch (error) {
        res.json(error)
    }
})

router.get('/', async(req, res)=>{
    try {
        return res.json(await Todos.find())
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const todo = await Todos.findById(req.params.id)
        return res.json(todo)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const deletedTodo = await Todos.findByIdAndDelete(req.params.id)
        return res.json(deletedTodo)
    } catch (error) {
        res.json(error)
    }
})

router.put('/:id', async(req, res)=>{
    try {
        const updatedTodo = await Todos.findOneAndUpdate(
            {_id:req.params.id},
            req.body
        )
        return res.json(updatedTodo)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router