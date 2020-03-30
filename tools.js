function accordion(sid) {
    var x = document.getElementById(sid);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-light-gray";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-light-gray", "");
  }
}

window.onscroll = function() {scrollMenu()};
function scrollMenu() {
    /* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&stacked=h
    var navbar = document.getElementById("nav");
    var logo = document.getElementById("logo");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
        logo.hidden = true;
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-black", "");
        logo.hidden = false;
    }*/
}
