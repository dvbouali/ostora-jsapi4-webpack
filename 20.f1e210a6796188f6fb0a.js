(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/WMSLayer":1584,"esri/layers/support/wmsUtils":1769,"esri/layers/support/ExportWMSImageParameters":1829,"esri/layers/support/WMSSublayer":2611})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1584:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(5),r(1),r(0),r(9),r(10),r(58),r(89),r(105),r(29),r(18),r(223),r(23),r(17),r(12),r(120),r(4),r(22),r(2),r(134),r(37),r(31),r(530),r(55),r(100),r(124),r(122),r(213),r(155),r(126),r(101),r(1829),r(2611),r(1769)],void 0===(a=function(e,t,u,r,n,p,a,i,y,c,f,o,s,l,d,m,h,g,b,v,x,w,E,S,O,N,_,P,R,I,L,U,j,M,F){function A(e,n,a){var i=[],o=new Map;return e.forEach(function(e){var t=new M;if(t.read(e,n),a&&-1===a.indexOf(t.name)&&(t.visible=!1),o.set(t.id,t),null!=e.parentLayerId&&-1!==e.parentLayerId){var r=o.get(e.parentLayerId);r.sublayers||(r.sublayers=[]),r.sublayers.unshift(t)}else i.unshift(t)}),i}var q,T=new d.JSONMap({svg:"image/svg+xml",png:"image/png",jpg:"image/jpeg",gif:"image/gif",bmp:"image/bmp"},{ignoreUnknown:!1});return q=v.declared(R.RefreshableLayer(I.ScaleRangeLayer(_.OperationalLayer(P.PortalLayer(h.MultiOriginJSONMixin(N)))))),r(C,q),C.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?u({url:e},t):e},C.prototype.load=function(e){var t=this,r=m.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).then(function(){return t._fetchService(r)})),this.when()},C.prototype.readFullExtentFromItemOrMap=function(e,t){var r=t.extent;return new w({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})},C.prototype.writeFullExtent=function(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]},C.prototype.readImageFormat=function(e,t){var r=t.supportedImageFormatTypes;return r&&-1<r.indexOf("image/png")?"image/png":r&&r[0]},C.prototype.readSpatialReferenceFromItemOrDocument=function(e,t){return new E(t.spatialReferences[0])},C.prototype.writeSpatialReferences=function(e,t){var r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(function(e){return e!==r}),t.spatialReferences.unshift(r)):t.spatialReferences=e},C.prototype.readSublayersFromItemOrMap=function(e,t,r){return A(t.layers,r,t.visibleLayers)},C.prototype.readSublayers=function(e,t,r){return A(t.layers,r)},C.prototype.writeSublayers=function(e,a,t,i){a.layers=[];var o=new Map,r=e.flatten(function(e){var t=e.sublayers;return t&&t.toArray()}).toArray();r.forEach(function(e){"number"==typeof e.parent.id&&(o.has(e.parent.id)?o.get(e.parent.id).push(e.id):o.set(e.parent.id,[e.id]))}),r.forEach(function(e){var t=u({sublayer:e},i),r=e.write({parentLayerId:"number"==typeof e.parent.id?e.parent.id:-1},t);if(o.has(e.id)&&(r.sublayerIds=o.get(e.id)),!e.sublayers&&e.name){var n=e.write({},t);delete n.id,a.layers.push(n)}}),a.visibleLayers=r.filter(function(e){return e.visible&&!e.sublayers}).map(function(e){return e.name})},C.prototype.createExportImageParameters=function(e,t,r,n){var a=n&&n.pixelRatio||1,i=S.getScale({extent:e,width:t})*a;return this._exportWMSImageParameters=new j({layer:this,extent:e,scale:i}),this._exportWMSImageParameters.toJSON()},C.prototype.fetchImage=function(i,o,s,l){return a(this,void 0,void 0,function(){var t,r,n,a;return p(this,function(e){return t=this.mapUrl,(r=this.createExportImageParameters(i,o,s,l)).layers?(a={responseType:"image",query:this._mixCustomParameters(u({width:o,height:s},r)),signal:l&&l.signal},l&&l.timestamp&&(a.query=u({_ts:l.timestamp},a.query)),[2,f(t,a).then(function(e){return e.data})]):((n=document.createElement("canvas")).width=o,n.height=s,[2,n])})})},C.prototype.fetchFeatureInfo=function(e,t,r,n,a){var i=this,o=F.getPopupLayers(this._exportWMSImageParameters.visibleSublayers);if(!this.featureInfoUrl||!o)return null;var s="1.3.0"===this.version?{I:n,J:a}:{x:n,y:a},l=u({query_layers:o,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},s),p=u({},this.createExportImageParameters(e,t,r),l);return p=this._mixCustomParameters(p),f(this.featureInfoUrl,{query:p,responseType:"text"}).then(function(e){var t=i.featureInfoUrl;for(var r in t+=-1===t.indexOf("?")?"?":"",p)t+="?"===t.substring(t.length-1,t.length)?"":"&",t+=r+"="+p[r];var n=document.createElement("iframe");return n.src=t,n.frameBorder="0",n.marginHeight="0",n.marginWidth="0",n.innerHTML=e.data,n.style.width="100%",new y({sourceLayer:i,popupTemplate:new c({title:i.title,content:n})})})},C.prototype.findSublayerById=function(t){return this.allSublayers.find(function(e){return e.id===t})},C.prototype.supportsSpatialReference=function(r){return L.isWmsServer(this.url)||this.spatialReferences.some(function(e){var t=900913===e?E.WebMercator:new E({wkid:e});return O.equals(t,r)})},C.prototype._fetchService=function(t){return a(this,void 0,void 0,function(){var r=this;return p(this,function(e){return[2,g.resolve().then(function(){return r.resourceInfo?{data:r.resourceInfo}:(r.parsedUrl.query&&r.parsedUrl.query.service&&(r.parsedUrl.query.SERVICE=r.parsedUrl.query.service,delete r.parsedUrl.query.service),r.parsedUrl.query&&r.parsedUrl.query.request&&(r.parsedUrl.query.REQUEST=r.parsedUrl.query.request,delete r.parsedUrl.query.request),f(r.parsedUrl.path,{query:u({SERVICE:"WMS",REQUEST:"GetCapabilities"},r.parsedUrl.query,r.customParameters),responseType:"xml",signal:t}))}).then(function(e){if(!r.resourceInfo){e.data=F.parseCapabilities(e.data);var t=new b.Url(r.parsedUrl.path);"https"!==t.scheme||t.port&&"443"!==t.port||-1!==i.request.httpsDomains.indexOf(t.host)||i.request.httpsDomains.push(t.host)}e.data&&r.read(e.data,{origin:"service"})})]})})},C.prototype._mixCustomParameters=function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=u({},this.customParameters,this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e},n([v.property({readOnly:!0})],C.prototype,"allSublayers",void 0),n([v.property({json:{type:Object,write:!0}})],C.prototype,"customParameters",void 0),n([v.property({type:["show","hide","hide-children"]})],C.prototype,"listMode",void 0),n([v.property({json:{type:Object,write:!0}})],C.prototype,"customLayerParameters",void 0),n([v.property({type:String,json:{write:!0}})],C.prototype,"copyright",void 0),n([v.property()],C.prototype,"description",void 0),n([v.property({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{service:{read:{source:"extent"}}}}})],C.prototype,"fullExtent",void 0),n([v.reader(["web-document","portal-item"],"fullExtent",["extent"])],C.prototype,"readFullExtentFromItemOrMap",null),n([v.writer(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],C.prototype,"writeFullExtent",null),n([v.property()],C.prototype,"fullExtents",void 0),n([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],C.prototype,"featureInfoFormat",void 0),n([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],C.prototype,"featureInfoUrl",void 0),n([v.property({type:String,json:{origins:{"web-document":{default:"image/png",type:T.jsonValues,read:{reader:T.read,source:"format"},write:{writer:T.write,target:"format"}}}}})],C.prototype,"imageFormat",void 0),n([v.reader("imageFormat",["supportedImageFormatTypes"])],C.prototype,"readImageFormat",null),n([v.property({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],C.prototype,"imageMaxHeight",void 0),n([v.property({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],C.prototype,"imageMaxWidth",void 0),n([v.property()],C.prototype,"imageTransparency",void 0),n([v.property(U.legendEnabled)],C.prototype,"legendEnabled",void 0),n([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],C.prototype,"mapUrl",void 0),n([v.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],C.prototype,"isReference",void 0),n([v.property({type:["WMS"]})],C.prototype,"operationalLayerType",void 0),n([v.property({type:E,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],C.prototype,"spatialReference",void 0),n([v.reader(["web-document","portal-item"],"spatialReference",["spatialReferences"])],C.prototype,"readSpatialReferenceFromItemOrDocument",null),n([v.property({type:[Number],json:{read:{source:"spatialReferences"},write:{ignoreOrigin:!0}}})],C.prototype,"spatialReferences",void 0),n([v.writer(["web-document","portal-item"],"spatialReferences")],C.prototype,"writeSpatialReferences",null),n([v.property({type:o.ofType(M),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(n=this.allSublayers,a=r,n.some(function(e){for(var t in e)if(x.willPropertyWrite(e,t,null,a))return!0;return!1}))return{ignoreOrigin:!0};var n,a}}}})],C.prototype,"sublayers",void 0),n([v.reader(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],C.prototype,"readSublayersFromItemOrMap",null),n([v.reader("service","sublayers",["layers"])],C.prototype,"readSublayers",null),n([v.writer("sublayers",{layers:{type:[M]},visibleLayers:{type:[String]}})],C.prototype,"writeSublayers",null),n([v.property({json:{read:!1},readOnly:!0,value:"wms"})],C.prototype,"type",void 0),n([v.property(U.url)],C.prototype,"url",void 0),n([v.property({type:String,json:{write:{ignoreOrigin:!0}}})],C.prototype,"version",void 0),n([v.subclass("esri.layers.WMSLayer")],C);function C(e,t){var r=q.call(this,e)||this;return r._sublayersHandles=new l,r.allSublayers=new s({root:r,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),r.customParameters=null,r.customLayerParameters=null,r.copyright=null,r.description=null,r.fullExtent=null,r.fullExtents=null,r.featureInfoFormat=null,r.featureInfoUrl=null,r.imageFormat=null,r.imageMaxHeight=2048,r.imageMaxWidth=2048,r.imageTransparency=!0,r.legendEnabled=!0,r.mapUrl=null,r.isReference=null,r.operationalLayerType="WMS",r.spatialReference=null,r.spatialReferences=null,r.sublayers=null,r.type="wms",r.url=null,r.version=null,r.watch("sublayers",function(e,t){t&&(t.forEach(function(e){e.layer=null}),r._sublayersHandles.removeAll(),r._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=r,e.layer=r}),r._sublayersHandles||(r._sublayersHandles=new l),r._sublayersHandles.add([e.on("after-add",function(e){var t=e.item;t.parent=r,t.layer=r}),e.on("after-remove",function(e){var t=e.item;t.parent=null,t.layer=null})]))},!0),r}}.apply(null,n))||(e.exports=a)},1769:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(6),r(22),r(37),r(31)],void 0===(a=function(e,t,I,u,L,c){function f(n){return r.some(function(e){var t=e[0],r=e[1];return t<=n&&n<=r})}function U(e,t){var r=t&&t.getElementsByTagName(e);return r&&0<r.length?r[0]:null}function j(e,t,r){var n=U(e,t);return n?n.textContent:r}function d(e,t,r){if(!e)return null;var n,a,i,o,s=parseFloat(e.getAttribute("minx")),l=parseFloat(e.getAttribute("miny")),p=parseFloat(e.getAttribute("maxx")),u=parseFloat(e.getAttribute("maxy"));o=r?(n=isNaN(l)?-Number.MAX_VALUE:l,a=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(u)?Number.MAX_VALUE:u,isNaN(p)?Number.MAX_VALUE:p):(n=isNaN(s)?-Number.MAX_VALUE:s,a=isNaN(l)?-Number.MAX_VALUE:l,i=isNaN(p)?Number.MAX_VALUE:p,isNaN(u)?Number.MAX_VALUE:u);var y=new c({wkid:t});return new L({xmin:n,ymin:a,xmax:i,ymax:o,spatialReference:y})}function M(e,t){var r,n,a,i=U(t,e),o=U("DCPType",i);if(o){var s=U("HTTP",o);if(s){var l=U("Get",s);if(l){var p=(r="xlink:href",n=null,(a=U("OnlineResource",l))?a.getAttribute(r):n);if(p)return p.indexOf("&")===p.length-1&&(p=p.substring(0,p.length-1)),function(e,t){var r=[],n=u.urlToObject(e);for(var a in n.query)n.query.hasOwnProperty(a)&&-1===t.indexOf(a.toLowerCase())&&r.push(a+"="+n.query[a]);return n.path+(r.length?"?"+r.join("&"):"")}(p,["service","request"])}}}return null}function F(e,r){var t=e.getElementsByTagName("Operation");if(!t||!t.length){var n=U(r,e).getElementsByTagName("Format");return Array.prototype.slice.call(n).map(function(e){return e.textContent})}var a=Array.prototype.slice.call(t),i=[];return a.forEach(function(e){if(e.getAttribute("name")===r){var t=e.getElementsByTagName("Format");Array.prototype.slice.call(t).forEach(function(e){i.push(e.textContent)})}}),i}function n(e,t,r){var n=function(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(n.nodeType===Node.ELEMENT_NODE&&n.nodeName===e)return n}return null}(t,e);if(!n)return r;var a=n.textContent;if(null==a||""===a)return r;var i=Number(a);return isNaN(i)?r:i}function A(e,l){if(!e)return null;var p={id:q++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},t=U("LatLonBoundingBox",e),r=U("EX_GeographicBoundingBox",e),u=null;t&&(u=d(t,4326)),r&&((u=new L(0,0,0,0,new c({wkid:4326}))).xmin=parseFloat(j("westBoundLongitude",r,0)),u.ymin=parseFloat(j("southBoundLatitude",r,0)),u.xmax=parseFloat(j("eastBoundLongitude",r,0)),u.ymax=parseFloat(j("northBoundLatitude",r,0))),t||r||(u=new L(-180,-90,180,90,new c({wkid:4326}))),p.minScale=n(e,"MaxScaleDenominator",0),p.maxScale=n(e,"MinScaleDenominator",0);var y=-1<["1.0.0","1.1.0","1.1.1"].indexOf(l)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(function(e){if("Name"===e.nodeName)p.name=e.textContent||"";else if("Title"===e.nodeName)p.title=e.textContent||"";else if("Abstract"===e.nodeName)p.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var t=e.getAttribute(y);if(t&&0===t.indexOf("EPSG:"))0===(n=parseInt(t.substring(5),10))||isNaN(n)||u||(u="1.3.0"===l?d(e,n,f(n)):d(e,n));var r=t&&t.indexOf(":");if(r&&-1<r){var n;0===(n=parseInt(t.substring(r+1,t.length),10))||isNaN(n)||(n=m[n]?m[n]:n);var a="1.3.0"===l?d(e,n,f(n)):d(e,n);p.fullExtents.push(a)}}else if(e.nodeName===y){e.textContent.split(" ").forEach(function(e){0===(e=-1<e.indexOf(":")?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(m[e]&&(e=m[e]),-1===p.spatialReferences.indexOf(e)&&p.spatialReferences.push(e))})}else if("Style"!==e.nodeName||p.legendURL){if("Layer"===e.nodeName){var i=A(e,l);i&&(i.parentLayerId=p.id,p.sublayers||(p.sublayers=[]),p.sublayers.push(i))}}else{var o=U("LegendURL",e);if(o){var s=U("OnlineResource",o);s&&(p.legendURL=s.getAttribute("xlink:href"))}}}),p.extent=u&&u.toJSON(),p}Object.defineProperty(t,"__esModule",{value:!0});var q,r=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],m={84:4326,83:4269,27:4267};t.parseCapabilities=function(e){if(e){q=-1,"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var t=e.documentElement;if("ServiceExceptionReport"===t.nodeName){var r=Array.prototype.slice.call(t.childNodes).map(function(e){return e.textContent}).join("\r\n");throw new I("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",r)}var n=U("Layer",t);if(n){var a,i="WMS_Capabilities"===t.nodeName||"WMT_MS_Capabilities"===t.nodeName?t.getAttribute("version"):"1.3.0",o=U("Service",t),s=j("Title",o,"")||j("Name",o,""),l=j("AccessConstraints",o,""),p=j("Abstract",o,""),u=parseInt(j("MaxWidth",o,5e3),10),y=parseInt(j("MaxHeight",o,5e3),10),c=U("Capability",t),f=F(t,"GetMap"),d=M(t,"GetMap"),m=A(n,i),h=0;if(Array.prototype.slice.call(c.childNodes).forEach(function(e){"Layer"===e.nodeName&&(0===h?a=e:(1===h&&m.name&&(m.name="",m.sublayers.push(A(a,i))),m.sublayers.push(A(e,i))),h++)}),!m)return null;var g,b,v,x=m.fullExtents;if(0===(g=(g=m.sublayers)||[]).length&&g.push(m),!(b=m.extent)){var w=new L(g[0].extent);m.extent=w.toJSON(),b=m.extent}if(!(v=m.spatialReferences).length&&0<g.length){var E=function(e){var t=[];return e.sublayers.forEach(function(e){!t.length&&e.spatialReferences.length&&(t=e.spatialReferences||E(e))}),t};g.forEach(function(e){v.length||(v=e.spatialReferences||E(e))})}var S,O=M(t,"GetFeatureInfo");if(O){var N=F(t,"GetFeatureInfo");-1<N.indexOf("text/html")?S="text/html":-1<N.indexOf("text/plain")&&(S="text/plain")}if(!S){var _=function(e){e&&(e.queryable=!1,e.sublayers&&e.sublayers.forEach(function(e){_(e)}))};_(m)}var P=function t(e){var r=[];return e.forEach(function(e){r.push(e),e.sublayers&&e.sublayers.length&&(r=r.concat(t(e.sublayers)),delete e.sublayers)}),r}(g),R=m.minScale||0;return{copyright:l,description:p,extent:b,fullExtents:x,featureInfoFormat:S,featureInfoUrl:O,mapUrl:d,maxImageWidth:u,maxImageHeight:y,maxScale:m.maxScale||0,minScale:R,layers:P,spatialReferences:v,supportedImageFormatTypes:f,title:s,version:i}}}},t.coordsReversed=f,t.getPopupLayers=function(e){return e.length?e.filter(function(e){return e.popupEnabled&&e.name&&e.queryable}).map(function(e){return e.name}).join(","):""}}.apply(null,n))||(e.exports=a)},1829:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(5),r(1),r(0),r(13),r(23),r(2),r(1769)],void 0===(a=function(e,t,f,r,n,a,i,o,d){var s,l={visible:"visibleSublayers"},p=[102100,3857,102113,900913],u=[3395,54004];return s=o.declared(a),r(y,s),Object.defineProperty(y.prototype,"layer",{set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new i),this._layerHandles.add([e.sublayers.on("change",function(){return t.notifyChange("visibleSublayers")}),e.on("wms-sublayer-update",function(e){return t.notifyChange(l[e.propertyName])})])))},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"layers",{get:function(){return this.visibleSublayers.filter(function(e){return e.name}).map(function(e){return e.name}).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"visibleSublayers",{get:function(){var e=this.layer,a=this.scale,t=e.sublayers,i=[],o=function(e){var t=e.minScale,r=e.maxScale,n=e.sublayers;e.visible&&(0===a||(0===t||a<=t)&&(0===r||r<=a))&&(i.unshift(e),n&&n.forEach(o))};return t&&t.forEach(o),i},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"wkid",{get:function(){var e=this.extent,t=this.layer.spatialReferences,r=e.spatialReference&&e.spatialReference.wkid;t&&-1===t.indexOf(r)&&e.spatialReference.latestWkid&&(r=e.spatialReference.latestWkid);var n=p.some(function(e){return e===r});if(!t)return r;if(n){var a=[];t.forEach(function(e){-1<p.indexOf(e)&&a.push(e)}),a.length||t.forEach(function(e){-1<u.indexOf(e)&&a.push(e)}),r=0<a.length?a[0]:p[0]}return r},enumerable:!0,configurable:!0}),y.prototype.toJSON=function(){var e=this.extent,t=this.layer,r=this.layers,n=t.imageFormat,a=t.imageTransparency,i=t.spatialReferences,o=t.version,s=this.wkid;i&&-1===i.indexOf(s)&&e.spatialReference.latestWkid&&(s=e.spatialReference.latestWkid);var l=e.xmin,p=e.ymin,u=e.xmax,y=e.ymax,c={bbox:"1.3.0"===t.version&&d.coordsReversed(s)?p+","+l+","+y+","+u:l+","+p+","+u+","+y,format:n,request:"GetMap",service:"WMS",styles:"",transparent:a,version:o};return isNaN(s)||("1.3.0"===o?c.crs="EPSG:"+s:c.srs="EPSG:"+s),f({},c,{layers:r})},n([o.property()],y.prototype,"extent",void 0),n([o.property()],y.prototype,"layer",null),n([o.property({readOnly:!0,dependsOn:["visibleSublayers"]})],y.prototype,"layers",null),n([o.property({type:Number,dependsOn:["view.scale"]})],y.prototype,"scale",null),n([o.property()],y.prototype,"view",void 0),n([o.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],y.prototype,"version",null),n([o.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],y.prototype,"visibleSublayers",null),n([o.property()],y.prototype,"wkid",null),n([o.subclass("esri.layers.support.ExportWMSImageParameters")],y);function y(){var e=null!==s&&s.apply(this,arguments)||this;return e._layerHandles=new i,e.extent=null,e._scale=null,e.view=null,e}}.apply(null,n))||(e.exports=a)},2611:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(1),r(0),r(91),r(18),r(23),r(120),r(2),r(19),r(37)],void 0===(a=function(e,t,r,n,a,i,o,s,l,p,u){var y,c,f=0;return y=l.declared(s.MultiOriginJSONSupport),r(d,y),c=d,Object.defineProperty(d.prototype,"description",{get:function(){return this._get("description")},set:function(e){this._set("description",e)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"fullExtent",{get:function(){return this._get("fullExtent")},set:function(e){this._set("fullExtent",e)},enumerable:!0,configurable:!0}),d.prototype.readExtent=function(e,t){return(e=t.extent)?u.fromJSON(e):null},Object.defineProperty(d.prototype,"id",{get:function(){var e=this._get("id");return null==e?f++:e},set:function(e){this._set("id",e)},enumerable:!0,configurable:!0}),d.prototype.readLegendUrl=function(e,t){return t?t.legendUrl||t.legendURL:null},Object.defineProperty(d.prototype,"layer",{set:function(t){this._set("layer",t),this.sublayers&&this.sublayers.forEach(function(e){return e.layer=t})},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"name",{get:function(){return this._get("name")},set:function(e){this._set("name",e)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach(function(e){e.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=r,e.layer=r.layer}),this._sublayersHandles.add([e.on("after-add",function(e){var t=e.item;t.parent=r,t.layer=r.layer}),e.on("after-remove",function(e){var t=e.item;t.parent=null,t.layer=null})])),this._set("sublayers",e)},enumerable:!0,configurable:!0}),d.prototype.castSublayers=function(e){return p.default(i.ofType(c),e)},Object.defineProperty(d.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)},enumerable:!0,configurable:!0}),d.prototype.clone=function(){var e=new c;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(function(e){return e.clone()})),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(function(e){return e.clone()})),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(function(e){return e})),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e},d.prototype._setAndNotifyLayer=function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))},n([l.property()],d.prototype,"description",null),n([l.property({value:null})],d.prototype,"fullExtent",null),n([l.reader("fullExtent",["extent"])],d.prototype,"readExtent",null),n([l.property()],d.prototype,"fullExtents",void 0),n([l.property()],d.prototype,"featureInfoFormat",void 0),n([l.property()],d.prototype,"featureInfoUrl",void 0),n([l.property({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],d.prototype,"id",null),n([l.property({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],d.prototype,"legendUrl",void 0),n([l.reader(["web-document"],"legendUrl")],d.prototype,"readLegendUrl",null),n([l.property({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],d.prototype,"legendEnabled",void 0),n([l.property({value:null})],d.prototype,"layer",null),n([l.property()],d.prototype,"maxScale",void 0),n([l.property()],d.prototype,"minScale",void 0),n([l.property({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],d.prototype,"name",null),n([l.property()],d.prototype,"parent",void 0),n([l.property({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],d.prototype,"popupEnabled",void 0),n([l.property({type:Boolean,json:{write:{ignoreOrigin:!0}}})],d.prototype,"queryable",void 0),n([l.property()],d.prototype,"sublayers",null),n([l.cast("sublayers")],d.prototype,"castSublayers",null),n([l.property({type:[Number],json:{read:{source:"spatialReferences"}}})],d.prototype,"spatialReferences",void 0),n([l.property({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],d.prototype,"title",null),n([l.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],d.prototype,"visible",null),c=n([l.subclass("esri.layers.support.WMSSublayer")],d);function d(e){var t=y.call(this,e)||this;return t._sublayersHandles=new o,t.fullExtents=null,t.featureInfoFormat=null,t.featureInfoUrl=null,t.legendUrl=null,t.legendEnabled=!0,t.maxScale=0,t.minScale=0,t.popupEnabled=!1,t.queryable=!1,t.spatialReferences=null,t}}.apply(null,n))||(e.exports=a)}}]);