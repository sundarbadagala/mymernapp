const express = require('express')
const cors = require('cors')
const db = require('./db')
const todos = require('./routes/todos')
const details = require('./routes/details')
const register = require('./routes/register')
const login = require('./routes/login')
const profile = require('./routes/profile')
require('dotenv').config()

const app = express()

db()

app.use(express.json())
app.use(cors())
app.use('/todos', todos)
app.use('/details', details)
app.use('/register', register)
app.use('/login', login)
app.use('/profile', profile)

const port = process.env.PORT || 8080



app.listen(port, ()=>console.log(`server running on ${port}...`))