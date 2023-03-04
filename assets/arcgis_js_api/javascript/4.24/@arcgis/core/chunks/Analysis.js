/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{ClonableMixin as r}from"../core/Clonable.js";import{I as o}from"./Identifiable.js";import{JSONSupportMixin as s}from"../core/JSONSupport.js";import{i}from"./maybe.js";import{property as p}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";let a=0,l=class extends(s(r(o(e)))){constructor(t){super(t),this.id=`${Date.now().toString(16)}-analysis-${a++}`,this.title=null}get parent(){return this._get("parent")}set parent(t){const e=this.parent;if(i(e))switch(e.type){case"line-of-sight":e.removeAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",t)}get isEditable(){return this.requiredPropertiesForEditing.every(i)}};t([p({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),t([p({type:String})],l.prototype,"title",void 0),t([p({constructOnly:!0})],l.prototype,"type",void 0),t([p({clonable:!1,value:null})],l.prototype,"parent",null),t([p({readOnly:!0})],l.prototype,"extent",void 0),t([p({readOnly:!0})],l.prototype,"isEditable",null),t([p({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",void 0),t([p({readOnly:!0})],l.prototype,"nonEditableMessage",void 0),l=t([n("esri.analysis.Analysis")],l);const c=l;export{c as A};