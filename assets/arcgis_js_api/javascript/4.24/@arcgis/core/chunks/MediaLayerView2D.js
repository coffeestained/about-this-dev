/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../geometry.js";import t from"../core/Collection.js";import{L as s}from"./Logger.js";import{o as r}from"./ensureType.js";import{i,a as o,u as a}from"./maybe.js";import{o as n,isAbortError as m}from"../core/promiseUtils.js";import{watch as l,initial as p,when as c,on as h}from"../core/reactiveUtils.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{c as j}from"./aaBoundingRect.js";import f,{r as y}from"../geometry/Extent.js";import{M as g}from"./mediaUtils.js";import{T as _,a as v}from"./TileStrategy.js";import"./TileInfoView.js";import"./TileKey.js";import w from"../core/Error.js";import{S as x}from"./mathUtils.js";import{D as M}from"./DisplayObject.js";import{B as R,V as b}from"./VertexArrayObject.js";import{a as U,b as S,c as T,f as C,U as V}from"./enums.js";import{T as E,i as A}from"./Texture.js";import{f as q}from"./screenUtils.js";import{b as D,m as P,c as O,g as L,r as I}from"./mat3.js";import{c as G}from"./mat3f32.js";import{f as W}from"./vec2f32.js";import{f as z}from"./vec3f32.js";import{normalizeMapX as H}from"../geometry/support/normalizeUtils.js";import{g as Q}from"../geometry/SpatialReference.js";import{m as k}from"../views/2d/ViewState.js";import{b as B}from"./brushes.js";import{W as F}from"./enums4.js";import{W as N}from"./WGLContainer.js";import{L as K}from"./LayerView2D.js";import Y from"../views/layers/LayerView.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../config.js";import"./object.js";import"./string.js";import"./reader.js";import"./writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../geometry/projection.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./common.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./normalizeUtilsSync.js";import"./normalizeUtilsCommon.js";import"./vec2.js";import"./QueueProcessor.js";import"./Queue.js";import"./context-util.js";import"../Viewpoint.js";import"../Camera.js";import"../core/Clonable.js";import"./Cyclical.js";import"./mat2df32.js";import"./mat2df64.js";import"./vec2f64.js";import"./pixelUtils.js";import"../layers/support/PixelBlock.js";import"./DefaultVertexAttributeLayouts.js";import"./FramebufferObject.js";import"./VertexElementDescriptor.js";import"./definitions.js";import"./vec4f32.js";import"./Utils16.js";import"./number3.js";import"./enums2.js";import"./ProgramTemplate.js";import"./Program.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./utils17.js";import"./heatmapUtils.js";import"./vec4f64.js";import"../Color.js";import"./colorUtils.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";import"./Container.js";import"./EffectView.js";import"./parser2.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./featureConversionUtils.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"./collectionUtils.js";import"./ClipRect.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"./Identifiable.js";import"../core/Promise.js";class J extends M{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this._vertices=new Float32Array(20),this._handles=[],this._handles.push(l((()=>this.elementView.element.opacity),(e=>this.opacity=e),p),l((()=>[this.elementView.coords]),(()=>{this.requestRender()}),p),c((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&i(e.content)&&this._handles.push(n(e.content,"play",(()=>this.requestRender())))}),p)),e.element.load().catch((t=>{s.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new w("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}destroy(){this._handles.forEach((e=>e.remove())),this.texture?.dispose(),this.texture=null}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if(i(s)){const e=s instanceof HTMLImageElement,r=s instanceof HTMLVideoElement,i=e?s.naturalWidth:r?s.videoWidth:s.width,o=e?s.naturalHeight:r?s.videoHeight:s.height;this.texture?r&&!s.paused&&(this.texture.setData(s),this.requestRender(),(A(t.gl)||x(i)&&x(o))&&this.texture.generateMipmap()):(this.texture=new E(t,{pixelFormat:U.RGBA,dataType:S.UNSIGNED_BYTE,samplingMode:T.LINEAR,wrapMode:C.CLAMP_TO_EDGE,width:i,height:o},s),(A(t.gl)||x(i)&&x(o))&&this.texture.generateMipmap(),r&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if(o(s))return;const[r,i,a,n]=s.rings[0],m=this._vertices,{x:l,y:p}=e,c=0!==t;c?m.set([i[0]-l,i[1]-p,r[0]-l,r[1]-p,a[0]-l,a[1]-p,n[0]-l,n[1]-p,n[0]-l,n[1]-p,i[0]+t-l,i[1]-p,i[0]+t-l,i[1]-p,r[0]+t-l,r[1]-p,a[0]+t-l,a[1]-p,n[0]+t-l,n[1]-p]):m.set([i[0]-l,i[1]-p,r[0]-l,r[1]-p,a[0]-l,a[1]-p,n[0]-l,n[1]-p]),this.isWrapAround=c}getVAO(e,t,s){if(o(this.elementView.coords))return null;const r=this._vertices;if(this._vao)this._geometryVbo.setData(r);else{this._geometryVbo=R.createVertex(e,V.DYNAMIC_DRAW,r);const i=R.createVertex(e,V.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new b(e,s,t,{geometry:this._geometryVbo,tex:i})}return this._vao}}class X extends N{constructor(){super(...arguments),this._localOrigin=q(0,0),this._viewStateId=-1,this._dvsMat3=G(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[B.overlay],target:()=>this.children,drawPhase:F.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:r,pixelRatio:i,resolution:o,rotation:a,viewpoint:n,displayMat3:m}=t;if(this._viewStateId===s)return;const l=Math.PI/180*a,p=i*r[0],c=i*r[1],{x:h,y:d}=n.targetGeometry,u=H(h,t.spatialReference);this._localOrigin.x=u,this._localOrigin.y=d;const j=o*p,f=o*c,y=D(this._dvsMat3);P(y,y,m),O(y,y,W(p/2,c/2)),L(y,y,z(p/j,-c/f,1)),I(y,y,-l),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:r,spatialReference:i,worldScreenWidth:a,size:n,viewpoint:m}=s,l=this._localOrigin;let p=0;if(i.isWrappable){const e=n[0],c=n[1],h=180/Math.PI*r,d=Math.abs(Math.cos(h)),u=Math.abs(Math.sin(h)),j=Math.round(e*d+c*u),[f,y]=Q(i).valid,g=k(i),{x:_,y:v}=m.targetGeometry,w=[_,v],x=[0,0];s.toScreen(x,w);const M=[0,0];let R;R=j>a?.5*a:.5*j;const b=Math.floor((_+.5*g)/g),U=f+b*g,S=y+b*g,T=[x[0]+R,0];s.toMap(M,T),M[0]>S&&(p=g),T[0]=x[0]-R,s.toMap(M,T),M[0]<U&&(p=-g);for(const e of t){const t=e.elementView.bounds;if(o(t))continue;const[s,,r]=t;s<f&&r>f?e.updateDrawCoords(l,g):r>y&&s<y?e.updateDrawCoords(l,-g):e.updateDrawCoords(l,p)}}else for(const e of t)e.updateDrawCoords(l,p)}}let Z=class extends(K(Y)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this.layer=null,this.elements=new t}attach(){this.handles.add(h((()=>this.layer.source),"refresh",(()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate()}))),this._overlayContainer=new X,this.container.addChild(this._overlayContainer),this._fetchQueue=new _({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new v({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e)}async hitTest(e,t){const s=[],r=[e.x,e.y];for(const t of this.elements){const o=a(t.georeference)?.coords;i(o)&&y(o.rings,r)&&s.push({type:"media",element:t,layer:this.layer,mapPoint:e})}return s.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){}_acquireTile(e){const t=new ee(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[s,r]=e.setElements(t);this._acquireElements(e,s),this._releaseElements(e,r),this.requestUpdate()}),(e=>{m(e)||s.getLogger(this.declaredClass).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._releaseElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const s=this.layer.source;if(o(s))return[];this.view.featuresTilingScheme.getTileBounds($,e,!0);const r=new f({xmin:$[0],ymin:$[1],xmax:$[2],ymax:$[3],spatialReference:this.view.spatialReference});return s.queryElements(r,t)}_acquireElements(e,t){const s=this.layer.source,i=this.view.spatialReference;if(!o(s))for(const s of t)r(this._elementReferences,s.uid,(()=>{const e=new g({element:s,spatialReference:i}),t=new J(e);return this._overlayContainer.addChild(t),this.elements.add(s),{tiles:new Set,projectedElement:e,overlay:t}})).tiles.add(e)}_releaseElements(e,t){for(const s of t){const t=this._elementReferences.get(s.uid);t.tiles.delete(e),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s))}}};e([d()],Z.prototype,"_fetchQueue",void 0),e([d()],Z.prototype,"layer",void 0),e([d({readOnly:!0})],Z.prototype,"elements",void 0),Z=e([u("esri.views.2d.layers.MediaLayerView2D")],Z);const $=j();class ee{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const r of e)s.has(r)?s.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(s)]}}const te=Z;export{te as default};