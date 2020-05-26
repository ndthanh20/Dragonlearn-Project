var numberTask = 1;
var up = true;
var currSce = $("#scene");
var obj = "#move", numberObj = 1;
function finishTask() {
    switch (numberTask) {
        case 8:
            $("#ball_1").animate({
                left: '272px',
            }, "slow");
            break;
        case 7:
            $("#ball_2").animate({
                left: '296px'
            }, "slow");
            break;
        case 6:
            $("#ball_3").animate({
                left: '320px'
            }, "slow");
            break;
        case 5:
            $("#ball_4").animate({
                left: '344px'
            }, "slow");
            break;
        case 4:
            $("#ball_5").animate({
                left: '368px'
            }, "slow");
            break;
        case 3:
            $("#ball_6").animate({
                left: '392px'
            }, "slow");
            break;
        case 2:
            $("#ball_7").animate({
                left: '416px'
            }, "slow");
            break;
        case 1:
            $("#ball_8").animate({
                left: '440px'
            }, "slow");
            break;
    }
    if(numberTask == 8){
        setTimeout(function(){
            window.location.href = 'completeStage.html';
        },2000);
    }
    numberTask++;
    if (up) {
        $(".btn_play").css("display", "block");
        currSce.css("filter", "blur(2px)");
        currSce.find("#arrow_down").css("display", "block");
        currSce.find("#arrow_up").css("display", "none");
        currSce.find("#question_up").css("display", "none");
        currSce.find("#question_down").css("display", "block");
        up = false;
        if (numberObj == 3 || numberObj == 4) {
            $(obj).css("top", "130px");
        }
        else
            $(obj).css("top", "200px");
    }
    else {
        numberObj++;
        $(".btn_play").css("display", "block");
        currSce.css("display", "none");
        currSce.next().css("display", "block");
        currSce = currSce.next();
        console.log(currSce);
        obj = "#move" + numberObj;
        up = true;
    }
}
$(function () {
    $(".btn_play").click(function () {
        $(".btn_play").css("display", "none");
        currSce.css("filter", "none");
        $(".__line").css("display", "block");
        $(".__pointer").css("display", "block");
        setTimeout(function () {
            console.log(obj);
            $(obj).draggable({
                axis: "y",
                containment: "parent",
                drag: function (event, ui) {
                    var pos = ui.position;
                    if (up) {
                        switch (numberObj) {
                            case 1:
                                if (pos.top > 200)
                                    ui.position.top = 200 + 'px';
                                break;
                            case 2:
                                if (pos.top > 200)
                                    ui.position.top = 200 + 'px';
                                if (pos.top < 20)
                                    ui.position.top = 20 + 'px';
                                break;
                            case 3:
                                if (pos.top > 130)
                                    ui.position.top = 130 + 'px';
                                break;
                            case 4:
                                if (pos.top > 130)
                                    ui.position.top = 130 + 'px';
                                break;
                        }
                    }
                    else {
                        switch (numberObj) {
                            case 1:
                                {
                                    if (pos.top < 200)
                                        ui.position.top = 200 + 'px';
                                    break;
                                }
                            case 2:
                                {
                                    if (pos.top < 200)
                                        ui.position.top = 200 + 'px';
                                    if (pos.top > 450)
                                        ui.position.top = 450 + 'px';
                                    break;
                                }
                            case 3:
                                {
                                    if (pos.top < 130)
                                        ui.position.top = 130 + 'px';
                                    if (pos.top > 270)
                                        ui.position.top = 270 + 'px';
                                    break;
                                }
                            case 4:
                                {
                                    if (pos.top < 130)
                                        ui.position.top = 130 + 'px';
                                    if (pos.top > 270)
                                        ui.position.top = 270 + 'px';
                                    break;
                                }
                        }
                    }
                },
                stop: function (event, ui) {
                    var pos = ui.position;
                    if (up) {
                        switch (numberObj) {
                            case 1:
                                {
                                    if (pos.top < 165) {
                                        $(obj).animate({
                                            top: '0px'
                                        });
                                        setTimeout(function () {
                                            finishTask();
                                        }, 2000);
                                    }
                                    else
                                        $(obj).animate({
                                            top: '200px'
                                        });
                                    break;
                                }
                            case 2:
                                {
                                    if (pos.top < 165) {
                                        $(obj).animate({
                                            top: '20px'
                                        });
                                        setTimeout(function () {
                                            finishTask();
                                        }, 2000);
                                    }
                                    else
                                        $(obj).animate({
                                            top: '200px'
                                        });
                                    break;
                                }
                            case 3:
                                if (pos.top < 120) {
                                    $(obj).animate({
                                        top: '0px'
                                    });
                                    setTimeout(function () {
                                        finishTask();
                                    }, 2000);
                                }
                                else
                                    $(obj).animate({
                                        top: '130px'
                                    });
                                break;
                            case 4:
                                if (pos.top < 120) {
                                    $(obj).animate({
                                        top: '0px'
                                    });
                                    setTimeout(function () {
                                        finishTask();
                                    }, 2000);
                                }
                                else
                                    $(obj).animate({
                                        top: '130px'
                                    });
                                break;
                        }
                    }
                    else {
                        switch (numberObj) {
                            case 1:
                                {
                                    if (pos.top > 220) {
                                        $(obj).animate({
                                            top: '400px'
                                        });
                                        setTimeout(function () {
                                            finishTask();
                                        }, 2000);
                                    }
                                    else
                                        $(obj).animate({
                                            top: '200px'
                                        });
                                    break;
                                }
                            case 2:
                                {
                                    if (pos.top > 220) {
                                        $(obj).animate({
                                            top: '450px'
                                        });
                                        setTimeout(function () {
                                            finishTask();
                                        }, 2000);
                                    }
                                    else
                                        $(obj).animate({
                                            top: '200px'
                                        });
                                    break;
                                }
                            case 3:
                                if (pos.top > 150) {
                                    $(obj).animate({
                                        top: '270px'
                                    });
                                    setTimeout(function () {
                                        finishTask();
                                    }, 2000);
                                }
                                else
                                    $(obj).animate({
                                        top: '130px'
                                    });
                                break;
                            case 4:
                                if (pos.top > 150) {
                                    $(obj).animate({
                                        top: '270px'
                                    });
                                    setTimeout(function () {
                                        finishTask();
                                    }, 2000);
                                }
                                else
                                    $(obj).animate({
                                        top: '130px'
                                    });
                                break;
                        }
                    }
                }
            });
        }, 1500);
    })
});
