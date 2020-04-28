let currentDroppable = null;
let bar = holder_1.querySelector('.bar1');
let isPicture = false;
let endTask = false;
let count = 1;
var sceneNumber=0;

bar.onmousedown = function (event) {

    let shiftY = event.clientY - bar.getBoundingClientRect().top;

    bar.style.position = 'absolute';

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function moveAt(clientY) {
        if (clientY - shiftY - 246 < 0)
            if (document.getElementById("movethebarup").hidden == false) {
                bar.style.top = 170 + 'px';

                onMouseUp();

                document.getElementById("holder_2").append(bar);

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
                bar.style.top = 340 + 'px';
                onMouseUp();

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

                bar.style.visibility = "hidden";

                endTask = true;

                return
            }
        bar.style.top = clientY - shiftY - 248 + 'px';

    }
    function showPicture(elem) {

        var image_1 = document.createElement("div");

        image_1.className = 'image_1';

        var urlI = 'url("/Images/51_' + count + '.png")';

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
         
            onMouseUp();

            var x=document.getElementById("task_1").querySelectorAll(".droppable1");

            for(var i=0 ; i<x.length; i++){
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
    
            setTimeout(function(){
                document.getElementById("task_1").style.display = "none";

                document.getElementById("task_2").style.display = "block";

                bar = holder_1_2.querySelector('.bar2');

                console.log(bar);
            },3000);
            
            return;
        }

        bar.style.visibility = "hidden";

        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);

        bar.style.visibility = "visible";

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable1');

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

        //elem.style.backgroundImage = "url('./Images/44.png')";
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

bar.ondragstart = function () {
    return false;
};
function playSound(){
    if (!document.getElementById("movethebarup").hidden){
        var x = document.getElementById("up");
        x.play();
    }
    else{
        var x = document.getElementById("down");
        x.play();
    }
}