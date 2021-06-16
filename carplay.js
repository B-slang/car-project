/* game area added */


const score = document.querySelector(".Score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let player = {};
//tracking key press and det default false
let keys = {ArrowUp:false,ArrowDown:false,ArrowRight:false,ArrowLeft:false};
//keypress n click events ahere

const Start = () =>{
    // console.log("click");
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");
    player.start = true;
    window.requestAnimationFrame(playGame);
    let car = document.createElement("div");
    car.innerText= "Car";
    gameArea.appendChild(car);  


}
startScreen.addEventListener("click",Start);

const pressOn = (e)=>{
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}

document.addEventListener("keydown",pressOn);

const pressOff = (e)=>{
    e.preventDefault();
    keys[e.key] = false;
    console.log(keys);
} 
document.addEventListener("keydown",pressOff);

// play game fn here
const playGame = ()=>{
    console.log("inplay");
    if(player.start){
    window.requestAnimationFrame(playGame);
    }
}