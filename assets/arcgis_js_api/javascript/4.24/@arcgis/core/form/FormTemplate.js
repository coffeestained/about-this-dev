/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{clone as s}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import{cast as r}from"../core/accessorSupport/decorators/cast.js";import{r as n}from"../chunks/reader.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{w as i}from"../chunks/writer.js";import m from"./ExpressionInfo.js";import l from"./elements/GroupElement.js";import{ensureType as u,fromJSON as c,toJSON as j,buildTypeMaps as a}from"./support/elements.js";import"../core/Accessor.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/ensureType.js";import"./elements/Element.js";import"./elements/FieldElement.js";import"./elements/support/inputs.js";import"./elements/inputs/BarcodeScannerInput.js";import"./elements/inputs/TextInput.js";import"./elements/inputs/Input.js";import"./elements/inputs/ComboBoxInput.js";import"./elements/inputs/DateTimePickerInput.js";import"./elements/inputs/RadioButtonsInput.js";import"./elements/inputs/SwitchInput.js";import"./elements/inputs/TextAreaInput.js";import"./elements/inputs/TextBoxInput.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";var h;const d=a(l);let f=h=class extends e{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.title=null}castElements(t){return u(t,d)}readElements(t,e){return c(e.formElements,d)}writeElements(t,e){e.formElements=j(t,d)}clone(){return new h({description:this.description,expressionInfos:s(this.expressionInfos),elements:s(this.elements),title:this.title})}};t([o({type:String,json:{write:!0}})],f.prototype,"description",void 0),t([o({json:{write:!0}})],f.prototype,"elements",void 0),t([r("elements")],f.prototype,"castElements",null),t([n("elements",["formElements"])],f.prototype,"readElements",null),t([i("elements")],f.prototype,"writeElements",null),t([o({type:[m],json:{write:!0}})],f.prototype,"expressionInfos",void 0),t([o({type:String,json:{write:!0}})],f.prototype,"title",void 0),f=h=t([p("esri.form.FormTemplate")],f);const k=f;export{k as default};