(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1160:function(module,exports,__webpack_require__){var api=__webpack_require__(243),content=__webpack_require__(1161);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(content,options),content.locals?content.locals:{});module.exports=exported},1161:function(module,exports,__webpack_require__){(exports=__webpack_require__(244)(!1)).push([module.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.mapbox .slice_container div {\n  padding-top: 0px;\n}\n',""]),module.exports=exports},1407:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DEFAULT_MAX_ZOOM",(function(){return DEFAULT_MAX_ZOOM})),__webpack_require__.d(__webpack_exports__,"DEFAULT_POINT_RADIUS",(function(){return DEFAULT_POINT_RADIUS}));__webpack_require__(37);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(39),prop_types_default=__webpack_require__.n(prop_types),esm=__webpack_require__(1146),immutable=__webpack_require__(1132),immutable_default=__webpack_require__.n(immutable),web_mercator_viewport=__webpack_require__(1955);__webpack_require__(35);function roundDecimal(number,precision){let roundedNumber,p=precision;return roundedNumber=precision?Math.round(number*(p=10**p))/p:Math.round(number),roundedNumber}function kmToPixels(kilometers,latitude,zoomLevel){const latitudeRad=latitude*(Math.PI/180);return roundDecimal(kilometers/(40075.16*Math.cos(latitudeRad)/2**(zoomLevel+9)),2)}__webpack_require__(1201);const propTypes={aggregation:prop_types_default.a.string,compositeOperation:prop_types_default.a.string,dotRadius:prop_types_default.a.number,lngLatAccessor:prop_types_default.a.func,locations:prop_types_default.a.instanceOf(immutable_default.a.List).isRequired,pointRadiusUnit:prop_types_default.a.string,renderWhileDragging:prop_types_default.a.bool,rgb:prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number])),zoom:prop_types_default.a.number};class ScatterPlotGlowOverlay_ScatterPlotGlowOverlay extends react_default.a.PureComponent{constructor(props){super(props),this.redraw=this.redraw.bind(this)}drawText(ctx,pixel,options={}){const{fontHeight:fontHeight=0,label:label="",radius:radius=0,rgb:rgb=[0,0,0],shadow:shadow=!1}=options,maxWidth=1.8*radius,luminance=function luminanceFromRGB(r,g,b){return.2126*r+.7152*g+.0722*b}(rgb[1],rgb[2],rgb[3]);ctx.globalCompositeOperation="source-over",ctx.fillStyle=luminance<=110?"white":"black",ctx.font="".concat(fontHeight,"px sans-serif"),ctx.textAlign="center",ctx.textBaseline="middle",shadow&&(ctx.shadowBlur=15,ctx.shadowColor=luminance<=110?"black":"");const textWidth=ctx.measureText(label).width;textWidth>maxWidth&&(ctx.font="".concat(fontHeight/textWidth*maxWidth,"px sans-serif"));const{compositeOperation:compositeOperation}=this.props;ctx.fillText(label,pixel[0],pixel[1]),ctx.globalCompositeOperation=compositeOperation,ctx.shadowBlur=0,ctx.shadowColor=""}redraw({width:width,height:height,ctx:ctx,isDragging:isDragging,project:project}){const{aggregation:aggregation,compositeOperation:compositeOperation,dotRadius:dotRadius,lngLatAccessor:lngLatAccessor,locations:locations,pointRadiusUnit:pointRadiusUnit,renderWhileDragging:renderWhileDragging,rgb:rgb,zoom:zoom}=this.props,radius=dotRadius,clusterLabelMap=[];locations.forEach((location,i)=>{location.get("properties").get("cluster")&&(clusterLabelMap[i]=((properties,aggregation)=>{const count=properties.get("point_count");if(!aggregation)return count;if("sum"===aggregation||"min"===aggregation||"max"===aggregation)return properties.get(aggregation);const sum=properties.get("sum");if("mean"===aggregation)return Math.round(sum/count*100)/100;const variance=properties.get("squaredSum")/count-(sum/count)**2;return"var"===aggregation?Math.round(100*variance)/100:"stdev"===aggregation?Math.round(100*Math.sqrt(variance))/100:count})(location.get("properties"),aggregation))},this);const maxLabel=Math.max(...clusterLabelMap.filter(v=>!Number.isNaN(v)));ctx.clearRect(0,0,width,height),ctx.globalCompositeOperation=compositeOperation,!renderWhileDragging&&isDragging||!locations||locations.forEach((function(location,i){const pixel=project(lngLatAccessor(location)),pixelRounded=[roundDecimal(pixel[0],1),roundDecimal(pixel[1],1)];if(0<=pixelRounded[0]+radius&&pixelRounded[0]-radius<width&&0<=pixelRounded[1]+radius&&pixelRounded[1]-radius<height)if(ctx.beginPath(),location.get("properties").get("cluster")){let clusterLabel=clusterLabelMap[i];const scaledRadius=roundDecimal((clusterLabel/maxLabel)**.5*radius,1),fontHeight=roundDecimal(.5*scaledRadius,1),[x,y]=pixelRounded,gradient=ctx.createRadialGradient(x,y,scaledRadius,x,y,0);gradient.addColorStop(1,"rgba(".concat(rgb[1],", ").concat(rgb[2],", ").concat(rgb[3],", 0.8)")),gradient.addColorStop(0,"rgba(".concat(rgb[1],", ").concat(rgb[2],", ").concat(rgb[3],", 0)")),ctx.arc(pixelRounded[0],pixelRounded[1],scaledRadius,0,2*Math.PI),ctx.fillStyle=gradient,ctx.fill(),Number.isFinite(parseFloat(clusterLabel))&&(1e4<=clusterLabel?clusterLabel="".concat(Math.round(clusterLabel/1e3),"k"):1e3<=clusterLabel&&(clusterLabel="".concat(Math.round(clusterLabel/100)/10,"k")),this.drawText(ctx,pixelRounded,{fontHeight:fontHeight,label:clusterLabel,radius:scaledRadius,rgb:rgb,shadow:!0}))}else{const defaultRadius=radius/6,radiusProperty=location.get("properties").get("radius"),pointMetric=location.get("properties").get("metric");let pointLabel,pointRadius=null===radiusProperty?defaultRadius:radiusProperty;if(null!==radiusProperty){const pointLatitude=lngLatAccessor(location)[1];"Kilometers"===pointRadiusUnit?(pointLabel="".concat(roundDecimal(pointRadius,2),"km"),pointRadius=kmToPixels(pointRadius,pointLatitude,zoom)):"Miles"===pointRadiusUnit&&(pointLabel="".concat(roundDecimal(pointRadius,2),"mi"),pointRadius=kmToPixels(1.60934*pointRadius,pointLatitude,zoom))}null!==pointMetric&&(pointLabel=Number.isFinite(parseFloat(pointMetric))?roundDecimal(pointMetric,2):pointMetric),pointRadius||(pointRadius=defaultRadius),ctx.arc(pixelRounded[0],pixelRounded[1],roundDecimal(pointRadius,1),0,2*Math.PI),ctx.fillStyle="rgb(".concat(rgb[1],", ").concat(rgb[2],", ").concat(rgb[3],")"),ctx.fill(),void 0!==pointLabel&&this.drawText(ctx,pixelRounded,{fontHeight:roundDecimal(pointRadius,1),label:pointLabel,radius:pointRadius,rgb:rgb,shadow:!1})}}),this)}render(){return react_default.a.createElement(esm.a,{redraw:this.redraw})}}ScatterPlotGlowOverlay_ScatterPlotGlowOverlay.displayName="ScatterPlotGlowOverlay",ScatterPlotGlowOverlay_ScatterPlotGlowOverlay.propTypes=propTypes,ScatterPlotGlowOverlay_ScatterPlotGlowOverlay.defaultProps={compositeOperation:"source-over",dotRadius:4,lngLatAccessor:location=>[location.get(0),location.get(1)],renderWhileDragging:!0},ScatterPlotGlowOverlay_ScatterPlotGlowOverlay.__docgenInfo={description:"",methods:[{name:"drawText",docblock:null,modifiers:[],params:[{name:"ctx",type:null},{name:"pixel",type:null},{name:"options",type:null}],returns:null},{name:"redraw",docblock:null,modifiers:[],params:[{name:"{ width, height, ctx, isDragging, project }",type:null}],returns:null}],displayName:"ScatterPlotGlowOverlay",props:{compositeOperation:{defaultValue:{value:"'source-over'",computed:!1},type:{name:"string"},required:!1,description:""},dotRadius:{defaultValue:{value:"4",computed:!1},type:{name:"number"},required:!1,description:""},lngLatAccessor:{defaultValue:{value:"location => [location.get(0), location.get(1)]",computed:!1},type:{name:"func"},required:!1,description:""},renderWhileDragging:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},aggregation:{type:{name:"string"},required:!1,description:""},locations:{type:{name:"instanceOf",value:"Immutable.List"},required:!0,description:""},pointRadiusUnit:{type:{name:"string"},required:!1,description:""},rgb:{type:{name:"arrayOf",value:{name:"union",value:[{name:"string"},{name:"number"}]}},required:!1,description:""},zoom:{type:{name:"number"},required:!1,description:""}}};var src_ScatterPlotGlowOverlay=ScatterPlotGlowOverlay_ScatterPlotGlowOverlay;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../plugins/legacy-plugin-chart-map-box/src/ScatterPlotGlowOverlay.jsx"]={name:"ScatterPlotGlowOverlay",docgenInfo:ScatterPlotGlowOverlay_ScatterPlotGlowOverlay.__docgenInfo,path:"../../plugins/legacy-plugin-chart-map-box/src/ScatterPlotGlowOverlay.jsx"});__webpack_require__(1160);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}const DEFAULT_MAX_ZOOM=16,DEFAULT_POINT_RADIUS=60,MapBox_propTypes={width:prop_types_default.a.number,height:prop_types_default.a.number,aggregatorName:prop_types_default.a.string,clusterer:prop_types_default.a.object,globalOpacity:prop_types_default.a.number,hasCustomMetric:prop_types_default.a.bool,mapStyle:prop_types_default.a.string,mapboxApiKey:prop_types_default.a.string.isRequired,onViewportChange:prop_types_default.a.func,pointRadius:prop_types_default.a.number,pointRadiusUnit:prop_types_default.a.string,renderWhileDragging:prop_types_default.a.bool,rgb:prop_types_default.a.array,bounds:prop_types_default.a.array},MapBox_defaultProps={width:400,height:400,globalOpacity:1,onViewportChange:()=>{},pointRadius:60,pointRadiusUnit:"Pixels"};class MapBox_MapBox extends react_default.a.Component{constructor(props){super(props);const{width:width,height:height,bounds:bounds}=this.props,mercator=new web_mercator_viewport.a({width:width,height:height}).fitBounds(bounds),{latitude:latitude,longitude:longitude,zoom:zoom}=mercator;this.state={viewport:{longitude:longitude,latitude:latitude,zoom:zoom}},this.handleViewportChange=this.handleViewportChange.bind(this)}handleViewportChange(viewport){this.setState({viewport:viewport});const{onViewportChange:onViewportChange}=this.props;onViewportChange(viewport)}render(){const{width:width,height:height,aggregatorName:aggregatorName,clusterer:clusterer,globalOpacity:globalOpacity,mapStyle:mapStyle,mapboxApiKey:mapboxApiKey,pointRadius:pointRadius,pointRadiusUnit:pointRadiusUnit,renderWhileDragging:renderWhileDragging,rgb:rgb,hasCustomMetric:hasCustomMetric,bounds:bounds}=this.props,{viewport:viewport}=this.state,isDragging=void 0!==viewport.isDragging&&viewport.isDragging,bbox=[bounds[0][0],bounds[0][1],bounds[1][0],bounds[1][1]],clusters=clusterer.getClusters(bbox,Math.round(viewport.zoom));return react_default.a.createElement(esm.b,_extends({},viewport,{mapStyle:mapStyle,width:width,height:height,mapboxApiAccessToken:mapboxApiKey,onViewportChange:this.handleViewportChange}),react_default.a.createElement(src_ScatterPlotGlowOverlay,_extends({},viewport,{isDragging:isDragging,locations:immutable_default.a.fromJS(clusters),dotRadius:pointRadius,pointRadiusUnit:pointRadiusUnit,rgb:rgb,globalOpacity:globalOpacity,compositeOperation:"screen",renderWhileDragging:renderWhileDragging,aggregation:hasCustomMetric?aggregatorName:null,lngLatAccessor:location=>{const coordinates=location.get("geometry").get("coordinates");return[coordinates.get(0),coordinates.get(1)]}})))}}MapBox_MapBox.displayName="MapBox",MapBox_MapBox.propTypes=MapBox_propTypes,MapBox_MapBox.defaultProps=MapBox_defaultProps,MapBox_MapBox.__docgenInfo={description:"",methods:[{name:"handleViewportChange",docblock:null,modifiers:[],params:[{name:"viewport",type:null}],returns:null}],displayName:"MapBox",props:{width:{defaultValue:{value:"400",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"400",computed:!1},type:{name:"number"},required:!1,description:""},globalOpacity:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},onViewportChange:{defaultValue:{value:"() => {}",computed:!1},type:{name:"func"},required:!1,description:""},pointRadius:{defaultValue:{value:"60",computed:!1},type:{name:"number"},required:!1,description:""},pointRadiusUnit:{defaultValue:{value:"'Pixels'",computed:!1},type:{name:"string"},required:!1,description:""},aggregatorName:{type:{name:"string"},required:!1,description:""},clusterer:{type:{name:"object"},required:!1,description:""},hasCustomMetric:{type:{name:"bool"},required:!1,description:""},mapStyle:{type:{name:"string"},required:!1,description:""},mapboxApiKey:{type:{name:"string"},required:!0,description:""},renderWhileDragging:{type:{name:"bool"},required:!1,description:""},rgb:{type:{name:"array"},required:!1,description:""},bounds:{type:{name:"array"},required:!1,description:""}}};__webpack_exports__.default=MapBox_MapBox;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../plugins/legacy-plugin-chart-map-box/src/MapBox.jsx"]={name:"MapBox",docgenInfo:MapBox_MapBox.__docgenInfo,path:"../../plugins/legacy-plugin-chart-map-box/src/MapBox.jsx"})}}]);
//# sourceMappingURL=39.3839b028b1b5a11fb74b.bundle.js.map