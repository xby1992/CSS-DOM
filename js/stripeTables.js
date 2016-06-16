/**
 * Created by xby on 2016/6/16.
 */
function stripeTables(){
    if (!document.getElementsByTagName) return false;
    var table_elements = document.getElementsByTagName("table");
    var odd, rows;
    for (var i = 0;i < table_elements.length;i++){
        odd = false;
        rows = table_elements[i].getElementsByTagName("tr");
       for(var j = 0;j < rows.length;j++){
           if (odd == true){
               addClass(rows[j],"odd");
               odd = false;
           }else {
               odd = true;
           }
       }
    }
}
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        return window.onload = func;
    }else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(stripeTables);

function highlightRows(){
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i = 0;i < rows.length;i++){

        rows[i].onmouseover = function(){
            this.style.fontWeight =  "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);



//为元素追加新的class属性
function addClass(element,value){
    if (!element.className){
        element.className = value;
    }else{
        var new_classname = element.className;
        new_classname += " ";
        new_classname += value;
        element.className = new_classname;
    }
}