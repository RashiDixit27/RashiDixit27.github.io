document.getElementById("about").style.display = "none";
document.getElementById("edu").style.display = "none";
document.getElementById("contact").style.display = "none";

function unhide_main(){
  var x = document.getElementById("main");
  x.style.display="block";
  document.getElementById("about").style.display = "none";
  document.getElementById("edu").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function unhide_about(){
  var x = document.getElementById("about");
  x.style.display="block";
  document.getElementById("main").style.display = "none";
  document.getElementById("edu").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function unhide_edu(){
  var x = document.getElementById("edu");
  x.style.display="block";
  document.getElementById("main").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function unhide_contact(){
  var x = document.getElementById("contact");
  x.style.display="block";
  document.getElementById("main").style.display = "none";
  document.getElementById("edu").style.display = "none";
  document.getElementById("about").style.display = "none";
}

var ind = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  ind++;
  if (ind > x.length) {ind = 1}    
  x[ind-1].style.display = "block";  
  setTimeout(slideshow,3000);
}

function clearform()
{
  document.getElementById("ipt1").value="";
  document.getElementById("ipt2").value="";
  document.getElementById("ipt3").value="";
}
showtime();
function showtime()
{
                var today=new Date();
                var day = today.getDate();
                var month = today.getMonth()+1;
                var year = today.getFullYear();
                var h=today.getHours();
                var m=today.getMinutes();
                var s=today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                document.getElementById('getdatetime').innerHTML = "Date: " + day + "/" + month + "/" + year + " " + "Time: " + h+":"+m+":"+s;
                var t = setTimeout(function(){showtime()},500);
      
}

    
 function checkTime(i) {
                if (i<10) {i = "0" + i};  
                return i;
}
