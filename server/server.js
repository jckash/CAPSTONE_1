const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
let events = []

const {getEvent, createEvent, deleteEvent} = require('./controller.js')


app.post('/api/events', createEvent)


app.get('/api/dates', getEvent)

app.delete('/api/dates/:id', deleteEvent)

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/events.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



app.listen(4050, () => {
    console.log('listening to requests on port 4050')
}) 