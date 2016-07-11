function setupPlayer(num) {
  var playerName = '.player' + num + 'Submit';
  var $playerSelector = $(playerName);
  $playerSelector.on('click', function(event) {
    event.preventDefault(event);
    var playerNameTextInput  = '.player' + num + 'NameTextInput';
    var $playerName = $(playerNameTextInput).val();
    var playerUrl = 'https://api.github.com/users/' + $playerName;
    var json = getJson(playerUrl, "player" + num );
    setTimeout(player + num + ImageChange, 2000);
  });
}
