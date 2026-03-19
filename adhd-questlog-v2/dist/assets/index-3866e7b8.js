(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Du(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},hl={},xs={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Mu=Symbol.for("react.portal"),Lu=Symbol.for("react.fragment"),Iu=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Ru=Symbol.for("react.provider"),Fu=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Bu=Symbol.for("react.memo"),Uu=Symbol.for("react.lazy"),Ga=Symbol.iterator;function Hu(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,ks={};function xn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ys}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=xn.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ys}var ra=na.prototype=new bs;ra.constructor=na;ws(ra,xn.prototype);ra.isPureReactComponent=!0;var Ja=Array.isArray,Ss=Object.prototype.hasOwnProperty,la={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function js(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ss.call(t,r)&&!Ns.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:sr,type:e,key:o,ref:a,props:l,_owner:la.current}}function Vu(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oa(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Wu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Za=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wu(""+e.key):t.toString(36)}function Lr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case sr:case Mu:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Dl(a,0):r,Ja(l)?(n="",e!=null&&(n=e.replace(Za,"$&/")+"/"),Lr(l,t,n,"",function(d){return d})):l!=null&&(oa(l)&&(l=Vu(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Za,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Ja(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Dl(o,s);a+=Lr(o,t,n,c,l)}else if(c=Hu(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Dl(o,s++),a+=Lr(o,t,n,c,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gr(e,t,n){if(e==null)return e;var r=[],l=0;return Lr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Qu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Ir={transition:null},Xu={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:la};function _s(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!oa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=xn;O.Fragment=Lu;O.Profiler=Ou;O.PureComponent=na;O.StrictMode=Iu;O.Suspense=$u;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xu;O.act=_s;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ws({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=la.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ss.call(t,c)&&!Ns.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:sr,type:e.type,key:l,ref:o,props:r,_owner:a}};O.createContext=function(e){return e={$$typeof:Fu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ru,_context:e},e.Consumer=e};O.createElement=js;O.createFactory=function(e){var t=js.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Au,render:e}};O.isValidElement=oa;O.lazy=function(e){return{$$typeof:Uu,_payload:{_status:-1,_result:e},_init:Qu}};O.memo=function(e,t){return{$$typeof:Bu,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};O.unstable_act=_s;O.useCallback=function(e,t){return me.current.useCallback(e,t)};O.useContext=function(e){return me.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return me.current.useDeferredValue(e)};O.useEffect=function(e,t){return me.current.useEffect(e,t)};O.useId=function(){return me.current.useId()};O.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return me.current.useMemo(e,t)};O.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};O.useRef=function(e){return me.current.useRef(e)};O.useState=function(e){return me.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return me.current.useTransition()};O.version="18.3.1";xs.exports=O;var _=xs.exports;const Ku=Du(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=_,qu=Symbol.for("react.element"),Gu=Symbol.for("react.fragment"),Ju=Object.prototype.hasOwnProperty,Zu=Yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ed={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ju.call(t,r)&&!ed.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:qu,type:e,key:o,ref:a,props:l,_owner:Zu.current}}hl.Fragment=Gu;hl.jsx=Cs;hl.jsxs=Cs;vs.exports=hl;var i=vs.exports,ao={},Es={exports:{}},_e={},zs={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,j){var P=E.length;E.push(j);e:for(;0<P;){var $=P-1>>>1,X=E[$];if(0<l(X,j))E[$]=j,E[P]=X,P=$;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var j=E[0],P=E.pop();if(P!==j){E[0]=P;e:for(var $=0,X=E.length,he=X>>>1;$<he;){var de=2*($+1)-1,ot=E[de],_t=de+1,mr=E[_t];if(0>l(ot,P))_t<X&&0>l(mr,ot)?(E[$]=mr,E[_t]=P,$=_t):(E[$]=ot,E[de]=P,$=de);else if(_t<X&&0>l(mr,P))E[$]=mr,E[_t]=P,$=_t;else break e}}return j}function l(E,j){var P=E.sortIndex-j.sortIndex;return P!==0?P:E.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],d=[],m=1,g=null,v=3,S=!1,h=!1,w=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var j=n(d);j!==null;){if(j.callback===null)r(d);else if(j.startTime<=E)r(d),j.sortIndex=j.expirationTime,t(c,j);else break;j=n(d)}}function x(E){if(w=!1,p(E),!h)if(n(c)!==null)h=!0,I(y);else{var j=n(d);j!==null&&B(x,j.startTime-E)}}function y(E,j){h=!1,w&&(w=!1,f(b),b=-1),S=!0;var P=v;try{for(p(j),g=n(c);g!==null&&(!(g.expirationTime>j)||E&&!F());){var $=g.callback;if(typeof $=="function"){g.callback=null,v=g.priorityLevel;var X=$(g.expirationTime<=j);j=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(c)&&r(c),p(j)}else r(c);g=n(c)}if(g!==null)var he=!0;else{var de=n(d);de!==null&&B(x,de.startTime-j),he=!1}return he}finally{g=null,v=P,S=!1}}var N=!1,k=null,b=-1,R=5,z=-1;function F(){return!(e.unstable_now()-z<R)}function Ee(){if(k!==null){var E=e.unstable_now();z=E;var j=!0;try{j=k(!0,E)}finally{j?Ke():(N=!1,k=null)}}else N=!1}var Ke;if(typeof u=="function")Ke=function(){u(Ee)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,L=M.port2;M.port1.onmessage=Ee,Ke=function(){L.postMessage(null)}}else Ke=function(){D(Ee,0)};function I(E){k=E,N||(N=!0,Ke())}function B(E,j){b=D(function(){E(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){h||S||(h=!0,I(y))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var P=v;v=j;try{return E()}finally{v=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=v;v=E;try{return j()}finally{v=P}},e.unstable_scheduleCallback=function(E,j,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,E={id:m++,callback:j,priorityLevel:E,startTime:P,expirationTime:X,sortIndex:-1},P>$?(E.sortIndex=P,t(d,E),n(c)===null&&E===n(d)&&(w?(f(b),b=-1):w=!0,B(x,P-$))):(E.sortIndex=X,t(c,E),h||S||(h=!0,I(y))),E},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(E){var j=v;return function(){var P=v;v=j;try{return E.apply(this,arguments)}finally{v=P}}}})(Ts);zs.exports=Ts;var td=zs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=_,je=td;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ps=new Set,Un={};function $t(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Un[e]=t,e=0;e<t.length;e++)Ps.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ei={},ti={};function ld(e){return io.call(ti,e)?!0:io.call(ei,e)?!1:rd.test(e)?ti[e]=!0:(ei[e]=!0,!1)}function od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ad(e,t,n,r){if(t===null||typeof t>"u"||od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var aa=/[\-:]([a-z])/g;function ia(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(aa,ia);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(aa,ia);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(aa,ia);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var l=ae.hasOwnProperty(t)?ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ad(t,n,l,r)&&(n=null),r||l===null?ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),so=Symbol.for("react.profiler"),Ds=Symbol.for("react.provider"),Ms=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),co=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Ls=Symbol.for("react.offscreen"),ni=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ni&&e[ni]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ml;function zn(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Ll=!1;function Il(e,t){if(!e||Ll)return"";Ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var c=`
`+l[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zn(e):""}function id(e){switch(e.tag){case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return zn("Suspense");case 19:return zn("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Qt:return"Portal";case so:return"Profiler";case ca:return"StrictMode";case co:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ms:return(e.displayName||"Context")+".Consumer";case Ds:return(e._context.displayName||"Context")+".Provider";case ua:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:po(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return po(e(t))}catch{}}return null}function sd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return po(t);case 8:return t===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cd(e){var t=Is(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=cd(e))}function Os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Is(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ri(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rs(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function mo(e,t){Rs(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?go(e,t.type,n):t.hasOwnProperty("defaultValue")&&go(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function li(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function go(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Tn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Tn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Fs(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ai(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function As(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?As(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ud=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){ud.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function Bs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Bs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var dd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,t){if(t){if(dd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wo=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ko=null,on=null,an=null;function ii(e){if(e=dr(e)){if(typeof ko!="function")throw Error(C(280));var t=e.stateNode;t&&(t=kl(t),ko(e.stateNode,e.type,t))}}function Hs(e){on?an?an.push(e):an=[e]:on=e}function Vs(){if(on){var e=on,t=an;if(an=on=null,ii(e),t)for(e=0;e<t.length;e++)ii(t[e])}}function Ws(e,t){return e(t)}function Qs(){}var Ol=!1;function Xs(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Ws(e,t,n)}finally{Ol=!1,(on!==null||an!==null)&&(Qs(),Vs())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var bo=!1;if(et)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){bo=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{bo=!1}function pd(e,t,n,r,l,o,a,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Ln=!1,Xr=null,Kr=!1,So=null,fd={onError:function(e){Ln=!0,Xr=e}};function md(e,t,n,r,l,o,a,s,c){Ln=!1,Xr=null,pd.apply(fd,arguments)}function gd(e,t,n,r,l,o,a,s,c){if(md.apply(this,arguments),Ln){if(Ln){var d=Xr;Ln=!1,Xr=null}else throw Error(C(198));Kr||(Kr=!0,So=d)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ks(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function si(e){if(Bt(e)!==e)throw Error(C(188))}function hd(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return si(l),e;if(o===r)return si(l),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Ys(e){return e=hd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var Gs=je.unstable_scheduleCallback,ci=je.unstable_cancelCallback,vd=je.unstable_shouldYield,xd=je.unstable_requestPaint,J=je.unstable_now,yd=je.unstable_getCurrentPriorityLevel,fa=je.unstable_ImmediatePriority,Js=je.unstable_UserBlockingPriority,Yr=je.unstable_NormalPriority,wd=je.unstable_LowPriority,Zs=je.unstable_IdlePriority,vl=null,Qe=null;function kd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Nd,bd=Math.log,Sd=Math.LN2;function Nd(e){return e>>>=0,e===0?32:31-(bd(e)/Sd|0)|0}var yr=64,wr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Pn(s):(o&=a,o!==0&&(r=Pn(o)))}else a=n&~l,a!==0?r=Pn(a):o!==0&&(r=Pn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ae(t),l=1<<n,r|=e[n],t&=~l;return r}function jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _d(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ae(o),s=1<<a,c=l[a];c===-1?(!(s&n)||s&r)&&(l[a]=jd(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=yr;return yr<<=1,!(yr&4194240)&&(yr=64),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ae(t),e[t]=n}function Cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ae(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ae(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var U=0;function tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nc,ga,rc,lc,oc,jo=!1,kr=[],ft=null,mt=null,gt=null,Wn=new Map,Qn=new Map,ct=[],Ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ui(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Sn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=dr(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function zd(e,t,n,r,l){switch(t){case"focusin":return ft=Sn(ft,e,t,n,r,l),!0;case"dragenter":return mt=Sn(mt,e,t,n,r,l),!0;case"mouseover":return gt=Sn(gt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Wn.set(o,Sn(Wn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Qn.set(o,Sn(Qn.get(o)||null,e,t,n,r,l)),!0}return!1}function ac(e){var t=zt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ks(n),t!==null){e.blockedOn=t,oc(e.priority,function(){rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wo=r,n.target.dispatchEvent(r),wo=null}else return t=dr(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function di(e,t,n){Or(e)&&n.delete(t)}function Td(){jo=!1,ft!==null&&Or(ft)&&(ft=null),mt!==null&&Or(mt)&&(mt=null),gt!==null&&Or(gt)&&(gt=null),Wn.forEach(di),Qn.forEach(di)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,jo||(jo=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Td)))}function Xn(e){function t(l){return Nn(l,e)}if(0<kr.length){Nn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Nn(ft,e),mt!==null&&Nn(mt,e),gt!==null&&Nn(gt,e),Wn.forEach(t),Qn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&ct.shift()}var sn=lt.ReactCurrentBatchConfig,Gr=!0;function Pd(e,t,n,r){var l=U,o=sn.transition;sn.transition=null;try{U=1,ha(e,t,n,r)}finally{U=l,sn.transition=o}}function Dd(e,t,n,r){var l=U,o=sn.transition;sn.transition=null;try{U=4,ha(e,t,n,r)}finally{U=l,sn.transition=o}}function ha(e,t,n,r){if(Gr){var l=_o(e,t,n,r);if(l===null)Xl(e,t,r,Jr,n),ui(e,r);else if(zd(l,e,t,n,r))r.stopPropagation();else if(ui(e,r),t&4&&-1<Ed.indexOf(e)){for(;l!==null;){var o=dr(l);if(o!==null&&nc(o),o=_o(e,t,n,r),o===null&&Xl(e,t,r,Jr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var Jr=null;function _o(e,t,n,r){if(Jr=null,e=pa(r),e=zt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ks(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yd()){case fa:return 1;case Js:return 4;case Yr:case wd:return 16;case Zs:return 536870912;default:return 16}default:return 16}}var dt=null,va=null,Rr=null;function sc(){if(Rr)return Rr;var e,t=va,n=t.length,r,l="value"in dt?dt.value:dt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function pi(){return!1}function Ce(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?br:pi,this.isPropagationStopped=pi,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=Ce(yn),ur=q({},yn,{view:0,detail:0}),Md=Ce(ur),Fl,Al,jn,xl=q({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jn&&(jn&&e.type==="mousemove"?(Fl=e.screenX-jn.screenX,Al=e.screenY-jn.screenY):Al=Fl=0,jn=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),fi=Ce(xl),Ld=q({},xl,{dataTransfer:0}),Id=Ce(Ld),Od=q({},ur,{relatedTarget:0}),$l=Ce(Od),Rd=q({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=Ce(Rd),Ad=q({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Ce(Ad),Bd=q({},yn,{data:0}),mi=Ce(Bd),Ud={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vd[e])?!!t[e]:!1}function ya(){return Wd}var Qd=q({},ur,{key:function(e){if(e.key){var t=Ud[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ya,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xd=Ce(Qd),Kd=q({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gi=Ce(Kd),Yd=q({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ya}),qd=Ce(Yd),Gd=q({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Ce(Gd),Zd=q({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=Ce(Zd),tp=[9,13,27,32],wa=et&&"CompositionEvent"in window,In=null;et&&"documentMode"in document&&(In=document.documentMode);var np=et&&"TextEvent"in window&&!In,cc=et&&(!wa||In&&8<In&&11>=In),hi=String.fromCharCode(32),vi=!1;function uc(e,t){switch(e){case"keyup":return tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function rp(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(vi=!0,hi);case"textInput":return e=t.data,e===hi&&vi?null:e;default:return null}}function lp(e,t){if(Kt)return e==="compositionend"||!wa&&uc(e,t)?(e=sc(),Rr=va=dt=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!op[e.type]:t==="textarea"}function pc(e,t,n,r){Hs(r),t=Zr(t,"onChange"),0<t.length&&(n=new xa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Kn=null;function ap(e){Sc(e,0)}function yl(e){var t=Gt(e);if(Os(t))return e}function ip(e,t){if(e==="change")return t}var fc=!1;if(et){var Bl;if(et){var Ul="oninput"in document;if(!Ul){var yi=document.createElement("div");yi.setAttribute("oninput","return;"),Ul=typeof yi.oninput=="function"}Bl=Ul}else Bl=!1;fc=Bl&&(!document.documentMode||9<document.documentMode)}function wi(){On&&(On.detachEvent("onpropertychange",mc),Kn=On=null)}function mc(e){if(e.propertyName==="value"&&yl(Kn)){var t=[];pc(t,Kn,e,pa(e)),Xs(ap,t)}}function sp(e,t,n){e==="focusin"?(wi(),On=t,Kn=n,On.attachEvent("onpropertychange",mc)):e==="focusout"&&wi()}function cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Kn)}function up(e,t){if(e==="click")return yl(t)}function dp(e,t){if(e==="input"||e==="change")return yl(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:pp;function Yn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!io.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function ki(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bi(e,t){var n=ki(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ki(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fp(e){var t=hc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(r!==null&&ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=bi(n,o);var a=bi(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=et&&"documentMode"in document&&11>=document.documentMode,Yt=null,Co=null,Rn=null,Eo=!1;function Si(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||Yt==null||Yt!==Qr(r)||(r=Yt,"selectionStart"in r&&ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Yn(Rn,r)||(Rn=r,r=Zr(Co,"onSelect"),0<r.length&&(t=new xa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Hl={},vc={};et&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function wl(e){if(Hl[e])return Hl[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vc)return Hl[e]=t[n];return e}var xc=wl("animationend"),yc=wl("animationiteration"),wc=wl("animationstart"),kc=wl("transitionend"),bc=new Map,Ni="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){bc.set(e,t),$t(t,[e])}for(var Vl=0;Vl<Ni.length;Vl++){var Wl=Ni[Vl],gp=Wl.toLowerCase(),hp=Wl[0].toUpperCase()+Wl.slice(1);St(gp,"on"+hp)}St(xc,"onAnimationEnd");St(yc,"onAnimationIteration");St(wc,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(kc,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function ji(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gd(r,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==o&&l.isPropagationStopped())break e;ji(l,s,d),o=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,d=s.currentTarget,s=s.listener,c!==o&&l.isPropagationStopped())break e;ji(l,s,d),o=c}}}if(Kr)throw e=So,Kr=!1,So=null,e}function V(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var r=e+"__bubble";n.has(r)||(Nc(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),Nc(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Nr]){e[Nr]=!0,Ps.forEach(function(n){n!=="selectionchange"&&(vp.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Ql("selectionchange",!1,t))}}function Nc(e,t,n,r){switch(ic(t)){case 1:var l=Pd;break;case 4:l=Dd;break;default:l=ha}n=l.bind(null,t,n,e),l=void 0,!bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;a=a.return}for(;s!==null;){if(a=zt(s),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Xs(function(){var d=o,m=pa(n),g=[];e:{var v=bc.get(e);if(v!==void 0){var S=xa,h=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":S=Xd;break;case"focusin":h="focus",S=$l;break;case"focusout":h="blur",S=$l;break;case"beforeblur":case"afterblur":S=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=fi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=qd;break;case xc:case yc:case wc:S=Fd;break;case kc:S=Jd;break;case"scroll":S=Md;break;case"wheel":S=ep;break;case"copy":case"cut":case"paste":S=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=gi}var w=(t&4)!==0,D=!w&&e==="scroll",f=w?v!==null?v+"Capture":null:v;w=[];for(var u=d,p;u!==null;){p=u;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Vn(u,f),x!=null&&w.push(Gn(u,x,p)))),D)break;u=u.return}0<w.length&&(v=new S(v,h,null,n,m),g.push({event:v,listeners:w}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",v&&n!==wo&&(h=n.relatedTarget||n.fromElement)&&(zt(h)||h[tt]))break e;if((S||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,S?(h=n.relatedTarget||n.toElement,S=d,h=h?zt(h):null,h!==null&&(D=Bt(h),h!==D||h.tag!==5&&h.tag!==6)&&(h=null)):(S=null,h=d),S!==h)){if(w=fi,x="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=gi,x="onPointerLeave",f="onPointerEnter",u="pointer"),D=S==null?v:Gt(S),p=h==null?v:Gt(h),v=new w(x,u+"leave",S,n,m),v.target=D,v.relatedTarget=p,x=null,zt(m)===d&&(w=new w(f,u+"enter",h,n,m),w.target=p,w.relatedTarget=D,x=w),D=x,S&&h)t:{for(w=S,f=h,u=0,p=w;p;p=Ut(p))u++;for(p=0,x=f;x;x=Ut(x))p++;for(;0<u-p;)w=Ut(w),u--;for(;0<p-u;)f=Ut(f),p--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ut(w),f=Ut(f)}w=null}else w=null;S!==null&&_i(g,v,S,w,!1),h!==null&&D!==null&&_i(g,D,h,w,!0)}}e:{if(v=d?Gt(d):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var y=ip;else if(xi(v))if(fc)y=dp;else{y=cp;var N=sp}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(y=up);if(y&&(y=y(e,d))){pc(g,y,n,m);break e}N&&N(e,v,d),e==="focusout"&&(N=v._wrapperState)&&N.controlled&&v.type==="number"&&go(v,"number",v.value)}switch(N=d?Gt(d):window,e){case"focusin":(xi(N)||N.contentEditable==="true")&&(Yt=N,Co=d,Rn=null);break;case"focusout":Rn=Co=Yt=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,Si(g,n,m);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":Si(g,n,m)}var k;if(wa)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Kt?uc(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(cc&&n.locale!=="ko"&&(Kt||b!=="onCompositionStart"?b==="onCompositionEnd"&&Kt&&(k=sc()):(dt=m,va="value"in dt?dt.value:dt.textContent,Kt=!0)),N=Zr(d,b),0<N.length&&(b=new mi(b,e,null,n,m),g.push({event:b,listeners:N}),k?b.data=k:(k=dc(n),k!==null&&(b.data=k)))),(k=np?rp(e,n):lp(e,n))&&(d=Zr(d,"onBeforeInput"),0<d.length&&(m=new mi("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=k))}Sc(g,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Vn(e,n),o!=null&&r.unshift(Gn(e,o,l)),o=Vn(e,t),o!=null&&r.push(Gn(e,o,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _i(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,l?(c=Vn(n,o),c!=null&&a.unshift(Gn(n,c,s))):l||(c=Vn(n,o),c!=null&&a.push(Gn(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var xp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function Ci(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(yp,"")}function jr(e,t,n){if(t=Ci(t),Ci(e)!==t&&n)throw Error(C(425))}function el(){}var zo=null,To=null;function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Do=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,Ei=typeof Promise=="function"?Promise:void 0,kp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ei<"u"?function(e){return Ei.resolve(null).then(e).catch(bp)}:Do;function bp(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+wn,Jn="__reactProps$"+wn,tt="__reactContainer$"+wn,Mo="__reactEvents$"+wn,Sp="__reactListeners$"+wn,Np="__reactHandles$"+wn;function zt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zi(e);e!==null;){if(n=e[Ve])return n;e=zi(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Ve]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function kl(e){return e[Jn]||null}var Lo=[],Jt=-1;function Nt(e){return{current:e}}function W(e){0>Jt||(e.current=Lo[Jt],Lo[Jt]=null,Jt--)}function H(e,t){Jt++,Lo[Jt]=e.current,e.current=t}var bt={},ue=Nt(bt),ye=Nt(!1),It=bt;function pn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function tl(){W(ye),W(ue)}function Ti(e,t,n){if(ue.current!==bt)throw Error(C(168));H(ue,t),H(ye,n)}function jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(C(108,sd(e)||"Unknown",l));return q({},n,r)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,It=ue.current,H(ue,e),H(ye,ye.current),!0}function Pi(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=jc(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,W(ye),W(ue),H(ue,e)):W(ye),H(ye,n)}var qe=null,bl=!1,Yl=!1;function _c(e){qe===null?qe=[e]:qe.push(e)}function jp(e){bl=!0,_c(e)}function jt(){if(!Yl&&qe!==null){Yl=!0;var e=0,t=U;try{var n=qe;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,bl=!1}catch(l){throw qe!==null&&(qe=qe.slice(e+1)),Gs(fa,jt),l}finally{U=t,Yl=!1}}return null}var Zt=[],en=0,rl=null,ll=0,ze=[],Te=0,Ot=null,Ge=1,Je="";function Ct(e,t){Zt[en++]=ll,Zt[en++]=rl,rl=e,ll=t}function Cc(e,t,n){ze[Te++]=Ge,ze[Te++]=Je,ze[Te++]=Ot,Ot=e;var r=Ge;e=Je;var l=32-Ae(r)-1;r&=~(1<<l),n+=1;var o=32-Ae(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Ge=1<<32-Ae(t)+l|n<<l|r,Je=o+e}else Ge=1<<o|n<<l|r,Je=e}function ba(e){e.return!==null&&(Ct(e,1),Cc(e,1,0))}function Sa(e){for(;e===rl;)rl=Zt[--en],Zt[en]=null,ll=Zt[--en],Zt[en]=null;for(;e===Ot;)Ot=ze[--Te],ze[Te]=null,Je=ze[--Te],ze[Te]=null,Ge=ze[--Te],ze[Te]=null}var Ne=null,Se=null,Q=!1,Fe=null;function Ec(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Di(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Se=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ge,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Se=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oo(e){if(Q){var t=Se;if(t){var n=t;if(!Di(e,t)){if(Io(e))throw Error(C(418));t=ht(n.nextSibling);var r=Ne;t&&Di(e,t)?Ec(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Io(e))throw Error(C(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function Mi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function _r(e){if(e!==Ne)return!1;if(!Q)return Mi(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Po(e.type,e.memoizedProps)),t&&(t=Se)){if(Io(e))throw zc(),Error(C(418));for(;t;)Ec(e,t),t=ht(t.nextSibling)}if(Mi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ne?ht(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=Se;e;)e=ht(e.nextSibling)}function fn(){Se=Ne=null,Q=!1}function Na(e){Fe===null?Fe=[e]:Fe.push(e)}var _p=lt.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Li(e){var t=e._init;return t(e._payload)}function Tc(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=wt(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,x){return u===null||u.tag!==6?(u=no(p,f.mode,x),u.return=f,u):(u=l(u,p),u.return=f,u)}function c(f,u,p,x){var y=p.type;return y===Xt?m(f,u,p.props.children,x,p.key):u!==null&&(u.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===it&&Li(y)===u.type)?(x=l(u,p.props),x.ref=_n(f,u,p),x.return=f,x):(x=Wr(p.type,p.key,p.props,null,f.mode,x),x.ref=_n(f,u,p),x.return=f,x)}function d(f,u,p,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ro(p,f.mode,x),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function m(f,u,p,x,y){return u===null||u.tag!==7?(u=Mt(p,f.mode,x,y),u.return=f,u):(u=l(u,p),u.return=f,u)}function g(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=no(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case hr:return p=Wr(u.type,u.key,u.props,null,f.mode,p),p.ref=_n(f,null,u),p.return=f,p;case Qt:return u=ro(u,f.mode,p),u.return=f,u;case it:var x=u._init;return g(f,x(u._payload),p)}if(Tn(u)||kn(u))return u=Mt(u,f.mode,p,null),u.return=f,u;Cr(f,u)}return null}function v(f,u,p,x){var y=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return y!==null?null:s(f,u,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===y?c(f,u,p,x):null;case Qt:return p.key===y?d(f,u,p,x):null;case it:return y=p._init,v(f,u,y(p._payload),x)}if(Tn(p)||kn(p))return y!==null?null:m(f,u,p,x,null);Cr(f,p)}return null}function S(f,u,p,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(u,f,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hr:return f=f.get(x.key===null?p:x.key)||null,c(u,f,x,y);case Qt:return f=f.get(x.key===null?p:x.key)||null,d(u,f,x,y);case it:var N=x._init;return S(f,u,p,N(x._payload),y)}if(Tn(x)||kn(x))return f=f.get(p)||null,m(u,f,x,y,null);Cr(u,x)}return null}function h(f,u,p,x){for(var y=null,N=null,k=u,b=u=0,R=null;k!==null&&b<p.length;b++){k.index>b?(R=k,k=null):R=k.sibling;var z=v(f,k,p[b],x);if(z===null){k===null&&(k=R);break}e&&k&&z.alternate===null&&t(f,k),u=o(z,u,b),N===null?y=z:N.sibling=z,N=z,k=R}if(b===p.length)return n(f,k),Q&&Ct(f,b),y;if(k===null){for(;b<p.length;b++)k=g(f,p[b],x),k!==null&&(u=o(k,u,b),N===null?y=k:N.sibling=k,N=k);return Q&&Ct(f,b),y}for(k=r(f,k);b<p.length;b++)R=S(k,f,b,p[b],x),R!==null&&(e&&R.alternate!==null&&k.delete(R.key===null?b:R.key),u=o(R,u,b),N===null?y=R:N.sibling=R,N=R);return e&&k.forEach(function(F){return t(f,F)}),Q&&Ct(f,b),y}function w(f,u,p,x){var y=kn(p);if(typeof y!="function")throw Error(C(150));if(p=y.call(p),p==null)throw Error(C(151));for(var N=y=null,k=u,b=u=0,R=null,z=p.next();k!==null&&!z.done;b++,z=p.next()){k.index>b?(R=k,k=null):R=k.sibling;var F=v(f,k,z.value,x);if(F===null){k===null&&(k=R);break}e&&k&&F.alternate===null&&t(f,k),u=o(F,u,b),N===null?y=F:N.sibling=F,N=F,k=R}if(z.done)return n(f,k),Q&&Ct(f,b),y;if(k===null){for(;!z.done;b++,z=p.next())z=g(f,z.value,x),z!==null&&(u=o(z,u,b),N===null?y=z:N.sibling=z,N=z);return Q&&Ct(f,b),y}for(k=r(f,k);!z.done;b++,z=p.next())z=S(k,f,b,z.value,x),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?b:z.key),u=o(z,u,b),N===null?y=z:N.sibling=z,N=z);return e&&k.forEach(function(Ee){return t(f,Ee)}),Q&&Ct(f,b),y}function D(f,u,p,x){if(typeof p=="object"&&p!==null&&p.type===Xt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var y=p.key,N=u;N!==null;){if(N.key===y){if(y=p.type,y===Xt){if(N.tag===7){n(f,N.sibling),u=l(N,p.props.children),u.return=f,f=u;break e}}else if(N.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===it&&Li(y)===N.type){n(f,N.sibling),u=l(N,p.props),u.ref=_n(f,N,p),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Xt?(u=Mt(p.props.children,f.mode,x,p.key),u.return=f,f=u):(x=Wr(p.type,p.key,p.props,null,f.mode,x),x.ref=_n(f,u,p),x.return=f,f=x)}return a(f);case Qt:e:{for(N=p.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ro(p,f.mode,x),u.return=f,f=u}return a(f);case it:return N=p._init,D(f,u,N(p._payload),x)}if(Tn(p))return h(f,u,p,x);if(kn(p))return w(f,u,p,x);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,p),u.return=f,f=u):(n(f,u),u=no(p,f.mode,x),u.return=f,f=u),a(f)):n(f,u)}return D}var mn=Tc(!0),Pc=Tc(!1),ol=Nt(null),al=null,tn=null,ja=null;function _a(){ja=tn=al=null}function Ca(e){var t=ol.current;W(ol),e._currentValue=t}function Ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){al=e,ja=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(ja!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(al===null)throw Error(C(308));tn=e,al.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Tt=null;function Ea(e){Tt===null?Tt=[e]:Tt.push(e)}function Dc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ea(t)):(n.next=l.next,l.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,nt(e,n)}return l=r.interleaved,l===null?(t.next=t,Ea(r)):(t.next=l.next,l.next=t),r.interleaved=t,nt(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}function Ii(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var l=e.updateQueue;st=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=c))}if(o!==null){var g=l.baseState;a=0,m=d=c=null,s=o;do{var v=s.lane,S=s.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,w=s;switch(v=t,S=n,w.tag){case 1:if(h=w.payload,typeof h=="function"){g=h.call(S,g,v);break e}g=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=w.payload,v=typeof h=="function"?h.call(S,g,v):h,v==null)break e;g=q({},g,v);break e;case 2:st=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[s]:v.push(s))}else S={eventTime:S,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=S,c=g):m=m.next=S,a|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(1);if(m===null&&(c=g),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ft|=a,e.lanes=a,e.memoizedState=g}}function Oi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(C(191,l));l.call(r)}}}var pr={},Xe=Nt(pr),Zn=Nt(pr),er=Nt(pr);function Pt(e){if(e===pr)throw Error(C(174));return e}function Ta(e,t){switch(H(er,t),H(Zn,e),H(Xe,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vo(t,e)}W(Xe),H(Xe,t)}function gn(){W(Xe),W(Zn),W(er)}function Lc(e){Pt(er.current);var t=Pt(Xe.current),n=vo(t,e.type);t!==n&&(H(Zn,e),H(Xe,n))}function Pa(e){Zn.current===e&&(W(Xe),W(Zn))}var K=Nt(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Da(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var $r=lt.ReactCurrentDispatcher,Gl=lt.ReactCurrentBatchConfig,Rt=0,Y=null,ee=null,ne=null,cl=!1,Fn=!1,tr=0,Cp=0;function ie(){throw Error(C(321))}function Ma(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function La(e,t,n,r,l,o){if(Rt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$r.current=e===null||e.memoizedState===null?Pp:Dp,e=n(r,l),Fn){o=0;do{if(Fn=!1,tr=0,25<=o)throw Error(C(301));o+=1,ne=ee=null,t.updateQueue=null,$r.current=Mp,e=n(r,l)}while(Fn)}if($r.current=ul,t=ee!==null&&ee.next!==null,Rt=0,ne=ee=Y=null,cl=!1,t)throw Error(C(300));return e}function Ia(){var e=tr!==0;return tr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Y.memoizedState=ne=e:ne=ne.next=e,ne}function Le(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?Y.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(C(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?Y.memoizedState=ne=e:ne=ne.next=e}return ne}function nr(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Le(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=a=null,c=null,d=o;do{var m=d.lane;if((Rt&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=g,a=r):c=c.next=g,Y.lanes|=m,Ft|=m}d=d.next}while(d!==null&&d!==o);c===null?a=r:c.next=s,Be(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,Ft|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=Le(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);Be(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ic(){}function Oc(e,t){var n=Y,r=Le(),l=t(),o=!Be(r.memoizedState,l);if(o&&(r.memoizedState=l,xe=!0),r=r.queue,Oa(Ac.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,rr(9,Fc.bind(null,n,r,l,t),void 0,null),re===null)throw Error(C(349));Rt&30||Rc(n,t,l)}return l}function Rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,$c(t)&&Bc(e)}function Ac(e,t,n){return n(function(){$c(t)&&Bc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Bc(e){var t=nt(e,1);t!==null&&$e(t,e,1,-1)}function Ri(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tp.bind(null,Y,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Uc(){return Le().memoizedState}function Br(e,t,n,r){var l=He();Y.flags|=e,l.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function Sl(e,t,n,r){var l=Le();r=r===void 0?null:r;var o=void 0;if(ee!==null){var a=ee.memoizedState;if(o=a.destroy,r!==null&&Ma(r,a.deps)){l.memoizedState=rr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=rr(1|t,n,o,r)}function Fi(e,t){return Br(8390656,8,e,t)}function Oa(e,t){return Sl(2048,8,e,t)}function Hc(e,t){return Sl(4,2,e,t)}function Vc(e,t){return Sl(4,4,e,t)}function Wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4,4,Wc.bind(null,t,e),n)}function Ra(){}function Xc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yc(e,t,n){return Rt&21?(Be(n,t)||(n=ec(),Y.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Ep(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{U=n,Gl.transition=r}}function qc(){return Le().memoizedState}function zp(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))Jc(t,n);else if(n=Dc(e,t,n,r),n!==null){var l=fe();$e(n,e,r,l),Zc(n,t,r)}}function Tp(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Jc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(l.hasEagerState=!0,l.eagerState=s,Be(s,a)){var c=t.interleaved;c===null?(l.next=l,Ea(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=Dc(e,t,l,r),n!==null&&(l=fe(),$e(n,e,r,l),Zc(n,t,r))}}function Gc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Jc(e,t){Fn=cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}var ul={readContext:Me,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Pp={readContext:Me,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:Fi,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Wc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Ri,useDebugValue:Ra,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Ri(!1),t=e[0];return e=Ep.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=He();if(Q){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),re===null)throw Error(C(349));Rt&30||Rc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Fi(Ac.bind(null,r,o,e),[e]),r.flags|=2048,rr(9,Fc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=re.identifierPrefix;if(Q){var n=Je,r=Ge;n=(r&~(1<<32-Ae(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dp={readContext:Me,useCallback:Xc,useContext:Me,useEffect:Oa,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Kc,useReducer:Jl,useRef:Uc,useState:function(){return Jl(nr)},useDebugValue:Ra,useDeferredValue:function(e){var t=Le();return Yc(t,ee.memoizedState,e)},useTransition:function(){var e=Jl(nr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Oc,useId:qc,unstable_isNewReconciler:!1},Mp={readContext:Me,useCallback:Xc,useContext:Me,useEffect:Oa,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Kc,useReducer:Zl,useRef:Uc,useState:function(){return Zl(nr)},useDebugValue:Ra,useDeferredValue:function(e){var t=Le();return ee===null?t.memoizedState=e:Yc(t,ee.memoizedState,e)},useTransition:function(){var e=Zl(nr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Oc,useId:qc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nl={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),l=yt(e),o=Ze(r,l);o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,l),t!==null&&($e(t,e,l,r),Ar(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),l=yt(e),o=Ze(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,l),t!==null&&($e(t,e,l,r),Ar(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=yt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=vt(e,l,r),t!==null&&($e(t,e,r,n),Ar(t,e,r))}};function Ai(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,o):!0}function eu(e,t,n){var r=!1,l=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(l=we(t)?It:ue.current,r=t.contextTypes,o=(r=r!=null)?pn(e,l):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function $i(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nl.enqueueReplaceState(t,t.state,null)}function Ao(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},za(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Me(o):(o=we(t)?It:ue.current,l.context=pn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Nl.enqueueReplaceState(l,l.state,null),il(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=id(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $o(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lp=typeof WeakMap=="function"?WeakMap:Map;function tu(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pl||(pl=!0,qo=r),$o(e,t)},n}function nu(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){$o(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$o(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Bi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Kp.bind(null,e,t,n),t.then(e,e))}function Ui(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hi(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Ip=lt.ReactCurrentOwner,xe=!1;function pe(e,t,n,r){t.child=e===null?Pc(t,null,n,r):mn(t,e.child,n,r)}function Vi(e,t,n,r,l){n=n.render;var o=t.ref;return cn(t,l),r=La(e,t,n,r,o,l),n=Ia(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(Q&&n&&ba(t),t.flags|=1,pe(e,t,r,l),t.child)}function Wi(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Wa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ru(e,t,o,r,l)):(e=Wr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(a,r)&&e.ref===t.ref)return rt(e,t,l)}return t.flags|=1,e=wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Yn(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,rt(e,t,l)}return Bo(e,t,n,r,l)}function lu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(rn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(rn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(rn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(rn,be),be|=r;return pe(e,t,l,n),t.child}function ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bo(e,t,n,r,l){var o=we(n)?It:ue.current;return o=pn(t,o),cn(t,l),n=La(e,t,n,r,o,l),r=Ia(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(Q&&r&&ba(t),t.flags|=1,pe(e,t,n,l),t.child)}function Qi(e,t,n,r,l){if(we(n)){var o=!0;nl(t)}else o=!1;if(cn(t,l),t.stateNode===null)Ur(e,t),eu(t,n,r),Ao(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=we(n)?It:ue.current,d=pn(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==d)&&$i(t,a,r,d),st=!1;var v=t.memoizedState;a.state=v,il(t,r,a,l),c=t.memoizedState,s!==r||v!==c||ye.current||st?(typeof m=="function"&&(Fo(t,n,m,r),c=t.memoizedState),(s=st||Ai(t,n,s,r,v,c,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Mc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Oe(t.type,s),a.props=d,g=t.pendingProps,v=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Me(c):(c=we(n)?It:ue.current,c=pn(t,c));var S=n.getDerivedStateFromProps;(m=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||v!==c)&&$i(t,a,r,c),st=!1,v=t.memoizedState,a.state=v,il(t,r,a,l);var h=t.memoizedState;s!==g||v!==h||ye.current||st?(typeof S=="function"&&(Fo(t,n,S,r),h=t.memoizedState),(d=st||Ai(t,n,d,r,v,h,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Uo(e,t,n,r,o,l)}function Uo(e,t,n,r,l,o){ou(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Pi(t,n,!1),rt(e,t,o);r=t.stateNode,Ip.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=mn(t,e.child,null,o),t.child=mn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,l&&Pi(t,n,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?Ti(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ti(e,t.context,!1),Ta(e,t.containerInfo)}function Xi(e,t,n,r,l){return fn(),Na(l),t.flags|=256,pe(e,t,n,r),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,t,n){var r=t.pendingProps,l=K.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(K,l&1),e===null)return Oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Cl(a,r,0,null),e=Mt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Ho,e):Fa(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Op(e,t,a,r,s,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,s=l.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=wt(l,c),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=wt(s,o):(o=Mt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Vo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ho,r}return o=e.child,e=o.sibling,r=wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fa(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,r){return r!==null&&Na(r),mn(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Op(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(C(422))),Er(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Cl({mode:"visible",children:r.children},l,0,null),o=Mt(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mn(t,e.child,null,a),t.child.memoizedState=Vo(a),t.memoizedState=Ho,o);if(!(t.mode&1))return Er(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(C(419)),r=eo(o,r,void 0),Er(e,t,a,r)}if(s=(a&e.childLanes)!==0,xe||s){if(r=re,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,nt(e,l),$e(r,e,l,-1))}return Va(),r=eo(Error(C(421))),Er(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=ht(l.nextSibling),Ne=t,Q=!0,Fe=null,e!==null&&(ze[Te++]=Ge,ze[Te++]=Je,ze[Te++]=Ot,Ge=e.id,Je=e.overflow,Ot=t),t=Fa(t,r.children),t.flags|=4096,t)}function Ki(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ro(e.return,t,n)}function to(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function su(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ki(e,n,t);else if(e.tag===19)Ki(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),to(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rp(e,t,n){switch(t.tag){case 3:au(t),fn();break;case 5:Lc(t);break;case 1:we(t.type)&&nl(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(ol,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?iu(e,t,n):(H(K,K.current&1),e=rt(e,t,n),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return su(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,lu(e,t,n)}return rt(e,t,n)}var cu,Wo,uu,du;cu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};uu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(Xe.current);var o=null;switch(n){case"input":l=fo(e,l),r=fo(e,r),o=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":l=ho(e,l),r=ho(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=el)}xo(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Un.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Un.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&V("scroll",e),o||s===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};du=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fp(e,t,n){var r=t.pendingProps;switch(Sa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return we(t.type)&&tl(),se(t),null;case 3:return r=t.stateNode,gn(),W(ye),W(ue),Da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Zo(Fe),Fe=null))),Wo(e,t),se(t),null;case 5:Pa(t);var l=Pt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)uu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return se(t),null}if(e=Pt(Xe.current),_r(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Jn]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<Dn.length;l++)V(Dn[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ri(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":oi(r,o),V("invalid",r)}xo(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),l=["children",""+s]):Un.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&V("scroll",r)}switch(n){case"input":vr(r),li(r,o,!0);break;case"textarea":vr(r),ai(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=el)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=As(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ve]=t,e[Jn]=r,cu(e,t,!1,!1),t.stateNode=e;e:{switch(a=yo(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<Dn.length;l++)V(Dn[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":ri(e,r),l=fo(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),V("invalid",e);break;case"textarea":oi(e,r),l=ho(e,r),V("invalid",e);break;default:l=r}xo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Us(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$s(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Hn(e,c):typeof c=="number"&&Hn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Un.hasOwnProperty(o)?c!=null&&o==="onScroll"&&V("scroll",e):c!=null&&sa(e,o,c,a))}switch(n){case"input":vr(e),li(e,r,!1);break;case"textarea":vr(e),ai(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)du(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Pt(er.current),Pt(Xe.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return se(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Se!==null&&t.mode&1&&!(t.flags&128))zc(),fn(),t.flags|=98560,o=!1;else if(o=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Ve]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Fe!==null&&(Zo(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Va())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return gn(),Wo(e,t),e===null&&qn(t.stateNode.containerInfo),se(t),null;case 10:return Ca(t.type._context),se(t),null;case 17:return we(t.type)&&tl(),se(t),null;case 19:if(W(K),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Cn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=sl(e),a!==null){for(t.flags|=128,Cn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>vn&&(t.flags|=128,r=!0,Cn(o,!1),t.lanes=4194304)}else{if(!r)if(e=sl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Q)return se(t),null}else 2*J()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=K.current,H(K,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Ap(e,t){switch(Sa(t),t.tag){case 1:return we(t.type)&&tl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),W(ye),W(ue),Da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pa(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return gn(),null;case 10:return Ca(t.type._context),null;case 22:case 23:return Ha(),null;case 24:return null;default:return null}}var zr=!1,ce=!1,$p=typeof WeakSet=="function"?WeakSet:Set,T=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Qo(e,t,n){try{n()}catch(r){G(e,t,r)}}var Yi=!1;function Bp(e,t){if(zo=Gr,e=hc(),ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,d=0,m=0,g=e,v=null;t:for(;;){for(var S;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==o||r!==0&&g.nodeType!==3||(c=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(S=g.firstChild)!==null;)v=g,g=S;for(;;){if(g===e)break t;if(v===n&&++d===l&&(s=a),v===o&&++m===r&&(c=a),(S=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=S}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(To={focusedElem:e,selectionRange:n},Gr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var w=h.memoizedProps,D=h.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Oe(t.type,w),D);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return h=Yi,Yi=!1,h}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Qo(t,n,o)}l=l.next}while(l!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Jn],delete t[Mo],delete t[Sp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fu(e){return e.tag===5||e.tag===3||e.tag===4}function qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=el));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var le=null,Re=!1;function at(e,t,n){for(n=n.child;n!==null;)mu(e,t,n),n=n.sibling}function mu(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:ce||nn(n,t);case 6:var r=le,l=Re;le=null,at(e,t,n),le=r,Re=l,le!==null&&(Re?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Re?(e=le,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Xn(e)):Kl(le,n.stateNode));break;case 4:r=le,l=Re,le=n.stateNode.containerInfo,Re=!0,at(e,t,n),le=r,Re=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Qo(n,t,a),l=l.next}while(l!==r)}at(e,t,n);break;case 1:if(!ce&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,at(e,t,n),ce=r):at(e,t,n);break;default:at(e,t,n)}}function Gi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $p),t.forEach(function(r){var l=qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Re=!1;break e;case 3:le=s.stateNode.containerInfo,Re=!0;break e;case 4:le=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(le===null)throw Error(C(160));mu(o,a,l),le=null,Re=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){G(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gu(t,e),t=t.sibling}function gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Ue(e),r&4){try{An(3,e,e.return),jl(3,e)}catch(w){G(e,e.return,w)}try{An(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:Ie(t,e),Ue(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Ie(t,e),Ue(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var l=e.stateNode;try{Hn(l,"")}catch(w){G(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Rs(l,o),yo(s,a);var d=yo(s,o);for(a=0;a<c.length;a+=2){var m=c[a],g=c[a+1];m==="style"?Us(l,g):m==="dangerouslySetInnerHTML"?$s(l,g):m==="children"?Hn(l,g):sa(l,m,g,d)}switch(s){case"input":mo(l,o);break;case"textarea":Fs(l,o);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?ln(l,!!o.multiple,S,!1):v!==!!o.multiple&&(o.defaultValue!=null?ln(l,!!o.multiple,o.defaultValue,!0):ln(l,!!o.multiple,o.multiple?[]:"",!1))}l[Jn]=o}catch(w){G(e,e.return,w)}}break;case 6:if(Ie(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){G(e,e.return,w)}}break;case 3:if(Ie(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:Ie(t,e),Ue(e);break;case 13:Ie(t,e),Ue(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ba=J())),r&4&&Gi(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(d=ce)||m,Ie(t,e),ce=d):Ie(t,e),Ue(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(g=T=m;T!==null;){switch(v=T,S=v.child,v.tag){case 0:case 11:case 14:case 15:An(4,v,v.return);break;case 1:nn(v,v.return);var h=v.stateNode;if(typeof h.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(w){G(r,n,w)}}break;case 5:nn(v,v.return);break;case 22:if(v.memoizedState!==null){Zi(g);continue}}S!==null?(S.return=v,T=S):Zi(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,c=g.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Bs("display",a))}catch(w){G(e,e.return,w)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(w){G(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ie(t,e),Ue(e),r&4&&Gi(e);break;case 21:break;default:Ie(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fu(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Hn(l,""),r.flags&=-33);var o=qi(e);Yo(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=qi(e);Ko(e,s,a);break;default:throw Error(C(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Up(e,t,n){T=e,hu(e)}function hu(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||zr;if(!a){var s=l.alternate,c=s!==null&&s.memoizedState!==null||ce;s=zr;var d=ce;if(zr=a,(ce=c)&&!d)for(T=l;T!==null;)a=T,c=a.child,a.tag===22&&a.memoizedState!==null?es(l):c!==null?(c.return=a,T=c):es(l);for(;o!==null;)T=o,hu(o),o=o.sibling;T=l,zr=s,ce=d}Ji(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Ji(e)}}function Ji(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Oi(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oi(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Xn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ce||t.flags&512&&Xo(t)}catch(v){G(t,t.return,v)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Zi(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function es(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(c){G(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){G(t,l,c)}}var o=t.return;try{Xo(t)}catch(c){G(t,o,c)}break;case 5:var a=t.return;try{Xo(t)}catch(c){G(t,a,c)}}}catch(c){G(t,t.return,c)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Hp=Math.ceil,dl=lt.ReactCurrentDispatcher,Aa=lt.ReactCurrentOwner,De=lt.ReactCurrentBatchConfig,A=0,re=null,Z=null,oe=0,be=0,rn=Nt(0),te=0,lr=null,Ft=0,_l=0,$a=0,$n=null,ve=null,Ba=0,vn=1/0,Ye=null,pl=!1,qo=null,xt=null,Tr=!1,pt=null,fl=0,Bn=0,Go=null,Hr=-1,Vr=0;function fe(){return A&6?J():Hr!==-1?Hr:Hr=J()}function yt(e){return e.mode&1?A&2&&oe!==0?oe&-oe:_p.transition!==null?(Vr===0&&(Vr=ec()),Vr):(e=U,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function $e(e,t,n,r){if(50<Bn)throw Bn=0,Go=null,Error(C(185));cr(e,n,r),(!(A&2)||e!==re)&&(e===re&&(!(A&2)&&(_l|=n),te===4&&ut(e,oe)),ke(e,r),n===1&&A===0&&!(t.mode&1)&&(vn=J()+500,bl&&jt()))}function ke(e,t){var n=e.callbackNode;_d(e,t);var r=qr(e,e===re?oe:0);if(r===0)n!==null&&ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ci(n),t===1)e.tag===0?jp(ts.bind(null,e)):_c(ts.bind(null,e)),kp(function(){!(A&6)&&jt()}),n=null;else{switch(tc(r)){case 1:n=fa;break;case 4:n=Js;break;case 16:n=Yr;break;case 536870912:n=Zs;break;default:n=Yr}n=Nu(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(Hr=-1,Vr=0,A&6)throw Error(C(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=qr(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ml(e,r);else{t=r;var l=A;A|=2;var o=yu();(re!==e||oe!==t)&&(Ye=null,vn=J()+500,Dt(e,t));do try{Qp();break}catch(s){xu(e,s)}while(1);_a(),dl.current=o,A=l,Z!==null?t=0:(re=null,oe=0,t=te)}if(t!==0){if(t===2&&(l=No(e),l!==0&&(r=l,t=Jo(e,l))),t===1)throw n=lr,Dt(e,0),ut(e,r),ke(e,J()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!Vp(l)&&(t=ml(e,r),t===2&&(o=No(e),o!==0&&(r=o,t=Jo(e,o))),t===1))throw n=lr,Dt(e,0),ut(e,r),ke(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Et(e,ve,Ye);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Ba+500-J(),10<t)){if(qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Do(Et.bind(null,e,ve,Ye),t);break}Et(e,ve,Ye);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ae(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=Do(Et.bind(null,e,ve,Ye),r);break}Et(e,ve,Ye);break;case 5:Et(e,ve,Ye);break;default:throw Error(C(329))}}}return ke(e,J()),e.callbackNode===n?vu.bind(null,e):null}function Jo(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=ml(e,t),e!==2&&(t=ve,ve=n,t!==null&&Zo(t)),e}function Zo(e){ve===null?ve=e:ve.push.apply(ve,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Be(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~$a,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ae(t),r=1<<n;e[n]=-1,t&=~r}}function ts(e){if(A&6)throw Error(C(327));un();var t=qr(e,0);if(!(t&1))return ke(e,J()),null;var n=ml(e,t);if(e.tag!==0&&n===2){var r=No(e);r!==0&&(t=r,n=Jo(e,r))}if(n===1)throw n=lr,Dt(e,0),ut(e,t),ke(e,J()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,ve,Ye),ke(e,J()),null}function Ua(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(vn=J()+500,bl&&jt())}}function At(e){pt!==null&&pt.tag===0&&!(A&6)&&un();var t=A;A|=1;var n=De.transition,r=U;try{if(De.transition=null,U=1,e)return e()}finally{U=r,De.transition=n,A=t,!(A&6)&&jt()}}function Ha(){be=rn.current,W(rn)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wp(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Sa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&tl();break;case 3:gn(),W(ye),W(ue),Da();break;case 5:Pa(r);break;case 4:gn();break;case 13:W(K);break;case 19:W(K);break;case 10:Ca(r.type._context);break;case 22:case 23:Ha()}n=n.return}if(re=e,Z=e=wt(e.current,null),oe=be=t,te=0,lr=null,$a=_l=Ft=0,ve=$n=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}Tt=null}return e}function xu(e,t){do{var n=Z;try{if(_a(),$r.current=ul,cl){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}cl=!1}if(Rt=0,ne=ee=Y=null,Fn=!1,tr=0,Aa.current=null,n===null||n.return===null){te=1,lr=t,Z=null;break}e:{var o=e,a=n.return,s=n,c=t;if(t=oe,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Ui(a);if(S!==null){S.flags&=-257,Hi(S,a,s,o,t),S.mode&1&&Bi(o,d,t),t=S,c=d;var h=t.updateQueue;if(h===null){var w=new Set;w.add(c),t.updateQueue=w}else h.add(c);break e}else{if(!(t&1)){Bi(o,d,t),Va();break e}c=Error(C(426))}}else if(Q&&s.mode&1){var D=Ui(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Hi(D,a,s,o,t),Na(hn(c,s));break e}}o=c=hn(c,s),te!==4&&(te=2),$n===null?$n=[o]:$n.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=tu(o,c,t);Ii(o,f);break e;case 1:s=c;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=nu(o,s,t);Ii(o,x);break e}}o=o.return}while(o!==null)}ku(n)}catch(y){t=y,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function yu(){var e=dl.current;return dl.current=ul,e===null?ul:e}function Va(){(te===0||te===3||te===2)&&(te=4),re===null||!(Ft&268435455)&&!(_l&268435455)||ut(re,oe)}function ml(e,t){var n=A;A|=2;var r=yu();(re!==e||oe!==t)&&(Ye=null,Dt(e,t));do try{Wp();break}catch(l){xu(e,l)}while(1);if(_a(),A=n,dl.current=r,Z!==null)throw Error(C(261));return re=null,oe=0,te}function Wp(){for(;Z!==null;)wu(Z)}function Qp(){for(;Z!==null&&!vd();)wu(Z)}function wu(e){var t=Su(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?ku(e):Z=t,Aa.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ap(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=Fp(n,t,be),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Et(e,t,n){var r=U,l=De.transition;try{De.transition=null,U=1,Xp(e,t,n,r)}finally{De.transition=l,U=r}return null}function Xp(e,t,n,r){do un();while(pt!==null);if(A&6)throw Error(C(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cd(e,o),e===re&&(Z=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tr||(Tr=!0,Nu(Yr,function(){return un(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=De.transition,De.transition=null;var a=U;U=1;var s=A;A|=4,Aa.current=null,Bp(e,n),gu(n,e),fp(To),Gr=!!zo,To=zo=null,e.current=n,Up(n),xd(),A=s,U=a,De.transition=o}else e.current=n;if(Tr&&(Tr=!1,pt=e,fl=l),o=e.pendingLanes,o===0&&(xt=null),kd(n.stateNode),ke(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(pl)throw pl=!1,e=qo,qo=null,e;return fl&1&&e.tag!==0&&un(),o=e.pendingLanes,o&1?e===Go?Bn++:(Bn=0,Go=e):Bn=0,jt(),null}function un(){if(pt!==null){var e=tc(fl),t=De.transition,n=U;try{if(De.transition=null,U=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,fl=0,A&6)throw Error(C(331));var l=A;for(A|=4,T=e.current;T!==null;){var o=T,a=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(T=d;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:An(8,m,o)}var g=m.child;if(g!==null)g.return=m,T=g;else for(;T!==null;){m=T;var v=m.sibling,S=m.return;if(pu(m),m===d){T=null;break}if(v!==null){v.return=S,T=v;break}T=S}}}var h=o.alternate;if(h!==null){var w=h.child;if(w!==null){h.child=null;do{var D=w.sibling;w.sibling=null,w=D}while(w!==null)}}T=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,T=a;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:An(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var u=e.current;for(T=u;T!==null;){a=T;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,T=p;else e:for(a=u;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:jl(9,s)}}catch(y){G(s,s.return,y)}if(s===a){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(A=l,jt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{U=n,De.transition=t}}return!1}function ns(e,t,n){t=hn(n,t),t=tu(e,t,1),e=vt(e,t,1),t=fe(),e!==null&&(cr(e,1,t),ke(e,t))}function G(e,t,n){if(e.tag===3)ns(e,e,n);else for(;t!==null;){if(t.tag===3){ns(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=hn(n,e),e=nu(t,e,1),t=vt(t,e,1),e=fe(),t!==null&&(cr(t,1,e),ke(t,e));break}}t=t.return}}function Kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(te===4||te===3&&(oe&130023424)===oe&&500>J()-Ba?Dt(e,0):$a|=n),ke(e,t)}function bu(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=fe();e=nt(e,t),e!==null&&(cr(e,t,n),ke(e,n))}function Yp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bu(e,n)}function qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),bu(e,n)}var Su;Su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Rp(e,t,n);xe=!!(e.flags&131072)}else xe=!1,Q&&t.flags&1048576&&Cc(t,ll,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var l=pn(t,ue.current);cn(t,n),l=La(null,t,r,e,l,n);var o=Ia();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,nl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,za(t),l.updater=Nl,t.stateNode=l,l._reactInternals=t,Ao(t,r,e,n),t=Uo(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&ba(t),pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Jp(r),e=Oe(r,e),l){case 0:t=Bo(null,t,r,e,n);break e;case 1:t=Qi(null,t,r,e,n);break e;case 11:t=Vi(null,t,r,e,n);break e;case 14:t=Wi(null,t,r,Oe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Bo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Qi(e,t,r,l,n);case 3:e:{if(au(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Mc(e,t),il(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=hn(Error(C(423)),t),t=Xi(e,t,r,n,l);break e}else if(r!==l){l=hn(Error(C(424)),t),t=Xi(e,t,r,n,l);break e}else for(Se=ht(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,Fe=null,n=Pc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===l){t=rt(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Oo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Po(r,l)?a=null:o!==null&&Po(r,o)&&(t.flags|=32),ou(e,t),pe(e,t,a,n),t.child;case 6:return e===null&&Oo(t),null;case 13:return iu(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Vi(e,t,r,l,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,H(ol,r._currentValue),r._currentValue=a,o!==null)if(Be(o.value,a)){if(o.children===l.children&&!ye.current){t=rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ze(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ro(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(C(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ro(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,cn(t,n),l=Me(l),r=r(l),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Wi(e,t,r,l,n);case 15:return ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ur(e,t),t.tag=1,we(r)?(e=!0,nl(t)):e=!1,cn(t,n),eu(t,r,l),Ao(t,r,l,n),Uo(null,t,r,!0,e,n);case 19:return su(e,t,n);case 22:return lu(e,t,n)}throw Error(C(156,t.tag))};function Nu(e,t){return Gs(e,t)}function Gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Gp(e,t,n,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jp(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===da)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")Wa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xt:return Mt(n.children,l,o,t);case ca:a=8,l|=8;break;case so:return e=Pe(12,n,t,l|2),e.elementType=so,e.lanes=o,e;case co:return e=Pe(13,n,t,l),e.elementType=co,e.lanes=o,e;case uo:return e=Pe(19,n,t,l),e.elementType=uo,e.lanes=o,e;case Ls:return Cl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ds:a=10;break e;case Ms:a=9;break e;case ua:a=11;break e;case da:a=14;break e;case it:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Pe(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Mt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Ls,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qa(e,t,n,r,l,o,a,s,c){return e=new Zp(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(o),e}function ef(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ju(e){if(!e)return bt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(we(n))return jc(e,n,t)}return t}function _u(e,t,n,r,l,o,a,s,c){return e=Qa(n,r,!0,e,l,o,a,s,c),e.context=ju(null),n=e.current,r=fe(),l=yt(n),o=Ze(r,l),o.callback=t??null,vt(n,o,l),e.current.lanes=l,cr(e,l,r),ke(e,r),e}function El(e,t,n,r){var l=t.current,o=fe(),a=yt(l);return n=ju(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(l,t,a),e!==null&&($e(e,l,a,o),Ar(e,l,a)),a}function gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xa(e,t){rs(e,t),(e=e.alternate)&&rs(e,t)}function tf(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ka(e){this._internalRoot=e}zl.prototype.render=Ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));El(e,t,null,null)};zl.prototype.unmount=Ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){El(null,e,null,null)}),t[tt]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&ac(e)}};function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ls(){}function nf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=gl(a);o.call(d)}}var a=_u(t,r,e,0,null,!1,!1,"",ls);return e._reactRootContainer=a,e[tt]=a.current,qn(e.nodeType===8?e.parentNode:e),At(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=gl(c);s.call(d)}}var c=Qa(e,0,!1,null,null,!1,!1,"",ls);return e._reactRootContainer=c,e[tt]=c.current,qn(e.nodeType===8?e.parentNode:e),At(function(){El(t,c,n,r)}),c}function Pl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var c=gl(a);s.call(c)}}El(t,a,e,l)}else a=nf(n,t,e,l,r);return gl(a)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(ma(t,n|1),ke(t,J()),!(A&6)&&(vn=J()+500,jt()))}break;case 13:At(function(){var r=nt(e,1);if(r!==null){var l=fe();$e(r,e,1,l)}}),Xa(e,1)}};ga=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=fe();$e(t,e,134217728,n)}Xa(e,134217728)}};rc=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=fe();$e(n,e,t,r)}Xa(e,t)}};lc=function(){return U};oc=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ko=function(e,t,n){switch(t){case"input":if(mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=kl(r);if(!l)throw Error(C(90));Os(r),mo(r,l)}}}break;case"textarea":Fs(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Ws=Ua;Qs=At;var rf={usingClientEntryPoint:!1,Events:[dr,Gt,kl,Hs,Vs,Ua]},En={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lf={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{vl=Pr.inject(lf),Qe=Pr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rf;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ya(t))throw Error(C(200));return ef(e,t,null,n)};_e.createRoot=function(e,t){if(!Ya(e))throw Error(C(299));var n=!1,r="",l=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Qa(e,1,!1,null,null,n,!1,r,l),e[tt]=t.current,qn(e.nodeType===8?e.parentNode:e),new Ka(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Ys(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return At(e)};_e.hydrate=function(e,t,n){if(!Tl(t))throw Error(C(200));return Pl(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Ya(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=_u(t,null,e,1,n??null,l,!1,o,a),e[tt]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new zl(t)};_e.render=function(e,t,n){if(!Tl(t))throw Error(C(200));return Pl(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(C(40));return e._reactRootContainer?(At(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};_e.unstable_batchedUpdates=Ua;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Tl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Pl(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function Eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eu)}catch(e){console.error(e)}}Eu(),Es.exports=_e;var of=Es.exports,os=of;ao.createRoot=os.createRoot,ao.hydrateRoot=os.hydrateRoot;const as=[{id:"dashboard",icon:"⚔️",label:"Quests"},{id:"focus",icon:"🔮",label:"Focus"},{id:"inventory",icon:"🎒",label:"Gear"},{id:"shop",icon:"🛒",label:"Shop"},{id:"rewards",icon:"✨",label:"Rewards"},{id:"talents",icon:"🌟",label:"Talents"}];function af({user:e,activeView:t,onNavigate:n,pendingCount:r,newLoot:l=!1}){const o=Math.round(e.xp/e.xpToNext*100),a=s=>s.id==="dashboard"&&r>0?r:s.id==="talents"&&e.talentPoints>0?"!":s.id==="inventory"&&l?"●":null;return i.jsxs(i.Fragment,{children:[i.jsxs("nav",{className:"sidebar",children:[i.jsxs("div",{className:"sidebar-logo",children:[i.jsx("div",{className:"logo-icon",children:"⚔"}),i.jsxs("div",{children:[i.jsx("div",{className:"logo-title",children:"QuestLog"}),i.jsx("div",{className:"logo-sub",children:"ADHD Task Manager"})]})]}),i.jsxs("div",{className:"sidebar-profile",children:[i.jsx("div",{className:"profile-avatar",children:e.displayName[0]}),i.jsxs("div",{className:"profile-info",children:[i.jsx("div",{className:"profile-name",children:e.displayName}),i.jsx("div",{className:"profile-title",children:e.title})]})]}),i.jsx("div",{className:"sidebar-stats",children:[{icon:"⚡",label:"Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Streak",value:`${e.streak}d`,color:"var(--amber)"}].map(s=>i.jsxs("div",{className:"stat-chip",children:[i.jsx("span",{className:"stat-icon",children:s.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"stat-label",children:s.label}),i.jsx("div",{className:"stat-value",style:{color:s.color},children:s.value})]})]},s.label))}),i.jsxs("div",{className:"sidebar-xp",children:[i.jsxs("div",{className:"sidebar-xp-labels",children:[i.jsx("span",{className:"text-secondary text-xs",children:"XP"}),i.jsxs("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:[e.xp,"/",e.xpToNext]})]}),i.jsx("div",{className:"xp-bar-track",children:i.jsx("div",{className:"xp-bar-fill",style:{width:`${o}%`}})}),i.jsxs("div",{className:"text-xs text-muted",style:{marginTop:3},children:[e.xpToNext-e.xp," to Lv.",e.level+1]})]}),i.jsx("div",{className:"sidebar-nav",children:as.map(s=>{const c=a(s);return i.jsxs("button",{className:`nav-item ${t===s.id?"active":""}`,onClick:()=>n(s.id),children:[i.jsx("span",{className:"nav-icon",children:s.icon}),i.jsx("span",{className:"nav-label",children:s.label}),c&&i.jsx("span",{className:`nav-badge ${s.id==="inventory"?"loot-badge":s.id==="talents"?"talent-badge":""}`,children:c})]},s.id)})})]}),i.jsx("nav",{className:"bottom-nav",children:as.map(s=>{const c=a(s);return i.jsxs("button",{className:`bottom-tab ${t===s.id?"active":""}`,onClick:()=>n(s.id),children:[i.jsx("span",{className:"bottom-tab-icon",children:s.icon}),i.jsx("span",{className:"bottom-tab-label",children:s.label}),c&&i.jsx("span",{className:"bottom-tab-badge",children:c})]},s.id)})}),i.jsx("style",{children:`
        /* ── Desktop sidebar ── */
        .sidebar {
          width: 220px;
          flex-shrink: 0;
          background: var(--bg-surface);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding: var(--space-5) var(--space-4);
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding-bottom: var(--space-4);
          border-bottom: 1px solid var(--border-subtle);
        }
        .logo-icon {
          font-size: 1.3rem;
          width: 36px; height: 36px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-family: var(--font-display);
          color: var(--gold);
        }
        .logo-title { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--gold); }
        .logo-sub { font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

        .sidebar-profile {
          display: flex; align-items: center; gap: var(--space-2);
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-2) var(--space-3);
        }
        .profile-avatar {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; font-weight: 800; color: white; flex-shrink: 0;
        }
        .profile-name  { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); }
        .profile-title { font-size: 0.65rem; color: var(--purple); font-style: italic; }

        .sidebar-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
        .stat-chip {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-2) 4px; text-align: center;
        }
        .stat-icon { font-size: 0.9rem; }
        .stat-label { font-size: 0.58rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
        .stat-value { font-size: 0.85rem; font-weight: 800; }

        .sidebar-xp { display: flex; flex-direction: column; gap: var(--space-1); }
        .sidebar-xp-labels { display: flex; justify-content: space-between; align-items: center; }

        .sidebar-nav { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .nav-item {
          display: flex; align-items: center; gap: var(--space-3);
          padding: var(--space-2) var(--space-3); border-radius: var(--radius-md);
          background: transparent; color: var(--text-secondary);
          font-size: 0.85rem; font-weight: 600; font-family: var(--font-body);
          width: 100%; text-align: left;
          transition: all 0.15s; position: relative;
          min-height: 40px;
        }
        .nav-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .nav-item.active { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-glow); }
        .nav-icon  { font-size: 1rem; }
        .nav-label { flex: 1; }
        .nav-badge {
          background: var(--coral); color: white;
          border-radius: var(--radius-full); min-width: 18px; height: 18px;
          padding: 0 5px; display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.65rem; font-weight: 800;
        }
        .talent-badge { background: var(--purple); }
        .loot-badge   { background: var(--gold); color: var(--text-inverse); }

        /* ── Mobile bottom nav ── */
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          background: var(--bg-surface);
          border-top: 1px solid var(--border-subtle);
          padding-bottom: env(safe-area-inset-bottom, 0);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .bottom-tab {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: 8px 4px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.15s;
          position: relative;
          min-height: 56px;
          /* Ensure touch target */
          min-width: 44px;
        }

        .bottom-tab.active {
          color: var(--gold);
        }

        .bottom-tab.active .bottom-tab-icon {
          filter: drop-shadow(0 0 6px var(--gold-glow));
        }

        .bottom-tab-icon  { font-size: 1.3rem; line-height: 1; }
        .bottom-tab-label { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.02em; }

        .bottom-tab-badge {
          position: absolute;
          top: 6px;
          right: calc(50% - 16px);
          background: var(--coral);
          color: white;
          border-radius: var(--radius-full);
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.58rem;
          font-weight: 800;
          border: 1px solid var(--bg-surface);
        }

        @media (max-width: 768px) {
          .sidebar      { display: none; }
          .bottom-nav   { display: flex; }
        }

        @media (min-width: 769px) {
          .bottom-nav { display: none; }
        }
      `})]})}const fr={ring_focus_1:{id:"ring_focus_1",name:"Ring of Slight Attention",slot:"ring",rarity:"common",icon:"💍",color:"#9E9BC0",stats:{focus:5,critChance:.02},effects:[{type:"task_xp_bonus",value:.1}],flavor:"You almost remember what you were doing."},ring_focus_2:{id:"ring_focus_2",name:"Band of Hyperfocus",slot:"ring",rarity:"uncommon",icon:"💍",color:"#4FC3F7",stats:{focus:14,critChance:.05,critDamage:.2},effects:[{type:"task_xp_bonus",value:.2}],flavor:"Time ceases to exist. So does lunch."},ring_speed_1:{id:"ring_speed_1",name:"Signet of Urgency",slot:"ring",rarity:"common",icon:"💍",color:"#F5A623",stats:{speed:.15},flavor:"Slightly faster. Slightly."},helmet_clarity_1:{id:"helmet_clarity_1",name:"Crown of Clarity",slot:"head",rarity:"uncommon",icon:"👑",color:"#F5C842",stats:{focus:8,critChance:.03},effects:[{type:"task_xp_bonus",value:.12}],flavor:"Your thoughts feel just slightly less like soup."},helmet_steel_1:{id:"helmet_steel_1",name:"Helm of Perseverance",slot:"head",rarity:"common",icon:"⛑️",color:"#B0BEC5",stats:{resilience:10,attack:3},flavor:"Dings from every missed deadline."},chest_focus_1:{id:"chest_focus_1",name:"Robe of Deep Work",slot:"body",rarity:"rare",icon:"🥋",color:"#B39DDB",stats:{focus:18,attack:5},effects:[{type:"task_xp_bonus",value:.25},{type:"focus_session_bonus",value:.15}],flavor:"Worn by those who have achieved inbox zero."},chest_iron_1:{id:"chest_iron_1",name:"Vest of Routine",slot:"body",rarity:"common",icon:"🦺",color:"#78909C",stats:{resilience:15,speed:.1},flavor:"Consistent. Reliable. Slightly itchy."},gloves_grip_1:{id:"gloves_grip_1",name:"Gloves of Getting Things Done",slot:"gloves",rarity:"common",icon:"🧤",color:"#FF8A65",stats:{attack:8,critChance:.02},flavor:'"Just start." — the gloves'},gloves_crit_1:{id:"gloves_crit_1",name:"Fingers of Fortune",slot:"gloves",rarity:"uncommon",icon:"🧤",color:"#FFD54F",stats:{critChance:.08,critDamage:.3},flavor:"Your pointing finger has become significantly more judgy."},legs_endure_1:{id:"legs_endure_1",name:"Leggings of Long Sessions",slot:"legs",rarity:"uncommon",icon:"👖",color:"#5C6BC0",stats:{resilience:12,focus:6},effects:[{type:"focus_session_bonus",value:.1}],flavor:"Technically pajamas. No one needs to know."},legs_swift_1:{id:"legs_swift_1",name:"Trousers of Momentum",slot:"legs",rarity:"common",icon:"👗",color:"#26A69A",stats:{speed:.12,attack:4},flavor:"Moving faster. Destination: unclear."},boots_speed_1:{id:"boots_speed_1",name:"Restless Boots",slot:"boots",rarity:"common",icon:"👟",color:"#66BB6A",stats:{speed:.2},flavor:"They tap. Constantly."},boots_speed_2:{id:"boots_speed_2",name:"Sprinters of Sudden Burst",slot:"boots",rarity:"uncommon",icon:"👟",color:"#26C6DA",stats:{speed:.35,critChance:.03},flavor:"Perfect for last-minute deadline runs."},necklace_resolve_1:{id:"necklace_resolve_1",name:"Amulet of Resolve",slot:"necklace",rarity:"rare",icon:"📿",color:"#EF5350",stats:{resilience:20,focus:10,attack:6},effects:[{type:"task_xp_bonus",value:.15}],flavor:'"You will finish this." It means it.'}},We={common:{color:"#9E9BC0",bg:"rgba(158,155,192,0.12)",label:"Common"},uncommon:{color:"#5CDD8B",bg:"rgba(92,221,139,0.12)",label:"Uncommon"},rare:{color:"#4FC3F7",bg:"rgba(79,195,247,0.12)",label:"Rare"},epic:{color:"#B39DDB",bg:"rgba(179,157,219,0.15)",label:"Epic"},legendary:{color:"#F5C842",bg:"rgba(245,200,66,0.15)",label:"Legendary"}};function sf(e){return fr[e]||null}const cf={common:30,uncommon:60,rare:120,epic:220,legendary:400};function qa(e){return e?cf[e.rarity]||30:0}function zu(e){const t={attack:0,speed:0,critChance:0,critDamage:0,focus:0,resilience:0},n=[];return Object.values(e).forEach(r=>{if(!r)return;const l=fr[r];l&&(Object.entries(l.stats||{}).forEach(([o,a])=>{t[o]=(t[o]||0)+a}),(l.effects||[]).forEach(o=>n.push(o)))}),e.ring&&e.ring2&&(t.critChance+=.05),{stats:t,effects:n}}const Ht={attack:10,speed:1,critChance:.05,critDamage:1.5,focus:0,resilience:0},uf=2e3;function Dr(e,t,n={}){const r={attack:Math.floor(e*2.5),critChance:e*.002,speed:0,critDamage:0,focus:0,resilience:0},{stats:l}=zu(t);return{attack:Ht.attack+r.attack+(l.attack||0)+(n.attack||0),speed:Ht.speed+(l.speed||0)+(n.speed||0),critChance:Math.min(.75,Ht.critChance+r.critChance+(l.critChance||0)+(n.critChance||0)),critDamage:Ht.critDamage+(l.critDamage||0)+(n.critDamage||0),focus:Ht.focus+(l.focus||0)+(n.focus||0),resilience:Ht.resilience+(l.resilience||0)+(n.resilience||0)}}function df(e,t=[]){let n=e.attack,r=e.critChance;t.forEach(a=>{a.type==="attack_mult"&&(n*=a.value),a.type==="crit_boost"&&(r=Math.min(.9,r+a.value)),a.type==="slow_player"&&(n*=a.value)});const l=Math.random()<r;return{damage:Math.round(l?n*e.critDamage:n*(.9+Math.random()*.2)),isCrit:l}}function pf(e){return e?1.4:1}function ff(e){return e>=5?1.5:e>=3?1.3:e>=1?1.15:1}function mf(e,t){const n=Math.min(.7,t*.03);return Math.max(1,Math.round(e*(1-n)))}function gf(e,t,n){if(!e.phases)return null;for(const r of e.phases){const l=e.max_hp*r.hp_threshold;if(n>l&&t<=l)return r}return null}function hf(e,t,n){const r=Math.max(0,(n-t)/1e3),l=8*60*60,o=Math.min(r,l),a=e.attack*e.speed,s=Math.round(a*o*.5),c=Math.round(s*.015),d=Math.round(o/3600*10)/10;return{damage:s,gold:c,offlineSec:o,hours:d}}function is(e){const[t,n]=e.gold_drop,r=t+Math.floor(Math.random()*(n-t+1)),l=e.xp_drop,o=[];return(e.loot_table||[]).forEach(a=>{Math.random()<a.chance&&o.push(a.item)}),{gold:r,xp:l,loot:o}}function Tu(e){const t=e.attack*(1+e.critChance*(e.critDamage-1));return Math.round(t*e.speed)}function vf(){const[e,t]=_.useState([]),[n,r]=_.useState([]),l=_.useRef(0),o=_.useCallback(s=>{const c=`toast-${Date.now()}-${l.current++}`,d={...s,id:c,ts:Date.now()};t(m=>[...m.slice(-3),d]),r(m=>[d,...m].slice(0,60)),setTimeout(()=>{t(m=>m.filter(g=>g.id!==c))},s.duration||3500)},[]),a=_.useCallback(s=>{t(c=>c.filter(d=>d.id!==s))},[]);return{toasts:e,log:n,addToast:o,dismissToast:a}}function xf({toasts:e,onDismiss:t}){return i.jsxs("div",{className:"toast-stack",children:[e.map(n=>i.jsx(yf,{toast:n,onDismiss:t},n.id)),i.jsx("style",{children:`
        .toast-stack {
          position: fixed;
          top: 12px;
          right: 12px;
          z-index: 500;
          display: flex;
          flex-direction: column;
          gap: 8px;
          pointer-events: none;
          max-width: 300px;
          width: calc(100vw - 24px);
        }
        @media (min-width: 480px) {
          .toast-stack { width: 300px; }
        }
      `})]})}function yf({toast:e,onDismiss:t}){var a;const[n,r]=_.useState(!1);_.useEffect(()=>{const s=requestAnimationFrame(()=>r(!0));return()=>cancelAnimationFrame(s)},[]);const l={kill:{border:"var(--coral)",bg:"rgba(255,101,132,0.12)",icon:"☠"},boss:{border:"var(--gold)",bg:"rgba(245,200,66,0.14)",icon:"👑"},loot:{border:"var(--green)",bg:"rgba(92,221,139,0.12)",icon:"🎁"},offline:{border:"var(--xp-blue)",bg:"rgba(79,195,247,0.1)",icon:"🌙"},level:{border:"var(--gold)",bg:"rgba(245,200,66,0.14)",icon:"⭐"},default:{border:"var(--border-default)",bg:"var(--bg-elevated)",icon:"✦"}},o=l[e.type]||l.default;return i.jsxs("div",{className:`toast-item ${n?"visible":""}`,style:{borderColor:o.border,background:o.bg},onClick:()=>t(e.id),children:[i.jsx("span",{className:"toast-icon",children:e.icon||o.icon}),i.jsxs("div",{className:"toast-body",children:[i.jsx("div",{className:"toast-title",children:e.title}),e.sub&&i.jsx("div",{className:"toast-sub",children:e.sub}),((a=e.loot)==null?void 0:a.length)>0&&i.jsx("div",{className:"toast-loot",children:e.loot.map(s=>{const c=sf(s);if(!c)return null;const d=We[c.rarity]||We.common;return i.jsxs("span",{className:"toast-loot-chip",style:{color:d.color,borderColor:d.color},children:[c.icon," ",c.name]},s)})})]}),i.jsx("div",{className:"toast-progress",style:{"--dur":`${e.duration||3500}ms`}})]})}function wf({log:e}){const[t,n]=_.useState(!1),r=e.slice(0,8);return i.jsxs("div",{className:"combat-log-wrap",children:[i.jsxs("button",{className:`log-toggle ${t?"open":""}`,onClick:()=>n(l=>!l),title:"Combat log",children:["📜 Log ",e.length>0&&i.jsx("span",{className:"log-count",children:e.length})]}),t&&i.jsxs("div",{className:"combat-log-panel",children:[i.jsxs("div",{className:"clp-header",children:[i.jsx("span",{className:"font-display",style:{fontSize:"0.75rem",color:"var(--gold)"},children:"Combat Log"}),i.jsx("button",{className:"btn btn-ghost",style:{fontSize:"0.8rem",padding:"2px 6px"},onClick:()=>n(!1),children:"×"})]}),r.length===0?i.jsx("div",{className:"clp-empty",children:"No events yet."}):r.map(l=>i.jsxs("div",{className:"clp-entry",children:[i.jsx("span",{className:"clp-icon",children:l.icon||"✦"}),i.jsxs("div",{className:"clp-content",children:[i.jsx("span",{className:"clp-title",children:l.title}),l.sub&&i.jsxs("span",{className:"clp-sub",children:[" — ",l.sub]})]}),i.jsx("span",{className:"clp-time",children:kf(l.ts)})]},l.id))]}),i.jsx("style",{children:`
        .combat-log-wrap { position: relative; }

        .log-toggle {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.65rem;
          font-weight: 700;
          font-family: var(--font-body);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          padding: 3px 8px;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .log-toggle:hover, .log-toggle.open {
          border-color: var(--border-default);
          color: var(--text-secondary);
        }

        .log-count {
          background: var(--coral);
          color: white;
          border-radius: var(--radius-full);
          padding: 0 4px;
          font-size: 0.6rem;
          font-weight: 800;
        }

        .combat-log-panel {
          position: fixed;
          bottom: calc(64px + env(safe-area-inset-bottom, 0px) + 8px);
          right: 8px;
          width: min(280px, calc(100vw - 16px));
          max-height: 240px;
          overflow-y: auto;
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          z-index: 200;
          animation: fadeInUp 0.2s var(--ease-out);
        }

        @media (min-width: 769px) {
          .combat-log-panel {
            position: absolute;
            bottom: calc(100% + 8px);
            right: 0;
            width: 280px;
          }
        }

        .clp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px 6px;
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 0;
          background: var(--bg-elevated);
        }

        .clp-empty {
          padding: 16px;
          text-align: center;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .clp-entry {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 7px 12px;
          border-bottom: 1px solid var(--border-subtle);
          font-size: 0.75rem;
        }
        .clp-entry:last-child { border-bottom: none; }

        .clp-icon { font-size: 0.85rem; flex-shrink: 0; margin-top: 1px; }
        .clp-content { flex: 1; line-height: 1.4; }
        .clp-title { color: var(--text-secondary); font-weight: 600; }
        .clp-sub   { color: var(--text-muted); }
        .clp-time  { color: var(--text-muted); font-size: 0.65rem; white-space: nowrap; flex-shrink: 0; }

        /* Toast styles */
        .toast-item {
          pointer-events: all;
          background: var(--bg-elevated);
          border: 1px solid;
          border-radius: var(--radius-lg);
          padding: 10px 12px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          box-shadow: var(--shadow-md);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.25s var(--ease-out), transform 0.25s var(--ease-spring);
        }

        .toast-item.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .toast-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

        .toast-body { flex: 1; min-width: 0; }
        .toast-title { font-size: 0.82rem; font-weight: 700; color: var(--text-primary); line-height: 1.3; }
        .toast-sub   { font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px; }

        .toast-loot {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 5px;
        }

        .toast-loot-chip {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: var(--radius-full);
          border: 1px solid;
          background: rgba(0,0,0,0.2);
        }

        /* Progress bar that shrinks as toast expires */
        .toast-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: currentColor;
          opacity: 0.3;
          transform-origin: left;
          animation: toastExpire var(--dur, 3500ms) linear forwards;
        }

        @keyframes toastExpire {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `})]})}function kf(e){const t=Math.round((Date.now()-e)/1e3);return t<60?`${t}s ago`:t<3600?`${Math.round(t/60)}m ago`:`${Math.round(t/3600)}h ago`}function bf({monster:e,currentHp:t,playerStats:n,activeBuffs:r=[],floatingNumbers:l=[],momentumMult:o=1,lowEnergyMode:a=!1,monstersKilled:s=0,onToggleLowEnergy:c,combatLog:d=[]}){var D,f,u;const[m,g]=_.useState(!1),v=Math.max(0,t/e.max_hp*100),S=Tu(n);_.useEffect(()=>{if(l.length>0){g(!0);const p=setTimeout(()=>g(!1),200);return()=>clearTimeout(p)}},[l.length]);const h=v>50?"#5CDD8B":v>25?"#F5A623":"#FF3860",w=(D=e.phases)==null?void 0:D.some(p=>Math.abs(v/100-p.hp_threshold)<.08);return i.jsxs("div",{className:`combat-strip ${a?"low-energy":""}`,children:[i.jsxs("div",{className:"combat-monster-section",children:[i.jsxs("div",{className:"combat-monster-info",children:[i.jsxs("div",{className:"combat-monster-name",style:{color:e.color},children:[e.name,e.isBoss&&i.jsx("span",{className:"boss-tag",children:"BOSS"})]}),i.jsxs("div",{className:"combat-hp-row",children:[i.jsxs("div",{className:"combat-hp-bar-track",children:[i.jsx("div",{className:"combat-hp-bar-fill",style:{width:`${v}%`,background:h,boxShadow:`0 0 8px ${h}60`}}),w&&i.jsx("div",{className:"phase-warn-line",style:{left:`${((u=(f=e.phases)==null?void 0:f[0])==null?void 0:u.hp_threshold)*100}%`}})]}),i.jsxs("div",{className:"combat-hp-text",children:[t.toLocaleString()," / ",e.max_hp.toLocaleString()]})]})]}),i.jsxs("div",{className:`combat-arena ${m?"shake":""}`,children:[i.jsxs("div",{className:"player-sprite",children:[i.jsx("div",{className:"sprite-figure player-figure",children:"🧙‍♂️"}),i.jsx("div",{className:"sprite-label",children:"You"}),r.length>0&&i.jsx("div",{className:"buff-indicators",children:r.map(p=>i.jsx("span",{className:"buff-pip",title:p.label,children:p.icon},p.id))})]}),i.jsx("div",{className:"attack-arrows",children:i.jsxs("div",{className:"arrow-row",children:[i.jsx("div",{className:"attack-arrow",style:{animationDelay:"0ms"},children:"→"}),i.jsx("div",{className:"attack-arrow",style:{animationDelay:"300ms"},children:"→"}),i.jsx("div",{className:"attack-arrow",style:{animationDelay:"600ms"},children:"→"})]})}),i.jsxs("div",{className:"monster-sprite",children:[i.jsx("div",{className:`sprite-figure monster-figure ${m?"monster-hit":""}`,style:{fontSize:e.isBoss?"2.2rem":"1.8rem"},children:e.sprite}),i.jsx("div",{className:"sprite-label",style:{color:e.color},children:e.isBoss?"⚡ BOSS":`Tier ${e.tier}`})]}),l.map(p=>i.jsx("div",{className:`float-dmg ${p.isCrit?"crit":""} ${p.isOffline?"offline":""}`,style:{left:`${p.x}%`},children:p.isOffline?`+${p.value} (idle)`:p.isCrit?`${p.value}!`:p.value},p.id))]})]}),i.jsxs("div",{className:"combat-stats-panel",children:[i.jsxs("div",{className:"combat-stat-row",children:[i.jsx("span",{className:"cs-label",children:"⚔ DPS"}),i.jsx("span",{className:"cs-value",children:S})]}),i.jsxs("div",{className:"combat-stat-row",children:[i.jsx("span",{className:"cs-label",children:"💥 ATK"}),i.jsx("span",{className:"cs-value",children:Math.round(n.attack)})]}),i.jsxs("div",{className:"combat-stat-row",children:[i.jsx("span",{className:"cs-label",children:"🎯 Crit"}),i.jsxs("span",{className:"cs-value",children:[Math.round(n.critChance*100),"%"]})]}),o>1&&i.jsxs("div",{className:"combat-stat-row momentum",children:[i.jsx("span",{className:"cs-label",children:"🔥 Momentum"}),i.jsxs("span",{className:"cs-value",children:[o.toFixed(1),"×"]})]}),i.jsxs("div",{className:"combat-stat-row muted",children:[i.jsx("span",{className:"cs-label",children:"☠ Kills"}),i.jsx("span",{className:"cs-value",children:s})]}),i.jsxs("div",{className:"combat-log-row",children:[i.jsx("button",{className:`low-energy-btn ${a?"active":""}`,onClick:c,title:"Low Energy Mode",children:"💙 Low E"}),i.jsx(wf,{log:d})]})]}),i.jsx("style",{children:`
        .combat-strip {
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
          padding: 10px 20px;
          display: flex;
          gap: 16px;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          min-height: 88px;
          overflow: hidden;
        }

        .combat-strip.low-energy {
          border-bottom-color: rgba(79,195,247,0.3);
          background: linear-gradient(90deg, var(--bg-surface), rgba(79,195,247,0.03));
        }

        /* Monster section */
        .combat-monster-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .combat-monster-info {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .combat-monster-name {
          font-family: var(--font-display);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .boss-tag {
          display: inline-block;
          background: var(--gold-dim);
          color: var(--gold);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full);
          padding: 1px 6px;
          font-size: 0.62rem;
          font-weight: 800;
          margin-left: 6px;
          letter-spacing: 0.08em;
          vertical-align: middle;
        }

        .combat-hp-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 120px;
        }

        .combat-hp-bar-track {
          flex: 1;
          height: 10px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          position: relative;
        }

        .combat-hp-bar-fill {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 0.5s ease, background 0.5s ease;
        }

        .phase-warn-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gold);
          opacity: 0.6;
        }

        .combat-hp-text {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 700;
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }

        /* Arena */
        .combat-arena {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          height: 52px;
        }

        .combat-arena.shake {
          animation: combatShake 0.15s ease;
        }

        @keyframes combatShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }

        .player-sprite, .monster-sprite {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          position: relative;
        }

        .sprite-figure {
          font-size: 1.8rem;
          line-height: 1;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
          transition: transform 0.1s;
        }

        .monster-figure.monster-hit {
          filter: drop-shadow(0 0 8px #FF3860) brightness(1.3);
          transform: scale(0.9);
        }

        .sprite-label {
          font-size: 0.6rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .buff-indicators {
          position: absolute;
          top: -4px;
          right: -8px;
          display: flex;
          gap: 2px;
        }

        .buff-pip {
          font-size: 0.7rem;
          filter: drop-shadow(0 0 4px rgba(245,200,66,0.6));
        }

        /* Attack arrows */
        .attack-arrows {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .arrow-row {
          display: flex;
          gap: 4px;
        }

        .attack-arrow {
          color: var(--xp-blue);
          font-size: 0.9rem;
          opacity: 0;
          animation: arrowSlide 1.5s ease-in-out infinite;
          font-weight: 700;
        }

        @keyframes arrowSlide {
          0%   { opacity: 0; transform: translateX(-6px); }
          30%  { opacity: 0.8; }
          70%  { opacity: 0.8; }
          100% { opacity: 0; transform: translateX(6px); }
        }

        /* Floating damage numbers */
        .float-dmg {
          position: absolute;
          top: 4px;
          pointer-events: none;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          text-shadow: 0 0 8px rgba(0,0,0,0.8);
          animation: floatDmg 1.3s ease-out forwards;
          z-index: 10;
          white-space: nowrap;
        }

        .float-dmg.crit {
          color: var(--gold);
          font-size: 1.05rem;
          text-shadow: 0 0 12px var(--gold-glow);
        }

        .float-dmg.offline {
          color: var(--xp-blue);
          font-size: 0.75rem;
        }

        @keyframes floatDmg {
          0%   { opacity: 1; transform: translateY(0) scale(1); }
          20%  { transform: translateY(-8px) scale(1.1); }
          100% { opacity: 0; transform: translateY(-32px) scale(0.8); }
        }

        /* Stats panel */
        .combat-stats-panel {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 110px;
          flex-shrink: 0;
          border-left: 1px solid var(--border-subtle);
          padding-left: 14px;
        }

        .combat-stat-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .combat-stat-row.momentum .cs-value { color: var(--amber); }
        .combat-stat-row.muted .cs-label,
        .combat-stat-row.muted .cs-value { opacity: 0.5; }

        .cs-label {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .cs-value {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-primary);
          font-variant-numeric: tabular-nums;
        }

        .low-energy-btn { margin-top: 0; }

        .combat-log-row {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }
          font-weight: 700;
          font-family: var(--font-body);
          letter-spacing: 0.03em;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .low-energy-btn:hover { border-color: var(--border-default); color: var(--xp-blue); }
        .low-energy-btn.active {
          background: var(--xp-blue-dim);
          border-color: rgba(79,195,247,0.4);
          color: var(--xp-blue);
        }

        @media (max-width: 600px) {
          .combat-stats-panel { display: none; }
          .combat-strip { padding: 8px 12px; min-height: 70px; }
          .combat-monster-name { font-size: 0.75rem; }
          .combat-hp-text { display: none; }
          /* Keep log toggle visible on mobile */
          .combat-log-row { margin-top: 2px; }
          .log-toggle { font-size: 0.6rem; padding: 2px 6px; }
        }
      `})]})}const Vt={goldSmall:500,goldLarge:5e3,instantKill:!0};function Sf({onAddGold:e,onInstantKill:t}){const[n,r]=_.useState(!1),[l,o]=_.useState("");function a(m){o(m),setTimeout(()=>o(""),1500)}function s(){e(Vt.goldSmall),a(`+${Vt.goldSmall} gold`)}function c(){e(Vt.goldLarge),a(`+${Vt.goldLarge} gold`)}function d(){t(),a("Monster slain!")}return i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"dev-toggle",onClick:()=>r(m=>!m),title:"Dev Panel (disable in devConfig.js)",children:"🛠"}),n&&i.jsxs("div",{className:"dev-panel",children:[i.jsxs("div",{className:"dev-header",children:[i.jsx("span",{className:"dev-title",children:"🛠 DEV MODE"}),i.jsx("span",{className:"dev-hint",children:"Set DEV_MODE=false to hide"}),i.jsx("button",{className:"dev-close",onClick:()=>r(!1),children:"×"})]}),l&&i.jsx("div",{className:"dev-flash",children:l}),i.jsxs("div",{className:"dev-actions",children:[i.jsxs("button",{className:"dev-btn gold",onClick:s,children:["💰 +",Vt.goldSmall," Gold"]}),i.jsxs("button",{className:"dev-btn gold-big",onClick:c,children:["💰💰 +",Vt.goldLarge," Gold"]}),i.jsx("button",{className:"dev-btn kill",onClick:d,children:"☠ Instant Kill"})]}),i.jsxs("div",{className:"dev-note",children:["Edit ",i.jsx("code",{children:"src/devConfig.js"})," to configure or disable."]})]}),i.jsx("style",{children:`
        .dev-toggle {
          position: fixed;
          bottom: 80px;
          right: 12px;
          z-index: 600;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 56, 96, 0.2);
          border: 1px solid rgba(255, 56, 96, 0.5);
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: all 0.2s;
          backdrop-filter: blur(4px);
        }
        .dev-toggle:hover {
          background: rgba(255, 56, 96, 0.35);
          transform: scale(1.1);
        }

        .dev-panel {
          position: fixed;
          bottom: 128px;
          right: 12px;
          z-index: 600;
          width: 220px;
          background: var(--bg-elevated);
          border: 1px solid rgba(255,56,96,0.4);
          border-radius: var(--radius-lg);
          padding: 12px;
          box-shadow: var(--shadow-lg), 0 0 20px rgba(255,56,96,0.1);
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: fadeInUp 0.2s var(--ease-spring);
        }

        .dev-header {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .dev-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: #FF3860;
          font-family: var(--font-display);
          letter-spacing: 0.05em;
        }

        .dev-hint {
          font-size: 0.6rem;
          color: var(--text-muted);
          flex: 1;
        }

        .dev-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 1rem;
          cursor: pointer;
          line-height: 1;
          padding: 0;
          margin-left: auto;
        }
        .dev-close:hover { color: var(--text-primary); }

        .dev-flash {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--green);
          text-align: center;
          background: var(--green-dim);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-md);
          padding: 4px 8px;
          animation: scaleIn 0.2s var(--ease-spring);
        }

        .dev-actions {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dev-btn {
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-body);
          padding: 8px 12px;
          border-radius: var(--radius-md);
          cursor: pointer;
          border: 1px solid;
          transition: all 0.15s;
          text-align: left;
        }

        .dev-btn.gold {
          background: var(--gold-dim);
          border-color: var(--gold-glow);
          color: var(--gold);
        }
        .dev-btn.gold:hover { background: rgba(245,200,66,0.25); }

        .dev-btn.gold-big {
          background: rgba(245,200,66,0.08);
          border-color: var(--gold-glow);
          color: var(--gold);
        }
        .dev-btn.gold-big:hover { background: rgba(245,200,66,0.2); }

        .dev-btn.kill {
          background: var(--coral-dim);
          border-color: rgba(255,101,132,0.4);
          color: var(--coral);
        }
        .dev-btn.kill:hover { background: rgba(255,101,132,0.25); }

        .dev-note {
          font-size: 0.62rem;
          color: var(--text-muted);
          line-height: 1.4;
          padding-top: 4px;
          border-top: 1px solid var(--border-subtle);
        }

        .dev-note code {
          font-family: monospace;
          color: var(--coral);
          font-size: 0.68rem;
        }

        @media (max-width: 480px) {
          .dev-toggle { bottom: 76px; right: 8px; }
          .dev-panel  { bottom: 122px; right: 8px; width: 200px; }
        }
      `})]})}const or={LOW:{label:"Low",color:"#6C8EBF",icon:"○",xpMult:.8},MEDIUM:{label:"Medium",color:"#F5A623",icon:"◐",xpMult:1},HIGH:{label:"High",color:"#FF6584",icon:"●",xpMult:1.3},URGENT:{label:"Urgent",color:"#FF3860",icon:"⚡",xpMult:1.6}},ar={XS:{label:"Quick (5m)",minutes:5,baseXP:20},S:{label:"Short (15m)",minutes:15,baseXP:40},M:{label:"Medium (30m)",minutes:30,baseXP:75},L:{label:"Long (1h)",minutes:60,baseXP:140},XL:{label:"Deep (2h+)",minutes:120,baseXP:250}},Nf=[{id:"quick_start",name:"Quick Start",description:"Earn +20 XP bonus for starting any task within 5 minutes of viewing it.",icon:"⚡",effect_type:"xp_bonus_on_start",effect_value:20,cost:1},{id:"deep_focus",name:"Deep Focus",description:"Focus sessions earn +15% more XP.",icon:"🔮",effect_type:"xp_mult_focus",effect_value:.15,cost:1},{id:"second_wind",name:"Second Wind",description:"Completing an overdue task gives full XP instead of reduced.",icon:"🌬️",effect_type:"no_overdue_penalty",effect_value:!0,cost:2},{id:"subtask_master",name:"Subtask Master",description:"Subtask XP increased by 50%.",icon:"📋",effect_type:"subtask_xp_mult",effect_value:.5,cost:1},{id:"streak_shield",name:"Streak Shield",description:"Once per week, missing a daily will not break your streak.",icon:"🛡️",effect_type:"streak_forgiveness",effect_value:1,cost:2}],ss=[{id:"task-1",title:"Review project proposal",notes:"Check the Q3 roadmap and leave comments before the team meeting.",dueAt:new Date(Date.now()+2*60*60*1e3).toISOString(),priority:"HIGH",effort:"M",status:"pending",tags:["work"],subtasks:[{id:"st-1a",title:"Read through executive summary",done:!0},{id:"st-1b",title:"Add inline comments",done:!1},{id:"st-1c",title:"Write summary feedback",done:!1}],createdAt:new Date(Date.now()-24*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-2",title:"Reply to Sarah's email",notes:"",dueAt:new Date(Date.now()+30*60*1e3).toISOString(),priority:"URGENT",effort:"XS",status:"pending",tags:["work","comms"],subtasks:[],createdAt:new Date(Date.now()-60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-3",title:"Grocery run",notes:"Pick up ingredients for the week. Check the list on the fridge.",dueAt:new Date(Date.now()+5*60*60*1e3).toISOString(),priority:"MEDIUM",effort:"S",status:"pending",tags:["personal","errands"],subtasks:[{id:"st-3a",title:"Check fridge for what's needed",done:!1},{id:"st-3b",title:"Go to store",done:!1}],createdAt:new Date(Date.now()-2*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-4",title:"Do 20-min stretching routine",notes:"Back has been tight — do the hip flexor and shoulder opener sequences.",dueAt:new Date(Date.now()-60*60*1e3).toISOString(),priority:"LOW",effort:"XS",status:"pending",tags:["health"],subtasks:[],createdAt:new Date(Date.now()-5*60*60*1e3).toISOString(),completedAt:null,isOverdue:!0}],cs={id:"user-1",displayName:"Adventurer",level:3,xp:340,xpToNext:500,gold:127,streak:5,talentPoints:1,unlockedTalents:["quick_start"],title:"Aspiring Chronicler"},us=[{id:"hist-1",title:"Morning standup notes",completedAt:new Date(Date.now()-3*60*60*1e3).toISOString(),xpEarned:40,goldEarned:8},{id:"hist-2",title:"Send weekly update to manager",completedAt:new Date(Date.now()-5*60*60*1e3).toISOString(),xpEarned:75,goldEarned:15}],lo={work:"#4FC3F7",personal:"#B39DDB",health:"#69F0AE",errands:"#F5A623",comms:"#FF6584",school:"#FFD54F"};function Pu(e,t=[]){const n=ar[e.effort]||ar.M,r=or[e.priority]||or.MEDIUM;let l=n.baseXP,o=Math.round(l*r.xpMult);const a=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,s=t.includes("second_wind");a&&!s?o=Math.round(o*.6):a||(o=Math.round(o*1.1));const c=Math.round(o*.2);return{xp:o,gold:c,isOverdue:a}}function jf(e=[]){return{xp:e.includes("subtask_master")?Math.round(12*1.5):12,gold:2}}function _f(e,t,n=[]){const r=Math.round(e*2.5),l=n.includes("deep_focus")?1.15:1,o=t?1.25:.7,a=Math.round(r*l*o),s=Math.round(a*.15);return{xp:a,gold:s}}function oo(e){return Math.round(200*Math.pow(e,1.4))}function Cf(e,t,n){let r=e,l=t+n,o=!1,a=0;for(;l>=oo(r);)l-=oo(r),r+=1,o=!0,a+=1;return{level:r,xp:l,xpToNext:oo(r),leveledUp:o,talentPointsEarned:a}}function Ef(e){if(!e)return null;const t=new Date(e)-new Date,n=Math.abs(t);if(n<60*1e3)return t<0?"Just overdue":"Due now";if(n<60*60*1e3){const l=Math.round(n/6e4);return t<0?`${l}m overdue`:`in ${l}m`}if(n<24*60*60*1e3){const l=Math.round(n/36e5);return t<0?`${l}h overdue`:`in ${l}h`}const r=Math.round(n/864e5);return t<0?`${r}d overdue`:`in ${r}d`}function Lt(){return`${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function zf(e){const t={URGENT:0,HIGH:1,MEDIUM:2,LOW:3};return[...e].sort((n,r)=>{const l=n.isOverdue||n.dueAt&&new Date(n.dueAt)<new Date,o=r.isOverdue||r.dueAt&&new Date(r.dueAt)<new Date;if(l!==o)return l?-1:1;const a=(t[n.priority]||2)-(t[r.priority]||2);return a!==0?a:n.dueAt&&r.dueAt?new Date(n.dueAt)-new Date(r.dueAt):0})}function Tf({task:e,userTalents:t=[],onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:a,index:s=0}){var k;const[c,d]=_.useState(!1),[m,g]=_.useState(!1),[v,S]=_.useState(!1),h=or[e.priority]||or.MEDIUM,w=ar[e.effort]||ar.M,D=Ef(e.dueAt),f=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,u=e.subtasks.filter(b=>b.done).length,p=e.subtasks.length,{xp:x,gold:y}=Pu(e,t);function N(){g(!0),setTimeout(()=>n(e.id),400)}return i.jsxs("div",{className:`task-card ${m?"completing":""} ${f?"overdue":""}`,style:{animationDelay:`${s*60}ms`,"--priority-color":h.color},children:[i.jsx("div",{className:"priority-stripe",style:{background:h.color}}),i.jsxs("div",{className:"task-card-inner",children:[i.jsxs("div",{className:"task-main-row",children:[i.jsx("button",{className:`task-checkbox ${m?"completing":""}`,onClick:N,title:"Mark complete","aria-label":"Complete task",children:m&&i.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"✓"})}),i.jsxs("div",{className:"task-title-block",onClick:()=>d(b=>!b),children:[i.jsx("div",{className:"task-title",children:e.title}),e.notes&&!c&&i.jsx("div",{className:"task-notes-preview",children:e.notes})]}),i.jsxs("div",{className:"task-actions-inline",children:[a&&i.jsx("button",{className:"btn btn-ghost task-action-btn",onClick:()=>a(e),title:"Start focus session",children:"🔮"}),i.jsx("button",{className:`task-expand-btn ${c?"open":""}`,onClick:()=>d(b=>!b),"aria-label":"Toggle details",children:"▾"})]})]}),i.jsxs("div",{className:"task-meta-row",children:[i.jsxs("span",{className:"badge",style:{background:`${h.color}18`,color:h.color,border:`1px solid ${h.color}30`},children:[h.icon," ",h.label]}),i.jsxs("span",{className:"badge",style:{background:"var(--bg-elevated)",color:"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["⏱ ",w.label]}),D&&i.jsxs("span",{className:`badge ${f?"overdue-badge":"due-badge"}`,children:[f?"⚠ ":"📅 ",D]}),(k=e.tags)==null?void 0:k.map(b=>i.jsx("span",{className:"tag-chip",style:{background:`${lo[b]||"#888"}20`,color:lo[b]||"#888",border:`1px solid ${lo[b]||"#888"}30`},children:b},b)),p>0&&i.jsxs("span",{className:"badge",style:{background:u===p?"var(--green-dim)":"var(--bg-elevated)",color:u===p?"var(--green)":"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["☑ ",u,"/",p]}),i.jsxs("span",{className:"reward-preview",children:["+",x," XP · +",y," 💰"]})]}),c&&i.jsxs("div",{className:"task-expanded animate-in",children:[e.notes&&i.jsx("div",{className:"task-notes",children:e.notes}),p>0&&i.jsxs("div",{className:"subtask-list",children:[i.jsx("div",{className:"subtask-header",children:"Steps"}),e.subtasks.map(b=>i.jsxs("div",{className:`subtask-item ${b.done?"done":""}`,onClick:()=>r(e.id,b.id),children:[i.jsx("span",{className:"subtask-check",children:b.done?"✓":"○"}),i.jsx("span",{className:"subtask-title",children:b.title}),!b.done&&i.jsx("span",{className:"subtask-xp",children:"+12 XP"})]},b.id))]}),f&&i.jsxs("div",{className:"recovery-banner",children:[i.jsx("span",{children:"🌱"}),i.jsxs("div",{children:[i.jsx("div",{className:"recovery-title",children:"No worries — let's get back on track."}),i.jsxs("div",{className:"recovery-subtitle",children:["Completing it still earns you ",Math.round(x*.6)," XP. Or reschedule if needed."]})]})]}),i.jsxs("div",{className:"task-action-row",children:[i.jsxs("button",{className:"btn btn-success",onClick:N,children:["✓ Complete (+",x," XP)"]}),a&&i.jsx("button",{className:"btn btn-secondary",onClick:()=>a(e),children:"🔮 Focus"}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>l(e.id,2),children:"⏰ Snooze 2h"}),v?i.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[i.jsx("button",{className:"btn btn-danger",onClick:()=>o(e.id),children:"Delete"}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!1),children:"Cancel"})]}):i.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!0),style:{marginLeft:"auto"},children:"🗑"})]})]})]}),i.jsx("style",{children:`
        .task-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          transition: all 0.2s var(--ease-out);
          animation: fadeInUp 0.3s var(--ease-out) both;
          position: relative;
          /* Touch-friendly — no hover lift on mobile */
          -webkit-tap-highlight-color: transparent;
        }

        .task-card:hover {
          border-color: var(--border-default);
          background: var(--bg-card-hover);
          box-shadow: var(--shadow-sm);
          transform: translateY(-1px);
        }

        .task-card.overdue {
          border-color: rgba(255, 101, 132, 0.25);
          background: rgba(255, 101, 132, 0.04);
        }

        .task-card.completing {
          animation: taskComplete 0.4s var(--ease-out) forwards;
          pointer-events: none;
        }

        .priority-stripe {
          width: 4px;
          flex-shrink: 0;
          opacity: 0.8;
        }

        .task-card-inner {
          flex: 1;
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          min-width: 0;
        }

        .task-main-row {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .task-title-block {
          flex: 1;
          cursor: pointer;
          min-width: 0;
        }

        .task-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .task-notes-preview {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 2px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .task-actions-inline {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          flex-shrink: 0;
        }

        .task-action-btn {
          padding: var(--space-1) var(--space-2);
          font-size: 0.9rem;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .task-action-btn:hover { opacity: 1; }

        .task-expand-btn {
          background: transparent;
          color: var(--text-muted);
          font-size: 0.9rem;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          transition: transform 0.2s;
        }
        .task-expand-btn:hover { color: var(--text-primary); }
        .task-expand-btn.open { transform: rotate(180deg); }

        .task-meta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-2);
        }

        .overdue-badge {
          background: var(--coral-dim);
          color: var(--coral);
          border: 1px solid rgba(255,101,132,0.3);
        }

        .due-badge {
          background: var(--amber-dim);
          color: var(--amber);
          border: 1px solid rgba(245,166,35,0.3);
        }

        .reward-preview {
          font-size: 0.72rem;
          color: var(--gold);
          font-weight: 700;
          margin-left: auto;
          opacity: 0.7;
        }

        .task-expanded {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
        }

        .task-notes {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          border: 1px solid var(--border-subtle);
        }

        .subtask-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .subtask-header {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .subtask-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.15s;
        }

        .subtask-item:hover {
          background: var(--bg-elevated);
          border-color: var(--border-subtle);
        }

        .subtask-item.done {
          opacity: 0.5;
        }

        .subtask-item.done .subtask-title {
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .subtask-check {
          color: var(--green);
          font-size: 0.85rem;
          font-weight: 700;
          width: 16px;
          flex-shrink: 0;
        }

        .subtask-title {
          flex: 1;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .subtask-xp {
          font-size: 0.7rem;
          color: var(--xp-blue);
          font-weight: 700;
          opacity: 0.7;
        }

        .recovery-banner {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          background: var(--green-dim);
          border: 1px solid rgba(92,221,139,0.2);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
        }

        .recovery-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--green);
        }

        .recovery-subtitle {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .task-action-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          align-items: center;
        }

        @media (max-width: 480px) {
          .task-action-row { gap: var(--space-1); }
          .task-action-row .btn { font-size: 0.78rem; padding: var(--space-2) var(--space-3); }
          .task-meta-row { gap: var(--space-1); }
          .reward-preview { display: none; }
        }
      `})]})}const Pf={title:"",notes:"",priority:"MEDIUM",effort:"S",dueAt:"",tags:[],subtasks:[]};function Df({onAdd:e,onClose:t}){const[n,r]=_.useState(Pf),[l,o]=_.useState(!1),[a,s]=_.useState(""),c=_.useRef(null);_.useEffect(()=>{var h;(h=c.current)==null||h.focus()},[]);function d(h){h.preventDefault(),n.title.trim()&&(e({...n,dueAt:n.dueAt?new Date(n.dueAt).toISOString():null,subtasks:n.subtasks}),t())}function m(){a.trim()&&(r(h=>({...h,subtasks:[...h.subtasks,{id:Lt(),title:a.trim(),done:!1}]})),s(""))}function g(h){r(w=>({...w,subtasks:w.subtasks.filter(D=>D.id!==h)}))}function v(h){r(w=>({...w,tags:w.tags.includes(h)?w.tags.filter(D=>D!==h):[...w.tags,h]}))}const S=["work","personal","health","errands","comms","school"];return i.jsxs("div",{className:"modal-overlay",onClick:h=>{h.target===h.currentTarget&&t()},children:[i.jsxs("div",{className:"modal-box",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{className:"font-display",style:{color:"var(--gold)"},children:"⚔ New Quest"}),i.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:"1.2rem"},children:"×"})]}),i.jsxs("form",{onSubmit:d,className:"add-task-form",children:[i.jsx("div",{className:"form-group",children:i.jsx("input",{ref:c,type:"text",placeholder:"What needs to be done?",value:n.title,onChange:h=>r(w=>({...w,title:h.target.value})),className:"title-input",required:!0})}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Priority"}),i.jsx("div",{className:"priority-selector",children:Object.entries(or).map(([h,w])=>i.jsxs("button",{type:"button",className:`priority-option ${n.priority===h?"active":""}`,style:{"--pcolor":w.color},onClick:()=>r(D=>({...D,priority:h})),children:[i.jsx("span",{children:w.icon}),i.jsx("span",{children:w.label})]},h))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"How long will this take?"}),i.jsx("div",{className:"effort-selector",children:Object.entries(ar).map(([h,w])=>i.jsx("button",{type:"button",className:`effort-option ${n.effort===h?"active":""}`,onClick:()=>r(D=>({...D,effort:h})),children:w.label},h))})]}),i.jsxs("button",{type:"button",className:"advanced-toggle",onClick:()=>o(h=>!h),children:[i.jsx("span",{children:l?"▾":"▸"}),i.jsx("span",{children:l?"Fewer options":"More options (notes, due date, subtasks, tags)"})]}),l&&i.jsxs("div",{className:"advanced-section animate-in",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Notes"}),i.jsx("textarea",{placeholder:"Any details or context...",value:n.notes,onChange:h=>r(w=>({...w,notes:h.target.value})),rows:3})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Due date"}),i.jsx("input",{type:"datetime-local",value:n.dueAt,onChange:h=>r(w=>({...w,dueAt:h.target.value}))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tags"}),i.jsx("div",{className:"tag-selector",children:S.map(h=>i.jsx("button",{type:"button",className:`tag-option ${n.tags.includes(h)?"active":""}`,onClick:()=>v(h),children:h},h))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Break it down (subtasks)"}),i.jsxs("div",{className:"subtask-add-row",children:[i.jsx("input",{type:"text",placeholder:"Add a step...",value:a,onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),m())}}),i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"+ Add"})]}),n.subtasks.length>0&&i.jsx("div",{className:"subtask-preview-list",children:n.subtasks.map(h=>i.jsxs("div",{className:"subtask-preview-item",children:[i.jsx("span",{children:"○"}),i.jsx("span",{style:{flex:1},children:h.title}),i.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>g(h.id),children:"×"})]},h.id))})]})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),i.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.title.trim(),children:"⚔ Add Quest"})]})]})]}),i.jsx("style",{children:`
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-6);
        }

        @media (max-width: 600px) {
          /* Full-screen modal on mobile */
          .modal-overlay {
            align-items: flex-end;
            padding: 0;
          }
          .modal-box {
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            max-height: 92dvh;
            padding: var(--space-6) var(--space-5);
          }
        }

        .add-task-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .form-label {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-muted);
        }

        .title-input {
          font-size: 1.05rem !important;
          font-weight: 600 !important;
        }

        .priority-selector, .effort-selector {
          display: flex;
          gap: var(--space-2);
          flex-wrap: wrap;
        }

        .priority-option, .effort-option {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.15s;
        }

        .priority-option:hover, .effort-option:hover {
          border-color: var(--border-default);
          color: var(--text-primary);
        }

        .priority-option.active {
          background: color-mix(in srgb, var(--pcolor) 15%, transparent);
          border-color: color-mix(in srgb, var(--pcolor) 40%, transparent);
          color: var(--pcolor);
        }

        .effort-option.active {
          background: var(--gold-dim);
          border-color: var(--gold-glow);
          color: var(--gold);
        }

        .advanced-toggle {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          background: transparent;
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          font-family: var(--font-body);
          cursor: pointer;
          padding: var(--space-2) 0;
          transition: color 0.15s;
        }
        .advanced-toggle:hover { color: var(--text-secondary); }

        .advanced-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .tag-selector {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .tag-option {
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          transition: all 0.15s;
        }
        .tag-option:hover { border-color: var(--border-default); color: var(--text-primary); }
        .tag-option.active {
          background: var(--purple-dim);
          border-color: rgba(179,157,219,0.4);
          color: var(--purple);
        }

        .subtask-add-row {
          display: flex;
          gap: var(--space-2);
        }

        .subtask-preview-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: var(--space-2);
        }

        .subtask-preview-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.85rem;
          color: var(--text-secondary);
          padding: var(--space-2) var(--space-3);
          background: var(--bg-card);
          border-radius: var(--radius-sm);
        }

        .form-actions {
          display: flex;
          gap: var(--space-3);
          justify-content: flex-end;
          padding-top: var(--space-4);
          border-top: 1px solid var(--border-subtle);
        }
      `})]})}function Mf({user:e,tasks:t,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onAddTask:a,onStartFocus:s}){const[c,d]=_.useState(!1),[m,g]=_.useState("all"),[v,S]=_.useState(""),h=_.useMemo(()=>zf(t.filter(x=>x.status==="pending")),[t]),w=h.filter(x=>x.isOverdue||x.dueAt&&new Date(x.dueAt)<new Date);h.filter(x=>!x.isOverdue&&!(x.dueAt&&new Date(x.dueAt)<new Date));const D=_.useMemo(()=>m==="overdue"?w:m==="high"?h.filter(x=>["HIGH","URGENT"].includes(x.priority)):h,[m,h,w]);function f(x){x.preventDefault(),v.trim()&&(a({title:v.trim(),priority:"MEDIUM",effort:"S"}),S(""))}const u=h[0],p=(()=>{const x=new Date().getHours();return x<12?"Good morning":x<17?"Good afternoon":"Good evening"})();return i.jsxs("div",{className:"dashboard",children:[i.jsxs("div",{className:"dashboard-header",children:[i.jsxs("div",{children:[i.jsxs("h1",{className:"dashboard-title font-display",children:[p,", ",e.displayName]}),i.jsxs("div",{className:"dashboard-subtitle",children:[h.length===0?"🎉 All clear! You're on top of everything.":`You have ${h.length} quest${h.length!==1?"s":""} pending.`,w.length>0&&i.jsxs("span",{className:"overdue-warning",children:[" · ",w.length," overdue"]})]})]}),i.jsx("button",{className:"btn btn-primary add-quest-btn",onClick:()=>d(!0),children:"⚔ New Quest"})]}),u&&i.jsxs("div",{className:"next-action-spotlight",children:[i.jsxs("div",{className:"next-action-label",children:[i.jsx("span",{className:"pulse-dot"}),"NEXT BEST ACTION"]}),i.jsxs("div",{className:"next-action-content",children:[i.jsx("div",{className:"next-action-title",children:u.title}),i.jsxs("div",{className:"next-action-meta",children:[u.effort&&i.jsxs("span",{children:["~",u.effort==="XS"?"5":u.effort==="S"?"15":u.effort==="M"?"30":u.effort==="L"?"60":"120","min"]}),u.dueAt&&i.jsxs("span",{children:["· due ",new Date(u.dueAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]}),i.jsxs("div",{className:"next-action-btns",children:[i.jsx("button",{className:"btn btn-primary",onClick:()=>s(u),children:"🔮 Start Focus"}),i.jsx("button",{className:"btn btn-success",onClick:()=>n(u.id),children:"✓ Complete"})]})]}),i.jsxs("form",{onSubmit:f,className:"quick-add-bar",children:[i.jsx("input",{type:"text",placeholder:"Quick add a task… (press Enter)",value:v,onChange:x=>S(x.target.value),className:"quick-add-input"}),i.jsx("button",{type:"submit",className:"btn btn-secondary",children:"Add"}),i.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>d(!0),children:"+ Details"})]}),i.jsx("div",{className:"filter-tabs",children:[{id:"all",label:`All (${h.length})`},{id:"high",label:`High Priority (${h.filter(x=>["HIGH","URGENT"].includes(x.priority)).length})`},{id:"overdue",label:`Overdue (${w.length})`,danger:w.length>0}].map(x=>i.jsx("button",{className:`filter-tab ${m===x.id?"active":""} ${x.danger?"danger":""}`,onClick:()=>g(x.id),children:x.label},x.id))}),i.jsx("div",{className:"task-list",children:D.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"🌟"}),i.jsx("div",{className:"empty-title",children:"Nothing here!"}),i.jsx("div",{className:"empty-sub",children:m==="overdue"?"No overdue tasks — great work!":"Add your first quest to get started."})]}):D.map((x,y)=>i.jsx(Tf,{task:x,userTalents:e.unlockedTalents,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:s,index:y},x.id))}),c&&i.jsx(Df,{onAdd:a,onClose:()=>d(!1)}),i.jsx("style",{children:`
        .dashboard {
          padding: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .dashboard-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .dashboard-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          letter-spacing: 0.02em;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: var(--space-1);
        }

        .overdue-warning {
          color: var(--coral);
          font-weight: 700;
        }

        .add-quest-btn {
          flex-shrink: 0;
          padding: var(--space-3) var(--space-5);
          font-size: 0.9rem;
        }

        /* Next best action spotlight */
        .next-action-spotlight {
          background: linear-gradient(135deg, var(--bg-elevated), #1E1B40);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-xl);
          padding: var(--space-5) var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-5);
          flex-wrap: wrap;
          box-shadow: 0 0 20px rgba(245,200,66,0.08);
          animation: fadeInDown 0.4s var(--ease-out);
        }

        .next-action-label {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold);
          font-family: var(--font-display);
          white-space: nowrap;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse-gold 1.5s infinite;
          display: inline-block;
        }

        .next-action-content {
          flex: 1;
          min-width: 0;
        }

        .next-action-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .next-action-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
          display: flex;
          gap: var(--space-2);
        }

        .next-action-btns {
          display: flex;
          gap: var(--space-2);
          flex-shrink: 0;
        }

        /* Quick-add bar */
        .quick-add-bar {
          display: flex;
          gap: var(--space-2);
        }

        .quick-add-input {
          flex: 1;
        }

        /* Filter tabs */
        .filter-tabs {
          display: flex;
          gap: var(--space-2);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: var(--space-3);
        }

        .filter-tab {
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-md);
          background: transparent;
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-body);
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.15s;
        }

        .filter-tab:hover {
          background: var(--bg-elevated);
          color: var(--text-secondary);
        }

        .filter-tab.active {
          background: var(--bg-elevated);
          color: var(--text-primary);
          border-color: var(--border-default);
        }

        .filter-tab.danger.active {
          background: var(--coral-dim);
          color: var(--coral);
          border-color: rgba(255,101,132,0.3);
        }

        /* Task list */
        .task-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        /* Empty state */
        .empty-state {
          text-align: center;
          padding: var(--space-8) var(--space-4);
          border: 1px dashed var(--border-default);
          border-radius: var(--radius-xl);
          animation: fadeInUp 0.3s var(--ease-out);
        }

        .empty-icon { font-size: 2.5rem; margin-bottom: var(--space-3); }
        .empty-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-secondary);
          font-family: var(--font-display);
        }
        .empty-sub {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin-top: var(--space-2);
        }

        @media (max-width: 600px) {
          .dashboard { padding: var(--space-4); }
          .next-action-spotlight { flex-direction: column; }
          .quick-add-bar { flex-direction: column; }
        }
      `})]})}const Lf=[{label:"5 min",minutes:5,emoji:"⚡"},{label:"15 min",minutes:15,emoji:"🌊"},{label:"25 min",minutes:25,emoji:"🔮"},{label:"45 min",minutes:45,emoji:"🌙"},{label:"60 min",minutes:60,emoji:"⭐"}];function If({session:e,onStart:t,onPause:n,onResume:r,onStop:l,formatTime:o,tasks:a}){const[s,c]=_.useState(null),[d,m]=_.useState(25),g=e?1-e.secondsLeft/e.totalSeconds:0,v=2*Math.PI*120,S=v*(1-g);if(!e)return i.jsxs("div",{className:"focus-setup",children:[i.jsxs("div",{className:"focus-setup-inner",children:[i.jsx("div",{className:"focus-icon-big",children:"🔮"}),i.jsx("h1",{className:"font-display focus-heading",children:"Focus Session"}),i.jsxs("p",{className:"focus-subtitle",children:["Clear your mind. One task. One timer.",i.jsx("br",{}),"Earn bonus XP for every focused minute."]}),a.length>0&&i.jsxs("div",{className:"focus-section",children:[i.jsx("div",{className:"focus-section-label",children:"Working on"}),i.jsxs("div",{className:"task-picker",children:[i.jsx("button",{className:`task-pick-option ${s?"":"active"}`,onClick:()=>c(null),children:"Free focus (no task)"}),a.slice(0,5).map(u=>i.jsx("button",{className:`task-pick-option ${(s==null?void 0:s.id)===u.id?"active":""}`,onClick:()=>c(u),children:u.title},u.id))]})]}),i.jsxs("div",{className:"focus-section",children:[i.jsx("div",{className:"focus-section-label",children:"Duration"}),i.jsx("div",{className:"preset-grid",children:Lf.map(u=>i.jsxs("button",{className:`preset-btn ${d===u.minutes?"active":""}`,onClick:()=>m(u.minutes),children:[i.jsx("span",{className:"preset-emoji",children:u.emoji}),i.jsx("span",{className:"preset-label",children:u.label})]},u.minutes))})]}),i.jsx("button",{className:"btn btn-primary focus-start-btn",onClick:()=>t(s||{id:"free",title:"Free Focus"},d),children:"🔮 Begin Session"}),i.jsx("div",{className:"focus-tip",children:"💡 Tip: Each minute focused earns 2.5 XP. Complete the session for a 25% bonus."})]}),i.jsx("style",{children:`
          .focus-setup {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--space-8);
          }

          .focus-setup-inner {
            max-width: 480px;
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: var(--space-6);
            align-items: center;
            animation: fadeInUp 0.4s var(--ease-out);
          }

          .focus-icon-big {
            font-size: 3.5rem;
            filter: drop-shadow(0 0 20px rgba(179,157,219,0.5));
          }

          .focus-heading {
            font-size: 2rem;
            background: linear-gradient(135deg, var(--purple), var(--xp-blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .focus-subtitle {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .focus-section {
            width: 100%;
            text-align: left;
          }

          .focus-section-label {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
            font-weight: 700;
            margin-bottom: var(--space-3);
          }

          .task-picker {
            display: flex;
            flex-direction: column;
            gap: var(--space-2);
          }

          .task-pick-option {
            padding: var(--space-3) var(--space-4);
            border-radius: var(--radius-md);
            background: var(--bg-elevated);
            border: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            font-size: 0.85rem;
            font-weight: 600;
            font-family: var(--font-body);
            text-align: left;
            cursor: pointer;
            transition: all 0.15s;
          }
          .task-pick-option:hover { border-color: var(--border-default); color: var(--text-primary); }
          .task-pick-option.active {
            background: var(--purple-dim);
            border-color: rgba(179,157,219,0.4);
            color: var(--purple);
          }

          .preset-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: var(--space-2);
          }

          @media (max-width: 400px) {
            .preset-grid { grid-template-columns: repeat(3, 1fr); }
            .focus-setup-inner { gap: var(--space-4); }
            .focus-start-btn { width: 100%; justify-content: center; }
          }

          .preset-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-1);
            padding: var(--space-3) var(--space-2);
            border-radius: var(--radius-lg);
            background: var(--bg-elevated);
            border: 1px solid var(--border-subtle);
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.15s;
          }
          .preset-btn:hover { border-color: var(--border-default); transform: translateY(-2px); }
          .preset-btn.active {
            background: var(--xp-blue-dim);
            border-color: rgba(79,195,247,0.4);
            color: var(--xp-blue);
            box-shadow: 0 0 12px rgba(79,195,247,0.15);
          }

          .preset-emoji { font-size: 1.2rem; }
          .preset-label { font-size: 0.72rem; font-weight: 700; }

          .focus-start-btn {
            padding: var(--space-4) var(--space-8);
            font-size: 1rem;
            border-radius: var(--radius-xl);
          }

          .focus-tip {
            font-size: 0.78rem;
            color: var(--text-muted);
            background: var(--bg-elevated);
            border-radius: var(--radius-md);
            padding: var(--space-3) var(--space-4);
            border: 1px solid var(--border-subtle);
            width: 100%;
          }
        `})]});const h=Math.floor(e.secondsLeft/60),w=e.secondsLeft%60,D=Math.round((e.totalSeconds-e.secondsLeft)/60),f=Math.round(D*2.5);return i.jsxs("div",{className:"focus-active",children:[i.jsxs("div",{className:"focus-active-inner",children:[i.jsx("div",{className:"focus-task-name",children:e.taskTitle}),i.jsxs("div",{className:"timer-ring-wrapper",children:[i.jsxs("svg",{viewBox:"0 0 280 280",className:"timer-ring",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:"var(--bg-elevated)",strokeWidth:"12"}),i.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:e.paused?"var(--amber)":"var(--xp-blue)",strokeWidth:"12",strokeLinecap:"round",strokeDasharray:v,strokeDashoffset:S,transform:"rotate(-90 140 140)",style:{transition:"stroke-dashoffset 1s linear, stroke 0.3s"}})]}),i.jsxs("div",{className:"timer-display",children:[i.jsxs("div",{className:"timer-digits",children:[String(h).padStart(2,"0"),":",String(w).padStart(2,"0")]}),i.jsx("div",{className:"timer-status",children:e.paused?"⏸ paused":"● focusing"}),i.jsxs("div",{className:"timer-xp-preview",children:["+",f," XP earned so far"]})]})]}),i.jsxs("div",{className:"focus-controls",children:[e.paused?i.jsx("button",{className:"btn btn-primary focus-ctrl-btn",onClick:r,children:"▶ Resume"}):i.jsx("button",{className:"btn btn-secondary focus-ctrl-btn",onClick:n,children:"⏸ Pause"}),i.jsx("button",{className:"btn btn-success focus-ctrl-btn",onClick:()=>l(!0),children:"✓ Complete"}),i.jsx("button",{className:"btn btn-ghost focus-ctrl-btn",onClick:()=>l(!1),children:"✕ End early"})]}),i.jsx("div",{className:"focus-reminder",children:"Put your phone down. You've got this. 💙"})]}),i.jsx("style",{children:`
        .focus-active {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-8);
          background: radial-gradient(ellipse at center, rgba(79,195,247,0.05) 0%, transparent 70%);
        }

        .focus-active-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
          animation: fadeInUp 0.4s var(--ease-out);
        }

        .focus-task-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-secondary);
          max-width: 400px;
          font-style: italic;
        }

        .timer-ring-wrapper {
          position: relative;
          width: min(280px, 75vw);
          height: min(280px, 75vw);
        }

        .timer-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 16px rgba(79,195,247,0.3));
        }

        .timer-display {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-1);
        }

        .timer-digits {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .timer-status {
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .timer-xp-preview {
          font-size: 0.8rem;
          color: var(--xp-blue);
          font-weight: 700;
        }

        .focus-controls {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
          justify-content: center;
        }

        .focus-ctrl-btn {
          padding: var(--space-3) var(--space-6);
          font-size: 0.95rem;
          border-radius: var(--radius-xl);
        }

        .focus-reminder {
          color: var(--text-muted);
          font-size: 0.85rem;
          font-style: italic;
        }
      `})]})}const Of=[{id:"first_quest",icon:"⚔️",name:"First Quest",desc:"Completed your first task",earned:!0},{id:"week_streak",icon:"🔥",name:"Week Warrior",desc:"7-day streak",earned:!0},{id:"focus_ten",icon:"🔮",name:"Deep Thinker",desc:"10 focus sessions",earned:!1},{id:"early_bird",icon:"🌅",name:"Early Bird",desc:"Complete a task before 9am",earned:!1},{id:"level_5",icon:"⭐",name:"Rising Star",desc:"Reach Level 5",earned:!1},{id:"hundred_tasks",icon:"🏆",name:"Century",desc:"Complete 100 tasks",earned:!1}];function Rf({user:e,history:t}){const n=t.reduce((l,o)=>l+o.xpEarned,0);t.reduce((l,o)=>l+o.goldEarned,0);const r=Math.round(e.xp/e.xpToNext*100);return i.jsxs("div",{className:"rewards-screen",children:[i.jsxs("div",{className:"rewards-hero",children:[i.jsxs("div",{className:"rewards-avatar",children:[i.jsx("span",{className:"rewards-level font-display",children:e.level}),i.jsx("span",{className:"rewards-level-label",children:"LVL"})]}),i.jsxs("div",{className:"rewards-hero-info",children:[i.jsx("h1",{className:"font-display rewards-name",children:e.displayName}),i.jsx("div",{className:"rewards-title-text",children:e.title}),i.jsxs("div",{className:"xp-section",children:[i.jsxs("div",{className:"xp-section-labels",children:[i.jsx("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:"XP Progress"}),i.jsxs("span",{className:"text-xs text-muted",children:[e.xp," / ",e.xpToNext]})]}),i.jsx("div",{className:"xp-bar-track",children:i.jsx("div",{className:"xp-bar-fill",style:{width:`${r}%`}})}),i.jsxs("div",{className:"text-xs text-muted",style:{marginTop:4},children:[e.xpToNext-e.xp," XP until Level ",e.level+1]})]})]})]}),i.jsx("div",{className:"stats-grid",children:[{icon:"⚡",label:"Current Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Total Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Day Streak",value:`${e.streak}d`,color:"var(--amber)"},{icon:"✅",label:"Tasks Done",value:t.length,color:"var(--green)"},{icon:"🌟",label:"Total XP Earned",value:`${n.toLocaleString()}`,color:"var(--purple)"},{icon:"🎯",label:"Talent Points",value:e.talentPoints,color:"var(--coral)"}].map(l=>i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-card-icon",style:{color:l.color},children:l.icon}),i.jsx("div",{className:"stat-card-value",style:{color:l.color},children:l.value}),i.jsx("div",{className:"stat-card-label",children:l.label})]},l.label))}),i.jsxs("div",{className:"section",children:[i.jsx("h2",{className:"section-title font-display",children:"Achievements"}),i.jsx("div",{className:"badges-grid",children:Of.map(l=>i.jsxs("div",{className:`badge-card ${l.earned?"earned":"locked"}`,children:[i.jsx("div",{className:"badge-icon",children:l.icon}),i.jsx("div",{className:"badge-name",children:l.name}),i.jsx("div",{className:"badge-desc",children:l.desc}),!l.earned&&i.jsx("div",{className:"badge-lock",children:"🔒"})]},l.id))})]}),i.jsxs("div",{className:"section",children:[i.jsx("h2",{className:"section-title font-display",children:"Recent Completions"}),i.jsx("div",{className:"history-list",children:t.length===0?i.jsx("div",{className:"text-muted",style:{textAlign:"center",padding:"var(--space-6)"},children:"No completed tasks yet. Go conquer something! ⚔️"}):t.slice(0,20).map(l=>i.jsxs("div",{className:"history-item animate-in",children:[i.jsx("div",{className:"history-title",children:l.title}),i.jsx("div",{className:"history-meta",children:i.jsx("span",{className:"text-xs text-muted",children:new Date(l.completedAt).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})}),i.jsxs("div",{className:"history-rewards",children:[i.jsxs("span",{className:"history-xp",children:["+",l.xpEarned," XP"]}),i.jsxs("span",{className:"history-gold",children:["+",l.goldEarned," 💰"]})]})]},l.id))})]}),i.jsx("style",{children:`
        .rewards-screen {
          padding: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .rewards-hero {
          display: flex;
          align-items: center;
          gap: var(--space-6);
          background: linear-gradient(135deg, var(--bg-elevated), #1E1B40);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: 0 0 30px rgba(245,200,66,0.06);
          animation: fadeInDown 0.4s var(--ease-out);
        }

        .rewards-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 24px var(--gold-glow);
        }

        .rewards-level {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-inverse);
          line-height: 1;
        }

        .rewards-level-label {
          font-size: 0.62rem;
          font-weight: 800;
          color: var(--text-inverse);
          opacity: 0.7;
          letter-spacing: 0.1em;
        }

        .rewards-hero-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .rewards-name {
          font-size: 1.6rem;
          color: var(--text-primary);
        }

        .rewards-title-text {
          font-size: 0.85rem;
          color: var(--purple);
          font-style: italic;
        }

        .xp-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .xp-section-labels {
          display: flex;
          justify-content: space-between;
        }

        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }

        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          text-align: center;
          transition: all 0.2s;
        }

        .stat-card:hover {
          border-color: var(--border-default);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .stat-card-icon { font-size: 1.5rem; }
        .stat-card-value {
          font-size: 1.6rem;
          font-weight: 800;
          font-family: var(--font-display);
          line-height: 1;
        }
        .stat-card-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Sections */
        .section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .section-title {
          font-size: 1rem;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        /* Badges */
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
        }

        .badge-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          position: relative;
          transition: all 0.2s;
        }

        .badge-card.earned {
          border-color: var(--gold-glow);
          background: linear-gradient(135deg, var(--bg-card), rgba(245,200,66,0.04));
        }

        .badge-card.locked {
          opacity: 0.5;
          filter: grayscale(0.5);
        }

        .badge-icon { font-size: 1.8rem; }
        .badge-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .badge-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .badge-lock {
          position: absolute;
          top: var(--space-2);
          right: var(--space-2);
          font-size: 0.7rem;
        }

        /* History */
        .history-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .history-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          transition: all 0.15s;
        }

        .history-item:hover {
          border-color: var(--border-default);
          background: var(--bg-card-hover);
        }

        .history-title {
          flex: 1;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .history-meta { flex-shrink: 0; }

        .history-rewards {
          display: flex;
          gap: var(--space-2);
          flex-shrink: 0;
        }

        .history-xp {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--xp-blue);
        }

        .history-gold {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--gold);
        }

        @media (max-width: 600px) {
          .rewards-screen { padding: var(--space-4); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .badges-grid { grid-template-columns: repeat(2, 1fr); }
          .rewards-hero { flex-direction: column; text-align: center; }
        }
      `})]})}function Ff({user:e,onUnlock:t}){return i.jsxs("div",{className:"talents-screen",children:[i.jsxs("div",{className:"talents-header",children:[i.jsx("h1",{className:"font-display talents-title",children:"Talent Tree"}),i.jsx("div",{className:"talents-subtitle",children:"Unlock perks that make productivity easier — not just look better."}),i.jsxs("div",{className:"talent-points-display",children:[i.jsx("span",{className:"talent-points-icon",children:"🌟"}),i.jsx("span",{className:"talent-points-value",children:e.talentPoints}),i.jsx("span",{className:"talent-points-label",children:"Talent Points Available"})]})]}),i.jsx("div",{className:"talents-grid",children:Nf.map(n=>{const r=e.unlockedTalents.includes(n.id),l=e.talentPoints>=n.cost;return i.jsxs("div",{className:`talent-card ${r?"unlocked":""} ${!r&&l?"available":""}`,children:[i.jsx("div",{className:"talent-icon",children:n.icon}),i.jsxs("div",{className:"talent-info",children:[i.jsx("div",{className:"talent-name",children:n.name}),i.jsx("div",{className:"talent-desc",children:n.description})]}),i.jsx("div",{className:"talent-action",children:r?i.jsxs("div",{className:"talent-status unlocked-status",children:[i.jsx("span",{children:"✓"})," Unlocked"]}):i.jsxs("button",{className:`btn ${l?"btn-primary":"btn-secondary"} talent-unlock-btn`,onClick:()=>t(n.id,n.cost),disabled:!l,children:["🌟 ",n.cost," ",n.cost===1?"point":"points"]})})]},n.id)})}),i.jsxs("div",{className:"talents-tip",children:[i.jsx("span",{children:"💡"}),i.jsx("span",{children:"You earn Talent Points by leveling up. Every level grants 1 point. Keep completing quests to unlock more perks!"})]}),i.jsx("style",{children:`
        .talents-screen {
          padding: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .talents-header {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          animation: fadeInDown 0.4s var(--ease-out);
        }

        .talents-title {
          font-size: 1.8rem;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .talents-subtitle {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .talent-points-display {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: var(--purple-dim);
          border: 1px solid rgba(179,157,219,0.3);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-4);
          align-self: flex-start;
        }

        .talent-points-icon { font-size: 1rem; }
        .talent-points-value {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--purple);
          font-family: var(--font-display);
        }
        .talent-points-label {
          font-size: 0.78rem;
          color: var(--purple);
          font-weight: 600;
        }

        .talents-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .talent-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          display: flex;
          align-items: center;
          gap: var(--space-4);
          transition: all 0.2s var(--ease-out);
          animation: fadeInUp 0.3s var(--ease-out) both;
        }

        .talent-card:hover {
          border-color: var(--border-default);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .talent-card.unlocked {
          background: linear-gradient(135deg, var(--bg-card), rgba(179,157,219,0.06));
          border-color: rgba(179,157,219,0.3);
        }

        .talent-card.available {
          border-color: rgba(179,157,219,0.2);
        }

        .talent-icon {
          font-size: 2rem;
          width: 56px;
          height: 56px;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--border-subtle);
        }

        .talent-card.unlocked .talent-icon {
          background: var(--purple-dim);
          border-color: rgba(179,157,219,0.3);
          box-shadow: 0 0 12px rgba(179,157,219,0.15);
        }

        .talent-info {
          flex: 1;
          min-width: 0;
        }

        .talent-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .talent-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .talent-action { flex-shrink: 0; }

        .talent-status {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--purple);
          background: var(--purple-dim);
          border: 1px solid rgba(179,157,219,0.3);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-3);
        }

        .talent-unlock-btn {
          font-size: 0.82rem;
          padding: var(--space-2) var(--space-4);
        }

        button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none !important;
        }

        .talents-tip {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-4) var(--space-5);
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .talents-screen { padding: var(--space-4); }
          .talent-card { flex-direction: column; text-align: center; }
          .talent-icon { width: 48px; height: 48px; }
        }
      `})]})}function ea(e,t){return t==null?"—":["critChance","critDamage","speed"].includes(e)?`${t>=0?"+":""}${(t*100).toFixed(0)}%`:`${t>=0?"+":""}${t}`}const ta={attack:{label:"Attack",icon:"⚔"},speed:{label:"Atk Speed",icon:"⚡"},critChance:{label:"Crit Chance",icon:"🎯"},critDamage:{label:"Crit Dmg",icon:"💥"},focus:{label:"Focus",icon:"🔮"},resilience:{label:"Resilience",icon:"🛡"}};function Af({stat:e,oldVal:t=0,newVal:n=0}){const r=n-t,l=["critChance","critDamage","speed"].includes(e),o=ta[e]||{label:e,icon:"•"},a=r===0?"=":l?`${r>0?"+":""}${(r*100).toFixed(0)}%`:`${r>0?"+":""}${r}`,s=r>0?"var(--green)":r<0?"var(--coral)":"var(--text-muted)",c=r>0?"var(--green-dim)":r<0?"var(--coral-dim)":"var(--bg-elevated)",d=r>0?"▲":r<0?"▼":null;return i.jsxs("div",{className:"diff-row",children:[i.jsx("span",{className:"diff-icon",children:o.icon}),i.jsx("span",{className:"diff-label",children:o.label}),i.jsx("span",{className:"diff-old",children:ea(e,t)}),i.jsx("span",{className:"diff-arrow",children:"→"}),i.jsx("span",{className:"diff-new",children:ea(e,n)}),i.jsxs("span",{className:"diff-delta",style:{color:s,background:c},children:[d&&i.jsx("span",{className:"diff-chevron",style:{color:s},children:d}),a]})]})}function $f({item:e,inventoryIndex:t,onSelect:n,onSell:r}){const l=We[e.rarity]||We.common,o=qa(e);return i.jsxs("div",{className:"bag-tile",style:{"--rc":l.color,borderColor:l.color+"55"},onClick:()=>n(e,t),children:[i.jsxs("div",{className:"bt-icon-wrap",style:{background:l.bg},children:[i.jsx("span",{className:"bt-icon",children:e.icon}),i.jsx("span",{className:"bt-rarity-dot",style:{background:l.color}})]}),i.jsxs("div",{className:"bt-info",children:[i.jsx("div",{className:"bt-name",style:{color:l.color},children:e.name}),i.jsx("div",{className:"bt-slot",children:e.slot})]}),i.jsxs("div",{className:"bt-sell-preview",children:["💰",o,"g"]})]})}function Bf({item:e,inventoryIndex:t,equipped:n,onEquip:r,onSell:l,onClose:o}){if(!e)return null;const a=We[e.rarity]||We.common,s=qa(e),c=e.slot==="ring"?n.ring?n.ring2?"ring":"ring2":"ring":e.slot,d=n[c],m=d?fr[d]:null,g=m?We[m.rarity]||We.common:null,v=d===e.id,S=new Set([...Object.keys(e.stats||{}),...Object.keys((m==null?void 0:m.stats)||{})]),h=e.stats||{},w=(m==null?void 0:m.stats)||{},D=(h.attack||0)-(w.attack||0),f=(h.speed||0)-(w.speed||0),u=D>0||f>0||Object.keys(h).some(p=>(h[p]||0)>(w[p]||0));return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"drawer-backdrop",onClick:o}),i.jsxs("div",{className:"compare-drawer",children:[i.jsx("div",{className:"drawer-handle",onClick:o}),i.jsxs("div",{className:"cd-header",children:[i.jsxs("div",{className:"cd-new-item",children:[i.jsx("span",{className:"cd-item-icon",style:{background:a.bg},children:e.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"cd-item-name",style:{color:a.color},children:e.name}),i.jsxs("div",{className:"cd-slot-hint",children:[i.jsx("span",{className:"rarity-badge",style:{background:a.bg,color:a.color},children:a.label}),i.jsxs("span",{className:"slot-badge",children:["→ ",c]}),v?i.jsx("span",{className:"duplicate-badge",children:"⧉ DUPLICATE"}):u&&i.jsx("span",{className:"upgrade-badge",children:"▲ UPGRADE"})]})]})]}),i.jsx("button",{className:"drawer-close btn btn-ghost",onClick:o,children:"✕"})]}),i.jsxs("div",{className:"cd-compare-section",children:[v?i.jsxs("div",{className:"cd-duplicate-notice",children:[i.jsx("span",{className:"cdn-icon",children:e.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"cdn-title",children:"Already equipped"}),i.jsx("div",{className:"cdn-sub",children:"You're wearing this exact item. Equipping will swap to the other ring slot, or you can sell this copy."})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cd-compare-headers",children:i.jsx("div",{className:"cd-col-current",children:m?i.jsxs("div",{className:"cd-equipped-label",children:[i.jsx("span",{className:"cd-equipped-icon",style:{color:g.color},children:m.icon}),i.jsx("span",{style:{color:g.color},children:m.name}),i.jsx("span",{className:"cd-equipped-tag",children:"Equipped"})]}):i.jsx("div",{className:"cd-equipped-label cd-empty-slot",children:i.jsx("span",{children:"— Empty slot —"})})})}),i.jsx("div",{className:"cd-diff-rows",children:[...S].map(p=>{var x,y;return i.jsx(Af,{stat:p,oldVal:((x=m==null?void 0:m.stats)==null?void 0:x[p])||0,newVal:((y=e.stats)==null?void 0:y[p])||0},p)})})]}),(e.effects||[]).length>0&&i.jsxs("div",{className:"cd-effects",children:[i.jsx("div",{className:"cd-effects-label",children:"✦ Special Effects"}),(e.effects||[]).map((p,x)=>i.jsxs("div",{className:"cd-effect-row",children:[i.jsx("span",{children:p.type==="task_xp_bonus"?"📚 Task XP":p.type==="focus_session_bonus"?"🔮 Focus XP":p.type}),i.jsxs("span",{style:{color:"var(--green)",fontWeight:800},children:["+",(p.value*100).toFixed(0),"%"]})]},x))]}),e.flavor&&i.jsxs("div",{className:"cd-flavor",children:['"',e.flavor,'"']})]}),i.jsxs("div",{className:"cd-actions",children:[i.jsx("button",{className:"btn btn-primary cd-equip-btn",onClick:()=>r(e,t,c),children:"⚔ Equip"}),i.jsxs("button",{className:"btn btn-secondary cd-sell-btn",onClick:()=>l(e,t,s),children:["💰 Sell for ",s,"g"]})]}),i.jsx("style",{children:`
          .drawer-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(3px);
            z-index: 150;
            animation: fadeIn 0.2s ease;
          }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

          .compare-drawer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 160;
            background: var(--bg-elevated);
            border-top: 1px solid var(--border-default);
            border-radius: var(--radius-xl) var(--radius-xl) 0 0;
            padding: 12px 20px 24px;
            max-height: 85dvh;
            overflow-y: auto;
            box-shadow: var(--shadow-lg);
            animation: slideUp 0.28s var(--ease-spring);
            padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));
          }

          @keyframes slideUp {
            from { transform: translateY(100%); }
            to   { transform: translateY(0); }
          }

          @media (min-width: 600px) {
            .compare-drawer {
              left: 50%;
              transform: translateX(-50%);
              width: min(560px, 100vw);
              border-radius: var(--radius-xl);
              bottom: 24px;
              max-height: 80dvh;
              animation: scaleIn 0.25s var(--ease-spring);
            }
            .drawer-backdrop { backdrop-filter: blur(4px); }
          }

          .drawer-handle {
            width: 36px;
            height: 4px;
            background: var(--border-strong);
            border-radius: var(--radius-full);
            margin: 0 auto 16px;
            cursor: pointer;
          }

          @media (min-width: 600px) { .drawer-handle { display: none; } }

          .cd-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
          }

          .cd-new-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            flex: 1;
            min-width: 0;
          }

          .cd-item-icon {
            font-size: 2rem;
            width: 52px;
            height: 52px;
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .cd-item-name {
            font-size: 1rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 4px;
          }

          .cd-slot-hint {
            display: flex;
            align-items: center;
            gap: 5px;
            flex-wrap: wrap;
          }

          .upgrade-badge {
            font-size: 0.6rem;
            font-weight: 800;
            background: var(--green-dim);
            color: var(--green);
            border: 1px solid rgba(92,221,139,0.3);
            border-radius: var(--radius-full);
            padding: 1px 7px;
            letter-spacing: 0.06em;
          }

          .duplicate-badge {
            font-size: 0.6rem;
            font-weight: 800;
            background: var(--amber-dim);
            color: var(--amber);
            border: 1px solid rgba(245,166,35,0.3);
            border-radius: var(--radius-full);
            padding: 1px 7px;
            letter-spacing: 0.06em;
          }

          .cd-duplicate-notice {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            background: var(--amber-dim);
            border: 1px solid rgba(245,166,35,0.25);
            border-radius: var(--radius-md);
            padding: 14px 16px;
          }

          .cdn-icon { font-size: 1.8rem; flex-shrink: 0; }
          .cdn-title {
            font-size: 0.88rem;
            font-weight: 800;
            color: var(--amber);
            margin-bottom: 4px;
          }
          .cdn-sub {
            font-size: 0.78rem;
            color: var(--text-secondary);
            line-height: 1.5;
          }

          .drawer-close {
            flex-shrink: 0;
            font-size: 1rem;
            padding: 4px 8px;
            color: var(--text-muted);
          }

          /* Comparison section */
          .cd-compare-section {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .cd-equipped-label {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 8px 12px;
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
          }

          .cd-equipped-icon { font-size: 1rem; }

          .cd-equipped-tag {
            font-size: 0.62rem;
            background: var(--amber-dim);
            color: var(--amber);
            border: 1px solid rgba(245,166,35,0.3);
            border-radius: var(--radius-full);
            padding: 1px 6px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }

          .cd-empty-slot { color: var(--text-muted); font-style: italic; justify-content: center; }

          .cd-diff-rows {
            background: var(--bg-card);
            border: 1px solid var(--border-subtle);
            border-radius: var(--radius-md);
            overflow: hidden;
          }

          .diff-row {
            display: grid;
            grid-template-columns: 20px 1fr 52px 18px 52px 46px;
            align-items: center;
            gap: 6px;
            padding: 7px 12px;
            border-bottom: 1px solid var(--border-subtle);
            font-size: 0.78rem;
          }
          .diff-row:last-child { border-bottom: none; }

          .diff-icon  { font-size: 0.85rem; text-align: center; }
          .diff-label { color: var(--text-secondary); font-weight: 600; }
          .diff-old   { color: var(--text-muted); text-align: right; font-variant-numeric: tabular-nums; }
          .diff-arrow { color: var(--text-muted); text-align: center; font-size: 0.65rem; }
          .diff-new   { color: var(--text-primary); font-weight: 700; text-align: right; font-variant-numeric: tabular-nums; }
          .diff-delta {
            font-size: 0.7rem;
            font-weight: 800;
            padding: 2px 5px;
            border-radius: var(--radius-full);
            text-align: center;
            font-variant-numeric: tabular-nums;
            display: inline-flex;
            align-items: center;
            gap: 2px;
          }

          .diff-chevron {
            font-size: 0.55rem;
            line-height: 1;
          }

          .cd-effects {
            background: var(--bg-card);
            border: 1px solid rgba(92,221,139,0.2);
            border-radius: var(--radius-md);
            padding: 8px 12px;
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .cd-effects-label {
            font-size: 0.68rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--green);
            margin-bottom: 2px;
          }

          .cd-effect-row {
            display: flex;
            justify-content: space-between;
            font-size: 0.78rem;
            color: var(--text-secondary);
          }

          .cd-flavor {
            font-size: 0.72rem;
            color: var(--text-muted);
            font-style: italic;
            text-align: center;
            padding: 6px 0;
          }

          /* Actions */
          .cd-actions {
            display: flex;
            gap: 10px;
            margin-top: 16px;
            padding-top: 14px;
            border-top: 1px solid var(--border-subtle);
          }

          .cd-equip-btn {
            flex: 1;
            justify-content: center;
            padding: 12px;
            font-size: 0.9rem;
          }

          .cd-sell-btn {
            flex-shrink: 0;
            padding: 12px 16px;
            font-size: 0.82rem;
          }
        `})]})]})}function Uf({combat:e,userLevel:t,onGoldEarned:n}){const[r,l]=_.useState(null),[o,a]=_.useState(""),{equipped:s,inventory:c,equipItem:d,unequipItem:m,sellItem:g,sellEquipped:v,playerStats:S}=e,{stats:h}=zu(s),w=Tu(S),D=c.map((y,N)=>({item:fr[y],idx:N})).filter(y=>y.item);function f(y,N){l({item:y,inventoryIndex:N})}function u(y,N,k){d(y.id,k),l(null)}function p(y,N,k){g(y.id,N,()=>{n&&n(k)}),a(`Sold ${y.name} for ${k}g`),setTimeout(()=>a(""),2500),l(null)}const x=Object.values(s).filter(Boolean).length;return i.jsxs("div",{className:"inventory-screen",children:[i.jsxs("div",{className:"inv-header",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"font-display inv-title",children:"Bag"}),i.jsxs("div",{className:"inv-subtitle",children:[c.length," item",c.length!==1?"s":""," · ",x,"/8 slots equipped"]})]}),i.jsxs("div",{className:"inv-dps-badge",children:[i.jsx("span",{children:"⚔"}),i.jsxs("span",{children:[w," DPS"]})]})]}),o&&i.jsxs("div",{className:"sell-flash animate-in",children:["💰 ",o]}),Object.values(h).some(y=>y!==0)&&i.jsx("div",{className:"gear-summary",children:Object.entries(h).map(([y,N])=>{var k,b;return N!==0?i.jsxs("div",{className:"gear-stat-chip",children:[i.jsx("span",{className:"gs-icon",children:(k=ta[y])==null?void 0:k.icon}),i.jsx("span",{className:"gs-name",children:((b=ta[y])==null?void 0:b.label)||y}),i.jsx("span",{className:"gs-val",children:ea(y,N)})]},y):null})}),i.jsx("div",{className:"inv-bag animate-in",children:D.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"🎒"}),i.jsx("div",{className:"empty-title",children:"Bag is empty"}),i.jsx("div",{className:"empty-sub",children:"Defeat monsters or buy from the Shop to earn gear."})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"bag-hint",children:"Tap any item to compare & equip"}),i.jsx("div",{className:"bag-grid",children:D.map(({item:y,idx:N})=>i.jsx($f,{item:y,inventoryIndex:N,onSelect:f,onSell:k=>p(k,N,qa(k))},`${y.id}-${N}`))})]})}),r&&i.jsx(Bf,{item:r.item,inventoryIndex:r.inventoryIndex,equipped:s,onEquip:u,onSell:p,onClose:()=>l(null)}),i.jsx("style",{children:`
        .inventory-screen {
          padding: var(--space-6) var(--space-6) var(--space-8);
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .inv-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-4);
        }

        .inv-title {
          font-size: 1.6rem;
          background: linear-gradient(135deg, var(--amber), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .inv-subtitle {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .inv-dps-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--coral-dim);
          color: var(--coral);
          border: 1px solid rgba(255,101,132,0.3);
          border-radius: var(--radius-full);
          padding: var(--space-2) var(--space-4);
          font-size: 0.9rem;
          font-weight: 800;
          font-family: var(--font-display);
          flex-shrink: 0;
        }

        .sell-flash {
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
          color: var(--gold);
          font-size: 0.85rem;
          font-weight: 700;
          text-align: center;
        }

        .gear-summary {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .gear-stat-chip {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 10px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-size: 0.72rem;
        }

        .gs-icon  { font-size: 0.8rem; }
        .gs-name  { color: var(--text-muted); font-weight: 600; }
        .gs-val   { color: var(--green); font-weight: 800; }

        .inv-tabs {
          display: flex;
          gap: var(--space-2);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: var(--space-3);
        }

        /* ── Bag grid ── */
        .inv-bag { display: flex; flex-direction: column; gap: var(--space-3); }

        .bag-hint {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-style: italic;
        }

        .bag-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .bag-tile {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          background: var(--bg-card);
          border: 1px solid;
          border-radius: var(--radius-lg);
          padding: var(--space-3) var(--space-4);
          cursor: pointer;
          transition: all 0.15s var(--ease-out);
          min-height: 60px;
        }

        .bag-tile:hover {
          background: var(--bg-card-hover);
          transform: translateX(3px);
          box-shadow: var(--shadow-sm);
        }

        .bt-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }

        .bt-icon { font-size: 1.6rem; }

        .bt-rarity-dot {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid var(--bg-card);
        }

        .bt-info { flex: 1; min-width: 0; }
        .bt-name {
          font-size: 0.88rem;
          font-weight: 700;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .bt-slot {
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: capitalize;
          margin-top: 2px;
        }

        .bt-sell-preview {
          font-size: 0.72rem;
          color: var(--gold);
          font-weight: 700;
          opacity: 0.6;
          flex-shrink: 0;
        }

        /* ── Equipped slots ── */
        .slots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-3);
        }

        .equip-slot-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .equip-slot-card.has-item { border-color: var(--border-default); }
        .equip-slot-card.empty { opacity: 0.55; }

        .esc-slot-label {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .esc-empty {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-style: italic;
          text-align: center;
          padding: var(--space-3);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-md);
        }

        .esc-item-top {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
        }

        .esc-item-icon { font-size: 1.5rem; flex-shrink: 0; }
        .esc-item-name { font-size: 0.85rem; font-weight: 700; margin-bottom: 3px; }

        .esc-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .esc-stat-chip {
          font-size: 0.68rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2px 6px;
          color: var(--text-secondary);
          font-weight: 700;
        }

        .esc-flavor {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.4;
        }

        .esc-actions {
          display: flex;
          gap: var(--space-2);
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
        }

        .esc-btn {
          font-size: 0.72rem;
          padding: var(--space-1) var(--space-3);
        }

        .sell-btn {
          color: var(--gold);
          border-color: var(--gold-glow);
          background: var(--gold-dim);
        }
        .sell-btn:hover {
          background: rgba(245,200,66,0.25);
          transform: none;
        }

        /* Shared badges */
        .rarity-badge {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 1px 6px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .slot-badge {
          font-size: 0.6rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: var(--radius-full);
          background: var(--bg-elevated);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          text-transform: capitalize;
        }

        @media (max-width: 600px) {
          .inventory-screen { padding: var(--space-4) var(--space-4) var(--space-8); }
          .slots-grid { grid-template-columns: 1fr; }
          .inv-title { font-size: 1.3rem; }
        }
      `})]})}const Hf={shop_id:"starter_shop",name:"Wandering Merchant",icon:"🛒",items:[{item_id:"ring_focus_1",price:80,currency:"gold"},{item_id:"ring_speed_1",price:80,currency:"gold"},{item_id:"boots_speed_1",price:90,currency:"gold"},{item_id:"gloves_grip_1",price:100,currency:"gold"},{item_id:"helmet_steel_1",price:110,currency:"gold"},{item_id:"chest_iron_1",price:140,currency:"gold"},{item_id:"legs_swift_1",price:100,currency:"gold"}]},ds=[[{item_id:"ring_focus_2",price:220,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"},{item_id:"helmet_clarity_1",price:200,currency:"gold"}],[{item_id:"boots_speed_2",price:200,currency:"gold"},{item_id:"legs_endure_1",price:190,currency:"gold"},{item_id:"ring_focus_2",price:220,currency:"gold"}],[{item_id:"necklace_resolve_1",price:350,currency:"gold"},{item_id:"chest_focus_1",price:400,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"}]],Vf=24;function ps(){const e=36e5*Vf,t=Date.now();return(Math.floor(t/e)+1)*e-t}const Wt=50;function Wf(e){const t=Math.floor(e/36e5),n=Math.floor(e%36e5/6e4);return`${t}h ${n}m`}function fs({itemId:e,price:t,currency:n,userGold:r,onBuy:l,owned:o}){const a=fr[e];if(!a)return null;const s=We[a.rarity]||We.common,c=r>=t,[d,m]=_.useState(!1),[g,v]=_.useState(!1);function S(){if(!c||d||g)return;m(!0),l(e,t)&&v(!0),setTimeout(()=>m(!1),300)}return i.jsxs("div",{className:`shop-item ${g?"bought":""} ${c?"":"cant-afford"}`,style:{"--rc":s.color,borderColor:g?"var(--green)":s.color},children:[i.jsxs("div",{className:"shop-item-top",children:[i.jsx("span",{className:"shop-item-icon",children:a.icon}),i.jsxs("div",{className:"shop-item-header",children:[i.jsx("div",{className:"shop-item-name",style:{color:s.color},children:a.name}),i.jsx("span",{className:"rarity-badge",style:{background:s.bg,color:s.color},children:s.label})]})]}),i.jsx("div",{className:"shop-item-stats",children:Object.entries(a.stats||{}).map(([h,w])=>i.jsxs("span",{className:"shop-stat-chip",children:[i.jsx("span",{className:"ssc-name",children:h}),i.jsx("span",{className:"ssc-val",children:h==="critChance"||h==="critDamage"||h==="speed"?`+${(w*100).toFixed(0)}%`:`+${w}`})]},h))}),a.flavor&&i.jsxs("div",{className:"shop-item-flavor",children:['"',a.flavor,'"']}),i.jsxs("div",{className:"shop-item-footer",children:[i.jsxs("div",{className:`shop-price ${c?"":"unaffordable"}`,children:["💰 ",t," gold"]}),g?i.jsx("div",{className:"shop-bought-badge",children:"✓ Added to bag"}):i.jsx("button",{className:`btn ${c?"btn-primary":"btn-secondary"} shop-buy-btn`,onClick:S,disabled:!c||d,children:d?"...":c?"Buy":"Need gold"})]})]})}function Qf({userGold:e,onBuy:t,onRefreshSpend:n}){const[r,l]=_.useState(ps()),[o,a]=_.useState(0),[s,c]=_.useState(!1),d=(()=>{const g=Math.floor(Date.now()/864e5);return ds[(g+o)%ds.length]})();_.useEffect(()=>{const g=setInterval(()=>l(ps()),6e4);return()=>clearInterval(g)},[]);function m(){e<Wt||(n(Wt),a(g=>g+1),c(!0),setTimeout(()=>c(!1),600))}return i.jsxs("div",{className:"shop-screen",children:[i.jsxs("div",{className:"shop-header",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"font-display shop-title",children:"🛒 Shop"}),i.jsx("div",{className:"shop-subtitle",children:"Gear up. The monsters aren't getting weaker."})]}),i.jsxs("div",{className:"gold-display",children:[i.jsx("span",{children:"💰"}),i.jsx("span",{className:"gold-amount",children:e}),i.jsx("span",{className:"gold-label",children:"gold"})]})]}),i.jsxs("div",{className:"shop-section",children:[i.jsxs("div",{className:"shop-section-header",children:[i.jsxs("div",{className:"shop-section-title",children:[i.jsx("span",{className:"section-icon",children:"⭐"}),i.jsx("span",{className:"font-display",children:"Daily Arrivals"}),i.jsx("span",{className:"recommended-tag",children:"RECOMMENDED"})]}),i.jsxs("div",{className:"refresh-row",children:[i.jsxs("div",{className:"refresh-countdown",children:["🔄 Free in ",Wf(r)]}),i.jsxs("button",{className:`refresh-btn ${s?"flash":""} ${e<Wt?"cant-afford":""}`,onClick:m,disabled:e<Wt,title:`Spend ${Wt} gold to refresh the shop now`,children:["💰 ",Wt,"g — Refresh now"]})]})]}),i.jsx("div",{className:`shop-items-grid ${s?"flash-grid":""}`,children:d.map(g=>i.jsx(fs,{itemId:g.item_id,price:g.price,currency:g.currency,userGold:e,onBuy:t},g.item_id))})]}),i.jsxs("div",{className:"shop-section",children:[i.jsx("div",{className:"shop-section-header",children:i.jsxs("div",{className:"shop-section-title",children:[i.jsx("span",{className:"section-icon",children:"🛍"}),i.jsx("span",{className:"font-display",children:"General Store"}),i.jsx("span",{className:"always-tag",children:"ALWAYS OPEN"})]})}),i.jsx("div",{className:"shop-items-grid",children:Hf.items.map(g=>i.jsx(fs,{itemId:g.item_id,price:g.price,currency:g.currency,userGold:e,onBuy:t},g.item_id))})]}),i.jsx("div",{className:"shop-tip",children:"💡 Items go directly to your bag. Equip them in the Equipment screen."}),i.jsx("style",{children:`
        .shop-screen {
          padding: var(--space-8);
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .shop-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .shop-title {
          font-size: 1.8rem;
          background: linear-gradient(135deg, var(--gold), var(--amber));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shop-subtitle { color: var(--text-secondary); font-size: 0.88rem; margin-top: 4px; }

        .gold-display {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full);
          padding: var(--space-3) var(--space-5);
        }

        .gold-amount { font-size: 1.2rem; font-weight: 800; color: var(--gold); font-family: var(--font-display); }
        .gold-label  { font-size: 0.75rem; color: var(--gold); opacity: 0.7; }

        .shop-section { display: flex; flex-direction: column; gap: var(--space-4); }

        .shop-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .shop-section-title {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 1rem;
          color: var(--text-primary);
        }

        .section-icon { font-size: 1.1rem; }

        .recommended-tag {
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em;
          background: var(--gold-dim); color: var(--gold);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-full); padding: 2px 8px;
        }

        .always-tag {
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em;
          background: var(--green-dim); color: var(--green);
          border: 1px solid rgba(92,221,139,0.3);
          border-radius: var(--radius-full); padding: 2px 8px;
        }

        .refresh-row {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .refresh-btn {
          font-size: 0.72rem;
          font-weight: 700;
          font-family: var(--font-body);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          color: var(--gold);
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .refresh-btn:hover:not(:disabled) {
          background: rgba(245,200,66,0.25);
          transform: translateY(-1px);
        }
        .refresh-btn:disabled, .refresh-btn.cant-afford {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none;
        }
        .refresh-btn.flash {
          background: var(--green-dim);
          border-color: rgba(92,221,139,0.4);
          color: var(--green);
          animation: scaleIn 0.25s var(--ease-spring);
        }
        .flash-grid {
          animation: fadeInUp 0.3s var(--ease-out);
        }
          font-size: 0.72rem;
          color: var(--text-muted);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 3px 10px;
        }

        .shop-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-3);
        }

        .shop-item {
          background: var(--bg-card);
          border: 1px solid;
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          transition: all 0.2s var(--ease-out);
        }

        .shop-item:hover:not(.bought):not(.cant-afford) {
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .shop-item.bought {
          border-color: var(--green) !important;
          background: var(--green-dim);
        }

        .shop-item.cant-afford { opacity: 0.65; }

        .shop-item-top {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
        }

        .shop-item-icon { font-size: 1.6rem; flex-shrink: 0; }

        .shop-item-header { flex: 1; }
        .shop-item-name { font-size: 0.9rem; font-weight: 700; line-height: 1.2; margin-bottom: 4px; }

        .shop-item-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .shop-stat-chip {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.7rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2px 6px;
        }

        .ssc-name { color: var(--text-muted); text-transform: capitalize; }
        .ssc-val  { color: var(--green); font-weight: 800; }

        .shop-item-flavor {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.4;
        }

        .shop-item-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-2);
          padding-top: var(--space-2);
          border-top: 1px solid var(--border-subtle);
        }

        .shop-price { font-size: 0.88rem; font-weight: 800; color: var(--gold); }
        .shop-price.unaffordable { color: var(--text-muted); }

        .shop-buy-btn { font-size: 0.78rem; padding: var(--space-1) var(--space-4); }

        .shop-bought-badge {
          font-size: 0.78rem; font-weight: 800; color: var(--green);
        }

        .shop-tip {
          font-size: 0.78rem;
          color: var(--text-muted);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-4);
        }

        @media (max-width: 600px) {
          .shop-screen { padding: var(--space-4); }
          .shop-items-grid { grid-template-columns: 1fr; }
        }
      `})]})}function Xf({effects:e,levelUpData:t}){return i.jsxs(i.Fragment,{children:[e.map(n=>i.jsxs("div",{className:"reward-float",style:{left:n.x!=null?`${n.x}px`:"50%",top:n.y!=null?`${n.y}px`:"40%",transform:n.x==null?"translateX(-50%)":void 0},children:[i.jsxs("span",{style:{color:"var(--xp-blue)",textShadow:"0 0 10px rgba(79,195,247,0.5)"},children:["+",n.xp," XP"]}),i.jsxs("span",{style:{color:"var(--gold)",textShadow:"0 0 10px var(--gold-glow)",fontSize:"0.8rem"},children:["+",n.gold," 💰"]})]},n.id)),t&&i.jsxs("div",{className:"level-up-banner",children:[i.jsx("div",{className:"level-up-glow"}),i.jsx("div",{className:"level-up-icon",children:"⭐"}),i.jsxs("div",{className:"level-up-text",children:[i.jsx("div",{className:"level-up-title font-display",children:"LEVEL UP!"}),i.jsxs("div",{className:"level-up-subtitle",children:["You reached Level ",i.jsx("strong",{children:t.level})]}),t.talentPoints>0&&i.jsxs("div",{className:"level-up-bonus",children:["🌟 +",t.talentPoints," Talent Point",t.talentPoints>1?"s":""," — check the Talents tab!"]})]}),i.jsx("div",{className:"level-up-icon",children:"⭐"})]}),i.jsx("style",{children:`
        .level-up-banner {
          position: fixed;
          top: var(--space-6);
          left: 50%;
          transform: translateX(-50%);
          z-index: 400;
          background: linear-gradient(135deg, #1E1B3A, #2D2560);
          border: 2px solid var(--gold);
          border-radius: var(--radius-xl);
          padding: var(--space-4) var(--space-8);
          text-align: center;
          box-shadow: 0 0 40px var(--gold-glow), var(--shadow-lg);
          animation: levelUpBurst 0.5s var(--ease-spring) both;
          display: flex;
          align-items: center;
          gap: var(--space-4);
          white-space: nowrap;
        }

        .level-up-glow {
          position: absolute;
          inset: -2px;
          border-radius: var(--radius-xl);
          background: transparent;
          box-shadow: 0 0 30px var(--gold-glow);
          pointer-events: none;
          animation: pulse-gold 2s infinite;
        }

        .level-up-icon {
          font-size: 1.5rem;
          animation: spinSlow 4s linear infinite;
        }

        .level-up-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.08em;
        }

        .level-up-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .level-up-bonus {
          font-size: 0.8rem;
          color: var(--purple);
          margin-top: 4px;
          font-weight: 600;
        }
      `})]})}function Kf(){const[e,t]=_.useState(()=>{try{const y=localStorage.getItem("ql_user");return y?JSON.parse(y):cs}catch{return cs}}),[n,r]=_.useState(()=>{try{const y=localStorage.getItem("ql_tasks");return y?JSON.parse(y):ss}catch{return ss}}),[l,o]=_.useState(()=>{try{const y=localStorage.getItem("ql_history");return y?JSON.parse(y):us}catch{return us}}),[a,s]=_.useState([]),[c,d]=_.useState(null);_.useEffect(()=>{localStorage.setItem("ql_user",JSON.stringify(e))},[e]),_.useEffect(()=>{localStorage.setItem("ql_tasks",JSON.stringify(n))},[n]),_.useEffect(()=>{localStorage.setItem("ql_history",JSON.stringify(l))},[l]);const m=_.useCallback((y,N,k=null,b=null)=>{const R=Lt();s(z=>[...z,{id:R,xp:y,gold:N,x:k,y:b}]),setTimeout(()=>{s(z=>z.filter(F=>F.id!==R))},2e3)},[]),g=_.useCallback((y,N)=>{t(k=>{const b=Cf(k.level,k.xp,y);return b.leveledUp&&(d({level:b.level,talentPoints:b.talentPointsEarned}),setTimeout(()=>d(null),4e3)),{...k,xp:b.xp,xpToNext:b.xpToNext,level:b.level,gold:k.gold+N,talentPoints:k.talentPoints+b.talentPointsEarned}})},[]),v=_.useCallback((y,N=null)=>{r(k=>{const b=k.find(F=>F.id===y);if(!b)return k;const{xp:R,gold:z}=Pu(b,e.unlockedTalents);return g(R,z),m(R,z),o(F=>[{id:Lt(),title:b.title,completedAt:new Date().toISOString(),xpEarned:R,goldEarned:z},...F]),k.filter(F=>F.id!==y)})},[e.unlockedTalents,g,m]),S=_.useCallback((y,N)=>{r(k=>k.map(b=>{var z;if(b.id!==y)return b;if(!((z=b.subtasks.find(F=>F.id===N))==null?void 0:z.done)){const{xp:F,gold:Ee}=jf(e.unlockedTalents);g(F,Ee),m(F,Ee)}return{...b,subtasks:b.subtasks.map(F=>F.id===N?{...F,done:!F.done}:F)}}))},[e.unlockedTalents,g,m]),h=_.useCallback(y=>{const N={id:Lt(),status:"pending",subtasks:[],createdAt:new Date().toISOString(),completedAt:null,isOverdue:!1,tags:[],notes:"",...y};return r(k=>[N,...k]),N},[]),w=_.useCallback((y,N=2)=>{r(k=>k.map(b=>{if(b.id!==y)return b;const R=new Date(Date.now()+N*60*60*1e3).toISOString();return{...b,dueAt:R,isOverdue:!1}}))},[]),D=_.useCallback(y=>{r(N=>N.filter(k=>k.id!==y))},[]),f=_.useCallback((y,N)=>{t(k=>k.talentPoints<N?k:{...k,talentPoints:k.talentPoints-N,unlockedTalents:[...k.unlockedTalents,y]})},[]),u=_.useCallback((y,N)=>{const{xp:k,gold:b}=_f(y,N,e.unlockedTalents);return g(k,b),m(k,b),{xp:k,gold:b}},[e.unlockedTalents,g,m]),p=_.useCallback(y=>{t(N=>({...N,gold:Math.max(0,N.gold+y)}))},[]),x=_.useCallback(y=>{g(y,0)},[g]);return{user:e,tasks:n,history:l,rewardEffects:a,levelUpData:c,completeTask:v,toggleSubtask:S,addTask:h,snoozeTask:w,deleteTask:D,unlockTalent:f,completeFocusSession:u,showReward:m,applyGoldReward:p,applyXpReward:x}}function Yf(e){const[t,n]=_.useState(null),r=_.useRef(null),l=_.useCallback((d,m=25)=>{const g=m*60;n({taskId:d.id,taskTitle:d.title,totalSeconds:g,secondsLeft:g,paused:!1,minutes:m})},[]),o=_.useCallback(()=>{n(d=>d?{...d,paused:!0}:null)},[]),a=_.useCallback(()=>{n(d=>d?{...d,paused:!1}:null)},[]),s=_.useCallback((d=!1)=>{if(t&&e){const m=Math.round((t.totalSeconds-t.secondsLeft)/60);e(m,d)}n(null)},[t,e]);return _.useEffect(()=>{if(!t||t.paused){clearInterval(r.current);return}return r.current=setInterval(()=>{n(d=>{if(!d)return null;const m=d.secondsLeft-1;return m<=0?(clearInterval(r.current),e&&e(d.minutes,!0),null):{...d,secondsLeft:m}})},1e3),()=>clearInterval(r.current)},[t==null?void 0:t.paused,t==null?void 0:t.taskId,e]),{session:t,start:l,pause:o,resume:a,stop:s,formatTime:d=>{const m=Math.floor(d/60).toString().padStart(2,"0"),g=(d%60).toString().padStart(2,"0");return`${m}:${g}`}}}const ir=[{id:"slime_distract",name:"Distracto Slime",tier:1,max_hp:400,regen:0,armor:0,gold_drop:[8,18],xp_drop:12,sprite:"🟢",color:"#5CDD8B",flavor:"It jiggles every time you check your phone.",loot_table:[{item:"ring_focus_1",chance:.12},{item:"boots_speed_1",chance:.06}]},{id:"goblin_procrastin",name:"Procrastin Goblin",tier:1,max_hp:650,regen:0,armor:1,gold_drop:[12,25],xp_drop:20,sprite:"👺",color:"#FF6584",flavor:`"I'll deal with you in a minute." It has been 3 hours.`,loot_table:[{item:"gloves_grip_1",chance:.1},{item:"ring_focus_1",chance:.08}]},{id:"troll_overwhelm",name:"Overwhelm Troll",tier:2,max_hp:3500,regen:1,armor:3,gold_drop:[40,80],xp_drop:80,sprite:"🧌",color:"#B39DDB",flavor:"It throws seventeen tasks at you at once.",loot_table:[{item:"helmet_clarity_1",chance:.15},{item:"chest_focus_1",chance:.08},{item:"necklace_resolve_1",chance:.06}]},{id:"witch_avoidance",name:"Avoidance Witch",tier:2,max_hp:5e3,regen:2,armor:4,gold_drop:[60,120],xp_drop:110,sprite:"🧙",color:"#4FC3F7",flavor:'She whispers "you can do it tomorrow."',loot_table:[{item:"ring_focus_2",chance:.1},{item:"boots_speed_2",chance:.08},{item:"legs_endure_1",chance:.07}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:3}]},{id:"boss_procrastination",name:"The Eternal Procrastinator",tier:3,max_hp:5e4,regen:5,armor:10,gold_drop:[500,800],xp_drop:300,sprite:"👑",color:"#F5C842",flavor:`"I'll fight you properly once conditions are perfect." It never happens.`,isBoss:!0,loot_table:[{item:"ring_focus_2",chance:1},{item:"necklace_resolve_1",chance:.5},{item:"chest_focus_1",chance:.4}],phases:[{hp_threshold:.75,effect:"armor_boost",effect_value:5},{hp_threshold:.5,effect:"slow_player",effect_value:.5},{hp_threshold:.25,effect:"regen_boost",effect_value:10}]},{id:"boss_burnout",name:"Lord Burnout",tier:3,max_hp:8e4,regen:8,armor:15,gold_drop:[800,1200],xp_drop:500,sprite:"🔥",color:"#FF3860",flavor:"You have faced him before. You will face him again.",isBoss:!0,loot_table:[{item:"chest_focus_1",chance:1},{item:"helmet_clarity_1",chance:.6},{item:"ring_focus_2",chance:.4}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:15},{hp_threshold:.2,effect:"armor_boost",effect_value:8}]}],ms=ir.map(e=>e.id);function Mr(e){return ir.find(t=>t.id===e)||ir[0]}function gs(e){const t=ms.indexOf(e);return t===-1||t>=ms.length-1?{...ir[0],_loop:!0}:ir[t+1]}const qf={head:null,body:null,gloves:null,legs:null,boots:null,ring:null,ring2:null,necklace:null},hs={currentMonsterId:"slime_distract",monsterHp:null,monstersKilled:0,equipped:qf,inventory:[],activeBuffs:[],phaseEffects:[],lastActiveMs:Date.now(),momentumCount:0,momentumWindowStart:Date.now(),lowEnergyMode:!1};function Gf({user:e,focusSessionActive:t=!1,onGoldEarned:n,onXpEarned:r,onLootDrop:l,onKillToast:o,onOfflineToast:a}){const[s,c]=_.useState(()=>{try{const M=localStorage.getItem("ql_combat");if(M){const L=JSON.parse(M);return{...hs,...L,activeBuffs:[],phaseEffects:[]}}}catch{}return hs}),[d,m]=_.useState([]),g=_.useRef(null),v=_.useRef(s);v.current=s,_.useEffect(()=>{const{activeBuffs:M,phaseEffects:L,...I}=s;I.lastActiveMs=Date.now(),localStorage.setItem("ql_combat",JSON.stringify(I))},[s]);const S=Mr(s.currentMonsterId),h=s.monsterHp??S.max_hp,w=Dr(e.level,s.equipped),D=ff(s.momentumCount),f=pf(t);_.useEffect(()=>{const M=localStorage.getItem("ql_combat");if(M)try{const I=JSON.parse(M).lastActiveMs||Date.now();if(Date.now()-I>6e4){const E=hf(w,I,Date.now());E.damage>0&&(p(E.damage,!1,!0),E.gold>0&&n&&n(E.gold),a&&a(E))}}catch{}},[]);const u=_.useCallback((M,L,I=!1)=>{const B=Lt(),E=30+Math.random()*40;m(j=>[...j,{id:B,value:M,isCrit:L,isOffline:I,x:E}]),setTimeout(()=>{m(j=>j.filter(P=>P.id!==B))},1400)},[]),p=_.useCallback((M,L=!1,I=!1)=>{c(B=>{const E=Mr(B.currentMonsterId),j=B.monsterHp??E.max_hp,P=mf(M,E.armor),$=Math.max(0,j-P),X=gf(E,$,j);let he=[...B.phaseEffects||[]];if(X&&he.push({id:Lt(),...X,expiresAt:1/0}),$<=0){const de=is(E);n&&n(de.gold),r&&r(de.xp),de.loot.length>0&&l&&l(de.loot,E.name),o&&o({...de,monsterName:E.name,isBoss:E.isBoss});const ot=gs(B.currentMonsterId);return{...B,currentMonsterId:ot.id,monsterHp:ot.max_hp,monstersKilled:B.monstersKilled+1,phaseEffects:[]}}return{...B,monsterHp:$,phaseEffects:he}}),I||u(M,L)},[n,r,l,u]);_.useEffect(()=>(g.current=setInterval(()=>{const M=v.current,L=Mr(M.currentMonsterId),I=Dr(e.level,M.equipped),B=[...M.activeBuffs||[],...M.phaseEffects||[]],E=Date.now(),j=(M.activeBuffs||[]).filter(he=>he.expiresAt>E);j.length!==(M.activeBuffs||[]).length&&c(he=>({...he,activeBuffs:j}));const{damage:P,isCrit:$}=df(I,B),X=Math.round(P*D*f);L.regen>0&&c(he=>{const de=he.monsterHp??L.max_hp,ot=Math.min(L.max_hp,de+L.regen);return{...he,monsterHp:ot}}),p(X,$)},uf),()=>clearInterval(g.current)),[e.level,s.equipped,D,f]);const x=_.useCallback(()=>{const M=Dr(e.level,s.equipped),L=Math.round(M.attack*5*D),I=Math.random()<Math.min(.8,M.critChance+.2),B=I?Math.round(L*M.critDamage):L,E={id:Lt(),type:"attack_mult",label:"Task Focus!",value:1.5,expiresAt:Date.now()+1e4,icon:"⚡"};c(j=>({...j,activeBuffs:[...(j.activeBuffs||[]).filter(P=>P.id!=="focus_boost"),E],momentumCount:j.momentumCount+1})),p(B,I)},[e.level,s.equipped,D,p]),y=_.useCallback(()=>{const M=Dr(e.level,s.equipped),L=Math.round(M.attack*1.2);p(L,!1)},[e.level,s.equipped,p]),N=_.useCallback((M,L)=>{c(I=>{const B=I.equipped[L],E=B?[...I.inventory,B]:[...I.inventory],j=E.filter((P,$)=>!(P===M&&$===E.lastIndexOf(M)));return{...I,equipped:{...I.equipped,[L]:M},inventory:j}})},[]),k=_.useCallback(M=>{c(L=>{const I=L.equipped[M];return I?{...L,equipped:{...L.equipped,[M]:null},inventory:[...L.inventory,I]}:L})},[]),b=_.useCallback(M=>{c(L=>({...L,inventory:[...L.inventory,M]}))},[]),R=_.useCallback((M,L,I)=>I(L)?(b(M),!0):!1,[b]),z=_.useCallback((M,L,I)=>{c(B=>{const E=[...B.inventory];return E.splice(L,1),{...B,inventory:E}}),I&&I()},[]),F=_.useCallback((M,L)=>{c(I=>I.equipped[M]?{...I,equipped:{...I.equipped,[M]:null}}:I),L&&L()},[]),Ee=_.useCallback(()=>{c(M=>{const L=Mr(M.currentMonsterId),I=is(L);n&&n(I.gold),r&&r(I.xp),I.loot.length>0&&l&&l(I.loot,L.name),o&&o({...I,monsterName:L.name,isBoss:L.isBoss});const B=gs(M.currentMonsterId);return{...M,currentMonsterId:B.id,monsterHp:B.max_hp,monstersKilled:M.monstersKilled+1,phaseEffects:[]}})},[n,r,l,o]),Ke=_.useCallback(()=>{c(M=>({...M,lowEnergyMode:!M.lowEnergyMode}))},[]);return{monster:S,currentHp:h,monsterMaxHp:S.max_hp,playerStats:w,equipped:s.equipped,inventory:s.inventory,activeBuffs:s.activeBuffs||[],monstersKilled:s.monstersKilled,floatingNumbers:d,lowEnergyMode:s.lowEnergyMode,momentumCount:s.momentumCount,momentumMult:D,onTaskComplete:x,onSubtaskComplete:y,equipItem:N,unequipItem:k,addToInventory:b,buyItem:R,sellItem:z,sellEquipped:F,instantKill:Ee,toggleLowEnergy:Ke}}function Jf(){const[e,t]=_.useState("dashboard"),[n,r]=_.useState(!1),{toasts:l,log:o,addToast:a,dismissToast:s}=vf(),{user:c,tasks:d,history:m,rewardEffects:g,levelUpData:v,completeTask:S,toggleSubtask:h,addTask:w,snoozeTask:D,deleteTask:f,unlockTalent:u,completeFocusSession:p,applyGoldReward:x,applyXpReward:y}=Kf(),N=_.useCallback((j,P)=>{j>0&&p(j,P)},[p]),k=Yf(N),b=_.useCallback(j=>{var P,$;a({type:j.isBoss?"boss":"kill",icon:j.isBoss?"👑":"☠",title:`${j.monsterName} defeated!`,sub:`+${j.gold} gold · +${j.xp} XP`,loot:j.loot,duration:((P=j.loot)==null?void 0:P.length)>0?5e3:3e3}),(($=j.loot)==null?void 0:$.length)>0&&r(!0)},[a]),R=_.useCallback(j=>{a({type:"offline",icon:"🌙",title:`Welcome back! Hero fought for ${j.hours}h`,sub:`${j.damage.toLocaleString()} damage dealt · +${j.gold} gold`,duration:6e3})},[a]),z=Gf({user:c,focusSessionActive:!!k.session,onGoldEarned:j=>x(j),onXpEarned:j=>y(j),onLootDrop:j=>j.forEach(P=>z.addToInventory(P)),onKillToast:b,onOfflineToast:R}),F=_.useCallback(j=>{S(j),z.onTaskComplete(),a({type:"default",icon:"⚡",title:"Task complete! Power burst!",sub:"+10s attack speed boost",duration:2500})},[S,z,a]),Ee=_.useCallback((j,P)=>{h(j,P),z.onSubtaskComplete()},[h,z]),Ke=_.useCallback((j,P)=>c.gold<P?!1:(x(-P),z.addToInventory(j),!0),[c.gold,x,z]),M=_.useCallback(j=>{x(-j)},[x]),L=_.useCallback(j=>{x(j),a({type:"default",icon:"🛠",title:`DEV: +${j} gold`,duration:2e3})},[x,a]),I=_.useCallback(()=>{z.instantKill()},[z]);function B(j){k.start(j,25),t("focus")}function E(j){j==="inventory"&&r(!1),t(j)}return i.jsxs("div",{className:"app-layout",children:[i.jsx(af,{user:c,activeView:e,onNavigate:E,pendingCount:d.filter(j=>j.status==="pending").length,newLoot:n}),i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,overflow:"hidden"},children:[i.jsx(bf,{monster:z.monster,currentHp:z.currentHp,playerStats:z.playerStats,activeBuffs:z.activeBuffs,floatingNumbers:z.floatingNumbers,momentumMult:z.momentumMult,lowEnergyMode:z.lowEnergyMode,monstersKilled:z.monstersKilled,onToggleLowEnergy:z.toggleLowEnergy,combatLog:o}),i.jsxs("main",{className:"main-content",children:[e==="dashboard"&&i.jsx(Mf,{user:c,tasks:d,onComplete:F,onToggleSubtask:Ee,onSnooze:D,onDelete:f,onAddTask:w,onStartFocus:B}),e==="focus"&&i.jsx(If,{session:k.session,onStart:k.start,onPause:k.pause,onResume:k.resume,onStop:k.stop,formatTime:k.formatTime,tasks:d.filter(j=>j.status==="pending")}),e==="inventory"&&i.jsx(Uf,{combat:z,userLevel:c.level,onGoldEarned:j=>x(j)}),e==="shop"&&i.jsx(Qf,{userGold:c.gold,onBuy:Ke,onRefreshSpend:M}),e==="rewards"&&i.jsx(Rf,{user:c,history:m}),e==="talents"&&i.jsx(Ff,{user:c,onUnlock:u})]})]}),i.jsx(Xf,{effects:g,levelUpData:v}),i.jsx(xf,{toasts:l,onDismiss:s}),i.jsx(Sf,{onAddGold:L,onInstantKill:I})]})}ao.createRoot(document.getElementById("root")).render(i.jsx(Ku.StrictMode,{children:i.jsx(Jf,{})}));
