document.getElementById('submitBtn').addEventListener('click', function() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const answers = {
        q1: 'C',
        q2: 'B',
        q3: 'B'
    };

    let score = 0;

    for (let i = 1; i <= 3; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const questionDiv = document.querySelector(`.question:nth-of-type(${i})`);

        if (selected) {
            const userAnswer = selected.value;
            const correctAnswer = answers[`q${i}`];

            if (userAnswer === correctAnswer) {
                score++;
                questionDiv.classList.add('correct');
                resultsDiv.innerHTML += `<p>Question ${i}: Correct!</p>`;
            } else {
                questionDiv.classList.add('incorrect');
                resultsDiv.innerHTML += `<p>Question ${i}: Incorrect! The correct answer is ${correctAnswer}.</p>`;
            }
        } else {
            resultsDiv.innerHTML += `<p>Question ${i}: No answer selected.</p>`;
        }
    }

    resultsDiv.innerHTML += `<p>Your score: ${score} out of 3</p>`;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('quizForm').reset();
    document.getElementById('results').innerHTML = '';
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.classList.remove('correct', 'incorrect');
    });
});