

let eventForm = document.getElementById('eventForm')
let inputEvent = document.getElementById('inputEvent')
let inputTime = document.getElementById('inputTime')
let inputSchedule = document.getElementById('inputSchedule')
let viewEvents = document.getElementById('viewEvents')

eventForm.addEventListener('submit', (event) =>{
event.preventDefault()

let body = {
    event: inputEvent.value,
    time: inputTime.value,
    schedule: inputSchedule.value}

axios.post('http://localhost:4050/api/events', body)
.then((response) => {
console.log(response.data);
eventForm.reset();

}).catch((error) => {
    console.log(error)
})
})

viewEvents.addEventListener('click', () => {
    
    axios.get('http://localhost:4050/api/dates')
    .then(response => {
        console.log(response.data)
         
         })
});



addEvent.addEventListener('click', () => {
    axios.post('http://localhost:4050/api/events')
    .then(response => {
        console.log(response.data)
         
         })

    
});

const event = document.getElementById('event').value;
const time = document.getElementById('time').value;
const schedule = document.getElementById('schedule').value;

const card = document.createElement('div');
card.className = "card";
card.innerHTML = `
<h2>${event}</h2>
<h2>${time}<h2>
<p>Schedule: ${schedule} </p>`;

const eventsContainer = document.getElementById('eventsContainer');
eventsContainer.appendChild(card);