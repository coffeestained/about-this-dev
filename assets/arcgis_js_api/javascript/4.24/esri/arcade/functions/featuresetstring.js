// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../Dictionary","../../chunks/languageUtils","../featureset/support/shared"],function(m,k,l,b,n){function p(d){return d&&d.domain?"coded-value"===d.domain.type||"codedValue"===d.domain.type?l.convertObjectToArcadeDictionary({type:"codedValue",name:d.domain.name,dataType:n.layerFieldEsriConstants[d.field.type],codedValues:d.domain.codedValues.map(f=>({name:f.name,code:f.code}))}):l.convertObjectToArcadeDictionary({type:"range",name:d.domain.name,
dataType:n.layerFieldEsriConstants[d.field.type],min:d.domain.min,max:d.domain.max}):null}m.registerFunctions=function(d){"async"===d.mode&&(d.functions.domain=function(f,h){return d.standardFunctionAsync(f,h,function(){var g=k._asyncToGenerator(function*(c,e,a){b.pcCheck(a,2,3);if(b.isFeature(a[0]))return c=b.featureFullDomain(a[0],b.toString(a[1]),void 0===a[2]?void 0:b.toNumber(a[2])),p(c);if(b.isFeatureSet(a[0]))return yield a[0]._ensureLoaded(),c=b.getDomain(b.toString(a[1]),a[0],null,void 0===
a[2]?void 0:b.toNumber(a[2])),p(c);throw Error("Invalid Parameter");});return function(c,e,a){return g.apply(this,arguments)}}())},d.functions.subtypes=function(f,h){return d.standardFunctionAsync(f,h,function(){var g=k._asyncToGenerator(function*(c,e,a){b.pcCheck(a,1,1);if(b.isFeature(a[0]))return(c=b.featureSubtypes(a[0]))?l.convertObjectToArcadeDictionary(c):null;if(b.isFeatureSet(a[0]))return yield a[0]._ensureLoaded(),(c=a[0].subtypes())?l.convertObjectToArcadeDictionary(c):null;throw Error("Invalid Parameter");
});return function(c,e,a){return g.apply(this,arguments)}}())},d.functions.domainname=function(f,h){return d.standardFunctionAsync(f,h,function(){var g=k._asyncToGenerator(function*(c,e,a){b.pcCheck(a,2,4);if(b.isFeature(a[0]))return b.featureDomainValueLookup(a[0],b.toString(a[1]),a[2],void 0===a[3]?void 0:b.toNumber(a[3]));if(b.isFeatureSet(a[0]))return yield a[0]._ensureLoaded(),c=b.getDomain(b.toString(a[1]),a[0],null,void 0===a[3]?void 0:b.toNumber(a[3])),b.getDomainValue(c,a[2]);throw Error("Invalid Parameter");
});return function(c,e,a){return g.apply(this,arguments)}}())},d.signatures.push({name:"domainname",min:"2",max:"4"}),d.functions.domaincode=function(f,h){return d.standardFunctionAsync(f,h,function(){var g=k._asyncToGenerator(function*(c,e,a){b.pcCheck(a,2,4);if(b.isFeature(a[0]))return b.featureDomainCodeLookup(a[0],b.toString(a[1]),a[2],void 0===a[3]?void 0:b.toNumber(a[3]));if(b.isFeatureSet(a[0]))return yield a[0]._ensureLoaded(),c=b.getDomain(b.toString(a[1]),a[0],null,void 0===a[3]?void 0:
b.toNumber(a[3])),b.getDomainCode(c,a[2]);throw Error("Invalid Parameter");});return function(c,e,a){return g.apply(this,arguments)}}())},d.signatures.push({name:"domaincode",min:"2",max:"4"}));d.functions.text=function(f,h){return d.standardFunctionAsync(f,h,function(g,c,e){b.pcCheck(e,1,2);if(b.isFeatureSet(e[0])){c=b.defaultUndefined(e[1],"");if(""===c)return e[0].castToText();if("schema"===c.toLowerCase())return e[0].convertToText("schema",g.abortSignal);if("featureset"===c.toLowerCase())return e[0].convertToText("featureset",
g.abortSignal)}else return b.toStringExplicit(e[0],e[1])})};d.functions.gdbversion=function(f,h){return d.standardFunctionAsync(f,h,function(){var g=k._asyncToGenerator(function*(c,e,a){b.pcCheck(a,1,1);if(b.isFeature(a[0]))return a[0].gdbVersion();if(b.isFeatureSet(a[0]))return(yield a[0].load()).gdbVersion;throw Error("Invalid Parameter");});return function(c,e,a){return g.apply(this,arguments)}}())};d.functions.schema=function(f,h){return d.standardFunctionAsync(f,h,function(){var g=k._asyncToGenerator(function*(c,
e,a){b.pcCheck(a,1,1);if(b.isFeatureSet(a[0]))return yield a[0].load(),l.convertObjectToArcadeDictionary(a[0].schema());if(b.isFeature(a[0]))return(c=b.featureSchema(a[0]))?l.convertObjectToArcadeDictionary(c):null;throw Error("Invalid Parameter");});return function(c,e,a){return g.apply(this,arguments)}}())}};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});