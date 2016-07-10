

$('document').ready(function() {
$('.overlayWin').hide();
$('.overlayStart').hide();
var players = {};
addPlayer("player1");
$('.player1Image').attr('src', players.player1.image);
addPlayer("player2");
$('.player2Image').attr('src', players.player2.image);
console.log(players);
console.log(players.player1.image);
//I'M CREATING A BOX CALLED PLAYERNUMBER, AND AT THE VERY END, I AM TAKING THIS BOX AND THEN PUTTING INTO MY LARGER BOX (OBJECT) AND THEN ASSIGNED IT THE STRING PLAYER1
function addPlayer(playerNumber) {
  players[playerNumber]= new PlayerCreate();
}

function PlayerCreate() {
    this.image = 'img/runner.png';
    return this;
}

function getJson (playerUrl, playerName) {
  console.log(playerUrl);
  $.ajax({
    type:"GET",
    dataType:"json",
    url: playerUrl,
    success: onSuccess,
    failure: onFailure,
  });
}

function onFailure(json) {
  console.log('error!!!');
}

function onSuccess(json){
  console.log(json);

  console.log(json.avatar_url);
  player1Url= json.avatar_url;

}

$('.player1Submit').on('click', function(event) {
  event.preventDefault(event);
  console.log("test");
  var playerName = $('.player1NameTextInput').val();
  var playerUrl= 'https://api.github.com/users/'+playerName;
  console.log(playerUrl, playerName);
  var json = getJson(playerUrl);
  setTimeout(player1ImageChange, 2000);
  console.log("bigtest");
  console.log(json);
});

function player1ImageChange() {
  console.log(player1Url);
  $('.player1Image').attr('src', " ");
  console.log("done");
  $('.player1Image').attr('src', player1Url);
}


// console.log("Am I sane?");


// FUNCTION PLAYER HANDLING WILL BE A playerHandling();
//GRAB FORM DATA AND SET TO VARIABLE
// addPlayer(THESE VARIABLES, THIS VARIABLE)
//ADD PLAYER TAKES VARIABLES AND PUTS THEM IN A BOX WITH NO NAME
//THE FUNCTION PLAYER CREATE FILLS THE EMPTY BOX

// function onSubmit() {
//   var playerNumber;
//   var playerName;
//   var playerImage;
//   $('#bestformonthepage').filter('input').forEach(function(inputEl) {
//     if (inputEl.getName() === 'player name')
//       playerName = inputEl.getVal();
//   })
//   addPlayer(player1Number, player1Number)
//   addPlayer(player2Number)
// }

  // Players.number=number;
  // this is Players (object).number (IT's TRANSLATING THIS AS A FUCKING STRING LITERALLY NUMBER NOT A VARIABLE A STRING LITERAL)

  // Players[number]=number;
// THIS IS SAYING HAY TAKE MY OBJECT PLAYERS AND THEN SET A PROPERTY OF THIS OBJECT WHICH IS A VARIABLE EQUAL TO THIS STRING WHICH IS SET BY THE PARAMETER
// var mystring="my butt"
// // MY BUTT IS A STRING LITERAL, var myString Is a variable declaration which is being set to a string, NOT A STRING LITERAL, BECAUSE JAVASCRIPT DID SOMETHING TO WITH IT
//
// //WHAT I REALLY WANT IS FOR NUMBER TO BE AN OBJECT,
// PlayerCreate("player1","bill",10);
// => {'number': "player1"};
// PlayerCreate("player2","bill",10);
// => {'number': "player2"};
// PlayerCreate("player3","bill",10);
// console.log(Players);

function postWin(playerWin) {
  console.log(playerWin + "WINS THE GAME!");
  var winnerArray = [];
  var width1 = calculateWidthPercent('.player1Track');
  var width2 = calculateWidthPercent('.player2Track');
  var width3 = calculateWidthPercent('.player3Track');
  var width4 = calculateWidthPercent('.player4Track');
  var widthArray = [width1, width2, width3, width4];
  for (var i = 0; i < widthArray.length; i++) {
    if (widthArray[i] >= "90%") {
      winnerArray.push(widthArray[i]);
    }
    else {
      winnerArray.push(null);
    }
    if (winnerArray.length ===1) {
      $('.playerWinText').html(playerWin + " SUBMITS PULL REQUEST!!!!!111``7");
      $('.overlayWin').show();
    }
    else {
    }

  }
}

//.css only returns widths in pixels (if the width is located in the CSS file instead of inline in the HTML)
//this hack takes the pixel output and converts it into a percent
function calculateWidthPercent(parentDiv) {
  return (Math.floor((100-(( 100 * parseFloat($(parentDiv).css('width')) / parseFloat($('.raceBoard').css('width')) )))) + '%');
}

$('.reset').on('click', function(event) {
  console.log("THIS SHIT BE WORKING");
  $('.playerTracks').css({marginLeft: '0%'});
  $('.overlayWin').hide();
});

// var width = ((( 100 * parseFloat($(this).css('width')) / parseFloat($(this).parent().css('width')) )) + '%');
$('body').on('keyup', function(event) {
  var width = calculateWidthPercent('.player1Track');
  if (width>="90%") {
  }
  else if(event.which==49) {
    $('.player1Track').css({marginLeft: '+=90%'});
    console.log(calculateWidthPercent('.player1Track'));
    var width2 = calculateWidthPercent('.player1Track');
    if (width2>="90%") {
      postWin("PLAYER 1");
    }
    console.log("working!");
  }
});

$('body').on('keyup', function(event) {
  var width = calculateWidthPercent('.player2Track');
  if (width>="90%") {
  }
  else if(event.which===48) {
    $('.player2Track').css({marginLeft: '+=90%'});
    console.log(calculateWidthPercent('.player2Track'));
    var width2 = calculateWidthPercent('.player2Track');
    if (width2>="90%") {
      postWin("PLAYER 2");
    }
  }
});

$('body').on('keyup', function(event) {
  var width = calculateWidthPercent('.player3Track');
  if (width>="90%") {
  }
  else if(event.which==90) {
    $('.player3Track').css({marginLeft: '+=1%'});
    console.log(calculateWidthPercent('.player3Track'));
    var width2 = calculateWidthPercent('.player3Track');
    if (width2>="90%") {
      postWin("PLAYER 3");
    }
  }
});

$('body').on('keyup', function(event) {
  var width = calculateWidthPercent('.player4Track');
  if (width>="90%") {
  }
  else if(event.which==39) {
    $('.player4Track').css({marginLeft: '+=1%'});
    console.log(calculateWidthPercent('.player4Track'));
    var width2 = calculateWidthPercent('.player4Track');
    if (width2>="90%") {
      postWin("PLAYER 4");
    }
  }
});
});
// });
