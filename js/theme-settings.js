// dark light
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
if ($("body").hasClass("dark-theme")) {
    $(".theme-dark-light").find(".dark").find("input").prop("checked", true);
}

// layout width style
$(".layout-width .full").on("click", function () {
    $(".layout-wrap").addClass("layout-full-width");
})
$(".layout-width .boxed").on("click", function () {
    $(".layout-wrap").removeClass("layout-full-width");
})

// menu position style
$(".menu-position .menu-fixed").on("click", function () {
    $(".layout-wrap").removeClass("menu-position-scrollable");
})
$(".menu-position .menu-scrollable").on("click", function () {
    $(".layout-wrap").addClass("menu-position-scrollable");
})

// header position style
$(".header-position .header-fixed").on("click", function () {
    $(".layout-wrap").removeClass("header-position-scrollable");
})
$(".header-position .header-scrollable").on("click", function () {
    $(".layout-wrap").addClass("header-position-scrollable");
})

// loader position style
$(".style-loader .style-loader-on").on("click", function () {
    $(".layout-wrap").removeClass("loader-off");
})
$(".style-loader .style-loader-off").on("click", function () {
    $(".layout-wrap").addClass("loader-off");
})