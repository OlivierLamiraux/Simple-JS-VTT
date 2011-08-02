/*jshint onevar: true, strict: true, curly: true, eqeqeq: true, laxbreak: true */
///////////////////////////////////////
//// Token
function Token(width, height)
{
    "use strict";
    var token = $("<div class='cell'>&nbsp;</div>"),
        info = $("<div class='info'></div>"),
        
        makeInfo = function () {
            info.append("<input type='text' size='40' style='bold;'></input>");
            info.append("<textarea rows='10' cols='30'></textarea>");
            token.append(info);
            info.hide();
        };
        
    this.Constructor = function (w, h) {
        token.addClass('bggray');
        // Snap inner element with cell class
        token.draggable({snap : ".cell", snapMode : "inner"});
        
        // Display information if token in not dragged
        token.mouseover(function () {
            if (!$(this).hasClass("ui-draggable-dragging")) {
                var offset = $(this).offset();
                token.append(info);
                info.show();
                info.offset({ top: offset.top, left: offset.left + 25});
            }
        });
        
        token.mouseout(function () {
            info.hide();
        });
        
        token.mousedown(function () {
            info.hide();
        });
        
        makeInfo();
        
    };
    
    this.GetToken = function () {
        return token;
    };
    
    this.GetInfo = function () {
        return info;
    };
    
    this.Constructor(width, height);
}