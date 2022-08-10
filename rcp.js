




function playRound(playerSelection, computerSelection) {
         
         
    if(playerSelection == "rock" && computerSelection == "scissors"){
        
        return("PLayer Win");
        
    }
   else  if(playerSelection == "paper" && computerSelection == "rock"){
        
        return("PLayer Win");
        
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        
        return("PLayer Win");
        
    }
    else if(playerSelection == computerSelection){
        
        
        return("Draw");
    }
    else{
        
        return("Computer Win");
    }
    
   }

   function getComputerChoice(){
   let i = Math.floor(Math.random() * 3) + 1


   if(i==1){

       return "rock";
   }

  else if(i==2){

       return "paper";
       }

   else if(i==3){

       return "scissors";
       }   
       


// başla









       

}

var player1 = 0;
var com = 0;
var count = 0;

function game(playerSelection){

   

       
   const computerSelection = getComputerChoice();
       
   let result = playRound(playerSelection, computerSelection);

   

   

   
   
   if(result == "PLayer Win"){
     
 
     player1++;
     count++;
     playerScore.textContent = "Player: "+ player1;
     if(count ==5) { 
        gameReset();
        }
       
   }
   else if(result == "Draw"){
 
     
      count++;
      if(count ==5) { 
        gameReset();
        }
       
   }
  else if(result == "Computer Win"){
     
    
     com++;
     count++;
     comScore.textContent = "Computer: "+com;
     if(count ==5) { 
        gameReset();
        }
       
   }

   raund.textContent = "Raund: "+count;
   
  
   
       
   
   
}


const button = document.querySelector('button');

function gameReset(){

    var comm = com;
    var playerr = player1;
    player1 = 0;
    com = 0;
    count = 0;

    playerScore.textContent = "Player: "+0;
    comScore.textContent = "Computer: "+0;
    raund.textContent = "Raund: "+0;

    
    if(comm>playerr){
        resultScore.textContent = "Computer Won";
    }

    else if(playerr>comm){
        resultScore.textContent = "PLayer Won";
    }

    else if(playerr==comm){
        resultScore.textContent = "Draw";
    }

    
 

}


const container = document.querySelector('#container');


const playerScore = document.createElement('div');
const comScore = document.createElement('div');
const resultScore = document.createElement('div');
const drawScore = document.createElement('div');
const raund = document.createElement('div');

playerScore.textContent = "Player: "+0;
comScore.textContent = "Computer: "+0;
resultScore.textContent = "";

raund.textContent = "Raund: "+0;

container.appendChild(playerScore);
container.appendChild(comScore);
container.appendChild(resultScore);
container.appendChild(raund);


   

window.addEventListener('click',function(e){

   
 
   const result = game(e.target.value);
   
});

