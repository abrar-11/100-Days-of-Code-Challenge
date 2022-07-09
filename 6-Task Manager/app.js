const express  = require('express')
const app = express()
require('dotenv').config()

// Importing Router

const taskRouter = require('./routes/Task.js')
const port = 3000
const connectDB = require('./db/connect')


app.use(express.json())
app.use('/api/v1',taskRouter)
app.use(express.static('./public'));


const startDB = async()=>{
    try{
        await connectDB(process.env.MONGO_CONNECTION_STRING)

        app.listen(port,console.log(`Listening on port: ${port}`))
    }
    catch (error){
        console.log(error)
    }
}



startDB()
