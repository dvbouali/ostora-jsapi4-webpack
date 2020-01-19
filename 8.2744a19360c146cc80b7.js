(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/layers/mixins/SceneService":"./node_modules/arcgis-js-api/layers/mixins/SceneService.js",
	"esri/layers/support/I3SLayerDefinitions":"./node_modules/arcgis-js-api/layers/support/I3SLayerDefinitions.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/arcgis-js-api/layers/mixins/SceneService.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/SceneService.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n//  copyright\n\n/**\n                 * The copyright text as defined by the scene service.\n                 *\n                 * @memberof module:esri/layers/mixins/SceneService\n                 * @name copyright\n                 * @type {string}\n                 */\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js\"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js\"),__webpack_require__(/*! ../../request */ \"./node_modules/arcgis-js-api/request.js\"),__webpack_require__(/*! ../../core/Error */ \"./node_modules/arcgis-js-api/core/Error.js\"),__webpack_require__(/*! ../../core/Logger */ \"./node_modules/arcgis-js-api/core/Logger.js\"),__webpack_require__(/*! ../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../core/urlUtils */ \"./node_modules/arcgis-js-api/core/urlUtils.js\"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../geometry/Extent */ \"./node_modules/arcgis-js-api/geometry/Extent.js\"),__webpack_require__(/*! ../../geometry/HeightModelInfo */ \"./node_modules/arcgis-js-api/geometry/HeightModelInfo.js\"),__webpack_require__(/*! ../../geometry/SpatialReference */ \"./node_modules/arcgis-js-api/geometry/SpatialReference.js\"),__webpack_require__(/*! ../support/arcgisLayerUrl */ \"./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js\"),__webpack_require__(/*! ../support/commonProperties */ \"./node_modules/arcgis-js-api/layers/support/commonProperties.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,a,l,s,p,u,c,d,y,h,f,v){Object.defineProperty(t,\"__esModule\",{value:!0});var m=s.getLogger(\"esri.layers.mixins.SceneService\");t.SceneService=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.blendMode=null,t.spatialReference=null,t.fullExtent=null,t.heightModelInfo=null,t.minScale=0,t.maxScale=0,t.version={major:Number.NaN,minor:Number.NaN,versionString:\"\"},t.copyright=null,t.sublayerTitleMode=\"item-title\",t.title=null,t.layerId=null,t}return r(t,e),t.prototype.readSpatialReference=function(e,t){return this._readSpatialReference(t)},t.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return h.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf(\"/\")+1,r.length),10);return null!=o?new h(o):null},t.prototype.readFullExtent=function(e,t){var r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some(function(e){return e<g})?null:new d({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})},t.prototype.readVersion=function(e,t){var r=t.store,o=null!=r.version?r.version.toString():\"\",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(\".\");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},t.prototype.readTitlePortalItem=function(e){return\"item-title\"!==this.sublayerTitleMode?void 0:e},t.prototype.readTitleService=function(e,t){var r=this.portalItem&&this.portalItem.title;if(\"item-title\"===this.sublayerTitleMode)return f.titleFromUrlAndName(this.url,t.name);var o=t.name||f.parse(this.url).title;return\"item-title-and-service-name\"===this.sublayerTitleMode&&r&&(o=r+\" - \"+o),f.cleanTitle(o)},t.prototype.readLayerId=function(e,t){return t.id},Object.defineProperty(t.prototype,\"url\",{set:function(e){var t=f.sanitizeUrlWithLayerId(this,e,m);this._set(\"url\",t.url),null!=t.layerId&&this._set(\"layerId\",t.layerId)},enumerable:!0,configurable:!0}),t.prototype.writeUrl=function(e,t,r,o){f.writeUrlWithLayerId(this,e,\"layers\",t,o)},Object.defineProperty(t.prototype,\"parsedUrl\",{get:function(){var e=this._get(\"url\");if(!e)return null;var t=u.urlToObject(e);return null!=this.layerId&&f.isArcGISUrl(t.path)&&(t.path=t.path+\"/layers/\"+this.layerId),t},enumerable:!0,configurable:!0}),t.prototype._verifyRootNodeAndUpdateExtent=function(e,t){return i(this,void 0,void 0,function(){var r,o,i,a;return n(this,function(n){switch(n.label){case 0:if(!e)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),r=this._updateExtentFromRootPage,o=[e],[4,this._fetchRootPage(e,t)];case 2:return[2,r.apply(this,o.concat([n.sent()]))];case 3:return i=n.sent(),[3,4];case 4:return a=this._updateExtentFromRootNode,[4,this._fetchRootNode(t)];case 5:return[2,a.apply(this,[n.sent()])]}})})},t.prototype._fetchRootPage=function(e,t){return i(this,void 0,void 0,function(){var r,o,i;return n(this,function(n){switch(n.label){case 0:return e?(r=Math.floor(e.rootIndex/e.nodesPerPage),o=this.parsedUrl.path+\"/nodepages/\"+r,[4,a(o,{responseType:\"json\",signal:t})]):[2,p.reject()];case 1:return i=n.sent(),[2,i.data]}})})},t.prototype._updateExtentFromRootPage=function(e,t){if(null==t||null==t.nodes)throw new l(\"sceneservice:invalid-node-page\",\"Inavlid node page.\");var r=t.nodes[e.rootIndex%e.nodesPerPage];if(null==r||null==r.obb||null==r.obb.center||null==r.obb.halfSize)throw new l(\"sceneservice:invalid-node-page\",\"Inavlid node page.\");var o=r.obb.halfSize,n=r.obb.center[2],i=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=n-i,this.fullExtent.zmax=n+i},t.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}},t.prototype._fetchRootNode=function(e){return i(this,void 0,void 0,function(){var t,r,o;return n(this,function(n){switch(n.label){case 0:if(!this.rootNode)return[2];t=u.join(this.parsedUrl.path,this.rootNode),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,a(t,{query:{f:\"json\"},responseType:\"json\",signal:e})];case 2:return r=n.sent(),[2,r.data];case 3:throw o=n.sent(),new l(\"sceneservice:root-node-missing\",\"Root node missing.\",{error:o,url:t});case 4:return[2]}})})},t.prototype._fetchService=function(e){return i(this,void 0,void 0,function(){var t;return n(this,function(r){switch(r.label){case 0:return null==this.layerId&&/SceneServer\\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(e)]:[3,2];case 1:t=r.sent(),null!=t&&(this.layerId=t),r.label=2;case 2:return[2,this._fetchServiceLayer(e)]}})})},t.prototype._fetchFirstLayerId=function(e){return i(this,void 0,void 0,function(){var t;return n(this,function(r){switch(r.label){case 0:return[4,a(this.url,{query:{f:\"json\"},responseType:\"json\",signal:e})];case 1:return t=r.sent(),t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0?[2,t.data.layers[0].id]:[2,void 0]}})})},t.prototype._fetchServiceLayer=function(e){return i(this,void 0,void 0,function(){var t,r;return n(this,function(o){switch(o.label){case 0:return[4,a(this.parsedUrl.path,{query:{f:\"json\"},responseType:\"json\",signal:e})];case 1:return t=o.sent(),t.ssl&&(this.url=this.url.replace(/^http:/i,\"https:\")),r=t.data,this.read(r,{origin:\"service\",url:this.parsedUrl}),this.validateLayer(r),[2]}})})},t.prototype.validateLayer=function(e){},o([c.shared({id:{json:{origins:{service:{read:!1},\"portal-item\":{read:!1}}}}})],t.prototype,\"properties\",void 0),o([c.property({type:h})],t.prototype,\"spatialReference\",void 0),o([c.reader(\"spatialReference\",[\"spatialReference\",\"store.indexCRS\",\"store.geographicCRS\"])],t.prototype,\"readSpatialReference\",null),o([c.property({type:d})],t.prototype,\"fullExtent\",void 0),o([c.reader(\"fullExtent\",[\"store.extent\",\"spatialReference\",\"store.indexCRS\",\"store.geographicCRS\"])],t.prototype,\"readFullExtent\",null),o([c.property({readOnly:!0,type:y})],t.prototype,\"heightModelInfo\",void 0),o([c.property({type:Number,json:{read:{source:\"layerDefinition.minScale\"},write:{target:\"layerDefinition.minScale\"},origins:{service:{read:{source:\"minScale\"},write:!1}}}})],t.prototype,\"minScale\",void 0),o([c.property({type:Number,json:{read:{source:\"layerDefinition.maxScale\"},write:{target:\"layerDefinition.maxScale\"},origins:{service:{read:{source:\"maxScale\"},write:!1}}}})],t.prototype,\"maxScale\",void 0),o([c.property({readOnly:!0})],t.prototype,\"version\",void 0),o([c.reader(\"version\",[\"store.version\"])],t.prototype,\"readVersion\",null),o([c.property({type:String,json:{read:{source:\"copyrightText\"}}})],t.prototype,\"copyright\",void 0),o([c.property({type:String,json:{read:!1}})],t.prototype,\"sublayerTitleMode\",void 0),o([c.property({type:String})],t.prototype,\"title\",void 0),o([c.reader(\"portal-item\",\"title\")],t.prototype,\"readTitlePortalItem\",null),o([c.reader(\"service\",\"title\",[\"name\"])],t.prototype,\"readTitleService\",null),o([c.property({type:Number})],t.prototype,\"layerId\",void 0),o([c.reader(\"service\",\"layerId\",[\"id\"])],t.prototype,\"readLayerId\",null),o([c.property(v.url)],t.prototype,\"url\",null),o([c.writer(\"url\")],t.prototype,\"writeUrl\",null),o([c.property({dependsOn:[\"layerId\"]})],t.prototype,\"parsedUrl\",null),o([c.property({readOnly:!0})],t.prototype,\"store\",void 0),o([c.property({type:String,readOnly:!0,json:{read:{source:\"store.rootNode\"}}})],t.prototype,\"rootNode\",void 0),t=o([c.subclass(\"esri.layers.mixins.SceneService\")],t)}(c.declared(e))};var g=-1e38}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/layers/mixins/SceneService.js?");

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/I3SLayerDefinitions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/I3SLayerDefinitions.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../core/JSONSupport */ \"./node_modules/arcgis-js-api/core/JSONSupport.js\"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,p,i){Object.defineProperty(t,\"__esModule\",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nodesPerPage=null,t.rootIndex=0,t.lodSelectionMetricType=null,t}return r(t,e),o([i.property({type:Number})],t.prototype,\"nodesPerPage\",void 0),o([i.property({type:Number})],t.prototype,\"rootIndex\",void 0),o([i.property({type:String})],t.prototype,\"lodSelectionMetricType\",void 0),t=o([i.subclass(\"esri.layer.support.I3SNodePageDefinition\")],t)}(i.declared(p.JSONSupport));t.I3SNodePageDefinition=n;var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.factor=1,t}return r(t,e),o([i.property({type:Number,json:{read:{source:\"textureSetDefinitionId\"}}})],t.prototype,\"id\",void 0),o([i.property({type:Number})],t.prototype,\"factor\",void 0),t=o([i.subclass(\"esri.layer.support.I3SMaterialTexture\")],t)}(i.declared(p.JSONSupport));t.I3SMaterialTexture=u;var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.baseColorFactor=[1,1,1,1],t.baseColorTexture=null,t.metallicRoughnessTexture=null,t.metallicFactor=1,t.roughnessFactor=1,t}return r(t,e),o([i.property({type:[Number]})],t.prototype,\"baseColorFactor\",void 0),o([i.property({type:u})],t.prototype,\"baseColorTexture\",void 0),o([i.property({type:u})],t.prototype,\"metallicRoughnessTexture\",void 0),o([i.property({type:Number})],t.prototype,\"metallicFactor\",void 0),o([i.property({type:Number})],t.prototype,\"roughnessFactor\",void 0),t=o([i.subclass(\"esri.layer.support.I3SMaterialPBRMetallicRoughness\")],t)}(i.declared(p.JSONSupport));t.I3SMaterialPBRMetallicRoughness=a;var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.alphaMode=\"opaque\",t.alphaCutoff=.25,t.doubleSided=!1,t.cullFace=\"none\",t.normalTexture=null,t.occlusionTexture=null,t.emissiveTexture=null,t.emissiveFactor=null,t.pbrMetallicRoughness=null,t}return r(t,e),o([i.enumeration.serializable()({opaque:\"opaque\",mask:\"mask\",blend:\"blend\"})],t.prototype,\"alphaMode\",void 0),o([i.property({type:Number})],t.prototype,\"alphaCutoff\",void 0),o([i.property({type:Boolean})],t.prototype,\"doubleSided\",void 0),o([i.enumeration.serializable()({none:\"none\",back:\"back\",front:\"front\"})],t.prototype,\"cullFace\",void 0),o([i.property({type:u})],t.prototype,\"normalTexture\",void 0),o([i.property({type:u})],t.prototype,\"occlusionTexture\",void 0),o([i.property({type:u})],t.prototype,\"emissiveTexture\",void 0),o([i.property({type:[Number]})],t.prototype,\"emissiveFactor\",void 0),o([i.property({type:a})],t.prototype,\"pbrMetallicRoughness\",void 0),t=o([i.subclass(\"esri.layer.support.I3SMaterialDefinition\")],t)}(i.declared(p.JSONSupport));t.I3SMaterialDefinition=l;var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([i.property({type:String,json:{read:{source:[\"name\",\"index\"],reader:function(e,t){return null!=e?e:\"\"+t.index}}}})],t.prototype,\"name\",void 0),o([i.enumeration.serializable()({jpg:\"jpg\",png:\"png\",dds:\"dds\",\"ktx-etc2\":\"ktx-etc2\"})],t.prototype,\"format\",void 0),t=o([i.subclass(\"esri.layer.support.I3STextureFormat\")],t)}(i.declared(p.JSONSupport));t.I3STextureFormat=s;var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.atlas=!1,t}return r(t,e),o([i.property({type:[s]})],t.prototype,\"formats\",void 0),o([i.property({type:Boolean})],t.prototype,\"atlas\",void 0),t=o([i.subclass(\"esri.layer.support.I3STextureSetDefinition\")],t)}(i.declared(p.JSONSupport));t.I3STextureSetDefinition=y;var d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([i.enumeration.serializable()({Float32:\"Float32\",UInt64:\"UInt64\",UInt32:\"UInt32\",UInt16:\"UInt16\",UInt8:\"UInt8\"})],t.prototype,\"type\",void 0),o([i.property({type:Number})],t.prototype,\"component\",void 0),t=o([i.subclass(\"esri.layer.support.I3SGeometryAttribute\")],t)}(i.declared(p.JSONSupport));t.I3SGeometryAttribute=d;var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([i.enumeration.serializable()({draco:\"draco\"})],t.prototype,\"encoding\",void 0),o([i.property({type:[String]})],t.prototype,\"attributes\",void 0),t=o([i.subclass(\"esri.layer.support.I3SGeometryAttribute\")],t)}(i.declared(p.JSONSupport));t.I3SGeometryCompressedAttributes=c;var v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offset=0,t}return r(t,e),o([i.property({type:Number})],t.prototype,\"offset\",void 0),o([i.property({type:d})],t.prototype,\"position\",void 0),o([i.property({type:d})],t.prototype,\"normal\",void 0),o([i.property({type:d})],t.prototype,\"uv0\",void 0),o([i.property({type:d})],t.prototype,\"color\",void 0),o([i.property({type:d})],t.prototype,\"uvRegion\",void 0),o([i.property({type:d})],t.prototype,\"featureId\",void 0),o([i.property({type:d})],t.prototype,\"faceRange\",void 0),o([i.property({type:c})],t.prototype,\"compressedAttributes\",void 0),t=o([i.subclass(\"esri.layer.support.I3SGeometryBuffer\")],t)}(i.declared(p.JSONSupport));t.I3SGeometryBuffer=v;var f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),o([i.enumeration.serializable()({triangle:\"triangle\"})],t.prototype,\"topology\",void 0),o([i.property()],t.prototype,\"geometryBuffers\",void 0),t=o([i.subclass(\"esri.layer.support.I3SMeshDefinition\")],t)}(i.declared(p.JSONSupport));t.I3SGeometryDefinition=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/layers/support/I3SLayerDefinitions.js?");

/***/ })

}]);