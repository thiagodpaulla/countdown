function updateTimer(deadline) {

    var time = deadline - new Date();
    return {
        'days': Math.floor(time / (1000 * 60 * 60 * 24)),
        'hours': Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        'total': time
    };
}


function animateClock(span) {
    span.className = "turn";
    setTimeout(function () {
        span.className = "";
    }, 200);
}

function fillZero(num){
    return ('0' + num).slice(-2)
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function () {
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML = '<span>' + fillZero(timer.days) + '</span>'
            + '<span>' + fillZero(timer.hours) + '</span>'
            + '<span>' + fillZero(timer.minutes) + '</span>'
            + '<span>' + fillZero(timer.seconds) + '</span>';


        var spans = clock.getElementsByTagName("span");
        animateClock(spans[3]);
        if (timer.seconds == 59) animateClock(spans[2]);
        if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
        if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);


        if (timer.total < 1) {
            clearInterval(timerInterval);
            clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
        }
    }, 1000);
   
}

window.onload = function () {
    var deadline = new Date("January 1, 2021 00:00:00");
    startTimer("clock", deadline);
};