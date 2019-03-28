//create variables named question
//create function and i
//create divs for questions, answers and results. 

//alongside Mark she is more than just a Face at this corporation as she runs the operations for this social media jauggernaut
//She may be married to a major tech guru but with a degree in computer science, and an MBA you know she can make her own bills.  Melinda Gates
//She moved from google to yahoo and was ranked sixth on Fortune magazine's 40 under 40 list. Who is Marissa Mayer?
//alongside Mark she is more than just a Face at this corporation as she runs the operations for this social media jauggernaut-Sheryl Sandberg
//she is the chief financial officer of this major corporation. One of the wealthiest men in the world would not be able to count his Bills without her- Who is Amy Woods?
//with a net worth of over 2.6billion dollars, she is described as the most successful technology founder in the world. It is even more admirable that she is self made. Epic, right? Judy Faulkner
//As the first black woman to become the CEO of a Fortune 500 company, you know a lot of young black girls look up to her. Copy that? Ursula Burns – Chair-CEO, Xerox
//As the CEO of one of the most powerful search engine in the world, she has amassed a networth of over 400 milion dollar and with how often You use her platform, there seems to be no stopping her. -Who is Susan Wojcicki?


// const start = document.getElementById("start");

// const quiz = document.getElementById("quiz");
// const questionImage = document.getElementById("questionImage");
// const question = document.getElementById("question");

// const timeGauge = document.getElementById("timeGauge");

// const backTimeGauge =document.getElementById("backTimeGauge");

// const A = document.getElementById("A");

// const B = document.getElementById("B");

// const C = document.getElementById("C");
// const D = document.getElementById("D");

// const counter = document.getElementById("counter");


// const progress = document.getElementById("progress");
// const quizContainer = document.getElementById("contaner");
// const resultsContaianer = document.getElementById("results");
// const submit = document.getElementById("sumbit");




