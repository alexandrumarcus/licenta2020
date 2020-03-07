$(document).ready(function () {
  let navigation = $(".navigation-component");
  navigation.find(".hamburger").on('click', function () { 
    $(this).toggleClass("active");
   });
});