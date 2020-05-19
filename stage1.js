var control = (function () {

    var handleMoveUp = function (clientY, offset, flag) {
        
        if ((clientY + offset) <= 200) {
            flag.style.top = (clientY + offset) + 'px';
            console.log(flag.style.top);
        }
        if ((clientY + offset) < 0) {
            flag.style.top = 0 + 'px';
        }
    }
    var handleMoveDown = function (clientY, offset) {
        if ((clientY + offset) >= 200) {
            flag.offsetTop = (clientY + offset) + 'px';
        }
        if ((clientY + offset) < 200) {
            flag.offsetTop = 200 + 'px';
        }
    }
    var handleAuto = function (flag) {

    }
    var handleMoveFlag = function () {
        document.getElementById("move").style.cursor = "pointer";
        var offset = 0;
        var flag = document.getElementById("move");
        var isDown = false;
        var lastOffset = 0;
        flag.addEventListener('mousedown', function (e) {
            isDown = true;
            offset = flag.offsetTop - e.clientY;
        }, true);
        flag.addEventListener('mouseup', function (e) {
            isDown = false;
            if (flag.offsetTop >= 170 && flag.offsetTop <= 200) {
                flag.animate([
                    { top: flag.offsetTop + "px" },
                    { top: 200 + "px" }
                ], {
                    duration: 500,
                    fill: "both",
                })
            }
            if (flag.offsetTop <= 170 && flag.offsetTop > 0) {
                flag.animate([
                    { top: flag.offsetTop + "px" },
                    { top: 0 + "px" }
                ], {
                    duration: 500,
                    fill: "both",
                })
            }
        }, true);
        document.addEventListener('mousemove', function (e) {
            event.preventDefault();
            if (isDown) {
                // if (type ==="up"){
                check = handleMoveUp(e.clientY, offset, flag);
                // }    
                // handleMoveDown(e.clientY,offset,flag);
            }

        }, true);
    }
    var handleStart = function () {
        var btn_play = document.querySelector(".btn_play");
        btn_play.parentNode.removeChild(btn_play);
        document.getElementById("scene").style.filter = "none";
        document.querySelector(".arrow__inner__line").style.display = "block";
        document.querySelector(".arrow__inner__pointer").style.display = "block";
        setTimeout(handleMoveFlag, 1500);
    }
    var setUpEventListener = function () {
        document.querySelector(".btn_play").addEventListener("click", handleStart);
    }
    return {
        init: function () {
            setUpEventListener();
        }

    }
})()
control.init();