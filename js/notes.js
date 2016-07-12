//these two commented-out functions are for testing the style of windows without having to trigger them within the game
// $('.overlayWin').show();
// // $('.overlayStart').hide();
// //if ($(document).keyup()
// PASS A FUNCTION AN ENTIRE OBJECT
// var MOVE_AMOUNT = +40px
// var p1= {
//   charCode: ONE_CHAR_CODE,
//   position: 0,
//   number 2
//   $el:$(".player" + 2)
// };
// var p2 = {
//   charCode: Zero_CHAR_CODE
//   number: 1
// };
// }
// $(document).keyup(evalueateKeypress);
//
// // function evalueateKeypress() {
//   function move(player) {
//     player.position++
//     (".player" + player.number).css("left, player.positon * MOVE_AMOUNT);
//
// if ($(".container").width() <= player.$el.offset().left + player.$el.outerWidth()) {
//
// }
//
// function move(player {
//   player.positon++
//   player.$el.css("left", player.posiiton * move_AMOUNT)
// })
//
//   }
//   function checkForWinner(player) {
//     var player_selector = ".player" + player_number;
//     if ($(".container").width() <= $(".player2").offset().left + player.$el.outerWidth()) {
//       stop();
//       $(player_selector + "Wins").show();
//     }
//   }
//   functon
//   .off("keyup") <<<<< event
//
// function evaluateKeypress(e) {
//   if(e.which ==== p1.charCode) {
//     move(p1.number);
//
//
//
//   }
// }

