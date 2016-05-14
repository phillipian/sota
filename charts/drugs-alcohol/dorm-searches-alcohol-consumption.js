$(function() {
  $("[id='dorm-searches-alcohol-consumption']").highcharts({
    title: {
      // text: 'Dorm Searches vs. Alcohol Consumption'
    },
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Should search dorms', 'Shouldn\'t search dorms'],
    },
    tooltip: {
      formatter: xRefBarTooltipFormatter
    },
    // plotOptions: {
    //   series: {
    //     stacking: 'normal'
    //   }
    // },
    series: [{
      name: 'Consumed alcohol on and off campus',
      data: [46, 165]
    }, {
      name: 'Consumed alcohol on campus',
      data: [1, 8]
    }, {
      name: 'Consumed alcohol off campus',
      data: [161, 180]
    }, {
      name: 'Never consumed alcohol',
      data: [246, 116]
    }]
  });
});
