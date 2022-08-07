
const quizData = [
    {
        quiz_question: "What is the capital of Norway?",
        a_quiz: "Oslo",
        b_quiz: "Stockholm",
        c_quiz: "Copenhagen",
        d_quiz: "Bergen",
        correct: "a_quiz"
    },
    {
        quiz_question: "Which countries are Norway connected to?",
        a_quiz: "Sweden and Russia",
        b_quiz: "Denmark, Russia and Iceland",
        c_quiz: "Sweden, Russia and Finland",
        d_quiz: "Sweden and Denmark",
        correct: "c_quiz"
    },
    {
        quiz_question: "What is the name of the current Norwegian king?",
        a_quiz: "Rasmus",
        b_quiz: "Sverre",
        c_quiz: "Haakon",
        d_quiz: "Harald",
        correct: "d_quiz"
    },
    {
        quiz_question: "What is 'lusekofte'?",
        a_quiz: "It's Norwegian sausage",
        b_quiz: "A Norwegian outfit, it's like a sweater.",
        c_quiz: "It's a Norwegian mountain goat",
        d_quiz: "Obviously is not a real thing/name",
        correct: "b_quiz"
    }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.quiz-answer')
const questionEl = document.getElementById('quiz-question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('quiz-submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz () {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.quiz_question
    a_text.innerText = currentQuizData.a_quiz
    b_text.innerText = currentQuizData.b_quiz
    c_text.innerText = currentQuizData.c_quiz
    d_text.innerText = currentQuizData.d_quiz
}

function deselectAnswers () {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected () {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        
    } else {
        quiz.innerHTML = `
        <h2 class = "result-field">You answered correctly at ${score}/${quizData.length} questions!</h2>
        <button class="reload" onclick = "location.reload()">Reload</button>
        `
    }
    }
})