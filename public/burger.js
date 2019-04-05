$(function() {
    $(".eat").on("click", function(event) {
      event.preventDefault();

        var id = $(this).data("id");
        console.log(id);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured: true}
      }).then(
        function() {
          console.log("devoured =");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  