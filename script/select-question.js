function SelectQuestion(questionName,answer,score) {
  Question.call(this,questionName,answer,score);
}

SelectQuestion.prototype = Object.create(Question.prototype);

SelectQuestion.prototype.constructor = SelectQuestion;

SelectQuestion.prototype.caculateScore = function(){

  var selects = $('input[name='+this.questionName+']');

  var value = '';
  _.forEach(selects, function(item) {
    value += (item.checked ? item.value : '');
  });

  if(value === this.answer){
    return this.score;
  }

  return 0;
};
