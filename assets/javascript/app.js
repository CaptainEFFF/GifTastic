var topics = ["Dogs", "Cats", "Goats", "Cows"];

    function renderButtons() {

    $("#buttons").empty();

    for(var i = 0 ; i < topics.length; i++){
      console.log(topics[i])
      btn = $('<button>');
      btn.html(topics[i]);
      btn.addClass("Giphy-button");
      btn.attr("data-name",topics[i]);
      $("#buttons").append(btn);
    }
    }


   function giphyAjax() {
      var name = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        name + "&api_key=97p26abRX4K5IoJU0zvnjqO8qIUCoNcY";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {

          var results = response.data;
            for (var i = 0; i < results.length; i++) {
              var rating = results[i].rating;
              var tipicDiv = $("<div>");
              var p = $("<p>").text("Rating: " + rating);
              var tipicImage = $("<img>");
              tipicImage.attr("src", results[i].images.fixed_height.url);
              tipicDiv.prepend(p);
              tipicDiv.append(tipicImage);
              $("#gifsDiv").prepend(tipicDiv);
            }
        });
    };


    

    $("#add-button").on("click", function(event) {
        event.preventDefault();
        var input = $("#button-input").val();
        giphys.push(input);
        renderButtons();
        console.log(giphys)
      });


      renderButtons();
      $(document).on("click", ".Giphy-button",giphyAjax);
  