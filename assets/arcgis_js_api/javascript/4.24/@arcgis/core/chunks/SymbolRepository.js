/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isAbortError as e,eachAlways as t}from"../core/promiseUtils.js";import{addQueryParameters as s}from"../core/urlUtils.js";import{open as i}from"../core/workers/workers.js";import{R as o}from"./Rect.js";import{a as r,b as n,f as l}from"./enums.js";import{T as h}from"./Texture.js";import a from"../request.js";import{P as c}from"./pbf.js";import{b as u}from"./CIMSymbolHelper.js";import{T as _}from"./TileKey.js";import{a as y}from"./mat3f32.js";import{C as f,F as g}from"./config.js";import{G as p,t as d}from"./VectorTile.js";import{b as m,R as b,T as w}from"./StyleDefinition.js";import{i as S,a as x}from"./maybe.js";class P{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new o(0,0,e,t))}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new o;let s=null,i=-1;for(let o=0;o<this._free.length;++o){const r=this._free[o];e<=r.width&&t<=r.height&&(null===s||r.y<=s.y&&r.x<=s.x)&&(s=r,i=o)}return null===s?new o:(this._free.splice(i,1),s.width<s.height?(s.width>e&&this._free.push(new o(s.x+e,s.y,s.width-e,t)),s.height>t&&this._free.push(new o(s.x,s.y+t,s.width,s.height-t))):(s.width>e&&this._free.push(new o(s.x+e,s.y,s.width-e,s.height)),s.height>t&&this._free.push(new o(s.x,s.y+t,e,s.height-t))),new o(s.x,s.y,e,t))}release(e){for(let t=0;t<this._free.length;++t){const s=this._free[t];if(s.y===e.y&&s.height===e.height&&s.x+s.width===e.x)s.width+=e.width;else if(s.x===e.x&&s.width===e.width&&s.y+s.height===e.y)s.height+=e.height;else if(e.y===s.y&&e.height===s.height&&e.x+e.width===s.x)s.x=e.x,s.width+=e.width;else{if(e.x!==s.x||e.width!==s.width||e.y+e.height!==s.y)continue;s.y=e.y,s.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)}}class R{constructor(e,t,s){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=t,this._glyphSource=s,this._binPack=new P(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,t){const s=[],i=this._glyphSource,r=new Set;for(const e of t){const t=Math.floor(.00390625*e);r.add(t)}const n=[];return r.forEach((t=>{if(t<=256){const s=e+t;if(this._rangePromises.has(s))n.push(this._rangePromises.get(s));else{const o=i.getRange(e,t).then((()=>{this._rangePromises.delete(s)}),(()=>{this._rangePromises.delete(s)}));this._rangePromises.set(s,o),n.push(o)}}})),Promise.all(n).then((()=>{let r=this._glyphIndex[e];r||(r={},this._glyphIndex[e]=r);for(const n of t){const t=r[n];if(t){s[n]={sdf:!0,rect:t.rect,metrics:t.metrics,page:t.page,code:n};continue}const l=i.getGlyph(e,n);if(!l||!l.metrics)continue;const h=l.metrics;let a;if(0===h.width)a=new o(0,0,0,0);else{const e=3,t=h.width+2*e,s=h.height+2*e;let i=t%4?4-t%4:4,o=s%4?4-s%4:4;1===i&&(i=5),1===o&&(o=5),a=this._binPack.allocate(t+i,s+o),a.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new P(this.width-4,this.height-4),a=this._binPack.allocate(t+i,s+o));const r=this._glyphData[this._currentPage],n=l.bitmap;let c,u;if(n)for(let e=0;e<s;e++){c=t*e,u=this.width*(a.y+e+1)+a.x;for(let e=0;e<t;e++)r[u+e+1]=n[c+e]}}r[n]={rect:a,metrics:h,tileIDs:null,page:this._currentPage},s[n]={sdf:!0,rect:a,metrics:h,page:this._currentPage,code:n},this._dirties[this._currentPage]=!0}return s}))}removeGlyphs(e){for(const t in this._glyphIndex){const s=this._glyphIndex[t];if(!s)continue;let i;for(const t in s)if(i=s[t],i.tileIDs.delete(e),0===i.tileIDs.size){const e=this._glyphData[i.page],o=i.rect;let r,n;for(let t=0;t<o.height;t++)for(r=this.width*(o.y+t)+o.x,n=0;n<o.width;n++)e[r+n]=0;delete s[t],this._dirties[i.page]=!0}}}bind(e,t,s,i=0){this._textures[s]||(this._textures[s]=new h(e,{pixelFormat:r.ALPHA,dataType:n.UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));const o=this._textures[s];o.setSamplingMode(t),this._dirties[s]&&o.setData(this._glyphData[s]),e.bindTexture(o,i),this._dirties[s]=!1}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}}class I{constructor(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const t=e.getMessage();for(;t.next();)switch(t.tag()){case 3:{const e=t.getMessage();let s,i,o,r,n,l,h;for(;e.next();)switch(e.tag()){case 1:s=e.getUInt32();break;case 2:i=e.getBytes();break;case 3:o=e.getUInt32();break;case 4:r=e.getUInt32();break;case 5:n=e.getSInt32();break;case 6:l=e.getSInt32();break;case 7:h=e.getUInt32();break;default:e.skip()}e.release(),s&&(this._metrics[s]={width:o,height:r,left:n,top:l,advance:h},this._bitmaps[s]=i);break}default:t.skip()}t.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}}class T{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,t){this._ranges[e]=t}}class v{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,t){const s=this._getFontStack(e);if(s.getRange(t))return Promise.resolve();const i=256*t,o=i+255;if(this._baseURL){const r=this._baseURL.replace("{fontstack}",e).replace("{range}",i+"-"+o);return a(r,{responseType:"array-buffer"}).then((e=>{s.addRange(t,new I(new c(new Uint8Array(e.data),new DataView(e.data))))})).catch((()=>{s.addRange(t,new I)}))}return s.addRange(t,new I),Promise.resolve()}getGlyph(e,t){const s=this._getFontStack(e);if(!s)return;const i=Math.floor(t/256);if(i>256)return;const o=s.getRange(i);return o?{metrics:o.getMetrics(t),bitmap:o.getBitmap(t)}:void 0}_getFontStack(e){let t=this._glyphInfo[e];return t||(t=this._glyphInfo[e]=new T),t}}class k{constructor(e,t,s=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||t<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=t,s>0&&(this._maxItemSize=s),this._binPack=new P(e-4,t-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,0===this._mosaicsData.length){this._binPack=new P(this._pageWidth-4,this._pageHeight-4);const e=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),s=new Uint32Array(e*t);this._mosaicsData[0]=s,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,t=!1){let s,i,o=this._mosaicRects[e];if(o)return o;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;if(e&&e.startsWith("dasharray-")?([s,i]=this._rasterizeDash(e),t=!0):s=this._sprites.getSpriteInfo(e),!s||!s.width||!s.height||s.width<0||s.height<0)return null;const r=s.width,n=s.height,[l,h,a]=this._allocateImage(r,n);return l.width<=0?null:(this._copy(l,s,h,a,t,i),o={rect:l,width:r,height:n,sdf:s.sdf,simplePattern:!1,pixelRatio:s.pixelRatio,page:h},this._mosaicRects[e]=o,o)}getSpriteItems(e){const t={};for(const s of e)t[s.name]=this.getSpriteItem(s.name,s.repeat);return t}getMosaicItemPosition(e,t){const s=this.getSpriteItem(e,t),i=s&&s.rect;if(!i)return null;i.width=s.width,i.height=s.height;const o=s.width,r=s.height;return{tl:[i.x+2,i.y+2],br:[i.x+2+o,i.y+2+r],page:s.page}}bind(e,t,s=0,i=0){this._textures[s]||(this._textures[s]=new h(e,{pixelFormat:r.RGBA,dataType:n.UNSIGNED_BYTE,wrapMode:l.CLAMP_TO_EDGE,width:this._size[s][0],height:this._size[s][1]},new Uint8Array(this._mosaicsData[s].buffer)));const o=this._textures[s];o.setSamplingMode(t),this._dirties[s]&&o.setData(new Uint8Array(this._mosaicsData[s].buffer)),e.bindTexture(o,i),this._dirties[s]=!1}static _copyBits(e,t,s,i,o,r,n,l,h,a,c){let u=i*t+s,_=l*r+n;if(c){_-=r;for(let n=-1;n<=a;n++,u=((n+a)%a+i)*t+s,_+=r)for(let t=-1;t<=h;t++)o[_+t]=e[u+(t+h)%h]}else for(let s=0;s<a;s++){for(let t=0;t<h;t++)o[_+t]=e[u+t];u+=t,_+=r}}_copy(e,t,s,i,o,r){if(!this._sprites||"loaded"!==this._sprites.loadStatus||s>=this._mosaicsData.length)return;const n=new Uint32Array(r?r.buffer:this._sprites.image.buffer),l=this._mosaicsData[s];l&&n||console.error("Source or target images are uninitialized!");const h=r?t.width:this._sprites.width;k._copyBits(n,h,t.x,t.y,l,i[0],e.x+2,e.y+2,t.width,t.height,o),this._dirties[s]=!0}_allocateImage(e,t){e+=2,t+=2;const s=Math.max(e,t);if(this._maxItemSize&&this._maxItemSize<s){const s=new o(0,0,e,t);return this._mosaicsData.push(new Uint32Array(e*t)),this._dirties.push(!0),this._size.push([e,t]),this._textures.push(void 0),[s,this._mosaicsData.length-1,[e,t]]}let i=e%4?4-e%4:4,r=t%4?4-t%4:4;1===i&&(i=5),1===r&&(r=5);const n=this._binPack.allocate(e+i,t+r);return n.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new P(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,t)):[n,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const t=e.match(/\[(.*?)\]/);if(!t)return null;const s=t[1].split(",").map(Number),i=e.slice(e.lastIndexOf("-")+1),[o,r,n]=u.rasterizeDash(s,i);return[{x:0,y:0,width:r,height:n,sdf:!0,pixelRatio:1},new Uint8Array(o.buffer)]}}function M(e,t,s,i,o,r){e.fillStyle=t,e.fillRect(s,i,o,r)}function A(e,t,s,i,o,r){e.strokeStyle=t,e.strokeRect(s,i,o,r)}function D(e,t){const s=window.COLLISION_XRAY;for(let i=0;i<t.length;++i){const o=!t[i].unique.show;if(s||!o)for(const r of t[i].colliders){if(!r.enabled)continue;const n=!t[i].unique.parts[r.partIndex].show;if(!s&&n)continue;const l=r.xScreen,h=r.yScreen,a=r.dxScreen,c=r.dyScreen;e.globalAlpha=o||n?.2:1,M(e,"green",l-1,h-1,3,3),A(e,"red",l+a,h+c,r.width,r.height),M(e,"blue",l+a-1,h+c-1,3,3),e.globalAlpha=1}}}class C{constructor(e,t,s){this._layer=e,this._styleRepository=t,this.devicePixelRatio=s,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null}destroy(){this._connection&&(this._connection.close(),this._connection=null),this._styleRepository=null,this._layer=null,this._spriteMosaic&&(this._spriteMosaic=null),this._glyphMosaic&&(this._glyphMosaic=null)}get spriteMosaic(){return this._spriteSourcePromise.then((()=>this._spriteMosaic))}get glyphMosaic(){return this._glyphMosaic}async start(e){this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,e),this._spriteSourcePromise.then((e=>{this._spriteMosaic=new k(1024,1024,250),this._spriteMosaic.setSpriteSource(e)}));const t=new v(this._layer.currentStyleInfo.glyphsUrl?s(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new R(1024,1024,t),this._broadcastPromise=i("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then((t=>{this._connection=t,this._connection.broadcast("setStyle",this._layer.currentStyleInfo.style,e)}))}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const t=new k(1024,1024,250);return t.setSpriteSource(e),this._spriteMosaic=t,this._spriteSourcePromise=Promise.resolve(e),t}async setStyle(e,t){await this._broadcastPromise,this._styleRepository=e,this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,null),this._spriteSourcePromise.then((e=>{this._spriteMosaic=new k(1024,1024,250),this._spriteMosaic.setSpriteSource(e)}));const i=new v(this._layer.currentStyleInfo.glyphsUrl?s(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new R(1024,1024,i),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",t)),this._broadcastPromise}fetchTileData(e,t){return this._getRefKeys(e,t).then((e=>{const s=this._layer.sourceNameToSource,i=[];for(const e in s)i.push(e);return this._getSourcesData(i,e,t)}))}parseTileData(e,t){const s=e&&e.data;if(!s)return Promise.resolve(null);const{sourceName2DataAndRefKey:i,transferList:o}=s;return 0===Object.keys(i).length?Promise.resolve(null):this._broadcastPromise.then((()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:i,styleLayerUIDs:e.styleLayerUIDs},{...t,transferList:o})))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}perfReport({key:e,milliseconds:t}){!function(e,t,s){if(!window.PERFORMANCE_RECORDING_STORAGE)return;const i=window.PERFORMANCE_RECORDING_STORAGE;i.perf=i.perf||{};const o=i.perf;o[e]=o[e]||{start:null,time:0,min:void 0,max:void 0,samples:[],unit:"ms"},o[e].time+=t,o[e].samples.push(t),(null==o[e].min||t<o[e].min)&&(o[e].min=t),(null==o[e].max||t>o[e].max)&&(o[e].max=t)}(e,t)}async _getTilePayload(t,s,i){const o=_.pool.acquire(t.id),r=this._layer.sourceNameToSource[s],{level:n,row:l,col:h}=o;_.pool.release(o);try{return{protobuff:await r.requestTile(n,l,h,i),sourceName:s}}catch(t){if(e(t))throw t;return{protobuff:null,sourceName:s}}}_getRefKeys(e,s){const i=this._layer.sourceNameToSource,o=new Array;for(const t in i){const r=i[t].getRefKey(e,s);o.push(r)}return t(o)}_getSourcesData(e,s,i){const o=[];for(let t=0;t<s.length;t++)if(null==s[t].value||null==e[t])o.push(null);else{const r=this._getTilePayload(s[t].value,e[t],i);o.push(r)}return t(o).then((e=>{const t={},i=[];for(let o=0;o<e.length;o++)if(e[o].value&&e[o].value&&e[o].value.protobuff&&e[o].value.protobuff.byteLength>0){const r=s[o].value.id;t[e[o].value.sourceName]={refKey:r,protobuff:e[o].value.protobuff},i.push(e[o].value.protobuff)}return{sourceName2DataAndRefKey:t,transferList:i}}))}}function L(e,t,s,i,o,r){const{iconRotationAlignment:n,textRotationAlignment:l,iconTranslate:h,iconTranslateAnchor:a,textTranslate:c,textTranslateAnchor:u}=i;let _=0;for(const i of e.colliders){const[e,y]=0===i.partIndex?h:c,f=0===i.partIndex?a:u,g=i.minLod<=r&&r<=i.maxLod;_+=g?0:1,i.enabled=g,i.xScreen=i.xTile*o[0]+i.yTile*o[3]+o[6],i.yScreen=i.xTile*o[1]+i.yTile*o[4]+o[7],f===w.MAP?(i.xScreen+=s*e-t*y,i.yScreen+=t*e+s*y):(i.xScreen+=e,i.yScreen+=y),b.VIEWPORT===(0===i.partIndex?n:l)?(i.dxScreen=i.dxPixels,i.dyScreen=i.dyPixels):(i.dxScreen=s*(i.dxPixels+i.width/2)-t*(i.dyPixels+i.height/2)-i.width/2,i.dyScreen=t*(i.dxPixels+i.width/2)+s*(i.dyPixels+i.height/2)-i.height/2)}e.colliders.length>0&&_===e.colliders.length&&(e.unique.show=!1)}class U{constructor(e,t,s,i,o,r){this._symbols=e,this._styleRepository=i,this._zoom=o,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new p(t,s,f),this._si=Math.sin(Math.PI*r/180),this._co=Math.cos(Math.PI*r/180);for(const t of e)for(const e of t.symbols)this._allNeededMatrices.has(e.tile)||this._allNeededMatrices.set(e.tile,y(e.tile.transforms.tileUnitsToPixels))}work(e){const t=this._gridIndex;function s(e){const s=e.xScreen+e.dxScreen,i=e.yScreen+e.dyScreen,o=s+e.width,r=i+e.height,[n,l,h,a]=t.getCellSpan(s,i,o,r);for(let e=l;e<=a;e++)for(let l=n;l<=h;l++){const n=t.cells[e][l];for(const e of n){const t=e.xScreen+e.dxScreen,n=e.yScreen+e.dyScreen,l=t+e.width,h=n+e.height;if(!(o<t||s>l||r<n||i>h))return!0}}return!1}const i=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const t=this._symbols[this._currentLayerCursor],o=this._getProperties(t.styleLayerUID);for(;this._currentSymbolCursor<t.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-i>e)return!1;const r=t.symbols[this._currentSymbolCursor];if(!r.unique.show)continue;L(r,this._si,this._co,o,this._allNeededMatrices.get(r.tile),this._zoom);const n=r.unique;if(!n.show)continue;const{iconAllowOverlap:l,iconIgnorePlacement:h,textAllowOverlap:a,textIgnorePlacement:c}=o;for(const e of r.colliders){if(!e.enabled)continue;const t=n.parts[e.partIndex];t.show&&!(e.partIndex?a:l)&&s(e)&&(e.hard?n.show=!1:t.show=!1)}if(n.show)for(const e of r.colliders){if(!e.enabled)continue;if(e.partIndex?c:h)continue;if(!n.parts[e.partIndex].show)continue;const t=e.xScreen+e.dxScreen,s=e.yScreen+e.dyScreen,i=t+e.width,o=s+e.height,[r,l,a,u]=this._gridIndex.getCellSpan(t,s,i,o);for(let t=l;t<=u;t++)for(let s=r;s<=a;s++)this._gridIndex.cells[t][s].push(e)}}}return!0}_getProperties(e){const t=this._styleProps.get(e);if(t)return t;const s=this._zoom,i=this._styleRepository.getStyleLayerByUID(e),o=i.getLayoutValue("symbol-placement",s)!==m.POINT;let r=i.getLayoutValue("icon-rotation-alignment",s);r===b.AUTO&&(r=o?b.MAP:b.VIEWPORT);let n=i.getLayoutValue("text-rotation-alignment",s);n===b.AUTO&&(n=o?b.MAP:b.VIEWPORT);const l=i.getPaintValue("icon-translate",s),h=i.getPaintValue("icon-translate-anchor",s),a=i.getPaintValue("text-translate",s),c=i.getPaintValue("text-translate-anchor",s),u={iconAllowOverlap:i.getLayoutValue("icon-allow-overlap",s),iconIgnorePlacement:i.getLayoutValue("icon-ignore-placement",s),textAllowOverlap:i.getLayoutValue("text-allow-overlap",s),textIgnorePlacement:i.getLayoutValue("text-ignore-placement",s),iconRotationAlignment:r,textRotationAlignment:n,iconTranslateAnchor:h,iconTranslate:l,textTranslateAnchor:c,textTranslate:a};return this._styleProps.set(e,u),u}}function q(e,t){if(e.priority-t.priority)return e.priority-t.priority;const s=e.tile.key,i=t.tile.key;return s.world-i.world?s.world-i.world:s.level-i.level?s.level-i.level:s.row-i.row?s.row-i.row:s.col-i.col?s.col-i.col:e.xTile-t.xTile?e.xTile-t.xTile:e.yTile-t.yTile}class J{constructor(e,t,s,i,o,r){this._visibleTiles=e,this._symbolRepository=t,this._createCollisionJob=s,this._assignTileSymbolsOpacity=i,this._symbolLayerSorter=o,this._isLayerVisible=r,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}get running(){return this._running}setScreenSize(e,t){this._screenWidth===e&&this._screenHeight===t||this.restart(),this._screenWidth=e,this._screenHeight=t}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const t=performance.now();if(!this._selectionJob.work(e))return!1;if(this._selectionJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-t))))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const t=performance.now();if(!this._collisionJob.work(e))return!1;if(this._collisionJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-t))))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const t=performance.now();if(!this._opacityJob.work(e))return!1;if(this._opacityJobCompleted=!0,0===(e=Math.max(0,e-(performance.now()-t))))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let t=0;t<e.length;t++){const s=e[t];for(let e=0;e<s.uniqueSymbols.length;e++){const t=s.uniqueSymbols[e];for(const e of t.tileSymbols)e.selectedForRendering=!1}}const t=[];let s=0,i=0;const o=this._isLayerVisible,r=this._symbolLayerSorter;return{work:function(r){let n;const l=performance.now();for(;i<e.length;i++,s=0){const h=e[i],a=h.styleLayerUID;if(!o(a)){t[i]||(t[i]={styleLayerUID:a,symbols:[]});continue}t[i]=t[i]||{styleLayerUID:a,symbols:[]};const c=t[i];for(;s<h.uniqueSymbols.length;s++){if(n=h.uniqueSymbols[s],s%100==99&&performance.now()-l>r)return!1;let e=null,t=!1,i=!1;for(const s of n.tileSymbols)if(!i||!t){const o=s.tile;(!e||o.isCoverage||o.neededForCoverage&&!t)&&(e=s,(o.neededForCoverage||o.isCoverage)&&(i=!0),o.isCoverage&&(t=!0))}if(e.selectedForRendering=!0,i){c.symbols.push(e),n.show=!0;for(const e of n.parts)e.show=!0}else n.show=!1}}for(const e of t)e.symbols.sort(q);return!0},get sortedSymbols(){return t.sort(r)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,t=this._visibleTiles;let s=0;function i(t,s){const o=t.symbols;for(const[e,t]of o)z(t,s);e(t,s);for(const e of t.childrenTiles)i(e,s)}return{work(e){const o=performance.now();for(;s<t.length;s++){if(performance.now()-o>e)return!1;const r=t[s];S(r.parentTile)||i(r,performance.now())}return!0}}}}function z(e,t){for(const s of e){const e=s.unique;for(const s of e.parts){const i=s.targetOpacity>.5?1:-1;s.startOpacity+=i*((t-s.startTime)/g),s.startOpacity=Math.min(Math.max(s.startOpacity,0),1),s.startTime=t,s.targetOpacity=e.show&&s.show?1:0}}}class O{constructor(e,t,s){this.tileCoordRange=e,this._visibleTiles=t,this._createUnique=s,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return x(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,t){this._uniqueSymbolLayerArray=null;let s=this._tiles.get(e.id);s||(s={symbols:new Map},this._tiles.set(e.id,s));const i=new Map;if(t)for(const e of t)s.symbols.has(e)&&(i.set(e,s.symbols.get(e)),s.symbols.delete(e));else for(const[t,o]of e.layerData)s.symbols.has(t)&&(i.set(t,s.symbols.get(t)),s.symbols.delete(t));this._removeSymbols(i);const o=e.symbols,r=new Map;for(const[e,t]of o){let i=t.length;if(i>=32){let o=this.tileCoordRange;do{o/=2,i/=4}while(i>8&&o>64);const n=new p(this.tileCoordRange,this.tileCoordRange,o);r.set(e,{flat:t,index:n}),s.symbols.set(e,{flat:t,index:n});for(const e of t)n.getCell(e.xTile,e.yTile).push(e)}else r.set(e,{flat:t}),s.symbols.set(e,{flat:t})}this._addSymbols(e.key,o)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[t,s]of this._tiles){const i=new Map;for(const t of e)s.symbols.has(t)&&(i.set(t,s.symbols.get(t)),s.symbols.delete(t));this._removeSymbols(i),0===s.symbols.size&&this._tiles.delete(t)}}removeTile(e){this._uniqueSymbolLayerArray=null;const t=this._tiles.get(e.id);if(!t)return;const s=new Map;for(const[i,o]of e.symbols)t.symbols.has(i)&&(s.set(i,t.symbols.get(i)),t.symbols.delete(i));this._removeSymbols(s),0===t.symbols.size&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[t,{flat:s}]of e)for(const e of s){const s=e.unique,i=s.tileSymbols,o=i.length-1;for(let t=0;t<o;t++)if(i[t]===e){i[t]=i[o];break}if(i.length=o,0===o){const e=this._uniqueSymbolsReferences.get(t);e.delete(s),0===e.size&&this._uniqueSymbolsReferences.delete(t)}e.unique=null}}_addSymbols(e,t){if(0===t.size)return;const s=this._visibleTiles;for(const i of s)i.parentTile||i.key.world!==e.world||i.key.level===e.level&&!i.key.equals(e)||this._matchSymbols(i,e,t);for(const[e,s]of t)for(const t of s)if(x(t.unique)){const s=this._createUnique();t.unique=s,s.tileSymbols.push(t);let i=this._uniqueSymbolsReferences.get(e);i||(i=new Set,this._uniqueSymbolsReferences.set(e,i)),i.add(s)}}_matchSymbols(e,t,s){if(e.key.level>t.level){const s=e.key.level-t.level;if(e.key.row>>s!==t.row||e.key.col>>s!==t.col)return}if(t.level>e.key.level){const s=t.level-e.key.level;if(t.row>>s!==e.key.row||t.col>>s!==e.key.col)return}if(t.equals(e.key)){for(const i of e.childrenTiles)this._matchSymbols(i,t,s);return}const i=new Map;for(const[o,r]of s){const s=[];for(const i of r){const o=d(this.tileCoordRange,i.xTile,t.level,t.col,e.key.level,e.key.col),r=d(this.tileCoordRange,i.yTile,t.level,t.row,e.key.level,e.key.row);o>=0&&o<this.tileCoordRange&&r>=0&&r<this.tileCoordRange&&s.push({symbol:i,xTransformed:o,yTransformed:r})}const n=[],l=e.key.level<t.level?1:1<<e.key.level-t.level,h=this._tiles.get(e.id).symbols.get(o);if(h){const e=h.flat;for(const t of s){let s,i=!1;const o=t.xTransformed,r=t.yTransformed;s=S(h.index)?h.index.getCell(o,r):e;const a=t.symbol,c=a.hash;for(const e of s)if(c===e.hash&&Math.abs(o-e.xTile)<=l&&Math.abs(r-e.yTile)<=l){const t=e.unique;a.unique=t,t.tileSymbols.push(a),i=!0;break}i||n.push(a)}}n.length>0&&i.set(o,n)}for(const s of e.childrenTiles)this._matchSymbols(s,t,i)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,t=new Array(e.size);let s,i=0;for(const[o,r]of e){const e=new Array(r.size);s=0;for(const t of r)e[s++]=t;t[i]={styleLayerUID:o,uniqueSymbols:e},i++}return t}}export{U as C,O as S,C as T,J as a,D as d};