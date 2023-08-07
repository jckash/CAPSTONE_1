const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
let events = []


app.post('/api/events', (req, res) => {

let body = req.body
events.push(body)
console.log(events)
    res.status(200).send('success')
} )

const {getEvent} = require('./controller.js')

app.get('/api/dates', getEvent)

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/events.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})



app.listen(4050, () => {
    console.log('listening to requests on port 4050')
}) 