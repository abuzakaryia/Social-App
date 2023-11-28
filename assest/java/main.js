
/**************************** dark mode && light mode **********************/
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")){
        icon.src = "assest/imgs/sun.png" ;
    }else{
        icon.src = "assest/imgs/moon.png";
    }
}

/**************************** heart botton color **********************/

var red = document.getElementById("heart");

red.onclick = function(){
    document.classList.toggle("open");
}