(function () {

    var quizQuestions = [{

        question: "She moved from google to yahoo and was ranked sixth on Fortune magazine's 40 under 40 list.",
        imgSrc: "./assets/images/marmay.jpg",
        choices: ["Linda Hamilton", "Amy Cohen", "Lisa Woo", "Marrisa Mayer"],
        correct: "Marrisa Mayer-President-CEO, Yahoo,",
    },
    {
        question: "She moved from google to yahoo and was ranked sixth on Fortune magazine's 40 under 40 list.",
        imgSrc: "./assets/images/marmay.jpg",
        choices: ["Linda Hamilton", "Amy Cohen", "Lisa Woo", "Marrisa Mayer"],
        correct: "Marrisa Mayer-President-CEO, Yahoo,",
    },


    {
        question: "She may be married to a major tech guru but with a degree in computer science, and an MBA you know she can make her own bills.",
        imgSrc: "./assets/images/melg.jpg",
        choices: ["Melinda Gates", "Ava Durney", "Merrisa Yates", "Naomi Unagi"],
        correct: "Melinda Gates-MBA-Philantropist",
    },
    {
        question: "As the CEO of one of the most powerful search engine in the world, she has amassed a networth of over 400 milion dollar and with how often you use her platform, there seems to be no stopping her.",
        imgSrc: "./assets/images/suwoj.jpg",
        choices: ["Susan Wojcicki", "Anna Pierce", "Cinday Malcolm-Hornesbey", "Xhu Joung"],
        correct: "Susan Wojcicki-CEO, Youtube",
    },


    {
        question: "Alongside Mark she is more than just a face at this corporation as she runs the operations for this social media jauggernaut.",
        imgSrc: "./assets/images/shesan.jpg",
        choices: ["Eva Mendez","Chloe Green","Sheryl Sandberg", "Stacey Sandler"],
            correct : "Sheryl Sandberg-COO, Facebook",
},
    {
        question: "As the first black woman to become the CEO of a Fortune 500 company, you know a lot of young black girls look up to her.",
        imgSrc: "./assets/images/ursbur.jpg",
        choices: ["Yana Dukov", "Ursula Burns","Stella Jean-Baptiste","Sandra Burnside-Pimlico", "Ursula Burns–Chair-CEO, Xerox"],
},
    {
        question: "This self-made billionaire has a net worth of over 2.6 billion dollars. Her EHR/EMR software is used by hospitals all over the world ",
        imgSrc: "./assets/images/judfau.jpg",
        choices: ["Tori Oliver", "Milly Xi-Harris, Amy Winters","Judy Faulkner"],
            correct : "Judy Faulkner-CEO, Epic",
},

    {
        question: "As the CFO of this major corporations, one of the wealthiest men in the world would not be able to count his bills without her.",
        imgSrc: "./assets/images/amhoo.jpg",
        choices: ["Megan Harrison", "Angelica Cortez", "Amy Woods", "Vivienne Westwood"],
            correct : "Amy Hood-CFO, Microsoft",
},

    {
        question: "As of 2014, she was ranked as the highest paid female CEO in the world. With a background in law, there is no stopping this woman",
        imgSrc: "./assets/images/safcat.jpg",
        choices: ["Safra Catz", "Meghan Markle","Lisa Bllomberg","Irena Korzel"],
            correct : "Safra Catz-Co-CEO, Oracle",
},

    {
        question: "With a sibling who is also a CEO, it is no wonder that this powerful woman is a the helm of a genomics and biotechnology company.",
        imgSrc: "./assets/images/annwoj.jpg",
        choices: ["Anne Catz-Wosniack", "Anne Wojcicki","Anne Whitman ","Anne Burns"],
            correct : "Anne Wojcicki-Cofounder and CEO, 23andMe",
},

    {
        question: "She worked her way up as a Systems Engineer at the same IT company she now heads. She negotiated a major deal with PricewaterhouseCoopers and is highly respected for her leadership. ",
        imgSrc: "./assets/images/ginrom.jpg",
        choices: ["Gigi Hadid","Marishka St John","Poppy Monte","Ginni Rommetty"],
            correct : "Ginni Rommetty-Chair, President, and CEO, IBM",
},

    {
        question: "She served as President and CEO for a multinational IT company and then ran for governor of California in 2016. She is currently the CEO of Quibi.",
        imgSrc: "./assets/images/megwhi.jpg",
        choices: ["Tish Noble","Nikki Sladden","Meg Whitman","Brenda Mcneel"],
            correct : "Meg Whitman-CEO,QUIBI",
}];
// function displayQuestions(){
//     $("quizquestion")text

}


function check(){
    if (userChoice === correct){
        alert("correct!");
    
    }
    else if userChoice !== correct{
        alert ("incorrect");
    }
}

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

// var rightAnswers = 0;
// var wrongAnswers = 0;
// var unsansweredQuestion = 0;
// var timeLeft = 10;
// var indexQandA = 0;
// var answered = false;
// var correct;
var userChoice;















    // function beginGame() {
    //     $("#start-button").on("click", run);
    //     rightAnswers = 0;
    //     wrongAnswers = 0;
    //     unsansweredQuestion = 0;
    //     loadQandA();
    // }







// functionShowQuestions(questions){
//     var output[];
//     var answers;
//     for (var i=0; i<questions.length; i++){
//         answers=[];
//         for (etter in questions[i].answers){
//             answers.push(
//                 "<label>"
//                 +"input type="radio" name="
//             )
//         }
//     }
// }

// var timeLeft = 1000;
// var downloadTimer = setInterval(function(){
//   document.getElementById("progressBar").value = 10 - timeleft;
//   timeleft -= 1;
//   if(timeleft <= 0)
//     clearInterval(downloadTimer);
// }, 1000);










// // // questions[0].question
// // questions[0].imgSrc
// // questions[0].A
// // questions[0].B
// // questions[0].C
// // questions[0].D
// // questions[0].correct

// let lastQuestionIndex =questions.length- 1;
// let runningQuestionIndex=0;
// let count=0;
// // let timeLeft =1000;
// let timer;
// let score =0;

// function newQuestion(){
//     let q=question[runningQuestionIndex];
//     questionImage.innerHTML ="<img src=" + q.imgSrc + ">";
//     question.innerHTML ="<p>"  + q.question + "</p?";
//     questions[0].A
// A.innerHTML=q.A;
// B.innerHTML=q.B;
// C.innerHTML=q.C;
// D.innerHTML=q.D;
// }


// // start.addEventListener("click",startQuiz);

// // function startQuiz(){
// //     start.style.display = "none";
// //     newQuestion();
// //     quiz.style.display = "block";
// //     showProgress();
// //     showCounter();
// //     TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
// // }



// // function renderProgress(){
// //     for(let  = 0; qIndex <= lastQuestion; qIndex++){
// //         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
// //     }
// // }

// // function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// // 	function showQuestions(questions, quizContainer){
// // 		// code will go here
// // 	}

// // 	function showResults(questions, quizContainer, resultsContainer){
// // 		// code will go here
// // 	}

// // 	// show the questions
// // 	showQuestions(questions, quizContainer);

// // 	// when user clicks submit, show results
// // 	submitButton.onclick = function(){
// // 		showResults(questions, quizContainer, resultsContainer);
// // 	}
// // }
















// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
