// 🌊 FISH SYSTEM
const fishContainer = document.getElementById("fishContainer");
function addFish(){
    const world = document.getElementById("lakeWorld");

    const animals = ["🐠","🐟","🐡","🐬","🐢","⭐","🪼"];

    let fish = document.createElement("div");
    fish.className = "fish";

    // elige animal aleatorio
    fish.innerHTML = animals[Math.floor(Math.random() * animals.length)];

    fish.style.left = "100%";
    fish.style.top = (15 + Math.random()*60) + "%";

    world.appendChild(fish);

    setTimeout(()=>{
        fish.style.transition = "left 6s linear";
        fish.style.left = "-10%";
    }, 200);

    showStatus("🐠 Nuevo animal del mar apareció!");
}

function moveFish(fish) {
    setInterval(() => {
        fish.style.left = Math.random() * window.innerWidth + "px";
        fish.style.top = (window.innerHeight * 0.55 + Math.random() * 120) + "px";
    }, 2000);
}

// 🌧️ RAIN
let raining = false;
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

function createRain() {
    for (let i = 0; i < 100; i++) {
        drops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            len: Math.random() * 20 + 10
        });
    }
}

function drawRain() {
    if (!raining) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(174,194,224,0.5)";

    for (let d of drops) {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();

        d.y += 4;
        if (d.y > canvas.height) d.y = 0;
    }

    requestAnimationFrame(drawRain);
}

function toggleRain() {
    raining = !raining;
    if (raining) {
        createRain();
        drawRain();
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// ❄️ SNOW
let snowing = false;

function toggleSnow() {
    snowing = !snowing;

    if (snowing) {
        for (let i = 0; i < 40; i++) {
            let snow = document.createElement("div");
            snow.className = "snowflake";
            snow.innerHTML = "❄️";
            snow.style.left = Math.random() * window.innerWidth + "px";
            snow.style.animationDuration = (Math.random() * 5 + 3) + "s";

            document.getElementById("snow").appendChild(snow);
        }
    } else {
        document.getElementById("snow").innerHTML = "";
    }
}

// ☀️ SUN
let sunOn = false;

function toggleSun() {
    sunOn = !sunOn;
    document.getElementById("sun").style.display = sunOn ? "block" : "none";
}


function addWaterPlants(){
    const container = document.getElementById("waterPlants");

    const plants = ["🌿","🌱","🌾","🍃","🪸"];

    for(let i = 0; i < 20; i++){
        let p = document.createElement("div");
        p.className = "water-plant";

        p.innerHTML = plants[Math.floor(Math.random() * plants.length)];

        p.style.left = Math.random() * 100 + "%";
        p.style.bottom = Math.random() * 40 + "%";

        container.appendChild(p);
    }

    showStatus("🌿 Plantas del agua añadidas!");
}