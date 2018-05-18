

var deadline = new Date("Oct 26, 2018 16:30:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);

document.getElementById("clock").innerHTML = days + "days "
+ hours + "hours " + minutes + "mins " + seconds + "secs ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("clock").innerHTML = "IT'S HERE!!!";
    }
}, 1000);


const specialPeople = [
  {
    img: './images/people/tracy.png',
    name: 'Tracey Yacobian',
    title: 'Matron of Honor'
  },
  {
    img: './images/people/erinn.png',
    name: 'Erinn Kantor-Wohn',
    title: 'Maid of Honor'
  },
  {
    img: './images/people/beth.png',
    name: 'Elizabeth Urry',
    title: 'Maid of Honor'
  },

];

const people = [
  {
    img: './images/people/daniel.png',
    name: 'Daniel Urry'
  },
  {
    img: './images/people/lexi.png',
    name: 'Alexia Watson'
  },
  {
    img: './images/people/justin.png',
    name: 'Justin Marsh'
  },
  {
    img: './images/people/shannon.jpg',
    name: 'Shannon Feiman'
  },
  {
    img: './images/people/sam.jpg',
    name: 'Sam Urry'
  },
  {
    img: './images/people/jessica.jpg',
    name: 'Jessica Reynolds'
  },
  {
    img: './images/people/chris.png',
    name: 'Christopher Walberg'
  },
  {
    img: './images/people/stella.png',
    name: 'Stella Killick'
  },
  {
    img: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/18739690_10102050676345447_4147910319703013995_n.jpg?_nc_cat=0&oh=e2a4dcd41a079cdbbcb9e278cda8d1ee&oe=5B7FA68C',
    name: 'Eric Johnson'
  },
  {
    img: './images/people/caitie.png',
    name: 'Caitlin Walberg'
  },
  {
    img: './images/people/jose.png',
    name: 'Jose Martinez'
  },
  {
    img: './images/people/ashley.png',
    name: 'Ashley Fuentes'
  },
  {
    img: './images/people/josh.png',
    name: 'Joshua Yacobian'
  },
  {
    img: './images/people/jacob.png',
    name: 'Jacob Urry'
  }



];
specialPeople.forEach(function(person) {
  $("#wedding-party").append(
    `<div class="people">
      <img class="people-img" src='${person.img}' style="height=100px; display=inline-block; ">
      <p>${person.name}</p>
      <p class="person-title">${person.title}</p>
    </div>`);
});

$('#wedding-party').append(`<br>`);

people.forEach(function(person) {
  $("#wedding-party").append(
    `<div class="people">
      <img class="people-img" src='${person.img}' style="height=100px; display=inline-block; ">
      <p>${person.name}</p>
    </div>`);
});



















// ----
