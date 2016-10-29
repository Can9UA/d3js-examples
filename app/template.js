'use strict';

var svg = d3.select('.example-1');
var coords = [{cx: 100, cy: 100}, {cx: 200, cy: 200}];

// for (var i = 0; i < coords.length; i++) {
//   svg.append('circle')
//      .attr('r', '50')
//      .attr('cx', coords[i].cx)
//      .attr('cy', coords[i].cy);
// }

// best practis append two circles
svg.selectAll('circle') // выбираем эл если их нет, то при заполенини данынми они будут созданы
   .data(coords) // ообавляем данные
   .enter() // получить заполнители для недостающих элементов.
   .append('circle') // добавляем элементы
   .attr('r', 50) // заполняем атрибуты
   .attr('cx', function (d) { return d.cx; }) // (d, i) индекс элемента в наборе
   .attr('cy', function (d) { return d.cy; });

// окружность из идругих кругов ----------------
var svg2 = d3.select('.example-2');

var n = 30;
var rSmall = 9;
var rLarge = 100;
var step = (2 * Math.PI) / n;

var points = d3.range(n); // генерирует массив пустых эл заданого количества
var coords = [];
var circleCenter = {x: 150, y: 150};


// расчет координат центра точек
points.forEach(function (p, i) {
  var angle = i * step;

  coords.push({
    cx: circleCenter.x + rLarge * Math.cos(angle),
    cy: circleCenter.y + rLarge * Math.sin(angle)
  });
});

svg2.selectAll('circle')
    .data(coords)
    .enter()
    .append('circle')
    .attr('r', rSmall)
    .attr('cx', function (d) { return d.cx; })
    .attr('cy', function (d) { return d.cy; });

// спираль -----------------
var svg3 = d3.select('.example-3');

var depth = 7;
var segments = 20;
var n = segments * depth;
var rSmall = 2;
var rLarge = 100;
var step = (2 * Math.PI) / segments;

var points = d3.range(n); // генерирует массив пустых эл заданого количества
var coords = [];
var circleCenter = {x: 150, y: 150};

// var web = d3.layout.force() // позиционирование связанных вершин методом физического моделирования.
//             .linkStrength(1.0) // слиа связи
//             .friction(0.9) // трение
//             .linkDistance(-10) // расстояние на котором действует сила связи
//             .charge(-50) // заряд эл могут оталкиватся или притягиватся
//             .gravity(0.7) // центр связи с центром картинки
//             .theta(0.8) // точность симуляции
//             .alpha(0.1) // прогресс работы силовго поля
//             .on('tick', function () {

//             });

// web.size([500, 500]);

var radiusStep = rLarge / n;
// расчет координат центра точек для сприали с помощью shrinkingRadius
points.forEach(function (p, i) {
  var angle = i * step;
  var shrinkingRadius = rLarge - i * radiusStep;

  coords.push({
    cx: circleCenter.x + shrinkingRadius * Math.cos(angle),
    cy: circleCenter.y + shrinkingRadius * Math.sin(angle)
  });
});


// добавляем фон
svg3.append('g')
    .selectAll('rect')
    .data([1])
    .enter()
    .append('rect')
    .style('fill', '#454545')
    .attr('height', '100%')
    .attr('width', '100%');

svg3.selectAll('circle')
    .data(coords)
    .enter()
    .append('circle')
    .style('stroke', 'blue')
    .attr('r', rSmall)
    .attr('cx', function (d) { return d.cx; })
    .attr('cy', function (d) { return d.cy; });
