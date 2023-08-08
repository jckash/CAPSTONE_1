
let viewEvents = document.getElementById('viewEvents')



function viewAllEvents() {
    axios.get('http://localhost:4050/api/dates')
    .then(eventsCallback)
    .catch(err => { console.log(err)})
}


viewEvents.addEventListener('click', () => {
    axios.get('http://localhost:4050/api/dates')
    .then(response => {
        console.log(response.data)
         
         })
});

addEvent.addEventListener('click', () => {
    window.location.href=('index.html')
    axios.get('http://localhost:4050/api/events')
    .then(response => {
        console.log(response.data)
         
         })

    
});




const eventsContainer = document.getElementById('eventsContainer');

const eventsCallback = ({ data: events }) => displayEvents(events)



function createEventCard(event){
const card = document.createElement('div');
card.className = "card";
card.innerHTML = `
<h2>${event.event}</h2>
<h2>${event.time}<h2>
<p>Schedule: ${event.schedule} </p>
</div>
<button onclick="deleteEvent(${event.id})">delete</button>`;


eventsContainer.appendChild(card);
}

function displayEvents(arr) {
    eventsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createEventCard(arr[i])
    }
}
viewAllEvents() 