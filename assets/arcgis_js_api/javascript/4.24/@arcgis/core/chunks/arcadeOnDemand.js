/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../geometry.js";import{i as e}from"./maybe.js";import r from"../geometry/SpatialReference.js";let t;function a(){return t||(t=(async()=>{const e=await import("./arcadeUtils.js").then((e=>e.o));return{arcade:e.arcade,arcadeUtils:e,Dictionary:e.Dictionary,Feature:e.arcadeFeature}})()),t}const s=(e,r,t)=>n.create(e,r,t,null,["$feature"]),i=(e,r,t)=>n.create(e,r,t,null,["$feature","$view"]),c=(e,r,t,a)=>n.create(e,r,t,a,["$feature","$view"]);class n{constructor(e,r,t,a,s,i,c,n){this.script=e,this.evaluate=s;const l=Array.isArray(c)?c:c.fields;this.fields=l,this._syntaxTree=a,this._arcade=r,this._arcadeDictionary=t,this._arcadeFeature=i,this._spatialReference=n,this._referencesGeometry=r.scriptTouchesGeometry(this._syntaxTree),this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(t,s,i,c,l,o){const{arcade:u,Feature:p,Dictionary:y}=await a(),f=r.fromJSON(s),m=u.parseScript(t,o),h=l.reduce(((e,r)=>({...e,[r]:null})),{});let d=null;e(c)&&(d=new y(c),d.immutable=!0,h.$config=null);const _=u.scriptUsesGeometryEngine(m)&&u.enableGeometrySupport(),F=u.scriptUsesFeatureSet(m)&&u.enableFeatureSetSupport(),w=u.scriptIsAsync(m)&&u.enableAsyncSupport(),b={vars:h,spatialReference:f,useAsync:!!w},S=new y;S.immutable=!1,S.setField("scale",0);const $=u.compileScript(m,b);return await Promise.all([_,F,w]),new n(t,u,y,m,(e=>("$view"in e&&e.$view&&(S.setField("scale",e.$view.scale),e.$view=S),d&&(e.$config=d),$({vars:e,spatialReference:f}))),new p,i,f)}repurposeFeature(e){return e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._spatialReference),this._arcadeFeature.repurposeFromGraphicLikeObject(e.geometry,e.attributes,{fields:this.fields}),this._arcadeFeature}createDictionary(){return new this._arcadeDictionary}referencesMember(e){return this._arcade.referencesMember(this._syntaxTree,e)}referencesFunction(e){return this._arcade.referencesFunction(this._syntaxTree,e)}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}extractFieldLiterals(){return this._arcade.extractExpectedFieldLiterals(this._syntaxTree)}}export{n as A,i as a,s as b,c,a as l};