/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../config.js";import"../geometry.js";import r from"../Graphic.js";import o from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/PieChartRenderer.js";import"../renderers/Renderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import{read as s}from"../renderers/support/jsonUtils.js";import i from"../core/Collection.js";import n from"../core/Error.js";import{HandleOwnerMixin as l}from"../core/HandleOwner.js";import{L as a}from"../chunks/Logger.js";import{i as p,a as m,l as u,u as c}from"../chunks/maybe.js";import{M as y}from"../chunks/MultiOriginJSONSupport.js";import{s as d}from"../chunks/object.js";import{isAbortError as h}from"../core/promiseUtils.js";import{on as f}from"../core/reactiveUtils.js";import{c as j}from"../chunks/unitUtils.js";import{urlToObject as b}from"../core/urlUtils.js";import{property as S}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{r as g}from"../chunks/reader.js";import{subclass as w}from"../core/accessorSupport/decorators/subclass.js";import{w as k}from"../chunks/writer.js";import{u as v}from"../chunks/originUtils.js";import P from"../geometry/Extent.js";import{initializeProjection as I,project as C}from"../geometry/projection.js";import B,{W as D}from"../geometry/SpatialReference.js";import L from"./Layer.js";import{BlendLayer as N}from"./mixins/BlendLayer.js";import{O as R}from"../chunks/OperationalLayer.js";import{PortalLayer as _}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as O}from"./mixins/ScaleRangeLayer.js";import{a as U}from"../chunks/arcgisLayerUrl.js";import F from"./support/RouteSymbols.js";import T from"../portal/Portal.js";import M from"../portal/PortalItem.js";import{T as x}from"../chunks/portalItemUtils.js";import{fetchServiceDescription as A}from"../rest/networkService.js";import{solve as G}from"../rest/route.js";import V from"../rest/support/DirectionLine.js";import J from"../rest/support/DirectionPoint.js";import{d as E,a as q}from"../chunks/networkEnums.js";import W from"../rest/support/PointBarrier.js";import z from"../rest/support/PolygonBarrier.js";import H from"../rest/support/PolylineBarrier.js";import Q,{R as K}from"../rest/support/RouteInfo.js";import Y from"../rest/support/RouteParameters.js";import Z from"../rest/support/Stop.js";import $ from"../geometry/Multipoint.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/string.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../chunks/enumeration.js";import"./support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../chunks/Thumbnail.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../chunks/Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/number2.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"../chunks/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../chunks/projectionEllipsoid.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties2.js";import"../symbols/support/jsonUtils.js";import"../chunks/symbolConversion.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4f64.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils2.js";import"../core/Handles.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/assets.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/jsonUtils.js";import"../chunks/parser2.js";import"../chunks/mat4f32.js";import"../chunks/_commonjsHelpers.js";import"../chunks/commonProperties.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/asyncUtils.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"./support/RouteStopSymbols.js";import"../chunks/utils5.js";import"../rest/support/TravelMode.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/utils9.js";import"../rest/support/RouteSolveResult.js";import"../rest/support/FeatureSet.js";import"./support/Field.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../rest/support/NAMessage.js";import"../rest/support/GPMessage.js";import"../rest/support/RouteResult.js";import"../rest/support/DirectionsFeatureSet.js";import"../chunks/commonProperties3.js";import"../rest/support/DataLayer.js";import"../rest/support/NetworkFeatureSet.js";import"../rest/support/NetworkUrl.js";function X(e){return e.length?e:null}function ee(e){const{defaultTravelMode:t,supportedTravelModes:r}=e;return r.find((e=>e.id===t))}function te(e){switch(e){case"esriGeometryPoint":return{type:"esriSMS",style:"esriSMSCircle",size:12,color:[0,0,0,0],outline:te("esriGeometryPolyline")};case"esriGeometryPolyline":return{type:"esriSLS",style:"esriSLSSolid",width:1,color:[0,0,0,0]};case"esriGeometryPolygon":return{type:"esriSFS",style:"esriSFSNull",outline:te("esriGeometryPolyline")}}}function re(e){return"layers"in e}async function oe(e){const t=B.WGS84;return await I(e.spatialReference,t),C(e,t)}function se(e,t){switch(t){case"seconds":return e/60;case"hours":return 60*e;case"days":return 60*e*24;default:return e}}function ie(e,t){return"decimal-degrees"===t||"points"===t||"unknown"===t?e:j(e,t,"meters")}const ne=i.ofType(V),le=i.ofType(J),ae=i.ofType(W),pe=i.ofType(z),me=i.ofType(H),ue=i.ofType(Z),ce=a.getLogger("esri.layers.RouteLayer");let ye=class extends(N(O(R(_(y(l(L))))))){constructor(e){super(e),this._cachedServiceDescription=null,this._featureCollection=null,this._type="Feature Collection",this.defaultSymbols=new F,this.directionLines=null,this.directionPoints=null,this.featureCollectionType="route",this.legendEnabled=!1,this.maxScale=0,this.minScale=0,this.pointBarriers=new ae,this.polygonBarriers=new pe,this.polylineBarriers=new me,this.routeInfo=null,this.spatialReference=B.WGS84,this.stops=new ue,this.type="route";const t=()=>{this._setStopSymbol(this.stops)};this.own([f((()=>this.stops),"change",t,{sync:!0,onListenerAdd:t})])}writeFeatureCollectionWebmap(e,t,r,o){const s=[this._writePolygonBarriers(),this._writePolylineBarriers(),this._writePointBarriers(),this._writeRouteInfo(),this._writeDirectionLines(),this._writeDirectionPoints(),this._writeStops()].filter((e=>!!e)),i=s.map(((e,t)=>t)),n="web-map"===o.origin?"featureCollection.layers":"layers";d(n,s,t),t.opacity=this.opacity,t.visibility=this.visible,t.visibleLayers=i}readDirectionLines(e,t){return this._getNetworkFeatures(t,"DirectionLines",(e=>V.fromGraphic(e)))}readDirectionPoints(e,t){return this._getNetworkFeatures(t,"DirectionPoints",(e=>J.fromGraphic(e)))}get fullExtent(){const e=new P({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:B.WGS84});if(p(this.routeInfo)&&p(this.routeInfo.geometry))return this.routeInfo.geometry.extent??e;if(m(this.stops))return e;const t=this.stops.filter((e=>p(e.geometry)));if(t.length<2)return e;const{spatialReference:r}=t.getItemAt(0).geometry;if(m(r))return e;const o=t.toArray().map((e=>{const t=e.geometry;return[t.x,t.y]}));return new $({points:o,spatialReference:r}).extent}readMaxScale(e,t){return(re(t)?t.layers:t.featureCollection.layers).find((e=>p(e.layerDefinition.maxScale)))?.layerDefinition.maxScale??0}readMinScale(e,t){return(re(t)?t.layers:t.featureCollection.layers).find((e=>p(e.layerDefinition.minScale)))?.layerDefinition.minScale??0}readPointBarriers(e,t){return this._getNetworkFeatures(t,"Barriers",(e=>W.fromGraphic(e)))}readPolygonBarriers(e,t){return this._getNetworkFeatures(t,"PolygonBarriers",(e=>z.fromGraphic(e)))}readPolylineBarriers(e,t){return this._getNetworkFeatures(t,"PolylineBarriers",(e=>H.fromGraphic(e)))}readRouteInfo(e,t){const r=this._getNetworkFeatures(t,"RouteInfo",(e=>Q.fromGraphic(e)));return r.length>0?r.getItemAt(0):null}readSpatialReference(e,t){const r=re(t)?t.layers:t.featureCollection.layers;if(!r.length)return B.WGS84;const{layerDefinition:o}=r[0],s=o.spatialReference??o.extent.spatialReference??D;return B.fromJSON(s)}readStops(e,t){return this._getNetworkFeatures(t,"Stops",(e=>Z.fromGraphic(e)),(e=>this._setStopSymbol(e)))}get title(){return p(this.routeInfo)&&p(this.routeInfo.name)?this.routeInfo.name:"Route"}set title(e){e?this._override("title",e):this._clearOverride("title")}get url(){return t.routeServiceUrl}set url(e){null!=e?this._set("url",U(e,ce)):this._set("url",t.routeServiceUrl)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}removeAll(){this.removeResult(),this.pointBarriers.removeAll(),this.polygonBarriers.removeAll(),this.polylineBarriers.removeAll(),this.stops.removeAll()}removeResult(){p(this.directionLines)&&(this.directionLines.removeAll(),this._set("directionLines",null)),p(this.directionPoints)&&(this.directionPoints.removeAll(),this._set("directionPoints",null)),p(this.routeInfo)&&this._set("routeInfo",null)}async save(){await this.load();const{fullExtent:e,portalItem:t}=this;if(!t)throw new n("routelayer:portal-item-not-set","save() requires to the layer to have a portal item");if(!t.id)throw new n("routelayer:portal-item-not-saved","Please use saveAs() first to save the routelayer");if("Feature Collection"!==t.type)throw new n("routelayer:portal-item-wrong-type",'Portal item needs to have type "Feature Collection"');if(m(this.routeInfo))throw new n("routelayer:route-unsolved","save() requires a solved route");const{portal:r}=t;await r._signIn(),r.user||await t.reload();const{itemUrl:o,itemControl:s}=t;if("admin"!==s&&"update"!==s)throw new n("routelayer:insufficient-permissions","To save this layer, you need to be the owner or an administrator of your organization");const i={messages:[],origin:"portal-item",portal:r,url:o&&b(o),writtenProperties:[]},l=this.write(null,i);return t.extent=await oe(e),t.title=this.title,await t.update({data:l}),t}async saveAs(e,t={}){if(await this.load(),m(this.routeInfo))throw new n("routelayer:route-unsolved","saveAs() requires a solved route");const r=M.from(e).clone();r.extent??(r.extent=await oe(this.fullExtent)),r.id=null,r.portal??(r.portal=T.getDefault()),r.title??(r.title=this.title),r.type="Feature Collection",r.typeKeywords=["Data","Feature Collection",x.MULTI_LAYER,"Route Layer"];const{portal:o}=r,s={messages:[],origin:"portal-item",portal:o,url:null,writtenProperties:[]};await o._signIn();const i=t?.folder,l=this.write(null,s);return await o.user.addItem({item:r,folder:i,data:l}),this.portalItem=r,v(s),s.portalItem=r,r}async solve(e,t){const r=e?.stops??this.stops,o=e?.pointBarriers??X(this.pointBarriers),s=e?.polylineBarriers??X(this.polylineBarriers),l=e?.polygonBarriers??X(this.polygonBarriers);if(m(r))throw new n("routelayer:undefined-stops","the route layer must have stops defined in the route parameters.");if(("esri.rest.support.FeatureSet"===r.declaredClass||"esri.rest.support.NetworkFeatureSet"===r.declaredClass)&&r.features.length<2||i.isCollection(r)&&r.length<2)throw new n("routelayer:insufficent-stops","the route layer must have two or more stops to solve a route.");if(i.isCollection(r))for(const e of r)e.routeName=null;const a=e?.apiKey,y=this.url,d=await this._getServiceDescription(y,a,t),f=ee(d),j=e?.travelMode??f,b=u(e?.accumulateAttributes,[]);p(j)&&(b.push(j.distanceAttributeName),j.timeAttributeName&&b.push(j.timeAttributeName));const S={startTime:new Date},g={accumulateAttributes:b,directionsOutputType:"featuresets",ignoreInvalidLocations:!0,pointBarriers:o,polylineBarriers:s,polygonBarriers:l,preserveFirstStop:!0,preserveLastStop:!0,returnBarriers:!!o,returnDirections:!0,returnPolygonBarriers:!!l,returnPolylineBarriers:!!s,returnRoutes:!0,returnStops:!0,stops:r},w=e?Y.from(e):new Y;for(const e in S)null==w[e]&&(w[e]=S[e]);let k;w.set(g);try{k=await G(y,w,t)}catch(e){throw h(e)?e:new n("routelayer:failed-route-request","the routing request failed",{error:e})}const v=this._toRouteLayerSolution(k);return this._isOverridden("title")||(this.title=u(v.routeInfo.name,"Route")),function(e,t,r){const o=t.networkDataset.networkAttributes.filter((e=>"cost"===e.usageType)),s=ee(t),i=r.travelMode??s;if(m(i))return void ce.warn("route-layer:missing-travel-mode","The routing service must have a default travel mode or one must be specified in the route parameter.");const{timeAttributeName:l,distanceAttributeName:a}=i,u=o.find((e=>e.name===l)),y=o.find((e=>e.name===a)),d=c(r.travelMode)?.impedanceAttributeName??c(r.impedanceAttribute)??t.impedance,h=E.fromJSON(u?.units),f=q.fromJSON(y?.units);if(!h||!f)throw new n("routelayer:unknown-impedance-units","the units of either the distance or time impedance are unknown");const j=r.directionsLanguage??t.directionsLanguage,b=c(r.accumulateAttributes)??t.accumulateAttributeNames??[],S=new Set(o.filter((({name:e})=>e===l||e===a||e===d||b.includes(e))).map((({name:e})=>e))),g=e=>{for(const t in e)S.has(t)||delete e[t]};for(const t of e.pointBarriers)p(t.costs)&&(t.addedCost=t.costs[d]??0,g(t.costs));for(const t of e.polygonBarriers)p(t.costs)&&(t.scaleFactor=t.costs[d]??1,g(t.costs));for(const t of e.polylineBarriers)p(t.costs)&&(t.scaleFactor=t.costs[d]??1,g(t.costs));const{routeInfo:w}=e,{findBestSequence:k,preserveFirstStop:v,preserveLastStop:P,startTimeIsUTC:I,timeWindowsAreUTC:C}=r;w.analysisSettings=new K({accumulateAttributes:b,directionsLanguage:j,findBestSequence:k,preserveFirstStop:v,preserveLastStop:P,startTimeIsUTC:I,timeWindowsAreUTC:C,travelMode:i}),w.totalDuration=se(w.totalCosts[l]??0,h),w.totalDistance=ie(w.totalCosts[a]??0,f),w.totalLateDuration=se(w.totalViolations[l]??0,h),w.totalWaitDuration=se(w.totalWait[l]??0,h),p(w.totalCosts)&&g(w.totalCosts),p(w.totalViolations)&&g(w.totalViolations),p(w.totalWait)&&g(w.totalWait);for(const t of e.stops)p(t.serviceCosts)&&(t.serviceDuration=se(t.serviceCosts[l]??0,h),t.serviceDistance=ie(t.serviceCosts[a]??0,f),g(t.serviceCosts)),p(t.cumulativeCosts)&&(t.cumulativeDuration=se(t.cumulativeCosts[l]??0,h),t.cumulativeDistance=ie(t.cumulativeCosts[a]??0,f),g(t.cumulativeCosts)),p(t.violations)&&(t.lateDuration=se(t.violations[l]??0,h),g(t.violations)),p(t.wait)&&(t.waitDuration=se(t.wait[l]??0,h),g(t.wait))}(v,d,w),v}update(e){const{stops:t,directionLines:r,directionPoints:o,pointBarriers:s,polylineBarriers:i,polygonBarriers:n,routeInfo:l}=e;this.set({stops:t,pointBarriers:s,polylineBarriers:i,polygonBarriers:n}),this._set("directionLines",r),this._set("directionPoints",o),this._set("routeInfo",l)}_getNetworkFeatures(e,t,n,l){const a=(re(e)?e.layers:e.featureCollection.layers).find((e=>e.layerDefinition.name===t));if(m(a))return new i;const{layerDefinition:p,popupInfo:u,featureSet:c}=a,y=p.drawingInfo.renderer,{features:d}=c,h=y&&s(y),f=d.map((e=>{const s=r.fromJSON(e),i=n(s);return i.symbol??(i.symbol=h?.getSymbol(s)??this._getNetworkSymbol(t)),i.popupTemplate??(i.popupTemplate=u&&o.fromJSON(u)),i}));return l&&f.some((e=>!e.symbol))&&l(f),new i(f)}_getNetworkSymbol(e){switch(e){case"Barriers":return this.defaultSymbols.pointBarriers;case"DirectionPoints":return this.defaultSymbols.directionPoints;case"DirectionLines":return this.defaultSymbols.directionLines;case"PolylineBarriers":return this.defaultSymbols.polylineBarriers;case"PolygonBarriers":return this.defaultSymbols.polygonBarriers;case"RouteInfo":return this.defaultSymbols.routeInfo;case"Stops":return null}}async _getServiceDescription(e,t,r){if(p(this._cachedServiceDescription)&&this._cachedServiceDescription.url===e)return this._cachedServiceDescription.serviceDescription;const o=await A(e,t,r);return this._cachedServiceDescription={serviceDescription:o,url:e},o}_setStopSymbol(e){if(!e||0===e.length)return;if(m(this.defaultSymbols.stops))return;if(e.every((e=>p(e.symbol))))return;const{first:t,last:r,middle:o,unlocated:s,waypoint:i,break:n}=this.defaultSymbols.stops;if(m(this.routeInfo)||1===e.length)return void e.forEach(((s,i)=>{switch(i){case 0:s.symbol=t;break;case e.length-1:s.symbol=r;break;default:s.symbol=o}}));const l=e.map((e=>e.sequence)).filter((e=>p(e))),a=Math.min(...l),u=Math.max(...l);for(const l of e)l.sequence!==a?l.sequence!==u?"ok"===l.status||"not-located-on-closest"===l.status?"waypoint"!==l.locationType?"break"!==l.locationType?l.symbol=o:l.symbol=n:l.symbol=i:l.symbol=s:l.symbol=r:l.symbol=t}_toRouteLayerSolution(e){const t=e.routeResults[0].stops.map((e=>Z.fromJSON(e.toJSON())));this._setStopSymbol(t);const r=new ue(t),o=new pe(e.polygonBarriers?.map((e=>{const t=z.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.polygonBarriers,t}))),s=new me(e.polylineBarriers?.map((e=>{const t=H.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.polylineBarriers,t}))),i=new ae(e.pointBarriers?.map((e=>{const t=W.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.pointBarriers,t}))),n=Q.fromJSON(e.routeResults[0].route.toJSON());n.symbol=this.defaultSymbols.routeInfo;const l=new le(e.routeResults[0].directionPoints?.features.map((e=>{const t=J.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.directionPoints,t})));return{directionLines:new ne(e.routeResults[0].directionLines?.features.map((e=>{const t=V.fromJSON(e.toJSON());return t.symbol=this.defaultSymbols.directionLines,t}))),directionPoints:l,pointBarriers:i,polygonBarriers:o,polylineBarriers:s,routeInfo:n,stops:r}}_writeDirectionLines(){return this._writeNetworkFeatures(this.directionLines,this.defaultSymbols.directionLines,"esriGeometryPolyline",V.fields,V.popupInfo,"DirectionLines","Direction Lines")}_writeDirectionPoints(){return this._writeNetworkFeatures(this.directionPoints,this.defaultSymbols.directionPoints,"esriGeometryPoint",J.fields,J.popupInfo,"DirectionPoints","Direction Points")}_writeNetworkFeatures(e,t,r,o,s,i,n){return m(e)||!e.length?null:{featureSet:{features:e.toArray().map((e=>function(e){const{attributes:t,geometry:r,popupTemplate:o,symbol:s}=e.toGraphic().toJSON();return{attributes:t,geometry:r,popupInfo:o,symbol:s}}(e))),geometryType:r},layerDefinition:{capabilities:"Query,Update,Editing",drawingInfo:{renderer:{type:"simple",symbol:p(t)?t.toJSON():te(r)}},extent:this.fullExtent.toJSON(),fields:o,geometryType:r,hasM:!1,hasZ:!1,maxScale:this.maxScale,minScale:this.minScale,name:i,objectIdField:"__OBJECTID",spatialReference:this.spatialReference.toJSON(),title:n,type:"Feature Layer",typeIdField:""},popupInfo:s}}_writePointBarriers(){return this._writeNetworkFeatures(this.pointBarriers,this.defaultSymbols.pointBarriers,"esriGeometryPoint",W.fields,W.popupInfo,"Barriers","Point Barriers")}_writePolygonBarriers(){return this._writeNetworkFeatures(this.polygonBarriers,this.defaultSymbols.polygonBarriers,"esriGeometryPolygon",z.fields,z.popupInfo,"PolygonBarriers","Polygon Barriers")}_writePolylineBarriers(){return this._writeNetworkFeatures(this.polylineBarriers,this.defaultSymbols.polylineBarriers,"esriGeometryPolyline",H.fields,H.popupInfo,"PolylineBarriers","Line Barriers")}_writeRouteInfo(){return this._writeNetworkFeatures(p(this.routeInfo)?new i([this.routeInfo]):null,this.defaultSymbols.routeInfo,"esriGeometryPolyline",Q.fields,Q.popupInfo,"RouteInfo","Route Details")}_writeStops(){const e=this._writeNetworkFeatures(this.stops,null,"esriGeometryPoint",Z.fields,Z.popupInfo,"Stops","Stops");if(m(e))return null;const{stops:t}=this.defaultSymbols,r=p(t)&&p(t.first)&&t.first.toJSON(),o=p(t)&&p(t.middle)&&t.middle.toJSON(),s=p(t)&&p(t.last)&&t.last.toJSON();return e.layerDefinition.drawingInfo.renderer={type:"uniqueValue",field1:"Sequence",defaultSymbol:o,uniqueValueInfos:[{value:"1",symbol:r,label:"First Stop"},{value:`${this.stops.length}`,symbol:s,label:"Last Stop"}]},e}};e([S({readOnly:!0,json:{read:!1,origins:{"portal-item":{write:{allowNull:!0,ignoreOrigin:!0}},"web-map":{write:{overridePolicy(){return{allowNull:!0,ignoreOrigin:null==this.portalItem}}}}}}})],ye.prototype,"_featureCollection",void 0),e([k(["web-map","portal-item"],"_featureCollection")],ye.prototype,"writeFeatureCollectionWebmap",null),e([S({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{target:"type",overridePolicy(){return{ignoreOrigin:null!=this.portalItem}}}}}}})],ye.prototype,"_type",void 0),e([S({nonNullable:!0,type:F})],ye.prototype,"defaultSymbols",void 0),e([S({readOnly:!0})],ye.prototype,"directionLines",void 0),e([g(["web-map","portal-item"],"directionLines",["layers","featureCollection.layers"])],ye.prototype,"readDirectionLines",null),e([S({readOnly:!0})],ye.prototype,"directionPoints",void 0),e([g(["web-map","portal-item"],"directionPoints",["layers","featureCollection.layers"])],ye.prototype,"readDirectionPoints",null),e([S({readOnly:!0,json:{read:!1,origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],ye.prototype,"featureCollectionType",void 0),e([S({readOnly:!0})],ye.prototype,"fullExtent",null),e([S({json:{origins:{"web-map":{name:"featureCollection.showLegend"}},write:!0}})],ye.prototype,"legendEnabled",void 0),e([S({type:["show","hide"]})],ye.prototype,"listMode",void 0),e([S({type:Number,nonNullable:!0,json:{write:!1}})],ye.prototype,"maxScale",void 0),e([g(["web-map","portal-item"],"maxScale",["layers","featureCollection.layers"])],ye.prototype,"readMaxScale",null),e([S({type:Number,nonNullable:!0,json:{write:!1}})],ye.prototype,"minScale",void 0),e([g(["web-map","portal-item"],"minScale",["layers","featureCollection.layers"])],ye.prototype,"readMinScale",null),e([S({type:["ArcGISFeatureLayer"],value:"ArcGISFeatureLayer"})],ye.prototype,"operationalLayerType",void 0),e([S({nonNullable:!0,type:i.ofType(W)})],ye.prototype,"pointBarriers",void 0),e([g(["web-map","portal-item"],"pointBarriers",["layers","featureCollection.layers"])],ye.prototype,"readPointBarriers",null),e([S({nonNullable:!0,type:i.ofType(z)})],ye.prototype,"polygonBarriers",void 0),e([g(["web-map","portal-item"],"polygonBarriers",["layers","featureCollection.layers"])],ye.prototype,"readPolygonBarriers",null),e([S({nonNullable:!0,type:i.ofType(H)})],ye.prototype,"polylineBarriers",void 0),e([g(["web-map","portal-item"],"polylineBarriers",["layers","featureCollection.layers"])],ye.prototype,"readPolylineBarriers",null),e([S({readOnly:!0})],ye.prototype,"routeInfo",void 0),e([g(["web-map","portal-item"],"routeInfo",["layers","featureCollection.layers"])],ye.prototype,"readRouteInfo",null),e([S({type:B})],ye.prototype,"spatialReference",void 0),e([g(["web-map","portal-item"],"spatialReference",["layers","featureCollection.layers"])],ye.prototype,"readSpatialReference",null),e([S({nonNullable:!0,type:i.ofType(Z)})],ye.prototype,"stops",void 0),e([g(["web-map","portal-item"],"stops",["layers","featureCollection.layers"])],ye.prototype,"readStops",null),e([S()],ye.prototype,"title",null),e([S({readOnly:!0,json:{read:!1}})],ye.prototype,"type",void 0),e([S()],ye.prototype,"url",null),ye=e([w("esri.layers.RouteLayer")],ye);const de=ye;export{de as default};