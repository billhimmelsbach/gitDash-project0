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
    //show desktop before showing overlayStartray
    setTimeout(function() {
        $('.overlayStart').show(700);
    }, 1000);
    //music begins to buffer
    var music1 = new Audio("sound/music1.mp3");

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
        this.COUNTER_WIN_CONDITION = 90;
        return this;
    }

    function PlayerCreate(playerNumber, imageUrl) {
        this.image = imageUrl;
        this.wins = 0;
        this.playerWinCounter = 0;
        this.username = "Player" + playerNumber;
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
            playerData[playerNumber].username = json.login;
            $('.player' + playerNumber + 'Image').attr('src', playerData[playerNumber].image);
        }
    }

    //an event listener for on start game button
    $('.startGame').on('click', function(event) {
        startGame();
    });

    //function that runs when start game button is pressed
    function startGame() {
        //music plays
        music1.play();
        //overlay is set to hidden, while board shows
        $('.overlayStart').hide();
        $('.raceBoard').show(1000);
        $('.justinRightSide').show(1000);
        $('.justinRightSide').attr('src', 'img/justin3.png');

        //a timeout function built into StartGame() to have a countdown on the justin object and also allow player interaction at the word "go"

        setTimeout(function() {
            $('.justinRightSide').attr('src', 'img/justin2.png');
        }, 2000);
        setTimeout(function() {
            $('.justinRightSide').attr('src', 'img/justin1.png');
        }, 3000);
        setTimeout(function() {
            globalStates.gameStart = 1;
        }, 3999);
        setTimeout(function() {
            $('.justinRightSide').attr('src', 'img/justinGo.png');
        }, 4000);
        setTimeout(function() {
            $('.justinRightSide').hide(1000);
        }, 6000);
    }

    //listener for add player button that reveals hidden divs, including a counter that differentiates when it's time for player 3 versus 4 to appear
    $('.addPlayersButton').on('click', function(event) {
        event.preventDefault(event);
        if (globalStates.playerHiddenCounter === 0) {
            $('.addPlayerBox3').show();
            $('.hiddenImageBox3').show();
            $('.player3Container').show();
            $('.player3Wins').show();
            globalStates.playerHiddenCounter++;
        } else if (globalStates.playerHiddenCounter === 1) {
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
        $('.player3Image').attr('src', playerData[3].image);
        var playerName = $('.player3NameTextInput').val();
        var playerUrl = 'https://api.github.com/users/' + playerName;
        var json = getJson(playerUrl, "player3", 3);
    });

    $('.player4Submit').on('click', function(event) {
        event.preventDefault(event);
        $('.player4Image').attr('src', playerData[4].image);
        var playerName = $('.player4NameTextInput').val();
        var playerUrl = 'https://api.github.com/users/' + playerName;
        var json = getJson(playerUrl, "player4", 4);
        setTimeout(player4ImageChange, 2000);
    });

    //the function that determines what to do after a win: winner or tie. Then generates the content for the win overlay
    function postWin(playerWin, playerNumber) {
        globalStates.gameStart = 0;
        var winnerArray = [];
        var playerCounterArray = [];
        var playerCountArray = [playerData[1].playerWinCounter, playerData[2].playerWinCounter, playerData[3].playerWinCounter, playerData[4].playerWinCounter];
        //a for loop that determines a tie by pushing players who are within one increment away into an array of winners in order to make up for the single thread of JS and my design choices
        for (var i = 0; i < playerCountArray.length; i++) {
            if (playerCountArray[i] >= (globalStates.COUNTER_WIN_CONDITION) - 1) {
                winnerArray.push(i + 1);
            }
        }
        //if there is one winner
        if (winnerArray.length === 1) {
            var imageUrl = playerData[playerNumber].image;
            playerData[playerNumber].wins++;
            $('.winnerImage').show();
            $('.winnerImage').attr('src', imageUrl);
            $('.playerWinText').html(playerWin + " SUBMITS PULL REQUEST!!!!!111``7");
            $('.scoreboard').html("Player 1 = " + playerData[1].wins + " wins  Player 2 = " + playerData[2].wins + " wins<br>Player 3 = " + playerData[3].wins + " wins  Player 4 = " + playerData[4].wins + " wins");
            $('.overlayWin').show();
        } else {
            $('.playerWinText').html("THERE'S A PULL REQUEST TIE?!?!?!<br>PLAY AGAIN!");
            $('.scoreboard').html("Player 1 = " + playerData[1].wins + " wins  Player 2 = " + playerData[2].wins + " wins<br>Player 3 = " + playerData[3].wins + " wins  Player 4 = " + playerData[4].wins + " wins");
            $('.winnerImage').hide();
            $('.overlayWin').show();
        }
    }

    //event listener for when a player hits the reset button on the startOverlay
    $('.bigResetButton').on('click', function(event) {
        event.preventDefault(event);
        $('.bigReset').hide();
        playerData[1].playerWinCounter = 0;
        playerData[1].image = 'img/runnerBlue.png';
        playerData[2].image = 'img/runnerPurple.png';
        playerData[3].image = 'img/runnerOrange.png';
        playerData[4].image = 'img/runnerGreen.png';
        for (var i = 1; i < playerData.length; i++) {
            playerData[i].wins = 0;
            $('.player' + i + 'Image').attr('src', playerData[i].image);
        }
        globalStates.playerHiddenCounter = 0;
        $('.inputBox').val(null);
    });

    //event listener for new game button, soft reset of some conditions
    $('.reset').on('click', function(event) {
        music1.pause();
        music1.currentTime = 0;
        playerData[1].playerWinCounter = 0;
        playerData[2].playerWinCounter = 0;
        playerData[3].playerWinCounter = 0;
        playerData[4].playerWinCounter = 0;
        funnyConsoleTextGenerator();
        $('.playerTracks').css({
            marginLeft: '0%'
        });
        $('.overlayWin').hide();
        $('.raceBoard').hide();
        $('.overlayStart').show(1000);
        globalStates.gameStart = 0;
    });

    function determineLeaderCounter() {
        var leaderWinCounter = Math.max(playerData[1].playerWinCounter, playerData[2].playerWinCounter, playerData[3].playerWinCounter, playerData[4].playerWinCounter);
        return leaderWinCounter;
    }

    function funnyConsoleTextGenerator() {
        var leaderWinCounter = determineLeaderCounter();
        //flavor text generator according to how far in the race they are, run on only two of the players to lower processing overhead
        if (leaderWinCounter === 0) {
            $('.windowBar').text("student:gitDash-Project0 student$ OH GOD WHEN IS THIS DUE");
        } else if (leaderWinCounter <= 30) {
            $('.windowBar').text("student:gitDash-Project0 student$ ONE MINUTE?????????????????");
        } else if (leaderWinCounter <= 40) {
            $('.windowBar').text("student:gitDash-Project0 student$ git add .");
        } else if (leaderWinCounter <= 50) {
            $('.windowBar').text("student:gitDash-Project0 student$ git add EVERYTHING");
        } else if (leaderWinCounter <= 60) {
            $('.windowBar').text("student:gitDash-Project0 student$ git commit -m 'ADDDEDD AALL TEH THINGGS'");
        } else if (leaderWinCounter <= 70) {
            $('.windowBar').text("student:gitDash-Project0 student$ git push oorigin mister");
        } else if (leaderWinCounter <= 80) {
            $('.windowBar').text("student:gitDash-Project0 student$ git push origin master");
        } else if (leaderWinCounter <= 85) {
            $('.windowBar').text("7d2bb6c..c0ede8a  master -> master");
        }

    }


    //the main event listener that responds to when one of the player keys are pressed, based on the global counter: this function pushes the margin closer to the edge

    // if (globalStates.gameStart === 1) {
    $('body').on('keyup', function(event) {
        if (globalStates.gameStart === 1) {
            funnyConsoleTextGenerator();

            //for if statements that moves players when their button is pressed and checks to see if they have finished, if so, run the postWin function
            if (event.which == 49) {
                $('.player1Track').css({
                    marginLeft: '+=1%'
                });
                playerData[1].playerWinCounter++;
                if (playerData[1].playerWinCounter === globalStates.COUNTER_WIN_CONDITION) {
                    globalStates.gameStart = 0;
                    postWin("PLAYER 1", 1);
                }
            } else if (event.which === 48) {
                $('.player2Track').css({
                    marginLeft: '+=1%'
                });
                playerData[2].playerWinCounter++;
                if (playerData[2].playerWinCounter === globalStates.COUNTER_WIN_CONDITION) {
                    globalStates.gameStart = 0;
                    postWin("PLAYER 2", 2);
                }
            } else if (event.which == 90) {
                $('.player3Track').css({
                    marginLeft: '+=1%'
                });
                playerData[3].playerWinCounter++;
                if (playerData[3].playerWinCounter === globalStates.COUNTER_WIN_CONDITION) {
                    globalStates.gameStart = 0;
                    postWin("PLAYER 3", 3);
                }
            } else if (event.which == 39) {
                $('.player4Track').css({
                    marginLeft: '+=1%'
                });
                playerData[4].playerWinCounter++;
                if (playerData[4].playerWinCounter === globalStates.COUNTER_WIN_CONDITION) {
                    globalStates.gameStart = 0;
                    postWin("PLAYER 4", 4);
                }
            }
        }
    });
});
