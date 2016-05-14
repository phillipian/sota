$(function() {
  $("[id='faculty-diversity-political-affiliation']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['The faculty is diverse enough', 'The faculty is not diverse enough'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      name: 'Conservative',
      data: [132, 20]
    }, {
      name: 'Liberal',
      data: [214, 233]
    }, {
      name: 'Libertarian',
      data: [31, 10]
    }, {
      name: 'Other or Unsure',
      data: [196, 87]
    }]
  });
});
