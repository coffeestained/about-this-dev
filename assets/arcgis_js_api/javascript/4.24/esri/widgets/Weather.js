// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/memoize ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ../views/3d/environment/weather ./Widget ./support/Heading ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ./Weather/css ./Weather/enums ./Weather/LabeledSlider ./Weather/VisibleElements ./Weather/WeatherViewModel".split(" "),
function(p,u,h,v,z,A,f,J,K,l,B,C,D,E,F,G,c,k,m,n,w,H){const I={sunny:"brightness",cloudy:"partly-cloudy",rainy:"rain",snowy:"snow",foggy:"fog"};f=function(x){function r(d){var a=x.call(this,d)||this;a.viewModel=new H;a.headingLevel=4;a.visibleElements=new w;a.iconClass=k.CSS.widgetIcon;a.label=void 0;a._renderWeatherTypeButton=b=>{const e=a.viewModel,g=a.messages[b].label,y=e.state===m.WeatherState.Disabled,t=!y&&e.current.type===b;return c.tsx("calcite-button",{appearance:t?"solid":"outline","aria-checked":t?
"true":"false",color:t?"blue":"neutral",disabled:y,"icon-start":I[b],key:`${b}-type-button`,label:g,role:"radio",scale:"l",title:g,onclick:()=>{t||e.setWeatherByType(b)}})};a._memoizedCallbacks=z.memoize(b=>({onCloudCoverChange:e=>{"cloudCover"in b&&(b.cloudCover=e)},onPrecipitationChange:e=>{"precipitation"in b&&(b.precipitation=e)},onFogStrengthChange:e=>{"fogStrength"in b&&(b.fogStrength=e)},onSnowCoverChange:e=>{a.viewModel.setSnowCoverEnabled(e.target.checked)}}));return a}u._inheritsLoose(r,
x);var q=r.prototype;q.render=function(){return c.tsx("div",{class:this.classes(k.CSS.base,k.CSS.esriWidget,this.viewModel.state===m.WeatherState.Disabled&&k.CSS.esriWidgetDisabled),role:"region","aria-label":this.messages.widgetLabelAccessible},this._renderContent())};q.loadDependencies=function(){var d=u._asyncToGenerator(function*(){yield Promise.all([new Promise((a,b)=>p(["../chunks/calcite-button"],a,b)),new Promise((a,b)=>p(["../chunks/calcite-checkbox"],a,b)),new Promise((a,b)=>p(["../chunks/calcite-icon"],
a,b)),new Promise((a,b)=>p(["../chunks/calcite-label"],a,b)),new Promise((a,b)=>p(["../chunks/calcite-slider"],a,b))])});return function(){return d.apply(this,arguments)}}();q._renderContent=function(){const d=this.messages,a=this._warningMessage,b=this.viewModel.state===m.WeatherState.Error;return c.tsx(c.tsxFragment,null,this.visibleElements.header&&c.tsx(E.Heading,{level:this.headingLevel},d.widgetLabel),b&&c.tsx("div",{key:"error",class:k.CSS.error},this._errorMessage),c.tsx("div",{key:"content",
class:F.classes({[k.CSS.content]:!0,[k.CSS.hasError]:b})},c.tsx("div",{class:k.CSS.selector,role:"radiogroup","aria-label":d.weatherType},C.weatherTypesArray.map(this._renderWeatherTypeButton)),c.tsx("div",{class:k.CSS.options},this._renderOptions()),v.isSome(a)&&this._renderWarning(a)))};q._renderOptions=function(){const {viewModel:d,messages:a}=this,b=d.state===m.WeatherState.Disabled,e=d.current,g=this._memoizedCallbacks(e);switch(e.type){case "sunny":return c.tsx(n.LabeledSlider,{key:"sunny-cover",
disabled:b,label:a.sunny.cloudCover,value:e.cloudCover,onChange:g.onCloudCoverChange});case "cloudy":return c.tsx(n.LabeledSlider,{key:"cloudy-cover",disabled:b,label:a.cloudy.cloudCover,value:e.cloudCover,onChange:g.onCloudCoverChange});case "rainy":return c.tsx(c.tsxFragment,null,c.tsx(n.LabeledSlider,{key:"rainy-cover",disabled:b,label:a.rainy.cloudCover,value:e.cloudCover,onChange:g.onCloudCoverChange}),c.tsx(n.LabeledSlider,{key:"rainy-precipitation",disabled:b,debounceDelay:0,label:a.rainy.precipitation,
value:e.precipitation,onChange:g.onPrecipitationChange}));case "snowy":return c.tsx(c.tsxFragment,null,c.tsx(n.LabeledSlider,{key:"snowy-cloud-cover",disabled:b,label:a.snowy.cloudCover,value:e.cloudCover,onChange:g.onCloudCoverChange}),c.tsx(n.LabeledSlider,{key:"snowy-precipitation",disabled:b,debounceDelay:0,label:a.snowy.precipitation,value:e.precipitation,onChange:g.onPrecipitationChange}),c.tsx("calcite-label",{key:"snow-cover",scale:"s",disabled:b,layout:"inline",title:a.snowy.snowCoverTooltip},
c.tsx("calcite-checkbox",{checked:"enabled"===e.snowCover,onCalciteCheckboxChange:g.onSnowCoverChange}),a.snowy.snowCover));case "foggy":return c.tsx(n.LabeledSlider,{key:"foggy-cover",disabled:b,debounceDelay:0,label:a.foggy.fogStrength,value:e.fogStrength,onChange:g.onFogStrengthChange})}};q._renderWarning=function(d){return c.tsx("div",{key:"warning",class:k.CSS.warning},c.tsx("calcite-icon",{icon:"exclamation-mark-triangle",scale:"s"}),d)};u._createClass(r,[{key:"view",get:function(){var d;return null==
(d=this.viewModel)?void 0:d.view},set:function(d){this.viewModel&&(this.viewModel.view=d)}},{key:"_errorMessage",get:function(){const d=this.messages.error;switch(this.viewModel.error){case m.WeatherError.LocalScene:return d.localScene;case m.WeatherError.NoAtmosphere:return d.noAtmosphere;case m.WeatherError.UnsupportedView:return d.unsupported;default:return null}}},{key:"_warningMessage",get:function(){switch(this.viewModel.error){case m.WeatherError.NotVisible:var d;return v.isSome(this.view)&&
"3d"===(null==(d=this.view)?void 0:d.type)&&this.view.environment.atmosphereEnabled?this.messages.error.notVisible:null;default:return null}}}]);return r}(D);h.__decorate([l.property()],f.prototype,"viewModel",void 0);h.__decorate([l.property()],f.prototype,"view",null);h.__decorate([l.property()],f.prototype,"headingLevel",void 0);h.__decorate([l.property({type:w,nonNullable:!0})],f.prototype,"visibleElements",void 0);h.__decorate([l.property()],f.prototype,"iconClass",void 0);h.__decorate([A.aliasOf("messages.widgetLabel",
{overridable:!0})],f.prototype,"label",void 0);h.__decorate([l.property(),G.messageBundle("esri/widgets/Weather/t9n/Weather")],f.prototype,"messages",void 0);h.__decorate([l.property()],f.prototype,"_errorMessage",null);h.__decorate([l.property()],f.prototype,"_warningMessage",null);return f=h.__decorate([B.subclass("esri.widgets.Weather")],f)});