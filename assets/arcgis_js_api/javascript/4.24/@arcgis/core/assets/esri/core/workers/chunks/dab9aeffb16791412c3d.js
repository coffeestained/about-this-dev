"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9546],{75025:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(29768),o=r(92143),l=r(71252),s=r(34250),n=(r(76506),r(91306),r(17533)),a=r(21132);const d=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.p)(this.url);if((0,l.i)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.a)(e,o.L.getLogger(this.declaredClass)))}};return(0,i._)([(0,s.Cb)()],t.prototype,"title",null),(0,i._)([(0,s.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,n.j)("esri.layers.mixins.ArcGISService")],t),t}},52228:(e,t,r)=>{var i,o;function l(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function n(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function a(e,t){const r=t||n(e),l=e.valueUnit||"unknown";return r===i.Unknown?o.Constant:e.stops?o.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?o.ClampedLinear:"unknown"===l?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?o.Proportional:o.Additive:o.Identity:o.RealWorldSize}r.d(t,{I:()=>i,T:()=>o,a:()=>a,b:()=>s,g:()=>n,i:()=>l}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(o||(o={}))},52991:(e,t,r)=>{r.d(t,{E:()=>o,_:()=>l});var i=r(71252);async function o(e,t){const{WhereClause:i}=await Promise.resolve().then(r.bind(r,72274));return i.create(e,t)}function l(e,t){return(0,i.i)(e)?(0,i.i)(t)?`(${e}) AND (${t})`:e:t}},96994:(e,t,r)=>{r.d(t,{V:()=>s});var i=r(29768),o=r(34250),l=(r(76506),r(91306),r(17533));r(92143),r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(60991),r(6540);const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,o.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,l.j)("esri.layers.mixins.APIKeyMixin")],t),t}},39241:(e,t,r)=>{r.d(t,{I:()=>_});var i=r(29768),o=r(88762),l=r(82058),s=r(41864),n=r(60991),a=r(92143),d=r(71252),u=r(50406),p=r(32101),c=r(34250),h=(r(76506),r(91306),r(97714)),m=r(17533),y=r(2906),w=r(49900),v=r(56420),f=r(74653);r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(6540),r(12047),r(21972),r(91055),r(19657),r(6906),r(81184),r(33101),r(21801),r(73796),r(60947),r(91597),r(86787),r(35132),r(89623),r(3482),r(67477),r(57251),r(78533),r(73173),r(74742),r(28239),r(91091),r(58943);const g=a.L.getLogger("esri.layers.mixins.PortalLayer"),_=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new v.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8642).then(r.bind(r,8642)).then((e=>e.l));return(0,u.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,u.D_)(e)||g.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?o.id?.findCredential(this.url):null;if(!t)return!0;const r=I.credential===t?I.user:await this._fetchEditingUser(e);return I.credential=t,I.user=r,(0,d.a)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=o.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,n=w.Z.getDefault();if(n&&n.loaded&&(0,p.Fv)(n.restUrl)===(0,p.Fv)(i))return n.user;const a=`${i}/community/self`,u=(0,d.i)(e)?e.signal:null,c=await(0,s.r)((0,l.default)(a,{authMode:"no-prompt",query:{f:"json"},signal:u}));return c.ok?f.default.fromJSON(c.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||w.Z.getDefault());return r&&i&&!(0,p.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new n.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,c.Cb)({type:v.default})],t.prototype,"portalItem",null),(0,i._)([(0,h.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,y.w)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,c.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,c.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,m.j)("esri.layers.mixins.PortalLayer")],t),t},I={credential:null,user:null}},46495:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(29768),o=r(66122),l=r(57251),s=r(12047),n=r(34250),a=(r(76506),r(91306),r(17533));r(21972),r(60474),r(66396),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);const d=new l.J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,o.J)(s.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,i._)([(0,n.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,i._)([(0,n.Cb)({json:{read:d.read,write:d.write}})],u.prototype,"drawingTool",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,i._)([(0,n.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,i._)([(0,a.j)("esri.layers.support.FeatureTemplate")],u);const p=u},78303:(e,t,r)=>{r.d(t,{Z:()=>h});var i=r(29768),o=r(66122),l=r(12047),s=r(34250),n=(r(76506),r(91306),r(97714)),a=r(17533),d=r(2906),u=r(9801),p=r(46495);r(21972),r(60474),r(66396),r(86656),r(92143),r(31450),r(71552),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(53523),r(59465),r(57251),r(42911),r(46826),r(45433);let c=class extends((0,o.J)(l.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.f)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,i._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"id",void 0),(0,i._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,i._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"domains",void 0),(0,i._)([(0,n.r)("domains")],c.prototype,"readDomains",null),(0,i._)([(0,d.w)("domains")],c.prototype,"writeDomains",null),(0,i._)([(0,s.Cb)({type:[p.Z],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,i._)([(0,a.j)("esri.layers.support.FeatureType")],c);const h=c},2180:(e,t,r)=>{r.d(t,{Z:()=>u});var i,o=r(29768),l=r(15324),s=r(12047),n=r(34250),a=(r(76506),r(91306),r(17533));r(91055),r(75067),r(21972),r(60474),r(66396),r(86656),r(92143),r(31450),r(71552),r(40642),r(6540),r(19657),r(6906),r(50406),r(60991),r(89914);let d=i=class extends s.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new l.Z}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,n.Cb)({type:String,json:{write:!0}})],d.prototype,"floorField",void 0),(0,o._)([(0,n.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllMode",void 0),(0,o._)([(0,n.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllLevelIds",void 0),d=i=(0,o._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],d);const u=d}}]);