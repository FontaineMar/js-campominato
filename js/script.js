


var numberPlayer = [];
var numberComputer = [];
var listNumRandom;
var maxChance = 84;
var MAX_NUMBER = 100
var MIN_NUMBER = 1

var choiceLevel = parseInt(prompt("scegli il livello di difficolta tra " + 1 + (' ') + 2 + (' ') + 3) )
while (numberComputer.length < 10){
  listNumRandom = numRandom(MIN_NUMBER, MAX_NUMBER)
       if (!numberComputer.includes(listNumRandom))
          {numberComputer.push(listNumRandom);
          console.log(numberComputer)
        }
}
var win = false
var live = true
while (!win && live){
  var userChoice = parseInt(prompt('inserisci unumero da ' + MIN_NUMBER + ' a ' + MAX_NUMBER))

  if(numberPlayer.includes(userChoice)){
     alert('numero già inserito')
  }
  else if ((userChoice < MIN_NUMBER) || (userChoice > MAX_NUMBER)){
    alert('inserire numeri da ' + MIN_NUMBER + ' a ' + MAX_NUMBER )
  }
  else{
      numberPlayer.push(userChoice)

      if(numberComputer.includes(userChoice)){
        alert("hai perso")
        live = false
      }
      else if (numberPlayer.length === maxChance){
        alert("bravo hai vinto")
        win = true
      }
  }
  document.getElementById('result').innerHTML = 'il tuo punteggio e di: ' + numberPlayer.length
}
