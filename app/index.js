'use strict';

// d3.select('#chart')
//   .insert('span', ':nth-child(3)')
//   .html('<strong>new tag after third element on the chart section</strong>');

//class add
// d3.selectAll('.item')
//   .classed('someClass', true);
// selection.classed({'foo': true, 'bar': false}), or use a space-separated list of class names like so: selection.classed('foo bar', true).

//styling
// selection.style({stroke: "black", "stroke-width": "2px"}); // only in v 3

// added elements
// d3.select('#chart')
//   .selectAll('div')
//   .data(['a', 'b', 'c'])
//   .enter()
//   .append('div')
//   .classed('item', true)
//   .text(function (d) {
//     return d;
//   })
//   .style('background', function (d, i) {
//     return '#' + i + i + i;
//   })
//   .style('color', 'white');

// ---------------------------
// диограма из прямогуольников
// var barsData = [100, 50, 70, 40, 20];
// var barWidth = 20;
// var barOffset = 5;

// var canvas = d3.select('svg').style('background', '#c9d7d6');
// var canvasHeight = parseInt(canvas.attr('height'), 10);

// canvas.selectAll('rect')
//       .data(barsData)
//       .enter()
//       .append('rect')
//       .style('fill', '#c61c6f')
//       .attr('width', barWidth)
//       .attr('height', function (d) { return d; })
//       .attr('x', function (d,i) {
//         return i * (barWidth + barOffset);
//       })
//       .attr('y', function (d) {
//         return canvasHeight - d;
//       });

