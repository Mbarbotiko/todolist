
$(function() {
  $(".change-completed").on("click", function(event) {
    var id = $(this).data("id");
    var newDone = $(this).data("newDone");

    var newDoneState = {
      completed: newDone
    };

    $.ajax("/api/todolist/" + id, {
      type: "PUT",
      data: newDoneState
    }).then(
      function() {

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newToDo = {
      todo_item: $("#ca").val().trim(),
      completed: $("[todo_item=completed]:checked").val().trim()
    };

    $.ajax("/api/todolist", {
      type: "POST",
      data: newToDo
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".delete-todo").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/todolist/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
