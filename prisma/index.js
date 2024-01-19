const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
require('dotenv').config()

//regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cookie middleware
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => console.log('Server ready'))