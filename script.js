let Boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let NewGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");


let turnO = true ; // PlayerX  PlayerO
 
const WinPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //vertical
    [0, 4, 8],
    [2, 4, 6],
    //diagnal

];




const resetGame = () => {
    turnO = true ;
    enableBoxes();
    msgContainer.classList.add("hide");
}


Boxes.forEach((box) => {
    box.addEventListener("click" , () => {
      
      if(turnO){
        box.innerHTML = "O"
        turnO = false ;
      }
      else{
        box.innerHTML = "X"
        turnO = true;
      }
      box.disabled = true ;

        checkWinner() ;
        });
});


const disabledBoxes = () => {
    for (let box of Boxes) {
       box.disabled =  true ;
    }  
};

const enableBoxes = () => {
    for (let box of Boxes) {
       box.disabled =  false ;
       box.innerHTML = ""
    } 
};


const showWinner = (winner) => {
    msg.innerHTML = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
         for (let pattern of WinPatterns){
          
            let pos1 = Boxes[pattern[0]].innerHTML ;
            let pos2 = Boxes[pattern[1]].innerHTML ;
            let pos3 = Boxes[pattern[2]].innerHTML ;

               

            if (pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){
                    
                   showWinner (pos1);
                    
                }
            }
        }
    };

    NewGame.addEventListener("click" , resetGame);
    resetBtn.addEventListener("click" , resetGame);
