// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderModules/interfaces ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../../../../chunks/Heatmap.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(n,e,f,g,p,d,q,r,t,u,v,l){g=function(c){function a(){var b=c.apply(this,arguments)||this;b.colorRamp=null;b.densityMap=null;
b.searchRadius=1;b.fieldTotal=0;b.minDensity=0;b.maxDensity=100;return b}f._inheritsLoose(a,c);return a}(g.NoParameters);d=function(c){function a(h,k){var m;return m=c.call(this,h,k,()=>m.destroy())||this}f._inheritsLoose(a,c);var b=a.prototype;b.initializeProgram=function(h){const k=a.shader.get().build();return new t.Program(h.rctx,k,q.Default3D)};b.initializePipeline=function(){return l.makePipelineState({blending:r.blendingDefault,colorWrite:l.defaultColorWriteParams,depthTest:null,depthWrite:null})};
f._createClass(a,[{key:"primitiveType",get:function(){return v.PrimitiveType.TRIANGLE_STRIP}}]);return a}(d.ShaderTechnique);d.shader=new p.ReloadableShaderModule(u.HeatmapShader,()=>new Promise((c,a)=>n(["./Heatmap.glsl"],c,a)));e.HeatmapPassParameters=g;e.HeatmapTechnique=d;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});