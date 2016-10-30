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
d3.select('#chart')
  .selectAll('div')
  .data(['a', 'b', 'c'])
  .enter()
  .append('div')
  .classed('item', true)
  .text(function (d) {
    return d;
  })
  .style('background', function (d, i) {
    return '#' + i + i + i;
  })
  .style('color', 'white');