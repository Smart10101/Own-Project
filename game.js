class Game{
    constructor(){}

    getState(){
        var getGameState = database.ref('gameState');
        getGameState.on("value",function(data){
           gameState = data.val(); 
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        player1 = createSprite(30,200);
        player2 = createSprite(570,200);
        players = [player1, player2];
        ball = createSprite(300,200,30,30);
        ball.scale = 0.1;
        ball.addImage("ball",ballImage);
        leftPaddle = createSprite(30,200,22,100);
        rightPaddle = createSprite(570,200,22,100);
        leftBound = createSprite(2,200,5,500);
        leftBound.shapeColor = "red";
        rightBound = createSprite(598,200,5,500);
        rightBound.shapeColor = "red";
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){   
            var x = 200;
            var y = 0;
            var index = 0;
            for(var plr in allPlayers){
                index = index + 1;
                x  = x + 200;
                y = displayHeight-allPlayers[plr].distance;
                players[index-1].x = x;
                players[index-1].y = y;
                if(index === players.index){
                    players[index-1].shapeColor = "blue";
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
        if(keyIsDown(DOWN_ARROW) && player.index !== null){
            player.distance -= 50;
            player.update();
        }
        drawSprites();
    }
}
