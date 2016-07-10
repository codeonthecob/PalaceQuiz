var questions = [{
    image: "ans0_img",
    question: "Which King ruled from this palace the longest?",
    choices: ["Charles II", "Louis XIV", "Henry IV", "William III"],
    correctAnswer: 1
}, {
    image: "ans1_img",
    question: "What is the name of this palace?",
    choices: ["St. James", "Windsor", "Buckingham", "Kensington"],
    correctAnswer: 2
}, {
    image: "ans2_img",
    question: "Who is the current Monarch of this palace?",
    choices: ["Harald V", "Felipe VI", "Margrethe II", "Carl XVI"],
    correctAnswer: 1
}, {
    image: "ans3_img",
    question: "What is the name of this palace?",
    choices: ["Schonobrunn", "Amalienborg", "Stockholm", "Winter"],
    correctAnswer: 3
}, {
    image: "ans4_img",
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
    $("#ans0_img_1").addClass(questions[counter].image);
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
            document.write("<div style='max-width: 35em; margin-left: auto; margin-right: auto;text-align: center; font-size:25px; margin-top: 5%; background-color: #E2A838; padding: 20px; '><h1 style='text-align: center;'>Done! Great Job! <br>You got </h1>", numRight, "  out of  ", maxQuestions, "<br>",
                "<a href='#'><button type='Start Over' style='background-color: #5F00E7; color: white; padding: .75em 1em; text-align: center;font-size: 15px; margin: 50px 20px; cursor: pointer; border-radius: 12px; -webkit-transition-duration: 0.4s;  transition-duration: 0.4s;'>Start Over</button></a></div" );
            return;
        }

        // Show next question
        $('#question').text(questions[counter].question);
        $("#ans0_img_1").addClass(questions[counter].image);
        $('#ans0').text(questions[counter].choices[0]);
        $('#ans1').text(questions[counter].choices[1]);
        $('#ans2').text(questions[counter].choices[2]);
        $('#ans3').text(questions[counter].choices[3]);

    });
});