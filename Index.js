const quizData = [
    {
        question: "Which team won Super Bowl LV?",
        options: ["Kansas City Chiefs", "Tampa Bay Buccaneers", "Green Bay Packers", "Buffalo Bills"],
        answer: "Tampa Bay Buccaneers"
    },
    {
        question: "Who is the all-time leading rusher in NFL history?",
        options: ["Walter Payton", "Emmitt Smith", "Barry Sanders", "Adrian Peterson"],
        answer: "Emmitt Smith"
    },
    {
        question: "Which team has the most Super Bowl wins?",
        options: ["New England Patriots", "Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"],
        answer: "Pittsburgh Steelers"
    },
    {
        question: "Who was the first overall pick in the 2020 NFL Draft?",
        options: ["Joe Burrow", "Chase Young", "Tua Tagovailoa", "Justin Herbert"],
        answer: "Joe Burrow"
    },
    {
        question: "Which NFL team is known as 'America's Team'?",
        options: ["New England Patriots", "Dallas Cowboys", "Green Bay Packers", "San Francisco 49ers"],
        answer: "Dallas Cowboys"
    },
    {
        question: "Which quarterback has the most career touchdown passes?",
        options: ["Tom Brady", "Drew Brees", "Peyton Manning", "Brett Favre"],
        answer: "Tom Brady"
    },
    {
        question: "Who holds the record for the most rushing touchdowns in a single season?",
        options: ["Emmitt Smith", "LaDainian Tomlinson", "Shaun Alexander", "Priest Holmes"],
        answer: "LaDainian Tomlinson"
    },
    {
        question: "Which team has the most playoff appearances?",
        options: ["Dallas Cowboys", "Green Bay Packers", "Pittsburgh Steelers", "New England Patriots"],
        answer: "Dallas Cowboys"
    },
    {
        question: "Which player has the most career receptions?",
        options: ["Jerry Rice", "Larry Fitzgerald", "Tony Gonzalez", "Terrell Owens"],
        answer: "Jerry Rice"
    },
    {
        question: "Who was the MVP of Super Bowl 50?",
        options: ["Peyton Manning", "Von Miller", "Cam Newton", "C.J. Anderson"],
        answer: "Von Miller"
    }
];

// These are global variables.
// These are variables defined outside the functions.
// This means they can be used by anything (any line of code after this or any function)
let currentQuestionIndex = 0;
let score = 0;


const selectOption = (selectedAnswer) => {
    const currentQuestion = quizData[currentQuestionIndex]
    const trueAnswer = currentQuestion.answer
    if (selectedAnswer === trueAnswer) {
        score += 10
    } else {
        alert(`Incorrect! The correct answer is ${trueAnswer}`)
    }

    // Move forward to next question
    const scoreContainer = document.getElementById("score")
    scoreContainer.innerText = `Score: ${score}`

    currentQuestionIndex += 1;
    if (currentQuestionIndex < 10) {
        displayQuestion()
    } else {
        scoreContainer.style.display.none
        const questionContainer = document.getElementById("question-container")
        questionContainer.style.display = 'none'
        const resultContainer = document.getElementById("results-container")
        resultContainer.style.display = 'flex'
    }
}



const displayQuestion = () => {

    // Populate the question 
    const questionElement = document.getElementById("question")
    const currentQuestion = quizData[currentQuestionIndex]
    questionElement.innerText = currentQuestion.question

    // Populate the options. 4 for each question
    // Add a click event listener as well
    const optionsElement = document.getElementById("options")
    optionsElement.innerHTML = ``
    const currOptions = currentQuestion.options
    for (let i = 0; i < currOptions.length; i++) {
        const optionElement = document.createElement("div")
        optionElement.classList.add("option")
        optionElement.innerText = currOptions[i]
        optionElement.addEventListener("click", () => {
            // Call the function that handles the selected option
            selectOption(currOptions[i])
        })
        optionsElement.appendChild(optionElement)
    }
}

document.addEventListener("DOMContentLoaded", async() => {
    displayQuestion()
})