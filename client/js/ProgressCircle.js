function startTimer(duration) {

    var timeout = setTimeout(function () {
        var time = duration;
        var i = 1;
        var k = ((i / duration) * 100);
        var l = 100 - k;
        i++;
        document.getElementById("c1").style.strokeDasharray = [l, k];
        document.getElementById("c2").style.strokeDasharray = [k, l];
        document.getElementById("c1").style.strokeDashoffset = l;
        document.getElementById("counterText").innerHTML = duration;
        var interval = setInterval(function () {
            if (i > time) {
                clearInterval(interval);
                clearTimeout(timeout);
                return;
            }
            k = ((i / duration) * 100);
            l = 100 - k;
            document.getElementById("c1").style.strokeDasharray = [l, k];
            document.getElementById("c2").style.strokeDasharray = [k, l];
            document.getElementById("c1").style.strokeDashoffset = l;
            console.log(k, l);
            document.getElementById("counterText").innerHTML = (duration + 1) - i;
            i++;
        }, 1000);
    }, 0);
}

startTimer(60);