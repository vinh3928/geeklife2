var pokemonChoosen = {}, cpuPokemon = {};

$(document).ready(function() {
  $(".battle_select").hide();
  $(".back_select").hide();
});

// pikachu selection
$("#billgates").click(function () {
  $(".start_screen").prepend("<img class='profile' src='img/billgates.jpg'>");
  $(".select_screen").hide();
  $(".battle_select").show();
  $(".back_select").show();
  pokemonChoosen = $.extend(true, {}, billgates);
});

// bulbasaur selection
$("#mario").click(function () {
  $(".start_screen").prepend("<img class='profile' src='img/mario.jpg'>");
  $(".select_screen").hide();
  $(".battle_select").show();
  $(".back_select").show();
  pokemonChoosen = $.extend(true, {}, mario);
});

$("#darth-vader").click(function () {
  $(".start_screen").prepend("<img class='profile' src='img/darth.jpg'>");
  $(".select_screen").hide();
  $(".battle_select").show();
  $(".back_select").show();
  pokemonChoosen = $.extend(true, {}, darth);
});

// back to select screen
$(".back_select").click(function () {
  $(".profile").remove();
  $(".select_screen").show();
  $(".battle_select").hide();
  $(".back_select").hide();
});

// initalizing battle screen
$(".battle_select").click(function () {
  $(".battle_select").hide();
  $(".back_select").hide();
  $(".battle_screen").prepend("<textarea name='inputtext' id='battle_display' rows='8' cols='80' value=''>Prepare for battle!</textarea>");
  document.getElementById("battle_display").readOnly = true;
  $(".battle_screen").prepend("<button class='attack_button' type='button'>Attack</button>");
  $(".battle_screen").prepend("<button class='main_attack_button' type='button'>" + pokemonChoosen.attackName + " attack</button>");
  $(".main_attack_button").hide();
  $(".battle_screen").prepend("<button class='sec_attack_button' type='button'>" + pokemonChoosen.secondaryAttackName + " attack</button>");
  $(".sec_attack_button").hide();
  $(".battle_screen").prepend("<button class='restart_button' type='button'>Restart</button>");
// generating random opponent
  var randGen = Math.random();
  if (randGen < 0.33) {
    cpuPokemon = $.extend(true, {}, billgates);
  $(".start_screen").prepend("<img class='profile2' src='img/billgates.jpg'>");
  } else if (randGen < 0.66) {
    cpuPokemon = $.extend(true, {}, mario);
  $(".start_screen").prepend("<img class='profile2' src='img/mario.jpg'>");
  } else {
    cpuPokemon = $.extend(true, {}, darth);
  $(".start_screen").prepend("<img class='profile2' src='img/darth.jpg'>");
  }
});

//add text to battle screen
function addText(elId,text) {
      document.getElementById(elId).value += text;
}

$(".battle_screen").on("click", ".restart_button", function () {
  $("#battle_display").remove();
  $(".attack_button").remove();
  $(".main_attack_button").remove();
  $(".sec_attack_button").remove();
  $(".restart_button").remove();
  $(".profile").remove();
  $(".profile2").remove();
  $(".select_screen").show();
});

// attack button split
$(".battle_screen").on("click", ".attack_button", function () {
  $(".attack_button").hide();
  $(".main_attack_button").show();
  $(".sec_attack_button").show();
});

// main attack button
//
//
$(".battle_screen").on("click", ".main_attack_button", function () {
  var psconsole = $('#battle_display');
  // health watches for 0 to negate the callback to attack
  if (cpuPokemon.health <= 0 || pokemonChoosen.health <= 0) {
    addText("battle_display","\n" + "Please restart the battle or choose another option");
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
    return
  }
  addText("battle_display","\n" + "Your " + battleAttack(pokemonChoosen, cpuPokemon));
  if (cpuPokemon.health <= 0) {
    addText("battle_display", "Computer's " + cpuPokemon.name + " has fainted" + "\n" + "You are victorious!");
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
    return
  }
  addText("battle_display","\n" + "Computer's " + battleAttack(cpuPokemon, pokemonChoosen));
  if (pokemonChoosen.health <=0) {
    addText("battle_display", "Your " + pokemonChoosen.name + " has fainted" + "\n" + "You have lost");
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
    return
  }
// scrolling down on battle_display
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
  $(".main_attack_button").hide();
  $(".sec_attack_button").hide();
  $(".attack_button").show();
});

// secondary attack
//
//
$(".battle_screen").on("click", ".sec_attack_button", function () {
  var psconsole = $('#battle_display');
  // health watches for 0 to negate the callback to attack
  if (cpuPokemon.health <= 0 || pokemonChoosen.health <= 0) {
    addText("battle_display","\n" + "Please restart the battle or choose another option");
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
    return
  }
  addText("battle_display","\n" + "Your " + battleSecAttack(pokemonChoosen, cpuPokemon));
  if (cpuPokemon.health <= 0) {
    addText("battle_display", "Computer's " + cpuPokemon.name + " has fainted" + "\n" + "You are victorious!");
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
    return
  }
  addText("battle_display","\n" + "Computer's " + battleSecAttack(cpuPokemon, pokemonChoosen));
  if (pokemonChoosen.health <=0) {
    addText("battle_display", "Your " + pokemonChoosen.name + " has fainted" + "\n" + "You have lost");
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
    return
  }
// scrolling down on battle_display
      if(psconsole.length)
      psconsole.scrollTop(psconsole[0].scrollHeight - psconsole.height());
  $(".main_attack_button").hide();
  $(".sec_attack_button").hide();
  $(".attack_button").show();
});

