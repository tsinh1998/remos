(function ($) {
  
    var tfLineChart = (function () {
  
      var chartBar = function () {
        var options = {
          series: [61],
          chart: {
            height: 150,
            type: 'radialBar'
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: '60%',
                background: 'transparent',
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front'
              },
              track: {
                background: '#003A95',
                strokeWidth: '50%'
              },
    
              dataLabels: {
                show: true,
                name: {
                  show: false
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val);
                  },
                  offsetY: 7,
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: '700',
                  show: true
                }
              }
            }
          },
          colors: ['#fff'],
          fill: {
            type: 'solid'
          },
          stroke: {
            lineCap: 'round'
          }
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