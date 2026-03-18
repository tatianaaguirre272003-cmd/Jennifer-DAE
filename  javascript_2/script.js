const frames = ["images/frame2.png","images/frame3.png","images/frame4.png"];
const covers = ["images/work1.png","images/work2.png","images/work3.png","images/work4.png"];
let currentFrame = 0;
let currentCover = 0;
let speed = 1;
let temp = 20;
let raining = false;
let rainInterval;

function nextCover() {
    currentCover = (currentCover + 1) % covers.length;
    const coverImg = document.getElementById("coverImage");
    coverImg.src = covers[currentCover];
    coverImg.setAttribute("data-cover-index", currentCover);
}

function prevCover() {
    currentCover = (currentCover - 1 + covers.length) % covers.length;
    const coverImg = document.getElementById("coverImage");
    coverImg.src = covers[currentCover];
    coverImg.setAttribute("data-cover-index", currentCover);
}

function animateLake() {
    const lakeFrame = document.getElementById("lakeFrame");
    currentFrame = (currentFrame + 1) % frames.length;
    lakeFrame.src = frames[currentFrame];
    return currentFrame;
}

function moveAnimals() {
    const animals = document.getElementsByClassName("animal");
    const tagAnimals = document.getElementsByTagName("span");
    for (let a of animals) {
        const top = calculateRandomPosition(20, 80);
        a.style.top = top + "%";
        a.style.left = "100%";
        a.style.transition = "left " + (6/speed) + "s linear";
        setTimeout(()=>{ a.style.left = "-10%"; }, 100);
        a.onmouseover = function() { this.style.transform = "scale(1.2)"; };
        a.onmouseout = function() { this.style.transform = "scale(1)"; };
    }
}

function speedUp(){
    speed += 0.5;
    if(speed > 3) speed = 1;
    const animals = document.getElementsByClassName("animal");
    for (let a of animals) {
        const currentLeft = getComputedStyle(a).left;
        a.style.transition = "left " + (6/speed) + "s linear";
        a.style.left = currentLeft;
    }
}

function toggleDayNight() {
    document.body.classList.toggle("night");
}

function toggleRain() {
    raining = !raining;
    const rainContainer = document.getElementById("rain");
    rainContainer.innerHTML = '';
    if(raining){ startRain(); } else { stopRain(); }
}

function startRain() { rainInterval = setInterval(()=> createRain(20), 500); }
function stopRain() { clearInterval(rainInterval); }

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

function addFish(){
    const lake=document.getElementById("lakeContainer");
    const fish=document.createElement("span");
    fish.innerHTML="🐠";
    fish.className="animal";
    fish.setAttribute("data-type", "fish");
    fish.style.top = calculateRandomPosition(20, 80) + "%";
    fish.style.left = "100%";
    lake.appendChild(fish);
    fish.onmouseover = function() { this.style.transform = "scale(1.2)"; };
    fish.onmouseout = function() { this.style.transform = "scale(1)"; };
}

function changeTemperature(){
    temp += 5;
    if(temp > 45) temp = -5;
    const display = document.getElementById("temperatureDisplay");
    if(display) display.innerText = "Temperature: " + temp + "°C";
    const lake = document.getElementById("lakeContainer");
    if(temp <= 5){ lake.style.background = "linear-gradient(to bottom,#dff6ff,#bfefff,#ffffff)"; }
    else if(temp <= 25){ lake.style.background = "linear-gradient(to bottom,#4facfe,#00c6ff)"; }
    else if(temp <= 35){ lake.style.background = "linear-gradient(to bottom,#ff9aa2,#ff6347)"; }
    else{ lake.style.background = "linear-gradient(to bottom,#ff0000,#ff4500)"; }
}

function calculateRandomPosition(min, max){ return min + Math.random()*(max - min); }

window.onload = ()=>{
    setInterval(animateLake, 10000);
    setInterval(moveAnimals, 1000);
};