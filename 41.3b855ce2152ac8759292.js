(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/layers/graphics/sources/support/CSVSourceWorker":"./node_modules/arcgis-js-api/layers/graphics/sources/support/CSVSourceWorker.js",
	"dstore/Csv":"./node_modules/dojo-dstore/Csv.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/support/CSVSourceWorker.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/support/CSVSourceWorker.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.14/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js\"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js\"),__webpack_require__(/*! dojo/number */ \"./node_modules/dojo/number.js\"),__webpack_require__(/*! dstore/Csv */ \"./node_modules/dojo-dstore/Csv.js\"),__webpack_require__(/*! ../../../../geometry */ \"./node_modules/arcgis-js-api/geometry.js\"),__webpack_require__(/*! ../../../../request */ \"./node_modules/arcgis-js-api/request.js\"),__webpack_require__(/*! ../../../../core/Error */ \"./node_modules/arcgis-js-api/core/Error.js\"),__webpack_require__(/*! ../../../../core/has */ \"./node_modules/arcgis-js-api/core/has.js\"),__webpack_require__(/*! ../../../../core/lang */ \"./node_modules/arcgis-js-api/core/lang.js\"),__webpack_require__(/*! ../../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../../../core/urlUtils */ \"./node_modules/arcgis-js-api/core/urlUtils.js\"),__webpack_require__(/*! ../../../../geometry/projection */ \"./node_modules/arcgis-js-api/geometry/projection.js\"),__webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils */ \"./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js\"),__webpack_require__(/*! ../../../../geometry/support/webMercatorUtils */ \"./node_modules/arcgis-js-api/geometry/support/webMercatorUtils.js\"),__webpack_require__(/*! ../../OptimizedFeature */ \"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js\"),__webpack_require__(/*! ../../OptimizedGeometry */ \"./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js\"),__webpack_require__(/*! ../../data/FeatureStore */ \"./node_modules/arcgis-js-api/layers/graphics/data/FeatureStore.js\"),__webpack_require__(/*! ../../data/projectionSupport */ \"./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js\"),__webpack_require__(/*! ../../data/QueryEngine */ \"./node_modules/arcgis-js-api/layers/graphics/data/QueryEngine.js\"),__webpack_require__(/*! ./clientSideDefaults */ \"./node_modules/arcgis-js-api/layers/graphics/sources/support/clientSideDefaults.js\"),__webpack_require__(/*! ../../../support/FieldsIndex */ \"./node_modules/arcgis-js-api/layers/support/FieldsIndex.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,r,o,a,l,u,s,d,f,c,p,m,y,g,h,v,F,I,N,_){Object.defineProperty(t,\"__esModule\",{value:!0});var b=N.createDrawingInfo(\"esriGeometryPoint\"),x=[\"esriFieldTypeSmallInteger\",\"esriFieldTypeInteger\",\"esriFieldTypeSingle\",\"esriFieldTypeDouble\",\"esriFieldTypeLong\"];t.csvLatitudeFieldNames=[\"lat\",\"latitude\",\"y\",\"ycenter\",\"latitude83\",\"latdecdeg\",\"point-y\"],t.csvLongitudeFieldNames=[\"lon\",\"lng\",\"long\",\"longitude\",\"x\",\"xcenter\",\"longitude83\",\"longdecdeg\",\"point-x\"],t.csvDetectedDelimiters=[\",\",\" \",\";\",\"|\",\"\\t\"];var T=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,w=[0,0],D=function(){function e(e,t){this.x=e,this.y=t}return e}(),E=function(){var e=r._parseInfo(),t=new RegExp(\"^\"+e.regexp+\"$\"),i=new RegExp(\"[\"+e.group+\"\\\\s\\\\xa0]\",\"g\"),n=e.factor;return function(r){var o=t.exec(r);if(e.factor=n,!o)return NaN;var a=o[1];if(!o[1]){if(!o[2])return NaN;a=o[2],e.factor*=-1}return+(a=a.replace(i,\"\").replace(e.decimal,\".\"))*e.factor}}(),S=function(){return\"isInteger\"in Number?Number.isInteger:function(e){return\"number\"==typeof e&&isFinite(e)&&Math.floor(e)===e}}(),j=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},e.prototype.load=function(e,t){return void 0===t&&(t={}),n(this,void 0,void 0,function(){var n,r,o,a,l;return i(this,function(i){switch(i.label){case 0:return[4,f.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)])];case 1:return n=i.sent()[0],r=this._parse(n,e.parsing),this._queryEngine=this._createQueryEngine(n,r),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo&&(o=this._queryEngine.timeExtent,a=o.start,l=o.end,r.layerDefinition.timeInfo.timeExtent=[a,l]),[2,r]}})})},e.prototype.applyEdits=function(){return n(this,void 0,void 0,function(){return i(this,function(e){throw new u(\"csv-source:editing-not-supported\",\"applyEdits() is not supported on CSVLayer\")})})},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]})})},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]})})},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]})})},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]})})},e.prototype._fetch=function(e,t){return n(this,void 0,void 0,function(){var n,r;return i(this,function(i){switch(i.label){case 0:if(!e)throw new u(\"csv-source:invalid-source\",\"url not defined\");return n=c.urlToObject(e),[4,l(n.path,{query:n.query,responseType:\"text\",signal:t.signal})];case 1:return r=i.sent(),[2,r.data]}})})},e.prototype._parse=function(e,t){void 0===t&&(t={});for(var i={columnDelimiter:t.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:t.latitudeField,longitudeFieldName:t.longitudeField}};e&&\"\\n\"===e[0];)e=e.slice(1);\"\\n\"!==e[e.length-1]&&(e+=\"\\n\");var n=this._readFirstLine(e);if(!n)throw new u(\"csv\",\"CSV is empty\",{csv:e});if(!t.columnDelimiter){var r=this._inferDelimiter(n);if(!r)throw new u(\"csv-source:invalid-delimiter\",\"Unable to detect the delimiter from CSV\");i.columnDelimiter=r}var o=n.split(i.columnDelimiter),a=i.layerDefinition={name:\"csv\",drawingInfo:b,geometryType:\"esriGeometryPoint\",objectIdField:null,fields:[],timeInfo:t.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:t.spatialReference||{wkid:102100}}};if(!t.latitudeField||!t.longitudeField){var l=this._inferLocationInfo(o);if(!t.longitudeField&&!l.longitudeFieldName||!t.latitudeField&&!l.latitudeFieldName)throw new u(\"csv\",\"Unable to identify latitudeField and/or longitudeField from CSV\");i.locationInfo={longitudeFieldName:t.longitudeField||l.longitudeFieldName,latitudeFieldName:t.latitudeField||l.latitudeFieldName}}var s=this._inferFields(e,i.columnDelimiter,o,i.locationInfo);if(t.fields&&t.fields.length){for(var f=new Map,c=0,p=t.fields;c<p.length;c++){var m=p[c];f.set(m.name.toLowerCase(),m)}for(var y=0,g=s;y<g.length;y++){var m=g[y],h=f.get(m.name.toLowerCase());if(h){var v=m.name;d.mixin(m,h),m.name=v}}}if(a.fields=s,!a.fields.some(function(e){return\"esriFieldTypeOID\"===e.type&&(a.objectIdField=e.name,!0)})){var m={name:\"__OBJECTID\",alias:\"__OBJECTID\",type:\"esriFieldTypeOID\",editable:!1,nullable:!1};a.objectIdField=m.name,a.fields.unshift(m)}if(this._fieldsIndex=new _(a.fields),a.timeInfo){var F=a.timeInfo;if(F.startTimeField){var I=this._fieldsIndex.get(F.startTimeField);I?(F.startTimeField=I.name,I.type=\"esriFieldTypeDate\"):F.startTimeField=null}if(F.endTimeField){var N=this._fieldsIndex.get(F.endTimeField);N?(F.endTimeField=N.name,N.type=\"esriFieldTypeDate\"):F.endTimeField=null}if(F.trackIdField){var x=this._fieldsIndex.get(F.trackIdField);F.trackIdField=x?x.name:null}F.startTimeField||F.endTimeField||(a.timeInfo=null)}return i},e.prototype._inferLocationInfo=function(e){var i=null,n=null;return e.forEach(function(e){var r,o=e.toLowerCase();r=t.csvLatitudeFieldNames.indexOf(o),-1===r||n||(n=e),-1===(r=t.csvLongitudeFieldNames.indexOf(o))||i||(i=e)}),{longitudeFieldName:i,latitudeFieldName:n}},e.prototype._inferFields=function(e,t,i,n){for(var r=[],o=this._sampleLines(e).map(function(e){return e.split(t).map(function(e){return e.trim()})}),a=this,l=0;l<i.length;l++)!function(e){var t=i[e];if(t===n.longitudeFieldName||t===n.latitudeFieldName)r.push({name:t,type:\"esriFieldTypeDouble\",alias:t});else{var l=o.map(function(t){return t[e]}),u=a._inferFieldType(l),s={name:t,type:null,alias:t};switch(u){case\"integer\":s.type=\"esriFieldTypeInteger\";break;case\"double\":s.type=\"esriFieldTypeDouble\";break;case\"date\":s.type=\"esriFieldTypeDate\",s.length=36;break;default:s.type=\"esriFieldTypeString\",s.length=255}r.push(s)}}(l);return r},e.prototype._inferFieldType=function(e){var t=this;if(!e.length)return\"string\";var i=/[^+-.,0-9]/;return e.map(function(e){var n=!1;if(\"\"===e||i.test(e))n=!0;else{var r=E(e);if(!isNaN(r))return/[.,]/.test(e)?\"double\":!S(r)||r>214783647||r<-214783648?\"double\":\"integer\";if(-1===e.indexOf(\"E\"))n=!0;else{if(r=Number(e),!isNaN(r))return\"double\";if(-1===e.indexOf(\",\"))n=!0;else{if(e=e.replace(\",\",\".\"),r=Number(e),!isNaN(r))return\"double\";n=!0}}}if(n){if(!/^[-]?\\d*[.,]?\\d*$/.test(e)){var o=new Date(e);return t._isValidDate(o,e)?\"date\":\"string\"}return\"string\"}return\"string\"}).reduce(function(e,t){return e===t?t:\"string\"===e||\"string\"===t?\"string\":\"double\"===e||\"double\"===t?\"double\":void 0})},e.prototype._isValidDate=function(e,t){if(!e||\"[object Date]\"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var i=!0;if(s(\"chrome\")&&/\\d+\\W*$/.test(t)){var n=t.match(/[a-zA-Z]{2,}/);if(n){for(var r=!1,o=0;!r&&o<=n.length;)r=!T.test(n[o]),o++;i=!r}}return i},e.prototype._readFirstLine=function(e){return e.substring(0,e.indexOf(\"\\n\")).trim()},e.prototype._sampleLines=function(e,t){void 0===t&&(t=10);for(var i=!1,n=[],r=e.indexOf(\"\\n\")+1;!i&&n.length<t;){var o=e.indexOf(\"\\n\",r);if(-1!==o){var a=void 0;a=-1===o&&r<e.length-1?e.substring(r).trim():e.substring(r,o).trim(),a&&n.push(a),r=o+1}else i=!0}return n},e.prototype._inferDelimiter=function(e){var i=0,n=\"\";return t.csvDetectedDelimiters.forEach(function(t){var r=e.split(t).length;r>i&&(i=r,n=t)}),\"\"===n?null:n},e.prototype._createQueryEngine=function(e,t){for(var i,n=t.locationInfo,r=n.latitudeFieldName,l=n.longitudeFieldName,u=t.layerDefinition,s=u.objectIdField,d=u.fields,f=u.extent,c=u.timeInfo,F=[],N=[],_=new Set,b=new Set,T=[],S=0,j=d;S<j.length;S++){var q=j[S],O=q.name,L=q.type;\"esriFieldTypeDate\"===L?_.add(O):x.indexOf(L)>-1&&b.add(O),O!==s&&T.push(O)}var C=new o;C.delimiter=t.columnDelimiter,C.fieldNames=T,C.newline=\"\\n\";var V=C.parse(e),k=0;V.shift();for(var R=0,P=V;R<P.length;R++){var M=P[R],G=this._parseCoordinateValue(M[r]),Q=this._parseCoordinateValue(M[l]);if(null!=Q&&null!=G&&!isNaN(G)&&!isNaN(Q)){M[r]=G,M[l]=Q;for(var U in M)if(U!==r&&U!==l)if(_.has(U)){var Y=new Date(M[U]);M[U]=this._isValidDate(Y,M[U])?Y.getTime():null}else if(b.has(U)){var W=E(M[U]);isNaN(W)?M[U]=null:M[U]=W}M[s]=k,k++,F.push(new D(Q,G)),N.push(M)}}if(!m.equals({wkid:4326},f.spatialReference))if(m.isWebMercator(f.spatialReference))for(var $=0,z=F;$<z.length;$++){var A=z[$];i=y.lngLatToXY(A.x,A.y,w),A.x=i[0],A.y=i[1]}else F=p.projectMany(F,a.SpatialReference.WGS84,f.spatialReference,null,!0);for(var Z=new v.default({geometryType:\"esriGeometryPoint\",hasM:!1,hasZ:!1}),B=new I.default({fields:t.layerDefinition.fields,geometryType:\"esriGeometryPoint\",hasM:!1,hasZ:!1,timeInfo:c,objectIdField:s,spatialReference:f.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:Z}),H=[],J=0;J<F.length;J++){var X=F[J],K=X.x,ee=X.y,te=N[J];te[s]=J+1,H.push(new g.default(new h.default([],[K,ee]),te,null,te[s]))}return Z.addMany(H),B},e.prototype._parseCoordinateValue=function(e){if(null==e||\"\"===e)return null;var t=E(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t},e.prototype._checkProjection=function(e){return n(this,void 0,void 0,function(){var t;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,F.checkProjectionSupport(m.WGS84,e)];case 1:return i.sent(),[3,3];case 2:throw t=i.sent(),new u(\"csv-layer\",\"Projection not supported\");case 3:return[2]}})})},e}();t.default=j}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/arcgis-js-api/layers/graphics/sources/support/CSVSourceWorker.js?");

