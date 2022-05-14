var pupile = document.getElementsByClassName("pupila");
document.onmouseover = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";

    for(var i=0;i<3;i++)
    {
        pupile[i].style.left=x;
        pupile[i].style.top=y;
    }
}