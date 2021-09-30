//SLIDE BAR
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("slide-bar").style.opacity = "1";
    var all = document.getElementsByClassName("header_content");
    for (var i = 0; i < all.length; i++) {
      all[i].style.height = "67px";
    }
  } else {
    document.getElementById("slide-bar").style.opacity = "0";
    var all = document.getElementsByClassName("header_content");
    for (var i = 0; i < all.length; i++) {
      all[i].style.height = "100px";
    }
  }
};

//NAV BAR ACTIVE
var ul = document.getElementsByClassName("navbar-nav");
var li = ul.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    var current = document.querySelector(".navbar-nav .active");
    current.className = current.className.replace("active", "");
    this.className += " active";
  });
}
