
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
counter=0;
$('body').on('keyup', function(event) {
  if(event.which==90) {
    $('.player1Track').css({marginLeft: '+=1%'});
    counter++;
    if (counter===100) {
      alert("you win!");
    }
    // console.log($('.player1Track').css("marginLeft"));
    // if (($('.player1Track').css({marginLeft})) == 100%) {
      // console.log("WIN!");
    console.log("working!");
  }

});
});
