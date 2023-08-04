

let eventForm = document.getElementById('eventForm')
let inputEvent = document.getElementById('inputEvent')
let inputTime = document.getElementById('inputTime')
let inputSchedule = document.getElementById('inputSchedule')
let viewDates = document.getElementById('viewDates')

eventForm.addEventListener('submit', (event) =>{
event.preventDefault()

let body = {
    event: inputEvent.value,
    time: inputTime.value,
    schedule: inputSchedule.value}

axios.post('http://localhost:4050/api/events', body)
.then((response) => {
console.log(response.data)

}).catch((error) => {
    console.log(error)
})
})

viewDates.addEventListener('click', () => {
    axios.get('http://localhost:4050/api/events')
    .then(response => {
        console.log(response.data)
         
         })
});