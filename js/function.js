
function randomMines (round, min, max){
while ( numberComputer.length < round){
  var numberComputer = []
  listNumRandom = Math.floor(Math.random() * ((max + 1) - min) + min);
  if ( !numberComputer.includes (listNumRandom) ){
    numberComputer.push (listNumRandom);
    return numberComputer = []
  }
}
}
