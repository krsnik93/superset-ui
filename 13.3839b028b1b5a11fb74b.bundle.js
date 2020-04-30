(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1021:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"renderTooltipFactory",(function(){return renderTooltipFactory}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),shortid=__webpack_require__(1410),shortid_default=__webpack_require__.n(shortid),TranslatorSingleton=__webpack_require__(521),NumberFormatterRegistrySingleton=__webpack_require__(112),XYChart=__webpack_require__(1987),LinearGradient=__webpack_require__(1422),AreaSeries=__webpack_require__(1423),CrossHair=__webpack_require__(1424),src=__webpack_require__(178),getTextDimension=__webpack_require__(1148),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function decreaseSizeUntil(startSize,computeDimension,condition){let size=startSize,dimension=computeDimension(size);for(;!condition(dimension);)size-=1,dimension=computeDimension(size);return size}function computeMaxFontSize(input){const{idealFontSize:idealFontSize,maxWidth:maxWidth,maxHeight:maxHeight,style:style}=input,rest=__rest(input,["idealFontSize","maxWidth","maxHeight","style"]);let size;if(null!=idealFontSize)size=idealFontSize;else{if(null==maxHeight)throw new Error("You must specify at least one of maxHeight or idealFontSize");size=Math.floor(maxHeight)}function computeDimension(fontSize){return Object(getTextDimension.a)(Object.assign(Object.assign({},rest),{style:Object.assign(Object.assign({},style),{fontSize:`${fontSize}px`})}))}return null!=maxWidth&&(size=decreaseSizeUntil(size,computeDimension,dim=>dim.width<=maxWidth)),null!=maxHeight&&(size=decreaseSizeUntil(size,computeDimension,dim=>dim.height<=maxHeight)),size}var smartDateVerbose=__webpack_require__(441);__webpack_require__(1419);const defaultNumberFormatter=Object(NumberFormatterRegistrySingleton.c)(),CHART_MARGIN={top:4,right:4,bottom:4,left:4},PROPORTION_HEADER=.3,PROPORTION_SUBHEADER=.125,PROPORTION_TRENDLINE=.3;function renderTooltipFactory(formatDate=smartDateVerbose.a,formatValue=defaultNumberFormatter){return function renderTooltip({datum:{x:x,y:y}}){return react_default.a.createElement("div",{style:{padding:"4px 8px"}},formatDate(new Date(x)),react_default.a.createElement("br",null),react_default.a.createElement("strong",null,null===y?Object(TranslatorSingleton.b)("N/A"):formatValue(y)))}}class BigNumber_BigNumberVis extends react_default.a.PureComponent{constructor(){super(...arguments),this.gradientId=shortid_default.a.generate()}getClassName(){const{className:className,showTrendLine:showTrendLine,bigNumberFallback:bigNumberFallback}=this.props,names=`superset-legacy-chart-big-number ${className} ${bigNumberFallback?"is-fallback-value":""}`;return showTrendLine?names:`${names} no-trendline`}createTemporaryContainer(){const container=document.createElement("div");return container.className=this.getClassName(),container.style.position="absolute",container.style.opacity="0",container}renderFallbackWarning(){const{bigNumberFallback:bigNumberFallback,formatTime:formatTime}=this.props;return bigNumberFallback?react_default.a.createElement("span",{className:"alert alert-warning",role:"alert",title:Object(TranslatorSingleton.b)("Last available value seen on %s",formatTime(bigNumberFallback.x))},Object(TranslatorSingleton.b)("Not up to date")):null}renderHeader(maxHeight){const{bigNumber:bigNumber,formatNumber:formatNumber,width:width}=this.props,text=null===bigNumber?Object(TranslatorSingleton.b)("No data"):formatNumber(bigNumber),container=this.createTemporaryContainer();document.body.append(container);const fontSize=computeMaxFontSize({text:text,maxWidth:width,maxHeight:maxHeight,className:"header-line",container:container});return container.remove(),react_default.a.createElement("div",{className:"header-line",style:{fontSize:fontSize,height:maxHeight}},text)}renderSubheader(maxHeight){const{bigNumber:bigNumber,subheader:subheader,width:width,bigNumberFallback:bigNumberFallback}=this.props;let fontSize=0;const NO_DATA_OR_HASNT_LANDED=Object(TranslatorSingleton.b)("No data after filtering or data is NULL for the latest time record"),NO_DATA=Object(TranslatorSingleton.b)("Try applying different filters or ensuring your datasource has data");let text=subheader;if(null===bigNumber&&(text=bigNumberFallback?NO_DATA:NO_DATA_OR_HASNT_LANDED),text){const container=this.createTemporaryContainer();return document.body.append(container),fontSize=computeMaxFontSize({text:text,maxWidth:width,maxHeight:maxHeight,className:"subheader-line",container:container}),container.remove(),react_default.a.createElement("div",{className:"subheader-line",style:{fontSize:fontSize,height:maxHeight}},text)}return null}renderTrendline(maxHeight){var _a;const{width:width,trendLineData:trendLineData,mainColor:mainColor,subheader:subheader,startYAxisAtZero:startYAxisAtZero,formatNumber:formatNumber,formatTime:formatTime,fromDatetime:fromDatetime,timeRangeFixed:timeRangeFixed}=this.props;if(!(null==trendLineData?void 0:trendLineData.some(d=>null!==d.y)))return null;const xScale={type:"timeUtc"},tooltipData=trendLineData&&[...trendLineData];if(tooltipData&&timeRangeFixed&&fromDatetime){const toDatetime=null!==(_a=this.props.toDatetime)&&void 0!==_a?_a:Date.now();tooltipData[0].x>fromDatetime&&tooltipData.unshift({x:fromDatetime,y:null}),tooltipData[tooltipData.length-1].x<toDatetime&&tooltipData.push({x:toDatetime,y:null}),xScale.domain=[fromDatetime,toDatetime]}return react_default.a.createElement(XYChart.a,{snapTooltipToDataX:!0,ariaLabel:`Big number visualization ${subheader}`,renderTooltip:renderTooltipFactory(formatTime,formatNumber),xScale:xScale,yScale:{type:"linear",includeZero:startYAxisAtZero},width:Math.floor(width),height:maxHeight,margin:CHART_MARGIN,eventTrigger:"container"},react_default.a.createElement(LinearGradient.a,{id:this.gradientId,from:mainColor,to:"#fff"}),react_default.a.createElement(AreaSeries.a,{data:tooltipData,fill:`url(#${this.gradientId})`,stroke:mainColor}),react_default.a.createElement(CrossHair.a,{fullHeight:!0,stroke:mainColor,circleFill:mainColor,circleStroke:"#fff",showHorizontalLine:!1,strokeDasharray:"5,2"}))}render(){const{showTrendLine:showTrendLine,height:height,headerFontSize:headerFontSize,subheaderFontSize:subheaderFontSize}=this.props,className=this.getClassName();if(showTrendLine){const chartHeight=Math.floor(PROPORTION_TRENDLINE*height),allTextHeight=height-chartHeight;return react_default.a.createElement("div",{className:className},react_default.a.createElement("div",{className:"text-container",style:{height:allTextHeight}},this.renderFallbackWarning(),this.renderHeader(Math.ceil(headerFontSize*(1-PROPORTION_TRENDLINE)*height)),this.renderSubheader(Math.ceil(subheaderFontSize*(1-PROPORTION_TRENDLINE)*height))),this.renderTrendline(chartHeight))}return react_default.a.createElement("div",{className:className,style:{height:height}},this.renderHeader(Math.ceil(headerFontSize*height)),this.renderSubheader(Math.ceil(subheaderFontSize*height)))}}BigNumber_BigNumberVis.defaultProps={className:"",formatNumber:num=>String(num),formatTime:smartDateVerbose.a.formatFunc,headerFontSize:PROPORTION_HEADER,mainColor:src.BRAND_COLOR,showTrendLine:!1,startYAxisAtZero:!0,subheader:"",subheaderFontSize:PROPORTION_SUBHEADER,timeRangeFixed:!1};__webpack_exports__.default=BigNumber_BigNumberVis},1148:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getTextDimension}));const STYLE_FIELDS=["font","fontWeight","fontStyle","fontSize","fontFamily","letterSpacing"];const DEFAULT_DIMENSION={height:20,width:100};class LazyFactory{constructor(factoryFn){this.activeNodes=new Map,this.factoryFn=factoryFn}createInContainer(container=document.body){if(this.activeNodes.has(container)){const entry=this.activeNodes.get(container);return entry.counter+=1,entry.node}const node=this.factoryFn();return container.append(node),this.activeNodes.set(container,{counter:1,node:node}),node}removeFromContainer(container=document.body){if(this.activeNodes.has(container)){const entry=this.activeNodes.get(container);entry.counter-=1,0===entry.counter&&(container.removeChild(entry.node),this.activeNodes.delete(container))}}}const SVG_NS="http://www.w3.org/2000/svg";const hiddenSvgFactory=new LazyFactory((function createHiddenSvgNode(){const svgNode=document.createElementNS(SVG_NS,"svg");return svgNode.style.position="absolute",svgNode.style.top="-100%",svgNode.style.left="-100%",svgNode.style.width="0",svgNode.style.height="0",svgNode.style.opacity="0",svgNode.style.pointerEvents="none",svgNode})),textFactory=new LazyFactory((function createTextNode(){return document.createElementNS(SVG_NS,"text")}));function getTextDimension(input,defaultDimension){const{text:text,className:className,style:style,container:container}=input;if(0===text.length)return{height:0,width:0};const svgNode=hiddenSvgFactory.createInContainer(container),textNode=textFactory.createInContainer(svgNode);!function updateTextNode(node,{className:className,style:style={},text:text}={}){const textNode=node;return textNode.textContent!==text&&(textNode.textContent=void 0===text?null:text),textNode.getAttribute("class")!==className&&textNode.setAttribute("class",null!=className?className:""),textNode.style.removeProperty("font"),textNode.style.removeProperty("font-weight"),textNode.style.removeProperty("font-style"),textNode.style.removeProperty("font-size"),textNode.style.removeProperty("font-family"),textNode.style.removeProperty("letter-spacing"),STYLE_FIELDS.filter(field=>void 0!==style[field]&&null!==style[field]).forEach(field=>{textNode.style[field]=`${style[field]}`}),textNode}(textNode,{className:className,style:style,text:text});const dimension=function getBBoxCeil(node,defaultDimension=DEFAULT_DIMENSION){const{width:width,height:height}=node.getBBox?node.getBBox():defaultDimension;return{height:Math.ceil(height),width:Math.ceil(width)}}(textNode,defaultDimension);return setTimeout(()=>{textFactory.removeFromContainer(svgNode),hiddenSvgFactory.removeFromContainer(container)},500),dimension}},1419:function(module,exports,__webpack_require__){var api=__webpack_require__(243),content=__webpack_require__(1420);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1420:function(module,exports,__webpack_require__){(exports=__webpack_require__(244)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.superset-legacy-chart-big-number {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,\n    Open Sans, Helvetica Neue, sans-serif;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.superset-legacy-chart-big-number.no-trendline .subheader-line {\n  padding-bottom: 0.3em;\n}\n\n.superset-legacy-chart-big-number .text-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.superset-legacy-chart-big-number .text-container .alert {\n  font-size: 11px;\n  margin: -0.5em 0 0.4em;\n  line-height: 1;\n  padding: 2px 4px 3px;\n  border-radius: 3px;\n}\n\n.superset-legacy-chart-big-number .header-line {\n  position: relative;\n  line-height: 1em;\n  font-weight: 600;\n}\n\n.superset-legacy-chart-big-number .header-line span {\n  position: absolute;\n  bottom: 0;\n}\n\n.superset-legacy-chart-big-number .subheader-line {\n  line-height: 1em;\n  padding-bottom: 0;\n  font-weight: 200;\n}\n\n.superset-legacy-chart-big-number.is-fallback-value .header-line,\n.superset-legacy-chart-big-number.is-fallback-value .subheader-line {\n  opacity: 0.5;\n}\n\n.superset-data-ui-tooltip {\n  z-index: 1000;\n  background: #000;\n}\n',""]),module.exports=exports}}]);
//# sourceMappingURL=13.3839b028b1b5a11fb74b.bundle.js.map