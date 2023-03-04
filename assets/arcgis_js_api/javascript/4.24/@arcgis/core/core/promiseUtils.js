/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{h as e}from"./lang.js";import t from"./Error.js";import{L as n}from"../chunks/Logger.js";import{i as r,a as o,b as i,r as s}from"../chunks/maybe.js";import"../chunks/object.js";import"../config.js";import"../chunks/string.js";function c(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function u(e,t,n){if(!c(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(t,n);if(Array.isArray(t)){const r=t.slice();for(const t of r)e.addEventListener(t,n);return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function a(e,t,n){if(!c(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(t,n);const r=u(e,t,(t=>{r.remove(),n.call(e,t)}));return{remove(){r.remove()}}}function l(e,t,n){let r=!1;const o=u(e,t,(t=>{r||n.call(e,t)}));return{resume(){r=!1},pause(){r=!0},remove(){o.remove()}}}const f={Win:"Meta",Scroll:"ScrollLock",Spacebar:" ",Down:"ArrowDown",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Del:"Delete",Apps:"ContextMenu",Esc:"Escape",Multiply:"*",Add:"+",Subtract:"-",Decimal:".",Divide:"/"};function m({key:e}){return f[e]||e}const p=(w=globalThis,{setTimeout:(e,t)=>{const n=w.setTimeout(e,t);return{remove:()=>w.clearTimeout(n)}}});var w;const h=new Set;function v(t,n,r={}){e("esri-deprecation-warnings")&&b(t,`Module: ${n}`,r)}function d(t,n,r={}){if(e("esri-deprecation-warnings")){const{moduleName:e}=r;b(t,"Property: "+(e?e+"::":"")+n,r)}}function b(t,n,r={}){if(e("esri-deprecation-warnings")){const{replacement:e,version:o,see:i,warnOnce:s}=r;let c=n;e&&(c+=`\n\t🛠️ Replacement: ${e}`),o&&(c+=`\n\t⚙️ Version: ${o}`),i&&(c+=`\n\t🔗 See ${i} for more details.`),function(e,t,n=!1){n&&h.has(t)||(n&&h.add(t),e.warn(`🛑 DEPRECATED - ${t}`))}(t,c,s)}}async function g(e,t){const n=e.slice(),r=await Promise.all(e.map(((e,n)=>t(e,n))));return n.filter(((e,t)=>r[t]))}function y(t){return function(t,n,r={}){if(e("esri-deprecation-warnings")){const{moduleName:e}=r;b(t,"Function: "+(e?e+"::":"")+n+"()",r)}}(n.getLogger("esri.core.promiseUtils"),"create",{moduleName:"esri.core.promiseUtils",replacement:"new Promise()",version:"4.24"}),new Promise(((e,n)=>{try{t(e,n)}catch(e){Promise.resolve().then((()=>n(e)))}}))}function E(e="Aborted"){return new t("AbortError",e)}function j(e,t="Aborted"){if(T(e))throw E(t)}function A(e){return r(e)?"aborted"in e?e:e.signal:e}function T(e){const t=A(e);return r(t)&&t.aborted}function P(e){if(C(e))throw e}function L(e){if(!C(e))throw e}function D(e,t){const n=A(e);if(!o(n)){if(!n.aborted)return a(n,"abort",(()=>t()));t()}}function k(e,t){const n=A(e);if(!o(n))return j(n),a(n,"abort",(()=>t(E())))}function $(e,t){const n=A(t);return o(n)?e:new Promise(((n,r)=>{let o=D(t,(()=>r(E())));const i=()=>o=s(o);e.then(i,i),e.then(n,r)}))}function S(e,n,r){return Promise.race([e,O(n).then((()=>{throw new t("timeout",`Did not resolve within ${n} milliseconds (${r??"timeout"})`)}))])}function C(e){return e&&"AbortError"===e.name}async function U(e){try{return await e}catch(e){if(!C(e))throw e}}async function M(e,t=n.getLogger("esri")){try{return await e}catch(e){C(e)||t.error(e)}}function R(){let e=null;const t=new Promise(((t,n)=>{e={promise:void 0,resolve:t,reject:n}}));return e.promise=t,e}async function N(e){if(!e)return;if("function"!=typeof e.forEach){const t=Object.keys(e),n=t.map((t=>e[t])),r=await N(n),o={};return t.map(((e,t)=>o[e]=r[t])),o}const t=e;return new Promise((e=>{const n=[];let r=t.length;0===r&&e(n),t.forEach((t=>{const o={promise:t||Promise.resolve(t)};n.push(o),o.promise.then((e=>{o.value=e})).catch((e=>{o.error=e})).then((()=>{--r,0===r&&e(n)}))}))}))}async function x(e){return(await N(e)).filter((e=>!!e.value)).map((e=>e.value))}function O(e,t,n){const r=new AbortController;return D(n,(()=>r.abort())),new Promise(((n,o)=>{let i=setTimeout((()=>{i=0,n(t)}),e);D(r,(()=>{i&&(clearTimeout(i),o(E()))}))}))}function F(e,n,r,o){const i=r&&"abort"in r?r:null;null!=o||i||(o=r);let s=setTimeout((()=>{s=0,i&&i.abort()}),n);const c=()=>o||new t("promiseUtils:timeout","The wrapped promise did not resolve within "+n+" ms");return e.then((e=>{if(0===s)throw c();return clearTimeout(s),e}),(e=>{throw clearTimeout(s),0===s?c():e}))}function V(e){return e&&"function"==typeof e.then}function W(e){return V(e)?e:Promise.resolve(e)}function q(e,t=-1){let n,r,o,s,c=null;const u=(...a)=>{if(n){r=a,s&&s.reject(E()),s=R();const e=i(s.promise);if(c){const e=c;c=null,e.abort()}return e}if(o=s||R(),s=null,t>0){const r=new AbortController;n=W(e(...a,r.signal));const o=n;O(t).then((()=>{n===o&&(s?r.abort():c=r)}))}else n=1,n=W(e(...a));const l=()=>{const e=r;r=o=n=c=null,null!=e&&u(...e)},f=n,m=o;return f.then(l,l),f.then(m.resolve,m.reject),i(m.promise)};return u}function z(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r})),r=t=>{e(t)};return r.resolve=t=>e(t),r.reject=e=>t(e),r.timeout=(e,t)=>p.setTimeout((()=>r.reject(t)),e),r.promise=n,r}function B(e,t){return e.then(t,t)}function G(e,t){let n,o=new AbortController;const i=e(o.signal);let s={promise:i,finished:!1,abort:()=>{o&&(o.abort(),o=null)}};const c=()=>{s&&(s.finished=!0,s=null),r(n)&&(n.remove(),n=null),o=null};return i.then(c,c),n=D(t,(()=>{r(s)&&s.abort()})),s}async function H(e){await Promise.resolve(),j(e)}export{b as a,O as after,B as always,v as b,p as c,y as create,E as createAbortError,R as createDeferred,z as createResolver,G as createTask,d,q as debounce,m as e,N as eachAlways,x as eachAlwaysValues,g as filter,c as i,U as ignoreAbortErrors,C as isAbortError,T as isAborted,V as isPromiseLike,M as logOnError,u as o,D as onAbort,k as onAbortOrThrow,l as p,P as throwIfAbortError,j as throwIfAborted,L as throwIfNotAbortError,F as timeout,H as waitTick,W as when,$ as whenOrAbort,S as whenOrTimeout};