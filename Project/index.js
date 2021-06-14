const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())

app.use(express.static('public'))


const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
    console.log('App is Running on PORT' + PORT)
})