var toggleOpen = false;
var fromTop;
widthCalc();

window.onresize = function() {
  widthCalc();
};

window.onscroll = function() {
  scrollMenu();
};

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function widthCalc() {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  fromTop = w > 600 ? 75 : 40;
}

function accordionAll(sid) {
  var cats = ["Putters", "Mids", "Fairway", "Distance"];
  for (var i = 0; i < cats.length; i++) {
    console.log(cats[i] + " " + sid);
    if (cats[i] === sid) {
      accordion(cats[i]);
    } else {
      accordionHide(cats[i]);
    }
  }
}

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

function accordionHide(sid) {
  var x = document.getElementById(sid);
  x.className = x.className.replace(" w3-show", "");
  x.previousElementSibling.className = x.previousElementSibling.className.replace(
    " w3-light-gray",
    ""
  );
}

function scrollMenu() {
  /* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&stacked=h */
  var navbar = document.getElementById("nav");
  var logo = document.getElementById("logo");
  var active = document.getElementById("active");
  if (
    document.body.scrollTop > fromTop ||
    document.documentElement.scrollTop > fromTop
  ) {
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

function hamburger(t) {
  t.classList.toggle("change");
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
    document.body.scrollTop <= fromTop &&
    document.documentElement.scrollTop <= fromTop
  ) {
    navbar.className = navbar.className.replace("w3-black", "");
  }
}