//onDocument ready: objects are created with default values
$('document').ready(function() {
  var playerData = [];
  var globalStates = {};
  addGlobalStates("globalStates");
  addPlayer(1, 'img/runnerBlue.png');
  $('.player1Image').attr('src', playerData[1].image);
  addPlayer(2, 'img/runnerPurple.png');
  $('.player2Image').attr('src', playerData[2].image);
  addPlayer(3, 'img/runnerOrange.png');
  $('.player3Image').attr('src', playerData[3].image);
  addPlayer(4, 'img/runnerGreen.png');
  $('.player4Image').attr('src', playerData[4].image);
  console.log(playerData[1].playerWinCounter);
  console.log(playerData);
  console.log(globalStates);

  $('.overlayStart').show(1000);
  //music begins to buffer
  var music1 = new Audio("sound/music1.mp3");
  console.log(playerData[1].image);
  console.log(playerData);

  //now that the basic environment has been set, function definitions

  //object Constructors and helper functions to create playerData object
  function addPlayer(playerNumber, imageUrl) {
      playerData[playerNumber] = new PlayerCreate(playerNumber, imageUrl);
  }

    function addGlobalStates(winStates) {
        globalStates = new GlobalStatesCreate();
    }

    function GlobalStatesCreate() {
        this.winToggle = 0;
        this.gameStart = 0;
        this.playerHiddenCounter = 0;
        this.COUNTER_WIN_CONDITION = 100;
        return this;
      }
    function PlayerCreate(playerNumber, imageUrl) {
        this.image = imageUrl;
        this.wins = 0;
        this.playerWinCounter=0;
        this.username="Player" + playerNumber;
        return this;
    }

    //AJAX request function, and related helper functions
    function getJson(playerUrl, playerName, playerNumber) {
        $.ajax({
          type: "GET",
          dataType: "json",
          url: playerUrl,
          success: onSuccess,
          failure: onFailure,
        });

        function onFailure(json) {
          $('.titleTextUnder').html("ERROR AJAX REQUEST SERVER DOWN! OOOOOPS!");
        }

        function onSuccess(json) {
          playerData[playerNumber].image = json.avatar_url;
          playerData[playerNumber].username=json.login;
          $('.player' + playerNumber + 'Image').attr('src', playerData[playerNumber].image);
        }
      }

    //function that runs when start game button is pressed
    function startGame() {
        //music plays
        music1.play();
        //overlay is set to hidden, while board shows
        $('.overlayStart').hide();
        $('.raceBoard').show(1000);
        $('.justinRightSide').show(1000);

        //a timeout function built into StartGame() to have a countdown on the justin object and also allow player interaction at the word "go"
        setTimeout(function() {
            $('.justinRightSide').attr('src', 'img/justin2.png');
        }, 2000);
        setTimeout(function() {
            $('.justinRightSide').attr('src', 'img/justin1.png');
        }, 3000);
        setTimeout(function() {
            $('.justinRightSide').attr('src', 'img/justinGo.png');
        }, 4000);
        setTimeout(function() {
            playerData.winStates.gameStart = 1;
        }, 4000);
        setTimeout(function() {
            $('.justinRightSide').hide(1000);
        }, 5000);
    }

    //an event listener for on start game button
    $('.startGame').on('click', function(event) {
        startGame();
    });

    //listener for add player button that reveals hidden divs, including a counter that differentiates when it's time for player 3 versus 4 to appear
    $('.addPlayersButton').on('click', function(event) {
        event.preventDefault(event);
        if (playerData.winStates.playerHiddenCounter === 0) {
            $('.addPlayerBox3').show();
            $('.hiddenImageBox3').show();
            $('.player3Container').show();
            $('.player3Wins').show();
            playerData.winStates.playerHiddenCounter++;
        } else if (playerData.winStates.playerHiddenCounter === 1) {
            $('.addPlayerBox4').show();
            $('.player4Container').show();
            $('.hiddenImageBox4').show();
            $('.player4Wins').show();
        }
    });

    //four event listerners waiting to hear from the submit buttons to send data to the AJAX function
    $('.player1Submit').on('click', function(event) {
        event.preventDefault(event);
        var playerName = $('.player1NameTextInput').val();
        var playerUrl = 'https://api.github.com/users/' + playerName;
        var json = getJson(playerUrl, "player1", 1);
      });

    $('.player2Submit').on('click', function(event) {
        event.preventDefault(event);
        var playerName = $('.player2NameTextInput').val();
        var playerUrl = 'https://api.github.com/users/' + playerName;
        var json = getJson(playerUrl, "player2", 2);
      });

    $('.player3Submit').on('click', function(event) {
        event.preventDefault(event);
        $('.player3Image').attr('src', playerData.player3.image);
        var playerName = $('.player3NameTextInput').val();
        var playerUrl = 'https://api.github.com/users/' + playerName;
        var json = getJson(playerUrl, "player3", 3);
      });

    $('.player4Submit').on('click', function(event) {
        event.preventDefault(event);
        $('.player4Image').attr('src', playerData.player4.image);
        var playerName = $('.player4NameTextInput').val();
        var playerUrl = 'https://api.github.com/users/' + playerName;
        var json = getJson(playerUrl, "player4", 4);
        setTimeout(player4ImageChange, 2000);
    });

    //the function that determines what to do after a win: winner or tie. Then generates the content for the win overlay
    function postWin(playerWin, playerName) {
        var playerCounterArray = [];
        var playerCountArray = [playerData.player1.playerWinCounter, playerData.player2.playerWinCounter, playerData.player3.playerWinCounter, playerData.player4.playerWinCounter];
        //a for loop that determines a tie by pushing players who are within one increment away into an array of winners in order to make up for the single thread of JS and my design choices
        for (var i = 0; i < playerCountArray.length; i++) {
            if (playerCountArray[i]===playerData.winStates.counterWinCondition-1) {
                winnerArray.push(i + 1);
            }
        }
        //if there is one winner
        if (winnerArray.length === 1) {
            var imageUrl = playerData[playerName].image;
            playerData[playerName].wins = +1;
            $('.winnerImage').show();
            $('.winnerImage').attr('src', imageUrl);
            $('.playerWinText').html(playerWin + " SUBMITS PULL REQUEST!!!!!111``7");
            $('.scoreboard').html("Player 1 = " + playerData.player1.wins + " wins  Player 2 = " + playerData.player2.wins + " wins<br>Player 3 = " + playerData.player3.wins + " wins  Player 4 = " + playerData.player4.wins + " wins");
            $('.overlayWin').show();
        } else {
            $('.playerWinText').html("THERE'S A PULL REQUEST TIE?!?!?!<br>PLAY AGAIN!");
            $('.winnerImage').hide();
            $('.overlayWin').show();
        }
    }
    $('.bigResetButton').on('click', function(event) {
        event.preventDefault(event);
        $('.bigReset').hide();
        playerData.player1.image = 'img/runnerBlue.png';
        playerData.player2.image = 'img/runnerPurple.png';
        playerData.player3.image = 'img/runnerOrange.png';
        playerData.player4.image = 'img/runnerGreen.png';
        playerData.player1.wins = 0;
        playerData.player2.wins = 0;
        playerData.player3.wins = 0;
        playerData.player4.wins = 0;
        playerData.winStates.playerHiddenCounter = 0;
        $('.inputBox').val(null);
    });

    //event lister for new game button, soft reset of some conditions
    $('.reset').on('click', function(event) {
        music1.pause();
        music1.currentTime = 0;
        $('.playerTracks').css({
            marginLeft: '0%'
        });
        $('.overlayWin').hide();
        $('.raceBoard').hide();
        $('.overlayStart').show(1000);
        playerData.winStates.gameStart = 0;
    });

    //the main event listener that responds to when one of the player keys are pressed, based on the width of the column: this function pushes the margin closer to the edge
    $('body').on('keyup', function(event) {
        if (playerData.winStates.gameStart !== 0) {
            var width1 = calculateWidthPercent('.player1Track');
            var width2 = calculateWidthPercent('.player2Track');
            var width3 = calculateWidthPercent('.player3Track');
            var width4 = calculateWidthPercent('.player4Track');
            //flavor text generator according to how far in the race they are, run on only two of the players to lower processing overhead
            if (((width1 === "30%") || (width2 === "30%"))) {
                $('.windowBar').text("student:gitDash-Project0 student$ ONE MINUTE?????????????????");
            }
            if (((width1 === "40%") || (width2 === "40%"))) {
                $('.windowBar').text("student:gitDash-Project0 student$ git add .");
            }
            if (((width1 === "50%") || (width2 === "50%"))) {
                $('.windowBar').text("student:gitDash-Project0 student$ git add EVERYTHING");
            }
            if (((width1 === "60%") || (width2 === "60%"))) {
                $('.windowBar').text("student:gitDash-Project0 student$ git commit -m 'ADDDEDD AALL TEH THINGGS'");
            }
            if (((width1 === "70%") || (width2 === "70%"))) {
                $('.windowBar').text("student:gitDash-Project0 student$ git push oorigin mister");
            }
            if (((width1 === "80%") || (width2 === "77%"))) {
                $('.windowBar').text("student:gitDash-Project0 student$ git push orgin master");
            }
            if (((width1 === "84%") || (width2 === "82%"))) {
                $('.windowBar').text("7d2bb6c..c0ede8a  master -> master");
            }
            if (((width1 === "88%") || (width2 === "88%") || (width3 === "88%") || (width4 === "88%"))) {
                return;
            }
            //for if statements that moves players when their button is pressed and checks to see if they have finished, if so, run the postWin function
            if (event.which == 49) {
                $('.player1Track').css({
                  marginLeft: '+=1%'
                });
                playerData.player1.playerWinCounter++;
            if  (playerData.player1.playerWinCounter===playerData.winStates.counterWinCondition) {
                postWin("PLAYER 1", "1");
                }
            }
            else if (event.which === 48) {
                $('.player2Track').css({
                    marginLeft: '+=1%'
                });
                playerData.player2.playerWinCounter++;
                if  (playerData.player2.playerWinCounter===playerData.winStates.counterWinCondition) {
                    postWin("PLAYER 2", "2");
                }
            }
            else if (event.which == 90) {
                $('.player3Track').css({
                    marginLeft: '+=1%'
                });
                playerData.player3.playerWinCounter++;
                if  (playerData.player3.playerWinCounter===playerData.winStates.counterWinCondition) {
                    postWin("PLAYER 3", "player3");
                }
            }
            else if (event.which == 39) {
                $('.player4Track').css({
                    marginLeft: '+=1%'
                });
                playerData.player4.playerWinCounter++;
                if  (playerData.player4.playerWinCounter===playerData.winStates.counterWinCondition) {
                    postWin("PLAYER 4", "player4");
                }
            }
        }
    });
});