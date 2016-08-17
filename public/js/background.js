$(document).ready(function() {
$('button').on('click', function(){
  var fav_id = $(this).attr('data-id')

  $(this).toggleClass('faved');
  var button = $(this)
  var data = {
    user_email: button.data('email'),
    pin_link: button.data('link'),
    pin_image: button.data('image')
  }
  //console.log(data)
  $.ajax({
    type: "POST",
    url: "favorites/" + data.user_email,
    data: data,
    success: function (result) {
      console.log(result)

    } // closes success function
  })// closes ajax

  $.ajax({
    type: "POST",
    url: "favorites/" + data.user_email,
    data: data,
    success: function (result) {
      console.log(result)

    } // closes success function
  })// closes ajax


});




  });




