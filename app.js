
var elm = document.getElementById("imgTag")
var links = ["img/img 1.jpeg","img/img 2.jpeg","img/img3.jpeg"]
var count = 0
function fun(value){
    if(count>2){
        count = 0
    }
    elm.setAttribute("src", links[count]);
    if(value === '+'){
        count++;
        return;
    }
    count++;
}
setInterval(fun, 1000)