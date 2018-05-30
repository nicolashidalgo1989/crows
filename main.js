var svg = document.querySelector('#cable');
//reference https://jsfiddle.net/83qpktrx/2/
//https://www.sitepoint.com/svg-path-element/
//dimension of svg
var svgRect = svg.getBoundingClientRect();
var svgw = svgRect.width;
var svgh = svgRect.height;
//center point of svg
var xcenter = svgw/2;
var ycenter = svgh/2;
//http://stackoverflow.com/a/3642265/1869660
function makeSVGElement(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) {
        el.setAttribute(k, attrs[k]);
    }
    return el;
}
var cable = makeSVGElement('path', {    cx: xcenter,
                                        cy: ycenter,
                                        r: 10,
                                        stroke: 'red',
                                        'stroke-width': 2,
                                        fill: 'orange' }
);
svg.appendChild(cable);
