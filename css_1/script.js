// =================== CONSTANTE (REQUERIDO) ===================
const MAX_FISH = 15;

// =================== LAGO ANIMADO ===================
const frames = ["images/frame1.png","images/frame2.png","images/frame3.png","images/frame4.png"];
let currentFrame = 0;

function animateLake() {
  const lakeFrame = document.getElementById("lakeFrame");
  currentFrame = (currentFrame + 1) % frames.length;
  lakeFrame.src = frames[currentFrame];
}

// =================== EMOJIS / ANIMALES ===================
let speed = 1;

function moveAnimals() {
  const animals = document.querySelectorAll(".animal");

  animals.forEach(a => {
    let left = parseFloat(a.style.left);

    if(left <= -10 || isNaN(left)) {
      a.style.left = "100%";
      a.style.top = 20 + Math.random()*60 + "%";
    }

    a.style.transition = "left " + (20/speed) + "s linear";
    a.style.left = "-10%";

    // ✅ onmouseover (REQUERIDO)
    a.onmouseover = function(){
      a.style.transform = "scale(1.3)";
    };
  });
}

// =================== SPEED ===================
function speedUp(){
  speed += 0.5;
  if(speed > 3) speed = 1;

  const animals = document.querySelectorAll(".animal");
  animals.forEach(a=>{
    const currentLeft = getComputedStyle(a).left;
    a.style.transition = "left " + (20/speed) + "s linear";
    a.style.left = currentLeft;
  });
}

// =================== DAY / NIGHT ===================
function toggleDayNight() {
  document.body.classList.toggle("night");
}

// =================== RAIN ===================
let raining = false;
let rainInterval; // ✅ para clearInterval

function toggleRain() {
  raining = !raining;
  const rainContainer = document.getElementById("rain");
  rainContainer.innerHTML = '';

  if(raining){
    rainInterval = setInterval(()=> createRain(20), 500);
  } else {
    clearInterval(rainInterval); // ✅ REQUERIDO
  }
}

function createRain(count){
  const rainContainer = document.getElementById("rain");

  for(let i=0;i<count;i++){ // ✅ LOOP
    const drop = document.createElement("div");
    drop.className='drop';

    drop.style.left=Math.random()*100+'%';
    drop.style.animationDuration=(0.5+Math.random()*1)+'s';
    drop.style.animationDelay=(Math.random()*2)+'s';

    rainContainer.appendChild(drop);
  }
}

// =================== FUNCIÓN CON RETURN (REQUERIDO) ===================
function calculatePosition(min, max){
  return min + Math.random() * (max - min);
}

// =================== ARRAY GLOBAL (REQUERIDO) ===================
let fishArray = ["🐠","🐠","🐠"];

// =================== ADD FISH ===================
function addFish(){
  const lake=document.getElementById("lakeContainer");

  // ✅ else if (REQUERIDO)
  if(fishArray.length >= MAX_FISH){
    alert("Too many fish!");
  } else if(fishArray.length < MAX_FISH){

    const fish=document.createElement("span");
    fish.innerHTML="🐠";
    fish.className="animal";

    // ✅ agregar atributo (REQUERIDO)
    fish.setAttribute("data-type","fish");

    fish.style.top = calculatePosition(20,80) + "%";
    fish.style.left = "100%";

    lake.appendChild(fish);

    fishArray.push("🐠");
  }
}

// =================== TEMPERATURA ===================
let temp = 20;

function changeTemperature(){
  temp += 5;
  if(temp > 45) temp = -5;

  const lake = document.getElementById("lakeContainer");
  const display = document.getElementById("temperatureDisplay");

  if(display) display.innerText = "Temperature: " + temp + "°C";

  // ✅ else if (ya lo tienes ✔)
  if(temp <= 5){
    lake.style.background = "linear-gradient(to bottom,#87CEFA,#FFFFFF)";
  } else if(temp <= 25){
    lake.style.background = "linear-gradient(to bottom,#4facfe,#00c6ff)";
  } else if(temp <= 35){
    lake.style.background = "linear-gradient(to bottom,#ff9aa2,#ff6347)";
  } else {
    lake.style.background = "linear-gradient(to bottom,#FF0000,#FF6347)";
  }
}

// =================== INICIALIZAR ===================
window.onload = ()=>{

  // ✅ setInterval (REQUERIDO)
  setInterval(animateLake, 10000);
  setInterval(moveAnimals, 100);

  const initialEmojis = ["🐠","🦌","🐢"];
  const lake = document.getElementById("lakeContainer");

  initialEmojis.forEach(e=>{
    const span = document.createElement("span");
    span.className="animal";
    span.innerHTML = e;
    span.style.top = 20 + Math.random()*60 + "%";
    span.style.left = "100%";

    lake.appendChild(span);
  });

  // =================== EXTRA REQUERIDOS ===================

  // ✅ getElementsByClassName
  const animalsClass = document.getElementsByClassName("animal");
  for(let i=0;i<animalsClass.length;i++){
    animalsClass[i].style.cursor = "pointer";
  }

  // ✅ getElementsByTagName
  const buttons = document.getElementsByTagName("button");
  for(let i=0;i<buttons.length;i++){
    buttons[i].style.border = "2px solid white";
  }
};