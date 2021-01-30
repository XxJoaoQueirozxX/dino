const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

console.log(dino);
console.log(background);


let isJumping = false;
let position = 0;
const DINO_SPEED = 20;
const CACTUS_SPEED = 10;

function handKeyUp(event) {
     if (event.keyCode == 32 && !isJumping){
          jump()
     }
}


function jump (){
     isJumping = true;
     let upInterval = setInterval(() => {
          if (position >= 200){
               clearInterval(upInterval)
               let downInterval = setInterval(() =>{
                    if (position >= 20){
                         position -= 20;
                    } else{
                         position = 0
                         clearInterval(downInterval)
                         isJumping = false;
                    }
                    dino.style.bottom = position + "px";
               }, DINO_SPEED)
          } else{
               position += 20;
               dino.style.bottom = position + "px";
          }
     }, DINO_SPEED)
}

function createCactos(){
     const cactus = document.createElement("div");
     const randomTime = Math.random() * 6000;

     let cactusPosition = 1000;
     cactus.classList.add("cactus")
     cactus.style.left = cactusPosition + "px";
     background.appendChild(cactus)

     let leftInterval = setInterval(() => {
          if (cactusPosition <= -60){
               clearInterval(leftInterval);
               background.removeChild(cactus);
          }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
               clearInterval(leftInterval);
               document.body.innerHTML = "<h1 class='game-over'>Game over</h1>"
          } else {
               cactusPosition -= CACTUS_SPEED;
               cactus.style.left = cactusPosition + 'px';
          }
     }, 20)

     let newCactus = setTimeout(createCactos, randomTime)
}



document.addEventListener("keyup", handKeyUp)
createCactos();

