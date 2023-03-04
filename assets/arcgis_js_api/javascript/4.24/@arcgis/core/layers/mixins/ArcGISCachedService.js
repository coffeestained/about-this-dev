/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{r as e}from"../../chunks/reader.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{T as s,s as i}from"../../chunks/TilemapCache.js";import p from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../support/TileInfo.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/common.js";import"../support/LOD.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/byteSizeEstimations.js";import"../../core/HandleOwner.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/reactiveUtils.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";const c=c=>{let m=class extends c{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(r,t){return null!=t.minLOD&&null!=t.maxLOD?r:0}readMaxScale(r,t){return null!=t.minLOD&&null!=t.maxLOD?r:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(r,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new s({layer:this}):null}};return r([t({json:{read:{source:"copyrightText"}}})],m.prototype,"copyright",void 0),r([t()],m.prototype,"minScale",void 0),r([e("service","minScale")],m.prototype,"readMinScale",null),r([t()],m.prototype,"maxScale",void 0),r([e("service","maxScale")],m.prototype,"readMaxScale",null),r([t({type:p})],m.prototype,"spatialReference",void 0),r([t({readOnly:!0})],m.prototype,"supportsBlankTile",null),r([t(i)],m.prototype,"tileInfo",void 0),r([t()],m.prototype,"tilemapCache",void 0),r([e("service","tilemapCache",["capabilities"])],m.prototype,"readTilemapCache",null),r([t()],m.prototype,"version",void 0),m=r([o("esri.layers.mixins.ArcGISCachedService")],m),m};export{c as ArcGISCachedService};