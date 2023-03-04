// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../../geometry/support/aaBoundingRect"],function(f,h){let k=function(){function d(a,b,c,e=null){this.lij=[0,0,0];this.extent=h.create();this.loadPriority=this.resolution=0;this.measures={visibility:f.Visibility.VISIBLE_ON_SURFACE,screenRect:h.create(),distance:0,shouldSplit:!1};this.used=!1;e&&this.acquire(a,b,c,e)}var g=d.prototype;g.acquire=function(a,b,c,e){this.tilingScheme=e;this.id=d.id(a,b,c);this.lij[0]=a;this.lij[1]=b;this.lij[2]=c;e.getExtent(a,b,c,this.extent);
this.resolution=e.resolutionAtLevel(a)};g.release=function(){this.tilingScheme=null};g.getChildren=function(a){const b=this.lij[0]+1,c=2*this.lij[1],e=2*this.lij[2];if(!a)return[new d(b,c,e,this.tilingScheme),new d(b,c+1,e,this.tilingScheme),new d(b,c,e+1,this.tilingScheme),new d(b,c+1,e+1,this.tilingScheme)];a[0].acquire(b,c,e,this.tilingScheme);a[1].acquire(b,c+1,e,this.tilingScheme);a[2].acquire(b,c,e+1,this.tilingScheme);a[3].acquire(b,c+1,e+1,this.tilingScheme);return a};g.copyMeasurementsFrom=
function(a){this.measures.visibility=a.measures.visibility;this.measures.shouldSplit=a.measures.shouldSplit;this.measures.distance=a.measures.distance;h.copy(a.measures.screenRect,this.measures.screenRect)};d.id=function(a,b,c){return`${a}/${b}/${c}`};return d}();f.Visibility=void 0;(function(d){d[d.INVISIBLE=0]="INVISIBLE";d[d.VISIBLE_WHEN_EXTENDED=1]="VISIBLE_WHEN_EXTENDED";d[d.VISIBLE_ON_SURFACE=2]="VISIBLE_ON_SURFACE"})(f.Visibility||(f.Visibility={}));f.FeatureTileDescriptor3D=k;Object.defineProperties(f,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});