const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll(".choice-text"))
const scoretext = document.querySelector("#progress")

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: "what is the capital city of France?",
    choice1: "London",
    choice2: "Paris",
    choice3: "Monaco",
    choice4: "Brussels",
    answer: 2
  },
  {
    question: "what is the capital city of Portugal?",
    choice1: "Busan",
    choice2: "Dubai",
    choice3: "Lisbon",
    choice4: "Brussels",
    answer: 3
  },
  {
    question: "what is the capital city of South-Korea?",
    choice1: "Seoul",
    choice2: "Karachi",
    choice3: "Oslo",
    choice4: "Bali",
    answer: 1
  },
  {
    question: "what is the capital city of Chile?",
    choice1: "Havana",
    choice2: "Paris",
    choice3: "Monaco",
    choice4: "Santiago",
    answer: 4
  }
]
