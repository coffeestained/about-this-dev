// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../core/shaderLibrary/ShaderOutputOptions ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/basicInterfaces ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/VertexAttribute ../materials/DefaultTechniqueConfiguration ../materials/PatternStyle ../../../../chunks/Pattern.glsl ../../../webgl/renderState".split(" "),
function(y,n,w,c,p,a,q,d,k,m,z,u,r,A,B,C,t){q=function(g){function e(){return g.apply(this,arguments)||this}w._inheritsLoose(e,g);var b=e.prototype;b.initializeProgram=function(f){const l=e.shader.get().build(this.configuration);return new z.Program(f.rctx,l,x)};b._setPipelineState=function(f,l){const h=this.configuration,v=f===k.TransparencyPassType.NONE,D=f===k.TransparencyPassType.FrontFace;return t.makePipelineState({blending:h.output===p.ShaderOutput.Color||h.output===p.ShaderOutput.Alpha?v?
m.blendingDefault:m.oitBlending(f):null,culling:t.cullingParams(h.cullFace),depthTest:{func:m.oitDepthTest(f)},depthWrite:v?h.writeDepth&&t.defaultDepthWriteParams:m.oitDepthWrite(f),colorWrite:t.defaultColorWriteParams,stencilWrite:h.hasOccludees?u.stencilWriteMaskOn:null,stencilTest:h.hasOccludees?l?u.stencilToolMaskBaseParams:u.stencilBaseAllZerosParams:null,polygonOffset:v||D?h.polygonOffset&&E:m.getOITPolygonOffset(h.enableOffset)})};b.initializePipeline=function(){this._occludeePipelineState=
this._setPipelineState(this.configuration.transparencyPassType,!0);return this._setPipelineState(this.configuration.transparencyPassType,!1)};b.getPipelineState=function(f,l){return l?this._occludeePipelineState:g.prototype.getPipelineState.call(this,f,l)};return e}(q.ShaderTechnique);q.shader=new a.ReloadableShaderModule(C.Pattern,()=>new Promise((g,e)=>y(["./Pattern.glsl"],g,e)));const E={factor:1,units:1};a=function(g){function e(){var b=g.apply(this,arguments)||this;b.output=p.ShaderOutput.Color;
b.cullFace=k.CullFaceOptions.None;b.transparencyPassType=k.TransparencyPassType.NONE;b.hasSlicePlane=!1;b.hasVertexColors=!1;b.polygonOffset=!1;b.writeDepth=!0;b.hasOccludees=!1;b.enableOffset=!0;b.hasMultipassTerrain=!1;b.cullAboveGround=!1;return b}w._inheritsLoose(e,g);return e}(A.DefaultTechniqueConfiguration);c.__decorate([d.parameter({count:p.ShaderOutput.COUNT})],a.prototype,"output",void 0);c.__decorate([d.parameter({count:k.CullFaceOptions.COUNT})],a.prototype,"cullFace",void 0);c.__decorate([d.parameter({count:B.Style.COUNT})],
a.prototype,"style",void 0);c.__decorate([d.parameter({count:k.TransparencyPassType.COUNT})],a.prototype,"transparencyPassType",void 0);c.__decorate([d.parameter()],a.prototype,"hasSlicePlane",void 0);c.__decorate([d.parameter()],a.prototype,"hasVertexColors",void 0);c.__decorate([d.parameter()],a.prototype,"polygonOffset",void 0);c.__decorate([d.parameter()],a.prototype,"writeDepth",void 0);c.__decorate([d.parameter()],a.prototype,"hasOccludees",void 0);c.__decorate([d.parameter()],a.prototype,"patternSpacing",
void 0);c.__decorate([d.parameter()],a.prototype,"lineWidth",void 0);c.__decorate([d.parameter()],a.prototype,"enableOffset",void 0);c.__decorate([d.parameter()],a.prototype,"draped",void 0);c.__decorate([d.parameter()],a.prototype,"hasMultipassTerrain",void 0);c.__decorate([d.parameter()],a.prototype,"cullAboveGround",void 0);const x=new Map([[r.VertexAttribute.POSITION,0],[r.VertexAttribute.COLOR,3],[r.VertexAttribute.UVMAPSPACE,4],[r.VertexAttribute.BOUNDINGRECT,5]]);n.PatternTechnique=q;n.PatternTechniqueConfiguration=
a;n.patternVertexAttributeLocations=x;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});