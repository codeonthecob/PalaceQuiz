var questions = [{
    question: "Which King ruled from this palace the longest?",
    choices: ["Charles II", "Louis XIV", "Henry IV", "William III"],
    correctAnswer: 1
}, {
    question: "What is the name of this palace?",
    choices: ["St. James", "Windsor", "Buckingham", "Kensington"],
    correctAnswer: 2
}, {
    question: "Who is the current Monarch of this palace?",
    choices: ["Harald V", "Felipe VI", "Margrethe II", "Carl XVI"],
    correctAnswer: 1
}, {
    question: "What is the name of this palace?",
    choices: ["Schonobrunn", "Amalienborg", "Stockholm", "Winter"],
    correctAnswer: 3
}, {
    question: "Where is this palace located?",
    choices: ["Vienna, Austria", "Berlin, Germany", "Paris, France", "Rome, Italy"],
    correctAnswer: 0
}];

$(document).ready(function () {
    var maxQuestions = questions.length;
    var numRight = 0;
    var counter = 0;

    // display first question
    $('#question').text(questions[counter].question);
    $('#ans0').text(questions[counter].choices[0]);
    $('#ans1').text(questions[counter].choices[1]);
    $('#ans2').text(questions[counter].choices[2]);
    $('#ans3').text(questions[counter].choices[3]);
     
    $('button').on('click', function () {
        var answer = ($('input[name="answers"]:checked').val());

        // increment score if right
        if (answer == questions[counter].correctAnswer)
            numRight++;

        counter++;

        if (counter >= maxQuestions) {
            document.write("Done! Great Job! You got ", numRight, " out of ", maxQuestions);
            return;
        }

        // Show next question
        $('#question').text(questions[counter].question);
        $('#ans0').text(questions[counter].choices[0]);
        $('#ans1').text(questions[counter].choices[1]);
        $('#ans2').text(questions[counter].choices[2]);
        $('#ans3').text(questions[counter].choices[3]);

    });
});