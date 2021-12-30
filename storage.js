var c = 0,
  x = 0;
if (!localStorage.getItem("lcount")) {
  localStorage.setItem("lcount", 0);
} else {
  x = parseInt(localStorage.getItem("lcount"));
}

if (!sessionStorage.getItem("scount")) {
  sessionStorage.setItem("scount", 0);
} else {
  c = parseInt(sessionStorage.getItem("scount"));
}
function fun1() {
  var c = sessionStorage.getItem("scount");
  sessionStorage.setItem("scount", parseInt(c) + 1);
  var c = sessionStorage.getItem("scount");
  document.getElementById("demo1").innerHTML = c;
}

function fun2() {
  var x = localStorage.getItem("lcount");
  localStorage.setItem("lcount", parseInt(x) + 1);
  var x = localStorage.getItem("lcount");
  document.getElementById("demo").innerHTML = x;
}
document.getElementById("demo1").innerHTML = c;
document.getElementById("demo").innerHTML = x;
