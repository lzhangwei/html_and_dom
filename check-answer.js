function checkAnswer() {

  var score = document.getElementById("score");
  var clas = document.getElementById("class");
  var stuno = document.getElementById("stuno");
  var name = document.getElementById("name");

  if(basicInfo(clas, stuno, name)){
    return false;
  }

  var result = 0;

  result = checkFillblank() + checkSelect() + checkMoreselect()
            + checkJudge() + checkSimpleanswer();

  console.log('总成绩：'+result);

  score.value = result + '分';

  return false;
}

function basicInfo(clas, stuno, name) {

  if(clas.value === '' || stuno.value === '' || name.value === ''){
    alert('班级，学号，姓名不能为空！');
    return true;
  }

  return false;

}

function checkFillblank() {

  var answerlist = loadFillblank();

  var fillblank = [document.getElementsByName('fillblank1'),
                   document.getElementsByName('fillblank2')];

  var result = 0;
  _.forEach(answerlist, function(answers,index){
    _.forEach(answers, function(aanswer){
      if(_.find(fillblank[index],{'value':aanswer.answer})){
        result += aanswer.score;
      };
    });
  });

  console.log('填空成绩：'+result);

  return result;
}

function checkSelect() {

  var answerlist = loadSelect();

  var select = [document.getElementsByName('select1'),
                document.getElementsByName('select2')];

  var result = 0;
  _.forEach(answerlist, function(aanswer,index){
    if(aanswer.answer === getSelectAnswer(select[index])){
      result += aanswer.score;
    }
  });

  console.log('单选成绩：'+result);

  return result;

}

function checkMoreselect() {

  var answerlist = loadMoreselect();

  var moreselect = [document.getElementsByName('moreselect1'),
                    document.getElementsByName('moreselect2')];

  var result = 0;
  _.forEach(answerlist, function(aanswer,index) {
    if(aanswer.answer === getSelectAnswer(moreselect[index])){
      result += aanswer.score;
    }
  });

  console.log('多选成绩：'+result);

  return result;
}

function getSelectAnswer(select) {

  var result = '';

  _.forEach(select, function(aselect) {
    if(aselect.checked){
      result += aselect.value;
    }
  });

  return result;
}

function checkJudge() {

  var answerlist = loadJudge();

  var judge = [document.getElementsByName('judge1'),
               document.getElementsByName('judge2')];

  var result = 0;
  _.forEach(answerlist, function(aanswer, index){
    if(aanswer.answer === getSelectAnswer(judge[index])){
      result += aanswer.score;
    }
  });

  console.log('判断成绩：'+result);

  return result;

}

function checkSimpleanswer() {

  var answerlist = loadSimpleanswer();

  var simpleanswer = [document.getElementsByName('simpleanswer')[0]];

  var result = 0;
  _.forEach(answerlist, function(aanswer, index){
    if(aanswer.answer === simpleanswer[index].value){
      result += aanswer.score;
    }
  });

  console.log('简答成绩：'+result);

  return result;
}
