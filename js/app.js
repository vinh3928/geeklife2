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

var scratch = {
  min: 4,
  max: 6
}

var whip = {
  min: 4,
  max: 6
}

var pikachu = {
  type: "electric",
  name: "pikachu",
  matchup: electric,
  attack: shock,
  attackName: "shock",
  secondaryAttack: scratch,
  secondaryAttackName: "scratch",
  health: 50,
  beginHealth: 50,
  armor: 2,
}

var bulbasaur = {
  type: "grass",
  name: "bulbasaur",
  matchup: grass,
  attack: leaf,
  attackName: "leaf",
  secondaryAttack: whip,
  secondaryAttackName: "whip",
  health: 50,
  beginHealth: 50,
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

// secondary attack
var secAttack = function(attacker, defender) {
  var damage = hit(attacker.attackSecondary.min, attacker.attackSecondary.max)
  var netDamage = damage/defender.armor
}

// this might be obsolete with a global health variabe; keeps track of health
var healthAdjustAttack = function(attacker, defender) {
  var health = defender.health - attacking(attacker, defender)
  defender.health = health
  return defender.health
}

// secondary attack health adjustment
var healthAdjustSecAttack = function(attacker, defender) {
  var health = defender.health - secAttack(attacker, defender)
  defender.health = health
  return defender.health
}

// battle between pokemons need to redo for onlick command
var battleAttack = function(attacker, defender) {
  var randomNumb = Math.random()
  if (randomNumb < 0.8) {
    var oldHealth = defender.health
    var newHealth = healthAdjustAttack(attacker, defender)
    return attacker.name + " attack damaged " + (oldHealth - newHealth) + " hitpoints of " + defender.name +"; leaving " + newHealth + " hitpoints"
  } else {
    return attacker.name + "'s attack miss " + defender.name
  }
}

var battleSecAttack = function(attacker, defender) {
  var randomNumb = Math.random()
  if (randomNumb < 0.8) {
    var oldHealth = defender.health
    var newHealth = healthAdjustSecAttack(attacker, defender)
    return attacker.name + " attack damaged " + (oldHealth - newHealth) + " hitpoints of " + defender.name + "; leaving " + newHealth + " hitpoints"
  } else {
    return attacker.name + "'s attack miss " + defender.name
  }
}

