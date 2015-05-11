var pokemonChoosen = {}, cpuPokemon = {};
// pikachu selection
$("#pikachu").click(function () {
  $(".start_screen").prepend("<img class='pokemon_profile' src='img/pikachu.jpg'>");
  $(".select_screen").hide();
  pokemonChoosen = $.extend(true, {}, pikachu);
});

// bulbasaur selection
$("#bulbasaur").click(function () {
  $(".start_screen").prepend("<img class='pokemon_profile' src='img/bulbasaur.jpg'>");
  $(".select_screen").hide();
  pokemonChoosen = $.extend(true, {}, bulbasaur);
});

// back to select screen
$(".back_select").click(function () {
  $(".pokemon_profile").remove();
  $(".select_screen").show();
});

// initalizing battle screen
$(".battle_select").click(function () {
  $(".battle_select").hide();
  $(".back_select").hide();
  $(".battle_screen").prepend("<textarea name='inputtext' id='battle_display' rows='8' cols='80' value=''>Prepare for battle!</textarea>");
  document.getElementById("battle_display").readOnly = true;
  $(".battle_screen").prepend("<button class='attack_button' type='button'>" + pokemonChoosen.attackName + " attack</button>");
  $(".battle_screen").prepend("<button class='secAttack_button' type='button'>" + pokemonChoosen.secondaryAttackName + " attack</button>");
  $(".battle_screen").prepend("<button class='restart_button' type='button'>Restart</button>");
// generating random opponent
  var randGen = Math.random();
  if (randGen < 0.5) {
    cpuPokemon = $.extend(true, {}, pikachu);
  } else {
    cpuPokemon = $.extend(true, {}, bulbasaur);
  }
});

function addText(elId,text) {
      document.getElementById(elId).value += text;
}
// attack button
$(".battle_screen").on("click", ".attack_button", function () {
  var psconsole = $('#battle_display');
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
});
