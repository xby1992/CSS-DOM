/**
 * Created by xby on 2016/6/14.
 */
function alertTalk(){
    var p_element = document.getElementsByTagName("p");
    for (var i = 0;i < p_element.length;i++){
        p_element[i].onclick = function(){
            alert("You clicked on a paragraph." );
        }
    }
    var pid_element = document.getElementById("example");
    pid_element.style.color = "black";
    pid_element.style.font = "2em Times,serif";
    //alert(typeof pid_element.nodeName);
    //alert(typeof pid_element.style);
    //alert("The color is " + pid_element.style.color);
    //alert("The font-family is " + pid_element.style.fontFamily);
    //alert("The font-family is " + pid_element.style.fontSize);
}


function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(alertTalk);
