const quizData = [
    {
        question: "What is the capital of Norway?",
        a: "Oslo",
        b: "Stockholm",
        c: "Copenhagen",
        d: "Bergen",
        correct: "a"
    },
    {
        question: "Which countries are Norway connected to?",
        a: "Sweden and Russia",
        b: "Denmark, Russia and Iceland",
        c: "Sweden, Russia and Finland",
        d: "Sweden and Denmark",
        correct: "c"
    },
    {
        question: "What is the name of the current Norwegian king?",
        a: "Rasmus",
        b: "Sverre",
        c: "Haakon",
        d: "Harald",
        correct: "d"
    },
    {
        question: "What is 'lusekofte'?",
        a: "It's Norwegian sausage",
        b: "A Norwegian outfit, it's like a sweater.",
        c: "It's a Norwegian mountain goat",
        d: "Obviously is not a real thing/name",
        correct: "b"
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.quiz-answer')
const questionEl = document.getElementById('quiz-question')
const aText = document.getElementById('a__text')
const bText = document.getElementById('b__text')
const cText = document.getElementById('c__text')
const dText = document.getElementById('d__text')
const quizSubmit = document.getElementById('quiz__submit')

let currentQuiz = 0
let quizScore = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d

}

function deselectAnswers () {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let quizAnswer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            quizAnswer = answerEl.id
        }
    }) 
        return quizAnswer
}

quizSubmit.addEventListener('click', () => {
     let quizAnswer = getSelected()
    
    if (quizAnswer) {
        if (quizAnswer == quizData[currentQuiz].correct) {
            quizScore++
            
            
        }
        
    } currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2 class = "result-field">You answered ${quizScore}/${quizData.length} questions correctly</h2>

        <button class = "reload" onclick = "location.reload()">Reload</button>
        `
    }
}
)