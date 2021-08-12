// Jason Lazera 7/31/21 jason_lazera@student.uml.edu
var it = 0;

//some code from this function was taken from https://stackoverflow.com/questions/14643617/create-table-using-javascript
//function generates the table
function create_table() {

    var x_start = document.getElementById("myForm").elements[0].value;
    var x_end = document.getElementById("myForm").elements[1].value;
    var y_start = document.getElementById("myForm").elements[2].value;
    var y_end = document.getElementById("myForm").elements[3].value;

    var num = Number(x_start);
    var num2 = Number(y_start);

    //html elements are imported
    var tablearea = document.getElementById('tablearea');
    var tbl = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '2px solid black';

    //table is made based on template from stackoverflow
    for(var i = y_start-1; i <= y_end; i++){
        var tr = tbl.insertRow();

        for(var j = x_start-1; j <= x_end; j++) {

            var td = tr.insertCell();

            if(i == y_start-1 && j == x_start-1) {
                td.appendChild(document.createTextNode(''));
            }

            else if (i == (y_start-1)) {
                td.appendChild(document.createTextNode((num)));
                num = num + 1;
            }

            else if (j == (x_start-1)) {
                td.appendChild(document.createTextNode((num2)));
                num2 = num2 + 1;
            }

            else {
                td.appendChild(document.createTextNode(i*j));
                if (i == y_start-1 && j != x_start-1) {
                    td.appendChild(document.createTextNode(i));
                }
            }
            td.style.border = '2px solid black';
        }
    }

    if (it > 0) {
        var table1 = document.getElementById('table1');
        tablearea.removeChild(table1);
        console.log(1);
    }

    tbl.setAttribute('id', 'table1');
    tablearea.appendChild(tbl);
    
    it++;
}