/***/ }),

/***/ "./node_modules/dojo-dstore/Csv.js":
/*!*****************************************!*\
  !*** ./node_modules/dojo-dstore/Csv.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [\n\t__webpack_require__(/*! dojo/_base/lang */ \"./node_modules/dojo/_base/lang.js\"),\n\t__webpack_require__(/*! dojo/_base/declare */ \"./node_modules/dojo/_base/declare.js\")\n], __WEBPACK_AMD_DEFINE_RESULT__ = (function (lang, declare) {\n\t// originally from https://github.com/kfranqueiro/dojo-smore/blob/master/Csv.js\n\tvar quoteRx = /^\\s*\"([\\S\\s]*)\"\\s*$/,\n\t\tdoubleQuoteRx = /\"\"/g,\n\t\tsingleQuoteRx = /\"/g;\n\t\n\tfunction arrays2hash(keys, values) {\n\t\t// Takes 2 arrays and builds a hash where the keys are from the first array,\n\t\t// and the values are from the second.\n\t\tvar obj = {},\n\t\t\tlen = keys.length,\n\t\t\ti;\n\t\t\n\t\tfor (i = 0; i < len; i++) {\n\t\t\tobj[keys[i]] = values[i];\n\t\t}\n\t\treturn obj;\n\t}\n\t\n\treturn declare(null, {\n\t\t// summary:\n\t\t//\t\tA store mixin for supporting CSV format.\n\t\t\n\t\t// fieldNames: Array?\n\t\t//\t\tIf specified, indicates names of fields in the order they appear in\n\t\t//\t\tCSV records.  If unspecified, the first line of the CSV will be treated\n\t\t//\t\tas a header row, and field names will be populated from there.\n\t\tfieldNames: null,\n\t\t\n\t\t// delimiter: String\n\t\t//\t\tDelimiter between fields; default is a comma.\n\t\tdelimiter: ',',\n\t\t\n\t\t// newline: String\n\t\t//\t\tCharacter sequence to consider a newline.\n\t\t//\t\tDefaults to '\\r\\n' (CRLF) as per RFC 4180.\n\t\tnewline: '\\r\\n',\n\t\t\n\t\t// trim: Boolean\n\t\t//\t\tIf true, leading/trailing space will be trimmed from any unquoted values.\n\t\ttrim: false,\n\t\t\n\t\tparse: function (str) {\n\t\t\t// handles the parsing of the incoming data as CSV.\t\t\t\n\n\t\t\tvar data = [],\n\t\t\t\tlines = str.split(this.newline),\n\t\t\t\tfieldNames = this.fieldNames,\n\t\t\t\tnumquotes = 0, // tracks number of \" characters encountered\n\t\t\t\tvalues = [], // records values in the current record\n\t\t\t\tvalue = '',\n\t\t\t\tprefix = '', // used to re-add delimiters and newlines to a spanning value\n\t\t\t\tparts, part, numlines, numparts, match,\n\t\t\t\ti, j, k;\n\t\t\t\n\t\t\t// Outer loop iterates over lines.  It's labeled so that inner loop\n\t\t\t// can jump out if an invalid value is encountered.\n\t\t\tlineloop:\n\t\t\tfor (i = 0, numlines = lines.length; i < numlines; i++) {\n\t\t\t\tif (!lang.trim(lines[i])) { continue; } // ignore blank lines\n\t\t\t\tparts = lines[i].split(this.delimiter);\n\t\t\t\t\n\t\t\t\t// Inner loop iterates over \"parts\" (pieces of the line, split by\n\t\t\t\t// the configured delimiter).\n\t\t\t\tfor (j = 0, numparts = parts.length; j < numparts; j++) {\n\t\t\t\t\tpart = parts[j];\n\t\t\t\t\tk = -1;\n\t\t\t\t\t\n\t\t\t\t\t// Apply any leftovers in prefix before the next part, then clear it.\n\t\t\t\t\tvalue += prefix + part;\n\t\t\t\t\tprefix = '';\n\t\t\t\t\t\n\t\t\t\t\t// Count number of quotes in part to see whether we have a matching set.\n\t\t\t\t\twhile ((k = part.indexOf('\"', k + 1)) >= 0) { numquotes++; }\n\t\t\t\t\t\n\t\t\t\t\tif (numquotes % 2 === 0) {\n\t\t\t\t\t\t// Even number of quotes: we're done with this value.\n\t\t\t\t\t\tif (numquotes > 0) {\n\t\t\t\t\t\t\tmatch = quoteRx.exec(value);\n\t\t\t\t\t\t\tif (match) {\n\t\t\t\t\t\t\t\t// Good quoted string; unescape any quotes within.\n\t\t\t\t\t\t\t\tvalues.push(match[1].replace(doubleQuoteRx, '\"'));\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t// If the completed value didn't match the RegExp, it's invalid\n\t\t\t\t\t\t\t\t// (e.g. quotes were inside the value but not surrounding it).\n\t\t\t\t\t\t\t\t// Jump out of the outer loop and start fresh on the next line.\n\t\t\t\t\t\t\t\tconsole.warn('Csv: discarding row with invalid value: ' + value);\n\t\t\t\t\t\t\t\tvalues = [];\n\t\t\t\t\t\t\t\tvalue = '';\n\t\t\t\t\t\t\t\tnumquotes = 0;\n\t\t\t\t\t\t\t\tcontinue lineloop;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// No quotes; push value as-is or trimmed.\n\t\t\t\t\t\t\t// (If this is the header row, trim regardless of setting.)\n\t\t\t\t\t\t\tvalues.push(this.trim || !fieldNames ? lang.trim(value) : value);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tvalue = '';\n\t\t\t\t\t\tnumquotes = 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Open quoted value: add delimiter to current value on next run.\n\t\t\t\t\t\t// (i.e., we split on an instance of the delimiter character that is\n\t\t\t\t\t\t// actually *inside* a quoted value.)\n\t\t\t\t\t\tprefix = this.delimiter;\n\t\t\t\t\t}\n\t\t\t\t} // End of inner loop (delimited parts)\n\t\t\t\t\n\t\t\t\tif (numquotes === 0) {\n\t\t\t\t\t// Line ended cleanly, push values and reset.\n\t\t\t\t\tif (!fieldNames) {\n\t\t\t\t\t\t// We don't know any field names yet, so pick them up from the\n\t\t\t\t\t\t// first row of data.\n\t\t\t\t\t\tfieldNames = this.fieldNames = values;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tdata.push(arrays2hash(fieldNames, values));\n\t\t\t\t\t}\n\t\t\t\t\tvalues = [];\n\t\t\t\t} else {\n\t\t\t\t\t// We're in the middle of a quoted value with a newline in it,\n\t\t\t\t\t// so add a newline to it on the next iteration.\n\t\t\t\t\tprefix = this.newline;\n\t\t\t\t}\n\t\t\t} // End of outer loop (lines)\n\t\t\t\n\t\t\t// The data is assembled; return\n\t\t\treturn data;\n\t\t},\n\t\ttoCsv: function (options) {\n\t\t\t// summary:\n\t\t\t//\t\tReturns data from Memory store, re-exported to CSV format.\n\t\t\treturn this.stringify(this.data, options);\n\t\t},\n\t\tstringify: function (data, options) {\n\t\t\t// summary:\n\t\t\t//\t\tSerializes data as CSV\n\t\t\t// options: Object?\n\t\t\t//\t\tOptional object specifying options affecting the CSV output.\n\t\t\t//\t\t* alwaysQuote: if true (default), all values will be quoted;\n\t\t\t//\t\t\tif false, values will be quoted only if they need to be.\n\t\t\t//\t\t* trailingNewline: if true, a newline will be included at the end\n\t\t\t//\t\t\tof the string (after the last record).  Default is false.\n\t\t\t\n\t\t\toptions = options || {};\n\t\t\t\n\t\t\tvar alwaysQuote = options.alwaysQuote,\n\t\t\t\tfieldNames = this.fieldNames,\n\t\t\t\tdelimiter = this.delimiter,\n\t\t\t\tnewline = this.newline,\n\t\t\t\toutput = '',\n\t\t\t\ti, j, value, needsQuotes;\n\t\t\t\n\t\t\t// Process header row first (-1 case), then all data rows.\n\t\t\tfor (i = -1; i < data.length; i++) {\n\t\t\t\tif (i > -1) { output += newline; }\n\t\t\t\tfor (j = 0; j < fieldNames.length; j++) {\n\t\t\t\t\tvalue = i < 0 ? fieldNames[j] : data[i][fieldNames[j]];\n\t\t\t\t\tif (value === null || value === undefined) {\n\t\t\t\t\t\tvalue = '';\n\t\t\t\t\t}\n\t\t\t\t\tif (typeof value !== 'string') {\n\t\t\t\t\t\tvalue = value.toString();\n\t\t\t\t\t}\n\t\t\t\t\tneedsQuotes = alwaysQuote ||\n\t\t\t\t\t\tvalue.indexOf('\"') >= 0 || value.indexOf(delimiter) >= 0;\n\t\t\t\t\toutput += (j > 0 ? delimiter : '') +\n\t\t\t\t\t\t(needsQuotes ? '\"' + value.replace(singleQuoteRx, '\"\"') + '\"' : value);\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tif (options.trailingNewline) { output += newline; }\n\t\t\t\n\t\t\treturn output;\n\t\t}\n\t});\n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./node_modules/dojo-dstore/Csv.js?");

/***/ })

}]);