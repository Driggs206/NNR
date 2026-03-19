(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Du(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},yl={},xs={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),Mu=Symbol.for("react.portal"),Lu=Symbol.for("react.fragment"),Iu=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Ru=Symbol.for("react.provider"),Fu=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Uu=Symbol.for("react.memo"),Bu=Symbol.for("react.lazy"),Ga=Symbol.iterator;function Hu(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,ks={};function yn(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ys}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=yn.prototype;function ra(e,t,n){this.props=e,this.context=t,this.refs=ks,this.updater=n||ys}var la=ra.prototype=new bs;la.constructor=ra;ws(la,yn.prototype);la.isPureReactComponent=!0;var Ja=Array.isArray,Ss=Object.prototype.hasOwnProperty,oa={current:null},Ns={key:!0,ref:!0,__self:!0,__source:!0};function js(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Ss.call(t,r)&&!Ns.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:ur,type:e,key:o,ref:i,props:l,_owner:oa.current}}function Vu(e,t){return{$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function aa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Wu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Za=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wu(""+e.key):t.toString(36)}function Ir(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ur:case Mu:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Il(i,0):r,Ja(l)?(n="",e!=null&&(n=e.replace(Za,"$&/")+"/"),Ir(l,t,n,"",function(d){return d})):l!=null&&(aa(l)&&(l=Vu(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Za,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Ja(e))for(var s=0;s<e.length;s++){o=e[s];var c=r+Il(o,s);i+=Ir(o,t,n,c,l)}else if(c=Hu(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=r+Il(o,s++),i+=Ir(o,t,n,c,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function hr(e,t,n){if(e==null)return e;var r=[],l=0;return Ir(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Qu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Or={transition:null},Xu={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Or,ReactCurrentOwner:oa};function _s(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!aa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=yn;F.Fragment=Lu;F.Profiler=Ou;F.PureComponent=ra;F.StrictMode=Iu;F.Suspense=$u;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xu;F.act=_s;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ws({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=oa.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ss.call(t,c)&&!Ns.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var d=0;d<c;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ur,type:e.type,key:l,ref:o,props:r,_owner:i}};F.createContext=function(e){return e={$$typeof:Fu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ru,_context:e},e.Consumer=e};F.createElement=js;F.createFactory=function(e){var t=js.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Au,render:e}};F.isValidElement=aa;F.lazy=function(e){return{$$typeof:Bu,_payload:{_status:-1,_result:e},_init:Qu}};F.memo=function(e,t){return{$$typeof:Uu,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};F.unstable_act=_s;F.useCallback=function(e,t){return ge.current.useCallback(e,t)};F.useContext=function(e){return ge.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};F.useEffect=function(e,t){return ge.current.useEffect(e,t)};F.useId=function(){return ge.current.useId()};F.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ge.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};F.useRef=function(e){return ge.current.useRef(e)};F.useState=function(e){return ge.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ge.current.useTransition()};F.version="18.3.1";xs.exports=F;var j=xs.exports;const Ku=Du(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=j,qu=Symbol.for("react.element"),Gu=Symbol.for("react.fragment"),Ju=Object.prototype.hasOwnProperty,Zu=Yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ed={key:!0,ref:!0,__self:!0,__source:!0};function Cs(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Ju.call(t,r)&&!ed.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:qu,type:e,key:o,ref:i,props:l,_owner:Zu.current}}yl.Fragment=Gu;yl.jsx=Cs;yl.jsxs=Cs;vs.exports=yl;var a=vs.exports,co={},Es={exports:{}},Ce={},zs={exports:{}},Ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,N){var D=C.length;C.push(N);e:for(;0<D;){var $=D-1>>>1,X=C[$];if(0<l(X,N))C[$]=N,C[D]=X,D=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var N=C[0],D=C.pop();if(D!==N){C[0]=D;e:for(var $=0,X=C.length,ve=X>>>1;$<ve;){var pe=2*($+1)-1,ot=C[pe],_t=pe+1,gr=C[_t];if(0>l(ot,D))_t<X&&0>l(gr,ot)?(C[$]=gr,C[_t]=D,$=_t):(C[$]=ot,C[pe]=D,$=pe);else if(_t<X&&0>l(gr,D))C[$]=gr,C[_t]=D,$=_t;else break e}}return N}function l(C,N){var D=C.sortIndex-N.sortIndex;return D!==0?D:C.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var c=[],d=[],m=1,g=null,v=3,b=!1,h=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var N=n(d);N!==null;){if(N.callback===null)r(d);else if(N.startTime<=C)r(d),N.sortIndex=N.expirationTime,t(c,N);else break;N=n(d)}}function x(C){if(y=!1,p(C),!h)if(n(c)!==null)h=!0,R(k);else{var N=n(d);N!==null&&U(x,N.startTime-C)}}function k(C,N){h=!1,y&&(y=!1,f(w),w=-1),b=!0;var D=v;try{for(p(N),g=n(c);g!==null&&(!(g.expirationTime>N)||C&&!I());){var $=g.callback;if(typeof $=="function"){g.callback=null,v=g.priorityLevel;var X=$(g.expirationTime<=N);N=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(c)&&r(c),p(N)}else r(c);g=n(c)}if(g!==null)var ve=!0;else{var pe=n(d);pe!==null&&U(x,pe.startTime-N),ve=!1}return ve}finally{g=null,v=D,b=!1}}var E=!1,S=null,w=-1,T=5,z=-1;function I(){return!(e.unstable_now()-z<T)}function ne(){if(S!==null){var C=e.unstable_now();z=C;var N=!0;try{N=S(!0,C)}finally{N?Ke():(E=!1,S=null)}}else E=!1}var Ke;if(typeof u=="function")Ke=function(){u(ne)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,O=L.port2;L.port1.onmessage=ne,Ke=function(){O.postMessage(null)}}else Ke=function(){M(ne,0)};function R(C){S=C,E||(E=!0,Ke())}function U(C,N){w=M(function(){C(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){h||b||(h=!0,R(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(v){case 1:case 2:case 3:var N=3;break;default:N=v}var D=v;v=N;try{return C()}finally{v=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,N){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=v;v=C;try{return N()}finally{v=D}},e.unstable_scheduleCallback=function(C,N,D){var $=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,C={id:m++,callback:N,priorityLevel:C,startTime:D,expirationTime:X,sortIndex:-1},D>$?(C.sortIndex=D,t(d,C),n(c)===null&&C===n(d)&&(y?(f(w),w=-1):y=!0,U(x,D-$))):(C.sortIndex=X,t(c,C),h||b||(h=!0,R(k))),C},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(C){var N=v;return function(){var D=v;v=N;try{return C.apply(this,arguments)}finally{v=D}}}})(Ts);zs.exports=Ts;var td=zs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd=j,_e=td;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ps=new Set,Hn={};function Ut(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Ps.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=Object.prototype.hasOwnProperty,rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ei={},ti={};function ld(e){return uo.call(ti,e)?!0:uo.call(ei,e)?!1:rd.test(e)?ti[e]=!0:(ei[e]=!0,!1)}function od(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ad(e,t,n,r){if(t===null||typeof t>"u"||od(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ia=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ia,sa);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ia,sa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ia,sa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function ca(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ad(t,n,l,r)&&(n=null),r||l===null?ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),po=Symbol.for("react.profiler"),Ds=Symbol.for("react.provider"),Ms=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),mo=Symbol.for("react.suspense_list"),pa=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Ls=Symbol.for("react.offscreen"),ni=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=ni&&e[ni]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ol;function Tn(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Rl=!1;function Fl(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var c=`
`+l[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function id(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Xt:return"Portal";case po:return"Profiler";case ua:return"StrictMode";case fo:return"Suspense";case mo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ms:return(e.displayName||"Context")+".Consumer";case Ds:return(e._context.displayName||"Context")+".Provider";case da:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pa:return t=e.displayName||null,t!==null?t:go(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return go(e(t))}catch{}}return null}function sd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Is(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cd(e){var t=Is(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=cd(e))}function Os(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Is(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ri(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rs(e,t){t=t.checked,t!=null&&ca(e,"checked",t,!1)}function vo(e,t){Rs(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xo(e,t.type,n):t.hasOwnProperty("defaultValue")&&xo(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function li(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xo(e,t,n){(t!=="number"||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function yo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Pn(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Fs(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ai(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function As(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?As(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,$s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ud=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){ud.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Us(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Us(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var dd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ko(e,t){if(t){if(dd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function bo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var No=null,an=null,sn=null;function ii(e){if(e=fr(e)){if(typeof No!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Nl(t),No(e.stateNode,e.type,t))}}function Hs(e){an?sn?sn.push(e):sn=[e]:an=e}function Vs(){if(an){var e=an,t=sn;if(sn=an=null,ii(e),t)for(e=0;e<t.length;e++)ii(t[e])}}function Ws(e,t){return e(t)}function Qs(){}var Al=!1;function Xs(e,t,n){if(Al)return e(t,n);Al=!0;try{return Ws(e,t,n)}finally{Al=!1,(an!==null||sn!==null)&&(Qs(),Vs())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var jo=!1;if(et)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){jo=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{jo=!1}function pd(e,t,n,r,l,o,i,s,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var In=!1,Kr=null,Yr=!1,_o=null,fd={onError:function(e){In=!0,Kr=e}};function md(e,t,n,r,l,o,i,s,c){In=!1,Kr=null,pd.apply(fd,arguments)}function gd(e,t,n,r,l,o,i,s,c){if(md.apply(this,arguments),In){if(In){var d=Kr;In=!1,Kr=null}else throw Error(_(198));Yr||(Yr=!0,_o=d)}}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ks(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function si(e){if(Bt(e)!==e)throw Error(_(188))}function hd(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return si(l),e;if(o===r)return si(l),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ys(e){return e=hd(e),e!==null?qs(e):null}function qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qs(e);if(t!==null)return t;e=e.sibling}return null}var Gs=_e.unstable_scheduleCallback,ci=_e.unstable_cancelCallback,vd=_e.unstable_shouldYield,xd=_e.unstable_requestPaint,J=_e.unstable_now,yd=_e.unstable_getCurrentPriorityLevel,ma=_e.unstable_ImmediatePriority,Js=_e.unstable_UserBlockingPriority,qr=_e.unstable_NormalPriority,wd=_e.unstable_LowPriority,Zs=_e.unstable_IdlePriority,wl=null,Qe=null;function kd(e){if(Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:Nd,bd=Math.log,Sd=Math.LN2;function Nd(e){return e>>>=0,e===0?32:31-(bd(e)/Sd|0)|0}var wr=64,kr=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Dn(s):(o&=i,o!==0&&(r=Dn(o)))}else i=n&~l,i!==0?r=Dn(i):o!==0&&(r=Dn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$e(t),l=1<<n,r|=e[n],t&=~l;return r}function jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _d(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-$e(o),s=1<<i,c=l[i];c===-1?(!(s&n)||s&r)&&(l[i]=jd(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function $l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=n}function Cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-$e(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ga(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var B=0;function tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nc,ha,rc,lc,oc,Eo=!1,br=[],ft=null,mt=null,gt=null,Qn=new Map,Xn=new Map,ct=[],Ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ui(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Nn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&ha(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function zd(e,t,n,r,l){switch(t){case"focusin":return ft=Nn(ft,e,t,n,r,l),!0;case"dragenter":return mt=Nn(mt,e,t,n,r,l),!0;case"mouseover":return gt=Nn(gt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Qn.set(o,Nn(Qn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Xn.set(o,Nn(Xn.get(o)||null,e,t,n,r,l)),!0}return!1}function ac(e){var t=zt(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ks(n),t!==null){e.blockedOn=t,oc(e.priority,function(){rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);So=r,n.target.dispatchEvent(r),So=null}else return t=fr(n),t!==null&&ha(t),e.blockedOn=n,!1;t.shift()}return!0}function di(e,t,n){Rr(e)&&n.delete(t)}function Td(){Eo=!1,ft!==null&&Rr(ft)&&(ft=null),mt!==null&&Rr(mt)&&(mt=null),gt!==null&&Rr(gt)&&(gt=null),Qn.forEach(di),Xn.forEach(di)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Td)))}function Kn(e){function t(l){return jn(l,e)}if(0<br.length){jn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&jn(ft,e),mt!==null&&jn(mt,e),gt!==null&&jn(gt,e),Qn.forEach(t),Xn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&ct.shift()}var cn=lt.ReactCurrentBatchConfig,Jr=!0;function Pd(e,t,n,r){var l=B,o=cn.transition;cn.transition=null;try{B=1,va(e,t,n,r)}finally{B=l,cn.transition=o}}function Dd(e,t,n,r){var l=B,o=cn.transition;cn.transition=null;try{B=4,va(e,t,n,r)}finally{B=l,cn.transition=o}}function va(e,t,n,r){if(Jr){var l=zo(e,t,n,r);if(l===null)ql(e,t,r,Zr,n),ui(e,r);else if(zd(l,e,t,n,r))r.stopPropagation();else if(ui(e,r),t&4&&-1<Ed.indexOf(e)){for(;l!==null;){var o=fr(l);if(o!==null&&nc(o),o=zo(e,t,n,r),o===null&&ql(e,t,r,Zr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else ql(e,t,r,null,n)}}var Zr=null;function zo(e,t,n,r){if(Zr=null,e=fa(r),e=zt(e),e!==null)if(t=Bt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ks(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yd()){case ma:return 1;case Js:return 4;case qr:case wd:return 16;case Zs:return 536870912;default:return 16}default:return 16}}var dt=null,xa=null,Fr=null;function sc(){if(Fr)return Fr;var e,t=xa,n=t.length,r,l="value"in dt?dt.value:dt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Fr=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function pi(){return!1}function Ee(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sr:pi,this.isPropagationStopped=pi,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Ee(wn),pr=q({},wn,{view:0,detail:0}),Md=Ee(pr),Ul,Bl,_n,kl=q({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Ul=e.screenX-_n.screenX,Bl=e.screenY-_n.screenY):Bl=Ul=0,_n=e),Ul)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),fi=Ee(kl),Ld=q({},kl,{dataTransfer:0}),Id=Ee(Ld),Od=q({},pr,{relatedTarget:0}),Hl=Ee(Od),Rd=q({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fd=Ee(Rd),Ad=q({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Ee(Ad),Ud=q({},wn,{data:0}),mi=Ee(Ud),Bd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vd[e])?!!t[e]:!1}function wa(){return Wd}var Qd=q({},pr,{key:function(e){if(e.key){var t=Bd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xd=Ee(Qd),Kd=q({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gi=Ee(Kd),Yd=q({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),qd=Ee(Yd),Gd=q({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Ee(Gd),Zd=q({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=Ee(Zd),tp=[9,13,27,32],ka=et&&"CompositionEvent"in window,On=null;et&&"documentMode"in document&&(On=document.documentMode);var np=et&&"TextEvent"in window&&!On,cc=et&&(!ka||On&&8<On&&11>=On),hi=String.fromCharCode(32),vi=!1;function uc(e,t){switch(e){case"keyup":return tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function rp(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(vi=!0,hi);case"textInput":return e=t.data,e===hi&&vi?null:e;default:return null}}function lp(e,t){if(Yt)return e==="compositionend"||!ka&&uc(e,t)?(e=sc(),Fr=xa=dt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cc&&t.locale!=="ko"?null:t.data;default:return null}}var op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!op[e.type]:t==="textarea"}function pc(e,t,n,r){Hs(r),t=el(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Yn=null;function ap(e){Sc(e,0)}function bl(e){var t=Jt(e);if(Os(t))return e}function ip(e,t){if(e==="change")return t}var fc=!1;if(et){var Vl;if(et){var Wl="oninput"in document;if(!Wl){var yi=document.createElement("div");yi.setAttribute("oninput","return;"),Wl=typeof yi.oninput=="function"}Vl=Wl}else Vl=!1;fc=Vl&&(!document.documentMode||9<document.documentMode)}function wi(){Rn&&(Rn.detachEvent("onpropertychange",mc),Yn=Rn=null)}function mc(e){if(e.propertyName==="value"&&bl(Yn)){var t=[];pc(t,Yn,e,fa(e)),Xs(ap,t)}}function sp(e,t,n){e==="focusin"?(wi(),Rn=t,Yn=n,Rn.attachEvent("onpropertychange",mc)):e==="focusout"&&wi()}function cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(Yn)}function up(e,t){if(e==="click")return bl(t)}function dp(e,t){if(e==="input"||e==="change")return bl(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:pp;function qn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!uo.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function ki(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bi(e,t){var n=ki(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ki(n)}}function gc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=Xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fp(e){var t=hc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gc(n.ownerDocument.documentElement,n)){if(r!==null&&ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=bi(n,o);var i=bi(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=et&&"documentMode"in document&&11>=document.documentMode,qt=null,To=null,Fn=null,Po=!1;function Si(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||qt==null||qt!==Xr(r)||(r=qt,"selectionStart"in r&&ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&qn(Fn,r)||(Fn=r,r=el(To,"onSelect"),0<r.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Ql={},vc={};et&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Sl(e){if(Ql[e])return Ql[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vc)return Ql[e]=t[n];return e}var xc=Sl("animationend"),yc=Sl("animationiteration"),wc=Sl("animationstart"),kc=Sl("transitionend"),bc=new Map,Ni="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){bc.set(e,t),Ut(t,[e])}for(var Xl=0;Xl<Ni.length;Xl++){var Kl=Ni[Xl],gp=Kl.toLowerCase(),hp=Kl[0].toUpperCase()+Kl.slice(1);St(gp,"on"+hp)}St(xc,"onAnimationEnd");St(yc,"onAnimationIteration");St(wc,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(kc,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function ji(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gd(r,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],c=s.instance,d=s.currentTarget;if(s=s.listener,c!==o&&l.isPropagationStopped())break e;ji(l,s,d),o=c}else for(i=0;i<r.length;i++){if(s=r[i],c=s.instance,d=s.currentTarget,s=s.listener,c!==o&&l.isPropagationStopped())break e;ji(l,s,d),o=c}}}if(Yr)throw e=_o,Yr=!1,_o=null,e}function V(e,t){var n=t[Oo];n===void 0&&(n=t[Oo]=new Set);var r=e+"__bubble";n.has(r)||(Nc(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Nc(n,e,r,t)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Gn(e){if(!e[jr]){e[jr]=!0,Ps.forEach(function(n){n!=="selectionchange"&&(vp.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jr]||(t[jr]=!0,Yl("selectionchange",!1,t))}}function Nc(e,t,n,r){switch(ic(t)){case 1:var l=Pd;break;case 4:l=Dd;break;default:l=va}n=l.bind(null,t,n,e),l=void 0,!jo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ql(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;i=i.return}for(;s!==null;){if(i=zt(s),i===null)return;if(c=i.tag,c===5||c===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Xs(function(){var d=o,m=fa(n),g=[];e:{var v=bc.get(e);if(v!==void 0){var b=ya,h=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":b=Xd;break;case"focusin":h="focus",b=Hl;break;case"focusout":h="blur",b=Hl;break;case"beforeblur":case"afterblur":b=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=fi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=qd;break;case xc:case yc:case wc:b=Fd;break;case kc:b=Jd;break;case"scroll":b=Md;break;case"wheel":b=ep;break;case"copy":case"cut":case"paste":b=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=gi}var y=(t&4)!==0,M=!y&&e==="scroll",f=y?v!==null?v+"Capture":null:v;y=[];for(var u=d,p;u!==null;){p=u;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Wn(u,f),x!=null&&y.push(Jn(u,x,p)))),M)break;u=u.return}0<y.length&&(v=new b(v,h,null,n,m),g.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&n!==So&&(h=n.relatedTarget||n.fromElement)&&(zt(h)||h[tt]))break e;if((b||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,b?(h=n.relatedTarget||n.toElement,b=d,h=h?zt(h):null,h!==null&&(M=Bt(h),h!==M||h.tag!==5&&h.tag!==6)&&(h=null)):(b=null,h=d),b!==h)){if(y=fi,x="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=gi,x="onPointerLeave",f="onPointerEnter",u="pointer"),M=b==null?v:Jt(b),p=h==null?v:Jt(h),v=new y(x,u+"leave",b,n,m),v.target=M,v.relatedTarget=p,x=null,zt(m)===d&&(y=new y(f,u+"enter",h,n,m),y.target=p,y.relatedTarget=M,x=y),M=x,b&&h)t:{for(y=b,f=h,u=0,p=y;p;p=Ht(p))u++;for(p=0,x=f;x;x=Ht(x))p++;for(;0<u-p;)y=Ht(y),u--;for(;0<p-u;)f=Ht(f),p--;for(;u--;){if(y===f||f!==null&&y===f.alternate)break t;y=Ht(y),f=Ht(f)}y=null}else y=null;b!==null&&_i(g,v,b,y,!1),h!==null&&M!==null&&_i(g,M,h,y,!0)}}e:{if(v=d?Jt(d):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var k=ip;else if(xi(v))if(fc)k=dp;else{k=cp;var E=sp}else(b=v.nodeName)&&b.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=up);if(k&&(k=k(e,d))){pc(g,k,n,m);break e}E&&E(e,v,d),e==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&xo(v,"number",v.value)}switch(E=d?Jt(d):window,e){case"focusin":(xi(E)||E.contentEditable==="true")&&(qt=E,To=d,Fn=null);break;case"focusout":Fn=To=qt=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Si(g,n,m);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":Si(g,n,m)}var S;if(ka)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Yt?uc(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(cc&&n.locale!=="ko"&&(Yt||w!=="onCompositionStart"?w==="onCompositionEnd"&&Yt&&(S=sc()):(dt=m,xa="value"in dt?dt.value:dt.textContent,Yt=!0)),E=el(d,w),0<E.length&&(w=new mi(w,e,null,n,m),g.push({event:w,listeners:E}),S?w.data=S:(S=dc(n),S!==null&&(w.data=S)))),(S=np?rp(e,n):lp(e,n))&&(d=el(d,"onBeforeInput"),0<d.length&&(m=new mi("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=S))}Sc(g,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function el(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Wn(e,n),o!=null&&r.unshift(Jn(e,o,l)),o=Wn(e,t),o!=null&&r.push(Jn(e,o,l))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _i(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,c=s.alternate,d=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&d!==null&&(s=d,l?(c=Wn(n,o),c!=null&&i.unshift(Jn(n,c,s))):l||(c=Wn(n,o),c!=null&&i.push(Jn(n,c,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var xp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function Ci(e){return(typeof e=="string"?e:""+e).replace(xp,`
`).replace(yp,"")}function _r(e,t,n){if(t=Ci(t),Ci(e)!==t&&n)throw Error(_(425))}function tl(){}var Do=null,Mo=null;function Lo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Io=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,Ei=typeof Promise=="function"?Promise:void 0,kp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ei<"u"?function(e){return Ei.resolve(null).then(e).catch(bp)}:Io;function bp(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Kn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),We="__reactFiber$"+kn,Zn="__reactProps$"+kn,tt="__reactContainer$"+kn,Oo="__reactEvents$"+kn,Sp="__reactListeners$"+kn,Np="__reactHandles$"+kn;function zt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zi(e);e!==null;){if(n=e[We])return n;e=zi(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[We]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Nl(e){return e[Zn]||null}var Ro=[],Zt=-1;function Nt(e){return{current:e}}function W(e){0>Zt||(e.current=Ro[Zt],Ro[Zt]=null,Zt--)}function H(e,t){Zt++,Ro[Zt]=e.current,e.current=t}var bt={},de=Nt(bt),we=Nt(!1),Ot=bt;function fn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ke(e){return e=e.childContextTypes,e!=null}function nl(){W(we),W(de)}function Ti(e,t,n){if(de.current!==bt)throw Error(_(168));H(de,t),H(we,n)}function jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,sd(e)||"Unknown",l));return q({},n,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Ot=de.current,H(de,e),H(we,we.current),!0}function Pi(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=jc(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,W(we),W(de),H(de,e)):W(we),H(we,n)}var qe=null,jl=!1,Jl=!1;function _c(e){qe===null?qe=[e]:qe.push(e)}function jp(e){jl=!0,_c(e)}function jt(){if(!Jl&&qe!==null){Jl=!0;var e=0,t=B;try{var n=qe;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,jl=!1}catch(l){throw qe!==null&&(qe=qe.slice(e+1)),Gs(ma,jt),l}finally{B=t,Jl=!1}}return null}var en=[],tn=0,ll=null,ol=0,ze=[],Te=0,Rt=null,Ge=1,Je="";function Ct(e,t){en[tn++]=ol,en[tn++]=ll,ll=e,ol=t}function Cc(e,t,n){ze[Te++]=Ge,ze[Te++]=Je,ze[Te++]=Rt,Rt=e;var r=Ge;e=Je;var l=32-$e(r)-1;r&=~(1<<l),n+=1;var o=32-$e(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ge=1<<32-$e(t)+l|n<<l|r,Je=o+e}else Ge=1<<o|n<<l|r,Je=e}function Sa(e){e.return!==null&&(Ct(e,1),Cc(e,1,0))}function Na(e){for(;e===ll;)ll=en[--tn],en[tn]=null,ol=en[--tn],en[tn]=null;for(;e===Rt;)Rt=ze[--Te],ze[Te]=null,Je=ze[--Te],ze[Te]=null,Ge=ze[--Te],ze[Te]=null}var je=null,Ne=null,Q=!1,Ae=null;function Ec(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Di(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ne=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rt!==null?{id:Ge,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ne=null,!0):!1;default:return!1}}function Fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ao(e){if(Q){var t=Ne;if(t){var n=t;if(!Di(e,t)){if(Fo(e))throw Error(_(418));t=ht(n.nextSibling);var r=je;t&&Di(e,t)?Ec(r,n):(e.flags=e.flags&-4097|2,Q=!1,je=e)}}else{if(Fo(e))throw Error(_(418));e.flags=e.flags&-4097|2,Q=!1,je=e}}}function Mi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Cr(e){if(e!==je)return!1;if(!Q)return Mi(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lo(e.type,e.memoizedProps)),t&&(t=Ne)){if(Fo(e))throw zc(),Error(_(418));for(;t;)Ec(e,t),t=ht(t.nextSibling)}if(Mi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=je?ht(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=Ne;e;)e=ht(e.nextSibling)}function mn(){Ne=je=null,Q=!1}function ja(e){Ae===null?Ae=[e]:Ae.push(e)}var _p=lt.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Li(e){var t=e._init;return t(e._payload)}function Tc(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=wt(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,p,x){return u===null||u.tag!==6?(u=oo(p,f.mode,x),u.return=f,u):(u=l(u,p),u.return=f,u)}function c(f,u,p,x){var k=p.type;return k===Kt?m(f,u,p.props.children,x,p.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===it&&Li(k)===u.type)?(x=l(u,p.props),x.ref=Cn(f,u,p),x.return=f,x):(x=Qr(p.type,p.key,p.props,null,f.mode,x),x.ref=Cn(f,u,p),x.return=f,x)}function d(f,u,p,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ao(p,f.mode,x),u.return=f,u):(u=l(u,p.children||[]),u.return=f,u)}function m(f,u,p,x,k){return u===null||u.tag!==7?(u=Mt(p,f.mode,x,k),u.return=f,u):(u=l(u,p),u.return=f,u)}function g(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=oo(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case vr:return p=Qr(u.type,u.key,u.props,null,f.mode,p),p.ref=Cn(f,null,u),p.return=f,p;case Xt:return u=ao(u,f.mode,p),u.return=f,u;case it:var x=u._init;return g(f,x(u._payload),p)}if(Pn(u)||bn(u))return u=Mt(u,f.mode,p,null),u.return=f,u;Er(f,u)}return null}function v(f,u,p,x){var k=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,u,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:return p.key===k?c(f,u,p,x):null;case Xt:return p.key===k?d(f,u,p,x):null;case it:return k=p._init,v(f,u,k(p._payload),x)}if(Pn(p)||bn(p))return k!==null?null:m(f,u,p,x,null);Er(f,p)}return null}function b(f,u,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(u,f,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vr:return f=f.get(x.key===null?p:x.key)||null,c(u,f,x,k);case Xt:return f=f.get(x.key===null?p:x.key)||null,d(u,f,x,k);case it:var E=x._init;return b(f,u,p,E(x._payload),k)}if(Pn(x)||bn(x))return f=f.get(p)||null,m(u,f,x,k,null);Er(u,x)}return null}function h(f,u,p,x){for(var k=null,E=null,S=u,w=u=0,T=null;S!==null&&w<p.length;w++){S.index>w?(T=S,S=null):T=S.sibling;var z=v(f,S,p[w],x);if(z===null){S===null&&(S=T);break}e&&S&&z.alternate===null&&t(f,S),u=o(z,u,w),E===null?k=z:E.sibling=z,E=z,S=T}if(w===p.length)return n(f,S),Q&&Ct(f,w),k;if(S===null){for(;w<p.length;w++)S=g(f,p[w],x),S!==null&&(u=o(S,u,w),E===null?k=S:E.sibling=S,E=S);return Q&&Ct(f,w),k}for(S=r(f,S);w<p.length;w++)T=b(S,f,w,p[w],x),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?w:T.key),u=o(T,u,w),E===null?k=T:E.sibling=T,E=T);return e&&S.forEach(function(I){return t(f,I)}),Q&&Ct(f,w),k}function y(f,u,p,x){var k=bn(p);if(typeof k!="function")throw Error(_(150));if(p=k.call(p),p==null)throw Error(_(151));for(var E=k=null,S=u,w=u=0,T=null,z=p.next();S!==null&&!z.done;w++,z=p.next()){S.index>w?(T=S,S=null):T=S.sibling;var I=v(f,S,z.value,x);if(I===null){S===null&&(S=T);break}e&&S&&I.alternate===null&&t(f,S),u=o(I,u,w),E===null?k=I:E.sibling=I,E=I,S=T}if(z.done)return n(f,S),Q&&Ct(f,w),k;if(S===null){for(;!z.done;w++,z=p.next())z=g(f,z.value,x),z!==null&&(u=o(z,u,w),E===null?k=z:E.sibling=z,E=z);return Q&&Ct(f,w),k}for(S=r(f,S);!z.done;w++,z=p.next())z=b(S,f,w,z.value,x),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?w:z.key),u=o(z,u,w),E===null?k=z:E.sibling=z,E=z);return e&&S.forEach(function(ne){return t(f,ne)}),Q&&Ct(f,w),k}function M(f,u,p,x){if(typeof p=="object"&&p!==null&&p.type===Kt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:e:{for(var k=p.key,E=u;E!==null;){if(E.key===k){if(k=p.type,k===Kt){if(E.tag===7){n(f,E.sibling),u=l(E,p.props.children),u.return=f,f=u;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===it&&Li(k)===E.type){n(f,E.sibling),u=l(E,p.props),u.ref=Cn(f,E,p),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Kt?(u=Mt(p.props.children,f.mode,x,p.key),u.return=f,f=u):(x=Qr(p.type,p.key,p.props,null,f.mode,x),x.ref=Cn(f,u,p),x.return=f,f=x)}return i(f);case Xt:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=l(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ao(p,f.mode,x),u.return=f,f=u}return i(f);case it:return E=p._init,M(f,u,E(p._payload),x)}if(Pn(p))return h(f,u,p,x);if(bn(p))return y(f,u,p,x);Er(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,p),u.return=f,f=u):(n(f,u),u=oo(p,f.mode,x),u.return=f,f=u),i(f)):n(f,u)}return M}var gn=Tc(!0),Pc=Tc(!1),al=Nt(null),il=null,nn=null,_a=null;function Ca(){_a=nn=il=null}function Ea(e){var t=al.current;W(al),e._currentValue=t}function $o(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){il=e,_a=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(il===null)throw Error(_(308));nn=e,il.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Tt=null;function za(e){Tt===null?Tt=[e]:Tt.push(e)}function Dc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,za(t)):(n.next=l.next,l.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function Ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,nt(e,n)}return l=r.interleaved,l===null?(t.next=t,za(r)):(t.next=l.next,l.next=t),r.interleaved=t,nt(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}function Ii(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var l=e.updateQueue;st=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var c=s,d=c.next;c.next=null,i===null?o=d:i.next=d,i=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==i&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=c))}if(o!==null){var g=l.baseState;i=0,m=d=c=null,s=o;do{var v=s.lane,b=s.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:b,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,y=s;switch(v=t,b=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){g=h.call(b,g,v);break e}g=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,v=typeof h=="function"?h.call(b,g,v):h,v==null)break e;g=q({},g,v);break e;case 2:st=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[s]:v.push(s))}else b={eventTime:b,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=b,c=g):m=m.next=b,i|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(1);if(m===null&&(c=g),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);At|=i,e.lanes=i,e.memoizedState=g}}function Oi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var mr={},Xe=Nt(mr),er=Nt(mr),tr=Nt(mr);function Pt(e){if(e===mr)throw Error(_(174));return e}function Pa(e,t){switch(H(tr,t),H(er,e),H(Xe,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wo(t,e)}W(Xe),H(Xe,t)}function hn(){W(Xe),W(er),W(tr)}function Lc(e){Pt(tr.current);var t=Pt(Xe.current),n=wo(t,e.type);t!==n&&(H(er,e),H(Xe,n))}function Da(e){er.current===e&&(W(Xe),W(er))}var K=Nt(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zl=[];function Ma(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var Ur=lt.ReactCurrentDispatcher,eo=lt.ReactCurrentBatchConfig,Ft=0,Y=null,ee=null,re=null,ul=!1,An=!1,nr=0,Cp=0;function se(){throw Error(_(321))}function La(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function Ia(e,t,n,r,l,o){if(Ft=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?Pp:Dp,e=n(r,l),An){o=0;do{if(An=!1,nr=0,25<=o)throw Error(_(301));o+=1,re=ee=null,t.updateQueue=null,Ur.current=Mp,e=n(r,l)}while(An)}if(Ur.current=dl,t=ee!==null&&ee.next!==null,Ft=0,re=ee=Y=null,ul=!1,t)throw Error(_(300));return e}function Oa(){var e=nr!==0;return nr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Ie(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(_(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function rr(e,t){return typeof t=="function"?t(e):t}function to(e){var t=Ie(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,c=null,d=o;do{var m=d.lane;if((Ft&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(s=c=g,i=r):c=c.next=g,Y.lanes|=m,At|=m}d=d.next}while(d!==null&&d!==o);c===null?i=r:c.next=s,Be(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Y.lanes|=o,At|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function no(e){var t=Ie(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Be(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ic(){}function Oc(e,t){var n=Y,r=Ie(),l=t(),o=!Be(r.memoizedState,l);if(o&&(r.memoizedState=l,ye=!0),r=r.queue,Ra(Ac.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,lr(9,Fc.bind(null,n,r,l,t),void 0,null),le===null)throw Error(_(349));Ft&30||Rc(n,t,l)}return l}function Rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fc(e,t,n,r){t.value=n,t.getSnapshot=r,$c(t)&&Uc(e)}function Ac(e,t,n){return n(function(){$c(t)&&Uc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Uc(e){var t=nt(e,1);t!==null&&Ue(t,e,1,-1)}function Ri(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Tp.bind(null,Y,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bc(){return Ie().memoizedState}function Br(e,t,n,r){var l=Ve();Y.flags|=e,l.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var l=Ie();r=r===void 0?null:r;var o=void 0;if(ee!==null){var i=ee.memoizedState;if(o=i.destroy,r!==null&&La(r,i.deps)){l.memoizedState=lr(t,n,o,r);return}}Y.flags|=e,l.memoizedState=lr(1|t,n,o,r)}function Fi(e,t){return Br(8390656,8,e,t)}function Ra(e,t){return _l(2048,8,e,t)}function Hc(e,t){return _l(4,2,e,t)}function Vc(e,t){return _l(4,4,e,t)}function Wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,Wc.bind(null,t,e),n)}function Fa(){}function Xc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yc(e,t,n){return Ft&21?(Be(n,t)||(n=ec(),Y.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Ep(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=eo.transition;eo.transition={};try{e(!1),t()}finally{B=n,eo.transition=r}}function qc(){return Ie().memoizedState}function zp(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))Jc(t,n);else if(n=Dc(e,t,n,r),n!==null){var l=me();Ue(n,e,r,l),Zc(n,t,r)}}function Tp(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Jc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,Be(s,i)){var c=t.interleaved;c===null?(l.next=l,za(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=Dc(e,t,l,r),n!==null&&(l=me(),Ue(n,e,r,l),Zc(n,t,r))}}function Gc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Jc(e,t){An=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ga(e,n)}}var dl={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Pp={readContext:Le,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Fi,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Wc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Ri,useDebugValue:Fa,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Ri(!1),t=e[0];return e=Ep.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,l=Ve();if(Q){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),le===null)throw Error(_(349));Ft&30||Rc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Fi(Ac.bind(null,r,o,e),[e]),r.flags|=2048,lr(9,Fc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=le.identifierPrefix;if(Q){var n=Je,r=Ge;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dp={readContext:Le,useCallback:Xc,useContext:Le,useEffect:Ra,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Kc,useReducer:to,useRef:Bc,useState:function(){return to(rr)},useDebugValue:Fa,useDeferredValue:function(e){var t=Ie();return Yc(t,ee.memoizedState,e)},useTransition:function(){var e=to(rr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Oc,useId:qc,unstable_isNewReconciler:!1},Mp={readContext:Le,useCallback:Xc,useContext:Le,useEffect:Ra,useImperativeHandle:Qc,useInsertionEffect:Hc,useLayoutEffect:Vc,useMemo:Kc,useReducer:no,useRef:Bc,useState:function(){return no(rr)},useDebugValue:Fa,useDeferredValue:function(e){var t=Ie();return ee===null?t.memoizedState=e:Yc(t,ee.memoizedState,e)},useTransition:function(){var e=no(rr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Oc,useId:qc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Uo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=yt(e),o=Ze(r,l);o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,l),t!==null&&(Ue(t,e,l,r),$r(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=yt(e),o=Ze(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,l),t!==null&&(Ue(t,e,l,r),$r(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=yt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=vt(e,l,r),t!==null&&(Ue(t,e,r,n),$r(t,e,r))}};function Ai(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(l,o):!0}function eu(e,t,n){var r=!1,l=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(l=ke(t)?Ot:de.current,r=t.contextTypes,o=(r=r!=null)?fn(e,l):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function $i(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function Bo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ta(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Le(o):(o=ke(t)?Ot:de.current,l.context=fn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Uo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Cl.enqueueReplaceState(l,l.state,null),sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=id(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ro(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lp=typeof WeakMap=="function"?WeakMap:Map;function tu(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,Zo=r),Ho(e,t)},n}function nu(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ho(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ho(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ui(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Kp.bind(null,e,t,n),t.then(e,e))}function Bi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hi(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Ip=lt.ReactCurrentOwner,ye=!1;function fe(e,t,n,r){t.child=e===null?Pc(t,null,n,r):gn(t,e.child,n,r)}function Vi(e,t,n,r,l){n=n.render;var o=t.ref;return un(t,l),r=Ia(e,t,n,r,o,l),n=Oa(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(Q&&n&&Sa(t),t.flags|=1,fe(e,t,r,l),t.child)}function Wi(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Qa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ru(e,t,o,r,l)):(e=Qr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(i,r)&&e.ref===t.ref)return rt(e,t,l)}return t.flags|=1,e=wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(qn(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,rt(e,t,l)}return Vo(e,t,n,r,l)}function lu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(ln,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(ln,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(ln,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(ln,Se),Se|=r;return fe(e,t,l,n),t.child}function ou(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vo(e,t,n,r,l){var o=ke(n)?Ot:de.current;return o=fn(t,o),un(t,l),n=Ia(e,t,n,r,o,l),r=Oa(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(Q&&r&&Sa(t),t.flags|=1,fe(e,t,n,l),t.child)}function Qi(e,t,n,r,l){if(ke(n)){var o=!0;rl(t)}else o=!1;if(un(t,l),t.stateNode===null)Hr(e,t),eu(t,n,r),Bo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var c=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=ke(n)?Ot:de.current,d=fn(t,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||c!==d)&&$i(t,i,r,d),st=!1;var v=t.memoizedState;i.state=v,sl(t,r,i,l),c=t.memoizedState,s!==r||v!==c||we.current||st?(typeof m=="function"&&(Uo(t,n,m,r),c=t.memoizedState),(s=st||Ai(t,n,s,r,v,c,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Re(t.type,s),i.props=d,g=t.pendingProps,v=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=Le(c):(c=ke(n)?Ot:de.current,c=fn(t,c));var b=n.getDerivedStateFromProps;(m=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||v!==c)&&$i(t,i,r,c),st=!1,v=t.memoizedState,i.state=v,sl(t,r,i,l);var h=t.memoizedState;s!==g||v!==h||we.current||st?(typeof b=="function"&&(Uo(t,n,b,r),h=t.memoizedState),(d=st||Ai(t,n,d,r,v,h,c)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,h,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,h,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=c,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Wo(e,t,n,r,o,l)}function Wo(e,t,n,r,l,o){ou(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Pi(t,n,!1),rt(e,t,o);r=t.stateNode,Ip.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=gn(t,e.child,null,o),t.child=gn(t,null,s,o)):fe(e,t,s,o),t.memoizedState=r.state,l&&Pi(t,n,!0),t.child}function au(e){var t=e.stateNode;t.pendingContext?Ti(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ti(e,t.context,!1),Pa(e,t.containerInfo)}function Xi(e,t,n,r,l){return mn(),ja(l),t.flags|=256,fe(e,t,n,r),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function iu(e,t,n){var r=t.pendingProps,l=K.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(K,l&1),e===null)return Ao(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Tl(i,r,0,null),e=Mt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xo(n),t.memoizedState=Qo,e):Aa(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Op(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=wt(l,c),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=wt(s,o):(o=Mt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Xo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Qo,r}return o=e.child,e=o.sibling,r=wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Aa(e,t){return t=Tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&ja(r),gn(t,e.child,null,n),e=Aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Op(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ro(Error(_(422))),zr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Tl({mode:"visible",children:r.children},l,0,null),o=Mt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&gn(t,e.child,null,i),t.child.memoizedState=Xo(i),t.memoizedState=Qo,o);if(!(t.mode&1))return zr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=ro(o,r,void 0),zr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ye||s){if(r=le,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,nt(e,l),Ue(r,e,l,-1))}return Wa(),r=ro(Error(_(421))),zr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ne=ht(l.nextSibling),je=t,Q=!0,Ae=null,e!==null&&(ze[Te++]=Ge,ze[Te++]=Je,ze[Te++]=Rt,Ge=e.id,Je=e.overflow,Rt=t),t=Aa(t,r.children),t.flags|=4096,t)}function Ki(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$o(e.return,t,n)}function lo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function su(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ki(e,n,t);else if(e.tag===19)Ki(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(K,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),lo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}lo(t,!0,n,null,o);break;case"together":lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rp(e,t,n){switch(t.tag){case 3:au(t),mn();break;case 5:Lc(t);break;case 1:ke(t.type)&&rl(t);break;case 4:Pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?iu(e,t,n):(H(K,K.current&1),e=rt(e,t,n),e!==null?e.sibling:null);H(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return su(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,lu(e,t,n)}return rt(e,t,n)}var cu,Ko,uu,du;cu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ko=function(){};uu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Pt(Xe.current);var o=null;switch(n){case"input":l=ho(e,l),r=ho(e,r),o=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":l=yo(e,l),r=yo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tl)}ko(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Hn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&c!==s&&(c!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&V("scroll",e),o||s===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};du=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fp(e,t,n){var r=t.pendingProps;switch(Na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&nl(),ce(t),null;case 3:return r=t.stateNode,hn(),W(we),W(de),Ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(na(Ae),Ae=null))),Ko(e,t),ce(t),null;case 5:Da(t);var l=Pt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)uu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ce(t),null}if(e=Pt(Xe.current),Cr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[We]=t,r[Zn]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<Mn.length;l++)V(Mn[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ri(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":oi(r,o),V("invalid",r)}ko(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&_r(r.textContent,s,e),l=["children",""+s]):Hn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&V("scroll",r)}switch(n){case"input":xr(r),li(r,o,!0);break;case"textarea":xr(r),ai(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=tl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=As(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[We]=t,e[Zn]=r,cu(e,t,!1,!1),t.stateNode=e;e:{switch(i=bo(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<Mn.length;l++)V(Mn[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":ri(e,r),l=ho(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),V("invalid",e);break;case"textarea":oi(e,r),l=yo(e,r),V("invalid",e);break;default:l=r}ko(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?Bs(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$s(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vn(e,c):typeof c=="number"&&Vn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&V("scroll",e):c!=null&&ca(e,o,c,i))}switch(n){case"input":xr(e),li(e,r,!1);break;case"textarea":xr(e),ai(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?on(e,!!r.multiple,o,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)du(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Pt(tr.current),Pt(Xe.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(o=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return ce(t),null;case 13:if(W(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Ne!==null&&t.mode&1&&!(t.flags&128))zc(),mn(),t.flags|=98560,o=!1;else if(o=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[We]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Ae!==null&&(na(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Wa())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return hn(),Ko(e,t),e===null&&Gn(t.stateNode.containerInfo),ce(t),null;case 10:return Ea(t.type._context),ce(t),null;case 17:return ke(t.type)&&nl(),ce(t),null;case 19:if(W(K),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)En(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=cl(e),i!==null){for(t.flags|=128,En(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(K,K.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>xn&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304)}else{if(!r)if(e=cl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Q)return ce(t),null}else 2*J()-o.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=K.current,H(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Ap(e,t){switch(Na(t),t.tag){case 1:return ke(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),W(we),W(de),Ma(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if(W(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(K),null;case 4:return hn(),null;case 10:return Ea(t.type._context),null;case 22:case 23:return Va(),null;case 24:return null;default:return null}}var Tr=!1,ue=!1,$p=typeof WeakSet=="function"?WeakSet:Set,P=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Yo(e,t,n){try{n()}catch(r){G(e,t,r)}}var Yi=!1;function Up(e,t){if(Do=Jr,e=hc(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,c=-1,d=0,m=0,g=e,v=null;t:for(;;){for(var b;g!==n||l!==0&&g.nodeType!==3||(s=i+l),g!==o||r!==0&&g.nodeType!==3||(c=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(b=g.firstChild)!==null;)v=g,g=b;for(;;){if(g===e)break t;if(v===n&&++d===l&&(s=i),v===o&&++m===r&&(c=i),(b=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=b}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mo={focusedElem:e,selectionRange:n},Jr=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,M=h.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Re(t.type,y),M);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return h=Yi,Yi=!1,h}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Yo(t,n,o)}l=l.next}while(l!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[Zn],delete t[Oo],delete t[Sp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fu(e){return e.tag===5||e.tag===3||e.tag===4}function qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}function Jo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jo(e,t,n),e=e.sibling;e!==null;)Jo(e,t,n),e=e.sibling}var oe=null,Fe=!1;function at(e,t,n){for(n=n.child;n!==null;)mu(e,t,n),n=n.sibling}function mu(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:ue||rn(n,t);case 6:var r=oe,l=Fe;oe=null,at(e,t,n),oe=r,Fe=l,oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),Kn(e)):Gl(oe,n.stateNode));break;case 4:r=oe,l=Fe,oe=n.stateNode.containerInfo,Fe=!0,at(e,t,n),oe=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Yo(n,t,i),l=l.next}while(l!==r)}at(e,t,n);break;case 1:if(!ue&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,at(e,t,n),ue=r):at(e,t,n);break;default:at(e,t,n)}}function Gi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $p),t.forEach(function(r){var l=qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Fe=!1;break e;case 3:oe=s.stateNode.containerInfo,Fe=!0;break e;case 4:oe=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(oe===null)throw Error(_(160));mu(o,i,l),oe=null,Fe=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){G(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gu(t,e),t=t.sibling}function gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),He(e),r&4){try{$n(3,e,e.return),El(3,e)}catch(y){G(e,e.return,y)}try{$n(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:Oe(t,e),He(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Oe(t,e),He(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var l=e.stateNode;try{Vn(l,"")}catch(y){G(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Rs(l,o),bo(s,i);var d=bo(s,o);for(i=0;i<c.length;i+=2){var m=c[i],g=c[i+1];m==="style"?Bs(l,g):m==="dangerouslySetInnerHTML"?$s(l,g):m==="children"?Vn(l,g):ca(l,m,g,d)}switch(s){case"input":vo(l,o);break;case"textarea":Fs(l,o);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var b=o.value;b!=null?on(l,!!o.multiple,b,!1):v!==!!o.multiple&&(o.defaultValue!=null?on(l,!!o.multiple,o.defaultValue,!0):on(l,!!o.multiple,o.multiple?[]:"",!1))}l[Zn]=o}catch(y){G(e,e.return,y)}}break;case 6:if(Oe(t,e),He(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){G(e,e.return,y)}}break;case 3:if(Oe(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:Oe(t,e),He(e);break;case 13:Oe(t,e),He(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ba=J())),r&4&&Gi(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(d=ue)||m,Oe(t,e),ue=d):Oe(t,e),He(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(g=P=m;P!==null;){switch(v=P,b=v.child,v.tag){case 0:case 11:case 14:case 15:$n(4,v,v.return);break;case 1:rn(v,v.return);var h=v.stateNode;if(typeof h.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){G(r,n,y)}}break;case 5:rn(v,v.return);break;case 22:if(v.memoizedState!==null){Zi(g);continue}}b!==null?(b.return=v,P=b):Zi(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,c=g.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Us("display",i))}catch(y){G(e,e.return,y)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(y){G(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Oe(t,e),He(e),r&4&&Gi(e);break;case 21:break;default:Oe(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fu(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vn(l,""),r.flags&=-33);var o=qi(e);Jo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=qi(e);Go(e,s,i);break;default:throw Error(_(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bp(e,t,n){P=e,hu(e)}function hu(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||Tr;if(!i){var s=l.alternate,c=s!==null&&s.memoizedState!==null||ue;s=Tr;var d=ue;if(Tr=i,(ue=c)&&!d)for(P=l;P!==null;)i=P,c=i.child,i.tag===22&&i.memoizedState!==null?es(l):c!==null?(c.return=i,P=c):es(l);for(;o!==null;)P=o,hu(o),o=o.sibling;P=l,Tr=s,ue=d}Ji(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,P=o):Ji(e)}}function Ji(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Oi(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oi(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Kn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ue||t.flags&512&&qo(t)}catch(v){G(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Zi(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function es(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(c){G(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){G(t,l,c)}}var o=t.return;try{qo(t)}catch(c){G(t,o,c)}break;case 5:var i=t.return;try{qo(t)}catch(c){G(t,i,c)}}}catch(c){G(t,t.return,c)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Hp=Math.ceil,pl=lt.ReactCurrentDispatcher,$a=lt.ReactCurrentOwner,Me=lt.ReactCurrentBatchConfig,A=0,le=null,Z=null,ae=0,Se=0,ln=Nt(0),te=0,or=null,At=0,zl=0,Ua=0,Un=null,xe=null,Ba=0,xn=1/0,Ye=null,fl=!1,Zo=null,xt=null,Pr=!1,pt=null,ml=0,Bn=0,ea=null,Vr=-1,Wr=0;function me(){return A&6?J():Vr!==-1?Vr:Vr=J()}function yt(e){return e.mode&1?A&2&&ae!==0?ae&-ae:_p.transition!==null?(Wr===0&&(Wr=ec()),Wr):(e=B,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function Ue(e,t,n,r){if(50<Bn)throw Bn=0,ea=null,Error(_(185));dr(e,n,r),(!(A&2)||e!==le)&&(e===le&&(!(A&2)&&(zl|=n),te===4&&ut(e,ae)),be(e,r),n===1&&A===0&&!(t.mode&1)&&(xn=J()+500,jl&&jt()))}function be(e,t){var n=e.callbackNode;_d(e,t);var r=Gr(e,e===le?ae:0);if(r===0)n!==null&&ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ci(n),t===1)e.tag===0?jp(ts.bind(null,e)):_c(ts.bind(null,e)),kp(function(){!(A&6)&&jt()}),n=null;else{switch(tc(r)){case 1:n=ma;break;case 4:n=Js;break;case 16:n=qr;break;case 536870912:n=Zs;break;default:n=qr}n=Nu(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(Vr=-1,Wr=0,A&6)throw Error(_(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=Gr(e,e===le?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gl(e,r);else{t=r;var l=A;A|=2;var o=yu();(le!==e||ae!==t)&&(Ye=null,xn=J()+500,Dt(e,t));do try{Qp();break}catch(s){xu(e,s)}while(1);Ca(),pl.current=o,A=l,Z!==null?t=0:(le=null,ae=0,t=te)}if(t!==0){if(t===2&&(l=Co(e),l!==0&&(r=l,t=ta(e,l))),t===1)throw n=or,Dt(e,0),ut(e,r),be(e,J()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!Vp(l)&&(t=gl(e,r),t===2&&(o=Co(e),o!==0&&(r=o,t=ta(e,o))),t===1))throw n=or,Dt(e,0),ut(e,r),be(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Et(e,xe,Ye);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Ba+500-J(),10<t)){if(Gr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Io(Et.bind(null,e,xe,Ye),t);break}Et(e,xe,Ye);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-$e(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=Io(Et.bind(null,e,xe,Ye),r);break}Et(e,xe,Ye);break;case 5:Et(e,xe,Ye);break;default:throw Error(_(329))}}}return be(e,J()),e.callbackNode===n?vu.bind(null,e):null}function ta(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=gl(e,t),e!==2&&(t=xe,xe=n,t!==null&&na(t)),e}function na(e){xe===null?xe=e:xe.push.apply(xe,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Be(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Ua,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$e(t),r=1<<n;e[n]=-1,t&=~r}}function ts(e){if(A&6)throw Error(_(327));dn();var t=Gr(e,0);if(!(t&1))return be(e,J()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var r=Co(e);r!==0&&(t=r,n=ta(e,r))}if(n===1)throw n=or,Dt(e,0),ut(e,t),be(e,J()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,xe,Ye),be(e,J()),null}function Ha(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(xn=J()+500,jl&&jt())}}function $t(e){pt!==null&&pt.tag===0&&!(A&6)&&dn();var t=A;A|=1;var n=Me.transition,r=B;try{if(Me.transition=null,B=1,e)return e()}finally{B=r,Me.transition=n,A=t,!(A&6)&&jt()}}function Va(){Se=ln.current,W(ln)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wp(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:hn(),W(we),W(de),Ma();break;case 5:Da(r);break;case 4:hn();break;case 13:W(K);break;case 19:W(K);break;case 10:Ea(r.type._context);break;case 22:case 23:Va()}n=n.return}if(le=e,Z=e=wt(e.current,null),ae=Se=t,te=0,or=null,Ua=zl=At=0,xe=Un=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Tt=null}return e}function xu(e,t){do{var n=Z;try{if(Ca(),Ur.current=dl,ul){for(var r=Y.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(Ft=0,re=ee=Y=null,An=!1,nr=0,$a.current=null,n===null||n.return===null){te=1,or=t,Z=null;break}e:{var o=e,i=n.return,s=n,c=t;if(t=ae,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=Bi(i);if(b!==null){b.flags&=-257,Hi(b,i,s,o,t),b.mode&1&&Ui(o,d,t),t=b,c=d;var h=t.updateQueue;if(h===null){var y=new Set;y.add(c),t.updateQueue=y}else h.add(c);break e}else{if(!(t&1)){Ui(o,d,t),Wa();break e}c=Error(_(426))}}else if(Q&&s.mode&1){var M=Bi(i);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Hi(M,i,s,o,t),ja(vn(c,s));break e}}o=c=vn(c,s),te!==4&&(te=2),Un===null?Un=[o]:Un.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=tu(o,c,t);Ii(o,f);break e;case 1:s=c;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=nu(o,s,t);Ii(o,x);break e}}o=o.return}while(o!==null)}ku(n)}catch(k){t=k,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function yu(){var e=pl.current;return pl.current=dl,e===null?dl:e}function Wa(){(te===0||te===3||te===2)&&(te=4),le===null||!(At&268435455)&&!(zl&268435455)||ut(le,ae)}function gl(e,t){var n=A;A|=2;var r=yu();(le!==e||ae!==t)&&(Ye=null,Dt(e,t));do try{Wp();break}catch(l){xu(e,l)}while(1);if(Ca(),A=n,pl.current=r,Z!==null)throw Error(_(261));return le=null,ae=0,te}function Wp(){for(;Z!==null;)wu(Z)}function Qp(){for(;Z!==null&&!vd();)wu(Z)}function wu(e){var t=Su(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?ku(e):Z=t,$a.current=null}function ku(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ap(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=Fp(n,t,Se),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Et(e,t,n){var r=B,l=Me.transition;try{Me.transition=null,B=1,Xp(e,t,n,r)}finally{Me.transition=l,B=r}return null}function Xp(e,t,n,r){do dn();while(pt!==null);if(A&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cd(e,o),e===le&&(Z=le=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Nu(qr,function(){return dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var i=B;B=1;var s=A;A|=4,$a.current=null,Up(e,n),gu(n,e),fp(Mo),Jr=!!Do,Mo=Do=null,e.current=n,Bp(n),xd(),A=s,B=i,Me.transition=o}else e.current=n;if(Pr&&(Pr=!1,pt=e,ml=l),o=e.pendingLanes,o===0&&(xt=null),kd(n.stateNode),be(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(fl)throw fl=!1,e=Zo,Zo=null,e;return ml&1&&e.tag!==0&&dn(),o=e.pendingLanes,o&1?e===ea?Bn++:(Bn=0,ea=e):Bn=0,jt(),null}function dn(){if(pt!==null){var e=tc(ml),t=Me.transition,n=B;try{if(Me.transition=null,B=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,ml=0,A&6)throw Error(_(331));var l=A;for(A|=4,P=e.current;P!==null;){var o=P,i=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var d=s[c];for(P=d;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:$n(8,m,o)}var g=m.child;if(g!==null)g.return=m,P=g;else for(;P!==null;){m=P;var v=m.sibling,b=m.return;if(pu(m),m===d){P=null;break}if(v!==null){v.return=b,P=v;break}P=b}}}var h=o.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var M=y.sibling;y.sibling=null,y=M}while(y!==null)}}P=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,P=i;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$n(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var u=e.current;for(P=u;P!==null;){i=P;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,P=p;else e:for(i=u;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:El(9,s)}}catch(k){G(s,s.return,k)}if(s===i){P=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,P=x;break e}P=s.return}}if(A=l,jt(),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(wl,e)}catch{}r=!0}return r}finally{B=n,Me.transition=t}}return!1}function ns(e,t,n){t=vn(n,t),t=tu(e,t,1),e=vt(e,t,1),t=me(),e!==null&&(dr(e,1,t),be(e,t))}function G(e,t,n){if(e.tag===3)ns(e,e,n);else for(;t!==null;){if(t.tag===3){ns(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=vn(n,e),e=nu(t,e,1),t=vt(t,e,1),e=me(),t!==null&&(dr(t,1,e),be(t,e));break}}t=t.return}}function Kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ae&n)===n&&(te===4||te===3&&(ae&130023424)===ae&&500>J()-Ba?Dt(e,0):Ua|=n),be(e,t)}function bu(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=me();e=nt(e,t),e!==null&&(dr(e,t,n),be(e,n))}function Yp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bu(e,n)}function qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),bu(e,n)}var Su;Su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Rp(e,t,n);ye=!!(e.flags&131072)}else ye=!1,Q&&t.flags&1048576&&Cc(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var l=fn(t,de.current);un(t,n),l=Ia(null,t,r,e,l,n);var o=Oa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,rl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ta(t),l.updater=Cl,t.stateNode=l,l._reactInternals=t,Bo(t,r,e,n),t=Wo(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&Sa(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Jp(r),e=Re(r,e),l){case 0:t=Vo(null,t,r,e,n);break e;case 1:t=Qi(null,t,r,e,n);break e;case 11:t=Vi(null,t,r,e,n);break e;case 14:t=Wi(null,t,r,Re(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Vo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Qi(e,t,r,l,n);case 3:e:{if(au(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Mc(e,t),sl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=vn(Error(_(423)),t),t=Xi(e,t,r,n,l);break e}else if(r!==l){l=vn(Error(_(424)),t),t=Xi(e,t,r,n,l);break e}else for(Ne=ht(t.stateNode.containerInfo.firstChild),je=t,Q=!0,Ae=null,n=Pc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===l){t=rt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Ao(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Lo(r,l)?i=null:o!==null&&Lo(r,o)&&(t.flags|=32),ou(e,t),fe(e,t,i,n),t.child;case 6:return e===null&&Ao(t),null;case 13:return iu(e,t,n);case 4:return Pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Vi(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,H(al,r._currentValue),r._currentValue=i,o!==null)if(Be(o.value,i)){if(o.children===l.children&&!we.current){t=rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ze(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$o(o.return,n,t),s.lanes|=n;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(_(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),$o(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,un(t,n),l=Le(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Re(r,t.pendingProps),l=Re(r.type,l),Wi(e,t,r,l,n);case 15:return ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Re(r,l),Hr(e,t),t.tag=1,ke(r)?(e=!0,rl(t)):e=!1,un(t,n),eu(t,r,l),Bo(t,r,l,n),Wo(null,t,r,!0,e,n);case 19:return su(e,t,n);case 22:return lu(e,t,n)}throw Error(_(156,t.tag))};function Nu(e,t){return Gs(e,t)}function Gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Gp(e,t,n,r)}function Qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jp(e){if(typeof e=="function")return Qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===da)return 11;if(e===pa)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Qa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kt:return Mt(n.children,l,o,t);case ua:i=8,l|=8;break;case po:return e=Pe(12,n,t,l|2),e.elementType=po,e.lanes=o,e;case fo:return e=Pe(13,n,t,l),e.elementType=fo,e.lanes=o,e;case mo:return e=Pe(19,n,t,l),e.elementType=mo,e.lanes=o,e;case Ls:return Tl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ds:i=10;break e;case Ms:i=9;break e;case da:i=11;break e;case pa:i=14;break e;case it:i=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Pe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Mt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Tl(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Ls,e.lanes=n,e.stateNode={isHidden:!1},e}function oo(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ao(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Xa(e,t,n,r,l,o,i,s,c){return e=new Zp(e,t,n,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ta(o),e}function ef(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ju(e){if(!e)return bt;e=e._reactInternals;e:{if(Bt(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(ke(n))return jc(e,n,t)}return t}function _u(e,t,n,r,l,o,i,s,c){return e=Xa(n,r,!0,e,l,o,i,s,c),e.context=ju(null),n=e.current,r=me(),l=yt(n),o=Ze(r,l),o.callback=t??null,vt(n,o,l),e.current.lanes=l,dr(e,l,r),be(e,r),e}function Pl(e,t,n,r){var l=t.current,o=me(),i=yt(l);return n=ju(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(l,t,i),e!==null&&(Ue(e,l,i,o),$r(e,l,i)),i}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ka(e,t){rs(e,t),(e=e.alternate)&&rs(e,t)}function tf(){return null}var Cu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ya(e){this._internalRoot=e}Dl.prototype.render=Ya.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Pl(e,t,null,null)};Dl.prototype.unmount=Ya.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Pl(null,e,null,null)}),t[tt]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&ac(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ls(){}function nf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=hl(i);o.call(d)}}var i=_u(t,r,e,0,null,!1,!1,"",ls);return e._reactRootContainer=i,e[tt]=i.current,Gn(e.nodeType===8?e.parentNode:e),$t(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=hl(c);s.call(d)}}var c=Xa(e,0,!1,null,null,!1,!1,"",ls);return e._reactRootContainer=c,e[tt]=c.current,Gn(e.nodeType===8?e.parentNode:e),$t(function(){Pl(t,c,n,r)}),c}function Ll(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var c=hl(i);s.call(c)}}Pl(t,i,e,l)}else i=nf(n,t,e,l,r);return hl(i)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(ga(t,n|1),be(t,J()),!(A&6)&&(xn=J()+500,jt()))}break;case 13:$t(function(){var r=nt(e,1);if(r!==null){var l=me();Ue(r,e,1,l)}}),Ka(e,1)}};ha=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=me();Ue(t,e,134217728,n)}Ka(e,134217728)}};rc=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=me();Ue(n,e,t,r)}Ka(e,t)}};lc=function(){return B};oc=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};No=function(e,t,n){switch(t){case"input":if(vo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Nl(r);if(!l)throw Error(_(90));Os(r),vo(r,l)}}}break;case"textarea":Fs(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Ws=Ha;Qs=$t;var rf={usingClientEntryPoint:!1,Events:[fr,Jt,Nl,Hs,Vs,Ha]},zn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lf={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ys(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{wl=Dr.inject(lf),Qe=Dr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rf;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(t))throw Error(_(200));return ef(e,t,null,n)};Ce.createRoot=function(e,t){if(!qa(e))throw Error(_(299));var n=!1,r="",l=Cu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Xa(e,1,!1,null,null,n,!1,r,l),e[tt]=t.current,Gn(e.nodeType===8?e.parentNode:e),new Ya(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ys(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return $t(e)};Ce.hydrate=function(e,t,n){if(!Ml(t))throw Error(_(200));return Ll(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!qa(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Cu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=_u(t,null,e,1,n??null,l,!1,o,i),e[tt]=t.current,Gn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Dl(t)};Ce.render=function(e,t,n){if(!Ml(t))throw Error(_(200));return Ll(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(_(40));return e._reactRootContainer?($t(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ha;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ll(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Eu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eu)}catch(e){console.error(e)}}Eu(),Es.exports=Ce;var of=Es.exports,os=of;co.createRoot=os.createRoot,co.hydrateRoot=os.hydrateRoot;const as=[{id:"dashboard",icon:"⚔️",label:"Quests"},{id:"focus",icon:"🔮",label:"Focus"},{id:"inventory",icon:"🎒",label:"Gear"},{id:"shop",icon:"🛒",label:"Shop"},{id:"rewards",icon:"✨",label:"Rewards"},{id:"talents",icon:"🌟",label:"Talents"}];function af({user:e,activeView:t,onNavigate:n,pendingCount:r,newLoot:l=!1}){const o=Math.round(e.xp/e.xpToNext*100),i=s=>s.id==="dashboard"&&r>0?r:s.id==="talents"&&e.talentPoints>0?"!":s.id==="inventory"&&l?"●":null;return a.jsxs(a.Fragment,{children:[a.jsxs("nav",{className:"sidebar",children:[a.jsxs("div",{className:"sidebar-logo",children:[a.jsx("div",{className:"logo-icon",children:"⚔"}),a.jsxs("div",{children:[a.jsx("div",{className:"logo-title",children:"QuestLog"}),a.jsx("div",{className:"logo-sub",children:"ADHD Task Manager"})]})]}),a.jsxs("div",{className:"sidebar-profile",children:[a.jsx("div",{className:"profile-avatar",children:e.displayName[0]}),a.jsxs("div",{className:"profile-info",children:[a.jsx("div",{className:"profile-name",children:e.displayName}),a.jsx("div",{className:"profile-title",children:e.title})]})]}),a.jsx("div",{className:"sidebar-stats",children:[{icon:"⚡",label:"Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Streak",value:`${e.streak}d`,color:"var(--amber)"}].map(s=>a.jsxs("div",{className:"stat-chip",children:[a.jsx("span",{className:"stat-icon",children:s.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"stat-label",children:s.label}),a.jsx("div",{className:"stat-value",style:{color:s.color},children:s.value})]})]},s.label))}),a.jsxs("div",{className:"sidebar-xp",children:[a.jsxs("div",{className:"sidebar-xp-labels",children:[a.jsx("span",{className:"text-secondary text-xs",children:"XP"}),a.jsxs("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:[e.xp,"/",e.xpToNext]})]}),a.jsx("div",{className:"xp-bar-track",children:a.jsx("div",{className:"xp-bar-fill",style:{width:`${o}%`}})}),a.jsxs("div",{className:"text-xs text-muted",style:{marginTop:3},children:[e.xpToNext-e.xp," to Lv.",e.level+1]})]}),a.jsx("div",{className:"sidebar-nav",children:as.map(s=>{const c=i(s);return a.jsxs("button",{className:`nav-item ${t===s.id?"active":""}`,onClick:()=>n(s.id),children:[a.jsx("span",{className:"nav-icon",children:s.icon}),a.jsx("span",{className:"nav-label",children:s.label}),c&&a.jsx("span",{className:`nav-badge ${s.id==="inventory"?"loot-badge":s.id==="talents"?"talent-badge":""}`,children:c})]},s.id)})})]}),a.jsx("nav",{className:"bottom-nav",children:as.map(s=>{const c=i(s);return a.jsxs("button",{className:`bottom-tab ${t===s.id?"active":""}`,onClick:()=>n(s.id),children:[a.jsx("span",{className:"bottom-tab-icon",children:s.icon}),a.jsx("span",{className:"bottom-tab-label",children:s.label}),c&&a.jsx("span",{className:"bottom-tab-badge",children:c})]},s.id)})}),a.jsx("style",{children:`
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
      `})]})}const Lt={ring_focus_1:{id:"ring_focus_1",name:"Ring of Slight Attention",slot:"ring",rarity:"common",icon:"💍",color:"#9E9BC0",stats:{focus:5,critChance:.02},effects:[{type:"task_xp_bonus",value:.1}],flavor:"You almost remember what you were doing."},ring_focus_2:{id:"ring_focus_2",name:"Band of Hyperfocus",slot:"ring",rarity:"uncommon",icon:"💍",color:"#4FC3F7",stats:{focus:14,critChance:.05,critDamage:.2},effects:[{type:"task_xp_bonus",value:.2}],flavor:"Time ceases to exist. So does lunch."},ring_speed_1:{id:"ring_speed_1",name:"Signet of Urgency",slot:"ring",rarity:"common",icon:"💍",color:"#F5A623",stats:{speed:.15},flavor:"Slightly faster. Slightly."},helmet_clarity_1:{id:"helmet_clarity_1",name:"Crown of Clarity",slot:"head",rarity:"uncommon",icon:"👑",color:"#F5C842",stats:{focus:8,critChance:.03},effects:[{type:"task_xp_bonus",value:.12}],flavor:"Your thoughts feel just slightly less like soup."},helmet_steel_1:{id:"helmet_steel_1",name:"Helm of Perseverance",slot:"head",rarity:"common",icon:"⛑️",color:"#B0BEC5",stats:{resilience:10,attack:3},flavor:"Dings from every missed deadline."},chest_focus_1:{id:"chest_focus_1",name:"Robe of Deep Work",slot:"body",rarity:"rare",icon:"🥋",color:"#B39DDB",stats:{focus:18,attack:5},effects:[{type:"task_xp_bonus",value:.25},{type:"focus_session_bonus",value:.15}],flavor:"Worn by those who have achieved inbox zero."},chest_iron_1:{id:"chest_iron_1",name:"Vest of Routine",slot:"body",rarity:"common",icon:"🦺",color:"#78909C",stats:{resilience:15,speed:.1},flavor:"Consistent. Reliable. Slightly itchy."},gloves_grip_1:{id:"gloves_grip_1",name:"Gloves of Getting Things Done",slot:"gloves",rarity:"common",icon:"🧤",color:"#FF8A65",stats:{attack:8,critChance:.02},flavor:'"Just start." — the gloves'},gloves_crit_1:{id:"gloves_crit_1",name:"Fingers of Fortune",slot:"gloves",rarity:"uncommon",icon:"🧤",color:"#FFD54F",stats:{critChance:.08,critDamage:.3},flavor:"Your pointing finger has become significantly more judgy."},legs_endure_1:{id:"legs_endure_1",name:"Leggings of Long Sessions",slot:"legs",rarity:"uncommon",icon:"👖",color:"#5C6BC0",stats:{resilience:12,focus:6},effects:[{type:"focus_session_bonus",value:.1}],flavor:"Technically pajamas. No one needs to know."},legs_swift_1:{id:"legs_swift_1",name:"Trousers of Momentum",slot:"legs",rarity:"common",icon:"👗",color:"#26A69A",stats:{speed:.12,attack:4},flavor:"Moving faster. Destination: unclear."},boots_speed_1:{id:"boots_speed_1",name:"Restless Boots",slot:"boots",rarity:"common",icon:"👟",color:"#66BB6A",stats:{speed:.2},flavor:"They tap. Constantly."},boots_speed_2:{id:"boots_speed_2",name:"Sprinters of Sudden Burst",slot:"boots",rarity:"uncommon",icon:"👟",color:"#26C6DA",stats:{speed:.35,critChance:.03},flavor:"Perfect for last-minute deadline runs."},necklace_resolve_1:{id:"necklace_resolve_1",name:"Amulet of Resolve",slot:"necklace",rarity:"rare",icon:"📿",color:"#EF5350",stats:{resilience:20,focus:10,attack:6},effects:[{type:"task_xp_bonus",value:.15}],flavor:'"You will finish this." It means it.'}},De={common:{color:"#9E9BC0",bg:"rgba(158,155,192,0.12)",label:"Common"},uncommon:{color:"#5CDD8B",bg:"rgba(92,221,139,0.12)",label:"Uncommon"},rare:{color:"#4FC3F7",bg:"rgba(79,195,247,0.12)",label:"Rare"},epic:{color:"#B39DDB",bg:"rgba(179,157,219,0.15)",label:"Epic"},legendary:{color:"#F5C842",bg:"rgba(245,200,66,0.15)",label:"Legendary"}},sf=[{id:"head",label:"Head",icon:"⛑️"},{id:"body",label:"Body",icon:"🦺"},{id:"gloves",label:"Gloves",icon:"🧤"},{id:"legs",label:"Legs",icon:"👖"},{id:"boots",label:"Boots",icon:"👟"},{id:"ring",label:"Ring 1",icon:"💍"},{id:"ring2",label:"Ring 2",icon:"💍"},{id:"necklace",label:"Necklace",icon:"📿"}];function cf(e){return Lt[e]||null}const uf={common:30,uncommon:60,rare:120,epic:220,legendary:400};function ar(e){return e?uf[e.rarity]||30:0}function zu(e){const t={attack:0,speed:0,critChance:0,critDamage:0,focus:0,resilience:0},n=[];return Object.values(e).forEach(r=>{if(!r)return;const l=Lt[r];l&&(Object.entries(l.stats||{}).forEach(([o,i])=>{t[o]=(t[o]||0)+i}),(l.effects||[]).forEach(o=>n.push(o)))}),e.ring&&e.ring2&&(t.critChance+=.05),{stats:t,effects:n}}const Vt={attack:10,speed:1,critChance:.05,critDamage:1.5,focus:0,resilience:0},df=2e3;function Mr(e,t,n={}){const r={attack:Math.floor(e*2.5),critChance:e*.002,speed:0,critDamage:0,focus:0,resilience:0},{stats:l}=zu(t);return{attack:Vt.attack+r.attack+(l.attack||0)+(n.attack||0),speed:Vt.speed+(l.speed||0)+(n.speed||0),critChance:Math.min(.75,Vt.critChance+r.critChance+(l.critChance||0)+(n.critChance||0)),critDamage:Vt.critDamage+(l.critDamage||0)+(n.critDamage||0),focus:Vt.focus+(l.focus||0)+(n.focus||0),resilience:Vt.resilience+(l.resilience||0)+(n.resilience||0)}}function pf(e,t=[]){let n=e.attack,r=e.critChance;t.forEach(i=>{i.type==="attack_mult"&&(n*=i.value),i.type==="crit_boost"&&(r=Math.min(.9,r+i.value)),i.type==="slow_player"&&(n*=i.value)});const l=Math.random()<r;return{damage:Math.round(l?n*e.critDamage:n*(.9+Math.random()*.2)),isCrit:l}}function ff(e){return e?1.4:1}function mf(e){return e>=5?1.5:e>=3?1.3:e>=1?1.15:1}function gf(e,t){const n=Math.min(.7,t*.03);return Math.max(1,Math.round(e*(1-n)))}function hf(e,t,n){if(!e.phases)return null;for(const r of e.phases){const l=e.max_hp*r.hp_threshold;if(n>l&&t<=l)return r}return null}function vf(e,t,n){const r=Math.max(0,(n-t)/1e3),l=8*60*60,o=Math.min(r,l),i=e.attack*e.speed,s=Math.round(i*o*.5),c=Math.round(s*.015),d=Math.round(o/3600*10)/10;return{damage:s,gold:c,offlineSec:o,hours:d}}function is(e){const[t,n]=e.gold_drop,r=t+Math.floor(Math.random()*(n-t+1)),l=e.xp_drop,o=[];return(e.loot_table||[]).forEach(i=>{Math.random()<i.chance&&o.push(i.item)}),{gold:r,xp:l,loot:o}}function Tu(e){const t=e.attack*(1+e.critChance*(e.critDamage-1));return Math.round(t*e.speed)}function xf(){const[e,t]=j.useState([]),[n,r]=j.useState([]),l=j.useRef(0),o=j.useCallback(s=>{const c=`toast-${Date.now()}-${l.current++}`,d={...s,id:c,ts:Date.now()};t(m=>[...m.slice(-3),d]),r(m=>[d,...m].slice(0,60)),setTimeout(()=>{t(m=>m.filter(g=>g.id!==c))},s.duration||3500)},[]),i=j.useCallback(s=>{t(c=>c.filter(d=>d.id!==s))},[]);return{toasts:e,log:n,addToast:o,dismissToast:i}}function yf({toasts:e,onDismiss:t}){return a.jsxs("div",{className:"toast-stack",children:[e.map(n=>a.jsx(wf,{toast:n,onDismiss:t},n.id)),a.jsx("style",{children:`
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
      `})]})}function wf({toast:e,onDismiss:t}){var i;const[n,r]=j.useState(!1);j.useEffect(()=>{const s=requestAnimationFrame(()=>r(!0));return()=>cancelAnimationFrame(s)},[]);const l={kill:{border:"var(--coral)",bg:"rgba(255,101,132,0.12)",icon:"☠"},boss:{border:"var(--gold)",bg:"rgba(245,200,66,0.14)",icon:"👑"},loot:{border:"var(--green)",bg:"rgba(92,221,139,0.12)",icon:"🎁"},offline:{border:"var(--xp-blue)",bg:"rgba(79,195,247,0.1)",icon:"🌙"},level:{border:"var(--gold)",bg:"rgba(245,200,66,0.14)",icon:"⭐"},default:{border:"var(--border-default)",bg:"var(--bg-elevated)",icon:"✦"}},o=l[e.type]||l.default;return a.jsxs("div",{className:`toast-item ${n?"visible":""}`,style:{borderColor:o.border,background:o.bg},onClick:()=>t(e.id),children:[a.jsx("span",{className:"toast-icon",children:e.icon||o.icon}),a.jsxs("div",{className:"toast-body",children:[a.jsx("div",{className:"toast-title",children:e.title}),e.sub&&a.jsx("div",{className:"toast-sub",children:e.sub}),((i=e.loot)==null?void 0:i.length)>0&&a.jsx("div",{className:"toast-loot",children:e.loot.map(s=>{const c=cf(s);if(!c)return null;const d=De[c.rarity]||De.common;return a.jsxs("span",{className:"toast-loot-chip",style:{color:d.color,borderColor:d.color},children:[c.icon," ",c.name]},s)})})]}),a.jsx("div",{className:"toast-progress",style:{"--dur":`${e.duration||3500}ms`}})]})}function kf({log:e}){const[t,n]=j.useState(!1),r=e.slice(0,8);return a.jsxs("div",{className:"combat-log-wrap",children:[a.jsxs("button",{className:`log-toggle ${t?"open":""}`,onClick:()=>n(l=>!l),title:"Combat log",children:["📜 Log ",e.length>0&&a.jsx("span",{className:"log-count",children:e.length})]}),t&&a.jsxs("div",{className:"combat-log-panel",children:[a.jsxs("div",{className:"clp-header",children:[a.jsx("span",{className:"font-display",style:{fontSize:"0.75rem",color:"var(--gold)"},children:"Combat Log"}),a.jsx("button",{className:"btn btn-ghost",style:{fontSize:"0.8rem",padding:"2px 6px"},onClick:()=>n(!1),children:"×"})]}),r.length===0?a.jsx("div",{className:"clp-empty",children:"No events yet."}):r.map(l=>a.jsxs("div",{className:"clp-entry",children:[a.jsx("span",{className:"clp-icon",children:l.icon||"✦"}),a.jsxs("div",{className:"clp-content",children:[a.jsx("span",{className:"clp-title",children:l.title}),l.sub&&a.jsxs("span",{className:"clp-sub",children:[" — ",l.sub]})]}),a.jsx("span",{className:"clp-time",children:bf(l.ts)})]},l.id))]}),a.jsx("style",{children:`
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
      `})]})}function bf(e){const t=Math.round((Date.now()-e)/1e3);return t<60?`${t}s ago`:t<3600?`${Math.round(t/60)}m ago`:`${Math.round(t/3600)}h ago`}function Sf({monster:e,currentHp:t,playerStats:n,activeBuffs:r=[],floatingNumbers:l=[],momentumMult:o=1,lowEnergyMode:i=!1,monstersKilled:s=0,onToggleLowEnergy:c,combatLog:d=[]}){var M,f,u;const[m,g]=j.useState(!1),v=Math.max(0,t/e.max_hp*100),b=Tu(n);j.useEffect(()=>{if(l.length>0){g(!0);const p=setTimeout(()=>g(!1),200);return()=>clearTimeout(p)}},[l.length]);const h=v>50?"#5CDD8B":v>25?"#F5A623":"#FF3860",y=(M=e.phases)==null?void 0:M.some(p=>Math.abs(v/100-p.hp_threshold)<.08);return a.jsxs("div",{className:`combat-strip ${i?"low-energy":""}`,children:[a.jsxs("div",{className:"combat-monster-section",children:[a.jsxs("div",{className:"combat-monster-info",children:[a.jsxs("div",{className:"combat-monster-name",style:{color:e.color},children:[e.name,e.isBoss&&a.jsx("span",{className:"boss-tag",children:"BOSS"})]}),a.jsxs("div",{className:"combat-hp-row",children:[a.jsxs("div",{className:"combat-hp-bar-track",children:[a.jsx("div",{className:"combat-hp-bar-fill",style:{width:`${v}%`,background:h,boxShadow:`0 0 8px ${h}60`}}),y&&a.jsx("div",{className:"phase-warn-line",style:{left:`${((u=(f=e.phases)==null?void 0:f[0])==null?void 0:u.hp_threshold)*100}%`}})]}),a.jsxs("div",{className:"combat-hp-text",children:[t.toLocaleString()," / ",e.max_hp.toLocaleString()]})]})]}),a.jsxs("div",{className:`combat-arena ${m?"shake":""}`,children:[a.jsxs("div",{className:"player-sprite",children:[a.jsx("div",{className:"sprite-figure player-figure",children:"🧙‍♂️"}),a.jsx("div",{className:"sprite-label",children:"You"}),r.length>0&&a.jsx("div",{className:"buff-indicators",children:r.map(p=>a.jsx("span",{className:"buff-pip",title:p.label,children:p.icon},p.id))})]}),a.jsx("div",{className:"attack-arrows",children:a.jsxs("div",{className:"arrow-row",children:[a.jsx("div",{className:"attack-arrow",style:{animationDelay:"0ms"},children:"→"}),a.jsx("div",{className:"attack-arrow",style:{animationDelay:"300ms"},children:"→"}),a.jsx("div",{className:"attack-arrow",style:{animationDelay:"600ms"},children:"→"})]})}),a.jsxs("div",{className:"monster-sprite",children:[a.jsx("div",{className:`sprite-figure monster-figure ${m?"monster-hit":""}`,style:{fontSize:e.isBoss?"2.2rem":"1.8rem"},children:e.sprite}),a.jsx("div",{className:"sprite-label",style:{color:e.color},children:e.isBoss?"⚡ BOSS":`Tier ${e.tier}`})]}),l.map(p=>a.jsx("div",{className:`float-dmg ${p.isCrit?"crit":""} ${p.isOffline?"offline":""}`,style:{left:`${p.x}%`},children:p.isOffline?`+${p.value} (idle)`:p.isCrit?`${p.value}!`:p.value},p.id))]})]}),a.jsxs("div",{className:"combat-stats-panel",children:[a.jsxs("div",{className:"combat-stat-row",children:[a.jsx("span",{className:"cs-label",children:"⚔ DPS"}),a.jsx("span",{className:"cs-value",children:b})]}),a.jsxs("div",{className:"combat-stat-row",children:[a.jsx("span",{className:"cs-label",children:"💥 ATK"}),a.jsx("span",{className:"cs-value",children:Math.round(n.attack)})]}),a.jsxs("div",{className:"combat-stat-row",children:[a.jsx("span",{className:"cs-label",children:"🎯 Crit"}),a.jsxs("span",{className:"cs-value",children:[Math.round(n.critChance*100),"%"]})]}),o>1&&a.jsxs("div",{className:"combat-stat-row momentum",children:[a.jsx("span",{className:"cs-label",children:"🔥 Momentum"}),a.jsxs("span",{className:"cs-value",children:[o.toFixed(1),"×"]})]}),a.jsxs("div",{className:"combat-stat-row muted",children:[a.jsx("span",{className:"cs-label",children:"☠ Kills"}),a.jsx("span",{className:"cs-value",children:s})]}),a.jsxs("div",{className:"combat-log-row",children:[a.jsx("button",{className:`low-energy-btn ${i?"active":""}`,onClick:c,title:"Low Energy Mode",children:"💙 Low E"}),a.jsx(kf,{log:d})]})]}),a.jsx("style",{children:`
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
      `})]})}const Wt={goldSmall:500,goldLarge:5e3,instantKill:!0};function Nf({onAddGold:e,onInstantKill:t}){const[n,r]=j.useState(!1),[l,o]=j.useState("");function i(m){o(m),setTimeout(()=>o(""),1500)}function s(){e(Wt.goldSmall),i(`+${Wt.goldSmall} gold`)}function c(){e(Wt.goldLarge),i(`+${Wt.goldLarge} gold`)}function d(){t(),i("Monster slain!")}return a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"dev-toggle",onClick:()=>r(m=>!m),title:"Dev Panel (disable in devConfig.js)",children:"🛠"}),n&&a.jsxs("div",{className:"dev-panel",children:[a.jsxs("div",{className:"dev-header",children:[a.jsx("span",{className:"dev-title",children:"🛠 DEV MODE"}),a.jsx("span",{className:"dev-hint",children:"Set DEV_MODE=false to hide"}),a.jsx("button",{className:"dev-close",onClick:()=>r(!1),children:"×"})]}),l&&a.jsx("div",{className:"dev-flash",children:l}),a.jsxs("div",{className:"dev-actions",children:[a.jsxs("button",{className:"dev-btn gold",onClick:s,children:["💰 +",Wt.goldSmall," Gold"]}),a.jsxs("button",{className:"dev-btn gold-big",onClick:c,children:["💰💰 +",Wt.goldLarge," Gold"]}),a.jsx("button",{className:"dev-btn kill",onClick:d,children:"☠ Instant Kill"})]}),a.jsxs("div",{className:"dev-note",children:["Edit ",a.jsx("code",{children:"src/devConfig.js"})," to configure or disable."]})]}),a.jsx("style",{children:`
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
      `})]})}const ir={LOW:{label:"Low",color:"#6C8EBF",icon:"○",xpMult:.8},MEDIUM:{label:"Medium",color:"#F5A623",icon:"◐",xpMult:1},HIGH:{label:"High",color:"#FF6584",icon:"●",xpMult:1.3},URGENT:{label:"Urgent",color:"#FF3860",icon:"⚡",xpMult:1.6}},sr={XS:{label:"Quick (5m)",minutes:5,baseXP:20},S:{label:"Short (15m)",minutes:15,baseXP:40},M:{label:"Medium (30m)",minutes:30,baseXP:75},L:{label:"Long (1h)",minutes:60,baseXP:140},XL:{label:"Deep (2h+)",minutes:120,baseXP:250}},jf=[{id:"quick_start",name:"Quick Start",description:"Earn +20 XP bonus for starting any task within 5 minutes of viewing it.",icon:"⚡",effect_type:"xp_bonus_on_start",effect_value:20,cost:1},{id:"deep_focus",name:"Deep Focus",description:"Focus sessions earn +15% more XP.",icon:"🔮",effect_type:"xp_mult_focus",effect_value:.15,cost:1},{id:"second_wind",name:"Second Wind",description:"Completing an overdue task gives full XP instead of reduced.",icon:"🌬️",effect_type:"no_overdue_penalty",effect_value:!0,cost:2},{id:"subtask_master",name:"Subtask Master",description:"Subtask XP increased by 50%.",icon:"📋",effect_type:"subtask_xp_mult",effect_value:.5,cost:1},{id:"streak_shield",name:"Streak Shield",description:"Once per week, missing a daily will not break your streak.",icon:"🛡️",effect_type:"streak_forgiveness",effect_value:1,cost:2}],ss=[{id:"task-1",title:"Review project proposal",notes:"Check the Q3 roadmap and leave comments before the team meeting.",dueAt:new Date(Date.now()+2*60*60*1e3).toISOString(),priority:"HIGH",effort:"M",status:"pending",tags:["work"],subtasks:[{id:"st-1a",title:"Read through executive summary",done:!0},{id:"st-1b",title:"Add inline comments",done:!1},{id:"st-1c",title:"Write summary feedback",done:!1}],createdAt:new Date(Date.now()-24*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-2",title:"Reply to Sarah's email",notes:"",dueAt:new Date(Date.now()+30*60*1e3).toISOString(),priority:"URGENT",effort:"XS",status:"pending",tags:["work","comms"],subtasks:[],createdAt:new Date(Date.now()-60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-3",title:"Grocery run",notes:"Pick up ingredients for the week. Check the list on the fridge.",dueAt:new Date(Date.now()+5*60*60*1e3).toISOString(),priority:"MEDIUM",effort:"S",status:"pending",tags:["personal","errands"],subtasks:[{id:"st-3a",title:"Check fridge for what's needed",done:!1},{id:"st-3b",title:"Go to store",done:!1}],createdAt:new Date(Date.now()-2*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-4",title:"Do 20-min stretching routine",notes:"Back has been tight — do the hip flexor and shoulder opener sequences.",dueAt:new Date(Date.now()-60*60*1e3).toISOString(),priority:"LOW",effort:"XS",status:"pending",tags:["health"],subtasks:[],createdAt:new Date(Date.now()-5*60*60*1e3).toISOString(),completedAt:null,isOverdue:!0}],cs={id:"user-1",displayName:"Adventurer",level:3,xp:340,xpToNext:500,gold:127,streak:5,talentPoints:1,unlockedTalents:["quick_start"],title:"Aspiring Chronicler"},us=[{id:"hist-1",title:"Morning standup notes",completedAt:new Date(Date.now()-3*60*60*1e3).toISOString(),xpEarned:40,goldEarned:8},{id:"hist-2",title:"Send weekly update to manager",completedAt:new Date(Date.now()-5*60*60*1e3).toISOString(),xpEarned:75,goldEarned:15}],io={work:"#4FC3F7",personal:"#B39DDB",health:"#69F0AE",errands:"#F5A623",comms:"#FF6584",school:"#FFD54F"};function Pu(e,t=[]){const n=sr[e.effort]||sr.M,r=ir[e.priority]||ir.MEDIUM;let l=n.baseXP,o=Math.round(l*r.xpMult);const i=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,s=t.includes("second_wind");i&&!s?o=Math.round(o*.6):i||(o=Math.round(o*1.1));const c=Math.round(o*.2);return{xp:o,gold:c,isOverdue:i}}function _f(e=[]){return{xp:e.includes("subtask_master")?Math.round(12*1.5):12,gold:2}}function Cf(e,t,n=[]){const r=Math.round(e*2.5),l=n.includes("deep_focus")?1.15:1,o=t?1.25:.7,i=Math.round(r*l*o),s=Math.round(i*.15);return{xp:i,gold:s}}function so(e){return Math.round(200*Math.pow(e,1.4))}function Ef(e,t,n){let r=e,l=t+n,o=!1,i=0;for(;l>=so(r);)l-=so(r),r+=1,o=!0,i+=1;return{level:r,xp:l,xpToNext:so(r),leveledUp:o,talentPointsEarned:i}}function zf(e){if(!e)return null;const t=new Date(e)-new Date,n=Math.abs(t);if(n<60*1e3)return t<0?"Just overdue":"Due now";if(n<60*60*1e3){const l=Math.round(n/6e4);return t<0?`${l}m overdue`:`in ${l}m`}if(n<24*60*60*1e3){const l=Math.round(n/36e5);return t<0?`${l}h overdue`:`in ${l}h`}const r=Math.round(n/864e5);return t<0?`${r}d overdue`:`in ${r}d`}function It(){return`${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Tf(e){const t={URGENT:0,HIGH:1,MEDIUM:2,LOW:3};return[...e].sort((n,r)=>{const l=n.isOverdue||n.dueAt&&new Date(n.dueAt)<new Date,o=r.isOverdue||r.dueAt&&new Date(r.dueAt)<new Date;if(l!==o)return l?-1:1;const i=(t[n.priority]||2)-(t[r.priority]||2);return i!==0?i:n.dueAt&&r.dueAt?new Date(n.dueAt)-new Date(r.dueAt):0})}function Pf({task:e,userTalents:t=[],onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:i,index:s=0}){var S;const[c,d]=j.useState(!1),[m,g]=j.useState(!1),[v,b]=j.useState(!1),h=ir[e.priority]||ir.MEDIUM,y=sr[e.effort]||sr.M,M=zf(e.dueAt),f=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,u=e.subtasks.filter(w=>w.done).length,p=e.subtasks.length,{xp:x,gold:k}=Pu(e,t);function E(){g(!0),setTimeout(()=>n(e.id),400)}return a.jsxs("div",{className:`task-card ${m?"completing":""} ${f?"overdue":""}`,style:{animationDelay:`${s*60}ms`,"--priority-color":h.color},children:[a.jsx("div",{className:"priority-stripe",style:{background:h.color}}),a.jsxs("div",{className:"task-card-inner",children:[a.jsxs("div",{className:"task-main-row",children:[a.jsx("button",{className:`task-checkbox ${m?"completing":""}`,onClick:E,title:"Mark complete","aria-label":"Complete task",children:m&&a.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"✓"})}),a.jsxs("div",{className:"task-title-block",onClick:()=>d(w=>!w),children:[a.jsx("div",{className:"task-title",children:e.title}),e.notes&&!c&&a.jsx("div",{className:"task-notes-preview",children:e.notes})]}),a.jsxs("div",{className:"task-actions-inline",children:[i&&a.jsx("button",{className:"btn btn-ghost task-action-btn",onClick:()=>i(e),title:"Start focus session",children:"🔮"}),a.jsx("button",{className:`task-expand-btn ${c?"open":""}`,onClick:()=>d(w=>!w),"aria-label":"Toggle details",children:"▾"})]})]}),a.jsxs("div",{className:"task-meta-row",children:[a.jsxs("span",{className:"badge",style:{background:`${h.color}18`,color:h.color,border:`1px solid ${h.color}30`},children:[h.icon," ",h.label]}),a.jsxs("span",{className:"badge",style:{background:"var(--bg-elevated)",color:"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["⏱ ",y.label]}),M&&a.jsxs("span",{className:`badge ${f?"overdue-badge":"due-badge"}`,children:[f?"⚠ ":"📅 ",M]}),(S=e.tags)==null?void 0:S.map(w=>a.jsx("span",{className:"tag-chip",style:{background:`${io[w]||"#888"}20`,color:io[w]||"#888",border:`1px solid ${io[w]||"#888"}30`},children:w},w)),p>0&&a.jsxs("span",{className:"badge",style:{background:u===p?"var(--green-dim)":"var(--bg-elevated)",color:u===p?"var(--green)":"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["☑ ",u,"/",p]}),a.jsxs("span",{className:"reward-preview",children:["+",x," XP · +",k," 💰"]})]}),c&&a.jsxs("div",{className:"task-expanded animate-in",children:[e.notes&&a.jsx("div",{className:"task-notes",children:e.notes}),p>0&&a.jsxs("div",{className:"subtask-list",children:[a.jsx("div",{className:"subtask-header",children:"Steps"}),e.subtasks.map(w=>a.jsxs("div",{className:`subtask-item ${w.done?"done":""}`,onClick:()=>r(e.id,w.id),children:[a.jsx("span",{className:"subtask-check",children:w.done?"✓":"○"}),a.jsx("span",{className:"subtask-title",children:w.title}),!w.done&&a.jsx("span",{className:"subtask-xp",children:"+12 XP"})]},w.id))]}),f&&a.jsxs("div",{className:"recovery-banner",children:[a.jsx("span",{children:"🌱"}),a.jsxs("div",{children:[a.jsx("div",{className:"recovery-title",children:"No worries — let's get back on track."}),a.jsxs("div",{className:"recovery-subtitle",children:["Completing it still earns you ",Math.round(x*.6)," XP. Or reschedule if needed."]})]})]}),a.jsxs("div",{className:"task-action-row",children:[a.jsxs("button",{className:"btn btn-success",onClick:E,children:["✓ Complete (+",x," XP)"]}),i&&a.jsx("button",{className:"btn btn-secondary",onClick:()=>i(e),children:"🔮 Focus"}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>l(e.id,2),children:"⏰ Snooze 2h"}),v?a.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[a.jsx("button",{className:"btn btn-danger",onClick:()=>o(e.id),children:"Delete"}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>b(!1),children:"Cancel"})]}):a.jsx("button",{className:"btn btn-ghost",onClick:()=>b(!0),style:{marginLeft:"auto"},children:"🗑"})]})]})]}),a.jsx("style",{children:`
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
      `})]})}const Df={title:"",notes:"",priority:"MEDIUM",effort:"S",dueAt:"",tags:[],subtasks:[]};function Mf({onAdd:e,onClose:t}){const[n,r]=j.useState(Df),[l,o]=j.useState(!1),[i,s]=j.useState(""),c=j.useRef(null);j.useEffect(()=>{var h;(h=c.current)==null||h.focus()},[]);function d(h){h.preventDefault(),n.title.trim()&&(e({...n,dueAt:n.dueAt?new Date(n.dueAt).toISOString():null,subtasks:n.subtasks}),t())}function m(){i.trim()&&(r(h=>({...h,subtasks:[...h.subtasks,{id:It(),title:i.trim(),done:!1}]})),s(""))}function g(h){r(y=>({...y,subtasks:y.subtasks.filter(M=>M.id!==h)}))}function v(h){r(y=>({...y,tags:y.tags.includes(h)?y.tags.filter(M=>M!==h):[...y.tags,h]}))}const b=["work","personal","health","errands","comms","school"];return a.jsxs("div",{className:"modal-overlay",onClick:h=>{h.target===h.currentTarget&&t()},children:[a.jsxs("div",{className:"modal-box",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"font-display",style:{color:"var(--gold)"},children:"⚔ New Quest"}),a.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:"1.2rem"},children:"×"})]}),a.jsxs("form",{onSubmit:d,className:"add-task-form",children:[a.jsx("div",{className:"form-group",children:a.jsx("input",{ref:c,type:"text",placeholder:"What needs to be done?",value:n.title,onChange:h=>r(y=>({...y,title:h.target.value})),className:"title-input",required:!0})}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Priority"}),a.jsx("div",{className:"priority-selector",children:Object.entries(ir).map(([h,y])=>a.jsxs("button",{type:"button",className:`priority-option ${n.priority===h?"active":""}`,style:{"--pcolor":y.color},onClick:()=>r(M=>({...M,priority:h})),children:[a.jsx("span",{children:y.icon}),a.jsx("span",{children:y.label})]},h))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"How long will this take?"}),a.jsx("div",{className:"effort-selector",children:Object.entries(sr).map(([h,y])=>a.jsx("button",{type:"button",className:`effort-option ${n.effort===h?"active":""}`,onClick:()=>r(M=>({...M,effort:h})),children:y.label},h))})]}),a.jsxs("button",{type:"button",className:"advanced-toggle",onClick:()=>o(h=>!h),children:[a.jsx("span",{children:l?"▾":"▸"}),a.jsx("span",{children:l?"Fewer options":"More options (notes, due date, subtasks, tags)"})]}),l&&a.jsxs("div",{className:"advanced-section animate-in",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Notes"}),a.jsx("textarea",{placeholder:"Any details or context...",value:n.notes,onChange:h=>r(y=>({...y,notes:h.target.value})),rows:3})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Due date"}),a.jsx("input",{type:"datetime-local",value:n.dueAt,onChange:h=>r(y=>({...y,dueAt:h.target.value}))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Tags"}),a.jsx("div",{className:"tag-selector",children:b.map(h=>a.jsx("button",{type:"button",className:`tag-option ${n.tags.includes(h)?"active":""}`,onClick:()=>v(h),children:h},h))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Break it down (subtasks)"}),a.jsxs("div",{className:"subtask-add-row",children:[a.jsx("input",{type:"text",placeholder:"Add a step...",value:i,onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),m())}}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:m,children:"+ Add"})]}),n.subtasks.length>0&&a.jsx("div",{className:"subtask-preview-list",children:n.subtasks.map(h=>a.jsxs("div",{className:"subtask-preview-item",children:[a.jsx("span",{children:"○"}),a.jsx("span",{style:{flex:1},children:h.title}),a.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>g(h.id),children:"×"})]},h.id))})]})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.title.trim(),children:"⚔ Add Quest"})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function Lf({user:e,tasks:t,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onAddTask:i,onStartFocus:s}){const[c,d]=j.useState(!1),[m,g]=j.useState("all"),[v,b]=j.useState(""),h=j.useMemo(()=>Tf(t.filter(x=>x.status==="pending")),[t]),y=h.filter(x=>x.isOverdue||x.dueAt&&new Date(x.dueAt)<new Date);h.filter(x=>!x.isOverdue&&!(x.dueAt&&new Date(x.dueAt)<new Date));const M=j.useMemo(()=>m==="overdue"?y:m==="high"?h.filter(x=>["HIGH","URGENT"].includes(x.priority)):h,[m,h,y]);function f(x){x.preventDefault(),v.trim()&&(i({title:v.trim(),priority:"MEDIUM",effort:"S"}),b(""))}const u=h[0],p=(()=>{const x=new Date().getHours();return x<12?"Good morning":x<17?"Good afternoon":"Good evening"})();return a.jsxs("div",{className:"dashboard",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"dashboard-title font-display",children:[p,", ",e.displayName]}),a.jsxs("div",{className:"dashboard-subtitle",children:[h.length===0?"🎉 All clear! You're on top of everything.":`You have ${h.length} quest${h.length!==1?"s":""} pending.`,y.length>0&&a.jsxs("span",{className:"overdue-warning",children:[" · ",y.length," overdue"]})]})]}),a.jsx("button",{className:"btn btn-primary add-quest-btn",onClick:()=>d(!0),children:"⚔ New Quest"})]}),u&&a.jsxs("div",{className:"next-action-spotlight",children:[a.jsxs("div",{className:"next-action-label",children:[a.jsx("span",{className:"pulse-dot"}),"NEXT BEST ACTION"]}),a.jsxs("div",{className:"next-action-content",children:[a.jsx("div",{className:"next-action-title",children:u.title}),a.jsxs("div",{className:"next-action-meta",children:[u.effort&&a.jsxs("span",{children:["~",u.effort==="XS"?"5":u.effort==="S"?"15":u.effort==="M"?"30":u.effort==="L"?"60":"120","min"]}),u.dueAt&&a.jsxs("span",{children:["· due ",new Date(u.dueAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]}),a.jsxs("div",{className:"next-action-btns",children:[a.jsx("button",{className:"btn btn-primary",onClick:()=>s(u),children:"🔮 Start Focus"}),a.jsx("button",{className:"btn btn-success",onClick:()=>n(u.id),children:"✓ Complete"})]})]}),a.jsxs("form",{onSubmit:f,className:"quick-add-bar",children:[a.jsx("input",{type:"text",placeholder:"Quick add a task… (press Enter)",value:v,onChange:x=>b(x.target.value),className:"quick-add-input"}),a.jsx("button",{type:"submit",className:"btn btn-secondary",children:"Add"}),a.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>d(!0),children:"+ Details"})]}),a.jsx("div",{className:"filter-tabs",children:[{id:"all",label:`All (${h.length})`},{id:"high",label:`High Priority (${h.filter(x=>["HIGH","URGENT"].includes(x.priority)).length})`},{id:"overdue",label:`Overdue (${y.length})`,danger:y.length>0}].map(x=>a.jsx("button",{className:`filter-tab ${m===x.id?"active":""} ${x.danger?"danger":""}`,onClick:()=>g(x.id),children:x.label},x.id))}),a.jsx("div",{className:"task-list",children:M.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"🌟"}),a.jsx("div",{className:"empty-title",children:"Nothing here!"}),a.jsx("div",{className:"empty-sub",children:m==="overdue"?"No overdue tasks — great work!":"Add your first quest to get started."})]}):M.map((x,k)=>a.jsx(Pf,{task:x,userTalents:e.unlockedTalents,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:s,index:k},x.id))}),c&&a.jsx(Mf,{onAdd:i,onClose:()=>d(!1)}),a.jsx("style",{children:`
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
      `})]})}const If=[{label:"5 min",minutes:5,emoji:"⚡"},{label:"15 min",minutes:15,emoji:"🌊"},{label:"25 min",minutes:25,emoji:"🔮"},{label:"45 min",minutes:45,emoji:"🌙"},{label:"60 min",minutes:60,emoji:"⭐"}];function Of({session:e,onStart:t,onPause:n,onResume:r,onStop:l,formatTime:o,tasks:i}){const[s,c]=j.useState(null),[d,m]=j.useState(25),g=e?1-e.secondsLeft/e.totalSeconds:0,v=2*Math.PI*120,b=v*(1-g);if(!e)return a.jsxs("div",{className:"focus-setup",children:[a.jsxs("div",{className:"focus-setup-inner",children:[a.jsx("div",{className:"focus-icon-big",children:"🔮"}),a.jsx("h1",{className:"font-display focus-heading",children:"Focus Session"}),a.jsxs("p",{className:"focus-subtitle",children:["Clear your mind. One task. One timer.",a.jsx("br",{}),"Earn bonus XP for every focused minute."]}),i.length>0&&a.jsxs("div",{className:"focus-section",children:[a.jsx("div",{className:"focus-section-label",children:"Working on"}),a.jsxs("div",{className:"task-picker",children:[a.jsx("button",{className:`task-pick-option ${s?"":"active"}`,onClick:()=>c(null),children:"Free focus (no task)"}),i.slice(0,5).map(u=>a.jsx("button",{className:`task-pick-option ${(s==null?void 0:s.id)===u.id?"active":""}`,onClick:()=>c(u),children:u.title},u.id))]})]}),a.jsxs("div",{className:"focus-section",children:[a.jsx("div",{className:"focus-section-label",children:"Duration"}),a.jsx("div",{className:"preset-grid",children:If.map(u=>a.jsxs("button",{className:`preset-btn ${d===u.minutes?"active":""}`,onClick:()=>m(u.minutes),children:[a.jsx("span",{className:"preset-emoji",children:u.emoji}),a.jsx("span",{className:"preset-label",children:u.label})]},u.minutes))})]}),a.jsx("button",{className:"btn btn-primary focus-start-btn",onClick:()=>t(s||{id:"free",title:"Free Focus"},d),children:"🔮 Begin Session"}),a.jsx("div",{className:"focus-tip",children:"💡 Tip: Each minute focused earns 2.5 XP. Complete the session for a 25% bonus."})]}),a.jsx("style",{children:`
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
        `})]});const h=Math.floor(e.secondsLeft/60),y=e.secondsLeft%60,M=Math.round((e.totalSeconds-e.secondsLeft)/60),f=Math.round(M*2.5);return a.jsxs("div",{className:"focus-active",children:[a.jsxs("div",{className:"focus-active-inner",children:[a.jsx("div",{className:"focus-task-name",children:e.taskTitle}),a.jsxs("div",{className:"timer-ring-wrapper",children:[a.jsxs("svg",{viewBox:"0 0 280 280",className:"timer-ring",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:"var(--bg-elevated)",strokeWidth:"12"}),a.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:e.paused?"var(--amber)":"var(--xp-blue)",strokeWidth:"12",strokeLinecap:"round",strokeDasharray:v,strokeDashoffset:b,transform:"rotate(-90 140 140)",style:{transition:"stroke-dashoffset 1s linear, stroke 0.3s"}})]}),a.jsxs("div",{className:"timer-display",children:[a.jsxs("div",{className:"timer-digits",children:[String(h).padStart(2,"0"),":",String(y).padStart(2,"0")]}),a.jsx("div",{className:"timer-status",children:e.paused?"⏸ paused":"● focusing"}),a.jsxs("div",{className:"timer-xp-preview",children:["+",f," XP earned so far"]})]})]}),a.jsxs("div",{className:"focus-controls",children:[e.paused?a.jsx("button",{className:"btn btn-primary focus-ctrl-btn",onClick:r,children:"▶ Resume"}):a.jsx("button",{className:"btn btn-secondary focus-ctrl-btn",onClick:n,children:"⏸ Pause"}),a.jsx("button",{className:"btn btn-success focus-ctrl-btn",onClick:()=>l(!0),children:"✓ Complete"}),a.jsx("button",{className:"btn btn-ghost focus-ctrl-btn",onClick:()=>l(!1),children:"✕ End early"})]}),a.jsx("div",{className:"focus-reminder",children:"Put your phone down. You've got this. 💙"})]}),a.jsx("style",{children:`
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
      `})]})}const Rf=[{id:"first_quest",icon:"⚔️",name:"First Quest",desc:"Completed your first task",earned:!0},{id:"week_streak",icon:"🔥",name:"Week Warrior",desc:"7-day streak",earned:!0},{id:"focus_ten",icon:"🔮",name:"Deep Thinker",desc:"10 focus sessions",earned:!1},{id:"early_bird",icon:"🌅",name:"Early Bird",desc:"Complete a task before 9am",earned:!1},{id:"level_5",icon:"⭐",name:"Rising Star",desc:"Reach Level 5",earned:!1},{id:"hundred_tasks",icon:"🏆",name:"Century",desc:"Complete 100 tasks",earned:!1}];function Ff({user:e,history:t}){const n=t.reduce((l,o)=>l+o.xpEarned,0);t.reduce((l,o)=>l+o.goldEarned,0);const r=Math.round(e.xp/e.xpToNext*100);return a.jsxs("div",{className:"rewards-screen",children:[a.jsxs("div",{className:"rewards-hero",children:[a.jsxs("div",{className:"rewards-avatar",children:[a.jsx("span",{className:"rewards-level font-display",children:e.level}),a.jsx("span",{className:"rewards-level-label",children:"LVL"})]}),a.jsxs("div",{className:"rewards-hero-info",children:[a.jsx("h1",{className:"font-display rewards-name",children:e.displayName}),a.jsx("div",{className:"rewards-title-text",children:e.title}),a.jsxs("div",{className:"xp-section",children:[a.jsxs("div",{className:"xp-section-labels",children:[a.jsx("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:"XP Progress"}),a.jsxs("span",{className:"text-xs text-muted",children:[e.xp," / ",e.xpToNext]})]}),a.jsx("div",{className:"xp-bar-track",children:a.jsx("div",{className:"xp-bar-fill",style:{width:`${r}%`}})}),a.jsxs("div",{className:"text-xs text-muted",style:{marginTop:4},children:[e.xpToNext-e.xp," XP until Level ",e.level+1]})]})]})]}),a.jsx("div",{className:"stats-grid",children:[{icon:"⚡",label:"Current Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Total Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Day Streak",value:`${e.streak}d`,color:"var(--amber)"},{icon:"✅",label:"Tasks Done",value:t.length,color:"var(--green)"},{icon:"🌟",label:"Total XP Earned",value:`${n.toLocaleString()}`,color:"var(--purple)"},{icon:"🎯",label:"Talent Points",value:e.talentPoints,color:"var(--coral)"}].map(l=>a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-card-icon",style:{color:l.color},children:l.icon}),a.jsx("div",{className:"stat-card-value",style:{color:l.color},children:l.value}),a.jsx("div",{className:"stat-card-label",children:l.label})]},l.label))}),a.jsxs("div",{className:"section",children:[a.jsx("h2",{className:"section-title font-display",children:"Achievements"}),a.jsx("div",{className:"badges-grid",children:Rf.map(l=>a.jsxs("div",{className:`badge-card ${l.earned?"earned":"locked"}`,children:[a.jsx("div",{className:"badge-icon",children:l.icon}),a.jsx("div",{className:"badge-name",children:l.name}),a.jsx("div",{className:"badge-desc",children:l.desc}),!l.earned&&a.jsx("div",{className:"badge-lock",children:"🔒"})]},l.id))})]}),a.jsxs("div",{className:"section",children:[a.jsx("h2",{className:"section-title font-display",children:"Recent Completions"}),a.jsx("div",{className:"history-list",children:t.length===0?a.jsx("div",{className:"text-muted",style:{textAlign:"center",padding:"var(--space-6)"},children:"No completed tasks yet. Go conquer something! ⚔️"}):t.slice(0,20).map(l=>a.jsxs("div",{className:"history-item animate-in",children:[a.jsx("div",{className:"history-title",children:l.title}),a.jsx("div",{className:"history-meta",children:a.jsx("span",{className:"text-xs text-muted",children:new Date(l.completedAt).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})}),a.jsxs("div",{className:"history-rewards",children:[a.jsxs("span",{className:"history-xp",children:["+",l.xpEarned," XP"]}),a.jsxs("span",{className:"history-gold",children:["+",l.goldEarned," 💰"]})]})]},l.id))})]}),a.jsx("style",{children:`
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
      `})]})}function Af({user:e,onUnlock:t}){return a.jsxs("div",{className:"talents-screen",children:[a.jsxs("div",{className:"talents-header",children:[a.jsx("h1",{className:"font-display talents-title",children:"Talent Tree"}),a.jsx("div",{className:"talents-subtitle",children:"Unlock perks that make productivity easier — not just look better."}),a.jsxs("div",{className:"talent-points-display",children:[a.jsx("span",{className:"talent-points-icon",children:"🌟"}),a.jsx("span",{className:"talent-points-value",children:e.talentPoints}),a.jsx("span",{className:"talent-points-label",children:"Talent Points Available"})]})]}),a.jsx("div",{className:"talents-grid",children:jf.map(n=>{const r=e.unlockedTalents.includes(n.id),l=e.talentPoints>=n.cost;return a.jsxs("div",{className:`talent-card ${r?"unlocked":""} ${!r&&l?"available":""}`,children:[a.jsx("div",{className:"talent-icon",children:n.icon}),a.jsxs("div",{className:"talent-info",children:[a.jsx("div",{className:"talent-name",children:n.name}),a.jsx("div",{className:"talent-desc",children:n.description})]}),a.jsx("div",{className:"talent-action",children:r?a.jsxs("div",{className:"talent-status unlocked-status",children:[a.jsx("span",{children:"✓"})," Unlocked"]}):a.jsxs("button",{className:`btn ${l?"btn-primary":"btn-secondary"} talent-unlock-btn`,onClick:()=>t(n.id,n.cost),disabled:!l,children:["🌟 ",n.cost," ",n.cost===1?"point":"points"]})})]},n.id)})}),a.jsxs("div",{className:"talents-tip",children:[a.jsx("span",{children:"💡"}),a.jsx("span",{children:"You earn Talent Points by leveling up. Every level grants 1 point. Keep completing quests to unlock more perks!"})]}),a.jsx("style",{children:`
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
      `})]})}function vl(e,t){return t==null?"—":["critChance","critDamage","speed"].includes(e)?`${t>=0?"+":""}${(t*100).toFixed(0)}%`:`${t>=0?"+":""}${t}`}const xl={attack:{label:"Attack",icon:"⚔"},speed:{label:"Atk Speed",icon:"⚡"},critChance:{label:"Crit Chance",icon:"🎯"},critDamage:{label:"Crit Dmg",icon:"💥"},focus:{label:"Focus",icon:"🔮"},resilience:{label:"Resilience",icon:"🛡"}};function $f({stat:e,oldVal:t=0,newVal:n=0}){const r=n-t,l=["critChance","critDamage","speed"].includes(e),o=xl[e]||{label:e,icon:"•"},i=r===0?"=":l?`${r>0?"+":""}${(r*100).toFixed(0)}%`:`${r>0?"+":""}${r}`,s=r>0?"var(--green)":r<0?"var(--coral)":"var(--text-muted)",c=r>0?"var(--green-dim)":r<0?"var(--coral-dim)":"var(--bg-elevated)";return a.jsxs("div",{className:"diff-row",children:[a.jsx("span",{className:"diff-icon",children:o.icon}),a.jsx("span",{className:"diff-label",children:o.label}),a.jsx("span",{className:"diff-old",children:vl(e,t)}),a.jsx("span",{className:"diff-arrow",children:"→"}),a.jsx("span",{className:"diff-new",children:vl(e,n)}),a.jsx("span",{className:"diff-delta",style:{color:s,background:c},children:i})]})}function Uf({item:e,inventoryIndex:t,onSelect:n,onSell:r}){const l=De[e.rarity]||De.common,o=ar(e);return a.jsxs("div",{className:"bag-tile",style:{"--rc":l.color,borderColor:l.color+"55"},onClick:()=>n(e,t),children:[a.jsxs("div",{className:"bt-icon-wrap",style:{background:l.bg},children:[a.jsx("span",{className:"bt-icon",children:e.icon}),a.jsx("span",{className:"bt-rarity-dot",style:{background:l.color}})]}),a.jsxs("div",{className:"bt-info",children:[a.jsx("div",{className:"bt-name",style:{color:l.color},children:e.name}),a.jsx("div",{className:"bt-slot",children:e.slot})]}),a.jsxs("div",{className:"bt-sell-preview",children:["💰",o,"g"]})]})}function Bf({slotMeta:e,item:t,onUnequip:n,onSell:r}){const l=t?De[t.rarity]||De.common:null,o=t?ar(t):0;return a.jsxs("div",{className:`equip-slot-card ${t?"has-item":"empty"}`,style:t?{borderColor:l.color+"55"}:{},children:[a.jsxs("div",{className:"esc-slot-label",children:[e.icon," ",e.label]}),t?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"esc-item-top",children:[a.jsx("span",{className:"esc-item-icon",children:t.icon}),a.jsxs("div",{className:"esc-item-info",children:[a.jsx("div",{className:"esc-item-name",style:{color:l.color},children:t.name}),a.jsx("span",{className:"rarity-badge",style:{background:l.bg,color:l.color},children:l.label})]})]}),a.jsx("div",{className:"esc-stats",children:Object.entries(t.stats||{}).map(([i,s])=>{var c;return a.jsxs("span",{className:"esc-stat-chip",children:[(c=xl[i])==null?void 0:c.icon," ",vl(i,s)]},i)})}),t.flavor&&a.jsxs("div",{className:"esc-flavor",children:['"',t.flavor,'"']}),a.jsxs("div",{className:"esc-actions",children:[a.jsx("button",{className:"btn btn-ghost esc-btn",onClick:()=>n(),children:"Unequip"}),a.jsxs("button",{className:"btn btn-secondary esc-btn sell-btn",onClick:()=>r(),children:["💰 Sell ",o,"g"]})]})]}):a.jsx("div",{className:"esc-empty",children:"Empty slot"})]})}function Hf({item:e,inventoryIndex:t,equipped:n,onEquip:r,onSell:l,onClose:o}){if(!e)return null;const i=De[e.rarity]||De.common,s=ar(e),c=e.slot==="ring"?n.ring?n.ring2?"ring":"ring2":"ring":e.slot,d=n[c],m=d?Lt[d]:null,g=m?De[m.rarity]||De.common:null,v=new Set([...Object.keys(e.stats||{}),...Object.keys((m==null?void 0:m.stats)||{})]),b=e.stats||{},h=(m==null?void 0:m.stats)||{},y=(b.attack||0)-(h.attack||0),M=(b.speed||0)-(h.speed||0),f=y>0||M>0||Object.keys(b).some(u=>(b[u]||0)>(h[u]||0));return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"drawer-backdrop",onClick:o}),a.jsxs("div",{className:"compare-drawer",children:[a.jsx("div",{className:"drawer-handle",onClick:o}),a.jsxs("div",{className:"cd-header",children:[a.jsxs("div",{className:"cd-new-item",children:[a.jsx("span",{className:"cd-item-icon",style:{background:i.bg},children:e.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"cd-item-name",style:{color:i.color},children:e.name}),a.jsxs("div",{className:"cd-slot-hint",children:[a.jsx("span",{className:"rarity-badge",style:{background:i.bg,color:i.color},children:i.label}),a.jsxs("span",{className:"slot-badge",children:["→ ",c]}),f&&a.jsx("span",{className:"upgrade-badge",children:"▲ UPGRADE"})]})]})]}),a.jsx("button",{className:"drawer-close btn btn-ghost",onClick:o,children:"✕"})]}),a.jsxs("div",{className:"cd-compare-section",children:[a.jsx("div",{className:"cd-compare-headers",children:a.jsx("div",{className:"cd-col-current",children:m?a.jsxs("div",{className:"cd-equipped-label",children:[a.jsx("span",{className:"cd-equipped-icon",style:{color:g.color},children:m.icon}),a.jsx("span",{style:{color:g.color},children:m.name}),a.jsx("span",{className:"cd-equipped-tag",children:"Equipped"})]}):a.jsx("div",{className:"cd-equipped-label cd-empty-slot",children:a.jsx("span",{children:"— Empty slot —"})})})}),a.jsx("div",{className:"cd-diff-rows",children:[...v].map(u=>{var p,x;return a.jsx($f,{stat:u,oldVal:((p=m==null?void 0:m.stats)==null?void 0:p[u])||0,newVal:((x=e.stats)==null?void 0:x[u])||0},u)})}),(e.effects||[]).length>0&&a.jsxs("div",{className:"cd-effects",children:[a.jsx("div",{className:"cd-effects-label",children:"✦ Special Effects"}),(e.effects||[]).map((u,p)=>a.jsxs("div",{className:"cd-effect-row",children:[a.jsx("span",{children:u.type==="task_xp_bonus"?"📚 Task XP":u.type==="focus_session_bonus"?"🔮 Focus XP":u.type}),a.jsxs("span",{style:{color:"var(--green)",fontWeight:800},children:["+",(u.value*100).toFixed(0),"%"]})]},p))]}),e.flavor&&a.jsxs("div",{className:"cd-flavor",children:['"',e.flavor,'"']})]}),a.jsxs("div",{className:"cd-actions",children:[a.jsx("button",{className:"btn btn-primary cd-equip-btn",onClick:()=>r(e,t,c),children:"⚔ Equip"}),a.jsxs("button",{className:"btn btn-secondary cd-sell-btn",onClick:()=>l(e,t,s),children:["💰 Sell for ",s,"g"]})]}),a.jsx("style",{children:`
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
        `})]})]})}function Vf({combat:e,userLevel:t,onGoldEarned:n}){const[r,l]=j.useState("bag"),[o,i]=j.useState(null),[s,c]=j.useState(""),{equipped:d,inventory:m,equipItem:g,unequipItem:v,sellItem:b,sellEquipped:h,playerStats:y}=e,{stats:M}=zu(d),f=Tu(y),u=m.map((T,z)=>({item:Lt[T],idx:z})).filter(T=>T.item);function p(T,z){i({item:T,inventoryIndex:z})}function x(T,z,I){g(T.id,I),i(null)}function k(T,z,I){b(T.id,z,()=>{n&&n(I)}),c(`Sold ${T.name} for ${I}g`),setTimeout(()=>c(""),2500),i(null)}function E(T){const z=d[T];if(!z)return;const I=Lt[z],ne=ar(I);h(T,()=>{n&&n(ne)}),c(`Sold ${I.name} for ${ne}g`),setTimeout(()=>c(""),2500)}function S(T){v(T)}const w=Object.values(d).filter(Boolean).length;return a.jsxs("div",{className:"inventory-screen",children:[a.jsxs("div",{className:"inv-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"font-display inv-title",children:"Equipment"}),a.jsxs("div",{className:"inv-subtitle",children:[w,"/8 slots filled"]})]}),a.jsxs("div",{className:"inv-dps-badge",children:[a.jsx("span",{children:"⚔"}),a.jsxs("span",{children:[f," DPS"]})]})]}),s&&a.jsxs("div",{className:"sell-flash animate-in",children:["💰 ",s]}),Object.values(M).some(T=>T!==0)&&a.jsx("div",{className:"gear-summary",children:Object.entries(M).map(([T,z])=>{var I,ne;return z!==0?a.jsxs("div",{className:"gear-stat-chip",children:[a.jsx("span",{className:"gs-icon",children:(I=xl[T])==null?void 0:I.icon}),a.jsx("span",{className:"gs-name",children:((ne=xl[T])==null?void 0:ne.label)||T}),a.jsx("span",{className:"gs-val",children:vl(T,z)})]},T):null})}),a.jsx("div",{className:"inv-tabs",children:[{id:"bag",label:`🎒 Bag (${m.length})`},{id:"equipped",label:`🛡 Equipped (${w}/8)`}].map(T=>a.jsx("button",{className:`filter-tab ${r===T.id?"active":""}`,onClick:()=>l(T.id),children:T.label},T.id))}),r==="bag"&&a.jsx("div",{className:"inv-bag animate-in",children:u.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"🎒"}),a.jsx("div",{className:"empty-title",children:"Bag is empty"}),a.jsx("div",{className:"empty-sub",children:"Defeat monsters or buy from the Shop to earn gear."})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"bag-hint",children:"Tap any item to compare & equip"}),a.jsx("div",{className:"bag-grid",children:u.map(({item:T,idx:z})=>a.jsx(Uf,{item:T,inventoryIndex:z,onSelect:p,onSell:I=>k(I,z,ar(I))},`${T.id}-${z}`))})]})}),r==="equipped"&&a.jsx("div",{className:"slots-grid animate-in",children:sf.map(T=>a.jsx(Bf,{slotMeta:T,item:d[T.id]?Lt[d[T.id]]:null,onUnequip:()=>S(T.id),onSell:()=>E(T.id)},T.id))}),o&&a.jsx(Hf,{item:o.item,inventoryIndex:o.inventoryIndex,equipped:d,onEquip:x,onSell:k,onClose:()=>i(null)}),a.jsx("style",{children:`
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
      `})]})}const Wf={shop_id:"starter_shop",name:"Wandering Merchant",icon:"🛒",items:[{item_id:"ring_focus_1",price:80,currency:"gold"},{item_id:"ring_speed_1",price:80,currency:"gold"},{item_id:"boots_speed_1",price:90,currency:"gold"},{item_id:"gloves_grip_1",price:100,currency:"gold"},{item_id:"helmet_steel_1",price:110,currency:"gold"},{item_id:"chest_iron_1",price:140,currency:"gold"},{item_id:"legs_swift_1",price:100,currency:"gold"}]},ds=[[{item_id:"ring_focus_2",price:220,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"},{item_id:"helmet_clarity_1",price:200,currency:"gold"}],[{item_id:"boots_speed_2",price:200,currency:"gold"},{item_id:"legs_endure_1",price:190,currency:"gold"},{item_id:"ring_focus_2",price:220,currency:"gold"}],[{item_id:"necklace_resolve_1",price:350,currency:"gold"},{item_id:"chest_focus_1",price:400,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"}]],Qf=24;function ps(){const e=36e5*Qf,t=Date.now();return(Math.floor(t/e)+1)*e-t}const Qt=50;function Xf(e){const t=Math.floor(e/36e5),n=Math.floor(e%36e5/6e4);return`${t}h ${n}m`}function fs({itemId:e,price:t,currency:n,userGold:r,onBuy:l,owned:o}){const i=Lt[e];if(!i)return null;const s=De[i.rarity]||De.common,c=r>=t,[d,m]=j.useState(!1),[g,v]=j.useState(!1);function b(){if(!c||d||g)return;m(!0),l(e,t)&&v(!0),setTimeout(()=>m(!1),300)}return a.jsxs("div",{className:`shop-item ${g?"bought":""} ${c?"":"cant-afford"}`,style:{"--rc":s.color,borderColor:g?"var(--green)":s.color},children:[a.jsxs("div",{className:"shop-item-top",children:[a.jsx("span",{className:"shop-item-icon",children:i.icon}),a.jsxs("div",{className:"shop-item-header",children:[a.jsx("div",{className:"shop-item-name",style:{color:s.color},children:i.name}),a.jsx("span",{className:"rarity-badge",style:{background:s.bg,color:s.color},children:s.label})]})]}),a.jsx("div",{className:"shop-item-stats",children:Object.entries(i.stats||{}).map(([h,y])=>a.jsxs("span",{className:"shop-stat-chip",children:[a.jsx("span",{className:"ssc-name",children:h}),a.jsx("span",{className:"ssc-val",children:h==="critChance"||h==="critDamage"||h==="speed"?`+${(y*100).toFixed(0)}%`:`+${y}`})]},h))}),i.flavor&&a.jsxs("div",{className:"shop-item-flavor",children:['"',i.flavor,'"']}),a.jsxs("div",{className:"shop-item-footer",children:[a.jsxs("div",{className:`shop-price ${c?"":"unaffordable"}`,children:["💰 ",t," gold"]}),g?a.jsx("div",{className:"shop-bought-badge",children:"✓ Added to bag"}):a.jsx("button",{className:`btn ${c?"btn-primary":"btn-secondary"} shop-buy-btn`,onClick:b,disabled:!c||d,children:d?"...":c?"Buy":"Need gold"})]})]})}function Kf({userGold:e,onBuy:t,onRefreshSpend:n}){const[r,l]=j.useState(ps()),[o,i]=j.useState(0),[s,c]=j.useState(!1),d=(()=>{const g=Math.floor(Date.now()/864e5);return ds[(g+o)%ds.length]})();j.useEffect(()=>{const g=setInterval(()=>l(ps()),6e4);return()=>clearInterval(g)},[]);function m(){e<Qt||(n(Qt),i(g=>g+1),c(!0),setTimeout(()=>c(!1),600))}return a.jsxs("div",{className:"shop-screen",children:[a.jsxs("div",{className:"shop-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"font-display shop-title",children:"🛒 Shop"}),a.jsx("div",{className:"shop-subtitle",children:"Gear up. The monsters aren't getting weaker."})]}),a.jsxs("div",{className:"gold-display",children:[a.jsx("span",{children:"💰"}),a.jsx("span",{className:"gold-amount",children:e}),a.jsx("span",{className:"gold-label",children:"gold"})]})]}),a.jsxs("div",{className:"shop-section",children:[a.jsxs("div",{className:"shop-section-header",children:[a.jsxs("div",{className:"shop-section-title",children:[a.jsx("span",{className:"section-icon",children:"⭐"}),a.jsx("span",{className:"font-display",children:"Daily Arrivals"}),a.jsx("span",{className:"recommended-tag",children:"RECOMMENDED"})]}),a.jsxs("div",{className:"refresh-row",children:[a.jsxs("div",{className:"refresh-countdown",children:["🔄 Free in ",Xf(r)]}),a.jsxs("button",{className:`refresh-btn ${s?"flash":""} ${e<Qt?"cant-afford":""}`,onClick:m,disabled:e<Qt,title:`Spend ${Qt} gold to refresh the shop now`,children:["💰 ",Qt,"g — Refresh now"]})]})]}),a.jsx("div",{className:`shop-items-grid ${s?"flash-grid":""}`,children:d.map(g=>a.jsx(fs,{itemId:g.item_id,price:g.price,currency:g.currency,userGold:e,onBuy:t},g.item_id))})]}),a.jsxs("div",{className:"shop-section",children:[a.jsx("div",{className:"shop-section-header",children:a.jsxs("div",{className:"shop-section-title",children:[a.jsx("span",{className:"section-icon",children:"🛍"}),a.jsx("span",{className:"font-display",children:"General Store"}),a.jsx("span",{className:"always-tag",children:"ALWAYS OPEN"})]})}),a.jsx("div",{className:"shop-items-grid",children:Wf.items.map(g=>a.jsx(fs,{itemId:g.item_id,price:g.price,currency:g.currency,userGold:e,onBuy:t},g.item_id))})]}),a.jsx("div",{className:"shop-tip",children:"💡 Items go directly to your bag. Equip them in the Equipment screen."}),a.jsx("style",{children:`
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
      `})]})}function Yf({effects:e,levelUpData:t}){return a.jsxs(a.Fragment,{children:[e.map(n=>a.jsxs("div",{className:"reward-float",style:{left:n.x!=null?`${n.x}px`:"50%",top:n.y!=null?`${n.y}px`:"40%",transform:n.x==null?"translateX(-50%)":void 0},children:[a.jsxs("span",{style:{color:"var(--xp-blue)",textShadow:"0 0 10px rgba(79,195,247,0.5)"},children:["+",n.xp," XP"]}),a.jsxs("span",{style:{color:"var(--gold)",textShadow:"0 0 10px var(--gold-glow)",fontSize:"0.8rem"},children:["+",n.gold," 💰"]})]},n.id)),t&&a.jsxs("div",{className:"level-up-banner",children:[a.jsx("div",{className:"level-up-glow"}),a.jsx("div",{className:"level-up-icon",children:"⭐"}),a.jsxs("div",{className:"level-up-text",children:[a.jsx("div",{className:"level-up-title font-display",children:"LEVEL UP!"}),a.jsxs("div",{className:"level-up-subtitle",children:["You reached Level ",a.jsx("strong",{children:t.level})]}),t.talentPoints>0&&a.jsxs("div",{className:"level-up-bonus",children:["🌟 +",t.talentPoints," Talent Point",t.talentPoints>1?"s":""," — check the Talents tab!"]})]}),a.jsx("div",{className:"level-up-icon",children:"⭐"})]}),a.jsx("style",{children:`
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
      `})]})}function qf(){const[e,t]=j.useState(()=>{try{const k=localStorage.getItem("ql_user");return k?JSON.parse(k):cs}catch{return cs}}),[n,r]=j.useState(()=>{try{const k=localStorage.getItem("ql_tasks");return k?JSON.parse(k):ss}catch{return ss}}),[l,o]=j.useState(()=>{try{const k=localStorage.getItem("ql_history");return k?JSON.parse(k):us}catch{return us}}),[i,s]=j.useState([]),[c,d]=j.useState(null);j.useEffect(()=>{localStorage.setItem("ql_user",JSON.stringify(e))},[e]),j.useEffect(()=>{localStorage.setItem("ql_tasks",JSON.stringify(n))},[n]),j.useEffect(()=>{localStorage.setItem("ql_history",JSON.stringify(l))},[l]);const m=j.useCallback((k,E,S=null,w=null)=>{const T=It();s(z=>[...z,{id:T,xp:k,gold:E,x:S,y:w}]),setTimeout(()=>{s(z=>z.filter(I=>I.id!==T))},2e3)},[]),g=j.useCallback((k,E)=>{t(S=>{const w=Ef(S.level,S.xp,k);return w.leveledUp&&(d({level:w.level,talentPoints:w.talentPointsEarned}),setTimeout(()=>d(null),4e3)),{...S,xp:w.xp,xpToNext:w.xpToNext,level:w.level,gold:S.gold+E,talentPoints:S.talentPoints+w.talentPointsEarned}})},[]),v=j.useCallback((k,E=null)=>{r(S=>{const w=S.find(I=>I.id===k);if(!w)return S;const{xp:T,gold:z}=Pu(w,e.unlockedTalents);return g(T,z),m(T,z),o(I=>[{id:It(),title:w.title,completedAt:new Date().toISOString(),xpEarned:T,goldEarned:z},...I]),S.filter(I=>I.id!==k)})},[e.unlockedTalents,g,m]),b=j.useCallback((k,E)=>{r(S=>S.map(w=>{var z;if(w.id!==k)return w;if(!((z=w.subtasks.find(I=>I.id===E))==null?void 0:z.done)){const{xp:I,gold:ne}=_f(e.unlockedTalents);g(I,ne),m(I,ne)}return{...w,subtasks:w.subtasks.map(I=>I.id===E?{...I,done:!I.done}:I)}}))},[e.unlockedTalents,g,m]),h=j.useCallback(k=>{const E={id:It(),status:"pending",subtasks:[],createdAt:new Date().toISOString(),completedAt:null,isOverdue:!1,tags:[],notes:"",...k};return r(S=>[E,...S]),E},[]),y=j.useCallback((k,E=2)=>{r(S=>S.map(w=>{if(w.id!==k)return w;const T=new Date(Date.now()+E*60*60*1e3).toISOString();return{...w,dueAt:T,isOverdue:!1}}))},[]),M=j.useCallback(k=>{r(E=>E.filter(S=>S.id!==k))},[]),f=j.useCallback((k,E)=>{t(S=>S.talentPoints<E?S:{...S,talentPoints:S.talentPoints-E,unlockedTalents:[...S.unlockedTalents,k]})},[]),u=j.useCallback((k,E)=>{const{xp:S,gold:w}=Cf(k,E,e.unlockedTalents);return g(S,w),m(S,w),{xp:S,gold:w}},[e.unlockedTalents,g,m]),p=j.useCallback(k=>{t(E=>({...E,gold:Math.max(0,E.gold+k)}))},[]),x=j.useCallback(k=>{g(k,0)},[g]);return{user:e,tasks:n,history:l,rewardEffects:i,levelUpData:c,completeTask:v,toggleSubtask:b,addTask:h,snoozeTask:y,deleteTask:M,unlockTalent:f,completeFocusSession:u,showReward:m,applyGoldReward:p,applyXpReward:x}}function Gf(e){const[t,n]=j.useState(null),r=j.useRef(null),l=j.useCallback((d,m=25)=>{const g=m*60;n({taskId:d.id,taskTitle:d.title,totalSeconds:g,secondsLeft:g,paused:!1,minutes:m})},[]),o=j.useCallback(()=>{n(d=>d?{...d,paused:!0}:null)},[]),i=j.useCallback(()=>{n(d=>d?{...d,paused:!1}:null)},[]),s=j.useCallback((d=!1)=>{if(t&&e){const m=Math.round((t.totalSeconds-t.secondsLeft)/60);e(m,d)}n(null)},[t,e]);return j.useEffect(()=>{if(!t||t.paused){clearInterval(r.current);return}return r.current=setInterval(()=>{n(d=>{if(!d)return null;const m=d.secondsLeft-1;return m<=0?(clearInterval(r.current),e&&e(d.minutes,!0),null):{...d,secondsLeft:m}})},1e3),()=>clearInterval(r.current)},[t==null?void 0:t.paused,t==null?void 0:t.taskId,e]),{session:t,start:l,pause:o,resume:i,stop:s,formatTime:d=>{const m=Math.floor(d/60).toString().padStart(2,"0"),g=(d%60).toString().padStart(2,"0");return`${m}:${g}`}}}const cr=[{id:"slime_distract",name:"Distracto Slime",tier:1,max_hp:400,regen:0,armor:0,gold_drop:[8,18],xp_drop:12,sprite:"🟢",color:"#5CDD8B",flavor:"It jiggles every time you check your phone.",loot_table:[{item:"ring_focus_1",chance:.12},{item:"boots_speed_1",chance:.06}]},{id:"goblin_procrastin",name:"Procrastin Goblin",tier:1,max_hp:650,regen:0,armor:1,gold_drop:[12,25],xp_drop:20,sprite:"👺",color:"#FF6584",flavor:`"I'll deal with you in a minute." It has been 3 hours.`,loot_table:[{item:"gloves_grip_1",chance:.1},{item:"ring_focus_1",chance:.08}]},{id:"troll_overwhelm",name:"Overwhelm Troll",tier:2,max_hp:3500,regen:1,armor:3,gold_drop:[40,80],xp_drop:80,sprite:"🧌",color:"#B39DDB",flavor:"It throws seventeen tasks at you at once.",loot_table:[{item:"helmet_clarity_1",chance:.15},{item:"chest_focus_1",chance:.08},{item:"necklace_resolve_1",chance:.06}]},{id:"witch_avoidance",name:"Avoidance Witch",tier:2,max_hp:5e3,regen:2,armor:4,gold_drop:[60,120],xp_drop:110,sprite:"🧙",color:"#4FC3F7",flavor:'She whispers "you can do it tomorrow."',loot_table:[{item:"ring_focus_2",chance:.1},{item:"boots_speed_2",chance:.08},{item:"legs_endure_1",chance:.07}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:3}]},{id:"boss_procrastination",name:"The Eternal Procrastinator",tier:3,max_hp:5e4,regen:5,armor:10,gold_drop:[500,800],xp_drop:300,sprite:"👑",color:"#F5C842",flavor:`"I'll fight you properly once conditions are perfect." It never happens.`,isBoss:!0,loot_table:[{item:"ring_focus_2",chance:1},{item:"necklace_resolve_1",chance:.5},{item:"chest_focus_1",chance:.4}],phases:[{hp_threshold:.75,effect:"armor_boost",effect_value:5},{hp_threshold:.5,effect:"slow_player",effect_value:.5},{hp_threshold:.25,effect:"regen_boost",effect_value:10}]},{id:"boss_burnout",name:"Lord Burnout",tier:3,max_hp:8e4,regen:8,armor:15,gold_drop:[800,1200],xp_drop:500,sprite:"🔥",color:"#FF3860",flavor:"You have faced him before. You will face him again.",isBoss:!0,loot_table:[{item:"chest_focus_1",chance:1},{item:"helmet_clarity_1",chance:.6},{item:"ring_focus_2",chance:.4}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:15},{hp_threshold:.2,effect:"armor_boost",effect_value:8}]}],ms=cr.map(e=>e.id);function Lr(e){return cr.find(t=>t.id===e)||cr[0]}function gs(e){const t=ms.indexOf(e);return t===-1||t>=ms.length-1?{...cr[0],_loop:!0}:cr[t+1]}const Jf={head:null,body:null,gloves:null,legs:null,boots:null,ring:null,ring2:null,necklace:null},hs={currentMonsterId:"slime_distract",monsterHp:null,monstersKilled:0,equipped:Jf,inventory:[],activeBuffs:[],phaseEffects:[],lastActiveMs:Date.now(),momentumCount:0,momentumWindowStart:Date.now(),lowEnergyMode:!1};function Zf({user:e,focusSessionActive:t=!1,onGoldEarned:n,onXpEarned:r,onLootDrop:l,onKillToast:o,onOfflineToast:i}){const[s,c]=j.useState(()=>{try{const L=localStorage.getItem("ql_combat");if(L){const O=JSON.parse(L);return{...hs,...O,activeBuffs:[],phaseEffects:[]}}}catch{}return hs}),[d,m]=j.useState([]),g=j.useRef(null),v=j.useRef(s);v.current=s,j.useEffect(()=>{const{activeBuffs:L,phaseEffects:O,...R}=s;R.lastActiveMs=Date.now(),localStorage.setItem("ql_combat",JSON.stringify(R))},[s]);const b=Lr(s.currentMonsterId),h=s.monsterHp??b.max_hp,y=Mr(e.level,s.equipped),M=mf(s.momentumCount),f=ff(t);j.useEffect(()=>{const L=localStorage.getItem("ql_combat");if(L)try{const R=JSON.parse(L).lastActiveMs||Date.now();if(Date.now()-R>6e4){const C=vf(y,R,Date.now());C.damage>0&&(p(C.damage,!1,!0),C.gold>0&&n&&n(C.gold),i&&i(C))}}catch{}},[]);const u=j.useCallback((L,O,R=!1)=>{const U=It(),C=30+Math.random()*40;m(N=>[...N,{id:U,value:L,isCrit:O,isOffline:R,x:C}]),setTimeout(()=>{m(N=>N.filter(D=>D.id!==U))},1400)},[]),p=j.useCallback((L,O=!1,R=!1)=>{c(U=>{const C=Lr(U.currentMonsterId),N=U.monsterHp??C.max_hp,D=gf(L,C.armor),$=Math.max(0,N-D),X=hf(C,$,N);let ve=[...U.phaseEffects||[]];if(X&&ve.push({id:It(),...X,expiresAt:1/0}),$<=0){const pe=is(C);n&&n(pe.gold),r&&r(pe.xp),pe.loot.length>0&&l&&l(pe.loot,C.name),o&&o({...pe,monsterName:C.name,isBoss:C.isBoss});const ot=gs(U.currentMonsterId);return{...U,currentMonsterId:ot.id,monsterHp:ot.max_hp,monstersKilled:U.monstersKilled+1,phaseEffects:[]}}return{...U,monsterHp:$,phaseEffects:ve}}),R||u(L,O)},[n,r,l,u]);j.useEffect(()=>(g.current=setInterval(()=>{const L=v.current,O=Lr(L.currentMonsterId),R=Mr(e.level,L.equipped),U=[...L.activeBuffs||[],...L.phaseEffects||[]],C=Date.now(),N=(L.activeBuffs||[]).filter(ve=>ve.expiresAt>C);N.length!==(L.activeBuffs||[]).length&&c(ve=>({...ve,activeBuffs:N}));const{damage:D,isCrit:$}=pf(R,U),X=Math.round(D*M*f);O.regen>0&&c(ve=>{const pe=ve.monsterHp??O.max_hp,ot=Math.min(O.max_hp,pe+O.regen);return{...ve,monsterHp:ot}}),p(X,$)},df),()=>clearInterval(g.current)),[e.level,s.equipped,M,f]);const x=j.useCallback(()=>{const L=Mr(e.level,s.equipped),O=Math.round(L.attack*5*M),R=Math.random()<Math.min(.8,L.critChance+.2),U=R?Math.round(O*L.critDamage):O,C={id:It(),type:"attack_mult",label:"Task Focus!",value:1.5,expiresAt:Date.now()+1e4,icon:"⚡"};c(N=>({...N,activeBuffs:[...(N.activeBuffs||[]).filter(D=>D.id!=="focus_boost"),C],momentumCount:N.momentumCount+1})),p(U,R)},[e.level,s.equipped,M,p]),k=j.useCallback(()=>{const L=Mr(e.level,s.equipped),O=Math.round(L.attack*1.2);p(O,!1)},[e.level,s.equipped,p]),E=j.useCallback((L,O)=>{c(R=>{const U=R.equipped[O],C=U?[...R.inventory,U]:[...R.inventory],N=C.filter((D,$)=>!(D===L&&$===C.lastIndexOf(L)));return{...R,equipped:{...R.equipped,[O]:L},inventory:N}})},[]),S=j.useCallback(L=>{c(O=>{const R=O.equipped[L];return R?{...O,equipped:{...O.equipped,[L]:null},inventory:[...O.inventory,R]}:O})},[]),w=j.useCallback(L=>{c(O=>({...O,inventory:[...O.inventory,L]}))},[]),T=j.useCallback((L,O,R)=>R(O)?(w(L),!0):!1,[w]),z=j.useCallback((L,O,R)=>{c(U=>{const C=[...U.inventory];return C.splice(O,1),{...U,inventory:C}}),R&&R()},[]),I=j.useCallback((L,O)=>{c(R=>R.equipped[L]?{...R,equipped:{...R.equipped,[L]:null}}:R),O&&O()},[]),ne=j.useCallback(()=>{c(L=>{const O=Lr(L.currentMonsterId),R=is(O);n&&n(R.gold),r&&r(R.xp),R.loot.length>0&&l&&l(R.loot,O.name),o&&o({...R,monsterName:O.name,isBoss:O.isBoss});const U=gs(L.currentMonsterId);return{...L,currentMonsterId:U.id,monsterHp:U.max_hp,monstersKilled:L.monstersKilled+1,phaseEffects:[]}})},[n,r,l,o]),Ke=j.useCallback(()=>{c(L=>({...L,lowEnergyMode:!L.lowEnergyMode}))},[]);return{monster:b,currentHp:h,monsterMaxHp:b.max_hp,playerStats:y,equipped:s.equipped,inventory:s.inventory,activeBuffs:s.activeBuffs||[],monstersKilled:s.monstersKilled,floatingNumbers:d,lowEnergyMode:s.lowEnergyMode,momentumCount:s.momentumCount,momentumMult:M,onTaskComplete:x,onSubtaskComplete:k,equipItem:E,unequipItem:S,addToInventory:w,buyItem:T,sellItem:z,sellEquipped:I,instantKill:ne,toggleLowEnergy:Ke}}function em(){const[e,t]=j.useState("dashboard"),[n,r]=j.useState(!1),{toasts:l,log:o,addToast:i,dismissToast:s}=xf(),{user:c,tasks:d,history:m,rewardEffects:g,levelUpData:v,completeTask:b,toggleSubtask:h,addTask:y,snoozeTask:M,deleteTask:f,unlockTalent:u,completeFocusSession:p,applyGoldReward:x,applyXpReward:k}=qf(),E=j.useCallback((N,D)=>{N>0&&p(N,D)},[p]),S=Gf(E),w=j.useCallback(N=>{var D,$;i({type:N.isBoss?"boss":"kill",icon:N.isBoss?"👑":"☠",title:`${N.monsterName} defeated!`,sub:`+${N.gold} gold · +${N.xp} XP`,loot:N.loot,duration:((D=N.loot)==null?void 0:D.length)>0?5e3:3e3}),(($=N.loot)==null?void 0:$.length)>0&&r(!0)},[i]),T=j.useCallback(N=>{i({type:"offline",icon:"🌙",title:`Welcome back! Hero fought for ${N.hours}h`,sub:`${N.damage.toLocaleString()} damage dealt · +${N.gold} gold`,duration:6e3})},[i]),z=Zf({user:c,focusSessionActive:!!S.session,onGoldEarned:N=>x(N),onXpEarned:N=>k(N),onLootDrop:N=>N.forEach(D=>z.addToInventory(D)),onKillToast:w,onOfflineToast:T}),I=j.useCallback(N=>{b(N),z.onTaskComplete(),i({type:"default",icon:"⚡",title:"Task complete! Power burst!",sub:"+10s attack speed boost",duration:2500})},[b,z,i]),ne=j.useCallback((N,D)=>{h(N,D),z.onSubtaskComplete()},[h,z]),Ke=j.useCallback((N,D)=>c.gold<D?!1:(x(-D),z.addToInventory(N),!0),[c.gold,x,z]),L=j.useCallback(N=>{x(-N)},[x]),O=j.useCallback(N=>{x(N),i({type:"default",icon:"🛠",title:`DEV: +${N} gold`,duration:2e3})},[x,i]),R=j.useCallback(()=>{z.instantKill()},[z]);function U(N){S.start(N,25),t("focus")}function C(N){N==="inventory"&&r(!1),t(N)}return a.jsxs("div",{className:"app-layout",children:[a.jsx(af,{user:c,activeView:e,onNavigate:C,pendingCount:d.filter(N=>N.status==="pending").length,newLoot:n}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,overflow:"hidden"},children:[a.jsx(Sf,{monster:z.monster,currentHp:z.currentHp,playerStats:z.playerStats,activeBuffs:z.activeBuffs,floatingNumbers:z.floatingNumbers,momentumMult:z.momentumMult,lowEnergyMode:z.lowEnergyMode,monstersKilled:z.monstersKilled,onToggleLowEnergy:z.toggleLowEnergy,combatLog:o}),a.jsxs("main",{className:"main-content",children:[e==="dashboard"&&a.jsx(Lf,{user:c,tasks:d,onComplete:I,onToggleSubtask:ne,onSnooze:M,onDelete:f,onAddTask:y,onStartFocus:U}),e==="focus"&&a.jsx(Of,{session:S.session,onStart:S.start,onPause:S.pause,onResume:S.resume,onStop:S.stop,formatTime:S.formatTime,tasks:d.filter(N=>N.status==="pending")}),e==="inventory"&&a.jsx(Vf,{combat:z,userLevel:c.level,onGoldEarned:N=>x(N)}),e==="shop"&&a.jsx(Kf,{userGold:c.gold,onBuy:Ke,onRefreshSpend:L}),e==="rewards"&&a.jsx(Ff,{user:c,history:m}),e==="talents"&&a.jsx(Af,{user:c,onUnlock:u})]})]}),a.jsx(Yf,{effects:g,levelUpData:v}),a.jsx(yf,{toasts:l,onDismiss:s}),a.jsx(Nf,{onAddGold:O,onInstantKill:R})]})}co.createRoot(document.getElementById("root")).render(a.jsx(Ku.StrictMode,{children:a.jsx(em,{})}));
