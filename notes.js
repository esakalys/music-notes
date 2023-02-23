
// generates a sequence of random integers that represent notes
const generateNotes = () => {
    let numNotes = 20
    let notes = []
    let octave = Math.floor(Math.random()*2)

    for (let i = 0; i < numNotes; i++){
        let value = Math.floor(Math.random() * 7)
        let note = {i: value}
        notes.push(note)
    }

    result = {'Octave': octave, 'Notes': notes}

    return result
}

module.exports = generateNotes
