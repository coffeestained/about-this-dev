"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4489],{52182:(e,t,n)=>{n.d(t,{a:()=>W,b:()=>Z,c:()=>T,d:()=>j,e:()=>z,f:()=>M,g:()=>N,l:()=>C,p:()=>b,r:()=>x,s:()=>Y}),n(74569);var i,r,o=n(60991),s=n(71252),a=n(53785),f=n(12381),l=n(1623),c=n(21801),u=n(44567),p=n(91597),h=n(60947);function x(e,t,n){return!(0,l.Up)(e,t,n)}function m(e,t,n){const i=x(e,t,n);if(i&&!(0,l.kR)())throw new o.Z("rasterprojectionhelper-project","projection engine is not loaded");return i}(r=i||(i={}))[r.None=0]="None",r[r.North=1]="North",r[r.South=2]="South",r[r.Both=3]="Both";const y=(e,t,n,i=0)=>{if(1===n[0])return[0,0];let r=1,o=-1,s=1,a=-1;for(let t=0;t<e.length;t+=2)isNaN(e[t])||(r=r>e[t]?e[t]:r,o=o>e[t]?o:e[t],s=s>e[t+1]?e[t+1]:s,a=a>e[t+1]?a:e[t+1]);const{cols:f,rows:l}=t,c=(o-r)/f/n[0],u=(a-s)/l/n[1],p=2*i;let h=0,x=!1,m=[0,0];for(let t=0;t<f-3;t++){for(let n=0;n<l-3;n++){const i=t*l*2+2*n,r=(e[i]+e[i+4]+e[i+4*l]+e[i+4*l+4])/4,o=(e[i+1]+e[i+5]+e[i+4*l+1]+e[i+4*l+5])/4,s=Math.abs((r-e[i+2*l+2])/c),a=Math.abs((o-e[i+2*l+3])/u);if(s+a>h&&(h=s+a,m=[s,a]),p&&h>p){x=!0;break}}if(x)break}return m},g={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},d=new Map,w=new Map;async function C(){if((0,l.kR)())return null;await(0,l.zD)()}function M(e,t,n,i=null){const r=e.spatialReference;if(r.equals(t))return e;m(r,t,i);const o=n.center,f=new c.Z({xmin:o.x-e.x/2,xmax:o.x+e.x/2,ymin:o.y-e.y/2,ymax:o.y+e.y/2,spatialReference:r}),u=(0,l.iV)(f,t,i),p=N(t);let h;if((0,s.a)(u)||(0,s.i)(p)&&u.width>=p){const n=(0,a.f)(r)/(0,a.f)(t);h={x:e.x*n,y:e.y*n}}else h={x:u.width,y:u.height};return h}function R(e,t=.01){return(0,a.f)(e)?t/(0,a.f)(e):0}function b(e,t,n=null,i=!0){const r=e.spatialReference;if(r.equals(t))return e;m(r,t,n);const o=(0,l.iV)(e,t,n);if(!i||!o)return o;const a=E(r,!0),f=E(t,!0),c=R(r);return c&&(0,s.i)(a)&&(0,s.i)(f)&&(o.x>0&&Math.abs(e.x-a[0])<c?o.x-=f[1]-f[0]:o.x<0&&Math.abs(e.x-a[1])<c&&(o.x+=f[1]-f[0])),o}function P(e){const{inSR:t,outSR:n,datumTransformation:i}=e,r=v(t),{points:o,mask:a}=_(e,r);if(!t.isGeographic){const e=t.wkid?f.e.coordsys(t.wkid):f.e.fromString(t.isGeographic?f.f.PE_TYPE_GEOGCS:f.f.PE_TYPE_PROJCS,t.wkt);f.g.projToGeog(e,o.length,o)}if((0,s.i)(i)&&i.steps.length&&i.steps.forEach((e=>{const t=e.wkid?f.e.geogtran(e.wkid):f.e.fromString(f.f.PE_TYPE_GEOGTRAN,e.wkt);f.h.geogToGeog(t,o.length,o,null,e.isInverse?f.f.PE_TRANSFORM_2_TO_1:f.f.PE_TRANSFORM_1_TO_2)})),!n.isGeographic){const e=v(n,!0),t=(0,s.i)(e)&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,t){const[n,i]=t;for(let t=0;t<e.length;t++){const r=e[t][1];(r<n||r>i)&&(e[t]=[NaN,NaN])}}(o,t);const i=n.wkid?f.e.coordsys(n.wkid):f.e.fromString(n.isGeographic?f.f.PE_TYPE_GEOGCS:f.f.PE_TYPE_PROJCS,n.wkt);f.g.geogToProj(i,o.length,o)}let l=o;if(a&&o.length!==a.length){l=[];for(let e=0,t=0;e<a.length;e++)a[e]?l.push(o[t++]):l.push([NaN,NaN])}return l}function v(e,t=!1){let n=e.wkid||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),d.has(n)){const e=d.get(n);return t?e?.gcs:e?.pcs}const i=e.wkid?f.e.coordsys(e.wkid):f.e.fromString(e.isGeographic?f.f.PE_TYPE_GEOGCS:f.f.PE_TYPE_PROJCS,e.wkt),r=S(i,R(e,1e-4)),o=S(i,0,!0);return d.set(n,{pcs:r,gcs:o}),t?o:r}function S(e,t=0,n=!1){const i=f.j.generate(e),r=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!r?.length)return null;let o=!1,s=r.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!s){if(s=r.find((e=>1===e.getInclusive()&&0===e.getKind())),!s)return null;o=!0}const a=n?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),l=i.isPannableRectangle(),c=s.getCoord();if(o)return{isEnvelope:o,isPannable:l,vertices:c,coef:null,bbox:[c[0][0]-t,c[0][1]-t,c[1][0]+t,c[1][1]+t],poleLocation:a};let u=0;const p=[];let[h,x]=c[0],[m,y]=c[0];for(let e=0,t=c.length;e<t;e++){u++,u===t&&(u=0);const[n,i]=c[e],[r,o]=c[u];if(o===i)p.push([n,r,i,o,2]);else{const e=(r-n)/(o-i||1e-4),t=n-e*i;i<o?p.push([e,t,i,o,0]):p.push([e,t,o,i,1])}h=h<n?h:n,x=x<i?x:i,m=m>n?m:n,y=y>i?y:i}return{isEnvelope:!1,isPannable:l,vertices:c,coef:p,bbox:[h,x,m,y],poleLocation:a}}function _(e,t){const n=[],{cols:i,rows:r,xres:o,yres:a,usePixelCenter:f}=e;let{xmin:l,ymax:c}=e;if(f&&(l+=o/2,c-=a/2),(0,s.a)(t)){for(let e=0;e<i;e++)for(let t=0;t<r;t++)n.push([l+o*e,c-a*t]);return{points:n}}const u=new Uint8Array(i*r);if(t.isEnvelope){const{bbox:[e,s,f,p]}=t;for(let h=0,x=0;h<i;h++){const i=l+o*h,m=t.isPannable||i>=e&&i<=f;for(let e=0;e<r;e++,x++){const t=c-a*e;m&&t>=s&&t<=p&&(n.push([i,t]),u[x]=1)}}return{points:n,mask:u}}const{coef:p}=t,h=[];for(let e=0;e<r;e++){const t=c-a*e,n=[],i=[];for(let e=0;e<p.length;e++){const[r,o,s,a,f]=p[e];if(t===s&&s===a)n.push(r),n.push(o),i.push(2),i.push(2);else if(t>=s&&t<=a){const e=r*t+o;n.push(e),i.push(f)}}let r=n;if(n.length>2){let e=2===i[0]?0:i[0],t=n[0];r=[];for(let o=1;o<i.length;o++)2===i[o]&&o!==i.length-1||(i[o]!==e&&(r.push(0===e?Math.min(t,n[o-1]):Math.max(t,n[o-1])),e=i[o],t=n[o]),o===i.length-1&&r.push(0===i[o]?Math.min(t,n[o]):Math.max(t,n[o])));r.sort(((e,t)=>e-t))}else n[0]>n[1]&&(r=[n[1],n[0]]);h.push(r)}for(let e=0,t=0;e<i;e++){const i=l+o*e;for(let e=0;e<r;e++,t++){const r=c-a*e,o=h[e];if(2===o.length)i>=o[0]&&i<=o[1]&&(n.push([i,r]),u[t]=1);else if(o.length>2){let e=!1;for(let t=0;t<o.length;t+=2)if(i>=o[t]&&i<=o[t+1]){e=!0;break}e&&(n.push([i,r]),u[t]=1)}}}return{points:n,mask:u}}function k(e){const t=N(e[0].spatialReference);if(e.length<2||(0,s.a)(t))return e[0];let{xmin:n,xmax:i,ymin:r,ymax:o}=e[0];for(let n=1;n<e.length;n++){const s=e[n];i=s.xmax+t*n,r=Math.min(r,s.ymin),o=Math.max(o,s.ymax)}return new c.Z({xmin:n,xmax:i,ymin:r,ymax:o,spatialReference:e[0].spatialReference})}function T(e,t,n=null,r=!0){const o=e.spatialReference;if(o.equals(t))return e;const a=Z(e),f=N(o,!0),p=N(t);if(0===a||(0,s.a)(f)||(0,s.a)(p)){const a=G(e,t,n,r);if((0,s.a)(f)&&(0,s.i)(p)&&Math.abs(a.width-p)<R(t)&&(0,l.kR)()){const n=v(o);if((0,s.i)(n)&&n.poleLocation===i.None&&e.width<(n.bbox[2]-n.bbox[0])/2)return function(e,t){const n=N(t);if((0,s.a)(n))return null;let{xmin:i,ymin:r,xmax:o,ymax:a}=e;const f=e.spatialReference,p=new u.Z({spatialReference:f,rings:[[[i,r],[o,r],[o,a],[i,a],[i,r]]]}),h=(0,l.iV)(p,t);if(2!==h.rings.length||!h.rings[0].length||!h.rings[1].length)return null;const{rings:x}=h,m=R(f),y=new c.Z({spatialReference:t});for(let e=0;e<2;e++){i=o=x[e][0][0],r=a=x[e][0][1];for(let t=0;t<x[e].length;t++)i=i>x[e][t][0]?x[e][t][0]:i,o=o<x[e][t][0]?x[e][t][0]:o,r=r>x[e][t][1]?x[e][t][1]:r,a=a<x[e][t][1]?x[e][t][1]:a;if(0===e)y.ymin=r,y.ymax=a,y.xmin=i,y.xmax=o;else if(y.ymin=Math.min(y.ymin,r),y.ymax=Math.max(y.ymax,a),Math.abs(o-n/2)<m)y.xmin=i,y.xmax=y.xmax+n;else{if(!(Math.abs(i+n/2)<m))return null;y.xmax=o+n}}return y}(e,t)||a}return a}const h=e.clone().normalize();if(1===h.length&&e.xmax<f&&e.xmax-f/2>R(o)){const{xmin:t,xmax:n}=e;for(let i=0;i<=a;i++){const r=0===i?t:-f/2,s=i===a?n-f*i:f/2;h[i]=new c.Z({xmin:r,xmax:s,ymin:e.ymin,ymax:e.ymax,spatialReference:o})}}return k(h.map((e=>G(e,t,n,r))).filter((e=>!!e)))}function G(e,t,n=null,i=!0,r=!0){const o=e.spatialReference;if(o.equals(t))return e;m(o,t,n);const a=(0,l.iV)(e,t,n);if(r&&t.isWebMercator&&a&&(a.ymax=Math.min(20037508.342787,a.ymax),a.ymin=Math.max(-20037508.342787,a.ymin),a.ymin>=a.ymax))return null;if(!i||!a)return a;const f=E(o,!0),c=E(t,!0);if((0,s.a)(f)||(0,s.a)(c))return a;const u=R(o,.001),h=R(o,500),x=R(t,.001);if(Math.abs(a.xmin-c[0])<x&&Math.abs(a.xmax-c[1])<x){const i=Math.abs(e.xmin-f[0]),r=Math.abs(f[1]-e.xmax);if(i<u&&r>h){a.xmin=c[0];const i=[];i.push(new p.Z(e.xmax,e.ymin,o)),i.push(new p.Z(e.xmax,(e.ymin+e.ymax)/2,o)),i.push(new p.Z(e.xmax,e.ymax,o));const r=i.map((e=>b(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));a.xmax=Math.max.apply(null,r)}if(r<u&&i>h){a.xmax=c[1];const i=[];i.push(new p.Z(e.xmin,e.ymin,o)),i.push(new p.Z(e.xmin,(e.ymin+e.ymax)/2,o)),i.push(new p.Z(e.xmin,e.ymax,o));const r=i.map((e=>b(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));a.xmin=Math.min.apply(null,r)}}else{const e=R(t,.001);Math.abs(a.xmin-c[0])<e&&(a.xmin=c[0]),Math.abs(a.xmax-c[1])<e&&(a.xmax=c[1])}return a}function N(e,t=!1){const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*g[e.wkid]||null}function E(e,t=!1){if(e.isGeographic)return[-180,180];const n=N(e,t);return(0,s.i)(n)?[-n/2,n/2]:null}function O(e,t,n,i){let r=(e-t)/n;return r-Math.floor(r)!=0?r=Math.floor(r):i&&(r-=1),r}function Z(e,t=!1){const n=N(e.spatialReference);if((0,s.a)(n))return 0;const i=t?0:-n/2,r=R(e.spatialReference),o=!t&&Math.abs(e.xmax-n/2)<r?n/2:e.xmax,a=!t&&Math.abs(e.xmin+n/2)<r?-n/2:e.xmin;return O(o,i,n,!0)-O(a,i,n,!1)}function z(e){const t=e.storageInfo.origin.x,n=N(e.spatialReference,!0);if((0,s.a)(n))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const i=n/2,{nativePixelSize:r,storageInfo:o,extent:a}=e,{maximumPyramidLevel:f,blockWidth:l,pyramidScalingFactor:c}=o;let u=r.x;const p=[],h=(0,s.i)(e.transform)&&"gcs-shift"===e.transform.type,x=t+(h?0:i),m=h?n-t:i-t;for(let e=0;e<=f;e++){const e=(a.xmax-t)/u/l,n=e-Math.floor(e)==0?e:Math.ceil(e),i=m/u/l,r=i-Math.floor(i)==0?i:Math.ceil(i),o=Math.floor(x/u/l),s=Math.round(x/u)%l,f=(l-Math.round(m/u)%l)%l;p.push({resolutionX:u,blockWidth:l,datsetColumnCount:n,worldColumnCountFromOrigin:r,leftMargin:s,rightPadding:f,originColumnOffset:o}),u*=c}return{originX:t,halfWorldWidth:i,pyramidsInfo:p,hasGCSSShiftTransform:h}}function j(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[32,32],i=I(e),r={cols:i.size[0]+1,rows:i.size[1]+1};const o=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let a=i.outofBoundPointCount===i.offsets.length/2||t&&o?[0,0]:y(i.offsets,r,n,4);const l=(a[0]+a[1])/2,c=e.projectedExtent.spatialReference,u=e.srcBufferExtent.spatialReference;if(t&&(o||l>4)&&(x(c,u,e.datumTransformation)&&(c.isGeographic||(0,s.i)(v(c))),n=[4,4],i=I({...e,spacing:n}),r={cols:i.size[0]+1,rows:i.size[1]+1},a=y(i.offsets,r,n,4)),i.error=a,n[0]>1&&(i.coefficients=X(i.offsets,r,o)),e.includeGCSGrid&&!c.isGeographic&&!c.isWebMercator)if(u.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else{const t=v(c);if((0,s.i)(t)&&!t.isEnvelope){const t=function(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt);let n;return w.has(t)?n=w.get(t):(n=(e.wkid?f.e.coordsys(e.wkid):f.e.fromString(f.f.PE_TYPE_PROJCS,e.wkt)).getGeogcs().getCode(),w.set(t,n)),new h.Z({wkid:n})}(c),s=T(e.projectedExtent,t),{offsets:a}=I({...e,srcBufferExtent:s,spacing:n}),l=X(a,r,o);i.gcsGrid={offsets:a,coefficients:l,spacing:n}}}return i}function I(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:i,datumTransformation:r,rasterTransform:o}=e,a=t.spatialReference,f=n.spatialReference,c=m(a,f),{xmin:u,ymin:h,xmax:x,ymax:y}=t,g=N(f),d=(0,s.i)(g)&&(e.hasWrapAround||"gcs-shift"===o?.type),w=e.spacing||[32,32],C=w[0]*i.x,M=w[1]*i.y,b=1===w[0],S=Math.ceil((x-u)/C-.1/w[0])+(b?0:1),k=Math.ceil((y-h)/M-.1/w[1])+(b?0:1),T=function(e){const{inSR:t,outSR:n,datumTransformation:i,preferPE:r}=e;if(t.equals(n)){const{points:t}=_(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return function(e){const{cols:t,rows:n,xres:i,yres:r,usePixelCenter:o,inSR:s,outSR:a}=e;let{xmin:f,ymax:c}=e;o&&(f+=i/2,c-=r/2);const u=[],h=[],x=Math.max(t,n);for(let e=0;e<x;e++){const o=f+i*Math.min(t,e),x=c-r*Math.min(n,e),m=(0,l.iV)(new p.Z({x:o,y:x,spatialReference:s}),a);e<=t&&u.push(m.x),e<=n&&h.push(m.y)}const m=[];for(let e=0;e<t;e++)for(let t=0;t<n;t++)m.push([u[e],h[t]]);return m}(e);if(m(t,n,i)&&r){if(t.isGeographic)return P(e);const n=v(t);if((0,s.i)(n))return P(e)}return function(e){const{points:t}=_(e,null),n=t.map((t=>new p.Z(t[0],t[1],e.inSR)));return(0,l.iV)(n,e.outSR,e.datumTransformation).map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}({cols:S,rows:k,xmin:u,ymax:y,xres:C,yres:M,inSR:a,outSR:f,datumTransformation:r,preferPE:w[0]<=4,usePixelCenter:b}),G=[];let E,O=0;const Z=b?-1:NaN,{xmin:z,xmax:j,ymax:I,width:X,height:W}=n,Y=R(f,500),L=(0,s.i)(g)&&z>0&&j>g/2;let F=!1;if(c){const e=v(a);F=(0,s.i)(e)&&e.poleLocation>0}for(let e=0;e<S;e++){const t=[];for(let n=0;n<k;n++){let i=T[e*k+n];if(d&&i[0]>j&&i[0]>g/2-Y?i[0]-=g:d&&0===e&&i[0]<0&&L&&!o&&(i[0]+=g),!i||isNaN(i[0])||isNaN(i[1]))G.push(Z),G.push(Z),t.push(null),O++;else{if(o){const e=o.inverseTransform(new p.Z({x:i[0],y:i[1],spatialReference:f}));i=[e.x,e.y]}t.push(i),e>0&&d&&E[n]&&i[0]<E[n][0]&&(i[0]+=g,F&&i[0]>j&&i[0]>g&&(i[0]-=g)),G.push((i[0]-z)/X),G.push((I-i[1])/W)}}E=t}return{offsets:G,error:null,coefficients:null,outofBoundPointCount:O,spacing:w,size:b?[S,k]:[S-1,k-1]}}function X(e,t,n){const{cols:i,rows:r}=t,o=new Float32Array((i-1)*(r-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let t=0;t<i-1;t++){for(let n=0;n<r-1;n++){let f=t*r*2+2*n;const l=e[f],c=e[f+1],u=e[f+2],p=e[f+3];f+=2*r;const h=e[f],x=e[f+1],m=e[f+2],y=e[f+3];let g=0,d=12*(n*(i-1)+t);for(let e=0;e<3;e++)o[d++]=s[g++]*l+s[g++]*u+s[g++]*m;g=0;for(let e=0;e<3;e++)o[d++]=s[g++]*c+s[g++]*p+s[g++]*y;g=0;for(let e=0;e<3;e++)o[d++]=a[g++]*l+a[g++]*h+a[g++]*m;g=0;for(let e=0;e<3;e++)o[d++]=a[g++]*c+a[g++]*x+a[g++]*y}if(n)for(let e=0;e<o.length;e++)isNaN(o[e])&&(o[e]=-1)}return o}function W(e){const t=e.clone().normalize();return 1===t.length?t[0]:k(t)}function Y(e,t,n){const{storageInfo:i,pixelSize:r}=t;let o,f=!1;const{pyramidResolutions:l}=i;if((0,s.i)(l)&&l.length){const i=(e.x+e.y)/2,s=l[l.length-1],c=(s.x+s.y)/2,u=(r.x+r.y)/2;if(i<=u)o=0;else if(i>=c)o=l.length,f=i/c>8;else{let e,t=u;for(let r=1;r<=l.length;r++){if(e=(l[r-1].x+l[r-1].y)/2,i<=e){i===e?o=r:"down"===n?(o=r-1,f=i/t>8):o="up"===n||i-t>e-i||i/t>2?r:r-1;break}t=e}}const h=0===o?r:l[o-1];return f&&Math.min(h.x,h.y)*(0,a.f)(t.spatialReference)>19567&&(f=!1),{pyramidLevel:o,pyramidResolution:new p.Z({x:h.x,y:h.y,spatialReference:t.spatialReference}),excessiveReading:f}}const c=Math.log(e.x/r.x)/Math.LN2,u=Math.log(e.y/r.y)/Math.LN2,h=t.storageInfo.maximumPyramidLevel||0;o="down"===n?Math.floor(Math.min(c,u)):"up"===n?Math.ceil(Math.max(c,u)):Math.round((c+u)/2),o<0?o=0:o>h&&(f=o>h+3,o=h);const x=2**o;return{pyramidLevel:o,pyramidResolution:new p.Z({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:f}}},22572:(e,t,n)=>{n.d(t,{G:()=>m,P:()=>M,i:()=>P,r:()=>v});var i=n(29768),r=n(34250),o=(n(76506),n(91306),n(59465)),s=n(17533),a=n(12047),f=(n(92143),n(74569),n(97714)),l=n(2906),c=n(91597),u=n(21801);let p=class extends a.wq{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};(0,i._)([(0,r.Cb)()],p.prototype,"affectsPixelSize",null),(0,i._)([(0,r.Cb)({json:{write:!0}})],p.prototype,"spatialReference",void 0),p=(0,i._)([(0,s.j)("esri.layers.support.rasterTransforms.BaseRasterTransform")],p);const h=p;let x=class extends h{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}};(0,i._)([(0,o.e)({GCSShiftXform:"gcs-shift"})],x.prototype,"type",void 0),(0,i._)([(0,r.Cb)()],x.prototype,"tolerance",void 0),x=(0,i._)([(0,s.j)("esri.layers.support.rasterTransforms.GCSShiftTransform")],x);const m=x;let y=class extends h{constructor(){super(...arguments),this.type="identity"}};(0,i._)([(0,o.e)({IdentityXform:"identity"})],y.prototype,"type",void 0),y=(0,i._)([(0,s.j)("esri.layers.support.rasterTransforms.IdentityTransform")],y);const g=y;function d(e,t,n){const{x:i,y:r}=t;if(n<2)return{x:e[0]+i*e[2]+r*e[4],y:e[1]+i*e[3]+r*e[5]};if(2===n){const t=i*i,n=r*r,o=i*r;return{x:e[0]+i*e[2]+r*e[4]+t*e[6]+o*e[8]+n*e[10],y:e[1]+i*e[3]+r*e[5]+t*e[7]+o*e[9]+n*e[11]}}const o=i*i,s=r*r,a=i*r,f=o*i,l=o*r,c=i*s,u=r*s;return{x:e[0]+i*e[2]+r*e[4]+o*e[6]+a*e[8]+s*e[10]+f*e[12]+l*e[14]+c*e[16]+u*e[18],y:e[1]+i*e[3]+r*e[5]+o*e[7]+a*e[9]+s*e[11]+f*e[13]+l*e[15]+c*e[17]+u*e[19]}}function w(e,t,n){const{xmin:i,ymin:r,xmax:o,ymax:s,spatialReference:a}=t;let f=[];if(n<2)f.push({x:i,y:s}),f.push({x:o,y:s}),f.push({x:i,y:r}),f.push({x:o,y:r});else{let e=10;for(let t=0;t<e;t++)f.push({x:i,y:r+(s-r)*t/(e-1)}),f.push({x:o,y:r+(s-r)*t/(e-1)});e=8;for(let t=1;t<=e;t++)f.push({x:i+(o-i)*t/e,y:r}),f.push({x:i+(o-i)*t/e,y:s})}f=f.map((t=>d(e,t,n)));const l=f.map((e=>e.x)),c=f.map((e=>e.y));return new u.Z({xmin:Math.min.apply(null,l),xmax:Math.max.apply(null,l),ymin:Math.min.apply(null,c),ymax:Math.max.apply(null,c),spatialReference:a})}let C=class extends h{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:n,coeffY:i}=t;if(!n?.length||!i?.length||n.length!==i.length)return null;const r=[];for(let e=0;e<n.length;e++)r.push(n[e]),r.push(i[e]);return r}writeForwardCoefficients(e,t,n){const i=[],r=[];for(let t=0;t<e?.length;t++)t%2==0?i.push(e[t]):r.push(e[t]);t.coeffX=i,t.coeffY=r}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=function(e){const[t,n,i,r,o,s]=e,a=i*s-o*r,f=o*r-i*s;return[(o*n-t*s)/a,(i*n-t*r)/f,s/a,r/f,-o/a,-i/f]}(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:n,inverseCoeffY:i}=t;if(!n?.length||!i?.length||n.length!==i.length)return null;const r=[];for(let e=0;e<n.length;e++)r.push(n[e]),r.push(i[e]);return r}writeInverseCoefficients(e,t,n){const i=[],r=[];for(let t=0;t<e?.length;t++)t%2==0?i.push(e[t]):r.push(e[t]);t.inverseCoeffX=i,t.inverseCoeffY=r}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=d(this.forwardCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return w(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=d(this.inverseCoefficients,e,this.polynomialOrder);return new c.Z({x:t.x,y:t.y,spatialReference:e.spatialReference})}return w(this.inverseCoefficients,e,this.polynomialOrder)}};(0,i._)([(0,r.Cb)({json:{write:!0}})],C.prototype,"polynomialOrder",void 0),(0,i._)([(0,r.Cb)()],C.prototype,"forwardCoefficients",void 0),(0,i._)([(0,f.r)("forwardCoefficients",["coeffX","coeffY"])],C.prototype,"readForwardCoefficients",null),(0,i._)([(0,l.w)("forwardCoefficients")],C.prototype,"writeForwardCoefficients",null),(0,i._)([(0,r.Cb)({json:{write:!0}})],C.prototype,"inverseCoefficients",null),(0,i._)([(0,f.r)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],C.prototype,"readInverseCoefficients",null),(0,i._)([(0,l.w)("inverseCoefficients")],C.prototype,"writeInverseCoefficients",null),(0,i._)([(0,r.Cb)()],C.prototype,"affectsPixelSize",null),(0,i._)([(0,o.e)({PolynomialXform:"polynomial"})],C.prototype,"type",void 0),C=(0,i._)([(0,s.j)("esri.layers.support.rasterTransforms.PolynomialTransform")],C);const M=C,R={GCSShiftXform:m,IdentityXform:g,PolynomialXform:M},b=Object.keys(R);function P(e){const t=e?.type;return!e||b.includes(t)}function v(e){const t=e?.type;if(!t)return null;const n=R[e?.type];if(n){const t=new n;return t.read(e),t}return null}}}]);