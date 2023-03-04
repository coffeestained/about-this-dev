/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{ClonableMixin as e}from"../../core/Clonable.js";import{J as r}from"../../chunks/jsonMap.js";import{JSONSupport as t}from"../../core/JSONSupport.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";const n=new r({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),a=new r({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let p=class extends(e(t)){constructor(o){super(o),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};o([i({json:{read:n.read,write:n.write}})],p.prototype,"cardinality",void 0),o([i({json:{read:!0,write:!0}})],p.prototype,"composite",void 0),o([i({json:{read:!0,write:!0}})],p.prototype,"id",void 0),o([i({json:{read:!0,write:!0}})],p.prototype,"keyField",void 0),o([i({json:{read:!0,write:!0}})],p.prototype,"keyFieldInRelationshipTable",void 0),o([i({json:{read:!0,write:!0}})],p.prototype,"name",void 0),o([i({json:{read:!0,write:!0}})],p.prototype,"relatedTableId",void 0),o([i({json:{read:!0,write:!0}})],p.prototype,"relationshipTableId",void 0),o([i({json:{read:a.read,write:a.write}})],p.prototype,"role",void 0),p=o([s("esri.layers.support.Relationship")],p);const l=p;export{l as default};