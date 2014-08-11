function checkAnswer() {
  var scorediv = document.getElementById("scores");
  var score = document.getElementById("score");
  var clas = document.getElementById("class");
  var stuno = document.getElementById("stuno");
  var name = document.getElementById("name");

  if(basicInfo(clas, stuno, name)){
    return false;
  }

  var result = 0;

  result = calculatSumScore();
  scorediv.style.color='red';
  score.innerHTML = result + '分';

  return false;
}

function basicInfo(clas, stuno, name) {

  if(clas.value === '') {
    document.getElementById("classs").className = "has-error";
    if(stuno.value === ''){
      document.getElementById("stunos").className = "has-error";
    }else{
      document.getElementById("stunos").className = "has-success";
    }
    if(name.value === ''){
      document.getElementById("names").className = "has-error";
    }else{
      document.getElementById("names").className = "has-success";
    }
    alert('班级不能为空！');
    return true;
  }else{
    document.getElementById("classs").className = "has-success";
  }

  if(stuno.value === '') {
    document.getElementById("stunos").className = "has-error";
    if(name.value === ''){
      document.getElementById("names").className = "has-error";
    }else{
      document.getElementById("names").className = "has-success";
    }
    alert('学号不能为空！');
    return true;
  }else{
    document.getElementById("stunos").className = "has-success";
  }

  if(name.value === '') {
    document.getElementById("names").className = "has-error";
    alert('姓名不能为空！');
    return true;
  }else{
    document.getElementById("names").className = "has-success";
  }

  return false;

}

function calculatSumScore() {
  var questions = loadQuestions();

  var result = 0;
  _.forEach(questions, function(question) {
    result += question.caculateScore();
  });

  return result;
}

function loadQuestions() {
  var questions = [];
  questions = [
                new GapfillQuestion('fillblank1',['统一建模语言'],[5]),
                new GapfillQuestion('fillblank2',['封装性','继承性','多态性'],[5,5,5]),
                new SelectQuestion('choice1','b',10),
                new SelectQuestion('choice2','a',10),
                new SelectQuestion('multiplechoice1','abd',10),
                new SelectQuestion('multiplechoice2','abc',10),
                new SelectQuestion('judge1','X',10),
                new SelectQuestion('judge2','V',10),
                new ShortanswerQuestion('shortanswer1','模型是对现实世界的简化和抽象,'
                                        +'模型是对所研究的系统、过程、事物或概念的一种表达形式。'
                                        + '可以是物理实体;可以是某种图形;或者是一种数学表达式。',20)
              ];
  return questions;
}
