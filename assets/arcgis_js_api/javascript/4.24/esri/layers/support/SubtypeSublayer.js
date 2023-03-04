// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../PopupTemplate ../../renderers/ClassBreaksRenderer ../../renderers/DictionaryRenderer ../../renderers/DotDensityRenderer ../../renderers/HeatmapRenderer ../../renderers/PieChartRenderer ../../renderers/Renderer ../../renderers/SimpleRenderer ../../renderers/UniqueValueRenderer ../../renderers/support/jsonUtils ../../renderers/support/types ../../symbols ../../core/HandleOwner ../../core/Identifiable ../../core/Loadable ../../core/Logger ../../core/MultiOriginJSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/extensions/serializableProperty/reader ./commonProperties ./FeatureTemplate ./LabelClass ./labelingInfo ../../support/popupUtils".split(" "),
function(r,d,x,n,L,M,N,O,y,t,u,z,A,B,c,C,D,E,F,e,P,Q,R,l,G,H,h,v,I,w,J){const K=E.getLogger("esri.layers.FeatureLayer"),p=H.createTypeReader({types:B.symbolTypesRenderer});n={key:"type",base:y,typeMap:{simple:t,"unique-value":u,"class-breaks":n},errorContext:"renderer"};c=function(m){function k(a){a=m.call(this,a)||this;a.type="subtype-sublayer";a.labelsVisible=!0;a.labelingInfo=null;a.legendEnabled=!0;a.minScale=0;a.maxScale=0;a.popupEnabled=!0;a.popupTemplate=null;a.subtypeCode=null;a.templates=
null;a.title=null;a.visible=!0;return a}r._inheritsLoose(k,m);var f=k.prototype;f.readRenderer=function(a,b,g){b=b.layerDefinition||b;if(a=b.drawingInfo&&b.drawingInfo.renderer||void 0)return(a=z.read(a,b,g)||void 0)||K.error("Failed to create renderer",{rendererDefinition:b.drawingInfo.renderer,layer:this,context:g}),a;if(b.defaultSymbol)return b.types&&b.types.length?new u({defaultSymbol:p(b.defaultSymbol,b,g),field:b.typeIdField,uniqueValueInfos:b.types.map(q=>({id:q.id,symbol:p(q.symbol,q,g)}))}):
new t({symbol:p(b.defaultSymbol,b,g)})};f.readTemplates=function(a,b){return a=a&&a.map(g=>v.fromJSON(g))};f.readVisible=function(a,b){if(b.layerDefinition&&null!=b.layerDefinition.defaultVisibility)return!!b.layerDefinition.defaultVisibility;if(null!=b.visibility)return!!b.visibility};f.createPopupTemplate=function(a){return J.createPopupTemplate({...this,fields:this.parent.fields},a)};r._createClass(k,[{key:"effectiveScaleRange",get:function(){const {minScale:a,maxScale:b}=this;return{minScale:a,
maxScale:b}}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(a){this._set("renderer",a)}}]);return k}(c.HandleOwnerMixin(F.MultiOriginJSONMixin(C.IdentifiableMixin(D))));d.__decorate([e.property({json:{read:!1}})],c.prototype,"type",void 0);d.__decorate([e.property(h.labelsVisible)],c.prototype,"labelsVisible",void 0);d.__decorate([e.property({type:[I],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:w.reader},write:{target:"drawingInfo.labelingInfo",
enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:w.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],c.prototype,"labelingInfo",void 0);d.__decorate([e.property(h.legendEnabled)],c.prototype,"legendEnabled",void 0);d.__decorate([e.property(h.minScale)],c.prototype,"minScale",void 0);d.__decorate([e.property(h.maxScale)],c.prototype,"maxScale",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"effectiveScaleRange",null);d.__decorate([e.property(h.opacityDrawingInfo)],
c.prototype,"opacity",void 0);d.__decorate([e.property()],c.prototype,"parent",void 0);d.__decorate([e.property(h.popupEnabled)],c.prototype,"popupEnabled",void 0);d.__decorate([e.property({type:x,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],c.prototype,"popupTemplate",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"defaultPopupTemplate",null);d.__decorate([e.property({types:n,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",
types:A.webSceneRendererTypes,write:{overridePolicy(m,k,f){return{ignoreOrigin:null==f?void 0:f.writeLayerSchema}}}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy(m,k,f){return{ignoreOrigin:null==f?void 0:f.writeLayerSchema}}}}})],c.prototype,"renderer",null);d.__decorate([l.reader("service","renderer",["drawingInfo.renderer","defaultSymbol"]),l.reader("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],c.prototype,"readRenderer",null);d.__decorate([e.property({type:Number,
json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.subtypeCode"},write:{target:"layerDefinition.subtypeCode"}}})],c.prototype,"subtypeCode",void 0);d.__decorate([e.property({type:[v]})],c.prototype,"templates",void 0);d.__decorate([l.reader("templates",["editFieldsInfo","creatorField","editorField","templates"])],c.prototype,"readTemplates",null);d.__decorate([e.property()],c.prototype,"title",void 0);d.__decorate([e.property({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],
c.prototype,"visible",void 0);d.__decorate([l.reader("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],c.prototype,"readVisible",null);return c=d.__decorate([G.subclass("esri.layers.support.SubtypeSublayer")],c)});