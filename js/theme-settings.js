$("body").toggleClass(localStorage.toggled);
var toggle = $(".button-dark-light");
toggle.on("click", function () {
    if (localStorage.toggled != "dark-theme") {
        $("body").toggleClass("dark-theme", true);
        localStorage.toggled = "dark-theme";
        $(".theme-dark-light").find(".dark").find("input").prop("checked", true);
    } else {
        $("body").toggleClass("dark-theme", false);
        localStorage.toggled = "light-theme";   
        $(".theme-dark-light").find(".light").find("input").prop("checked", true);
    }
});
if ($('body').hasClass("dark-theme")) {
    $(".theme-dark-light").find(".dark").find("input").prop("checked", true);
}

