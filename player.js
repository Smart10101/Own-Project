class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    
    getCount(){
        var count = database.ref('playerCount');
        count.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfo = database.ref('players');
        playerInfo.on("value",(data)=>{
        allPlayersInfo = data.val();
        });
    }
}