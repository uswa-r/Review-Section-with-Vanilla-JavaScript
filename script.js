const reviews = [{
        id: 1,
        name: "John Doe",
        job: "Engineer",
        img: "1.jpeg",
        text: "loream Ipsum jajdasjdhasjdhajdhajhd."
    },
    {
        id: 2,
        name: "Jonn Doe",
        job: "Engineer",
        img: "1.jpeg",
        text: "loream Ipsum jajdasjdhasjdhajdhajhd."
    },
    {
        id: 3,
        name: "Johnson Doe",
        job: "Engineer",
        img: "1.jpeg",
        text: "loream Ipsum jajdasjdhasjdhajdhajhd."
    }
];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    console.log("hello");
})