$(document).ready(function() {


    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var index = 0;
    var timer;
    var counter = 0;
    var lastAnswerCorrect;


    function reset() {
        // console.log("In reset")
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        index = 0;
        counter = 0;
        lastAnswerCorrect = 0;

        $(".results").hide();
        $("#start-button").hide();
        $("#question_container").show();
        $("#remaining-time").show();

    }

    $("#start-button").click(startGame);

    function startGame() {
        //console.log("In startGame")
        reset()
        showQuestion()
    }

    var questions = [{
            Question: "Where does the show take place?",
            Answer: ["Springfield", "Newyork", "Pawnee", "Quahog"],
            right: 2,
            image: "assets/images/pawnee.gif"
        },
        {
            Question: "What was the town's mini-horse called?",
            Answer: ["Li'l Sebastian", "Mini Man", "Tiny Tony The Pony", "Stuart Little"],
            right: 0,
            image: "assets/images/lilsebastian.gif"
        },
        {
            Question: "Why did Ann Perkins demand that the pit near her house get filled in?",
            Answer: ["She fell in and got a concussion", "Her boyfriend, Andy, fell in and broke both his legs", "It was ugly", "She wanted it out of her backyard so she could host a barbecue"],
            right: 1,
            image: "assets/images/andy.gif"
        },
        {
            Question: "What was the name of Leslie's boss?",
            Answer: ["Tom Haverford", "Mark Brendanawicz", "Jerry Gergich", "Ron Swanson"],
            right: 3,
            image: "assets/images/ronswanson.gif"
        },
        {
            Question: "Who was Leslie's political crush?",
            Answer: ["Barack Obama", "Bill Clinton", "Joe Biden", "George W. Bush"],
            right: 2,
            image: "assets/images/lesliefangirling.gif"

        }

    ]


    function showQuestion() {
        //console.log("In showQuestion")

        $("#question").text(questions[index].Question);
        $("#answer-buttons").empty();
        for (var i = 0; i < questions[index].Answer.length; i++) {
            $("#answer-buttons").append(`<button class="btn res" data-q=${index} data-res=${i}>${questions[index].Answer[i]}</button>`)

        }
        counter = 30
        timer = setInterval(countdown, 1000);

        $(".res").on("click", function() {
            //console.log(this)
            var q = $(this).attr("data-q")
            var r = $(this).attr("data-res")

            // verify if the response is equal to the value of r for the question q
            if (questions[q].right === parseInt(r)) {
                correctAnswers++;
                lastAnswerCorrect = 1
            } else {
                incorrectAnswers++;
                lastAnswerCorrect = 0
            }
            displayImage();
        })
    }

    function getMsg() {
        if (lastAnswerCorrect == 0) {
            rightIdx = questions[index].right
            return "You are wrong the correct answer is " + questions[index].Answer[rightIdx]
        }
        return "You got it right"
    }

    function displayImage() {
        //console.log("In displayImage")
        msg = "<h2>" + getMsg() + "</h2>\n"
        msg = msg + "<img src=" + questions[index].image + " width='400px'>"
        $("#image_container").html(msg);
        $("#question_container").hide()
        $("#image_container").show()
        setTimeout(myStopFunction, 3000)
    }

    function myStopFunction() {
        // console.log("In myStopFunction")
        $("#question_container").show()
        $("#image_container").hide();
        goNext()
    }

    function countdown() {
        //console.log("In countdown")
        counter--
        $("#timer").text(counter)
        if (counter === 0) {
            unansweredQuestions++;
            goNext();
        }
    }


    function goNext() {
        //console.log("In goNext")
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
        //console.log("In results")

        tR = $(`<button id="startOver">Start Over ?</button>`);
        $(tR).on("click", function() {
            //console.log("Button pushed")

            startGame()
        })
        $("#question_container").hide();
        $("#remaining-time").hide();
        $(".results").empty();
        $(".results").show();
        $(".results").append("correct answers = " + correctAnswers + "<div>" + " incorrect answers = " + incorrectAnswers + "<div>" + "unanswered questions = " + unansweredQuestions);

        $(".results").append(tR);

    }

})