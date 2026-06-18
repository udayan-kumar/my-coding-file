const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            {
                text: "shark", correct: false
            },
             {
                text: "blue whale", correct: true
            },
             {
                text: "elephant", correct: false
            },
             {
                text: "giraffe", correct: false
            },
        ]
    },

     {
        question: "which is the smallest country in the world?",
        answers: [
            {
                text: "vatican city", correct: true
            },
             {
                text: "bhutan", correct: false
            },
             {
                text: "nepal", correct: false
            },
             {
                text: "pakistan", correct: false
            },
        ]
    },

     {
        question: "which is the smallest continent in the world?",
        answers: [
            {
                text: "asia", correct: false
            },
             {
                text: "australia", correct: true
            },
             {
                text: "arctic", correct: false
            },
             {
                text: "africa", correct: false
            },
        ]
    },

     {
        question: "which is the largest desert in the world?",
        answers: [
            {
                text: "kalahari", correct: false
            },
             {
                text: "gobi", correct: false
            },
             {
                text: "sahara", correct: false
            },
             {
                text: "antratica", correct: true
            },
        ]
    },

     {
        question: "which is the largest ocean in the world?",
        answers: [
            {
                text: "indian ocean", correct: false
            },
             {
                text: "atlantic ocean", correct: false
            },
             {
                text: "arcitic ocean", correct: false
            },
             {
                text: "pacific ocean", correct: true
            },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.coreect){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })

}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.form(answerButtons.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()  => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startquize();