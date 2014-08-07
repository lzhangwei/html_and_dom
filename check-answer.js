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
  for(var i = 0; i < answerlist.length; i++) {
    for(var j = 0; j < answerlist[i].length; j++){
      result += calScoreOfValue(answerlist[i][j],fillblank[i]);
    }
  }

  console.log('填空成绩：'+result);

  return result;
}

function calScoreOfValue(trueanswer, values){

  for(var i = 0; i < values.length; i++){
    if(trueanswer.answer === values[i].value){
      return trueanswer.score;
    }
  }

  return 0;
}

function checkSelect() {

  var answerlist = loadSelect();

  var select = [document.getElementsByName('select1'),
                document.getElementsByName('select2')];

  var result = 0;
  for(var i = 0; i < answerlist.length; i++){
    if(answerlist[i].answer === getSelectAnswer(select[i])){
      result += answerlist[i].score;
    }
  }

  console.log('单选成绩：'+result);

  return result;

}

function checkMoreselect() {

  var answerlist = loadMoreselect();

  var moreselect = [document.getElementsByName('moreselect1'),
                    document.getElementsByName('moreselect2')];

  var result = 0;
  for(var i = 0; i < answerlist.length; i++){
    if(answerlist[i].answer === getSelectAnswer(moreselect[i])){
      result += answerlist[i].score;
    }
  }

  console.log('多选成绩：'+result);

  return result;
}

function getSelectAnswer(select) {

  var result = '';

  _.forEach(select, function(aselect) {
    if(aselect.checked)
      result += aselect.value
  });

  return result;
}

function checkJudge() {

  var answerlist = loadJudge();

  var judge = [document.getElementsByName('judge1'),
               document.getElementsByName('judge2')];

  var result = 0;
  for(var i = 0; i < answerlist.length; i++) {
    if(answerlist[i].answer === getSelectAnswer(judge[i])){
      result += answerlist[i].score;
    }
  }

  console.log('判断成绩：'+result);

  return result;

}

function checkSimpleanswer() {

  var answerlist = loadSimpleanswer();

  var simpleanswer = [document.getElementsByName('simpleanswer')[0]];

  var result = 0;
  for(var i = 0; i < answerlist.length; i++) {
    if(answerlist[i].answer === simpleanswer[i].value){
      result += answerlist[i].score;
    }
  }

  console.log('简答成绩：'+result);

  return result;
}
