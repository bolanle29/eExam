

const finish = document.querySelector(".submitBtn");
const displayText = document.getElementById("display")
// alert("finish")

finish.addEventListener("click",function(){
// alert("ggg")
    const quest1 = document.Questions.question1.value;
    const quest2 = document.Questions.question2.value;
    const quest3 = document.Questions.question3.value;
    const quest4 = document.Questions.question4.value;
    const quest5 = document.Questions.question5.value;
    const quest6 = document.Questions.question6.value;
    const quest7 = document.Questions.question7.value;
    const quest8 = document.Questions.question8.value;
    const quest9 = document.Questions.question9.value;
    const quest10 = document.Questions.question10.value;
    const quest11 = document.Questions.question11.value;
    const quest12 = document.Questions.question12.value;
    const quest13 = document.Questions.question13.value;
    const quest14 = document.Questions.question14.value;
    const quest15 = document.Questions.question15.value;
    const quest16 = document.Questions.question16.value;
    const quest17 = document.Questions.question17.value;
    const quest18 = document.Questions.question18.value;
    const quest19 = document.Questions.question19.value;
    const quest20 = document.Questions.question20.value;

//   alert(quest1); 

// // displayed message

let result = 0
let message = ["Excellent! You aced it", "Very good!", "Good! you can do better", "Not good enough, try again next year"]

if(quest1==="Past positive impact from one's own teacher."){
    result++
}

if(quest2==="Dedication and approachability."){
    result++
}

if(quest3==="Non of the above, adopt reward system instead."){
    result++
}

if(quest4==="Celebrating students achievement and positive behaviour."){
    result++
}

if(quest5==="Principles used by teachers to enable student learning."){
    result++
}

if(quest6==="Playway method."){
    result++
}

if(quest7==="Lecture method."){
    result++
}

if(quest8==="Lecture method."){
    result++
}

if(quest9==="Yes, parent should in fact keep in touch with teacher and school authority."){
    result++
}

if(quest10==="It does."){
    result++
}

if(quest11==="All of the above."){
    result++
}

if(quest12==="Should follow a standard and be relatable."){
    result++
}

if(quest13==="Absolutely!"){
    result++
}

if(quest14==="No, everyone's comprehension rate is not the same."){
    result++
}

if(quest15==="A teacher must be patient, ask questions to see who's following and who isn't"){
    result++
}

if(quest16==="The day's lesson."){
    result++
}

if(quest17==="Teaching aids that help deliver the days lesson."){
    result++
}

if(quest18==="Teaching aid."){
    result++
}

if(quest19==="Going over the lesson and asking question."){
    result++
}

if(quest20==="All of the above."){
    result++
}
// alert(result)


localStorage.setItem("disp",result)

// New widow to display result after submission

window.open("resultWindow.html")

// To check answers user got correctly
let checkAnswers;

if (result<=10){
    checkAnswers = 3; 
}
 else if (result <= 15 && result > 10 ){
    checkAnswers = 2; 
 }
  if (result <= 18 && result > 15 ){
    checkAnswers = 1; 
 }
 else if (result = 20 && result > 18 ){
    checkAnswers = 0; 
}


 // outputDisplay.innerH
 outputDisplay.innerHTML = message[checkAnswers]
  document.getElementById("totalScore").innerHTML= `You scored ${result}`

 })

 // outputDisplay.innerH
// outputDisplay.innerHTML = message[checkAnswers]