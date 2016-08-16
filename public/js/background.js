$(document).ready(function() {
$('button').on('click', function(){
  $(this).toggleClass('faved');
});

function saveFavorite(){
  $.ajax({
    type: "POST",
    url: "favorites/index.html",
    data: {?????},

    success: function (result) {

    } // closes success function
  })// closes ajax
}

  });




