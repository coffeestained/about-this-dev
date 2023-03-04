// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/screenUtils ../../../core/time ../InputHandler ./support".split(" "),function(k,h,r,n,p,t){function q(c){const e=[];c.forEach(f=>{e.push(r.createScreenPoint(f.event.x,f.event.y))});return t.fitCircleLSQ(e)}function l(c){const e=q(c);let f=0;c.forEach(b=>{var a=m(b,e);for(a-=b.lastAngle;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;a=b.lastAngle+a;b.lastAngle=a;f+=a-b.initialAngle});f/=c.size||1;return{angle:f,radius:e.radius,
center:e.center}}function u(c){const e=new Map;c.forEach((f,b)=>e.set(b,f.event));return e}function m(c,e){c=c.event;return Math.atan2(c.y-e.center.y,c.x-e.center.x)}p=function(c){function e(b){var a=c.call(this,!1)||this;a.navigationTouch=b;a.startStateModifiers=new Set;a.activePointerMap=new Map;a.isDragging=!1;a.isCurrentDragSuppressed=!1;a.drag=a.registerOutgoing("drag");a.registerIncoming("pointer-drag",a._handlePointerDrag.bind(h._assertThisInitialized(a)));a.registerIncoming("pointer-up",a._handlePointerUpAndPointerLost.bind(h._assertThisInitialized(a)));
a.registerIncoming("pointer-capture-lost",a._handlePointerUpAndPointerLost.bind(h._assertThisInitialized(a)));a.registerIncoming("pointer-cancel",a._handlePointerUpAndPointerLost.bind(h._assertThisInitialized(a)));return a}h._inheritsLoose(e,c);var f=e.prototype;f._createPayload=function(b,a,d,g){return{action:b,pointerType:this.pointerType,button:this.mouseButton,buttons:a.buttons,timestamp:g,pointers:u(this.activePointerMap),pointer:a,angle:d.angle,radius:d.radius,center:d.center}};f._addPointer=
function(b){var a=b.native.pointerId;const d=l(this.activePointerMap).angle;b={event:b,initialAngle:0,lastAngle:0};this.activePointerMap.set(a,b);a=m(b,q(this.activePointerMap));b.initialAngle=a;b.lastAngle=a;this._updatePointerAngles(d)};f._updatePointer=function(b){if(!b||null!=b.x||null!=b.y){var a=this.activePointerMap.get(b.native.pointerId);a?a.event=b:this._addPointer(b)}};f._removePointer=function(b){const a=l(this.activePointerMap).angle;this.activePointerMap.delete(b);this._updatePointerAngles(a)};
f._updatePointerAngles=function(b){const a=l(this.activePointerMap);this.activePointerMap.forEach(d=>{d.initialAngle=m(d,a)-b;d.lastAngle=m(d,a)-b})};f._emitEvent=function(b,a,d){const g=l(this.activePointerMap);this.drag.emit(this._createPayload(b,a,g,d),void 0,this.startStateModifiers)};f._handlePointerUpAndPointerLost=function(b){const a=b.data.native.pointerId,d=n.Milliseconds(b.timestamp);this.activePointerMap.get(a)&&(1===this.activePointerMap.size?(this._updatePointer(b.data),!this.isCurrentDragSuppressed&&
this._emitEvent("end",b.data,d),this.isCurrentDragSuppressed=this.isDragging=!1,this._removePointer(a)):(this._removePointer(a),this._emitEvent("removed",b.data,n.Milliseconds(b.timestamp))))};f._handlePointerDrag=function(b){const a=b.data,d=a.currentEvent,g=n.Milliseconds(b.timestamp);switch(a.action){case "start":case "update":this.isDragging?this.activePointerMap.has(d.native.pointerId)?(this._updatePointer(d),!this.isCurrentDragSuppressed&&this._emitEvent("update",d,g)):(this._addPointer(d),
this._emitEvent("added",d,g),this.isCurrentDragSuppressed=this.isSuppressed):(this._updatePointer(d),this.pointerType=b.data.startEvent.pointerType,this.mouseButton=b.data.startEvent.button,this.startStateModifiers=b.modifiers,this.isDragging=!0,this.isCurrentDragSuppressed=this.isSuppressed,!this.isCurrentDragSuppressed&&this._emitEvent("start",d,g))}};h._createClass(e,[{key:"isSuppressed",get:function(){return this.navigationTouch&&!this.navigationTouch.browserTouchPanEnabled&&"touch"===this.pointerType&&
1===this.activePointerMap.size}}]);return e}(p.InputHandler);k.Button=void 0;(function(c){c[c.Left=0]="Left";c[c.Middle=1]="Middle";c[c.Right=2]="Right";c[c.Back=3]="Back";c[c.Forward=4]="Forward";c[c.Undefined=-1]="Undefined"})(k.Button||(k.Button={}));k.Drag=p;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});