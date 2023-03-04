"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6060],{50203:(e,t,r)=>{r.d(t,{a:()=>c,b:()=>p,c:()=>b,d:()=>u,g:()=>m,t:()=>a});var n=r(40642);const s=new RegExp("__begin__","ig"),i=new RegExp("__end__","ig"),o=new RegExp("^__begin__","i"),l=new RegExp("__end__$","i");function a(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function c(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=e.labelExpression.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}"),t.type="conventional"),t}function p(e){const t=c(e);if(!t)return null;switch(t.type){case"conventional":return b(t.expression);case"arcade":return t.expression}return null}function u(e){const t=c(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e.match(d);return t&&t[1].trim()||null}(t.expression);case"arcade":return m(t.expression)}return null}function b(e){let t;return e?(t=(0,n.r)(e,(e=>'__begin__$feature["'+e+'"]__end__')),t=o.test(t)?t.replace(o,""):'"'+t,t=l.test(t)?t.replace(l,""):t+'"',t=t.replace(s,'" + ').replace(i,' + "')):t='""',t}const d=/^\s*\{([^}]+)\}\s*$/i,f=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,h=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,w=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function m(e){if(!e)return null;let t=f.exec(e)||h.exec(e);return t?t[1]||t[3]:(t=w.exec(e),t?t[2]:null)}},21471:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(29768),s=r(34250),i=(r(76506),r(91306),r(17533));r(92143),r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(60991),r(6540);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,n._)([(0,s.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,n._)([(0,i.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},68219:(e,t,r)=>{r.d(t,{Q:()=>m});var n=r(29768),s=r(92143),i=r(50406),o=r(34250),l=(r(76506),r(91306),r(17533)),a=r(15324),c=(r(60991),r(19657));r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(6540),r(91055),r(75067),r(21972),r(6906),r(89914);const p=new a.Z,u=new WeakMap;function b(e){return e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function d(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:d(t,e%t):0}let f=0,h=0;function w(){const e=Date.now();for(const t of p)t.refreshInterval&&e-(u.get(t)??0)+5>=6e4*t.refreshInterval&&(u.set(t,e),t.refresh(e))}(0,c.a)((()=>{const e=Date.now();let t=0;for(const r of p)t=d(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?u.get(r)||u.set(r,e):u.delete(r);if(t!==h){if(h=t,clearInterval(f),0===h)return void(f=0);f=setInterval(w,h)}}));const m=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,i.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{b(this)&&p.push(this)}),(()=>{}))}destroy(){b(this)&&p.includes(this)&&p.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,i.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{s.L.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,n._)([(0,o.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"refreshParameters",null),t=(0,n._)([(0,l.j)("esri.layers.mixins.RefreshableLayer")],t),t}},77807:(e,t,r)=>{r.d(t,{Z:()=>j});var n,s=r(29768),i=r(96467),o=r(57251),l=r(12047),a=r(76506),c=r(99403),p=r(34250),u=(r(91306),r(97714)),b=r(17533),d=r(2906),f=r(50203),h=r(5909),w=r(78548),m=r(60669),v=r(48208),y=r(6941),g=r(16218);r(63571),r(40642),r(71552),r(59465),r(14249),r(60991),r(92143),r(31450),r(60217),r(74569),r(21801),r(73796),r(60947),r(21972),r(60474),r(66396),r(86656),r(91055),r(6540),r(19657),r(6906),r(50406),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(32422),r(30776),r(48027),r(54174),r(82426),r(29794),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(32101),r(38742),r(48243),r(15324),r(75067),r(89914),r(34635),r(10401),r(49900),r(88762),r(82058),r(81184),r(33101),r(3482),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(66122),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(51589),r(2497),r(49906),r(9075);let x=n=class extends l.wq{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?(0,f.c)(t.value):e}writeExpression(e,t,r){null!=this.value&&(e=(0,f.c)(this.value)),null!=e&&(t[r]=e)}clone(){return new n({expression:this.expression,title:this.title,value:this.value})}};(0,s._)([(0,p.Cb)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],x.prototype,"expression",void 0),(0,s._)([(0,u.r)("expression",["expression","value"])],x.prototype,"readExpression",null),(0,s._)([(0,d.w)("expression")],x.prototype,"writeExpression",null),(0,s._)([(0,p.Cb)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],x.prototype,"title",void 0),(0,s._)([(0,p.Cb)({json:{read:!1,write:!1}})],x.prototype,"value",void 0),x=n=(0,s._)([(0,b.j)("esri.layers.support.LabelExpressionInfo")],x);const S=x,_=(m.Z.fromJSON(y.d),w.Z.fromJSON(y.a),h.Z.fromJSON(y.b),v.Z.fromJSON(y.c));var L;m.Z.fromJSON(y.e),w.Z.fromJSON(y.f),h.Z.fromJSON(y.g);const C=new o.J({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function E(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function P(e){return!!function(e){return"map-image"===e?.type}(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}let I=L=class extends l.wq{constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=_,this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,t){const r=(e,t,r)=>{switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;const n=e.split(" ");if(3===n.length)return r(t[n[0]],n[1],n[2]);if(7===n.length){const e=r(t[n[0]],n[1],n[2]),s=n[3],i=r(t[n[4]],n[5],n[6]);switch(s){case"AND":return e&&i;case"OR":return e||i}}return!1}catch(t){console.log("Error.: can't parse = "+e)}}readLabelExpression(e,t){const r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e}writeLabelExpression(e,t,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,f.t)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const t=(0,f.g)(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}null!=e&&(t[r]=e)}writeLabelExpressionInfo(e,t,r,n){if(null==e&&null!=this.labelExpression&&E(n))e=new S({expression:this.getLabelExpressionArcade()});else if(!e)return;const s=e.toJSON(n);s.expression&&(t[r]=s)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return(0,f.a)(this)}getLabelExpressionArcade(){return(0,f.b)(this)}getLabelExpressionSingleField(){return(0,f.d)(this)}hash(){return JSON.stringify(this)}clone(){return new L({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,a.d9)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,a.d9)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],I.prototype,"name",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],I.prototype,"allowOverrun",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],I.prototype,"deconflictionStrategy",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:{overridePolicy(e,t,r){return this.labelExpressionInfo&&"service"===r?.origin&&P(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],I.prototype,"labelExpression",void 0),(0,s._)([(0,u.r)("labelExpression")],I.prototype,"readLabelExpression",null),(0,s._)([(0,d.w)("labelExpression")],I.prototype,"writeLabelExpression",null),(0,s._)([(0,p.Cb)({type:S,json:{write:{overridePolicy:(e,t,r)=>function(e){return E(e)||P(e.layer)}(r)?{allowNull:!0}:{enabled:!1}}}})],I.prototype,"labelExpressionInfo",void 0),(0,s._)([(0,d.w)("labelExpressionInfo")],I.prototype,"writeLabelExpressionInfo",null),(0,s._)([(0,p.Cb)({type:C.apiValues,json:{type:C.jsonValues,read:C.read,write:C.write}})],I.prototype,"labelPlacement",void 0),(0,s._)([(0,p.Cb)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],I.prototype,"labelPosition",void 0),(0,s._)([(0,p.Cb)({type:Number})],I.prototype,"maxScale",void 0),(0,s._)([(0,d.w)("maxScale")],I.prototype,"writeMaxScale",null),(0,s._)([(0,p.Cb)({type:Number})],I.prototype,"minScale",void 0),(0,s._)([(0,d.w)("minScale")],I.prototype,"writeMinScale",null),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:!1}}}})],I.prototype,"repeatLabel",void 0),(0,s._)([(0,p.Cb)({type:Number,cast:c.t,json:{write:!0,origins:{"web-scene":{write:!1}}}})],I.prototype,"repeatLabelDistance",void 0),(0,s._)([(0,p.Cb)({types:i.yK,json:{origins:{"web-scene":{types:i.S6,write:g.vX,default:null}},write:g.vX,default:null}})],I.prototype,"symbol",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],I.prototype,"useCodedValues",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],I.prototype,"where",void 0),I=L=(0,s._)([(0,b.j)("esri.layers.support.LabelClass")],I);const j=I},78893:(e,t,r)=>{r.d(t,{eZ:()=>u});var n=r(86748),s=r(14249),i=r(30574),o=(r(2157),r(25977),r(58076),r(7471)),l=(r(45154),r(4292),r(54414)),a=r(1648);r(15324),r(91055),r(75067),r(21972),r(60474),r(66396),r(76506),r(17533),r(86656),r(6540),r(92143),r(31450),r(71552),r(40642),r(91306),r(60991),r(34250),r(19657),r(6906),r(50406),r(89914),r(12047),r(86787),r(97714),r(2906),r(29107),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(60217),r(74569),r(21801),r(73796),r(60947),r(91597),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(59465),r(8925),r(33957),r(3482),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(98242);const c=["oid","global-id"],p=["oid","global-id","guid"];function u({displayField:e,editFieldsInfo:t,fields:r,objectIdField:l,title:a},c){if(!r)return null;const p=m({editFieldsInfo:t,fields:r,objectIdField:l},c);if(!p.length)return null;const u=function(e){const t=(0,s.O5)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r}({titleBase:a,fields:r,displayField:e}),b=[new o.Z,new i.Z];return new n.Z({title:u,content:b,fieldInfos:p})}const b=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],d=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:n})=>n?n.has(e.name):!(h(e.name,t)||r&&e.name===r||c.includes(e.type)||b.some((t=>t.test(e.name))));function f(e,t){return"oid"===e.type?-1:"oid"===t.type?1:y(e)?-1:y(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function h(e,t){if(!e||!t)return!1;const{creationDateField:r,creatorField:n,editDateField:s,editorField:i}=t;return[r&&r.toLowerCase(),n&&n.toLowerCase(),s&&s.toLowerCase(),i&&i.toLowerCase()].includes(e.toLowerCase())}function w(e,t){return e.editable&&!p.includes(e.type)&&!h(e.name,t)}function m({editFieldsInfo:e,fields:t,objectIdField:r},n){return function(e,t){const r=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===r&&(e=e.slice()),e.sort(f),e}(t,n?.ignoreFieldTypes||g).map((t=>new l.Z({fieldName:t.name,isEditable:w(t,e),label:t.alias,format:v(t),visible:d(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:n?.visibleFieldNames})})))}function v(e){switch(e.type){case"small-integer":case"integer":case"single":return new a.Z({digitSeparator:!0,places:0});case"double":return new a.Z({digitSeparator:!0,places:2});case"date":return new a.Z({dateFormat:"long-month-day-year"});default:return"string"===e.type&&(0,s.Ec)(e.name)?new a.Z({digitSeparator:!0,places:0}):null}}function y(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())||void 0}const g=["geometry","blob","raster","guid","xml"]}}]);