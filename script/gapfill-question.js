function GapfillQuestion(questionName, answer, score) {
    Question.call(this, questionName, answer, score);
}

GapfillQuestion.prototype = Object.create(Question.prototype);

GapfillQuestion.prototype.constructor = GapfillQuestion;

GapfillQuestion.prototype.caculateScore = function () {

    var blanks = $('input[name='+this.questionName+']');

    var result = 0;
    var myscore = this.score;
    _.forEach(this.answer, function (item, index) {
        if (_.some(blanks, {'value': item})) {
            result += myscore[index];
        }
    });

    return result;
};
