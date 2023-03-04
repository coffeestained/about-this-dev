// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Basemap ../Viewpoint ../core/asyncUtils ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/Logger ../core/maybe ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/subclass ../core/accessorSupport/ensureType ../chunks/vec3 ../chunks/vec3f64 ../layers/Layer ../layers/mixins/OperationalLayer ../support/basemapUtils ../views/3d/support/mathUtils ../views/3d/support/viewpointUtils ../views/support/Scheduler ../webdoc/support/SlideThumbnail ./SunLighting ./VirtualLighting ./support/Description ./support/SlideEnvironment ./support/SlideGround ./support/SlideVisibleLayer ./support/Title".split(" "),
function(q,h,R,S,T,H,U,g,V,u,C,W,m,ka,la,v,X,D,I,E,Y,Z,J,aa,ba,ca,t,da,ea,y,K,L,M,w){function N(d){if("building-scene"===d.type||"map-image"===d.type)return d.allSublayers.toArray()}function O(d){if(d=N(d))return d.filter(l=>l.visible).map(l=>l.id)}function fa(d,l){d=l-d;43200<d&&(d-=86400);-43200>d&&(d+=86400);return d}let ha=0;const F=H.ofType(M.SlideVisibleLayer),ia=V.getLogger("esri.webscene.Slide");g=function(d){function l(a){a=d.call(this,a)||this;a.id=Date.now().toString(16)+"-slide-"+ha++;
a.title=new w;a.description=new y;a.thumbnail=new t.SlideThumbnail;a.viewpoint=null;a.basemap=null;a.ground=null;a.environment=new K.SlideEnvironment;a.visibleLayers=new F;return a}q._inheritsLoose(l,d);var e=l.prototype;e.destroy=function(){this.visibleLayers.removeAll();this.basemap=null;this.thumbnail&&this.thumbnail.destroy();this.thumbnail=this.title=this.description=null};e.castTitle=function(a){return"string"===typeof a?new w({text:a}):D.ensureType(w,a)};e.castDescription=function(a){return"string"===
typeof a?new y({text:a}):D.ensureType(y,a)};e.castThumbnail=function(a){return"string"===typeof a?new t.SlideThumbnail({url:a}):D.ensureType(t.SlideThumbnail,a)};e.castBasemap=function(a){return J.ensureType(a)};e.castVisibleLayers=function(a){return a&&"function"===typeof a.map?a.map(b=>{if("string"===typeof b)return{id:b};if(b instanceof Y){const c=O(b);return{id:b.id,sublayerIds:c}}if(b.id)return{id:b.id,sublayerIds:b.sublayerIds};ia.warn('Invalid visible layer, expected { id }, Layer or "id"');
return b}):null};e.clone=function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})};e._updateVisibleLayersFrom=function(a){const b=[];return C.eachAlways(this._getLayers(a.map).map(c=>
a.whenLayerView(c).then(f=>{if(f.visible){const k=O(c);b.push(new M.SlideVisibleLayer({id:f.layer.id,sublayerIds:k}))}})).toArray()).then(()=>{this.visibleLayers.removeAll();this.visibleLayers.addMany(b)})};e.updateFrom=function(a,b){b={screenshot:{format:"png",quality:80,width:120,height:75,disableDecorations:!0,...b&&b.screenshot}};return a.when(()=>{this.viewpoint=a.viewpoint.clone();this.environment.lighting="virtual"===a.environment.lighting.type?ea.prototype.clone.apply(a.environment.lighting):
da.prototype.clone.apply(a.environment.lighting);this.environment.weather=a.environment.weather.clone();this.basemap=a.map.basemap&&a.map.basemap.clone()||null;this.ground=a.map.ground?L.fromGround(a.map.ground):null;return this._updateVisibleLayersFrom(a)}).then(()=>a.takeScreenshot(b.screenshot)).then(c=>{this.thumbnail=new t.SlideThumbnail({url:c.dataUrl});return this})};e.applyTo=function(){var a=q._asyncToGenerator(function*(b,c){var f=this;u.isSome(this._applyToController)&&this._applyToController.abort();
let k=new AbortController;this._applyToController=k;const z=C.onAbortOrThrow(c,()=>k.abort()),n=b.resourceController.scheduler.registerTask(ca.TaskPriority.SLIDE);let A=!1;c={animate:!0,...c,signal:this._applyToController.signal};var p=function(){var B=q._asyncToGenerator(function*(){yield Promise.all([n.schedule(()=>A=f._setViewpointOfInterest(b,c)),n.schedule(()=>f._applyBasemap(b,c),c.signal)]);yield Promise.all([n.schedule(()=>f._applyLayerVisibility(b),c.signal),n.schedule(()=>f._applyGround(b),
c.signal),n.schedule(()=>f._applyViewpoint(b,c),c.signal)]);yield n.schedule(()=>b.environment.weather=f.environment.weather.clone())});return function(){return B.apply(this,arguments)}}();p=yield T.result(b.addUpdatingPromise(p()));A&&(b.contentCamera=null);n.remove();this._applyToController===k&&(this._applyToController=null);k=null;null==z?void 0:z.remove();if(!1===p.ok)throw p.error;return this});return function(b,c){return a.apply(this,arguments)}}();e._applyBasemap=function(){var a=q._asyncToGenerator(function*(b,
c){if(this.basemap){try{yield this.basemap.load(c)}catch(f){if(C.isAbortError(f))throw f;}b.map.basemap=J.clonePreservingTiledLayers(this.basemap,b.map.basemap)}});return function(b,c){return a.apply(this,arguments)}}();e._applyGround=function(a){this.ground&&(a.map.ground=this.ground.cloneAndApplyTo(a.map.ground))};e._getLayers=function(a){const b=new H;this._collectLayers(a,b);this._collectLayers(a.ground,b);return b};e._collectLayers=function(a,b){a.layers.forEach(c=>{Z.isOperationalLayer(c)&&
(b.add(c),"layers"in c&&this._collectLayers(c,b))})};e._applyLayerVisibility=function(a){this.visibleLayers&&this._getLayers(a.map).forEach(b=>{var c=this.visibleLayers.find(k=>k.id===b.id);b.visible=null!=c;const f=c&&c.sublayerIds;c=N(b);f&&c&&c.forEach(k=>k.visible=f.includes(k.id))})};e._setViewpointOfInterest=function(a,b){if(a.state.fixedContentCamera||!this.viewpoint||b.ignoreViewpoint||!b.useDestinationCamera)return!1;b=ba.toCamera(a,this.viewpoint);a.contentCamera=b;return u.isSome(b)};e._applyViewpoint=
function(){var a=q._asyncToGenerator(function*(b,c){if(this.viewpoint&&!c.ignoreViewpoint){u.isSome(this.viewpoint.camera)&&(this.viewpoint.camera.fov=b.camera.fov);if(c.animate&&this.get("environment.lighting.date")){yield this._animateToLighting(b,c);return}c.animate&&(b.environment.applyLighting(this.environment.lighting.clone()),yield b.goTo(this.viewpoint,c));b.viewpoint=this.viewpoint}b.environment.applyLighting(this.environment.lighting.clone())});return function(b,c){return a.apply(this,arguments)}}();
e._animateToLighting=function(){var a=q._asyncToGenerator(function*(b,c){let f=null;"sun"===b.environment.lighting.type&&"sun"===this.environment.lighting.type&&("global"===b.viewingMode&&(f=this._animateLightingWithCamera(b,b.environment.lighting,this.environment.lighting)),b.environment.lighting.cameraTrackingEnabled=!1);b.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;"virtual"===this.environment.lighting.type||"virtual"===b.environment.lighting.type?(b.environment.applyLighting(this.environment.lighting.clone()),
"sun"===b.environment.lighting.type&&(b.environment.lighting.cameraTrackingEnabled=!1)):null!=this.environment.lighting.displayUTCOffset&&(b.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);return b.goTo(this.viewpoint,c).then(()=>b.environment.applyLighting(this.environment.lighting.clone())).finally(()=>{u.removeMaybe(f);"sun"===b.environment.lighting.type&&(b.environment.lighting.cameraTrackingEnabled=!0)})});return function(b,c){return a.apply(this,arguments)}}();
e._getTime=function(a){const b=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,a]};e._setTime=function(a,b,c){a.setTime(b);a.setUTCHours(c/3600);a.setUTCMinutes(c%3600/60);a.setUTCSeconds(c%3600%60);return a};e._animateLightingWithCamera=function(a,b,c){const [f,k]=this._getTime(new Date(b.date.toString())),[z,n]=this._getTime(c.date),A=fa(k,n),p=a.renderCoordsHelper,B=E.create();p.toRenderCoords(a.camera.position,B);const P=E.create(),G=E.create();u.isSome(this.viewpoint.camera)&&
p.toRenderCoords(this.viewpoint.camera.position,P);const ja=new Date;return W.watch(()=>a.camera,r=>{p.toRenderCoords(r.position,G);var x=I.squaredDistance(B,G);const Q=I.squaredDistance(P,G);r=0;0!==x+Q&&(r=x/(x+Q));x=f+(z-f)*r;r=aa.moduloPositive(k+A*r,86400);b.date=this._setTime(ja,x,r)})};l.createFrom=function(a,b){return(new this).updateFrom(a,b)};q._createClass(l,[{key:"visibleLayers",set:function(a){this._set("visibleLayers",U.referenceSetter(a,this._get("visibleLayers"),F))}}]);return l}(g.JSONSupport);
h.__decorate([m.property({type:String,json:{write:{isRequired:!0}}})],g.prototype,"id",void 0);h.__decorate([m.property({type:w,json:{default:()=>new w({text:""}),write:{isRequired:!0}}})],g.prototype,"title",void 0);h.__decorate([v.cast("title")],g.prototype,"castTitle",null);h.__decorate([m.property({type:y,json:{write:{overridePolicy(d){return{enabled:!(!d||!d.text)}}}}})],g.prototype,"description",void 0);h.__decorate([v.cast("description")],g.prototype,"castDescription",null);h.__decorate([m.property({type:t.SlideThumbnail,
json:{default:()=>new t.SlideThumbnail({url:""}),write:{isRequired:!0}}})],g.prototype,"thumbnail",void 0);h.__decorate([v.cast("thumbnail")],g.prototype,"castThumbnail",null);h.__decorate([m.property({type:S,nonNullable:!0,json:{write:{isRequired:!0}}})],g.prototype,"viewpoint",void 0);h.__decorate([m.property({type:R,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],g.prototype,"basemap",void 0);h.__decorate([v.cast("basemap")],g.prototype,"castBasemap",null);h.__decorate([m.property({type:L,
json:{write:!0}})],g.prototype,"ground",void 0);h.__decorate([m.property({type:F,json:{write:{isRequired:!0}}})],g.prototype,"visibleLayers",null);h.__decorate([v.cast("visibleLayers")],g.prototype,"castVisibleLayers",null);h.__decorate([m.property({type:K.SlideEnvironment,json:{write:!0}})],g.prototype,"environment",void 0);return g=h.__decorate([X.subclass("esri.webscene.Slide")],g)});