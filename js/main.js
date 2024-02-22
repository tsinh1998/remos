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
        var args = { duration: 200 };
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

  var fullcheckbox = function () {
    $('.total-checkbox').on('click', function () {
      if ( $(this).is(':checked') ) {
        $(this).closest('.wrap-checkbox').find('.checkbox-item').prop('checked', true);
      } else {
        $(this).closest('.wrap-checkbox').find('.checkbox-item').prop('checked', false);
      }
    });
  };

  var showpass = function() {
    $(".show-pass").on("click", function () {
      $(this).toggleClass("active");
      var input = $(this).parents(".password").find(".password-input");

      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else if (input.attr("type") == "text") {
        input.attr("type", "password");
      }
    });
  }

  var gallery = function() {
    $(".button-list-style").on("click", function () {
      $(".wrap-gallery-item").addClass("list");
    });
    $(".button-grid-style").on("click", function () {
      $(".wrap-gallery-item").removeClass("list");
    });
  }

  var coppy = function() {
    $(".button-coppy").on("click", function () {
      myFunction()
    });
    function myFunction() {
      var copyText = document.getElementsByClassName("coppy-content");
      navigator.clipboard.writeText(copyText.text);
    }
  }

  var select_colors_theme = function () {
    if ($('div').hasClass("select-colors-theme")) {
      $(".select-colors-theme .item").on("click", function (e) {
        $(this).parents(".select-colors-theme").find(".active").removeClass("active");
        $(this).toggleClass("active");
      })
    }
  }

  var icon_function = function () {
    if ($('div').hasClass("list-icon-function")) {
      $(".list-icon-function .trash").on("click", function (e) {
        $(this).parents(".product-item").remove();
        $(this).parents(".attribute-item").remove();
        $(this).parents(".countries-item").remove();
      })
    }
  }

  var box_search = function () {
    if ($('div').hasClass("header-search")) {
      $(".header-search").on("click", function (e) {
        $(".box-content-search").addClass("active");
      })
    }
  }

  var box_search=function(){
        
    $(document).on('click',function(e){
      var clickID=e.target.id;if((clickID!=='s')){
          $('.box-content-search').removeClass('active');
      }});
    $(document).on('click',function(e){
        var clickID=e.target.class;if((clickID!=='a111')){
            $('.show-search').removeClass('active');
    }});
        
    $('.show-search').on('click',function(event){
        event.stopPropagation();});
    $('.search-form').on('click',function(event){
        event.stopPropagation();});
    $('.show-search').on('click',function(event){
        if(!$('.box-content-search').hasClass("active")){
            $('.box-content-search').addClass('active');
                event.preventDefault();
            }
    })
   
  }


  // Dom Ready
  $(function () {
    selectImages();
    menuleft();
    tabs();
    progresslevel();
    collapse_menu();
    retinaLogos();
    fullcheckbox();
    showpass();
    gallery();
    coppy();
    select_colors_theme();
    icon_function();
    box_search();
    
  });

})(jQuery);
