const dino=document.querySelector(".dino")
const ob1=document.querySelector(".ob-1")
const ob2=document.querySelector(".ob-2")
const over=document.querySelector(".GameOver")
const land=document.querySelector(".land")
const Score=document.querySelector(".Score")
const img=document.querySelectorAll(".img")
let clouds=document.querySelector(".clouds")
let cloud=clouds.getBoundingClientRect();
let cloudH=cloud.height
let cloudW=cloud.width
console.log(cloudH)
img.forEach((element)=>{
    let left = Math.floor(Math.random()*cloudH)
    element.style.top = `${left}px`
    let top = Math.floor(Math.random()*cloudW)
    element.style.left = `${top}px`
})
let count = 0
document.onkeydown = function (value){
    console.log(value.keyCode)
    if(value.keyCode==38)
    {
        dino.classList.add("aniJump")
        setTimeout(()=>{
            dino.classList.remove("aniJump") 
        },700)
}
}
let interval = setInterval(()=>{
    let ob1X= ob1.getBoundingClientRect();
    let ob2X= ob2.getBoundingClientRect();
    let dinoX= dino.getBoundingClientRect(); 
    count++  
    Score.innerHTML=parseInt(count/5);
    if((Math.abs(dinoX.x-ob1X.x)<20 && Math.abs(ob1X.y-dinoX.y)<20) || (Math.abs(dinoX.x-ob2X.x)<27 && Math.abs(ob2X.y-dinoX.y)<20))
    {
        GameOver();   
    }
},10)
function GameOver() {
        over.classList.toggle("visibility")
        land.classList.add("paused")
        clearInterval(interval);
}