
let disp = document.getElementById("display");
const startbtn = document.getElementById("startbtn");
const stoptbtn = document.getElementById("stoptbtn");
const resetbtn = document.getElementById("resetbtn");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function Start() {
    if(!isRunning){
        startTime = Date.now() - elapsedTime ;
        timer = setInterval(() => {
            Update()
        }, 10);
        // console.log(timer)   
        isRunning = true; 
    }
}
function Stop() {
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
        elapsedTime = Date.now() - startTime
    }
}
function Reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    disp.textContent = "00:00:00:00" 
}
function Update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000*60*60));
    let minutes = Math.floor(elapsedTime / (1000*60)%60);
    let secounds = Math.floor(elapsedTime / 1000%60);
    let millisecounds= Math.floor(elapsedTime % 1000 /10);

    hours = String(hours).padStart(2,"0")
    minutes = String(minutes).padStart(2,"0")
    secounds = String(secounds).padStart(2,"0")
    millisecounds = String(millisecounds).padStart(2,"0")

    disp.textContent = `${hours}:${minutes}:${secounds}:${millisecounds}` 
}