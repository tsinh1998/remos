(function ($) {
  
    var tfLineChart = (function () {
  
      var chartBar = function () {
      
        var options = {
            series: [{
            name: 'Revenue',
            data: [135, 182, 76, 112, 199, 168, 49]
          }],
            chart: {
            type: 'bar',
            height: 280,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '10px',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false,
          },
          colors:  '#2377FC',
          stroke: {
            show: false,
          },
          xaxis: {
            categories: ['Mon' , 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yaxis: {
            show: false,
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
        };

        chart = new ApexCharts(
          document.querySelector("#line-chart-21"),
          options
        );
        if ($("#line-chart-21").length > 0) {
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