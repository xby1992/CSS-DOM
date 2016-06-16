/**
 * Created by Administrator on 2016/6/15.
 */
//寻找下一个元素节点
function getNextElement(node){
    if (node.nodeType == 1){
        return node;
    }
    if (node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
//添加加载函数
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}


////设置属性
//function styleHeaderSiblings(){
//    if (!document.getElementsByTagName) return false;
//    var h1_element = document.getElementsByTagName("h1");
//    for(var i = 0;i < h1_element.length;i++){
//        var h1_next = getNextElement(h1_element[i].nextSibling);
//        addClass(h1_next,"intro");
//        //h1_next.className = "intro";
//        //h1_next.style.fontWeight = "bold";
//        //h1_next.style.fontSize = "1.2em";
//    }
//}
//addLoadEvent(styleHeaderSiblings);


//抽象styleHeaderSibling函数
function styleElementSibling(tag,newclass){
    if (!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tag);
    for (var i = 0;i < elems.length;i++){
        var elem = getNextElement(elems[i].nextSibling);
        addClass(elem,newclass);
    }
}
addLoadEvent(function () {
    styleElementSibling("h1","intro");
});





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