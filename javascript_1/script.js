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
const frames = ["images/frame2.png","images/frame3.png","images/frame4.png"];
let currentFrame = 0;

function animateLake() {
    const lakeFrame = document.getElementById("lakeFrame");
    currentFrame = (currentFrame + 1) % frames.length;
    lakeFrame.src = frames[currentFrame];
}

// =================== ANIMA ANIMALES ===================
let speed = 1;

function moveAnimals() {
    const animals = document.querySelectorAll(".animal");

    animals.forEach(a => {
        const top = 20 + Math.random()*60; // altura aleatoria

        // empieza en la derecha
        a.style.left = "100%";
        a.style.top = top + "%";

        // transición según la velocidad
        a.style.transition = "left " + (6/speed) + "s linear";

        setTimeout(()=>{
            // se mueve hacia la izquierda
            a.style.left = "-10%";
        },100);
    });
}

// =================== SPEED BUTTON ===================
function speedUp(){
    speed += 0.5;
    if(speed > 3){
        speed = 1;
    }

    // actualizar transición de animales ya existentes
    const animals = document.querySelectorAll(".animal");
    animals.forEach(a => {
        const currentLeft = getComputedStyle(a).left;
        a.style.transition = "left " + (6/speed) + "s linear";
        a.style.left = currentLeft; // fuerza que tome la nueva transición
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
    if(raining){
        createRain(100);
    }
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
    const fish=document.createElement("span");
    fish.innerHTML="🐠";
    fish.className="animal";

    fish.style.top = 20 + Math.random()*60 + "%";
    fish.style.left = "100%"; // empieza a la derecha

    lake.appendChild(fish);
}

// =================== TEMPERATURA ===================
let temp = 20;

function changeTemperature(){
    temp += 5;
    if(temp > 45){
        temp = -5;
    }

    const display = document.getElementById("temperatureDisplay");
    if(display){
        display.innerText = "Temperature: " + temp + "°C";
    }

    const lake = document.getElementById("lakeContainer");

    if(temp <= 5){
        lake.style.background = "linear-gradient(to bottom,#dff6ff,#bfefff,#ffffff)";
    } else if(temp <= 25){
        lake.style.background = "linear-gradient(to bottom,#4facfe,#00c6ff)";
    } else if(temp <= 35){
        lake.style.background = "linear-gradient(to bottom,#ff9aa2,#ff6347)";
    } else {
        lake.style.background = "linear-gradient(to bottom,#ff0000,#ff4500)";
    }
}

// =================== INICIALIZAR ===================
window.onload = ()=>{
    setInterval(animateLake, 10000);
    setInterval(moveAnimals, 1000);
};