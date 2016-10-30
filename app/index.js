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
var barsData = [100, 50, 70, 140, 20];
// var barWidth = 20;
// var barOffset = 5;

var canvas = d3.select('svg').style('background', '#c9d7d6');
var canvasHeight = parseInt(canvas.attr('height'), 10);

// var yScale = d3.scale.linear() // for 3.x version
var yScale = d3.scaleLinear() // for 4.x version
               .domain([0, d3.max(barsData)])
               .range([0, canvasHeight]);

// var xScale = d3.scale.ordinal() // for 3.x
var xScale = d3.scaleBand() // for 4.x version
               .domain(d3.range(0, barsData.length))
               .range([0, parseInt(canvas.node().clientWidth, 10)]);

canvas.selectAll('rect')
      .data(barsData)
      .enter()
      .append('rect')
      .style('fill', '#c61c6f')
      .attr('width', xScale.bandwidth()) // .attr('width', xScale.rangeBand()) for 3.x version
      .attr('height', function (d) {
        // return d; 
        return yScale(d); // scale height
      })
      .attr('x', function (d,i) {
        return xScale(i);
      })
      .attr('y', function (d) {
        return canvasHeight - yScale(d);
      });

