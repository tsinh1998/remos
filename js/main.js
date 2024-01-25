/**
    * 
    * preloader
*/

; (function ($) {

  "use strict";

  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  var menuleft = function () {
    if ($('div').hasClass('section-menu-left')) {
      var bt =$(".section-menu-left").find(".has-children");
      bt.on("click", function () {
        var args = { duration: 300 };
        if ($(this).hasClass("active")) {
          $(this).children(".sub-menu").slideUp(args);
          $(this).removeClass("active");
        } else {
          $(".sub-menu").slideUp(args);
          $(this).children(".sub-menu").slideDown(args);
          $(".menu-item.has-children").removeClass("active");
          $(this).addClass("active");
        }
      });
      $('.sub-menu-item').on('click', function(event){
        event.stopPropagation();
      });
    }
  };

  var tabs = function(){
    $('.widget-tabs').each(function(){
        $(this).find('.widget-content-tab').children().hide();
        $(this).find('.widget-content-tab').children(".active").show();
        $(this).find('.widget-menu-tab').find('li').on('click',function(){
            var liActive = $(this).index();
            var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
        });
    });
    $('.widget-tabs-1').each(function(){
        $(this).find('.widget-content-tab-1').children().hide();
        $(this).find('.widget-content-tab-1').children(".active").show();
        $(this).find('.widget-menu-tab-1').find('li').on('click',function(){
            var liActive = $(this).index();
            var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs-1').find('.widget-content-tab-1').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').parents('.widget-tabs-1').find('.widget-content-tab-1').children().eq(liActive).siblings().hide();
        });
    });
  };

  $('ul.dropdown-menu.has-content').on('click', function(event){
    event.stopPropagation();
  });
  $('.button-close-dropdown').on('click', function(){
    $(this).closest('.dropdown').find('.dropdown-toggle').removeClass('show');
    $(this).closest('.dropdown').find('.dropdown-menu').removeClass('show');
  });

  var progresslevel = function () {
    if ($('div').hasClass('progress-level-bar')) {
    var bars = document.querySelectorAll('.progress-level-bar > span');
    setInterval(function(){
    bars.forEach(function(bar){
      var t1 = parseFloat(bar.dataset.progress);
      var t2 = parseFloat(bar.dataset.max);
      var getWidth = ( t1 / t2) * 100;
      bar.style.width = getWidth + '%';
    });
    }, 500);
  }}

  var collapse_menu = function () {
    if ($('div').hasClass('layout-wrap')) {
      $(".button-show-hide").on("click", function (e) {
        $('.button-show-hide').toggleClass('active');
        $('.layout-wrap').toggleClass('active');
        $('.section-menu-left').toggleClass('active');
        $('.section-content-right').toggleClass('active');
      })
    }
  }

  var toggleTheme = function () {
    $("body").toggleClass(localStorage.toggled);
    var toggle = $(".button-dark-light");

    toggle.on("click", function () {
      if (localStorage.toggled != "dark-theme") {
        $("body").toggleClass("dark-theme", true);
        localStorage.toggled = "dark-theme";
        $(toggle).addClass("active");
      } else {
        $("body").toggleClass("dark-theme", false);
        localStorage.toggled = "";
        $(toggle).removeClass("active");
      }
    });
  };

  var retinaLogos = function() {
    var retina = window.devicePixelRatio > 1 ? true : false;
      if(retina) {
        var tfheader =$('#logo_header').data('retina');
        var tfwidth =$('#logo_header').data('width');
        var tfheight =$('#logo_header').data('height');
        $('#logo_header').attr({src:tfheader,width:tfwidth,height:tfheight});

        var tfmobile =$('#logo_header_mobile').data('retina');
        var tfmobile_width =$('#logo_header_mobile').data('width');
        var tfmobile_height =$('#logo_header_mobile').data('height');
        $('#logo_header_mobile').attr({src:tfmobile,width:tfmobile_width,height:tfmobile_height});

      }
  };  



  // Dom Ready
  $(function () {
    selectImages();
    menuleft();
    tabs();
    progresslevel();
    collapse_menu();
    toggleTheme();
    retinaLogos();
    
  });

})(jQuery);
