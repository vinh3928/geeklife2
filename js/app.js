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

var turtle = {
  min: 4,
  max: 10
}

var money = {
  min: 4,
  max: 50
}

var star = {
  min: 4,
  max: 50
}

var billgates = {
  type: "electric",
  name: "billgates",
  matchup: electric,
  attack: shock,
  attackName: "release mosquito",
  secondaryAttack: money,
  secondaryAttackName: "throw money",
  health: 50,
  beginHealth: 50,
  armor: 2,
}

var mario = {
  type: "grass",
  name: "Mario",
  matchup: grass,
  attack: turtle,
  attackName: "Throw Turtle Shell",
  secondaryAttack: star,
  secondaryAttackName: "Star Power",
  health: 50,
  beginHealth: 50,
  armor: 3
}

var darth = {
  type: "electric",
  name: "Darth Vader",
  matchup: electric,
  attack: shock,
  attackName: "light saber",
  secondaryAttack: money,
  secondaryAttackName: "fartherless",
  health: 50,
  beginHealth: 50,
  armor: 2,
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
  var damage = hit(attacker.secondaryAttack.min, attacker.secondaryAttack.max)
  var netDamage = damage/defender.armor
  return Math.ceil(netDamage)
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

