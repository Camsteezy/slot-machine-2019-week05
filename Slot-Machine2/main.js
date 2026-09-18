// what is a slot machine?
// - a slot machine is a device that people give abet or a token to and pull a lever and some wheels spin and you get a random result.
// - this is a particular implememtation of a slot machine


//how does a slot machine work?
//input: bet , money , risk
//process - sets of values (Reels)(randomly shuffled and a value slected for each), shows our results, decision(win or lose, how do you decide what a win is?), if all selected values match, need to get one of our 5 options, check if all values are the same, if yes multiply the input buy yhe winnings factor based on the selected option, if yes winning factor is the amount of money you get on top of your input back, if no the y get nothing, if no they lose thier input ( bet) and get no winnings
//output: money ( this could be posiitive or zero), on a win ( you get back your input + some winnings), on a loss (you lose your input), winnings depend on the option picked by all 3 reels, the amount returned from the process, this loops back from the beginning


//Rules for a slot machine
//Input (Bet): Needs to be positive , between a minimum and maximum bet amount, 
// needs to be equal to or smaller than your current wallet ( cant bet more money than what you have)

const min = document.getElementById('minBet')
const max = document.getElementById('maxBet')
let balance = 1000
const symbols =['ringslot.webp' ,'eggmanslot.webp','tailsslot.webp' ,'sonicslot.png','knucklesslot.webp']
//'⚡','🦊','🥚','🌀','💎',
//const winningFactor = 10;
//let bet = document.querySelector('#bet')

//document.querySelector('button').addEventListener('click',slotMachine)



function slotMachine(bet){
  let reelImage = document.querySelectorAll('.reel .slotImage')
  let notification = document.getElementById('message')

//conditional
if (balance < bet){
  notification.innerText = 'Not enough money time to reevaluate the budget'
} else {

  balance -= bet // balance = balance - bet

  let first = symbols[Math.floor(Math.random() * symbols.length)]

let second = symbols[Math.floor(Math.random() * symbols.length)]

let third = symbols[Math.floor(Math.random() * symbols.length)]

reelImage[0].src = first;
reelImage[1].src = second;
reelImage[2].src = third;

if(first === second && second === third){

  notification.innerText ='Bang money team'
  let jackpot = bet*7
 balance += jackpot  ;
}else{
  notification.innerText ='The house always wins'
}
document.getElementById('money').innerText = balance;
}
}

//buttons
max.addEventListener('click',function(){slotMachine(20)})

min.addEventListener('click', function(){slotMachine(5)})





/*function runSlotMachine(){
 let currentBet= document.querySelector('#bet');
 slotMachine(currentBet.value)
} */


/*function slotMachine(bet){

















  //check for input
  if (bet >= 0 && bet >= minBet && bet <= maxBet && bet <= balance){
let reel1 = symbols[Math.floor(Math.random())* symbols.length ]
let reel2 = symbols[Math.floor(Math.random()) * symbols.length ]
let reel3 = symbols[Math.floor(Math.random()) * symbols.length ]
if ( reel1 === reel2 && reel2 === reel3){
  console.log('Win')
  balance = bet + balance * winningFactor
  document.querySelector('#placeHere').innerText = balance
}else{
  console.log('Lose')
    balance = bet - balance 
  document.querySelector('#placeHere').innerText = balance

}
  }

  document.querySelector('#reel1').innerHTML= `<p>${reel1}</p>`
  document.querySelector('#reel2').innerHTML=`<p>${reel2}</p>`
  document.querySelector('#reel3').innerHTML =`<p>${reel3}</p>`
console.log(reel1,reel2,reel3)

}

slotMachine() */
