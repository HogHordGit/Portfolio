$(".menu__icon").on("click", function(e) {
    const target = e.target;

    if (target !== null && target.classList.contains("menu__icon-img")) {
        console.log($(window).width());
    }
});