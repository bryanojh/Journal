let isSunny = false;
let isCloudy = true;
let isEveGoing = true;
let isTuesday = false;
let isJaniceGoing = false;

var button = document.getElementById("compute");

button.addEventListener("click", function() {

  if ((isSunny || isCloudy) &&
    isEveGoing && !isTuesday &&
    !isJaniceGoing
  ) {
    document.getElementById("Going").style.backgroundColor = "green";

  } else {
    document.getElementById("notGoing").style.backgroundColor = "green";
  }
});

for (let i = 10; i >= 0; i--) {
  if ((i % 2 == 0) && (i !== 0)) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("even")
    let newContent = document.createTextNode("" + i + "(even)");
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
  }else {
    let newDiv = document.createElement("div");
    newDiv.classList.add("odd")
    let newContent = document.createTextNode("" + i);
    newDiv.appendChild(newContent);
    document.body.appendChild(newDiv);
  }
}

let momobae = {
  name: "Momobae",
  specialty: "K-Pop",
  power: 49,
  hitpoints: 28,
  level: 7,
  gender: "Female"
}

let newDiv1 = document.createElement("div");
newDiv1.classList.add("mystyle")
newDiv1.innerHTML = "Name: " + momobae.name + "<br>Specialty: " + momobae.specialty + "<br>Power: " + momobae.power + "<br>Hitpoints: " + momobae.hitpoints + "<br>Level: " + momobae.level + "<br>Gender: " + momobae.gender;
document.body.appendChild(newDiv1);

function Singer(name, specialty, power, hitpoints, level, gender ){
  this.name = name;
  this.specialty = specialty;
  this.power = power;
  this.hitpoints = hitpoints;
  this.level = level;
  this.gender = gender;
  this.maxpower = function() {
    return this.power * this.level - this.hitpoints;
  };
  this.singerProfile = function() {
    let hits = "Weak";
    if (this.hitpoints > 50)
      hits = "Strong";
    if (this.hitpoints > 70)
      hits = "Amazing";
    return (`"${this.name} Level ${this.level}, Gender ${this.gender}, Specialty '${this.specialty}', <br>Power ${this.power}! <br>Hitpoints: ${hits}."`);
};
};

let minabae = new Singer("Minabae", "K-Pop", 50, 29, 8, "Female");

let newDiv2 = document.createElement("div");
newDiv2.classList.add("mystyle")
newDiv2.innerHTML = "Momobae's Singer Profile: <br>" +momobae.singerProfile();
document.body.appendChild(newDiv2);

let newDiv3 = document.createElement("div");
newDiv3.classList.add("mystyle")
newDiv3.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile();
document.body.appendChild(newDiv3);

let el = document.querySelectorAll("li.hot");

for (let i = 0; i < el.length; i++) {
  el[i].className = "cool";
}


