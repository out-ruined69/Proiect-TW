function randomInterval(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x)
  }
  
  var rnd=1;
      setInterval(function(){
        const rnd = randomInterval(1, 4);
        document.getElementById('bt' + rnd).checked = true;
      }, 6900);
  