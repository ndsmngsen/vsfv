class Game{

constructor(){
    
}
getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    //add more and change values later
    background=createSprite(400,400)
    background.addImage(background_image);
    //walls(check where it starts and make invisible)
    topWall=createSprite(0,400,400,20)
    bottomWall=createSprite(0,0,400,20)
    rightWall=createSprite(0,0,20,400)
    rightWall=createSprite(400,0,20,400)

    //striker and red coin
    striker = createSprite(200,30,15,15);
    striker.addImage(striker_image);
    striker.scale= 0.1
    redCoin=createSprite(200,200,10,10)
    redCoin.addImage(redCoin_image)
    redCoin.scale=0.6
    // the turnmarker(make invisible)
    turnMarker=createSprite(200,30,10,10)
    //(invisible)

    //inner bar and outer bar(controls power)

    //black and white coins
  }
handleElements(){
form.hide();
// might add more
}
play(){
  this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
    player.getWinConditions();
    if (allPlayers !== undefined) {
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
      }
      // adding points
      
 
  //win conditions
  if (player.playerPoints=25) {
    gameState = 2;
    Player.updateWinConditions();
    player.update();
  }

   
   //friction
    if(striker.velocityY>0){
     this.negFrictionY()
    }
    if(striker.velocityY<0){
      this.posFrictionY()
     }
     if(striker.velocityX<0){
      this.posFrictionX()
     }
     if(striker.velocityY>0){
      this.negFrictionX()
     }
     //space to release(do later)(release function)
    
     //when striker stops
     if(striker.velocityX===0&&striker.velocityY===0){
       striker.x=turnMarker.x
     }



   drawSprites();
  }
}
handlePlayerControls(){
//establishes controls for the game

}
moveStrikerEachTurn(){
//move striker between players every turn

}
release(){
  
}
passTurn(){

}
coinFall(){
// has coin fall in hole 
}
collectCoin(){
  //delete coin
}
getCoinsOnBoard(){
  //refer to player class
}
giveBlackpoints(){
//refering to player class 

}
giveWhitePoints(){
//refering to player class
}
displayScore(){

}

reset(){
//resets coins after round is done
}
negFrictionY(){
striker.velocityY-=1
}
posFrictionY(){
  striker.velocityY+=1
  }
  negFrictionX(){
    striker.velocityX-=1
  }
  posFrictionX(){
    striker.velocityX+=1
  }



restart(){
  //restarts the entire game

}
}