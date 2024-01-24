(function ($) {
    /* "use strict" */
  
    var tfLineChart = (function () {
  
      var chartBar1 = function () {
        var options1 = {
            series: [
              {
                data: [20, 50, 7, 100, 30, 80, 100],
              },
            ],
            colors: ["#22C55E"],
            chart: {
              type: "area",
              maxWidth: 96,
              height: 28,
              sparkline: { enabled: !0 },
            },
            plotOptions: { bar: { columnWidth: "50%" } },
            xaxis: { crosshairs: { width: 1 } },
  
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 3,
              dashArray: 0,
            },
  
            tooltip: {
              enabled: false,
              fixed: { enabled: !1 },
              x: { show: !1 },
              y: {
                title: {
                  formatter: function (e) {
                    return "";
                  },
                },
              },
              marker: { show: !1 },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                  value: 0,
                },
              },
            },
          },
          chart1 = new ApexCharts(
            document.querySelector("#line-chart-1"),
            options1
          );
        chart1.render();
      };
      var chartBar2 = function () {
        var options2 = {
            series: [
              {
                data: [20, 50, 7, 100, 30, 80, 100],
              },
            ],
            colors: ["#FF5200"],
            chart: {
              type: "area",
              maxWidth: 96,
              height: 28,
              sparkline: { enabled: !0 },
            },
            plotOptions: { bar: { columnWidth: "50%" } },
            xaxis: { crosshairs: { width: 1 } },
  
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 3,
              dashArray: 0,
            },
  
            tooltip: {
              enabled: false,
              fixed: { enabled: !1 },
              x: { show: !1 },
              y: {
                title: {
                  formatter: function (e) {
                    return "";
                  },
                },
              },
              marker: { show: !1 },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                  value: 0,
                },
              },
            },
          },
          chart2 = new ApexCharts(
            document.querySelector("#line-chart-2"),
            options2
          );
        chart2.render();
      };
      var chartBar3 = function () {
        var options3 = {
            series: [
              {
                data: [20, 50, 7, 100, 30, 80, 100],
              },
            ],
            colors: ["#CBD5E1"],
            chart: {
              type: "area",
              maxWidth: 96,
              height: 28,
              sparkline: { enabled: !0 },
            },
            plotOptions: { bar: { columnWidth: "50%" } },
            xaxis: { crosshairs: { width: 1 } },
  
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 3,
              dashArray: 0,
            },
  
            tooltip: {
              enabled: false,
              fixed: { enabled: !1 },
              x: { show: !1 },
              y: {
                title: {
                  formatter: function (e) {
                    return "";
                  },
                },
              },
              marker: { show: !1 },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                  value: 0,
                },
              },
            },
          },
          chart3 = new ApexCharts(
            document.querySelector("#line-chart-3"),
            options3
          );
        chart3.render();
      };
      var chartBar4 = function () {
        var options4 = {
            series: [
              {
                data: [20, 50, 7, 100, 30, 80, 100],
              },
            ],
            colors: ["#22C55E"],
            chart: {
              type: "area",
              maxWidth: 96,
              height: 28,
              sparkline: { enabled: !0 },
            },
            plotOptions: { bar: { columnWidth: "50%" } },
            xaxis: { crosshairs: { width: 1 } },
  
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 3,
              dashArray: 0,
            },
            tooltip: {
              enabled: false,
              fixed: { enabled: !1 },
              x: { show: !1 },
              y: {
                title: {
                  formatter: function (e) {
                    return "";
                  },
                },
              },
              marker: { show: !1 },
            },
            states: {
              hover: {
                filter: {
                  type: "none",
                  value: 0,
                },
              },
            },
          },
          chart4 = new ApexCharts(
            document.querySelector("#line-chart-4"),
            options4
          );
        chart4.render();
      };
      var chartBar5 = function () {
        var options5 = {
          chart: {
            height: 291,
            type: "area",
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          series: [
            {
              name: "$",
              data: [45, 52, 38, 45, 49, 43, 40 ,45, 52, 38, 45, 19]
            }
          ],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.3,
              opacityTo: 0.9,
              stops: [0, 90, 100]
            }
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]
          }
        };
        chart5 = new ApexCharts(
          document.querySelector("#line-chart-5"),
          options5
        );
        chart5.render();
      };
      var chartBar6 = function () {
        var options6 = {
          series: [{
          name: 'Profit',
          data: [81, 121, 40, 52, 164, 113, 26, 68]
        }, {
          name: 'Revenue',
          data: [135, 182, 76, 112, 199, 168, 49, 120]
        }],
          chart: {
          type: 'bar',
          height: 200,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false,
        },
        colors: ['#2377FC33', '#2377FC'],
        stroke: {
          show: false,
        },
        xaxis: {
          categories: ['Jan' , 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
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
        chart6 = new ApexCharts(
          document.querySelector("#line-chart-6"),
          options6
        );
        chart6.render();
      };
  
      /* Function ============ */
      return {
        init: function () {},
  
        load: function () {
          chartBar1();
          chartBar2();
          chartBar3();
          chartBar4();
          chartBar5();
          chartBar6();
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