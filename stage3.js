let currentDroppable = null;
let isPicture = false;
let endTask = false;
let count = 1;
var sceneNumber = 0;
var task = 0, bar;
var currHolder;

var control = (function () {
    function moveBar() {
        let shiftY = event.clientY - bar.getBoundingClientRect().top;
        switch (task){
            case 1:
                var square = ".square";
                break;
            case 2:
                var square = ".square2";
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

                    console.log(bar);

                    showPicture(currentDroppable);

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

                    if(task!=1){
                        currHolder.nextElementSibling.append(bar);

                        currHolder = currHolder.nextElementSibling;

                        console.log(currHolder);
                    }

                    showPicture(currentDroppable);

                    isPicture = true;

                    if (!document.getElementById("movethebarup").hidden) {
                        document.getElementById("movethebarup").hidden = true;
                        document.getElementById("movethebardown").hidden = false;
                    }
                    else {
                        document.getElementById("movethebardown").hidden = true;
                        document.getElementById("movethebarup").hidden = false;
                    }
                    if(count==3 && task==1 || count==7 && task==2)
                        {
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
        function showPicture(elem) {
            var image_1 = document.createElement("div");
            image_1.className = 'image_1';

            switch(task){
                case 1:
                    var urlI = 'url("./Images/51_' + count + '.png")';
                    break;
                case 2:
                    var urlI = 'url("./Images/53_' + count + '.png")';
                    break;
                default:
                    break;
            }

            image_1.style.backgroundImage = urlI;

            image_1.id = 'sprite_' + count;

            count += 1;

            image_1.style.width = 180 + 'px';

            image_1.style.height = 180 + 'px';

            elem.append(image_1);

            elem.style.visibility = "hidden";

            image_1.style.visibility = "visible";
        }
        function onMouseMove(event) {
            moveAt(event.clientY);
            if (endTask) {
                var x = document.getElementById("task_1").querySelectorAll(square);

                for (var i = 0; i < x.length; i++) {
                    x[i].style.visibility = "hidden";
                }
                document.getElementById("sprite_1").style.animationName = "sprite_1";
                document.getElementById("sprite_1").style.animationDuration = "2s";
                document.getElementById("sprite_1").style.animationFillMode = "both";
                document.getElementById("sprite_1").style.animationTimingFunction = "ease";

                document.getElementById("sprite_2").style.animationName = "sprite_2";
                document.getElementById("sprite_2").style.animationDuration = "2s";
                document.getElementById("sprite_2").style.animationFillMode = "both";
                document.getElementById("sprite_2").style.animationTimingFunction = "ease";

                document.getElementById("bead2").style.animationName = "ball1";
                document.getElementById("bead2").style.animationDelay = "2s";
                document.getElementById("bead2").style.webkitAnimationDuration = "2s";
                document.getElementById("bead2").style.animationTimingFunction = "ease";
                document.getElementById("bead2").style.animationFillMode = "both";

                document.getElementById("holder_1").querySelector("#first").style.visibility = "hiiden";

                setTimeout(function () {
                    document.getElementById("task_1").style.display = "none";

                    document.getElementById("task_2").style.display = "block";

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
            default:
                break;
        }
        bar.ondragstart = function () {
            return false;
        };
        endTask =false;
        count=1;
        
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
