
let viewEvents = document.getElementById('viewEvents')



function viewAllEvents() {
    axios.get('http://localhost:4050/api/dates')
    .then(response => {
        console.log(response.data)
         
         })
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

viewAllEvents() 