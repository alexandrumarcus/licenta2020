$(document).ready(function () {
  var _comp = document.querySelector(".menu"),
    _navigation = document.querySelector(".nav-wrapper"),
    _hamburger = document.querySelector(".menu"),
    _nav_list = _navigation.querySelector("ul");

  if (_comp != null || typeof _comp != "undefined") {
    AttachedEvents();
  }

  function AttachedEvents() {
    _comp.addEventListener("click", animate);
  }

  function animate() {
    _comp.classList.toggle("animate");
    _nav_list.classList.toggle("ul-text");
    if (_nav_list.className == "nav-animation ul-text") {
      $("body").css("overflow", "hidden");
    }
    else {
      $("body").css("overflow", "auto");
    }
    _navigation.classList.toggle("opacity");
    _hamburger.classList.toggle("color");
  }
});
