const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors())


let database = []


app.post('/api/events', (req, res) => {

let body = req.body
database.push(body)
console.log(database)
    res.status(200).send('success')
} )



app.get('/api/events', (req, res) => {
res.status(200).send(database)
})







app.listen(4050, () => {
    console.log('listening to requests on port 5000')
}) 