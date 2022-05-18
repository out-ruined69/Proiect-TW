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

var ecran = document.getElementById("ecranFull");
var poze = document.getElementById("ecranPoza");

function deschide(poza){
    ecran.style.display="flex";
    poze.src = poza;
}

function inchide(){
    ecran.style.display="none";
}