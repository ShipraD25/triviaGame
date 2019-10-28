# triviaGame 
## Summary
This is a Trivia game made using JavaScript for the logic and jQuery to manipulate HTML.

This game shows only one question until the player answers it or their time runs out.

If the player selects the correct answer, correct answers go up and a gif is shown with the message of you're answer is right. After a few seconds, the next question is displayed. This is done without user input.

It's the same for wrong answers and time-outs.

If the player chooses the wrong answer, incorrect answers go up and then the next question is displayed.
On the final screen, it shows the number of correct answers, incorrect answers, number of unanswered questions and an option to restart the game (without reloading the page).



Pseudocode has been put to understand the functionality of code.

## Tech Used
* Html
* css
* javascript
* jquery

## javascript code snippet
```javascript
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
            goNext();

        })
    }
```
       
## Game Preview

![image](https://user-images.githubusercontent.com/54960706/67656757-f7e12b00-f911-11e9-92b9-0e6c1cb3bf21.png)




