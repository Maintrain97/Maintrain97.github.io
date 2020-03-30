var toggleOpen = false;

function accordion(sid) {
  var x = document.getElementById(sid);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-light-gray";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = x.previousElementSibling.className.replace(
      " w3-light-gray",
      ""
    );
  }
}

window.onscroll = function() {
  scrollMenu();
};
function scrollMenu() {
  /* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&stacked=h */
  var navbar = document.getElementById("nav");
  var logo = document.getElementById("logo");
  var active = document.getElementById("active");
  if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
    if (!navbar.className.endsWith(" w3-black"))
      navbar.className += " w3-black";
    active.className = active.className.replace("w3-black", "w3-white");
    logo.className = logo.className.replace("logo", "small");
  } else if (!toggleOpen) {
    navbar.className = navbar.className.replace("w3-black", "");
    active.className = active.className.replace("w3-white", "w3-black");
    logo.className = logo.className.replace("small", "logo");
  }
}

function toggle() {
  toggleOpen = !toggleOpen;

  var x = document.getElementById("navSmall");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }

  var navbar = document.getElementById("nav");
  if (!navbar.className.endsWith(" w3-black")) {
    navbar.className += " w3-black";
  } else if (
    document.body.scrollTop <= 65 &&
    document.documentElement.scrollTop <= 65
  ) {
    navbar.className = navbar.className.replace("w3-black", "");
  }
}
