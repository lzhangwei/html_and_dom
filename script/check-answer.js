$(document).ready(function(){
   $('#mybut').on('click',function(){
       var clas = $('#class')[0];
       var stuno = $('#stuno')[0];
       var name = $('#name')[0];

       if (basicInfo(clas, stuno, name)) {
           return false;
       }

       var result = calculatSumScore();
       $('#scores').css({'color': 'red'});
       $('#score').text(result + '分');

       return false;
   });
});

function basicInfo(clas, stuno, name) {

    if (clas.value === '' || stuno.value === '' || name.value === '') {
        clas.value === '' ? $('#classs').addClass('has-error') : $('#classs').removeClass('has-error');
        stuno.value === '' ? $('#stunos').addClass('has-error') : $('#stunos').removeClass('has-error');
        name.value === '' ? $('#names').addClass('has-error') : $('#names').removeClass('has-error');
        $("#myModal").modal('show');
        return true;
    }
    $('#classs,#stunos,#names').removeClass('has-error');
    return false;
}

function calculatSumScore() {
    var questions = loadQuestions();

    var result = 0;
    _.forEach(questions, function (question) {
        result += question.caculateScore();
    });

    return result;
}

function loadQuestions() {
    var questions = [
        new GapfillQuestion('fillblank1', ['统一建模语言'], [5]),
        new GapfillQuestion('fillblank2', ['封装性', '继承性', '多态性'], [5, 5, 5]),
        new SelectQuestion('choice1', 'b', 10),
        new SelectQuestion('choice2', 'a', 10),
        new SelectQuestion('multiplechoice1', 'abd', 10),
        new SelectQuestion('multiplechoice2', 'abc', 10),
        new SelectQuestion('judge1', 'X', 10),
        new SelectQuestion('judge2', 'V', 10),
        new ShortanswerQuestion('shortanswer1', '模型是对现实世界的简化和抽象,'
            + '模型是对所研究的系统、过程、事物或概念的一种表达形式。'
            + '可以是物理实体;可以是某种图形;或者是一种数学表达式。', 20)
    ];
    return questions;
}
