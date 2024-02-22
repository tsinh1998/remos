(function ($) {
  
    var tfLineChart = (function () {
  
      var chartBar = function () {
        var options = {
          series: [61],
          chart: {
          height: 185,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '61%',
            }
          },
        },
        stroke: {
          lineCap: 'round'
        },
        colors: ['#FFFFFF'],
        labels: ['Goal'],
        };
        chart = new ApexCharts(
          document.querySelector("#line-chart-17"),
          options
        );
        if ($("#line-chart-17").length > 0) {
          chart.render();
        }
      };
  
      /* Function ============ */
      return {
        init: function () {},
  
        load: function () {
          chartBar();
        },
        resize: function () {},
      };
    })();
  
    jQuery(document).ready(function () {});
  
    jQuery(window).on("load", function () {
      tfLineChart.load();
    });
  
    jQuery(window).on("resize", function () {});
})(jQuery);