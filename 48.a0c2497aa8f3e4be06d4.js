(function(){(this||window).webpackJsonp.registerAbsMids({"esri/tasks/operations/PBFWorker":1568,"esri/tasks/operations/query":1569,"esri/tasks/operations/urlUtils":1632,"esri/tasks/operations/pbfQueryUtils":1634,"esri/tasks/operations/pbfFeatureServiceParser":1643,"esri/tasks/operations/pbfDehydratedFeatureSet":1644,"esri/tasks/operations/pbfOptimizedFeatureSet":1645,"esri/tasks/operations/queryAttachments":1651,"esri/tasks/QueryTask":1655,"esri/tasks/operations/queryRelatedRecords":1656,"esri/layers/graphics/sources/StreamLayerSource":2802,"esri/layers/support/WebSocketConnector":2803})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[48,61,69],{1568:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(11),r(89),r(4),r(304),r(208),r(31),r(205),r(1634),r.dj.m(e)],void 0===(o=function(e,t,r,u,o,n,s,c,l,i,a){Object.defineProperty(t,"__esModule",{value:!0});var d,p=(y.prototype._parseFeatureQuery=function(e){var t=i.parsePBFFeatureQuery(e.buffer,e.options);if(e.options&&"dehydrated"===e.options.type){var r=t;if(t.spatialReference=r.spatialReference.toJSON(),r.fields)for(var n=0;n<r.fields.length;n++)r.fields[n]=r.fields[n].toJSON()}return o.resolve(t)},y),h=(r(f,d=p),f.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},f.prototype.parseFeatureQuery=function(e,a){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_parseFeatureQuery",{buffer:e,options:a},{transferList:[e]}).then(function(e){if(a&&"dehydrated"===a.type){var t=e;if(t.spatialReference=c.fromJSON(t.spatialReference),t.fields)for(var r=0;r<t.fields.length;r++)t.fields[r]=l.fromJSON(t.fields[r]);for(var n=t.spatialReference,o=0,s=t.features;o<s.length;o++){var i=s[o];i.uid=u.generateUID(),i.geometry&&(i.geometry.spatialReference=n)}}return e}):o.resolve(i.parsePBFFeatureQuery(e,a)):o.resolve(null)},f);function f(){var t=d.call(this)||this;return t._thread=void 0,s.open(n.getAbsMid("./PBFWorker",e,a),{strategy:"dedicated"}).then(function(e){void 0===t._thread?t._thread=e:e.close()}),t}function y(){}t.PBFWorker=h,t.default=function(){return new p}}.apply(null,n))||(e.exports=o)},1569:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(5),r(29),r(12),r(22),r(38),r(485),r(1634),r(1568),r(1632),r(47)],void 0===(o=function(e,t,u,c,l,r,d,p,s,i,h){function f(e,t){var r=e.geometry,n=e.toJSON(),o=n;if(r&&(o.geometry=JSON.stringify(r),o.geometryType=d.getJsonType(r),o.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete o.outFields:-1!==n.outFields.indexOf("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(o.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var s=n.timeExtent,i=s.start,a=s.end;null==i&&null==a||(o.time=i===a?i:(null==i?"null":i)+","+(null==a?"null":a)),delete n.timeExtent}return o}function a(e,n,o,s,i){void 0===s&&(s={});var a="string"==typeof e?r.urlToObject(e):e,t=n.geometry?[n.geometry]:[];return s.responseType="pbf"===o?"array-buffer":"json",p.normalizeCentralMeridian(t,null,s).then(function(e){var t=e&&e[0];l.isSome(t)&&((n=n.clone()).geometry=t);var r=h.mapParameters(u({},a.query,{f:o},i,f(n,i)));return c(a.path+"/query",u({},s,{query:r}))})}Object.defineProperty(t,"__esModule",{value:!0});var y,n="Layer does not support extent calculation.";t.queryToQueryStringParameters=f,t.executeQuery=function(e,t,r){return a(e,t,"json",r)},t.executeQueryPBF=function(e,t,n,r){var o=n.useWorker?(null==y&&(y=new i.PBFWorker),y):null;return a(e,t,"pbf",r).then(function(r){function t(e){var t=r;return t.data=e,t}return n.useWorker?o.parseFeatureQuery(r.data,n).then(function(e){return t(e)}):t(s.parsePBFFeatureQuery(r.data,n))})},t.executeQueryForIds=function(e,t,r){return a(e,t,"json",r,{returnIdsOnly:!0})},t.executeQueryForCount=function(e,t,r){return a(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})},t.executeQueryForExtent=function(e,t,r){return a(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(n);if(t.hasOwnProperty("count"))throw new Error(n);return e})}}.apply(null,n))||(e.exports=o)},1632:function(e,t,r){var n,o;n=[r.dj.c(e.i),t],void 0===(o=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.mapParameters=function e(t){var r={};for(var n in t)if("declaredClass"!==n){var o=t[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){r[n]=[];for(var s=0;s<o.length;s++)r[n][s]=e(o[s])}else"object"==typeof o?o.toJSON&&(r[n]=JSON.stringify(o)):r[n]=o}return r}}.apply(null,n))||(e.exports=o)},1634:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(1643)],void 0===(o=function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.parsePBFFeatureQuery=function(e,t){var r=a.parseFeatureQuery(e,t).queryResult.featureResult;if(r&&r.features&&r.features.length&&r.objectIdFieldName)for(var n=r.objectIdFieldName,o=0,s=r.features;o<s.length;o++){var i=s[o];i.attributes&&(i.objectId=i.attributes[n])}return r}}.apply(null,n))||(e.exports=o)},1643:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(6),r(3),r(489),r(1644),r(1645)],void 0===(o=function(e,t,a,r,u,c,l){function n(e){return e>=w.length?null:w[e]}function o(e){return e>=x.length?null:x[e]}function s(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function d(e,t,r){for(var n=t.createPointGeometry(r);e.next();)switch(e.tag()){case 3:for(var o=e.getUInt32(),s=e.pos()+o,i=0;e.pos()<s;)t.addCoordinatePoint(n,e.getSInt64(),0,i++);break;case 1:case 2:default:e.skip()}return n}function p(e,t,r){for(var n=t.createGeometry(r),o=2+(r.hasZ?1:0)+(r.hasM?1:0);e.next();)switch(e.tag()){case 2:for(var s=e.getUInt32(),i=e.pos()+s,a=0;e.pos()<i;)t.addLength(n,e.getUInt32(),a++);break;case 3:for(var u=e.getUInt32(),c=(i=e.pos()+u,0),l=0;e.pos()<i;)t.addCoordinate(n,e.getSInt64(),l,c),++c==o&&(l++,c=0);break;case 1:default:e.skip()}return n}function h(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function i(e){for(var t={type:n(0)};e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=n(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=(r=e.getEnum())>=P.length?null:P[r];break;case 5:case 6:default:e.skip()}var r;return t}function f(e,t,r,n){for(var o=t.createFeature(r),s=0;e.next();)switch(e.tag()){case 1:var i=n[s++].name;o.attributes[i]=e.processMessage(h);break;case 2:o.geometry=e.processMessageWithArgs(p,t,r);break;case 4:o.centroid=e.processMessageWithArgs(d,t,r);break;default:e.skip()}return o}function y(e){for(var t=[1,1,1,1];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function g(e){for(var t=[0,0,0,0];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function m(e){for(var t={originPosition:o(0)};e.next();)switch(e.tag()){case 1:t.originPosition=o(e.getEnum());break;case 2:t.scale=e.processMessage(y);break;case 3:t.translate=e.processMessage(g);break;default:e.skip()}return t}function v(e){for(var t={};e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function b(e,t){for(var r=t.createSpatialReference();e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:case 3:case 4:default:e.skip()}return r}function k(e,t){var r=t.createFeatureResult();r.geometryType=s(t,0);for(var n=!1;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(v);break;case 7:r.geometryType=s(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(b,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(m);break;case 9:var o=e.getBool();r.exceededTransferLimit=o;break;case 13:t.addField(r,e.processMessage(i));break;case 15:n||(t.prepareFeatures(r),n=!0),t.addFeature(r,e.processMessageWithArgs(f,t,r,r.fields));break;case 2:case 6:default:e.skip()}return t.finishFeatureResult(r),r}function S(e,t){for(var r={};e.next();)switch(e.tag()){case 1:r.featureResult=e.processMessageWithArgs(k,t);break;default:e.skip()}return r}Object.defineProperty(t,"__esModule",{value:!0});var F=r.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),w=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],P=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],x=["upperLeft","lowerLeft"];t.parseFeatureQuery=function(e,t){var r,n=(r=t)&&"dehydrated"===r.type?new c.Context(r):new l.Context;try{for(var o=new u(new Uint8Array(e),new DataView(e)),s={};o.next();)switch(o.tag()){case 2:s.queryResult=o.processMessageWithArgs(S,n);break;default:o.skip()}return s}catch(e){var i=new a("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e});return F.error(i),{queryResult:{featureResult:n.createFeatureResult()}}}}}.apply(null,n))||(e.exports=o)},1644:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(89),r(34),r(31),r(486),r(205)],void 0===(o=function(e,t,r,n,o,s,i){function a(e,t){return t}function u(e,t,r,n){switch(r){case 0:return p(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?p:h)(e,t+n,1)}}function c(e,t,r,n){switch(r){case 0:return p(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?p:h)(e,t+n,1);case 2:return p(e,t,2)}}function l(e,t,r,n){switch(r){case 0:return p(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?p:h)(e,t+n,1);case 2:return p(e,t,3)}}function d(e,t,r,n){switch(r){case 0:return p(e,t+n,0);case 1:return("lowerLeft"===e.originPosition?p:h)(e,t+n,1);case 2:return p(e,t,2);case 3:return p(e,t,3)}}function p(e,t,r){var n=e.translate,o=e.scale;return n[r]+t*o[r]}function h(e,t,r){var n=e.translate,o=e.scale;return n[r]-t*o[r]}Object.defineProperty(t,"__esModule",{value:!0});var f=(y.prototype.createFeatureResult=function(){return new s.DehydratedFeatureSetClass},y.prototype.finishFeatureResult=function(e){this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0},y.prototype.createSpatialReference=function(){return new o},y.prototype.addField=function(e,t){e.fields.push(i.fromJSON(t));var r=e.fields.map(function(e){return e.name});this.AttributesConstructor=function(){for(var e=0,t=r;e<t.length;e++)this[t[e]]=null}},y.prototype.addFeature=function(e,t){var r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(0<r)for(var n in t.attributes){var o=t.attributes[n];"string"==typeof o&&o.length>r&&(t.attributes[n]="")}e.features.push(t)},y.prototype.prepareFeatures=function(e){var o=this;switch(this.options.applyTransform&&e.transform&&(this.transform=e.transform,this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=function(e,t,r,n){return o.addCoordinatePoint(e,t,n)},this.createGeometry=function(e){return o.createPointGeometry(e)};break;case"polygon":this.addCoordinate=function(e,t,r,n){return o.addCoordinatePolygon(e,t,n)},this.createGeometry=function(e){return o.createPolygonGeometry(e)};break;case"polyline":this.addCoordinate=function(e,t,r,n){return o.addCoordinatePolyline(e,t,n)},this.createGeometry=function(e){return o.createPolylineGeometry(e)};break;case"multipoint":this.addCoordinate=function(e,t,r,n){return o.addCoordinateMultipoint(e,t,n)},this.createGeometry=function(e){return o.createMultipointGeometry(e)};break;default:n.neverReached(e.geometryType)}},y.prototype.createFeature=function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new s.DehydratedFeatureClass(r.generateUID(),null,new this.AttributesConstructor)},y.prototype.addLength=function(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)},y.prototype.createPointGeometry=function(e){var t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t},y.prototype.addCoordinatePoint=function(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}},y.prototype.transformPathLikeValue=function(e,t){var r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)},y.prototype.addCoordinatePolyline=function(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)},y.prototype.addCoordinatePolygon=function(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)},y.prototype.addCoordinateMultipoint=function(e,t,r){0===r&&e.points.push([]);var n=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)},y.prototype.createPolygonGeometry=function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},y.prototype.createPolylineGeometry=function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},y.prototype.createMultipointGeometry=function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},y.prototype.dehydratedAddPointsCoordinate=function(e,t,r){if(null===this.coordinateBuffer){var n=this.lengths.reduce(function(e,t){return e+t},0);this.coordinateBuffer=new Float64Array(n*this.vertexDimension)}0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var o=this.transformPathLikeValue(t,r),s=e[e.length-1];0===r&&s.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=o},y.prototype.deriveApplyTransform=function(e){var t=e.hasZ,r=e.hasM;return t&&r?d:t?c:r?l:u},y);function y(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=a,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}t.Context=f}.apply(null,n))||(e.exports=o)},1645:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(487),r(493),r(302)],void 0===(o=function(e,t,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var s=(i.prototype.createFeatureResult=function(){return new n.default},i.prototype.prepareFeatures=function(){},i.prototype.finishFeatureResult=function(){},i.prototype.addFeature=function(e,t){e.features.push(t)},i.prototype.createFeature=function(){return new r.default},i.prototype.createSpatialReference=function(){return{wkid:0}},i.prototype.createGeometry=function(){return new o.default},i.prototype.addField=function(e,t){e.fields.push(t)},i.prototype.addCoordinate=function(e,t){e.coords.push(t)},i.prototype.addCoordinatePoint=function(e,t){e.coords.push(t)},i.prototype.addLength=function(e,t){e.lengths.push(t)},i.prototype.createPointGeometry=function(){return new o.default},i);function i(){this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"]}t.Context=s}.apply(null,n))||(e.exports=o)},1651:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(5),r(29),r(22),r(501),r(1632)],void 0===(o=function(e,t,s,i,f,y,a){Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=function(e,t){for(var r={},n=0,o=e;n<o.length;n++)for(var s=o[n],i=s.parentObjectId,a=s.parentGlobalId,u=0,c=s.attachmentInfos;u<c.length;u++){var l=c[u],d=l.id,p=f.addProxy(f.addTokenParameter(t+"/"+i+"/attachments/"+d)),h=y.fromJSON(l);h.set({url:p,parentObjectId:i,parentGlobalId:a}),r[i]?r[i].push(h):r[i]=[h]}return r},t.executeAttachmentQuery=function(e,t,r){var n,o={query:a.mapParameters(s({},e.query,{f:"json"},((n=t.toJSON()).attachmentTypes&&(n.attachmentTypes=n.attachmentTypes.join(",")),n.keywords&&(n.keywords=n.keywords.join(",")),n.globalIds&&(n.globalIds=n.globalIds.join(",")),n.objectIds&&(n.objectIds=n.objectIds.join(",")),n.size&&(n.size=n.size.join(",")),n)))};return r&&(o=s({},r,o)),i(e.path+"/queryAttachments",o)}}.apply(null,n))||(e.exports=o)},1655:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(1),r(0),r(91),r(5),r(28),r(2),r(303),r(1569),r(1651),r(1656),r(497),r(207),r(301),r(498)],void 0===(o=function(e,t,r,n,o,s,i,a,u,c,l,d,p,h,f,y){return m=a.declared(u),r(g,m),g.prototype.execute=function(e,t){return this.executeJSON(e,t).then(function(e){return h.fromJSON(e)})},g.prototype.executeJSON=function(e,t){return c.executeQuery(this.parsedUrl,this._normalizeQuery(e),s({},this.requestOptions,t)).then(function(e){return e.data})},g.prototype.executeForCount=function(e,t){return c.executeQueryForCount(this.parsedUrl,this._normalizeQuery(e),s({},this.requestOptions,t)).then(function(e){return e.data.count})},g.prototype.executeForExtent=function(e,t){return c.executeQueryForExtent(this.parsedUrl,this._normalizeQuery(e),s({},this.requestOptions,t)).then(function(e){return{count:e.data.count,extent:i.Extent.fromJSON(e.data.extent)}})},g.prototype.executeForIds=function(e,t){return c.executeQueryForIds(this.parsedUrl,this._normalizeQuery(e),s({},this.requestOptions,t)).then(function(e){return e.data.objectIds})},g.prototype.executeRelationshipQuery=function(e,t){return e=y.from(e),(this.gdbVersion||this.source)&&(e=e.clone().set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source})),d.executeRelationshipQuery(this.parsedUrl,e,s({},this.requestOptions,t)).then(function(e){var t=e.data,r={};return Object.keys(t).forEach(function(e){return r[e]=h.fromJSON(t[e])}),r})},g.prototype.executeAttachmentQuery=function(e,t){var r=this;return l.executeAttachmentQuery(this.parsedUrl,p.from(e),s({},this.requestOptions,t)).then(function(e){return l.processAttachmentQueryResult(e.data.attachmentGroups,r.parsedUrl.path)})},g.prototype._normalizeQuery=function(e){var t=f.from(e);return this.gdbVersion||this.source?(t===e?t.clone():t).set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source}):t},n([a.property()],g.prototype,"gdbVersion",void 0),n([a.property()],g.prototype,"source",void 0),n([a.subclass("esri.tasks.QueryTask")],g);function g(e){var t=m.call(this,e)||this;return t.gdbVersion=null,t.source=null,t}var m}.apply(null,n))||(e.exports=o)},1656:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(5),r(29),r(1632)],void 0===(o=function(e,t,o,s,i){function a(e){var t=e.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.outFields&&(t.outFields=t.outFields.join(",")),t.outSpatialReference&&(t.outSR=t.outSR.wkid||JSON.stringify(t.outSR.toJSON()),delete t.outSpatialReference),t.source&&(t.layer=JSON.stringify({source:t.source}),delete t.source),t}Object.defineProperty(t,"__esModule",{value:!0}),t.toQueryStringParameters=a,t.executeRelationshipQuery=function(e,t,r){var n={query:i.mapParameters(o({},e.query,{f:"json"},a(t)))};return r&&(n=o({},r,n)),s(e.path+"/queryRelatedRecords",n).then(function(e){for(var t=e.data,r=t.geometryType,n=t.spatialReference,o={},s=0,i=t.relatedRecordGroups;s<i.length;s++){var a=i[s],u={fields:void 0,objectIdFieldName:void 0,geometryType:r,spatialReference:n,features:a.relatedRecords};if(null!=a.objectId)o[a.objectId]=u;else for(var c in a)a.hasOwnProperty(c)&&"relatedRecords"!==c&&(o[a[c]]=u)}return e.data=o,e})}}.apply(null,n))||(e.exports=o)},2802:function(e,t,r){var n,o;n=[r(165),r(13),r(119),r(8),r(22),r(4),r(37),r(2803),r(1655),r(29)],void 0===(o=function(e,t,r,l,c,n,u,d,o,s){return e([t,r.EsriPromise],{declaredClass:"esri.layers.graphics.sources.StreamLayerSource",constructor:function(e){var t=e&&e.layer;t&&(this.url=t.url)},initialize:function(){this.addResolvingPromise(this._fetchLayers())},properties:{connectionInfo:{get:function(){if(this.layer.hasMemorySource||this.layer.socketUrl)return{serviceSocketUrls:[this.layer.socketUrl]};if(this.sourceJSON){var e,t,r,n,o={},s=this.sourceJSON,i=[],a=[],u=[];if(s.streamUrls&&s.streamUrls.forEach(function(e){"ws"===e.transport&&(i=e.urls,o.token=e.token)},this),i.forEach(function(e){0===e.lastIndexOf("wss",0)?u.push(e):a.push(e)}),(e="https"===c.appUrl.scheme||0===this.url.lastIndexOf("https:",0)||0===a.length?u:a)&&1<e.length)for(t=0;t<e.length-1;t++)n=e[r=t+Math.floor(Math.random()*(e.length-t))],e[r]=e[t],e[t]=n;return o.serviceSocketUrls=e,o}}},latestUrl:{get:function(){var e=this.sourceJSON,t=e.keepLatestArchive&&e.keepLatestArchive.featuresUrl;return t||null}},latestQueryTask:{get:function(){var e=this.latestUrl;return e?new o(e):null}},layer:{},relatedFeaturesInfo:{get:function(){var e=(this.sourceJSON||{}).relatedFeatures;return e&&e.featuresUrl?e:null}},relatedFeaturesQueryTask:{get:function(){var e=this.relatedFeaturesInfo,t=e?e.featuresUrl:null;return t?new o(t):null}},parsedUrl:{get:function(){return this.url?c.urlToObject(this.url):null}},url:null},createWebSocketConnector:function(u){var c=n.createDeferred();return this.when(function(){var e,t,r,n,o=this.connectionInfo,s=this.layer.spatialReference,i={};try{e=this.makeFilter()}catch(e){return void c.reject(e)}if(o){if(o.socketUrl?r=[o.socketUrl]:o.serviceSocketUrls&&(r=o.serviceSocketUrls.map(function(e){return e+"/"+this.layer.socketDirection}.bind(this))),i.socketUrls=r,e&&(e.where||e.geometry||e.outFields)){var a=e.geometry;a&&"string"!=typeof a&&(a=a.toJSON?JSON.stringify(a.toJSON()):JSON.stringify(a)),t=l.mixin(t||{},{where:e.where,geometry:a,outFields:e.outFields})}o.token&&(t=l.mixin(t||{},{token:o.token})),u&&s&&u.wkid!==s.wkid&&(t=l.mixin(t||{},{outSR:u.wkid})),i.queryParams=t,i.layerSource=this,n=new d(i),c.resolve(n)}else c.reject(new Error("No web socket urls found"))}.bind(this)),c.promise},getWebSocketToken:function(){return this._fetchStreamLayer().then(function(e){var t=e.data,r=null;return t.streamUrls&&t.streamUrls.some(function(e){if("ws"===e.transport)return r=e.token,!0},this),r}.bind(this))},makeFilter:function(e){var t,r=this.layer,n=null;if(e){var o;if(t={},e.hasOwnProperty("where")&&(t.where=e.where),e.hasOwnProperty("geometry")){if((o=e.geometry)&&!o.hasOwnProperty("xmin"))throw new Error("Cannot make filter. Only Extent is supported for the geometry filter");o&&!o.declaredClass&&(o=new u(o)),t.geometry=o}}else{var s=r.filter||{};t={where:s.where,geometry:s.geometry};var i=this.relatedFeaturesInfo&&this.relatedFeaturesInfo.outFields||r.outFields;if(i&&-1===i.indexOf("*")){var a=r.fields.map(function(e){return e.name});n=i.filter(function(e){return-1!==a.indexOf(e)}).join(","),t=l.mixin(t||{},{outFields:n})}}return t},queryFeatures:function(e,t){return n.reject()},_fetchLayers:function(){return this._fetchStreamLayer().then(function(e){return e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=e.data,this._fetchArchiveLayer()}.bind(this)).then(function(e){return this.archivedLayerDefinition=e&&e.data,this._fetchRelatedLayer()}.bind(this)).then(function(e){this.relatedLayerDefinition=e&&e.data}.bind(this))},_fetchStreamLayer:function(){return this._requestServiceDefinition({url:this.layer.parsedUrl.path,content:l.mixin({f:"json"},this.layer.parsedUrl.query)})},_fetchArchiveLayer:function(){var e=this.latestUrl;return e?this._requestServiceDefinition({url:e}):n.resolve()},_fetchRelatedLayer:function(){var e=this.relatedFeaturesInfo;return e?this._requestServiceDefinition({url:e.featuresUrl}):n.resolve()},_requestServiceDefinition:function(e){return e&&e.url?s(e.url,{query:l.mixin(e.content||{},{f:"json"}),responseType:"json"}):n.reject(new Error("url is a required options property"))}})}.apply(null,n))||(e.exports=o)},2803:function(e,t,r){var n,o;n=[r(54),r(119),r(22),r(4),r(16),r(6)],void 0===(o=function(e,t,o,n,r,s){return(0,t.EsriPromiseMixin)(e.EventedAccessor).createSubclass({declaredClass:"esri.layers.support.WebSocketConnector",initialize:function(){var e=null;this.socketUrls.length||(e=new Error("No urls passed to WebSocketConnector. No live connection possible")),"WebSocket"in window||(e=new Error("The browser does not support Web Sockets. No live connection possible")),e&&this.addResolvingPromise(n.reject(e)),this.queryParams&&this.queryParams.token&&this._set("tokenNeeded",!0)},_socket:null,_connectPromise:null,_disconnectPromise:null,properties:{currentSocketUrl:{value:null,readOnly:!0},layerSource:null,queryParams:null,socketUrls:{value:[]},tokenNeeded:{value:!1},connectionError:{value:null,type:s,readOnly:!0},connectionStatus:{value:"disconnected",readOnly:!0}},connect:function(){var e=this.connectionStatus;return"connected"===e||"connecting"===e?this._connectPromise:"disconnected"===this.connectionStatus?(this._set("connectionStatus","connecting"),this._connect()):"disconnecting"===this.connectionStatus?(this._connectPromise=null,this._disconnectPromise||(this._disconnectPromise=r.once(this,"connectionStatus").then(function(e){if("disconnected"===e.value)return this._connect()}.bind(this))),this._disconnectPromise):void 0},disconnect:function(){var e=this.connectionStatus;"connected"===e?(this._set("connectionStatus","disconnecting"),this._socket?this._socket.close():this._set("connectionStatus","disconnected")):"connecting"===e&&this._connectPromise.then(function(){this.disconnect()}.bind(this))},send:function(e){this._socket&&("object"==typeof e&&(e=JSON.stringify(e)),this._socket.send(e))},_connect:function(){this._connectPromise&&(this._connectPromise=null);var e=n.createDeferred();return this._connectPromise=e,this._getWebSocketToken().then(function(e){e&&(this.queryParams.token=e);var t=this._makeCurrentUrl(),r=new WebSocket(t);r.onopen=this._handleSocketOpen.bind(this),r.onclose=this._handleSocketClose.bind(this),r.onmessage=this._handleSocketMessage.bind(this),this._socket=r}.bind(this)).catch(function(e){var t=new s("web-socket-connector:connect","Could not get websocket token for secured service",e);this._set("connectionError",t),this._connectPromise.reject(t)}.bind(this)),e.promise},_getWebSocketToken:function(){var e=this.queryParams,t=e&&e.token,r=this.tokenNeeded;return t?n.resolve(t):r?this.layerSource.getWebSocketToken():n.resolve()},_makeCurrentUrl:function(){var e,t,r=this.queryParams,n=this.socketUrls;return t=1!==n.length&&this.currentSocketUrl?(e=n.indexOf(this.currentSocketUrl),n[e>=n.length-1?0:e+1]):n[0],this._set("currentSocketUrl",t),r&&(t+="?"+o.objectToQuery(r)),t},_handleSocketOpen:function(){this._set("connectionStatus","connected"),this._set("connectionError",null),this._disconnectPromise=null,this._connectPromise&&this._connectPromise.resolve()},_handleSocketClose:function(e){var t,r=null;this.queryParams&&(this.queryParams.token=null),e.wasClean&&!e.code||(1001===e.code?t="Service is going away.":4400===e.code?t=e.reason||"Invalid url parameters. Check filter properties.":4404===e.code?t="Service not found":4401===e.code||4403===e.code?t="Not authorized":e.wasClean||(t=e.reason||"Unknown reason"),t&&(r=new s("web-socket-connector:connection closed","Connection failed: "+t),this._set("connectionError",r),this._connectPromise&&this._connectPromise.reject(r))),this._connectPromise=null,this._set("connectionStatus","disconnected"),this._socket=null},_handleSocketMessage:function(e){this.emit("data-received",e.data)}})}.apply(null,n))||(e.exports=o)}}]);