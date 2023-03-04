// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Handles ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../core/support/WatchUpdatingTracking ../../../support/TileTreeDebugger ../../../../geometry/Polygon".split(" "),function(b,l,
d,w,m,n,e,x,y,z,p,q,r,t){b.FeatureTileTree3DDebugger=function(k){function f(a){a=k.call(this,a)||this;a.watchUpdatingTracking=new q.WatchUpdatingTracking;a.handles=new m;return a}l._inheritsLoose(f,k);var g=f.prototype;g.initialize=function(){const {featureTiles:a}=this.view;this.handles.add(a.addClient());this.watchUpdatingTracking.addOnCollectionChange(()=>null==a?void 0:a.tiles,()=>this.update(),n.initial)};g.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null);this.watchUpdatingTracking.destroy()};
g.getTiles=function(){const a=c=>{const [h,u,v]=c.lij;return t.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(h,u,v))};return this.view.featureTiles.tiles.toArray().sort((c,h)=>c.loadPriority-h.loadPriority).map(c=>({...c,geometry:a(c)}))};return f}(r.TileTreeDebugger);d.__decorate([e.property({readOnly:!0})],b.FeatureTileTree3DDebugger.prototype,"watchUpdatingTracking",void 0);d.__decorate([e.property({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],b.FeatureTileTree3DDebugger.prototype,
"updating",void 0);d.__decorate([e.property()],b.FeatureTileTree3DDebugger.prototype,"view",void 0);b.FeatureTileTree3DDebugger=d.__decorate([p.subclass("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],b.FeatureTileTree3DDebugger);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});