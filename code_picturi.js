function changeColor()
{
var color = document.getElementById('culoare').value;
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor=color;    
    
}

function schimba(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;
}