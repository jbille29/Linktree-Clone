require('dotenv').config()
const express = require('express')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const { logEvents } = require('./middleware/logger')
const PORT = process.env.PORT || 3500
const app = express()
const userRouter = require('./routes/userRoutes')

connectDB()

app.use(express.json())

app.use(logger)

app.use('/users', userRouter)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
 })

 mongoose.connection.on('error',  err => { 
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
 })
