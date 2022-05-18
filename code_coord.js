

var azi = new Date();
  var date = azi.getDate() + " - " +(azi.getMonth()+1)+ " - " + azi.getFullYear() ;
  document.getElementById("datacurenta").value = date;

  setInterval(function(){
    var acum = new Date();
    var timp = acum.getHours()+ ":" + acum.getMinutes() + ":" +acum.getSeconds();
    document.getElementById("ora").value=timp; 
  },900);