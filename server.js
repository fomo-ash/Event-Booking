require('dotenv').config()
const express = require('express')
const connect = require('./config/config')
const authroutes= require('./routes/authroutes')
const eventroutes= require('./routes/eventroutes')
const bookingroutes= require('./routes/bookingroutes')

const app =express()
connect()

app.use(express.json())
app.use('/api/auth', authroutes)
app.use('/api/event', eventroutes)
app.use('/api/bookings', bookingroutes)

app.get('/',(req,res)=>{
    res.send("Hi, Zairza, wanna book some events?")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));