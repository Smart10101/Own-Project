class Form{
    constructor(){
        this.title = createElement('h2','Ping Pong Game');
        this.input = createInput("Name: ");
        this.reset = createButton('Reset');
        this.button = createButton('Play');
    }

    display(){
        this.reset.position(8,10);
        this.button.position(270,200);
        this.input.position(200,170);
        this.title.position(200,25);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.title.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
        })

        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
            database.ref('/').update({
                players: null
            })
        })
    }

    hide(){
        this.input.hide();
        this.title.hide();
        this.button.hide();
    }
}