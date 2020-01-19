(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/layers/graphics/data/StreamStore":"./node_modules/arcgis-js-api/layers/graphics/data/StreamStore.js",
	"esri/layers/graphics/sources/connections/GeoEventConnection":"./node_modules/arcgis-js-api/layers/graphics/sources/connections/GeoEventConnection.js",
	"esri/layers/graphics/sources/connections/StreamConnection":"./node_modules/arcgis-js-api/layers/graphics/sources/connections/StreamConnection.js",
	"esri/views/2d/layers/features/controllers/StreamController":"./node_modules/arcgis-js-api/views/2d/layers/features/controllers/StreamController.js",
	"esri/views/2d/layers/features/controllers/support/DispatchQueue":"./node_modules/arcgis-js-api/views/2d/layers/features/controllers/support/DispatchQueue.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/arcgis-js-api/layers/graphics/data/StreamStore.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/data/StreamStore.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js\"),__webpack_require__(/*! ../../../core/CircularArray */ \"./node_modules/arcgis-js-api/core/CircularArray.js\"),__webpack_require__(/*! ../../../core/maybe */ \"./node_modules/arcgis-js-api/core/maybe.js\"),__webpack_require__(/*! ./FeatureStore */ \"./node_modules/arcgis-js-api/layers/graphics/data/FeatureStore.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,a,d){Object.defineProperty(t,\"__esModule\",{value:!0}),t.DEFAULT_STREAM_ID_FIELD=\"__esri_stream_id__\";var s=function(e){function r(r,i,o,d,s,n){void 0===n&&(n=128);var u=e.call(this,o)||this;return u._trackIdToObservations=new Map,u._idCounter=0,u._lastPurge=Date.now(),u._addOrUpdated=new Map,u._removed=[],u._maxAge=0,u._timeInfo=i,u._maximumTrackCount=d,u._purgeOptions=s,u.purgeInterval=n,u.objectIdField=a.unwrapOr(r,t.DEFAULT_STREAM_ID_FIELD),u._useGeneratedIds=u.objectIdField===t.DEFAULT_STREAM_ID_FIELD,u}return i(r,e),r.prototype.add=function(t){if(this._useGeneratedIds&&(t.attributes[this.objectIdField]=this._nextId(),t.objectId=t.attributes[this.objectIdField]),e.prototype.add.call(this,t),this._addOrUpdated.set(t.objectId,t),this._maxAge=Math.max(this._maxAge,t.attributes[this._timeInfo.startTimeField]),this._timeInfo.trackIdField){var r=t.attributes[this._timeInfo.trackIdField];this._trackIdToObservations.has(r)||this._trackIdToObservations.set(r,new o.default(this._maximumTrackCount));var i=this._trackIdToObservations.get(r),d=t.attributes[this.objectIdField],s=i.enqueue(d);if(a.isSome(s)){var n=this.removeById(s);a.isSome(n)&&(this._addOrUpdated.has(s)?this._addOrUpdated.delete(s):this._removed.push(n))}}},r.prototype.checkForUpdates=function(){var e=this._getToAdd(),t=this._getToRemove(),r=Date.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(),this._lastPurge=r),(e||t)&&this.events.emit(\"update\",{addOrUpdated:e,removed:t})},r.prototype._getToAdd=function(){if(!this._addOrUpdated.size)return null;var e=new Array(this._addOrUpdated.size),t=0;return this._addOrUpdated.forEach(function(r){return e[t++]=r}),this._addOrUpdated.clear(),e},r.prototype._getToRemove=function(){var e=this._removed;return this._removed.length?(this._removed=[],e):null},r.prototype._nextId=function(){var e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e},r.prototype._purge=function(){var e=this._purgeOptions;a.isSome(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e))},r.prototype._purgeSomeByDisplayCount=function(e){var t=this;if(e.displayCount){var r=this.numFeatures;r>e.displayCount&&this._trackIdToObservations.forEach(function(i){if(r>e.displayCount&&i.size){var o=t.removeById(a.unwrap(i.dequeue()));a.isSome(o)&&t._removed.push(o),r--}})}},r.prototype._purgeByAge=function(e){var t=this;if(e.age){var r=60*e.age*1e3,i=this._maxAge-r,o=this._timeInfo.startTimeField;this.forEach(function(e){e.attributes[o]<i&&(t.removeById(e.objectId),t._removed.push(e))})}},r}(d.default);t.default=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/layers/graphics/data/StreamStore.js?");

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/connections/GeoEventConnection.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/connections/GeoEventConnection.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js\"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js\"),__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../../geometry */ \"./node_modules/arcgis-js-api/geometry.js\"),__webpack_require__(/*! ../../../../request */ \"./node_modules/arcgis-js-api/request.js\"),__webpack_require__(/*! ../../../../core/Error */ \"./node_modules/arcgis-js-api/core/Error.js\"),__webpack_require__(/*! ../../../../core/Logger */ \"./node_modules/arcgis-js-api/core/Logger.js\"),__webpack_require__(/*! ../../../../core/maybe */ \"./node_modules/arcgis-js-api/core/maybe.js\"),__webpack_require__(/*! ../../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../FeatureLayer */ \"./node_modules/arcgis-js-api/layers/FeatureLayer.js\"),__webpack_require__(/*! ./StreamConnection */ \"./node_modules/arcgis-js-api/layers/graphics/sources/connections/StreamConnection.js\"),__webpack_require__(/*! ../../../../tasks/operations/query */ \"./node_modules/arcgis-js-api/tasks/operations/query.js\"),__webpack_require__(/*! ../../../../tasks/support/Query */ \"./node_modules/arcgis-js-api/tasks/support/Query.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,o,i,s,c,u,a,d,h,l,f,p,y,v){Object.defineProperty(t,\"__esModule\",{value:!0});var _,g=a.getLogger(\"esri.layers.graphics.sources.connections.GeoEventConnection\");!function(e){e[e.CONNECTING=0]=\"CONNECTING\",e[e.OPEN=1]=\"OPEN\",e[e.CLOSING=2]=\"CLOSING\",e[e.CLOSED=3]=\"CLOSED\"}(_=t.ReadyState||(t.ReadyState={}));var b=function(e){function t(t,r,n,o,i,s){void 0===o&&(o=5),void 0===i&&(i=3);var c=e.call(this)||this;return c.errorString=null,c._source=t,c._spatialReference=r,c._filter=n,c._outFields=s,c._maxQueryDepth=o,c._maxRecordCountFactor=i,c._open(),c}return i(t,e),t.prototype._open=function(){return o(this,void 0,void 0,function(){var e,t,n,o;return r(this,function(r){switch(r.label){case 0:return[4,this._fetchServiceDefinition(this._source)];case 1:return e=r.sent(),e.timeInfo.trackIdField||g.warn(\"GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The maximumTrackPoints property will have no effect.\"),[4,this._fetchWebSocketUrl(e.streamUrls,this._spatialReference)];case 2:return t=r.sent(),this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),[4,this._buddyServicesQuery];case 3:return r.sent(),[4,this._tryCreateWebSocket(t)];case 4:return r.sent(),n=this._filter,o=this._outFields,this._setFilter(n,o),[2]}})})},t.prototype.destroy=function(){d.isSome(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null},Object.defineProperty(t.prototype,\"connectionStatus\",{get:function(){if(d.isNone(this._websocket))return\"disconnected\";switch(this._websocket.readyState){case _.CONNECTING:case _.OPEN:return\"connected\";case _.CLOSING:case _.CLOSED:return\"disconnected\"}},enumerable:!0,configurable:!0}),t.prototype._tryCreateWebSocket=function(e,t){return void 0===t&&(t=1e3),o(this,void 0,void 0,function(){var n,o,i;return r(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,4]),n=this,[4,this._createWebSocket(e)];case 1:return n._websocket=r.sent(),this.notifyChange(\"connectionStatus\"),[3,4];case 2:return o=r.sent(),i=t/1e3,g.error(new u(\"geoevent-connection\",\"Failed to connect. Attempting to reconnect in \"+i+\"s\",o)),[4,h.after(t)];case 3:return r.sent(),[2,this._tryCreateWebSocket(e,1.5*t)];case 4:return[2]}})})},t.prototype._createWebSocket=function(e){var t=this,r=new WebSocket(e),n=h.create(function(e,t){r.onopen=function(){return e(r)},r.onclose=function(e){return t(e)}});return n.then(function(){r.onclose=function(e){return t._onClose(e)},r.onerror=function(e){return t._onError(e)},r.onmessage=function(e){return t._onMessage(e)}}),n},t.prototype._onMessage=function(e){var t;try{t=this._enrich(JSON.parse(e.data))}catch(e){return void g.error(new u(\"geoevent-connection\",\"Failed to parse message\",e))}this.onFeature(t)},t.prototype._onError=function(e){var t=\"Encountered an error over WebSocket connection\";this._set(\"errorString\",t),g.error(\"geoevent-connection\",t)},t.prototype._onClose=function(e){this._websocket=null,this.notifyChange(\"connectionStatus\"),1e3!==e.code&&g.error(\"geoevent-connection\",\"WebSocket closed unexpectedly with error code \"+e.code),this._open()},t.prototype._fetchServiceDefinition=function(e){return o(this,void 0,void 0,function(){var t,n,o,i;return r(this,function(r){switch(r.label){case 0:return t={f:\"json\"},n=c(e,{query:t,responseType:\"json\"}),[4,n];case 1:return o=r.sent(),i=o.data,this._serviceDefinition=i,[2,i]}})})},t.prototype._fetchWebSocketUrl=function(e,t){return o(this,void 0,void 0,function(){var n,o,i,s;return r(this,function(r){return n=e[0],o=n.urls,i=n.token,s=this._inferWebSocketBaseUrl(o),[2,s+\"/subscribe?outSR=\"+t.wkid+(i?\"&token=\"+i:\"\")]})})},t.prototype._inferWebSocketBaseUrl=function(e){if(1===e.length)return e[0];for(var t=0,r=e;t<r.length;t++){var n=r[t];if(-1!==n.indexOf(\"wss\"))return n}return g.error(new u(\"geoevent-connection\",\"Unable to infer WebSocket url\",e)),null},t.prototype._setFilter=function(e,t){return o(this,void 0,void 0,function(){var n,o,i,s,c,a,l=this;return r(this,function(r){return n=this._websocket,this._filter=e,this._outFields=t,d.isNone(n)||d.isNone(e)&&d.isNone(t)?[2]:(o=JSON.stringify({filter:this._serializeFilter(e,t)}),i=!1,s=h.createResolver(),c=function(){i||(l._websocket===n&&g.error(new u(\"geoevent-connection\",\"Server timed out when setting filter\")),s.reject())},a=function(e){var t=JSON.parse(e.data);t.filter&&(t.error&&(g.error(new u(\"geoevent-connection\",\"Failed to set service filter\",t.error)),l._set(\"errorString\",\"Could not set service filter - \"+t.error),s.reject(t.error)),n.onmessage=l._onMessage.bind(l),i=!0,s.resolve())},n.onmessage=a,n.send(o),setTimeout(c,1e4),[2,s.promise])})})},t.prototype._serializeFilter=function(e,t){var r={};if(d.isNone(e)&&d.isNone(t))return r;if(d.isSome(e)&&e.geometry)try{var n=s.fromJSON(e.geometry);if(\"extent\"!==n.type)throw new u(\"Expected extent but found type \"+n.type);r.geometry=JSON.stringify(n.shiftCentralMeridian())}catch(e){g.error(new u(\"geoevent-connection\",\"Encountered an error when setting connection geometryDefinition\",e))}return d.isSome(e)&&e.where&&(r.where=e.where),d.isSome(t)&&(r.outFields=t.join(\",\")),r},t.prototype._enrich=function(e){if(!this._relatedFeatures)return e;var t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return g.warn(\"geoevent-connection\",\"Feature join failed. Is the join field configured correctly?\",e),e;var n=this._relatedFeatures.get(r),o=n.attributes,i=n.geometry;for(var s in o)e.attributes[s]=o[s];return i&&(e.geometry=i),e.geometry||e.centroid||g.error(new u(\"geoevent-connection\",\"Found malformed feature - no geometry found\",e)),e},t.prototype._queryBuddyServices=function(){return o(this,void 0,void 0,function(){var e,t,n,o,i,s,c,a,d,h;return r(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),e=this._serviceDefinition,t=e.relatedFeatures,n=e.keepLatestArchive,o=this._queryRelatedFeatures(t),i=this._queryArchive(n),[4,o];case 1:return r.sent(),[4,i];case 2:if(!(s=r.sent()))return[2];for(c=0,a=s.features;c<a.length;c++)d=a[c],this.onFeature(this._enrich(d));return[3,4];case 3:return h=r.sent(),g.error(new u(\"geoevent-connection\",\"Encountered an error when querying buddy services\",{error:h})),[3,4];case 4:return[2]}})})},t.prototype._queryRelatedFeatures=function(e){return o(this,void 0,void 0,function(){var t;return r(this,function(r){switch(r.label){case 0:return e?[4,this._queryBuddy(e.featuresUrl)]:[2];case 1:return t=r.sent(),this._addRelatedFeatures(t),[2]}})})},t.prototype._queryArchive=function(e){return o(this,void 0,void 0,function(){return r(this,function(t){return e?[2,this._queryBuddy(e.featuresUrl)]:[2,void 0]})})},t.prototype._queryBuddy=function(e){return o(this,void 0,void 0,function(){var t,n,o,i,s,c,u,a,h,l;return r(this,function(r){switch(r.label){case 0:return t=new f({url:e}),[4,t.load()];case 1:return n=r.sent().capabilities,o=n.query.supportsMaxRecordCountFactor,i=n.query.supportsPagination,s=n.query.supportsCentroid,c=this._maxRecordCountFactor,u=t.capabilities.query.maxRecordCount,a=o?u*c:u,h=new v,h.outFields=d.unwrapOr(this._outFields,[\"*\"]),h.where=d.unwrapOr(d.get(this._filter,\"where\"),\"1=1\"),h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=this._spatialReference,s&&(h.returnCentroid=!0),o&&(h.maxRecordCountFactor=c),i?(h.num=a,t.destroy(),[2,this._queryPages(e,h)]):[4,y.executeQuery(e,h)];case 2:return l=r.sent(),t.destroy(),[2,l.data]}})})},t.prototype._queryPages=function(e,t,n,i){return void 0===n&&(n=[]),void 0===i&&(i=0),o(this,void 0,void 0,function(){var o;return r(this,function(r){switch(r.label){case 0:return t.start=i*t.num,[4,y.executeQuery(e,t)];case 1:return o=r.sent().data,o.exceededTransferLimit&&i<this._maxQueryDepth?(o.features.forEach(function(e){return n.push(e)}),[2,this._queryPages(e,t,n,i+1)]):(n.forEach(function(e){return o.features.push(e)}),[2,o])}})})},t.prototype._addRelatedFeatures=function(e){for(var t=new Map,r=e.features,n=this._serviceDefinition.relatedFeatures.joinField,o=0,i=r;o<i.length;o++){var s=i[o],c=s.attributes[n];t.set(c,s)}this._relatedFeatures=t},n([l.property()],t.prototype,\"connectionStatus\",null),n([l.property()],t.prototype,\"errorString\",void 0),t=n([l.subclass(\"esri.layers.graphics.sources.connections.GeoEventConnection\")],t)}(l.declared(p.default));t.default=b}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/layers/graphics/sources/connections/GeoEventConnection.js?");

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/connections/StreamConnection.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/connections/StreamConnection.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../../core/Evented */ \"./node_modules/arcgis-js-api/core/Evented.js\"),__webpack_require__(/*! ../../../../core/HandleOwner */ \"./node_modules/arcgis-js-api/core/HandleOwner.js\"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,c,s){Object.defineProperty(r,\"__esModule\",{value:!0});var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.onFeature=function(e){this.emit(\"feature\",e)},r=t([s.subclass(\"esri.layers.graphics.sources.connections.StreamConnection\")],r)}(s.declared(o.EventedMixin(c.HandleOwner)));r.default=u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/layers/graphics/sources/connections/StreamConnection.js?");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/StreamController.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/controllers/StreamController.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../../../core/tsSupport/assignHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js\"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js\"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js\"),__webpack_require__(/*! ../../../../../core/Error */ \"./node_modules/arcgis-js-api/core/Error.js\"),__webpack_require__(/*! ../../../../../core/has */ \"./node_modules/arcgis-js-api/core/has.js\"),__webpack_require__(/*! ../../../../../core/iteratorUtils */ \"./node_modules/arcgis-js-api/core/iteratorUtils.js\"),__webpack_require__(/*! ../../../../../core/maybe */ \"./node_modules/arcgis-js-api/core/maybe.js\"),__webpack_require__(/*! ../../../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils */ \"./node_modules/arcgis-js-api/layers/graphics/featureConversionUtils.js\"),__webpack_require__(/*! ../../../../../layers/graphics/data/executeTileQuery */ \"./node_modules/arcgis-js-api/layers/graphics/data/executeTileQuery.js\"),__webpack_require__(/*! ../../../../../layers/graphics/data/StreamStore */ \"./node_modules/arcgis-js-api/layers/graphics/data/StreamStore.js\"),__webpack_require__(/*! ../../../../../layers/graphics/sources/connections/GeoEventConnection */ \"./node_modules/arcgis-js-api/layers/graphics/sources/connections/GeoEventConnection.js\"),__webpack_require__(/*! ./BaseController */ \"./node_modules/arcgis-js-api/views/2d/layers/features/controllers/BaseController.js\"),__webpack_require__(/*! ./support/DispatchQueue */ \"./node_modules/arcgis-js-api/views/2d/layers/features/controllers/support/DispatchQueue.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,o,s,a,u,c,p,h,d,l,f,y,v,m,g){Object.defineProperty(t,\"__esModule\",{value:!0});var _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=\"stream\",t._tileDispatchMap=new Map,t._updateIntervalId=0,t}return r(t,e),t.prototype.initialize=function(){var e=this,t=[\"connectionStatus\",\"errorString\"],r=this.service,i=r.source,n=r.objectIdField,o=r.timeInfo,s=r.maximumTrackPoints,a=r.purgeOptions,u=r.serviceFilter;this.connection=new v.default(i,this.spatialReference,u),this._set(\"store\",new y.default(n,o,this.geometryInfo,s,a)),this.connection.on(\"feature\",function(t){return e._onFeature(t)}),this.store.events.on(\"update\",function(t){var r=t.addOrUpdated,i=t.removed;return e._onUpdate(r,i)}),t.forEach(function(t){e.watch(\"connection.\"+t,function(r){return e.remoteClient.invoke(\"setProperty\",{propertyName:t,value:r})})}),this._updateIntervalId=setInterval(function(){return e.store.checkForUpdates()},64),this._shouldPushDataReceived=this.service.enableDataRecieved},t.prototype.destroy=function(){clearInterval(this._updateIntervalId),this.connection.destroy(),this.queryEngine.destroy(),this._tileDispatchMap.forEach(function(e){return e.destroy()})},Object.defineProperty(t.prototype,\"queryEngine\",{get:function(){return this._createQueryEngine(this.store)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,\"updating\",{get:function(){return this._tempQueryEngine&&!!this._tempQueryEngine.featureStore.numFeatures||this._anyUpdatesQueued()},enumerable:!0,configurable:!0}),t.prototype.update=function(e){return s(this,void 0,void 0,function(){var t,r,i=this;return o(this,function(n){switch(n.label){case 0:return this.validateConfig(e),t=this.renderer.getAttributeHash(),this._set(\"config\",e),[4,this.updatePixelBuffer()];case 1:return n.sent(),\"heatmap\"===this.renderer.type?[2]:t===this.renderer.getAttributeHash()?[3,3]:(r=this.queryEngine.featureStore,[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]);case 2:n.sent(),r.forEach(function(e){return i.attributeStore.setAttributeData(e.localId,e,i.geometryInfo,i.viewParams)}),n.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return n.sent(),[4,this.attributeStore.sendUpdates()];case 5:return n.sent(),[2]}})})},t.prototype.invalidate=function(){this._repushActiveTiles()},t.prototype.onEdits=function(){},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(e)},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(e)},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(e)},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(e)},t.prototype.queryLatestObservations=function(e){return s(this,void 0,void 0,function(){return o(this,function(t){if(!this.service.timeInfo.trackIdField)throw new a(\"mapview-no-trackIdField\",\"queryLatestObservation can only be used with services that define a TrackIdField\");return[2,this.queryEngine.executeQueryForLatestObservations(e)]})})},t.prototype.queryStatistics=function(){throw new a(\"Method not implemented.\")},t.prototype.refresh=function(){},t.prototype.setViewState=function(){var e=this,t=this.viewState&&this.viewState.scale;this.inherited(arguments),t!==this.viewState.scale&&this.attributeStore.hasScaleExpr&&(this.queryEngine.featureStore.forEach(function(t){return e.attributeStore.setAttributeData(t.localId,t,e.geometryInfo,e.viewParams)}),this.attributeStore.sendUpdates())},t.prototype.onTileUpdate=function(e){var t=this,r=e.added;e.removed.forEach(function(e){return t._handleTileRemove(e)}),r.forEach(function(e){return t._handleTileAdd(e)})},t.prototype.enableEvent=function(e){\"data-received\"===e.name&&(this._shouldPushDataReceived=e.value)},t.prototype._onFeature=function(e){this._shouldPushDataReceived&&this.remoteClient.invoke(\"emitEvent\",{name:\"data-received\",event:{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry}});try{var t=this.geometryInfo,r=t.geometryType,i=t.hasM,n=t.hasZ,o=l.convertFromFeature(e,r,n,i,this.store.objectIdField);this.store.add(o)}catch(e){u(\"esri-2d-debug\")&&console.debug(e)}},t.prototype._createStoreWithFeatures=function(e){if(p.isNone(e))return null;var t=this._createFeatureStore();return t.addMany(e),t},t.prototype._onUpdate=function(e,t){return s(this,void 0,void 0,function(){var r,i,n=this;return o(this,function(o){switch(o.label){case 0:return p.isSome(e)&&e.forEach(function(e){return n.onFeatureAdd(e)}),r=this._createStoreWithFeatures(e),i=this._createStoreWithFeatures(t),this.attributeStore.sendUpdates(),this.processor.supportsTileUpdates?[4,this._updateActiveTiles(r,i)]:[3,2];case 1:return o.sent(),[3,3];case 2:this._repushActiveTiles(),o.label=3;case 3:return p.isSome(t)&&t.forEach(function(e){return n.onFeatureRemove(e)}),[2]}})})},t.prototype._handleTileAdd=function(e){if(this._tileDispatchMap.has(e.id)){var t=this._tileDispatchMap.get(e.id);t.up()}else{var t=new g.default;this._tileDispatchMap.set(e.id,t)}this._queryTileFeatures(e,!0,this.queryEngine)},t.prototype._handleTileRemove=function(e){this._tileDispatchMap.get(e.id).destroy(),this._tileDispatchMap.delete(e.id)},t.prototype._anyUpdatesQueued=function(){return c.valuesOfMap(this._tileDispatchMap).some(function(e){return e.hasAction()})},t.prototype._updateActiveTiles=function(e,t){return s(this,void 0,void 0,function(){var r,i,n=this;return o(this,function(o){switch(o.label){case 0:return r=p.applySome(e,function(e){return n._createQueryEngine(e)}),i=p.applySome(t,function(e){return n._createQueryEngine(e)}),[4,h.all(this.tileStore.tiles.map(function(e){return n._queryTileFeatures(e,!1,r,i)}))];case 1:return o.sent(),[2]}})})},t.prototype._repushActiveTiles=function(){for(var e=0,t=this.tileStore.tiles;e<t.length;e++){var r=t[e];this._queryTileFeatures(r,!0,this.queryEngine)}},t.prototype._queryTileFeatures=function(e,t,r,i){return s(this,void 0,void 0,function(){var n,a,u,c,d,l,y,v,m,g,_,b,S=this;return o(this,function(E){switch(E.label){case 0:return n={hasZ:!1,hasM:!1,transform:{originPosition:\"upperLeft\",scale:[e.resolution,e.resolution],translate:[e.bounds[0],e.bounds[3]]}},a=this.queryInfo,u=a.returnCentroid,c=a.returnGeometry,d=this._pixelBuffer,l={returnCentroid:u,returnGeometry:c,pixelBuffer:d,returnOutline:this.returnOutline},y=this._tileDispatchMap.get(e.id),[4,p.applySome(r,function(t){return t.featureStore.executeTileQuery(e,S.spatialReference,l)})];case 1:return v=E.sent(),m=p.mapOr(v,[],function(e){return e.features}),g=p.mapOr(i,[],function(t){return f.executeTileQueryForIds(t,e,l)}).map(function(e){return S.attributeStore.getLocalId(e)}),_=h.createResolver(),b=function(r){return s(S,void 0,void 0,function(){return o(this,function(i){switch(i.label){case 0:return[4,this.processor.onTileData(e,{addOrUpdate:m,remove:g,clear:t,transformParams:n},{signal:r})];case 1:return i.sent(),_.resolve(),[2]}})})},y.enqueue(b),[2,_.promise]}})})},i([d.property()],t.prototype,\"connection\",void 0),i([d.property()],t.prototype,\"service\",void 0),i([d.property({readOnly:!0})],t.prototype,\"store\",void 0),i([d.property({readOnly:!0,dependsOn:[\"store\",\"service\",\"config\"]})],t.prototype,\"queryEngine\",null),i([d.property()],t.prototype,\"updating\",null),t=i([d.subclass(\"esri.views.2d.layers.features.controllers.StreamController\")],t)}(d.declared(m.default));t.default=_}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/views/2d/layers/features/controllers/StreamController.js?");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/support/DispatchQueue.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/controllers/support/DispatchQueue.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../../core/tsSupport/generatorHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js\"),__webpack_require__(/*! ../../../../../../core/tsSupport/awaiterHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js\"),__webpack_require__(/*! ../../../../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,o,n,i){Object.defineProperty(e,\"__esModule\",{value:!0});var r=function(){function t(){this._action=null,this._queue=[],this._abortController=i.createAbortController(),this._refs=1}return t.prototype.up=function(){this._refs++},t.prototype.down=function(){return 0===--this._refs},t.prototype.clear=function(){this._abortController.abort(),this._abortController=i.createAbortController()},t.prototype.destroy=function(){this._queue.length=0,this._action&&(this._action=null)},t.prototype.enqueue=function(t){if(!this._action)return void this._setAction(t);this._queue.push(t)},t.prototype.flush=function(){return n(this,void 0,void 0,function(){var t,e,n;return o(this,function(o){return(t=this._action)?(e=this._abortController.signal,n=this._queue.reduce(function(t,o){return t.then(function(){return o(e)})},t),this._action=n.then(this._handleNext.bind(this)),this._queue.length=0,[2,n]):[2]})})},t.prototype.hasAction=function(){return!!this._action},t.prototype._setAction=function(t){var e=this._abortController.signal;this._action=t(e).then(this._handleNext.bind(this))},t.prototype._handleNext=function(){if(!this._queue.length)return void(this._action=null);this._setAction(this._queue.shift())},t}();e.default=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/views/2d/layers/features/controllers/support/DispatchQueue.js?");

/***/ })

}]);