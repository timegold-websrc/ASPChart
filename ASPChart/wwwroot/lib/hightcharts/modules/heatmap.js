/*
 Highcharts JS v7.0.3 (2019-02-06)

 (c) 2009-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(h){"object"===typeof module&&module.exports?(h["default"]=h,module.exports=h):"function"===typeof define&&define.amd?define(function(){return h}):h("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(h){(function(b){var h=b.addEvent,k=b.Axis,q=b.Chart,l=b.color,n,r=b.extend,p=b.isNumber,e=b.Legend,c=b.LegendSymbolMixin,v=b.noop,u=b.merge,t=b.pick;b.ColorAxis||(n=b.ColorAxis=function(){this.init.apply(this,arguments)},r(n.prototype,k.prototype),r(n.prototype,{defaultColorAxisOptions:{lineWidth:0,
minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(k.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,g;this.coll="colorAxis";g=u(this.defaultColorAxisOptions,
{side:f?2:1,reversed:!f},d,{opposite:!f,showEmpty:!1,title:null,visible:a.options.legend.enabled});k.prototype.init.call(this,a,g);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,g=0,m=d.options.chart.colorCount,b=this.options,e=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];a.dataClasses.forEach(function(a,c){a=u(a);f.push(a);if(d.styledMode||!a.color)"category"===
b.dataClassColor?(d.styledMode||(c=d.options.colors,m=c.length,a.color=c[g]),a.colorIndex=g,g++,g===m&&(g=0)):a.color=l(b.minColor).tweenTo(l(b.maxColor),2>e?.5:c/(e-1))})},setTickPositions:function(){if(!this.dataClasses)return k.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=l(a[1])})},setOptions:function(a){k.prototype.setOptions.call(this,a);this.options.crosshair=
this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,f=d.options.legend||{},g,m;a?(this.left=f=a.attr("x"),this.top=g=a.attr("y"),this.width=m=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-m,this.bottom=d.chartHeight-g-a,this.len=this.horiz?m:a,this.pos=this.horiz?f:g):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||
1)},toColor:function(a,d){var f=this.stops,g,m,b=this.dataClasses,c,e;if(b)for(e=b.length;e--;){if(c=b[e],g=c.from,f=c.to,(void 0===g||a>=g)&&(void 0===f||a<=f)){m=c.color;d&&(d.dataClass=e,d.colorIndex=c.colorIndex);break}}else{a=this.normalizedValue(a);for(e=f.length;e--&&!(a>f[e][0]););g=f[e]||f[e+1];f=f[e+1]||g;a=1-(f[0]-a)/(f[0]-g[0]||1);m=g.color.tweenTo(f.color,a)}return m},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,k.prototype.getOffset.call(this),
this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,g=a.options,e=this.horiz,c=t(g.symbolWidth,e?this.defaultLegendLength:12),b=t(g.symbolHeight,e?12:this.defaultLegendLength),l=t(g.labelPadding,e?16:30),g=t(g.itemDistance,
10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,c,b).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=c+f+(e?g:l);this.legendItemHeight=b+f+(e?l:0)},setState:function(a){this.series.forEach(function(d){d.setState(a)})},visible:!0,setVisible:v,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=
Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=d&&d.plotX,e=d&&d.plotY,c,b=this.pos,l=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),c<b?c=b-2:c>b+l&&(c=b+l+2),d.plotX=c,d.plotY=this.len-c,k.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=e,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||this.cross.attr({fill:this.crosshair.color})))},
getPlotLinePath:function(a,d,f,e,c){return p(c)?this.horiz?["M",c-4,this.top-6,"L",c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:k.prototype.getPlotLinePath.call(this,a,d,f,e)},update:function(a,d){var c=this.chart,e=c.legend;this.series.forEach(function(a){a.isDirtyData=!0});a.dataClasses&&e.allItems&&(e.allItems.forEach(function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=u(this.userOptions,a);k.prototype.update.call(this,
a,d);this.legendItem&&(this.setLegendColor(),e.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);k.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,d=this.chart,e=this.legendItems,g=d.options.legend,l=g.valueDecimals,n=g.valueSuffix||"",h;e.length||this.dataClasses.forEach(function(f,g){var k=!0,m=f.from,p=f.to;h="";void 0===m?h="\x3c ":void 0===p&&(h="\x3e ");void 0!==m&&(h+=b.numberFormat(m,l)+n);void 0!==m&&void 0!==p&&(h+=
" - ");void 0!==p&&(h+=b.numberFormat(p,l)+n);e.push(r({chart:d,name:h,options:{},drawLegendSymbol:c.drawRectangle,visible:!0,setState:v,isDataClass:!0,setVisible:function(){k=this.visible=!k;a.series.forEach(function(a){a.points.forEach(function(a){a.dataClass===g&&a.setVisible(k)})});d.legend.colorizeItem(this,k)}},f))});return e},name:""}),["fill","stroke"].forEach(function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,l(this.start).tweenTo(l(this.end),this.pos),null,!0)}}),h(q,"afterGetAxes",
function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new n(this,a)}),h(e,"afterGetAllItems",function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():d.push(c),c.series.forEach(function(c){b.erase(a.allItems,c)}));for(c=d.length;c--;)a.allItems.unshift(d[c])}),h(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),h(e,"afterUpdate",function(a,
c,e){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},e)}))})(h);(function(b){var h=b.defined,k=b.noop,q=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(b){var l=this,h=b?"show":"hide";l.visible=!!b;["graphic","dataLabel"].forEach(function(b){if(l[b])l[b][h]()})},setState:function(l){b.Point.prototype.setState.call(this,l);this.graphic&&this.graphic.attr({zIndex:"hover"===l?1:0})}};b.colorSeriesMixin=
{pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:k,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:q.column.prototype.pointAttribs,translateColors:function(){var b=this,h=this.options.nullColor,k=this.colorAxis,p=this.colorKey;this.data.forEach(function(e){var c=e[p];if(c=e.options.color||(e.isNull?h:k&&void 0!==c?k.toColor(c,e):e.color||b.color))e.color=c})},colorAttribs:function(b){var l=
{};h(b.color)&&(l[this.colorProp||"fill"]=b.color);return l}}})(h);(function(b){var h=b.colorPointMixin,k=b.merge,q=b.noop,l=b.pick,n=b.Series,r=b.seriesType,p=b.seriesTypes;r("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},
k(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var e;p.scatter.prototype.init.apply(this,arguments);e=this.options;e.pointRange=l(e.pointRange,e.colsize||1);this.yAxis.axisPointRange=e.rowsize||1},translate:function(){var e=this.options,c=this.xAxis,b=this.yAxis,h=e.pointPadding||0,k=function(a,c,b){return Math.min(Math.max(c,a),b)},a=this.pointPlacementToXValue();this.generatePoints();this.points.forEach(function(d){var f=
(e.colsize||1)/2,g=(e.rowsize||1)/2,m=k(Math.round(c.len-c.translate(d.x-f,0,1,0,1,-a)),-c.len,2*c.len),f=k(Math.round(c.len-c.translate(d.x+f,0,1,0,1,-a)),-c.len,2*c.len),p=k(Math.round(b.translate(d.y-g,0,1,0,1)),-b.len,2*b.len),g=k(Math.round(b.translate(d.y+g,0,1,0,1)),-b.len,2*b.len),n=l(d.pointPadding,h);d.plotX=d.clientX=(m+f)/2;d.plotY=(p+g)/2;d.shapeType="rect";d.shapeArgs={x:Math.min(m,f)+n,y:Math.min(p,g)+n,width:Math.abs(f-m)-2*n,height:Math.abs(g-p)-2*n}});this.translateColors()},drawPoints:function(){var b=
this.chart.styledMode?"css":"attr";p.column.prototype.drawPoints.call(this);this.points.forEach(function(c){c.graphic[b](this.colorAttribs(c))},this)},getValidPoints:function(b,c){return n.prototype.getValidPoints.call(this,b,c,!0)},animate:q,getBox:q,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:p.column.prototype.alignDataLabel,getExtremes:function(){n.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;n.prototype.getExtremes.call(this)}}),
b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},h))})(h)});
//# sourceMappingURL=heatmap.js.map
