let currentDroppable = null;
let bar = holder_1.querySelector('.bar');

bar.onmousedown = function (event) {

    let shiftY = event.clientY - bar.getBoundingClientRect().top;


    bar.style.position = 'absolute';

    bar.style.zIndex = 1;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function moveAt(clientY) {

        

        if (clientY - shiftY - 246 < 0) {
            bar.style.top = 170 + 'px';
            onMouseUp();

            document.getElementById("holder_2").append(bar);

            //bar.style.top = 170 + 'px';
            showPicture(currentDroppable);
            
            return;
        }
        if (clientY - shiftY - 248 > 340) {
            bar.style.top = 340 + 'px';
            return
        }
        bar.style.top = clientY - shiftY - 248 + 'px';

        console.log(bar.style.top);


        if (bar.style.top == '0px') {
     
        }

    }

    function onMouseMove(event) {



        moveAt(event.clientY);



        bar.style.visibility = "hidden";

        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);


        bar.style.visibility = "visible";

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');



        if (currentDroppable != droppableBelow) {

            if (currentDroppable) {

                leaveDroppable(currentDroppable);

            }

            currentDroppable = droppableBelow;


            if (currentDroppable) {
                enterDroppable(currentDroppable);
            }
            //console.log(currentDroppable);
            
            /*if(bar.style.top == '340px'){

            }*/
        }
    }
    function enterDroppable(elem) {

        //elem.style.backgroundImage = "url('./Images/44.png')";
        elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
        elem.style.backgroundImage = '';
    }

    function showPicture(elem) {

       /* var image_1 = document.createElement("div");

        image_1.className = 'image_1';

        image_1.style.backgroundImage = "url('./Images/51_2.png')";

        image_1.style.width=180 +'px';

        image_1.style.height= 180+'px';

        elem.append(image_1);*/

        elem.style.backgroundImage= "url('./Images/51_2.png')";

        /*$(document).ready(function(){
            $("#first").append("<img style='height:100px ; width:100px' src='./Images/51_2.png'></img>");
        });*/
    }


    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

bar.ondragstart = function () {
    return false;
};