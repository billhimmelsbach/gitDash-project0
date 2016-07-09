
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
function calculateWidthPercent(parentDiv) {
  return (Math.floor((100-(( 100 * parseFloat($(parentDiv).css('width')) / parseFloat($(parentDiv).parent().css('width')) )))) + '%');
}

// var width = ((( 100 * parseFloat($(this).css('width')) / parseFloat($(this).parent().css('width')) )) + '%');
$('body').on('keyup', function(event) {
  if(event.which==90) {
    $('.player1Track').css({marginLeft: '+=1%'});
    console.log(calculateWidthPercent('.player1Track'));
    var width = calculateWidthPercent('.player1Track');
    if (width==="100%") {
      alert("you win!");
    }
    // console.log($('.player1Track').css("marginLeft"));
    // if (($('.player1Track').css({marginLeft})) == 100%) {
      // console.log("WIN!");
    console.log("working!");
  }

});

$('body').on('keyup', function(event) {
  if(event.which==90) {
    $('.player1Track').css({marginLeft: '+=1%'});
    console.log(calculateWidthPercent('.player1Track'));
    var width = calculateWidthPercent('.player1Track');
    if (width==="100%") {
      alert("you win!");
    }
    // console.log($('.player1Track').css("marginLeft"));
    // if (($('.player1Track').css({marginLeft})) == 100%) {
      // console.log("WIN!");
    console.log("working!");
  }

});

$('body').on('keyup', function(event) {
  if(event.which==90) {
    $('.player1Track').css({marginLeft: '+=1%'});
    console.log(calculateWidthPercent('.player1Track'));
    var width = calculateWidthPercent('.player1Track');
    if (width==="100%") {
      alert("you win!");
    }
    // console.log($('.player1Track').css("marginLeft"));
    // if (($('.player1Track').css({marginLeft})) == 100%) {
      // console.log("WIN!");
    console.log("working!");
  }

});

$('body').on('keyup', function(event) {
  if(event.which==90) {
    $('.player1Track').css({marginLeft: '+=1%'});
    console.log(calculateWidthPercent('.player1Track'));
    var width = calculateWidthPercent('.player1Track');
    if (width==="100%") {
      alert("you win!");
    }
    // console.log($('.player1Track').css("marginLeft"));
    // if (($('.player1Track').css({marginLeft})) == 100%) {
      // console.log("WIN!");
    console.log("working!");
  }

});
});
