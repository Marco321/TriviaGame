$(document).ready(function () {

  var seconds = 30;

  var intervalId;

  $("#StartGame").on("click", function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#StartGame").attr("id","HiddenButton")
    $(".HiddenQuestions").removeAttr("class","HiddenQuestions");
    $("#Timer").html(timeConverter(seconds));
  });

    //  The decrement function.
  function decrement() {

      //  Decrease seconds by one.
    seconds--;

      //  Show the seconds in the #Timer tag.
    $("#Timer").html(timeConverter(seconds));

      //  Once seconds hits zero...
    if (seconds === 0) {
      clearInterval(intervalId);
      $(".HideAgain").attr("class","HiddenQuestions")
      $("#HiddenResults").removeAttr("id","HiddenResults")
      checkedRadios();
    }
  }

  function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    
    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  };


  function checkedRadios () {
  var userAnswer1 = $('input[name=Q1]:checked').val() 
  var userAnswer2 = $('input[name=Q2]:checked').val() 
  var userAnswer3 = $('input[name=Q3]:checked').val() 
  var userAnswer4 = $('input[name=Q4]:checked').val() 
  var userAnswer5 = $('input[name=Q5]:checked').val()
  
  var correctAnswers = 0;

  var wrongAnswers = 0;

  var unanswered = 0;


  if ( userAnswer1 === "1") {
    ++correctAnswers;
  }else if ( userAnswer1 !== "1") {
    ++wrongAnswers;
  }
  if (userAnswer1 === undefined) {
    ++unanswered;
    --wrongAnswers;
  }

  if ( userAnswer2 === "1") {
    ++correctAnswers;
  }else if ( userAnswer2 !== "1") {
    ++wrongAnswers;
  }
  if (userAnswer2 === undefined) {
    ++unanswered;
    --wrongAnswers;
  }

  if ( userAnswer3 === "1") {
    ++correctAnswers;
  }else if ( userAnswer3 !== "1") {
    ++wrongAnswers;
  }
  if (userAnswer3 === undefined) {
    ++unanswered;
    --wrongAnswers;
  }

  if ( userAnswer4 === "1") {
    ++correctAnswers;
  }else if ( userAnswer4 !== "1") {
    ++wrongAnswers;
  }
  if (userAnswer4 === undefined) {
    ++unanswered;
    --wrongAnswers;
  }

  if ( userAnswer5 === "1") {
    ++correctAnswers;
  }else if ( userAnswer5 !== "1") {
    ++wrongAnswers;
  }
  if (userAnswer5 === undefined) {
    ++unanswered;
    --wrongAnswers;
  }

  console.log(userAnswer1) 
  console.log(userAnswer2) 
  console.log(userAnswer3) 
  console.log(userAnswer4) 
  console.log(userAnswer5)
  console.log(correctAnswers);
  console.log(wrongAnswers);
  console.log(unanswered);

  $("#CorrectAnswerNum").text(correctAnswers);
  $("#WrongAnswerNum").text(wrongAnswers);
  $("#UnansweredNum").text(unanswered);

  };


});