$(() => {
    $(".save-btn").on("click", (event) => {
        const $btn = $(event.target);
        const id = $btn.data("id");
        const article =  $(`#${id}`).data("obj");

        // console.log(strObj);
        // const article = JSON.parse(strObj);

        $.post("/api/save", article).
            done((res) => { console.log(res); });
    });

    $(".notes-btn").on("click", (event) => {
        const $btn = $(event.target);
        const id = $btn.data("id");
        $.get(`/saved/${id}`).then((response) => {
            console.log(response);
            $(".modal-title").text(response.headline);
            if(response.comments.length) {
                console.log(response.comments);
                $("#comment-div").empty();
                response.comments.forEach((element) => {
                    $("#comment-div").append(`<p>${element.comment}</p>`);
                });
            }
            $("#comments").modal();
            $("#comments").data("id", response._id);
        });
    });

    $("#comment-form").on("submit", (event) => {
        event.preventDefault();
        const comment = $("textarea").val();
        const id = $("#comments").data("id");
        console.log(id);
        $.post(`saved/${id}`, {comment}).then((response) => {
            console.log(response);
            location.reload();
        });
    });
});