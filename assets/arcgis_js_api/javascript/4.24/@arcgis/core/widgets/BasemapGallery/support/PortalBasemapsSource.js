/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import s from"../../../Basemap.js";import r from"../../../core/Collection.js";import o from"../../../core/Error.js";import e from"../../../core/Handles.js";import a from"../../../core/Loadable.js";import{L as i}from"../../../chunks/Logger.js";import{EsriPromiseMixin as l}from"../../../core/Promise.js";import{isAbortError as p}from"../../../core/promiseUtils.js";import{watch as m,initial as n}from"../../../core/reactiveUtils.js";import{property as c}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as h}from"../../../core/accessorSupport/decorators/subclass.js";import u from"../../../portal/Portal.js";import j from"./LocalBasemapsSource.js";import"../../../chunks/collectionUtils.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/loadAll.js";import"../../../chunks/asyncUtils.js";import"../../../core/urlUtils.js";import"../../../chunks/writer.js";import"../../../geometry/SpatialReference.js";import"../../../portal/PortalItem.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../chunks/reader.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../portal/PortalItemResource.js";import"../../../portal/PortalRating.js";import"../../../chunks/locale.js";import"../../../portal/PortalQueryParams.js";import"../../../chunks/jsonMap.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../portal/PortalGroup.js";import"../../../chunks/messages.js";import"../../../chunks/writeUtils.js";import"../../../chunks/layerUtils.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";const d=r.ofType(s),y="esri.widgets.BasemapGallery.support.PortalBasemapsSource",f=i.getLogger(y);let k=class extends(a.LoadableMixin(l(j))){constructor(t){super(t),this._handles=new e,this.basemaps=new d,this.filterFunction=null,this.portal=u.getDefault(),this.query=null,this.updateBasemapsCallback=null}initialize(){this._handles.add([m((()=>[this.filterFunction,this.loadStatus,this.portal?.basemapGalleryGroupQuery,this.portal?.user,this.query,this.updateBasemapsCallback]),(()=>this.refresh()),n)])}destroy(){this._handles.destroy(),this._handles=null,this.filterFunction=null,this.portal=null}get state(){return"not-loaded"===this.loadStatus?"not-loaded":"loading"===this.loadStatus||this._lastPortalBasemapFetchController?"loading":"ready"}load(t){return this.addResolvingPromise(this.portal.load(t)),this.notifyChange("state"),Promise.resolve(this)}async refresh(){if("ready"!==this.state)return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const t=this.portal,s=new AbortController;this._lastPortalBasemapFetchController=s,this.notifyChange("state");try{const r=await t.fetchBasemaps(this._toQueryString(this.query),s);this._updateBasemaps(r)}catch(t){if(p(t))throw t;f.warn(new o("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:t})),this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")}_toQueryString(t){return t&&"string"!=typeof t?Object.keys(t).map((s=>`${s}:${t[s]}`)).join(" AND "):t}_updateBasemaps(t=[]){let s=this.filterFunction?t.filter(this.filterFunction):t;s=this.updateBasemapsCallback?this.updateBasemapsCallback(s):s,this.basemaps.removeAll(),this.basemaps.addMany(s)}};t([c({readOnly:!0,type:d})],k.prototype,"basemaps",void 0),t([c()],k.prototype,"filterFunction",void 0),t([c({type:u})],k.prototype,"portal",void 0),t([c()],k.prototype,"query",void 0),t([c({readOnly:!0})],k.prototype,"state",null),t([c()],k.prototype,"updateBasemapsCallback",void 0),k=t([h(y)],k);const g=k;export{g as default};