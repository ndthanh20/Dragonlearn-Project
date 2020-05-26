var control = (function () {
    var count = 0;
    var number = 0;
    var numberBall = 4;
    var objCurrent, taskCur, taskNext;
    var setContent = function () {
        console.log(number);
        if (number == 0)
            document.getElementById("mySpan").textContent = "Which way is the bug going?";
        if (number == 1)
            document.getElementById("mySpan").textContent = "Which way is the fly going?"
        if (number == 2)
            document.getElementById("mySpan").textContent = "Which way is the hot air ballon going?"
        if (number == 3)
            document.getElementById("mySpan").textContent = "Which way is the basket going?"
    }
    var setUpObject = function () {
        number++;
        var obj = "obj" + number;
        objCurrent = document.getElementById(obj);
    }
    var showObject = function () {
        if (number != 3)
            objCurrent.style.animationName = "move2";
        else {
            objCurrent.style.animationName = "move1";
        }
    }
    var setUpTask = function () {
        var task = "task" + number;
        taskCur = document.getElementById(task);
        taskCur.style.display = "none";
        task = "task" + (number + 1);
        taskNext = document.getElementById(task);
        taskNext.style.display = "inline-block";
    }
    var handleNext = function () {
        document.getElementById("sprite_1").addEventListener("click", function () {
            document.getElementById("sprite_1").style.display = "none";
            if (count == 0) {
                objCurrent.animate([
                    { bottom: 0 + "px" },
                    { bottom: 200 + "px" }
                ], {
                    duration: 1500,
                    fill: "forwards"
                })
            }
            else {
                objCurrent.animate([
                    { top: 0 + "px" },
                    { top: 200 + "px" }
                ], {
                    duration: 1500,
                    fill: "forwards"
                })
            }
            setTimeout(function () {
                document.getElementById("up").style.display = "block";
                document.querySelector(".btn_OK_up").style.display = "inline-block";
                document.getElementById("down").style.display = "block";
                document.querySelector(".btn_OK_down").style.display = "inline-block";
            }, 1500)

        });
    }
    //Di chuyen qua bong thanh diem sau khi hoan thanh 1 nhiem vu
    var moveBall = function () {
        var ballStr = "ball" + numberBall;
        var ball = document.getElementById(ballStr);
        var ballAni = "move" + ballStr;
        console.log(ballAni);
        ball.style.animationName = ballAni;
        ball.style.animationDuration = "1.5s";
        ball.style.animationFillMode = "forwards";
        numberBall--;
    }
    //Set lai nhiem vu tiep theo
    var setDisplay = function () {
        document.querySelector(".question").style.display = "none";
        if (count == 0) {
            document.querySelector(".down").style.display = "none";
            document.querySelector(".btn_OK_up").style.display = "none";
        }
        else {
            document.querySelector(".up").style.display = "none";
            document.querySelector(".btn_OK_down").style.display = "none";
        }
    }
    //Xu li sau khi an nut Start
    var handleStart = function () {
        var btn_play = document.querySelector(".btn_play");
        if (btn_play)
            btn_play.parentNode.removeChild(btn_play);
        document.getElementById("scene").style.filter = "none";
        setContent();
        document.querySelector(".question").style.display = "block";
        document.getElementById("sprite_1").style.display = "inline";
        setUpObject();
        showObject(objCurrent);
        setTimeout(handleNext(objCurrent), 1500);
    }
    //Xu li sau khi nhan nut Ok Up
    var handleClickOkUp = function () {
        if (count === 0) {
            document.querySelector(".btn_OK_up").style.backgroundColor = "#8fbf82";
            setTimeout(function () {
                setDisplay();
                objCurrent.animate([
                    { bottom: 200 + "px" },
                    { bottom: 400 + "px" }
                ], {
                    duration: 1500,
                    fill: "forwards"
                })
            }, 1000)
            setTimeout(function () {
                count = 1;
                document.querySelector(".up").style.display = "none";
                document.querySelector(".btn_OK_up").style.backgroundColor = "#6ec3e2";
                setUpTask();
                moveBall();
                handleStart();
                showObject(document.getElementById("fly"));
            }, 4000)
        }
        else {
            document.querySelector(".btn_OK_up").style.backgroundColor = "#f46060";
            setTimeout(function () {
                document.querySelector(".btn_OK_up").style.backgroundColor = "#6ec3e2";
            }, 1000)
        }
    }
    //Xu li sau khi nhan nut Ok Down
    var handleClickOkDown = function () {

        if (count === 1) {
            document.querySelector(".btn_OK_down").style.backgroundColor = "#8fbf82";
            setTimeout(function () {

                setDisplay();
                if (number == 2)
                    objCurrent.animate([
                        { top: 200 + "px" },
                        { top: 350 + "px" }
                    ], {
                        duration: 1500,
                        fill: "forwards"
                    })
                else
                    objCurrent.animate([
                        { top: 200 + "px" },
                        { top: 420 + "px" }
                    ], {
                        duration: 1500,
                        fill: "forwards"
                    })
            }, 1000)
            setTimeout(function () {
                if (number == 4) window.location.href = 'completeStage.html';
                count = 0;
                document.querySelector(".down").style.display = "none";
                document.querySelector(".btn_OK_down").style.backgroundColor = "#6ec3e2";
                moveBall();
                setUpTask();
                handleStart();
                showObject(document.getElementById("fly"));
            }, 4000)
        }
        else {
            document.querySelector(".btn_OK_down").style.backgroundColor = "#f46060";
            setTimeout(function () {
                document.querySelector(".btn_OK_down").style.backgroundColor = "#6ec3e2";
            }, 1000)
        }
    }
    var setUpEventListener = function () {
        document.querySelector(".btn_play").addEventListener("click", handleStart);
        document.querySelector(".btn_OK_up").addEventListener("click", handleClickOkUp);
        document.querySelector(".btn_OK_down").addEventListener("click", handleClickOkDown);
    }
    return {
        init: function () {
            setUpEventListener();
        }
    }
})()
control.init();

