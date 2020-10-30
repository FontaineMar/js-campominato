
MIN_NUMBER = 1;
var MAX_NUMBER_EASY = 100
var MAX_NUMBER_MEDIUM = 64
var MAX_NUMBER_HARD = 36
var ROUND = 16


// CREAZIONE DIV "class.slot"
var easyDashboardElement = document.querySelector('.easy')
for(var i = 0; i < MAX_NUMBER_EASY; i++){
	var newSlotElement = document.createElement('div')
	newSlotElement.className = 'slot slotEasy'
	easyDashboardElement.appendChild(newSlotElement)
}

var mediumDashboardElement = document.querySelector('.medium')
for(var i = 0; i < MAX_NUMBER_MEDIUM; i++){
	var newSlotElement = document.createElement('div')
	newSlotElement.className = 'slot slotMedium'
	mediumDashboardElement.appendChild(newSlotElement)
}

var hardDashboardElement = document.querySelector('.hard')
for(var i = 0; i < MAX_NUMBER_HARD; i++){
	var newSlotElement = document.createElement('div')
	newSlotElement.className = 'slot slotHard'
	hardDashboardElement.appendChild(newSlotElement)
}


// NUMERAZIONE DEI DIV "class.slot"
var slotElEasy = document.getElementsByClassName("slotEasy")
for(var i = 0; i < slotElEasy.length; i++){
  slotElEasy[i].value = i
  slotElEasy[i].addEventListener('click' , function(event){
    alert(event.target.value)
  })
}

var slotElMedium = document.getElementsByClassName("slotMedium")
for(var i = 0; i < slotElMedium.length; i++){
  slotElMedium[i].value = i
  slotElMedium[i].addEventListener('click' , function(event){
    alert(event.target.value)
  })
}

var slotElHard = document.getElementsByClassName("slotHard")
for(var i = 0; i < slotElHard.length; i++){
  slotElHard[i].value = i
  slotElHard[i].addEventListener('click' , function(event){
    alert(event.target.value)
  })
}
