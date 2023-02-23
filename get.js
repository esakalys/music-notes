
const generateNotes = require('./notes')

// Functions for handling get requests

const getNotes = (req, res) => {
    notes = generateNotes()
    res.status(200).send(notes)
}

const getIndex = (req, res) => {
    res.status(200).send('index.html')
}

module.exports = {getNotes, getIndex}