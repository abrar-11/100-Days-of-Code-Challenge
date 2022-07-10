
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT ||5000
const {errorHandler} = require('./middleware/error');
const goalRoutes = require('./routes/goalRoutes')
const colors = require('colors')
const app = express()


const connectDB = require('./config/database')
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Error MiddleWare
app.use(errorHandler)

app.use('/api/goals',goalRoutes)

app.listen(port,()=>console.log(`server is listening on port ${port}`))


