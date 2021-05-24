class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    basket = createSprite(200,500);
    basket.addImage("basket",basket_img);
    basket.scale = 0.3;
    
    basket1 = createSprite(800,500);
    basket1.addImage("basket1", basket1_img);
    basket1.scale = 0.3;
    players=[basket,basket1];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(background_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     easters = createSprite(random(100, 1000), 0, 100, 100);
                     easters.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: easters.addImage("easter1",easter1_img);
                         break;
                         case 2: easters.addImage("easter2", easter2_img);
                         break;
                         case 3: easters.addImage("easter3", easter3_img);
                         break;
                         case 4: easters.addImage("easter4", easter4_img);
                         break;
                         case 5: easters.addImage("easter5", easter5_img);
                         break;
                     }
                     easterGroup.add(easters);

                     easters.scale= 0.2;
                     
                 }
                 
                  if (player.index !== null) {
                      for (var i = 0; i < easterGroup.length; i++) {
                          if (easterGroup.get(i).isTouching(players)) {
                              easterGroup.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              
                          }
                          
                      }
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}