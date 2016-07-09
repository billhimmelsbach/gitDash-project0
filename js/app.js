
$('document').ready(function() {
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

//.css only returns widths in pixels (if the width is located in the CSS file instead of inline in the HTML)
//this hack takes the pixel output and converts it into a percent
function calculateWidthPercent(divToBeMoved) {
  console.log(Math.floor((100-(( 100 * parseFloat($(divToBeMoved).css('width')) / parseFloat($(divToBeMoved).parent().css('width')) )))) + '%');
  return (Math.floor((100-(( 100 * parseFloat($(divToBeMoved).css('width')) / parseFloat($(divToBeMoved).parent().css('width')) )))) + '%');
}

function divMove(divToBeMoved) {
  console.log(divToBeMoved);
  var divMove=("'" + divToBeMoved + "'");
  $(divMove).css({marginLeft: '+=1%'});
  console.log(calculateWidthPercent(divMove));
  var width = calculateWidthPercent(divMove);
  if (width==="100%") {
    alert("you win!");
  }
  // console.log($('.player1Track').css("marginLeft"));
  // if (($('.player1Track').css({marginLeft})) == 100%) {
    // console.log("WIN!");
  console.log("working!");
}


// $('.player1Track').css({marginLeft: '+=1%'});
// console.log(calculateWidthPercent('.player1Track'));
// var width = calculateWidthPercent('.player1Track');
// if (width==="100%") {
//   alert("you win!");
// }
// // console.log($('.player1Track').css("marginLeft"));
// // if (($('.player1Track').css({marginLeft})) == 100%) {
//   // console.log("WIN!");
// console.log("working!");
// }

// var width = ((( 100 * parseFloat($(this).css('width')) / parseFloat($(this).parent().css('width')) )) + '%');
$('body').on('keyup', function(event) {
  if(event.which==90) {
    divMove('player1Track');
  }
});
});
//
// $('body').on('keyup', function(event) {
//   if(event.which==49) {
//     $('.player2Track').css({marginLeft: '+=1%'});
//     console.log(calculateWidthPercent('.player2Track'));
//     var width = calculateWidthPercent('.player2Track');
//     if (width==="100%") {
//       alert("you win!");
//     }
//     // console.log($('.player1Track').css("marginLeft"));
//     // if (($('.player1Track').css({marginLeft})) == 100%) {
//       // console.log("WIN!");
//     console.log("working!");
//   }
//
// });
//
// $('body').on('keyup', function(event) {
//   if(event.which==90) {
//     $('.player3Track').css({marginLeft: '+=1%'});
//     console.log(calculateWidthPercent('.player3Track'));
//     var width = calculateWidthPercent('.player3Track');
//     if (width==="100%") {
//       alert("you win!");
//     }
//     // console.log($('.player1Track').css("marginLeft"));
//     // if (($('.player1Track').css({marginLeft})) == 100%) {
//       // console.log("WIN!");
//     console.log("working!");
//   }
//
// });
//
// $('body').on('keyup', function(event) {
//   if(event.which==90) {
//     $('.player4Track').css({marginLeft: '+=1%'});
//     console.log(calculateWidthPercent('.player1Track'));
//     var width = calculateWidthPercent('.player1Track');
//     if (width==="100%") {
//       alert("you win!");
//     }
//     // console.log($('.player1Track').css("marginLeft"));
//     // if (($('.player1Track').css({marginLeft})) == 100%) {
//       // console.log("WIN!");
//     console.log("working!");
//   }
//
// });
// });
