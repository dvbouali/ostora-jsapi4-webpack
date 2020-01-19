(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/views/2d/layers/BitmapTileLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js",
	"esri/views/2d/layers/WMTSLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/WMTSLayerView2D.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../engine/BitmapTileContainer */ \"./node_modules/arcgis-js-api/views/2d/engine/BitmapTileContainer.js\"),__webpack_require__(/*! ../engine/Container */ \"./node_modules/arcgis-js-api/views/2d/engine/Container.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,t,r,n,a,o){Object.defineProperty(i,\"__esModule\",{value:!0}),i.BitmapTileLayerView2D=function(e){return function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.container=new o.Container,i}return r(i,e),i.prototype.attach=function(){var e=this;this.view.timeline.record(this.layer.title+\" (BitmapTileLayer) Attach\"),this._bitmapView=new a.BitmapTileContainer(this._tileInfoView,this.clips),this.handles.add(this.clips.on(\"change\",function(){return e._bitmapView.setClips(e.clips)})),this.container.addChild(this._bitmapView)},i.prototype.detatch=function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()},i=t([n.subclass(\"esri.views.2d.layers.BitmapTileLayerView2D\")],i)}(n.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js?");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/WMTSLayerView2D.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/WMTSLayerView2D.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js\"),__webpack_require__(/*! ../../../core/Handles */ \"./node_modules/arcgis-js-api/core/Handles.js\"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../geometry/support/webMercatorUtils */ \"./node_modules/arcgis-js-api/geometry/support/webMercatorUtils.js\"),__webpack_require__(/*! ./BitmapTileLayerView2D */ \"./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js\"),__webpack_require__(/*! ./LayerView2D */ \"./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js\"),__webpack_require__(/*! ../tiling/TileInfoView */ \"./node_modules/arcgis-js-api/views/2d/tiling/TileInfoView.js\"),__webpack_require__(/*! ../tiling/TileQueue */ \"./node_modules/arcgis-js-api/views/2d/tiling/TileQueue.js\"),__webpack_require__(/*! ../tiling/TileStrategy */ \"./node_modules/arcgis-js-api/views/2d/tiling/TileStrategy.js\"),__webpack_require__(/*! ../../layers/LayerView */ \"./node_modules/arcgis-js-api/views/layers/LayerView.js\"),__webpack_require__(/*! ../../layers/RefreshableLayerView */ \"./node_modules/arcgis-js-api/views/layers/RefreshableLayerView.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,n,l,a,s,u,o,h,c,f,p,d,y){var _=[102113,102100,3857,3785,900913];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t._tileStrategy=null,t._fetchQueue=null,t._tileRequests=new Map,t.layer=null,t}return i(t,e),Object.defineProperty(t.prototype,\"tileMatrixSet\",{get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange(\"updating\")},t.prototype.attach=function(){var e=this,t=this.layer.activeLayer,i=this.tileMatrixSet;if(i){var r=i.tileInfo.spatialReference,n=t.fullExtent&&t.fullExtent.clone();r.isWebMercator?n=u.geographicToWebMercator(n):r.isWGS84||(n=i.fullExtent),this._tileInfoView=new c(i.tileInfo,n),this._fetchQueue=new f({tileInfoView:this._tileInfoView,process:function(t){return e.fetchTile(t)}}),this._tileStrategy=new p({cachePolicy:\"keep\",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this._handles.add(this.watch(\"layer.activeLayer.styleId, tileMatrixSet\",function(){return e._refresh()})),this.inherited(arguments)}},t.prototype.detach=function(){this.inherited(arguments),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){return l(this,void 0,void 0,function(){return n(this,function(e){return this.updateRequested||this.suspended?[2]:(this._refresh(),[2])})})},t.prototype.isUpdating=function(){return this._fetchQueue.length>0},t.prototype.acquireTile=function(e){var t,i,r=this,n=this._bitmapView.createTile(e),l=n.bitmap;t=this._tileInfoView.getTileCoords([0,0],n.key),l.x=t[0],l.y=t[1],l.resolution=this._tileInfoView.getTileResolution(n.key),i=this._tileInfoView.tileInfo.size,l.width=i[0],l.height=i[1],this._tileInfoView.getTileCoords(l,n.key);var a={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(n.key).then(function(e){n.bitmap.source=e,n.once(\"attach\",function(){return r.requestUpdate()}),r._bitmapView.addChild(n)}).catch(function(){n.bitmap.source=null,n.once(\"attach\",function(){return r.requestUpdate()}),r._bitmapView.addChild(n)})};return a.promise.then(function(){return a.fulfilled=!0},function(){return a.fulfilled=!0}),this._tileRequests.set(n,a),this.requestUpdate(),n},t.prototype.releaseTile=function(e){var t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),this.requestUpdate()},t.prototype.fetchTile=function(e){return l(this,void 0,void 0,function(){return n(this,function(t){return[2,this.layer.fetchTile(e.level,e.row,e.col)]})})},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?null!==this.tileMatrixSet:e},t.prototype._refresh=function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){if(t.bitmap.source){t.bitmap.source=null;var i={id:t.key.id,fulfilled:!1,promise:e._fetchQueue.push(t.key).then(function(i){t.bitmap.source=i,t.requestRender(),e.notifyChange(\"updating\")})};i.promise.then(function(){return i.fulfilled=!0},function(){return i.fulfilled=!0}),e._tileRequests.set(t,i)}}),this.notifyChange(\"updating\")},t.prototype._getTileMatrixSetBySpatialReference=function(e){var t=this.view.spatialReference,i=e.tileMatrixSets.find(function(e){return e.tileInfo.spatialReference.wkid===t.wkid});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(function(e){return _.indexOf(e.tileInfo.spatialReference.wkid)>-1})),i},r([s.property({dependsOn:[\"tileMatrixSet\"]})],t.prototype,\"suspended\",void 0),r([s.property({readOnly:!0,dependsOn:[\"view.spatialReference\",\"layer.activeLayer\"]})],t.prototype,\"tileMatrixSet\",null),t=r([s.subclass(\"esri.views.2d.layers.WMTSLayerView2D\")],t)}(s.declared(y.RefreshableLayerView(o.BitmapTileLayerView2D(h.LayerView2D(d)))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/views/2d/layers/WMTSLayerView2D.js?");

/***/ })

}]);