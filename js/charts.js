var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
  width: '100%',  // Ensure the chart takes the full width
    height: '240',
},
plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 90,
    offsetY: 0,
    donut: {
        size: '95%'
    }
  }
},
dataLabels: {
enabled: false
},
legend: {
show: false
},
tooltip: {
y: {
formatter: function(val) {
return val
},
title: {
formatter: function (seriesName) {
  return ''
}
}
}
},
grid: {
  padding: {
    bottom: -80,
    left:0,
    right:0
  }
},
responsive: [{
  breakpoint: 320,
  options: {
    chart: {
      width: 430,
      height:240
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart_wallet"), options);
chart.render();

var options = {
  series: [{
    name: 'دارایی شما',
    data: [0.5, 1, 2, 3, 2.5, 3.5, 3.1,4]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    colors: ['#000000']
  },
  markers: {
    size: 5, 
    colors: ['#ffffff'],
    strokeColors: '#000000',
    strokeWidth: 2,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      "2024-08-1",
      "2024-08-2",
      "2024-08-3",
      "2024-08-4",
      "2024-08-5",
      "2024-08-6",
      "2024-08-7",
      "2024-08-8",
    ],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },labels: {
      style: {
        colors: '#CACFDB',
      }
    }
  },
  yaxis: {
    title: {
      text: 'ارزش دارایی (میلیون)',
      style: {
        fontSize: '11px',
        fontWeight: '400',
        fontFamily: 'dana', 
        color: '#CACFDB'
      },
      offsetX: -80,
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },labels: {
      style: {
        colors: '#CACFDB',
      }
    }
  },
  grid: {
    show: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: ['#2E00CA'], 
      inverseColors: false,
      opacityFrom: 0.8, 
      opacityTo: 0, 
      stops: [0,100],
      colorStops: [ 
        [
          {
            offset: 0,
            color: '#2E00CA',
            opacity: 0.3
          },
          {
            offset: 100,
            color: '#2E00CA',
            opacity: 0
          }
        ]
      ]
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy'
    },
    marker: {
      show: false
    },
    style: {
      fontSize: '12px',
      fontFamily: 'dana',
    },
    fillSeriesColor: false,
    theme: 'dark'
  },
};

var chart = new ApexCharts(document.querySelector("#chart_inventory"), options);
chart.render();

var options = {
  series: [{
      name: 'سود',
      data: [
          { x: new Date(2024, 3, 20), y: -10 },
          { x: new Date(2024, 3, 21), y: 20 },
          { x: new Date(2024, 3, 22), y: 33 },
          { x: new Date(2024, 3, 23), y: 50 },
          { x: new Date(2024, 3, 24), y: -15 },
          { x: new Date(2024, 3, 25), y: 30 }
      ]
  }],
  chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
  },
  grid: {
    show: false,
  },
  plotOptions: {
      bar: {
          colors: {
              ranges: [{
                  from: -100000000,
                  to: 0,
                  color: '#EF4444'
              }, {
                  from: 0,
                  to: 100000000,
                  color: '#22C55E'
              }],
              backgroundBarColors: ['#F8F8F8'],
          },
          columnWidth: '50%'
      }
  },
  dataLabels: {
      enabled: false
  },
  xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },labels: {
        format: 'M/d',
        style: {
          colors: '#CACFDB',
        }
      }
  },
  yaxis: {
    title: {
      text: 'ارزش دارایی (میلیون)',
      style: {
        fontSize: '11px',
        fontWeight: '400',
        fontFamily: 'dana', 
        color: '#CACFDB'
      },
      offsetX: -80,
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },labels: {
      style: {
        colors: '#CACFDB',
      }
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy'
    },
    marker: {
      show: false
    },
    style: {
      fontSize: '12px',
      fontFamily: 'dana',
    },
    fillSeriesColor: false,
    theme: 'dark'
  }
};

var chart = new ApexCharts(document.querySelector("#chart_profit"), options);
chart.render();
