$(document).ready(function() {


    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var index = 0;
    var timer;
    var counter = 0;



    $("#start-button").click(startGame);

    function startGame() {
        console.log('started');
        $("#start-button").hide();
        $("#question_container").show();
        showQuestion()

        //$(#question_container).
    }

    var questions = [{
            Question: "Where does the show take place?",
            Answer: ["Springfield", "Newyork", "Pawnee", "Quahog"],
            right: 2
        },
        {
            Question: "What was the town's mini-horse called?",
            Answer: ["Li'l Sebastian", "Mini Man", "Tiny Tony The Pony", "Stuart Little"],
            right: 0
        },
        {
            Question: "Why did Ann Perkins demand that the pit near her house get filled in?",
            Answer: ["She fell in and got a concussion", "Her boyfriend, Andy, fell in and broke both his legs", "It was ugly", "She wanted it out of her backyard so she could host a barbecue"],
            right: 1
        },
        {
            Question: "What was the name of Leslie's boss?",
            Answer: ["Tom Haverford", "Mark Brendanawicz", "Jerry Gergich", "Ron Swanson"],
            right: 3
        },
        {
            Question: "Who was Leslie's political crush?",
            Answer: ["Barack Obama", "Bill Clinton", "Joe Biden", "George W. Bush"],
            right: 2

        }

    ]


    function showQuestion() {

        $("#question").text(questions[index].Question);
        $("#answer-buttons").empty();
        for (var i = 0; i < questions[index].Answer.length; i++) {
            $("#answer-buttons").append(`<button class="btn res" data-q=${index} data-res=${i}>${questions[index].Answer[i]}</button>`)

        }
        counter = 30
        timer = setInterval(countdown, 1000);

        $(".res").on("click", function() {
            console.log(this)
            var q = $(this).attr("data-q")
            var r = $(this).attr("data-res")

            // verify if the response is equal to the value of r for the question q
            if (questions[q].right === parseInt(r)) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
            goNext()
        })
    }

    function countdown() {
        counter--
        $("#timer").text(counter)
        if (counter === 0) {
            unansweredQuestions++;
            goNext()
        }
    }

    function goNext() {
        clearInterval(timer)
        index++
        if (index < questions.length) {
            console.log("go next", correctAnswers, incorrectAnswers);
            showQuestion();
        } else {
            results()
        }

    }

    function results() {
        console.log("game over")
        $("#question_container").hide();
        //$("#results").text('<h3>Thank you for playing</h3>')
        $("#results").append("correct answers = " + correctAnswers + "<div>" + " incorrect answers = " + incorrectAnswers + "<div>" + "unanswered questions = " + unansweredQuestions);
        // $("#results").html(");
        //$("#results").html("unanswered questions = " + unansweredQuestions);


    }

})