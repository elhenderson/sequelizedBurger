$( () => {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var customer_name = $('#customerInput').val();
    var devouredUpdate = {
      devoured: 1
    };

    console.log(customer_name);
    console.log(devouredUpdate);
    if (customer_name) {
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: devouredUpdate
      }).then(
        (err) => {
          if (err) throw err;
          // window.location.href = "/api/customers"
          console.log("Devoured!")
        }
      )

      // $.ajax(`/api/customers/${customer_name}`, {
      //   type: "PUT",
      //   data: 
      // })
      // $.ajax(`/api/customers/${customer_name}`, {
      //   type: "POST",
      //   data: `${customer_name}`
      // }).then((err) => {
      //   if (err) throw err;
      // })
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

