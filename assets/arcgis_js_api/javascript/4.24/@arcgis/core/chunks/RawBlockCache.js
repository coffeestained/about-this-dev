/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../geometry.js";import{i as e}from"./maybe.js";import{c as t,f as n,s as r}from"./rasterProjectionHelper.js";import o from"../geometry/Point.js";const s=new Map,l=new class{constructor(e=15e3,t=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=e,this._interval=Math.min(e,t)}decreaseRefCount(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.refCount--,e.refCount<=0&&(r.delete(n),e.controller&&e.controller.abort()),e.refCount}return 0}getBlock(e,t){const n=e+"/"+t,r=this._cachedBlocks;if(r.has(n)){const e=r.get(n);return e.ts=Date.now(),e.refCount++,r.delete(n),r.set(n,e),e.block}return null}putBlock(e,t,n,r=null){const o=this._cachedBlocks,s=e+"/"+t;if(o.has(s)){const e=o.get(s);e.ts=Date.now(),e.refCount++}else o.set(s,{block:n,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(e,t){const n=this._cachedBlocks,r=e+"/"+t;n.has(r)&&n.delete(r)}updateMaxSize(e){this._size=e,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(null!=this._timer)return;const e=this._cachedBlocks;this._timer=setInterval((()=>{const t=Array.from(e),n=Date.now();for(let r=0;r<t.length&&t[r][1].ts<=n-this._duration;r++)e.delete(t[r][0]);0===e.size&&this._clearTimer()}),this._interval)}_trim(){const e=this._cachedBlocks;if(-1===this._size||this._size>=e.size)return;const t=Array.from(e);for(let n=0;n<t.length-this._size;n++)e.delete(t[n][0])}_clearTimer(){null!=this._timer&&(clearInterval(this._timer),this._timer=null)}};function c(e,t){return null==t?e:`${e}?sliceId=${t}`}function i(e,t){const n={extent:null,rasterInfo:t,cache:new Map};if(s.has(e)){const t=s.get(e);return t.push(n),t.length-1}return s.set(e,[n]),0}function a(e,t){if(s.has(e)){const n=s.get(e);n[t]=null,n.some((e=>null!=e))||s.delete(e)}}function h(e,t,n){if(!s.has(e))return null==t?l.decreaseRefCount(e,n):0;const r=s.get(e);if(null==r[t])return l.decreaseRefCount(e,n);const o=r[t].cache;if(o.has(n)){const e=o.get(n);if(e.refCount--,0===e.refCount){o.delete(n);for(let e=0;e<r.length;e++)r[e]&&r[e].cache.has(n)&&r[e].cache.delete(n);e.controller&&e.controller.abort()}return e.refCount}return 0}function u(e,t,n){if(!s.has(e))return null==t?l.getBlock(e,n):null;const r=s.get(e);if(null==r[t]){for(let e=0;e<r.length;e++)if(r[e]&&r[e].cache.has(n)){const t=r[e].cache.get(n);return t.refCount++,t.block}return l.getBlock(e,n)}const o=r[t].cache;if(o.has(n)){const e=o.get(n);return e.refCount++,e.block}for(let e=0;e<r.length;e++)if(e!==t&&r[e]&&r[e]&&r[e].cache.has(n)){const t=r[e].cache.get(n);return t.refCount++,o.set(n,t),t.block}return null}function f(e,t,n,r,o=null){if(!s.has(e))return void(null==t&&l.putBlock(e,n,r,o));const c=s.get(e);if(null==c[t])return void l.putBlock(e,n,r,o);const i={refCount:1,block:r,isResolved:!1,isRejected:!1,controller:o};r.then((()=>i.isResolved=!0)).catch((()=>i.isRejected=!0)),c[t].cache.set(n,i)}function m(e,t,n){if(!s.has(e))return void(null==t&&l.deleteBlock(e,n));const r=s.get(e);null!=r[t]?r[t].cache.delete(n):l.deleteBlock(e,n)}function d(l,c,i,a,h,u,f=null){const m=function(e,t){if(!s.has(e))return null;const n=s.get(e);return null==n[t]?null:n[t]}(l,c),d=m.extent,{cache:x,rasterInfo:g}=m;if(d&&d.xmin===i.xmin&&d.xmax===i.xmax&&d.ymin===i.ymin&&d.ymax===i.ymax)return;const _=i.clone().normalize(),{spatialReference:y,transform:k}=g,p=new Set;for(let s=0;s<_.length;s++){const l=_[s];if(l.xmax-l.xmin<=a||l.ymax-l.ymin<=a)continue;let c=t(l,y,f);e(k)&&(c=k.inverseTransform(c));const i=new o({x:a,y:a,spatialReference:l.spatialReference});if(null==h&&!(h=n(i,y,l,f)))return;const{pyramidLevel:m,pyramidResolution:d,excessiveReading:x}=r(h,g,u||"closest");if(x)return;const{storageInfo:B}=g,{origin:C}=B,M={x:Math.max(0,Math.floor((c.xmin-C.x)/d.x)),y:Math.max(0,Math.floor((C.y-c.ymax)/d.y))},R=Math.ceil((c.xmax-c.xmin)/d.x-.1),v=Math.ceil((c.ymax-c.ymin)/d.y-.1),b=m>0?B.pyramidBlockWidth:B.blockWidth,z=m>0?B.pyramidBlockHeight:B.blockHeight,w=1,j=Math.max(0,Math.floor(M.x/b)-w),I=Math.max(0,Math.floor(M.y/z)-w),T=Math.floor((M.x+R-1)/b)+w,$=Math.floor((M.y+v-1)/z)+w;for(let e=I;e<=$;e++)for(let t=j;t<=T;t++)p.add(`${m}/${e}/${t}`)}x.forEach(((e,t)=>{if(!p.has(t)){const e=x.get(t);(null==e||e.isResolved||e.isRejected)&&x.delete(t)}})),m.extent={xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax}}export{u as a,h as b,a as c,m as d,c as g,f as p,i as r,d as u};