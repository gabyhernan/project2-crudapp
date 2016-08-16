$(document).ready(function() {
$('button').on('click', function(){
  $(this).toggleClass('faved');
});

// Dropdown toggle from http://codepen.io/scottb/pen/gixIv
$('.dropdown-toggle').click(function(){
  $(this).next('.dropdown').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
    $('.dropdown').hide();
  }
});



  });
