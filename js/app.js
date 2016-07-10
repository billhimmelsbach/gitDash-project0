
$('document').ready(function() {
  $('.overlay').hide();
// var Players ={};
// console.log("Am I sane?");

// function PlayerCreate(number, person, counter, image) {
//   Players.number=number;
//   Players.number.person=person;
//   Players.number.counter=counter;
//   Players.number.image=image;
// }
//
// PlayerCreate("player1","bill",10);
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
