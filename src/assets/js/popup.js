$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest(".cat__tabs").length &&
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')
        }
    });

});