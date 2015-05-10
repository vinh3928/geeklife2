// element type
var electric = {
  electric: 1,
  fire: 1,
  water: 2,
  grass: 0.5,
  earth: 0.25
}

//attacks 
var shock = {
  min: 4,
  max: 10
}

var grass = {
  electric: 1.25,
  fire: 0.25,
  water: 0.5,
  grass: 1,
  earth: 2
}


var leaf = {
  min: 4,
  max: 10
}

var pikachu = {
  type: "electric",
  name: "pikachu",
  matchup: electric,
  attack: shock,
  health: 50,
  armor: 2,
}

var bulbasaur = {
  type: "grass",
  name: "bulbasaur",
  matchup: grass,
  attack: leaf,
  health: 50,
  armor: 3
}

// creates a random generated base damage
var hit = function(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// attacking adjusts the base damage to the pokemon type
var attacking = function(attacker, defender) {
  var damage =  hit(attacker.attack.min, attacker.attack.max)
  var attackAdjust = attacker["matchup"][defender.type]
  var netDamage = damage/defender.armor * attackAdjust
  return Math.ceil(netDamage)
}

// this might be obsolete with a global health variabe; keeps track of health
var healthAdjust = function(attacker, defender) {
  var health = defender.health - attacking(attacker, defender)
  defender.health = health
  return defender.health
}

// battle between pokemons need to redo for onlick command
var battle = function(pokemonA, pokemonB) {
  var randomNumbA = Math.random()
  if (randomNumbA < 0.8) {
    var oldHealth = pokemonB.health
    var newHealth = healthAdjust(pokemonA, pokemonB)
    console.log(pokemonA.name + " attack damaged " + (oldHealth - newHealth) + " hitpoints of " + pokemonB.name +"; leaving " + newHealth + " hitpoints")
  } else {
    console.log(pokemonA.name + "'s attack miss " + pokemonB.name)
  }
  if (pokemonB.health <= 0) {
    return pokemonB.name + " has died!"
  } else {
    return battle(pokemonA, pokemonB)
  }
}


console.log(battle(bulbasaur, pikachu));
