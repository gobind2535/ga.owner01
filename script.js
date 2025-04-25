// header banner title text
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<strong>Web Designer</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Graphic Designer</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Web Developer</strong>')
    .pauseFor(2500)
    .start();

    // counter
    document.addEventListener("DOMContentLoaded", () => {
        function counter(id, start, end, duration) {
         let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
           current += increment;
           obj.textContent = current;
           if (current == end) {
            clearInterval(timer);
           }
          }, step);
        }
        counter("count1", 0, 3, 1000);
        counter("count2", 0, 50, 1550);
        counter("count3", 0, 2, 3500);
       });

// testimonals slider
const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {
    photo:
      'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
    name: "Mis Dolly",
    profession: "Freelancer",
    description:
      "Donec ac quam non elit hendrerit placerat. Pellentesque a est id diam lacinia convallis. Etiam non quam sit amet odio pharetra lacinia. Donec purus enim, ornare ac imperdiet hendrerit placerat."
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
    name: "Julius Grohn",
    profession: "UI/UX DESIGNER",
    description:
      "Donec ac quam non elit hendrerit placerat. Pellentesque a est id diam lacinia convallis. Etiam non quam sit amet odio pharetra lacinia. Donec purus enim, ornare ac imperdiet hendrerit placerat."
  },

  {
    photo:
      "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
    name: "Sunny Sir",
    profession: "Web Developer",
    description:
      "Donec ac quam non elit hendrerit placerat. Pellentesque a est id diam lacinia convallis. Etiam non quam sit amet odio pharetra lacinia. Donec purus enim, ornare ac imperdiet hendrerit placerat."
  },

  {
    photo:
      "url('../img/favicon.png')",
    name: "Unqiue Code Life",
    profession: "Web Design & Development",
    description:
      "Donec ac quam non elit hendrerit placerat. Pellentesque a est id diam lacinia convallis. Etiam non quam sit amet odio pharetra lacinia. Donec purus enim, ornare ac imperdiet hendrerit placerat."
  }
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
  if (chicken.style.opacity === "0") {
    chicken.style.opacity = "1";
    imgDiv.classList.add("move-head");
    surpriseMeBtn.innerText = "Remove the chicken";
    surpriseMeBtn.classList.remove("surprise-me-btn");
    surpriseMeBtn.classList.add("hide-chicken-btn");
    isChickenVisible = true;
  } else if (chicken.style.opacity === "1") {
    chicken.style.opacity = "0";
    imgDiv.classList.remove("move-head");
    surpriseMeBtn.innerText = "Surprise me";
    surpriseMeBtn.classList.add("surprise-me-btn");
    surpriseMeBtn.classList.remove("hide-chicken-btn");
    isChickenVisible = false;
  }
});

window.addEventListener("resize", () => {
  description.style.height = "100%";
});

