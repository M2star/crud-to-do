const express = require('express')
const connectDb = require('./db/connection')
const task = require('./routes/routes')
require('dotenv').config()
const app = express()
const PORT = 3001
app.use(express.json());

app.use('/api/v1/tasks', task)

start = async() => {
    try{
        await connectDb(process.env.MONGO_KEY)
        app.listen(PORT, ()=> {
            console.log('server is start at' + ' ' + PORT )
        })
    }catch(error){
        console.log(error,'something wrong')
    }
}

start()