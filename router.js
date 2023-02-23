const express = require('express')
const g = require('./get')

// Storing the website routes

router = express.Router()

router.get('/', g.getIndex)
router.get('/notes', g.getNotes)

module.exports = router