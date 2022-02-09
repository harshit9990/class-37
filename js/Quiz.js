class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("yellow");
    //write code to show a heading for showing the result of Quiz
fill('black')
textSize(36);
text("result of the quiz is ",500,100)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants !== undefined){
fill("blue");
textSize(20);
text("*Note constant",130,230);
var ypos=100;
for(var plr in allContestants){
var correctAns = "2"
if(correctAns === allContestants[plr].answer)
fill('green');
else
fill('red');
ypos =ypos+50;
text(allContestants[plr].name+': '+allContestants[plr].answer,250,ypos)

}
}

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
