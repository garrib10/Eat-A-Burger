
$(document).ready(function(){

  $("#submitBtn").on("click", function(event) {
      event.preventDefault();

      var newBurger = {
        burger_name: $("#burger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
  });

  $(".devourBtn").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("Updated burger name");
          location.reload();
        }
      );
  });

});