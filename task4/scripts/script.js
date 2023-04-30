function loadServerList() {
    $.ajax({
        url: "servers.json",
        type: "GET",
        dataType: "json",
        success: function (response) {
            var serverList = $("#server-list");
            serverList.empty();
            $.each(response, function (index, server) {
                serverList.append("<tr><td>" + server.name + "</td><td>" + server.id + "</td><td>" + server.language + "</td><td>" + server.framework + "</td><td><button class='delete-btn' data-id='" + server.id + "'>Delete</button></td></tr>");
            });

            $(".delete-btn").click(function () {
                var id = $(this).data("id");
                if (confirm("Are you sure you want to delete server with ID " + id + "?")) {
                    alert("Server with ID " + id + " has been deleted.");
                    // AJAX request to delete server with ID 'id'
                }
            });
        },
        error: function () {
            alert("Error loading server list.");
        }
    });
}

function saveServer() {
    var name = $("#name").val();
    var id = $("#id").val();
    var language = $("#language").val();
    var framework = $("#framework").val();

    if (name == "" || id == "" || language == "" || framework == "") {
        $("#error-message").text("All fields are required.");
    } else {
        var data = {
            name: name,
            id: id,
            language: language,
            framework: framework
        };

        $.ajax({
            url: "save_server.php",
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            success: function (response) {
                $("#create-modal").css("display", "none");
                loadServerList();
            },
            error: function () {
                alert("Error saving server.");
            }
        });
    }
}