var leftPaddle, rightPaddle, ball, ballImage, score, leftBound, rightBound
var game, allPlayersInfo, player, form, player1, player2, players, playerCount;
var gameState = 0;
var allPlayers;

function preload(){
  ballImage = loadImage("images/volleyball.png");
}

function setup() {
  createCanvas(600,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("lightGrey");
  if(playerCount == 2){
    game.updateState(1);
  }
  if(gameState === 1){
    game.play();
  }
  else{
    game.updateState(2);
  }
}
