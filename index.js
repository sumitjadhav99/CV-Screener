console.log("This is my index.js");

// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: "Rohan Das",
        age: 18,
        city: "Kolkata",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },

    {
        name: "Shubham Sharma",
        age: 28,
        city: "Bangalore",
        language: "JavaScript",
        framework: "Angular",
        image: "https://randomuser.me/api/portraits/men/23.jpg"
    },

    {
        name: "Camella Cabello",
        age: 18,
        city: "Kolkata",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/women/24.jpg"
    },

    {
        name: "Aishwarya Rai",
        age: 45,
        city: "Mumbai",
        language: "Python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/women/25.jpg"
    },

    {
        name: "Rohit Sharma",
        age: 34,
        city: "Jharkhand",
        language: "Go",
        framework: "Go Framework",
        image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
]

// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done:false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);
nextCV();
// Button Listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML=`<img src=${currentCandidate.image}>`;
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;}
  else{
      alert('End of candidate applications');
      window.location.reload();
  }
}