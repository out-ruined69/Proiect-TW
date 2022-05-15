document.getElementById("persoane").addEventListener("click", function onClick() {
    this.removeEventListener("key", onClick);

    this.style.backgroundColor = "#004f40";  
}, false);