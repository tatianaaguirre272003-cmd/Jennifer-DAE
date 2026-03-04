const fishContainer = document.getElementById('fishContainer');
const animalsContainer = document.getElementById('animalsContainer');
const lake = document.getElementById('lake');
const waterSound = document.getElementById('waterSound');
const rainSound = document.getElementById('rainSound');
const fireSound = document.getElementById('fireSound');
const rain = document.getElementById('rain');
const fire = document.getElementById('fire');

let fishes = [];
let animals = [];
let simulationRunning = false;
let isDay = true;
let isRain = false;
let isFire = false;
let fishPopulation = 10;
let waterTemperature = 75;

// Crear peces
function createFish() {
  for (let i=0; i<5; i++){
    let fish = document.createElement('img');
    fish.src='images/fish.png';
    fish.className='fish';
    fish.style.top=Math.random()*300+'px';
    fish.style.left=Math.random()*800+'px';
    fishContainer.appendChild(fish);
    fishes.push(fish);
  }
}

// Crear animales
function createAnimals() {
  const animalImages=['images/deer.png','images/turtle.png'];
  for (let i=0;i<3;i++){
    let animal=document.createElement('img');
    animal.src=animalImages[i%animalImages.length];
    animal.className='animal';
    animal.style.top=Math.random()*300+'px';
    animal.style.left=Math.random()*800+'px';
    animalsContainer.appendChild(animal);
    animals.push(animal);
  }
}

// Animación
function animate() {
  if(!simulationRunning) return;
  fishes.forEach(fish=>{
    let left=parseFloat(fish.style.left);
    left-=1;
    if(left<-50) left=800;
    fish.style.left=left+'px';
  });
  animals.forEach(animal=>{
    let left=parseFloat(animal.style.left);
    left-=0.5;
    if(left<-60) left=800;
    animal.style.left=left+'px';
  });
  requestAnimationFrame(animate);
}

// Simulación
function startSimulation(){
  if(!simulationRunning){
    simulationRunning=true;
    animate();
    waterSound.play();
  }
}

// Día/Noche
function toggleDayNight(){
  isDay=!isDay;
  document.body.style.background=isDay?'linear-gradient(to bottom, #ffc0cb, #ffffff)':'linear-gradient(to bottom, #001f3f, #003366)';
}

// Lluvia
function toggleRain(){
  isRain=!isRain;
  rain.style.display=isRain?'block':'none';
  if(isRain) rainSound.play(); else rainSound.pause();
}

// Fogata
function toggleFire(){
  isFire=!isFire;
  fire.style.display=isFire?'block':'none';
  if(isFire) fireSound.play(); else fireSound.pause();
}

// Health
function toggleHealth(){
  alert("💖 Your health is full!");
}

// Actualizar lago y barra de salud
function updateLake(){
  fishPopulation+=2;
  document.getElementById("lakeStatus").textContent=
    "Fish: "+fishPopulation+" | Temp: "+waterTemperature+"°F | Updated!";
  updateHealthBar(fishPopulation, waterTemperature);
}

// Barra de salud
function updateHealthBar(fish,temp){
  let health=Math.min(100,(fish*5+temp)/2);
  document.getElementById('healthBar').style.width=health+'%';
}

// Inicializar
createFish();
createAnimals();