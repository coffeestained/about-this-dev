/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{clone as e}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as s}from"../chunks/enumeration.js";import{r as i}from"../chunks/reader.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{w as p}from"../chunks/writer.js";import{J as m}from"../chunks/jsonMap.js";import{t as n,f as c}from"../chunks/colorRamps.js";import"../core/Accessor.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/common.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";const u=new m({none:"none",standardDeviation:"standard-deviation",histogramEqualization:"histogram-equalization",minMax:"min-max",percentClip:"percent-clip",sigmoid:"sigmoid"}),h={0:"none",3:"standardDeviation",4:"histogramEqualization",5:"minMax",6:"percentClip",9:"sigmoid"};var l;let d=l=class extends r{constructor(t){super(t),this.colorRamp=null,this.computeGamma=!1,this.dynamicRangeAdjustment=!1,this.gamma=[],this.maxPercent=null,this.minPercent=null,this.numberOfStandardDeviations=null,this.outputMax=null,this.outputMin=null,this.sigmoidStrengthLevel=null,this.statistics=[],this.histograms=null,this.useGamma=!1,this.stretchType="none",this.type="raster-stretch"}readColorRamp(t){if(t)return c(t)}writeStatistics(t,r,e){t?.length&&(Array.isArray(t[0])||(t=t.map((t=>[t.min,t.max,t.avg,t.stddev]))),r[e]=t)}readStretchType(t,r){let e=r.stretchType;return"number"==typeof e&&(e=h[e]),u.read(e)}clone(){return new l({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:e(this.statistics),gamma:e(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:e(this.colorRamp),histograms:e(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment})}};t([o({types:n,json:{write:!0}})],d.prototype,"colorRamp",void 0),t([i("colorRamp")],d.prototype,"readColorRamp",null),t([o({type:Boolean,json:{write:!0}})],d.prototype,"computeGamma",void 0),t([o({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],d.prototype,"dynamicRangeAdjustment",void 0),t([o({type:[Number],json:{write:!0}})],d.prototype,"gamma",void 0),t([o({type:Number,json:{write:!0}})],d.prototype,"maxPercent",void 0),t([o({type:Number,json:{write:!0}})],d.prototype,"minPercent",void 0),t([o({type:Number,json:{write:!0}})],d.prototype,"numberOfStandardDeviations",void 0),t([o({type:Number,json:{read:{source:"max"},write:{target:"max"}}})],d.prototype,"outputMax",void 0),t([o({type:Number,json:{read:{source:"min"},write:{target:"min"}}})],d.prototype,"outputMin",void 0),t([o({type:Number,json:{write:!0}})],d.prototype,"sigmoidStrengthLevel",void 0),t([o({json:{type:[[Number]],write:!0}})],d.prototype,"statistics",void 0),t([o()],d.prototype,"histograms",void 0),t([p("statistics")],d.prototype,"writeStatistics",null),t([o({type:Boolean,json:{write:!0}})],d.prototype,"useGamma",void 0),t([o({type:u.apiValues,json:{type:u.jsonValues,write:u.write}})],d.prototype,"stretchType",void 0),t([i("stretchType",["stretchType"])],d.prototype,"readStretchType",null),t([s({rasterStretch:"raster-stretch"})],d.prototype,"type",void 0),d=l=t([a("esri.renderers.RasterStretchRenderer")],d);const j=d;export{j as default,u as s};