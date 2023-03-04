// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","./utils"],function(r,t){function u(a,f,b,d,c,e,g,h,l){if(g.has(d))return l;for(const k of d.properties){const n=f?`${f}.${k.name}`:k.name,p=b?`${b}.${k.name}`:k.name,m=c[p];m?(l.push({name:n,type:"ref",ref:m,refName:e[m[a].id]}),q(a,p,m[a],c,e,h)):"string"===typeof k.type?l.push({name:n,type:k.enum||("string"===typeof k.type?k.type:""),default:JSON.stringify(k.default)}):(g.add(d),u(a,n,p,k.type,c,e,g,h,l))}g.delete(d);return l}function q(a,f,b,d,c,e){if(b.id in e)return e;const g=
{container:b,text:null,props:[]};c[b.id].forEach(h=>e[h]=g);u(a,"",f,b,d,c,new Set,e,g.props);g.props.sort(v);return e}function v(a,f){var b=a.name.localeCompare(f.name);if(0!==b)return b;b=(a.type||"").localeCompare(f.type||"");return 0!==b?b:(a.default||"").localeCompare(f.default||"")}r.collect=function(a){var f=t.collectClassPaths(a.api);var b=t.collectClassPaths(a.spec);var d={};d[""]={api:a.api,spec:a.spec};for(var c in f){var e=b[c];e&&(d[c]={api:f[c],spec:e})}b=d;f=[];d={api:{},spec:{}};for(var g in b){c=
b[g];e=`${c.api.name} (${c.spec.name})${c.api.typeValue?` <${c.api.typeValue}>`:""}`;var h=d.api[c.api.id];h||(h=new Set,d.api[c.api.id]=h);h.add(e);h=d.spec[c.spec.id];h||(h=new Set,d.spec[c.spec.id]=h);h.add(e)}c=d;g={};q("api","",a.api,b,c.api,g);d={};q("spec","",a.spec,b,c.spec,d);a={};for(l in b)c=l?l.split(".").length:0,e=b[l].api.id,a[e]=e in a?Math.min(c,a[e]):c;var l=a;for(const k in g)a=g[k],b=d[k],f.push({name:`${a.container.name} (${b.container.name})${a.container.typeValue?` <${a.container.typeValue}>`:
""}`,api:a,spec:b,indent:l[a.container.id]});return f};Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});