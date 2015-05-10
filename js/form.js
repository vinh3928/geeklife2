var pokemonChoosen;
// pikachu selection
$("#pikachu").click(function () {
  $(".start_screen").prepend("<img class='pokemon_profile' src='img/pikachu.jpg'>");
  $(".select_screen").hide();
  pokemonChoosen = "pikachu";
});

// bulbasaur selection
$("#bulbasaur").click(function () {
  $(".start_screen").prepend("<img class='pokemon_profile' src='img/bulbasaur.jpg'>");
  $(".select_screen").hide();
  pokemonChoosen = "bulbasaur";
});

// back to select screen
$(".back_select").click(function () {
  $(".pokemon_profile").remove();
  $(".select_screen").show();
});


$(".battle_select").click(function () {
  $(".battle_select").hide();
  $(".back_select").hide();
  $(".battle_screen").prepend("<textarea name='' id='battle_display' rows='8' cols='40'>Prepare for battle!</textarea>");
  document.getElementById("battle_display").readOnly = true;
  $(".battle_screen").prepend
});
