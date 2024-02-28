// setting theme style
// ---------------------------------
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
if ($(!"body").hasClass("dark-theme")) {
    $(".theme-dark-light").find(".light").find("input").prop("checked", true);
}

// menu style
$(".menu-style .icon-hover").on("click", function () {
    $(".layout-wrap").addClass("menu-style-icon");
})
if ($(".layout-wrap").hasClass("menu-style-icon")) {
    $(".menu-style").find(".icon-hover").prop("checked", true);
}
$(".menu-style .menu-click").on("click", function () {
    $(".layout-wrap").removeClass("menu-style-icon");
})
if (!$(".layout-wrap").hasClass("menu-style-icon")) {
    $(".menu-style").find(".menu-click").prop("checked", true);
}

// layout width style
$(".layout-width .boxed").on("click", function () {
    $(".layout-wrap").addClass("layout-width-boxed");
})
if ($(".layout-wrap").hasClass("layout-width-boxed")) {
    $(".layout-width").find(".boxed").prop("checked", true);
}
$(".layout-width .full").on("click", function () {
    $(".layout-wrap").removeClass("layout-width-boxed");
})
if (!$(".layout-wrap").hasClass("layout-width-boxed")) {
    $(".layout-width").find(".full").prop("checked", true);
}

// menu position style
$(".menu-position .menu-fixed").on("click", function () {
    $(".layout-wrap").removeClass("menu-position-scrollable");
})
if (!$(".layout-wrap").hasClass("menu-position-scrollable")) {
    $(".menu-position").find(".menu-fixed").prop("checked", true);
}
$(".menu-position .menu-scrollable").on("click", function () {
    $(".layout-wrap").addClass("menu-position-scrollable");
})
if ($(".layout-wrap").hasClass("menu-position-scrollable")) {
    $(".menu-position").find(".menu-scrollable").prop("checked", true);
}

// header position style
$(".header-position .header-fixed").on("click", function () {
    $(".layout-wrap").removeClass("header-position-scrollable");
})
if (!$(".layout-wrap").hasClass("header-position-scrollable")) {
    $(".header-position").find(".header-fixed").prop("checked", true);
}
$(".header-position .header-scrollable").on("click", function () {
    $(".layout-wrap").addClass("header-position-scrollable");
})
if ($(".layout-wrap").hasClass("header-position-scrollable")) {
    $(".header-position").find(".header-scrollable").prop("checked", true);
}

// loader position style
$(".style-loader .style-loader-on").on("click", function () {
    $(".layout-wrap").removeClass("loader-off");
})
if (!$(".layout-wrap").hasClass("loader-off")) {
    $(".style-loader").find(".style-loader-on").prop("checked", true);
}
$(".style-loader .style-loader-off").on("click", function () {
    $(".layout-wrap").addClass("loader-off");
})
if ($(".layout-wrap").hasClass("loader-off")) {
    $(".style-loader").find(".style-loader-off").prop("checked", true);
}

// clear-all
$(".form-theme-style .button-clear-select").on("click", function () {
    $("body").removeClass("dark-theme");
    $(".theme-dark-light").find(".light").find("input").prop("checked", true);
    localStorage.toggled = "light-theme";   
    $(".layout-wrap").removeClass("menu-style-icon");
    $(".menu-style").find(".menu-click").prop("checked", true);
    $(".layout-wrap").removeClass("layout-width-boxed");
    $(".layout-width").find(".full").prop("checked", true);
    $(".layout-wrap").removeClass("menu-position-scrollable");
    $(".menu-position").find(".menu-fixed").prop("checked", true);
    $(".layout-wrap").removeClass("header-position-scrollable");
    $(".header-position").find(".header-fixed").prop("checked", true);
    $(".layout-wrap").removeClass("loader-off");
    $(".style-loader").find(".style-loader-on").prop("checked", true);
})

// setting theme color
// ---------------------------------
// colors-menu
$(".colors-menu .color-fff").on("click", function () {
    $(".layout-wrap").attr("data-colors-menu", "colors-menu-fff");
    $("#logo_header_mobile").attr({src:"images/logo/logo.png"});
})
$(".colors-menu .color-1E293B").on("click", function () {
    $(".layout-wrap").attr("data-colors-menu", "colors-menu-1E293B");
    $("#logo_header_mobile").attr({src:"images/logo/logo-dark.png"});
})
$(".colors-menu .color-1B1B1C").on("click", function () {
    $(".layout-wrap").attr("data-colors-menu", "colors-menu-1B1B1C");
    $("#logo_header_mobile").attr({src:"images/logo/logo-dark.png"});
})
$(".colors-menu .color-3A3043").on("click", function () {
    $(".layout-wrap").attr("data-colors-menu", "colors-menu-3A3043");
    $("#logo_header_mobile").attr({src:"images/logo/logo-dark.png"});
})

// colors-header
$(".colors-header .color-fff").on("click", function () {
    $(".layout-wrap").attr("data-colors-header", "colors-header-fff");
})
$(".colors-header .color-1E293B").on("click", function () {
    $(".layout-wrap").attr("data-colors-header", "colors-header-1E293B");
})
$(".colors-header .color-1B1B1C").on("click", function () {
    $(".layout-wrap").attr("data-colors-header", "colors-header-1B1B1C");
})
$(".colors-header .color-3A3043").on("click", function () {
    $(".layout-wrap").attr("data-colors-header", "colors-header-3A3043");
})

// theme-primary
$(".colors-theme-primary .color-2377FC").on("click", function () {
    $(".layout-wrap").attr("data-theme-primary", "theme-primary-2377FC");
})
$(".colors-theme-primary .color-DE6E49").on("click", function () {
    $(".layout-wrap").attr("data-theme-primary", "theme-primary-DE6E49");
})
$(".colors-theme-primary .color-35988D").on("click", function () {
    $(".layout-wrap").attr("data-theme-primary", "theme-primary-35988D");
})
$(".colors-theme-primary .color-7047D6").on("click", function () {
    $(".layout-wrap").attr("data-theme-primary", "theme-primary-7047D6");
})
$(".colors-theme-primary .color-189D72").on("click", function () {
    $(".layout-wrap").attr("data-theme-primary", "theme-primary-189D72");
})