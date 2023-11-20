$(document).ready(function() {

    // scroll event handler to animate img in the main page
    $(window).scroll(checkImg1);
    checkImg1();

    function checkImg1() {
        if ($(window).scrollTop() > 300) {
            $('.first-animate').addClass('show');
        } else {
            $('.first-animate').removeClass('show');
        }
    }

    $(window).scroll(checkImg2);
    checkImg2();

    function checkImg2() {
        if ($(window).scrollTop() > 700) {
            $('.second-animate').addClass('show');
        } else {
            $('.second-animate').removeClass('show');
        }
    }

    $(window).scroll(checkImg3);
    checkImg3();

    function checkImg3() {
        if ($(window).scrollTop() > 1100) {
            $('.third-animate').addClass('show');
        } else {
            $('.third-animate').removeClass('show');
        }
    }

    
    $(window).scroll(checkImg4);
    checkImg4();

    function checkImg4() {
        if ($(window).scrollTop() > 1500) {
            $('.fourth-animate').addClass('show');
        } else {
            $('.fourth-animate').removeClass('show');
        }
    }

    // submit event handler used in contact form page
    var contactForm = $('#myForm');
    var myAlert = $('#myAlert');

    contactForm.submit(function (event) {
        event.preventDefault();
        myAlert.removeClass('hide');
    })


    // click, mouseover, mouseout eventhandlers used in quiz section
    var checkAnswersButton = $('#checkAnswers');

    const answersArray = ['A', 'A', 'A', 'B', 'B', 'C', 'A', 'D', 'C', 'C'];

    var modal = $("#myModal");
    var span = $(".close");

    var audio = new Audio("audio.mp3");

    checkAnswersButton.click(function () {
        // Count correct answers
        let correctAnswers = 0;

        for(let i=0;i<10;i++) {
            if ($(`input[name="q${i+1}"]:checked`).val() === answersArray[i]) {
                correctAnswers++;
            }
        }

        // Display the result
        $('#result').text('You got ' + correctAnswers + ' out of 10 questions correct!');

        audio.onended = function() {
            // Sound has finished playing, now show the alert
            modal.css("display", "block");
        };
        audio.play();
    });

    span.click(function() {
        modal.css("display", "none");
    });

    $(window).click(function(event) {
        if (event.target.isSameNode(modal[0])) {
            modal.css("display", "none");
        }
    });

    checkAnswersButton.mouseover(function() {
        $(this).css("background-color", "#9DB2BF");
    });

    checkAnswersButton.mouseout(function() {
        $(this).css("background-color", ""); // Remove the background-color property to revert to initial CSS
    });
});