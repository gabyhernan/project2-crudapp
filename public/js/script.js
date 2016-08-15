$(document).ready(function(){
// API Docs at:
// https://developer.spotify.com/web-api/search-item/

    console.log("loaded");

    function searchByArtist(keyword) {
      return 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
    }

    function searchByTrack(keyword) {
      return 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
    }

    var handleArtist = function(searchRes){
      var resList = $('#results') // grabs result list from DOM
      searchRes.artists.items.forEach(function(el){ // gets each artist
        resList.append($('<li>').text(el.name)) // attaches  results to the DOM
      });
    }

    var handleTrack = function(searchRes){
      var resList = $('#results')
      searchRes.tracks.items.forEach(function(el){
        resList.append($('<li>').text(el.name))
      });
    }

    $('body').on("click", ".savefavorite", function(e){
        e.preventDefault(); // prevents from disappearing

        // select your form elements from the DOM here:
       // var searchType = $("#search-type").val();
       // var query = $('#search-keyword').val();

       // console.log(searchType, query);


        // add your ajax request here:
    $.ajax({
      "url": "https://api.spotify.com/v1/search?q=" + query + "&type=" + searchType,
      "method": "GET",
      "success": function(data){
      console.log(data);
           if (searchType === "artist") { //goes to search and check if result is from artist
            handleArtist(data) // if result from artist then their data is shown
            }
            else  {
            handleTrack(data)
            };
      }
    })

    });

});
