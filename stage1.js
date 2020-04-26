var control = (function() {
   
    var handleStart = function(){
        
        var btn_play = document.querySelector(".btn_play");
        btn_play.parentNode.removeChild(btn_play);
        document.getElementById("scene").style.filter = "none";
        document.querySelector(".arrow__inner__line").style.display = "block";
        // document.querySelector(".arrow__inner__pointer").style.display = "block";
    }   
    var setUpEventListener = function(){
        document.querySelector(".btn_play").addEventListener("click",handleStart);
    }
    return {
        init : function(){
            setUpEventListener();
        }
    }
})()
control.init();