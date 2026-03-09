// =================== PORTADA ===================
const covers = ["images/work1.png","images/work2.png","images/work3.png","images/work4.png"];
let currentCover = 0;
function nextCover() {
  currentCover = (currentCover + 1) % covers.length;
  document.getElementById("coverImage").src = covers[currentCover];
}
function prevCover() {
  currentCover = (currentCover - 1 + covers.length) % covers.length;
  document.getElementById("coverImage").src = covers[currentCover];
}

// =================== LAGO ANIMADO ===================
const frames = ["images/frame1.png","images/frame2.png","images/frame3.png","images/frame4.png"];
let currentFrame = 0;
function animateLake() {
  const lakeFrame = document.getElementById("lakeFrame");
  currentFrame = (currentFrame + 1) % frames.length;
  lakeFrame.src = frames[currentFrame];
}

// =================== ANIMA ANIMALES PEQUEÑOS ===================
function moveAnimals() {
  const animals = document.querySelectorAll(".animal");
  animals.forEach(a => {
    // movimiento dentro de un cuadradito pequeño (20%-80%)
    const top = 20 + Math.random()*60;
    const left = 20 + Math.random()*60;
    a.style.top = top + "%";
    a.style.left = left + "%";
  });
}

// =================== DAY / NIGHT ===================
function toggleDayNight() {
  document.body.classList.toggle("night");
}

// =================== RAIN ===================
let raining = false;
function toggleRain() {
  raining = !raining;
  const rainContainer = document.getElementById("rain");
  rainContainer.innerHTML = '';
  if(raining) createRain(100);
}
function createRain(count){
  const rainContainer = document.getElementById("rain");
  for(let i=0;i<count;i++){
    const drop = document.createElement("div");
    drop.className='drop';
    drop.style.left=Math.random()*100+'%';
    drop.style.animationDuration=(0.5+Math.random()*1)+'s';
    drop.style.animationDelay=(Math.random()*2)+'s';
    rainContainer.appendChild(drop);
  }
}

// =================== ADD FISH ===================
function addFish(){
  const lake=document.getElementById("lakeContainer");
  const fish=document.createElement("img");
  fish.src="images/fish.png";
  fish.className="animal";
  fish.style.top = 20 + Math.random()*60 + "%";
  fish.style.left = 20 + Math.random()*60 + "%";
  lake.appendChild(fish);
}

// =================== TEMPERATURA ===================
let temp = 20; // inicial
function changeTemperature(){
  temp = temp + 10; // simula cambio
  if(temp>30){
    document.body.style.background="linear-gradient(to bottom, #ff4500, #ffa500)"; // caliente rojo-anaranjado
  } else if(temp<10){
    document.body.style.background="linear-gradient(to bottom, #cce6ff, #ffffff)"; // frio azul-blanco
  } else {
    document.body.style.background="linear-gradient(to bottom, #ffd1dc, #fff)"; // normal rosa pastel
  }
}

// =================== INICIALIZAR ===================
window.onload = ()=>{
  setInterval(animateLake, 10000);
  setInterval(moveAnimals, 1000);
};