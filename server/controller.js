const events = require('./events.json')
let globalId = 0
console.log('hello')
console.log(events)
module.exports = {
    getEvent: (req, res) => res.status(200).send(events),
    deleteEvent: (req, res) => {
        let index = events.findIndex(elem => elem.id === +req.params.id)
        events.splice(index, 1)
        res.status(200).send(events)
    },
    createEvent: (req, res) => {
        let { event, time, schedule } = req.body
        let newEvent = {
            'id': globalId,
            'event': event, 
            'time': time,
            'schedule': schedule
        }
        console.log(newEvent)
        events.push(newEvent)
        
        res.status(200).send(events)
        globalId++
    }
    }
