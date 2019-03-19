$( () => {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");
    console.log(devoured)
    var devouredUpdate = {
      devoured: 1
    };
    location.reload();
    console.log(devouredUpdate);

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: devouredUpdate
    }).then(
      (err) => {
        if (err) throw err;
        location.reload()
        console.log("Devoured!")
      }
    )
  })
})



$($("#submit").on("submit"), (event) => {
  event.preventDefault()
})

