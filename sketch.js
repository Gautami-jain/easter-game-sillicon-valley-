var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var easters;
var easterGroup;
var easter1_img, easter2_img, easter3_img, easter4_img, easter5_img;
var basket_img, basket1_img;
var player1score =0;
var player2score =0;
var basket; 
var basket1;

function preload(){
  background_img = loadImage("images/groundImage.jpg");
  basket_img = loadImage("images/basket.PNG");
  basket1_img = loadImage("images/basket1.PNG");
  easter1_img = loadImage("images/easter1.png");
  easter2_img = loadImage("images/easter2.png");
  easter3_img = loadImage("images/easter3.png");
  easter4_img = loadImage("images/easter4.png");
  easter5_img = loadImage("images/easter5.png");
  easterGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(background_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}