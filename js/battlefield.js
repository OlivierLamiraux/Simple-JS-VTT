///////////////////////////////////////
//// BattleField
function BattleField(w, h)
{
	var isEditor = false;
	var editorColor = "#FFFFFF";
	var isEditorMode = false;
	var table = $("<table class='field'></table>");
	var width = w;
	var height = h;
	var penPix = 1;
	this.Constructor = function(w, h) {
		var tr = "<tr/>";
		var td = "<td/>";
		var cell = "<div class='cell'></div>";
		var cellPix = "<div class='cellPix'></div>";
		
		for(i=0; i < h; i++)
		{
			table.append(tr);
		}
		for(i=0; i < w; i++)
		{
			table.find('tr').append(td);
		}
		
		table.find('tr td').each(function(index) {
			var fieldCell = $(cell);
			for(i=0; i < 10; i++)
			{
				for(j=0; j < 10; j++)
				{
					var c = $(cellPix);
					var x = (index%width) * 10 + j;
					var y = Math.floor(index/width) * 10 + i;
					c.data("x", x);
					c.data("y", y);
					c.attr('id', 'cell_' + x + '_' + y);
					c.css("background-color", "green");;
					fieldCell.append(c);
				}
			}
			$(this).append(fieldCell);
		});
		
		table.find('.cellPix').bind('mouseover', OnMouseOver);
		table.find('.cellPix').bind('click', OnClick);
	};
	
	this.SetEditor = function(bool)
	{
		isEditor = bool;
	}
	
	this.GetEditor = function(bool)
	{
		return isEditor;
	}
	
	this.SetEditorColor = function(scolor)
	{
		editorColor = scolor;
	}
	
	var OnClick = function () {
		if (isEditor)
			isEditorMode = !isEditorMode;
		
		if (isEditorMode) {
			table.find("td").css("border", "1px solid red");
		}
		else {
			table.find("td").css("border", "1px solid black");
		}
	}
	
	var OnMouseOver = function () {
		if (isEditorMode)
		{	
			var x = $(this).data("x");
			var y = $(this).data("y");
			var total;
			var diff = Math.ceil(penPix / 2)
			x -= diff;
			y -= diff;
			for(i=0; i<penPix; i++)
			{
				for(j=0; j<penPix; j++)
				{
					table.find("#cell_" + (x+i) + "_" + (y+j)).css("background-color", editorColor);
				}
			}
		}
	}
	
	this.GetField = function() {
		return table;
	}
	
	this.SetPen = function(pix) {
		penPix = pix;
	}
	this.Constructor(width, height);
}