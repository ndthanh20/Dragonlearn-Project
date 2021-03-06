let currentDroppable = null;
let isPicture = false;
let endTask = false;
let count = 1;
var sceneNumber = 0;
var task = 0, bar;
var currHolder;
var numberBall = 2;

var control = (function () {
    function moveBar() {
        let shiftY = event.clientY - bar.getBoundingClientRect().top;
        switch (task) {
            case 1:
                var square = ".square";
                break;
            case 2:
                var square = ".square2";
                break;
            case 3:
                var square = ".square3";
                break;
            default:
                break;
        }
        //bar.style.position = 'absolute';
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function moveAt(clientY) {
            if (clientY - shiftY - 246 < 0)
                if (document.getElementById("movethebarup").hidden == false) {
                    bar.style.top = 170 + 'px';
                    onMouseUp();

                    currHolder.nextElementSibling.append(bar);

                    currHolder = currHolder.nextElementSibling;

                    showPictureUp(currentDroppable);

                    isPicture = true;

                    if (!document.getElementById("movethebarup").hidden) {
                        document.getElementById("movethebarup").hidden = true;
                        document.getElementById("movethebardown").hidden = false;
                    }
                    else {
                        document.getElementById("movethebardown").hidden = true;
                        document.getElementById("movethebarup").hidden = false;
                    }
                    return;
                }
                else {
                    bar.style.top = 0 + 'px';
                    return;
                }
            if (clientY - shiftY - 248 > 340)
                if (document.getElementById("movethebardown").hidden == false) {
                    bar.style.top = 170 + 'px';
                    onMouseUp();

                    if (currHolder.nextElementSibling) {
                        currHolder.nextElementSibling.append(bar);

                        currHolder = currHolder.nextElementSibling;
                    }
                    showPictureBelow(currentDroppable);

                    isPicture = true;

                    if (!document.getElementById("movethebarup").hidden) {
                        document.getElementById("movethebarup").hidden = true;
                        document.getElementById("movethebardown").hidden = false;
                    }
                    else {
                        document.getElementById("movethebardown").hidden = true;
                        document.getElementById("movethebarup").hidden = false;
                    }
                    if (count == 3 && task == 1 || count == 7 && task == 2 || count == 11 && task == 3) {
                        endTask = true;
                        bar.style.visibility = "hidden";
                    }
                    return
                }
                else {
                    bar.style.top = 340 + 'px';
                    return;
                }
            bar.style.top = clientY - shiftY - 248 + 'px';
        }
        function showPictureUp(elem) {
            var image_1 = document.createElement("div");
            switch (task) {
                case 1:
                    var urlI = 'url("./Images/51_' + count + '.png")';
                    image_1.className = 'up';
                    image_1.style.width = 180 + 'px';
                    image_1.style.height = 180 + 'px';
                    break;
                case 2:
                    var urlI = 'url("./Images/53_' + count + '.png")';
                    image_1.className = 'up';
                    image_1.style.width = 120 + 'px';
                    image_1.style.height = 180 + 'px';
                    break;
                case 3:
                    var urlI = 'url("./Images/57_' + count + '.png")';
                    image_1.className = 'up';
                    image_1.style.width = 72 + 'px';
                    image_1.style.height = 180 + 'px';
                    break;
                default:
                    break;
            }
            image_1.style.backgroundImage = urlI;

            count += 1;

            elem.append(image_1);

            elem.style.visibility = "hidden";

            image_1.style.visibility = "visible";
        }
        function showPictureBelow(elem) {
            var image_1 = document.createElement("div");
            switch (task) {
                case 1:
                    var urlI = 'url("./Images/51_' + count + '.png")';
                    image_1.className = 'below';
                    image_1.style.width = 180 + 'px';
                    image_1.style.height = 180 + 'px';
                    break;
                case 2:
                    var urlI = 'url("./Images/53_' + count + '.png")';
                    image_1.className = 'below';
                    image_1.style.width = 120 + 'px';
                    image_1.style.height = 180 + 'px';
                    break;
                case 3:
                    var urlI = 'url("./Images/57_' + count + '.png")';
                    image_1.className = 'below';
                    image_1.style.width = 72 + 'px';
                    image_1.style.height = 180 + 'px';
                default:
                    break;
            }
            image_1.style.backgroundImage = urlI;
            image_1.style.visibility = "visible";

            count += 1;

            elem.append(image_1);
            elem.style.visibility = "hidden";
        }
        function moveBall() {
            var ballStr = "ball" + numberBall;
            var ball = document.getElementById(ballStr);
            var ballAni = "move" + ballStr;
            console.log(ballAni);
            ball.style.animationName = ballAni;
            ball.style.animationDuration = "1.5s";
            ball.style.animationFillMode = "forwards";
            numberBall--;
        }
        function onMouseMove(event) {
            moveAt(event.clientY);
            if (endTask) {
                switch (task) {
                    case 1:
                        var x = document.getElementById("task_1").querySelectorAll(square);
                        break;
                    case 2:
                        var x = document.getElementById("task_2").querySelectorAll(square);
                        break;
                    case 3:
                        var x = document.getElementById("task_3").querySelectorAll(square);
                        break;
                    default:
                        break;
                }
                for (var i = 0; i < x.length; i++) {
                    x[i].style.visibility = "hidden";
                }
                var up = document.getElementsByClassName("up");
                for (var i = 0; i < up.length; i++) {
                    up[i].style.animationName = "up";
                    console.log(up[i].style.animationName);
                    up[i].style.animationDuration = "2s";
                    up[i].style.animationFillMode = "both";
                    up[i].style.animationTimingFunction = "ease";
                }
                var below = document.getElementsByClassName("below");
                for (var i = 0; i < below.length; i++) {
                    below[i].style.animationName = "below";
                    below[i].style.animationDuration = "2s";
                    below[i].style.animationFillMode = "both";
                    below[i].style.animationTimingFunction = "ease";
                }
                moveBall();
                setTimeout(function () {
                    switch (task) {
                        case 1:
                            document.getElementById("task_1").style.display = "none";
                            document.getElementById("task_2").style.display = "block";
                            break;
                        case 2:
                            document.getElementById("task_2").style.display = "none";
                            document.getElementById("task_3").style.display = "block";
                            break;
                        case 3:
                            window.location.href = 'completeStage.html';
                            break;
                        default:
                            break;
                    }
                    document.querySelector(".btn_play").style.display = "block";

                    document.getElementById("main").style.filter = "blur(2px)";
                    setUpEventListener();
                }, 3000);
                return;
            }
            bar.style.visibility = "hidden";

            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);

            bar.style.visibility = "visible";

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest(square);

            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;

                if (currentDroppable) {
                    enterDroppable(currentDroppable);
                }
            }
        }
        function enterDroppable(elem) {
            elem.style.background = '#ffffcc';
        }
        function leaveDroppable(elem) {
            if (!isPicture)
                elem.style.backgroundImage = '';
            else
                isPicture = false;
        }
        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };
    //newnewnew
    var handleStart = function () {
        var btn_play = document.querySelector(".btn_play");
        if (btn_play)
            btn_play.style.display = "none";
        document.getElementById("main").style.filter = "none";
    }
    var setUpEventListener = function () {
        task++;
        document.querySelector(".btn_play").addEventListener("click", handleStart);
        switch (task) {
            case 1:
                bar = holder_1.querySelector('.bar1');
                currHolder = document.getElementById("holder_1");
                break;
            case 2:
                bar = holder_1_2.querySelector('.bar2');
                currHolder = document.getElementById("holder_1_2");
                break;
            case 3:
                bar = holder_1_3.querySelector('.bar3');
                currHolder = document.getElementById("holder_1_3");
            default:
                break;
        }
        bar.ondragstart = function () {
            return false;
        };
        endTask = false;
        count = 1;

        bar.addEventListener("mousedown", moveBar);
    }
    return {
        init: function () {
            setUpEventListener();
        }
    }
})()
control.init();
function playSound() {
    if (!document.getElementById("movethebarup").hidden) {
        var x = document.getElementById("up");
        x.play();
    }
    else {
        var x = document.getElementById("down");
        x.play();
    }
}
