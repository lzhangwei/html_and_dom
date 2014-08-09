function ShortanswerQuestion(questionName,answer,score) {
  Question.call(this,questionName,answer,score);
}

ShortanswerQuestion.prototype = Object.create(Question.prototype);

ShortanswerQuestion.prototype.constructor = ShortanswerQuestion;

ShortanswerQuestion.prototype.caculateScore = function(){

  var blanks = document.getElementsByName(this.questionName);
  
  if(blanks && blanks[0].value === this.answer){
    return this.score;
  }

  return 0;
};
