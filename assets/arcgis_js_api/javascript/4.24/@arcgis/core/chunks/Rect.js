/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],r=["آ","أ","إ","ا"],e=["ﻵ","ﻷ","ﻹ","ﻻ"],n=["ﻶ","ﻸ","ﻺ","ﻼ"],i=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],o=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],s=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],u=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],a=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],f=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],h=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],c=["ء","ف"],l=["غ","ي"],T=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],A=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],L=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],g=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],d=[[18,18,18,18,18,18,18,18,18,6,5,6,8,5,18,18,18,18,18,18,18,18,18,18,18,18,18,18,5,5,5,6,8,4,4,11,11,11,4,4,4,4,4,10,9,10,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,18,18,18,18,18,18,5,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,9,4,11,11,11,11,4,4,4,4,0,4,4,18,4,4,11,11,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,1,12,1,12,12,1,12,12,1,12,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,11,11,7,9,7,4,4,12,12,12,12,12,12,12,12,12,12,12,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,3,3,3,3,3,3,3,3,3,3,11,3,3,7,7,7,12,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,3,4,12,12,12,12,12,12,7,7,12,12,4,12,12,12,12,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,12,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,12,12,12,12,12,12,12,12,12,12,12,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,12,12,12,12,12,12,12,12,12,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,18,18,18,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,18,18,18,18,18,4,4,4,4,4,18,18,18,18,18,18,2,0,4,4,2,2,2,2,2,2,10,10,4,4,4,0,2,2,2,2,2,2,2,2,2,2,10,10,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,12,1,1,1,1,1,1,1,1,1,1,10,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,12,12,12,12,12,12,12,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,11,4,4,10,10,4,4,4,4,4,11,11,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,18],[4,4,4,11,11,11,4,4,4,4,4,10,9,10,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,11,11,4,4,4,11,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];class m{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,i,u){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,r,e){D=[],Y=[];for(let n=0;n<e;n++)t[n]=n,r[n]=n,D[n]=n}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(i,u))return t;i=this.inputFormat,u=this.outputFormat;let f=t;const c=z,l=I(i.charAt(1)),T=I(u.charAt(1)),A=("I"===i.charAt(0)?"L":i.charAt(0))+l,L=("I"===u.charAt(0)?"L":u.charAt(0))+T,g=i.charAt(2)+u.charAt(2);c.defInFormat=A,c.defOutFormat=L,c.defSwap=g;const d=B(t,A,L,g,c);let m=!1;return"R"===u.charAt(1)?m=!0:"C"!==u.charAt(1)&&"D"!==u.charAt(1)||(m="rtl"===this.checkContextual(d)),this.sourceToTarget=D,this.targetToSource=function(t){const r=new Array(t.length);for(let e=0;e<t.length;e++)r[t[e]]=e;return r}(this.sourceToTarget),P=this.targetToSource,f=i.charAt(3)===u.charAt(3)?d:"S"===u.charAt(3)?function(t,r,i){if(0===r.length)return"";void 0===t&&(t=!0),void 0===i&&(i=!0);const u=(r=String(r)).split("");let f=0,h=1,c=u.length;t||(f=u.length-1,h=-1,c=1);const l=function(t,r,i,u,f){let h=0;const c=[];let l=0;for(let T=r;T*i<u;T+=i)if(S(t[T])||O(t[T])){if("ل"===t[T]&&N(t,T+i,i,u)){t[T]=j(t[T+i],0===h?e:n),T+=i,M(t,T,i,u),f&&(c[l]=T,l++),h=0;continue}const r=t[T];1===h?t[T]=w(t,T+i,i,u)?x(t[T]):y(t[T],s):!0===w(t,T+i,i,u)?t[T]=y(t[T],a):t[T]=y(t[T],o),O(r)||(h=1),!0===E(r)&&(h=0)}else h=0;return c}(u,f,h,c,i);let T="";for(let r=0;r<u.length;r++)i&&_(l,l.length,r)>-1?(k(P,r,!t,-1),D.splice(r,1)):T+=u[r];return T}(m,d,!0):function(t,e,n){if(0===t.length)return"";void 0===n&&(n=!0),void 0===e&&(e=!0);let i="";const o=(t=String(t)).split("");for(let s=0;s<t.length;s++){let u=!1;if(o[s]>="ﹰ"&&o[s]<"\ufeff"){const a=t.charCodeAt(s);o[s]>="ﻵ"&&o[s]<="ﻼ"?(e?(s>0&&n&&" "===o[s-1]?i=i.substring(0,i.length-1)+"ل":(i+="ل",u=!0),i+=r[(a-65269)/2]):(i+=r[(a-65269)/2],i+="ل",s+1<t.length&&n&&" "===o[s+1]?s++:u=!0),u&&(k(P,s,!0,1),D.splice(s,0,D[s]))):i+=h[a-65136]}else i+=o[s]}return i}(d,m,!0),this.sourceToTarget=D,this.targetToSource=P,this.levels=Y,f}_inputFormatSetter(t){if(!G.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!G.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,r){return t?this._inputFormatSetter(t):t=this.inputFormat,r?this._outputFormatSetter(r):r=this.outputFormat,t!==r}checkContextual(t){let r=U(t);if("ltr"!==r&&"rtl"!==r){try{r=document.dir.toLowerCase()}catch(t){}"ltr"!==r&&"rtl"!==r&&(r="ltr")}return r}hasBidiChar(t){return H.test(t)}}function B(t,r,e,n,i){const o=function(t,r,e){if(void 0===r.inFormat&&(r.inFormat=e.defInFormat),void 0===r.outFormat&&(r.outFormat=e.defOutFormat),void 0===r.swap&&(r.swap=e.defSwap),r.inFormat===r.outFormat)return r;const n=r.inFormat.substring(0,1),i=r.outFormat.substring(0,1);let o,s=r.inFormat.substring(1,4),u=r.outFormat.substring(1,4);return"C"===s.charAt(0)&&(o=U(t),s="ltr"===o||"rtl"===o?o.toUpperCase():"L"===r.inFormat.charAt(2)?"LTR":"RTL",r.inFormat=n+s),"C"===u.charAt(0)&&(o=U(t),"rtl"===o?u="RTL":"ltr"===o?(o=function(t){const r=t.split("");return r.reverse(),U(r.join(""))}(t),u=o.toUpperCase()):u="L"===r.outFormat.charAt(2)?"LTR":"RTL",r.outFormat=i+u),r}(t,{inFormat:r,outFormat:e,swap:n},i);if(o.inFormat===o.outFormat)return t;r=o.inFormat,e=o.outFormat,n=o.swap;const s=r.substring(0,1),u=r.substring(1,4),a=e.substring(0,1),f=e.substring(1,4);if(i.inFormat=r,i.outFormat=e,i.swap=n,"L"===s&&"VLTR"===e){if("LTR"===u)return i.dir=$,R(t,i);if("RTL"===u)return i.dir=q,R(t,i)}if("V"===s&&"V"===a)return i.dir="RTL"===u?q:$,b(t,i);if("L"===s&&"VRTL"===e)return"LTR"===u?(i.dir=$,t=R(t,i)):(i.dir=q,t=R(t,i)),b(t);if("VLTR"===r&&"LLTR"===e)return i.dir=$,R(t,i);if("V"===s&&"L"===a&&u!==f)return t=b(t),"RTL"===u?B(t,"LLTR","VLTR",n,i):B(t,"LRTL","VRTL",n,i);if("VRTL"===r&&"LRTL"===e)return B(t,"LRTL","VRTL",n,i);if("L"===s&&"L"===a){const r=i.swap;return i.swap=r.substr(0,1)+"N","RTL"===u?(i.dir=q,t=R(t,i),i.swap="N"+r.substr(1,2),i.dir=$,t=R(t,i)):(i.dir=$,t=R(t,i),i.swap="N"+r.substr(1,2),t=B(t,"VLTR","LRTL",i.swap,i)),t}return t}function U(t){const r=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return r?r[0]<="z"?"ltr":"rtl":""}function R(t,r){const e=t.split(""),n=[];return F(e,n,r),function(t,r,e){if(0!==e.hiLevel&&e.swap.substr(0,1)!==e.swap.substr(1,2))for(let e=0;e<t.length;e++)1===r[e]&&(t[e]=V(t[e]))}(e,n,r),v(2,e,n,r),v(1,e,n,r),Y=n,e.join("")}function F(t,r,e){const n=t.length,i=e.dir?A:T;let o=0,s=-1;const u=[],a=[];e.hiLevel=e.dir,e.lastArabic=!1,e.hasUbatAl=!1,e.hasUbatB=!1,e.hasUbatS=!1;for(let r=0;r<n;r++)u[r]=p(t[r]);for(let f=0;f<n;f++){const n=o,h=C(t,u,a,f,e);a[f]=h,o=i[n][h];const c=240&o;o&=15;const l=i[o][W];if(r[f]=l,c>0)if(16===c){for(let t=s;t<f;t++)r[t]=1;s=-1}else s=-1;if(i[o][Z])-1===s&&(s=f);else if(s>-1){for(let t=s;t<f;t++)r[t]=l;s=-1}5===u[f]&&(r[f]=0),e.hiLevel|=l}e.hasUbatS&&function(t,r,e,n){for(let i=0;i<e;i++)if(6===t[i]){r[i]=n.dir;for(let e=i-1;e>=0&&8===t[e];e--)r[e]=n.dir}}(u,r,n,e)}function p(t){const r=t.charCodeAt(0),e=g[r>>8];return e<100?e:d[e-100][255&r]}function b(t,r){const e=t.split("");if(r){const t=[];F(e,t,r),Y=t}return e.reverse(),D.reverse(),e.join("")}function _(t,r,e){for(let n=0;n<r;n++)if(t[n]===e)return n;return-1}function S(t){for(let r=0;r<c.length;r++)if(t>=c[r]&&t<=l[r])return!0;return!1}function w(t,r,e,n){for(;r*e<n&&O(t[r]);)r+=e;return!!(r*e<n&&S(t[r]))}function N(t,e,n,i){for(;e*n<i&&O(t[e]);)e+=n;let o=" ";if(!(e*n<i))return!1;o=t[e];for(let t=0;t<r.length;t++)if(r[t]===o)return!0;return!1}function v(t,r,e,n){if(n.hiLevel<t)return;if(1===t&&n.dir===q&&!n.hasUbatB)return r.reverse(),void D.reverse();const i=r.length;let o,s,u,a,f,h=0;for(;h<i;){if(e[h]>=t){for(o=h+1;o<i&&e[o]>=t;)o++;for(s=h,u=o-1;s<u;s++,u--)a=r[s],r[s]=r[u],r[u]=a,f=D[s],D[s]=D[u],D[u]=f;h=o}h++}}function C(t,r,e,n,i){const o=r[n];return{UBAT_L:()=>(i.lastArabic=!1,0),UBAT_R:()=>(i.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>i.lastArabic?3:2,UBAT_AL:()=>(i.lastArabic=!0,i.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let t,o;return n<1||n+1>=r.length||2!==(t=e[n-1])&&3!==t||2!==(o=r[n+1])&&3!==o?4:(i.lastArabic&&(o=3),o===t?o:4)},UBAT_ES:()=>2===(n>0?e[n-1]:5)&&n+1<r.length&&2===r[n+1]?2:4,UBAT_ET:()=>{if(n>0&&2===e[n-1])return 2;if(i.lastArabic)return 4;let t=n+1;const o=r.length;for(;t<o&&11===r[t];)t++;return t<o&&2===r[t]?2:4},UBAT_NSM:()=>{if("VLTR"===i.inFormat){const e=r.length;let i=n+1;for(;i<e&&12===r[i];)i++;if(i<e){const e=t[n].charCodeAt[0],o=e>=1425&&e<=2303||64286===e,s=r[i];if(o&&(1===s||7===s))return 1}}return n<1||5===r[n-1]?4:e[n-1]},UBAT_B:()=>(i.lastArabic=!0,i.hasUbatB=!0,i.dir),UBAT_S:()=>(i.hasUbatS=!0,4),UBAT_LRE:()=>(i.lastArabic=!1,4),UBAT_RLE:()=>(i.lastArabic=!1,4),UBAT_LRO:()=>(i.lastArabic=!1,4),UBAT_RLO:()=>(i.lastArabic=!1,4),UBAT_PDF:()=>(i.lastArabic=!1,4),UBAT_BN:()=>4}[L[o]]()}function V(r){let e,n=0,i=t.length-1;for(;n<=i;)if(e=Math.floor((n+i)/2),r<t[e][0])i=e-1;else{if(!(r>t[e][0]))return t[e][1];n=e+1}return r}function E(t){for(let r=0;r<f.length;r++)if(f[r]===t)return!0;return!1}function x(t){for(let r=0;r<i.length;r++)if(t===i[r])return u[r];return t}function y(t,r){for(let e=0;e<i.length;e++)if(t===i[e])return r[e];return t}function O(t){return t>="ً"&&t<="ٕ"}function I(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function M(t,r,e,n){for(;r*e<n&&O(t[r]);)r+=e;return r*e<n&&(t[r]=" ",!0)}function j(t,e){for(let n=0;n<r.length;n++)if(t===r[n])return e[n];return t}function k(t,r,e,n){for(let i=0;i<t.length;i++)(t[i]>r||!e&&t[i]===r)&&(t[i]+=n)}let D=[],P=[],Y=[];const z={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},W=5,Z=6,$=0,q=1,G=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,H=/[\u0591-\u06ff\ufb1d-\ufefc]/;class J{constructor(t=0,r=0,e=0,n=0){this.x=t,this.y=r,this.width=e,this.height=n}get isEmpty(){return this.width<=0||this.height<=0}union(t){this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.width=Math.max(this.width,t.width),this.height=Math.max(this.height,t.height)}}export{m as B,J as R};