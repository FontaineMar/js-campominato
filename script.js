// MAX NON INCLUSO
function numRandom(min, max){
return  Math.floor(Math.random() * (max - min) + min);
}



var numberPlayer = [];
var numberComputer = [];
var listNumRandom;
var maxChance = 8 ;
var message;
while (numberComputer.length < 8){
  listNumRandom = numRandom(1, 20)
     if (numberComputer.indexOf(listNumRandom) == - 1)
     {
     numberComputer.push(listNumRandom);
     console.log(numberComputer)
   }
}

while (numberPlayer.length < maxChance){
  var input =prompt("inserisci un numero")
  numberPlayer.push(input)

  if(numberComputer.includes(input)){
    message = "hai perso"
    console.log(message)
  }

  // else if (numberPlayer.includes(input)){
  //     message = "numero gia inserito";
  // }

  else if ((input < 1) || (input > 100)){
       message ="numero non corretto"
  }

  console.log(message)
}
