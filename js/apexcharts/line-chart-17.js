// (function ($) {
  
//     var tfLineChart = (function () {
  
//       var chartBar = function () {
//         var options = {
//           series: [61],
//           chart: {
//             height: 150,
//             type: 'radialBar'
//           },
//           plotOptions: {
//             radialBar: {
//               hollow: {
//                 margin: 0,
//                 size: '60%',
//                 background: 'transparent',
//                 imageOffsetX: 0,
//                 imageOffsetY: 0,
//                 position: 'front'
//               },
//               track: {
//                 background: '#003A95',
//                 strokeWidth: '50%'
//               },
    
//               dataLabels: {
//                 show: true,
//                 name: {
//                   show: false
//                 },
//                 value: {
//                   formatter: function (val) {
//                     return parseInt(val);
//                   },
//                   offsetY: 7,
//                   color: '#fff',
//                   fontSize: '20px',
//                   fontWeight: '700',
//                   show: true
//                 }
//               }
//             }
//           },
//           colors: ['#fff'],
//           fill: {
//             type: 'solid'
//           },
//           stroke: {
//             lineCap: 'round'
//           }
//         };
//         chart = new ApexCharts(
//           document.querySelector("#line-chart-17"),
//           options
//         );
//         if ($("#line-chart-17").length > 0) {
//           chart.render();
//         }
//       };
  
//       /* Function ============ */
//       return {
//         init: function () {},
  
//         load: function () {
//           chartBar();
//         },
//         resize: function () {},
//       };
//     })();
  
//     jQuery(document).ready(function () {});
  
//     jQuery(window).on("load", function () {
//       tfLineChart.load();
//     });
  
//     jQuery(window).on("resize", function () {});
// })(jQuery);

$(".circle_percent").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000, 
  easing: 'swing', 
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+"%");
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
} 
});