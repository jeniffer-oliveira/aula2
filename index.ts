//8 ciclos com 20 seg de atividade e 10 seg de descanso

let round = 1
let counter = 0
let rest = 0 

document.getElementById("round").innerHTML = "Round: " + round.toString()
let intervalId = setInterval (() => {
  counter += 1
})

if(counter <= 20 && rest == 0){
  document.getElementById("rest").innerHTML = "Start your exercise"
  
}