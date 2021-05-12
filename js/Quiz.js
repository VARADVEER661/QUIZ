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
    textSize(30)
    text("RESULT OF THE QUIZ",340,50)
    text("-------------------------------",320,65)
    //call getContestantInfo( ) here
    contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if (allContestents !== undefined){
      debugger
      var display_Answers = 230
      fill("blue")
      textSize(20)
      text("*NOT:contestent who answered correct are highlighted in green color",230,20)
      for(var plr in allContestents ){
        debugger;
        var correctAnswer = "2"
        if (correctAnswer === allContestents[plr].answer){
          fill("Green")
        }else fill("red")
        display_Answers+= 30;
        textSize(20)
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
