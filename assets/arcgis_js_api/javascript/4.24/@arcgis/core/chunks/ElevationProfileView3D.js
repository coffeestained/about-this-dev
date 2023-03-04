/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../core/Handles.js";import{p as o,r as s,a as e,i,e as r,f as p,d as m}from"./maybe.js";import{watch as l,syncAndInitial as a}from"../core/reactiveUtils.js";import{h as n,b as j}from"../widgets/ElevationProfile/ElevationProfileLine.js";import{H as c}from"./HoveredPoints.js";import{d as u,h}from"./handleUtils.js";import{createTask as d,throwIfAborted as y}from"../core/promiseUtils.js";import{b as f}from"./elevationInfoUtils.js";import{O as b,s as g}from"./OutlineVisualElement.js";import{G as v}from"./GraphicState.js";import{R as S}from"./Material.js";import{h as _}from"./layerViewUtils.js";import{_ as E}from"./tslib.es6.js";import D from"../Color.js";import U from"../core/Accessor.js";import{t as w}from"./throttle.js";import{property as L}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as P}from"../core/accessorSupport/decorators/subclass.js";import{f as I}from"./vec4f64.js";import M from"../geometry/Polyline.js";import"../core/Collection.js";import"./ArrayPool.js";import"../core/Evented.js";import"./get.js";import"./utils.js";import"./metadata.js";import"./Logger.js";import"../config.js";import"./object.js";import"./string.js";import"./tracking.js";import"../core/Error.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./shared.js";import"./SimpleObservable.js";import"./memoize.js";import"./uuid.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./reader.js";import"./writer.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"./VertexAttribute.js";import"./aaBoundingBox.js";import"../geometry/Extent.js";import"./aaBoundingRect.js";import"./basicInterfaces.js";import"./ViewingMode.js";import"./Util.js";import"./vec2f64.js";import"./utils4.js";import"./mat4.js";import"./mat4f64.js";import"./doublePrecisionUtils.js";import"./AnchorElementViewModel.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./colorUtils2.js";import"./ExtendedLineVisualElement.js";import"./vec4f32.js";import"./frustum.js";import"./vectorStacks.js";import"./byteSizeEstimations.js";import"./quatf64.js";import"./ray.js";import"./plane.js";import"./sphere.js";import"./mathUtils2.js";import"./lineSegment.js";import"./LaserlineVisualElement.js";import"./VisualElement.js";import"./glUtil.js";import"./enums.js";import"./VertexElementDescriptor.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./vec2.js";import"./types.js";import"./glUtil3D.js";import"./geometryDataUtils.js";import"./triangle.js";import"./Texture.js";import"./context-util.js";import"./mat4f32.js";import"./ShaderTechniqueConfiguration.js";import"./VertexArrayObject.js";import"./CameraSpace.glsl.js";import"./Octree.js";import"../geometry/projection.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"./typeUtils.js";import"../layers/support/Field.js";import"./enumeration.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"../Graphic.js";import"../geometry.js";import"../PopupTemplate.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number2.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./RenderSlot.js";import"./OrderIndependentTransparency.js";import"./Float3Uniform.js";import"./Object3DVisualElement.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./lineUtils.js";import"./triangulationUtils.js";import"./earcut.js";import"./deduplicate.js";import"./compilerUtils.js";import"./ElevationProvider.js";import"./interfaces2.js";import"./vec2f32.js";import"./FramebufferObject.js";import"./NestedMap.js";import"./Camera.js";import"./Matrix4Uniform.js";import"./Intersector.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./mat3.js";import"./quat.js";import"./MemCache.js";import"./requestImageUtils.js";import"./floatRGBA.js";import"./Scheduler.js";import"./debugFlags.js";import"./lineStippleUtils.js";import"./ElevationInfo.js";import"./VisualElementResources.js";import"./Texture2.js";import"./ElevationContext.js";import"./RenderGeometry.js";class C{constructor(t){this._params=t,this._highlightTask=null,this._highlightHandle=null,this._visualElementHandle=null}destroy(){this.remove()}remove(){this._highlightTask=o(this._highlightTask),this._highlightHandle=s(this._highlightHandle),this._visualElementHandle=s(this._visualElementHandle)}showHighlight(t){if(this.remove(),e(t)||!R(t))return;const o=t.layer;this._highlightTask=d((async s=>{const e=await this._params.view.whenLayerView(o);y(s),_(e)&&(this._highlightHandle=e.highlight(t))}))}showReshaping(t){if(this.remove(),e(t))return;const o=this._params.view,s=new b({view:o,geometry:R(t)?t.geometry:null,attached:!1,elevationInfo:f(t),renderOccluded:S.OccludeAndTransparentStencil}),i=new v({graphic:t}),r=[l((()=>i.isDraped),(t=>{s.isDraped=t})),i.on("changed",(()=>{s.geometry=R(t)?t.geometry:null})),o.trackGraphicState(i),o.maskOccludee(t),u(s)];g.visualElements.lineGraphics.outline.apply(s),s.attached=!0,this._visualElementHandle=h(r)}}function R(t){return i(t.geometry)&&"polyline"===t.geometry.type}let x=class extends U{constructor(o){super(o),this._chartData=null,this._visualElements=[],this._handles=new t}initialize(){const t=w((t=>{this._update(t)}),100);this._handles.add([l((()=>({spatialReference:this.view.spatialReference,chartData:this._chartData})),t,a),t])}destroy(){this._handles.destroy(),this._destroyVisualElements()}remove(){this._destroyVisualElements()}update(t){this._chartData=t}_update(t){const{chartData:o}=t;if(e(o))return this.remove();if(!o.refined)return;const s=this._visualElements,i=o.lines.filter((t=>t.viewVisualizationEnabled)),r=i.length;for(;s.length>r;)s.pop().destroy();const p=n;for(;s.length<r;){const t=new b({view:this.view,elevationInfo:{mode:"absolute-height",offset:0},innerWidth:p.width-p.outlineSize,width:p.width,falloff:p.falloff,color:p.outlineColor,renderOccluded:p.renderOccluded});s.push(t)}const m=t.spatialReference;for(let t=0;t<r;++t){const o=s[t],e=i[r-1-t];o.geometry=this._createLineGeometry(e,m),o.innerColor=I(D.toUnitRGBA(e.color))}}_createLineGeometry(t,o){const s=r(t.samples,[]),p=s.length-1,m=[];let l=[];for(let t=0;t<=p;t++){const{x:o,y:r,z:a}=s[t];i(a)&&l.push([o,r,a]),(t===p||e(a))&&l.length&&(m.push(l),l=[])}return new M({paths:m,hasZ:!0,spatialReference:o})}_destroyVisualElements(){this._visualElements.forEach((t=>t.destroy())),this._visualElements.length=0}};E([L()],x.prototype,"view",void 0),E([L()],x.prototype,"_chartData",void 0),x=E([P("esri.widgets.ElevationProfile.support.ProfileLines3D")],x);class V{constructor(o,s){this._handles=new t,this._inputRepresentation=new C({view:o}),this._hoveredPoints=new c({view:o}),this._profileLines=new x({view:o}),this._handles.add([l((()=>s.viewModel.hoveredPoints),(t=>this._hoveredPoints.update(t)),a),l((()=>{const{state:t,editable:o,highlightEnabled:e,viewModel:i}=s,r=i.input;return p(r,(t=>{t.commitProperty("geometry"),t.commitProperty("layer")})),{input:r,state:t,editable:o,highlightEnabled:e}}),(t=>this._updateInputRepresentation(t)),a),l((()=>s.viewModel.chartData),(t=>this._profileLines.update(t)),a),l((()=>p(s.viewModel.input,(t=>t.geometry))),(()=>{this._profileLines.remove()}),a)])}destroy(){this._handles=m(this._handles),this._inputRepresentation=m(this._inputRepresentation),this._hoveredPoints=m(this._hoveredPoints),this._profileLines=m(this._profileLines)}_updateInputRepresentation({input:t,state:o,editable:s,highlightEnabled:e}){const i=this._inputRepresentation;if(!e)return i.remove();o===j.Selected?i.showHighlight(t):o!==j.Created||s?i.remove():i.showReshaping(t)}}export{V as ElevationProfileView3D};