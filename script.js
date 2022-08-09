//set variables to zero
var jerScore = 0;
var conradScore = 0;
var questionCount = 0;

// use DOM
var result = document.getElementById("result");
var restart = document.getElementById("restart");

restart.addEventListener("click", resetQuiz);

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//enabling each answer choice
document.getElementById("q1a1").disabled = false;
document.getElementById("q1a2").disabled = false;
document.getElementById("q2a1").disabled = false;
document.getElementById("q2a2").disabled = false;
document.getElementById("q3a1").disabled = false;
document.getElementById("q3a2").disabled = false;
document.getElementById("q4a1").disabled = false;
document.getElementById("q4a2").disabled = false;
document.getElementById("q5a1").disabled = false;
document.getElementById("q5a2").disabled = false;

//event listener for each click of an answer choice
q1a1.addEventListener("click", disableq1);
q1a2.addEventListener("click", disableq1);
q2a1.addEventListener("click", disableq2);
q2a2.addEventListener("click", disableq2);
q3a1.addEventListener("click", disableq3);
q3a2.addEventListener("click", disableq3);
q4a1.addEventListener("click", disableq4);
q4a2.addEventListener("click", disableq4);
q5a1.addEventListener("click", disableq5);
q5a2.addEventListener("click", disableq5);

//event listener for each answer choice
q1a1.addEventListener("click", jer);
q1a2.addEventListener("click", conrad);

q2a1.addEventListener("click", jer);
q2a2.addEventListener("click", conrad);

q3a1.addEventListener("click", jer);
q3a2.addEventListener("click", conrad);

q4a1.addEventListener("click", jer);
q4a2.addEventListener("click", conrad);

q5a1.addEventListener("click", jer);
q5a2.addEventListener("click", conrad);

// answer choices function
function jer(){
  jerScore +=1;
  questionCount +=1;  
  console.log("questionCount = " + questionCount + " jerScore = " + jerScore);
  if (questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

function conrad(){
  conradScore +=1;
  questionCount +=1;
  console.log("questionCount = " + questionCount + " conradScore = " + conradScore);
  if (questionCount == 5){
    console.log("The quiz is done!");
    updateResult();
  }
}

// update results function  

function updateResult(){
    if(jerScore >=3){
      result.innerHTML="You are more like Jer!"
      console.log("You are more like Jer!");
    } else if (conradScore >= 3){
      result.innerHTML="You are more like Conrad!"
      console.log("You are more like Conrad!");
    }
}

//disable functions
function disableq1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disableq2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disableq3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}

function disableq4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
}

function disableq5(){
  q5a1.disabled = true;
  q5a2.disabled = true;
}

function enableqs(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
}

function resetQuiz(){
  result.innerHTML = "You are more like...";
  questionCount = 0;
  jerScore = 0;
  conradScore = 0;
  console.log("questionCount = " + questionCount + " jerScore = " +         jerScore + " conradScore = " + conradScore);
  enableqs();
}
