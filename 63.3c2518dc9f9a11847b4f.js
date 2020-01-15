(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/GraphicsLayerView2D":1611,"esri/views/layers/support/ClipArea":1627,"esri/views/layers/LayerView":1635,"esri/views/2d/layers/LayerView2D":1636,"esri/views/layers/support/ClipRect":1637,"esri/views/layers/support/Geometry":1638,"esri/views/layers/support/Path":1639})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1611:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(9),r(10),r(89),r(18),r(23),r(4),r(2),r(221),r(1636),r(1713),r(1635)],void 0===(n=function(e,t,r,i,n,o,p,s,a,u,l,d,c,y,h){var f,v={remove:function(){},pause:function(){},resume:function(){}};return f=l.declared(c.LayerView2D(h)),r(g,f),g.prototype.initialize=function(){this.graphicsView=new y.default({view:this.view,graphics:this.layer.graphics})},g.prototype.attach=function(){var e=this;this.graphicsView.install(this.container),this._handles.add([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.clips.on("change",function(){return e.graphicsView.container.setClips(e.clips)})]),this.graphicsView.container.setClips(this.clips)},g.prototype.detach=function(){this.graphicsView.destroy(),this._handles.removeAll()},g.prototype.hitTest=function(e,t){return this.suspended||!this.graphicsView?u.resolve(null):this.graphicsView.hitTest(e,t)},g.prototype.fetchPopupFeatures=function(t){return o(this,void 0,void 0,function(){return n(this,function(e){return this.graphicsView?[2,this.graphicsView.searchFeatures(t).then(function(e){return e.filter(function(e){return!!e.popupTemplate})})]:[2,void 0]})})},g.prototype.update=function(e){this.graphicsView.update(e)},g.prototype.moveStart=function(){this.requestUpdate()},g.prototype.viewChange=function(){this.requestUpdate()},g.prototype.moveEnd=function(){this.requestUpdate()},g.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},g.prototype.highlight=function(e){var t,r=this;return"number"==typeof e?t=[e]:e instanceof p?t=[e.uid]:Array.isArray(e)&&0<e.length?t="number"==typeof e[0]?e:e.map(function(e){return e&&e.uid}):s.isCollection(e)&&(t=e.map(function(e){return e&&e.uid}).toArray()),(t=t.filter(function(e){return null!=e})).length?(this.graphicsView.addHighlight(t),{remove:function(){return r.graphicsView.removeHighlight(t)},pause:function(){},resume:function(){}}):v},g.prototype.queryGraphics=function(){return u.resolve(this.graphicsView.graphics)},i([l.property()],g.prototype,"graphicsView",void 0),i([l.property({dependsOn:["graphicsView.updating"]})],g.prototype,"updating",void 0),i([l.subclass("esri.views.2d.layers.GraphicsLayerView2D")],g);function g(){var e=null!==f&&f.apply(this,arguments)||this;return e._handles=new a,e.container=new d.Container,e}}.apply(null,i))||(e.exports=n)},1627:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(7),r(2)],void 0===(n=function(e,t,r,i,n,o){return s=o.declared(n.JSONSupport),i(p,s),r([o.subclass("esri.views.layers.support.ClipArea")],p);function p(){return null!==s&&s.apply(this,arguments)||this}var s}.apply(null,i))||(e.exports=n)},1635:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(13),r(54),r(206),r(121),r(3),r(119),r(2)],void 0===(n=function(e,t,r,i,n,o,p,s,a,u,l){return c=l.declared(p.HandleOwnerMixin(s.IdentifiableMixin(u.EsriPromiseMixin(o.EventedMixin(n))))),r(d,c),d.prototype.initialize=function(){var i=this;this.addResolvingPromise(this.layer),this.when().catch(function(e){if("layerview:create-error"!==e.name){var t=i.layer&&i.layer.id||"no id",r=i.layer&&i.layer.title||"no title";throw a.getLogger(i.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+t+"')",e),e}})},d.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(d.prototype,"fullOpacity",{get:function(){function e(e){return null==e?1:e}return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),d.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},d.prototype.isUpdating=function(){return!1},i([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],d.prototype,"fullOpacity",null),i([l.property()],d.prototype,"layer",void 0),i([l.property()],d.prototype,"parent",void 0),i([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],d.prototype,"suspended",null),i([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],d.prototype,"updating",null),i([l.property({dependsOn:["layer.visible"]})],d.prototype,"visible",null),i([l.subclass("esri.views.layers.LayerView")],d);function d(e){var t=c.call(this,e)||this;return t.layer=null,t.parent=null,t}var c}.apply(null,i))||(e.exports=n)},1636:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(18),r(123),r(16),r(2),r(1627),r(1637),r(1638),r(1639)],void 0===(n=function(e,t,i,n,r,o,p,s,a,u,l,d){Object.defineProperty(t,"__esModule",{value:!0});var c=r.ofType({key:"type",base:a,typeMap:{rect:u,path:d,geometry:l}});t.LayerView2D=function(e){return r=s.declared(e),i(t,r),t.prototype.initialize=function(){var t=this;function e(){return t.notifyChange("rendering")}this.when(function(){t.requestUpdate()},function(){}),this.handles.add([p.init(this,"suspended",function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestLayerViewUpdate(t)},!0),p.init(this,["fullOpacity","container"],function(){t.container&&(t.container.opacity=t.fullOpacity)},!0),p.on(this,"container","post-render",e),p.on(this,"container","will-render",e)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,p=!n;!o&&e<=i&&(o=!0),!p&&n<=e&&(p=!0),t=o&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e=e&&this.isVisibleAtScale(this.view.scale)},n([s.property({type:c,set:function(e){var t=o.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),n([s.property()],t.prototype,"moving",void 0),n([s.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),n([s.property()],t.prototype,"attached",void 0),n([s.property()],t.prototype,"container",void 0),n([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),n([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),n([s.property()],t.prototype,"updateRequested",void 0),n([s.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),n([s.property()],t.prototype,"view",void 0),n([s.subclass("esri.views.2d.layers.LayerView2D")],t);function t(){var e=null!==r&&r.apply(this,arguments)||this;return e.clips=new c,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}var r}}.apply(null,i))||(e.exports=n)},1637:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(1627)],void 0===(n=function(e,t,r,i,n,o){return s=n.declared(o),i(p,s),(a=p).prototype.clone=function(){return new a({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(p.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],p.prototype,"version",null),a=r([n.subclass("esri.views.layers.support.ClipRect")],p);function p(){var e=null!==s&&s.apply(this,arguments)||this;return e.type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}var s,a}.apply(null,i))||(e.exports=n)},1638:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(28),r(2),r(81),r(38),r(1627)],void 0===(n=function(e,t,r,i,n,o,p,s,a){var u,l,d={base:p,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return u=o.declared(a),i(c,u),l=c,Object.defineProperty(c.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),c.prototype.clone=function(){return new l({geometry:this.geometry.clone()})},r([o.property({types:d,json:{read:s.fromJSON,write:!0}})],c.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],c.prototype,"version",null),l=r([o.subclass("esri.views.layers.support.Geometry")],c);function c(){var e=null!==u&&u.apply(this,arguments)||this;return e.type="geometry",e.geometry=null,e}}.apply(null,i))||(e.exports=n)},1639:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(1627)],void 0===(n=function(e,t,r,i,n,o){return s=n.declared(o),i(p,s),Object.defineProperty(p.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],p.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],p.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],p);function p(){var e=null!==s&&s.apply(this,arguments)||this;return e.type="path",e.path=[],e}var s}.apply(null,i))||(e.exports=n)}}]);