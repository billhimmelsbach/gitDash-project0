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
function Flower(name, color, petals, edible, medicinal, lifespan, genus, season, image) {
  this.name = name;
  this.color = color; //string
  this.petals = petals;  //number
  this.edible = edible;
  this.medicinal = medicinal;
  this.lifespan = lifespan;
  this.genus = genus;
  this.season = season;
  this.image = image;
  // this.render = render();
}
myFlower = new Flower("Rose", "red", 30, true, false, 30, "this damn rose", "fall", "http://pngimg.com/upload/rose_PNG639.png");

function PlayerCreate(number,name,counter,image) {
  this.number=number;
  this.name=name;
  this.counter=counter;
  this.image=image;
}

Player1 = new PlayerCreate("player1","bill",10);

$('body').on('keyup', function(event) {
  if(event.which==90) {
    $('.player1Track').css({marginLeft: '+=0.5%'});
    counter++;
    if (Player1.number.counter===10) {
      alert("you win!");
    }
    // console.log($('.player1Track').css("marginLeft"));
    // if (($('.player1Track').css({marginLeft})) == 100%) {
      // console.log("WIN!");
    console.log("working!");
  }

});
});
