$('document').ready(function() {
// console.log("Am I sane?");
// var track = $('.player1Track');
// // $('')
//
// playerRow = $('.player1Track');
//
//
//
//   // td.cellIndex)
// console.log(track[0]);
function PlayerCreate(number,name,counter) {
  this.number=number;
  this.number.name=name;
  this.number.counter=counter;
}
PlayerCreate(1,bill,200);
$('body').on('keyup', function(event) {
  if(event.which==90) {
    $('.player1Track').css({marginLeft: '+=0.5%'});
    counter++;
    if (counter===10) {
      alert("you win!");
    }
    // console.log($('.player1Track').css("marginLeft"));
    // if (($('.player1Track').css({marginLeft})) == 100%) {
      // console.log("WIN!");
    console.log("working!");
  }

});
});
