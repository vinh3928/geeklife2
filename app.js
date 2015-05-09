// element type
var electric = {
  electric: 1,
  fire: 1,
  water: 2,
  grass: 0.5,
  earth: 0.25
}

var grass = {
  electric: 1.25,
  fire: 0.25,
  water: 0.5,
  grass: 1,
  earth: 2
}

//attacks 
var shock = {
  min: 4,
  max: 10
}

var leaf = {
  min: 4,
  max: 10
}

var pikachu = {
  type: "electric",
  matchup: electric,
  attack: shock,
  health: 50,
  armor: 2,
}

var bulbasaur = {
  type: "grass",
  matchup: grass,
  attack: leaf,
  health: 50,
  armor: 3
}

var hit = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

var attacking = function(attacker, defender) {
  var damage =  hit(attacker.attack.min, attacker.attack.max)
  var attackAdjust = attacker["matchup"][defender.type]
  var netDamage = damage/defender.armor * attackAdjust
  return Math.ceil(netDamage)
}



console.log(attacking(bulbasaur, pikachu))
