$(document).ready(function() {

$(".favorite-button").click(function() {
  $(".favorite-art").toggleClass("sliding-down");
  $(this).toggleClass("button-active");
});

});
