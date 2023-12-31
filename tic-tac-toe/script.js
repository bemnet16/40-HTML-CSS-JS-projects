let player = document.getElementById('player')
let gameResult = document.getElementById('result')
let list = []
let gameOver = false
let isMarked=true;

const plays =Array.from(document.getElementsByTagName('input'))
plays.forEach((play)=>{
    play.addEventListener("click",reStart)
    play.addEventListener("click",playGame)
})
function playGame(e){
    isMarked?player.innerHTML="O's tern":player.innerHTML="X's tern";
    if(isMarked && e.target.value === ""){
        e.target.value="X";
        list[e.target.id] = "X";
        isMarked=!isMarked
    }
    
    else if(!isMarked && e.target.value === ""){
        e.target.value="O";
        list[e.target.id] = "O";
        isMarked=!isMarked
    }
    result();
    gameOver?player.innerHTML = "GAME OVER!":player.innerHTML += "";
}

function reStart(){
    if(gameOver){
        reset()
    }
} 

const reset = () =>{
    plays.forEach((inp) => {
        inp.value = ""
        list = []
    })
    isMarked = true
    gameOver = false
    player.innerHTML = "X's tern";
    gameResult.innerHTML = "RESULT | The Winner Is : "
}

const result = () => {
    for(let i=0; i < 3; i++){
        if((list[i*3] === list[i*3+1]) &&( list[i*3+1] === list[i*3+2]) && (list[i*3+1] !== undefined)){
            gameOver = true
            gameResult.innerHTML = ` ${list[i*3+1]} IS THE WINNER`;
            break;
        }
        else if(list[i] === list[3+i] && list[3+i] === list[6+i] && (list[3+i] !== undefined)){
            gameOver = true
            gameResult.innerHTML = ` ${list[i+3]} IS THE WINNER`;
            break;
        }
        else if((list[0] === list[4] && list[4] === list[8] && (list[4] !== undefined)) || (list[2] === list[4] && list[4] === list[6]) && (list[4] !== undefined)){
            gameOver = true
            gameResult.innerHTML = ` ${list[4]} IS THE WINNER`;
            break;
        }else if(!list.includes(undefined) && list.length === 9){
            gameOver = true
            gameResult.innerHTML = "TIE"
        }
        
    }
}



