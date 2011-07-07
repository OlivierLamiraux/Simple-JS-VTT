///////////////////////////////////////
//// Token
function Token(width, height)
{
	var token = $("<div class='cell'>&nbsp;</div>");
	var info = $("<div class='info'></div>");
	
	this.Constructor = function (w, h) {
		token.addClass('bggray');
		token.draggable({snap : ".cell", snapMode : "inner"});
		token.mouseover(function() {
			if (!$(this).hasClass( "ui-draggable-dragging" )) {
				var offset = $(this).offset();
				token.append(info);
				info.show();
				info.offset({ top: offset.top, left: offset.left + 25});
			}
		});
		
		token.mouseout(function() {
			info.hide();
		});
		
		token.mousedown(function() {
			info.hide();
		});
		
		makeInfo();
		
	}
	
	var makeInfo = function() {
		info.append("<input type='text' size='40' style='bold;'></input>");
		info.append("<textarea rows='10' cols='30'></textarea>");
		token.append(info);
		info.hide();
	}
	
	this.GetToken = function () {
		return token;
	}
	
	this.GetInfo = function () {
		return info;
	}
	this.Constructor(width, height);
}