
$('document').ready(function() {
  $('.overlay').hide();
var players = {};
// console.log("Am I sane?");

function PlayerCreate(number, person, counter, image) {
var player = {};

  // Players.number=number;
  // this is Players (object).number (IT's TRANSLATING THIS AS A FUCKING STRING LITERALLY NUMBER NOT A VARIABLE A STRING LITERAL)

  // Players[number]=number;
// THIS IS SAYING HAY TAKE MY OBJECT PLAYERS AND THEN SET A PROPERTY OF THIS OBJECT WHICH IS A VARIABLE EQUAL TO THIS STRING WHICH IS SET BY THE PARAMETER
// var mystring="my butt"
// MY BUTT IS A STRING LITERAL, var myString Is a variable declaration which is being set to a string, NOT A STRING LITERAL, BECAUSE JAVASCRIPT DID SOMETHING TO WITH IT

//WHAT I REALLY WANT IS FOR NUMBER TO BE AN OBJECT,
  player.counter=counter;
  player.image=image;
  Players[number]=player;
//I'M CREATING A BOX CALLED PLAYER, AND AT THE VERY END, I AM TAKING THIS BOX AND THEN PUTTING INTO MY LARGER BOX (OBJECT) AND THEN ASSIGNED IT THE STRING PLAYER1
}
//
PlayerCreate("player1","bill",10);
=> {'number': "player1"};
PlayerCreate("player2","bill",10);
=> {'number': "player2"};
PlayerCreate("player3","bill",10);
// console.log(Players);

function postWin(playerWin) {
  console.log(playerWin + "WINS THE GAME!");
  $('.overlay').show();

  $('.playerWinText').html(playerWin + "PUSHES TO GITHUB");
}

//.css only returns widths in pixels (if the width is located in the CSS file instead of inline in the HTML)
//this hack takes the pixel output and converts it into a percent
function calculateWidthPercent(parentDiv) {
  return (Math.floor((100-(( 100 * parseFloat($(parentDiv).css('width')) / parseFloat($('.raceBoard').css('width')) )))) + '%');
}

// var width = ((( 100 * parseFloat($(this).css('width')) / parseFloat($(this).parent().css('width')) )) + '%');
$('body').on('keyup', function(event) {
  var width = calculateWidthPercent('.player1Track');
  if (width>="90%") {
  }
  else if(event.which==49) {
    $('.player1Track').css({marginLeft: '+=50%'});
    console.log(calculateWidthPercent('.player1Track'));
    var width2 = calculateWidthPercent('.player1Track');
    if (width2>="90%") {
      postWin("Player 1");
    }
    console.log("working!");
  }
});

$('body').on('keyup', function(event) {
  var width = calculateWidthPercent('.player2Track');
  if (width>="90%") {
  }
  else if(event.which===48) {
    $('.player2Track').css({marginLeft: '+=1%'});
    console.log(calculateWidthPercent('.player2Track'));
    var width2 = calculateWidthPercent('.player2Track');
    if (width2==="90%") {
      postWin("Player 2");
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
    if (width2==="90%") {
      postWin("Player 3");
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
    if (width2==="90%") {
      postWin("Player 4");
    }
  }
});
});
