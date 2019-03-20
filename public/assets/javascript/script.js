$( () => {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    var customer_name = $('#customerInput').val();
    console.log(devoured)
    var devouredUpdate = {
      devoured: 1
    };

    console.log(customer_name);
    console.log(devouredUpdate);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: devouredUpdate
    }).then(
      (err) => {
        if (err) throw err;

        console.log("Devoured!")
      }
    )

    // $.ajax(`/api/customers/${customer_name}`, {
    //   type: "POST",
    //   data: `${customer_name}`
    // }).then((err) => {
    //   if (err) throw err;
    // })
  })
})



$($("#submit").on("submit"), (event) => {
  event.preventDefault()
})

