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
            if(response.comment) {
                $("#comment-div").empty();
                $("#comment-div").append(`<p>${response.comment}</p>`);
            }
            $("#comments").modal();
        });
    });
});