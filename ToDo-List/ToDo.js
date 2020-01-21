$(document).ready(function() {
   "use strict";
   let input = $("#input");
   $(document).keypress(function(event) {
        if(event.keyCode === 13 && input.val() != "") {
            let newDiv = $("<div></div>");
            let lastDiv = $("#div2");
            lastDiv.before(newDiv);
            newDiv.addClass("newDiv");
            $(".newDiv").css({
                "width":"100%",
                "height":"80px",
                "color":"#000",
                "text-indent":"30px",
                "font-size":"24px",
                "margin-top":"0",
                "border":"2px solid rgb(154,154,154)",
                "border-top":"1px solid rgb(154,154,154)",
                "border-bottom":"none",
                "padding":"23px 0",
                "overflow":"hidden"
            });
            newDiv.html(input.val());
            input.val("");
            let icon = $("<i class='fa fa-window-close' aria-hidden='true' title='Click'></i>");
            let check = $("<div title='Click'></div>");
            let icon2 = $("<i class='fa fa-check' aria-hidden='true'></i>");
            icon2.css({
                "color":"rgb(14,225,238)",
                "display":"none",
                "margin-top":"0",
                "margin-left":"-70px"
            });
            check.append(icon2);
            newDiv.prepend(check);
            newDiv.append(icon);
            icon.css({
                "color":"rgb(167, 163, 163)",
                "background-color":"#fff",
                "cursor":"pointer",
                "outline-style":"none",
                "float":"right",
                "margin-right":"15px",
                "margin-top":"4px",
                "display":"none",
            });
            check.css({
                "cursor":"pointer",
                "outline-style":"none",
                "float":"left",
                "display":"none",
                "margin-top":"3px",
                "margin-left":"15px",
                "height":"31px",
                "width":"31px",
                "border-radius":"50%",
                "border":"3px solid rgb(12,221,35)"
            });
            let line = $("<div></div>");
            line.css({
                "border":"1px solid #000",
                "height":"0",
                "width":"60%",
                "margin-left":"5px",
                "margin-top":"-13px",
                "display":"none"
            });
            newDiv.on({
                mouseover:function() {
                    newDiv.css({
                        "text-indent":"70px"
                    });
                    line.css({
                        "margin-left":"75px"
                    });
                    icon.css({
                        "display":"inline"
                    });
                    check.css({
                        "display":"inline"
                    });
                },
                mouseout:function() {
                    newDiv.css({
                        "text-indent":"30px"
                    });
                    line.css({
                        "margin-left":"6px"
                    });
                    icon.css({
                        "display":"none"
                    });
                    check.css({
                        "display":"none"
                    });
                }
            });
            let count = $(".count");
            count.html(+count.html()+1);
            let array = [];
            icon.click(() => {
                array.push(newDiv);
                newDiv.remove();
            });
            let time = 1;
            check.click(function() {
                if (time == 1) {
                    newDiv.css({
                        "opacity":"0.35"
                    });
                    icon2.css({
                        "display":"block"
                    });
                    check.attr("title","Done");
                    if (+count.html() > 0) {
                        count.html(+count.html()-1);
                    }
                    setTimeout(() => {
                        newDiv.append(line);
                        line.css({
                            "display":"block",
                            "margin-left":"75px"
                        });
                    },500);
                    time = 2;
                }
                else if (time == 2) {
                    newDiv.css({
                        "opacity":"1"
                    });
                    icon2.css({
                        "display":"none"
                    });
                    check.attr("title","Click");
                    count.html(+count.html()+1);
                    line.css({
                        "display":"none"
                    });
                    time = 1;
                }
            }); 
            let removedDivs;
            let parentDiv = $("<div></div>");
            let remove = $(".removed");
            let value = false;
            remove.click(function() {
                if (!value) {
                    $(this).css({"color":"#000"});
                    lastDiv.before(parentDiv);
                    for(let i = 0 ; i < array.length ; i++) {
                        removedDivs = array[i];
                        removedDivs.addClass("newDiv");
                        parentDiv.prepend(removedDivs);
                    }
                    value = true;
                }
                else if (value) {
                    removedDivs.remove();
                    $(this).css({"color":"#fff"});
                    count.html(0);
                    value = false;
                }
            });
            let clear = $(".clear");
            clear.on("click",() => {
                parentDiv.css({
                    "display":"none"
                });
                remove.css({"color":"#fff"});
                count.html(0);
            });
        }
   });
});


