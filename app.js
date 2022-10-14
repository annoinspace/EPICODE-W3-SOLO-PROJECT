const question = document.querySelector("#question")
const choices = document.querySelectorAll(".choice-text")
let choicesArr = Array.from(choices)
console.log(choicesArr)
const questionNumber = document.querySelector("#progress")

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: "What is the capital city of France?",
    choice1: "London",
    choice2: "Paris",
    choice3: "Monaco",
    choice4: "Brussels",
    answer: 2
  },
  {
    question: "What is the capital city of Portugal?",
    choice1: "Busan",
    choice2: "Dubai",
    choice3: "Lisbon",
    choice4: "Brussels",
    answer: 3
  },
  {
    question: "What is the capital city of South-Korea?",
    choice1: "Seoul",
    choice2: "Karachi",
    choice3: "Oslo",
    choice4: "Bali",
    answer: 1
  },
  {
    question: "What is the capital city of Chile?",
    choice1: "Havana",
    choice2: "Paris",
    choice3: "Monaco",
    choice4: "Santiago",
    answer: 4
  }
]

const maxQuestions = 4

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  questionCounter++
  questionNumber.innerText = `Question ${questionCounter} of ${maxQuestions}`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(() => {
    const number = choices[i]
    choices.innerHTML = currentQuestion["choices + number"]
  })
  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = event.target
    const selectedAnswer = selectedChoice.dataset["number"]

    let classToApply =
      selectedAnswer === currentQuestion.answer ? "correct" : "incorrect"

    selectedChoice.parentElement.classList.add(classToApply)
  })
})

incrementScore = (num) => {
  score += num
  scoretext.innerText = score
}

startGame()
