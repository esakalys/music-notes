
const express = require('express')
const router = require('./router')

app = express()
app.use('/', router)

app.listen(5001, () => {
    console.log('Server is listening on 5001')
})