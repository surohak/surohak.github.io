/*! For license information please see main.dc836f2b.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),i=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var p=Object.assign,h=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),P=Symbol.for("react.lazy");Symbol.for("react.scope");var j=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var R=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var L=Symbol.for("react.client.reference");function M(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===L?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case v:return"StrictMode";case S:return"Suspense";case E:return"SuspenseList";case j:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:M(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return M(e(t))}catch(n){}}return null}var _=Array.isArray,z=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},F=[],N=-1;function I(e){return{current:e}}function $(e){0>N||(e.current=F[N],F[N]=null,N--)}function V(e,t){N++,F[N]=e.current,e.current=t}var B=I(null),U=I(null),W=I(null),H=I(null);function Y(e,t){switch(V(W,t),V(U,e),V(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=ad(t=id(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(B),V(B,e)}function K(){$(B),$(U),$(W)}function q(e){null!==e.memoizedState&&V(H,e);var t=B.current,n=ad(t,e.type);t!==n&&(V(U,e),V(B,n))}function Q(e){U.current===e&&($(B),$(U)),H.current===e&&($(H),qd._currentValue=O)}var G=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,oe=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function pe(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var he=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(fe(e)/me|0)|0},fe=Math.log,me=Math.LN2;var ge=256,ve=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=ye(r):0!==(o&=s)?i=ye(o):n||0!==(n=s&~e)&&(i=ye(n)):0!==(s=r&~a)?i=ye(s):0!==o?i=ye(o):n||0!==(n=r&~e)&&(i=ye(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ke(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function Se(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-he(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function je(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-he(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Re(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=D.p;return 0!==e?e:void 0===(e=window.event)?32:cp(e.type)}var Le=Math.random().toString(36).slice(2),Me="__reactFiber$"+Le,_e="__reactProps$"+Le,ze="__reactContainer$"+Le,De="__reactEvents$"+Le,Oe="__reactListeners$"+Le,Fe="__reactHandles$"+Le,Ne="__reactResources$"+Le,Ie="__reactMarker$"+Le;function $e(e){delete e[Me],delete e[_e],delete e[De],delete e[Oe],delete e[Fe]}function Ve(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ze]||n[Me]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[Me])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[Me]||e[ze]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ue(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function We(e){var t=e[Ne];return t||(t=e[Ne]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Ie]=!0}var Ye=new Set,Ke={};function qe(e,t){Qe(e,t),Qe(e+"Capture",t)}function Qe(e,t){for(Ke[e]=t,e=0;e<t.length;e++)Ye.add(t[e])}var Ge,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(i=t,G.call(et,i)||!G.call(Ze,i)&&(Je.test(i)?et[i]=!0:(Ze[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Ge)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ge=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Ge+e+Xe}var at=!1;function ot(e,t){if(!e||at)return"";at=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{at=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ft=/[\n"\\]/g;function mt(e){return e.replace(ft,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?yt(e,o,ct(t)):null!=n?yt(e,o,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function vt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function yt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(_(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Et(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Et(e,a,t[a])}function Pt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rt(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Lt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,_t=null;function zt(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[_e]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[_e]||null;if(!i)throw Error(o(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var Dt=!1;function Ot(e,t,n){if(Dt)return e(t,n);Dt=!0;try{return e(t)}finally{if(Dt=!1,(null!==Mt||null!==_t)&&(Vc(),Mt&&(t=Mt,e=_t,_t=Mt=null,zt(t),e)))for(t=0;t<e.length;t++)zt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[_e]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),It=!1;if(Nt)try{var $t={};Object.defineProperty($t,"passive",{get:function(){It=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(_p){It=!1}var Vt=null,Bt=null,Ut=null;function Wt(){if(Ut)return Ut;var e,t,n=Bt,r=n.length,i="value"in Vt?Vt.value:Vt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Ut=i.slice(e,1<t?1-t:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function Kt(){return!1}function qt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Yt:Kt,this.isPropagationStopped=Kt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Qt,Gt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=qt(Jt),en=p({},Jt,{view:0,detail:0}),tn=qt(en),nn=p({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Qt=e.screenX-Xt.screenX,Gt=e.screenY-Xt.screenY):Gt=Qt=0,Xt=e),Qt)},movementY:function(e){return"movementY"in e?e.movementY:Gt}}),rn=qt(nn),an=qt(p({},nn,{dataTransfer:0})),on=qt(p({},en,{relatedTarget:0})),sn=qt(p({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=qt(p({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=qt(p({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function fn(){return hn}var mn=qt(p({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Ht(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fn,charCode:function(e){return"keypress"===e.type?Ht(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ht(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=qt(p({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=qt(p({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fn})),yn=qt(p({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=qt(p({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=qt(p({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],kn=Nt&&"CompositionEvent"in window,Sn=null;Nt&&"documentMode"in document&&(Sn=document.documentMode);var En=Nt&&"TextEvent"in window&&!Sn,Cn=Nt&&(!kn||Sn&&8<Sn&&11>=Sn),Pn=String.fromCharCode(32),jn=!1;function Tn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1;var Ln={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ln[e.type]:"textarea"===t}function _n(e,t,n,r){Mt?_t?_t.push(r):_t=[r]:Mt=r,0<(t=Wu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,Dn=null;function On(e){Ou(e,0)}function Fn(e){if(pt(Ue(e)))return e}function Nn(e,t){if("change"===e)return t}var In=!1;if(Nt){var $n;if(Nt){var Vn="oninput"in document;if(!Vn){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Vn="function"===typeof Bn.oninput}$n=Vn}else $n=!1;In=$n&&(!document.documentMode||9<document.documentMode)}function Un(){zn&&(zn.detachEvent("onpropertychange",Wn),Dn=zn=null)}function Wn(e){if("value"===e.propertyName&&Fn(Dn)){var t=[];_n(t,Dn,e,Lt(e)),Ot(On,t)}}function Hn(e,t,n){"focusin"===e?(Un(),Dn=n,(zn=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Un()}function Yn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(Dn)}function Kn(e,t){if("click"===e)return Fn(t)}function qn(e,t){if("input"===e||"change"===e)return Fn(t)}var Qn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Gn(e,t){if(Qn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!G.call(t,i)||!Qn(e[i],t[i]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,ar=null,or=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==ht(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ar&&Gn(ar,r)||(ar=r,0<(r=Wu(ir,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var hr=pr("animationend"),fr=pr("animationiteration"),mr=pr("animationstart"),gr=pr("transitionrun"),vr=pr("transitionstart"),yr=pr("transitioncancel"),br=pr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),qe(t,[e])}wr.push("scrollEnd");var Sr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=Sr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},Sr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Cr=[],Pr=0,jr=0;function Tr(){for(var e=Pr,t=jr=Pr=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var i=Cr[t];Cr[t++]=null;var a=Cr[t];if(Cr[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Mr(n,i,a)}}function Rr(e,t,n,r){Cr[Pr++]=e,Cr[Pr++]=t,Cr[Pr++]=n,Cr[Pr++]=r,jr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return Rr(e,t,n,r),_r(e)}function Lr(e,t){return Rr(e,null,null,t),_r(e)}function Mr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-he(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function _r(e){if(50<Mc)throw Mc=0,_c=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var zr={};function Dr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Or(e,t,n,r){return new Dr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nr(e,t){var n=e.alternate;return null===n?((n=Or(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ir(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $r(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)Fr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case j:return(e=Or(31,n,t,i)).elementType=j,e.lanes=a,e;case g:return Vr(n.children,i,a,t);case v:s=8,i|=24;break;case y:return(e=Or(12,n,t,2|i)).elementType=y,e.lanes=a,e;case S:return(e=Or(13,n,t,i)).elementType=S,e.lanes=a,e;case E:return(e=Or(19,n,t,i)).elementType=E,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case x:s=9;break e;case k:s=11;break e;case C:s=14;break e;case P:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Or(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Vr(e,t,n,r){return(e=Or(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=Or(6,e,null,t)).lanes=n,e}function Ur(e,t,n){return(t=Or(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wr=[],Hr=0,Yr=null,Kr=0,qr=[],Qr=0,Gr=null,Xr=1,Jr="";function Zr(e,t){Wr[Hr++]=Kr,Wr[Hr++]=Yr,Yr=e,Kr=t}function ei(e,t,n){qr[Qr++]=Xr,qr[Qr++]=Jr,qr[Qr++]=Gr,Gr=e;var r=Xr;e=Jr;var i=32-he(r)-1;r&=~(1<<i),n+=1;var a=32-he(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xr=1<<32-he(t)+i|n<<i|r,Jr=a+e}else Xr=1<<a|n<<i|r,Jr=e}function ti(e){null!==e.return&&(Zr(e,1),ei(e,1,0))}function ni(e){for(;e===Yr;)Yr=Wr[--Hr],Wr[Hr]=null,Kr=Wr[--Hr],Wr[Hr]=null;for(;e===Gr;)Gr=qr[--Qr],qr[Qr]=null,Jr=qr[--Qr],qr[Qr]=null,Xr=qr[--Qr],qr[Qr]=null}var ri=null,ii=null,ai=!1,oi=null,si=!1,li=Error(o(519));function ci(e){throw mi(Er(Error(o(418,"")),e)),li}function ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Me]=e,t[_e]=r,n){case"dialog":Fu("cancel",t),Fu("close",t);break;case"iframe":case"object":case"embed":Fu("load",t);break;case"video":case"audio":for(n=0;n<zu.length;n++)Fu(zu[n],t);break;case"source":Fu("error",t);break;case"img":case"image":case"link":Fu("error",t),Fu("load",t);break;case"details":Fu("toggle",t);break;case"input":Fu("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Fu("invalid",t);break;case"textarea":Fu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Gu(t.textContent,n)?(null!=r.popover&&(Fu("beforetoggle",t),Fu("toggle",t)),null!=r.onScroll&&Fu("scroll",t),null!=r.onScrollEnd&&Fu("scrollend",t),null!=r.onClick&&(t.onclick=Xu),t=!0):t=!1,t||ci(e)}function di(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function pi(e){if(e!==ri)return!1;if(!ai)return di(e),ai=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),di(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,hd(e.type)?(e=yd,yd=null,ii=e):ii=n):ii=ri?vd(e.stateNode.nextSibling):null;return!0}function hi(){ii=ri=null,ai=!1}function fi(){var e=oi;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),oi=null),e}function mi(e){null===oi?oi=[e]:oi.push(e)}var gi=I(null),vi=null,yi=null;function bi(e,t,n){V(gi,t._currentValue),t._currentValue=n}function xi(e){e._currentValue=gi.current,$(gi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ki(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),wi(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function Si(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Qn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===H.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(qd):e=[qd])}i=i.return}null!==e&&ki(t,e,n,r),t.flags|=262144}function Ei(e){for(e=e.firstContext;null!==e;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ci(e){vi=e,yi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Pi(e){return Ti(vi,e)}function ji(e,t){return null===vi&&Ci(e),Ti(e,t)}function Ti(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===yi){if(null===e)throw Error(o(308));yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yi=yi.next=t;return n}var Ri="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Ai=r.unstable_scheduleCallback,Li=r.unstable_NormalPriority,Mi={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _i(){return{controller:new Ri,data:new Map,refCount:0}}function zi(e){e.refCount--,0===e.refCount&&Ai(Li,(function(){e.controller.abort()}))}var Di=null,Oi=0,Fi=0,Ni=null;function Ii(){if(0===--Oi&&null!==Di){null!==Ni&&(Ni.status="fulfilled");var e=Di;Di=null,Fi=0,Ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var $i=z.S;z.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Di){var n=Di=[];Oi=0,Fi=Ru(),Ni={status:"pending",value:void 0,then:function(e){n.push(e)}}}Oi++,t.then(Ii,Ii)}(0,t),null!==$i&&$i(e,t)};var Vi=I(null);function Bi(){var e=Vi.current;return null!==e?e:rc.pooledCache}function Ui(e,t){V(Vi,null===t?Vi.current:t.pool)}function Wi(){var e=Bi();return null===e?null:{parent:Mi._currentValue,pool:e}}var Hi=Error(o(460)),Yi=Error(o(474)),Ki=Error(o(542)),qi={then:function(){}};function Qi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Gi(){}function Xi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Gi,Gi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e;default:if("string"===typeof t.status)t.then(Gi,Gi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e}throw Ji=t,Hi}}var Ji=null;function Zi(){if(null===Ji)throw Error(o(459));var e=Ji;return Ji=null,e}function ea(e){if(e===Hi||e===Ki)throw Error(o(483))}var ta=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=_r(e),Mr(e,null,n),t}return Rr(e,r,t,n),_r(e)}function oa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var la=!1;function ca(){if(la){if(null!==Ni)throw Ni}}function ua(e,t,n,r){la=!1;var i=e.updateQueue;ta=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var h=-536870913&s.lane,f=h!==s.lane;if(f?(ac&h)===h:(r&h)===h){0!==h&&h===Fi&&(la=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;h=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,h);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(h="function"===typeof(m=g.payload)?m.call(v,d,h):m)||void 0===h)break e;d=p({},d,h);break e;case 2:ta=!0}}null!==(h=s.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=i.callbacks)?i.callbacks=[h]:f.push(h))}else f={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===a&&(i.shared.lanes=0),hc|=o,e.lanes=o,e.memoizedState=d}}function da(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function pa(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)da(n[e],t)}var ha=I(null),fa=I(0);function ma(e,t){V(fa,e=dc),V(ha,t),dc=e|t.baseLanes}function ga(){V(fa,dc),V(ha,ha.current)}function va(){dc=fa.current,$(ha),$(fa)}var ya=0,ba=null,xa=null,wa=null,ka=!1,Sa=!1,Ea=!1,Ca=0,Pa=0,ja=null,Ta=0;function Ra(){throw Error(o(321))}function Aa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qn(e[n],t[n]))return!1;return!0}function La(e,t,n,r,i,a){return ya=a,ba=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=null===e||null===e.memoizedState?Yo:Ko,Ea=!1,a=n(r,i),Ea=!1,Sa&&(a=_a(t,n,r,i)),Ma(e),a}function Ma(e){z.H=Ho;var t=null!==xa&&null!==xa.next;if(ya=0,wa=xa=ba=null,ka=!1,Pa=0,ja=null,t)throw Error(o(300));null===e||js||null!==(e=e.dependencies)&&Ei(e)&&(js=!0)}function _a(e,t,n,r){ba=e;var i=0;do{if(Sa&&(ja=null),Pa=0,Sa=!1,25<=i)throw Error(o(301));if(i+=1,wa=xa=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}z.H=qo,a=t(n,r)}while(Sa);return a}function za(){var e=z.H,t=e.useState()[0];return t="function"===typeof t.then?$a(t):t,e=e.useState()[0],(null!==xa?xa.memoizedState:null)!==e&&(ba.flags|=1024),t}function Da(){var e=0!==Ca;return Ca=0,e}function Oa(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fa(e){if(ka){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ka=!1}ya=0,wa=xa=ba=null,Sa=!1,Pa=Ca=0,ja=null}function Na(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wa?ba.memoizedState=wa=e:wa=wa.next=e,wa}function Ia(){if(null===xa){var e=ba.alternate;e=null!==e?e.memoizedState:null}else e=xa.next;var t=null===wa?ba.memoizedState:wa.next;if(null!==t)wa=t,xa=e;else{if(null===e){if(null===ba.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(xa=e).memoizedState,baseState:xa.baseState,baseQueue:xa.baseQueue,queue:xa.queue,next:null},null===wa?ba.memoizedState=wa=e:wa=wa.next=e}return wa}function $a(e){var t=Pa;return Pa+=1,null===ja&&(ja=[]),e=Xi(ja,e,t),t=ba,null===(null===wa?t.memoizedState:wa.next)&&(t=t.alternate,z.H=null===t||null===t.memoizedState?Yo:Ko),e}function Va(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return $a(e);if(e.$$typeof===w)return Pi(e)}throw Error(o(438,String(e)))}function Ba(e){var t=null,n=ba.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=ba.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Ua(e,t){return"function"===typeof t?t(e):t}function Wa(e){return Ha(Ia(),xa,e)}function Ha(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(ac&p)===p:(ya&p)===p){var h=u.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Fi&&(d=!0);else{if((ya&h)===h){u=u.next,h===Fi&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,ba.lanes|=h,hc|=h}p=u.action,Ea&&n(a,p),a=u.hasEagerState?u.eagerState:n(a,p)}else h={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=a):c=c.next=h,ba.lanes|=p,hc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Qn(a,e.memoizedState)&&(js=!0,d&&null!==(n=Ni)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ya(e){var t=Ia(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Qn(a,t.memoizedState)||(js=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ka(e,t,n){var r=ba,i=Ia(),a=ai;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Qn((xa||i).memoizedState,n);if(s&&(i.memoizedState=n,js=!0),i=i.queue,vo(2048,8,Ga.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==wa&&1&wa.memoizedState.tag){if(r.flags|=2048,fo(9,{destroy:void 0,resource:void 0},Qa.bind(null,r,i,n,t),null),null===rc)throw Error(o(349));a||0!==(124&ya)||qa(r,t,n)}return n}function qa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ba.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Qa(e,t,n,r){t.value=n,t.getSnapshot=r,Xa(t)&&Ja(e)}function Ga(e,t,n){return n((function(){Xa(t)&&Ja(e)}))}function Xa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qn(e,n)}catch(r){return!0}}function Ja(e){var t=Lr(e,2);null!==t&&Oc(t,e,2)}function Za(e){var t=Na();if("function"===typeof e){var n=e;if(e=n(),Ea){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,Ha(e,xa,"function"===typeof r?r:Ua)}function to(e,t,n,r,i){if(Bo(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==z.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,no(t,a)):(a.next=n.next,t.pending=n.next=a)}}function no(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=z.T,o={};z.T=o;try{var s=n(i,r),l=z.S;null!==l&&l(o,s),ro(e,t,s)}catch(c){ao(e,t,c)}finally{z.T=a}}else try{ro(e,t,a=n(i,r))}catch(u){ao(e,t,u)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){io(e,t,n)}),(function(n){return ao(e,t,n)})):io(e,t,n)}function io(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function ao(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function lo(e,t){if(ai){var n=rc.formState;if(null!==n){e:{var r=ba;if(ai){if(ii){t:{for(var i=ii,a=si;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=vd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ii=vd(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Na()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=r,n=Io.bind(null,ba,r),r.dispatch=n,r=Za(!1),a=Vo.bind(null,ba,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Na()).queue=i,n=to.bind(null,ba,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function co(e){return uo(Ia(),xa,e)}function uo(e,t,n){if(t=Ha(e,t,so)[0],e=Wa(Ua)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=$a(t)}catch(o){if(o===Hi)throw Ki;throw o}else r=t;var i=(t=Ia()).queue,a=i.dispatch;return n!==t.memoizedState&&(ba.flags|=2048,fo(9,{destroy:void 0,resource:void 0},po.bind(null,i,n),null)),[r,a,e]}function po(e,t){e.action=t}function ho(e){var t=Ia(),n=xa;if(null!==n)return uo(t,n,e);Ia(),t=t.memoizedState;var r=(n=Ia()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function fo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=ba.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function mo(){return Ia().memoizedState}function go(e,t,n,r){var i=Na();r=void 0===r?null:r,ba.flags|=e,i.memoizedState=fo(1|t,{destroy:void 0,resource:void 0},n,r)}function vo(e,t,n,r){var i=Ia();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==xa&&null!==r&&Aa(r,xa.memoizedState.deps)?i.memoizedState=fo(t,a,n,r):(ba.flags|=e,i.memoizedState=fo(1|t,a,n,r))}function yo(e,t){go(8390656,8,e,t)}function bo(e,t){vo(2048,8,e,t)}function xo(e,t){return vo(4,2,e,t)}function wo(e,t){return vo(4,4,e,t)}function ko(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function So(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vo(4,4,ko.bind(null,t,e),n)}function Eo(){}function Co(e,t){var n=Ia();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Po(e,t){var n=Ia();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Aa(t,r[1]))return r[0];if(r=e(),Ea){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function jo(e,t,n){return void 0===n||0!==(1073741824&ya)?e.memoizedState=t:(e.memoizedState=n,e=Dc(),ba.lanes|=e,hc|=e,n)}function To(e,t,n,r){return Qn(n,t)?n:null!==ha.current?(e=jo(e,n,r),Qn(e,t)||(js=!0),e):0===(42&ya)?(js=!0,e.memoizedState=n):(e=Dc(),ba.lanes|=e,hc|=e,t)}function Ro(e,t,n,r,i){var a=D.p;D.p=0!==a&&8>a?a:8;var o=z.T,s={};z.T=s,Vo(e,!1,t,n);try{var l=i(),c=z.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)$o(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),zc());else $o(e,t,r,zc())}catch(u){$o(e,t,{then:function(){},status:"rejected",reason:u},zc())}finally{D.p=a,z.T=o}}function Ao(){}function Lo(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=Mo(e).queue;Ro(e,i,t,O,null===n?Ao:function(){return _o(e),n(r)})}function Mo(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function _o(e){$o(e,Mo(e).next.queue,{},zc())}function zo(){return Pi(qd)}function Do(){return Ia().memoizedState}function Oo(){return Ia().memoizedState}function Fo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=zc(),r=aa(t,e=ia(n),n);return null!==r&&(Oc(r,t,n),oa(r,t,n)),t={cache:_i()},void(e.payload=t)}t=t.return}}function No(e,t,n){var r=zc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bo(e)?Uo(t,n):null!==(n=Ar(e,t,n,r))&&(Oc(n,e,r),Wo(n,t,r))}function Io(e,t,n){$o(e,t,n,zc())}function $o(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bo(e))Uo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Qn(s,o))return Rr(e,t,i,0),null===rc&&Tr(),!1}catch(l){}if(null!==(n=Ar(e,t,i,r)))return Oc(n,e,r),Wo(n,t,r),!0}return!1}function Vo(e,t,n,r){if(r={lane:2,revertLane:Ru(),action:r,hasEagerState:!1,eagerState:null,next:null},Bo(e)){if(t)throw Error(o(479))}else null!==(t=Ar(e,n,r,2))&&Oc(t,e,2)}function Bo(e){var t=e.alternate;return e===ba||null!==t&&t===ba}function Uo(e,t){Sa=ka=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}var Ho={readContext:Pi,use:Va,useCallback:Ra,useContext:Ra,useEffect:Ra,useImperativeHandle:Ra,useLayoutEffect:Ra,useInsertionEffect:Ra,useMemo:Ra,useReducer:Ra,useRef:Ra,useState:Ra,useDebugValue:Ra,useDeferredValue:Ra,useTransition:Ra,useSyncExternalStore:Ra,useId:Ra,useHostTransitionStatus:Ra,useFormState:Ra,useActionState:Ra,useOptimistic:Ra,useMemoCache:Ra,useCacheRefresh:Ra},Yo={readContext:Pi,use:Va,useCallback:function(e,t){return Na().memoizedState=[e,void 0===t?null:t],e},useContext:Pi,useEffect:yo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,ko.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Na();t=void 0===t?null:t;var r=e();if(Ea){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Na();if(void 0!==n){var i=n(t);if(Ea){pe(!0);try{n(t)}finally{pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=No.bind(null,ba,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Na().memoizedState=e},useState:function(e){var t=(e=Za(e)).queue,n=Io.bind(null,ba,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eo,useDeferredValue:function(e,t){return jo(Na(),e,t)},useTransition:function(){var e=Za(!1);return e=Ro.bind(null,ba,e.queue,!0,!1),Na().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ba,i=Na();if(ai){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===rc)throw Error(o(349));0!==(124&ac)||qa(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yo(Ga.bind(null,r,a,e),[e]),r.flags|=2048,fo(9,{destroy:void 0,resource:void 0},Qa.bind(null,r,a,n,t),null),n},useId:function(){var e=Na(),t=rc.identifierPrefix;if(ai){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-he(Xr)-1)).toString(32)+n),0<(n=Ca++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Ta++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:zo,useFormState:lo,useActionState:lo,useOptimistic:function(e){var t=Na();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vo.bind(null,ba,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ba,useCacheRefresh:function(){return Na().memoizedState=Fo.bind(null,ba)}},Ko={readContext:Pi,use:Va,useCallback:Co,useContext:Pi,useEffect:bo,useImperativeHandle:So,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Po,useReducer:Wa,useRef:mo,useState:function(){return Wa(Ua)},useDebugValue:Eo,useDeferredValue:function(e,t){return To(Ia(),xa.memoizedState,e,t)},useTransition:function(){var e=Wa(Ua)[0],t=Ia().memoizedState;return["boolean"===typeof e?e:$a(e),t]},useSyncExternalStore:Ka,useId:Do,useHostTransitionStatus:zo,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Ia(),0,e,t)},useMemoCache:Ba,useCacheRefresh:Oo},qo={readContext:Pi,use:Va,useCallback:Co,useContext:Pi,useEffect:bo,useImperativeHandle:So,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Po,useReducer:Ya,useRef:mo,useState:function(){return Ya(Ua)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=Ia();return null===xa?jo(n,e,t):To(n,xa.memoizedState,e,t)},useTransition:function(){var e=Ya(Ua)[0],t=Ia().memoizedState;return["boolean"===typeof e?e:$a(e),t]},useSyncExternalStore:Ka,useId:Do,useHostTransitionStatus:zo,useFormState:ho,useActionState:ho,useOptimistic:function(e,t){var n=Ia();return null!==xa?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ba,useCacheRefresh:Oo},Qo=null,Go=0;function Xo(e){var t=Go;return Go+=1,null===Qo&&(Qo=[]),Xi(Qo,e,t)}function Jo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zo(e,t){if(t.$$typeof===h)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Nr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===P&&es(a)===t.type)?(Jo(t=i(t,n.props),n),t.return=e,t):(Jo(t=$r(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ur(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Vr(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case f:return Jo(n=$r(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Ur(t,e.mode,n)).return=e,t;case P:return p(e,t=(0,t._init)(t._payload),n)}if(_(t)||A(t))return(t=Vr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,Xo(t),n);if(t.$$typeof===w)return p(e,ji(e,t),n);Zo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case f:return n.key===i?c(e,t,n,r):null;case m:return n.key===i?u(e,t,n,r):null;case P:return h(e,t,n=(i=n._init)(n._payload),r)}if(_(n)||A(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,Xo(n),r);if(n.$$typeof===w)return h(e,t,ji(e,n),r);Zo(e,n)}return null}function v(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case f:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case P:return v(e,t,n,r=(0,r._init)(r._payload),i)}if(_(r)||A(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return v(e,t,n,Xo(r),i);if(r.$$typeof===w)return v(e,t,n,ji(t,r),i);Zo(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case f:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===P&&es(b)===c.type){n(l,c.sibling),Jo(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Vr(u.props.children,l.mode,d,u.key)).return=l,l=d):(Jo(d=$r(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case m:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Ur(u,l.mode,d)).return=l,l=d}return s(l);case P:return y(l,c,u=(b=u._init)(u._payload),d)}if(_(u))return function(i,o,s,l){for(var c=null,u=null,d=o,f=o=0,m=null;null!==d&&f<s.length;f++){d.index>f?(m=d,d=null):m=d.sibling;var g=h(i,d,s[f],l);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(i,d),o=a(g,o,f),null===u?c=g:u.sibling=g,u=g,d=m}if(f===s.length)return n(i,d),ai&&Zr(i,f),c;if(null===d){for(;f<s.length;f++)null!==(d=p(i,s[f],l))&&(o=a(d,o,f),null===u?c=d:u.sibling=d,u=d);return ai&&Zr(i,f),c}for(d=r(d);f<s.length;f++)null!==(m=v(d,i,f,s[f],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?f:m.key),o=a(m,o,f),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(i,e)})),ai&&Zr(i,f),c}(l,c,u,d);if(A(u)){if("function"!==typeof(b=A(u)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,f=s,m=s=0,g=null,y=l.next();null!==f&&!y.done;m++,y=l.next()){f.index>m?(g=f,f=null):g=f.sibling;var b=h(i,f,y.value,c);if(null===b){null===f&&(f=g);break}e&&f&&null===b.alternate&&t(i,f),s=a(b,s,m),null===d?u=b:d.sibling=b,d=b,f=g}if(y.done)return n(i,f),ai&&Zr(i,m),u;if(null===f){for(;!y.done;m++,y=l.next())null!==(y=p(i,y.value,c))&&(s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return ai&&Zr(i,m),u}for(f=r(f);!y.done;m++,y=l.next())null!==(y=v(f,i,m,y.value,c))&&(e&&null!==y.alternate&&f.delete(null===y.key?m:y.key),s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return e&&f.forEach((function(e){return t(i,e)})),ai&&Zr(i,m),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return y(l,c,Xo(u),d);if(u.$$typeof===w)return y(l,c,ji(l,u),d);Zo(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=Br(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Go=0;var i=y(e,t,n,r);return Qo=null,i}catch(o){if(o===Hi||o===Ki)throw o;var a=Or(29,o,null,e.mode);return a.lanes=r,a.return=e,a}}}var ns=ts(!0),rs=ts(!1),is=I(null),as=null;function os(e){var t=e.alternate;V(us,1&us.current),V(is,e),null===as&&(null===t||null!==ha.current||null!==t.memoizedState)&&(as=e)}function ss(e){if(22===e.tag){if(V(us,us.current),V(is,e),null===as){var t=e.alternate;null!==t&&null!==t.memoizedState&&(as=e)}}else ls()}function ls(){V(us,us.current),V(is,is.current)}function cs(e){$(is),as===e&&(as=null),$(us)}var us=I(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zc(),i=ia(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zc(),i=ia(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zc(),r=ia(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=aa(e,r,n))&&(Oc(t,e,n),oa(t,e,n))}};function fs(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Gn(n,r)||!Gn(i,a))}function ms(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var vs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function ys(e){vs(e)}function bs(e){console.error(e)}function xs(e){vs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function ks(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Ss(e,t,n){return(n=ia(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Es(e){return(e=ia(e)).tag=3,e}function Cs(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ks(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){ks(t,n,r),"function"!==typeof i&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ps=Error(o(461)),js=!1;function Ts(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function Rs(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ci(t),r=La(e,t,n,o,a,i),s=Da(),null===e||js?(ai&&s&&ti(t),t.flags|=1,Ts(e,t,r,i),t.child):(Oa(e,t,i),Qs(e,t,i))}function As(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Fr(a)||void 0!==a.defaultProps||null!==n.compare?((e=$r(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ls(e,t,a,r,i))}if(a=e.child,!Gs(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Gn)(o,r)&&e.ref===t.ref)return Qs(e,t,i)}return t.flags|=1,(e=Nr(a,r)).ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Gn(a,r)&&e.ref===t.ref){if(js=!1,t.pendingProps=r=a,!Gs(e,i))return t.lanes=e.lanes,Qs(e,t,i);0!==(131072&e.flags)&&(js=!0)}}return Ds(e,t,n,r,i)}function Ms(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==a?a.baseLanes|n:n,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return _s(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,_s(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ui(0,null!==a?a.cachePool:null),null!==a?ma(t,a):ga(),ss(t)}else null!==a?(Ui(0,a.cachePool),ma(t,a),ls(),t.memoizedState=null):(null!==e&&Ui(0,null),ga(),ls());return Ts(e,t,i,n),t.child}function _s(e,t,n,r){var i=Bi();return i=null===i?null:{parent:Mi._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Ui(0,null),ga(),ss(t),null!==e&&Si(e,t,r,!0),null}function zs(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ds(e,t,n,r,i){return Ci(t),n=La(e,t,n,r,void 0,i),r=Da(),null===e||js?(ai&&r&&ti(t),t.flags|=1,Ts(e,t,n,i),t.child):(Oa(e,t,i),Qs(e,t,i))}function Os(e,t,n,r,i,a){return Ci(t),t.updateQueue=null,n=_a(t,r,n,i),Ma(e),r=Da(),null===e||js?(ai&&r&&ti(t),t.flags|=1,Ts(e,t,n,a),t.child):(Oa(e,t,a),Qs(e,t,a))}function Fs(e,t,n,r,i){if(Ci(t),null===t.stateNode){var a=zr,o=n.contextType;"object"===typeof o&&null!==o&&(a=Pi(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=hs,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},na(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Pi(o):zr,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(ps(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&hs.enqueueReplaceState(a,a.state,null),ua(t,r,a,i),ca(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=gs(n,s);a.props=l;var c=a.context,u=n.contextType;o=zr,"object"===typeof u&&null!==u&&(o=Pi(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&ms(t,a,r,o),ta=!1;var p=t.memoizedState;a.state=p,ua(t,r,a,i),ca(),c=t.memoizedState,s||p!==c||ta?("function"===typeof d&&(ps(t,n,d,r),c=t.memoizedState),(l=ta||fs(t,n,l,r,p,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ra(e,t),u=gs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,p=a.context,c=n.contextType,l=zr,"object"===typeof c&&null!==c&&(l=Pi(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||p!==l)&&ms(t,a,r,l),ta=!1,p=t.memoizedState,a.state=p,ua(t,r,a,i),ca();var h=t.memoizedState;o!==d||p!==h||ta||null!==e&&null!==e.dependencies&&Ei(e.dependencies)?("function"===typeof s&&(ps(t,n,s,r),h=t.memoizedState),(u=ta||fs(t,n,u,r,p,h,l)||null!==e&&null!==e.dependencies&&Ei(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,zs(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):Ts(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Qs(e,t,i),e}function Ns(e,t,n,r){return hi(),t.flags|=256,Ts(e,t,n,r),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $s(e){return{baseLanes:e,cachePool:Wi()}}function Vs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Bs(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ai){if(a?os(t):ls(),ai){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=vd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Gr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=Or(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,a?(ls(),c=Ws({mode:"hidden",children:c},a=t.mode),i=Vr(i,a,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(a=t.child).memoizedState=$s(n),a.childLanes=Vs(e,r,n),t.memoizedState=Is,i):(os(t),Us(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(os(t),t.flags&=-257,t=Hs(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),a=i.fallback,c=t.mode,i=Ws({mode:"visible",children:i.children},c),(a=Vr(a,c,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=$s(n),i.childLanes=Vs(e,r,n),t.memoizedState=Is,t=a);else if(os(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(o(419))).stack="",i.digest=r,mi({value:i,source:null,stack:null}),t=Hs(e,t,n)}else if(js||Si(e,t,n,!1),r=0!==(n&e.childLanes),js||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:Te(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Lr(e,i),Oc(r,e,i),Ps;"$?"===c.data||Kc(),t=Hs(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=vd(c.nextSibling),ri=t,ai=!0,oi=null,si=!1,null!==e&&(qr[Qr++]=Xr,qr[Qr++]=Jr,qr[Qr++]=Gr,Xr=e.id,Jr=e.overflow,Gr=t),(t=Us(t,i.children)).flags|=4096);return t}return a?(ls(),a=i.fallback,c=t.mode,u=(l=e.child).sibling,(i=Nr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?a=Nr(u,a):(a=Vr(a,c,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(c=e.child.memoizedState)?c=$s(n):(null!==(l=c.cachePool)?(u=Mi._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Wi(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Vs(e,r,n),t.memoizedState=Is,i):(os(t),e=(n=e.child).sibling,(n=Nr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Us(e,t){return(t=Ws({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ws(e,t){return(e=Or(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hs(e,t,n){return ns(t,e.child,null,n),(e=Us(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function Ks(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ts(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ys(e,n,t);else if(19===e.tag)Ys(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(V(us,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ks(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ds(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ks(t,!0,n,null,a);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),hc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Si(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Nr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ei(e))}function Xs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)js=!0;else{if(!Gs(e,n)&&0===(128&t.flags))return js=!1,function(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),bi(0,Mi,e.memoizedState.cache),hi();break;case 27:case 5:q(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:bi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(os(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bs(e,t,n):(os(t),null!==(e=Qs(e,t,n))?e.sibling:null);os(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Si(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return qs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Ms(e,t,n);case 24:bi(0,Mi,e.memoizedState.cache)}return Qs(e,t,n)}(e,t,n);js=0!==(131072&e.flags)}else js=!1,ai&&0!==(1048576&t.flags)&&ei(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===k){t.tag=11,t=Rs(null,t,r,e,n);break e}if(i===C){t.tag=14,t=As(null,t,r,e,n);break e}}throw t=M(r)||r,Error(o(306,t,""))}Fr(r)?(e=gs(r,e),t.tag=1,t=Fs(null,t,r,e,n)):(t.tag=0,t=Ds(null,t,r,e,n))}return t;case 0:return Ds(e,t,t.type,t.pendingProps,n);case 1:return Fs(e,t,r=t.type,i=gs(r,t.pendingProps),n);case 3:e:{if(Y(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ra(e,t),ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,bi(0,Mi,r),r!==a.cache&&ki(t,[Mi],n,!0),ca(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ns(e,t,r,n);break e}if(r!==i){mi(i=Er(Error(o(424)),t)),t=Ns(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=vd(e.firstChild),ri=t,ai=!0,oi=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===i){t=Qs(e,t,n);break e}Ts(e,t,r,n)}t=t.child}return t;case 26:return zs(e,t),null===e?(n=Td(t.type,null,t.pendingProps,null))?t.memoizedState=n:ai||(n=t.type,e=t.pendingProps,(r=rd(W.current).createElement(n))[Me]=t,r[_e]=e,ed(r,n,e),He(r),t.stateNode=r):t.memoizedState=Td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return q(t),null===e&&ai&&(r=t.stateNode=xd(t.type,t.pendingProps,W.current),ri=t,si=!0,i=ii,hd(t.type)?(yd=i,ii=vd(r.firstChild)):ii=i),Ts(e,t,t.pendingProps.children,n),zs(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ai&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ie])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=vd(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),q(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,od(i,a)?r=null:null!==s&&od(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=La(e,t,za,null,null,n),qd._currentValue=i),zs(e,t),Ts(e,t,r,n),t.child;case 6:return null===e&&ai&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return Bs(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):Ts(e,t,r,n),t.child;case 11:return Rs(e,t,t.type,t.pendingProps,n);case 7:return Ts(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ts(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,bi(0,t.type,r.value),Ts(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ci(t),r=r(i=Pi(i)),t.flags|=1,Ts(e,t,r,n),t.child;case 14:return As(e,t,t.type,t.pendingProps,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 19:return qs(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Ws(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Nr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ms(e,t,n);case 24:return Ci(t),r=Pi(Mi),null===e?(null===(i=Bi())&&(i=rc,a=_i(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},na(t),bi(0,Mi,i)):(0!==(e.lanes&n)&&(ra(e,t),ua(t,null,null,n),ca()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),bi(0,Mi,r)):(r=a.cache,bi(0,Mi,r),r!==i.cache&&ki(t,[Mi],n,!0))),Ts(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Vd(t)){if(null!==(t=is.current)&&((4194048&ac)===ac?null!==as:(62914560&ac)!==ac&&0===(536870912&ac)||t!==as))throw Ji=qi,Yi;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Se():536870912,e.lanes|=t,vc|=t)}function tl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xi(Mi),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pi(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,fi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:Q(t),n=W.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}e=B.current,pi(t)?ui(t):(e=xd(i,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(Q(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}if(e=B.current,pi(t))ui(t);else{switch(i=rd(W.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Me]=t,e[_e]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=W.current,pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Me]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Gu(e.nodeValue,n)))||ci(t)}else(e=rd(e).createTextNode(r))[Me]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Me]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=fi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return K(),null===e&&$u(t.stateNode.containerInfo),nl(t),null;case 10:return xi(t.type),nl(t),null;case 19:if($(us),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(a=i.rendering))if(r)tl(i,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=ds(e))){for(t.flags|=128,tl(i,!1),e=a.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ir(n,e),n=n.sibling;return V(us,1&us.current|2),t.child}e=e.sibling}null!==i.tail&&te()>kc&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!ai)return nl(t),null}else 2*te()-i.renderingStartTime>kc&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=us.current,V(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),va(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&$(Vi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xi(Mi),nl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xi(Mi),K(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Q(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return $(us),null;case 4:return K(),null;case 10:return xi(t.type),null;case 22:case 23:return cs(t),va(),null!==e&&$(Vi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xi(Mi),null;default:return null}}function al(e,t){switch(ni(t),t.tag){case 3:xi(Mi),K();break;case 26:case 27:case 5:Q(t);break;case 4:K();break;case 13:cs(t);break;case 19:$(us);break;case 10:xi(t.type);break;case 22:case 23:cs(t),va(),null!==e&&$(Vi);break;case 24:xi(Mi)}}function ol(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){uu(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{pa(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){uu(e,t,i)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){uu(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){uu(e,t,a)}else n.current=null}function pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){uu(e,e.return,i)}}function hl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,u=null,d=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&null!=p)switch(f){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(f)||Ju(e,t,f,null,r,p)}}for(var h in r){var f=r[h];if(p=n[h],r.hasOwnProperty(h)&&(null!=f||null!=p))switch(h){case"type":a=f;break;case"name":i=f;break;case"checked":u=f;break;case"defaultChecked":d=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:f!==p&&Ju(e,t,h,f,r,p)}}return void gt(e,s,l,c,u,d,a,i);case"select":for(a in f=s=l=h=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(a)||Ju(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":h=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&Ju(e,t,i,a,r,c)}return t=l,n=s,r=f,void(null!=h?bt(e,!!n,h,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in f=h=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Ju(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":h=i;break;case"defaultValue":f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Ju(e,t,s,i,r,a)}return void xt(e,h,f);case"option":for(var m in n)if(h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Ju(e,t,m,null,r,h);for(c in r)if(h=r[c],f=n[c],r.hasOwnProperty(c)&&h!==f&&(null!=h||null!=f))if("selected"===c)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else Ju(e,t,c,h,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&Ju(e,t,g,null,r,h);for(u in r)if(h=r[u],f=n[u],r.hasOwnProperty(u)&&h!==f&&(null!=h||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:Ju(e,t,u,h,r,f)}return;default:if(Pt(t)){for(var v in n)h=n[v],n.hasOwnProperty(v)&&void 0!==h&&!r.hasOwnProperty(v)&&Zu(e,t,v,void 0,r,h);for(d in r)h=r[d],f=n[d],!r.hasOwnProperty(d)||h===f||void 0===h&&void 0===f||Zu(e,t,d,h,r,f);return}}for(var y in n)h=n[y],n.hasOwnProperty(y)&&null!=h&&!r.hasOwnProperty(y)&&Ju(e,t,y,null,r,h);for(p in r)h=r[p],f=n[p],!r.hasOwnProperty(p)||h===f||null==h&&null==f||Ju(e,t,p,h,r,f)}(r,e.type,n,t),r[_e]=t}catch(i){uu(e,e.return,i)}}function fl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&hd(e.type)||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&hd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xu));else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function yl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ed(t,r,n),t[Me]=e,t[_e]=n}catch(a){uu(e,e.return,a)}}var bl=!1,xl=!1,wl=!1,kl="function"===typeof WeakSet?WeakSet:Set,Sl=null;function El(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fl(e,n),4&r&&ol(5,n);break;case 1:if(Fl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){uu(n,n.return,o)}else{var i=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(Fl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{pa(e,t)}catch(o){uu(n,n.return,o)}}break;case 27:null===t&&4&r&&yl(n);case 26:case 5:Fl(e,n),null===t&&4&r&&pl(n),512&r&&ul(n,n.return);break;case 12:Fl(e,n);break;case 13:Fl(e,n),4&r&&Al(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=fu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bl)){t=null!==t&&null!==t.memoizedState||xl,i=bl;var a=xl;bl=r,(xl=t)&&!a?Il(e,n,0!==(8772&n.subtreeFlags)):Fl(e,n),bl=i,xl=a}break;case 30:break;default:Fl(e,n)}}function Cl(e){var t=e.alternate;null!==t&&(e.alternate=null,Cl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&$e(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pl=null,jl=!1;function Tl(e,t,n){for(n=n.child;null!==n;)Rl(e,t,n),n=n.sibling}function Rl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(a){}switch(n.tag){case 26:xl||dl(n,t),Tl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=Pl,i=jl;hd(n.type)&&(Pl=n.stateNode,jl=!1),Tl(e,t,n),wd(n.stateNode),Pl=r,jl=i;break;case 5:xl||dl(n,t);case 6:if(r=Pl,i=jl,Pl=null,Tl(e,t,n),jl=i,null!==(Pl=r))if(jl)try{(9===Pl.nodeType?Pl.body:"HTML"===Pl.nodeName?Pl.ownerDocument.body:Pl).removeChild(n.stateNode)}catch(o){uu(n,t,o)}else try{Pl.removeChild(n.stateNode)}catch(o){uu(n,t,o)}break;case 18:null!==Pl&&(jl?(fd(9===(e=Pl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),jp(e)):fd(Pl,n.stateNode));break;case 4:r=Pl,i=jl,Pl=n.stateNode.containerInfo,jl=!0,Tl(e,t,n),Pl=r,jl=i;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),Tl(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),Tl(e,t,n);break;case 21:Tl(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,Tl(e,t,n),xl=r;break;default:Tl(e,t,n)}}function Al(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{jp(e)}catch(n){uu(t,t.return,n)}}function Ll(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new kl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new kl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function Ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(hd(l.type)){Pl=l.stateNode,jl=!1;break e}break;case 5:Pl=l.stateNode,jl=!1;break e;case 3:case 4:Pl=l.stateNode.containerInfo,jl=!0;break e}l=l.return}if(null===Pl)throw Error(o(160));Rl(a,s,i),Pl=null,jl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)zl(t,e),t=t.sibling}var _l=null;function zl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ml(t,e),Dl(e),4&r&&(sl(3,e,e.return),ol(3,e),sl(5,e,e.return));break;case 1:Ml(t,e),Dl(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&bl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=_l;if(Ml(t,e),Dl(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[Ie]||a[Me]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),ed(a,r,n),a[Me]=e,He(a),r=a;break e;case"link":var s=Id("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=Id("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Me]=e,He(a),r=a}e.stateNode=r}else $d(i,e.type,e.stateNode);else e.stateNode=zd(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?$d(i,e.type,e.stateNode):zd(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&hl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ml(t,e),Dl(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&hl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ml(t,e),Dl(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){i=e.stateNode;try{kt(i,"")}catch(f){uu(e,e.return,f)}}4&r&&null!=e.stateNode&&hl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(Ml(t,e),Dl(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(f){uu(e,e.return,f)}}break;case 3:if(Nd=null,i=_l,_l=Ed(t.containerInfo),Ml(t,e),_l=i,Dl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{jp(t.containerInfo)}catch(f){uu(e,e.return,f)}wl&&(wl=!1,Ol(e));break;case 4:r=_l,_l=Ed(e.stateNode.containerInfo),Ml(t,e),Dl(e),_l=r;break;case 12:default:Ml(t,e),Dl(e);break;case 13:Ml(t,e),Dl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ll(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=bl,d=xl;if(bl=u||i,xl=d||c,Ml(t,e),xl=d,bl=u,Dl(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||bl||xl||Nl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var p=c.memoizedProps.style,h=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(f){uu(c,c.return,f)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(f){uu(c,c.return,f)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ll(e,n))));break;case 19:Ml(t,e),Dl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ll(e,r)));case 30:case 21:}}function Dl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(fl(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;vl(e,ml(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(kt(a,""),n.flags&=-33),vl(e,ml(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,ml(e),s);break;default:throw Error(o(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ol(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)El(e,t.alternate,t),t=t.sibling}function Nl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Nl(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Nl(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Nl(t);break;case 22:null===t.memoizedState&&Nl(t);break;default:Nl(t)}e=e.sibling}}function Il(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Il(i,a,n),ol(4,a);break;case 1:if(Il(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)da(l[i],s)}catch(c){uu(r,r.return,c)}}n&&64&o&&ll(a),ul(a,a.return);break;case 27:yl(a);case 26:case 5:Il(i,a,n),n&&null===r&&4&o&&pl(a),ul(a,a.return);break;case 12:Il(i,a,n);break;case 13:Il(i,a,n),n&&4&o&&Al(i,a);break;case 22:null===a.memoizedState&&Il(i,a,n),ul(a,a.return);break;case 30:break;default:Il(i,a,n)}t=t.sibling}}function $l(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&zi(n))}function Vl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&zi(e))}function Bl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ul(e,t,n,r),t=t.sibling}function Ul(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Bl(e,t,n,r),2048&i&&ol(9,t);break;case 1:case 13:default:Bl(e,t,n,r);break;case 3:Bl(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&zi(e)));break;case 12:if(2048&i){Bl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else Bl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?Bl(e,t,n,r):Hl(e,t):2&a._visibility?Bl(e,t,n,r):(a._visibility|=2,Wl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&$l(o,t);break;case 24:Bl(e,t,n,r),2048&i&&Vl(t.alternate,t)}}function Wl(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:Wl(a,o,s,l,i),ol(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?Wl(a,o,s,l,i):Hl(a,o):(u._visibility|=2,Wl(a,o,s,l,i)),i&&2048&c&&$l(o.alternate,o);break;case 24:Wl(a,o,s,l,i),i&&2048&c&&Vl(o.alternate,o);break;default:Wl(a,o,s,l,i)}t=t.sibling}}function Hl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hl(n,r),2048&i&&$l(r.alternate,r);break;case 24:Hl(n,r),2048&i&&Vl(r.alternate,r);break;default:Hl(n,r)}t=t.sibling}}var Yl=8192;function Kl(e){if(e.subtreeFlags&Yl)for(e=e.child;null!==e;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 26:Kl(e),e.flags&Yl&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(o(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=Rd(n.href),a=e.querySelector(Ad(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Wd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void He(a);a=e.ownerDocument||e,n=Ld(n),(i=kd.get(i))&&Od(n,i),He(a=a.createElement("link"));var s=a;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Wd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(_l,e.memoizedState,e.memoizedProps);break;case 5:default:Kl(e);break;case 3:case 4:var t=_l;_l=Ed(e.stateNode.containerInfo),Kl(e),_l=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Yl,Yl=16777216,Kl(e),Yl=t):Kl(e))}}function Ql(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Gl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Sl=r,Zl(r,e)}Ql(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xl(e),e=e.sibling}function Xl(e){switch(e.tag){case 0:case 11:case 15:Gl(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Gl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Gl(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Sl=r,Zl(r,e)}Ql(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==Sl;){var n=Sl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:zi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Sl=r;else e:for(n=e;null!==Sl;){var i=(r=Sl).sibling,a=r.return;if(Cl(r),r===n){Sl=null;break e}if(null!==i){i.return=a,Sl=i;break e}Sl=a}}}var ec={getCacheForType:function(e){var t=Pi(Mi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,ac=0,oc=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,pc=0,hc=0,fc=0,mc=0,gc=0,vc=0,yc=null,bc=null,xc=!1,wc=0,kc=1/0,Sc=null,Ec=null,Cc=0,Pc=null,jc=null,Tc=0,Rc=0,Ac=null,Lc=null,Mc=0,_c=null;function zc(){if(0!==(2&nc)&&0!==ac)return ac&-ac;if(null!==z.T){return 0!==Fi?Fi:Ru()}return Ae()}function Dc(){0===gc&&(gc=0===(536870912&ac)||ai?ke():536870912);var e=is.current;return null!==e&&(e.flags|=32),gc}function Oc(e,t,n){(e!==rc||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||(Uc(e,0),$c(e,ac,gc,!1)),Ce(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(fc|=n),4===pc&&$c(e,ac,gc,!1)),ku(e))}function Fc(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=Hc(),i=Yc();rc!==e||ac!==t?(Sc=null,kc=te()+500,Uc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==oc&&null!==ic){t=ic;var a=sc;t:switch(oc){case 1:oc=0,sc=null,Zc(e,t,a,1);break;case 2:case 9:if(Qi(a)){oc=0,sc=null,Jc(t);break}t=function(){2!==oc&&9!==oc||rc!==e||(oc=7),ku(e)},a.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Qi(a)?(oc=0,sc=null,Jc(t)):(oc=0,sc=null,Zc(e,t,a,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||Vd(s)){oc=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var u=l.return;null!==u?(ic=u,eu(u)):ic=null}break t}}oc=0,sc=null,Zc(e,t,a,5);break;case 6:oc=0,sc=null,Zc(e,t,a,6);break;case 8:Bc(),pc=6;break e;default:throw Error(o(462))}}Gc();break}catch(d){Wc(e,d)}return yi=vi=null,z.H=r,z.A=i,nc=n,null!==ic?0:(rc=null,ac=0,Tr(),pc)}(e,t):qc(e,t,!0),a=r;;){if(0===i){cc&&!r&&$c(e,t,0,!1);break}if(n=e.current.alternate,!a||Ic(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=yc;var c=l.current.memoizedState.isDehydrated;if(c&&(Uc(l,s).flags|=256),2!==(s=qc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=a,fc|=a,i=4;break e}a=bc,bc=i,null!==a&&(null===bc?bc=a:bc.push.apply(bc,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){Uc(e,0),$c(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:$c(r,t,gc,!lc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if($c(r,t,gc,!lc),0!==be(r,0,!0))break e;r.timeoutHandle=ld(Nc.bind(null,r,n,bc,Sc,xc,t,gc,fc,vc,lc,a,2,-0,0),i)}else Nc(r,n,bc,Sc,xc,t,gc,fc,vc,lc,a,0,-0,0)}break}i=qc(e,t,!1),a=!1}ku(e)}function Nc(e,t,n,r,i,a,s,l,c,u,d,p,h,f){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||16785408===(16785408&p))&&(Bd={stylesheets:null,count:0,unsuspend:Ud},ql(t),null!==(p=function(){if(null===Bd)throw Error(o(475));var e=Bd;return e.stylesheets&&0===e.count&&Yd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Yd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(nu.bind(null,e,t,a,n,r,i,s,l,c,d,1,h,f)),void $c(e,a,s,!u);nu(e,t,a,n,r,i,s,l,c)}function Ic(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Qn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $c(e,t,n,r){t&=~mc,t&=~fc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-he(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&Pe(e,n,t)}function Vc(){return 0!==(6&nc)||(Su(0,!1),!1)}function Bc(){if(null!==ic){if(0===oc)var e=ic.return;else yi=vi=null,Fa(e=ic),Qo=null,Go=0,e=ic;for(;null!==e;)al(e.alternate,e),e=e.return;ic=null}}function Uc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bc(),rc=e,ic=n=Nr(e.current,null),ac=t,oc=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,vc=gc=mc=fc=hc=pc=0,bc=yc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-he(r),a=1<<i;t|=e[i],r&=~a}return dc=t,Tr(),n}function Wc(e,t){ba=null,z.H=Ho,t===Hi||t===Ki?(t=Zi(),oc=3):t===Yi?(t=Zi(),oc=4):oc=t===Ps?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(pc=1,ws(e,Er(t,e.current)))}function Hc(){var e=z.H;return z.H=Ho,null===e?Ho:e}function Yc(){var e=z.A;return z.A=ec,e}function Kc(){pc=4,lc||(4194048&ac)!==ac&&null!==is.current||(cc=!0),0===(134217727&hc)&&0===(134217727&fc)||null===rc||$c(rc,ac,gc,!1)}function qc(e,t,n){var r=nc;nc|=2;var i=Hc(),a=Yc();rc===e&&ac===t||(Sc=null,Uc(e,t)),t=!1;var o=pc;e:for(;;)try{if(0!==oc&&null!==ic){var s=ic,l=sc;switch(oc){case 8:Bc(),o=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=oc;if(oc=0,sc=null,Zc(e,s,l,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,sc=null,Zc(e,s,l,c)}}Qc(),o=pc;break}catch(u){Wc(e,u)}return t&&e.shellSuspendCounter++,yi=vi=null,nc=r,z.H=i,z.A=a,null===ic&&(rc=null,ac=0,Tr()),o}function Qc(){for(;null!==ic;)Xc(ic)}function Gc(){for(;null!==ic&&!Z();)Xc(ic)}function Xc(e){var t=Xs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Os(n,t,t.pendingProps,t.type,void 0,ac);break;case 11:t=Os(n,t,t.pendingProps,t.type.render,t.ref,ac);break;case 5:Fa(t);default:al(n,t),t=Xs(n,t=ic=Ir(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Zc(e,t,n,r){yi=vi=null,Fa(t),Qo=null,Go=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Si(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===as?Kc():null===n.alternate&&0===pc&&(pc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===qi?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,i)),!1;case 22:return n.flags|=65536,r===qi?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,i)),!1}throw Error(o(435,n.tag))}return du(e,r,i),Kc(),!1}if(ai)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&mi(Er(e=Error(o(422),{cause:r}),n))):(r!==li&&mi(Er(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Er(r,n),sa(e,i=Ss(e.stateNode,r,i)),4!==pc&&(pc=2)),!1;var a=Error(o(520),{cause:r});if(a=Er(a,n),null===yc?yc=[a]:yc.push(a),4!==pc&&(pc=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,sa(n,e=Ss(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Ec||!Ec.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,Cs(i=Es(i),e,n,r),sa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ac))return pc=1,ws(e,Er(n,e.current)),void(ic=null)}catch(a){if(null!==i)throw ic=i,a;return pc=1,ws(e,Er(n,e.current)),void(ic=null)}32768&t.flags?(ai||1===r?e=!0:cc||0!==(536870912&ac)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===pc&&(pc=5)}function tu(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);pc=6,ic=null}function nu(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Cc);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-he(n),d=1<<u;s[u]=0,l[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var h=p[u];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Pe(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=jr,s,l,c),e===rc&&(ic=rc=null,ac=0),jc=t,Pc=e,Tc=n,Rc=a,Ac=i,Lc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(ae,(function(){return lu(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=z.T,z.T=null,i=D.p,D.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=np,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===a&&++d===r&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},np=!1,Sl=t;null!==Sl;)if(e=(t=Sl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,Sl=e;else for(;null!==Sl;){switch(a=(t=Sl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=gs(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){uu(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,Sl=e;break}Sl=t.return}}(e,t)}finally{nc=s,D.p=i,z.T=r}}Cc=1,ru(),iu(),au()}}function ru(){if(1===Cc){Cc=0;var e=Pc,t=jc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=z.T,z.T=null;var r=D.p;D.p=2;var i=nc;nc|=4;try{zl(t,e);var a=nd,o=er(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var h=p.getSelection(),f=s.textContent.length,m=Math.min(l.start,f),g=void 0===l.end?m:Math.min(l.end,f);!h.extend&&m>g&&(o=g,g=m,m=o);var v=Jn(s,m),y=Jn(s,g);if(v&&y&&(1!==h.rangeCount||h.anchorNode!==v.node||h.anchorOffset!==v.offset||h.focusNode!==y.node||h.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),h.removeAllRanges(),m>g?(h.addRange(b),h.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),h.addRange(b))}}}}for(d=[],h=s;h=h.parentNode;)1===h.nodeType&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}np=!!td,nd=td=null}finally{nc=i,D.p=r,z.T=n}}e.current=t,Cc=2}}function iu(){if(2===Cc){Cc=0;var e=Pc,t=jc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=z.T,z.T=null;var r=D.p;D.p=2;var i=nc;nc|=4;try{El(e,t.alternate,t)}finally{nc=i,D.p=r,z.T=n}}Cc=3}}function au(){if(4===Cc||3===Cc){Cc=0,ee();var e=Pc,t=jc,n=Tc,r=Lc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cc=5:(Cc=0,jc=Pc=null,ou(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Ec=null),Re(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=z.T,i=D.p,D.p=2,z.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{z.T=t,D.p=i}}0!==(3&Tc)&&su(),ku(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===_c?Mc++:(Mc=0,_c=e):Mc=0,Su(0,!1)}}function ou(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,zi(t)))}function su(e){return ru(),iu(),au(),lu()}function lu(){if(5!==Cc)return!1;var e=Pc,t=Rc;Rc=0;var n=Re(Tc),r=z.T,i=D.p;try{D.p=32>n?32:n,z.T=null,n=Ac,Ac=null;var a=Pc,s=Tc;if(Cc=0,jc=Pc=null,Tc=0,0!==(6&nc))throw Error(o(331));var l=nc;if(nc|=4,Xl(a.current),Ul(a,a.current,s,n),nc=l,Su(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,a)}catch(c){}return!0}finally{D.p=i,z.T=r,ou(e,t)}}function cu(e,t,n){t=Er(n,t),null!==(e=aa(e,t=Ss(e.stateNode,t,2),2))&&(Ce(e,2),ku(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ec||!Ec.has(r))){e=Er(n,e),null!==(r=aa(t,n=Es(2),2))&&(Cs(n,r,t,e),Ce(r,2),ku(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(uc=!0,i.add(n),e=pu.bind(null,e,t,n),t.then(e,e))}function pu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ac&n)===n&&(4===pc||3===pc&&(62914560&ac)===ac&&300>te()-wc?0===(2&nc)&&Uc(e,0):mc|=n,vc===ac&&(vc=0)),ku(e)}function hu(e,t){0===t&&(t=Se()),null!==(e=Lr(e,t))&&(Ce(e,t),ku(e))}function fu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),hu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),hu(e,n)}var gu=null,vu=null,yu=!1,bu=!1,xu=!1,wu=0;function ku(e){e!==vu&&null===e.next&&(null===vu?gu=vu=e:vu=vu.next=e),bu=!0,yu||(yu=!0,dd((function(){0!==(6&nc)?X(re,Eu):Cu()})))}function Su(e,t){if(!xu&&bu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-he(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,Tu(r,a))}else a=ac,0===(3&(a=be(r,r===rc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,a)||(n=!0,Tu(r,a));r=r.next}}while(n);xu=!1}}function Eu(){Cu()}function Cu(){bu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var i=r.next,a=Pu(r,t);0===a?(r.next=null,null===n?gu=i:n.next=i,null===i&&(vu=n)):(n=r,(0!==e||0!==(3&a))&&(bu=!0)),r=i}Su(e,!1)}function Pu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-he(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=we(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ac,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),Re(n)){case 2:case 8:n=ie;break;case 32:default:n=ae;break;case 268435456:n=se}return r=ju.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function ju(e,t){if(0!==Cc&&5!==Cc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=ac;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fc(e,r,t),Pu(e,te()),null!=e.callbackNode&&e.callbackNode===n?ju.bind(null,e):null)}function Tu(e,t){if(su())return null;Fc(e,t,!0)}function Ru(){return 0===wu&&(wu=ke()),wu}function Au(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Rt(""+e)}function Lu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Mu=0;Mu<wr.length;Mu++){var _u=wr[Mu];kr(_u.toLowerCase(),"on"+(_u[0].toUpperCase()+_u.slice(1)))}kr(hr,"onAnimationEnd"),kr(fr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(vr,"onTransitionStart"),kr(yr,"onTransitionCancel"),kr(br,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Du=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zu));function Ou(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}}}}function Fu(e,t){var n=t[De];void 0===n&&(n=t[De]=new Set);var r=e+"__bubble";n.has(r)||(Vu(t,e,2,!1),n.add(r))}function Nu(e,t,n){var r=0;t&&(r|=4),Vu(n,e,r,t)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function $u(e){if(!e[Iu]){e[Iu]=!0,Ye.forEach((function(t){"selectionchange"!==t&&(Du.has(t)||Nu(t,!1,e),Nu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Iu]||(t[Iu]=!0,Nu("selectionchange",!1,t))}}function Vu(e,t,n,r){switch(cp(t)){case 2:var i=rp;break;case 8:i=ip;break;default:i=ap}n=i.bind(null,t,n,e),i=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bu(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=Ve(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}Ot((function(){var r=a,i=Lt(n),o=[];e:{var s=xr.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===Ht(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case hr:case fr:case mr:c=sn;break;case br:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),h=d?null!==s?s+"Capture":null:s;d=[];for(var f,m=r;null!==m;){var g=m;if(f=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===f||null===h||null!=(g=Ft(m,h))&&d.push(Uu(m,g,f)),p)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===At||!(u=n.relatedTarget||n.fromElement)||!Ve(u)&&!u[ze])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ve(u):null)&&(p=l(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",h="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",h="onPointerEnter",m="pointer"),p=null==c?s:Ue(c),f=null==u?s:Ue(u),(s=new d(g,m+"leave",c,n,i)).target=p,s.relatedTarget=f,g=null,Ve(i)===r&&((d=new d(h,m+"enter",u,n,i)).target=f,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(h=u,m=0,f=d=c;f;f=Hu(f))m++;for(f=0,g=h;g;g=Hu(g))f++;for(;0<m-f;)d=Hu(d),m--;for(;0<f-m;)h=Hu(h),f--;for(;m--;){if(d===h||null!==h&&d===h.alternate)break e;d=Hu(d),h=Hu(h)}d=null}else d=null;null!==c&&Yu(o,s,c,d,!1),null!==u&&null!==p&&Yu(o,p,u,d,!0)}if("select"===(c=(s=r?Ue(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var v=Nn;else if(Mn(s))if(In)v=qn;else{v=Yn;var y=Hn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Pt(r.elementType)&&(v=Nn):v=Kn;switch(v&&(v=v(e,r))?_n(o,v,n,i):(y&&y(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),y=r?Ue(r):window,e){case"focusin":(Mn(y)||"true"===y.contentEditable)&&(rr=y,ir=r,ar=null);break;case"focusout":ar=ir=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,sr(o,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(o,n,i)}var b;if(kn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else An?Tn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Cn&&"ko"!==n.locale&&(An||"onCompositionStart"!==x?"onCompositionEnd"===x&&An&&(b=Wt()):(Bt="value"in(Vt=i)?Vt.value:Vt.textContent,An=!0)),0<(y=Wu(r,x)).length&&(x=new cn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:null!==(b=Rn(n))&&(x.data=b))),(b=En?function(e,t){switch(e){case"compositionend":return Rn(t);case"keypress":return 32!==t.which?null:(jn=!0,Pn);case"textInput":return(e=t.data)===Pn&&jn?null:e;default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!kn&&Tn(e,t)?(e=Wt(),Ut=Bt=Vt=null,An=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Wu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,i),o.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Au((i[_e]||null).action),o=r.submitter;o&&null!==(t=(t=o[_e]||null)?Au(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Zt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=o?Lu(i,o):new FormData(i);Lo(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Lu(i,o):new FormData(i),Lo(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Ou(o,t)}))}function Uu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Ft(e,n))&&r.unshift(Uu(e,i,a)),null!=(i=Ft(e,t))&&r.push(Uu(e,i,a))),3===e.tag)return r;e=e.return}return[]}function Hu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Yu(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Ft(n,a))&&o.unshift(Uu(n,c,l)):i||null!=(c=Ft(n,a))&&o.push(Uu(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Ku=/\r\n?/g,qu=/\u0000|\uFFFD/g;function Qu(e){return("string"===typeof e?e:""+e).replace(Ku,"\n").replace(qu,"")}function Gu(e,t){return t=Qu(t),Qu(e)===t}function Xu(){}function Ju(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,a);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Rt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Ju(e,t,"name",i.name,i,null),Ju(e,t,"formEncType",i.formEncType,i,null),Ju(e,t,"formMethod",i.formMethod,i,null),Ju(e,t,"formTarget",i.formTarget,i,null)):(Ju(e,t,"encType",i.encType,i,null),Ju(e,t,"method",i.method,i,null),Ju(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Rt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Rt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Fu("beforetoggle",e),Fu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=jt.get(n)||n,r)}}function Zu(e,t,n,r,i,a){switch(n){case"style":Ct(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ke.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[_e]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fu("error",e),Fu("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,r,s,n,null)}}return a&&Ju(e,t,"srcSet",n.srcSet,n,null),void(i&&Ju(e,t,"src",n.src,n,null));case"input":Fu("invalid",e);var l=r=s=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Ju(e,t,i,d,n,null)}}return vt(e,r,l,c,u,s,a,!1),void dt(e);case"select":for(a in Fu("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Ju(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?bt(e,!!i,t,!1):null!=n&&bt(e,!!i,n,!0));case"textarea":for(s in Fu("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Ju(e,t,s,l,n,null)}return wt(e,i,a,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Ju(e,t,c,i,n,null);return;case"dialog":Fu("beforetoggle",e),Fu("toggle",e),Fu("cancel",e),Fu("close",e);break;case"iframe":case"object":Fu("load",e);break;case"video":case"audio":for(i=0;i<zu.length;i++)Fu(zu[i],e);break;case"image":Fu("error",e),Fu("load",e);break;case"details":Fu("toggle",e);break;case"embed":case"source":case"link":Fu("error",e),Fu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,u,i,n,null)}return;default:if(Pt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Zu(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Ju(e,t,l,i,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(pd)}:ld;function pd(e){setTimeout((function(){throw e}))}function hd(e){return"head"===e}function fd(e,t){var n=t,r=0,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Ie]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=s}}if(0===i)return e.removeChild(a),void jp(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);jp(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),$e(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$e(e)}var kd=new Map,Sd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=D.d;D.d={f:function(){var e=Cd.f(),t=Vc();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?_o(t):Cd.r(e)},D:function(e){Cd.D(e),jd("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),jd("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=Pd;if(r&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+mt(n.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var a=i;switch(t){case"style":a=Rd(e);break;case"script":a=Md(e)}kd.has(a)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),kd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Ad(a))||"script"===t&&r.querySelector(_d(a))||(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=Pd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Md(e)}if(!kd.has(a)&&(e=p({rel:"modulepreload",href:e},t),kd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(_d(a)))return}ed(r=n.createElement("link"),"link",e),He(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=Pd;if(n&&e){var r=We(n).hoistableScripts,i=Md(e),a=r.get(i);a||((a=n.querySelector(_d(i)))||(e=p({src:e,async:!0},t),(t=kd.get(i))&&Fd(e,t),He(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Cd.S(e,t,n);var r=Pd;if(r&&e){var i=We(r).hoistableStyles,a=Rd(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Ad(a)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kd.get(a))&&Od(e,n);var l=o=r.createElement("link");He(l),ed(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,Dd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Cd.M(e,t);var n=Pd;if(n&&e){var r=We(n).hoistableScripts,i=Md(e),a=r.get(i);a||((a=n.querySelector(_d(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=kd.get(i))&&Fd(e,t),He(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var Pd="undefined"===typeof document?null:document;function jd(e,t,n){var r=Pd;if(r&&"string"===typeof t&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),Sd.has(i)||(Sd.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}}function Td(e,t,n,r){var i,a,s,l,c=(c=W.current)?Ed(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Rd(n.href),(r=(n=We(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Rd(n.href);var u=We(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Ad(e)))&&!u._p&&(d.instance=u,d.state.loading=5),kd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kd.set(e,n),u||(i=c,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",(function(){return l.loading|=1})),a.addEventListener("error",(function(){return l.loading|=2})),ed(a,"link",s),He(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Md(n),(r=(n=We(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Rd(e){return'href="'+mt(e)+'"'}function Ad(e){return'link[rel="stylesheet"]['+e+"]"}function Ld(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Md(e){return'[src="'+mt(e)+'"]'}function _d(e){return"script[async]"+e}function zd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,He(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return He(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",i),Dd(r,n.precedence,e),t.instance=r;case"stylesheet":i=Rd(n.href);var a=e.querySelector(Ad(i));if(a)return t.state.loading|=4,t.instance=a,He(a),a;r=Ld(n),(i=kd.get(i))&&Od(r,i),He(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",r),t.state.loading|=4,Dd(a,n.precedence,e),t.instance=a;case"script":return a=Md(n.src),(i=e.querySelector(_d(a)))?(t.instance=i,He(i),i):(r=n,(i=kd.get(a))&&Fd(r=p({},n),i),He(i=(e=e.ownerDocument||e).createElement("script")),ed(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Dd(r,n.precedence,e));return t.instance}function Dd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Od(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Nd=null;function Id(e,t,n){if(null===Nd){var r=new Map,i=Nd=new Map;i.set(n,r)}else(r=(i=Nd).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ie]||a[Me]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function $d(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Vd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Ud(){}function Wd(){if(this.count--,0===this.count)if(this.stylesheets)Yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Hd=null;function Yd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Hd=new Map,t.forEach(Kd,e),Hd=null,Wd.call(e))}function Kd(e,t){if(!(4&t.state.loading)){var n=Hd.get(e);if(n)var r=n.get(null);else{n=new Map,Hd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=Wd.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var qd={$$typeof:w,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Qd(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Gd(e,t,n,r,i,a,o,s,l,c,u,d){return e=new Qd(e,t,n,o,s,l,c,d),t=1,!0===a&&(t|=24),a=Or(3,null,null,t),e.current=a,a.stateNode=e,(t=_i()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},na(a),e}function Xd(e){return e?e=zr:zr}function Jd(e,t,n,r,i,a){i=Xd(i),null===r.context?r.context=i:r.pendingContext=i,(r=ia(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=aa(e,r,t))&&(Oc(n,0,t),oa(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ep(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tp(e){if(13===e.tag){var t=Lr(e,67108864);null!==t&&Oc(t,0,67108864),ep(e,67108864)}}var np=!0;function rp(e,t,n,r){var i=z.T;z.T=null;var a=D.p;try{D.p=2,ap(e,t,n,r)}finally{D.p=a,z.T=i}}function ip(e,t,n,r){var i=z.T;z.T=null;var a=D.p;try{D.p=8,ap(e,t,n,r)}finally{D.p=a,z.T=i}}function ap(e,t,n,r){if(np){var i=op(r);if(null===i)Bu(e,t,r,sp,n),yp(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return dp=bp(dp,e,t,n,r,i),!0;case"dragenter":return pp=bp(pp,e,t,n,r,i),!0;case"mouseover":return hp=bp(hp,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return fp.set(a,bp(fp.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,mp.set(a,bp(mp.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(yp(e,r),4&t&&-1<vp.indexOf(e)){for(;null!==i;){var a=Be(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=ye(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-he(o);s.entanglements[1]|=l,o&=~l}ku(a),0===(6&nc)&&(kc=te()+500,Su(0,!1))}}break;case 13:null!==(s=Lr(a,2))&&Oc(s,0,2),Vc(),ep(a,2)}if(null===(a=op(r))&&Bu(e,t,r,sp,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Bu(e,t,r,null,n)}}function op(e){return lp(e=Lt(e))}var sp=null;function lp(e){if(sp=null,null!==(e=Ve(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sp=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case ae:case oe:return 32;case se:return 268435456;default:return 32}default:return 32}}var up=!1,dp=null,pp=null,hp=null,fp=new Map,mp=new Map,gp=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yp(e,t){switch(e){case"focusin":case"focusout":dp=null;break;case"dragenter":case"dragleave":pp=null;break;case"mouseover":case"mouseout":hp=null;break;case"pointerover":case"pointerout":fp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mp.delete(t.pointerId)}}function bp(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Be(t))&&tp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function xp(e){var t=Ve(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}(e.priority,(function(){if(13===n.tag){var e=zc();e=Te(e);var t=Lr(n,e);null!==t&&Oc(t,0,e),ep(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=op(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function kp(e,t,n){wp(e)&&n.delete(t)}function Sp(){up=!1,null!==dp&&wp(dp)&&(dp=null),null!==pp&&wp(pp)&&(pp=null),null!==hp&&wp(hp)&&(hp=null),fp.forEach(kp),mp.forEach(kp)}function Ep(e,t){e.blockedOn===t&&(e.blockedOn=null,up||(up=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sp)))}var Cp=null;function Pp(e){Cp!==e&&(Cp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Cp===e&&(Cp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===lp(r||n))continue;break}var a=Be(n);null!==a&&(e.splice(t,3),t-=3,Lo(a,{pending:!0,data:i,method:n.method,action:r},r,i))}})))}function jp(e){function t(t){return Ep(t,e)}null!==dp&&Ep(dp,e),null!==pp&&Ep(pp,e),null!==hp&&Ep(hp,e),fp.forEach(t),mp.forEach(t);for(var n=0;n<gp.length;n++){var r=gp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gp.length&&null===(n=gp[0]).blockedOn;)xp(n),null===n.blockedOn&&gp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_e]||null;if("function"===typeof a)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[_e]||null)s=o.formAction;else if(null!==lp(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function Tp(e){this._internalRoot=e}function Rp(e){this._internalRoot=e}Rp.prototype.render=Tp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Jd(t.current,zc(),e,t,null,null)},Rp.prototype.unmount=Tp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Vc(),t[ze]=null}},Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gp.length&&0!==t&&t<gp[n].priority;n++);gp.splice(n,0,e),0===n&&xp(e)}};var Ap=i.version;if("19.1.0"!==Ap)throw Error(o(527,Ap,"19.1.0"));D.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return u(i),e;if(a===r)return u(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Lp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Mp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mp.isDisabled&&Mp.supportsFiber)try{ue=Mp.inject(Lp),de=Mp}catch(zp){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=ys,a=bs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Gd(e,1,!1,null,0,n,r,i,a,l,0,null),e[ze]=t.current,$u(e),new Tp(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=ys,l=bs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Gd(e,1,!0,t,0,r,i,a,l,c,0,u)).context=Xd(null),n=t.current,(i=ia(r=Te(r=zc()))).callback=null,aa(n,i,r),n=r,t.current.lanes=n,Ce(t,n),ku(t),e[ze]=t.current,$u(e),new Rp(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},175:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},S=Object.prototype.hasOwnProperty;function E(e,t,r,i,a,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(){}function R(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return R((u=e._init)(e._payload),t,i,a,o)}}if(u)return o=o(e),u=""===a?"."+j(e,0):a,w(o)?(i="",null!=u&&(i=u.replace(P,"$&/")+"/"),R(o,t,i,"",(function(e){return e}))):null!=o&&(C(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+u,o=E(l.type,c,void 0,0,0,l.props)),t.push(o)),1;u=0;var d,f=""===a?".":a+":";if(w(e))for(var m=0;m<e.length;m++)u+=R(a=e[m],t,i,s=f+j(a,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(a=e.next()).done;)u+=R(a=a.value,t,i,s=f+j(a,m++),o);else if("object"===s){if("function"===typeof e.then)return R(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(T,T):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function _(){}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!S.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return E(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),i=k.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(_,M)}catch(a){M(a)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=k.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,E||(E=!0,S());else{var t=r(u);null!==t&&M(k,t.startTime-e)}}var S,E=!1,C=-1,P=5,j=-1;function T(){return!!v||!(t.unstable_now()-j<P)}function R(){if(v=!1,E){var e=t.unstable_now();j=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),f=!0;var a=h;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&T());){var o=p.callback;if("function"===typeof o){p.callback=null,h=p.priorityLevel;var s=o(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){p.callback=s,w(e),n=!0;break t}p===r(c)&&i(c),w(e)}else i(c);p=r(c)}if(null!==p)n=!0;else{var l=r(u);null!==l&&M(k,l.startTime-e),n=!1}}break e}finally{p=null,h=a,f=!1}n=void 0}}finally{n?S():E=!1}}}if("function"===typeof x)S=function(){x(R)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,L=A.port2;A.port1.onmessage=R,S=function(){L.postMessage(null)}}else S=function(){y(R,0)};function M(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(b(C),C=-1):g=!0,M(k,a-o))):(e.sortIndex=s,n(c,e),m||f||(m=!0,E||(E=!0,S()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".1407b060.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);function r(){return"undefined"!==typeof window}function i(){try{const e="production";if("development"===e||"test"===e)return"development"}catch(e){}return"production"}function a(){return(r()?window.vam:i())||"production"}function o(){return"development"===a()}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};var t;if(!r())return;!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";window.vam="auto"!==e?e:i()}(e.mode),window.va||(window.va=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)}),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));const n=function(e){return e.scriptSrc?e.scriptSrc:o()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?`${e.basePath}/insights/script.js`:"/_vercel/insights/script.js"}(e);if(document.head.querySelector(`script[src*="${n}"]`))return;const a=document.createElement("script");a.src=n,a.defer=!0,a.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),a.dataset.sdkv="1.5.0",e.disableAutoTrack&&(a.dataset.disableAutoTrack="1"),e.endpoint?a.dataset.endpoint=e.endpoint:e.basePath&&(a.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(a.dataset.dsn=e.dsn),a.onerror=()=>{const e=o()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},o()&&!1===e.debug&&(a.dataset.debug="false"),document.head.appendChild(a)}function l(){if("undefined"!==typeof process)return{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function c(t){return(0,e.useEffect)((()=>{var e;t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend))}),[t.beforeSend]),(0,e.useEffect)((()=>{s({framework:t.framework||"react",basePath:t.basePath??l(),...void 0!==t.route&&{disableAutoTrack:!0},...t})}),[]),(0,e.useEffect)((()=>{t.route&&t.path&&function(e){let{route:t,path:n}=e;var r;null==(r=window.va)||r.call(window,"pageview",{route:t,path:n})}({route:t.route,path:t.path})}),[t.route,t.path]),null}n(175);var u="popstate";function d(){return y((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return m("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:g(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function p(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function h(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function m(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?v(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function g(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function y(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s="POP",l=null,c=d();function d(){return(o.state||{idx:null}).idx}function h(){s="POP";let e=d(),t=null==e?null:e-c;c=e,l&&l({action:s,location:y.location,delta:t})}function v(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:g(e);return n=n.replace(/ $/,"%20"),p(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==c&&(c=0,o.replaceState({...o.state,idx:c},""));let y={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(u,h),l=e,()=>{i.removeEventListener(u,h),l=null}},createHref:e=>t(i,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=m(y.location,e,t);n&&n(r,e),c=d()+1;let u=f(r,c),p=y.createHref(r);try{o.pushState(u,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(p)}a&&l&&l({action:s,location:y.location,delta:1})},replace:function(e,t){s="REPLACE";let r=m(y.location,e,t);n&&n(r,e),c=d();let i=f(r,c),u=y.createHref(r);o.replaceState(i,"",u),a&&l&&l({action:s,location:y.location,delta:0})},go:e=>o.go(e)};return y}new WeakMap;function b(e,t){return x(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function x(e,t,n,r){let i=D(("string"===typeof t?v(t):t).pathname||"/",n);if(null==i)return null;let a=w(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=z(i);o=L(a[s],e,r)}return o}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(p(o.relativePath.startsWith(r),`Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=$([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(p(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),w(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:A(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of k(e.path))i(e,t,n);else i(e,t)})),t}function k(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=k(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var S=/^:[\w-]+$/,E=3,C=2,P=1,j=10,T=-2,R=e=>"*"===e;function A(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=T),t&&(r+=C),n.filter((e=>!R(e))).reduce(((e,t)=>e+(S.test(t)?E:""===t?P:j)),r)}function L(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=M({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=M({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:$([a,u.pathname]),pathnameBase:V($([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=$([a,u.pathnameBase]))}return o}function M(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];h("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function z(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return h(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function D(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function O(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function F(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function N(e){let t=F(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function I(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=v(e):(r={...e},p(!r.pathname||!r.pathname.includes("?"),O("?","pathname","search",r)),p(!r.pathname||!r.pathname.includes("#"),O("#","pathname","hash",r)),p(!r.search||!r.search.includes("#"),O("#","search","hash",r)));let a,o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)a=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?v(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:B(r),hash:U(i)}}(r,a),c=s&&"/"!==s&&s.endsWith("/"),u=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}var $=e=>e.join("/").replace(/\/\/+/g,"/"),V=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",U=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function W(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var H=["POST","PUT","PATCH","DELETE"],Y=(new Set(H),["GET",...H]);new Set(Y),Symbol("ResetLoaderData");var K=e.createContext(null);K.displayName="DataRouter";var q=e.createContext(null);q.displayName="DataRouterState";var Q=e.createContext({isTransitioning:!1});Q.displayName="ViewTransition";var G=e.createContext(new Map);G.displayName="Fetchers";var X=e.createContext(null);X.displayName="Await";var J=e.createContext(null);J.displayName="Navigation";var Z=e.createContext(null);Z.displayName="Location";var ee=e.createContext({outlet:null,matches:[],isDataRoute:!1});ee.displayName="Route";var te=e.createContext(null);te.displayName="RouteError";function ne(){return null!=e.useContext(Z)}function re(){return p(ne(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(Z).location}var ie="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ae(t){e.useContext(J).static||e.useLayoutEffect(t)}function oe(){let{isDataRoute:t}=e.useContext(ee);return t?function(){let{router:t}=me("useNavigate"),n=ve("useNavigate"),r=e.useRef(!1);ae((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h(r.current,ie),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){p(ne(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(K),{basename:n,navigator:r}=e.useContext(J),{matches:i}=e.useContext(ee),{pathname:a}=re(),o=JSON.stringify(N(i)),s=e.useRef(!1);ae((()=>{s.current=!0}));let l=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(h(s.current,ie),!s.current)return;if("number"===typeof e)return void r.go(e);let l=I(e,JSON.parse(o),a,"path"===i.relative);null==t&&"/"!==n&&(l.pathname="/"===l.pathname?n:$([n,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[n,r,o,a,t]);return l}()}e.createContext(null);function se(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(ee),{pathname:i}=re(),a=JSON.stringify(N(r));return e.useMemo((()=>I(t,JSON.parse(a),i,"path"===n)),[t,a,i,n])}function le(t,n,r,i){p(ne(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=e.useContext(J),{matches:s}=e.useContext(ee),l=s[s.length-1],c=l?l.params:{},u=l?l.pathname:"/",d=l?l.pathnameBase:"/",f=l&&l.route;{let e=f&&f.path||"";xe(u,!f||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let m,g=re();if(n){let e="string"===typeof n?v(n):n;p("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),m=e}else m=g;let y=m.pathname||"/",x=y;if("/"!==d){let e=d.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!o&&r&&r.matches&&r.matches.length>0?r.matches:b(t,{pathname:x});h(f||null!=w,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),h(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=he(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:$([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:$([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,r,i);return n&&k?e.createElement(Z.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},k):k}function ce(){let t=ye(),n=W(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:a},r):null,s)}var ue=e.createElement(ce,null),de=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(ee.Provider,{value:this.props.routeContext},e.createElement(te.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pe(t){let{routeContext:n,match:r,children:i}=t,a=e.useContext(K);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(ee.Provider,{value:n},i)}function he(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,a=r?.errors;if(null!=a){let e=i.findIndex((e=>e.route.id&&void 0!==a?.[e.route.id]));p(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){o=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight(((t,l,c)=>{let u,d=!1,p=null,h=null;r&&(u=a&&l.route.id?a[l.route.id]:void 0,p=l.route.errorElement||ue,o&&(s<0&&0===c?(xe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,h=null):s===c&&(d=!0,h=l.route.hydrateFallbackElement||null)));let f=n.concat(i.slice(0,c+1)),m=()=>{let n;return n=u?p:d?h:l.route.Component?e.createElement(l.route.Component,null):l.route.element?l.route.element:t,e.createElement(pe,{match:l,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===c)?e.createElement(de,{location:r.location,revalidation:r.revalidation,component:p,error:u,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}function fe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function me(t){let n=e.useContext(K);return p(n,fe(t)),n}function ge(t){let n=e.useContext(q);return p(n,fe(t)),n}function ve(t){let n=function(t){let n=e.useContext(ee);return p(n,fe(t)),n}(t),r=n.matches[n.matches.length-1];return p(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ye(){let t=e.useContext(te),n=ge("useRouteError"),r=ve("useRouteError");return void 0!==t?t:n.errors?.[r]}var be={};function xe(e,t,n){t||be[e]||(be[e]=!0,h(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return le(t,void 0,r,n)}));function we(e){p(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ke(t){let{basename:n="/",children:r=null,location:i,navigationType:a="POP",navigator:o,static:s=!1}=t;p(!ne(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),c=e.useMemo((()=>({basename:l,navigator:o,static:s,future:{}})),[l,o,s]);"string"===typeof i&&(i=v(i));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:g="default"}=i,y=e.useMemo((()=>{let e=D(u,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:m,key:g},navigationType:a}}),[l,u,d,f,m,g,a]);return h(null!=y,`<Router basename="${l}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(J.Provider,{value:c},e.createElement(Z.Provider,{children:r,value:y}))}function Se(e){let{children:t,location:n}=e;return le(Ee(t),n)}e.Component;function Ee(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let a=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,Ee(t.props.children,a));p(t.type===we,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),p(!t.props.index||!t.props.children,"An index route cannot have child routes.");let o={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(o.children=Ee(t.props.children,a)),r.push(o)})),r}var Ce="get",Pe="application/x-www-form-urlencoded";function je(e){return null!=e&&"string"===typeof e.tagName}var Te=null;var Re=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ae(e){return null==e||Re.has(e)?e:(h(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pe}"`),null)}function Le(e,t){let n,r,i,a,o;if(je(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?D(o,t):null,n=e.getAttribute("method")||Ce,i=Ae(e.getAttribute("enctype"))||Pe,a=new FormData(e)}else if(function(e){return je(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return je(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?D(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Ce,i=Ae(e.getAttribute("formenctype"))||Ae(o.getAttribute("enctype"))||Pe,a=new FormData(o,e),!function(){if(null===Te)try{new FormData(document.createElement("form"),0),Te=!1}catch(e){Te=!0}return Te}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(je(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ce,r=null,i=Pe,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function Me(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function _e(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function ze(e){return null!=e&&"string"===typeof e.page}function De(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Oe(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter(((e,t)=>o(e,t)||s(e,t))):"data"===a?t.filter(((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Fe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Ne(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!ze(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e}),[])}function Ie(e){return{__html:e}}Symbol("SingleFetchRedirect");var $e=new Set([100,101,204,205]);function Ve(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===D(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Be(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,a=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(W(n))return e.createElement(Ue,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),a);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ue,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function Ue(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:a}=t,{routeModules:o}=qe();return o.root?.Layout&&!i?a:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,r?e.createElement(tt,null):null)))}function We(e){return!0===e}function He(){let t=e.useContext(K);return Me(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ye(){let t=e.useContext(q);return Me(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ke=e.createContext(void 0);function qe(){let t=e.useContext(Ke);return Me(t,"You must render this element inside a <HydratedRouter> element"),t}function Qe(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ge(e,t,n){if(n&&!et)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Xe(t){let{page:n,...r}=t,{router:i}=He(),a=e.useMemo((()=>b(i.routes,n,i.basename)),[i.routes,n,i.basename]);return a?e.createElement(Ze,{page:n,matches:a,...r}):null}function Je(t){let{manifest:n,routeModules:r}=qe(),[i,a]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await _e(r,n);return e.links?e.links():[]}return[]})));return Ne(r.flat(1).filter(De).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||a(t)})),()=>{e=!0}}),[t,n,r]),i}function Ze(t){let{page:n,matches:r,...i}=t,a=re(),{manifest:o,routeModules:s}=qe(),{basename:l}=He(),{loaderData:c,matches:u}=Ye(),d=e.useMemo((()=>Oe(n,r,u,o,a,"data")),[n,r,u,o,a]),p=e.useMemo((()=>Oe(n,r,u,o,a,"assets")),[n,r,u,o,a]),h=e.useMemo((()=>{if(n===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Ve(n,l);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[l,c,a,o,d,r,n,s]),f=e.useMemo((()=>Fe(p,o)),[p,o]),m=Je(p);return e.createElement(e.Fragment,null,h.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),f.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ke.displayName="FrameworkContext";var et=!1;function tt(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:a,renderMeta:o}=qe(),{router:s,static:l,staticContext:c}=He(),{matches:u}=Ye(),d=We(a);o&&(o.didRenderScripts=!0);let p=Ge(u,null,i);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let i=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];Me(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map((e=>e.route.id))),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach((e=>{let n=b(t.routes,e,t.basename);n&&n.forEach((e=>i.add(e.route.id)))}));let s=[...i].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:s,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ie(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Ie(a),type:"module",async:!0}))}),[]),f=et?[]:(n.entry.imports.concat(Fe(p,n,{includeHydrateFallback:!0})),[...new Set(m)]);var m;let g="object"===typeof n.sri?n.sri:{};return et?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:g})}}):null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:g[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:g[n.entry.module],suppressHydrationWarning:!0}),f.map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:g[n],suppressHydrationWarning:!0}))),h)}function nt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var rt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{rt&&(window.__reactRouterVersion="7.5.1")}catch(Yv){}function it(t){let{basename:n,children:r,window:i}=t,a=e.useRef();null==a.current&&(a.current=d({window:i,v5Compat:!0}));let o=a.current,[s,l]=e.useState({action:o.action,location:o.location}),c=e.useCallback((t=>{e.startTransition((()=>l(t)))}),[l]);return e.useLayoutEffect((()=>o.listen(c)),[o,c]),e.createElement(ke,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:o})}var at=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ot=e.forwardRef((function(t,n){let r,{onClick:i,discover:a="render",prefetch:o="none",relative:s,reloadDocument:l,replace:c,state:u,target:d,to:f,preventScrollReset:m,viewTransition:v,...y}=t,{basename:b}=e.useContext(J),x="string"===typeof f&&at.test(f),w=!1;if("string"===typeof f&&x&&(r=f,rt))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=D(t.pathname,b);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:w=!0}catch(Yv){h(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p(ne(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(J),{hash:a,pathname:o,search:s}=se(t,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:$([r,o])),i.createHref({pathname:l,search:s,hash:a})}(f,{relative:s}),[S,E,C]=function(t,n){let r=e.useContext(Ke),[i,a]=e.useState(!1),[o,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=n,h=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let f=()=>{a(!0)},m=()=>{a(!1),s(!1)};return r?"intent"!==t?[o,h,{}]:[o,h,{onFocus:Qe(l,f),onBlur:Qe(c,m),onMouseEnter:Qe(u,f),onMouseLeave:Qe(d,m),onTouchStart:Qe(p,f)}]:[!1,h,{}]}(o,y),P=function(t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=oe(),c=re(),u=se(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:g(c)===g(u);l(t,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}}),[c,l,u,r,i,n,t,a,o,s])}(f,{replace:c,state:u,target:d,preventScrollReset:m,relative:s,viewTransition:v});let j=e.createElement("a",{...y,...C,href:r||k,onClick:w||l?i:function(e){i&&i(e),e.defaultPrevented||P(e)},ref:nt(n,E),target:d,"data-discover":x||"render"!==a?void 0:"true"});return S&&!x?e.createElement(e.Fragment,null,j,e.createElement(Xe,{page:k})):j}));ot.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,viewTransition:c,children:u,...d}=t,h=se(l,{relative:d.relative}),f=re(),m=e.useContext(q),{navigator:g,basename:v}=e.useContext(J),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(Q);p(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ct("useViewTransitionState"),a=se(t,{relative:n.relative});if(!r.isTransitioning)return!1;let o=D(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=D(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=M(a.pathname,s)||null!=M(a.pathname,o)}(h)&&!0===c,b=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,x=f.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=D(w,v)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,E=x===b||!o&&x.startsWith(b)&&"/"===x.charAt(k),C=null!=w&&(w===b||!o&&w.startsWith(b)&&"/"===w.charAt(b.length)),P={isActive:E,isPending:C,isTransitioning:y},j=E?r:void 0;S="function"===typeof a?a(P):[a,E?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let T="function"===typeof s?s(P):s;return e.createElement(ot,{...d,"aria-current":j,className:S,ref:n,style:T,to:l,viewTransition:c},"function"===typeof u?u(P):u)})).displayName="NavLink";var st=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:a,reloadDocument:o,replace:s,state:l,method:c=Ce,action:u,onSubmit:d,relative:h,preventScrollReset:f,viewTransition:m,...v}=t,y=pt(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(J),i=e.useContext(ee);p(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...se(t||".",{relative:n})},s=re();if(null==t){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();o.search=n?`?${n}`:""}}t&&"."!==t||!a.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(o.pathname="/"===o.pathname?r:$([r,o.pathname]));return g(o)}(u,{relative:h}),x="get"===c.toLowerCase()?"get":"post",w="string"===typeof u&&at.test(u);return e.createElement("form",{ref:n,method:x,action:b,onSubmit:o?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c;y(t||e.currentTarget,{fetcherKey:i,method:n,navigate:a,replace:s,state:l,relative:h,preventScrollReset:f,viewTransition:m})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function lt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ct(t){let n=e.useContext(K);return p(n,lt(t)),n}st.displayName="Form";var ut=0,dt=()=>`__${String(++ut)}__`;function pt(){let{router:t}=ct("useSubmit"),{basename:n}=e.useContext(J),r=ve("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:c}=Le(e,n);if(!1===i.navigate){let e=i.fetcherKey||dt();await t.fetch(e,r,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var ht=n(579);const ft=(0,e.createContext)(void 0),mt=t=>{let{children:n}=t;const r=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[i,a]=(0,e.useState)((()=>localStorage.getItem("theme")||r())),[o,s]=(0,e.useState)((()=>{const e=localStorage.getItem("customTheme");return e?JSON.parse(e):null}));(0,e.useEffect)((()=>{document.body.dataset.theme=i,localStorage.setItem("theme",i)}),[i]),(0,e.useEffect)((()=>{if("custom"===i&&o){const e=gt(o.accent),t=gt(o.accentHover);document.documentElement.style.setProperty("--custom-bg-primary",o.bgPrimary),document.documentElement.style.setProperty("--custom-bg-secondary",o.bgSecondary),document.documentElement.style.setProperty("--custom-text-primary",o.textPrimary),document.documentElement.style.setProperty("--custom-text-secondary",o.textSecondary),document.documentElement.style.setProperty("--custom-accent",o.accent),document.documentElement.style.setProperty("--custom-accent-hover",o.accentHover),document.documentElement.style.setProperty("--custom-border",o.border),document.documentElement.style.setProperty("--custom-shadow",o.shadow),document.documentElement.style.setProperty("--custom-accent-rgb",e),document.documentElement.style.setProperty("--custom-accent-hover-rgb",t),o.fontFamily&&document.documentElement.style.setProperty("--custom-font-family",o.fontFamily)}else document.documentElement.style.removeProperty("--custom-bg-primary"),document.documentElement.style.removeProperty("--custom-bg-secondary"),document.documentElement.style.removeProperty("--custom-text-primary"),document.documentElement.style.removeProperty("--custom-text-secondary"),document.documentElement.style.removeProperty("--custom-accent"),document.documentElement.style.removeProperty("--custom-accent-hover"),document.documentElement.style.removeProperty("--custom-border"),document.documentElement.style.removeProperty("--custom-shadow"),document.documentElement.style.removeProperty("--custom-accent-rgb"),document.documentElement.style.removeProperty("--custom-accent-hover-rgb"),document.documentElement.style.removeProperty("--custom-font-family")}),[i,o]),(0,e.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{localStorage.getItem("theme")||a(e.matches?"dark":"light")};return e.addEventListener?e.addEventListener("change",t):e.addListener(t),()=>{e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}}),[]);return(0,ht.jsx)(ft.Provider,{value:{theme:i,toggleTheme:()=>{a((e=>{let t;return t="custom"===e?"light":"light"===e?"dark":"light",localStorage.setItem("theme",t),t}))},setCustomTheme:e=>{s(e),a("custom"),localStorage.setItem("customTheme",JSON.stringify(e)),localStorage.setItem("theme","custom")},resetToDefaultTheme:()=>{const e=r();a(e),localStorage.setItem("theme",e)},customTheme:o,getThemeCSSVariables:()=>"custom"===i&&o?{"--bg-primary":o.bgPrimary,"--bg-secondary":o.bgSecondary,"--text-primary":o.textPrimary,"--text-secondary":o.textSecondary,"--accent":o.accent,"--accent-hover":o.accentHover,"--border":o.border,"--shadow":o.shadow,"--font-family":o.fontFamily}:{},exportThemeCSS:()=>{if("custom"===i&&o){let e="/* Custom Theme CSS Variables */\n:root {\n";return e+=`  --custom-bg-primary: ${o.bgPrimary};\n`,e+=`  --custom-bg-secondary: ${o.bgSecondary};\n`,e+=`  --custom-text-primary: ${o.textPrimary};\n`,e+=`  --custom-text-secondary: ${o.textSecondary};\n`,e+=`  --custom-accent: ${o.accent};\n`,e+=`  --custom-accent-hover: ${o.accentHover};\n`,e+=`  --custom-border: ${o.border};\n`,e+=`  --custom-shadow: ${o.shadow};\n`,e+=`  --custom-font-family: ${o.fontFamily};\n`,e+="}\n",e}return""}},children:n})};function gt(e){3===(e=e.replace("#","")).length&&(e=e.split("").map((e=>e+e)).join(""));return`${parseInt(e.substring(0,2),16)}, ${parseInt(e.substring(2,4),16)}, ${parseInt(e.substring(4,6),16)}`}var vt=function(){return vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},vt.apply(this,arguments)};Object.create;function yt(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var bt=n(324),xt=n.n(bt),wt="-ms-",kt="-moz-",St="-webkit-",Et="comm",Ct="rule",Pt="decl",jt="@keyframes",Tt=Math.abs,Rt=String.fromCharCode,At=Object.assign;function Lt(e){return e.trim()}function Mt(e,t){return(e=t.exec(e))?e[0]:e}function _t(e,t,n){return e.replace(t,n)}function zt(e,t,n){return e.indexOf(t,n)}function Dt(e,t){return 0|e.charCodeAt(t)}function Ot(e,t,n){return e.slice(t,n)}function Ft(e){return e.length}function Nt(e){return e.length}function It(e,t){return t.push(e),e}function $t(e,t){return e.filter((function(e){return!Mt(e,t)}))}var Vt=1,Bt=1,Ut=0,Wt=0,Ht=0,Yt="";function Kt(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Vt,column:Bt,length:o,return:"",siblings:s}}function qt(e,t){return At(Kt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Qt(e){for(;e.root;)e=qt(e.root,{children:[e]});It(e,e.siblings)}function Gt(){return Ht=Wt>0?Dt(Yt,--Wt):0,Bt--,10===Ht&&(Bt=1,Vt--),Ht}function Xt(){return Ht=Wt<Ut?Dt(Yt,Wt++):0,Bt++,10===Ht&&(Bt=1,Vt++),Ht}function Jt(){return Dt(Yt,Wt)}function Zt(){return Wt}function en(e,t){return Ot(Yt,e,t)}function tn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nn(e){return Vt=Bt=1,Ut=Ft(Yt=e),Wt=0,[]}function rn(e){return Yt="",e}function an(e){return Lt(en(Wt-1,ln(91===e?e+2:40===e?e+1:e)))}function on(e){for(;(Ht=Jt())&&Ht<33;)Xt();return tn(e)>2||tn(Ht)>3?"":" "}function sn(e,t){for(;--t&&Xt()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return en(e,Zt()+(t<6&&32==Jt()&&32==Xt()))}function ln(e){for(;Xt();)switch(Ht){case e:return Wt;case 34:case 39:34!==e&&39!==e&&ln(Ht);break;case 40:41===e&&ln(e);break;case 92:Xt()}return Wt}function cn(e,t){for(;Xt()&&e+Ht!==57&&(e+Ht!==84||47!==Jt()););return"/*"+en(t,Wt-1)+"*"+Rt(47===e?e:Xt())}function un(e){for(;!tn(Jt());)Xt();return en(e,Wt)}function dn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function pn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Pt:return e.return=e.return||e.value;case Et:return"";case jt:return e.return=e.value+"{"+dn(e.children,r)+"}";case Ct:if(!Ft(e.value=e.props.join(",")))return""}return Ft(n=dn(e.children,r))?e.return=e.value+"{"+n+"}":""}function hn(e,t,n){switch(function(e,t){return 45^Dt(e,0)?(((t<<2^Dt(e,0))<<2^Dt(e,1))<<2^Dt(e,2))<<2^Dt(e,3):0}(e,t)){case 5103:return St+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return St+e+e;case 4789:return kt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return St+e+kt+e+wt+e+e;case 5936:switch(Dt(e,t+11)){case 114:return St+e+wt+_t(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return St+e+wt+_t(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return St+e+wt+_t(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return St+e+wt+e+e;case 6165:return St+e+wt+"flex-"+e+e;case 5187:return St+e+_t(e,/(\w+).+(:[^]+)/,St+"box-$1$2"+wt+"flex-$1$2")+e;case 5443:return St+e+wt+"flex-item-"+_t(e,/flex-|-self/g,"")+(Mt(e,/flex-|baseline/)?"":wt+"grid-row-"+_t(e,/flex-|-self/g,""))+e;case 4675:return St+e+wt+"flex-line-pack"+_t(e,/align-content|flex-|-self/g,"")+e;case 5548:return St+e+wt+_t(e,"shrink","negative")+e;case 5292:return St+e+wt+_t(e,"basis","preferred-size")+e;case 6060:return St+"box-"+_t(e,"-grow","")+St+e+wt+_t(e,"grow","positive")+e;case 4554:return St+_t(e,/([^-])(transform)/g,"$1"+St+"$2")+e;case 6187:return _t(_t(_t(e,/(zoom-|grab)/,St+"$1"),/(image-set)/,St+"$1"),e,"")+e;case 5495:case 3959:return _t(e,/(image-set\([^]*)/,St+"$1$`$1");case 4968:return _t(_t(e,/(.+:)(flex-)?(.*)/,St+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+St+e+e;case 4200:if(!Mt(e,/flex-|baseline/))return wt+"grid-column-align"+Ot(e,t)+e;break;case 2592:case 3360:return wt+_t(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Mt(e.props,/grid-\w+-end/)}))?~zt(e+(n=n[t].value),"span",0)?e:wt+_t(e,"-start","")+e+wt+"grid-row-span:"+(~zt(n,"span",0)?Mt(n,/\d+/):+Mt(n,/\d+/)-+Mt(e,/\d+/))+";":wt+_t(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Mt(e.props,/grid-\w+-start/)}))?e:wt+_t(_t(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _t(e,/(.+)-inline(.+)/,St+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(e)-1-t>6)switch(Dt(e,t+1)){case 109:if(45!==Dt(e,t+4))break;case 102:return _t(e,/(.+:)(.+)-([^]+)/,"$1"+St+"$2-$3$1"+kt+(108==Dt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~zt(e,"stretch",0)?hn(_t(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return _t(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return wt+n+":"+r+s+(i?wt+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===Dt(e,t+6))return _t(e,":",":"+St)+e;break;case 6444:switch(Dt(e,45===Dt(e,14)?18:11)){case 120:return _t(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+St+(45===Dt(e,14)?"inline-":"")+"box$3$1"+St+"$2$3$1"+wt+"$2box$3")+e;case 100:return _t(e,":",":"+wt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _t(e,"scroll-","scroll-snap-")+e}return e}function fn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pt:return void(e.return=hn(e.value,e.length,n));case jt:return dn([qt(e,{value:_t(e.value,"@","@"+St)})],r);case Ct:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Mt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qt(qt(e,{props:[_t(t,/:(read-\w+)/,":-moz-$1")]})),Qt(qt(e,{props:[t]})),At(e,{props:$t(n,r)});break;case"::placeholder":Qt(qt(e,{props:[_t(t,/:(plac\w+)/,":"+St+"input-$1")]})),Qt(qt(e,{props:[_t(t,/:(plac\w+)/,":-moz-$1")]})),Qt(qt(e,{props:[_t(t,/:(plac\w+)/,wt+"input-$1")]})),Qt(qt(e,{props:[t]})),At(e,{props:$t(n,r)})}return""}))}}function mn(e){return rn(gn("",null,null,null,[""],e=nn(e),0,[0],e))}function gn(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,p=0,h=0,f=0,m=1,g=1,v=1,y=0,b="",x=i,w=a,k=r,S=b;g;)switch(f=y,y=Xt()){case 40:if(108!=f&&58==Dt(S,d-1)){-1!=zt(S+=_t(an(y),"&","&\f"),"&\f",Tt(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=an(y);break;case 9:case 10:case 13:case 32:S+=on(f);break;case 92:S+=sn(Zt()-1,7);continue;case 47:switch(Jt()){case 42:case 47:It(yn(cn(Xt(),Zt()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[c++]=Ft(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(S=_t(S,/\f/g,"")),h>0&&Ft(S)-d&&It(h>32?bn(S+";",r,n,d-1,l):bn(_t(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(It(k=vn(S,t,n,c,u,i,s,b,x=[],w=[],d,a),a),123===y)if(0===u)gn(S,t,k,k,x,a,d,s,w);else switch(99===p&&110===Dt(S,3)?100:p){case 100:case 108:case 109:case 115:gn(e,k,k,r&&It(vn(e,k,k,0,0,i,s,b,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:gn(S,k,k,k,[""],w,0,s,w)}}c=u=h=0,m=v=1,b=S="",d=o;break;case 58:d=1+Ft(S),h=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Gt())continue;switch(S+=Rt(y),y*m){case 38:v=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Ft(S)-1)*v,v=1;break;case 64:45===Jt()&&(S+=an(Xt())),p=Jt(),u=d=Ft(b=S+=un(Zt())),y++;break;case 45:45===f&&2==Ft(S)&&(m=0)}}return a}function vn(e,t,n,r,i,a,o,s,l,c,u,d){for(var p=i-1,h=0===i?a:[""],f=Nt(h),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Ot(e,p+1,p=Tt(g=o[m])),x=e;y<f;++y)(x=Lt(g>0?h[y]+" "+b:_t(b,/&\f/g,h[y])))&&(l[v++]=x);return Kt(e,t,n,0===i?Ct:s,l,c,u,d)}function yn(e,t,n,r){return Kt(e,t,n,Et,Rt(Ht),Ot(e,2,-2),0,r)}function bn(e,t,n,r,i){return Kt(e,t,n,Pt,Ot(e,0,r),Ot(e,r+1,-1),r,i)}var xn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",kn="active",Sn="data-styled-version",En="6.1.17",Cn="/*!sc*/\n",Pn="undefined"!=typeof window&&"HTMLElement"in window,jn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Tn={},Rn=(new Set,Object.freeze([])),An=Object.freeze({});function Ln(e,t,n){return void 0===n&&(n=An),e.theme!==n.theme&&e.theme||t||n.theme}var Mn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_n=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zn=/(^-|-$)/g;function Dn(e){return e.replace(_n,"-").replace(zn,"")}var On=/(a)(d)/gi,Fn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fn(t%52)+n;return(Fn(t%52)+n).replace(On,"$1-$2")}var In,$n=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Vn=function(e){return $n(5381,e)};function Bn(e){return Nn(Vn(e)>>>0)}function Un(e){return e.displayName||e.name||"Component"}function Wn(e){return"string"==typeof e&&!0}var Hn="function"==typeof Symbol&&Symbol.for,Yn=Hn?Symbol.for("react.memo"):60115,Kn=Hn?Symbol.for("react.forward_ref"):60112,qn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xn=((In={})[Kn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},In[Yn]=Gn,In);function Jn(e){return("type"in(t=e)&&t.type.$$typeof)===Yn?Gn:"$$typeof"in e?Xn[e.$$typeof]:qn;var t}var Zn=Object.defineProperty,er=Object.getOwnPropertyNames,tr=Object.getOwnPropertySymbols,nr=Object.getOwnPropertyDescriptor,rr=Object.getPrototypeOf,ir=Object.prototype;function ar(e,t,n){if("string"!=typeof t){if(ir){var r=rr(t);r&&r!==ir&&ar(e,r,n)}var i=er(t);tr&&(i=i.concat(tr(t)));for(var a=Jn(e),o=Jn(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Qn||n&&n[l]||o&&l in o||a&&l in a)){var c=nr(t,l);try{Zn(e,l,c)}catch(e){}}}}return e}function or(e){return"function"==typeof e}function sr(e){return"object"==typeof e&&"styledComponentId"in e}function lr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ur(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dr(e,t,n){if(void 0===n&&(n=!1),!n&&!ur(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=dr(e[r],t[r]);else if(ur(t))for(var r in t)e[r]=dr(e[r],t[r]);return e}function pr(e,t){Object.defineProperty(e,"toString",{value:t})}function hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw hr(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(Cn);return t},e}(),mr=new Map,gr=new Map,vr=1,yr=function(e){if(mr.has(e))return mr.get(e);for(;gr.has(vr);)vr++;var t=vr++;return mr.set(e,t),gr.set(t,e),t},br=function(e,t){vr=t+1,mr.set(e,t),gr.set(t,e)},xr="style[".concat(wn,"][").concat(Sn,'="').concat(En,'"]'),wr=new RegExp("^".concat(wn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kr=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},Sr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Cn),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(wr);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(br(u,c),kr(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},Er=function(e){for(var t=document.querySelectorAll(xr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(wn)!==kn&&(Sr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Cr(){return n.nc}var Pr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(wn,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(wn,kn),r.setAttribute(Sn,En);var o=Cr();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},jr=function(){function e(e){this.element=Pr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw hr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Tr=function(){function e(e){this.element=Pr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Rr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ar=Pn,Lr={isServer:!Pn,useCSSOMInjection:!jn},Mr=function(){function e(e,t,n){void 0===e&&(e=An),void 0===t&&(t={});var r=this;this.options=vt(vt({},Lr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Pn&&Ar&&(Ar=!1,Er(this)),pr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return gr.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(wn,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(Cn)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return yr(e)},e.prototype.rehydrate=function(){!this.server&&Pn&&Er(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(vt(vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Rr(n):t?new jr(n):new Tr(n)}(this.options),new fr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(yr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(yr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(yr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),_r=/&/g,zr=/^\s*\/\/.*$/gm;function Dr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Dr(e.children,t)),e}))}function Or(e){var t,n,r,i=void 0===e?An:e,a=i.options,o=void 0===a?An:a,s=i.plugins,l=void 0===s?Rn:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===Ct&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(_r,n).replace(r,c))})),o.prefix&&u.push(fn),u.push(pn);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(zr,""),c=mn(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=Dr(c,o.namespace));var d,p=[];return dn(c,function(e){var t=Nt(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||hr(15),$n(e,t.name)}),5381).toString():"",d}var Fr=new Mr,Nr=Or(),Ir=e.createContext({shouldForwardProp:void 0,styleSheet:Fr,stylis:Nr}),$r=(Ir.Consumer,e.createContext(void 0));function Vr(){return(0,e.useContext)(Ir)}function Br(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=Vr().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return Or({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){xt()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(Ir.Provider,{value:l},e.createElement($r.Provider,{value:s},t.children))}var Ur=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Nr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,pr(this,(function(){throw hr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Nr),this.name+e.hash},e}(),Wr=function(e){return e>="A"&&e<="Z"};function Hr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Wr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Yr=function(e){return null==e||!1===e||""===e},Kr=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Yr(a)&&(Array.isArray(a)&&a.isCss||or(a)?r.push("".concat(Hr(i),":"),a,";"):ur(a)?r.push.apply(r,yt(yt(["".concat(i," {")],Kr(a),!1),["}"],!1)):r.push("".concat(Hr(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in xn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qr(e,t,n,r){return Yr(e)?[]:sr(e)?[".".concat(e.styledComponentId)]:or(e)?!or(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:qr(e(t),t,n,r):e instanceof Ur?n?(e.inject(n,r),[e.getName(r)]):[e]:ur(e)?Kr(e):Array.isArray(e)?Array.prototype.concat.apply(Rn,e.map((function(e){return qr(e,t,n,r)}))):[e.toString()];var i}function Qr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(or(n)&&!sr(n))return!1}return!0}var Gr=Vn(En),Xr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Qr(e),this.componentId=t,this.baseHash=$n(Gr,t),this.baseStyle=n,Mr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=lr(r,this.staticRulesId);else{var i=cr(qr(this.rules,e,t,n)),a=Nn($n(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=lr(r,a),this.staticRulesId=a}else{for(var s=$n(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=cr(qr(u,e,t,n));s=$n(s,d+c),l+=d}}if(l){var p=Nn(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=lr(r,p)}}return r},e}(),Jr=e.createContext(void 0);Jr.Consumer;var Zr={};new Set;function ei(t,n,r){var i=sr(t),a=t,o=!Wn(t),s=n.attrs,l=void 0===s?Rn:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Dn(e);Zr[n]=(Zr[n]||0)+1;var r="".concat(n,"-").concat(Bn(En+n+Zr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return Wn(e)?"styled.".concat(e):"Styled(".concat(Un(e),")")}(t):d,h=n.displayName&&n.componentId?"".concat(Dn(n.displayName),"-").concat(n.componentId):n.componentId||u,f=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Xr(r,h,i?a.componentStyle:void 0);function b(t,n){return function(t,n,r){var i=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Jr),d=Vr(),p=t.shouldForwardProp||d.shouldForwardProp,h=Ln(n,u,o)||An,f=function(e,t,n){for(var r,i=vt(vt({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=or(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?lr(i[s],o[s]):"style"===s?vt(vt({},i[s]),o[s]):o[s]}return t.className&&(i.className=lr(i.className,t.className)),i}(i,n,h),m=f.as||c,g={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===h||("forwardedAs"===v?g.as=f.forwardedAs:p&&!p(v,m)||(g[v]=f[v]));var y=function(e,t){var n=Vr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),b=lr(s,l);return y&&(b+=" "+y),f.className&&(b+=" "+f.className),g[Wn(m)&&!Mn.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}b.displayName=p;var x=e.forwardRef(b);return x.attrs=f,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=i?lr(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=h,x.target=i?a.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)dr(e,i[r],!0);return e}({},a.defaultProps,e):e}}),pr(x,(function(){return".".concat(x.styledComponentId)})),o&&ar(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function ti(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ni=function(e){return Object.assign(e,{isCss:!0})};function ri(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(or(e)||ur(e))return ni(qr(ti(Rn,yt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?qr(r):ni(qr(ti(r,t)))}function ii(e,t,n){if(void 0===n&&(n=An),!t)throw hr(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,ri.apply(void 0,yt([r],i,!1)))};return r.attrs=function(r){return ii(e,t,vt(vt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ii(e,t,vt(vt({},n),r))},r}var ai=function(e){return ii(ei,e)},oi=ai;Mn.forEach((function(e){oi[e]=ai(e)}));var si=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Qr(e),Mr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(cr(qr(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Mr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function li(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cr(ri.apply(void 0,yt([e],t,!1))),i=Bn(r);return new Ur(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=Cr(),r=cr([n&&'nonce="'.concat(n,'"'),"".concat(wn,'="true"'),"".concat(Sn,'="').concat(En,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw hr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw hr(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[wn]="",n[Sn]=En,n.dangerouslySetInnerHTML={__html:r},n),a=Cr();return a&&(i.nonce=a),[e.createElement("style",vt({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Mr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw hr(2);return e.createElement(Br,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw hr(3)}})(),"__sc-".concat(wn,"__");const ci=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=ri.apply(void 0,yt([t],n,!1)),a="sc-global-".concat(Bn(JSON.stringify(i))),o=new si(i,a),s=function(t){var n=Vr(),r=e.useContext(Jr),i=e.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&l(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(i,t,n.styleSheet,r,n.stylis),function(){return o.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,Tn,n,i);else{var a=vt(vt({},t),{theme:Ln(t,r,s.defaultProps)});o.renderStyles(e,a,n,i)}}return e.memo(s)})`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

  :root {
    /* Warm Light theme variables */
    --bg-primary-light: #faf8f5;
    --bg-secondary-light: #ffffff;
    --bg-tertiary-light: #f5f0eb;
    --text-primary-light: #2d2926;
    --text-secondary-light: #5c5552;
    --text-muted-light: #8a8482;
    --accent-light: #c4623a;
    --accent-hover-light: #a8512d;
    --accent-soft-light: rgba(196, 98, 58, 0.1);
    --accent-gradient-light: linear-gradient(135deg, #c4623a 0%, #d4845c 50%, #e6a77f 100%);
    --border-light: #e8e2dc;
    --shadow-light: rgba(45, 41, 38, 0.08);
    --shadow-medium-light: rgba(45, 41, 38, 0.12);
    --success-light: #4a9d6b;
    --error-light: #c44a4a;
    --warning-light: #d4a043;
    
    /* Warm Dark theme variables */
    --bg-primary-dark: #1a1816;
    --bg-secondary-dark: #242120;
    --bg-tertiary-dark: #2e2a28;
    --text-primary-dark: #f5f0eb;
    --text-secondary-dark: #b8b0a8;
    --text-muted-dark: #7a746f;
    --accent-dark: #e07b4f;
    --accent-hover-dark: #f09068;
    --accent-soft-dark: rgba(224, 123, 79, 0.15);
    --accent-gradient-dark: linear-gradient(135deg, #e07b4f 0%, #f09068 50%, #f5a882 100%);
    --border-dark: #3a3633;
    --shadow-dark: rgba(0, 0, 0, 0.25);
    --shadow-medium-dark: rgba(0, 0, 0, 0.35);
    --success-dark: #5eb87f;
    --error-dark: #e05a5a;
    --warning-dark: #e6b44d;
  }
  
  body[data-theme='light'] {
    --bg-primary: var(--bg-primary-light);
    --bg-secondary: var(--bg-secondary-light);
    --bg-tertiary: var(--bg-tertiary-light);
    --text-primary: var(--text-primary-light);
    --text-secondary: var(--text-secondary-light);
    --text-muted: var(--text-muted-light);
    --accent: var(--accent-light);
    --accent-hover: var(--accent-hover-light);
    --accent-soft: var(--accent-soft-light);
    --accent-gradient: var(--accent-gradient-light);
    --border: var(--border-light);
    --shadow: var(--shadow-light);
    --shadow-medium: var(--shadow-medium-light);
    --success: var(--success-light);
    --error: var(--error-light);
    --warning: var(--warning-light);
    --accent-rgb: 196, 98, 58;
    --accent-hover-rgb: 168, 81, 45;
  }
  
  body[data-theme='dark'] {
    --bg-primary: var(--bg-primary-dark);
    --bg-secondary: var(--bg-secondary-dark);
    --bg-tertiary: var(--bg-tertiary-dark);
    --text-primary: var(--text-primary-dark);
    --text-secondary: var(--text-secondary-dark);
    --text-muted: var(--text-muted-dark);
    --accent: var(--accent-dark);
    --accent-hover: var(--accent-hover-dark);
    --accent-soft: var(--accent-soft-dark);
    --accent-gradient: var(--accent-gradient-dark);
    --border: var(--border-dark);
    --shadow: var(--shadow-dark);
    --shadow-medium: var(--shadow-medium-dark);
    --success: var(--success-dark);
    --error: var(--error-dark);
    --warning: var(--warning-dark);
    --accent-rgb: 224, 123, 79;
    --accent-hover-rgb: 240, 144, 104;
  }
  
  /* Custom theme variables */
  body[data-theme='custom'] {
    --bg-primary: var(--custom-bg-primary);
    --bg-secondary: var(--custom-bg-secondary);
    --bg-tertiary: var(--custom-bg-tertiary, var(--custom-bg-secondary));
    --text-primary: var(--custom-text-primary);
    --text-secondary: var(--custom-text-secondary);
    --text-muted: var(--custom-text-muted, var(--custom-text-secondary));
    --accent: var(--custom-accent);
    --accent-hover: var(--custom-accent-hover);
    --accent-soft: var(--custom-accent-soft, rgba(var(--custom-accent-rgb), 0.1));
    --accent-gradient: var(--custom-accent-gradient, linear-gradient(135deg, var(--custom-accent) 0%, var(--custom-accent-hover) 100%));
    --border: var(--custom-border);
    --shadow: var(--custom-shadow);
    --shadow-medium: var(--custom-shadow-medium, var(--custom-shadow));
    --accent-rgb: var(--custom-accent-rgb);
    --accent-hover-rgb: var(--custom-accent-hover-rgb);
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    overflow-y: scroll;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.4s ease, color 0.4s ease;
    line-height: 1.7;
    overflow-x: hidden;
    letter-spacing: -0.01em;
  }
  
  /* Links */
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.25s ease, opacity 0.25s ease;
    
    &:hover {
      color: var(--accent-hover);
    }
    
    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
      border-radius: 4px;
    }
  }
  
  /* Buttons */
  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
    
    &:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
      border-radius: 4px;
    }
  }
  
  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* Smooth transitions */
  *, *::before, *::after {
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: ease;
  }
  
  /* Typography - Headings use Sora */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
  }
  
  h2 {
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  }
  
  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  }
  
  h4 {
    font-size: clamp(1.1rem, 2vw, 1.35rem);
  }
  
  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
    line-height: 1.75;
  }
  
  /* Selection styling */
  ::selection {
    background-color: var(--accent);
    color: white;
  }
  
  /* Focus states for accessibility */
  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 5px;
    border: 2px solid var(--bg-primary);
    
    &:hover {
      background: var(--accent);
    }
  }
  
  /* Utility classes for animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  /* Reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }
`;function ui(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function di(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function pi(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function hi(e,t,n,r){if("function"===typeof t){const[i,a]=pi(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=pi(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function fi(e,t,n){const r=e.getProps();return hi(r,t,void 0!==n?n:r.custom,e)}function mi(e,t){return e?.[t]??e?.default??e}const gi=e=>e,vi={skipAnimations:!1,useManualTiming:!1},yi=["read","resolveKeyframes","update","preRender","render","postRender"],bi={value:null,addProjectionMetrics:null};function xi(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=yi.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){o.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&bi.value&&bi.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,u.process(e)))}};return u}(a,t?n:void 0),e)),{}),{read:s,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:p}=o,h=()=>{const a=vi.useManualTiming?i.timestamp:performance.now();n=!1,vi.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},f=yi.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(h)),s.schedule(t,a,o)},t}),{});return{schedule:f,cancel:e=>{for(let t=0;t<yi.length;t++)o[yi[t]].cancel(e)},state:i,steps:o}}const{schedule:wi,cancel:ki,state:Si,steps:Ei}=xi("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:gi,!0),Ci=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pi=new Set(Ci),ji=new Set(["width","height","top","left","right","bottom",...Ci]);function Ti(e,t){-1===e.indexOf(t)&&e.push(t)}function Ri(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ai{constructor(){this.subscriptions=[]}add(e){return Ti(this.subscriptions,e),()=>Ri(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Li(e,t){return t?e*(1e3/t):0}let Mi;function _i(){Mi=void 0}const zi={now:()=>(void 0===Mi&&zi.set(Si.isProcessing||vi.useManualTiming?Si.timestamp:performance.now()),Mi),set:e=>{Mi=e,queueMicrotask(_i)}},Di={current:void 0};class Oi{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.7.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=zi.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=zi.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ai);const n=this.events[e].add(t);return"change"===e?()=>{n(),wi.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Di.current&&Di.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=zi.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return Li(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fi(e,t){return new Oi(e,t)}const Ni=e=>Array.isArray(e),Ii=e=>Ni(e)?e[e.length-1]||0:e;function $i(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Fi(n))}const Vi=e=>Boolean(e&&e.getVelocity);function Bi(e,t){const n=e.getValue("willChange");if(r=n,Boolean(Vi(r)&&r.add))return n.add(t);if(!n&&vi.WillChange){const n=new vi.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}const Ui=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Wi="data-"+Ui("framerAppearId");function Hi(e){return e.props[Wi]}function Yi(e){let t;return()=>(void 0===t&&(t=e()),t)}const Ki=Yi((()=>void 0!==window.ScrollTimeline));class qi{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>e.finished)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>Ki()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Qi extends qi{then(e,t){return this.finished.finally(e).then((()=>{}))}}const Gi=e=>1e3*e,Xi=e=>e/1e3,Ji=!1;function Zi(e){return"function"===typeof e&&"applyToOptions"in e}const ea=e=>Array.isArray(e)&&"number"===typeof e[0],ta={};function na(e,t){const n=Yi(e);return()=>ta[t]??n()}const ra=na((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Yv){return!1}return!0}),"linearEasing"),ia=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},aa={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ia([0,.65,.55,1]),circOut:ia([.55,0,1,.45]),backIn:ia([.31,.01,.66,-.59]),backOut:ia([.33,1.53,.69,.99])};function oa(e){return Boolean("function"===typeof e&&ra()||!e||"string"===typeof e&&(e in aa||ra())||ea(e)||Array.isArray(e)&&e.every(oa))}const sa={layout:0,mainThread:0,waapi:0},la=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(a/(i-1))+", ";return`linear(${r.substring(0,r.length-2)})`};function ca(e,t){return e?"function"===typeof e&&ra()?la(e,t):ea(e)?ia(e):Array.isArray(e)?e.map((e=>ca(e,t)||aa.easeOut)):aa[e]:void 0}function ua(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=ca(s,i);Array.isArray(d)&&(u.easing=d),bi.value&&sa.waapi++;const p=e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal",pseudoElement:c});return bi.value&&p.finished.finally((()=>{sa.waapi--})),p}function da(e,t){e.timeline=t,e.onfinish=null}const pa=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function ha(e,t,n,r){if(e===t&&n===r)return gi;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=pa(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:pa(i(e),t,r)}const fa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ma=e=>t=>1-e(1-t),ga=ha(.33,1.53,.69,.99),va=ma(ga),ya=fa(va),ba=e=>(e*=2)<1?.5*va(e):.5*(2-Math.pow(2,-10*(e-1))),xa=e=>1-Math.sin(Math.acos(e)),wa=ma(xa),ka=fa(xa),Sa=e=>/^0[^.\s]+$/u.test(e);const Ea=(e,t,n)=>n>t?t:n<e?e:n,Ca={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Pa={...Ca,transform:e=>Ea(0,1,e)},ja={...Ca,default:1},Ta=e=>Math.round(1e5*e)/1e5,Ra=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Aa=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,La=(e,t)=>n=>Boolean("string"===typeof n&&Aa.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ma=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,a,o,s]=r.match(Ra);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},_a={...Ca,transform:e=>Math.round((e=>Ea(0,255,e))(e))},za={test:La("rgb","red"),parse:Ma("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+_a.transform(t)+", "+_a.transform(n)+", "+_a.transform(r)+", "+Ta(Pa.transform(i))+")"}};const Da={test:La("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:za.transform},Oa=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Fa=Oa("deg"),Na=Oa("%"),Ia=Oa("px"),$a=Oa("vh"),Va=Oa("vw"),Ba={...Na,parse:e=>Na.parse(e)/100,transform:e=>Na.transform(100*e)},Ua={test:La("hsl","hue"),parse:Ma("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Na.transform(Ta(n))+", "+Na.transform(Ta(r))+", "+Ta(Pa.transform(i))+")"}},Wa={test:e=>za.test(e)||Da.test(e)||Ua.test(e),parse:e=>za.test(e)?za.parse(e):Ua.test(e)?Ua.parse(e):Da.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?za.transform(e):Ua.transform(e)},Ha=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Ya="number",Ka="color",qa=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qa(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(qa,(e=>(Wa.test(e)?(r.color.push(a),i.push(Ka),n.push(Wa.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(Ya),n.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:n,split:o,indexes:r,types:i}}function Ga(e){return Qa(e).values}function Xa(e){const{split:t,types:n}=Qa(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===Ya?Ta(e[a]):t===Ka?Wa.transform(e[a]):e[a]}return i}}const Ja=e=>"number"===typeof e?0:e;const Za={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(Ra)?.length||0)+(e.match(Ha)?.length||0)>0},parse:Ga,createTransformer:Xa,getAnimatableNone:function(e){const t=Ga(e);return Xa(e)(t.map(Ja))}},eo=new Set(["brightness","contrast","saturate","opacity"]);function to(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Ra)||[];if(!r)return e;const i=n.replace(r,"");let a=eo.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const no=/\b([a-z-]*)\(.*?\)/gu,ro={...Za,getAnimatableNone:e=>{const t=e.match(no);return t?t.map(to).join(" "):e}},io={borderWidth:Ia,borderTopWidth:Ia,borderRightWidth:Ia,borderBottomWidth:Ia,borderLeftWidth:Ia,borderRadius:Ia,radius:Ia,borderTopLeftRadius:Ia,borderTopRightRadius:Ia,borderBottomRightRadius:Ia,borderBottomLeftRadius:Ia,width:Ia,maxWidth:Ia,height:Ia,maxHeight:Ia,top:Ia,right:Ia,bottom:Ia,left:Ia,padding:Ia,paddingTop:Ia,paddingRight:Ia,paddingBottom:Ia,paddingLeft:Ia,margin:Ia,marginTop:Ia,marginRight:Ia,marginBottom:Ia,marginLeft:Ia,backgroundPositionX:Ia,backgroundPositionY:Ia},ao={rotate:Fa,rotateX:Fa,rotateY:Fa,rotateZ:Fa,scale:ja,scaleX:ja,scaleY:ja,scaleZ:ja,skew:Fa,skewX:Fa,skewY:Fa,distance:Ia,translateX:Ia,translateY:Ia,translateZ:Ia,x:Ia,y:Ia,z:Ia,perspective:Ia,transformPerspective:Ia,opacity:Pa,originX:Ba,originY:Ba,originZ:Ia},oo={...Ca,transform:Math.round},so={...io,...ao,zIndex:oo,size:Ia,fillOpacity:Pa,strokeOpacity:Pa,numOctaves:oo},lo={...so,color:Wa,backgroundColor:Wa,outlineColor:Wa,fill:Wa,stroke:Wa,borderColor:Wa,borderTopColor:Wa,borderRightColor:Wa,borderBottomColor:Wa,borderLeftColor:Wa,filter:ro,WebkitFilter:ro},co=e=>lo[e];function uo(e,t){let n=co(e);return n!==ro&&(n=Za),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const po=new Set(["auto","none","0"]);const ho=e=>180*e/Math.PI,fo=e=>{const t=ho(Math.atan2(e[1],e[0]));return go(t)},mo={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:fo,rotateZ:fo,skewX:e=>ho(Math.atan(e[1])),skewY:e=>ho(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},go=e=>((e%=360)<0&&(e+=360),e),vo=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),yo=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),bo={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:vo,scaleY:yo,scale:e=>(vo(e)+yo(e))/2,rotateX:e=>go(ho(Math.atan2(e[6],e[5]))),rotateY:e=>go(ho(Math.atan2(-e[2],e[0]))),rotateZ:fo,rotate:fo,skewX:e=>ho(Math.atan(e[4])),skewY:e=>ho(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function xo(e){return e.includes("scale")?1:0}function wo(e,t){if(!e||"none"===e)return xo(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=bo,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=mo,i=t}if(!i)return xo(t);const a=r[t],o=i[1].split(",").map(ko);return"function"===typeof a?a(o):o[a]}function ko(e){return parseFloat(e.trim())}const So=e=>e===Ca||e===Ia,Eo=new Set(["x","y","z"]),Co=Ci.filter((e=>!Eo.has(e)));const Po={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return wo(n,"x")},y:(e,t)=>{let{transform:n}=t;return wo(n,"y")}};Po.translateX=Po.x,Po.translateY=Po.y;const jo=new Set;let To=!1,Ro=!1;function Ao(){if(Ro){const e=Array.from(jo).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Co.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;e.getValue(n)?.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Ro=!1,To=!1,jo.forEach((e=>e.complete())),jo.clear()}function Lo(){jo.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Ro=!0)}))}class Mo{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(jo.add(this),To||(To=!0,wi.read(Lo),wi.resolveKeyframes(Ao))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),jo.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,jo.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _o=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),zo=e=>t=>"string"===typeof t&&t.startsWith(e),Do=zo("--"),Oo=zo("var(--"),Fo=e=>!!Oo(e)&&No.test(e.split("/*")[0].trim()),No=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Io=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $o(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=Io.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return _o(e)?parseFloat(e):e}return Fo(i)?$o(i,t,n+1):i}const Vo=e=>t=>t.test(e),Bo=[Ca,Ia,Na,Fa,Va,$a,{test:e=>"auto"===e,parse:e=>e}],Uo=e=>Bo.find(Vo(e));class Wo extends Mo{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),Fo(n))){const r=$o(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!ji.has(n)||2!==e.length)return;const[r,i]=e,a=Uo(r),o=Uo(i);if(a!==o)if(So(a)&&So(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||Sa(r))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!po.has(t)&&Qa(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=uo(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Po[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=Po[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const Ho=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Za.test(e)&&"0"!==e||e.startsWith("url(")));function Yo(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=Ho(i,t),s=Ho(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Zi(n))&&r)}const Ko=e=>null!==e;function qo(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(Ko),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}class Qo{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=zi.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Lo(),Ao()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=zi.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:i,delay:a,onComplete:o,onUpdate:s,isGenerator:l}=this.options;if(!l&&!Yo(e,n,r,i)){if(Ji||!a)return s&&s(qo(e,this.options,t)),o&&o(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const Go=2e4;function Xo(e){let t=0;let n=e.next(t);for(;!n.done&&t<Go;)t+=50,n=e.next(t);return t>=Go?1/0:t}const Jo=(e,t,n)=>e+(t-e)*n;function Zo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function es(e,t){return n=>n>0?t:e}const ts=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ns=[Da,za,Ua];function rs(e){const t=(e=>ns.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===Ua&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=Zo(i,e,t+1/3),o=Zo(i,e,t),s=Zo(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const is=(e,t)=>{const n=rs(e),r=rs(t);if(!n||!r)return es(e,t);const i={...n};return e=>(i.red=ts(n.red,r.red,e),i.green=ts(n.green,r.green,e),i.blue=ts(n.blue,r.blue,e),i.alpha=Jo(n.alpha,r.alpha,e),za.transform(i))},as=(e,t)=>n=>t(e(n)),os=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(as)},ss=new Set(["none","hidden"]);function ls(e,t){return n=>Jo(e,t,n)}function cs(e){return"number"===typeof e?ls:"string"===typeof e?Fo(e)?es:Wa.test(e)?is:ps:Array.isArray(e)?us:"object"===typeof e?Wa.test(e)?is:ds:es}function us(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>cs(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function ds(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=cs(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const ps=(e,t)=>{const n=Za.createTransformer(t),r=Qa(e),i=Qa(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ss.has(e)&&!i.values.length||ss.has(t)&&!r.values.length?function(e,t){return ss.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):os(us(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):es(e,t)};function hs(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Jo(e,t,n);return cs(e)(e,t)}function fs(e,t,n){const r=Math.max(t-5,0);return Li(n-e(r),t-r)}const ms={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},gs=.001;function vs(e){let t,n,{duration:r=ms.duration,bounce:i=ms.bounce,velocity:a=ms.velocity,mass:o=ms.mass}=e;Gi(ms.maxDuration);let s=1-i;s=Ea(ms.minDamping,ms.maxDamping,s),r=Ea(ms.minDuration,ms.maxDuration,Xi(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=bs(e,s),l=Math.exp(-n);return gs-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=bs(Math.pow(e,2),s);return(-t(e)+gs>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<ys;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Gi(r),isNaN(l))return{stiffness:ms.stiffness,damping:ms.damping,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const ys=12;function bs(e,t){return e*Math.sqrt(1-t*t)}const xs=["duration","bounce"],ws=["stiffness","damping","mass"];function ks(e,t){return t.some((t=>void 0!==e[t]))}function Ss(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ms.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ms.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:ms.velocity,stiffness:ms.stiffness,damping:ms.damping,mass:ms.mass,isResolvedFromDuration:!1,...e};if(!ks(e,ws)&&ks(e,xs))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*Ea(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ms.mass,stiffness:i,damping:a}}else{const n=vs(e);t={...t,...n,mass:ms.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-Xi(n.velocity||0)}),f=p||0,m=c/(2*Math.sqrt(l*u)),g=o-a,v=Xi(Math.sqrt(l/u)),y=Math.abs(g)<5;let b;if(r||(r=y?ms.restSpeed.granular:ms.restSpeed.default),i||(i=y?ms.restDelta.granular:ms.restDelta.default),m<1){const e=bs(v,m);b=t=>{const n=Math.exp(-m*v*t);return o-n*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>o-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return o-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const x={calculatedDuration:h&&d||null,next:e=>{const t=b(e);if(h)s.done=e>=d;else{let n=0;m<1&&(n=0===e?Gi(f):fs(b,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(Xo(x),Go),t=la((t=>x.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return x}function Es(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/i),b=e=>v+y(e),x=e=>{const t=y(e),n=b(e);h.done=Math.abs(t)<=u,h.value=h.done?v:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,k=Ss({keyframes:[h.value,f(h.value)],velocity:fs(b,e,h.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,x(e),S(e)),void 0!==w&&e>=w?k.next(e-w):(!t&&x(e),h)}}}Ss.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(Xo(n),Go);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:Xi(r)}}(e,100,Ss);return e.ease=ra()?t.ease:"easeOut",e.duration=Gi(t.duration),e.type="keyframes",e};const Cs=ha(.42,0,1,1),Ps=ha(0,0,.58,1),js=ha(.42,0,.58,1),Ts={linear:gi,easeIn:Cs,easeInOut:js,easeOut:Ps,circIn:xa,circInOut:ka,circOut:wa,backIn:va,backInOut:ya,backOut:ga,anticipate:ba},Rs=e=>{if(ea(e)){e.length;const[t,n,r,i]=e;return ha(t,n,r,i)}return"string"===typeof e?Ts[e]:e},As=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function Ls(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||hs,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||gi:t;n=os(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=As(e[r],e[r+1],n);return s[r](i)};return n?t=>c(Ea(e[0],e[a-1],t)):c}function Ms(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=As(0,t,r);e.push(Jo(n,1,i))}}(t,e.length-1),t}function _s(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Rs):Rs(i),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Ms(n),t),l=Ls(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map((()=>u||js)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const zs=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>wi.update(t,!0),stop:()=>ki(t),now:()=>Si.isProcessing?Si.timestamp:zi.now()}},Ds={decay:Es,inertia:Es,tween:_s,keyframes:_s,spring:Ss},Os=e=>e/100;class Fs extends Qo{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:i}=this.options,a=r?.KeyframeResolver||Mo;this.resolver=new a(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=this.options,o=Zi(t)?t:Ds[t]||_s;let s,l;o!==_s&&"number"!==typeof e[0]&&(s=os(Os,hs(e[0],e[1])),e=[0,100]);const c=o({...this.options,keyframes:e});"mirror"===i&&(l=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===c.calculatedDuration&&(c.calculatedDuration=Xo(c));const{calculatedDuration:u}=c,d=u+r;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;sa.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:i,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:s,calculatedDuration:l,totalDuration:c,resolvedDuration:u}=n;if(null===this.startTime)return i.next(0);const{delay:d,repeat:p,repeatType:h,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let y=this.currentTime,b=i;if(p){const e=Math.min(this.currentTime,c)/u;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,p+1);Boolean(t%2)&&("reverse"===h?(n=1-n,f&&(n-=f/u)):"mirror"===h&&(b=a)),y=Ea(0,1,n)*u}const x=v?{done:!1,value:s[0]}:b.next(y);o&&(x.value=o(x.value));let{done:w}=x;v||null===l||(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return k&&void 0!==r&&(x.value=qo(s,this.options,r)),m&&m(x.value),k&&this.finish(),x}get duration(){const{resolved:e}=this;return e?Xi(e.calculatedDuration):0}get time(){return Xi(this.currentTime)}set time(e){e=Gi(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Xi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=zs,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=n??this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),sa.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}}const Ns=new Set(["opacity","clipPath","filter","transform"]),Is=Yi((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const $s={anticipate:ba,backInOut:ya,circInOut:ka};class Vs extends Qo{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:i}=this.options;this.resolver=new Wo(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:i,type:a,motionValue:o,name:s,startTime:l}=this.options;if(!o.owner||!o.owner.current)return!1;var c;if("string"===typeof i&&ra()&&i in $s&&(i=$s[i]),Zi((c=this.options).type)||"spring"===c.type||!oa(c.ease)){const{onComplete:t,onUpdate:o,motionValue:s,element:l,...c}=this.options,u=function(e,t){const n=new Fs({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<2e4;)r=n.sample(a),i.push(r.value),a+=10;return{times:void 0,keyframes:i,duration:a-10,ease:"linear"}}(e,c);1===(e=u.keyframes).length&&(e[1]=e[0]),n=u.duration,r=u.times,i=u.ease,a="keyframes"}const u=ua(o.owner.current,s,e,{...this.options,duration:n,times:r,ease:i});return u.startTime=l??this.calcStartTime(),this.pendingTimeline?(da(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:n}=this.options;o.set(qo(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:r,type:a,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Xi(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Xi(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=Gi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return gi;const{animation:n}=t;da(n,e)}else this.pendingTimeline=e;return gi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:i,ease:a,times:o}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...c}=this.options,u=new Fs({...c,keyframes:n,duration:r,type:i,ease:a,times:o,isGenerator:!0}),d=Gi(this.time);e.setWithVelocity(u.sample(d-10).value,u.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return Is()&&n&&Ns.has(n)&&("transform"!==n||!l)&&!s&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}}const Bs={type:"spring",stiffness:500,damping:25,restSpeed:10},Us={type:"keyframes",duration:.8},Ws={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Hs=(e,t)=>{let{keyframes:n}=t;return n.length>2?Us:Pi.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Bs:Ws};const Ys=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=mi(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=Gi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||(u={...u,...Hs(e,u)}),u.duration&&(u.duration=Gi(u.duration)),u.repeatDelay&&(u.repeatDelay=Gi(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(Ji||vi.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=qo(u.keyframes,s);if(void 0!==e)return wi.update((()=>{u.onUpdate(e),u.onComplete()})),new Qi([])}return!a&&Vs.supports(u)?new Vs(u):new Fs(u)}};function Ks(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function qs(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&Ks(c,u))continue;const i={delay:n,...mi(a||{},u)};let o=!1;if(window.MotionHandoffAnimation){const t=Hi(e);if(t){const e=window.MotionHandoffAnimation(t,u,wi);null!==e&&(i.startTime=e,o=!0)}}Bi(e,u),t.start(Ys(u,t,r,e.shouldReduceMotion&&ji.has(u)?{type:!1}:i,e,o));const d=t.animation;d&&l.push(d)}return o&&Promise.all(l).then((()=>{wi.update((()=>{o&&function(e,t){const n=fi(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)$i(e,o,Ii(a[o]))}(e,o)}))})),l}function Qs(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=fi(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(qs(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(Gs).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(Qs(e,t,{...a,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then((()=>t()))}return Promise.all([a(),o(n.delay)])}function Gs(e,t){return e.sortNodePosition(t)}function Xs(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Js(e){return"string"===typeof e||Array.isArray(e)}const Zs=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],el=["initial",...Zs],tl=el.length;function nl(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&nl(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<tl;n++){const r=el[n],i=e.props[r];(Js(i)||!1===i)&&(t[r]=i)}return t}const rl=[...Zs].reverse(),il=Zs.length;function al(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>Qs(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=Qs(e,t,r);else{const i="function"===typeof t?fi(e,t,r.custom):t;n=Promise.all(qs(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function ol(e){let t=al(e),n=cl(),r=!0;const i=t=>(n,r)=>{const i=fi(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=nl(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<il;t++){const p=rl[t],h=n[p],f=void 0!==o[p]?o[p]:s[p],m=Js(f),g=p===a?h.isActive:null;!1===g&&(d=t);let v=f===s[p]&&f!==o[p]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),h.protectedKeys={...u},!h.isActive&&null===g||!f&&!h.prevProp||di(f)||"boolean"===typeof f)continue;const y=sl(h.prevProp,f);let b=y||p===a&&h.isActive&&!v&&m||t>d&&m,x=!1;const w=Array.isArray(f)?f:[f];let k=w.reduce(i(p),{});!1===g&&(k={});const{prevResolvedValues:S={}}=h,E={...S,...k},C=t=>{b=!0,c.has(t)&&(x=!0,c.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in E){const t=k[e],n=S[e];if(u.hasOwnProperty(e))continue;let r=!1;r=Ni(t)&&Ni(n)?!Xs(t,n):t!==n,r?void 0!==t&&null!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):h.protectedKeys[e]=!0}h.prevProp=f,h.prevResolvedValues=k,h.isActive&&(u={...u,...k}),r&&e.blockInitialAnimation&&(b=!1);b&&(!(v&&y)||x)&&l.push(...w.map((e=>({animation:e,options:{type:p}}))))}if(c.size){const t={};if("boolean"!==typeof o.initial){const n=fi(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null})),l.push({animation:t})}let p=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,r))),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=cl(),r=!0}}}function sl(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Xs(t,e)}function ll(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cl(){return{animate:ll(!0),whileInView:ll(),whileHover:ll(),whileTap:ll(),whileDrag:ll(),whileFocus:ll(),exit:ll()}}class ul{constructor(e){this.isMounted=!1,this.node=e}update(){}}let dl=0;const pl={animation:{Feature:class extends ul{constructor(e){super(e),e.animationState||(e.animationState=ol(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();di(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends ul{constructor(){super(...arguments),this.id=dl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},hl={x:!1,y:!1};function fl(){return hl.x||hl.y}function ml(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const gl=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function vl(e){return{point:{x:e.pageX,y:e.pageY}}}function yl(e,t,n,r){return ml(e,t,(e=>t=>gl(t)&&e(t,vl(t)))(n),r)}function bl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function xl(e){return e.max-e.min}function wl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Jo(t.min,t.max,e.origin),e.scale=xl(n)/xl(t),e.translate=Jo(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function kl(e,t,n,r){wl(e.x,t.x,n.x,r?r.originX:void 0),wl(e.y,t.y,n.y,r?r.originY:void 0)}function Sl(e,t,n){e.min=n.min+t.min,e.max=e.min+xl(t)}function El(e,t,n){e.min=t.min-n.min,e.max=e.min+xl(t)}function Cl(e,t,n){El(e.x,t.x,n.x),El(e.y,t.y,n.y)}const Pl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function jl(e){return[e("x"),e("y")]}function Tl(e){return void 0===e||1===e}function Rl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Tl(t)||!Tl(n)||!Tl(r)}function Al(e){return Rl(e)||Ll(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ll(e){return Ml(e.x)||Ml(e.y)}function Ml(e){return e&&"0%"!==e}function _l(e,t,n){return n+t*(e-n)}function zl(e,t,n,r,i){return void 0!==i&&(e=_l(e,i,r)),_l(e,n,r)+t}function Dl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=zl(e.min,t,n,r,i),e.max=zl(e.max,t,n,r,i)}function Ol(e,t){let{x:n,y:r}=t;Dl(e.x,n.translate,n.scale,n.originPoint),Dl(e.y,r.translate,r.scale,r.originPoint)}const Fl=.999999999999,Nl=1.0000000000001;function Il(e,t){e.min=e.min+t,e.max=e.max+t}function $l(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Dl(e,t,n,Jo(e.min,e.max,i),r)}function Vl(e,t){$l(e.x,t.x,t.scaleX,t.scale,t.originX),$l(e.y,t.y,t.scaleY,t.scale,t.originY)}function Bl(e,t){return bl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Ul=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Wl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Hl=(e,t)=>Math.abs(e-t);class Yl{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Ql(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Hl(e.x,t.x),r=Hl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Si;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Kl(t,this.transformPagePoint),wi.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Ql("pointercancel"===e.type?this.lastMoveEventInfo:Kl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!gl(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=Kl(vl(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=Si;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Ql(a,this.history)),this.removeListeners=os(yl(this.contextWindow,"pointermove",this.handlePointerMove),yl(this.contextWindow,"pointerup",this.handlePointerUp),yl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ki(this.updatePoint)}}function Kl(e,t){return t?{point:t(e.point)}:e}function ql(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ql(e,t){let{point:n}=e;return{point:n,delta:ql(n,Xl(t)),offset:ql(n,Gl(t)),velocity:Jl(t,.1)}}function Gl(e){return e[0]}function Xl(e){return e[e.length-1]}function Jl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Xl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Gi(t)));)n--;if(!r)return{x:0,y:0};const a=Xi(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Zl(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function ec(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const tc=.35;function nc(e,t,n){return{min:rc(e,t),max:rc(e,n)}}function rc(e,t){return"number"===typeof e?e:e[t]||0}const ic=new WeakMap;class ac{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Yl(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(vl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?hl[a]?null:(hl[a]=!0,()=>{hl[a]=!1}):hl.x||hl.y?null:(hl.x=hl.y=!0,()=>{hl.x=hl.y=!1}),!this.openDragLock))return;var a;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jl((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Na.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=xl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&wi.postRender((()=>i(e,t))),Bi(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>jl((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Ul(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&wi.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!oc(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?Jo(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?Jo(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Wl(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:Zl(e.x,r,a),y:Zl(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tc;return!1===e?e=0:!0===e&&(e=tc),{x:nc(e,"left","right"),y:nc(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&jl((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Wl(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Bl(e,n),{scroll:i}=t;return i&&(Il(r.x,i.offset.x),Il(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:ec(e.x,t.x),y:ec(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=bl(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=jl((o=>{if(!oc(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Bi(this.visualElement,e),n.start(Ys(e,n,0,t,this.visualElement,!1))}stopAnimation(){jl((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){jl((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){jl((t=>{const{drag:n}=this.getProps();if(!oc(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-Jo(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Wl(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};jl((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=xl(e),i=xl(t);return i>r?n=As(t.min,t.max-r,e.min):r>i&&(n=As(e.min,e.max-i,t.min)),Ea(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),jl((t=>{if(!oc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Jo(i,a,r[t]))}))}addListeners(){if(!this.visualElement.current)return;ic.set(this.visualElement,this);const e=yl(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Wl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),wi.read(t);const i=ml(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(jl((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=tc,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function oc(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const sc=e=>(t,n)=>{e&&wi.postRender((()=>e(t,n)))};const{schedule:lc,cancel:cc}=xi(queueMicrotask,!1),uc=(0,e.createContext)(null);function dc(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(uc);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:a}=n,o=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return a(o)}),[t]);const s=(0,e.useCallback)((()=>t&&i&&i(o)),[o,i,t]);return!r&&i?[!1,s]:[!0]}const pc=(0,e.createContext)({}),hc=(0,e.createContext)({}),fc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function mc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const gc={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Ia.test(e))return e;e=parseFloat(e)}return`${mc(e,t.target.x)}% ${mc(e,t.target.y)}%`}},vc={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=Za.parse(e);if(a.length>5)return i;const o=Za.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=Jo(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}},yc={};class bc extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)yc[t]=e[t],Do(t)&&(yc[t].isCSSVariable=!0)}(wc),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),fc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||wi.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),lc.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function xc(t){const[n,r]=dc(),i=(0,e.useContext)(pc);return(0,ht.jsx)(bc,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(hc),isPresent:n,safeToRemove:r})}const wc={borderRadius:{...gc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:gc,borderTopRightRadius:gc,borderBottomLeftRadius:gc,borderBottomRightRadius:gc,boxShadow:vc};const kc=(e,t)=>e.depth-t.depth;class Sc{constructor(){this.children=[],this.isDirty=!1}add(e){Ti(this.children,e),this.isDirty=!0}remove(e){Ri(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(kc),this.isDirty=!1,this.children.forEach(e)}}function Ec(e,t){const n=zi.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(ki(r),e(o-t))};return wi.read(r,!0),()=>ki(r)}function Cc(e){const t=Vi(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Pc=["TopLeft","TopRight","BottomLeft","BottomRight"],jc=Pc.length,Tc=e=>"string"===typeof e?parseFloat(e):e,Rc=e=>"number"===typeof e||Ia.test(e);function Ac(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Lc=_c(0,.5,wa),Mc=_c(.5,.95,gi);function _c(e,t,n){return r=>r<e?0:r>t?1:n(As(e,t,r))}function zc(e,t){e.min=t.min,e.max=t.max}function Dc(e,t){zc(e.x,t.x),zc(e.y,t.y)}function Oc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Fc(e,t,n,r,i){return e=_l(e-=t,1/n,r),void 0!==i&&(e=_l(e,1/i,r)),e}function Nc(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Na.test(t)&&(t=parseFloat(t),t=Jo(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=Jo(a.min,a.max,r);e===a&&(s-=t),e.min=Fc(e.min,t,n,s,i),e.max=Fc(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Ic=["x","scaleX","originX"],$c=["y","scaleY","originY"];function Vc(e,t,n,r){Nc(e.x,t,Ic,n?n.x:void 0,r?r.x:void 0),Nc(e.y,t,$c,n?n.y:void 0,r?r.y:void 0)}function Bc(e){return 0===e.translate&&1===e.scale}function Uc(e){return Bc(e.x)&&Bc(e.y)}function Wc(e,t){return e.min===t.min&&e.max===t.max}function Hc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Yc(e,t){return Hc(e.x,t.x)&&Hc(e.y,t.y)}function Kc(e){return xl(e.x)/xl(e.y)}function qc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Qc{constructor(){this.members=[]}add(e){Ti(this.members,e),e.scheduleRender()}remove(e){if(Ri(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Gc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Xc=["","X","Y","Z"],Jc={visibility:"hidden"};let Zc=0;function eu(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function tu(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Hi(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",wi,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&tu(r)}function nu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=Zc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,bi.value&&(Gc.nodes=Gc.calculatedTargetDeltas=Gc.calculatedProjections=0),this.nodes.forEach(au),this.nodes.forEach(pu),this.nodes.forEach(hu),this.nodes.forEach(ou),bi.addProjectionMetrics&&bi.addProjectionMetrics(Gc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Sc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ai),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Ec(r,250),fc.hasAnimatedSinceResize&&(fc.hasAnimatedSinceResize=!1,this.nodes.forEach(du))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||bu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!Yc(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...mi(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||du(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ki(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&tu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(lu);this.isUpdating||this.nodes.forEach(cu),this.isUpdating=!1,this.nodes.forEach(uu),this.nodes.forEach(ru),this.nodes.forEach(iu),this.clearAllSnapshots();const e=zi.now();Si.delta=Ea(0,1e3/60,e-Si.timestamp),Si.timestamp=e,Si.isProcessing=!0,Ei.update.process(Si),Ei.preRender.process(Si),Ei.render.process(Si),Si.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,lc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(su),this.sharedNodes.forEach(mu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wi.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wi.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||xl(this.snapshot.measuredBox.x)||xl(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Uc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Al(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),ku((r=n).x),ku(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Eu))){const{scroll:e}=this.root;e&&(Il(t.x,e.offset.x),Il(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(Dc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Dc(t,e),Il(t.x,i.offset.x),Il(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Dc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Vl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Al(e.latestValues)&&Vl(n,e.latestValues)}return Al(this.latestValues)&&Vl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Dc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Al(e.latestValues))continue;Rl(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Dc(r,e.measurePageBox()),Vc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Al(this.latestValues)&&Vc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Si.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(this.layout&&(r||i)){if(this.resolvedRelativeTargetAt=Si.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Cl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Dc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,o,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,o=this.relativeTarget,s=this.relativeParent.target,Sl(a.x,o.x,s.x),Sl(a.y,o.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Dc(this.target,this.layout.layoutBox),Ol(this.target,this.targetDelta)):Dc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Cl(this.relativeTargetOrigin,this.target,e.target),Dc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}bi.value&&Gc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Rl(this.parent.latestValues)&&!Ll(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Si.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;Dc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Vl(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ol(e,o)),r&&Al(a.latestValues)&&Vl(e,a.latestValues))}t.x<Nl&&t.x>Fl&&(t.x=1),t.y<Nl&&t.y>Fl&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(Oc(this.prevProjectionDelta.x,this.projectionDelta.x),Oc(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),kl(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&qc(this.projectionDelta.x,this.prevProjectionDelta.x)&&qc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),bi.value&&Gc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(yu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;gu(a.x,e.x,n),gu(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cl(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){vu(e.x,t.x,n.x,r),vu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Wc(e.x,t.x)&&Wc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Dc(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=Jo(0,n.opacity??1,Lc(r)),e.opacityExit=Jo(t.opacity??1,0,Mc(r))):a&&(e.opacity=Jo(t.opacity??1,n.opacity??1,r));for(let o=0;o<jc;o++){const i=`border${Pc[o]}Radius`;let a=Ac(t,i),s=Ac(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Rc(a)===Rc(s)?(e[i]=Math.max(Jo(Tc(a),Tc(s),r),0),(Na.test(s)||Na.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Jo(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ki(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wi.update((()=>{fc.hasAnimatedSinceResize=!0,sa.layout++,this.currentAnimation=function(e,t,n){const r=Vi(e)?e:Fi(e);return r.start(Ys("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{sa.layout--},onComplete:()=>{sa.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Su(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=xl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=xl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Dc(t,n),Vl(t,i),kl(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Qc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&eu("z",e,r,this.animationValues);for(let i=0;i<Xc.length;i++)eu(`rotate${Xc[i]}`,e,r,this.animationValues),eu(`skew${Xc[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return Jc;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=Cc(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Cc(e?.pointerEvents)||""),this.hasProjected&&!Al(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const i=r.animationValues||r.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i),n&&(t.transform=n(i,t.transform));const{x:a,y:o}=this.projectionDelta;t.transformOrigin=`${100*a.origin}% ${100*o.origin}% 0`,r.animationValues?t.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:t.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const s in yc){if(void 0===i[s])continue;const{correct:e,applyTo:n,isCSSVariable:a}=yc[s],o="none"===t.transform?i[s]:e(i[s],r);if(n){const e=n.length;for(let r=0;r<e;r++)t[n[r]]=o}else a?this.options.visualElement.renderState.vars[s]=o:t[s]=o}return this.options.layoutId&&(t.pointerEvents=r===this?Cc(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop())),this.root.nodes.forEach(lu),this.root.sharedNodes.clear()}}}function ru(e){e.updateLayout()}function iu(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;"size"===i?jl((e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=xl(r);r.min=n[e].min,r.max=r.min+i})):Su(i,t.layoutBox,n)&&jl((r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=xl(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};kl(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?kl(s,e.applyTransform(r,!0),t.measuredBox):kl(s,n,t.layoutBox);const l=!Uc(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Cl(o,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Cl(s,n,a.layoutBox),Yc(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function au(e){bi.value&&Gc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ou(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function su(e){e.clearSnapshot()}function lu(e){e.clearMeasurements()}function cu(e){e.isLayoutDirty=!1}function uu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function du(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function pu(e){e.resolveTargetDelta()}function hu(e){e.calcProjection()}function fu(e){e.resetSkewAndRotation()}function mu(e){e.removeLeadSnapshot()}function gu(e,t,n){e.translate=Jo(t.translate,0,n),e.scale=Jo(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function vu(e,t,n,r){e.min=Jo(t.min,n.min,r),e.max=Jo(t.max,n.max,r)}function yu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const bu={duration:.45,ease:[.4,0,.1,1]},xu=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),wu=xu("applewebkit/")&&!xu("chrome/")?Math.round:gi;function ku(e){e.min=wu(e.min),e.max=wu(e.max)}function Su(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Kc(t),i=Kc(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function Eu(e){return e!==e.root&&e.scroll?.wasRoot}const Cu=nu({attachResizeListener:(e,t)=>ml(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Pu={current:void 0},ju=nu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Pu.current){const e=new Cu({});e.mount(window),e.setOptions({layoutScroll:!0}),Pu.current=e}return Pu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Tu={pan:{Feature:class extends ul{constructor(){super(...arguments),this.removePointerDownListener=gi}onPointerDown(e){this.session=new Yl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ul(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:sc(e),onStart:sc(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&wi.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=yl(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends ul{constructor(e){super(e),this.removeGroupControls=gi,this.removeListeners=gi,this.controls=new ac(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||gi}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:ju,MeasureLayout:xc}};function Ru(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Au(e){return!("touch"===e.pointerType||fl())}function Lu(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&wi.postRender((()=>i(t,vl(t))))}const Mu=(e,t)=>!!t&&(e===t||Mu(e,t.parentElement)),_u=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const zu=new WeakSet;function Du(e){return t=>{"Enter"===t.key&&e(t)}}function Ou(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function Fu(e){return gl(e)&&!fl()}function Nu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Ru(e,n),o=e=>{const r=e.currentTarget;if(!Fu(e)||zu.has(r))return;zu.add(r);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),Fu(e)&&zu.has(r)&&(zu.delete(r),"function"===typeof a&&a(e,{success:t}))},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Mu(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),e instanceof HTMLElement&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=Du((()=>{if(zu.has(n))return;Ou(n,"down");const e=Du((()=>{Ou(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>Ou(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,i))),t=e,_u.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),a}function Iu(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&wi.postRender((()=>i(t,vl(t))))}const $u=new WeakMap,Vu=new WeakMap,Bu=e=>{const t=$u.get(e.target);t&&t(e)},Uu=e=>{e.forEach(Bu)};function Wu(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Vu.has(r)||Vu.set(r,{});const i=Vu.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Uu,{root:t,...n})),i[a]}(t);return $u.set(e,n),r.observe(e),()=>{$u.delete(e),r.unobserve(e)}}const Hu={some:0,all:1};const Yu={inView:{Feature:class extends ul{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Hu[r]};return Wu(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends ul{mount(){const{current:e}=this.node;e&&(this.unmount=Nu(e,((e,t)=>(Iu(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Iu(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends ul{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Yv){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=os(ml(this.node.current,"focus",(()=>this.onFocus())),ml(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends ul{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Ru(e,n),o=e=>{if(!Au(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const a=e=>{Au(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach((e=>{e.addEventListener("pointerenter",o,i)})),a}(e,((e,t)=>(Lu(this.node,t,"Start"),e=>Lu(this.node,e,"End")))))}unmount(){}}}},Ku={layout:{ProjectionNode:ju,MeasureLayout:xc}},qu=(0,e.createContext)({strict:!1}),Qu=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Gu=(0,e.createContext)({});function Xu(e){return di(e.animate)||el.some((t=>Js(e[t])))}function Ju(e){return Boolean(Xu(e)||e.variants)}function Zu(t){const{initial:n,animate:r}=function(e,t){if(Xu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Js(t)?t:void 0,animate:Js(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Gu));return(0,e.useMemo)((()=>({initial:n,animate:r})),[ed(n),ed(r)])}function ed(e){return Array.isArray(e)?e.join(" "):e}const td="undefined"!==typeof window,nd={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},rd={};for(const n in nd)rd[n]={isEnabled:e=>nd[n].some((t=>!!e[t]))};const id=Symbol.for("motionComponentSymbol");function ad(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):Wl(r)&&(r.current=e))}),[n])}const od=td?e.useLayoutEffect:e.useEffect;function sd(t,n,r,i,a){const{visualElement:o}=(0,e.useContext)(Gu),s=(0,e.useContext)(qu),l=(0,e.useContext)(uc),c=(0,e.useContext)(Qu).reducedMotion,u=(0,e.useRef)(null);i=i||s.renderer,!u.current&&i&&(u.current=i(t,{visualState:n,parent:o,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,p=(0,e.useContext)(hc);!d||d.projection||!a||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:ld(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Wl(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,r,a,p);const h=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{d&&h.current&&d.update(r,l)}));const f=r[Wi],m=(0,e.useRef)(Boolean(f)&&!window.MotionHandoffIsComplete?.(f)&&window.MotionHasOptimisedAnimation?.(f));return od((()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),lc.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())})),(0,e.useEffect)((()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(f)})),m.current=!1))})),d}function ld(e){if(e)return!1!==e.options.allowProjection?e.projection:ld(e.parent)}function cd(t){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:a,Component:o}=t;function s(t,n){let s;const l={...(0,e.useContext)(Qu),...t,layoutId:ud(t)},{isStatic:c}=l,u=Zu(t),d=a(t,c);if(!c&&td){!function(){(0,e.useContext)(qu).strict;0}();const t=function(e){const{drag:t,layout:n}=rd;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=t.MeasureLayout,u.visualElement=sd(o,d,l,r,t.ProjectionNode)}return(0,ht.jsxs)(Gu.Provider,{value:u,children:[s&&u.visualElement?(0,ht.jsx)(s,{visualElement:u.visualElement,...l}):null,i(o,t,ad(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)rd[t]={...rd[t],...e[t]}}(n),s.displayName=`motion.${"string"===typeof o?o:`create(${o.displayName??o.name??""})`}`;const l=(0,e.forwardRef)(s);return l[id]=o,l}function ud(t){let{layoutId:n}=t;const r=(0,e.useContext)(pc).id;return r&&void 0!==n?r+"-"+n:n}function dd(e,t){let{layout:n,layoutId:r}=t;return Pi.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!yc[e]||"opacity"===e)}const pd=(e,t)=>t&&"number"===typeof e?t.transform(e):e,hd={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},fd=Ci.length;function md(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(Pi.has(l))o=!0;else if(Do(l))i[l]=e;else{const t=pd(e,so[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<fd;a++){const o=Ci[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=pd(s,so[o]);l||(i=!1,r+=`${hd[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}const gd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function vd(e,t,n){for(const r in t)Vi(t[r])||dd(r,n)||(e[r]=t[r])}function yd(t,n){const r={};return vd(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return md(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function bd(e,t){const n={},r=yd(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const xd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function wd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||xd.has(e)}let kd=e=>!wd(e);try{(Sd=require("@emotion/is-prop-valid").default)&&(kd=e=>e.startsWith("on")?!wd(e):Sd(e))}catch{}var Sd;const Ed=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cd(e){return"string"===typeof e&&!e.includes("-")&&!!(Ed.indexOf(e)>-1||/[A-Z]/u.test(e))}const Pd={offset:"stroke-dashoffset",array:"stroke-dasharray"},jd={offset:"strokeDashoffset",array:"strokeDasharray"};function Td(e,t,n){return"string"===typeof e?e:Ia.transform(t+n*e)}function Rd(e,t,n,r){let{attrX:i,attrY:a,attrScale:o,originX:s,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...p}=t;if(md(e,p,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:f,dimensions:m}=e;h.transform&&(m&&(f.transform=h.transform),delete h.transform),m&&(void 0!==s||void 0!==l||f.transform)&&(f.transformOrigin=function(e,t,n){return`${Td(t,e.x,e.width)} ${Td(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(h.x=i),void 0!==a&&(h.y=a),void 0!==o&&(h.scale=o),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Pd:jd;e[a.offset]=Ia.transform(-r);const o=Ia.transform(t),s=Ia.transform(n);e[a.array]=`${o} ${s}`}(h,c,u,d,!1)}const Ad=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Ld=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Md(t,n,r,i){const a=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Rd(e,n,Ld(i),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};vd(e,t.style,t),a.style={...e,...a.style}}return a}function _d(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,a,o)=>{let{latestValues:s}=a;const l=(Cd(n)?Md:bd)(r,s,o,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(kd(i)||!0===n&&wd(i)||!t&&!wd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:i}:{},{children:d}=r,p=(0,e.useMemo)((()=>Vi(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:p})}}function zd(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const Dd=t=>(n,r)=>{const i=(0,e.useContext)(Gu),a=(0,e.useContext)(uc),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a,onUpdate:o}=e;const s={latestValues:Od(t,n,r,i),renderState:a()};return o&&(s.onMount=e=>o({props:t,current:e,...s}),s.onUpdate=e=>o(e)),s}(t,n,i,a);return r?o():zd(o)};function Od(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=Cc(a[p]);let{initial:o,animate:s}=e;const l=Xu(e),c=Ju(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!di(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=hi(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}function Fd(e,t,n){const{style:r}=e,i={};for(const a in r)(Vi(r[a])||t.style&&Vi(t.style[a])||dd(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(i[a]=r[a]);return i}const Nd={useVisualState:Dd({scrapeMotionValuesFromProps:Fd,createRenderState:gd})};function Id(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(Yv){t.dimensions={x:0,y:0,width:0,height:0}}}function $d(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const Vd=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bd(e,t,n,r){$d(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Vd.has(i)?i:Ui(i),t.attrs[i])}function Ud(e,t,n){const r=Fd(e,t,n);for(const i in e)if(Vi(e[i])||Vi(t[i])){r[-1!==Ci.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const Wd=["x","y","width","height","cx","cy","r"],Hd={useVisualState:Dd({scrapeMotionValuesFromProps:Ud,createRenderState:Ad,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:i,latestValues:a}=e;if(!r)return;let o=!!t.drag;if(!o)for(const l in a)if(Pi.has(l)){o=!0;break}if(!o)return;let s=!n;if(n)for(let l=0;l<Wd.length;l++){const e=Wd[l];t[e]!==n[e]&&(s=!0)}s&&wi.read((()=>{Id(r,i),wi.render((()=>{Rd(i,a,Ld(r.tagName),t.transformTemplate),Bd(r,i)}))}))}})};function Yd(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return cd({...Cd(n)?Hd:Nd,preloadedFeatures:e,useRender:_d(r),createVisualElement:t,Component:n})}}const Kd={current:null},qd={current:!1};const Qd=[...Bo,Wa,Za],Gd=new WeakMap;const Xd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Jd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mo,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=zi.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,wi.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Xu(n),this.isVariantNode=Ju(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const e=p[h];void 0!==l[h]&&Vi(e)&&e.set(l[h],!1)}}mount(e){this.current=e,Gd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),qd.current||function(){if(qd.current=!0,td)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Kd.current=e.matches;e.addListener(t),t()}else Kd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Kd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ki(this.notifyUpdate),ki(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Pi.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&wi.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in rd){const t=rd[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Xd.length;n++){const t=Xd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Vi(i))e.addValue(r,i);else if(Vi(a))e.addValue(r,Fi(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,Fi(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Fi(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(_o(n)||Sa(n))?n=parseFloat(n):!(e=>Qd.find(Vo(e)))(n)&&Za.test(t)&&(n=uo(e,t)),this.setBaseTarget(e,Vi(n)?n.get():n)),Vi(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=hi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||Vi(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new Ai),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Zd extends Jd{constructor(){super(...arguments),this.KeyframeResolver=Wo}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Vi(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class ep extends Zd{constructor(){super(...arguments),this.type="html",this.renderInstance=$d}readValueFromInstance(e,t){if(Pi.has(t))return((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return wo(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(Do(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Bl(e,n)}build(e,t,n){md(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Fd(e,t,n)}}class tp extends Zd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pl,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Id(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Pi.has(t)){const e=co(t);return e&&e.default||0}return t=Vd.has(t)?t:Ui(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Ud(e,t,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&wi.postRender(this.updateDimensions)}build(e,t,n){Rd(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){Bd(e,t,0,r)}mount(e){this.isSVGTag=Ld(e.tagName),super.mount(e)}}const np=ui(Yd({...pl,...Yu,...Tu,...Ku},((t,n)=>Cd(t)?new tp(n):new ep(n,{allowProjection:t!==e.Fragment}))));var rp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ip=e.createContext&&e.createContext(rp),ap=function(){return ap=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ap.apply(this,arguments)},op=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function sp(t){return t&&t.map((function(t,n){return e.createElement(t.tag,ap({key:n},t.attr),sp(t.child))}))}function lp(t){return function(n){return e.createElement(cp,ap({attr:ap({},t.attr)},n),sp(t.child))}}function cp(t){var n=function(n){var r,i=t.attr,a=t.size,o=t.title,s=op(t,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",ap({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:ap(ap({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==ip?e.createElement(ip.Consumer,null,(function(e){return n(e)})):n(rp)}function up(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}function dp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(e)}function pp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"}},{tag:"polyline",attr:{points:"5 12 12 5 19 12"}}]})(e)}function hp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function fp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}},{tag:"path",attr:{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}}]})(e)}function mp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(e)}function gp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function vp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function yp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function bp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}function xp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"}},{tag:"polyline",attr:{points:"8 6 2 12 8 18"}}]})(e)}function wp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"7 10 12 15 17 10"}},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"}}]})(e)}function kp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function Sp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{points:"14 2 14 8 20 8"}},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"}},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"}},{tag:"polyline",attr:{points:"10 9 9 9 8 9"}}]})(e)}function Ep(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function Cp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(e)}function Pp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"}},{tag:"polyline",attr:{points:"2 17 12 22 22 17"}},{tag:"polyline",attr:{points:"2 12 12 17 22 12"}}]})(e)}function jp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(e)}function Tp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function Rp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function Ap(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(e)}function Lp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(e)}function Mp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function _p(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function zp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function Dp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}function Op(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function Fp(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const Np=e=>{let{icon:t,size:n,color:r,className:i}=e;return(0,ht.jsx)(t,{size:n,color:r,className:i})},Ip=oi(np.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow);
  outline: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
    color: var(--accent);
  }
  
  &:active {
    transform: translateY(0);
  }
`,$p=oi.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Vp=()=>{const{theme:t,toggleTheme:n}=(()=>{const t=(0,e.useContext)(ft);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t})();return(0,ht.jsx)(Ip,{onClick:n,animate:{scale:[.9,1]},transition:{duration:.3},"aria-label":`Switch to ${"light"===t?"dark":"light"} mode`,children:"light"===t?(0,ht.jsx)($p,{children:(0,ht.jsx)(Np,{icon:Ap,size:20})}):(0,ht.jsx)($p,{children:(0,ht.jsx)(Np,{icon:Dp,size:20})})})},Bp=oi.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${e=>{let{isScrolled:t}=e;return t?"0.75rem 0":"1.25rem 0"}};
  background-color: ${e=>{let{isScrolled:t}=e;return t?"var(--bg-secondary)":"transparent"}};
  backdrop-filter: ${e=>{let{isScrolled:t}=e;return t?"blur(12px)":"none"}};
  box-shadow: ${e=>{let{isScrolled:t}=e;return t?"0 1px 0 var(--border)":"none"}};
  z-index: 1000;
  transition: all 0.3s ease;
`,Up=oi.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`,Wp=oi(np.div)``,Hp=oi(ot)`
  display: flex;
  align-items: center;
  text-decoration: none;
`,Yp=oi.span`
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`,Kp=oi.nav`
  @media (max-width: 768px) {
    display: none;
  }
`,qp=oi.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
`,Qp=oi(np.li)``,Gp=oi(ot)`
  position: relative;
  color: ${e=>e.$isActive?"var(--accent)":"var(--text-secondary)"};
  font-weight: ${e=>e.$isActive?"600":"500"};
  font-size: 0.95rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.25s ease;
  
  &:hover {
    color: var(--accent);
    background: var(--accent-soft);
  }
`,Xp=oi(np.span)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
`,Jp=oi.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Zp=oi(np.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: white;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s ease;
  
  &:hover {
    background: var(--accent-hover);
    color: white;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,eh=oi.nav`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    border-top: 1px solid var(--border);
    z-index: 1000;
    padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
    box-shadow: 0 -2px 20px var(--shadow);
  }
`,th=oi.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 64px;
  
  @media (max-width: 576px) {
    height: 60px;
  }
`,nh=oi.li`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,rh=oi(ot)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  color: ${e=>e.$isActive?"var(--accent)":"var(--text-secondary)"};
  text-decoration: none;
  transition: all 0.25s ease;
  position: relative;
  
  &:active {
    transform: scale(0.95);
  }
`,ih=oi.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
  
  ${rh}:active & {
    transform: scale(1.1);
  }
`,ah=oi.span`
  font-size: 0.7rem;
  font-weight: 500;
  text-align: center;
  
  @media (max-width: 576px) {
    font-size: 0.65rem;
  }
`,oh=oi.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 3px;
  background: var(--accent);
  border-radius: 0 0 3px 3px;
`,sh=oi.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  background: var(--accent);
  color: white;
  text-decoration: none;
  transition: all 0.25s ease;
  border-radius: 12px;
  margin: 0 0.5rem;
  
  ${ih} {
    color: white;
  }
  
  ${ah} {
    color: white;
    font-weight: 600;
  }
  
  &:active {
    transform: scale(0.95);
    background: var(--accent-hover);
  }
  
  @media (max-width: 576px) {
    margin: 0 0.375rem;
    border-radius: 10px;
  }
`,lh=()=>{const[t,n]=(0,e.useState)(!1),r=re();(0,e.useEffect)((()=>{const e=()=>{n(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const i=e=>"/"===e&&"/"===r.pathname||"/"!==e&&r.pathname.startsWith(e),a=[{name:"Home",path:"/",icon:Cp},{name:"About",path:"/about",icon:Op},{name:"Projects",path:"/projects",icon:mp},{name:"Skills",path:"/skills",icon:xp},{name:"Contact",path:"/contact",icon:Tp}];return(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)(Bp,{isScrolled:t,children:(0,ht.jsxs)(Up,{children:[(0,ht.jsx)(Wp,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:(0,ht.jsx)(Hp,{to:"/",onClick:e=>{"/"===window.location.pathname&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:(0,ht.jsx)(Yp,{children:"SH"})})}),(0,ht.jsx)(Kp,{children:(0,ht.jsx)(qp,{children:a.map(((e,t)=>(0,ht.jsx)(Qp,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.4,delay:.1*t},children:(0,ht.jsxs)(Gp,{to:e.path,$isActive:i(e.path),children:[e.name,i(e.path)&&(0,ht.jsx)(Xp,{layoutId:"activeIndicator",initial:!1,transition:{type:"spring",stiffness:500,damping:30}})]})},e.name)))})}),(0,ht.jsxs)(Jp,{children:[(0,ht.jsxs)(Zp,{as:np.a,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.4,delay:.5},href:"/files/Suren's Resume - Frontend Software Engineer.pdf",download:"Suren's Resume - Frontend Software Engineer.pdf",whileHover:{y:-2},whileTap:{scale:.98},children:[(0,ht.jsx)(Np,{icon:wp,size:16}),(0,ht.jsx)("span",{children:"Resume"})]}),(0,ht.jsx)(Vp,{})]})]})}),(0,ht.jsx)(eh,{children:(0,ht.jsxs)(th,{children:[a.map((e=>(0,ht.jsx)(nh,{children:(0,ht.jsxs)(rh,{to:e.path,$isActive:i(e.path),children:[(0,ht.jsx)(ih,{children:(0,ht.jsx)(Np,{icon:e.icon,size:20})}),(0,ht.jsx)(ah,{children:e.name}),i(e.path)&&(0,ht.jsx)(oh,{})]})},e.name))),(0,ht.jsx)(nh,{children:(0,ht.jsxs)(sh,{href:"/files/Suren's Resume - Frontend Software Engineer.pdf",target:"_blank",rel:"noopener noreferrer",children:[(0,ht.jsx)(ih,{children:(0,ht.jsx)(Np,{icon:Sp,size:20})}),(0,ht.jsx)(ah,{children:"Resume"})]})})]})})]})};class ch extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function uh(t){let{children:n,isPresent:r,anchorX:i}=t;const a=(0,e.useId)(),o=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(Qu);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:c,right:u}=s.current;if(r||!o.current||!e||!t)return;const d="left"===i?`left: ${c}`:`right: ${u}`;o.current.dataset.motionPopId=a;const p=document.createElement("style");return l&&(p.nonce=l),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.removeChild(p)}}),[r]),(0,ht.jsx)(ch,{isPresent:r,childRef:o,sizeRef:s,children:e.cloneElement(n,{ref:o})})}const dh=t=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:c}=t;const u=zd(ph),d=(0,e.useId)();let p=!0,h=(0,e.useMemo)((()=>(p=!1,{id:d,initial:r,isPresent:i,custom:o,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;a&&a()},register:e=>(u.set(e,!1),()=>u.delete(e))})),[i,u,a]);return s&&p&&(h={...h}),(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[i]),e.useEffect((()=>{!i&&!u.size&&a&&a()}),[i]),"popLayout"===l&&(n=(0,ht.jsx)(uh,{isPresent:i,anchorX:c,children:n})),(0,ht.jsx)(uc.Provider,{value:h,children:n})};function ph(){return new Map}const hh=e=>e.key||"";function fh(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const mh=t=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:c="left"}=t;const[u,d]=dc(l),p=(0,e.useMemo)((()=>fh(n)),[n]),h=l&&!u?[]:p.map(hh),f=(0,e.useRef)(!0),m=(0,e.useRef)(p),g=zd((()=>new Map)),[v,y]=(0,e.useState)(p),[b,x]=(0,e.useState)(p);od((()=>{f.current=!1,m.current=p;for(let e=0;e<b.length;e++){const t=hh(b[e]);h.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[b,h.length,h.join("-")]);const w=[];if(p!==v){let e=[...p];for(let t=0;t<b.length;t++){const n=b[t],r=hh(n);h.includes(r)||(e.splice(t,0,n),w.push(n))}return"wait"===s&&w.length&&(e=w),x(fh(e)),y(p),null}const{forceRender:k}=(0,e.useContext)(pc);return(0,ht.jsx)(ht.Fragment,{children:b.map((e=>{const t=hh(e),n=!(l&&!u)&&(p===b||h.includes(t));return(0,ht.jsx)(dh,{isPresent:n,initial:!(f.current&&!i)&&void 0,custom:r,presenceAffectsLayout:o,mode:s,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(k?.(),x(m.current),l&&d?.(),a&&a())},anchorX:c,children:e},t)}))})},gh=oi.span`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,vh=oi(np.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.4);
  z-index: 999;
  
  &:hover {
    background-color: var(--accent-hover);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`,yh=()=>{const[t,n]=(0,e.useState)(!1);(0,e.useEffect)((()=>{const e=()=>{window.scrollY>300?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return(0,ht.jsx)(mh,{children:t&&(0,ht.jsx)(vh,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,ht.jsx)(gh,{children:(0,ht.jsx)(pp,{})})})})},bh=()=>{const{pathname:t}=re();return(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[t]),null},xh=(e,t)=>{const n=new Date(e,t-1),r=new Date;let i=r.getFullYear()-n.getFullYear();return(r.getMonth()<n.getMonth()||r.getMonth()===n.getMonth()&&r.getDate()<n.getDate())&&i--,`${i}+`},wh=2018,kh=9,Sh=e=>{let{data:t}=e;return(0,ht.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})},Eh=(e,t)=>{"undefined"!==typeof window&&window.gtag&&window.gtag("event",e,t)},Ch=()=>Eh("resume_view",{category:"resume"}),Ph=e=>Eh("contact_form_submit",{category:"contact",success:e}),jh=e=>Eh("contact_form_error",{category:"contact",error:e}),Th=()=>Eh("schedule_call_click",{category:"cta"}),Rh=()=>Eh("view_projects_click",{category:"navigation"}),Ah=()=>Eh("lets_talk_click",{category:"cta"}),Lh=e=>Eh("social_link_click",{category:"social",platform:e}),Mh=li`
  0%, 60%, 100% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
`,_h=li`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,zh=li`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`,Dh=oi.div`
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding-bottom: calc(64px + env(safe-area-inset-bottom));
  }
  
  @media (max-width: 576px) {
    padding-bottom: calc(60px + env(safe-area-inset-bottom));
  }
`,Oh=oi.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,Fh=oi.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  
  &.orb-1 {
    width: 600px;
    height: 600px;
    background: var(--accent-gradient);
    top: -200px;
    right: -200px;
    animation: ${_h} 20s ease-in-out infinite;
  }
  
  &.orb-2 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, var(--accent) 0%, transparent 70%);
    bottom: 10%;
    left: -100px;
    animation: ${_h} 15s ease-in-out infinite reverse;
  }
`,Nh=oi.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
`,Ih=oi.section`
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 5rem 1.5rem 3rem;
  }
  
  @media (max-width: 576px) {
    padding: 4rem 1rem 2rem;
    gap: 2rem;
    min-height: auto;
  }
`,$h=oi(np.div)`
  @media (max-width: 1024px) {
    order: 2;
  }
`,Vh=oi(np.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent-soft);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    margin-bottom: 1rem;
  }
`,Bh=oi.span`
  width: 8px;
  height: 8px;
  background: var(--success, #4a9d6b);
  border-radius: 50%;
  animation: ${zh} 2s ease-in-out infinite;
`,Uh=oi(np.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`,Wh=oi.span`
  display: inline-block;
  animation: ${Mh} 2.5s infinite;
  transform-origin: 70% 70%;
`,Hh=oi(np.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
`,Yh=oi.span`
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Kh=oi(np.h2)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`,qh=oi(np.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 540px;
  margin-bottom: 1.5rem;
  
  @media (max-width: 1024px) {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }
`,Qh=oi(np.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    gap: 0.4rem;
    margin-bottom: 1.5rem;
  }
`,Gh=oi(np.span)`
  background: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border);
  transition: all 0.25s ease;
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }
  
  @media (max-width: 576px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
  }
`,Xh=oi(np.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
`,Jh=oi(ot)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent);
  color: white;
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.3);
  
  &:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.4);
    color: white;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
  
  @media (max-width: 576px) {
    justify-content: center;
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }
`,Zh=oi(ot)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text-primary);
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }
  
  @media (max-width: 576px) {
    justify-content: center;
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }
`,ef=oi(np.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`,tf=oi(np.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: ${e=>{switch(e.$platform){case"linkedin":return"linear-gradient(135deg, #0077b5 0%, #005885 100%)";case"github":return"linear-gradient(135deg, #24292e 0%, #1a1e22 100%)";case"telegram":return"linear-gradient(135deg, #0088cc 0%, #006699 100%)";case"email":return"linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)";default:return"var(--bg-secondary)"}}};
  border-radius: 12px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    color: white;
  }
  
  @media (max-width: 576px) {
    padding: 0.625rem 1rem;
    font-size: 0.85rem;
    gap: 0.625rem;
  }
`,nf=oi.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  ${tf}:hover & {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  
  @media (max-width: 576px) {
    width: 28px;
    height: 28px;
  }
`,rf=oi(np.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 1024px) {
    order: 1;
  }
`,af=oi.div`
  position: relative;
  width: 320px;
  height: 320px;
  
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
  
  @media (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`,of=oi.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: 4px solid var(--bg-secondary);
  box-shadow: 0 20px 50px var(--shadow-medium);
`,sf=oi.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  border: 2px dashed var(--accent);
  opacity: 0.5;
  animation: spin 30s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,lf=oi.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-secondary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: 0 4px 12px var(--shadow);
  
  svg {
    color: var(--accent);
  }
`,cf=oi(np.section)`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 1rem 2rem;
  }
`,uf=oi.div`
  background: var(--accent-gradient);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(var(--accent-rgb), 0.2);
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`,df=oi.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: white;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: white;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }
`,pf=oi.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,hf=oi.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: white;
  color: var(--accent);
  padding: 0.875rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    color: var(--accent-hover);
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      color: white;
    }
  }
  
  @media (max-width: 576px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
  }
`,ff=oi.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`,mf=oi(np.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    margin-bottom: 2rem;
  }
`,gf=oi.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.5rem;
`,vf=oi.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0;
`,yf=oi.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`,bf=oi(np.div)`
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 10px 30px var(--shadow-medium);
  }
  
  @media (max-width: 576px) {
    padding: 1.25rem 1rem;
    border-radius: 12px;
  }
`,xf=oi.div`
  font-family: 'Sora', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.5rem;
  
  span {
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
    
    span {
      font-size: 1.25rem;
    }
  }
`,wf=oi.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`,kf=oi.section`
  background: var(--bg-secondary);
  padding: 5rem 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`,Sf=oi(np.div)`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Ef=oi.div``,Cf=oi.h2`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  line-height: 1.2;
`,Pf=oi.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.25rem;
    
    strong {
      color: var(--text-primary);
      font-weight: 600;
    }
    
    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }
  
  @media (max-width: 576px) {
    p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
`,jf=oi(ot)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  font-weight: 600;
  font-size: 1rem;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--accent-hover);
    
    svg {
      transform: translateX(4px);
    }
  }
`,Tf=oi.div`
  @media (max-width: 900px) {
    display: none;
  }
`,Rf=oi.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`,Af=oi.div`
  background: var(--bg-primary);
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }
`,Lf=oi.footer`
  background: var(--bg-primary);
  padding: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
`,Mf=oi.div`
  max-width: 1100px;
  margin: 0 auto;
  
  p {
    color: var(--text-muted);
    font-size: 0.875rem;
    margin: 0;
  }
`,_f=()=>{const t=xh(wh,kh);(0,e.useEffect)((()=>{window.scrollTo(0,0),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}),[]);const n={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},r=[{name:"Email",icon:Tp,url:"mailto:surhak96@gmail.com",label:"Send me an email"},{name:"LinkedIn",icon:jp,url:"https://linkedin.com/in/surhak",label:"Connect on LinkedIn"},{name:"Telegram",icon:zp,url:"https://t.me/surohak",label:"Message on Telegram"},{name:"GitHub",icon:Ep,url:"https://github.com/surohak",label:"View GitHub profile"}],i=[{value:t.replace("+",""),label:"Years Experience",suffix:"+"},{value:"20",label:"Projects Delivered",suffix:"+"},{value:"25",label:"Technologies",suffix:"+"},{value:"100",label:"Satisfaction Rate",suffix:"%"}];return(0,ht.jsxs)(Dh,{children:[(0,ht.jsxs)(Oh,{children:[(0,ht.jsx)(Fh,{className:"orb-1"}),(0,ht.jsx)(Fh,{className:"orb-2"}),(0,ht.jsx)(Nh,{})]}),(0,ht.jsxs)(Ih,{children:[(0,ht.jsxs)($h,{as:np.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.1}}},initial:"hidden",animate:"visible",children:[(0,ht.jsxs)(Vh,{as:np.div,variants:n,children:[(0,ht.jsx)(Bh,{}),(0,ht.jsx)("span",{children:"Open to new challenges \u2022 Available for interviews"})]}),(0,ht.jsxs)(Uh,{variants:n,children:["Hey there! ",(0,ht.jsx)(Wh,{children:"\ud83d\udc4b"})]}),(0,ht.jsxs)(Hh,{variants:n,children:["I'm ",(0,ht.jsx)(Yh,{children:"Suren Hakobyan"})]}),(0,ht.jsx)(Kh,{variants:n,children:"Frontend Software Engineer"}),(0,ht.jsxs)(qh,{variants:n,children:["I transform complex ideas into beautiful, performant web experiences. With ",t," years of hands-on experience, I specialize in building modern applications using React, Vue, and TypeScript. My expertise includes Canvas-based image/video editing, AI-powered features, and leading development teams. I'm always exploring new technologies and sharing knowledge with fellow developers."]}),(0,ht.jsx)(Qh,{variants:n,children:["React & Next.js","Vue & Nuxt.js","TypeScript","Canvas & WebGL","React Native","Performance"].map(((e,t)=>(0,ht.jsx)(Gh,{as:np.span,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5+.05*t,duration:.3},children:e},e)))}),(0,ht.jsxs)(Xh,{variants:n,children:[(0,ht.jsxs)(Jh,{to:"/projects",onClick:()=>Rh(),children:["View My Work",(0,ht.jsx)(Np,{icon:dp,size:18})]}),(0,ht.jsx)(Zh,{to:"/contact",onClick:()=>Ah(),children:"Let's Talk"})]}),(0,ht.jsx)(ef,{variants:n,children:r.map(((e,t)=>(0,ht.jsxs)(tf,{href:e.url,target:"Email"===e.name?"_self":"_blank",rel:"noopener noreferrer","aria-label":e.label,as:np.a,$platform:e.name.toLowerCase(),whileHover:{y:-4,scale:1.05},whileTap:{scale:.95},onClick:()=>Lh(e.name.toLowerCase()),children:[(0,ht.jsx)(nf,{$platform:e.name.toLowerCase(),children:(0,ht.jsx)(Np,{icon:e.icon,size:22})}),(0,ht.jsx)("span",{children:e.name})]},e.name)))})]}),(0,ht.jsxs)(rf,{as:np.div,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3,ease:[.22,1,.36,1]},children:[(0,ht.jsxs)(af,{children:[(0,ht.jsx)(of,{src:"/suren.jpg",alt:"Suren Hakobyan - Frontend Engineer"}),(0,ht.jsx)(sf,{})]}),(0,ht.jsxs)(lf,{children:[(0,ht.jsx)(Np,{icon:Rp,size:14}),(0,ht.jsx)("span",{children:"Yerevan, Armenia"})]})]})]}),(0,ht.jsx)(cf,{as:np.section,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6},children:(0,ht.jsxs)(uf,{children:[(0,ht.jsxs)(df,{children:[(0,ht.jsx)(Np,{icon:vp,size:24}),(0,ht.jsx)("span",{children:"Quick Actions for Recruiters"})]}),(0,ht.jsxs)(pf,{children:[(0,ht.jsxs)(hf,{href:"/files/Suren's Resume - Frontend Software Engineer.pdf",target:"_blank",rel:"noopener noreferrer",onClick:()=>Ch(),children:[(0,ht.jsx)(Np,{icon:Sp,size:20}),(0,ht.jsx)("span",{children:"View Resume"})]}),(0,ht.jsxs)(hf,{href:"https://calendly.com/surhak",target:"_blank",rel:"noopener noreferrer",className:"secondary",onClick:()=>Th(),children:[(0,ht.jsx)(Np,{icon:gp,size:20}),(0,ht.jsx)("span",{children:"Schedule a Call"})]})]})]})}),(0,ht.jsxs)(ff,{children:[(0,ht.jsxs)(mf,{as:np.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5},children:[(0,ht.jsx)(gf,{children:"At a Glance"}),(0,ht.jsx)(vf,{children:"Numbers That Tell My Story"})]}),(0,ht.jsx)(yf,{children:i.map(((e,t)=>(0,ht.jsxs)(bf,{as:np.div,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-30px"},transition:{duration:.5,delay:.1*t},whileHover:{y:-4},children:[(0,ht.jsxs)(xf,{children:[e.value,(0,ht.jsx)("span",{children:e.suffix})]}),(0,ht.jsx)(wf,{children:e.label})]},e.label)))})]}),(0,ht.jsx)(kf,{children:(0,ht.jsxs)(Sf,{as:np.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6},children:[(0,ht.jsxs)(Ef,{children:[(0,ht.jsx)(gf,{children:"About Me"}),(0,ht.jsx)(Cf,{children:"Building Digital Experiences That Matter"}),(0,ht.jsxs)(Pf,{children:[(0,ht.jsxs)("p",{children:["My journey as a Frontend Engineer started with a passion for creating digital experiences that users love. Over the years, I've had the privilege of working with innovative teams at companies like ",(0,ht.jsx)("strong",{children:"Simplified"}),", ",(0,ht.jsx)("strong",{children:"JobLeads"}),", and ",(0,ht.jsx)("strong",{children:"Picsart"}),", contributing to products that serve millions of users worldwide."]}),(0,ht.jsx)("p",{children:"What drives me is the intersection of technology and creativity. Whether it's building complex Canvas-based editors, integrating AI capabilities, or mentoring the next generation of developers, I'm constantly pushing boundaries and learning. I believe great code is not just functional\u2014it's elegant, maintainable, and makes a real impact."})]}),(0,ht.jsxs)(jf,{to:"/about",onClick:()=>{setTimeout((()=>{window.scrollTo({top:0,behavior:"smooth"})}),100)},children:["Learn More About Me",(0,ht.jsx)(Np,{icon:dp,size:18})]})]}),(0,ht.jsx)(Tf,{children:(0,ht.jsxs)(Rf,{children:[(0,ht.jsx)(Af,{children:"React"}),(0,ht.jsx)(Af,{children:"Vue"}),(0,ht.jsx)(Af,{children:"TypeScript"}),(0,ht.jsx)(Af,{children:"Next.js"}),(0,ht.jsx)(Af,{children:"Canvas"}),(0,ht.jsx)(Af,{children:"Nuxt.js"})]})})]})}),(0,ht.jsx)(Lf,{children:(0,ht.jsx)(Mf,{children:(0,ht.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Suren Hakobyan. Crafted with care."]})})}),(0,ht.jsx)(Sh,{data:{"@context":"https://schema.org","@type":"Person",name:"Suren Hakobyan",jobTitle:"Frontend Software Engineer",description:"Frontend Software Engineer specializing in JavaScript, TypeScript, React, Vue, and Canvas-based applications. Available for new opportunities.",url:window.location.origin,image:`${window.location.origin}/suren.jpg`,email:"surhak96@gmail.com",address:{"@type":"PostalAddress",addressLocality:"Yerevan",addressCountry:"AM"},sameAs:["https://linkedin.com/in/surhak","https://github.com/surohak","https://t.me/surohak"],knowsAbout:["React","Vue.js","TypeScript","JavaScript","Canvas API","Frontend Development","Web Development","UI/UX","AI Tools"],alumniOf:{"@type":"EducationalOrganization",name:"Yerevan State University"},worksFor:{"@type":"Organization",name:"Freelance"},availableForHire:!0}}),(0,ht.jsx)(Sh,{data:{"@context":"https://schema.org","@type":"ProfessionalService",name:"Suren Hakobyan - Frontend Software Engineer",description:"Professional Frontend Development Services - React, Vue, TypeScript, Canvas Applications",provider:{"@type":"Person",name:"Suren Hakobyan"},areaServed:"Worldwide",serviceType:"Frontend Development",availableChannel:{"@type":"ServiceChannel",serviceUrl:`${window.location.origin}/contact`}}})]})},zf=e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e-1],Df={JobLeads:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5PBhu8hBXj7I8X3EOt-V55HgpjAoz2n7RA&s","ENKE Systems":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqPF5-LL67XBLdvOq7f7m23w7Tgthm6vYXQ&s",Simplified:"https://play-lh.googleusercontent.com/YqR7cdKBWYn6WLMJ3H0hQjiDP8yG7Mdo09LA9FcxNqhc0D46hSgTFuwXcgCs3eCGVQ",Freelance:"/logo/SH-initials.svg",Picsart:"https://play-lh.googleusercontent.com/B1ZyLqecayagX3dNJeg9f0tUS2HF4mwYWuLvVn9TBStQ3N-kgxoecN00INSaEgzoCSQ=w240-h480-rw","Yerevan State University":"https://cdn2.picryl.com/photo/2006/09/21/ysu-gerb-590a53-1024.jpg"},Of=oi.div`
  min-height: 100vh;

  @media (max-width: 768px) {
    padding-bottom: calc(64px + env(safe-area-inset-bottom));
  }

  @media (max-width: 576px) {
    padding-bottom: calc(60px + env(safe-area-inset-bottom));
  }
`,Ff=oi.section`
  padding: 8rem 2rem 4rem;
  background: var(--bg-primary);

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 3rem;
  }

  @media (max-width: 576px) {
    padding: 5rem 1rem 2rem;
  }
`,Nf=oi(np.div)`
  max-width: 1100px;
  margin: 0 auto;
`,If=oi.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,$f=oi.div``,Vf=oi(np.span)`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 1rem;
`,Bf=oi(np.h1)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`,Uf=oi.span`
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Wf=oi(np.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`,Hf=oi(np.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,Yf=oi.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border);
  
  svg {
  color: var(--accent);
  flex-shrink: 0;
  }
`,Kf=oi.span`
  font-size: 0.8rem;
  color: var(--text-muted);
  display: block;
`,qf=oi.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
`,Qf=oi(np.div)`
  display: flex;
  justify-content: center;
  
  @media (max-width: 900px) {
    order: -1;
  }
`,Gf=oi.div`
  width: 280px;
  height: 280px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 50px var(--shadow-medium);

    @media (max-width: 576px) {
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
`,Xf=oi.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Jf=oi.section`
  padding: 5rem 2rem;
  background: var(--bg-secondary);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    }

    @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`,Zf=oi.div`
  max-width: 900px;
  margin: 0 auto;
`,em=oi(np.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    margin-bottom: 2rem;
  }
`,tm=oi.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.5rem;
`,nm=oi.h2`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
`,rm=oi.p`
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
`,im=oi.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border);
    
    @media (max-width: 576px) {
      left: 12px;
    }
  }
`,am=oi(np.div)`
  position: relative;
  padding-left: 50px;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 576px) {
    padding-left: 40px;
    margin-bottom: 1rem;
  }
`,om=oi.div`
    position: absolute;
  left: 8px;
  top: 24px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  background: ${e=>e.$isActive?"var(--accent)":"var(--bg-primary)"};
  border: 3px solid ${e=>e.$isActive?"var(--accent)":"var(--border)"};
  z-index: 1;
  
  @media (max-width: 576px) {
    left: 5px;
      width: 14px;
      height: 14px;
    top: 20px;
  }
`,sm=oi.div`
  background: var(--bg-primary);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 8px 30px var(--shadow);
  }
`,lm=oi.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.25rem;
  cursor: pointer;

  @media (max-width: 576px) {
    padding: 1rem;
  }
`,cm=oi.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 576px) {
    gap: 0.75rem;
  }
`,um=oi.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`,dm=oi.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`,pm=oi.span`
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 576px) {
  font-size: 1rem;
  }
`,hm=oi.div``,fm=oi.h3`
  font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
  margin-bottom: 0.25rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,mm=oi.div`
  font-size: 0.95rem;
  color: var(--accent);
  margin-bottom: 0.25rem;
  
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--accent);
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`,gm=oi.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-wrap: wrap;

  @media (max-width: 576px) {
    font-size: 0.8rem;
    gap: 0.25rem;
  }
`,vm=oi.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: all 0.25s ease;
  
  &:hover {
    background: var(--accent-soft);
    color: var(--accent);
  }
`,ym=oi.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1.25rem 1rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    padding: 0 1rem 0.75rem;
    gap: 0.4rem;
  }
`,bm=oi.span`
  padding: 0.25rem 0.75rem;
  background: var(--accent-soft);
    color: var(--accent);
  border-radius: 20px;
    font-size: 0.75rem;
  font-weight: 600;
`,xm=oi(np.div)`
  padding: 0 1.25rem 1.25rem;
  border-top: 1px solid var(--border);
  margin-top: 0;
  padding-top: 1rem;

  @media (max-width: 576px) {
    padding: 0 1rem 1rem;
    padding-top: 0.75rem;
  }
`,wm=oi.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
`,km=oi.li`
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
  }
  
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
`,Sm=oi.div``,Em=oi.span`
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Cm=oi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,Pm=oi.span`
  padding: 0.25rem 0.6rem;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border);
  
  &.more {
    background: var(--accent-soft);
    color: var(--accent);
    border-color: transparent;
  }
`,jm=oi.section`
  padding: 5rem 2rem;
  background: var(--bg-primary);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`,Tm=oi(np.div)`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 16px;
  border: 1px solid var(--border);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    text-align: center;
  }
`,Rm=oi.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--bg-secondary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    margin: 0 auto;
    width: 48px;
    height: 48px;
  }
`,Am=oi.div``,Lm=oi.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`,Mm=oi.div`
  font-size: 1rem;
  color: var(--accent);
  margin-bottom: 0.25rem;
`,_m=oi.div`
  font-size: 0.875rem;
  color: var(--text-muted);
    margin-bottom: 0.75rem;
`,zm=oi.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
`,Dm=oi.section`
  padding: 5rem 2rem;
  background: var(--accent-gradient);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`,Om=oi(np.div)`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`,Fm=oi.h2`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`,Nm=oi.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2rem;
`,Im=oi.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,$m=oi(ot)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  background: white;
  color: var(--accent);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    color: var(--accent-hover);
  }
`,Vm=oi(ot)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
    font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    color: white;
    transform: translateY(-2px);
  }
`,Bm=()=>{const t=xh(wh,kh);(0,e.useEffect)((()=>{window.scrollTo(0,0),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}),[]);const[n,r]=(0,e.useState)(0),i={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}},a="Yerevan State University",o="Bachelor of Informatics and Applied Mathematics",s=2013,l=2020,c="Bachelor's degree in Informatics and Applied Mathematics. Studied algorithms, data structures, computational mathematics, and information technologies with focus on practical applications in software development.",u=[{icon:mp,label:"Experience",value:`${t} Years`},{icon:Rp,label:"Location",value:"Yerevan, Armenia"},{icon:gp,label:"Available",value:"For a new challenges"},{icon:hp,label:"Focus",value:"Engineering"}],d=e=>{const t=`${zf(e.startMonth)} ${e.startYear}`,n=e.endYear?`${zf(e.endMonth)} ${e.endYear}`:"Present",r=((e,t,n,r)=>{const i=new Date;let a=12*((n||i.getFullYear())-e)+((r||i.getMonth()+1)-t+1);const o=Math.floor(a/12),s=a%12;return 0===o?`${s} ${1===s?"mo":"mos"}`:0===s?`${o} ${1===o?"yr":"yrs"}`:`${o} ${1===o?"yr":"yrs"} ${s} ${1===s?"mo":"mos"}`})(e.startYear,e.startMonth,e.endYear,e.endMonth);return`${t} - ${n} \xb7 ${r}`},p=e=>e.includes("Freelance")?null:Df[e]||null;return(0,ht.jsxs)(Of,{children:[(0,ht.jsx)(Ff,{children:(0,ht.jsx)(Nf,{as:np.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:"visible",children:(0,ht.jsxs)(If,{children:[(0,ht.jsxs)($f,{children:[(0,ht.jsx)(Vf,{variants:i,children:"About Me"}),(0,ht.jsxs)(Bf,{variants:i,children:["Passionate about building ",(0,ht.jsx)(Uf,{children:"exceptional"})," digital experiences"]}),(0,ht.jsxs)(Wf,{variants:i,children:["I'm a dedicated Frontend Software Engineer with a Bachelor's degree in Informatics and Applied Mathematics. With ",t," years of experience, I specialize in JavaScript, React, TypeScript, and creative problem-solving. I excel in manipulating Images/Videos using Canvas element with Konva.js and Fabric.js. I'm passionate about AI Tools, actively leveraging Cursor, ChatGPT, Figma Make and getting expertise in Prompt Engineering. Additionally, I have extensive experience in team leadership, conducting code reviews, mentoring team members, and optimizing team efficiency."]}),(0,ht.jsx)(Hf,{variants:i,children:u.map(((e,t)=>(0,ht.jsxs)(Yf,{children:[(0,ht.jsx)(Np,{icon:e.icon,size:18}),(0,ht.jsxs)("div",{children:[(0,ht.jsx)(Kf,{children:e.label}),(0,ht.jsx)(qf,{children:e.value})]})]},t)))})]}),(0,ht.jsx)(Qf,{variants:i,children:(0,ht.jsx)(Gf,{children:(0,ht.jsx)(Xf,{src:"/suren.jpg",alt:"Suren Hakobyan"})})})]})})}),(0,ht.jsx)(Jf,{children:(0,ht.jsxs)(Zf,{children:[(0,ht.jsxs)(em,{as:np.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[(0,ht.jsx)(tm,{children:"Career Journey"}),(0,ht.jsx)(nm,{children:"Work Experience"}),(0,ht.jsx)(rm,{children:"A timeline of my professional growth and key contributions"})]}),(0,ht.jsx)(im,{children:[{startYear:2024,startMonth:7,position:"Frontend Software Engineer",company:"JobLeads",website:"https://www.jobleads.com",location:"Hamburg, Germany \xb7 Remote",technologies:["Vue 3","Nuxt.js","TypeScript","Composition API","Pinia","AI Integration"],description:["Development of a Job Search platform with Vue 3 / Nuxt, in the team of Resume World, which is mainly responsible for AI Resume Builder and Resume Review","Integrated AI-driven features for Resume Review and Resume Builder, enhancing the user experience and improving resume optimization","Collaborated closely with cross-functional teams, streamlining the product development process and aligning business and technical goals","Implemented reusable components using the Composition API, ensuring code modularity and maintainability","Optimized site performance by applying best practices in code-splitting, caching, and lazy loading"],highlights:["AI Integration","Vue 3","Resume Builder"]},{startYear:2021,startMonth:11,endYear:2024,endMonth:7,position:"Frontend Software Engineer",company:"Simplified",website:"https://app.simplified.com",location:"San Francisco, United States \xb7 Remote",technologies:["React.js","Canvas 2D","Fabric.js","Redux","WebSocket","TypeScript","AI Tools"],description:["Development of an online AI Photo/Video Editor (worked with Canvas element - Fabric.js)","Successfully collaborated with the team to implement complex and critical components of the application, ensuring seamless integration and functionality","Conducted daily code reviews to maintain code quality, identify potential issues, and ensure consistency and best practices across the codebase","Worked closely with the CTO to prioritize tasks and allocate resources effectively, ensuring alignment with project goals and objectives","Mentored junior team members, providing guidance and support in understanding complex technical concepts and best practices in frontend development","Continuously researched and evaluated new technologies and frameworks to enhance the capabilities and performance of the AI Photo/Video editor"],highlights:["Canvas API","AI Editor","Team Leadership"]},{startYear:2021,startMonth:3,endYear:2025,endMonth:12,position:"Frontend Software Engineer",company:"ENKE Systems",website:"https://enkesystems.com/",location:"New York, United States \xb7 Remote",technologies:["React.js","Redux","TypeScript","Material-UI","GraphQL","SCSS","CI/CD"],description:["Frontend development of Music related multiple projects (CRM, CMS, Release Management projects). Worked as an out-staffed Frontend Engineer for Warner Music Group and Empire","Directly communicated with ENKE clients to get correct Business requirements and translate them into technical requirements","Contributed to 3 projects from initial setups to production deployment, and support phase","Participated in initial setup and architecture planning for the projects, working closely with team leads and stakeholders to define requirements and establish project frameworks","Worked with DevOps to have a clear setup of CI/CD","Developed frontend applications using React, Redux, TypeScript, Material UI, implementing UI components, SCSS modules, and ensuring responsive design","Conducted unit testing and test automation to ensure the reliability and stability of applications"],highlights:["Warner Music","Architecture","Music Industry"]},{startYear:2019,startMonth:3,endYear:2021,endMonth:11,position:"Frontend Software Engineer",company:"Picsart",website:"https://picsart.com/create",location:"Yerevan, Armenia \xb7 Hybrid",technologies:["React.js","Konva.js","Canvas API","Redux","TypeScript","WeChat Mini Programs","ReactJSS"],description:["Development of an online Creative Photo Editor since product creation from scratch (worked with canvas element - Konva.js)","Successfully developed and deployed 5 WeChat mini-applications, contributing to the expansion of Picsart's presence on the WeChat platform","Played a pivotal role in the development of Picsart's Creative Photo Editor, utilizing Canvas element with Konva.js library and modern frontend technologies","Actively participated in team meetings, code reviews, and sprint planning sessions, providing input, troubleshooting code issues, and aiding in problem-solving","Collaborated closely with cross-functional teams, including QA, Designers, and Developers, to coordinate project tasks and ensure successful project delivery","Adapted to changes in project management methodologies, transitioning from Kanban to Scrum"],highlights:["Konva.js","WeChat","Product Launch"]},{startYear:2018,startMonth:9,endYear:2024,endMonth:7,position:"Frontend Software Engineer",company:"Freelance",location:"Remote",technologies:["React","Vue","Next.js","Nuxt.js","TypeScript","Electron","React Native","Qt QML","Blockchain"],description:["Stihi, CW - Blockchain and cryptocurrency-based project, crypto exchange | React, MobX, Axios, Quill, EOSJS, SCSS, Styled Components","Factoring, Hellopay - CRM and CMS based projects | React, Redux, Tailwind CSS, Material UI, Recharts, React-Hook-Form","Sberbank - Fintech, Online School, big team | React, Effector.js, Storybooks, GraphQL, Chart.js, Apollo Client, SCSS","Edi-Real - Multiplatform desktop/web/mobile application about Real Estate | Big Data, React, Electron, React-Native, Redux, Redux-Form","Libertex - Fintech trading platform for stocks, CFDs, Forex, and cryptocurrencies | Vue, Backbone.js, Drupal, TypeScript","Dats - Gambling projects | React, Redux, Next.js, TypeScript, Axios, Lodash.js, SCSS, Core UI","Boo - Multiplatform applications | C++, QT QML, WebAssembly, Maps, Leaflet.js, React, Electron","Arburg - 3D Printer App forked from Ultimaker Cura | Python, QT QML, React"],highlights:["Blockchain","Multiplatform","Diverse Projects"]}].map(((e,t)=>(0,ht.jsxs)(am,{as:np.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5,delay:.1*t},children:[(0,ht.jsx)(om,{$isActive:!e.endYear}),(0,ht.jsxs)(sm,{$isExpanded:n===t,children:[(0,ht.jsxs)(lm,{onClick:()=>r(n===t?null:t),children:[(0,ht.jsxs)(cm,{children:[p(e.company)?(0,ht.jsx)(um,{children:(0,ht.jsx)("img",{src:p(e.company),alt:e.company})}):e.company.includes("Freelance")?(0,ht.jsx)(dm,{children:(0,ht.jsx)(pm,{children:"SH"})}):(0,ht.jsx)(dm,{children:(0,ht.jsx)(pm,{children:e.company.charAt(0)})}),(0,ht.jsxs)(hm,{children:[(0,ht.jsx)(fm,{children:e.position}),(0,ht.jsx)(mm,{children:e.website?(0,ht.jsxs)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[e.company," ",(0,ht.jsx)(Np,{icon:kp,size:14})]}):e.company}),(0,ht.jsxs)(gm,{children:[(0,ht.jsx)("span",{children:d(e)}),(0,ht.jsx)("span",{children:"\xb7"}),(0,ht.jsx)("span",{children:e.location})]})]})]}),(0,ht.jsx)(vm,{children:(0,ht.jsx)(Np,{icon:n===t?bp:yp,size:20})})]}),e.highlights&&(0,ht.jsx)(ym,{children:e.highlights.map(((e,t)=>(0,ht.jsx)(bm,{children:e},t)))}),n===t&&(0,ht.jsxs)(xm,{as:np.div,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:[(0,ht.jsx)(wm,{children:e.description.map(((e,t)=>(0,ht.jsx)(km,{children:e},t)))}),(0,ht.jsxs)(Sm,{children:[(0,ht.jsx)(Em,{children:"Technologies:"}),(0,ht.jsxs)(Cm,{children:[e.technologies.slice(0,8).map(((e,t)=>(0,ht.jsx)(Pm,{children:e},t))),e.technologies.length>8&&(0,ht.jsxs)(Pm,{className:"more",children:["+",e.technologies.length-8]})]})]})]})]})]},t)))})]})}),(0,ht.jsx)(jm,{children:(0,ht.jsxs)(Zf,{children:[(0,ht.jsxs)(em,{as:np.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[(0,ht.jsx)(tm,{children:"Background"}),(0,ht.jsx)(nm,{children:"Education"})]}),(0,ht.jsxs)(Tm,{as:np.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:[(0,ht.jsx)(Rm,{children:Df[a]?(0,ht.jsx)("img",{src:Df[a],alt:a}):(0,ht.jsx)(Np,{icon:fp,size:24})}),(0,ht.jsxs)(Am,{children:[(0,ht.jsx)(Lm,{children:o}),(0,ht.jsx)(Mm,{children:a}),(0,ht.jsxs)(_m,{children:[s," - ",l]}),(0,ht.jsx)(zm,{children:c})]})]})]})}),(0,ht.jsx)(Dm,{children:(0,ht.jsxs)(Om,{as:np.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,ht.jsx)(Fm,{children:"Let's Work Together"}),(0,ht.jsx)(Nm,{children:"I'm currently open to new challenges and exciting projects. Whether you need a frontend engineer or want to discuss potential collaboration, I'd love to hear from you."}),(0,ht.jsxs)(Im,{children:[(0,ht.jsx)($m,{to:"/contact",children:"Get in Touch"}),(0,ht.jsx)(Vm,{to:"/projects",children:"View Projects"})]})]})})]})},Um=[{id:2,title:"Job Search Platform",description:"Development of a Job Search platform with Vue 3 / Nuxt, in the team of Resume World, which is mainly responsible for AI Resume Builder and Resume Review. Integrated AI-driven features for Resume Review and Resume Builder.",image:"/projects/jobleads.webp",technologies:["Vue 3","Nuxt.js","TypeScript","Composition API","Pinia","AI Integration"],liveLink:"https://www.jobleads.com",position:"Frontend Software Engineer",company:"JobLeads",category:"professional"},{id:1,title:"AI Photo/Video Editor",description:"Development of an online AI Photo/Video Editor using Canvas element with Fabric.js. Successfully collaborated with the team to implement complex and critical components. Conducted daily code reviews and mentored junior team members.",image:"/projects/simplified.webp",technologies:["React","TypeScript","Canvas 2D","Fabric.js","Redux","WebSocket","AI Tools"],liveLink:"https://app.simplified.com",position:"Frontend Software Engineer",company:"Simplified",category:"professional"},{id:3,title:"Music Publishing Platform",description:"Frontend development of Music related projects (CRM, CMS, Release Management) as out-staffed Frontend Engineer for Warner Music Group and Empire. Contributed to multiple projects from initial setup to production.",image:"/projects/warner-chappell.webp",technologies:["React","Redux","TypeScript","Material-UI","GraphQL","SCSS"],liveLink:"https://warnerchappell.com/",position:"Frontend Software Engineer",company:"Warner Chappell Music",category:"professional"},{id:7,title:"Music Licensing Portal",description:"Music licensing platform with sophisticated search, audio playback and waveform visualization.",image:"/projects/arrow-warner.webp",technologies:["React","TypeScript","Redux","Web Audio API","Material UI"],liveLink:"https://arrow.warnerchappell.com/",position:"Frontend Software Engineer",company:"Warner Chappell Music",category:"professional"},{id:4,title:"Creative Photo Editor",description:"Development of an online Creative Photo Editor since product creation from scratch using Canvas element with Konva.js. Successfully developed and deployed 5 WeChat mini-applications, contributing to Picsart's expansion on the WeChat platform.",image:"/projects/picsart.webp",technologies:["React","Konva.js","Canvas API","Redux","TypeScript","WeChat Mini Programs","ReactJSS"],liveLink:"https://picsart.com/create",position:"Frontend Software Engineer",company:"Picsart",category:"professional"},{id:14,title:"Data Visualization Dashboard",description:"Customized Apache Superset for supply chain analytics with custom chart types.",image:"/projects/superset.webp",technologies:["React","TypeScript","D3.js","Data Visualization","SQL Lab"],liveLink:"https://superset.apache.org/",position:"Frontend Software Engineer",company:"Supply Chain Project",category:"professional"},{id:13,title:"3D Printer Control App",description:"3D Printer App forked from Ultimaker Cura. Built with Python, QT QML, and React for industrial 3D printer control.",image:"/projects/arburg.webp",technologies:["Python","QT QML","React","3D Modeling"],liveLink:"https://www.arburg.com/en/",position:"Frontend Developer",company:"Arburg",category:"freelance"},{id:12,title:"Creative Assets Marketplace",description:"Marketplace for vector graphics and stock media with advanced search and content management.",image:"/projects/vecteezy.webp",technologies:["React","TypeScript","Redux","Image Processing"],liveLink:"https://www.vecteezy.com/",position:"Frontend Developer",company:"Vecteezy",category:"freelance"},{id:11,title:"Salon Booking System",description:"All-in-one business management platform for salons with booking and reporting features.",image:"/projects/bookedby.webp",technologies:["React","TypeScript","Node.js","Payment Processing","CRM"],liveLink:"https://www.bookedby.com/",position:"Frontend Developer",company:"BookedBy",category:"freelance"},{id:10,title:"Sports Betting Platform",description:"Real-time sports betting website with live odds updates and secure payment processing.",image:"/projects/betandreas.webp",technologies:["React","TypeScript","WebSockets","Payment Gateway"],liveLink:"https://betandreas.com/",position:"Frontend Developer",company:"Bet Andreas",category:"freelance"},{id:9,title:"Real Estate Management",description:"Multiplatform desktop/web/mobile application about Real Estate. Built with Big Data, React, Electron, React-Native, Redux, and Redux-Form.",image:"/projects/edireal.webp",technologies:["React","Electron","React Native","Redux","Big Data","Redux-Form"],liveLink:"https://edireal.com/",position:"Frontend Developer",company:"EDI-Real",category:"freelance"},{id:8,title:"Educational Platform",description:"Fintech, Online School project for Sberbank with big team. Built with React, Effector.js, Storybooks, GraphQL, Chart.js, Apollo Client, and SCSS.",image:"/projects/sber-university.webp",technologies:["React","Effector.js","GraphQL","Apollo Client","Chart.js","Storybooks","SCSS"],liveLink:"https://sberuniversity.ru/",position:"Frontend Developer",company:"Sberbank",category:"freelance"},{id:16,title:"Fintech Trading Platform",description:"Fintech trading platform for stocks, CFDs, Forex, and cryptocurrencies.",image:"/projects/libertex.webp",technologies:["Vue","Backbone.js","Drupal","TypeScript"],liveLink:"https://libertex.com/",position:"Frontend Developer",company:"Libertex",category:"freelance"},{id:15,title:"Gaming Finance Dashboard",description:"Admin dashboard for gaming company funding with analytics and financial reporting.",image:"/projects/gamesboost42.webp",technologies:["React","TypeScript","Redux","Dashboard UI","Data Visualization"],liveLink:"https://gamesboost42.com/",position:"Frontend Developer",company:"GamesBoost42",category:"freelance"},{id:5,title:"Blockchain Social Network",description:"Blockchain and cryptocurrency-based project, crypto exchange. Built with React, MobX, Axios, Quill, EOSJS, SCSS, and Styled Components.",image:"/projects/stihi.webp",technologies:["React","MobX","Blockchain","EOSJS","Axios","Quill","SCSS"],liveLink:"https://stihi.io/",position:"Frontend Developer",company:"Stihi.io",category:"freelance"},{id:6,title:"Cross-Chain Bridge",description:"Blockchain bridge for seamless asset transfers between different networks.",image:"/projects/savva.webp",technologies:["React","TypeScript","Web3","PulseChain","Smart Contracts"],liveLink:"https://savva.app/",position:"Frontend Developer",company:"Savva.app",category:"freelance"}],Wm=oi.div`
  min-height: 100vh;
  background: var(--bg-primary);
  
  @media (max-width: 768px) {
    padding-bottom: calc(64px + env(safe-area-inset-bottom));
  }
  
  @media (max-width: 576px) {
    padding-bottom: calc(60px + env(safe-area-inset-bottom));
  }
`,Hm=oi.section`
  padding: 8rem 2rem 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 5rem 1rem 1.5rem;
  }
`,Ym=oi(np.div)`
  max-width: 700px;
  margin: 0 auto;
`,Km=oi.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.75rem;
`,qm=oi.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,Qm=oi.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,Gm=oi.section`
  padding: 0 2rem 2rem;
  position: sticky;
  top: 70px;
  z-index: 10;
  background: var(--bg-primary);
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    top: 60px;
  }
  
  @media (max-width: 576px) {
    padding: 0 1rem 1rem;
  }
`,Xm=oi.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,Jm=oi.div`
  display: flex;
  gap: 0.5rem;
  background: var(--bg-secondary);
  padding: 0.375rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  
  @media (max-width: 576px) {
    width: 100%;
    overflow-x: auto;
    padding: 0.25rem;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`,Zm=oi.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  background: ${e=>e.$isActive?"var(--accent)":"transparent"};
  color: ${e=>e.$isActive?"white":"var(--text-secondary)"};
  transition: all 0.25s ease;
  
  &:hover {
    background: ${e=>e.$isActive?"var(--accent)":"var(--accent-soft)"};
    color: ${e=>e.$isActive?"white":"var(--accent)"};
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    flex: 1;
    justify-content: center;
    
    span:first-of-type {
      display: none;
    }
  }
`,eg=oi.span`
  padding: 0.125rem 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`,tg=oi.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,ng=oi.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  display: flex;
`,rg=oi.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.75rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 0.9rem;
  transition: all 0.25s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`,ig=oi.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  color: var(--text-muted);
  transition: all 0.25s ease;
  
  &:hover {
    background: var(--accent-soft);
    color: var(--accent);
  }
`,ag=oi.section`
  padding: 0 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 1rem 2rem;
  }
`,og=oi.div`
  max-width: 1200px;
  margin: 0 auto;
`,sg=oi.div`
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`,lg=oi(np.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,cg=oi(np.article)`
  background: var(--bg-secondary);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 20px 40px var(--shadow-medium);
  }
  
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`,ug=oi.div`
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
`,dg=oi.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${cg}:hover & {
    transform: scale(1.05);
  }
`,pg=oi.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1.5rem;
  opacity: ${e=>e.$isHovered?1:0};
  transition: opacity 0.3s ease;
  
  @media (max-width: 768px) {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%);
  }
`,hg=oi.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  color: var(--accent);
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  
  &:hover {
    transform: scale(1.05);
    color: var(--accent-hover);
  }
`,fg=oi.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.375rem 0.75rem;
  background: ${e=>"professional"===e.$category?"var(--accent)":"var(--bg-secondary)"};
  color: ${e=>"professional"===e.$category?"white":"var(--text-primary)"};
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,mg=oi.div`
  padding: 1.25rem;
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`,gg=oi.div`
  margin-bottom: 0.75rem;
`,vg=oi.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
`,yg=oi.div`
  font-size: 0.85rem;
  color: var(--text-muted);
  
  strong {
    color: var(--accent);
    font-weight: 600;
  }
`,bg=oi.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,xg=oi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`,wg=oi.span`
  padding: 0.25rem 0.625rem;
  background: var(--bg-primary);
  color: var(--text-secondary);
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border);
  
  &.more {
    background: var(--accent-soft);
    color: var(--accent);
    border-color: transparent;
  }
`,kg=oi(np.div)`
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-secondary);
  border-radius: 16px;
  border: 1px solid var(--border);
`,Sg=oi.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Eg=oi.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`,Cg=oi.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`,Pg=oi.button`
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: white;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease;
  
  &:hover {
    background: var(--accent-hover);
  }
`,jg=()=>{const[t,n]=(0,e.useState)(""),[r,i]=(0,e.useState)("all"),[a,o]=(0,e.useState)(null),s=(0,e.useMemo)((()=>Um.filter((e=>{const n="all"===r||e.category===r,i=!t.trim()||e.title.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase())||e.technologies.some((e=>e.toLowerCase().includes(t.toLowerCase())))||e.company&&e.company.toLowerCase().includes(t.toLowerCase());return n&&i}))),[t,r]),l=Um.filter((e=>"professional"===e.category)).length,c=Um.filter((e=>"freelance"===e.category)).length,u={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}};return(0,ht.jsxs)(Wm,{children:[(0,ht.jsx)(Hm,{children:(0,ht.jsxs)(Ym,{as:np.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,ht.jsx)(Km,{children:"Portfolio"}),(0,ht.jsx)(qm,{children:"Featured Projects"}),(0,ht.jsx)(Qm,{children:"A curated selection of projects showcasing my expertise in frontend development, from enterprise applications to creative tools."})]})}),(0,ht.jsx)(Gm,{children:(0,ht.jsxs)(Xm,{children:[(0,ht.jsxs)(Jm,{children:[(0,ht.jsxs)(Zm,{$isActive:"all"===r,onClick:()=>i("all"),children:[(0,ht.jsx)(Np,{icon:Pp,size:16}),(0,ht.jsx)("span",{children:"All Projects"}),(0,ht.jsx)(eg,{children:Um.length})]}),(0,ht.jsxs)(Zm,{$isActive:"professional"===r,onClick:()=>i("professional"),children:[(0,ht.jsx)(Np,{icon:mp,size:16}),(0,ht.jsx)("span",{children:"Professional"}),(0,ht.jsx)(eg,{children:l})]}),(0,ht.jsxs)(Zm,{$isActive:"freelance"===r,onClick:()=>i("freelance"),children:[(0,ht.jsx)(Np,{icon:Pp,size:16}),(0,ht.jsx)("span",{children:"Freelance"}),(0,ht.jsx)(eg,{children:c})]})]}),(0,ht.jsxs)(tg,{children:[(0,ht.jsx)(ng,{children:(0,ht.jsx)(Np,{icon:_p,size:18})}),(0,ht.jsx)(rg,{type:"text",placeholder:"Search projects...",value:t,onChange:e=>n(e.target.value)}),t&&(0,ht.jsx)(ig,{onClick:()=>n(""),"aria-label":"Clear search",children:(0,ht.jsx)(Np,{icon:Fp,size:16})})]})]})}),(0,ht.jsx)(ag,{children:(0,ht.jsxs)(og,{children:[t&&(0,ht.jsxs)(sg,{children:["Found ",s.length," project",1!==s.length?"s":"",t&&` matching "${t}"`]}),(0,ht.jsx)(mh,{mode:"wait",children:s.length>0?(0,ht.jsx)(lg,{as:np.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},initial:"hidden",animate:"visible",children:s.map((e=>(0,ht.jsxs)(cg,{as:np.article,variants:u,onMouseEnter:()=>o(e.id),onMouseLeave:()=>o(null),onClick:()=>e.liveLink&&window.open(e.liveLink,"_blank"),whileHover:{y:-8},transition:{duration:.3},role:"button",tabIndex:0,"aria-label":`View ${e.title} project`,children:[(0,ht.jsxs)(ug,{children:[(0,ht.jsx)(dg,{src:e.image,alt:e.title,loading:"lazy"}),(0,ht.jsx)(pg,{$isHovered:a===e.id,children:e.liveLink&&(0,ht.jsxs)(hg,{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:[(0,ht.jsx)(Np,{icon:kp,size:18}),(0,ht.jsx)("span",{children:"View Project"})]})}),(0,ht.jsx)(fg,{$category:e.category,children:"professional"===e.category?"Professional":"Freelance"})]}),(0,ht.jsxs)(mg,{children:[(0,ht.jsxs)(gg,{children:[(0,ht.jsx)(vg,{children:e.title}),e.company&&(0,ht.jsxs)(yg,{children:[e.position," at ",(0,ht.jsx)("strong",{children:e.company})]})]}),(0,ht.jsx)(bg,{children:e.description}),(0,ht.jsxs)(xg,{children:[e.technologies.slice(0,4).map(((e,t)=>(0,ht.jsx)(wg,{children:e},t))),e.technologies.length>4&&(0,ht.jsxs)(wg,{className:"more",children:["+",e.technologies.length-4]})]})]})]},e.id)))},`${r}-${t}`):(0,ht.jsxs)(kg,{as:np.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},children:[(0,ht.jsx)(Sg,{children:"\ud83d\udd0d"}),(0,ht.jsx)(Eg,{children:"No projects found"}),(0,ht.jsx)(Cg,{children:"Try adjusting your search or filter criteria"}),(0,ht.jsx)(Pg,{onClick:()=>{n(""),i("all")},children:"Clear all filters"})]})})]})})]})},Tg=[{title:"Main Technologies",icon:function(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"}}]})(e)},skills:["JavaScript","TypeScript","React","Vue","Canvas (2d)","Redux","Next.js","Nuxt.js","Qt QML"]},{title:"HTML5 Canvas",icon:function(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"}},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"}},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"}},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"}},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"}},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"}},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"}},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"}}]})(e)},skills:["Konva.js","Fabric.js","Image Processing","Video Processing"]},{title:"State Management",icon:Pp,skills:["Redux","MobX","Zustand","Recoil","Effector.js","Vuex","Pinia"]},{title:"UI Components",icon:Lp,skills:["Material UI","Chakra UI","Ant Design","Vuetify"]},{title:"Styles",icon:xp,skills:["CSS","SCSS","SASS","LESS","Styled Components","Tailwind CSS","React JSS"]},{title:"Data Visualization",icon:function(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"}},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"}}]})(e)},skills:["Chart.js","Apache Echarts","Recharts","D3.js","Apache Superset"]},{title:"Testing",icon:vp,skills:["Jest","Cypress","React Testing Library","Vitest","Unit Testing","Integration Testing","E2E Testing"]},{title:"Version Control",icon:function(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"}},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"}}]})(e)},skills:["Git","GitHub","GitLab","Bitbucket"]},{title:"Multiplatform",icon:function(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(e)},skills:["Electron.js","React Native","Qt QML","Mini Apps"]},{title:"Backend & APIs",icon:function(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"}},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"}}]})(e)},skills:["Node.js","Express.js","GraphQL","Apollo Client","REST API","WebSocket","Firebase"]},{title:"Tools & Libraries",icon:Lp,skills:["WebAssembly","Axios","Lodash.js","Moment.js","Leaflet.js","Quill","Storybooks","Redux-Form","React-Hook-Form"]},{title:"Additional Skills",icon:function(e){return lp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)},skills:["Code Review","Code Refactoring","Performance Optimization","Algorithms","Data Structures","Big Data","Blockchain","Linux","OOP","Scrum","Kanban"]}],Rg=oi.div`
  min-height: 100vh;
  background: var(--bg-primary);
  
  @media (max-width: 768px) {
    padding-bottom: calc(64px + env(safe-area-inset-bottom));
  }
  
  @media (max-width: 576px) {
    padding-bottom: calc(60px + env(safe-area-inset-bottom));
  }
`,Ag=oi.section`
  padding: 8rem 2rem 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 5rem 1rem 1.5rem;
  }
`,Lg=oi(np.div)`
  max-width: 600px;
  margin: 0 auto;
`,Mg=oi.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.75rem;
`,_g=oi.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,zg=oi.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,Dg=oi.section`
  padding: 0 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 1rem 2rem;
  }
`,Og=oi(np.div)`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,Fg=oi(np.div)`
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--border);
  
  @media (max-width: 576px) {
    padding: 1.25rem;
    border-radius: 14px;
  }
`,Ng=oi.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`,Ig=oi.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }
`,$g=oi.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,Vg=oi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Bg=oi.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  
  @media (max-width: 576px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`,Ug=oi.section`
  padding: 5rem 2rem;
  background: var(--accent-gradient);
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 2rem 1rem;
  }
`,Wg=oi(np.div)`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`,Hg=oi.h2`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`,Yg=oi.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 2rem;
`,Kg=oi.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,qg=oi(ot)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: white;
  color: var(--accent);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    color: var(--accent-hover);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`,Qg=oi(ot)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    color: white;
    transform: translateY(-2px);
  }
`,Gg=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,ease:[.22,1,.36,1]}}};return(0,ht.jsxs)(Rg,{children:[(0,ht.jsx)(Ag,{children:(0,ht.jsxs)(Lg,{as:np.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,ht.jsx)(Mg,{children:"Expertise"}),(0,ht.jsx)(_g,{children:"Skills & Technologies"}),(0,ht.jsx)(zg,{children:"Technologies and tools I work with to build modern web applications."})]})}),(0,ht.jsx)(Dg,{children:(0,ht.jsx)(Og,{as:np.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},initial:"hidden",animate:"visible",children:Tg.map((t=>(0,ht.jsxs)(Fg,{as:np.div,variants:e,children:[(0,ht.jsxs)(Ng,{children:[(0,ht.jsx)(Ig,{children:(0,ht.jsx)(Np,{icon:t.icon,size:20})}),(0,ht.jsx)($g,{children:t.title})]}),(0,ht.jsx)(Vg,{children:t.skills.map((e=>(0,ht.jsx)(Bg,{children:e},e)))})]},t.title)))})}),(0,ht.jsx)(Ug,{children:(0,ht.jsxs)(Wg,{as:np.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,ht.jsx)(Hg,{children:"Ready to Build Something Great?"}),(0,ht.jsx)(Yg,{children:"Let's discuss how my skills can contribute to your project's success."}),(0,ht.jsxs)(Kg,{children:[(0,ht.jsxs)(qg,{to:"/contact",children:["Get in Touch",(0,ht.jsx)(Np,{icon:dp,size:18})]}),(0,ht.jsx)(Qg,{to:"/projects",children:"View Projects"})]})]})})]})},Xg={_origin:"https://api.emailjs.com"},Jg=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Zg{constructor(e){this.status=e.status,this.text=e.responseText}}const ev=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((r,i)=>{const a=new XMLHttpRequest;a.addEventListener("load",(e=>{let{target:t}=e;const n=new Zg(t);200===n.status||"OK"===n.text?r(n):i(n)})),a.addEventListener("error",(e=>{let{target:t}=e;i(new Zg(t))})),a.open("POST",Xg._origin+e,!0),Object.keys(n).forEach((e=>{a.setRequestHeader(e,n[e])})),a.send(t)}))},tv=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";Xg._userID=e,Xg._origin=t},nv=(e,t,n,r)=>{const i=r||Xg._userID,a=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(n);Jg(i,e,t);const o=new FormData(a);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),ev("/api/v1.0/email/send-form",o)},rv=oi.div`
  min-height: 100vh;
  background: var(--bg-primary);
  
  @media (max-width: 768px) {
    padding-bottom: calc(64px + env(safe-area-inset-bottom));
  }
  
  @media (max-width: 576px) {
    padding-bottom: calc(60px + env(safe-area-inset-bottom));
  }
`,iv=oi.section`
  padding: 8rem 2rem 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 5rem 1rem 1.5rem;
  }
`,av=oi(np.div)`
  max-width: 600px;
  margin: 0 auto;
`,ov=oi.span`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.75rem;
`,sv=oi.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,lv=oi.p`
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0;
`,cv=oi.section`
  padding: 0 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 1rem 1rem;
  }
`,uv=oi(np.div)`
  max-width: 800px;
  margin: 0 auto;
  background: var(--accent-gradient);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`,dv=oi.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  
  svg {
    color: white;
  }
`,pv=oi.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin-bottom: 1.5rem;
`,hv=oi.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`,fv=oi.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  color: var(--accent);
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    color: var(--accent-hover);
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      color: white;
    }
  }
`,mv=oi.section`
  padding: 2rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 3rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem 1rem 2rem;
  }
`,gv=oi.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,vv=oi(np.div)`
  background: var(--bg-secondary);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--border);
  height: fit-content;
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`,yv=oi.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`,bv=oi.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,xv=oi.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,wv=oi(np.a)`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-primary);
  border-radius: 12px;
  text-decoration: none;
  border: 1px solid var(--border);
  transition: all 0.25s ease;
  
  &:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 12px var(--shadow);
  }
`,kv=oi.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Sv=oi.div``,Ev=oi.span`
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Cv=oi.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0.125rem 0;
`,Pv=oi.span`
  font-size: 0.8rem;
  color: var(--text-muted);
`,jv=oi.div`
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
`,Tv=oi.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`,Rv=oi.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,Av=oi(np.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  background: ${e=>{switch(e.$platform){case"linkedin":return"linear-gradient(135deg, #0077b5 0%, #005885 100%)";case"github":return"linear-gradient(135deg, #24292e 0%, #1a1e22 100%)";case"telegram":return"linear-gradient(135deg, #0088cc 0%, #006699 100%)";default:return"var(--bg-secondary)"}}};
  border-radius: 12px;
  color: white;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    color: white;
  }
  
  @media (max-width: 576px) {
    width: 44px;
    height: 44px;
  }
`,Lv=oi(np.div)`
  background: var(--bg-secondary);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid var(--border);
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`,Mv=oi.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`,_v=oi.form``,zv=oi.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Dv=oi.div`
  margin-bottom: 1.25rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent);
    transform: scaleX(${e=>e.$isFocused?1:0});
    transition: transform 0.3s ease;
  }
`,Ov=oi.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`,Fv="\n  width: 100%;\n  padding: 0.875rem 1rem;\n  background: var(--bg-primary);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  font-size: 0.95rem;\n  color: var(--text-primary);\n  transition: all 0.25s ease;\n  \n  &:focus {\n    outline: none;\n    border-color: var(--accent);\n    box-shadow: 0 0 0 3px var(--accent-soft);\n  }\n  \n  &::placeholder {\n    color: var(--text-muted);\n  }\n",Nv=oi.input`
  ${Fv}
`,Iv=oi.textarea`
  ${Fv}
  resize: vertical;
  min-height: 120px;
`,$v=oi(np.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background: var(--accent);
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s ease;
  
  &:hover:not(:disabled) {
    background: var(--accent-hover);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Vv=oi.div`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,Bv=oi(np.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  background: ${e=>"success"===e.$type?"rgba(74, 157, 107, 0.1)":"rgba(196, 74, 74, 0.1)"};
  color: ${e=>"success"===e.$type?"var(--success, #4a9d6b)":"var(--error, #c44a4a)"};
  border: 1px solid ${e=>"success"===e.$type?"var(--success, #4a9d6b)":"var(--error, #c44a4a)"};
`,Uv=()=>{const t=(0,e.useRef)(null),n=xh(wh,kh),[r,i]=(0,e.useState)({from_name:"",reply_to:"",subject:"",message:""}),[a,o]=(0,e.useState)("idle"),[s,l]=(0,e.useState)(null);(0,e.useEffect)((()=>{tv("mitFBwd43Ky99sQf6")}),[]);const c=e=>{const{name:t,value:n}=e.target;i((e=>({...e,[t]:n})))},u=[{icon:Tp,label:"Email",value:"surhak96@gmail.com",link:"mailto:surhak96@gmail.com",description:"Best for detailed inquiries"},{icon:Mp,label:"Phone",value:"+374-95-22-27-06",link:"tel:+37495222706",description:"Available during business hours"},{icon:Rp,label:"Location",value:"Yerevan, Armenia",link:"https://www.google.com/maps/place/Yerevan,+Armenia",description:"Open to remote work globally"}],d=[{icon:jp,label:"LinkedIn",url:"https://linkedin.com/in/surhak",platform:"linkedin"},{icon:Ep,label:"GitHub",url:"https://github.com/surohak",platform:"github"},{icon:zp,label:"Telegram",url:"https://t.me/surohak",platform:"telegram"}];return(0,ht.jsxs)(rv,{children:[(0,ht.jsx)(iv,{children:(0,ht.jsxs)(av,{as:np.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,ht.jsx)(ov,{children:"Get in Touch"}),(0,ht.jsx)(sv,{children:"Let's Work Together"}),(0,ht.jsx)(lv,{children:"Have a project in mind or looking for a frontend engineer? I'd love to hear from you. Let's create something amazing."})]})}),(0,ht.jsx)(cv,{children:(0,ht.jsxs)(uv,{as:np.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[(0,ht.jsxs)(dv,{children:[(0,ht.jsx)(Np,{icon:vp,size:24}),(0,ht.jsx)("span",{children:"For Recruiters"})]}),(0,ht.jsxs)(pv,{children:[n," years of frontend experience. Available for new opportunities."]}),(0,ht.jsxs)(hv,{children:[(0,ht.jsxs)(fv,{href:"/files/Suren's Resume - Frontend Software Engineer.pdf",target:"_blank",rel:"noopener noreferrer",children:[(0,ht.jsx)(Np,{icon:Sp,size:18}),(0,ht.jsx)("span",{children:"View Resume"})]}),(0,ht.jsxs)(fv,{href:"https://calendly.com/surhak",target:"_blank",rel:"noopener noreferrer",className:"secondary",children:[(0,ht.jsx)(Np,{icon:gp,size:18}),(0,ht.jsx)("span",{children:"Schedule Call"})]})]})]})}),(0,ht.jsx)(mv,{children:(0,ht.jsxs)(gv,{children:[(0,ht.jsxs)(vv,{as:np.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:[(0,ht.jsx)(yv,{children:"Contact Information"}),(0,ht.jsx)(bv,{children:"Feel free to reach out through any of these channels. I typically respond within 24 hours."}),(0,ht.jsx)(xv,{children:u.map(((e,t)=>(0,ht.jsxs)(wv,{as:np.a,href:e.link,target:"Location"===e.label?"_blank":"_self",rel:"noopener noreferrer",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4,delay:.4+.1*t},whileHover:{x:4},children:[(0,ht.jsx)(kv,{children:(0,ht.jsx)(Np,{icon:e.icon,size:20})}),(0,ht.jsxs)(Sv,{children:[(0,ht.jsx)(Ev,{children:e.label}),(0,ht.jsx)(Cv,{children:e.value}),(0,ht.jsx)(Pv,{children:e.description})]})]},e.label)))}),(0,ht.jsxs)(jv,{children:[(0,ht.jsx)(Tv,{children:"Connect with me"}),(0,ht.jsx)(Rv,{children:d.map((e=>(0,ht.jsx)(Av,{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":e.label,as:np.a,$platform:e.platform,whileHover:{y:-4,scale:1.05},whileTap:{scale:.95},children:(0,ht.jsx)(Np,{icon:e.icon,size:22})},e.label)))})]})]}),(0,ht.jsxs)(Lv,{as:np.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.3},children:[(0,ht.jsx)(Mv,{children:"Send a Message"}),(0,ht.jsxs)(_v,{ref:t,onSubmit:e=>{if(e.preventDefault(),!r.from_name||!r.reply_to||!r.subject||!r.message)return o("error"),void setTimeout((()=>o("idle")),3e3);o("submitting"),t.current&&nv("service_aadmhtt","template_bcmc59t",t.current,"mitFBwd43Ky99sQf6").then((()=>{o("success"),i({from_name:"",reply_to:"",subject:"",message:""}),Ph(!0),setTimeout((()=>o("idle")),5e3)})).catch((e=>{o("error"),Ph(!1),jh(e.message||"Unknown error"),setTimeout((()=>o("idle")),3e3)}))},children:[(0,ht.jsxs)(zv,{children:[(0,ht.jsxs)(Dv,{$isFocused:"from_name"===s,children:[(0,ht.jsx)(Ov,{htmlFor:"from_name",children:"Your Name"}),(0,ht.jsx)(Nv,{type:"text",id:"from_name",name:"from_name",value:r.from_name,onChange:c,onFocus:()=>l("from_name"),onBlur:()=>l(null),placeholder:"John Doe",required:!0})]}),(0,ht.jsxs)(Dv,{$isFocused:"reply_to"===s,children:[(0,ht.jsx)(Ov,{htmlFor:"reply_to",children:"Your Email"}),(0,ht.jsx)(Nv,{type:"email",id:"reply_to",name:"reply_to",value:r.reply_to,onChange:c,onFocus:()=>l("reply_to"),onBlur:()=>l(null),placeholder:"john@example.com",required:!0})]})]}),(0,ht.jsxs)(Dv,{$isFocused:"subject"===s,children:[(0,ht.jsx)(Ov,{htmlFor:"subject",children:"Subject"}),(0,ht.jsx)(Nv,{type:"text",id:"subject",name:"subject",value:r.subject,onChange:c,onFocus:()=>l("subject"),onBlur:()=>l(null),placeholder:"What's this about?",required:!0})]}),(0,ht.jsxs)(Dv,{$isFocused:"message"===s,children:[(0,ht.jsx)(Ov,{htmlFor:"message",children:"Message"}),(0,ht.jsx)(Iv,{id:"message",name:"message",value:r.message,onChange:c,onFocus:()=>l("message"),onBlur:()=>l(null),placeholder:"Tell me about your project or opportunity...",rows:5,required:!0})]}),(0,ht.jsx)($v,{type:"submit",disabled:"submitting"===a,as:np.button,whileHover:{y:-2},whileTap:{scale:.98},children:"submitting"===a?(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)(Vv,{}),(0,ht.jsx)("span",{children:"Sending..."})]}):(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)(Np,{icon:zp,size:18}),(0,ht.jsx)("span",{children:"Send Message"})]})}),"success"===a&&(0,ht.jsxs)(Bv,{$type:"success",as:np.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[(0,ht.jsx)(Np,{icon:vp,size:18}),(0,ht.jsx)("span",{children:"Message sent successfully! I'll get back to you soon."})]}),"error"===a&&(0,ht.jsxs)(Bv,{$type:"error",as:np.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[(0,ht.jsx)(Np,{icon:up,size:18}),(0,ht.jsx)("span",{children:"Something went wrong. Please try again."})]})]})]})]})})]})},Wv=()=>(0,ht.jsxs)(mt,{children:[(0,ht.jsx)(ci,{}),(0,ht.jsxs)(it,{children:[(0,ht.jsx)(lh,{}),(0,ht.jsx)(bh,{}),(0,ht.jsx)("main",{children:(0,ht.jsxs)(Se,{children:[(0,ht.jsx)(we,{path:"/",element:(0,ht.jsx)(_f,{})}),(0,ht.jsx)(we,{path:"/about",element:(0,ht.jsx)(Bm,{})}),(0,ht.jsx)(we,{path:"/projects",element:(0,ht.jsx)(jg,{})}),(0,ht.jsx)(we,{path:"/skills",element:(0,ht.jsx)(Gg,{})}),(0,ht.jsx)(we,{path:"/contact",element:(0,ht.jsx)(Uv,{})})]})}),(0,ht.jsx)(yh,{})]})]}),Hv=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};(()=>{let e=document.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover")})();t.createRoot(document.getElementById("root")).render((0,ht.jsxs)(e.StrictMode,{children:[(0,ht.jsx)(Wv,{}),(0,ht.jsx)(c,{})]})),Hv()})()})();
//# sourceMappingURL=main.dc836f2b.js.map