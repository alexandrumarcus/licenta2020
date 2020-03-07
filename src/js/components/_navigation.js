$(document).ready(function () {
  let navigation = $(".navigation-component");
  navigation.find(".hamburger").on('click', function () {
    $(this).toggleClass("active");
  });

  const scrollIndicatorElt = document.getElementById('myBar');
  const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
  window.addEventListener('scroll', moveScrollIndicator);
  function moveScrollIndicator() {
    const percentage = ((window.scrollY) / maxScrollableHeight) * 100;
    scrollIndicatorElt.style.width = percentage + '%';
  }
});