/*! For license information please see main.3752f286.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),i=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var p=Object.assign,h=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),P=Symbol.for("react.lazy");Symbol.for("react.scope");var T=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var j=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var R=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=R&&e[R]||e["@@iterator"])?e:null}var L=Symbol.for("react.client.reference");function z(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===L?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case v:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case T:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case b:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:z(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return z(e(t))}catch(n){}}return null}var M=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},N=[],F=-1;function I(e){return{current:e}}function $(e){0>F||(e.current=N[F],N[F]=null,F--)}function V(e,t){F++,N[F]=e.current,e.current=t}var B=I(null),W=I(null),U=I(null),H=I(null);function Y(e,t){switch(V(U,t),V(W,e),V(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=ad(t=id(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(B),V(B,e)}function K(){$(B),$(W),$(U)}function q(e){null!==e.memoizedState&&V(H,e);var t=B.current,n=ad(t,e.type);t!==n&&(V(W,e),V(B,n))}function G(e){W.current===e&&($(B),$(W)),H.current===e&&($(H),qd._currentValue=O)}var Q=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,oe=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function pe(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var he=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(fe(e)/me|0)|0},fe=Math.log,me=Math.LN2;var ge=256,ve=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=ye(r):0!==(o&=s)?i=ye(o):n||0!==(n=s&~e)&&(i=ye(n)):0!==(s=r&~a)?i=ye(s):0!==o?i=ye(o):n||0!==(n=r&~e)&&(i=ye(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function be(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-he(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Te(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-he(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function je(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Re(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=_.p;return 0!==e?e:void 0===(e=window.event)?32:cp(e.type)}var Le=Math.random().toString(36).slice(2),ze="__reactFiber$"+Le,Me="__reactProps$"+Le,De="__reactContainer$"+Le,_e="__reactEvents$"+Le,Oe="__reactListeners$"+Le,Ne="__reactHandles$"+Le,Fe="__reactResources$"+Le,Ie="__reactMarker$"+Le;function $e(e){delete e[ze],delete e[Me],delete e[_e],delete e[Oe],delete e[Ne]}function Ve(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[De]||n[ze]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=xd(e);null!==e;){if(n=e[ze])return n;e=xd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[ze]||e[De]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function We(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Ue(e){var t=e[Fe];return t||(t=e[Fe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Ie]=!0}var Ye=new Set,Ke={};function qe(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(Ke[e]=t,e=0;e<t.length;e++)Ye.add(t[e])}var Qe,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(i=t,Q.call(et,i)||!Q.call(Ze,i)&&(Je.test(i)?et[i]=!0:(Ze[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Qe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+Xe}var at=!1;function ot(e,t){if(!e||at)return"";at=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{at=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ft=/[\n"\\]/g;function mt(e){return e.replace(ft,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?yt(e,o,ct(t)):null!=n?yt(e,o,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function vt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function yt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function bt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(M(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Et(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Et(e,a,t[a])}function Pt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rt(e){return jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Lt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var zt=null,Mt=null;function Dt(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[Me]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Me]||null;if(!i)throw Error(o(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":bt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&xt(e,!!n.multiple,t,!1)}}}var _t=!1;function Ot(e,t,n){if(_t)return e(t,n);_t=!0;try{return e(t)}finally{if(_t=!1,(null!==zt||null!==Mt)&&(Vc(),zt&&(t=zt,e=Mt,Mt=zt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function Nt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Me]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ft=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),It=!1;if(Ft)try{var $t={};Object.defineProperty($t,"passive",{get:function(){It=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(Mp){It=!1}var Vt=null,Bt=null,Wt=null;function Ut(){if(Wt)return Wt;var e,t,n=Bt,r=n.length,i="value"in Vt?Vt.value:Vt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Wt=i.slice(e,1<t?1-t:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function Kt(){return!1}function qt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Yt:Kt,this.isPropagationStopped=Kt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Gt,Qt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=qt(Jt),en=p({},Jt,{view:0,detail:0}),tn=qt(en),nn=p({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Gt=e.screenX-Xt.screenX,Qt=e.screenY-Xt.screenY):Qt=Gt=0,Xt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),rn=qt(nn),an=qt(p({},nn,{dataTransfer:0})),on=qt(p({},en,{relatedTarget:0})),sn=qt(p({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=qt(p({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=qt(p({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function fn(){return hn}var mn=qt(p({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Ht(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fn,charCode:function(e){return"keypress"===e.type?Ht(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ht(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=qt(p({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=qt(p({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fn})),yn=qt(p({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),xn=qt(p({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),bn=qt(p({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=Ft&&"CompositionEvent"in window,kn=null;Ft&&"documentMode"in document&&(kn=document.documentMode);var En=Ft&&"TextEvent"in window&&!kn,Cn=Ft&&(!Sn||kn&&8<kn&&11>=kn),Pn=String.fromCharCode(32),Tn=!1;function jn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1;var Ln={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ln[e.type]:"textarea"===t}function Mn(e,t,n,r){zt?Mt?Mt.push(r):Mt=[r]:zt=r,0<(t=Uu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,_n=null;function On(e){Ou(e,0)}function Nn(e){if(pt(We(e)))return e}function Fn(e,t){if("change"===e)return t}var In=!1;if(Ft){var $n;if(Ft){var Vn="oninput"in document;if(!Vn){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Vn="function"===typeof Bn.oninput}$n=Vn}else $n=!1;In=$n&&(!document.documentMode||9<document.documentMode)}function Wn(){Dn&&(Dn.detachEvent("onpropertychange",Un),_n=Dn=null)}function Un(e){if("value"===e.propertyName&&Nn(_n)){var t=[];Mn(t,_n,e,Lt(e)),Ot(On,t)}}function Hn(e,t,n){"focusin"===e?(Wn(),_n=n,(Dn=t).attachEvent("onpropertychange",Un)):"focusout"===e&&Wn()}function Yn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Nn(_n)}function Kn(e,t){if("click"===e)return Nn(t)}function qn(e,t){if("input"===e||"change"===e)return Nn(t)}var Gn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Gn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Q.call(t,i)||!Gn(e[i],t[i]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Ft&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,ar=null,or=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==ht(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ar&&Qn(ar,r)||(ar=r,0<(r=Uu(ir,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Ft&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var hr=pr("animationend"),fr=pr("animationiteration"),mr=pr("animationstart"),gr=pr("transitionrun"),vr=pr("transitionstart"),yr=pr("transitioncancel"),xr=pr("transitionend"),br=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){br.set(e,t),qe(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},kr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Cr=[],Pr=0,Tr=0;function jr(){for(var e=Pr,t=Tr=Pr=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var i=Cr[t];Cr[t++]=null;var a=Cr[t];if(Cr[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&zr(n,i,a)}}function Rr(e,t,n,r){Cr[Pr++]=e,Cr[Pr++]=t,Cr[Pr++]=n,Cr[Pr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return Rr(e,t,n,r),Mr(e)}function Lr(e,t){return Rr(e,null,null,t),Mr(e)}function zr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-he(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function Mr(e){if(50<zc)throw zc=0,Mc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Dr={};function _r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Or(e,t,n,r){return new _r(e,t,n,r)}function Nr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return null===n?((n=Or(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ir(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $r(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)Nr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case T:return(e=Or(31,n,t,i)).elementType=T,e.lanes=a,e;case g:return Vr(n.children,i,a,t);case v:s=8,i|=24;break;case y:return(e=Or(12,n,t,2|i)).elementType=y,e.lanes=a,e;case k:return(e=Or(13,n,t,i)).elementType=k,e.lanes=a,e;case E:return(e=Or(19,n,t,i)).elementType=E,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case x:case w:s=10;break e;case b:s=9;break e;case S:s=11;break e;case C:s=14;break e;case P:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Or(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Vr(e,t,n,r){return(e=Or(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=Or(6,e,null,t)).lanes=n,e}function Wr(e,t,n){return(t=Or(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ur=[],Hr=0,Yr=null,Kr=0,qr=[],Gr=0,Qr=null,Xr=1,Jr="";function Zr(e,t){Ur[Hr++]=Kr,Ur[Hr++]=Yr,Yr=e,Kr=t}function ei(e,t,n){qr[Gr++]=Xr,qr[Gr++]=Jr,qr[Gr++]=Qr,Qr=e;var r=Xr;e=Jr;var i=32-he(r)-1;r&=~(1<<i),n+=1;var a=32-he(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xr=1<<32-he(t)+i|n<<i|r,Jr=a+e}else Xr=1<<a|n<<i|r,Jr=e}function ti(e){null!==e.return&&(Zr(e,1),ei(e,1,0))}function ni(e){for(;e===Yr;)Yr=Ur[--Hr],Ur[Hr]=null,Kr=Ur[--Hr],Ur[Hr]=null;for(;e===Qr;)Qr=qr[--Gr],qr[Gr]=null,Jr=qr[--Gr],qr[Gr]=null,Xr=qr[--Gr],qr[Gr]=null}var ri=null,ii=null,ai=!1,oi=null,si=!1,li=Error(o(519));function ci(e){throw mi(Er(Error(o(418,"")),e)),li}function ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ze]=e,t[Me]=r,n){case"dialog":Nu("cancel",t),Nu("close",t);break;case"iframe":case"object":case"embed":Nu("load",t);break;case"video":case"audio":for(n=0;n<Du.length;n++)Nu(Du[n],t);break;case"source":Nu("error",t);break;case"img":case"image":case"link":Nu("error",t),Nu("load",t);break;case"details":Nu("toggle",t);break;case"input":Nu("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Nu("invalid",t);break;case"textarea":Nu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Qu(t.textContent,n)?(null!=r.popover&&(Nu("beforetoggle",t),Nu("toggle",t)),null!=r.onScroll&&Nu("scroll",t),null!=r.onScrollEnd&&Nu("scrollend",t),null!=r.onClick&&(t.onclick=Xu),t=!0):t=!1,t||ci(e)}function di(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function pi(e){if(e!==ri)return!1;if(!ai)return di(e),ai=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),di(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,hd(e.type)?(e=yd,yd=null,ii=e):ii=n):ii=ri?vd(e.stateNode.nextSibling):null;return!0}function hi(){ii=ri=null,ai=!1}function fi(){var e=oi;return null!==e&&(null===xc?xc=e:xc.push.apply(xc,e),oi=null),e}function mi(e){null===oi?oi=[e]:oi.push(e)}var gi=I(null),vi=null,yi=null;function xi(e,t,n){V(gi,t._currentValue),t._currentValue=n}function bi(e){e._currentValue=gi.current,$(gi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Si(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),wi(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function ki(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Gn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===H.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(qd):e=[qd])}i=i.return}null!==e&&Si(t,e,n,r),t.flags|=262144}function Ei(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ci(e){vi=e,yi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Pi(e){return ji(vi,e)}function Ti(e,t){return null===vi&&Ci(e),ji(e,t)}function ji(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===yi){if(null===e)throw Error(o(308));yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yi=yi.next=t;return n}var Ri="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Ai=r.unstable_scheduleCallback,Li=r.unstable_NormalPriority,zi={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mi(){return{controller:new Ri,data:new Map,refCount:0}}function Di(e){e.refCount--,0===e.refCount&&Ai(Li,(function(){e.controller.abort()}))}var _i=null,Oi=0,Ni=0,Fi=null;function Ii(){if(0===--Oi&&null!==_i){null!==Fi&&(Fi.status="fulfilled");var e=_i;_i=null,Ni=0,Fi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var $i=D.S;D.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===_i){var n=_i=[];Oi=0,Ni=Ru(),Fi={status:"pending",value:void 0,then:function(e){n.push(e)}}}Oi++,t.then(Ii,Ii)}(0,t),null!==$i&&$i(e,t)};var Vi=I(null);function Bi(){var e=Vi.current;return null!==e?e:rc.pooledCache}function Wi(e,t){V(Vi,null===t?Vi.current:t.pool)}function Ui(){var e=Bi();return null===e?null:{parent:zi._currentValue,pool:e}}var Hi=Error(o(460)),Yi=Error(o(474)),Ki=Error(o(542)),qi={then:function(){}};function Gi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qi(){}function Xi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Qi,Qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qi,Qi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e}throw Ji=t,Hi}}var Ji=null;function Zi(){if(null===Ji)throw Error(o(459));var e=Ji;return Ji=null,e}function ea(e){if(e===Hi||e===Ki)throw Error(o(483))}var ta=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Mr(e),zr(e,null,n),t}return Rr(e,r,t,n),Mr(e)}function oa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var la=!1;function ca(){if(la){if(null!==Fi)throw Fi}}function ua(e,t,n,r){la=!1;var i=e.updateQueue;ta=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var h=-536870913&s.lane,f=h!==s.lane;if(f?(ac&h)===h:(r&h)===h){0!==h&&h===Ni&&(la=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;h=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,h);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(h="function"===typeof(m=g.payload)?m.call(v,d,h):m)||void 0===h)break e;d=p({},d,h);break e;case 2:ta=!0}}null!==(h=s.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=i.callbacks)?i.callbacks=[h]:f.push(h))}else f={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=h;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===a&&(i.shared.lanes=0),hc|=o,e.lanes=o,e.memoizedState=d}}function da(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function pa(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)da(n[e],t)}var ha=I(null),fa=I(0);function ma(e,t){V(fa,e=dc),V(ha,t),dc=e|t.baseLanes}function ga(){V(fa,dc),V(ha,ha.current)}function va(){dc=fa.current,$(ha),$(fa)}var ya=0,xa=null,ba=null,wa=null,Sa=!1,ka=!1,Ea=!1,Ca=0,Pa=0,Ta=null,ja=0;function Ra(){throw Error(o(321))}function Aa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function La(e,t,n,r,i,a){return ya=a,xa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=null===e||null===e.memoizedState?Yo:Ko,Ea=!1,a=n(r,i),Ea=!1,ka&&(a=Ma(t,n,r,i)),za(e),a}function za(e){D.H=Ho;var t=null!==ba&&null!==ba.next;if(ya=0,wa=ba=xa=null,Sa=!1,Pa=0,Ta=null,t)throw Error(o(300));null===e||Ts||null!==(e=e.dependencies)&&Ei(e)&&(Ts=!0)}function Ma(e,t,n,r){xa=e;var i=0;do{if(ka&&(Ta=null),Pa=0,ka=!1,25<=i)throw Error(o(301));if(i+=1,wa=ba=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}D.H=qo,a=t(n,r)}while(ka);return a}function Da(){var e=D.H,t=e.useState()[0];return t="function"===typeof t.then?$a(t):t,e=e.useState()[0],(null!==ba?ba.memoizedState:null)!==e&&(xa.flags|=1024),t}function _a(){var e=0!==Ca;return Ca=0,e}function Oa(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Na(e){if(Sa){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Sa=!1}ya=0,wa=ba=xa=null,ka=!1,Pa=Ca=0,Ta=null}function Fa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wa?xa.memoizedState=wa=e:wa=wa.next=e,wa}function Ia(){if(null===ba){var e=xa.alternate;e=null!==e?e.memoizedState:null}else e=ba.next;var t=null===wa?xa.memoizedState:wa.next;if(null!==t)wa=t,ba=e;else{if(null===e){if(null===xa.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(ba=e).memoizedState,baseState:ba.baseState,baseQueue:ba.baseQueue,queue:ba.queue,next:null},null===wa?xa.memoizedState=wa=e:wa=wa.next=e}return wa}function $a(e){var t=Pa;return Pa+=1,null===Ta&&(Ta=[]),e=Xi(Ta,e,t),t=xa,null===(null===wa?t.memoizedState:wa.next)&&(t=t.alternate,D.H=null===t||null===t.memoizedState?Yo:Ko),e}function Va(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return $a(e);if(e.$$typeof===w)return Pi(e)}throw Error(o(438,String(e)))}function Ba(e){var t=null,n=xa.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xa.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xa.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=j;return t.index++,n}function Wa(e,t){return"function"===typeof t?t(e):t}function Ua(e){return Ha(Ia(),ba,e)}function Ha(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(ac&p)===p:(ya&p)===p){var h=u.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Ni&&(d=!0);else{if((ya&h)===h){u=u.next,h===Ni&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,xa.lanes|=h,hc|=h}p=u.action,Ea&&n(a,p),a=u.hasEagerState?u.eagerState:n(a,p)}else h={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=a):c=c.next=h,xa.lanes|=p,hc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Gn(a,e.memoizedState)&&(Ts=!0,d&&null!==(n=Fi)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ya(e){var t=Ia(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Gn(a,t.memoizedState)||(Ts=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ka(e,t,n){var r=xa,i=Ia(),a=ai;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Gn((ba||i).memoizedState,n);if(s&&(i.memoizedState=n,Ts=!0),i=i.queue,vo(2048,8,Qa.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==wa&&1&wa.memoizedState.tag){if(r.flags|=2048,fo(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,i,n,t),null),null===rc)throw Error(o(349));a||0!==(124&ya)||qa(r,t,n)}return n}function qa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xa.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ga(e,t,n,r){t.value=n,t.getSnapshot=r,Xa(t)&&Ja(e)}function Qa(e,t,n){return n((function(){Xa(t)&&Ja(e)}))}function Xa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(r){return!0}}function Ja(e){var t=Lr(e,2);null!==t&&Oc(t,e,2)}function Za(e){var t=Fa();if("function"===typeof e){var n=e;if(e=n(),Ea){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,Ha(e,ba,"function"===typeof r?r:Wa)}function to(e,t,n,r,i){if(Bo(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==D.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,no(t,a)):(a.next=n.next,t.pending=n.next=a)}}function no(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),l=D.S;null!==l&&l(o,s),ro(e,t,s)}catch(c){ao(e,t,c)}finally{D.T=a}}else try{ro(e,t,a=n(i,r))}catch(u){ao(e,t,u)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){io(e,t,n)}),(function(n){return ao(e,t,n)})):io(e,t,n)}function io(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function ao(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function lo(e,t){if(ai){var n=rc.formState;if(null!==n){e:{var r=xa;if(ai){if(ii){t:{for(var i=ii,a=si;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=vd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ii=vd(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Fa()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=r,n=Io.bind(null,xa,r),r.dispatch=n,r=Za(!1),a=Vo.bind(null,xa,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Fa()).queue=i,n=to.bind(null,xa,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function co(e){return uo(Ia(),ba,e)}function uo(e,t,n){if(t=Ha(e,t,so)[0],e=Ua(Wa)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=$a(t)}catch(o){if(o===Hi)throw Ki;throw o}else r=t;var i=(t=Ia()).queue,a=i.dispatch;return n!==t.memoizedState&&(xa.flags|=2048,fo(9,{destroy:void 0,resource:void 0},po.bind(null,i,n),null)),[r,a,e]}function po(e,t){e.action=t}function ho(e){var t=Ia(),n=ba;if(null!==n)return uo(t,n,e);Ia(),t=t.memoizedState;var r=(n=Ia()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function fo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xa.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xa.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function mo(){return Ia().memoizedState}function go(e,t,n,r){var i=Fa();r=void 0===r?null:r,xa.flags|=e,i.memoizedState=fo(1|t,{destroy:void 0,resource:void 0},n,r)}function vo(e,t,n,r){var i=Ia();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==ba&&null!==r&&Aa(r,ba.memoizedState.deps)?i.memoizedState=fo(t,a,n,r):(xa.flags|=e,i.memoizedState=fo(1|t,a,n,r))}function yo(e,t){go(8390656,8,e,t)}function xo(e,t){vo(2048,8,e,t)}function bo(e,t){return vo(4,2,e,t)}function wo(e,t){return vo(4,4,e,t)}function So(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ko(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vo(4,4,So.bind(null,t,e),n)}function Eo(){}function Co(e,t){var n=Ia();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Po(e,t){var n=Ia();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Aa(t,r[1]))return r[0];if(r=e(),Ea){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function To(e,t,n){return void 0===n||0!==(1073741824&ya)?e.memoizedState=t:(e.memoizedState=n,e=_c(),xa.lanes|=e,hc|=e,n)}function jo(e,t,n,r){return Gn(n,t)?n:null!==ha.current?(e=To(e,n,r),Gn(e,t)||(Ts=!0),e):0===(42&ya)?(Ts=!0,e.memoizedState=n):(e=_c(),xa.lanes|=e,hc|=e,t)}function Ro(e,t,n,r,i){var a=_.p;_.p=0!==a&&8>a?a:8;var o=D.T,s={};D.T=s,Vo(e,!1,t,n);try{var l=i(),c=D.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)$o(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),Dc());else $o(e,t,r,Dc())}catch(u){$o(e,t,{then:function(){},status:"rejected",reason:u},Dc())}finally{_.p=a,D.T=o}}function Ao(){}function Lo(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=zo(e).queue;Ro(e,i,t,O,null===n?Ao:function(){return Mo(e),n(r)})}function zo(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Mo(e){$o(e,zo(e).next.queue,{},Dc())}function Do(){return Pi(qd)}function _o(){return Ia().memoizedState}function Oo(){return Ia().memoizedState}function No(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Dc(),r=aa(t,e=ia(n),n);return null!==r&&(Oc(r,t,n),oa(r,t,n)),t={cache:Mi()},void(e.payload=t)}t=t.return}}function Fo(e,t,n){var r=Dc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bo(e)?Wo(t,n):null!==(n=Ar(e,t,n,r))&&(Oc(n,e,r),Uo(n,t,r))}function Io(e,t,n){$o(e,t,n,Dc())}function $o(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bo(e))Wo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gn(s,o))return Rr(e,t,i,0),null===rc&&jr(),!1}catch(l){}if(null!==(n=Ar(e,t,i,r)))return Oc(n,e,r),Uo(n,t,r),!0}return!1}function Vo(e,t,n,r){if(r={lane:2,revertLane:Ru(),action:r,hasEagerState:!1,eagerState:null,next:null},Bo(e)){if(t)throw Error(o(479))}else null!==(t=Ar(e,n,r,2))&&Oc(t,e,2)}function Bo(e){var t=e.alternate;return e===xa||null!==t&&t===xa}function Wo(e,t){ka=Sa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}var Ho={readContext:Pi,use:Va,useCallback:Ra,useContext:Ra,useEffect:Ra,useImperativeHandle:Ra,useLayoutEffect:Ra,useInsertionEffect:Ra,useMemo:Ra,useReducer:Ra,useRef:Ra,useState:Ra,useDebugValue:Ra,useDeferredValue:Ra,useTransition:Ra,useSyncExternalStore:Ra,useId:Ra,useHostTransitionStatus:Ra,useFormState:Ra,useActionState:Ra,useOptimistic:Ra,useMemoCache:Ra,useCacheRefresh:Ra},Yo={readContext:Pi,use:Va,useCallback:function(e,t){return Fa().memoizedState=[e,void 0===t?null:t],e},useContext:Pi,useEffect:yo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,So.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Fa();t=void 0===t?null:t;var r=e();if(Ea){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fa();if(void 0!==n){var i=n(t);if(Ea){pe(!0);try{n(t)}finally{pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fo.bind(null,xa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Fa().memoizedState=e},useState:function(e){var t=(e=Za(e)).queue,n=Io.bind(null,xa,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eo,useDeferredValue:function(e,t){return To(Fa(),e,t)},useTransition:function(){var e=Za(!1);return e=Ro.bind(null,xa,e.queue,!0,!1),Fa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xa,i=Fa();if(ai){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===rc)throw Error(o(349));0!==(124&ac)||qa(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yo(Qa.bind(null,r,a,e),[e]),r.flags|=2048,fo(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,a,n,t),null),n},useId:function(){var e=Fa(),t=rc.identifierPrefix;if(ai){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-he(Xr)-1)).toString(32)+n),0<(n=Ca++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=ja++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Do,useFormState:lo,useActionState:lo,useOptimistic:function(e){var t=Fa();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vo.bind(null,xa,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ba,useCacheRefresh:function(){return Fa().memoizedState=No.bind(null,xa)}},Ko={readContext:Pi,use:Va,useCallback:Co,useContext:Pi,useEffect:xo,useImperativeHandle:ko,useInsertionEffect:bo,useLayoutEffect:wo,useMemo:Po,useReducer:Ua,useRef:mo,useState:function(){return Ua(Wa)},useDebugValue:Eo,useDeferredValue:function(e,t){return jo(Ia(),ba.memoizedState,e,t)},useTransition:function(){var e=Ua(Wa)[0],t=Ia().memoizedState;return["boolean"===typeof e?e:$a(e),t]},useSyncExternalStore:Ka,useId:_o,useHostTransitionStatus:Do,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Ia(),0,e,t)},useMemoCache:Ba,useCacheRefresh:Oo},qo={readContext:Pi,use:Va,useCallback:Co,useContext:Pi,useEffect:xo,useImperativeHandle:ko,useInsertionEffect:bo,useLayoutEffect:wo,useMemo:Po,useReducer:Ya,useRef:mo,useState:function(){return Ya(Wa)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=Ia();return null===ba?To(n,e,t):jo(n,ba.memoizedState,e,t)},useTransition:function(){var e=Ya(Wa)[0],t=Ia().memoizedState;return["boolean"===typeof e?e:$a(e),t]},useSyncExternalStore:Ka,useId:_o,useHostTransitionStatus:Do,useFormState:ho,useActionState:ho,useOptimistic:function(e,t){var n=Ia();return null!==ba?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ba,useCacheRefresh:Oo},Go=null,Qo=0;function Xo(e){var t=Qo;return Qo+=1,null===Go&&(Go=[]),Xi(Go,e,t)}function Jo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zo(e,t){if(t.$$typeof===h)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Fr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===P&&es(a)===t.type)?(Jo(t=i(t,n.props),n),t.return=e,t):(Jo(t=$r(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wr(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Vr(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case f:return Jo(n=$r(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Wr(t,e.mode,n)).return=e,t;case P:return p(e,t=(0,t._init)(t._payload),n)}if(M(t)||A(t))return(t=Vr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,Xo(t),n);if(t.$$typeof===w)return p(e,Ti(e,t),n);Zo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case f:return n.key===i?c(e,t,n,r):null;case m:return n.key===i?u(e,t,n,r):null;case P:return h(e,t,n=(i=n._init)(n._payload),r)}if(M(n)||A(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,Xo(n),r);if(n.$$typeof===w)return h(e,t,Ti(e,n),r);Zo(e,n)}return null}function v(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case f:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case P:return v(e,t,n,r=(0,r._init)(r._payload),i)}if(M(r)||A(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return v(e,t,n,Xo(r),i);if(r.$$typeof===w)return v(e,t,n,Ti(t,r),i);Zo(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case f:e:{for(var x=u.key;null!==c;){if(c.key===x){if((x=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===P&&es(x)===c.type){n(l,c.sibling),Jo(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Vr(u.props.children,l.mode,d,u.key)).return=l,l=d):(Jo(d=$r(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case m:e:{for(x=u.key;null!==c;){if(c.key===x){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Wr(u,l.mode,d)).return=l,l=d}return s(l);case P:return y(l,c,u=(x=u._init)(u._payload),d)}if(M(u))return function(i,o,s,l){for(var c=null,u=null,d=o,f=o=0,m=null;null!==d&&f<s.length;f++){d.index>f?(m=d,d=null):m=d.sibling;var g=h(i,d,s[f],l);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(i,d),o=a(g,o,f),null===u?c=g:u.sibling=g,u=g,d=m}if(f===s.length)return n(i,d),ai&&Zr(i,f),c;if(null===d){for(;f<s.length;f++)null!==(d=p(i,s[f],l))&&(o=a(d,o,f),null===u?c=d:u.sibling=d,u=d);return ai&&Zr(i,f),c}for(d=r(d);f<s.length;f++)null!==(m=v(d,i,f,s[f],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?f:m.key),o=a(m,o,f),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(i,e)})),ai&&Zr(i,f),c}(l,c,u,d);if(A(u)){if("function"!==typeof(x=A(u)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,f=s,m=s=0,g=null,y=l.next();null!==f&&!y.done;m++,y=l.next()){f.index>m?(g=f,f=null):g=f.sibling;var x=h(i,f,y.value,c);if(null===x){null===f&&(f=g);break}e&&f&&null===x.alternate&&t(i,f),s=a(x,s,m),null===d?u=x:d.sibling=x,d=x,f=g}if(y.done)return n(i,f),ai&&Zr(i,m),u;if(null===f){for(;!y.done;m++,y=l.next())null!==(y=p(i,y.value,c))&&(s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return ai&&Zr(i,m),u}for(f=r(f);!y.done;m++,y=l.next())null!==(y=v(f,i,m,y.value,c))&&(e&&null!==y.alternate&&f.delete(null===y.key?m:y.key),s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return e&&f.forEach((function(e){return t(i,e)})),ai&&Zr(i,m),u}(l,c,u=x.call(u),d)}if("function"===typeof u.then)return y(l,c,Xo(u),d);if(u.$$typeof===w)return y(l,c,Ti(l,u),d);Zo(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=Br(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Qo=0;var i=y(e,t,n,r);return Go=null,i}catch(o){if(o===Hi||o===Ki)throw o;var a=Or(29,o,null,e.mode);return a.lanes=r,a.return=e,a}}}var ns=ts(!0),rs=ts(!1),is=I(null),as=null;function os(e){var t=e.alternate;V(us,1&us.current),V(is,e),null===as&&(null===t||null!==ha.current||null!==t.memoizedState)&&(as=e)}function ss(e){if(22===e.tag){if(V(us,us.current),V(is,e),null===as){var t=e.alternate;null!==t&&null!==t.memoizedState&&(as=e)}}else ls()}function ls(){V(us,us.current),V(is,is.current)}function cs(e){$(is),as===e&&(as=null),$(us)}var us=I(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dc(),i=ia(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dc(),i=ia(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dc(),r=ia(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=aa(e,r,n))&&(Oc(t,e,n),oa(t,e,n))}};function fs(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(i,a))}function ms(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var vs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function ys(e){vs(e)}function xs(e){console.error(e)}function bs(e){vs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Ss(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function ks(e,t,n){return(n=ia(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Es(e){return(e=ia(e)).tag=3,e}function Cs(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ss(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Ss(t,n,r),"function"!==typeof i&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ps=Error(o(461)),Ts=!1;function js(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function Rs(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ci(t),r=La(e,t,n,o,a,i),s=_a(),null===e||Ts?(ai&&s&&ti(t),t.flags|=1,js(e,t,r,i),t.child):(Oa(e,t,i),Gs(e,t,i))}function As(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Nr(a)||void 0!==a.defaultProps||null!==n.compare?((e=$r(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ls(e,t,a,r,i))}if(a=e.child,!Qs(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(o,r)&&e.ref===t.ref)return Gs(e,t,i)}return t.flags|=1,(e=Fr(a,r)).ref=t.ref,e.return=t,t.child=e}function Ls(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Qn(a,r)&&e.ref===t.ref){if(Ts=!1,t.pendingProps=r=a,!Qs(e,i))return t.lanes=e.lanes,Gs(e,t,i);0!==(131072&e.flags)&&(Ts=!0)}}return _s(e,t,n,r,i)}function zs(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==a?a.baseLanes|n:n,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return Ms(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ms(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Wi(0,null!==a?a.cachePool:null),null!==a?ma(t,a):ga(),ss(t)}else null!==a?(Wi(0,a.cachePool),ma(t,a),ls(),t.memoizedState=null):(null!==e&&Wi(0,null),ga(),ls());return js(e,t,i,n),t.child}function Ms(e,t,n,r){var i=Bi();return i=null===i?null:{parent:zi._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Wi(0,null),ga(),ss(t),null!==e&&ki(e,t,r,!0),null}function Ds(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function _s(e,t,n,r,i){return Ci(t),n=La(e,t,n,r,void 0,i),r=_a(),null===e||Ts?(ai&&r&&ti(t),t.flags|=1,js(e,t,n,i),t.child):(Oa(e,t,i),Gs(e,t,i))}function Os(e,t,n,r,i,a){return Ci(t),t.updateQueue=null,n=Ma(t,r,n,i),za(e),r=_a(),null===e||Ts?(ai&&r&&ti(t),t.flags|=1,js(e,t,n,a),t.child):(Oa(e,t,a),Gs(e,t,a))}function Ns(e,t,n,r,i){if(Ci(t),null===t.stateNode){var a=Dr,o=n.contextType;"object"===typeof o&&null!==o&&(a=Pi(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=hs,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},na(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Pi(o):Dr,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(ps(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&hs.enqueueReplaceState(a,a.state,null),ua(t,r,a,i),ca(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=gs(n,s);a.props=l;var c=a.context,u=n.contextType;o=Dr,"object"===typeof u&&null!==u&&(o=Pi(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&ms(t,a,r,o),ta=!1;var p=t.memoizedState;a.state=p,ua(t,r,a,i),ca(),c=t.memoizedState,s||p!==c||ta?("function"===typeof d&&(ps(t,n,d,r),c=t.memoizedState),(l=ta||fs(t,n,l,r,p,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ra(e,t),u=gs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,p=a.context,c=n.contextType,l=Dr,"object"===typeof c&&null!==c&&(l=Pi(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||p!==l)&&ms(t,a,r,l),ta=!1,p=t.memoizedState,a.state=p,ua(t,r,a,i),ca();var h=t.memoizedState;o!==d||p!==h||ta||null!==e&&null!==e.dependencies&&Ei(e.dependencies)?("function"===typeof s&&(ps(t,n,s,r),h=t.memoizedState),(u=ta||fs(t,n,u,r,p,h,l)||null!==e&&null!==e.dependencies&&Ei(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ds(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):js(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Gs(e,t,i),e}function Fs(e,t,n,r){return hi(),t.flags|=256,js(e,t,n,r),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $s(e){return{baseLanes:e,cachePool:Ui()}}function Vs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Bs(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ai){if(a?os(t):ls(),ai){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=vd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=Or(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,a?(ls(),c=Us({mode:"hidden",children:c},a=t.mode),i=Vr(i,a,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(a=t.child).memoizedState=$s(n),a.childLanes=Vs(e,r,n),t.memoizedState=Is,i):(os(t),Ws(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(os(t),t.flags&=-257,t=Hs(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),a=i.fallback,c=t.mode,i=Us({mode:"visible",children:i.children},c),(a=Vr(a,c,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=$s(n),i.childLanes=Vs(e,r,n),t.memoizedState=Is,t=a);else if(os(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(o(419))).stack="",i.digest=r,mi({value:i,source:null,stack:null}),t=Hs(e,t,n)}else if(Ts||ki(e,t,n,!1),r=0!==(n&e.childLanes),Ts||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:je(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Lr(e,i),Oc(r,e,i),Ps;"$?"===c.data||Kc(),t=Hs(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=vd(c.nextSibling),ri=t,ai=!0,oi=null,si=!1,null!==e&&(qr[Gr++]=Xr,qr[Gr++]=Jr,qr[Gr++]=Qr,Xr=e.id,Jr=e.overflow,Qr=t),(t=Ws(t,i.children)).flags|=4096);return t}return a?(ls(),a=i.fallback,c=t.mode,u=(l=e.child).sibling,(i=Fr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?a=Fr(u,a):(a=Vr(a,c,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(c=e.child.memoizedState)?c=$s(n):(null!==(l=c.cachePool)?(u=zi._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Ui(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Vs(e,r,n),t.memoizedState=Is,i):(os(t),e=(n=e.child).sibling,(n=Fr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ws(e,t){return(t=Us({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Us(e,t){return(e=Or(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hs(e,t,n){return ns(t,e.child,null,n),(e=Ws(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function Ks(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(js(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ys(e,n,t);else if(19===e.tag)Ys(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(V(us,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ks(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ds(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ks(t,!0,n,null,a);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),hc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ki(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Fr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Qs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ei(e))}function Xs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ts=!0;else{if(!Qs(e,n)&&0===(128&t.flags))return Ts=!1,function(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),xi(0,zi,e.memoizedState.cache),hi();break;case 27:case 5:q(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:xi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(os(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bs(e,t,n):(os(t),null!==(e=Gs(e,t,n))?e.sibling:null);os(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ki(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return qs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,zs(e,t,n);case 24:xi(0,zi,e.memoizedState.cache)}return Gs(e,t,n)}(e,t,n);Ts=0!==(131072&e.flags)}else Ts=!1,ai&&0!==(1048576&t.flags)&&ei(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===S){t.tag=11,t=Rs(null,t,r,e,n);break e}if(i===C){t.tag=14,t=As(null,t,r,e,n);break e}}throw t=z(r)||r,Error(o(306,t,""))}Nr(r)?(e=gs(r,e),t.tag=1,t=Ns(null,t,r,e,n)):(t.tag=0,t=_s(null,t,r,e,n))}return t;case 0:return _s(e,t,t.type,t.pendingProps,n);case 1:return Ns(e,t,r=t.type,i=gs(r,t.pendingProps),n);case 3:e:{if(Y(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ra(e,t),ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,xi(0,zi,r),r!==a.cache&&Si(t,[zi],n,!0),ca(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Fs(e,t,r,n);break e}if(r!==i){mi(i=Er(Error(o(424)),t)),t=Fs(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=vd(e.firstChild),ri=t,ai=!0,oi=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===i){t=Gs(e,t,n);break e}js(e,t,r,n)}t=t.child}return t;case 26:return Ds(e,t),null===e?(n=jd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ai||(n=t.type,e=t.pendingProps,(r=rd(U.current).createElement(n))[ze]=t,r[Me]=e,ed(r,n,e),He(r),t.stateNode=r):t.memoizedState=jd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return q(t),null===e&&ai&&(r=t.stateNode=bd(t.type,t.pendingProps,U.current),ri=t,si=!0,i=ii,hd(t.type)?(yd=i,ii=vd(r.firstChild)):ii=i),js(e,t,t.pendingProps.children,n),Ds(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ai&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ie])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=vd(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),q(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,od(i,a)?r=null:null!==s&&od(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=La(e,t,Da,null,null,n),qd._currentValue=i),Ds(e,t),js(e,t,r,n),t.child;case 6:return null===e&&ai&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return Bs(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):js(e,t,r,n),t.child;case 11:return Rs(e,t,t.type,t.pendingProps,n);case 7:return js(e,t,t.pendingProps,n),t.child;case 8:case 12:return js(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,xi(0,t.type,r.value),js(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ci(t),r=r(i=Pi(i)),t.flags|=1,js(e,t,r,n),t.child;case 14:return As(e,t,t.type,t.pendingProps,n);case 15:return Ls(e,t,t.type,t.pendingProps,n);case 19:return qs(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Us(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Fr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return zs(e,t,n);case 24:return Ci(t),r=Pi(zi),null===e?(null===(i=Bi())&&(i=rc,a=Mi(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},na(t),xi(0,zi,i)):(0!==(e.lanes&n)&&(ra(e,t),ua(t,null,null,n),ca()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),xi(0,zi,r)):(r=a.cache,xi(0,zi,r),r!==i.cache&&Si(t,[zi],n,!0))),js(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Vd(t)){if(null!==(t=is.current)&&((4194048&ac)===ac?null!==as:(62914560&ac)!==ac&&0===(536870912&ac)||t!==as))throw Ji=qi,Yi;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,vc|=t)}function tl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),bi(zi),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pi(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,fi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:G(t),n=U.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}e=B.current,pi(t)?ui(t):(e=bd(i,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}if(e=B.current,pi(t))ui(t);else{switch(i=rd(U.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[ze]=t,e[Me]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=U.current,pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[ze]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Qu(e.nodeValue,n)))||ci(t)}else(e=rd(e).createTextNode(r))[ze]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[ze]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=fi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return K(),null===e&&$u(t.stateNode.containerInfo),nl(t),null;case 10:return bi(t.type),nl(t),null;case 19:if($(us),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(a=i.rendering))if(r)tl(i,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=ds(e))){for(t.flags|=128,tl(i,!1),e=a.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ir(n,e),n=n.sibling;return V(us,1&us.current|2),t.child}e=e.sibling}null!==i.tail&&te()>Sc&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!ai)return nl(t),null}else 2*te()-i.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=us.current,V(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),va(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&$(Vi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bi(zi),nl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return bi(zi),K(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return $(us),null;case 4:return K(),null;case 10:return bi(t.type),null;case 22:case 23:return cs(t),va(),null!==e&&$(Vi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return bi(zi),null;default:return null}}function al(e,t){switch(ni(t),t.tag){case 3:bi(zi),K();break;case 26:case 27:case 5:G(t);break;case 4:K();break;case 13:cs(t);break;case 19:$(us);break;case 10:bi(t.type);break;case 22:case 23:cs(t),va(),null!==e&&$(Vi);break;case 24:bi(zi)}}function ol(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){uu(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{pa(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){uu(e,t,i)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){uu(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){uu(e,t,a)}else n.current=null}function pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){uu(e,e.return,i)}}function hl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,u=null,d=null;for(f in n){var p=n[f];if(n.hasOwnProperty(f)&&null!=p)switch(f){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(f)||Ju(e,t,f,null,r,p)}}for(var h in r){var f=r[h];if(p=n[h],r.hasOwnProperty(h)&&(null!=f||null!=p))switch(h){case"type":a=f;break;case"name":i=f;break;case"checked":u=f;break;case"defaultChecked":d=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:f!==p&&Ju(e,t,h,f,r,p)}}return void gt(e,s,l,c,u,d,a,i);case"select":for(a in f=s=l=h=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(a)||Ju(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":h=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&Ju(e,t,i,a,r,c)}return t=l,n=s,r=f,void(null!=h?xt(e,!!n,h,!1):!!r!==!!n&&(null!=t?xt(e,!!n,t,!0):xt(e,!!n,n?[]:"",!1)));case"textarea":for(l in f=h=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Ju(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":h=i;break;case"defaultValue":f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Ju(e,t,s,i,r,a)}return void bt(e,h,f);case"option":for(var m in n)if(h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Ju(e,t,m,null,r,h);for(c in r)if(h=r[c],f=n[c],r.hasOwnProperty(c)&&h!==f&&(null!=h||null!=f))if("selected"===c)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else Ju(e,t,c,h,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&Ju(e,t,g,null,r,h);for(u in r)if(h=r[u],f=n[u],r.hasOwnProperty(u)&&h!==f&&(null!=h||null!=f))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:Ju(e,t,u,h,r,f)}return;default:if(Pt(t)){for(var v in n)h=n[v],n.hasOwnProperty(v)&&void 0!==h&&!r.hasOwnProperty(v)&&Zu(e,t,v,void 0,r,h);for(d in r)h=r[d],f=n[d],!r.hasOwnProperty(d)||h===f||void 0===h&&void 0===f||Zu(e,t,d,h,r,f);return}}for(var y in n)h=n[y],n.hasOwnProperty(y)&&null!=h&&!r.hasOwnProperty(y)&&Ju(e,t,y,null,r,h);for(p in r)h=r[p],f=n[p],!r.hasOwnProperty(p)||h===f||null==h&&null==f||Ju(e,t,p,h,r,f)}(r,e.type,n,t),r[Me]=t}catch(i){uu(e,e.return,i)}}function fl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&hd(e.type)||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&hd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xu));else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function yl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ed(t,r,n),t[ze]=e,t[Me]=n}catch(a){uu(e,e.return,a)}}var xl=!1,bl=!1,wl=!1,Sl="function"===typeof WeakSet?WeakSet:Set,kl=null;function El(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nl(e,n),4&r&&ol(5,n);break;case 1:if(Nl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){uu(n,n.return,o)}else{var i=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(Nl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{pa(e,t)}catch(o){uu(n,n.return,o)}}break;case 27:null===t&&4&r&&yl(n);case 26:case 5:Nl(e,n),null===t&&4&r&&pl(n),512&r&&ul(n,n.return);break;case 12:Nl(e,n);break;case 13:Nl(e,n),4&r&&Al(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=fu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||xl)){t=null!==t&&null!==t.memoizedState||bl,i=xl;var a=bl;xl=r,(bl=t)&&!a?Il(e,n,0!==(8772&n.subtreeFlags)):Nl(e,n),xl=i,bl=a}break;case 30:break;default:Nl(e,n)}}function Cl(e){var t=e.alternate;null!==t&&(e.alternate=null,Cl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&$e(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pl=null,Tl=!1;function jl(e,t,n){for(n=n.child;null!==n;)Rl(e,t,n),n=n.sibling}function Rl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(a){}switch(n.tag){case 26:bl||dl(n,t),jl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:bl||dl(n,t);var r=Pl,i=Tl;hd(n.type)&&(Pl=n.stateNode,Tl=!1),jl(e,t,n),wd(n.stateNode),Pl=r,Tl=i;break;case 5:bl||dl(n,t);case 6:if(r=Pl,i=Tl,Pl=null,jl(e,t,n),Tl=i,null!==(Pl=r))if(Tl)try{(9===Pl.nodeType?Pl.body:"HTML"===Pl.nodeName?Pl.ownerDocument.body:Pl).removeChild(n.stateNode)}catch(o){uu(n,t,o)}else try{Pl.removeChild(n.stateNode)}catch(o){uu(n,t,o)}break;case 18:null!==Pl&&(Tl?(fd(9===(e=Pl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Tp(e)):fd(Pl,n.stateNode));break;case 4:r=Pl,i=Tl,Pl=n.stateNode.containerInfo,Tl=!0,jl(e,t,n),Pl=r,Tl=i;break;case 0:case 11:case 14:case 15:bl||sl(2,n,t),bl||sl(4,n,t),jl(e,t,n);break;case 1:bl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),jl(e,t,n);break;case 21:jl(e,t,n);break;case 22:bl=(r=bl)||null!==n.memoizedState,jl(e,t,n),bl=r;break;default:jl(e,t,n)}}function Al(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Tp(e)}catch(n){uu(t,t.return,n)}}function Ll(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function zl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(hd(l.type)){Pl=l.stateNode,Tl=!1;break e}break;case 5:Pl=l.stateNode,Tl=!1;break e;case 3:case 4:Pl=l.stateNode.containerInfo,Tl=!0;break e}l=l.return}if(null===Pl)throw Error(o(160));Rl(a,s,i),Pl=null,Tl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Dl(t,e),t=t.sibling}var Ml=null;function Dl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zl(t,e),_l(e),4&r&&(sl(3,e,e.return),ol(3,e),sl(5,e,e.return));break;case 1:zl(t,e),_l(e),512&r&&(bl||null===n||dl(n,n.return)),64&r&&xl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Ml;if(zl(t,e),_l(e),512&r&&(bl||null===n||dl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[Ie]||a[ze]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),ed(a,r,n),a[ze]=e,He(a),r=a;break e;case"link":var s=Id("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=Id("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[ze]=e,He(a),r=a}e.stateNode=r}else $d(i,e.type,e.stateNode);else e.stateNode=Dd(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?$d(i,e.type,e.stateNode):Dd(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&hl(e,e.memoizedProps,n.memoizedProps)}break;case 27:zl(t,e),_l(e),512&r&&(bl||null===n||dl(n,n.return)),null!==n&&4&r&&hl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(zl(t,e),_l(e),512&r&&(bl||null===n||dl(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(f){uu(e,e.return,f)}}4&r&&null!=e.stateNode&&hl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(zl(t,e),_l(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(f){uu(e,e.return,f)}}break;case 3:if(Fd=null,i=Ml,Ml=Ed(t.containerInfo),zl(t,e),Ml=i,_l(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Tp(t.containerInfo)}catch(f){uu(e,e.return,f)}wl&&(wl=!1,Ol(e));break;case 4:r=Ml,Ml=Ed(e.stateNode.containerInfo),zl(t,e),_l(e),Ml=r;break;case 12:default:zl(t,e),_l(e);break;case 13:zl(t,e),_l(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ll(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=xl,d=bl;if(xl=u||i,bl=d||c,zl(t,e),bl=d,xl=u,_l(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||xl||bl||Fl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var p=c.memoizedProps.style,h=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(f){uu(c,c.return,f)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(f){uu(c,c.return,f)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ll(e,n))));break;case 19:zl(t,e),_l(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ll(e,r)));case 30:case 21:}}function _l(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(fl(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;vl(e,ml(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(St(a,""),n.flags&=-33),vl(e,ml(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,ml(e),s);break;default:throw Error(o(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ol(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Nl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)El(e,t.alternate,t),t=t.sibling}function Fl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Fl(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Fl(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Fl(t);break;case 22:null===t.memoizedState&&Fl(t);break;default:Fl(t)}e=e.sibling}}function Il(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Il(i,a,n),ol(4,a);break;case 1:if(Il(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)da(l[i],s)}catch(c){uu(r,r.return,c)}}n&&64&o&&ll(a),ul(a,a.return);break;case 27:yl(a);case 26:case 5:Il(i,a,n),n&&null===r&&4&o&&pl(a),ul(a,a.return);break;case 12:Il(i,a,n);break;case 13:Il(i,a,n),n&&4&o&&Al(i,a);break;case 22:null===a.memoizedState&&Il(i,a,n),ul(a,a.return);break;case 30:break;default:Il(i,a,n)}t=t.sibling}}function $l(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Di(n))}function Vl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Di(e))}function Bl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Wl(e,t,n,r),t=t.sibling}function Wl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Bl(e,t,n,r),2048&i&&ol(9,t);break;case 1:case 13:default:Bl(e,t,n,r);break;case 3:Bl(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Di(e)));break;case 12:if(2048&i){Bl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else Bl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?Bl(e,t,n,r):Hl(e,t):2&a._visibility?Bl(e,t,n,r):(a._visibility|=2,Ul(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&$l(o,t);break;case 24:Bl(e,t,n,r),2048&i&&Vl(t.alternate,t)}}function Ul(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:Ul(a,o,s,l,i),ol(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?Ul(a,o,s,l,i):Hl(a,o):(u._visibility|=2,Ul(a,o,s,l,i)),i&&2048&c&&$l(o.alternate,o);break;case 24:Ul(a,o,s,l,i),i&&2048&c&&Vl(o.alternate,o);break;default:Ul(a,o,s,l,i)}t=t.sibling}}function Hl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hl(n,r),2048&i&&$l(r.alternate,r);break;case 24:Hl(n,r),2048&i&&Vl(r.alternate,r);break;default:Hl(n,r)}t=t.sibling}}var Yl=8192;function Kl(e){if(e.subtreeFlags&Yl)for(e=e.child;null!==e;)ql(e),e=e.sibling}function ql(e){switch(e.tag){case 26:Kl(e),e.flags&Yl&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(o(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=Rd(n.href),a=e.querySelector(Ad(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Ud.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void He(a);a=e.ownerDocument||e,n=Ld(n),(i=Sd.get(i))&&Od(n,i),He(a=a.createElement("link"));var s=a;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Ud.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ml,e.memoizedState,e.memoizedProps);break;case 5:default:Kl(e);break;case 3:case 4:var t=Ml;Ml=Ed(e.stateNode.containerInfo),Kl(e),Ml=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Yl,Yl=16777216,Kl(e),Yl=t):Kl(e))}}function Gl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ql(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Gl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xl(e),e=e.sibling}function Xl(e){switch(e.tag){case 0:case 11:case 15:Ql(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Ql(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Ql(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Gl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Di(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,kl=r;else e:for(n=e;null!==kl;){var i=(r=kl).sibling,a=r.return;if(Cl(r),r===n){kl=null;break e}if(null!==i){i.return=a,kl=i;break e}kl=a}}}var ec={getCacheForType:function(e){var t=Pi(zi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,ac=0,oc=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,pc=0,hc=0,fc=0,mc=0,gc=0,vc=0,yc=null,xc=null,bc=!1,wc=0,Sc=1/0,kc=null,Ec=null,Cc=0,Pc=null,Tc=null,jc=0,Rc=0,Ac=null,Lc=null,zc=0,Mc=null;function Dc(){if(0!==(2&nc)&&0!==ac)return ac&-ac;if(null!==D.T){return 0!==Ni?Ni:Ru()}return Ae()}function _c(){0===gc&&(gc=0===(536870912&ac)||ai?Se():536870912);var e=is.current;return null!==e&&(e.flags|=32),gc}function Oc(e,t,n){(e!==rc||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||(Wc(e,0),$c(e,ac,gc,!1)),Ce(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(fc|=n),4===pc&&$c(e,ac,gc,!1)),Su(e))}function Nc(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||be(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=Hc(),i=Yc();rc!==e||ac!==t?(kc=null,Sc=te()+500,Wc(e,t)):cc=be(e,t);e:for(;;)try{if(0!==oc&&null!==ic){t=ic;var a=sc;t:switch(oc){case 1:oc=0,sc=null,Zc(e,t,a,1);break;case 2:case 9:if(Gi(a)){oc=0,sc=null,Jc(t);break}t=function(){2!==oc&&9!==oc||rc!==e||(oc=7),Su(e)},a.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Gi(a)?(oc=0,sc=null,Jc(t)):(oc=0,sc=null,Zc(e,t,a,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||Vd(s)){oc=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var u=l.return;null!==u?(ic=u,eu(u)):ic=null}break t}}oc=0,sc=null,Zc(e,t,a,5);break;case 6:oc=0,sc=null,Zc(e,t,a,6);break;case 8:Bc(),pc=6;break e;default:throw Error(o(462))}}Qc();break}catch(d){Uc(e,d)}return yi=vi=null,D.H=r,D.A=i,nc=n,null!==ic?0:(rc=null,ac=0,jr(),pc)}(e,t):qc(e,t,!0),a=r;;){if(0===i){cc&&!r&&$c(e,t,0,!1);break}if(n=e.current.alternate,!a||Ic(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=yc;var c=l.current.memoizedState.isDehydrated;if(c&&(Wc(l,s).flags|=256),2!==(s=qc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=a,fc|=a,i=4;break e}a=xc,xc=i,null!==a&&(null===xc?xc=a:xc.push.apply(xc,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){Wc(e,0),$c(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:$c(r,t,gc,!lc);break e;case 2:xc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if($c(r,t,gc,!lc),0!==xe(r,0,!0))break e;r.timeoutHandle=ld(Fc.bind(null,r,n,xc,kc,bc,t,gc,fc,vc,lc,a,2,-0,0),i)}else Fc(r,n,xc,kc,bc,t,gc,fc,vc,lc,a,0,-0,0)}break}i=qc(e,t,!1),a=!1}Su(e)}function Fc(e,t,n,r,i,a,s,l,c,u,d,p,h,f){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||16785408===(16785408&p))&&(Bd={stylesheets:null,count:0,unsuspend:Wd},ql(t),null!==(p=function(){if(null===Bd)throw Error(o(475));var e=Bd;return e.stylesheets&&0===e.count&&Yd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Yd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(nu.bind(null,e,t,a,n,r,i,s,l,c,d,1,h,f)),void $c(e,a,s,!u);nu(e,t,a,n,r,i,s,l,c)}function Ic(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $c(e,t,n,r){t&=~mc,t&=~fc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-he(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&Pe(e,n,t)}function Vc(){return 0!==(6&nc)||(ku(0,!1),!1)}function Bc(){if(null!==ic){if(0===oc)var e=ic.return;else yi=vi=null,Na(e=ic),Go=null,Qo=0,e=ic;for(;null!==e;)al(e.alternate,e),e=e.return;ic=null}}function Wc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bc(),rc=e,ic=n=Fr(e.current,null),ac=t,oc=0,sc=null,lc=!1,cc=be(e,t),uc=!1,vc=gc=mc=fc=hc=pc=0,xc=yc=null,bc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-he(r),a=1<<i;t|=e[i],r&=~a}return dc=t,jr(),n}function Uc(e,t){xa=null,D.H=Ho,t===Hi||t===Ki?(t=Zi(),oc=3):t===Yi?(t=Zi(),oc=4):oc=t===Ps?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(pc=1,ws(e,Er(t,e.current)))}function Hc(){var e=D.H;return D.H=Ho,null===e?Ho:e}function Yc(){var e=D.A;return D.A=ec,e}function Kc(){pc=4,lc||(4194048&ac)!==ac&&null!==is.current||(cc=!0),0===(134217727&hc)&&0===(134217727&fc)||null===rc||$c(rc,ac,gc,!1)}function qc(e,t,n){var r=nc;nc|=2;var i=Hc(),a=Yc();rc===e&&ac===t||(kc=null,Wc(e,t)),t=!1;var o=pc;e:for(;;)try{if(0!==oc&&null!==ic){var s=ic,l=sc;switch(oc){case 8:Bc(),o=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=oc;if(oc=0,sc=null,Zc(e,s,l,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,sc=null,Zc(e,s,l,c)}}Gc(),o=pc;break}catch(u){Uc(e,u)}return t&&e.shellSuspendCounter++,yi=vi=null,nc=r,D.H=i,D.A=a,null===ic&&(rc=null,ac=0,jr()),o}function Gc(){for(;null!==ic;)Xc(ic)}function Qc(){for(;null!==ic&&!Z();)Xc(ic)}function Xc(e){var t=Xs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Os(n,t,t.pendingProps,t.type,void 0,ac);break;case 11:t=Os(n,t,t.pendingProps,t.type.render,t.ref,ac);break;case 5:Na(t);default:al(n,t),t=Xs(n,t=ic=Ir(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Zc(e,t,n,r){yi=vi=null,Na(t),Go=null,Qo=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ki(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===as?Kc():null===n.alternate&&0===pc&&(pc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===qi?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,i)),!1;case 22:return n.flags|=65536,r===qi?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,i)),!1}throw Error(o(435,n.tag))}return du(e,r,i),Kc(),!1}if(ai)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&mi(Er(e=Error(o(422),{cause:r}),n))):(r!==li&&mi(Er(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Er(r,n),sa(e,i=ks(e.stateNode,r,i)),4!==pc&&(pc=2)),!1;var a=Error(o(520),{cause:r});if(a=Er(a,n),null===yc?yc=[a]:yc.push(a),4!==pc&&(pc=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,sa(n,e=ks(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Ec||!Ec.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,Cs(i=Es(i),e,n,r),sa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ac))return pc=1,ws(e,Er(n,e.current)),void(ic=null)}catch(a){if(null!==i)throw ic=i,a;return pc=1,ws(e,Er(n,e.current)),void(ic=null)}32768&t.flags?(ai||1===r?e=!0:cc||0!==(536870912&ac)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===pc&&(pc=5)}function tu(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);pc=6,ic=null}function nu(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Cc);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-he(n),d=1<<u;s[u]=0,l[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var h=p[u];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Pe(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Tr,s,l,c),e===rc&&(ic=rc=null,ac=0),Tc=t,Pc=e,jc=n,Rc=a,Ac=i,Lc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(ae,(function(){return lu(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=D.T,D.T=null,i=_.p,_.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=np,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===a&&++d===r&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},np=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(a=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=gs(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){uu(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nc=s,_.p=i,D.T=r}}Cc=1,ru(),iu(),au()}}function ru(){if(1===Cc){Cc=0;var e=Pc,t=Tc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=D.T,D.T=null;var r=_.p;_.p=2;var i=nc;nc|=4;try{Dl(t,e);var a=nd,o=er(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var h=p.getSelection(),f=s.textContent.length,m=Math.min(l.start,f),g=void 0===l.end?m:Math.min(l.end,f);!h.extend&&m>g&&(o=g,g=m,m=o);var v=Jn(s,m),y=Jn(s,g);if(v&&y&&(1!==h.rangeCount||h.anchorNode!==v.node||h.anchorOffset!==v.offset||h.focusNode!==y.node||h.focusOffset!==y.offset)){var x=d.createRange();x.setStart(v.node,v.offset),h.removeAllRanges(),m>g?(h.addRange(x),h.extend(y.node,y.offset)):(x.setEnd(y.node,y.offset),h.addRange(x))}}}}for(d=[],h=s;h=h.parentNode;)1===h.nodeType&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}np=!!td,nd=td=null}finally{nc=i,_.p=r,D.T=n}}e.current=t,Cc=2}}function iu(){if(2===Cc){Cc=0;var e=Pc,t=Tc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=D.T,D.T=null;var r=_.p;_.p=2;var i=nc;nc|=4;try{El(e,t.alternate,t)}finally{nc=i,_.p=r,D.T=n}}Cc=3}}function au(){if(4===Cc||3===Cc){Cc=0,ee();var e=Pc,t=Tc,n=jc,r=Lc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cc=5:(Cc=0,Tc=Pc=null,ou(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Ec=null),Re(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=D.T,i=_.p,_.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,_.p=i}}0!==(3&jc)&&su(),Su(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===Mc?zc++:(zc=0,Mc=e):zc=0,ku(0,!1)}}function ou(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Di(t)))}function su(e){return ru(),iu(),au(),lu()}function lu(){if(5!==Cc)return!1;var e=Pc,t=Rc;Rc=0;var n=Re(jc),r=D.T,i=_.p;try{_.p=32>n?32:n,D.T=null,n=Ac,Ac=null;var a=Pc,s=jc;if(Cc=0,Tc=Pc=null,jc=0,0!==(6&nc))throw Error(o(331));var l=nc;if(nc|=4,Xl(a.current),Wl(a,a.current,s,n),nc=l,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,a)}catch(c){}return!0}finally{_.p=i,D.T=r,ou(e,t)}}function cu(e,t,n){t=Er(n,t),null!==(e=aa(e,t=ks(e.stateNode,t,2),2))&&(Ce(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ec||!Ec.has(r))){e=Er(n,e),null!==(r=aa(t,n=Es(2),2))&&(Cs(n,r,t,e),Ce(r,2),Su(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(uc=!0,i.add(n),e=pu.bind(null,e,t,n),t.then(e,e))}function pu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ac&n)===n&&(4===pc||3===pc&&(62914560&ac)===ac&&300>te()-wc?0===(2&nc)&&Wc(e,0):mc|=n,vc===ac&&(vc=0)),Su(e)}function hu(e,t){0===t&&(t=ke()),null!==(e=Lr(e,t))&&(Ce(e,t),Su(e))}function fu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),hu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),hu(e,n)}var gu=null,vu=null,yu=!1,xu=!1,bu=!1,wu=0;function Su(e){e!==vu&&null===e.next&&(null===vu?gu=vu=e:vu=vu.next=e),xu=!0,yu||(yu=!0,dd((function(){0!==(6&nc)?X(re,Eu):Cu()})))}function ku(e,t){if(!bu&&xu){bu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-he(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,ju(r,a))}else a=ac,0===(3&(a=xe(r,r===rc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||be(r,a)||(n=!0,ju(r,a));r=r.next}}while(n);bu=!1}}function Eu(){Cu()}function Cu(){xu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var i=r.next,a=Pu(r,t);0===a?(r.next=null,null===n?gu=i:n.next=i,null===i&&(vu=n)):(n=r,(0!==e||0!==(3&a))&&(xu=!0)),r=i}ku(e,!1)}function Pu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-he(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=we(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ac,n=xe(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||be(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),Re(n)){case 2:case 8:n=ie;break;case 32:default:n=ae;break;case 268435456:n=se}return r=Tu.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Tu(e,t){if(0!==Cc&&5!==Cc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=ac;return 0===(r=xe(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Nc(e,r,t),Pu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Tu.bind(null,e):null)}function ju(e,t){if(su())return null;Nc(e,t,!0)}function Ru(){return 0===wu&&(wu=Se()),wu}function Au(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Rt(""+e)}function Lu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var zu=0;zu<wr.length;zu++){var Mu=wr[zu];Sr(Mu.toLowerCase(),"on"+(Mu[0].toUpperCase()+Mu.slice(1)))}Sr(hr,"onAnimationEnd"),Sr(fr,"onAnimationIteration"),Sr(mr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(vr,"onTransitionStart"),Sr(yr,"onTransitionCancel"),Sr(xr,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_u=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Du));function Ou(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}}}}function Nu(e,t){var n=t[_e];void 0===n&&(n=t[_e]=new Set);var r=e+"__bubble";n.has(r)||(Vu(t,e,2,!1),n.add(r))}function Fu(e,t,n){var r=0;t&&(r|=4),Vu(n,e,r,t)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function $u(e){if(!e[Iu]){e[Iu]=!0,Ye.forEach((function(t){"selectionchange"!==t&&(_u.has(t)||Fu(t,!1,e),Fu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Iu]||(t[Iu]=!0,Fu("selectionchange",!1,t))}}function Vu(e,t,n,r){switch(cp(t)){case 2:var i=rp;break;case 8:i=ip;break;default:i=ap}n=i.bind(null,t,n,e),i=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bu(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=Ve(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}Ot((function(){var r=a,i=Lt(n),o=[];e:{var s=br.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===Ht(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case hr:case fr:case mr:c=sn;break;case xr:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=xn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=bn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),h=d?null!==s?s+"Capture":null:s;d=[];for(var f,m=r;null!==m;){var g=m;if(f=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===f||null===h||null!=(g=Nt(m,h))&&d.push(Wu(m,g,f)),p)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===At||!(u=n.relatedTarget||n.fromElement)||!Ve(u)&&!u[De])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ve(u):null)&&(p=l(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",h="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",h="onPointerEnter",m="pointer"),p=null==c?s:We(c),f=null==u?s:We(u),(s=new d(g,m+"leave",c,n,i)).target=p,s.relatedTarget=f,g=null,Ve(i)===r&&((d=new d(h,m+"enter",u,n,i)).target=f,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(h=u,m=0,f=d=c;f;f=Hu(f))m++;for(f=0,g=h;g;g=Hu(g))f++;for(;0<m-f;)d=Hu(d),m--;for(;0<f-m;)h=Hu(h),f--;for(;m--;){if(d===h||null!==h&&d===h.alternate)break e;d=Hu(d),h=Hu(h)}d=null}else d=null;null!==c&&Yu(o,s,c,d,!1),null!==u&&null!==p&&Yu(o,p,u,d,!0)}if("select"===(c=(s=r?We(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var v=Fn;else if(zn(s))if(In)v=qn;else{v=Yn;var y=Hn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Pt(r.elementType)&&(v=Fn):v=Kn;switch(v&&(v=v(e,r))?Mn(o,v,n,i):(y&&y(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),y=r?We(r):window,e){case"focusin":(zn(y)||"true"===y.contentEditable)&&(rr=y,ir=r,ar=null);break;case"focusout":ar=ir=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,sr(o,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(o,n,i)}var x;if(Sn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else An?jn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Cn&&"ko"!==n.locale&&(An||"onCompositionStart"!==b?"onCompositionEnd"===b&&An&&(x=Ut()):(Bt="value"in(Vt=i)?Vt.value:Vt.textContent,An=!0)),0<(y=Uu(r,b)).length&&(b=new cn(b,e,null,n,i),o.push({event:b,listeners:y}),x?b.data=x:null!==(x=Rn(n))&&(b.data=x))),(x=En?function(e,t){switch(e){case"compositionend":return Rn(t);case"keypress":return 32!==t.which?null:(Tn=!0,Pn);case"textInput":return(e=t.data)===Pn&&Tn?null:e;default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!Sn&&jn(e,t)?(e=Ut(),Wt=Bt=Vt=null,An=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(b=Uu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,i),o.push({event:y,listeners:b}),y.data=x)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Au((i[Me]||null).action),o=r.submitter;o&&null!==(t=(t=o[Me]||null)?Au(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Zt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=o?Lu(i,o):new FormData(i);Lo(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Lu(i,o):new FormData(i),Lo(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Ou(o,t)}))}function Wu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Nt(e,n))&&r.unshift(Wu(e,i,a)),null!=(i=Nt(e,t))&&r.push(Wu(e,i,a))),3===e.tag)return r;e=e.return}return[]}function Hu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Yu(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Nt(n,a))&&o.unshift(Wu(n,c,l)):i||null!=(c=Nt(n,a))&&o.push(Wu(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Ku=/\r\n?/g,qu=/\u0000|\uFFFD/g;function Gu(e){return("string"===typeof e?e:""+e).replace(Ku,"\n").replace(qu,"")}function Qu(e,t){return t=Gu(t),Gu(e)===t}function Xu(){}function Ju(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,a);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Rt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Ju(e,t,"name",i.name,i,null),Ju(e,t,"formEncType",i.formEncType,i,null),Ju(e,t,"formMethod",i.formMethod,i,null),Ju(e,t,"formTarget",i.formTarget,i,null)):(Ju(e,t,"encType",i.encType,i,null),Ju(e,t,"method",i.method,i,null),Ju(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Rt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"onScroll":null!=r&&Nu("scroll",e);break;case"onScrollEnd":null!=r&&Nu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Rt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Nu("beforetoggle",e),Nu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Tt.get(n)||n,r)}}function Zu(e,t,n,r,i,a){switch(n){case"style":Ct(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Nu("scroll",e);break;case"onScrollEnd":null!=r&&Nu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ke.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[Me]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nu("error",e),Nu("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,r,s,n,null)}}return a&&Ju(e,t,"srcSet",n.srcSet,n,null),void(i&&Ju(e,t,"src",n.src,n,null));case"input":Nu("invalid",e);var l=r=s=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Ju(e,t,i,d,n,null)}}return vt(e,r,l,c,u,s,a,!1),void dt(e);case"select":for(a in Nu("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Ju(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?xt(e,!!i,t,!1):null!=n&&xt(e,!!i,n,!0));case"textarea":for(s in Nu("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Ju(e,t,s,l,n,null)}return wt(e,i,a,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Ju(e,t,c,i,n,null);return;case"dialog":Nu("beforetoggle",e),Nu("toggle",e),Nu("cancel",e),Nu("close",e);break;case"iframe":case"object":Nu("load",e);break;case"video":case"audio":for(i=0;i<Du.length;i++)Nu(Du[i],e);break;case"image":Nu("error",e),Nu("load",e);break;case"details":Nu("toggle",e);break;case"embed":case"source":case"link":Nu("error",e),Nu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ju(e,t,u,i,n,null)}return;default:if(Pt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Zu(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Ju(e,t,l,i,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(pd)}:ld;function pd(e){setTimeout((function(){throw e}))}function hd(e){return"head"===e}function fd(e,t){var n=t,r=0,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Ie]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=s}}if(0===i)return e.removeChild(a),void Tp(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);Tp(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),$e(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function xd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function bd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$e(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=_.d;_.d={f:function(){var e=Cd.f(),t=Vc();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?Mo(t):Cd.r(e)},D:function(e){Cd.D(e),Td("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),Td("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=Pd;if(r&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+mt(n.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var a=i;switch(t){case"style":a=Rd(e);break;case"script":a=zd(e)}Sd.has(a)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Ad(a))||"script"===t&&r.querySelector(Md(a))||(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=Pd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=zd(e)}if(!Sd.has(a)&&(e=p({rel:"modulepreload",href:e},t),Sd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Md(a)))return}ed(r=n.createElement("link"),"link",e),He(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=Pd;if(n&&e){var r=Ue(n).hoistableScripts,i=zd(e),a=r.get(i);a||((a=n.querySelector(Md(i)))||(e=p({src:e,async:!0},t),(t=Sd.get(i))&&Nd(e,t),He(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Cd.S(e,t,n);var r=Pd;if(r&&e){var i=Ue(r).hoistableStyles,a=Rd(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Ad(a)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(a))&&Od(e,n);var l=o=r.createElement("link");He(l),ed(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,_d(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Cd.M(e,t);var n=Pd;if(n&&e){var r=Ue(n).hoistableScripts,i=zd(e),a=r.get(i);a||((a=n.querySelector(Md(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=Sd.get(i))&&Nd(e,t),He(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var Pd="undefined"===typeof document?null:document;function Td(e,t,n){var r=Pd;if(r&&"string"===typeof t&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),kd.has(i)||(kd.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}}function jd(e,t,n,r){var i,a,s,l,c=(c=U.current)?Ed(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Rd(n.href),(r=(n=Ue(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Rd(n.href);var u=Ue(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Ad(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(i=c,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",(function(){return l.loading|=1})),a.addEventListener("error",(function(){return l.loading|=2})),ed(a,"link",s),He(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=zd(n),(r=(n=Ue(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Rd(e){return'href="'+mt(e)+'"'}function Ad(e){return'link[rel="stylesheet"]['+e+"]"}function Ld(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function zd(e){return'[src="'+mt(e)+'"]'}function Md(e){return"script[async]"+e}function Dd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,He(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return He(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",i),_d(r,n.precedence,e),t.instance=r;case"stylesheet":i=Rd(n.href);var a=e.querySelector(Ad(i));if(a)return t.state.loading|=4,t.instance=a,He(a),a;r=Ld(n),(i=Sd.get(i))&&Od(r,i),He(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",r),t.state.loading|=4,_d(a,n.precedence,e),t.instance=a;case"script":return a=zd(n.src),(i=e.querySelector(Md(a)))?(t.instance=i,He(i),i):(r=n,(i=Sd.get(a))&&Nd(r=p({},n),i),He(i=(e=e.ownerDocument||e).createElement("script")),ed(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,_d(r,n.precedence,e));return t.instance}function _d(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Od(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Nd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Fd=null;function Id(e,t,n){if(null===Fd){var r=new Map,i=Fd=new Map;i.set(n,r)}else(r=(i=Fd).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ie]||a[ze]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function $d(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Vd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Wd(){}function Ud(){if(this.count--,0===this.count)if(this.stylesheets)Yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Hd=null;function Yd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Hd=new Map,t.forEach(Kd,e),Hd=null,Ud.call(e))}function Kd(e,t){if(!(4&t.state.loading)){var n=Hd.get(e);if(n)var r=n.get(null);else{n=new Map,Hd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=Ud.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var qd={$$typeof:w,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Gd(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Qd(e,t,n,r,i,a,o,s,l,c,u,d){return e=new Gd(e,t,n,o,s,l,c,d),t=1,!0===a&&(t|=24),a=Or(3,null,null,t),e.current=a,a.stateNode=e,(t=Mi()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},na(a),e}function Xd(e){return e?e=Dr:Dr}function Jd(e,t,n,r,i,a){i=Xd(i),null===r.context?r.context=i:r.pendingContext=i,(r=ia(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=aa(e,r,t))&&(Oc(n,0,t),oa(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ep(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tp(e){if(13===e.tag){var t=Lr(e,67108864);null!==t&&Oc(t,0,67108864),ep(e,67108864)}}var np=!0;function rp(e,t,n,r){var i=D.T;D.T=null;var a=_.p;try{_.p=2,ap(e,t,n,r)}finally{_.p=a,D.T=i}}function ip(e,t,n,r){var i=D.T;D.T=null;var a=_.p;try{_.p=8,ap(e,t,n,r)}finally{_.p=a,D.T=i}}function ap(e,t,n,r){if(np){var i=op(r);if(null===i)Bu(e,t,r,sp,n),yp(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return dp=xp(dp,e,t,n,r,i),!0;case"dragenter":return pp=xp(pp,e,t,n,r,i),!0;case"mouseover":return hp=xp(hp,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return fp.set(a,xp(fp.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,mp.set(a,xp(mp.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(yp(e,r),4&t&&-1<vp.indexOf(e)){for(;null!==i;){var a=Be(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=ye(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-he(o);s.entanglements[1]|=l,o&=~l}Su(a),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(s=Lr(a,2))&&Oc(s,0,2),Vc(),ep(a,2)}if(null===(a=op(r))&&Bu(e,t,r,sp,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Bu(e,t,r,null,n)}}function op(e){return lp(e=Lt(e))}var sp=null;function lp(e){if(sp=null,null!==(e=Ve(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sp=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case ae:case oe:return 32;case se:return 268435456;default:return 32}default:return 32}}var up=!1,dp=null,pp=null,hp=null,fp=new Map,mp=new Map,gp=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yp(e,t){switch(e){case"focusin":case"focusout":dp=null;break;case"dragenter":case"dragleave":pp=null;break;case"mouseover":case"mouseout":hp=null;break;case"pointerover":case"pointerout":fp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mp.delete(t.pointerId)}}function xp(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Be(t))&&tp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function bp(e){var t=Ve(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=_.p;try{return _.p=e,t()}finally{_.p=n}}(e.priority,(function(){if(13===n.tag){var e=Dc();e=je(e);var t=Lr(n,e);null!==t&&Oc(t,0,e),ep(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=op(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function Sp(e,t,n){wp(e)&&n.delete(t)}function kp(){up=!1,null!==dp&&wp(dp)&&(dp=null),null!==pp&&wp(pp)&&(pp=null),null!==hp&&wp(hp)&&(hp=null),fp.forEach(Sp),mp.forEach(Sp)}function Ep(e,t){e.blockedOn===t&&(e.blockedOn=null,up||(up=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kp)))}var Cp=null;function Pp(e){Cp!==e&&(Cp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Cp===e&&(Cp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===lp(r||n))continue;break}var a=Be(n);null!==a&&(e.splice(t,3),t-=3,Lo(a,{pending:!0,data:i,method:n.method,action:r},r,i))}})))}function Tp(e){function t(t){return Ep(t,e)}null!==dp&&Ep(dp,e),null!==pp&&Ep(pp,e),null!==hp&&Ep(hp,e),fp.forEach(t),mp.forEach(t);for(var n=0;n<gp.length;n++){var r=gp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gp.length&&null===(n=gp[0]).blockedOn;)bp(n),null===n.blockedOn&&gp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Me]||null;if("function"===typeof a)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[Me]||null)s=o.formAction;else if(null!==lp(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function jp(e){this._internalRoot=e}function Rp(e){this._internalRoot=e}Rp.prototype.render=jp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Jd(t.current,Dc(),e,t,null,null)},Rp.prototype.unmount=jp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Vc(),t[De]=null}},Rp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gp.length&&0!==t&&t<gp[n].priority;n++);gp.splice(n,0,e),0===n&&bp(e)}};var Ap=i.version;if("19.1.0"!==Ap)throw Error(o(527,Ap,"19.1.0"));_.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return u(i),e;if(a===r)return u(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Lp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{ue=zp.inject(Lp),de=zp}catch(Dp){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=ys,a=xs,l=bs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qd(e,1,!1,null,0,n,r,i,a,l,0,null),e[De]=t.current,$u(e),new jp(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=ys,l=xs,c=bs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Qd(e,1,!0,t,0,r,i,a,l,c,0,u)).context=Xd(null),n=t.current,(i=ia(r=je(r=Dc()))).callback=null,aa(n,i,r),n=r,t.current.lanes=n,Ce(t,n),Su(t),e[De]=t.current,$u(e),new Rp(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,r,i,a,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(){}function R(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return R((u=e._init)(e._payload),t,i,a,o)}}if(u)return o=o(e),u=""===a?"."+T(e,0):a,w(o)?(i="",null!=u&&(i=u.replace(P,"$&/")+"/"),R(o,t,i,"",(function(e){return e}))):null!=o&&(C(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+u,o=E(l.type,c,void 0,0,0,l.props)),t.push(o)),1;u=0;var d,f=""===a?".":a+":";if(w(e))for(var m=0;m<e.length;m++)u+=R(a=e[m],t,i,s=f+T(a,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(a=e.next()).done;)u+=R(a=a.value,t,i,s=f+T(a,m++),o);else if("object"===s){if("function"===typeof e.then)return R(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(j,j):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function M(){}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!k.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return E(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(M,z)}catch(a){z(a)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function S(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,E||(E=!0,k());else{var t=r(u);null!==t&&z(S,t.startTime-e)}}var k,E=!1,C=-1,P=5,T=-1;function j(){return!!v||!(t.unstable_now()-T<P)}function R(){if(v=!1,E){var e=t.unstable_now();T=e;var n=!0;try{e:{m=!1,g&&(g=!1,x(C),C=-1),f=!0;var a=h;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&j());){var o=p.callback;if("function"===typeof o){p.callback=null,h=p.priorityLevel;var s=o(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){p.callback=s,w(e),n=!0;break t}p===r(c)&&i(c),w(e)}else i(c);p=r(c)}if(null!==p)n=!0;else{var l=r(u);null!==l&&z(S,l.startTime-e),n=!1}}break e}finally{p=null,h=a,f=!1}n=void 0}}finally{n?k():E=!1}}}if("function"===typeof b)k=function(){b(R)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,L=A.port2;A.port1.onmessage=R,k=function(){L.postMessage(null)}}else k=function(){y(R,0)};function z(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(x(C),C=-1):g=!0,z(S,a-o))):(e.sortIndex=s,n(c,e),m||f||(m=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".1407b060.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391);function r(){return"undefined"!==typeof window}function i(){try{const e="production";if("development"===e||"test"===e)return"development"}catch(e){}return"production"}function a(){return(r()?window.vam:i())||"production"}function o(){return"development"===a()}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};var t;if(!r())return;!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";window.vam="auto"!==e?e:i()}(e.mode),window.va||(window.va=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)}),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));const n=function(e){return e.scriptSrc?e.scriptSrc:o()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?`${e.basePath}/insights/script.js`:"/_vercel/insights/script.js"}(e);if(document.head.querySelector(`script[src*="${n}"]`))return;const a=document.createElement("script");a.src=n,a.defer=!0,a.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),a.dataset.sdkv="1.5.0",e.disableAutoTrack&&(a.dataset.disableAutoTrack="1"),e.endpoint?a.dataset.endpoint=e.endpoint:e.basePath&&(a.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(a.dataset.dsn=e.dsn),a.onerror=()=>{const e=o()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},o()&&!1===e.debug&&(a.dataset.debug="false"),document.head.appendChild(a)}function l(){if("undefined"!==typeof process)return{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function c(t){return(0,e.useEffect)((()=>{var e;t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend))}),[t.beforeSend]),(0,e.useEffect)((()=>{s({framework:t.framework||"react",basePath:t.basePath??l(),...void 0!==t.route&&{disableAutoTrack:!0},...t})}),[]),(0,e.useEffect)((()=>{t.route&&t.path&&function(e){let{route:t,path:n}=e;var r;null==(r=window.va)||r.call(window,"pageview",{route:t,path:n})}({route:t.route,path:t.path})}),[t.route,t.path]),null}n(358);var u="popstate";function d(){return y((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return m("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:g(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function p(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function h(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function m(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?v(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function g(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function y(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s="POP",l=null,c=d();function d(){return(o.state||{idx:null}).idx}function h(){s="POP";let e=d(),t=null==e?null:e-c;c=e,l&&l({action:s,location:y.location,delta:t})}function v(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:g(e);return n=n.replace(/ $/,"%20"),p(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==c&&(c=0,o.replaceState({...o.state,idx:c},""));let y={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(u,h),l=e,()=>{i.removeEventListener(u,h),l=null}},createHref:e=>t(i,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=m(y.location,e,t);n&&n(r,e),c=d()+1;let u=f(r,c),p=y.createHref(r);try{o.pushState(u,"",p)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;i.location.assign(p)}a&&l&&l({action:s,location:y.location,delta:1})},replace:function(e,t){s="REPLACE";let r=m(y.location,e,t);n&&n(r,e),c=d();let i=f(r,c),u=y.createHref(r);o.replaceState(i,"",u),a&&l&&l({action:s,location:y.location,delta:0})},go:e=>o.go(e)};return y}new WeakMap;function x(e,t){return b(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function b(e,t,n,r){let i=D(("string"===typeof t?v(t):t).pathname||"/",n);if(null==i)return null;let a=w(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=M(i);o=L(a[s],e,r)}return o}function w(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(p(o.relativePath.startsWith(r),`Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=I([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(p(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),w(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:A(s,e.index),routesMeta:l})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of S(e.path))i(e,t,n);else i(e,t)})),t}function S(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=S(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var k=/^:[\w-]+$/,E=3,C=2,P=1,T=10,j=-2,R=e=>"*"===e;function A(e,t){let n=e.split("/"),r=n.length;return n.some(R)&&(r+=j),t&&(r+=C),n.filter((e=>!R(e))).reduce(((e,t)=>e+(k.test(t)?E:""===t?P:T)),r)}function L(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:I([a,u.pathname]),pathnameBase:$(I([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=I([a,u.pathnameBase]))}return o}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];h("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function M(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return h(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function D(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function _(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function N(e){let t=O(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function F(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=v(e):(r={...e},p(!r.pathname||!r.pathname.includes("?"),_("?","pathname","search",r)),p(!r.pathname||!r.pathname.includes("#"),_("#","pathname","hash",r)),p(!r.search||!r.search.includes("#"),_("#","search","hash",r)));let a,o=""===e||""===r.pathname,s=o?"/":r.pathname;if(null==s)a=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?v(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:V(r),hash:B(i)}}(r,a),c=s&&"/"!==s&&s.endsWith("/"),u=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}var I=e=>e.join("/").replace(/\/\/+/g,"/"),$=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),V=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",B=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function W(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var U=["POST","PUT","PATCH","DELETE"],H=(new Set(U),["GET",...U]);new Set(H),Symbol("ResetLoaderData");var Y=e.createContext(null);Y.displayName="DataRouter";var K=e.createContext(null);K.displayName="DataRouterState";var q=e.createContext({isTransitioning:!1});q.displayName="ViewTransition";var G=e.createContext(new Map);G.displayName="Fetchers";var Q=e.createContext(null);Q.displayName="Await";var X=e.createContext(null);X.displayName="Navigation";var J=e.createContext(null);J.displayName="Location";var Z=e.createContext({outlet:null,matches:[],isDataRoute:!1});Z.displayName="Route";var ee=e.createContext(null);ee.displayName="RouteError";function te(){return null!=e.useContext(J)}function ne(){return p(te(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(J).location}var re="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ie(t){e.useContext(X).static||e.useLayoutEffect(t)}function ae(){let{isDataRoute:t}=e.useContext(Z);return t?function(){let{router:t}=fe("useNavigate"),n=ge("useNavigate"),r=e.useRef(!1);ie((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h(r.current,re),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){p(te(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(Y),{basename:n,navigator:r}=e.useContext(X),{matches:i}=e.useContext(Z),{pathname:a}=ne(),o=JSON.stringify(N(i)),s=e.useRef(!1);ie((()=>{s.current=!0}));let l=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(h(s.current,re),!s.current)return;if("number"===typeof e)return void r.go(e);let l=F(e,JSON.parse(o),a,"path"===i.relative);null==t&&"/"!==n&&(l.pathname="/"===l.pathname?n:I([n,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[n,r,o,a,t]);return l}()}e.createContext(null);function oe(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(Z),{pathname:i}=ne(),a=JSON.stringify(N(r));return e.useMemo((()=>F(t,JSON.parse(a),i,"path"===n)),[t,a,i,n])}function se(t,n,r,i){p(te(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=e.useContext(X),{matches:s}=e.useContext(Z),l=s[s.length-1],c=l?l.params:{},u=l?l.pathname:"/",d=l?l.pathnameBase:"/",f=l&&l.route;{let e=f&&f.path||"";xe(u,!f||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let m,g=ne();if(n){let e="string"===typeof n?v(n):n;p("/"===d||e.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),m=e}else m=g;let y=m.pathname||"/",b=y;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!o&&r&&r.matches&&r.matches.length>0?r.matches:x(t,{pathname:b});h(f||null!=w,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),h(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=pe(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:I([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:I([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,r,i);return n&&S?e.createElement(J.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},S):S}function le(){let t=ve(),n=W(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:a},r):null,s)}var ce=e.createElement(le,null),ue=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Z.Provider,{value:this.props.routeContext},e.createElement(ee.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function de(t){let{routeContext:n,match:r,children:i}=t,a=e.useContext(Y);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(Z.Provider,{value:n},i)}function pe(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,a=r?.errors;if(null!=a){let e=i.findIndex((e=>e.route.id&&void 0!==a?.[e.route.id]));p(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){o=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight(((t,l,c)=>{let u,d=!1,p=null,h=null;r&&(u=a&&l.route.id?a[l.route.id]:void 0,p=l.route.errorElement||ce,o&&(s<0&&0===c?(xe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,h=null):s===c&&(d=!0,h=l.route.hydrateFallbackElement||null)));let f=n.concat(i.slice(0,c+1)),m=()=>{let n;return n=u?p:d?h:l.route.Component?e.createElement(l.route.Component,null):l.route.element?l.route.element:t,e.createElement(de,{match:l,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===c)?e.createElement(ue,{location:r.location,revalidation:r.revalidation,component:p,error:u,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()}),null)}function he(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fe(t){let n=e.useContext(Y);return p(n,he(t)),n}function me(t){let n=e.useContext(K);return p(n,he(t)),n}function ge(t){let n=function(t){let n=e.useContext(Z);return p(n,he(t)),n}(t),r=n.matches[n.matches.length-1];return p(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ve(){let t=e.useContext(ee),n=me("useRouteError"),r=ge("useRouteError");return void 0!==t?t:n.errors?.[r]}var ye={};function xe(e,t,n){t||ye[e]||(ye[e]=!0,h(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return se(t,void 0,r,n)}));function be(e){p(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function we(t){let{basename:n="/",children:r=null,location:i,navigationType:a="POP",navigator:o,static:s=!1}=t;p(!te(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),c=e.useMemo((()=>({basename:l,navigator:o,static:s,future:{}})),[l,o,s]);"string"===typeof i&&(i=v(i));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:g="default"}=i,y=e.useMemo((()=>{let e=D(u,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:m,key:g},navigationType:a}}),[l,u,d,f,m,g,a]);return h(null!=y,`<Router basename="${l}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(X.Provider,{value:c},e.createElement(J.Provider,{children:r,value:y}))}function Se(e){let{children:t,location:n}=e;return se(ke(t),n)}e.Component;function ke(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let a=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,ke(t.props.children,a));p(t.type===be,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),p(!t.props.index||!t.props.children,"An index route cannot have child routes.");let o={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(o.children=ke(t.props.children,a)),r.push(o)})),r}var Ee="get",Ce="application/x-www-form-urlencoded";function Pe(e){return null!=e&&"string"===typeof e.tagName}var Te=null;var je=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Re(e){return null==e||je.has(e)?e:(h(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ce}"`),null)}function Ae(e,t){let n,r,i,a,o;if(Pe(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?D(o,t):null,n=e.getAttribute("method")||Ee,i=Re(e.getAttribute("enctype"))||Ce,a=new FormData(e)}else if(function(e){return Pe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Pe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?D(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||Ee,i=Re(e.getAttribute("formenctype"))||Re(o.getAttribute("enctype"))||Ce,a=new FormData(o,e),!function(){if(null===Te)try{new FormData(document.createElement("form"),0),Te=!1}catch(e){Te=!0}return Te}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Pe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ee,r=null,i=Ce,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function Le(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function ze(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Me(e){return null!=e&&"string"===typeof e.page}function De(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function _e(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter(((e,t)=>o(e,t)||s(e,t))):"data"===a?t.filter(((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Oe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Ne(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!Me(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e}),[])}function Fe(e){return{__html:e}}Symbol("SingleFetchRedirect");function Ie(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===D(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function $e(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,a=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(W(n))return e.createElement(Ve,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),a);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ve,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function Ve(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:a}=t,{routeModules:o}=Ye();return o.root?.Layout&&!i?a:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,r?e.createElement(Ze,null):null)))}function Be(e){return!0===e}function We(){let t=e.useContext(Y);return Le(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ue(){let t=e.useContext(K);return Le(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var He=e.createContext(void 0);function Ye(){let t=e.useContext(He);return Le(t,"You must render this element inside a <HydratedRouter> element"),t}function Ke(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function qe(e,t,n){if(n&&!Je)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Ge(t){let{page:n,...r}=t,{router:i}=We(),a=e.useMemo((()=>x(i.routes,n,i.basename)),[i.routes,n,i.basename]);return a?e.createElement(Xe,{page:n,matches:a,...r}):null}function Qe(t){let{manifest:n,routeModules:r}=Ye(),[i,a]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await ze(r,n);return e.links?e.links():[]}return[]})));return Ne(r.flat(1).filter(De).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||a(t)})),()=>{e=!0}}),[t,n,r]),i}function Xe(t){let{page:n,matches:r,...i}=t,a=ne(),{manifest:o,routeModules:s}=Ye(),{basename:l}=We(),{loaderData:c,matches:u}=Ue(),d=e.useMemo((()=>_e(n,r,u,o,a,"data")),[n,r,u,o,a]),p=e.useMemo((()=>_e(n,r,u,o,a,"assets")),[n,r,u,o,a]),h=e.useMemo((()=>{if(n===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Ie(n,l);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[l,c,a,o,d,r,n,s]),f=e.useMemo((()=>Oe(p,o)),[p,o]),m=Qe(p);return e.createElement(e.Fragment,null,h.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),f.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}He.displayName="FrameworkContext";var Je=!1;function Ze(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:a,renderMeta:o}=Ye(),{router:s,static:l,staticContext:c}=We(),{matches:u}=Ue(),d=Be(a);o&&(o.didRenderScripts=!0);let p=qe(u,null,i);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let i=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];Le(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map((e=>e.route.id))),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach((e=>{let n=x(t.routes,e,t.basename);n&&n.forEach((e=>i.add(e.route.id)))}));let s=[...i].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:s,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Fe(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Fe(a),type:"module",async:!0}))}),[]),f=Je?[]:(n.entry.imports.concat(Oe(p,n,{includeHydrateFallback:!0})),[...new Set(m)]);var m;let g="object"===typeof n.sri?n.sri:{};return Je?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:g})}}):null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:g[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:g[n.entry.module],suppressHydrationWarning:!0}),f.map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:g[n],suppressHydrationWarning:!0}))),h)}function et(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var tt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{tt&&(window.__reactRouterVersion="7.5.0")}catch(Tv){}function nt(t){let{basename:n,children:r,window:i}=t,a=e.useRef();null==a.current&&(a.current=d({window:i,v5Compat:!0}));let o=a.current,[s,l]=e.useState({action:o.action,location:o.location}),c=e.useCallback((t=>{e.startTransition((()=>l(t)))}),[l]);return e.useLayoutEffect((()=>o.listen(c)),[o,c]),e.createElement(we,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:o})}var rt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,it=e.forwardRef((function(t,n){let r,{onClick:i,discover:a="render",prefetch:o="none",relative:s,reloadDocument:l,replace:c,state:u,target:d,to:f,preventScrollReset:m,viewTransition:v,...y}=t,{basename:x}=e.useContext(X),b="string"===typeof f&&rt.test(f),w=!1;if("string"===typeof f&&b&&(r=f,tt))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=D(t.pathname,x);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:w=!0}catch(Tv){h(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};p(te(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(X),{hash:a,pathname:o,search:s}=oe(t,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:I([r,o])),i.createHref({pathname:l,search:s,hash:a})}(f,{relative:s}),[k,E,C]=function(t,n){let r=e.useContext(He),[i,a]=e.useState(!1),[o,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=n,h=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let f=()=>{a(!0)},m=()=>{a(!1),s(!1)};return r?"intent"!==t?[o,h,{}]:[o,h,{onFocus:Ke(l,f),onBlur:Ke(c,m),onMouseEnter:Ke(u,f),onMouseLeave:Ke(d,m),onTouchStart:Ke(p,f)}]:[!1,h,{}]}(o,y),P=function(t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=ae(),c=ne(),u=oe(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:g(c)===g(u);l(t,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}}),[c,l,u,r,i,n,t,a,o,s])}(f,{replace:c,state:u,target:d,preventScrollReset:m,relative:s,viewTransition:v});let T=e.createElement("a",{...y,...C,href:r||S,onClick:w||l?i:function(e){i&&i(e),e.defaultPrevented||P(e)},ref:et(n,E),target:d,"data-discover":b||"render"!==a?void 0:"true"});return k&&!b?e.createElement(e.Fragment,null,T,e.createElement(Ge,{page:S})):T}));it.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,viewTransition:c,children:u,...d}=t,h=oe(l,{relative:d.relative}),f=ne(),m=e.useContext(K),{navigator:g,basename:v}=e.useContext(X),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(q);p(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=st("useViewTransitionState"),a=oe(t,{relative:n.relative});if(!r.isTransitioning)return!1;let o=D(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=D(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=z(a.pathname,s)||null!=z(a.pathname,o)}(h)&&!0===c,x=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,b=f.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&v&&(w=D(w,v)||w);const S="/"!==x&&x.endsWith("/")?x.length-1:x.length;let k,E=b===x||!o&&b.startsWith(x)&&"/"===b.charAt(S),C=null!=w&&(w===x||!o&&w.startsWith(x)&&"/"===w.charAt(x.length)),P={isActive:E,isPending:C,isTransitioning:y},T=E?r:void 0;k="function"===typeof a?a(P):[a,E?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let j="function"===typeof s?s(P):s;return e.createElement(it,{...d,"aria-current":T,className:k,ref:n,style:j,to:l,viewTransition:c},"function"===typeof u?u(P):u)})).displayName="NavLink";var at=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:a,reloadDocument:o,replace:s,state:l,method:c=Ee,action:u,onSubmit:d,relative:h,preventScrollReset:f,viewTransition:m,...v}=t,y=ut(),x=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(X),i=e.useContext(Z);p(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...oe(t||".",{relative:n})},s=ne();if(null==t){o.search=s.search;let e=new URLSearchParams(o.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();o.search=n?`?${n}`:""}}t&&"."!==t||!a.route.index||(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(o.pathname="/"===o.pathname?r:I([r,o.pathname]));return g(o)}(u,{relative:h}),b="get"===c.toLowerCase()?"get":"post",w="string"===typeof u&&rt.test(u);return e.createElement("form",{ref:n,method:b,action:x,onSubmit:o?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||c;y(t||e.currentTarget,{fetcherKey:i,method:n,navigate:a,replace:s,state:l,relative:h,preventScrollReset:f,viewTransition:m})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function ot(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function st(t){let n=e.useContext(Y);return p(n,ot(t)),n}at.displayName="Form";var lt=0,ct=()=>`__${String(++lt)}__`;function ut(){let{router:t}=st("useSubmit"),{basename:n}=e.useContext(X),r=ge("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:c}=Ae(e,n);if(!1===i.navigate){let e=i.fetcherKey||ct();await t.fetch(e,r,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var dt=n(579);const pt=(0,e.createContext)(void 0),ht=t=>{let{children:n}=t;const[r,i]=(0,e.useState)((()=>localStorage.getItem("theme")||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")));(0,e.useEffect)((()=>{document.body.dataset.theme=r,localStorage.setItem("theme",r)}),[r]),(0,e.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{localStorage.getItem("theme")||i(e.matches?"dark":"light")};return e.addEventListener?e.addEventListener("change",t):e.addListener(t),()=>{e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}}),[]);return(0,dt.jsx)(pt.Provider,{value:{theme:r,toggleTheme:()=>{i((e=>{const t="light"===e?"dark":"light";return localStorage.setItem("theme",t),t}))}},children:n})};var ft=function(){return ft=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ft.apply(this,arguments)};Object.create;function mt(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var gt=n(324),vt=n.n(gt),yt="-ms-",xt="-moz-",bt="-webkit-",wt="comm",St="rule",kt="decl",Et="@keyframes",Ct=Math.abs,Pt=String.fromCharCode,Tt=Object.assign;function jt(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function At(e,t,n){return e.replace(t,n)}function Lt(e,t,n){return e.indexOf(t,n)}function zt(e,t){return 0|e.charCodeAt(t)}function Mt(e,t,n){return e.slice(t,n)}function Dt(e){return e.length}function _t(e){return e.length}function Ot(e,t){return t.push(e),e}function Nt(e,t){return e.filter((function(e){return!Rt(e,t)}))}var Ft=1,It=1,$t=0,Vt=0,Bt=0,Wt="";function Ut(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ft,column:It,length:o,return:"",siblings:s}}function Ht(e,t){return Tt(Ut("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Yt(e){for(;e.root;)e=Ht(e.root,{children:[e]});Ot(e,e.siblings)}function Kt(){return Bt=Vt>0?zt(Wt,--Vt):0,It--,10===Bt&&(It=1,Ft--),Bt}function qt(){return Bt=Vt<$t?zt(Wt,Vt++):0,It++,10===Bt&&(It=1,Ft++),Bt}function Gt(){return zt(Wt,Vt)}function Qt(){return Vt}function Xt(e,t){return Mt(Wt,e,t)}function Jt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Zt(e){return Ft=It=1,$t=Dt(Wt=e),Vt=0,[]}function en(e){return Wt="",e}function tn(e){return jt(Xt(Vt-1,an(91===e?e+2:40===e?e+1:e)))}function nn(e){for(;(Bt=Gt())&&Bt<33;)qt();return Jt(e)>2||Jt(Bt)>3?"":" "}function rn(e,t){for(;--t&&qt()&&!(Bt<48||Bt>102||Bt>57&&Bt<65||Bt>70&&Bt<97););return Xt(e,Qt()+(t<6&&32==Gt()&&32==qt()))}function an(e){for(;qt();)switch(Bt){case e:return Vt;case 34:case 39:34!==e&&39!==e&&an(Bt);break;case 40:41===e&&an(e);break;case 92:qt()}return Vt}function on(e,t){for(;qt()&&e+Bt!==57&&(e+Bt!==84||47!==Gt()););return"/*"+Xt(t,Vt-1)+"*"+Pt(47===e?e:qt())}function sn(e){for(;!Jt(Gt());)qt();return Xt(e,Vt)}function ln(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function cn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case kt:return e.return=e.return||e.value;case wt:return"";case Et:return e.return=e.value+"{"+ln(e.children,r)+"}";case St:if(!Dt(e.value=e.props.join(",")))return""}return Dt(n=ln(e.children,r))?e.return=e.value+"{"+n+"}":""}function un(e,t,n){switch(function(e,t){return 45^zt(e,0)?(((t<<2^zt(e,0))<<2^zt(e,1))<<2^zt(e,2))<<2^zt(e,3):0}(e,t)){case 5103:return bt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return bt+e+e;case 4789:return xt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return bt+e+xt+e+yt+e+e;case 5936:switch(zt(e,t+11)){case 114:return bt+e+yt+At(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return bt+e+yt+At(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return bt+e+yt+At(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return bt+e+yt+e+e;case 6165:return bt+e+yt+"flex-"+e+e;case 5187:return bt+e+At(e,/(\w+).+(:[^]+)/,bt+"box-$1$2"+yt+"flex-$1$2")+e;case 5443:return bt+e+yt+"flex-item-"+At(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":yt+"grid-row-"+At(e,/flex-|-self/g,""))+e;case 4675:return bt+e+yt+"flex-line-pack"+At(e,/align-content|flex-|-self/g,"")+e;case 5548:return bt+e+yt+At(e,"shrink","negative")+e;case 5292:return bt+e+yt+At(e,"basis","preferred-size")+e;case 6060:return bt+"box-"+At(e,"-grow","")+bt+e+yt+At(e,"grow","positive")+e;case 4554:return bt+At(e,/([^-])(transform)/g,"$1"+bt+"$2")+e;case 6187:return At(At(At(e,/(zoom-|grab)/,bt+"$1"),/(image-set)/,bt+"$1"),e,"")+e;case 5495:case 3959:return At(e,/(image-set\([^]*)/,bt+"$1$`$1");case 4968:return At(At(e,/(.+:)(flex-)?(.*)/,bt+"box-pack:$3"+yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+bt+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return yt+"grid-column-align"+Mt(e,t)+e;break;case 2592:case 3360:return yt+At(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Rt(e.props,/grid-\w+-end/)}))?~Lt(e+(n=n[t].value),"span",0)?e:yt+At(e,"-start","")+e+yt+"grid-row-span:"+(~Lt(n,"span",0)?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":yt+At(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Rt(e.props,/grid-\w+-start/)}))?e:yt+At(At(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return At(e,/(.+)-inline(.+)/,bt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch(zt(e,t+1)){case 109:if(45!==zt(e,t+4))break;case 102:return At(e,/(.+:)(.+)-([^]+)/,"$1"+bt+"$2-$3$1"+xt+(108==zt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Lt(e,"stretch",0)?un(At(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return At(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return yt+n+":"+r+s+(i?yt+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===zt(e,t+6))return At(e,":",":"+bt)+e;break;case 6444:switch(zt(e,45===zt(e,14)?18:11)){case 120:return At(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+bt+(45===zt(e,14)?"inline-":"")+"box$3$1"+bt+"$2$3$1"+yt+"$2box$3")+e;case 100:return At(e,":",":"+yt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return At(e,"scroll-","scroll-snap-")+e}return e}function dn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kt:return void(e.return=un(e.value,e.length,n));case Et:return ln([Ht(e,{value:At(e.value,"@","@"+bt)})],r);case St:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Rt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yt(Ht(e,{props:[At(t,/:(read-\w+)/,":-moz-$1")]})),Yt(Ht(e,{props:[t]})),Tt(e,{props:Nt(n,r)});break;case"::placeholder":Yt(Ht(e,{props:[At(t,/:(plac\w+)/,":"+bt+"input-$1")]})),Yt(Ht(e,{props:[At(t,/:(plac\w+)/,":-moz-$1")]})),Yt(Ht(e,{props:[At(t,/:(plac\w+)/,yt+"input-$1")]})),Yt(Ht(e,{props:[t]})),Tt(e,{props:Nt(n,r)})}return""}))}}function pn(e){return en(hn("",null,null,null,[""],e=Zt(e),0,[0],e))}function hn(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,p=0,h=0,f=0,m=1,g=1,v=1,y=0,x="",b=i,w=a,S=r,k=x;g;)switch(f=y,y=qt()){case 40:if(108!=f&&58==zt(k,d-1)){-1!=Lt(k+=At(tn(y),"&","&\f"),"&\f",Ct(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=tn(y);break;case 9:case 10:case 13:case 32:k+=nn(f);break;case 92:k+=rn(Qt()-1,7);continue;case 47:switch(Gt()){case 42:case 47:Ot(mn(on(qt(),Qt()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[c++]=Dt(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=At(k,/\f/g,"")),h>0&&Dt(k)-d&&Ot(h>32?gn(k+";",r,n,d-1,l):gn(At(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(Ot(S=fn(k,t,n,c,u,i,s,x,b=[],w=[],d,a),a),123===y)if(0===u)hn(k,t,S,S,b,a,d,s,w);else switch(99===p&&110===zt(k,3)?100:p){case 100:case 108:case 109:case 115:hn(e,S,S,r&&Ot(fn(e,S,S,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:hn(k,S,S,S,[""],w,0,s,w)}}c=u=h=0,m=v=1,x=k="",d=o;break;case 58:d=1+Dt(k),h=f;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Kt())continue;switch(k+=Pt(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(Dt(k)-1)*v,v=1;break;case 64:45===Gt()&&(k+=tn(qt())),p=Gt(),u=d=Dt(x=k+=sn(Qt())),y++;break;case 45:45===f&&2==Dt(k)&&(m=0)}}return a}function fn(e,t,n,r,i,a,o,s,l,c,u,d){for(var p=i-1,h=0===i?a:[""],f=_t(h),m=0,g=0,v=0;m<r;++m)for(var y=0,x=Mt(e,p+1,p=Ct(g=o[m])),b=e;y<f;++y)(b=jt(g>0?h[y]+" "+x:At(x,/&\f/g,h[y])))&&(l[v++]=b);return Ut(e,t,n,0===i?St:s,l,c,u,d)}function mn(e,t,n,r){return Ut(e,t,n,wt,Pt(Bt),Mt(e,2,-2),0,r)}function gn(e,t,n,r,i){return Ut(e,t,n,kt,Mt(e,0,r),Mt(e,r+1,-1),r,i)}var vn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",xn="active",bn="data-styled-version",wn="6.1.17",Sn="/*!sc*/\n",kn="undefined"!=typeof window&&"HTMLElement"in window,En=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Cn={},Pn=(new Set,Object.freeze([])),Tn=Object.freeze({});function jn(e,t,n){return void 0===n&&(n=Tn),e.theme!==n.theme&&e.theme||t||n.theme}var Rn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),An=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ln=/(^-|-$)/g;function zn(e){return e.replace(An,"-").replace(Ln,"")}var Mn=/(a)(d)/gi,Dn=function(e){return String.fromCharCode(e+(e>25?39:97))};function _n(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Dn(t%52)+n;return(Dn(t%52)+n).replace(Mn,"$1-$2")}var On,Nn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Fn=function(e){return Nn(5381,e)};function In(e){return _n(Fn(e)>>>0)}function $n(e){return e.displayName||e.name||"Component"}function Vn(e){return"string"==typeof e&&!0}var Bn="function"==typeof Symbol&&Symbol.for,Wn=Bn?Symbol.for("react.memo"):60115,Un=Bn?Symbol.for("react.forward_ref"):60112,Hn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qn=((On={})[Un]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},On[Wn]=Kn,On);function Gn(e){return("type"in(t=e)&&t.type.$$typeof)===Wn?Kn:"$$typeof"in e?qn[e.$$typeof]:Hn;var t}var Qn=Object.defineProperty,Xn=Object.getOwnPropertyNames,Jn=Object.getOwnPropertySymbols,Zn=Object.getOwnPropertyDescriptor,er=Object.getPrototypeOf,tr=Object.prototype;function nr(e,t,n){if("string"!=typeof t){if(tr){var r=er(t);r&&r!==tr&&nr(e,r,n)}var i=Xn(t);Jn&&(i=i.concat(Jn(t)));for(var a=Gn(e),o=Gn(t),s=0;s<i.length;++s){var l=i[s];if(!(l in Yn||n&&n[l]||o&&l in o||a&&l in a)){var c=Zn(t,l);try{Qn(e,l,c)}catch(e){}}}}return e}function rr(e){return"function"==typeof e}function ir(e){return"object"==typeof e&&"styledComponentId"in e}function ar(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function or(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function sr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lr(e,t,n){if(void 0===n&&(n=!1),!n&&!sr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=lr(e[r],t[r]);else if(sr(t))for(var r in t)e[r]=lr(e[r],t[r]);return e}function cr(e,t){Object.defineProperty(e,"toString",{value:t})}function ur(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var dr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw ur(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(Sn);return t},e}(),pr=new Map,hr=new Map,fr=1,mr=function(e){if(pr.has(e))return pr.get(e);for(;hr.has(fr);)fr++;var t=fr++;return pr.set(e,t),hr.set(t,e),t},gr=function(e,t){fr=t+1,pr.set(e,t),hr.set(t,e)},vr="style[".concat(yn,"][").concat(bn,'="').concat(wn,'"]'),yr=new RegExp("^".concat(yn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xr=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},br=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Sn),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(yr);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(gr(u,c),xr(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},wr=function(e){for(var t=document.querySelectorAll(vr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(yn)!==xn&&(br(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Sr(){return n.nc}var kr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(yn,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(yn,xn),r.setAttribute(bn,wn);var o=Sr();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},Er=function(){function e(e){this.element=kr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw ur(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Cr=function(){function e(e){this.element=kr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Pr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Tr=kn,jr={isServer:!kn,useCSSOMInjection:!En},Rr=function(){function e(e,t,n){void 0===e&&(e=Tn),void 0===t&&(t={});var r=this;this.options=ft(ft({},jr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&kn&&Tr&&(Tr=!1,wr(this)),cr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return hr.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(yn,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(Sn)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return mr(e)},e.prototype.rehydrate=function(){!this.server&&kn&&wr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ft(ft({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Pr(n):t?new Er(n):new Cr(n)}(this.options),new dr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(mr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(mr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(mr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ar=/&/g,Lr=/^\s*\/\/.*$/gm;function zr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=zr(e.children,t)),e}))}function Mr(e){var t,n,r,i=void 0===e?Tn:e,a=i.options,o=void 0===a?Tn:a,s=i.plugins,l=void 0===s?Pn:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===St&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ar,n).replace(r,c))})),o.prefix&&u.push(dn),u.push(cn);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Lr,""),c=pn(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=zr(c,o.namespace));var d,p=[];return ln(c,function(e){var t=_t(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||ur(15),Nn(e,t.name)}),5381).toString():"",d}var Dr=new Rr,_r=Mr(),Or=e.createContext({shouldForwardProp:void 0,styleSheet:Dr,stylis:_r}),Nr=(Or.Consumer,e.createContext(void 0));function Fr(){return(0,e.useContext)(Or)}function Ir(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=Fr().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return Mr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){vt()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(Or.Provider,{value:l},e.createElement(Nr.Provider,{value:s},t.children))}var $r=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=_r);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,cr(this,(function(){throw ur(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=_r),this.name+e.hash},e}(),Vr=function(e){return e>="A"&&e<="Z"};function Br(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Vr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wr=function(e){return null==e||!1===e||""===e},Ur=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Wr(a)&&(Array.isArray(a)&&a.isCss||rr(a)?r.push("".concat(Br(i),":"),a,";"):sr(a)?r.push.apply(r,mt(mt(["".concat(i," {")],Ur(a),!1),["}"],!1)):r.push("".concat(Br(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in vn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Hr(e,t,n,r){return Wr(e)?[]:ir(e)?[".".concat(e.styledComponentId)]:rr(e)?!rr(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Hr(e(t),t,n,r):e instanceof $r?n?(e.inject(n,r),[e.getName(r)]):[e]:sr(e)?Ur(e):Array.isArray(e)?Array.prototype.concat.apply(Pn,e.map((function(e){return Hr(e,t,n,r)}))):[e.toString()];var i}function Yr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!ir(n))return!1}return!0}var Kr=Fn(wn),qr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Yr(e),this.componentId=t,this.baseHash=Nn(Kr,t),this.baseStyle=n,Rr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ar(r,this.staticRulesId);else{var i=or(Hr(this.rules,e,t,n)),a=_n(Nn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=ar(r,a),this.staticRulesId=a}else{for(var s=Nn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=or(Hr(u,e,t,n));s=Nn(s,d+c),l+=d}}if(l){var p=_n(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=ar(r,p)}}return r},e}(),Gr=e.createContext(void 0);Gr.Consumer;var Qr={};new Set;function Xr(t,n,r){var i=ir(t),a=t,o=!Vn(t),s=n.attrs,l=void 0===s?Pn:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":zn(e);Qr[n]=(Qr[n]||0)+1;var r="".concat(n,"-").concat(In(wn+n+Qr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return Vn(e)?"styled.".concat(e):"Styled(".concat($n(e),")")}(t):d,h=n.displayName&&n.componentId?"".concat(zn(n.displayName),"-").concat(n.componentId):n.componentId||u,f=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new qr(r,h,i?a.componentStyle:void 0);function x(t,n){return function(t,n,r){var i=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Gr),d=Fr(),p=t.shouldForwardProp||d.shouldForwardProp,h=jn(n,u,o)||Tn,f=function(e,t,n){for(var r,i=ft(ft({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=rr(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?ar(i[s],o[s]):"style"===s?ft(ft({},i[s]),o[s]):o[s]}return t.className&&(i.className=ar(i.className,t.className)),i}(i,n,h),m=f.as||c,g={};for(var v in f)void 0===f[v]||"$"===v[0]||"as"===v||"theme"===v&&f.theme===h||("forwardedAs"===v?g.as=f.forwardedAs:p&&!p(v,m)||(g[v]=f[v]));var y=function(e,t){var n=Fr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,f),x=ar(s,l);return y&&(x+=" "+y),f.className&&(x+=" "+f.className),g[Vn(m)&&!Rn.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,e.createElement)(m,g)}(b,t,n)}x.displayName=p;var b=e.forwardRef(x);return b.attrs=f,b.componentStyle=y,b.displayName=p,b.shouldForwardProp=m,b.foldedComponentIds=i?ar(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=h,b.target=i?a.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)lr(e,i[r],!0);return e}({},a.defaultProps,e):e}}),cr(b,(function(){return".".concat(b.styledComponentId)})),o&&nr(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Jr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Zr=function(e){return Object.assign(e,{isCss:!0})};function ei(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||sr(e))return Zr(Hr(Jr(Pn,mt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Hr(r):Zr(Hr(Jr(r,t)))}function ti(e,t,n){if(void 0===n&&(n=Tn),!t)throw ur(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,ei.apply(void 0,mt([r],i,!1)))};return r.attrs=function(r){return ti(e,t,ft(ft({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ti(e,t,ft(ft({},n),r))},r}var ni=function(e){return ti(Xr,e)},ri=ni;Rn.forEach((function(e){ri[e]=ni(e)}));var ii=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Yr(e),Rr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(or(Hr(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Rr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function ai(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=or(ei.apply(void 0,mt([e],t,!1))),i=In(r);return new $r(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=Sr(),r=or([n&&'nonce="'.concat(n,'"'),"".concat(yn,'="true"'),"".concat(bn,'="').concat(wn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw ur(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw ur(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[yn]="",n[bn]=wn,n.dangerouslySetInnerHTML={__html:r},n),a=Sr();return a&&(i.nonce=a),[e.createElement("style",ft({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Rr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw ur(2);return e.createElement(Ir,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw ur(3)}})(),"__sc-".concat(yn,"__");const oi=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=ei.apply(void 0,mt([t],n,!1)),a="sc-global-".concat(In(JSON.stringify(i))),o=new ii(i,a),s=function(t){var n=Fr(),r=e.useContext(Gr),i=e.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&l(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(i,t,n.styleSheet,r,n.stylis),function(){return o.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,Cn,n,i);else{var a=ft(ft({},t),{theme:jn(t,r,s.defaultProps)});o.renderStyles(e,a,n,i)}}return e.memo(s)})`
  :root {
    /* Light theme variables */
    --bg-primary-light: #f8f9fa;
    --bg-secondary-light: #ffffff;
    --text-primary-light: #212529;
    --text-secondary-light: #495057;
    --accent-light: #0066ff;
    --accent-hover-light: #0055d4;
    --border-light: #dee2e6;
    --shadow-light: rgba(0, 0, 0, 0.1);
    
    /* Dark theme variables */
    --bg-primary-dark: #121212;
    --bg-secondary-dark: #1e1e1e;
    --text-primary-dark: #e9ecef;
    --text-secondary-dark: #adb5bd;
    --accent-dark: #4d9fff;
    --accent-hover-dark: #3a7cc4;
    --border-dark: #2d2d2d;
    --shadow-dark: rgba(0, 0, 0, 0.3);
  }
  
  body[data-theme='light'] {
    --bg-primary: var(--bg-primary-light);
    --bg-secondary: var(--bg-secondary-light);
    --text-primary: var(--text-primary-light);
    --text-secondary: var(--text-secondary-light);
    --accent: var(--accent-light);
    --accent-hover: var(--accent-hover-light);
    --border: var(--border-light);
    --shadow: var(--shadow-light);
    --accent-rgb: 0, 102, 255; /* RGB values for --accent-light */
    --accent-hover-rgb: 0, 85, 212; /* RGB values for --accent-hover-light */
  }
  
  body[data-theme='dark'] {
    --bg-primary: var(--bg-primary-dark);
    --bg-secondary: var(--bg-secondary-dark);
    --text-primary: var(--text-primary-dark);
    --text-secondary: var(--text-secondary-dark);
    --accent: var(--accent-dark);
    --accent-hover: var(--accent-hover-dark);
    --border: var(--border-dark);
    --shadow: var(--shadow-dark);
    --accent-rgb: 77, 159, 255; /* RGB values for --accent-dark */
    --accent-hover-rgb: 58, 124, 196; /* RGB values for --accent-hover-dark */
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--accent-hover);
    }
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Apply smooth transitions for theme toggle */
  body, button, a, input, textarea, div, section, header, footer, nav {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  /* Common typography styles */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  
  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--text-secondary);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }
`;function si(e,t){-1===e.indexOf(t)&&e.push(t)}function li(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const ci={skipAnimations:!1,useManualTiming:!1};function ui(e){let t;return()=>(void 0===t&&(t=e()),t)}const di=e=>e,pi=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};class hi{constructor(){this.subscriptions=[]}add(e){return si(this.subscriptions,e),()=>li(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fi=e=>1e3*e,mi=e=>e/1e3;function gi(e,t){return t?e*(1e3/t):0}new Set;function vi(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function yi(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function xi(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function bi(e,t,n,r){if("function"===typeof t){const[i,a]=xi(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=xi(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function wi(e,t,n){const r=e.getProps();return bi(r,t,void 0!==n?n:r.custom,e)}const Si=ui((()=>void 0!==window.ScrollTimeline));class ki{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>e.finished)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>Si()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Ei extends ki{then(e,t){return this.finished.finally(e).then((()=>{}))}}new Set(["borderWidth","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderRadius","radius","borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius","width","maxWidth","height","maxHeight","top","right","bottom","left","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","margin","marginTop","marginRight","marginBottom","marginLeft","backgroundPositionX","backgroundPositionY"]);const Ci={layout:0,mainThread:0,waapi:0},Pi={value:null,addProjectionMetrics:null},Ti=e=>Array.isArray(e)&&"number"===typeof e[0],ji={};function Ri(e,t){const n=ui(e);return()=>ji[t]??n()}const Ai=Ri((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Tv){return!1}return!0}),"linearEasing"),Li=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(a/(i-1))+", ";return`linear(${r.substring(0,r.length-2)})`},zi=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Mi={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zi([0,.65,.55,1]),circOut:zi([.55,0,1,.45]),backIn:zi([.31,.01,.66,-.59]),backOut:zi([.33,1.53,.69,.99])};function Di(e,t){return e?"function"===typeof e&&Ai()?Li(e,t):Ti(e)?zi(e):Array.isArray(e)?e.map((e=>Di(e,t)||Mi.easeOut)):Mi[e]:void 0}function _i(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=Di(s,i);Array.isArray(d)&&(u.easing=d),Pi.value&&Ci.waapi++;const p=e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal",pseudoElement:c});return Pi.value&&p.finished.finally((()=>{Ci.waapi--})),p}new WeakMap;function Oi(e,t){return e?.[t]??e?.default??e}const Ni=2e4;function Fi(e){let t=0;let n=e.next(t);for(;!n.done&&t<Ni;)t+=50,n=e.next(t);return t>=Ni?1/0:t}function Ii(e){return"function"===typeof e&&"applyToOptions"in e}function $i(e){return Boolean("function"===typeof e&&Ai()||!e||"string"===typeof e&&(e in Mi||Ai())||Ti(e)||Array.isArray(e)&&e.every($i))}function Vi(e,t){e.timeline=t,e.onfinish=null}const Bi=["read","resolveKeyframes","update","preRender","render","postRender"];function Wi(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Bi.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){o.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&Pi.value&&Pi.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,u.process(e)))}};return u}(a,t?n:void 0),e)),{}),{read:s,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:p}=o,h=()=>{const a=ci.useManualTiming?i.timestamp:performance.now();n=!1,ci.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},f=Bi.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(h)),s.schedule(t,a,o)},t}),{});return{schedule:f,cancel:e=>{for(let t=0;t<Bi.length;t++)o[Bi[t]].cancel(e)},state:i,steps:o}}const{schedule:Ui,cancel:Hi,state:Yi,steps:Ki}=Wi("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:di,!0),{schedule:qi,cancel:Gi}=Wi(queueMicrotask,!1);let Qi;function Xi(){Qi=void 0}const Ji={now:()=>(void 0===Qi&&Ji.set(Yi.isProcessing||ci.useManualTiming?Yi.timestamp:performance.now()),Qi),set:e=>{Qi=e,queueMicrotask(Xi)}},Zi={x:!1,y:!1};function ea(){return Zi.x||Zi.y}function ta(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}function na(e,t){const n=ta(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ra(e){return!("touch"===e.pointerType||ea())}const ia=(e,t)=>!!t&&(e===t||ia(e,t.parentElement)),aa=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary,oa=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const sa=new WeakSet;function la(e){return t=>{"Enter"===t.key&&e(t)}}function ca(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function ua(e){return aa(e)&&!ea()}function da(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=na(e,n),o=e=>{const r=e.currentTarget;if(!ua(e)||sa.has(r))return;sa.add(r);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),ua(e)&&sa.has(r)&&(sa.delete(r),"function"===typeof a&&a(e,{success:t}))},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||ia(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),e instanceof HTMLElement&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=la((()=>{if(sa.has(n))return;ca(n,"down");const e=la((()=>{ca(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>ca(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,i))),t=e,oa.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),a}const pa={current:void 0};class ha{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.6.5",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Ji.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Ji.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new hi);const n=this.events[e].add(t);return"change"===e?()=>{n(),Ui.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return pa.current&&pa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ji.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return gi(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fa(e,t){return new ha(e,t)}Bi.reduce(((e,t)=>(e[t]=e=>Hi(e),e)),{});const ma=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ga=new Set(ma),va=new Set(["width","height","top","left","right","bottom",...ma]),ya=e=>Array.isArray(e),xa=e=>ya(e)?e[e.length-1]||0:e;function ba(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,fa(n))}const wa=e=>Boolean(e&&e.getVelocity);function Sa(e,t){const n=e.getValue("willChange");if(r=n,Boolean(wa(r)&&r.add))return n.add(t);if(!n&&ci.WillChange){const n=new ci.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}const ka=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Ea="data-"+ka("framerAppearId");function Ca(e){return e.props[Ea]}const Pa=!1,Ta=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function ja(e,t,n,r){if(e===t&&n===r)return di;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=Ta(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:Ta(i(e),t,r)}const Ra=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Aa=e=>t=>1-e(1-t),La=ja(.33,1.53,.69,.99),za=Aa(La),Ma=Ra(za),Da=e=>(e*=2)<1?.5*za(e):.5*(2-Math.pow(2,-10*(e-1))),_a=e=>1-Math.sin(Math.acos(e)),Oa=Aa(_a),Na=Ra(_a),Fa=e=>/^0[^.\s]+$/u.test(e);const Ia=(e,t,n)=>n>t?t:n<e?e:n,$a={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Va={...$a,transform:e=>Ia(0,1,e)},Ba={...$a,default:1},Wa=e=>Math.round(1e5*e)/1e5,Ua=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Ha=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ya=(e,t)=>n=>Boolean("string"===typeof n&&Ha.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ka=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,a,o,s]=r.match(Ua);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},qa={...$a,transform:e=>Math.round((e=>Ia(0,255,e))(e))},Ga={test:Ya("rgb","red"),parse:Ka("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+qa.transform(t)+", "+qa.transform(n)+", "+qa.transform(r)+", "+Wa(Va.transform(i))+")"}};const Qa={test:Ya("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Ga.transform},Xa=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),Ja=Xa("deg"),Za=Xa("%"),eo=Xa("px"),to=Xa("vh"),no=Xa("vw"),ro={...Za,parse:e=>Za.parse(e)/100,transform:e=>Za.transform(100*e)},io={test:Ya("hsl","hue"),parse:Ka("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+Za.transform(Wa(n))+", "+Za.transform(Wa(r))+", "+Wa(Va.transform(i))+")"}},ao={test:e=>Ga.test(e)||Qa.test(e)||io.test(e),parse:e=>Ga.test(e)?Ga.parse(e):io.test(e)?io.parse(e):Qa.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Ga.transform(e):io.transform(e)},oo=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const so="number",lo="color",co=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function uo(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(co,(e=>(ao.test(e)?(r.color.push(a),i.push(lo),n.push(ao.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(so),n.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:n,split:o,indexes:r,types:i}}function po(e){return uo(e).values}function ho(e){const{split:t,types:n}=uo(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===so?Wa(e[a]):t===lo?ao.transform(e[a]):e[a]}return i}}const fo=e=>"number"===typeof e?0:e;const mo={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(Ua)?.length||0)+(e.match(oo)?.length||0)>0},parse:po,createTransformer:ho,getAnimatableNone:function(e){const t=po(e);return ho(e)(t.map(fo))}},go=new Set(["brightness","contrast","saturate","opacity"]);function vo(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Ua)||[];if(!r)return e;const i=n.replace(r,"");let a=go.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const yo=/\b([a-z-]*)\(.*?\)/gu,xo={...mo,getAnimatableNone:e=>{const t=e.match(yo);return t?t.map(vo).join(" "):e}},bo={borderWidth:eo,borderTopWidth:eo,borderRightWidth:eo,borderBottomWidth:eo,borderLeftWidth:eo,borderRadius:eo,radius:eo,borderTopLeftRadius:eo,borderTopRightRadius:eo,borderBottomRightRadius:eo,borderBottomLeftRadius:eo,width:eo,maxWidth:eo,height:eo,maxHeight:eo,top:eo,right:eo,bottom:eo,left:eo,padding:eo,paddingTop:eo,paddingRight:eo,paddingBottom:eo,paddingLeft:eo,margin:eo,marginTop:eo,marginRight:eo,marginBottom:eo,marginLeft:eo,backgroundPositionX:eo,backgroundPositionY:eo},wo={rotate:Ja,rotateX:Ja,rotateY:Ja,rotateZ:Ja,scale:Ba,scaleX:Ba,scaleY:Ba,scaleZ:Ba,skew:Ja,skewX:Ja,skewY:Ja,distance:eo,translateX:eo,translateY:eo,translateZ:eo,x:eo,y:eo,z:eo,perspective:eo,transformPerspective:eo,opacity:Va,originX:ro,originY:ro,originZ:eo},So={...$a,transform:Math.round},ko={...bo,...wo,zIndex:So,size:eo,fillOpacity:Va,strokeOpacity:Va,numOctaves:So},Eo={...ko,color:ao,backgroundColor:ao,outlineColor:ao,fill:ao,stroke:ao,borderColor:ao,borderTopColor:ao,borderRightColor:ao,borderBottomColor:ao,borderLeftColor:ao,filter:xo,WebkitFilter:xo},Co=e=>Eo[e];function Po(e,t){let n=Co(e);return n!==xo&&(n=mo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const To=new Set(["auto","none","0"]);const jo=e=>180*e/Math.PI,Ro=e=>{const t=jo(Math.atan2(e[1],e[0]));return Lo(t)},Ao={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Ro,rotateZ:Ro,skewX:e=>jo(Math.atan(e[1])),skewY:e=>jo(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Lo=e=>((e%=360)<0&&(e+=360),e),zo=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Mo=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Do={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:zo,scaleY:Mo,scale:e=>(zo(e)+Mo(e))/2,rotateX:e=>Lo(jo(Math.atan2(e[6],e[5]))),rotateY:e=>Lo(jo(Math.atan2(-e[2],e[0]))),rotateZ:Ro,rotate:Ro,skewX:e=>jo(Math.atan(e[4])),skewY:e=>jo(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function _o(e){return e.includes("scale")?1:0}function Oo(e,t){if(!e||"none"===e)return _o(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Do,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Ao,i=t}if(!i)return _o(t);const a=r[t],o=i[1].split(",").map(No);return"function"===typeof a?a(o):o[a]}function No(e){return parseFloat(e.trim())}const Fo=e=>e===$a||e===eo,Io=new Set(["x","y","z"]),$o=ma.filter((e=>!Io.has(e)));const Vo={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return Oo(n,"x")},y:(e,t)=>{let{transform:n}=t;return Oo(n,"y")}};Vo.translateX=Vo.x,Vo.translateY=Vo.y;const Bo=new Set;let Wo=!1,Uo=!1;function Ho(){if(Uo){const e=Array.from(Bo).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return $o.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;e.getValue(n)?.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Uo=!1,Wo=!1,Bo.forEach((e=>e.complete())),Bo.clear()}function Yo(){Bo.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Uo=!0)}))}class Ko{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Bo.add(this),Wo||(Wo=!0,Ui.read(Yo),Ui.resolveKeyframes(Ho))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Bo.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Bo.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const qo=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Go=e=>t=>"string"===typeof t&&t.startsWith(e),Qo=Go("--"),Xo=Go("var(--"),Jo=e=>!!Xo(e)&&Zo.test(e.split("/*")[0].trim()),Zo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,es=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ts(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=es.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return qo(e)?parseFloat(e):e}return Jo(i)?ts(i,t,n+1):i}const ns=e=>t=>t.test(e),rs=[$a,eo,Za,Ja,no,to,{test:e=>"auto"===e,parse:e=>e}],is=e=>rs.find(ns(e));class as extends Ko{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),Jo(n))){const r=ts(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!va.has(n)||2!==e.length)return;const[r,i]=e,a=is(r),o=is(i);if(a!==o)if(Fo(a)&&Fo(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||Fa(r))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!To.has(t)&&uo(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=Po(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vo[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=Vo[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const os=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!mo.test(e)&&"0"!==e||e.startsWith("url(")));function ss(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=os(i,t),s=os(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Ii(n))&&r)}const ls=e=>null!==e;function cs(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(ls),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}class us{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ji.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Yo(),Ho()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ji.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:i,delay:a,onComplete:o,onUpdate:s,isGenerator:l}=this.options;if(!l&&!ss(e,n,r,i)){if(Pa||!a)return s&&s(cs(e,this.options,t)),o&&o(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const ds=(e,t,n)=>e+(t-e)*n;function ps(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function hs(e,t){return n=>n>0?t:e}const fs=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ms=[Qa,Ga,io];function gs(e){const t=(e=>ms.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===io&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=ps(i,e,t+1/3),o=ps(i,e,t),s=ps(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const vs=(e,t)=>{const n=gs(e),r=gs(t);if(!n||!r)return hs(e,t);const i={...n};return e=>(i.red=fs(n.red,r.red,e),i.green=fs(n.green,r.green,e),i.blue=fs(n.blue,r.blue,e),i.alpha=ds(n.alpha,r.alpha,e),Ga.transform(i))},ys=(e,t)=>n=>t(e(n)),xs=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(ys)},bs=new Set(["none","hidden"]);function ws(e,t){return n=>ds(e,t,n)}function Ss(e){return"number"===typeof e?ws:"string"===typeof e?Jo(e)?hs:ao.test(e)?vs:Cs:Array.isArray(e)?ks:"object"===typeof e?ao.test(e)?vs:Es:hs}function ks(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>Ss(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Es(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Ss(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const Cs=(e,t)=>{const n=mo.createTransformer(t),r=uo(e),i=uo(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?bs.has(e)&&!i.values.length||bs.has(t)&&!r.values.length?function(e,t){return bs.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):xs(ks(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):hs(e,t)};function Ps(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return ds(e,t,n);return Ss(e)(e,t)}function Ts(e,t,n){const r=Math.max(t-5,0);return gi(n-e(r),t-r)}const js={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Rs=.001;function As(e){let t,n,{duration:r=js.duration,bounce:i=js.bounce,velocity:a=js.velocity,mass:o=js.mass}=e;fi(js.maxDuration);let s=1-i;s=Ia(js.minDamping,js.maxDamping,s),r=Ia(js.minDuration,js.maxDuration,mi(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=zs(e,s),l=Math.exp(-n);return Rs-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=zs(Math.pow(e,2),s);return(-t(e)+Rs>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Ls;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=fi(r),isNaN(l))return{stiffness:js.stiffness,damping:js.damping,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const Ls=12;function zs(e,t){return e*Math.sqrt(1-t*t)}const Ms=["duration","bounce"],Ds=["stiffness","damping","mass"];function _s(e,t){return t.some((t=>void 0!==e[t]))}function Os(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:js.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:js.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:js.velocity,stiffness:js.stiffness,damping:js.damping,mass:js.mass,isResolvedFromDuration:!1,...e};if(!_s(e,Ds)&&_s(e,Ms))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*Ia(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:js.mass,stiffness:i,damping:a}}else{const n=As(e);t={...t,...n,mass:js.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-mi(n.velocity||0)}),f=p||0,m=c/(2*Math.sqrt(l*u)),g=o-a,v=mi(Math.sqrt(l/u)),y=Math.abs(g)<5;let x;if(r||(r=y?js.restSpeed.granular:js.restSpeed.default),i||(i=y?js.restDelta.granular:js.restDelta.default),m<1){const e=zs(v,m);x=t=>{const n=Math.exp(-m*v*t);return o-n*((f+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>o-Math.exp(-v*e)*(g+(f+v*g)*e);else{const e=v*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return o-n*((f+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const b={calculatedDuration:h&&d||null,next:e=>{const t=x(e);if(h)s.done=e>=d;else{let n=0;m<1&&(n=0===e?fi(f):Ts(x,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(Fi(b),Ni),t=Li((t=>b.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return b}function Ns(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/i),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);h.done=Math.abs(t)<=u,h.value=h.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,S=Os({keyframes:[h.value,f(h.value)],velocity:Ts(x,e,h.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,b(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&b(e),h)}}}Os.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(Fi(n),Ni);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:mi(r)}}(e,100,Os);return e.ease=Ai()?t.ease:"easeOut",e.duration=fi(t.duration),e.type="keyframes",e};const Fs=ja(.42,0,1,1),Is=ja(0,0,.58,1),$s=ja(.42,0,.58,1),Vs={linear:di,easeIn:Fs,easeInOut:$s,easeOut:Is,circIn:_a,circInOut:Na,circOut:Oa,backIn:za,backInOut:Ma,backOut:La,anticipate:Da},Bs=e=>{if(Ti(e)){e.length;const[t,n,r,i]=e;return ja(t,n,r,i)}return"string"===typeof e?Vs[e]:e};function Ws(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||Ps,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||di:t;n=xs(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=pi(e[r],e[r+1],n);return s[r](i)};return n?t=>c(Ia(e[0],e[a-1],t)):c}function Us(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=pi(0,t,r);e.push(ds(n,1,i))}}(t,e.length-1),t}function Hs(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Bs):Bs(i),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Us(n),t),l=Ws(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map((()=>u||$s)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Ys=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>Ui.update(t,!0),stop:()=>Hi(t),now:()=>Yi.isProcessing?Yi.timestamp:Ji.now()}},Ks={decay:Ns,inertia:Ns,tween:Hs,keyframes:Hs,spring:Os},qs=e=>e/100;class Gs extends us{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:i}=this.options,a=r?.KeyframeResolver||Ko;this.resolver=new a(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=this.options,o=Ii(t)?t:Ks[t]||Hs;let s,l;o!==Hs&&"number"!==typeof e[0]&&(s=xs(qs,Ps(e[0],e[1])),e=[0,100]);const c=o({...this.options,keyframes:e});"mirror"===i&&(l=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===c.calculatedDuration&&(c.calculatedDuration=Fi(c));const{calculatedDuration:u}=c,d=u+r;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;Ci.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:i,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:s,calculatedDuration:l,totalDuration:c,resolvedDuration:u}=n;if(null===this.startTime)return i.next(0);const{delay:d,repeat:p,repeatType:h,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let y=this.currentTime,x=i;if(p){const e=Math.min(this.currentTime,c)/u;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,p+1);Boolean(t%2)&&("reverse"===h?(n=1-n,f&&(n-=f/u)):"mirror"===h&&(x=a)),y=Ia(0,1,n)*u}const b=v?{done:!1,value:s[0]}:x.next(y);o&&(b.value=o(b.value));let{done:w}=b;v||null===l||(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&void 0!==r&&(b.value=cs(s,this.options,r)),m&&m(b.value),S&&this.finish(),b}get duration(){const{resolved:e}=this;return e?mi(e.calculatedDuration):0}get time(){return mi(this.currentTime)}set time(e){e=fi(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=mi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Ys,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=n??this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),Ci.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}}const Qs=new Set(["opacity","clipPath","filter","transform"]),Xs=ui((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const Js={anticipate:Da,backInOut:Ma,circInOut:Na};class Zs extends us{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:i}=this.options;this.resolver=new as(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:i,type:a,motionValue:o,name:s,startTime:l}=this.options;if(!o.owner||!o.owner.current)return!1;var c;if("string"===typeof i&&Ai()&&i in Js&&(i=Js[i]),Ii((c=this.options).type)||"spring"===c.type||!$i(c.ease)){const{onComplete:t,onUpdate:o,motionValue:s,element:l,...c}=this.options,u=function(e,t){const n=new Gs({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<2e4;)r=n.sample(a),i.push(r.value),a+=10;return{times:void 0,keyframes:i,duration:a-10,ease:"linear"}}(e,c);1===(e=u.keyframes).length&&(e[1]=e[0]),n=u.duration,r=u.times,i=u.ease,a="keyframes"}const u=_i(o.owner.current,s,e,{...this.options,duration:n,times:r,ease:i});return u.startTime=l??this.calcStartTime(),this.pendingTimeline?(Vi(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:n}=this.options;o.set(cs(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:r,type:a,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return mi(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return mi(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=fi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return di;const{animation:n}=t;Vi(n,e)}else this.pendingTimeline=e;return di}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:i,ease:a,times:o}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...c}=this.options,u=new Gs({...c,keyframes:n,duration:r,type:i,ease:a,times:o,isGenerator:!0}),d=fi(this.time);e.setWithVelocity(u.sample(d-10).value,u.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return Xs()&&n&&Qs.has(n)&&("transform"!==n||!l)&&!s&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}}const el={type:"spring",stiffness:500,damping:25,restSpeed:10},tl={type:"keyframes",duration:.8},nl={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rl=(e,t)=>{let{keyframes:n}=t;return n.length>2?tl:ga.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:el:nl};const il=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=Oi(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=fi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||(u={...u,...rl(e,u)}),u.duration&&(u.duration=fi(u.duration)),u.repeatDelay&&(u.repeatDelay=fi(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(Pa||ci.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=cs(u.keyframes,s);if(void 0!==e)return Ui.update((()=>{u.onUpdate(e),u.onComplete()})),new Ei([])}return!a&&Zs.supports(u)?new Zs(u):new Gs(u)}};function al(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function ol(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&al(c,u))continue;const i={delay:n,...Oi(a||{},u)};let o=!1;if(window.MotionHandoffAnimation){const t=Ca(e);if(t){const e=window.MotionHandoffAnimation(t,u,Ui);null!==e&&(i.startTime=e,o=!0)}}Sa(e,u),t.start(il(u,t,r,e.shouldReduceMotion&&va.has(u)?{type:!1}:i,e,o));const d=t.animation;d&&l.push(d)}return o&&Promise.all(l).then((()=>{Ui.update((()=>{o&&function(e,t){const n=wi(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)ba(e,o,xa(a[o]))}(e,o)}))})),l}function sl(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=wi(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(ol(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(ll).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(sl(e,t,{...a,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then((()=>t()))}return Promise.all([a(),o(n.delay)])}function ll(e,t){return e.sortNodePosition(t)}function cl(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function ul(e){return"string"===typeof e||Array.isArray(e)}const dl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],pl=["initial",...dl],hl=pl.length;function fl(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&fl(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<hl;n++){const r=pl[n],i=e.props[r];(ul(i)||!1===i)&&(t[r]=i)}return t}const ml=[...dl].reverse(),gl=dl.length;function vl(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>sl(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=sl(e,t,r);else{const i="function"===typeof t?wi(e,t,r.custom):t;n=Promise.all(ol(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function yl(e){let t=vl(e),n=wl(),r=!0;const i=t=>(n,r)=>{const i=wi(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=fl(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<gl;t++){const p=ml[t],h=n[p],f=void 0!==o[p]?o[p]:s[p],m=ul(f),g=p===a?h.isActive:null;!1===g&&(d=t);let v=f===s[p]&&f!==o[p]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),h.protectedKeys={...u},!h.isActive&&null===g||!f&&!h.prevProp||yi(f)||"boolean"===typeof f)continue;const y=xl(h.prevProp,f);let x=y||p===a&&h.isActive&&!v&&m||t>d&&m,b=!1;const w=Array.isArray(f)?f:[f];let S=w.reduce(i(p),{});!1===g&&(S={});const{prevResolvedValues:k={}}=h,E={...k,...S},C=t=>{x=!0,c.has(t)&&(b=!0,c.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in E){const t=S[e],n=k[e];if(u.hasOwnProperty(e))continue;let r=!1;r=ya(t)&&ya(n)?!cl(t,n):t!==n,r?void 0!==t&&null!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):h.protectedKeys[e]=!0}h.prevProp=f,h.prevResolvedValues=S,h.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(x=!1);x&&(!(v&&y)||b)&&l.push(...w.map((e=>({animation:e,options:{type:p}}))))}if(c.size){const t={};if("boolean"!==typeof o.initial){const n=wi(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null})),l.push({animation:t})}let p=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,r))),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=wl(),r=!0}}}function xl(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!cl(t,e)}function bl(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wl(){return{animate:bl(!0),whileInView:bl(),whileHover:bl(),whileTap:bl(),whileDrag:bl(),whileFocus:bl(),exit:bl()}}class Sl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let kl=0;const El={animation:{Feature:class extends Sl{constructor(e){super(e),e.animationState||(e.animationState=yl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();yi(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends Sl{constructor(){super(...arguments),this.id=kl++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Cl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Pl(e){return{point:{x:e.pageX,y:e.pageY}}}function Tl(e,t,n,r){return Cl(e,t,(e=>t=>aa(t)&&e(t,Pl(t)))(n),r)}function jl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function Rl(e){return e.max-e.min}function Al(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=ds(t.min,t.max,e.origin),e.scale=Rl(n)/Rl(t),e.translate=ds(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function Ll(e,t,n,r){Al(e.x,t.x,n.x,r?r.originX:void 0),Al(e.y,t.y,n.y,r?r.originY:void 0)}function zl(e,t,n){e.min=n.min+t.min,e.max=e.min+Rl(t)}function Ml(e,t,n){e.min=t.min-n.min,e.max=e.min+Rl(t)}function Dl(e,t,n){Ml(e.x,t.x,n.x),Ml(e.y,t.y,n.y)}const _l=()=>({x:{min:0,max:0},y:{min:0,max:0}});function Ol(e){return[e("x"),e("y")]}function Nl(e){return void 0===e||1===e}function Fl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Nl(t)||!Nl(n)||!Nl(r)}function Il(e){return Fl(e)||$l(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function $l(e){return Vl(e.x)||Vl(e.y)}function Vl(e){return e&&"0%"!==e}function Bl(e,t,n){return n+t*(e-n)}function Wl(e,t,n,r,i){return void 0!==i&&(e=Bl(e,i,r)),Bl(e,n,r)+t}function Ul(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Wl(e.min,t,n,r,i),e.max=Wl(e.max,t,n,r,i)}function Hl(e,t){let{x:n,y:r}=t;Ul(e.x,n.translate,n.scale,n.originPoint),Ul(e.y,r.translate,r.scale,r.originPoint)}const Yl=.999999999999,Kl=1.0000000000001;function ql(e,t){e.min=e.min+t,e.max=e.max+t}function Gl(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Ul(e,t,n,ds(e.min,e.max,i),r)}function Ql(e,t){Gl(e.x,t.x,t.scaleX,t.scale,t.originX),Gl(e.y,t.y,t.scaleY,t.scale,t.originY)}function Xl(e,t){return jl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Jl=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Zl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const ec=(e,t)=>Math.abs(e-t);class tc{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=ic(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=ec(e.x,t.x),r=ec(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=Yi;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=nc(t,this.transformPagePoint),Ui.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=ic("pointercancel"===e.type?this.lastMoveEventInfo:nc(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!aa(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=nc(Pl(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=Yi;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,ic(a,this.history)),this.removeListeners=xs(Tl(this.contextWindow,"pointermove",this.handlePointerMove),Tl(this.contextWindow,"pointerup",this.handlePointerUp),Tl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Hi(this.updatePoint)}}function nc(e,t){return t?{point:t(e.point)}:e}function rc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ic(e,t){let{point:n}=e;return{point:n,delta:rc(n,oc(t)),offset:rc(n,ac(t)),velocity:sc(t,.1)}}function ac(e){return e[0]}function oc(e){return e[e.length-1]}function sc(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=oc(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>fi(t)));)n--;if(!r)return{x:0,y:0};const a=mi(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function lc(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function cc(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const uc=.35;function dc(e,t,n){return{min:pc(e,t),max:pc(e,n)}}function pc(e,t){return"number"===typeof e?e:e[t]||0}const hc=new WeakMap;class fc{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new tc(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Pl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?Zi[a]?null:(Zi[a]=!0,()=>{Zi[a]=!1}):Zi.x||Zi.y?null:(Zi.x=Zi.y=!0,()=>{Zi.x=Zi.y=!1}),!this.openDragLock))return;var a;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ol((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Za.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Rl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&Ui.postRender((()=>i(e,t))),Sa(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Ol((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Jl(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&Ui.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!mc(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?ds(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?ds(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Zl(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:lc(e.x,r,a),y:lc(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:uc;return!1===e?e=0:!0===e&&(e=uc),{x:dc(e,"left","right"),y:dc(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&Ol((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Zl(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Xl(e,n),{scroll:i}=t;return i&&(ql(r.x,i.offset.x),ql(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:cc(e.x,t.x),y:cc(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=jl(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=Ol((o=>{if(!mc(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Sa(this.visualElement,e),n.start(il(e,n,0,t,this.visualElement,!1))}stopAnimation(){Ol((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Ol((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Ol((t=>{const{drag:n}=this.getProps();if(!mc(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-ds(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Zl(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ol((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=Rl(e),i=Rl(t);return i>r?n=pi(t.min,t.max-r,e.min):r>i&&(n=pi(e.min,e.max-i,t.min)),Ia(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Ol((t=>{if(!mc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(ds(i,a,r[t]))}))}addListeners(){if(!this.visualElement.current)return;hc.set(this.visualElement,this);const e=Tl(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Zl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),Ui.read(t);const i=Cl(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Ol((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=uc,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function mc(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const gc=e=>(t,n)=>{e&&Ui.postRender((()=>e(t,n)))};const vc=(0,e.createContext)(null);function yc(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(vc);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:a}=n,o=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return a(o)}),[t]);const s=(0,e.useCallback)((()=>t&&i&&i(o)),[o,i,t]);return!r&&i?[!1,s]:[!0]}const xc=(0,e.createContext)({}),bc=(0,e.createContext)({}),wc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Sc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const kc={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!eo.test(e))return e;e=parseFloat(e)}return`${Sc(e,t.target.x)}% ${Sc(e,t.target.y)}%`}},Ec={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=mo.parse(e);if(a.length>5)return i;const o=mo.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=ds(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}},Cc={};class Pc extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)Cc[t]=e[t],Qo(t)&&(Cc[t].isCSSVariable=!0)}(jc),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),wc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Ui.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),qi.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Tc(t){const[n,r]=yc(),i=(0,e.useContext)(xc);return(0,dt.jsx)(Pc,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(bc),isPresent:n,safeToRemove:r})}const jc={borderRadius:{...kc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kc,borderTopRightRadius:kc,borderBottomLeftRadius:kc,borderBottomRightRadius:kc,boxShadow:Ec};const Rc=(e,t)=>e.depth-t.depth;class Ac{constructor(){this.children=[],this.isDirty=!1}add(e){si(this.children,e),this.isDirty=!0}remove(e){li(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Rc),this.isDirty=!1,this.children.forEach(e)}}function Lc(e,t){const n=Ji.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(Hi(r),e(o-t))};return Ui.read(r,!0),()=>Hi(r)}function zc(e){const t=wa(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Mc=["TopLeft","TopRight","BottomLeft","BottomRight"],Dc=Mc.length,_c=e=>"string"===typeof e?parseFloat(e):e,Oc=e=>"number"===typeof e||eo.test(e);function Nc(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Fc=$c(0,.5,Oa),Ic=$c(.5,.95,di);function $c(e,t,n){return r=>r<e?0:r>t?1:n(pi(e,t,r))}function Vc(e,t){e.min=t.min,e.max=t.max}function Bc(e,t){Vc(e.x,t.x),Vc(e.y,t.y)}function Wc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Uc(e,t,n,r,i){return e=Bl(e-=t,1/n,r),void 0!==i&&(e=Bl(e,1/i,r)),e}function Hc(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Za.test(t)&&(t=parseFloat(t),t=ds(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=ds(a.min,a.max,r);e===a&&(s-=t),e.min=Uc(e.min,t,n,s,i),e.max=Uc(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Yc=["x","scaleX","originX"],Kc=["y","scaleY","originY"];function qc(e,t,n,r){Hc(e.x,t,Yc,n?n.x:void 0,r?r.x:void 0),Hc(e.y,t,Kc,n?n.y:void 0,r?r.y:void 0)}function Gc(e){return 0===e.translate&&1===e.scale}function Qc(e){return Gc(e.x)&&Gc(e.y)}function Xc(e,t){return e.min===t.min&&e.max===t.max}function Jc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Zc(e,t){return Jc(e.x,t.x)&&Jc(e.y,t.y)}function eu(e){return Rl(e.x)/Rl(e.y)}function tu(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class nu{constructor(){this.members=[]}add(e){si(this.members,e),e.scheduleRender()}remove(e){if(li(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const ru={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},iu=["","X","Y","Z"],au={visibility:"hidden"};let ou=0;function su(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function lu(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Ca(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ui,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&lu(r)}function cu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=ou++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pi.value&&(ru.nodes=ru.calculatedTargetDeltas=ru.calculatedProjections=0),this.nodes.forEach(pu),this.nodes.forEach(xu),this.nodes.forEach(bu),this.nodes.forEach(hu),Pi.addProjectionMetrics&&Pi.addProjectionMetrics(ru)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Ac)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new hi),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Lc(r,250),wc.hasAnimatedSinceResize&&(wc.hasAnimatedSinceResize=!1,this.nodes.forEach(yu))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||Pu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!Zc(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...Oi(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||yu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Hi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lu(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(mu);this.isUpdating||this.nodes.forEach(gu),this.isUpdating=!1,this.nodes.forEach(vu),this.nodes.forEach(uu),this.nodes.forEach(du),this.clearAllSnapshots();const e=Ji.now();Yi.delta=Ia(0,1e3/60,e-Yi.timestamp),Yi.timestamp=e,Yi.isProcessing=!0,Ki.update.process(Yi),Ki.preRender.process(Yi),Ki.render.process(Yi),Yi.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(fu),this.sharedNodes.forEach(Su)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ui.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ui.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||Rl(this.snapshot.measuredBox.x)||Rl(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Qc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Il(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Ru((r=n).x),Ru(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Lu))){const{scroll:e}=this.root;e&&(ql(t.x,e.offset.x),ql(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(Bc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Bc(t,e),ql(t.x,i.offset.x),ql(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Bc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Ql(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Il(e.latestValues)&&Ql(n,e.latestValues)}return Il(this.latestValues)&&Ql(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Bc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Il(e.latestValues))continue;Fl(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Bc(r,e.measurePageBox()),qc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Il(this.latestValues)&&qc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Yi.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(this.layout&&(r||i)){if(this.resolvedRelativeTargetAt=Yi.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Dl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Bc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,o,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,o=this.relativeTarget,s=this.relativeParent.target,zl(a.x,o.x,s.x),zl(a.y,o.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Bc(this.target,this.layout.layoutBox),Hl(this.target,this.targetDelta)):Bc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Dl(this.relativeTargetOrigin,this.target,e.target),Bc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Pi.value&&ru.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Fl(this.parent.latestValues)&&!$l(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Yi.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;Bc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Ql(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Hl(e,o)),r&&Il(a.latestValues)&&Ql(e,a.latestValues))}t.x<Kl&&t.x>Yl&&(t.x=1),t.y<Kl&&t.y>Yl&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(Wc(this.prevProjectionDelta.x,this.projectionDelta.x),Wc(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),Ll(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&tu(this.projectionDelta.x,this.prevProjectionDelta.x)&&tu(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),Pi.value&&ru.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Cu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;ku(a.x,e.x,n),ku(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dl(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){Eu(e.x,t.x,n.x,r),Eu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Xc(e.x,t.x)&&Xc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Bc(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=ds(0,void 0!==n.opacity?n.opacity:1,Fc(r)),e.opacityExit=ds(void 0!==t.opacity?t.opacity:1,0,Ic(r))):a&&(e.opacity=ds(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let o=0;o<Dc;o++){const i=`border${Mc[o]}Radius`;let a=Nc(t,i),s=Nc(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Oc(a)===Oc(s)?(e[i]=Math.max(ds(_c(a),_c(s),r),0),(Za.test(s)||Za.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=ds(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Hi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ui.update((()=>{wc.hasAnimatedSinceResize=!0,Ci.layout++,this.currentAnimation=function(e,t,n){const r=wa(e)?e:fa(e);return r.start(il("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Ci.layout--},onComplete:()=>{Ci.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Au(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Rl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Rl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Bc(t,n),Ql(t,i),Ll(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new nu);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&su("z",e,r,this.animationValues);for(let i=0;i<iu.length;i++)su(`rotate${iu[i]}`,e,r,this.animationValues),su(`skew${iu[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return au;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=zc(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=zc(e?.pointerEvents)||""),this.hasProjected&&!Il(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const i=r.animationValues||r.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i),n&&(t.transform=n(i,t.transform));const{x:a,y:o}=this.projectionDelta;t.transformOrigin=`${100*a.origin}% ${100*o.origin}% 0`,r.animationValues?t.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:t.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const s in Cc){if(void 0===i[s])continue;const{correct:e,applyTo:n,isCSSVariable:a}=Cc[s],o="none"===t.transform?i[s]:e(i[s],r);if(n){const e=n.length;for(let r=0;r<e;r++)t[n[r]]=o}else a?this.options.visualElement.renderState.vars[s]=o:t[s]=o}return this.options.layoutId&&(t.pointerEvents=r===this?zc(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop())),this.root.nodes.forEach(mu),this.root.sharedNodes.clear()}}}function uu(e){e.updateLayout()}function du(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;"size"===i?Ol((e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=Rl(r);r.min=n[e].min,r.max=r.min+i})):Au(i,t.layoutBox,n)&&Ol((r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=Rl(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};Ll(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?Ll(s,e.applyTransform(r,!0),t.measuredBox):Ll(s,n,t.layoutBox);const l=!Qc(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Dl(o,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Dl(s,n,a.layoutBox),Zc(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function pu(e){Pi.value&&ru.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function fu(e){e.clearSnapshot()}function mu(e){e.clearMeasurements()}function gu(e){e.isLayoutDirty=!1}function vu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function yu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xu(e){e.resolveTargetDelta()}function bu(e){e.calcProjection()}function wu(e){e.resetSkewAndRotation()}function Su(e){e.removeLeadSnapshot()}function ku(e,t,n){e.translate=ds(t.translate,0,n),e.scale=ds(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Eu(e,t,n,r){e.min=ds(t.min,n.min,r),e.max=ds(t.max,n.max,r)}function Cu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Pu={duration:.45,ease:[.4,0,.1,1]},Tu=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ju=Tu("applewebkit/")&&!Tu("chrome/")?Math.round:di;function Ru(e){e.min=ju(e.min),e.max=ju(e.max)}function Au(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=eu(t),i=eu(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function Lu(e){return e!==e.root&&e.scroll?.wasRoot}const zu=cu({attachResizeListener:(e,t)=>Cl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Mu={current:void 0},Du=cu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Mu.current){const e=new zu({});e.mount(window),e.setOptions({layoutScroll:!0}),Mu.current=e}return Mu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),_u={pan:{Feature:class extends Sl{constructor(){super(...arguments),this.removePointerDownListener=di}onPointerDown(e){this.session=new tc(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jl(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:gc(e),onStart:gc(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&Ui.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=Tl(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Sl{constructor(e){super(e),this.removeGroupControls=di,this.removeListeners=di,this.controls=new fc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||di}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Du,MeasureLayout:Tc}};function Ou(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&Ui.postRender((()=>i(t,Pl(t))))}function Nu(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&Ui.postRender((()=>i(t,Pl(t))))}const Fu=new WeakMap,Iu=new WeakMap,$u=e=>{const t=Fu.get(e.target);t&&t(e)},Vu=e=>{e.forEach($u)};function Bu(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Iu.has(r)||Iu.set(r,{});const i=Iu.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Vu,{root:t,...n})),i[a]}(t);return Fu.set(e,n),r.observe(e),()=>{Fu.delete(e),r.unobserve(e)}}const Wu={some:0,all:1};const Uu={inView:{Feature:class extends Sl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Wu[r]};return Bu(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Sl{mount(){const{current:e}=this.node;e&&(this.unmount=da(e,((e,t)=>(Nu(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Nu(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends Sl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Tv){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xs(Cl(this.node.current,"focus",(()=>this.onFocus())),Cl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends Sl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=na(e,n),o=e=>{if(!ra(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const a=e=>{ra(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach((e=>{e.addEventListener("pointerenter",o,i)})),a}(e,((e,t)=>(Ou(this.node,t,"Start"),e=>Ou(this.node,e,"End")))))}unmount(){}}}},Hu={layout:{ProjectionNode:Du,MeasureLayout:Tc}},Yu=(0,e.createContext)({strict:!1}),Ku=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),qu=(0,e.createContext)({});function Gu(e){return yi(e.animate)||pl.some((t=>ul(e[t])))}function Qu(e){return Boolean(Gu(e)||e.variants)}function Xu(t){const{initial:n,animate:r}=function(e,t){if(Gu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||ul(t)?t:void 0,animate:ul(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(qu));return(0,e.useMemo)((()=>({initial:n,animate:r})),[Ju(n),Ju(r)])}function Ju(e){return Array.isArray(e)?e.join(" "):e}const Zu="undefined"!==typeof window,ed={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},td={};for(const n in ed)td[n]={isEnabled:e=>ed[n].some((t=>!!e[t]))};const nd=Symbol.for("motionComponentSymbol");function rd(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):Zl(r)&&(r.current=e))}),[n])}const id=Zu?e.useLayoutEffect:e.useEffect;function ad(t,n,r,i,a){const{visualElement:o}=(0,e.useContext)(qu),s=(0,e.useContext)(Yu),l=(0,e.useContext)(vc),c=(0,e.useContext)(Ku).reducedMotion,u=(0,e.useRef)(null);i=i||s.renderer,!u.current&&i&&(u.current=i(t,{visualState:n,parent:o,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,p=(0,e.useContext)(bc);!d||d.projection||!a||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:od(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Zl(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}(u.current,r,a,p);const h=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{d&&h.current&&d.update(r,l)}));const f=r[Ea],m=(0,e.useRef)(Boolean(f)&&!window.MotionHandoffIsComplete?.(f)&&window.MotionHasOptimisedAnimation?.(f));return id((()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),qi.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())})),(0,e.useEffect)((()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(f)})),m.current=!1))})),d}function od(e){if(e)return!1!==e.options.allowProjection?e.projection:od(e.parent)}function sd(t){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:a,Component:o}=t;function s(t,n){let s;const l={...(0,e.useContext)(Ku),...t,layoutId:ld(t)},{isStatic:c}=l,u=Xu(t),d=a(t,c);if(!c&&Zu){!function(){(0,e.useContext)(Yu).strict;0}();const t=function(e){const{drag:t,layout:n}=td;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=t.MeasureLayout,u.visualElement=ad(o,d,l,r,t.ProjectionNode)}return(0,dt.jsxs)(qu.Provider,{value:u,children:[s&&u.visualElement?(0,dt.jsx)(s,{visualElement:u.visualElement,...l}):null,i(o,t,rd(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)td[t]={...td[t],...e[t]}}(n),s.displayName=`motion.${"string"===typeof o?o:`create(${o.displayName??o.name??""})`}`;const l=(0,e.forwardRef)(s);return l[nd]=o,l}function ld(t){let{layoutId:n}=t;const r=(0,e.useContext)(xc).id;return r&&void 0!==n?r+"-"+n:n}function cd(e,t){let{layout:n,layoutId:r}=t;return ga.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Cc[e]||"opacity"===e)}const ud=(e,t)=>t&&"number"===typeof e?t.transform(e):e,dd={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pd=ma.length;function hd(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(ga.has(l))o=!0;else if(Qo(l))i[l]=e;else{const t=ud(e,ko[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<pd;a++){const o=ma[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=ud(s,ko[o]);l||(i=!1,r+=`${dd[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}const fd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function md(e,t,n){for(const r in t)wa(t[r])||cd(r,n)||(e[r]=t[r])}function gd(t,n){const r={};return md(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return hd(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function vd(e,t){const n={},r=gd(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const yd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yd.has(e)}let bd=e=>!xd(e);try{(wd=require("@emotion/is-prop-valid").default)&&(bd=e=>e.startsWith("on")?!xd(e):wd(e))}catch{}var wd;const Sd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kd(e){return"string"===typeof e&&!e.includes("-")&&!!(Sd.indexOf(e)>-1||/[A-Z]/u.test(e))}const Ed={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cd={offset:"strokeDashoffset",array:"strokeDasharray"};function Pd(e,t,n){return"string"===typeof e?e:eo.transform(t+n*e)}function Td(e,t,n,r){let{attrX:i,attrY:a,attrScale:o,originX:s,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...p}=t;if(hd(e,p,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:f,dimensions:m}=e;h.transform&&(m&&(f.transform=h.transform),delete h.transform),m&&(void 0!==s||void 0!==l||f.transform)&&(f.transformOrigin=function(e,t,n){return`${Pd(t,e.x,e.width)} ${Pd(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(h.x=i),void 0!==a&&(h.y=a),void 0!==o&&(h.scale=o),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Ed:Cd;e[a.offset]=eo.transform(-r);const o=eo.transform(t),s=eo.transform(n);e[a.array]=`${o} ${s}`}(h,c,u,d,!1)}const jd=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Rd=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Ad(t,n,r,i){const a=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Td(e,n,Rd(i),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};md(e,t.style,t),a.style={...e,...a.style}}return a}function Ld(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,a,o)=>{let{latestValues:s}=a;const l=(kd(n)?Ad:vd)(r,s,o,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(bd(i)||!0===n&&xd(i)||!t&&!xd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:i}:{},{children:d}=r,p=(0,e.useMemo)((()=>wa(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:p})}}function zd(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const Md=t=>(n,r)=>{const i=(0,e.useContext)(qu),a=(0,e.useContext)(vc),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a,onUpdate:o}=e;const s={latestValues:Dd(t,n,r,i),renderState:a()};return o&&(s.onMount=e=>o({props:t,current:e,...s}),s.onUpdate=e=>o(e)),s}(t,n,i,a);return r?o():zd(o)};function Dd(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=zc(a[p]);let{initial:o,animate:s}=e;const l=Gu(e),c=Qu(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!yi(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=bi(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}function _d(e,t,n){const{style:r}=e,i={};for(const a in r)(wa(r[a])||t.style&&wa(t.style[a])||cd(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(i[a]=r[a]);return i}const Od={useVisualState:Md({scrapeMotionValuesFromProps:_d,createRenderState:fd})};function Nd(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(Tv){t.dimensions={x:0,y:0,width:0,height:0}}}function Fd(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const Id=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $d(e,t,n,r){Fd(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Id.has(i)?i:ka(i),t.attrs[i])}function Vd(e,t,n){const r=_d(e,t,n);for(const i in e)if(wa(e[i])||wa(t[i])){r[-1!==ma.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const Bd=["x","y","width","height","cx","cy","r"],Wd={useVisualState:Md({scrapeMotionValuesFromProps:Vd,createRenderState:jd,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:i,latestValues:a}=e;if(!r)return;let o=!!t.drag;if(!o)for(const l in a)if(ga.has(l)){o=!0;break}if(!o)return;let s=!n;if(n)for(let l=0;l<Bd.length;l++){const e=Bd[l];t[e]!==n[e]&&(s=!0)}s&&Ui.read((()=>{Nd(r,i),Ui.render((()=>{Td(i,a,Rd(r.tagName),t.transformTemplate),$d(r,i)}))}))}})};function Ud(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return sd({...kd(n)?Wd:Od,preloadedFeatures:e,useRender:Ld(r),createVisualElement:t,Component:n})}}const Hd={current:null},Yd={current:!1};const Kd=[...rs,ao,mo],qd=new WeakMap;const Gd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Qd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ko,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Ji.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Ui.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Gu(n),this.isVariantNode=Qu(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const e=p[h];void 0!==l[h]&&wa(e)&&e.set(l[h],!1)}}mount(e){this.current=e,qd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Yd.current||function(){if(Yd.current=!0,Zu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Hd.current=e.matches;e.addListener(t),t()}else Hd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Hd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Hi(this.notifyUpdate),Hi(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=ga.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&Ui.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in td){const t=td[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Gd.length;n++){const t=Gd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(wa(i))e.addValue(r,i);else if(wa(a))e.addValue(r,fa(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,fa(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=fa(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(qo(n)||Fa(n))?n=parseFloat(n):!(e=>Kd.find(ns(e)))(n)&&mo.test(t)&&(n=Po(e,t)),this.setBaseTarget(e,wa(n)?n.get():n)),wa(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=bi(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||wa(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new hi),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Xd extends Qd{constructor(){super(...arguments),this.KeyframeResolver=as}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;wa(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class Jd extends Xd{constructor(){super(...arguments),this.type="html",this.renderInstance=Fd}readValueFromInstance(e,t){if(ga.has(t))return((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Oo(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(Qo(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Xl(e,n)}build(e,t,n){hd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return _d(e,t,n)}}class Zd extends Xd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=_l,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Nd(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ga.has(t)){const e=Co(t);return e&&e.default||0}return t=Id.has(t)?t:ka(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Vd(e,t,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&Ui.postRender(this.updateDimensions)}build(e,t,n){Td(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){$d(e,t,0,r)}mount(e){this.isSVGTag=Rd(e.tagName),super.mount(e)}}const ep=vi(Ud({...El,...Uu,..._u,...Hu},((t,n)=>kd(t)?new Zd(n):new Jd(n,{allowProjection:t!==e.Fragment}))));class tp extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function np(t){let{children:n,isPresent:r,anchorX:i}=t;const a=(0,e.useId)(),o=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(Ku);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:c,right:u}=s.current;if(r||!o.current||!e||!t)return;const d="left"===i?`left: ${c}`:`right: ${u}`;o.current.dataset.motionPopId=a;const p=document.createElement("style");return l&&(p.nonce=l),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.removeChild(p)}}),[r]),(0,dt.jsx)(tp,{isPresent:r,childRef:o,sizeRef:s,children:e.cloneElement(n,{ref:o})})}const rp=t=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:c}=t;const u=zd(ip),d=(0,e.useId)(),p=(0,e.useCallback)((e=>{u.set(e,!0);for(const t of u.values())if(!t)return;a&&a()}),[u,a]),h=(0,e.useMemo)((()=>({id:d,initial:r,isPresent:i,custom:o,onExitComplete:p,register:e=>(u.set(e,!1),()=>u.delete(e))})),s?[Math.random(),p]:[i,p]);return(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[i]),e.useEffect((()=>{!i&&!u.size&&a&&a()}),[i]),"popLayout"===l&&(n=(0,dt.jsx)(np,{isPresent:i,anchorX:c,children:n})),(0,dt.jsx)(vc.Provider,{value:h,children:n})};function ip(){return new Map}const ap=e=>e.key||"";function op(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const sp=t=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:c="left"}=t;const[u,d]=yc(l),p=(0,e.useMemo)((()=>op(n)),[n]),h=l&&!u?[]:p.map(ap),f=(0,e.useRef)(!0),m=(0,e.useRef)(p),g=zd((()=>new Map)),[v,y]=(0,e.useState)(p),[x,b]=(0,e.useState)(p);id((()=>{f.current=!1,m.current=p;for(let e=0;e<x.length;e++){const t=ap(x[e]);h.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[x,h.length,h.join("-")]);const w=[];if(p!==v){let e=[...p];for(let t=0;t<x.length;t++){const n=x[t],r=ap(n);h.includes(r)||(e.splice(t,0,n),w.push(n))}return"wait"===s&&w.length&&(e=w),b(op(e)),y(p),null}const{forceRender:S}=(0,e.useContext)(xc);return(0,dt.jsx)(dt.Fragment,{children:x.map((e=>{const t=ap(e),n=!(l&&!u)&&(p===x||h.includes(t));return(0,dt.jsx)(rp,{isPresent:n,initial:!(f.current&&!i)&&void 0,custom:r,presenceAffectsLayout:o,mode:s,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(S?.(),b(m.current),l&&d?.(),a&&a())},anchorX:c,children:e},t)}))})};var lp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cp=e.createContext&&e.createContext(lp),up=function(){return up=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},up.apply(this,arguments)},dp=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function pp(t){return t&&t.map((function(t,n){return e.createElement(t.tag,up({key:n},t.attr),pp(t.child))}))}function hp(t){return function(n){return e.createElement(fp,up({attr:up({},t.attr)},n),pp(t.child))}}function fp(t){var n=function(n){var r,i=t.attr,a=t.size,o=t.title,s=dp(t,["attr","size","title"]),l=a||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",up({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:up(up({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==cp?e.createElement(cp.Consumer,null,(function(e){return n(e)})):n(lp)}function mp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"}},{tag:"polyline",attr:{points:"5 12 12 5 19 12"}}]})(e)}function gp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function vp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function yp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"}},{tag:"polyline",attr:{points:"8 6 2 12 8 18"}}]})(e)}function xp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"7 10 12 15 17 10"}},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"}}]})(e)}function bp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(e)}function wp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"}},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"}},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"}}]})(e)}function Sp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(e)}function kp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"}},{tag:"polyline",attr:{points:"2 17 12 22 22 17"}},{tag:"polyline",attr:{points:"2 12 12 17 22 12"}}]})(e)}function Ep(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(e)}function Cp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function Pp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function Tp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function jp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"}}]})(e)}function Rp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(e)}function Ap(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function Lp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function zp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}function Mp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}function Dp(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function _p(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function Op(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const Np=e=>{let{icon:t,size:n,color:r,className:i}=e;return(0,dt.jsx)(t,{size:n,color:r,className:i})},Fp=ri(ep.button)`
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
`,Ip=ri.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,$p=()=>{const{theme:t,toggleTheme:n}=(()=>{const t=(0,e.useContext)(pt);if(void 0===t)throw new Error("useTheme must be used within a ThemeProvider");return t})();return(0,dt.jsx)(Fp,{onClick:n,animate:{scale:[.9,1]},transition:{duration:.3},"aria-label":`Switch to ${"light"===t?"dark":"light"} mode`,children:"light"===t?(0,dt.jsx)(Ip,{children:(0,dt.jsx)(Np,{icon:Rp,size:20})}):(0,dt.jsx)(Ip,{children:(0,dt.jsx)(Np,{icon:Mp,size:20})})})},Vp="\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-decoration: none;\n  outline: none;\n  box-shadow: 0 2px 6px var(--shadow);\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px var(--shadow);\n  }\n\n  &:active {\n    transform: translateY(0);\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n    transform: none;\n  }\n",Bp=e=>{switch(e){case"primary":return"\n        background-color: var(--accent);\n        color: white;\n        border: none;\n        \n        &:hover {\n          background-color: var(--accent-hover);\n        }\n      ";case"secondary":return"\n        background-color: var(--bg-secondary);\n        color: var(--text-primary);\n        border: none;\n        \n        &:hover {\n          background-color: var(--bg-primary);\n        }\n      ";case"outline":return"\n        background-color: transparent;\n        color: var(--accent);\n        border: 2px solid var(--accent);\n        \n        &:hover {\n          background-color: var(--accent);\n          color: white;\n        }\n      ";case"text":return"\n        background-color: transparent;\n        color: var(--accent);\n        border: none;\n        box-shadow: none;\n        \n        &:hover {\n          color: var(--accent-hover);\n          background-color: rgba(77, 159, 255, 0.1);\n        }\n      ";default:return""}},Wp=e=>{switch(e){case"small":return"\n        padding: 0.5rem 1rem;\n        font-size: 0.875rem;\n      ";case"medium":return"\n        padding: 0.75rem 1.5rem;\n        font-size: 1rem;\n      ";case"large":return"\n        padding: 1rem 2rem;\n        font-size: 1.125rem;\n      ";default:return""}},Up=ri.button`
  ${Vp}
  ${e=>{let{$variant:t}=e;return Bp(t)}}
  ${e=>{let{$size:t}=e;return Wp(t)}}
  width: ${e=>{let{$fullWidth:t}=e;return t?"100%":"auto"}};
`,Hp=ri(it)`
  ${Vp}
  ${e=>{let{$variant:t}=e;return Bp(t)}}
  ${e=>{let{$size:t}=e;return Wp(t)}}
  width: ${e=>{let{$fullWidth:t}=e;return t?"100%":"auto"}};
`,Yp=ri.a`
  ${Vp}
  ${e=>{let{$variant:t}=e;return Bp(t)}}
  ${e=>{let{$size:t}=e;return Wp(t)}}
  width: ${e=>{let{$fullWidth:t}=e;return t?"100%":"auto"}};
`,Kp=ri.span`
  display: flex;
  align-items: center;
  justify-content: center;
`,qp=e=>{let{children:t,variant:n="primary",size:r="medium",icon:i,href:a,to:o,fullWidth:s=!1,...l}=e;const c=(0,dt.jsxs)(dt.Fragment,{children:[i&&(0,dt.jsx)(Kp,{children:i}),(0,dt.jsx)("span",{children:t})]});return o?(0,dt.jsx)(Hp,{to:o,$variant:n,$size:r,$fullWidth:s,children:c}):a?(0,dt.jsx)(Yp,{href:a,target:"_blank",rel:"noopener noreferrer",$variant:n,$size:r,$fullWidth:s,children:c}):(0,dt.jsx)(Up,{$variant:n,$size:r,$fullWidth:s,...l,children:c})},Gp=ri.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${e=>{let{isScrolled:t}=e;return t?"0.6rem 0":"1.5rem 0"}};
  background-color: ${e=>{let{isScrolled:t}=e;return t?"var(--bg-secondary)":"transparent"}};
  backdrop-filter: ${e=>{let{isScrolled:t}=e;return t?"blur(10px)":"none"}};
  box-shadow: ${e=>{let{isScrolled:t}=e;return t?"0 2px 10px var(--shadow)":"none"}};
  z-index: 1000;
  transition: all 0.3s ease;
`,Qp=ri.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`,Xp=ri(ep.div)`
  font-size: 1.8rem;
  font-weight: 700;
`,Jp=ri(it)`
  color: var(--text-primary);
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: var(--accent);
  }
`,Zp=ri.nav`
  @media (max-width: 768px) {
    display: none;
  }
`,eh=ri.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`,th=ri(ep.li)``,nh=ri(it)`
  color: ${e=>e.$isActive?"var(--accent)":"var(--text-primary)"};
  font-weight: ${e=>e.$isActive?"600":"500"};
  text-decoration: none;
  padding: 0.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: ${e=>e.$isActive?"100%":"0"};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--accent);
    
    &:after {
      width: 100%;
    }
  }
`,rh=ri.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,ih=ri(ep.div)`
  @media (max-width: 768px) {
    display: none;
  }
`,ah=ri.a`
  text-decoration: none;
  display: block;
  
  &:hover span {
    color: white !important;
  }
`,oh=ri.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`,sh=ri(ep.nav)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--bg-secondary);
    box-shadow: 0 4px 12px var(--shadow);
    border-radius: 0 0 8px 8px;
    padding: 1rem;
    z-index: 1000;
  }
`,lh=ri.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ch=ri(ep.li)`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`,uh=()=>{const[t,n]=(0,e.useState)(!1),[r,i]=(0,e.useState)(!1),a=ne();(0,e.useEffect)((()=>{const e=()=>{window.scrollY>20?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,e.useEffect)((()=>{i(!1)}),[a.pathname]);const o=()=>i(!1),s=e=>"/"===e&&"/"===a.pathname||"/"!==e&&a.pathname.startsWith(e),l=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Projects",path:"/projects"},{name:"Skills",path:"/skills"},{name:"Contact",path:"/contact"}];return(0,dt.jsx)(Gp,{isScrolled:t,children:(0,dt.jsxs)(Qp,{children:[(0,dt.jsx)(Xp,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,dt.jsx)(Jp,{to:"/",onClick:e=>{"/"===window.location.pathname&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},children:"SH"})}),(0,dt.jsx)(Zp,{children:(0,dt.jsx)(eh,{children:l.map(((e,t)=>(0,dt.jsx)(th,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:(0,dt.jsx)(nh,{to:e.path,onClick:o,$isActive:s(e.path),children:e.name})},e.name)))})}),(0,dt.jsxs)(rh,{children:[(0,dt.jsx)(ih,{as:ep.div,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,dt.jsx)(ah,{href:"/files/Suren's Resume - Frontend Software Engineer.pdf",download:"Suren's Resume - Frontend Software Engineer.pdf",children:(0,dt.jsx)(qp,{size:"small",variant:"primary",icon:(0,dt.jsx)(xp,{size:16}),children:"Download CV"})})}),(0,dt.jsx)($p,{}),(0,dt.jsx)(oh,{onClick:()=>i(!r),children:r?(0,dt.jsx)(Np,{icon:Op,size:24}):(0,dt.jsx)(Np,{icon:Tp,size:24})})]}),(0,dt.jsx)(sp,{children:r&&(0,dt.jsx)(sh,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:(0,dt.jsxs)(lh,{children:[l.map(((e,t)=>(0,dt.jsx)(ch,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.05*t},children:(0,dt.jsx)(nh,{to:e.path,onClick:o,$isActive:s(e.path),children:e.name})},e.name))),(0,dt.jsx)(ch,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.25},children:(0,dt.jsx)(ah,{href:"/files/Suren's Resume - Frontend Software Engineer.pdf",download:"Suren's Resume - Frontend Software Engineer.pdf",children:(0,dt.jsx)(qp,{size:"small",variant:"primary",icon:(0,dt.jsx)(xp,{size:16}),fullWidth:!0,children:"Download CV"})})})]})})})]})})},dh=ri(ep.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px var(--shadow);
  z-index: 999;
  
  &:hover {
    background-color: var(--accent-hover);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }
`,ph=()=>{const[t,n]=(0,e.useState)(!1);(0,e.useEffect)((()=>{const e=()=>{window.scrollY>300?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return(0,dt.jsx)(sp,{children:t&&(0,dt.jsx)(dh,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},whileHover:{scale:1.1},whileTap:{scale:.9},children:(0,dt.jsx)(mp,{size:20})})})},hh=()=>{const{pathname:t}=ne();return(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[t]),null},fh=t=>{const[n,r]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=window.matchMedia(t);r(e.matches);const n=e=>{r(e.matches)};return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}}),[t]),n},mh=function(){return fh(`(max-width: ${arguments.length>0&&void 0!==arguments[0]?arguments[0]:768}px)`)},gh=ri.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`,vh=ri(ep.div)`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  opacity: ${e=>e.opacity};
  filter: blur(${e=>e.blurRadius}px);
  top: ${e=>e.top||"auto"};
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  bottom: ${e=>e.bottom||"auto"};
  z-index: 0;
  transform: translateZ(0);
  will-change: transform;
`,yh=ri.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: ${e=>e.opacity};
  z-index: 1;
`,xh=()=>{const e=mh();return(0,dt.jsxs)(gh,{children:[(0,dt.jsx)(vh,{animate:e?{x:[0,20,0],y:[0,-20,0],scale:[1,1.05,1]}:{x:[0,50,-20,0],y:[0,-50,20,0],scale:[1,1.1,.9,1],rotate:[0,90,180,270,360]},transition:{duration:e?20:25,repeat:1/0,repeatType:"loop",willChange:"transform"},blurRadius:e?60:80,color:"var(--accent)",opacity:.08,size:e?400:600,top:"10%",left:"5%"}),(0,dt.jsx)(vh,{animate:e?{x:[0,-15,0],y:[0,15,0],scale:[1,.95,1]}:{x:[0,-30,60,0],y:[0,40,-60,0],scale:[1,.9,1.2,1],rotate:[0,-90,-180,-270,-360]},transition:{duration:e?18:30,repeat:1/0,repeatType:"loop",willChange:"transform"},blurRadius:e?70:90,color:"var(--accent-hover)",opacity:.06,size:e?350:500,top:"50%",right:"10%"}),!e&&(0,dt.jsx)(vh,{animate:{x:[0,40,-30,0],y:[0,-30,-60,0],scale:[1,1.2,.8,1],rotate:[0,60,120,180,240,300,360]},transition:{duration:20,repeat:1/0,repeatType:"loop",willChange:"transform"},blurRadius:70,color:"var(--accent)",opacity:.05,size:450,bottom:"5%",left:"30%"}),(0,dt.jsx)(yh,{opacity:e?.01:.02})]})},bh=ri.section`
  padding: ${e=>{let{noPaddingTop:t}=e;return t?"0 0 5rem 0":"5rem 0"}};
  
  @media (max-width: 768px) {
    padding: ${e=>{let{noPaddingTop:t}=e;return t?"0 0 3rem 0":"3rem 0"}};
  }
  
  @media (max-width: 576px) {
    padding: ${e=>{let{noPaddingTop:t}=e;return t?"0 0 2.5rem 0":"2.5rem 0"}};
  }
`,wh=ri.div`
  width: 100%;
  max-width: ${e=>{let{fullWidth:t}=e;return t?"100%":"1200px"}};
  margin: 0 auto;
  padding: ${e=>{let{fullWidth:t}=e;return t?"0":"0 1.5rem"}};
  
  @media (max-width: 576px) {
    padding: ${e=>{let{fullWidth:t}=e;return t?"0":"0 1rem"}};
  }
`,Sh=ri.div`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 2.5rem;
  }
`,kh=ri.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
`,Eh=ri.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin: 0 auto 1.25rem;
    max-width: 90%;
  }
`,Ch=ri.div`
  height: 4px;
  width: 60px;
  background: var(--accent);
  margin: 0 auto;
  border-radius: 2px;
`,Ph=ri.div`
  width: 100%;
`,Th=e=>{let{id:t,title:n,subtitle:r,children:i,fullWidth:a=!1,className:o,noPaddingTop:s=!1,style:l}=e;const c={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}}};return(0,dt.jsx)(bh,{id:t,className:o,as:ep.section,initial:"initial",animate:"animate",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,staggerChildren:.1}}},noPaddingTop:s,style:l,children:(0,dt.jsxs)(wh,{fullWidth:a,children:[(n||r)&&(0,dt.jsxs)(Sh,{children:[n&&(0,dt.jsx)(kh,{as:ep.h2,variants:c,children:n}),r&&(0,dt.jsx)(Eh,{as:ep.p,variants:c,children:r}),(0,dt.jsx)(Ch,{as:ep.div,variants:c})]}),(0,dt.jsx)(Ph,{as:ep.div,variants:c,children:i})]})})},jh=(e,t)=>{const n=new Date(e,t-1),r=new Date;let i=r.getFullYear()-n.getFullYear();return(r.getMonth()<n.getMonth()||r.getMonth()===n.getMonth()&&r.getDate()<n.getDate())&&i--,`${i}+`},Rh=2018,Ah=9,Lh=ri.div`
  position: relative;
`,zh=ri.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 1.5rem;
    margin-top: 3rem;
    min-height: auto;
  }
`,Mh=ri(ep.div)`
  max-width: 1000px;
  margin: 0 auto;
  z-index: 1;
`,Dh=ri(ep.h3)`
  font-size: 1.5rem;
  color: var(--accent);
  margin: 0 0 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: 0 0 0.75rem;
  }
`,_h=ri.span`
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
  
  @keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }
`,Oh=ri(ep.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 0 0 1rem;
  }
`,Nh=ri(ep.h2)`
  font-size: 2.5rem;
  color: var(--accent);
  margin: 0 0 2rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin: 0 0 1.5rem;
  }
`,Fh=ri(ep.p)`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0 0 2rem;
  max-width: 700px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 1.5rem;
  }
`,Ih=ri(ep.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`,$h=ri.span`
  background-color: var(--bg-secondary);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }
`,Vh=ri(ep.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    margin-bottom: 2rem;
    
    a {
      width: 100%;
    }
  }
`,Bh=ri(it)`
  display: inline-block;
  background-color: var(--accent);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 6px var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-hover);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`,Wh=ri(it)`
  display: inline-block;
  background-color: transparent;
  color: var(--accent);
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: 2px solid var(--accent);
  box-shadow: 0 2px 6px var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-width: 1px;
  }
`,Uh=ri(ep.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`,Hh=ri.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`,Yh=ri.div`
  padding: 0 1.5rem 6rem;
  background-color: var(--bg-secondary);
  
  @media (max-width: 768px) {
    padding: 1.5rem 0 1.5rem;
    margin-top: 0;
  }
`,Kh=ri.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,qh=ri.img`
  width: 100%;
  max-width: 350px;
  border-radius: 12px;
  box-shadow: 0 10px 30px var(--shadow);
  
  @media (max-width: 768px) {
    max-width: 200px;
    margin: 0 auto;
  }
`,Gh=ri.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }
  }
`,Qh=ri.div`
  position: relative;
  z-index: 10;
  margin-top: 1.5rem;
`,Xh=ri.footer`
  padding: 1.5rem;
  text-align: center;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.8rem;
  }
`,Jh=ri.div`
  padding: 2rem 1.5rem 0;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(var(--accent-rgb), 0.03) 0%,
      rgba(var(--accent-rgb), 0.01) 30%,
      transparent 70%
    );
    opacity: 0.7;
    z-index: 0;
    animation: pulse 15s infinite alternate;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.1); opacity: 0.7; }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 0;
  }
`,Zh=ri.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-top: 1rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
`,ef=ri.div`
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }
`,tf=ri.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.3rem;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.15rem;
  }
`,nf=ri(ep.div)`
  background-color: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    background: linear-gradient(to bottom, var(--accent), transparent);
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 8px 20px var(--shadow);
    
    &::before {
      height: 5px;
      opacity: 1;
    }
    
    ${ef} {
      transform: scale(1.2);
    }
    
    ${tf} {
      text-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
    border-radius: 10px;
  }
`,rf=ri.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`,af=ri.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    display: none;
  }
`,of=ri.div`
  padding: 5rem 1.5rem;
  background: linear-gradient(45deg, rgba(var(--accent-rgb), 0.05), rgba(var(--accent-rgb), 0.1));
  position: relative;
  overflow: hidden;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3.5rem 1.25rem;
  }
  
  @media (max-width: 576px) {
    padding: 3rem 1rem;
  }
`,sf=ri.div`
  max-width: 850px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 576px) {
    max-width: 100%;
  }
`,lf=ri.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  
  span {
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
    line-height: 1.3;
    margin-bottom: 0.75rem;
  }
`,cf=ri.p`
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`,uf=ri.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
    margin: 1.5rem auto 0;
  }
  
  @media (max-width: 576px) {
    max-width: 100%;
    gap: 0.75rem;
    margin-top: 1rem;
  }
`,df=ri.a`
  display: inline-block;
  background-color: var(--accent);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 6px var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-hover);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`,pf=ri.a`
  display: inline-block;
  background-color: transparent;
  color: var(--accent);
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  border: 2px solid var(--accent);
  box-shadow: 0 2px 6px var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-width: 1px;
  }
`,hf=()=>{const t=jh(Rh,Ah);(0,e.useEffect)((()=>{window.scrollTo(0,0),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}),[]);const n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6}}},r=[{name:"Email",icon:Cp,url:"mailto:surhak96@gmail.com"},{name:"LinkedIn",icon:Ep,url:"https://linkedin.com/in/surhak"},{name:"Telegram",icon:Lp,url:"https://t.me/surohak"},{name:"GitHub",icon:Sp,url:"https://github.com/surohak"}],i=[{title:"Years of Experience",value:t,icon:"\ud83d\ude80",description:"Frontend development journey"},{title:"Projects Completed",value:"20+",icon:"\ud83d\udcbc",description:"Across various industries"},{title:"Technologies",value:"25+",icon:"\u2699\ufe0f",description:"Framework & library expertise"},{title:"Client Satisfaction",value:"100%",icon:"\u2728",description:"Delivering quality solutions"}];return(0,dt.jsxs)(Lh,{children:[(0,dt.jsx)(xh,{}),(0,dt.jsx)(zh,{children:(0,dt.jsxs)(Mh,{as:ep.div,variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:"visible",children:[(0,dt.jsxs)(Dh,{variants:n,children:["Hello ",(0,dt.jsx)(_h,{children:"\ud83d\udc4b"})," I'm"]}),(0,dt.jsx)(Oh,{variants:n,children:"Suren Hakobyan"}),(0,dt.jsx)(Nh,{variants:n,children:"Frontend Software Engineer"}),(0,dt.jsxs)(Fh,{variants:n,children:["I specialize in building high-performance web applications and interactive user interfaces. With ",t," years of experience in modern frontend technologies, I deliver polished, user-centric solutions with a focus on performance and maintainability."]}),(0,dt.jsx)(Ih,{variants:n,children:["Frontend Architecture","JavaScript & TypeScript","React & Next.js","Vue & Nuxt.js","WebGL & Canvas","Electron.js & React Native","Responsive Design & UI/UX","Performance Optimization"].map(((e,t)=>(0,dt.jsx)($h,{children:e},t)))}),(0,dt.jsxs)(Vh,{variants:n,children:[(0,dt.jsx)(Bh,{to:"/projects",children:"View My Work"}),(0,dt.jsx)(Wh,{to:"/contact",children:"Get In Touch"})]}),(0,dt.jsx)(Uh,{variants:n,children:r.map((e=>(0,dt.jsxs)(Hh,{href:e.url,target:"Email"===e.name?"_self":"_blank",rel:"noopener noreferrer",children:[(0,dt.jsx)(Np,{icon:e.icon,size:24})," ",e.name]},e.name)))})]})}),(0,dt.jsx)(Jh,{children:(0,dt.jsx)(Th,{id:"key-highlights",title:"Key Highlights",subtitle:"Numbers that reflect my professional journey",noPaddingTop:!0,style:{position:"relative",zIndex:1},children:(0,dt.jsx)(Zh,{children:i.map(((e,t)=>(0,dt.jsxs)(nf,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},viewport:{once:!0},children:[(0,dt.jsx)(ef,{children:e.icon}),(0,dt.jsx)(tf,{children:e.value}),(0,dt.jsx)(rf,{children:e.title}),(0,dt.jsx)(af,{children:e.description})]},t)))})})}),(0,dt.jsx)(of,{children:(0,dt.jsxs)(sf,{children:[(0,dt.jsxs)(lf,{children:["Looking for a ",(0,dt.jsx)("span",{children:"Skilled Frontend Engineer"}),"?"]}),(0,dt.jsxs)(cf,{children:["With ",t," years of experience building performant, responsive and visually appealing web applications, I'm ready to bring value to your team from day one."]}),(0,dt.jsxs)(uf,{children:[(0,dt.jsx)(df,{href:"/files/Suren's Resume - Frontend Software Engineer.pdf",target:"_blank",rel:"noopener noreferrer",children:"View My Resume"}),(0,dt.jsx)(pf,{href:"https://calendly.com/surhak96",target:"_blank",rel:"noopener noreferrer",children:"Schedule a Call"})]})]})}),(0,dt.jsx)(Yh,{children:(0,dt.jsx)(Th,{id:"about-preview",title:"About Me",subtitle:"Frontend Engineer with expertise in modern web technologies",children:(0,dt.jsxs)(Kh,{children:[(0,dt.jsx)(qh,{src:"/suren.jpg",alt:"Suren Hakobyan"}),(0,dt.jsxs)(Gh,{children:[(0,dt.jsxs)("p",{children:["I'm a Frontend Software Engineer with ",t," years of experience in developing complex web applications. I've worked with leading companies like Simplified, JobLeads, and Picsart to create innovative user interfaces and interactive experiences."]}),(0,dt.jsx)("p",{children:"My approach combines technical expertise with a passion for creating intuitive and engaging user experiences. I excel at translating design concepts into performant code that balances aesthetics with functionality."}),(0,dt.jsx)("p",{children:"With a strong foundation in JavaScript, TypeScript, React, Vue.js, and various frontend frameworks, I take pride in building scalable solutions that solve real-world problems."}),(0,dt.jsx)(Qh,{children:(0,dt.jsx)(Bh,{to:"/about",style:{zIndex:10,position:"relative"},children:"Learn More About Me"})})]})]})})}),(0,dt.jsx)(Xh,{children:(0,dt.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," Suren Hakobyan. All Rights Reserved."]})})]})};function ff(e,t){let n;const r=()=>{const{currentTime:r}=t,i=(null===r?0:r.value)/100;n!==i&&e(i),n=i};return Ui.update(r,!0),()=>Hi(r)}const mf=new WeakMap;let gf;function vf(e){let{target:t,contentRect:n,borderBoxSize:r}=e;mf.get(t)?.forEach((e=>{e({target:t,contentSize:n,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(t,r)}})}))}function yf(e){e.forEach(vf)}function xf(e,t){gf||"undefined"!==typeof ResizeObserver&&(gf=new ResizeObserver(yf));const n=ta(e);return n.forEach((e=>{let n=mf.get(e);n||(n=new Set,mf.set(e,n)),n.add(t),gf?.observe(e)})),()=>{n.forEach((e=>{const n=mf.get(e);n?.delete(t),n?.size||gf?.unobserve(e)}))}}const bf=new Set;let wf;function Sf(e){return bf.add(e),wf||(wf=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};bf.forEach((e=>e(t)))},window.addEventListener("resize",wf)),()=>{bf.delete(e),!bf.size&&wf&&(wf=void 0)}}const kf={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Ef(e,t,n,r){const i=n[t],{length:a,position:o}=kf[t],s=i.current,l=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=pi(0,i.scrollLength,i.current);const c=r-l;i.velocity=c>50?0:gi(i.current-s,c)}const Cf={start:0,center:.5,end:1};function Pf(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(e in Cf&&(e=Cf[e]),"string"===typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"===typeof e&&(r=t*e),n+r}const Tf=[0,0];function jf(e,t,n,r){let i=Array.isArray(e)?e:Tf,a=0,o=0;return"number"===typeof e?i=[e,e]:"string"===typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,Cf[e]?e:"0"]),a=Pf(i[0],n,r),o=Pf(i[1],t),a-o}const Rf={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Af={x:0,y:0};function Lf(e,t,n){const{offset:r=Rf.All}=n,{target:i=e,axis:a="y"}=n,o="y"===a?"height":"width",s=i!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,a=r.parentNode;for(;!i;)"svg"===a.tagName&&(i=a),a=r.parentNode;r=i}}return n}(i,e):Af,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(i),c={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const d=r.length;for(let p=0;p<d;p++){const e=jf(r[p],c[o],l[o],s[a]);u||e===t[a].interpolatorOffsets[p]||(u=!0),t[a].offset[p]=e}u&&(t[a].interpolate=Ws(t[a].offset,Us(r),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=Ia(0,1,t[a].interpolate(t[a].current))}function zf(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2?arguments[2]:void 0;if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){Ef(e,"x",t,n),Ef(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&Lf(e,n,r)},notify:()=>t(n)}}const Mf=new WeakMap,Df=new WeakMap,_f=new WeakMap,Of=e=>e===document.documentElement?window:e;function Nf(e){let{container:t=document.documentElement,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=_f.get(t);r||(r=new Set,_f.set(t,r));const i=zf(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(r.add(i),!Mf.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(Yi.timestamp)},i=()=>{for(const e of r)e.notify()},a=()=>{Ui.read(e,!1,!0),Ui.read(n,!1,!0),Ui.update(i,!1,!0)};Mf.set(t,a);const o=Of(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&Df.set(t,function(e,t){return"function"===typeof e?Sf(e):xf(e,t)}(t,a)),o.addEventListener("scroll",a,{passive:!0})}const a=Mf.get(t);return Ui.read(a,!1,!0),()=>{Hi(a);const e=_f.get(t);if(!e)return;if(e.delete(i),e.size)return;const n=Mf.get(t);Mf.delete(t),n&&(Of(t).removeEventListener("scroll",n),Df.get(t)?.(),window.removeEventListener("resize",n))}}const Ff=new Map;function If(){let{source:e,container:t=document.documentElement,axis:n="y"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e&&(t=e),Ff.has(t)||Ff.set(t,{});const r=Ff.get(t);return r[n]||(r[n]=Si()?new ScrollTimeline({source:t,axis:n}):function(e){let{source:t,container:n,axis:r="y"}=e;t&&(n=t);const i={value:0},a=Nf((e=>{i.value=100*e[r].progress}),{container:n,axis:r});return{currentTime:i,cancel:a}}({source:t,axis:n})),r[n]}function $f(e){return e&&(e.target||e.offset)}function Vf(e){let{axis:t="y",...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r={axis:t,...n};return"function"===typeof e?function(e,t){return function(e){return 2===e.length}(e)||$f(t)?Nf((n=>{e(n[t.axis].progress,n)}),t):ff(e,If(t))}(e,r):function(e,t){if(e.flatten(),$f(t))return e.pause(),Nf((n=>{e.time=e.duration*n[t.axis].progress}),t);{const n=If(t);return e.attachTimeline?e.attachTimeline(n,(e=>(e.pause(),ff((t=>{e.time=e.duration*t}),n)))):di}}(e,r)}function Bf(e,t){Boolean(!t||t.current)}const Wf=()=>({scrollX:fa(0),scrollY:fa(0),scrollXProgress:fa(0),scrollYProgress:fa(0)});const Uf=e=>(e=>e&&"object"===typeof e&&e.mix)(e)?e.mix:void 0;function Hf(t,n){const r=function(t){const n=zd((()=>fa(t))),{isStatic:r}=(0,e.useContext)(Ku);if(r){const[,r]=(0,e.useState)(t);(0,e.useEffect)((()=>n.on("change",r)),[])}return n}(n()),i=()=>r.set(n());return i(),id((()=>{const e=()=>Ui.preRender(i,!1,!0),n=t.map((t=>t.on("change",e)));return()=>{n.forEach((e=>e())),Hi(i)}})),r}function Yf(e,t,n,r){if("function"===typeof e)return function(e){pa.current=[],e();const t=Hf(pa.current,e);return pa.current=void 0,t}(e);const i="function"===typeof t?t:function(){const e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,n=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],r=2+t<0||arguments.length<=2+t?void 0:arguments[2+t],i=3+t<0||arguments.length<=3+t?void 0:arguments[3+t],a=Ws(1+t<0||arguments.length<=1+t?void 0:arguments[1+t],r,{mixer:Uf(r[0]),...i});return e?a(n):a}(t,n,r);return Array.isArray(e)?Kf(e,i):Kf([e],(e=>{let[t]=e;return i(t)}))}function Kf(e,t){const n=zd((()=>[]));return Hf(e,(()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)}))}const qf=ri.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`,Gf=ri(ep.div)`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  background-color: ${e=>e.color};
  opacity: ${e=>e.opacity};
  filter: blur(${e=>e.blurRadius}px);
  top: ${e=>e.top||"auto"};
  left: ${e=>e.left||"auto"};
  right: ${e=>e.right||"auto"};
  bottom: ${e=>e.bottom||"auto"};
  z-index: 0;
  transform: translateZ(0);
  will-change: transform;
`,Qf=ri(ep.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.015;
  z-index: 1;
`,Xf=t=>{let{variant:n="about"}=t;const[r,i]=(0,e.useState)(0),{scrollY:a}=function(){let{container:t,target:n,layoutEffect:r=!0,...i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a=zd(Wf);return(r?id:e.useEffect)((()=>(Bf(0,n),Bf(0,t),Vf(((e,t)=>{let{x:n,y:r}=t;a.scrollX.set(n.current),a.scrollXProgress.set(n.progress),a.scrollY.set(r.current),a.scrollYProgress.set(r.progress)}),{...i,container:t?.current||void 0,target:n?.current||void 0}))),[t,n,JSON.stringify(i.offset)]),a}(),o=mh();(0,e.useEffect)((()=>{const e=()=>{i(window.innerHeight)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]);const s=Yf(a,[0,2*r],[0,o?180:360]),l=Yf(a,[0,r],[0,o?25:50]),c=Yf(a,[0,r],[0,o?-15:-30]),u=Yf(a,[0,1.5*r],[1,o?1.1:1.2]),d=Yf(a,[0,2*r],[0,o?-180:-360]),p=Yf(a,[0,r],[0,o?-20:-40]),h=Yf(a,[0,r],[0,o?10:20]),f=Yf(a,[0,1.5*r],[1,o?.9:.8]),m=Yf(a,[0,r],[.01,.02]),g=()=>{switch(n){case"about":default:return"var(--accent)";case"projects":return"#6366f1";case"skills":return"#10b981";case"contact":return"#f59e0b"}};return(0,dt.jsxs)(qf,{children:[(0,dt.jsx)(Gf,{style:{rotate:s,x:l,y:c,scale:u},animate:o?{filter:["blur(80px)","blur(90px)"]}:{filter:["blur(100px)","blur(120px)","blur(90px)"]},transition:{filter:{duration:o?4:5,repeat:1/0,repeatType:"reverse"}},blurRadius:o?80:100,color:g(),opacity:.04,size:o?400:500,top:"5%",right:"10%"}),!o&&(0,dt.jsx)(Gf,{style:{rotate:d,x:p,y:h,scale:f},animate:{filter:["blur(120px)","blur(100px)","blur(140px)"]},transition:{filter:{duration:8,repeat:1/0,repeatType:"reverse"}},blurRadius:120,color:g(),opacity:.03,size:600,bottom:"10%",left:"5%"}),(0,dt.jsx)(Qf,{style:{opacity:m}})]})},Jf=(ri.span`
  font-weight: 600;
  color: var(--text-primary);
`,ri.div`
  position: relative;
  padding-left: 60px;
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--accent);
    
    @media (max-width: 768px) {
      left: 7px;
    }
  }
  
  @media (max-width: 768px) {
    padding-left: 45px;
  }
  
  @media (max-width: 576px) {
    padding-left: 35px;
    margin-bottom: 2rem;
    
    &::before {
      width: 14px;
      height: 14px;
      left: 6px;
    }
  }
`),Zf={JobLeads:"https://media.licdn.com/dms/image/v2/D4E0BAQGmCSuUap8eaw/company-logo_100_100/company-logo_100_100/0/1697787898386/jobleads_gmbh_logo?e=1750291200&v=beta&t=HzPc6xpq1Gsyc62TaPrkJHO1KZ9_6Pkpe4la8nv9Z10","ENKE Systems":"https://media.licdn.com/dms/image/v2/C560BAQE5VO-99nPmRw/company-logo_100_100/company-logo_100_100/0/1630602159669/enkesystems_logo?e=1750291200&v=beta&t=wDnfDEQQ_HN3vOAB_pkXvdMJ8NDHiaR2qQ1uCpJNmMI",Simplified:"https://media.licdn.com/dms/image/v2/C560BAQHOscd9djDESw/company-logo_100_100/company-logo_100_100/0/1630638439033?e=1750291200&v=beta&t=hz5yGlEIpP6sQm0GkzyJlNwZDvv9rZdPe4UWLKW_f0w","Freelance / Contract / Self-Employed":"/logo/SH-initials.svg",Picsart:"https://media.licdn.com/dms/image/v2/C560BAQFDzSzptlwiOQ/company-logo_100_100/company-logo_100_100/0/1640024876057/picsart_photo_studio_logo?e=1750291200&v=beta&t=z91QVru1sAQtW1BP5zQ4BmkhNSjMx9PhIt6IUv6UKyc"},em=ri.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #0a2463;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
  transform: perspective(800px) rotateX(5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    transform: perspective(800px) rotateX(0deg) scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #0d2e76;
  }

  @media (max-width: 576px) {
    width: 42px;
    height: 42px;
    font-size: 16px;
  }
`,tm=e=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e-1],nm=ri.div`
  display: flex;
  justify-content: center;
  margin-top: 0.8rem;
`,rm=t=>{let{job:n}=t;const[r,i]=e.useState(!1),a="Freelance / Contract / Self-Employed"===n.company,{visibleTechs:o,remainingCount:s}=(()=>{const e=["JavaScript","TypeScript","React.js","Vue.js","Next.js","Nuxt.js","HTML5 Canvas","Fabric.js","Konva.js","Redux.js","WebSocket","GraphQL","Electron.js","React Native","Qt QML"],t=[...n.technologies].sort(((t,n)=>{const r=e.indexOf(t),i=e.indexOf(n);return-1!==r&&-1!==i?r-i:-1!==r?-1:-1!==i?1:t.localeCompare(n)}));return r?{visibleTechs:t,remainingCount:0}:{visibleTechs:t.slice(0,4),remainingCount:t.length-4}})(),l=()=>{i(!r)};return(0,dt.jsxs)(Jf,{children:[(0,dt.jsx)(km,{children:(()=>{const e=`${tm(n.startMonth)} ${n.startYear}`,t=n.endYear?`${tm(n.endMonth)} ${n.endYear}`:"Present",r=((e,t,n,r)=>{const i=new Date;let a=12*((n||i.getFullYear())-e)+((r||i.getMonth()+1)-t+1);const o=Math.floor(a/12),s=a%12;return 0===o?`${s} ${1===s?"mo":"mos"}`:0===s?`${o} ${1===o?"yr":"yrs"}`:`${o} ${1===o?"yr":"yrs"} ${s} ${1===s?"mo":"mos"}`})(n.startYear,n.startMonth,n.endYear,n.endMonth);return`${e} - ${t} \xb7 ${r}`})()}),(0,dt.jsxs)(Em,{children:[(0,dt.jsxs)(Hm,{children:[a?(0,dt.jsx)(em,{children:"SH"}):(0,dt.jsx)(Ym,{children:(0,dt.jsx)("img",{src:Zf[n.company],alt:`${n.company} logo`})}),(0,dt.jsxs)(Km,{children:[(0,dt.jsx)(Cm,{children:n.position}),(0,dt.jsxs)(Pm,{children:[n.website?(0,dt.jsxs)(Wm,{href:n.website,target:"_blank",rel:"noopener noreferrer",children:[n.company," ",(0,dt.jsx)(Um,{})]}):n.company,n.location&&(0,dt.jsx)(Tm,{children:n.location})]})]})]}),(0,dt.jsxs)(jm,{children:[n.description.length>0&&(0,dt.jsx)(Gm,{dangerouslySetInnerHTML:{__html:am(n.description[0])}}),n.description.length>1&&(0,dt.jsx)(Rm,{children:n.description.slice(1).map(((e,t)=>(0,dt.jsx)(Am,{dangerouslySetInnerHTML:{__html:am(e)}},t)))})]}),(0,dt.jsx)(Lm,{children:"Technologies & Skills"}),(0,dt.jsxs)(zm,{children:[o.map(((e,t)=>(0,dt.jsx)(Mm,{index:t,children:e},t))),s>0&&(0,dt.jsxs)(Dm,{onClick:l,children:["+",s," more"]})]}),r&&(0,dt.jsx)(nm,{children:(0,dt.jsx)(Dm,{onClick:l,children:"Show less"})})]})]})},im=e=>{let{workExperience:t}=e;return(0,dt.jsxs)(xm,{children:[(0,dt.jsx)(Bm,{children:"Work Experience"}),(0,dt.jsx)(Sm,{children:t.map(((e,t)=>(0,dt.jsx)(rm,{job:e},t)))})]})},am=e=>e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),om=ri.div`
  padding: 2rem 0;
  
  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
`,sm=ri.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 3.5rem;
  }

  @media (max-width: 576px) {
    gap: 2.5rem;
  }
`,lm=ri.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 576px) {
    gap: 1.5rem;
  }
`,cm=ri.div`
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  @media (max-width: 992px) {
    max-width: 250px;
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    max-width: 200px;
  }
`,um=ri.div`
  background-color: var(--bg-secondary);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px var(--shadow);

  @media (max-width: 576px) {
    padding: 1.5rem 1.25rem;
    border-radius: 15px;
  }
`,dm=ri.h4`
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  text-align: center;
`,pm=ri.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`,hm=ri.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 576px) {
    gap: 0.75rem;
  }
`,fm=ri.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;

  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }
`,mm=ri.div`
  flex: 1;
`,gm=ri.span`
  font-weight: 600;
  color: var(--text-primary);
  display: block;
  margin-bottom: 0.25rem;
`,vm=ri.span`
  color: var(--text-secondary);
`,ym=ri.div`
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
    color: var(--text-primary);

    @media (max-width: 576px) {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    
    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 576px) {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }
  }
`,xm=ri.div``,bm=ri.div``,wm=ri.div``,Sm=ri.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 2px;
    background-color: var(--border);
    
    @media (max-width: 768px) {
      left: 15px;
    }
    
    @media (max-width: 576px) {
      left: 13px;
      width: 2px;
    }
  }
`,km=(ri.div`
  position: relative;
  padding-left: 60px;
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--accent);
    
    @media (max-width: 768px) {
      left: 7px;
    }
  }
  
  @media (max-width: 768px) {
    padding-left: 45px;
  }
  
  @media (max-width: 576px) {
    padding-left: 35px;
    margin-bottom: 2rem;
    
    &::before {
      width: 14px;
      height: 14px;
      left: 6px;
    }
  }
`,ri.div`
  display: inline-block;
  padding: 0.3rem 1rem;
  background-color: var(--bg-secondary);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 0.75rem;
  
  @media (max-width: 576px) {
    padding: 0.25rem 0.8rem;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`),Em=ri.div`
  background-color: var(--bg-secondary);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px var(--shadow);

  @media (max-width: 576px) {
    padding: 1.25rem 1rem;
    border-radius: 15px;
  }
`,Cm=ri.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`,Pm=ri.h5`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--accent);
  font-weight: 500;
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
`,Tm=ri.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
  font-weight: normal;
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
`,jm=ri.div`
  margin-bottom: 1rem;
  color: var(--text-secondary);
`,Rm=ri.ul`
  padding-left: 1.25rem;
  margin: 0;
`,Am=ri.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 600;
    color: var(--text-primary);
  }

  @media (max-width: 576px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`,Lm=ri.h4`
  font-size: 1.05rem;
  color: var(--text-primary);
  margin: 1.5rem 0 0.75rem;
  opacity: 0.9;
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin: 1.25rem 0 0.5rem;
  }
`,zm=ri.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  align-items: center;

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`,Mm=ri.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  background-color: var(--bg-primary);
  border: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: ${e=>30*e.index}ms;
  opacity: 0;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    color: var(--accent);
    border-color: var(--accent);
  }

  @media (max-width: 576px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.7rem;
  }
`,Dm=ri.button`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-primary);
  border: 1px dashed var(--border);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--bg-secondary);
    color: var(--accent);
    border-color: var(--accent);
  }

  @media (max-width: 576px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.7rem;
  }
`,_m=ri.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--bg-secondary);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 5px 15px var(--shadow);

  @media (max-width: 576px) {
    padding: 1.5rem 1.25rem;
    gap: 1.5rem;
    border-radius: 15px;
  }
`,Om=ri.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Nm=ri.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  text-align: center;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`,Fm=ri.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`,Im=ri.span`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border-radius: 30px;
  display: inline-block;
  font-weight: 500;
  box-shadow: 0 2px 5px var(--shadow);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px var(--shadow);
    background-color: var(--accent);
    color: white;
  }

  @media (max-width: 576px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`,$m=ri.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 0.25rem;
  }
`,Vm=ri.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
`,Bm=ri.h3`
  margin-bottom: 2rem;
  font-size: 1.75rem;
  color: var(--text-primary);

  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,Wm=ri.a`
  color: var(--accent);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.7;
  }
`,Um=()=>(0,dt.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,dt.jsx)("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"}),(0,dt.jsx)("path",{d:"M15 3h6v6"}),(0,dt.jsx)("path",{d:"M10 14L21 3"})]}),Hm=ri.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
`,Ym=ri.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
  transform: perspective(800px) rotateX(5deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: perspective(800px) rotateX(0deg) scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 576px) {
    width: 42px;
    height: 42px;
    border-radius: 6px;
  }
`,Km=ri.div`
  flex: 1;
  
  @media (max-width: 576px) {
    flex: 1;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
`,qm=ri(it)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 6px var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: var(--accent-hover);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--shadow);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.95rem;
    border-radius: 6px;
  }
`,Gm=ri.div`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  
  strong {
    font-weight: 600;
    color: var(--text-primary);
  }

  @media (max-width: 576px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;
  }
`,Qm=()=>{const e=jh(Rh,Ah),t=[{icon:Dp,label:"Name",value:"Suren Hakobyan"},{icon:gp,label:"Experience",value:`${e} Years`},{icon:Pp,label:"Location",value:"Yerevan, Armenia",link:"https://www.google.com/maps/place/Yerevan,+Armenia"},{icon:yp,label:"Languages",value:"JavaScript (ES6+), TypeScript, HTML5/CSS3, WebGL, Canvas API"},{icon:kp,label:"Specialization",value:"Frontend Software Engineer"},{icon:_p,label:"Collaboration",value:"Local and Remote teams across time zones"}],n={"Yerevan State University":"https://media.licdn.com/dms/image/v2/C4E0BAQHWAaYmV_OWSA/company-logo_100_100/company-logo_100_100/0/1631358097750?e=1750291200&v=beta&t=XergHzwN7CYzrniRpWbtereWekgN843RPy4Nai0s6-c"},r=e=>{let{edu:t}=e;return(0,dt.jsxs)(Jf,{children:[(0,dt.jsx)(km,{children:`${tm(t.startMonth)} ${t.startYear} - ${t.endYear?`${tm(t.endMonth)} ${t.endYear}`:"Present"}`}),(0,dt.jsxs)(Em,{children:[(0,dt.jsxs)(Hm,{children:[(0,dt.jsx)(Ym,{children:(0,dt.jsx)("img",{src:(r=t.institution,n[r]||"/education-default.png"),alt:`${t.institution} logo`})}),(0,dt.jsxs)(Km,{children:[(0,dt.jsx)(Cm,{children:t.degree}),(0,dt.jsx)(Pm,{children:t.institution})]})]}),(0,dt.jsx)(jm,{children:t.description})]})]});var r},i=e=>{let{info:t,index:n}=e;return(0,dt.jsxs)(hm,{children:[(0,dt.jsx)(fm,{children:(0,dt.jsx)(Np,{icon:t.icon,size:20})}),(0,dt.jsxs)(mm,{children:[(0,dt.jsxs)(gm,{children:[t.label,":"]}),t.link?(0,dt.jsx)(vm,{children:(0,dt.jsxs)(a,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:[t.value," ",(0,dt.jsx)(Um,{})]})}):(0,dt.jsx)(vm,{children:t.value})]})]},n)},a=ri.a`
    color: var(--accent);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: color 0.3s ease;
    
    &:hover {
      text-decoration: underline;
    }
    
    svg {
      margin-left: 0.25rem;
      font-size: 0.8rem;
      opacity: 0.7;
    }
  `;return(0,dt.jsxs)(om,{children:[(0,dt.jsx)(Xf,{variant:"about"}),(0,dt.jsx)(Th,{id:"about",title:"About Me",subtitle:"My professional background and journey",children:(0,dt.jsxs)(sm,{children:[(0,dt.jsxs)(lm,{children:[(0,dt.jsx)(cm,{children:(0,dt.jsx)("img",{src:"/suren.jpg",alt:"Suren Hakobyan"})}),(0,dt.jsxs)(um,{children:[(0,dt.jsx)(dm,{children:"Personal Info"}),(0,dt.jsx)(pm,{children:t.map(((e,t)=>(0,dt.jsx)(i,{info:e,index:t},t)))})]})]}),(0,dt.jsxs)(ym,{children:[(0,dt.jsx)("h3",{children:"Biography"}),(0,dt.jsxs)("p",{children:["I'm Suren Hakobyan, a Frontend Software Engineer with ",e," years of experience specializing in building high-performance web applications with a focus on interactive user interfaces."]}),(0,dt.jsx)("p",{children:"My journey began with a fascination for creating visual experiences on the web, which led me to delve deep into frontend technologies, particularly JavaScript, React, and Vue.js. I've developed a particular expertise in working with Canvas element and WebGL to create complex graphic applications and image/video editing tools."}),(0,dt.jsx)("p",{children:"Throughout my career, I've had the opportunity to work with leading companies like Simplified, JobLeads, and Picsart, where I've contributed to innovative products that serve millions of users worldwide. These experiences have honed my ability to translate complex design concepts into intuitive, performant applications that scale."}),(0,dt.jsx)("p",{children:"I approach software development with a keen eye for both visual aesthetics and code quality. I believe that great frontend engineering is a perfect balance of exceptional user experience, clean architecture, and maintainable code."})]}),(0,dt.jsx)(im,{workExperience:[{startYear:2024,startMonth:7,position:"Frontend Software Engineer",company:"JobLeads",website:"https://jobleads.com",location:"Hamburg, Germany \xb7 Remote",technologies:["Vue.js","Nuxt.js","TypeScript","Tailwind CSS","Front-End Development","Fetch API","CSS","Teamwork","Responsive Web Design","Front-end Coding","Gitlab","Web Applications","Code Refactoring","Web Development","LESS","Algorithms","Engineering","Interpersonal Skills","JavaScript","Performance Optimization","Git","Time Management","SASS","Generative AI","REST API","JSON","HTML","Storybooks"],description:["Development of a **Job Search** site with **Vue 3**, in the team of **Resume World**, which is mainly responsible for **Resume Review** and **AI Resume Builder**.","Integrated **AI-driven features** for **Resume Review** and **Resume Builder**, enhancing the user experience and improving resume optimization","Collaborated closely with **cross-functional teams**, streamlining the product development process and aligning business and technical goals","Implemented reusable components using the **Composition API**, ensuring code modularity and maintainability","Optimized site performance by applying best practices in **code-splitting**, **caching**, and **lazy loading**"]},{startYear:2021,startMonth:3,position:"Frontend Software Engineer",company:"ENKE Systems",website:"https://enkesystems.com/",location:"New York, United States \xb7 Remote",technologies:["React.js","Redux.js","TypeScript","Cypress","Material-UI","Redux Thunk","Fetch API","Moment.js","CSS","Unit Testing","Teamwork","Responsive Web Design","styled-components","Test Automation","Linux","Babel.js","Team Management","Management","Code Review","Kanban","Front-end Coding","GitHub","Agile Methodologies","Apache Superset","React Hooks","Scrum","Front-End Development","Web Applications","Code Refactoring","Web Development","HTLM5 Canvas","GraphQL","LESS","Next.js","Jira","Data Structures","E2E Testing","CI/CD","Algorithms","Storybooks","Engineering","Text Editing","Interpersonal Skills","JavaScript","English","Performance Optimization","Git","OOP","Time Management","SASS","Team Development","Team Building","REST API","HTML5","JSON","HTML","Ant Design","Jest","Chart.js","Tailwind CSS","Bitbucket","Web Application Development","Team Leadership","Lodash.js"],description:["**Frontend development** of customer projects. Also I worked as an **out-staffed Engineer** for **Warner Music Group**.","Directly communicated with **ENKE** clients to get correct **Business requirements** and translate them into **technical requirements**","Contributed to **3 projects** from initial setups to production deployment, and support phase","Participated in initial setup and **architecture planning** for the projects, working closely with **team leads** and **stakeholders** to define requirements and establish project frameworks. Also, worked with **DevOps** to have a clear setup of **CI/CD**","Participated in **code reviews**, ensuring code quality, adherence to best practices, and alignment with project requirements and standards","Developed frontend applications using **React**, **Redux**, **Material UI**, and other relevant technologies, implementing UI components, **SCSS modules**, and ensuring responsive design","Conducted regular meetings and status updates with project **stakeholders**, providing progress reports, addressing concerns, and ensuring project milestones were met on time and within budget","Conducted **unit testing** and **test automation** to ensure the reliability and stability of applications"]},{startYear:2021,startMonth:11,endYear:2024,endMonth:7,position:"Frontend Software Engineer",company:"Simplified",website:"https://app.simplified.com/design",location:"San Francisco, United States \xb7 Remote",technologies:["Image Processing","React.js","Generative AI","HTML5 Canvas","WebSocket","Redux Thunk","Fetch API","CSS","Video Processing","Teamwork","Responsive Web Design","styled-components","Linux","Babel.js","Team Management","Management","Code Review","Kanban","Front-end Coding","Gitlab","GitHub","React Hooks","Scrum","Front-End Development","TypeScript","Web Applications","Code Refactoring","Web Development","Redux.js","LESS","Jira","Data Structures","CI/CD","Algorithms","Engineering","Text Editing","Interpersonal Skills","JavaScript","English","Performance Optimization","Git","OOP","Time Management","SASS","Team Development","Team Building","REST API","HTML5","JSON","HTML","Chart.js","Fabric.js","Web Application Development","Team Leadership","Lodash.js","Chakra UI"],description:["Development of an online **AI Photo/Video Editor**. (worked with **Canvas** element - **Fabric.js**)","Played a key role in the development of the **AI Photo/Video editor**, leveraging **Fabric.js** and other technologies to deliver innovative solutions","Successfully collaborated with the team to implement complex and critical components of the application, ensuring seamless integration and functionality","Responsible for the development and maintenance of the **AI Photo/Video editor** part of the application, ensuring adherence to project timelines and quality standards","Conduct daily **code reviews** to maintain code quality, identify potential issues, and ensure consistency and best practices across the codebase","Work closely with the **CTO** to prioritize tasks and allocate resources effectively, ensuring alignment with project goals and objectives","Mentor **junior team members**, providing guidance and support in understanding complex technical concepts and best practices in front-end development","Collaborate with **cross-functional teams** to gather requirements, design solutions, and implement features that meet user needs and business objectives","Continuously research and evaluate new technologies and frameworks to enhance the capabilities and performance of the **AI Photo/Video editor**, staying up-to-date with industry trends and best practices","Contributed to the development and enhancement of **WebSocket** communication for real-time interactions within the application"]},{startYear:2019,startMonth:3,endYear:2021,endMonth:11,position:"Frontend Developer",company:"Picsart",website:"https://picsart.com/create",location:"Yerevan, Armenia \xb7 Hybrid",technologies:["React.js","Konva.js","Image Processing","Redux.js","WeChat Mini Programs","HTML5 Canvas","TypeScript","Redux Thunk","Fetch API","Moment.js","CSS","Video Processing","Teamwork","Responsive Web Design","Linux","MongoDB","Babel.js","Management","Code Review","Kanban","Front-end Coding","GitHub","Agile Methodologies","React Hooks","Scrum","Front-End Development","Web Applications","Code Refactoring","Web Development","LESS","Jira","Data Structures","CI/CD","Algorithms","Storybooks","Engineering","Interpersonal Skills","JavaScript","English","Performance Optimization","Git","OOP","Time Management","WebAssembly","SASS","Team Development","Team Building","REST API","HTML5","JSON","HTML","Web Application Development","Lodash.js"],description:["Development of an online **Creative Photo Editor** since product creation from scratch. (worked with **canvas** element - **Konva.js**). Also developed 5 mini-applications for the **WeChat** platform.","Played a pivotal role in the development of Picsart's **Creative Photo Editor**","Utilized **Canvas** element with **Konva.js** and modern frontend technologies","Actively participated in team meetings, **code reviews**, and sprint planning sessions","Collaborated with cross-functional teams including **QA**, **Designers**, and **Developers**","Developed frontend components and features for **Photo Editor** as part of the team","Adapted to changes in project management methodologies (**Kanban** to **Scrum**)"]},{startYear:2018,startMonth:9,endYear:2024,endMonth:7,position:"Frontend Software Engineer | Freelance / Contract / Volunteer Projects",company:"Freelance / Contract / Self-Employed",location:"Remote",technologies:["Redux Thunk","Fetch API","Moment.js","CSS","Unit Testing","Teamwork","Responsive Web Design","styled-components","Test Automation","Linux","Leaflet.js","Babel.js","MobX","Team Management","Management","Microservices","Code Review","Kanban","Vue.js","Front-end Coding","Gitlab","GitHub","Agile Methodologies","React Hooks","Scrum","Front-End Development","TypeScript","Apollo","Web Applications","Electron.js","Code Refactoring","Bootstrap","Web Development","React.js","Redux.js","Vuex","GraphQL","LESS","Next.js","Jira","Data Structures","E2E Testing","CI/CD","Algorithms","Storybooks","Engineering","Text Editing","Interpersonal Skills","JavaScript","Nuxt.js","English","Vuetify","Performance Optimization","Git","Qt QML","OOP","Time Management","WebAssembly","SASS","Big Data","Team Development","Team Building","REST API","HTML5","JSON","QML","HTML","React Native","Ant Design","Apollo GraphQL","Webpack","Jest","Chart.js","Material-UI","Tailwind CSS","Bitbucket","Web Application Development","Maps","Qt","Team Leadership","Lodash.js"],description:["I did a lot of **freelance/contract/volunteer** projects, below is the list of them.","**Stihi, CW** - Blockchain and cryptocurrency-based project, crypto exchange | **React**, **MobX**, **Axios**, **Quill**, **EOSJS**, **SCSS**, **Styled Components**","**Factoring, Hellopay** - CRM and CMS based projects | **React**, **Redux**, **Tailwind CSS**, **Material UI**, **Recharts**, **React-Hook-Form**","**Sberbank** - Fintech, Online School, big team | **React**, **Effector.js**, **Storybooks**, **GraphQL**, **Apollo Client**, **SCSS**","**Edi-Real** - Multiplatform desktop/web/mobile application about Real Estate Property | **Big Data**, **React**, **Electron**, **React-Native**, **Redux**, **Redux-Form**","**Dats** - Gambling projects | **React**, **Redux**, **Next.js**, **TypeScript**, **Axios**, **Lodash.js**, **SCSS**, **Core UI**","**Boo** - Multiplatform applications | **C++**, **QT QML**, **WebAssembly**, **Map**, **Leaflet.js**, **React**, **Electron**","**Arbrug** - 3d printer app development | **Python**, **QT QML**, **React**"]}]}),(0,dt.jsxs)(bm,{children:[(0,dt.jsx)(Bm,{children:"Education"}),(0,dt.jsx)(Sm,{children:[{institution:"Yerevan State University",degree:"Bachelor of Informatics and Applied Mathematics",startYear:2013,startMonth:9,endYear:2020,endMonth:6,description:"Studied algorithms, data structures, computational mathematics, and information technologies. Focused on practical applications of mathematical methods in software development and computer science."}].map(((e,t)=>(0,dt.jsx)(r,{edu:e},t)))})]}),(0,dt.jsxs)(wm,{children:[(0,dt.jsx)(Bm,{children:"Skills & Expertise"}),(0,dt.jsxs)(_m,{children:[(0,dt.jsxs)(Om,{children:[(0,dt.jsx)(Nm,{children:"Proficient in modern frontend technologies with focus on interactive applications, canvas-based editors, and high-performance web solutions."}),(0,dt.jsxs)(Fm,{children:[(0,dt.jsx)(Im,{children:"JavaScript"}),(0,dt.jsx)(Im,{children:"TypeScript"}),(0,dt.jsx)(Im,{children:"React"}),(0,dt.jsx)(Im,{children:"Vue"}),(0,dt.jsx)(Im,{children:"Next.js"}),(0,dt.jsx)(Im,{children:"Nuxt.js"}),(0,dt.jsx)(Im,{children:"Canvas (2d)"}),(0,dt.jsx)(Im,{children:"React Native"}),(0,dt.jsx)(Im,{children:"Electron"}),(0,dt.jsx)(Im,{children:"QT QML"})]})]}),(0,dt.jsxs)($m,{children:[(0,dt.jsxs)(qm,{to:"/skills",children:["View All Skills",(0,dt.jsx)(Vm,{children:(0,dt.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,dt.jsx)("path",{d:"M5 12h14"}),(0,dt.jsx)("path",{d:"M12 5l7 7-7 7"})]})})]}),(0,dt.jsxs)(qm,{to:"/projects",children:["View All Projects",(0,dt.jsx)(Vm,{children:(0,dt.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,dt.jsx)("path",{d:"M5 12h14"}),(0,dt.jsx)("path",{d:"M12 5l7 7-7 7"})]})})]})]})]})]})]})})]})},Xm=[{id:2,title:"Job Search Platform",description:"A comprehensive job search platform with AI-driven features for resume optimization. Implemented Vue 3 with Composition API for maximum code reusability and integrated AI tools for resume analysis and improvement.",image:"/projects/jobleads.png",previewUrl:"https://jobleads.com",technologies:["Vue 3","TypeScript","Composition API","Pinia","Tailwind CSS"],liveLink:"https://jobleads.com",position:"Frontend Software Engineer",company:"JobLeads",category:"professional"},{id:1,title:"AI Photo/Video Editor",description:"An online AI-powered editor that enables users to manipulate photos and videos with advanced AI features. Features include canvas-based editing, AI-driven design suggestions, and a comprehensive design system.",image:"/projects/simplified.png",previewUrl:"https://app.simplified.com/design",technologies:["React","TypeScript","Canvas 2D","Fabric.js","Redux","WebSocket"],liveLink:"https://app.simplified.com/design",position:"Frontend Software Engineer",company:"Simplified",category:"professional"},{id:3,title:"Music Publishing Platform",description:"Developed the frontend for Warner Chappell Music's website, a global music publishing company. Implemented responsive interfaces with modern React and performance optimizations. Created interactive components for song catalog browsing and artist information display.",image:"/projects/warner-chappell.png",previewUrl:"https://warnerchappell.com/",technologies:["React","TypeScript","Next.js","Styled Components","Animation Libraries"],liveLink:"https://warnerchappell.com/",position:"Frontend Developer",company:"Warner Chappell Music",category:"professional"},{id:7,title:"Music Licensing Portal",description:"Developed Arrow, a specialized music licensing platform for Warner Chappell Music. Built a sophisticated interface for music professionals to discover, license, and manage music assets. Implemented complex search functionality and audio playback features with waveform visualization.",image:"/projects/arrow-warner.png",previewUrl:"https://arrow.warnerchappell.com/",technologies:["React","TypeScript","Redux","Web Audio API","Material UI","Responsive Design"],liveLink:"https://arrow.warnerchappell.com/",position:"Frontend Developer",company:"Warner Chappell Music",category:"professional"},{id:4,title:"Creative Photo Editor",description:"Contributed to Picsart's web-based photo editor with interactive canvas-based editing tools. Implemented mini-applications for the WeChat platform, expanding Picsart's reach to the Chinese market.",image:"/projects/picsart.png",previewUrl:"https://picsart.com/create",technologies:["JavaScript","Canvas API","React","Konva.js","WeChat Mini-App"],liveLink:"https://picsart.com/create",position:"Frontend Developer",company:"Picsart",category:"professional"},{id:13,title:"3D Printer Control Application",description:"Developed a sophisticated control application for Arburg's industrial 3D printers. Created an intuitive interface allowing operators to manage complex printing parameters, monitor real-time printing status, and analyze performance metrics. Implemented visualization components for 3D models and printing layers preview to improve manufacturing precision.",image:"/projects/arburg.png",technologies:["QT QML","C++","Python","3D Modeling","G-code Processing","Real-time Data Visualization","Serial Communication","Hardware APIs","Three.js","WebGL"],liveLink:"https://www.arburg.com/en/",position:"QT QML Developer",company:"Arburg",category:"freelance"},{id:12,title:"Creative Assets Marketplace",description:"Contributed to Vecteezy, a leading marketplace for vector graphics, stock photos, and videos. Implemented advanced search and filtering functionality, user collections management, and content preview features. Enhanced the contributor platform for artists to upload and manage their creative assets.",image:"/projects/vecteezy.png",technologies:["React","TypeScript","Redux","Image Processing","Search Optimization","Large-scale Media Library"],liveLink:"https://www.vecteezy.com/",position:"Frontend Developer",company:"Vecteezy",category:"freelance"},{id:11,title:"Salon Booking System",description:"Developed BookedBy, an all-in-one business management platform for salons and spas. Built features for online booking, appointment management, self check-in, employee scheduling, and marketing campaigns. Implemented a comprehensive reporting system with over 100 types of reports for data-driven decision making.",image:"/projects/bookedby.png",technologies:["React","TypeScript","Node.js","Payment Processing","Calendar Integration","CRM","Email & SMS Marketing"],liveLink:"https://www.bookedby.com/",position:"Frontend Developer",company:"BookedBy",category:"freelance"},{id:10,title:"Sports Betting Platform",description:"Developed a modern sports betting website with real-time odds updates, live event tracking, and secure payment processing. Implemented responsive interfaces, interactive bet slips, and user account management features for an enhanced betting experience.",image:"/projects/betandreas.png",technologies:["React","TypeScript","WebSockets","Payment Gateway Integration","Real-time Data Processing"],liveLink:"https://betandreas.com/",position:"Frontend Developer",company:"Bet Andreas",category:"freelance"},{id:9,title:"Real Estate Management System",description:"Designed and developed a multi-platform real estate management system for EDI-Real, enabling property brokers to manage listings, client contacts, and emails efficiently. Implemented features for property search, broker cooperation networks, and mobile access capabilities.",image:"/projects/edireal.png",technologies:["React","Electron","Mobile App Development","CRM Integration","Property Search Algorithms"],liveLink:"https://edireal.com/",position:"Frontend Developer",company:"EDI-Real",category:"freelance"},{id:8,title:"Educational Platform",description:"Developed a comprehensive online learning platform for Sber University with interactive course modules, student progress tracking, and assessment tools. Implemented responsive interfaces and optimized performance for handling large educational content libraries.",image:"/projects/sber-university.png",technologies:["React","TypeScript","Redux","Material UI","Video Streaming","Interactive Content"],liveLink:"https://sberuniversity.ru/",position:"Frontend Developer",company:"Sber University",category:"freelance"},{id:15,title:"Gaming Finance Platform Admin Dashboard",description:"Developed the comprehensive admin dashboard for GamesBoost42, a specialized funding platform for gaming companies. Created interfaces for application review, funding approval workflows, analytics monitoring, and financial reporting. Implemented user management systems with role-based permissions for the operations team to efficiently manage gaming company partners and funding disbursements.",image:"/projects/gamesboost42.png",technologies:["React","TypeScript","Redux","Dashboard UI","Data Visualization","User Management","Financial Analytics"],liveLink:"https://gamesboost42.com/",position:"Frontend Developer",company:"GamesBoost42",category:"freelance"},{id:5,title:"Blockchain Social Network",description:"Developed a decentralized social media platform for content creators with blockchain integration. Built an elegant interface for posting content, interacting with blockchain wallets, and managing cryptocurrency transactions.",image:"/projects/stihi.png",technologies:["React","Redux","Blockchain","EOSJS","Styled Components","Web3"],liveLink:"https://stihi.io/",position:"Frontend Developer",company:"Stihi.io",category:"freelance"},{id:6,title:"Cross-Chain Bridge Platform",description:"A specialized blockchain bridge that enables seamless asset transfers between different blockchain networks. Built on PulseChain, this platform functions as a critical infrastructure component for decentralized finance, allowing users to move digital assets across multiple blockchain ecosystems efficiently and securely.",image:"/projects/savva.png",technologies:["React","TypeScript","Web3","PulseChain","Cross-Chain Bridge","Smart Contracts","DeFi"],liveLink:"https://savva.app/",position:"Frontend Developer",company:"Savva.app",category:"freelance"},{id:14,title:"Apache Superset Data Visualization",description:"Forked Apache Superset, an open-source data exploration platform, for a supply chain analytics project. Customized the visualization components to display complex logistics data and key performance indicators. Enhanced the dashboard functionality with custom chart types specific to supply chain metrics and inventory analysis.",image:"/projects/superset.png",previewUrl:"https://superset.apache.org/",technologies:["React","TypeScript","D3.js","Data Visualization","SQL Lab","Supply Chain Analytics"],liveLink:"https://superset.apache.org/",position:"Frontend Developer",company:"Supply Chain Project",category:"professional"}],Jm=ri.div`
  padding-top: 80px;
  
  @media (max-width: 576px) {
    padding-top: 60px;
  }
`,Zm=ri.div`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 3rem;
  }
`,eg=ri.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--accent);
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.75rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    
    &:after {
      width: 50px;
      height: 2px;
      bottom: -8px;
    }
  }
`,tg=ri.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.1rem;
  }
`,ng=ri.div`
  background-color: var(--bg-secondary);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px var(--shadow);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 576px) {
    border-radius: 8px;
    
    &:active {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px var(--shadow);
    }
  }
`,rg=ri.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 220px;
  }
  
  @media (max-width: 576px) {
    height: 200px;
  }
`,ig=ai`
  0% { background-color: var(--bg-primary); }
  50% { background-color: var(--bg-secondary); }
  100% { background-color: var(--bg-primary); }
`,ag=ai`
  0% { left: -50%; }
  100% { left: 100%; }
`,og=ri.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 0 1rem;
  animation: ${ig} 2s infinite ease-in-out;
  opacity: ${e=>e.fadeOut?0:1};
  transition: opacity 0.3s ease;
  
  @media (max-width: 576px) {
    padding: 0 0.75rem;
  }
`,sg=ri.span`
  font-size: 1rem;
  color: var(--text-secondary);
  text-align: center;
  opacity: 0.7;
  margin-bottom: 0.75rem;
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`,lg=ri.div`
  width: 80%;
  height: 3px;
  background-color: var(--bg-secondary);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 576px) {
    width: 70%;
    height: 2px;
  }
`,cg=ri.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: var(--accent);
  animation: ${ag} 1.5s infinite ease-in-out;
`,ug=ri.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  transition: opacity 0.5s ease;
  
  ${ng}:hover & {
    opacity: 1 !important;
  }
  
  @media (max-width: 768px) {
    opacity: 1 !important;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), transparent);
    padding: 1.25rem;
  }
  
  @media (max-width: 576px) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent);
    padding: 1rem;
  }
`,dg=ri.div`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 576px) {
    gap: 0.6rem;
  }
`,pg=ri.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    background-color: var(--accent-hover);
  }
  
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 18px;
      height: 18px;
    }
    
    &:active {
      transform: scale(1.1);
      background-color: var(--accent-hover);
    }
  }
`,hg=ri.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`,fg=ri.div`
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    margin-bottom: 0.75rem;
  }
`,mg=ri.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 576px) {
    font-size: 1.15rem;
    margin: 0 0 0.3rem 0;
  }
`,gg=ri.div`
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 500;
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`,vg=ri.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0 0 1.25rem 0;
  flex-grow: 1;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 0 0 1rem 0;
  }
`,yg=ri.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
  
  @media (max-width: 576px) {
    gap: 0.4rem;
  }
`,xg=ri.span`
  font-size: 0.75rem;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  padding: 0.2rem 0.6rem;
  border-radius: 30px;
  
  @media (max-width: 576px) {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
    border-radius: 20px;
  }
`,bg=ri.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease, opacity 0.5s ease, filter 0.5s ease;
  transform: translateZ(0); /* Force hardware acceleration */
  will-change: transform, opacity, filter;
  
  ${ng}:hover & {
    transform: scale(1.05) !important;
  }
  
  @media (max-width: 576px) {
    ${ng}:active & {
      transform: scale(1.03) !important;
    }
  }
  
  &[data-priority="true"] {
    content-visibility: auto;
  }
`,wg=()=>{const t=Xm.filter((e=>"professional"===e.category)),n=Xm.filter((e=>"freelance"===e.category)),[r,i]=(0,e.useState)({}),[a,o]=(0,e.useState)({}),s=mh(992),[l,c]=(0,e.useState)({}),u=(0,e.useRef)({});(0,e.useEffect)((()=>{const e=s?3:4,n=[...t.slice(0,e)],r=n.reduce(((e,t)=>(e[t.id]=!0,e)),{});return c(r),n.forEach((e=>{const t=new Image;t.src=d(e.image),t.onload=()=>p(e.image)})),()=>{Object.values(u.current).forEach((e=>{e&&e.disconnect()}))}}),[s]);const d=e=>e.startsWith("http")?e:`${e}?w=${s?150:200}&q=60`,p=e=>{i((t=>({...t,[e]:!0}))),setTimeout((()=>{(e=>{if(a[e])return;const t=new Image;t.src=e,t.onload=()=>{o((t=>({...t,[e]:!0})))}})(e)}),300)},h=(0,e.useCallback)(((e,t)=>{e.forEach((e=>{var n;e.isIntersecting&&(c((e=>({...e,[t]:!0}))),u.current[t]&&(null===(n=u.current[t])||void 0===n||n.disconnect(),u.current[t]=null))}))}),[]),f=(0,e.useCallback)(((e,t)=>{if(e&&!l[t]){var n,r;if(u.current[t])null===(r=u.current[t])||void 0===r||r.disconnect();u.current[t]=new IntersectionObserver((e=>h(e,t)),{threshold:s?.05:.1,rootMargin:s?"200px":"100px"}),null===(n=u.current[t])||void 0===n||n.observe(e)}}),[l,h,s]),m={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:s?.05:.2}}},g={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:s?.3:.4}}},v=e=>(0,dt.jsx)(tg,{as:ep.div,variants:m,initial:"hidden",animate:"visible",children:e.map(((e,t)=>(0,dt.jsxs)(ng,{as:ep.div,variants:g,ref:t=>f(t,e.id),onClick:()=>e.liveLink&&window.open(e.liveLink,"_blank"),style:{cursor:e.liveLink?"pointer":"default"},children:[(0,dt.jsxs)(rg,{children:[!r[e.image]&&(0,dt.jsxs)(og,{fadeOut:r[e.image],children:[(0,dt.jsx)(sg,{children:e.title}),(0,dt.jsx)(lg,{children:(0,dt.jsx)(cg,{})})]}),l[e.id]&&(0,dt.jsx)(bg,{src:a[e.image]?e.image:d(e.image),alt:e.title,loading:"lazy",decoding:"async",onLoad:()=>p(e.image),style:{opacity:r[e.image]?1:0,filter:a[e.image]?"blur(0)":"blur(5px)",transform:`scale(${a[e.image]?"1":"1.05"})`},"data-priority":t<3}),(0,dt.jsx)(ug,{visible:a[e.image],style:{opacity:a[e.image]?1:0},children:(0,dt.jsxs)(dg,{onClick:e=>e.stopPropagation(),children:[e.githubLink&&(0,dt.jsx)(pg,{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",title:"GitHub Repository",children:(0,dt.jsx)(Np,{icon:Sp,size:18})}),e.liveLink&&(0,dt.jsx)(pg,{href:e.liveLink,target:"_blank",rel:"noopener noreferrer",title:"Live Website",children:(0,dt.jsx)(Np,{icon:bp,size:18})})]})})]}),(0,dt.jsxs)(hg,{children:[(0,dt.jsxs)(fg,{children:[(0,dt.jsx)(mg,{children:e.title}),(0,dt.jsx)(gg,{children:e.position&&e.company?`${e.position} at ${e.company}`:e.position||""})]}),(0,dt.jsx)(vg,{children:e.description}),(0,dt.jsx)(yg,{children:e.technologies.map(((e,t)=>(0,dt.jsx)(xg,{children:e},t)))})]})]},e.id)))});return(0,dt.jsxs)(Jm,{children:[(0,dt.jsx)(Xf,{variant:"projects"}),(0,dt.jsxs)(Th,{id:"projects",title:"Projects",subtitle:"A selection of my recent work and contributions",children:[(0,dt.jsxs)(Zm,{children:[(0,dt.jsx)(eg,{children:"Professional Work"}),v(t)]}),(0,dt.jsxs)(Zm,{children:[(0,dt.jsx)(eg,{children:"Freelance Projects"}),v(n)]})]})]})},Sg=[{title:"Main Technologies",icon:(0,dt.jsx)(Np,{icon:jp,size:24}),skills:[{name:"JavaScript",level:95,category:"main"},{name:"TypeScript",level:90,category:"main"},{name:"React",level:92,category:"main"},{name:"Vue",level:88,category:"main"},{name:"Canvas (2D)",level:90,category:"main"},{name:"Redux",level:90,category:"main"},{name:"Next.js",level:85,category:"main"},{name:"Nuxt.js",level:80,category:"main"},{name:"Qt QML",level:75,category:"main"}]},{title:"HTML5 Canvas",icon:(0,dt.jsx)(Np,{icon:function(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"}},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"}},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"}},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"}},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"}},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"}},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"}},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"}}]})(e)},size:24}),skills:[{name:"Konva.js",level:92,category:"canvas"},{name:"Fabric.js",level:88,category:"canvas"},{name:"Pixi.js",level:84,category:"canvas"},{name:"Three.js",level:80,category:"canvas"},{name:"Image Processing",level:85,category:"canvas"},{name:"Video Processing",level:80,category:"canvas"}]},{title:"Data Visualization",icon:(0,dt.jsx)(Np,{icon:function(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"}},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"}}]})(e)},size:24}),skills:[{name:"Chart.js",level:88,category:"datavis"},{name:"Apache Echarts",level:85,category:"datavis"},{name:"Recharts",level:90,category:"datavis"},{name:"AG Grid",level:86,category:"datavis"},{name:"D3.js",level:78,category:"datavis"}]},{title:"State Management",icon:(0,dt.jsx)(Np,{icon:kp,size:24}),skills:[{name:"Redux",level:92,category:"state"},{name:"MobX",level:85,category:"state"},{name:"Zustand",level:82,category:"state"},{name:"Recoil",level:80,category:"state"},{name:"Effector.js",level:78,category:"state"},{name:"Vuex",level:85,category:"state"},{name:"Pinia",level:80,category:"state"}]},{title:"UI Components",icon:(0,dt.jsx)(Np,{icon:function(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"}},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"}}]})(e)},size:24}),skills:[{name:"Material UI",level:90,category:"ui"},{name:"Chakra UI",level:85,category:"ui"},{name:"AntDesign",level:82,category:"ui"},{name:"Shadcn UI",level:88,category:"ui"},{name:"Vuetify",level:80,category:"ui"}]},{title:"Styling",icon:(0,dt.jsx)(Np,{icon:function(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"}},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(e)},size:24}),skills:[{name:"CSS",level:95,category:"styling"},{name:"SCSS/SASS",level:90,category:"styling"},{name:"LESS",level:85,category:"styling"},{name:"Styled Components",level:90,category:"styling"},{name:"Tailwind CSS",level:88,category:"styling"},{name:"React JSS",level:82,category:"styling"}]},{title:"Version Control",icon:(0,dt.jsx)(Np,{icon:function(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"}},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"}}]})(e)},size:24}),skills:[{name:"GitHub",level:90,category:"git"},{name:"Bitbucket",level:88,category:"git"},{name:"GitLab",level:85,category:"git"}]},{title:"Testing",icon:(0,dt.jsx)(Np,{icon:vp,size:24}),skills:[{name:"Unit Testing",level:85,category:"testing"},{name:"Integration Testing",level:82,category:"testing"},{name:"E2E Testing",level:80,category:"testing"},{name:"Cypress",level:85,category:"testing"},{name:"React Testing Library",level:88,category:"testing"},{name:"Vitest",level:82,category:"testing"},{name:"Jest",level:88,category:"testing"}]},{title:"Multiplatform",icon:(0,dt.jsx)(Np,{icon:function(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(e)},size:24}),skills:[{name:"Electron.js",level:85,category:"multiplatform"},{name:"React Native",level:80,category:"multiplatform"},{name:"QT QML",level:75,category:"multiplatform"},{name:"Mini Apps",level:78,category:"multiplatform"}]},{title:"Advanced Technologies",icon:(0,dt.jsx)(Np,{icon:function(e){return hp({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}}]})(e)},size:24}),skills:[{name:"WebAssembly",level:75,category:"advanced"},{name:"GraphQL",level:82,category:"advanced"},{name:"Apollo Client",level:80,category:"advanced"},{name:"WebSocket",level:85,category:"advanced"},{name:"Blockchain",level:70,category:"advanced"},{name:"Performance Optimization",level:88,category:"advanced"}]},{title:"Professional Skills",icon:(0,dt.jsx)(Np,{icon:_p,size:24}),skills:[{name:"Linux",level:80,category:"professional"},{name:"OOP",level:85,category:"professional"},{name:"Scrum/Kanban",level:90,category:"professional"},{name:"Code Refactoring",level:90,category:"professional"},{name:"Code Review",level:92,category:"professional"},{name:"Team Management",level:85,category:"professional"}]}],kg=ri.div`
  padding-top: 80px;
  
  @media (max-width: 576px) {
    padding-top: 60px;
  }
`,Eg=ri.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 1.75rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
`,Cg=ri.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  
  @media (max-width: 768px) {
    gap: 3rem;
  }
  
  @media (max-width: 576px) {
    gap: 2.5rem;
  }
`,Pg=ri.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
  }
`,Tg=ri.div`
  background-color: var(--bg-secondary);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--shadow);
  padding: 1.25rem;
  height: 100%;
  
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 8px;
  }
`,jg=ri.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
  
  @media (max-width: 576px) {
    gap: 0.6rem;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
  }
`,Rg=ri.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`,Ag=ri.h3`
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`,Lg=ri.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  &.full-width-skills {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
  
  @media (max-width: 576px) {
    gap: 0.8rem;
  }
`,zg=ri.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  .full-width-skills & {
    height: 100%;
  }
  
  @media (max-width: 576px) {
    gap: 0.6rem;
  }
`,Mg=ri.span`
  flex: 0 0 100px;
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
  
  @media (max-width: 1200px) {
    flex: 0 0 90px;
  }
  
  @media (max-width: 576px) {
    flex: 0 0 80px;
    font-size: 0.8rem;
  }
`,Dg=ri.div`
  flex: 1;
  height: 8px;
  background-color: var(--bg-primary);
  border-radius: 4px;
  overflow: hidden;
  
  @media (max-width: 576px) {
    height: 6px;
    border-radius: 3px;
  }
`,_g=ri.div`
  height: 100%;
  background: linear-gradient(90deg, 
    var(--accent) 0%, 
    var(--accent-hover) 50%,
    #7209b7 100%
  );
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  /* Add a subtle shine effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 70%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.15), 
      transparent
    );
    animation: shine 5s infinite;
    animation-delay: ${e=>30*e.level}ms; /* Stagger animation based on skill level */
  }
  
  @keyframes shine {
    0% {
      left: -100%;
    }
    15% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
  
  @media (max-width: 576px) {
    border-radius: 3px;
    transition: width 0.3s ease-in-out;
  }
`,Og=ri.span`
  flex: 0 0 35px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-align: right;
  
  @media (max-width: 576px) {
    flex: 0 0 30px;
    font-size: 0.7rem;
  }
`,Ng=ri.div`
  background-color: var(--bg-secondary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px var(--shadow);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.25rem;
    border-radius: 8px;
  }
`,Fg=ri.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin: 0;
  }
  
  svg {
    color: var(--accent);
  }
  
  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    
    h3 {
      font-size: 1.3rem;
    }
  }
  
  @media (max-width: 576px) {
    gap: 0.6rem;
    margin-bottom: 1.25rem;
    
    h3 {
      font-size: 1.2rem;
    }
  }
`,Ig=ri.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1.25rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.1rem;
  }
`,$g=ri.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--border);
    
    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
  
  @media (max-width: 576px) {
    gap: 0.75rem;
    padding-bottom: 1rem;
  }
`,Vg=ri.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--bg-primary);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
  
  @media (max-width: 576px) {
    width: 36px;
    height: 36px;
    margin-right: auto;
    margin-left: auto;
  }
`,Bg=ri.div`
  flex: 1;
`,Wg=ri.h4`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin: 0 0 0.75rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin: 0 0 0.4rem 0;
  }
`,Ug=ri.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`,Hg=ri.div`
  width: 100%;
  margin-bottom: 2.5rem;
  
  .full-width-category {
    width: 100%;
    background-color: var(--bg-secondary);
    border-left: 4px solid var(--accent);
    box-shadow: 0 5px 15px var(--shadow);
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1.5rem;
    
    .full-width-category {
      border-left: 3px solid var(--accent);
    }
  }
`,Yg=()=>{const t=Sg.find((e=>"Main Technologies"===e.title)),n=Sg.find((e=>"Professional Skills"===e.title)),r=Sg.filter((e=>"Main Technologies"!==e.title&&"Professional Skills"!==e.title)),i=mh(),a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:i?.05:.1}}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:i?.3:.4}}},s=function(t,n){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,dt.jsxs)(Tg,{as:ep.div,variants:o,className:r?"full-width-category":"",children:[(0,dt.jsxs)(jg,{children:[(0,dt.jsx)(Rg,{children:e.cloneElement(t.icon,{size:i?20:24})}),(0,dt.jsx)(Ag,{children:t.title})]}),(0,dt.jsx)(Lg,{className:r?"full-width-skills":"",children:t.skills.map(((e,t)=>(0,dt.jsxs)(zg,{children:[(0,dt.jsx)(Mg,{children:e.name}),(0,dt.jsx)(Dg,{children:(0,dt.jsx)(_g,{as:ep.div,initial:{width:0},animate:{width:`${e.level}%`},transition:{duration:i?.7:1,delay:i?.05+.03*t:.1+.05*t},level:e.level})}),(0,dt.jsxs)(Og,{children:[e.level,"%"]})]},t)))})]},n)};return(0,dt.jsxs)(kg,{children:[(0,dt.jsx)(Xf,{variant:"skills"}),(0,dt.jsxs)(Th,{id:"skills",title:"Skills & Expertise",subtitle:"A comprehensive overview of my technical abilities",children:[(0,dt.jsx)(Eg,{children:"I specialize in modern frontend technologies with a focus on interactive applications, canvas-based editors, and high-performance web solutions. My experience spans across various frameworks, libraries, and platforms, enabling me to deliver robust and user-friendly applications."}),(0,dt.jsxs)(Cg,{children:[t&&(0,dt.jsx)(Hg,{children:s(t,0,!0)}),(0,dt.jsx)(Pg,{as:ep.div,variants:a,initial:"hidden",animate:"visible",children:r.map(((e,t)=>s(e,t)))}),n&&(0,dt.jsx)(Hg,{children:s(n,r.length+1,!0)}),(0,dt.jsxs)(Ng,{as:ep.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:i?.4:.5,delay:.3},children:[(0,dt.jsxs)(Fg,{children:[(0,dt.jsx)(Np,{icon:zp,size:i?20:24}),(0,dt.jsx)("h3",{children:"My Working Process"})]}),(0,dt.jsxs)(Ig,{children:[(0,dt.jsxs)($g,{children:[(0,dt.jsx)(Vg,{children:(0,dt.jsx)(Np,{icon:vp,size:i?20:24})}),(0,dt.jsxs)(Bg,{children:[(0,dt.jsx)(Wg,{children:"Research & Understanding Requirements"}),(0,dt.jsx)(Ug,{children:"I begin by understanding business requirements and translating them into technical requirements. I research solutions and plan the architecture to ensure a solid foundation."})]})]}),(0,dt.jsxs)($g,{children:[(0,dt.jsx)(Vg,{children:(0,dt.jsx)(Np,{icon:yp,size:i?20:24})}),(0,dt.jsxs)(Bg,{children:[(0,dt.jsx)(Wg,{children:"Design & Development"}),(0,dt.jsx)(Ug,{children:"I design intuitive interfaces and develop clean, efficient code following best practices. I specialize in working with Canvas element for image/video processing and creating interactive web applications."})]})]}),(0,dt.jsxs)($g,{children:[(0,dt.jsx)(Vg,{children:(0,dt.jsx)(Np,{icon:wp,size:i?20:24})}),(0,dt.jsxs)(Bg,{children:[(0,dt.jsx)(Wg,{children:"Code Review & Testing"}),(0,dt.jsx)(Ug,{children:"I conduct daily code reviews to maintain code quality and ensure best practices. I work with QA to isolate and fix bugs, and implement unit, integration, and E2E tests for reliability."})]})]}),(0,dt.jsxs)($g,{children:[(0,dt.jsx)(Vg,{children:(0,dt.jsx)(Np,{icon:jp,size:i?20:24})}),(0,dt.jsxs)(Bg,{children:[(0,dt.jsx)(Wg,{children:"Deployment & Optimization"}),(0,dt.jsx)(Ug,{children:"After deployment, I optimize user experience by implementing interactive, dynamic UX solutions. I focus on performance optimization and provide ongoing support and maintenance."})]})]})]})]})]})]})]})},Kg={_origin:"https://api.emailjs.com"},qg=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Gg{constructor(e){this.status=e.status,this.text=e.responseText}}const Qg=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((r,i)=>{const a=new XMLHttpRequest;a.addEventListener("load",(e=>{let{target:t}=e;const n=new Gg(t);200===n.status||"OK"===n.text?r(n):i(n)})),a.addEventListener("error",(e=>{let{target:t}=e;i(new Gg(t))})),a.open("POST",Kg._origin+e,!0),Object.keys(n).forEach((e=>{a.setRequestHeader(e,n[e])})),a.send(t)}))},Xg=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";Kg._userID=e,Kg._origin=t},Jg=(e,t,n,r)=>{const i=r||Kg._userID,a=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(n);qg(i,e,t);const o=new FormData(a);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),Qg("/api/v1.0/email/send-form",o)},Zg=ri.div`
  padding-top: 80px;
  
  @media (max-width: 576px) {
    padding-top: 60px;
  }
`,ev=ri.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.5rem;
  }
`,tv=ri.div`
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  box-shadow: 0 5px 15px var(--shadow);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.25rem;
    border-radius: 8px;
  }
`,nv=ri.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
`,rv=ri.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 1.25rem;
  }
`,iv=ri.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
    margin-bottom: 1.25rem;
  }
`,av=ri.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  @media (max-width: 576px) {
    gap: 0.75rem;
  }
`,ov=ri.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-primary);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
  
  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`,sv=ri.div`
  display: flex;
  flex-direction: column;
`,lv=ri.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
`,cv=ri.span`
  font-size: 1rem;
  color: var(--text-primary);
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`,uv=ri.a`
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`,dv=ri.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  
  @media (max-width: 576px) {
    gap: 0.75rem;
    justify-content: center;
    margin-top: 1rem;
  }
`,pv=ri.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent);
    color: white;
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
  
  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`,hv=ri.form`
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px var(--shadow);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.25rem;
    border-radius: 8px;
  }
`,fv=ri.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`,mv=ri.div`
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`,gv=ri.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
`,vv="\n  width: 100%;\n  padding: 0.75rem 1rem;\n  font-size: 1rem;\n  background-color: var(--bg-primary);\n  color: var(--text-primary);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n  \n  &:focus {\n    outline: none;\n    border-color: var(--accent);\n    box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);\n  }\n  \n  &::placeholder {\n    color: var(--text-secondary);\n    opacity: 0.7;\n  }\n  \n  @media (max-width: 768px) {\n    padding: 0.7rem 0.9rem;\n    font-size: 0.95rem;\n  }\n  \n  @media (max-width: 576px) {\n    padding: 0.6rem 0.8rem;\n    font-size: 0.9rem;\n    border-radius: 6px;\n  }\n",yv=ri.input`
  ${vv}
`,xv=ri.textarea`
  ${vv}
  resize: vertical;
  min-height: 120px;
  
  @media (max-width: 576px) {
    min-height: 100px;
  }
`,bv=ri.div`
  margin-top: 1rem;
  
  @media (max-width: 576px) {
    margin-top: 0.75rem;
  }
`,wv=ri(ep.div)`
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0.9rem;
    margin-top: 0.9rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem;
    margin-top: 0.75rem;
    font-size: 0.8rem;
    border-radius: 6px;
  }
`,Sv=ri(wv)`
  background-color: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border: 1px solid #4caf50;
`,kv=ri(wv)`
  background-color: rgba(244, 67, 54, 0.1);
  color: #f44336;
  border: 1px solid #f44336;
`,Ev=()=>{const t=(0,e.useRef)(null),[n,r]=(0,e.useState)({from_name:"",reply_to:"",subject:"",message:""}),i=mh();(0,e.useEffect)((()=>{Xg("mitFBwd43Ky99sQf6")}),[]);const[a,o]=(0,e.useState)("idle"),s=e=>{const{name:t,value:n}=e.target;r((e=>({...e,[t]:n})))};return(0,dt.jsxs)(Zg,{children:[(0,dt.jsx)(Xf,{variant:"contact"}),(0,dt.jsx)(Th,{id:"contact",title:"Get In Touch",subtitle:"Have a question or want to work together? Reach out to me!",children:(0,dt.jsxs)(ev,{children:[(0,dt.jsxs)(tv,{as:ep.div,initial:{opacity:0,x:i?-15:-30},animate:{opacity:1,x:0},transition:{duration:i?.4:.5},children:[(0,dt.jsx)(nv,{children:"Contact Information"}),(0,dt.jsx)(rv,{children:"Fill out the form or get in touch directly using the information below."}),(0,dt.jsxs)(iv,{children:[(0,dt.jsxs)(av,{children:[(0,dt.jsx)(ov,{children:(0,dt.jsx)(Cp,{size:i?18:20})}),(0,dt.jsxs)(sv,{children:[(0,dt.jsx)(lv,{children:"Email"}),(0,dt.jsx)(cv,{children:(0,dt.jsx)(uv,{href:"mailto:surhak96@gmail.com",children:"surhak96@gmail.com"})})]})]}),(0,dt.jsxs)(av,{children:[(0,dt.jsx)(ov,{children:(0,dt.jsx)(Ap,{size:i?18:20})}),(0,dt.jsxs)(sv,{children:[(0,dt.jsx)(lv,{children:"Phone"}),(0,dt.jsx)(cv,{children:(0,dt.jsx)(uv,{href:"tel:+37495222706",children:"+374 95 222 706"})})]})]}),(0,dt.jsxs)(av,{children:[(0,dt.jsx)(ov,{children:(0,dt.jsx)(Pp,{size:i?18:20})}),(0,dt.jsxs)(sv,{children:[(0,dt.jsx)(lv,{children:"Location"}),(0,dt.jsx)(cv,{children:(0,dt.jsx)(uv,{href:"https://www.google.com/maps/place/Yerevan,+Armenia",target:"_blank",rel:"noopener noreferrer",children:"Yerevan, Armenia"})})]})]})]}),(0,dt.jsxs)(dv,{children:[(0,dt.jsx)(pv,{href:"https://linkedin.com/in/surhak",target:"_blank",rel:"noopener noreferrer",children:(0,dt.jsx)(Ep,{size:i?18:20})}),(0,dt.jsx)(pv,{href:"https://github.com/surohak",target:"_blank",rel:"noopener noreferrer",children:(0,dt.jsx)(Sp,{size:i?18:20})}),(0,dt.jsx)(pv,{href:"https://t.me/surohak",target:"_blank",rel:"noopener noreferrer",children:(0,dt.jsx)(Lp,{size:i?18:20})})]})]}),(0,dt.jsxs)(hv,{ref:t,as:ep.form,initial:{opacity:0,x:i?15:30},animate:{opacity:1,x:0},transition:{duration:i?.4:.5},onSubmit:e=>{if(e.preventDefault(),!n.from_name||!n.reply_to||!n.subject||!n.message)return o("error"),void setTimeout((()=>{o("idle")}),3e3);o("submitting");t.current&&Jg("service_aadmhtt","template_bcmc59t",t.current,"mitFBwd43Ky99sQf6").then((e=>{console.log("Email successfully sent!",e.text),o("success"),r({from_name:"",reply_to:"",subject:"",message:""}),setTimeout((()=>{o("idle")}),3e3)})).catch((e=>{console.error("Failed to send email:",e),o("error"),setTimeout((()=>{o("idle")}),3e3)}))},children:[(0,dt.jsxs)(fv,{children:[(0,dt.jsxs)(mv,{children:[(0,dt.jsx)(gv,{htmlFor:"from_name",children:"Name"}),(0,dt.jsx)(yv,{type:"text",id:"from_name",name:"from_name",value:n.from_name,onChange:s,required:!0,placeholder:"Your Name"})]}),(0,dt.jsxs)(mv,{children:[(0,dt.jsx)(gv,{htmlFor:"reply_to",children:"Email"}),(0,dt.jsx)(yv,{type:"email",id:"reply_to",name:"reply_to",value:n.reply_to,onChange:s,required:!0,placeholder:"Your Email"})]})]}),(0,dt.jsxs)(mv,{children:[(0,dt.jsx)(gv,{htmlFor:"subject",children:"Subject"}),(0,dt.jsx)(yv,{type:"text",id:"subject",name:"subject",value:n.subject,onChange:s,required:!0,placeholder:"Subject"})]}),(0,dt.jsxs)(mv,{children:[(0,dt.jsx)(gv,{htmlFor:"message",children:"Message"}),(0,dt.jsx)(xv,{id:"message",name:"message",value:n.message,onChange:s,required:!0,placeholder:"Your Message",rows:i?4:5})]}),(0,dt.jsx)(bv,{children:(0,dt.jsx)(qp,{type:"submit",variant:"primary",size:i?"medium":"large",icon:(0,dt.jsx)(Lp,{}),disabled:"submitting"===a,fullWidth:!0,children:"submitting"===a?"Sending...":"Send Message"})}),"success"===a&&(0,dt.jsx)(Sv,{as:ep.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:i?.3:.4},exit:{opacity:0,y:10},children:"Your message has been sent successfully!"}),"error"===a&&(0,dt.jsx)(kv,{as:ep.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:i?.3:.4},exit:{opacity:0,y:10},children:"There was an error sending your message. Please try again."})]})]})})]})},Cv=()=>(0,dt.jsxs)(ht,{children:[(0,dt.jsx)(oi,{}),(0,dt.jsxs)(nt,{children:[(0,dt.jsx)(uh,{}),(0,dt.jsx)(hh,{}),(0,dt.jsx)("main",{children:(0,dt.jsxs)(Se,{children:[(0,dt.jsx)(be,{path:"/",element:(0,dt.jsx)(hf,{})}),(0,dt.jsx)(be,{path:"/about",element:(0,dt.jsx)(Qm,{})}),(0,dt.jsx)(be,{path:"/projects",element:(0,dt.jsx)(wg,{})}),(0,dt.jsx)(be,{path:"/skills",element:(0,dt.jsx)(Yg,{})}),(0,dt.jsx)(be,{path:"/contact",element:(0,dt.jsx)(Ev,{})})]})}),(0,dt.jsx)(ph,{})]})]}),Pv=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};(()=>{let e=document.querySelector('meta[name="viewport"]');e||(e=document.createElement("meta"),e.name="viewport",document.head.appendChild(e)),e.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover")})();t.createRoot(document.getElementById("root")).render((0,dt.jsxs)(e.StrictMode,{children:[(0,dt.jsx)(Cv,{}),(0,dt.jsx)(c,{})]})),Pv()})()})();
//# sourceMappingURL=main.3752f286.js.map