
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


var acc = document.getElementsByClassName("intrebare");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.querySelector("#fisier").addEventListener("change", function(){
  const reader = new FileReader();

reader.addEventListener("load", () => {
  localStorage.setItem("recent-image", reader.result);
});

  reader.readAsDataURL(this.files[0]);
});

document.addEventListener("DOMContentLoaded", () =>{
    const recentImageDataUrl = localStorage.getItem("recent-image");

    if(recentImageDataUrl){
      document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }

});