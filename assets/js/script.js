const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

console.log(dino);
console.log(background);


let isJumping = false
const DINO_SPEED = 30;
const CACTUS_SPEED = 10;

function handKeyUp(event) {
     switch (event.keyCode){
          case 32:
               if (!isJumping){
                    jump()
               }
               break;
          default:
               console.log("outra tecla");
     }
}


function jump (){
     let position = 0;

     isJumping = true;
     let upInterval = setInterval(() => {
          if (position >= 150){
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
     const randomTime = Math.random() * 4000;

     let cactusPosition = 1000;
     cactus.classList.add("cactus")
     cactus.style.left = cactusPosition + "px";
     background.appendChild(cactus)

     let leftInterval = setInterval(() => {
          if (cactusPosition <= -60){
               clearInterval(leftInterval);
               background.removeChild(cactus);
          } else {
               cactusPosition -= CACTUS_SPEED;
               cactus.style.left = cactusPosition + 'px';
          }
     }, 20)

     setTimeout(createCactos, randomTime)
}



document.addEventListener("keyup", handKeyUp)
createCactos();

