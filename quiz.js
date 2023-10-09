// Define an array of quiz questions

const quizQuestions = [
    {
      question: "How many seconds does Gojo ask to have with Itadori's \"Sukuna\" form?",
      options: ["15", "20", "30", "10"],
      correctAnswer: "10"
    },
    {
      question: "What is the Main Character?",
      options: ["Megumi Fugiruro", "Saturo Gojo", "Yuuji Itadori", "Ryuomen Sukuna"],
      correctAnswer: "Yuuji Itadori"
    },
    {
      question: "What type of weapon does Nobara use to exorcise curses?",
      options: ["Hammer", "Sword", "Spear", "Scissor"],
      correctAnswer: "Hammer"
    },
    {
      question: "What task taught Itadori to control his emotions while using cursed energy to keep a doll asleep?",
      options: ["Listening to music", "Fight training", "Watching movies", "Paying Game "],
      correctAnswer: "Watching movies"
    },
    {
      question: "Where did Itadori and Nanami investigate the massacre by Mahito?",
      options: ["A Mall", "A Movie Theater", "A Grocery Store", "A Hospital"],
      correctAnswer: "A Movie Theater"
    },
    {
      question: "What question does Aoi Todo ask both Yuji and Megumi to see if they're boring?",
      options: ["The type of food he likes", "The type of music he likes", "The type of women he likes", "The type of men he likes"],
      correctAnswer: "The type of women he likes"
    }

  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;

  //write a name
  let NameOfuser = prompt("What is your name?");
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>${NameOfuser} Loser</h2>
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
      if(scorePercentage===100){
       const questionContainer = document.getElementById("question-container");
       questionContainer.innerHTML = `
      <h2>Winner ${NameOfuser}</h2>
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
              `; 
       } 
  }   
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);
 
    