/*jshint onevar: true, strict: true, curly: true, eqeqeq: true, laxbreak: true */
///////////////////////////////////////
//// BattleField
function BattleField(w, h)
{
    "use strict";
    var isEditor = false,
        editorColor = "#FFFFFF",
        isEditorMode = false,
        table = $("<table class='field'></table>"),
        width = w,
        height = h,
        penPix = 1,
    
        OnClick = function () {
            if (isEditor) {
                isEditorMode = !isEditorMode;
            }
        
            if (isEditorMode) {
                table.find("td").css("border", "1px solid red");
            }
            else {
                table.find("td").css("border", "1px solid black");
            }
        },
    
        OnMouseOver = function () {
            if (isEditorMode)
            {    
                var x = $(this).data("x"),
                    y = $(this).data("y"),
                    diff = Math.ceil(penPix / 2),
					total, i, j;

                x -= diff;
                y -= diff;
                for (i = 0; i < penPix; i += 1) {
                    for (j = 0; j < penPix; j += 1) {
                        table.find("#cell_" + (x + i) + "_" + (y + j)).css("background-color", editorColor);
                    }
                }
			}
		};

    this.Constructor = function (w, h) {
        var tr = "<tr/>",
            td = "<td/>",
            cell = "<div class='cell'></div>",
            cellPix = "<div class='cellPix'></div>",
            i;
        
        for (i = 0; i < h; i += 1) {
            table.append(tr);
        }
        for (i = 0; i < w; i += 1) {
            table.find('tr').append(td);
        }
        
        table.find('tr td').each(function (index) {
            var fieldCell = $(cell),
                i, j, c, x, y;

            for (i = 0; i < 10; i += 1)
            {
                for (j = 0; j < 10; j += 1)
                {
                    c = $(cellPix);
                    x = (index % width) * 10 + j;
                    y = Math.floor(index / width) * 10 + i;

                    c.data("x", x);
                    c.data("y", y);
                    c.attr('id', 'cell_' + x + '_' + y);
                    c.css("background-color", "green");
                    fieldCell.append(c);
                }
            }
            $(this).append(fieldCell);
        });
        
        table.find('.cellPix').bind('mouseover', OnMouseOver);
        table.find('.cellPix').bind('click', OnClick);
    };
    
    this.SetEditor = function (bool) {
        isEditor = bool;
    };
    
    this.GetEditor = function (bool) {
        return isEditor;
    };
    
    this.SetEditorColor = function (scolor) {
        editorColor = scolor;
    };
    
    this.GetField = function () {
        return table;
    };
    
    this.SetPen = function (pix) {
        penPix = pix;
    };
	
    this.Constructor(width, height);
}