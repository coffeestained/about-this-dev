/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import{m as r,e as s}from"../../chunks/unitUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import{d as n}from"../../chunks/defaultUnit.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/SpatialReference.js";import"../../core/JSONSupport.js";import"../../chunks/writer.js";import"../../chunks/Ellipsoid.js";let p=class extends e{constructor(t){super(t),this.activeTool=null,this.activeViewModel=null,this.view=null}get areaUnit(){return this.defaultUnit}set areaUnit(t){void 0!==t?this._override("areaUnit",t):this._clearOverride("areaUnit")}get linearUnit(){return this.defaultUnit}set linearUnit(t){void 0!==t?this._override("linearUnit",t):this._clearOverride("linearUnit")}get state(){const{activeViewModel:t}=this;return t?t.state:"disabled"}};t([i({type:["area","distance","direct-line"]})],p.prototype,"activeTool",void 0),t([i()],p.prototype,"activeViewModel",void 0),t([i({type:r})],p.prototype,"areaUnit",null),t([i(n)],p.prototype,"defaultUnit",void 0),t([i({type:s})],p.prototype,"linearUnit",null),t([i({readOnly:!0})],p.prototype,"state",null),t([i()],p.prototype,"view",void 0),p=t([o("esri.widgets.Measurement.MeasurementViewModel")],p);const a=p;export{a as default};