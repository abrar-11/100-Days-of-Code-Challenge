const express  = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')
const multer = require('multer')
const port = process.env.port || 5000

const upload = multer({dest: 'uploads'})

app.use(express.json())
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})


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
