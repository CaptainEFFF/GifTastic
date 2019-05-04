var topics = ["Trigun", "Cowboy Beebop", "Durarara", "Dragon Ball Z"];

    function renderButtons() {

    $("#buttons").empty();

    for(var i = 0 ; i < topics.length; i++){
      console.log(topics[i])
      btn = $('<button>');
      btn.html(topics[i]);
      btn.addClass("btn btn-outline-secondary Giphy-button");
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
          $("#gifsDiv").empty();  
            for (var i = 0; i < results.length; i++) { 
              var rating = results[i].rating;
              var topicDiv = $("<div>");
              topicDiv.addClass("jaif");
              var p = $("<p>").text("Rating: " + rating);
              p.addClass("rounded-pill rating")
              var topicImage = $("<img>");
              topicImage.attr("src", results[i].images.fixed_height.url);
              topicImage.addClass("rounded shadow-lg")
              topicDiv.prepend(p);
              topicDiv.append(topicImage);
              $("#gifsDiv").append(topicDiv);
            }
        });
    };


    

    $("#add-button").on("click", function(event) {
        event.preventDefault();
        var input = $("#button-input").val();
        topics.push(input);
        renderButtons();
      });


      renderButtons();
      $(document).on("click", ".Giphy-button",giphyAjax);
  