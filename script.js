// MAX NON INCLUSO
function numRandom(min, max){
return  Math.floor(Math.random() * (max - min) + min);
}

console.log(numberComputer)

var numberPlayer = [];
var numberComputer = [];

for (var i = 0; i < 4; i++){
  var input =prompt("inserisci un numero?");
  if(numberPlayer === numberPlayer.length){
  numberPlayer.push(input);
  console.log(numberPlayer)
}
}

for (var i = 0; i < 4; i++){
  numberComputer.push(numRandom(1, 101));
  console.log(numberComputer)
}

if(numberComputer == numberPlayer.length){

}
