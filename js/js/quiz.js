document.addEventListener('DOMContentLoaded', () => {
    const topicId = parseInt(getUrlParameter('topic'));
    const quizData = getQuizData();
    const topic = quizData.find(t => t.id === topicId);
    
    if (!topic) {
        window.location.href = 'topics.html';
        return;
    }
    
    // DOM elements
    const quizTitle = document.getElementById('quizTitle');
    const questionCount = document.getElementById('questionCount');
    const progressBar = document.getElementById('progressBar');
    const scoreElement = document.getElementById('score');
    const timerElement = document.getElementById('timer');
    const questionContainer = document.getElementById('questionContainer');
    const nextButton = document.getElementById('nextButton');
    
    // Quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 0;
    let timer;
    let selectedAnswer = null;
    let showResult = false;
    let startTime = null;
    let totalTime = 0;
    
    // Initialize quiz
    quizTitle.textContent = `${topic.title} Quiz`;
    loadQuestion();
    
    function loadQuestion() {
        const question = topic.questions[currentQuestionIndex];
        timeLeft = question.timeLimit;
        selectedAnswer = null;
        showResult = false;
        startTime = new Date();
        
        // Update UI
        questionCount.textContent = `${currentQuestionIndex + 1}/${topic.questions.length}`;
        progressBar.style.width = `${((currentQuestionIndex + 1) / topic.questions.length) * 100}%`;
        scoreElement.textContent = score;
        updateTimerDisplay();
        nextButton.style.display = 'none';
        
        // Create question HTML
        questionContainer.innerHTML = `
            <h3 class="question-text">${question.text}</h3>
            <div class="options-container" id="optionsContainer"></div>
        `;
        
        const optionsContainer = document.getElementById('optionsContainer');
        
        // Add options
        question.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option-button';
            optionButton.textContent = option.text;
            optionButton.addEventListener('click', () => selectAnswer(option.id));
            optionsContainer.appendChild(optionButton);
        });
        
        // Start timer
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
    }
    
    function updateTimer() {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!showResult) {
                showResult = true;
                highlightCorrectAnswer();
                nextButton.style.display = 'block';
            }
        }
    }
    
    function updateTimerDisplay() {
        let color = '#4CAF50'; // Green
        if (timeLeft <= 15) color = '#FFC107'; // Orange
        if (timeLeft <= 5) color = '#F44336'; // Red
        
        timerElement.textContent = `${timeLeft}s`;
        timerElement.style.color = color;
    }
    
    function selectAnswer(answerId) {
        if (showResult) return;
        
        selectedAnswer = answerId;
        showResult = true;
        clearInterval(timer);
        
        // Calculate time taken
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000;
        totalTime += timeTaken;
        
        // Highlight selected answer
        const options = document.querySelectorAll('.option-button');
        options.forEach(option => {
            option.classList.remove('selected');
        });
        
        const selectedOption = Array.from(options).find(opt => 
            opt.textContent === topic.questions[currentQuestionIndex].options.find(o => o.id === answerId)?.text
        );
        
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // Check if answer is correct
        const question = topic.questions[currentQuestionIndex];
        if (answerId === question.correctAnswer) {
            score++;
            scoreElement.textContent = score;
        }
        
        highlightCorrectAnswer();
        nextButton.style.display = 'block';
        
        // Add explanation if available
        if (question.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation';
            explanationDiv.textContent = question.explanation;
            questionContainer.appendChild(explanationDiv);
        }
    }
    
    function highlightCorrectAnswer() {
        const question = topic.questions[currentQuestionIndex];
        const options = document.querySelectorAll('.option-button');
        
        options.forEach(option => {
            const optionText = option.textContent;
            const optionData = question.options.find(o => o.text === optionText);
            
            if (optionData) {
                if (optionData.id === question.correctAnswer) {
                    option.classList.add('correct');
                } else if (optionData.id === selectedAnswer) {
                    option.classList.add('incorrect');
                }
            }
        });
    }
    
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < topic.questions.length) {
            loadQuestion();
        } else {
            // Quiz completed
            const avgTimePerQuestion = totalTime / topic.questions.length;
            const isFast = avgTimePerQuestion < 15; // Less than 15s per question
            
            window.location.href = `score.html?score=${score}&total=${topic.questions.length}&topic=${topic.id}&fast=${isFast}`;
        }
    });
});