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
        $.get()
    });
});