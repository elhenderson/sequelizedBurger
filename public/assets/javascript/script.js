$( () => {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var customer_name = $('#customerInput').val();
    var devouredUpdate = {
      devoured: 1
    };

    if (customer_name) {
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: devouredUpdate
      }).then(
        (err) => {
          if (err) throw err;
          console.log("Devoured!")
        }
      )

    } else {
      $.ajax("/api/burgers", {
        type: "GET"
      }).then(() => {})
    }
  })
})

$($("#submit").on("submit"), (event) => {
  event.preventDefault()
})