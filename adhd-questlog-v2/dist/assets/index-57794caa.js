(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Za={exports:{}},rl={},Ja={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),fc=Symbol.for("react.portal"),pc=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),Ao=Symbol.iterator;function Sc(e){return e===null||typeof e!="object"?null:(e=Ao&&e[Ao]||e["@@iterator"],typeof e=="function"?e:null)}var qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es=Object.assign,ts={};function ln(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||qa}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ns(){}ns.prototype=ln.prototype;function Hi(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||qa}var Vi=Hi.prototype=new ns;Vi.constructor=Hi;es(Vi,ln.prototype);Vi.isPureReactComponent=!0;var $o=Array.isArray,rs=Object.prototype.hasOwnProperty,Qi={current:null},ls={key:!0,ref:!0,__self:!0,__source:!0};function is(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)rs.call(t,r)&&!ls.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Yn,type:e,key:i,ref:o,props:l,_owner:Qi.current}}function Nc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Uo=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jc(""+e.key):t.toString(36)}function kr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Yn:case fc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Sl(o,0):r,$o(l)?(n="",e!=null&&(n=e.replace(Uo,"$&/")+"/"),kr(l,t,n,"",function(d){return d})):l!=null&&(Wi(l)&&(l=Nc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Uo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",$o(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Sl(i,a);o+=kr(i,t,n,u,l)}else if(u=Sc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Sl(i,a++),o+=kr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function rr(e,t,n){if(e==null)return e;var r=[],l=0;return kr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Ec(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},wr={transition:null},Cc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Qi};function os(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=ln;O.Fragment=pc;O.Profiler=vc;O.PureComponent=Hi;O.StrictMode=mc;O.Suspense=xc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;O.act=os;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=es({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)rs.call(t,u)&&!ls.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Yn,type:e.type,key:l,ref:i,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hc,_context:e},e.Consumer=e};O.createElement=is;O.createFactory=function(e){var t=is.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:yc,render:e}};O.isValidElement=Wi;O.lazy=function(e){return{$$typeof:wc,_payload:{_status:-1,_result:e},_init:Ec}};O.memo=function(e,t){return{$$typeof:kc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};O.unstable_act=os;O.useCallback=function(e,t){return se.current.useCallback(e,t)};O.useContext=function(e){return se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return se.current.useDeferredValue(e)};O.useEffect=function(e,t){return se.current.useEffect(e,t)};O.useId=function(){return se.current.useId()};O.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return se.current.useMemo(e,t)};O.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};O.useRef=function(e){return se.current.useRef(e)};O.useState=function(e){return se.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return se.current.useTransition()};O.version="18.3.1";Ja.exports=O;var P=Ja.exports;const _c=dc(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=P,Pc=Symbol.for("react.element"),Tc=Symbol.for("react.fragment"),Lc=Object.prototype.hasOwnProperty,Dc=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function as(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Lc.call(t,r)&&!Mc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Pc,type:e,key:i,ref:o,props:l,_owner:Dc.current}}rl.Fragment=Tc;rl.jsx=as;rl.jsxs=as;Za.exports=rl;var s=Za.exports,Yl={},ss={exports:{}},xe={},us={exports:{}},cs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,T){var M=_.length;_.push(T);e:for(;0<M;){var Q=M-1>>>1,Y=_[Q];if(0<l(Y,T))_[Q]=T,_[M]=Y,M=Q;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var T=_[0],M=_.pop();if(M!==T){_[0]=M;e:for(var Q=0,Y=_.length,tr=Y>>>1;Q<tr;){var ht=2*(Q+1)-1,wl=_[ht],gt=ht+1,nr=_[gt];if(0>l(wl,M))gt<Y&&0>l(nr,wl)?(_[Q]=nr,_[gt]=M,Q=gt):(_[Q]=wl,_[ht]=M,Q=ht);else if(gt<Y&&0>l(nr,M))_[Q]=nr,_[gt]=M,Q=gt;else break e}}return T}function l(_,T){var M=_.sortIndex-T.sortIndex;return M!==0?M:_.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],h=1,y=null,g=3,S=!1,v=!1,x=!1,z=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=_)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function m(_){if(x=!1,f(_),!v)if(n(u)!==null)v=!0,xl(k);else{var T=n(d);T!==null&&kl(m,T.startTime-_)}}function k(_,T){v=!1,x&&(x=!1,p(j),j=-1),S=!0;var M=g;try{for(f(T),y=n(u);y!==null&&(!(y.expirationTime>T)||_&&!_e());){var Q=y.callback;if(typeof Q=="function"){y.callback=null,g=y.priorityLevel;var Y=Q(y.expirationTime<=T);T=e.unstable_now(),typeof Y=="function"?y.callback=Y:y===n(u)&&r(u),f(T)}else r(u);y=n(u)}if(y!==null)var tr=!0;else{var ht=n(d);ht!==null&&kl(m,ht.startTime-T),tr=!1}return tr}finally{y=null,g=M,S=!1}}var N=!1,E=null,j=-1,L=5,D=-1;function _e(){return!(e.unstable_now()-D<L)}function sn(){if(E!==null){var _=e.unstable_now();D=_;var T=!0;try{T=E(!0,_)}finally{T?un():(N=!1,E=null)}}else N=!1}var un;if(typeof c=="function")un=function(){c(sn)};else if(typeof MessageChannel<"u"){var Fo=new MessageChannel,cc=Fo.port2;Fo.port1.onmessage=sn,un=function(){cc.postMessage(null)}}else un=function(){z(sn,0)};function xl(_){E=_,N||(N=!0,un())}function kl(_,T){j=z(function(){_(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||S||(v=!0,xl(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var M=g;g=T;try{return _()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,T){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var M=g;g=_;try{return T()}finally{g=M}},e.unstable_scheduleCallback=function(_,T,M){var Q=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Q+M:Q):M=Q,_){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=M+Y,_={id:h++,callback:T,priorityLevel:_,startTime:M,expirationTime:Y,sortIndex:-1},M>Q?(_.sortIndex=M,t(d,_),n(u)===null&&_===n(d)&&(x?(p(j),j=-1):x=!0,kl(m,M-Q))):(_.sortIndex=Y,t(u,_),v||S||(v=!0,xl(k))),_},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(_){var T=g;return function(){var M=g;g=T;try{return _.apply(this,arguments)}finally{g=M}}}})(cs);us.exports=cs;var Oc=us.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=P,ye=Oc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ds=new Set,Ln={};function Tt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)ds.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bo={},Ho={};function bc(e){return Zl.call(Ho,e)?!0:Zl.call(Bo,e)?!1:Ic.test(e)?Ho[e]=!0:(Bo[e]=!0,!1)}function Fc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ac(e,t,n,r){if(t===null||typeof t>"u"||Fc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xi=/[\-:]([a-z])/g;function Ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xi,Ki);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xi,Ki);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xi,Ki);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gi(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ac(t,n,l,r)&&(n=null),r||l===null?bc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ge=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lr=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Yi=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),fs=Symbol.for("react.provider"),ps=Symbol.for("react.context"),Zi=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),ei=Symbol.for("react.suspense_list"),Ji=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ms=Symbol.for("react.offscreen"),Vo=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Nl;function yn(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var jl=!1;function El(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function $c(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function ti(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Mt:return"Portal";case Jl:return"Profiler";case Yi:return"StrictMode";case ql:return"Suspense";case ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ps:return(e.displayName||"Context")+".Consumer";case fs:return(e._context.displayName||"Context")+".Provider";case Zi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ji:return t=e.displayName||null,t!==null?t:ti(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return ti(e(t))}catch{}}return null}function Uc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ti(t);case 8:return t===Yi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bc(e){var t=vs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Bc(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gs(e,t){t=t.checked,t!=null&&Gi(e,"checked",t,!1)}function ri(e,t){gs(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?li(e,t.type,n):t.hasOwnProperty("defaultValue")&&li(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function li(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(xn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ys(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function Ss(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Vc=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ai(e,t){if(t){if(Vc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function si(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ui=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,Wt=null,Xt=null;function Go(e){if(e=qn(e)){if(typeof ci!="function")throw Error(w(280));var t=e.stateNode;t&&(t=sl(t),ci(e.stateNode,e.type,t))}}function Ns(e){Wt?Xt?Xt.push(e):Xt=[e]:Wt=e}function js(){if(Wt){var e=Wt,t=Xt;if(Xt=Wt=null,Go(e),t)for(e=0;e<t.length;e++)Go(t[e])}}function Es(e,t){return e(t)}function Cs(){}var Cl=!1;function _s(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Es(e,t,n)}finally{Cl=!1,(Wt!==null||Xt!==null)&&(Cs(),js())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var di=!1;if(Qe)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){di=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{di=!1}function Qc(e,t,n,r,l,i,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Nn=!1,Or=null,Rr=!1,fi=null,Wc={onError:function(e){Nn=!0,Or=e}};function Xc(e,t,n,r,l,i,o,a,u){Nn=!1,Or=null,Qc.apply(Wc,arguments)}function Kc(e,t,n,r,l,i,o,a,u){if(Xc.apply(this,arguments),Nn){if(Nn){var d=Or;Nn=!1,Or=null}else throw Error(w(198));Rr||(Rr=!0,fi=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Yo(e){if(Lt(e)!==e)throw Error(w(188))}function Gc(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Yo(l),e;if(i===r)return Yo(l),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Ps(e){return e=Gc(e),e!==null?Ts(e):null}function Ts(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ts(e);if(t!==null)return t;e=e.sibling}return null}var Ls=ye.unstable_scheduleCallback,Zo=ye.unstable_cancelCallback,Yc=ye.unstable_shouldYield,Zc=ye.unstable_requestPaint,W=ye.unstable_now,Jc=ye.unstable_getCurrentPriorityLevel,eo=ye.unstable_ImmediatePriority,Ds=ye.unstable_UserBlockingPriority,Ir=ye.unstable_NormalPriority,qc=ye.unstable_LowPriority,Ms=ye.unstable_IdlePriority,ll=null,Fe=null;function ed(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:rd,td=Math.log,nd=Math.LN2;function rd(e){return e>>>=0,e===0?32:31-(td(e)/nd|0)|0}var ar=64,sr=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function br(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=kn(a):(i&=o,i!==0&&(r=kn(i)))}else o=n&~l,o!==0?r=kn(o):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=ld(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Os(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function to(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Rs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,no,bs,Fs,As,mi=!1,ur=[],rt=null,lt=null,it=null,On=new Map,Rn=new Map,qe=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jo(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":On.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function fn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&no(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sd(e,t,n,r,l){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,l),!0;case"dragenter":return lt=fn(lt,e,t,n,r,l),!0;case"mouseover":return it=fn(it,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return On.set(i,fn(On.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Rn.set(i,fn(Rn.get(i)||null,e,t,n,r,l)),!0}return!1}function $s(e){var t=kt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=zs(n),t!==null){e.blockedOn=t,As(e.priority,function(){bs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ui=r,n.target.dispatchEvent(r),ui=null}else return t=qn(n),t!==null&&no(t),e.blockedOn=n,!1;t.shift()}return!0}function qo(e,t,n){Sr(e)&&n.delete(t)}function ud(){mi=!1,rt!==null&&Sr(rt)&&(rt=null),lt!==null&&Sr(lt)&&(lt=null),it!==null&&Sr(it)&&(it=null),On.forEach(qo),Rn.forEach(qo)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,mi||(mi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ud)))}function In(e){function t(l){return pn(l,e)}if(0<ur.length){pn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),it!==null&&pn(it,e),On.forEach(t),Rn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)$s(n),n.blockedOn===null&&qe.shift()}var Kt=Ge.ReactCurrentBatchConfig,Fr=!0;function cd(e,t,n,r){var l=I,i=Kt.transition;Kt.transition=null;try{I=1,ro(e,t,n,r)}finally{I=l,Kt.transition=i}}function dd(e,t,n,r){var l=I,i=Kt.transition;Kt.transition=null;try{I=4,ro(e,t,n,r)}finally{I=l,Kt.transition=i}}function ro(e,t,n,r){if(Fr){var l=vi(e,t,n,r);if(l===null)bl(e,t,r,Ar,n),Jo(e,r);else if(sd(l,e,t,n,r))r.stopPropagation();else if(Jo(e,r),t&4&&-1<ad.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Is(i),i=vi(e,t,n,r),i===null&&bl(e,t,r,Ar,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Ar=null;function vi(e,t,n,r){if(Ar=null,e=qi(r),e=kt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ar=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jc()){case eo:return 1;case Ds:return 4;case Ir:case qc:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var tt=null,lo=null,Nr=null;function Bs(){if(Nr)return Nr;var e,t=lo,n=t.length,r,l="value"in tt?tt.value:tt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Nr=l.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function ea(){return!1}function ke(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:ea,this.isPropagationStopped=ea,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=ke(on),Jn=H({},on,{view:0,detail:0}),fd=ke(Jn),zl,Pl,mn,il=H({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(zl=e.screenX-mn.screenX,Pl=e.screenY-mn.screenY):Pl=zl=0,mn=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),ta=ke(il),pd=H({},il,{dataTransfer:0}),md=ke(pd),vd=H({},Jn,{relatedTarget:0}),Tl=ke(vd),hd=H({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=ke(hd),yd=H({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=ke(yd),kd=H({},on,{data:0}),na=ke(kd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function oo(){return jd}var Ed=H({},Jn,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cd=ke(Ed),_d=H({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ra=ke(_d),zd=H({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Pd=ke(zd),Td=H({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ld=ke(Td),Dd=H({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=ke(Dd),Od=[9,13,27,32],ao=Qe&&"CompositionEvent"in window,jn=null;Qe&&"documentMode"in document&&(jn=document.documentMode);var Rd=Qe&&"TextEvent"in window&&!jn,Hs=Qe&&(!ao||jn&&8<jn&&11>=jn),la=String.fromCharCode(32),ia=!1;function Vs(e,t){switch(e){case"keyup":return Od.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Id(e,t){switch(e){case"compositionend":return Qs(t);case"keypress":return t.which!==32?null:(ia=!0,la);case"textInput":return e=t.data,e===la&&ia?null:e;default:return null}}function bd(e,t){if(Rt)return e==="compositionend"||!ao&&Vs(e,t)?(e=Bs(),Nr=lo=tt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hs&&t.locale!=="ko"?null:t.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fd[e.type]:t==="textarea"}function Ws(e,t,n,r){Ns(r),t=$r(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var En=null,bn=null;function Ad(e){ru(e,0)}function ol(e){var t=Ft(e);if(hs(t))return e}function $d(e,t){if(e==="change")return t}var Xs=!1;if(Qe){var Ll;if(Qe){var Dl="oninput"in document;if(!Dl){var aa=document.createElement("div");aa.setAttribute("oninput","return;"),Dl=typeof aa.oninput=="function"}Ll=Dl}else Ll=!1;Xs=Ll&&(!document.documentMode||9<document.documentMode)}function sa(){En&&(En.detachEvent("onpropertychange",Ks),bn=En=null)}function Ks(e){if(e.propertyName==="value"&&ol(bn)){var t=[];Ws(t,bn,e,qi(e)),_s(Ad,t)}}function Ud(e,t,n){e==="focusin"?(sa(),En=t,bn=n,En.attachEvent("onpropertychange",Ks)):e==="focusout"&&sa()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(bn)}function Hd(e,t){if(e==="click")return ol(t)}function Vd(e,t){if(e==="input"||e==="change")return ol(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Qd;function Fn(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Zl.call(t,l)||!Oe(e[l],t[l]))return!1}return!0}function ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ca(e,t){var n=ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ua(n)}}function Gs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ys(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wd(e){var t=Ys(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gs(n.ownerDocument.documentElement,n)){if(r!==null&&so(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ca(n,i);var o=ca(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=Qe&&"documentMode"in document&&11>=document.documentMode,It=null,hi=null,Cn=null,gi=!1;function da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gi||It==null||It!==Mr(r)||(r=It,"selectionStart"in r&&so(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cn&&Fn(Cn,r)||(Cn=r,r=$r(hi,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=It)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Ml={},Zs={};Qe&&(Zs=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function al(e){if(Ml[e])return Ml[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zs)return Ml[e]=t[n];return e}var Js=al("animationend"),qs=al("animationiteration"),eu=al("animationstart"),tu=al("transitionend"),nu=new Map,fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){nu.set(e,t),Tt(t,[e])}for(var Ol=0;Ol<fa.length;Ol++){var Rl=fa[Ol],Kd=Rl.toLowerCase(),Gd=Rl[0].toUpperCase()+Rl.slice(1);pt(Kd,"on"+Gd)}pt(Js,"onAnimationEnd");pt(qs,"onAnimationIteration");pt(eu,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(tu,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yd=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kc(r,t,void 0,e),e.currentTarget=null}function ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;pa(l,a,d),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;pa(l,a,d),i=u}}}if(Rr)throw e=fi,Rr=!1,fi=null,e}function F(e,t){var n=t[Si];n===void 0&&(n=t[Si]=new Set);var r=e+"__bubble";n.has(r)||(lu(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),lu(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[fr]){e[fr]=!0,ds.forEach(function(n){n!=="selectionchange"&&(Yd.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Il("selectionchange",!1,t))}}function lu(e,t,n,r){switch(Us(t)){case 1:var l=cd;break;case 4:l=dd;break;default:l=ro}n=l.bind(null,t,n,e),l=void 0,!di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=kt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}_s(function(){var d=i,h=qi(n),y=[];e:{var g=nu.get(e);if(g!==void 0){var S=io,v=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":S=Cd;break;case"focusin":v="focus",S=Tl;break;case"focusout":v="blur",S=Tl;break;case"beforeblur":case"afterblur":S=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Pd;break;case Js:case qs:case eu:S=gd;break;case tu:S=Ld;break;case"scroll":S=fd;break;case"wheel":S=Md;break;case"copy":case"cut":case"paste":S=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ra}var x=(t&4)!==0,z=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var c=d,f;c!==null;){f=c;var m=f.stateNode;if(f.tag===5&&m!==null&&(f=m,p!==null&&(m=Mn(c,p),m!=null&&x.push($n(c,m,f)))),z)break;c=c.return}0<x.length&&(g=new S(g,v,null,n,h),y.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==ui&&(v=n.relatedTarget||n.fromElement)&&(kt(v)||v[We]))break e;if((S||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,S?(v=n.relatedTarget||n.toElement,S=d,v=v?kt(v):null,v!==null&&(z=Lt(v),v!==z||v.tag!==5&&v.tag!==6)&&(v=null)):(S=null,v=d),S!==v)){if(x=ta,m="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=ra,m="onPointerLeave",p="onPointerEnter",c="pointer"),z=S==null?g:Ft(S),f=v==null?g:Ft(v),g=new x(m,c+"leave",S,n,h),g.target=z,g.relatedTarget=f,m=null,kt(h)===d&&(x=new x(p,c+"enter",v,n,h),x.target=f,x.relatedTarget=z,m=x),z=m,S&&v)t:{for(x=S,p=v,c=0,f=x;f;f=Dt(f))c++;for(f=0,m=p;m;m=Dt(m))f++;for(;0<c-f;)x=Dt(x),c--;for(;0<f-c;)p=Dt(p),f--;for(;c--;){if(x===p||p!==null&&x===p.alternate)break t;x=Dt(x),p=Dt(p)}x=null}else x=null;S!==null&&ma(y,g,S,x,!1),v!==null&&z!==null&&ma(y,z,v,x,!0)}}e:{if(g=d?Ft(d):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var k=$d;else if(oa(g))if(Xs)k=Vd;else{k=Bd;var N=Ud}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Hd);if(k&&(k=k(e,d))){Ws(y,k,n,h);break e}N&&N(e,g,d),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&li(g,"number",g.value)}switch(N=d?Ft(d):window,e){case"focusin":(oa(N)||N.contentEditable==="true")&&(It=N,hi=d,Cn=null);break;case"focusout":Cn=hi=It=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,da(y,n,h);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":da(y,n,h)}var E;if(ao)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Rt?Vs(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Hs&&n.locale!=="ko"&&(Rt||j!=="onCompositionStart"?j==="onCompositionEnd"&&Rt&&(E=Bs()):(tt=h,lo="value"in tt?tt.value:tt.textContent,Rt=!0)),N=$r(d,j),0<N.length&&(j=new na(j,e,null,n,h),y.push({event:j,listeners:N}),E?j.data=E:(E=Qs(n),E!==null&&(j.data=E)))),(E=Rd?Id(e,n):bd(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(h=new na("onBeforeInput","beforeinput",null,n,h),y.push({event:h,listeners:d}),h.data=E))}ru(y,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Mn(e,n),i!=null&&r.unshift($n(e,i,l)),i=Mn(e,t),i!=null&&r.push($n(e,i,l))),e=e.return}return r}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,l?(u=Mn(n,i),u!=null&&o.unshift($n(n,u,a))):l||(u=Mn(n,i),u!=null&&o.push($n(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zd=/\r\n?/g,Jd=/\u0000|\uFFFD/g;function va(e){return(typeof e=="string"?e:""+e).replace(Zd,`
`).replace(Jd,"")}function pr(e,t,n){if(t=va(t),va(e)!==t&&n)throw Error(w(425))}function Ur(){}var yi=null,xi=null;function ki(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wi=typeof setTimeout=="function"?setTimeout:void 0,qd=typeof clearTimeout=="function"?clearTimeout:void 0,ha=typeof Promise=="function"?Promise:void 0,ef=typeof queueMicrotask=="function"?queueMicrotask:typeof ha<"u"?function(e){return ha.resolve(null).then(e).catch(tf)}:wi;function tf(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),In(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);In(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ga(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),be="__reactFiber$"+an,Un="__reactProps$"+an,We="__reactContainer$"+an,Si="__reactEvents$"+an,nf="__reactListeners$"+an,rf="__reactHandles$"+an;function kt(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[We]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ga(e);e!==null;){if(n=e[be])return n;e=ga(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[be]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function sl(e){return e[Un]||null}var Ni=[],At=-1;function mt(e){return{current:e}}function A(e){0>At||(e.current=Ni[At],Ni[At]=null,At--)}function b(e,t){At++,Ni[At]=e.current,e.current=t}var ft={},ie=mt(ft),fe=mt(!1),Et=ft;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function Br(){A(fe),A(ie)}function ya(e,t,n){if(ie.current!==ft)throw Error(w(168));b(ie,t),b(fe,n)}function iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Uc(e)||"Unknown",l));return H({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Et=ie.current,b(ie,e),b(fe,fe.current),!0}function xa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=iu(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,A(fe),A(ie),b(ie,e)):A(fe),b(fe,n)}var Ue=null,ul=!1,Al=!1;function ou(e){Ue===null?Ue=[e]:Ue.push(e)}function lf(e){ul=!0,ou(e)}function vt(){if(!Al&&Ue!==null){Al=!0;var e=0,t=I;try{var n=Ue;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ue=null,ul=!1}catch(l){throw Ue!==null&&(Ue=Ue.slice(e+1)),Ls(eo,vt),l}finally{I=t,Al=!1}}return null}var $t=[],Ut=0,Vr=null,Qr=0,we=[],Se=0,Ct=null,Be=1,He="";function yt(e,t){$t[Ut++]=Qr,$t[Ut++]=Vr,Vr=e,Qr=t}function au(e,t,n){we[Se++]=Be,we[Se++]=He,we[Se++]=Ct,Ct=e;var r=Be;e=He;var l=32-De(r)-1;r&=~(1<<l),n+=1;var i=32-De(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-De(t)+l|n<<l|r,He=i+e}else Be=1<<i|n<<l|r,He=e}function uo(e){e.return!==null&&(yt(e,1),au(e,1,0))}function co(e){for(;e===Vr;)Vr=$t[--Ut],$t[Ut]=null,Qr=$t[--Ut],$t[Ut]=null;for(;e===Ct;)Ct=we[--Se],we[Se]=null,He=we[--Se],we[Se]=null,Be=we[--Se],we[Se]=null}var ge=null,he=null,$=!1,Le=null;function su(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ka(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:Be,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if($){var t=he;if(t){var n=t;if(!ka(e,t)){if(ji(e))throw Error(w(418));t=ot(n.nextSibling);var r=ge;t&&ka(e,t)?su(r,n):(e.flags=e.flags&-4097|2,$=!1,ge=e)}}else{if(ji(e))throw Error(w(418));e.flags=e.flags&-4097|2,$=!1,ge=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function mr(e){if(e!==ge)return!1;if(!$)return wa(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ki(e.type,e.memoizedProps)),t&&(t=he)){if(ji(e))throw uu(),Error(w(418));for(;t;)su(e,t),t=ot(t.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?ot(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=he;e;)e=ot(e.nextSibling)}function qt(){he=ge=null,$=!1}function fo(e){Le===null?Le=[e]:Le.push(e)}var of=Ge.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function cu(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=ct(p,c),p.index=0,p.sibling=null,p}function i(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,c,f,m){return c===null||c.tag!==6?(c=Wl(f,p.mode,m),c.return=p,c):(c=l(c,f),c.return=p,c)}function u(p,c,f,m){var k=f.type;return k===Ot?h(p,c,f.props.children,m,f.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Sa(k)===c.type)?(m=l(c,f.props),m.ref=vn(p,c,f),m.return=p,m):(m=Lr(f.type,f.key,f.props,null,p.mode,m),m.ref=vn(p,c,f),m.return=p,m)}function d(p,c,f,m){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Xl(f,p.mode,m),c.return=p,c):(c=l(c,f.children||[]),c.return=p,c)}function h(p,c,f,m,k){return c===null||c.tag!==7?(c=jt(f,p.mode,m,k),c.return=p,c):(c=l(c,f),c.return=p,c)}function y(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Wl(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case lr:return f=Lr(c.type,c.key,c.props,null,p.mode,f),f.ref=vn(p,null,c),f.return=p,f;case Mt:return c=Xl(c,p.mode,f),c.return=p,c;case Ze:var m=c._init;return y(p,m(c._payload),f)}if(xn(c)||cn(c))return c=jt(c,p.mode,f,null),c.return=p,c;vr(p,c)}return null}function g(p,c,f,m){var k=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:a(p,c,""+f,m);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:return f.key===k?u(p,c,f,m):null;case Mt:return f.key===k?d(p,c,f,m):null;case Ze:return k=f._init,g(p,c,k(f._payload),m)}if(xn(f)||cn(f))return k!==null?null:h(p,c,f,m,null);vr(p,f)}return null}function S(p,c,f,m,k){if(typeof m=="string"&&m!==""||typeof m=="number")return p=p.get(f)||null,a(c,p,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lr:return p=p.get(m.key===null?f:m.key)||null,u(c,p,m,k);case Mt:return p=p.get(m.key===null?f:m.key)||null,d(c,p,m,k);case Ze:var N=m._init;return S(p,c,f,N(m._payload),k)}if(xn(m)||cn(m))return p=p.get(f)||null,h(c,p,m,k,null);vr(c,m)}return null}function v(p,c,f,m){for(var k=null,N=null,E=c,j=c=0,L=null;E!==null&&j<f.length;j++){E.index>j?(L=E,E=null):L=E.sibling;var D=g(p,E,f[j],m);if(D===null){E===null&&(E=L);break}e&&E&&D.alternate===null&&t(p,E),c=i(D,c,j),N===null?k=D:N.sibling=D,N=D,E=L}if(j===f.length)return n(p,E),$&&yt(p,j),k;if(E===null){for(;j<f.length;j++)E=y(p,f[j],m),E!==null&&(c=i(E,c,j),N===null?k=E:N.sibling=E,N=E);return $&&yt(p,j),k}for(E=r(p,E);j<f.length;j++)L=S(E,p,j,f[j],m),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?j:L.key),c=i(L,c,j),N===null?k=L:N.sibling=L,N=L);return e&&E.forEach(function(_e){return t(p,_e)}),$&&yt(p,j),k}function x(p,c,f,m){var k=cn(f);if(typeof k!="function")throw Error(w(150));if(f=k.call(f),f==null)throw Error(w(151));for(var N=k=null,E=c,j=c=0,L=null,D=f.next();E!==null&&!D.done;j++,D=f.next()){E.index>j?(L=E,E=null):L=E.sibling;var _e=g(p,E,D.value,m);if(_e===null){E===null&&(E=L);break}e&&E&&_e.alternate===null&&t(p,E),c=i(_e,c,j),N===null?k=_e:N.sibling=_e,N=_e,E=L}if(D.done)return n(p,E),$&&yt(p,j),k;if(E===null){for(;!D.done;j++,D=f.next())D=y(p,D.value,m),D!==null&&(c=i(D,c,j),N===null?k=D:N.sibling=D,N=D);return $&&yt(p,j),k}for(E=r(p,E);!D.done;j++,D=f.next())D=S(E,p,j,D.value,m),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?j:D.key),c=i(D,c,j),N===null?k=D:N.sibling=D,N=D);return e&&E.forEach(function(sn){return t(p,sn)}),$&&yt(p,j),k}function z(p,c,f,m){if(typeof f=="object"&&f!==null&&f.type===Ot&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case lr:e:{for(var k=f.key,N=c;N!==null;){if(N.key===k){if(k=f.type,k===Ot){if(N.tag===7){n(p,N.sibling),c=l(N,f.props.children),c.return=p,p=c;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&Sa(k)===N.type){n(p,N.sibling),c=l(N,f.props),c.ref=vn(p,N,f),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===Ot?(c=jt(f.props.children,p.mode,m,f.key),c.return=p,p=c):(m=Lr(f.type,f.key,f.props,null,p.mode,m),m.ref=vn(p,c,f),m.return=p,p=m)}return o(p);case Mt:e:{for(N=f.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=l(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Xl(f,p.mode,m),c.return=p,p=c}return o(p);case Ze:return N=f._init,z(p,c,N(f._payload),m)}if(xn(f))return v(p,c,f,m);if(cn(f))return x(p,c,f,m);vr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,f),c.return=p,p=c):(n(p,c),c=Wl(f,p.mode,m),c.return=p,p=c),o(p)):n(p,c)}return z}var en=cu(!0),du=cu(!1),Wr=mt(null),Xr=null,Bt=null,po=null;function mo(){po=Bt=Xr=null}function vo(e){var t=Wr.current;A(Wr),e._currentValue=t}function Ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Xr=e,po=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Xr===null)throw Error(w(308));Bt=e,Xr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var wt=null;function ho(e){wt===null?wt=[e]:wt.push(e)}function fu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ho(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,ho(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Er(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Kr(e,t,n,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(i!==null){var y=l.baseState;o=0,h=d=u=null,a=i;do{var g=a.lane,S=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(g=t,S=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){y=v.call(S,y,g);break e}y=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(S,y,g):v,g==null)break e;y=H({},y,g);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else S={eventTime:S,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=S,u=y):h=h.next=S,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(1);if(h===null&&(u=y),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);zt|=o,e.lanes=o,e.memoizedState=y}}function ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var er={},Ae=mt(er),Bn=mt(er),Hn=mt(er);function St(e){if(e===er)throw Error(w(174));return e}function yo(e,t){switch(b(Hn,t),b(Bn,e),b(Ae,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oi(t,e)}A(Ae),b(Ae,t)}function tn(){A(Ae),A(Bn),A(Hn)}function mu(e){St(Hn.current);var t=St(Ae.current),n=oi(t,e.type);t!==n&&(b(Bn,e),b(Ae,n))}function xo(e){Bn.current===e&&(A(Ae),A(Bn))}var U=mt(0);function Gr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function ko(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Cr=Ge.ReactCurrentDispatcher,Ul=Ge.ReactCurrentBatchConfig,_t=0,B=null,K=null,Z=null,Yr=!1,_n=!1,Vn=0,af=0;function ne(){throw Error(w(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function So(e,t,n,r,l,i){if(_t=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?df:ff,e=n(r,l),_n){i=0;do{if(_n=!1,Vn=0,25<=i)throw Error(w(301));i+=1,Z=K=null,t.updateQueue=null,Cr.current=pf,e=n(r,l)}while(_n)}if(Cr.current=Zr,t=K!==null&&K.next!==null,_t=0,Z=K=B=null,Yr=!1,t)throw Error(w(300));return e}function No(){var e=Vn!==0;return Vn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Ce(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?B.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function Qn(e,t){return typeof t=="function"?t(e):t}function Bl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,d=i;do{var h=d.lane;if((_t&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var y={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=y,o=r):u=u.next=y,B.lanes|=h,zt|=h}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=a,Oe(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,zt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Oe(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function vu(){}function hu(e,t){var n=B,r=Ce(),l=t(),i=!Oe(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,jo(xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Wn(9,yu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(w(349));_t&30||gu(n,t,l)}return l}function gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yu(e,t,n,r){t.value=n,t.getSnapshot=r,ku(t)&&wu(e)}function xu(e,t,n){return n(function(){ku(t)&&wu(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function wu(e){var t=Xe(e,1);t!==null&&Me(t,e,1,-1)}function Ea(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=cf.bind(null,B,e),[t.memoizedState,e]}function Wn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Su(){return Ce().memoizedState}function _r(e,t,n,r){var l=Ie();B.flags|=e,l.memoizedState=Wn(1|t,n,void 0,r===void 0?null:r)}function cl(e,t,n,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if(K!==null){var o=K.memoizedState;if(i=o.destroy,r!==null&&wo(r,o.deps)){l.memoizedState=Wn(t,n,i,r);return}}B.flags|=e,l.memoizedState=Wn(1|t,n,i,r)}function Ca(e,t){return _r(8390656,8,e,t)}function jo(e,t){return cl(2048,8,e,t)}function Nu(e,t){return cl(4,2,e,t)}function ju(e,t){return cl(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,Eu.bind(null,t,e),n)}function Eo(){}function _u(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zu(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return _t&21?(Oe(n,t)||(n=Os(),B.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function sf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{I=n,Ul.transition=r}}function Tu(){return Ce().memoizedState}function uf(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lu(e))Du(t,n);else if(n=fu(e,t,n,r),n!==null){var l=ae();Me(n,e,r,l),Mu(n,t,r)}}function cf(e,t,n){var r=ut(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Du(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Oe(a,o)){var u=t.interleaved;u===null?(l.next=l,ho(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=fu(e,t,l,r),n!==null&&(l=ae(),Me(n,e,r,l),Mu(n,t,r))}}function Lu(e){var t=e.alternate;return e===B||t!==null&&t===B}function Du(e,t){_n=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}var Zr={readContext:Ee,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},df={readContext:Ee,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:Ca,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:Ea,useDebugValue:Eo,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=Ea(!1),t=e[0];return e=sf.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Ie();if($){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),J===null)throw Error(w(349));_t&30||gu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ca(xu.bind(null,r,i,e),[e]),r.flags|=2048,Wn(9,yu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=J.identifierPrefix;if($){var n=He,r=Be;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ff={readContext:Ee,useCallback:_u,useContext:Ee,useEffect:jo,useImperativeHandle:Cu,useInsertionEffect:Nu,useLayoutEffect:ju,useMemo:zu,useReducer:Bl,useRef:Su,useState:function(){return Bl(Qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ce();return Pu(t,K.memoizedState,e)},useTransition:function(){var e=Bl(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:hu,useId:Tu,unstable_isNewReconciler:!1},pf={readContext:Ee,useCallback:_u,useContext:Ee,useEffect:jo,useImperativeHandle:Cu,useInsertionEffect:Nu,useLayoutEffect:ju,useMemo:zu,useReducer:Hl,useRef:Su,useState:function(){return Hl(Qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ce();return K===null?t.memoizedState=e:Pu(t,K.memoizedState,e)},useTransition:function(){var e=Hl(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:hu,useId:Tu,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),i=Ve(r,l);i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Me(t,e,l,r),Er(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),i=Ve(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=at(e,i,l),t!==null&&(Me(t,e,l,r),Er(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ut(e),l=Ve(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Me(t,e,r,n),Er(t,e,r))}};function _a(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,r)||!Fn(l,i):!0}function Ou(e,t,n){var r=!1,l=ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=pe(t)?Et:ie.current,r=t.contextTypes,i=(r=r!=null)?Jt(e,l):ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function za(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function zi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},go(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=pe(t)?Et:ie.current,l.context=Jt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_i(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Kr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mf=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Ai=r),Pi(e,t)},n}function Iu(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Pi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=zf.bind(null,e,t,n),t.then(e,e))}function Ta(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function La(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var vf=Ge.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?du(t,null,n,r):en(t,e.child,n,r)}function Da(e,t,n,r,l){n=n.render;var i=t.ref;return Gt(t,l),r=So(e,t,n,r,i,l),n=No(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):($&&n&&uo(t),t.flags|=1,oe(e,t,r,l),t.child)}function Ma(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Mo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,bu(e,t,i,r,l)):(e=Lr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(o,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ct(i,r),e.ref=t.ref,e.return=t,t.child=e}function bu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Fn(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return Ti(e,t,n,r,l)}function Fu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Vt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Vt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,b(Vt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,b(Vt,ve),ve|=r;return oe(e,t,l,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,l){var i=pe(n)?Et:ie.current;return i=Jt(t,i),Gt(t,l),n=So(e,t,n,r,i,l),r=No(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):($&&r&&uo(t),t.flags|=1,oe(e,t,n,l),t.child)}function Oa(e,t,n,r,l){if(pe(n)){var i=!0;Hr(t)}else i=!1;if(Gt(t,l),t.stateNode===null)zr(e,t),Ou(t,n,r),zi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=pe(n)?Et:ie.current,d=Jt(t,d));var h=n.getDerivedStateFromProps,y=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&za(t,o,r,d),Je=!1;var g=t.memoizedState;o.state=g,Kr(t,r,o,l),u=t.memoizedState,a!==r||g!==u||fe.current||Je?(typeof h=="function"&&(_i(t,n,h,r),u=t.memoizedState),(a=Je||_a(t,n,a,r,g,u,d))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,pu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Pe(t.type,a),o.props=d,y=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=pe(n)?Et:ie.current,u=Jt(t,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==y||g!==u)&&za(t,o,r,u),Je=!1,g=t.memoizedState,o.state=g,Kr(t,r,o,l);var v=t.memoizedState;a!==y||g!==v||fe.current||Je?(typeof S=="function"&&(_i(t,n,S,r),v=t.memoizedState),(d=Je||_a(t,n,d,r,g,v,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Li(e,t,n,r,i,l)}function Li(e,t,n,r,l,i){Au(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&xa(t,n,!1),Ke(e,t,i);r=t.stateNode,vf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=en(t,e.child,null,i),t.child=en(t,null,a,i)):oe(e,t,a,i),t.memoizedState=r.state,l&&xa(t,n,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?ya(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ya(e,t.context,!1),yo(e,t.containerInfo)}function Ra(e,t,n,r,l){return qt(),fo(l),t.flags|=256,oe(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Mi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),b(U,l&1),e===null)return Ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ml(o,r,0,null),e=jt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Mi(n),t.memoizedState=Di,e):Co(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return hf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ct(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=ct(a,i):(i=jt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Mi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return i=e.child,e=i.sibling,r=ct(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Co(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&fo(r),en(t,e.child,null,n),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(w(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ml({mode:"visible",children:r.children},l,0,null),i=jt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&en(t,e.child,null,o),t.child.memoizedState=Mi(o),t.memoizedState=Di,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(w(419)),r=Vl(i,r,void 0),hr(e,t,o,r)}if(a=(o&e.childLanes)!==0,de||a){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Me(r,e,l,-1))}return Do(),r=Vl(Error(w(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Pf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=ot(l.nextSibling),ge=t,$=!0,Le=null,e!==null&&(we[Se++]=Be,we[Se++]=He,we[Se++]=Ct,Be=e.id,He=e.overflow,Ct=t),t=Co(t,r.children),t.flags|=4096,t)}function Ia(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ci(e.return,t,n)}function Ql(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Bu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ia(e,n,t);else if(e.tag===19)Ia(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Gr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ql(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Gr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ql(t,!0,n,null,i);break;case"together":Ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:$u(t),qt();break;case 5:mu(t);break;case 1:pe(t.type)&&Hr(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;b(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Uu(e,t,n):(b(U,U.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);b(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),b(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Fu(e,t,n)}return Ke(e,t,n)}var Hu,Oi,Vu,Qu;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oi=function(){};Vu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Ae.current);var i=null;switch(n){case"input":l=ni(e,l),r=ni(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=ii(e,l),r=ii(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ai(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var a=l[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(a=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&F("scroll",e),i||a===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Qu=function(e,t,n,r){n!==r&&(t.flags|=4)};function hn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yf(e,t,n){var r=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Br(),re(t),null;case 3:return r=t.stateNode,tn(),A(fe),A(ie),ko(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Bi(Le),Le=null))),Oi(e,t),re(t),null;case 5:xo(t);var l=St(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Vu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return re(t),null}if(e=St(Ae.current),mr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[be]=t,r[Un]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<wn.length;l++)F(wn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Qo(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":Xo(r,i),F("invalid",r)}ai(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,a,e),l=["children",""+a]):Ln.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&F("scroll",r)}switch(n){case"input":ir(r),Wo(r,i,!0);break;case"textarea":ir(r),Ko(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[be]=t,e[Un]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(o=si(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<wn.length;l++)F(wn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Qo(e,r),l=ni(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":Xo(e,r),l=ii(e,r),F("invalid",e);break;default:l=r}ai(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Ss(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ks(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ln.hasOwnProperty(i)?u!=null&&i==="onScroll"&&F("scroll",e):u!=null&&Gi(e,i,u,o))}switch(n){case"input":ir(e),Wo(e,r,!1);break;case"textarea":ir(e),Ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Qu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=St(Hn.current),St(Ae.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return re(t),null;case 13:if(A(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&he!==null&&t.mode&1&&!(t.flags&128))uu(),qt(),t.flags|=98560,i=!1;else if(i=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[be]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else Le!==null&&(Bi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?G===0&&(G=3):Do())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),Oi(e,t),e===null&&An(t.stateNode.containerInfo),re(t),null;case 10:return vo(t.type._context),re(t),null;case 17:return pe(t.type)&&Br(),re(t),null;case 19:if(A(U),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)hn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gr(e),o!==null){for(t.flags|=128,hn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&W()>rn&&(t.flags|=128,r=!0,hn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Gr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return re(t),null}else 2*W()-i.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,hn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=W(),t.sibling=null,n=U.current,b(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Lo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function xf(e,t){switch(co(t),t.tag){case 1:return pe(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),A(fe),A(ie),ko(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(A(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(U),null;case 4:return tn(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var gr=!1,le=!1,kf=typeof WeakSet=="function"?WeakSet:Set,C=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ri(e,t,n){try{n()}catch(r){V(e,t,r)}}var ba=!1;function wf(e,t){if(yi=Fr,e=Ys(),so(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,h=0,y=e,g=null;t:for(;;){for(var S;y!==n||l!==0&&y.nodeType!==3||(a=o+l),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(S=y.firstChild)!==null;)g=y,y=S;for(;;){if(y===e)break t;if(g===n&&++d===l&&(a=o),g===i&&++h===r&&(u=o),(S=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=S}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xi={focusedElem:e,selectionRange:n},Fr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,z=v.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Pe(t.type,x),z);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(m){V(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=ba,ba=!1,v}function zn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ri(t,n,i)}l=l.next}while(l!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ii(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[Un],delete t[Si],delete t[nf],delete t[rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return e.tag===5||e.tag===3||e.tag===4}function Fa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}var q=null,Te=!1;function Ye(e,t,n){for(n=n.child;n!==null;)Ku(e,t,n),n=n.sibling}function Ku(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:le||Ht(n,t);case 6:var r=q,l=Te;q=null,Ye(e,t,n),q=r,Te=l,q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Te?(e=q,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),In(e)):Fl(q,n.stateNode));break;case 4:r=q,l=Te,q=n.stateNode.containerInfo,Te=!0,Ye(e,t,n),q=r,Te=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ri(n,t,o),l=l.next}while(l!==r)}Ye(e,t,n);break;case 1:if(!le&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}Ye(e,t,n);break;case 21:Ye(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ye(e,t,n),le=r):Ye(e,t,n);break;default:Ye(e,t,n)}}function Aa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kf),t.forEach(function(r){var l=Tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Te=!1;break e;case 3:q=a.stateNode.containerInfo,Te=!0;break e;case 4:q=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(q===null)throw Error(w(160));Ku(i,o,l),q=null,Te=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){V(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}function Gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Re(e),r&4){try{zn(3,e,e.return),fl(3,e)}catch(x){V(e,e.return,x)}try{zn(5,e,e.return)}catch(x){V(e,e.return,x)}}break;case 1:ze(t,e),Re(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(ze(t,e),Re(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(x){V(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&gs(l,i),si(a,o);var d=si(a,i);for(o=0;o<u.length;o+=2){var h=u[o],y=u[o+1];h==="style"?Ss(l,y):h==="dangerouslySetInnerHTML"?ks(l,y):h==="children"?Dn(l,y):Gi(l,h,y,d)}switch(a){case"input":ri(l,i);break;case"textarea":ys(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Qt(l,!!i.multiple,S,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Un]=i}catch(x){V(e,e.return,x)}}break;case 6:if(ze(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(x){V(e,e.return,x)}}break;case 3:if(ze(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(x){V(e,e.return,x)}break;case 4:ze(t,e),Re(e);break;case 13:ze(t,e),Re(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Po=W())),r&4&&Aa(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||h,ze(t,e),le=d):ze(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(C=e,h=e.child;h!==null;){for(y=C=h;C!==null;){switch(g=C,S=g.child,g.tag){case 0:case 11:case 14:case 15:zn(4,g,g.return);break;case 1:Ht(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){V(r,n,x)}}break;case 5:Ht(g,g.return);break;case 22:if(g.memoizedState!==null){Ua(y);continue}}S!==null?(S.return=g,C=S):Ua(y)}h=h.sibling}e:for(h=null,y=e;;){if(y.tag===5){if(h===null){h=y;try{l=y.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ws("display",o))}catch(x){V(e,e.return,x)}}}else if(y.tag===6){if(h===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(x){V(e,e.return,x)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;h===y&&(h=null),y=y.return}h===y&&(h=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:ze(t,e),Re(e),r&4&&Aa(e);break;case 21:break;default:ze(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xu(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=Fa(e);Fi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Fa(e);bi(e,a,o);break;default:throw Error(w(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e,t,n){C=e,Yu(e)}function Yu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||le;a=gr;var d=le;if(gr=o,(le=u)&&!d)for(C=l;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?Ba(l):u!==null?(u.return=o,C=u):Ba(l);for(;i!==null;)C=i,Yu(i),i=i.sibling;C=l,gr=a,le=d}$a(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,C=i):$a(e)}}function $a(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ja(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ja(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var y=h.dehydrated;y!==null&&In(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Ii(t)}catch(g){V(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ua(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ba(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(u){V(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){V(t,l,u)}}var i=t.return;try{Ii(t)}catch(u){V(t,i,u)}break;case 5:var o=t.return;try{Ii(t)}catch(u){V(t,o,u)}}}catch(u){V(t,t.return,u)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Nf=Math.ceil,Jr=Ge.ReactCurrentDispatcher,_o=Ge.ReactCurrentOwner,je=Ge.ReactCurrentBatchConfig,R=0,J=null,X=null,ee=0,ve=0,Vt=mt(0),G=0,Xn=null,zt=0,pl=0,zo=0,Pn=null,ce=null,Po=0,rn=1/0,$e=null,qr=!1,Ai=null,st=null,yr=!1,nt=null,el=0,Tn=0,$i=null,Pr=-1,Tr=0;function ae(){return R&6?W():Pr!==-1?Pr:Pr=W()}function ut(e){return e.mode&1?R&2&&ee!==0?ee&-ee:of.transition!==null?(Tr===0&&(Tr=Os()),Tr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e):1}function Me(e,t,n,r){if(50<Tn)throw Tn=0,$i=null,Error(w(185));Zn(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(pl|=n),G===4&&et(e,ee)),me(e,r),n===1&&R===0&&!(t.mode&1)&&(rn=W()+500,ul&&vt()))}function me(e,t){var n=e.callbackNode;id(e,t);var r=br(e,e===J?ee:0);if(r===0)n!==null&&Zo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zo(n),t===1)e.tag===0?lf(Ha.bind(null,e)):ou(Ha.bind(null,e)),ef(function(){!(R&6)&&vt()}),n=null;else{switch(Rs(r)){case 1:n=eo;break;case 4:n=Ds;break;case 16:n=Ir;break;case 536870912:n=Ms;break;default:n=Ir}n=lc(n,Zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zu(e,t){if(Pr=-1,Tr=0,R&6)throw Error(w(327));var n=e.callbackNode;if(Yt()&&e.callbackNode!==n)return null;var r=br(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tl(e,r);else{t=r;var l=R;R|=2;var i=qu();(J!==e||ee!==t)&&($e=null,rn=W()+500,Nt(e,t));do try{Cf();break}catch(a){Ju(e,a)}while(1);mo(),Jr.current=i,R=l,X!==null?t=0:(J=null,ee=0,t=G)}if(t!==0){if(t===2&&(l=pi(e),l!==0&&(r=l,t=Ui(e,l))),t===1)throw n=Xn,Nt(e,0),et(e,r),me(e,W()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!jf(l)&&(t=tl(e,r),t===2&&(i=pi(e),i!==0&&(r=i,t=Ui(e,i))),t===1))throw n=Xn,Nt(e,0),et(e,r),me(e,W()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:xt(e,ce,$e);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Po+500-W(),10<t)){if(br(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wi(xt.bind(null,e,ce,$e),t);break}xt(e,ce,$e);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nf(r/1960))-r,10<r){e.timeoutHandle=wi(xt.bind(null,e,ce,$e),r);break}xt(e,ce,$e);break;case 5:xt(e,ce,$e);break;default:throw Error(w(329))}}}return me(e,W()),e.callbackNode===n?Zu.bind(null,e):null}function Ui(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=tl(e,t),e!==2&&(t=ce,ce=n,t!==null&&Bi(t)),e}function Bi(e){ce===null?ce=e:ce.push.apply(ce,e)}function jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Oe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~zo,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ha(e){if(R&6)throw Error(w(327));Yt();var t=br(e,0);if(!(t&1))return me(e,W()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=pi(e);r!==0&&(t=r,n=Ui(e,r))}if(n===1)throw n=Xn,Nt(e,0),et(e,t),me(e,W()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ce,$e),me(e,W()),null}function To(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(rn=W()+500,ul&&vt())}}function Pt(e){nt!==null&&nt.tag===0&&!(R&6)&&Yt();var t=R;R|=1;var n=je.transition,r=I;try{if(je.transition=null,I=1,e)return e()}finally{I=r,je.transition=n,R=t,!(R&6)&&vt()}}function Lo(){ve=Vt.current,A(Vt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qd(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:tn(),A(fe),A(ie),ko();break;case 5:xo(r);break;case 4:tn();break;case 13:A(U);break;case 19:A(U);break;case 10:vo(r.type._context);break;case 22:case 23:Lo()}n=n.return}if(J=e,X=e=ct(e.current,null),ee=ve=t,G=0,Xn=null,zo=pl=zt=0,ce=Pn=null,wt!==null){for(t=0;t<wt.length;t++)if(n=wt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}wt=null}return e}function Ju(e,t){do{var n=X;try{if(mo(),Cr.current=Zr,Yr){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(_t=0,Z=K=B=null,_n=!1,Vn=0,_o.current=null,n===null||n.return===null){G=1,Xn=t,X=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=ee,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,y=h.tag;if(!(h.mode&1)&&(y===0||y===11||y===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Ta(o);if(S!==null){S.flags&=-257,La(S,o,a,i,t),S.mode&1&&Pa(i,d,t),t=S,u=d;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){Pa(i,d,t),Do();break e}u=Error(w(426))}}else if($&&a.mode&1){var z=Ta(o);if(z!==null){!(z.flags&65536)&&(z.flags|=256),La(z,o,a,i,t),fo(nn(u,a));break e}}i=u=nn(u,a),G!==4&&(G=2),Pn===null?Pn=[i]:Pn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ru(i,u,t);Na(i,p);break e;case 1:a=u;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var m=Iu(i,a,t);Na(i,m);break e}}i=i.return}while(i!==null)}tc(n)}catch(k){t=k,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function qu(){var e=Jr.current;return Jr.current=Zr,e===null?Zr:e}function Do(){(G===0||G===3||G===2)&&(G=4),J===null||!(zt&268435455)&&!(pl&268435455)||et(J,ee)}function tl(e,t){var n=R;R|=2;var r=qu();(J!==e||ee!==t)&&($e=null,Nt(e,t));do try{Ef();break}catch(l){Ju(e,l)}while(1);if(mo(),R=n,Jr.current=r,X!==null)throw Error(w(261));return J=null,ee=0,G}function Ef(){for(;X!==null;)ec(X)}function Cf(){for(;X!==null&&!Yc();)ec(X)}function ec(e){var t=rc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?tc(e):X=t,_o.current=null}function tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xf(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,X=null;return}}else if(n=yf(n,t,ve),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);G===0&&(G=5)}function xt(e,t,n){var r=I,l=je.transition;try{je.transition=null,I=1,_f(e,t,n,r)}finally{je.transition=l,I=r}return null}function _f(e,t,n,r){do Yt();while(nt!==null);if(R&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(od(e,i),e===J&&(X=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,lc(Ir,function(){return Yt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=je.transition,je.transition=null;var o=I;I=1;var a=R;R|=4,_o.current=null,wf(e,n),Gu(n,e),Wd(xi),Fr=!!yi,xi=yi=null,e.current=n,Sf(n),Zc(),R=a,I=o,je.transition=i}else e.current=n;if(yr&&(yr=!1,nt=e,el=l),i=e.pendingLanes,i===0&&(st=null),ed(n.stateNode),me(e,W()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Ai,Ai=null,e;return el&1&&e.tag!==0&&Yt(),i=e.pendingLanes,i&1?e===$i?Tn++:(Tn=0,$i=e):Tn=0,vt(),null}function Yt(){if(nt!==null){var e=Rs(el),t=je.transition,n=I;try{if(je.transition=null,I=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,el=0,R&6)throw Error(w(331));var l=R;for(R|=4,C=e.current;C!==null;){var i=C,o=i.child;if(C.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(C=d;C!==null;){var h=C;switch(h.tag){case 0:case 11:case 15:zn(8,h,i)}var y=h.child;if(y!==null)y.return=h,C=y;else for(;C!==null;){h=C;var g=h.sibling,S=h.return;if(Wu(h),h===d){C=null;break}if(g!==null){g.return=S,C=g;break}C=S}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var z=x.sibling;x.sibling=null,x=z}while(x!==null)}}C=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,C=o;else e:for(;C!==null;){if(i=C,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zn(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,C=p;break e}C=i.return}}var c=e.current;for(C=c;C!==null;){o=C;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,C=f;else e:for(o=c;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fl(9,a)}}catch(k){V(a,a.return,k)}if(a===o){C=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,C=m;break e}C=a.return}}if(R=l,vt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{I=n,je.transition=t}}return!1}function Va(e,t,n){t=nn(n,t),t=Ru(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Zn(e,1,t),me(e,t))}function V(e,t,n){if(e.tag===3)Va(e,e,n);else for(;t!==null;){if(t.tag===3){Va(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=Iu(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Zn(t,1,e),me(t,e));break}}t=t.return}}function zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(G===4||G===3&&(ee&130023424)===ee&&500>W()-Po?Nt(e,0):zo|=n),me(e,t)}function nc(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=ae();e=Xe(e,t),e!==null&&(Zn(e,t,n),me(e,n))}function Pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function Tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,gf(e,t,n);de=!!(e.flags&131072)}else de=!1,$&&t.flags&1048576&&au(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=Jt(t,ie.current);Gt(t,n),l=So(null,t,r,e,l,n);var i=No();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,go(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,zi(t,r,e,n),t=Li(null,t,r,!0,i,n)):(t.tag=0,$&&i&&uo(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Df(r),e=Pe(r,e),l){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=Oa(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Ma(null,t,r,Pe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Ti(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Oa(e,t,r,l,n);case 3:e:{if($u(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,l=i.element,pu(e,t),Kr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=nn(Error(w(423)),t),t=Ra(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(w(424)),t),t=Ra(e,t,r,n,l);break e}else for(he=ot(t.stateNode.containerInfo.firstChild),ge=t,$=!0,Le=null,n=du(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Ke(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return mu(t),e===null&&Ei(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,ki(r,l)?o=null:i!==null&&ki(r,i)&&(t.flags|=32),Au(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Ei(t),null;case 13:return Uu(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),Da(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,b(Wr,r._currentValue),r._currentValue=o,i!==null)if(Oe(i.value,o)){if(i.children===l.children&&!fe.current){t=Ke(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ve(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ci(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ci(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Gt(t,n),l=Ee(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Pe(r,t.pendingProps),l=Pe(r.type,l),Ma(e,t,r,l,n);case 15:return bu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Pe(r,l),zr(e,t),t.tag=1,pe(r)?(e=!0,Hr(t)):e=!1,Gt(t,n),Ou(t,r,l),zi(t,r,l,n),Li(null,t,r,!0,e,n);case 19:return Bu(e,t,n);case 22:return Fu(e,t,n)}throw Error(w(156,t.tag))};function lc(e,t){return Ls(e,t)}function Lf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Lf(e,t,n,r)}function Mo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Df(e){if(typeof e=="function")return Mo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zi)return 11;if(e===Ji)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Mo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return jt(n.children,l,i,t);case Yi:o=8,l|=8;break;case Jl:return e=Ne(12,n,t,l|2),e.elementType=Jl,e.lanes=i,e;case ql:return e=Ne(13,n,t,l),e.elementType=ql,e.lanes=i,e;case ei:return e=Ne(19,n,t,l),e.elementType=ei,e.lanes=i,e;case ms:return ml(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fs:o=10;break e;case ps:o=9;break e;case Zi:o=11;break e;case Ji:o=14;break e;case Ze:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function jt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ms,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Oo(e,t,n,r,l,i,o,a,u){return e=new Mf(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(i),e}function Of(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(pe(n))return iu(e,n,t)}return t}function oc(e,t,n,r,l,i,o,a,u){return e=Oo(n,r,!0,e,l,i,o,a,u),e.context=ic(null),n=e.current,r=ae(),l=ut(n),i=Ve(r,l),i.callback=t??null,at(n,i,l),e.current.lanes=l,Zn(e,l,r),me(e,r),e}function vl(e,t,n,r){var l=t.current,i=ae(),o=ut(l);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,o),e!==null&&(Me(e,l,o,i),Er(e,l,o)),o}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Qa(e,t),(e=e.alternate)&&Qa(e,t)}function Rf(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}hl.prototype.render=Io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));vl(e,t,null,null)};hl.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){vl(null,e,null,null)}),t[We]=null}};function hl(e){this._internalRoot=e}hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&$s(e)}};function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function If(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=nl(o);i.call(d)}}var o=oc(t,r,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=o,e[We]=o.current,An(e.nodeType===8?e.parentNode:e),Pt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var d=nl(u);a.call(d)}}var u=Oo(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=u,e[We]=u.current,An(e.nodeType===8?e.parentNode:e),Pt(function(){vl(t,u,n,r)}),u}function yl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=nl(o);a.call(u)}}vl(t,o,e,l)}else o=If(n,t,e,l,r);return nl(o)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(to(t,n|1),me(t,W()),!(R&6)&&(rn=W()+500,vt()))}break;case 13:Pt(function(){var r=Xe(e,1);if(r!==null){var l=ae();Me(r,e,1,l)}}),Ro(e,1)}};no=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ae();Me(t,e,134217728,n)}Ro(e,134217728)}};bs=function(e){if(e.tag===13){var t=ut(e),n=Xe(e,t);if(n!==null){var r=ae();Me(n,e,t,r)}Ro(e,t)}};Fs=function(){return I};As=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};ci=function(e,t,n){switch(t){case"input":if(ri(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(w(90));hs(r),ri(r,l)}}}break;case"textarea":ys(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};Es=To;Cs=Pt;var bf={usingClientEntryPoint:!1,Events:[qn,Ft,sl,Ns,js,To]},gn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:gn.bundleType,version:gn.version,rendererPackageName:gn.rendererPackageName,rendererConfig:gn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ps(e),e===null?null:e.stateNode},findFiberByHostInstance:gn.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{ll=xr.inject(Ff),Fe=xr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bo(t))throw Error(w(200));return Of(e,t,null,n)};xe.createRoot=function(e,t){if(!bo(e))throw Error(w(299));var n=!1,r="",l=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Oo(e,1,!1,null,null,n,!1,r,l),e[We]=t.current,An(e.nodeType===8?e.parentNode:e),new Io(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ps(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Pt(e)};xe.hydrate=function(e,t,n){if(!gl(t))throw Error(w(200));return yl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!bo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ac;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=oc(t,null,e,1,n??null,l,!1,i,o),e[We]=t.current,An(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new hl(t)};xe.render=function(e,t,n){if(!gl(t))throw Error(w(200));return yl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!gl(e))throw Error(w(40));return e._reactRootContainer?(Pt(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};xe.unstable_batchedUpdates=To;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return yl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),ss.exports=xe;var Af=ss.exports,Xa=Af;Yl.createRoot=Xa.createRoot,Yl.hydrateRoot=Xa.hydrateRoot;const Kn={LOW:{label:"Low",color:"#6C8EBF",icon:"○",xpMult:.8},MEDIUM:{label:"Medium",color:"#F5A623",icon:"◐",xpMult:1},HIGH:{label:"High",color:"#FF6584",icon:"●",xpMult:1.3},URGENT:{label:"Urgent",color:"#FF3860",icon:"⚡",xpMult:1.6}},Gn={XS:{label:"Quick (5m)",minutes:5,baseXP:20},S:{label:"Short (15m)",minutes:15,baseXP:40},M:{label:"Medium (30m)",minutes:30,baseXP:75},L:{label:"Long (1h)",minutes:60,baseXP:140},XL:{label:"Deep (2h+)",minutes:120,baseXP:250}},$f=[{id:"quick_start",name:"Quick Start",description:"Earn +20 XP bonus for starting any task within 5 minutes of viewing it.",icon:"⚡",effect_type:"xp_bonus_on_start",effect_value:20,cost:1},{id:"deep_focus",name:"Deep Focus",description:"Focus sessions earn +15% more XP.",icon:"🔮",effect_type:"xp_mult_focus",effect_value:.15,cost:1},{id:"second_wind",name:"Second Wind",description:"Completing an overdue task gives full XP instead of reduced.",icon:"🌬️",effect_type:"no_overdue_penalty",effect_value:!0,cost:2},{id:"subtask_master",name:"Subtask Master",description:"Subtask XP increased by 50%.",icon:"📋",effect_type:"subtask_xp_mult",effect_value:.5,cost:1},{id:"streak_shield",name:"Streak Shield",description:"Once per week, missing a daily will not break your streak.",icon:"🛡️",effect_type:"streak_forgiveness",effect_value:1,cost:2}],Ka=[{id:"task-1",title:"Review project proposal",notes:"Check the Q3 roadmap and leave comments before the team meeting.",dueAt:new Date(Date.now()+2*60*60*1e3).toISOString(),priority:"HIGH",effort:"M",status:"pending",tags:["work"],subtasks:[{id:"st-1a",title:"Read through executive summary",done:!0},{id:"st-1b",title:"Add inline comments",done:!1},{id:"st-1c",title:"Write summary feedback",done:!1}],createdAt:new Date(Date.now()-24*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-2",title:"Reply to Sarah's email",notes:"",dueAt:new Date(Date.now()+30*60*1e3).toISOString(),priority:"URGENT",effort:"XS",status:"pending",tags:["work","comms"],subtasks:[],createdAt:new Date(Date.now()-60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-3",title:"Grocery run",notes:"Pick up ingredients for the week. Check the list on the fridge.",dueAt:new Date(Date.now()+5*60*60*1e3).toISOString(),priority:"MEDIUM",effort:"S",status:"pending",tags:["personal","errands"],subtasks:[{id:"st-3a",title:"Check fridge for what's needed",done:!1},{id:"st-3b",title:"Go to store",done:!1}],createdAt:new Date(Date.now()-2*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-4",title:"Do 20-min stretching routine",notes:"Back has been tight — do the hip flexor and shoulder opener sequences.",dueAt:new Date(Date.now()-60*60*1e3).toISOString(),priority:"LOW",effort:"XS",status:"pending",tags:["health"],subtasks:[],createdAt:new Date(Date.now()-5*60*60*1e3).toISOString(),completedAt:null,isOverdue:!0}],Ga={id:"user-1",displayName:"Adventurer",level:3,xp:340,xpToNext:500,gold:127,streak:5,talentPoints:1,unlockedTalents:["quick_start"],title:"Aspiring Chronicler"},Ya=[{id:"hist-1",title:"Morning standup notes",completedAt:new Date(Date.now()-3*60*60*1e3).toISOString(),xpEarned:40,goldEarned:8},{id:"hist-2",title:"Send weekly update to manager",completedAt:new Date(Date.now()-5*60*60*1e3).toISOString(),xpEarned:75,goldEarned:15}],Kl={work:"#4FC3F7",personal:"#B39DDB",health:"#69F0AE",errands:"#F5A623",comms:"#FF6584",school:"#FFD54F"},Uf=[{id:"dashboard",icon:"⚔️",label:"Quest Board"},{id:"focus",icon:"🔮",label:"Focus Mode"},{id:"rewards",icon:"✨",label:"Rewards"},{id:"talents",icon:"🌟",label:"Talents"}];function Bf({user:e,activeView:t,onNavigate:n,pendingCount:r}){const l=Math.round(e.xp/e.xpToNext*100);return s.jsxs("nav",{className:"sidebar",children:[s.jsxs("div",{className:"sidebar-logo",children:[s.jsx("div",{className:"logo-icon",children:"⚔"}),s.jsxs("div",{children:[s.jsx("div",{className:"logo-title",children:"QuestLog"}),s.jsx("div",{className:"logo-sub",children:"ADHD Task Manager"})]})]}),s.jsxs("div",{className:"sidebar-profile",children:[s.jsx("div",{className:"profile-avatar",children:e.displayName[0]}),s.jsxs("div",{className:"profile-info",children:[s.jsx("div",{className:"profile-name",children:e.displayName}),s.jsx("div",{className:"profile-title",children:e.title})]})]}),s.jsxs("div",{className:"sidebar-stats",children:[s.jsxs("div",{className:"stat-chip",children:[s.jsx("span",{className:"stat-icon",children:"⚡"}),s.jsxs("div",{children:[s.jsx("div",{className:"stat-label",children:"Level"}),s.jsx("div",{className:"stat-value font-display",children:e.level})]})]}),s.jsxs("div",{className:"stat-chip",children:[s.jsx("span",{className:"stat-icon gold",children:"💰"}),s.jsxs("div",{children:[s.jsx("div",{className:"stat-label",children:"Gold"}),s.jsx("div",{className:"stat-value text-gold",children:e.gold})]})]}),s.jsxs("div",{className:"stat-chip",children:[s.jsx("span",{className:"stat-icon",children:"🔥"}),s.jsxs("div",{children:[s.jsx("div",{className:"stat-label",children:"Streak"}),s.jsxs("div",{className:"stat-value",style:{color:"var(--amber)"},children:[e.streak,"d"]})]})]})]}),s.jsxs("div",{className:"sidebar-xp",children:[s.jsxs("div",{className:"sidebar-xp-labels",children:[s.jsx("span",{className:"text-secondary text-xs",children:"XP Progress"}),s.jsxs("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:[e.xp," / ",e.xpToNext]})]}),s.jsx("div",{className:"xp-bar-track",children:s.jsx("div",{className:"xp-bar-fill",style:{width:`${l}%`}})}),s.jsxs("div",{className:"text-xs text-muted",style:{marginTop:4},children:[e.xpToNext-e.xp," XP to Level ",e.level+1]})]}),s.jsx("div",{className:"sidebar-nav",children:Uf.map(i=>s.jsxs("button",{className:`nav-item ${t===i.id?"active":""}`,onClick:()=>n(i.id),children:[s.jsx("span",{className:"nav-icon",children:i.icon}),s.jsx("span",{className:"nav-label",children:i.label}),i.id==="dashboard"&&r>0&&s.jsx("span",{className:"nav-badge",children:r}),i.id==="talents"&&e.talentPoints>0&&s.jsx("span",{className:"nav-badge talent-badge",children:e.talentPoints})]},i.id))}),s.jsx("style",{children:`
        .sidebar {
          width: 240px;
          flex-shrink: 0;
          background: var(--bg-surface);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding: var(--space-6) var(--space-4);
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
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-family: var(--font-display);
          color: var(--gold);
        }

        .logo-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.05em;
        }

        .logo-sub {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .sidebar-profile {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-3);
        }

        .profile-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          color: white;
          flex-shrink: 0;
        }

        .profile-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .profile-title {
          font-size: 0.7rem;
          color: var(--purple);
          font-style: italic;
        }

        .sidebar-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-2);
        }

        .stat-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: var(--space-2) var(--space-1);
          text-align: center;
        }

        .stat-icon { font-size: 1rem; }

        .stat-label {
          font-size: 0.62rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .stat-value {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .sidebar-xp {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .sidebar-xp-labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-3);
          border-radius: var(--radius-md);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 600;
          font-family: var(--font-body);
          width: 100%;
          text-align: left;
          transition: all 0.15s var(--ease-out);
          position: relative;
        }

        .nav-item:hover {
          background: var(--bg-elevated);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: var(--gold-dim);
          color: var(--gold);
          border: 1px solid var(--gold-glow);
        }

        .nav-icon { font-size: 1.1rem; }
        .nav-label { flex: 1; }

        .nav-badge {
          background: var(--coral);
          color: white;
          border-radius: var(--radius-full);
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 800;
        }

        .talent-badge {
          background: var(--purple);
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            height: auto;
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            padding: var(--space-3);
          }
          .sidebar-logo, .sidebar-profile, .sidebar-stats, .sidebar-xp { display: none; }
          .sidebar-nav { flex-direction: row; flex: unset; }
          .nav-label { display: none; }
        }
      `})]})}function uc(e,t=[]){const n=Gn[e.effort]||Gn.M,r=Kn[e.priority]||Kn.MEDIUM;let l=n.baseXP,i=Math.round(l*r.xpMult);const o=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,a=t.includes("second_wind");o&&!a?i=Math.round(i*.6):o||(i=Math.round(i*1.1));const u=Math.round(i*.2);return{xp:i,gold:u,isOverdue:o}}function Hf(e=[]){return{xp:e.includes("subtask_master")?Math.round(12*1.5):12,gold:2}}function Vf(e,t,n=[]){const r=Math.round(e*2.5),l=n.includes("deep_focus")?1.15:1,i=t?1.25:.7,o=Math.round(r*l*i),a=Math.round(o*.15);return{xp:o,gold:a}}function Gl(e){return Math.round(200*Math.pow(e,1.4))}function Qf(e,t,n){let r=e,l=t+n,i=!1,o=0;for(;l>=Gl(r);)l-=Gl(r),r+=1,i=!0,o+=1;return{level:r,xp:l,xpToNext:Gl(r),leveledUp:i,talentPointsEarned:o}}function Wf(e){if(!e)return null;const t=new Date(e)-new Date,n=Math.abs(t);if(n<60*1e3)return t<0?"Just overdue":"Due now";if(n<60*60*1e3){const l=Math.round(n/6e4);return t<0?`${l}m overdue`:`in ${l}m`}if(n<24*60*60*1e3){const l=Math.round(n/36e5);return t<0?`${l}h overdue`:`in ${l}h`}const r=Math.round(n/864e5);return t<0?`${r}d overdue`:`in ${r}d`}function Dr(){return`${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Xf(e){const t={URGENT:0,HIGH:1,MEDIUM:2,LOW:3};return[...e].sort((n,r)=>{const l=n.isOverdue||n.dueAt&&new Date(n.dueAt)<new Date,i=r.isOverdue||r.dueAt&&new Date(r.dueAt)<new Date;if(l!==i)return l?-1:1;const o=(t[n.priority]||2)-(t[r.priority]||2);return o!==0?o:n.dueAt&&r.dueAt?new Date(n.dueAt)-new Date(r.dueAt):0})}function Kf({task:e,userTalents:t=[],onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:i,onFocus:o,index:a=0}){var E;const[u,d]=P.useState(!1),[h,y]=P.useState(!1),[g,S]=P.useState(!1),v=Kn[e.priority]||Kn.MEDIUM,x=Gn[e.effort]||Gn.M,z=Wf(e.dueAt),p=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,c=e.subtasks.filter(j=>j.done).length,f=e.subtasks.length,{xp:m,gold:k}=uc(e,t);function N(){y(!0),setTimeout(()=>n(e.id),400)}return s.jsxs("div",{className:`task-card ${h?"completing":""} ${p?"overdue":""}`,style:{animationDelay:`${a*60}ms`,"--priority-color":v.color},children:[s.jsx("div",{className:"priority-stripe",style:{background:v.color}}),s.jsxs("div",{className:"task-card-inner",children:[s.jsxs("div",{className:"task-main-row",children:[s.jsx("button",{className:`task-checkbox ${h?"completing":""}`,onClick:N,title:"Mark complete","aria-label":"Complete task",children:h&&s.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"✓"})}),s.jsxs("div",{className:"task-title-block",onClick:()=>d(j=>!j),children:[s.jsx("div",{className:"task-title",children:e.title}),e.notes&&!u&&s.jsx("div",{className:"task-notes-preview",children:e.notes})]}),s.jsxs("div",{className:"task-actions-inline",children:[o&&s.jsx("button",{className:"btn btn-ghost task-action-btn",onClick:()=>o(e),title:"Start focus session",children:"🔮"}),s.jsx("button",{className:`task-expand-btn ${u?"open":""}`,onClick:()=>d(j=>!j),"aria-label":"Toggle details",children:"▾"})]})]}),s.jsxs("div",{className:"task-meta-row",children:[s.jsxs("span",{className:"badge",style:{background:`${v.color}18`,color:v.color,border:`1px solid ${v.color}30`},children:[v.icon," ",v.label]}),s.jsxs("span",{className:"badge",style:{background:"var(--bg-elevated)",color:"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["⏱ ",x.label]}),z&&s.jsxs("span",{className:`badge ${p?"overdue-badge":"due-badge"}`,children:[p?"⚠ ":"📅 ",z]}),(E=e.tags)==null?void 0:E.map(j=>s.jsx("span",{className:"tag-chip",style:{background:`${Kl[j]||"#888"}20`,color:Kl[j]||"#888",border:`1px solid ${Kl[j]||"#888"}30`},children:j},j)),f>0&&s.jsxs("span",{className:"badge",style:{background:c===f?"var(--green-dim)":"var(--bg-elevated)",color:c===f?"var(--green)":"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["☑ ",c,"/",f]}),s.jsxs("span",{className:"reward-preview",children:["+",m," XP · +",k," 💰"]})]}),u&&s.jsxs("div",{className:"task-expanded animate-in",children:[e.notes&&s.jsx("div",{className:"task-notes",children:e.notes}),f>0&&s.jsxs("div",{className:"subtask-list",children:[s.jsx("div",{className:"subtask-header",children:"Steps"}),e.subtasks.map(j=>s.jsxs("div",{className:`subtask-item ${j.done?"done":""}`,onClick:()=>r(e.id,j.id),children:[s.jsx("span",{className:"subtask-check",children:j.done?"✓":"○"}),s.jsx("span",{className:"subtask-title",children:j.title}),!j.done&&s.jsx("span",{className:"subtask-xp",children:"+12 XP"})]},j.id))]}),p&&s.jsxs("div",{className:"recovery-banner",children:[s.jsx("span",{children:"🌱"}),s.jsxs("div",{children:[s.jsx("div",{className:"recovery-title",children:"No worries — let's get back on track."}),s.jsxs("div",{className:"recovery-subtitle",children:["Completing it still earns you ",Math.round(m*.6)," XP. Or reschedule if needed."]})]})]}),s.jsxs("div",{className:"task-action-row",children:[s.jsxs("button",{className:"btn btn-success",onClick:N,children:["✓ Complete (+",m," XP)"]}),o&&s.jsx("button",{className:"btn btn-secondary",onClick:()=>o(e),children:"🔮 Focus"}),s.jsx("button",{className:"btn btn-ghost",onClick:()=>l(e.id,2),children:"⏰ Snooze 2h"}),g?s.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[s.jsx("button",{className:"btn btn-danger",onClick:()=>i(e.id),children:"Delete"}),s.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!1),children:"Cancel"})]}):s.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!0),style:{marginLeft:"auto"},children:"🗑"})]})]})]}),s.jsx("style",{children:`
        .task-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          transition: all 0.2s var(--ease-out);
          animation: fadeInUp 0.3s var(--ease-out) both;
          position: relative;
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
      `})]})}const Gf={title:"",notes:"",priority:"MEDIUM",effort:"S",dueAt:"",tags:[],subtasks:[]};function Yf({onAdd:e,onClose:t}){const[n,r]=P.useState(Gf),[l,i]=P.useState(!1),[o,a]=P.useState(""),u=P.useRef(null);P.useEffect(()=>{var v;(v=u.current)==null||v.focus()},[]);function d(v){v.preventDefault(),n.title.trim()&&(e({...n,dueAt:n.dueAt?new Date(n.dueAt).toISOString():null,subtasks:n.subtasks}),t())}function h(){o.trim()&&(r(v=>({...v,subtasks:[...v.subtasks,{id:Dr(),title:o.trim(),done:!1}]})),a(""))}function y(v){r(x=>({...x,subtasks:x.subtasks.filter(z=>z.id!==v)}))}function g(v){r(x=>({...x,tags:x.tags.includes(v)?x.tags.filter(z=>z!==v):[...x.tags,v]}))}const S=["work","personal","health","errands","comms","school"];return s.jsxs("div",{className:"modal-overlay",onClick:v=>{v.target===v.currentTarget&&t()},children:[s.jsxs("div",{className:"modal-box",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{className:"font-display",style:{color:"var(--gold)"},children:"⚔ New Quest"}),s.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:"1.2rem"},children:"×"})]}),s.jsxs("form",{onSubmit:d,className:"add-task-form",children:[s.jsx("div",{className:"form-group",children:s.jsx("input",{ref:u,type:"text",placeholder:"What needs to be done?",value:n.title,onChange:v=>r(x=>({...x,title:v.target.value})),className:"title-input",required:!0})}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Priority"}),s.jsx("div",{className:"priority-selector",children:Object.entries(Kn).map(([v,x])=>s.jsxs("button",{type:"button",className:`priority-option ${n.priority===v?"active":""}`,style:{"--pcolor":x.color},onClick:()=>r(z=>({...z,priority:v})),children:[s.jsx("span",{children:x.icon}),s.jsx("span",{children:x.label})]},v))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"How long will this take?"}),s.jsx("div",{className:"effort-selector",children:Object.entries(Gn).map(([v,x])=>s.jsx("button",{type:"button",className:`effort-option ${n.effort===v?"active":""}`,onClick:()=>r(z=>({...z,effort:v})),children:x.label},v))})]}),s.jsxs("button",{type:"button",className:"advanced-toggle",onClick:()=>i(v=>!v),children:[s.jsx("span",{children:l?"▾":"▸"}),s.jsx("span",{children:l?"Fewer options":"More options (notes, due date, subtasks, tags)"})]}),l&&s.jsxs("div",{className:"advanced-section animate-in",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Notes"}),s.jsx("textarea",{placeholder:"Any details or context...",value:n.notes,onChange:v=>r(x=>({...x,notes:v.target.value})),rows:3})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Due date"}),s.jsx("input",{type:"datetime-local",value:n.dueAt,onChange:v=>r(x=>({...x,dueAt:v.target.value}))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Tags"}),s.jsx("div",{className:"tag-selector",children:S.map(v=>s.jsx("button",{type:"button",className:`tag-option ${n.tags.includes(v)?"active":""}`,onClick:()=>g(v),children:v},v))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Break it down (subtasks)"}),s.jsxs("div",{className:"subtask-add-row",children:[s.jsx("input",{type:"text",placeholder:"Add a step...",value:o,onChange:v=>a(v.target.value),onKeyDown:v=>{v.key==="Enter"&&(v.preventDefault(),h())}}),s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:h,children:"+ Add"})]}),n.subtasks.length>0&&s.jsx("div",{className:"subtask-preview-list",children:n.subtasks.map(v=>s.jsxs("div",{className:"subtask-preview-item",children:[s.jsx("span",{children:"○"}),s.jsx("span",{style:{flex:1},children:v.title}),s.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>y(v.id),children:"×"})]},v.id))})]})]}),s.jsxs("div",{className:"form-actions",children:[s.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.title.trim(),children:"⚔ Add Quest"})]})]})]}),s.jsx("style",{children:`
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-6);
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
      `})]})}function Zf({user:e,tasks:t,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:i,onAddTask:o,onStartFocus:a}){const[u,d]=P.useState(!1),[h,y]=P.useState("all"),[g,S]=P.useState(""),v=P.useMemo(()=>Xf(t.filter(m=>m.status==="pending")),[t]),x=v.filter(m=>m.isOverdue||m.dueAt&&new Date(m.dueAt)<new Date);v.filter(m=>!m.isOverdue&&!(m.dueAt&&new Date(m.dueAt)<new Date));const z=P.useMemo(()=>h==="overdue"?x:h==="high"?v.filter(m=>["HIGH","URGENT"].includes(m.priority)):v,[h,v,x]);function p(m){m.preventDefault(),g.trim()&&(o({title:g.trim(),priority:"MEDIUM",effort:"S"}),S(""))}const c=v[0],f=(()=>{const m=new Date().getHours();return m<12?"Good morning":m<17?"Good afternoon":"Good evening"})();return s.jsxs("div",{className:"dashboard",children:[s.jsxs("div",{className:"dashboard-header",children:[s.jsxs("div",{children:[s.jsxs("h1",{className:"dashboard-title font-display",children:[f,", ",e.displayName]}),s.jsxs("div",{className:"dashboard-subtitle",children:[v.length===0?"🎉 All clear! You're on top of everything.":`You have ${v.length} quest${v.length!==1?"s":""} pending.`,x.length>0&&s.jsxs("span",{className:"overdue-warning",children:[" · ",x.length," overdue"]})]})]}),s.jsx("button",{className:"btn btn-primary add-quest-btn",onClick:()=>d(!0),children:"⚔ New Quest"})]}),c&&s.jsxs("div",{className:"next-action-spotlight",children:[s.jsxs("div",{className:"next-action-label",children:[s.jsx("span",{className:"pulse-dot"}),"NEXT BEST ACTION"]}),s.jsxs("div",{className:"next-action-content",children:[s.jsx("div",{className:"next-action-title",children:c.title}),s.jsxs("div",{className:"next-action-meta",children:[c.effort&&s.jsxs("span",{children:["~",c.effort==="XS"?"5":c.effort==="S"?"15":c.effort==="M"?"30":c.effort==="L"?"60":"120","min"]}),c.dueAt&&s.jsxs("span",{children:["· due ",new Date(c.dueAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]}),s.jsxs("div",{className:"next-action-btns",children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>a(c),children:"🔮 Start Focus"}),s.jsx("button",{className:"btn btn-success",onClick:()=>n(c.id),children:"✓ Complete"})]})]}),s.jsxs("form",{onSubmit:p,className:"quick-add-bar",children:[s.jsx("input",{type:"text",placeholder:"Quick add a task… (press Enter)",value:g,onChange:m=>S(m.target.value),className:"quick-add-input"}),s.jsx("button",{type:"submit",className:"btn btn-secondary",children:"Add"}),s.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>d(!0),children:"+ Details"})]}),s.jsx("div",{className:"filter-tabs",children:[{id:"all",label:`All (${v.length})`},{id:"high",label:`High Priority (${v.filter(m=>["HIGH","URGENT"].includes(m.priority)).length})`},{id:"overdue",label:`Overdue (${x.length})`,danger:x.length>0}].map(m=>s.jsx("button",{className:`filter-tab ${h===m.id?"active":""} ${m.danger?"danger":""}`,onClick:()=>y(m.id),children:m.label},m.id))}),s.jsx("div",{className:"task-list",children:z.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"🌟"}),s.jsx("div",{className:"empty-title",children:"Nothing here!"}),s.jsx("div",{className:"empty-sub",children:h==="overdue"?"No overdue tasks — great work!":"Add your first quest to get started."})]}):z.map((m,k)=>s.jsx(Kf,{task:m,userTalents:e.unlockedTalents,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:i,onFocus:a,index:k},m.id))}),u&&s.jsx(Yf,{onAdd:o,onClose:()=>d(!1)}),s.jsx("style",{children:`
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
      `})]})}const Jf=[{label:"5 min",minutes:5,emoji:"⚡"},{label:"15 min",minutes:15,emoji:"🌊"},{label:"25 min",minutes:25,emoji:"🔮"},{label:"45 min",minutes:45,emoji:"🌙"},{label:"60 min",minutes:60,emoji:"⭐"}];function qf({session:e,onStart:t,onPause:n,onResume:r,onStop:l,formatTime:i,tasks:o}){const[a,u]=P.useState(null),[d,h]=P.useState(25),y=e?1-e.secondsLeft/e.totalSeconds:0,g=2*Math.PI*120,S=g*(1-y);if(!e)return s.jsxs("div",{className:"focus-setup",children:[s.jsxs("div",{className:"focus-setup-inner",children:[s.jsx("div",{className:"focus-icon-big",children:"🔮"}),s.jsx("h1",{className:"font-display focus-heading",children:"Focus Session"}),s.jsxs("p",{className:"focus-subtitle",children:["Clear your mind. One task. One timer.",s.jsx("br",{}),"Earn bonus XP for every focused minute."]}),o.length>0&&s.jsxs("div",{className:"focus-section",children:[s.jsx("div",{className:"focus-section-label",children:"Working on"}),s.jsxs("div",{className:"task-picker",children:[s.jsx("button",{className:`task-pick-option ${a?"":"active"}`,onClick:()=>u(null),children:"Free focus (no task)"}),o.slice(0,5).map(c=>s.jsx("button",{className:`task-pick-option ${(a==null?void 0:a.id)===c.id?"active":""}`,onClick:()=>u(c),children:c.title},c.id))]})]}),s.jsxs("div",{className:"focus-section",children:[s.jsx("div",{className:"focus-section-label",children:"Duration"}),s.jsx("div",{className:"preset-grid",children:Jf.map(c=>s.jsxs("button",{className:`preset-btn ${d===c.minutes?"active":""}`,onClick:()=>h(c.minutes),children:[s.jsx("span",{className:"preset-emoji",children:c.emoji}),s.jsx("span",{className:"preset-label",children:c.label})]},c.minutes))})]}),s.jsx("button",{className:"btn btn-primary focus-start-btn",onClick:()=>t(a||{id:"free",title:"Free Focus"},d),children:"🔮 Begin Session"}),s.jsx("div",{className:"focus-tip",children:"💡 Tip: Each minute focused earns 2.5 XP. Complete the session for a 25% bonus."})]}),s.jsx("style",{children:`
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
        `})]});const v=Math.floor(e.secondsLeft/60),x=e.secondsLeft%60,z=Math.round((e.totalSeconds-e.secondsLeft)/60),p=Math.round(z*2.5);return s.jsxs("div",{className:"focus-active",children:[s.jsxs("div",{className:"focus-active-inner",children:[s.jsx("div",{className:"focus-task-name",children:e.taskTitle}),s.jsxs("div",{className:"timer-ring-wrapper",children:[s.jsxs("svg",{width:"280",height:"280",className:"timer-ring",children:[s.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:"var(--bg-elevated)",strokeWidth:"12"}),s.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:e.paused?"var(--amber)":"var(--xp-blue)",strokeWidth:"12",strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:S,transform:"rotate(-90 140 140)",style:{transition:"stroke-dashoffset 1s linear, stroke 0.3s"}})]}),s.jsxs("div",{className:"timer-display",children:[s.jsxs("div",{className:"timer-digits",children:[String(v).padStart(2,"0"),":",String(x).padStart(2,"0")]}),s.jsx("div",{className:"timer-status",children:e.paused?"⏸ paused":"● focusing"}),s.jsxs("div",{className:"timer-xp-preview",children:["+",p," XP earned so far"]})]})]}),s.jsxs("div",{className:"focus-controls",children:[e.paused?s.jsx("button",{className:"btn btn-primary focus-ctrl-btn",onClick:r,children:"▶ Resume"}):s.jsx("button",{className:"btn btn-secondary focus-ctrl-btn",onClick:n,children:"⏸ Pause"}),s.jsx("button",{className:"btn btn-success focus-ctrl-btn",onClick:()=>l(!0),children:"✓ Complete"}),s.jsx("button",{className:"btn btn-ghost focus-ctrl-btn",onClick:()=>l(!1),children:"✕ End early"})]}),s.jsx("div",{className:"focus-reminder",children:"Put your phone down. You've got this. 💙"})]}),s.jsx("style",{children:`
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
          width: 280px;
          height: 280px;
        }

        .timer-ring {
          position: absolute;
          top: 0;
          left: 0;
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
      `})]})}const ep=[{id:"first_quest",icon:"⚔️",name:"First Quest",desc:"Completed your first task",earned:!0},{id:"week_streak",icon:"🔥",name:"Week Warrior",desc:"7-day streak",earned:!0},{id:"focus_ten",icon:"🔮",name:"Deep Thinker",desc:"10 focus sessions",earned:!1},{id:"early_bird",icon:"🌅",name:"Early Bird",desc:"Complete a task before 9am",earned:!1},{id:"level_5",icon:"⭐",name:"Rising Star",desc:"Reach Level 5",earned:!1},{id:"hundred_tasks",icon:"🏆",name:"Century",desc:"Complete 100 tasks",earned:!1}];function tp({user:e,history:t}){const n=t.reduce((l,i)=>l+i.xpEarned,0);t.reduce((l,i)=>l+i.goldEarned,0);const r=Math.round(e.xp/e.xpToNext*100);return s.jsxs("div",{className:"rewards-screen",children:[s.jsxs("div",{className:"rewards-hero",children:[s.jsxs("div",{className:"rewards-avatar",children:[s.jsx("span",{className:"rewards-level font-display",children:e.level}),s.jsx("span",{className:"rewards-level-label",children:"LVL"})]}),s.jsxs("div",{className:"rewards-hero-info",children:[s.jsx("h1",{className:"font-display rewards-name",children:e.displayName}),s.jsx("div",{className:"rewards-title-text",children:e.title}),s.jsxs("div",{className:"xp-section",children:[s.jsxs("div",{className:"xp-section-labels",children:[s.jsx("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:"XP Progress"}),s.jsxs("span",{className:"text-xs text-muted",children:[e.xp," / ",e.xpToNext]})]}),s.jsx("div",{className:"xp-bar-track",children:s.jsx("div",{className:"xp-bar-fill",style:{width:`${r}%`}})}),s.jsxs("div",{className:"text-xs text-muted",style:{marginTop:4},children:[e.xpToNext-e.xp," XP until Level ",e.level+1]})]})]})]}),s.jsx("div",{className:"stats-grid",children:[{icon:"⚡",label:"Current Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Total Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Day Streak",value:`${e.streak}d`,color:"var(--amber)"},{icon:"✅",label:"Tasks Done",value:t.length,color:"var(--green)"},{icon:"🌟",label:"Total XP Earned",value:`${n.toLocaleString()}`,color:"var(--purple)"},{icon:"🎯",label:"Talent Points",value:e.talentPoints,color:"var(--coral)"}].map(l=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-card-icon",style:{color:l.color},children:l.icon}),s.jsx("div",{className:"stat-card-value",style:{color:l.color},children:l.value}),s.jsx("div",{className:"stat-card-label",children:l.label})]},l.label))}),s.jsxs("div",{className:"section",children:[s.jsx("h2",{className:"section-title font-display",children:"Achievements"}),s.jsx("div",{className:"badges-grid",children:ep.map(l=>s.jsxs("div",{className:`badge-card ${l.earned?"earned":"locked"}`,children:[s.jsx("div",{className:"badge-icon",children:l.icon}),s.jsx("div",{className:"badge-name",children:l.name}),s.jsx("div",{className:"badge-desc",children:l.desc}),!l.earned&&s.jsx("div",{className:"badge-lock",children:"🔒"})]},l.id))})]}),s.jsxs("div",{className:"section",children:[s.jsx("h2",{className:"section-title font-display",children:"Recent Completions"}),s.jsx("div",{className:"history-list",children:t.length===0?s.jsx("div",{className:"text-muted",style:{textAlign:"center",padding:"var(--space-6)"},children:"No completed tasks yet. Go conquer something! ⚔️"}):t.slice(0,20).map(l=>s.jsxs("div",{className:"history-item animate-in",children:[s.jsx("div",{className:"history-title",children:l.title}),s.jsx("div",{className:"history-meta",children:s.jsx("span",{className:"text-xs text-muted",children:new Date(l.completedAt).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})}),s.jsxs("div",{className:"history-rewards",children:[s.jsxs("span",{className:"history-xp",children:["+",l.xpEarned," XP"]}),s.jsxs("span",{className:"history-gold",children:["+",l.goldEarned," 💰"]})]})]},l.id))})]}),s.jsx("style",{children:`
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
      `})]})}function np({user:e,onUnlock:t}){return s.jsxs("div",{className:"talents-screen",children:[s.jsxs("div",{className:"talents-header",children:[s.jsx("h1",{className:"font-display talents-title",children:"Talent Tree"}),s.jsx("div",{className:"talents-subtitle",children:"Unlock perks that make productivity easier — not just look better."}),s.jsxs("div",{className:"talent-points-display",children:[s.jsx("span",{className:"talent-points-icon",children:"🌟"}),s.jsx("span",{className:"talent-points-value",children:e.talentPoints}),s.jsx("span",{className:"talent-points-label",children:"Talent Points Available"})]})]}),s.jsx("div",{className:"talents-grid",children:$f.map(n=>{const r=e.unlockedTalents.includes(n.id),l=e.talentPoints>=n.cost;return s.jsxs("div",{className:`talent-card ${r?"unlocked":""} ${!r&&l?"available":""}`,children:[s.jsx("div",{className:"talent-icon",children:n.icon}),s.jsxs("div",{className:"talent-info",children:[s.jsx("div",{className:"talent-name",children:n.name}),s.jsx("div",{className:"talent-desc",children:n.description})]}),s.jsx("div",{className:"talent-action",children:r?s.jsxs("div",{className:"talent-status unlocked-status",children:[s.jsx("span",{children:"✓"})," Unlocked"]}):s.jsxs("button",{className:`btn ${l?"btn-primary":"btn-secondary"} talent-unlock-btn`,onClick:()=>t(n.id,n.cost),disabled:!l,children:["🌟 ",n.cost," ",n.cost===1?"point":"points"]})})]},n.id)})}),s.jsxs("div",{className:"talents-tip",children:[s.jsx("span",{children:"💡"}),s.jsx("span",{children:"You earn Talent Points by leveling up. Every level grants 1 point. Keep completing quests to unlock more perks!"})]}),s.jsx("style",{children:`
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
      `})]})}function rp({effects:e,levelUpData:t}){return s.jsxs(s.Fragment,{children:[e.map(n=>s.jsxs("div",{className:"reward-float",style:{left:n.x!=null?`${n.x}px`:"50%",top:n.y!=null?`${n.y}px`:"40%",transform:n.x==null?"translateX(-50%)":void 0},children:[s.jsxs("span",{style:{color:"var(--xp-blue)",textShadow:"0 0 10px rgba(79,195,247,0.5)"},children:["+",n.xp," XP"]}),s.jsxs("span",{style:{color:"var(--gold)",textShadow:"0 0 10px var(--gold-glow)",fontSize:"0.8rem"},children:["+",n.gold," 💰"]})]},n.id)),t&&s.jsxs("div",{className:"level-up-banner",children:[s.jsx("div",{className:"level-up-glow"}),s.jsx("div",{className:"level-up-icon",children:"⭐"}),s.jsxs("div",{className:"level-up-text",children:[s.jsx("div",{className:"level-up-title font-display",children:"LEVEL UP!"}),s.jsxs("div",{className:"level-up-subtitle",children:["You reached Level ",s.jsx("strong",{children:t.level})]}),t.talentPoints>0&&s.jsxs("div",{className:"level-up-bonus",children:["🌟 +",t.talentPoints," Talent Point",t.talentPoints>1?"s":""," — check the Talents tab!"]})]}),s.jsx("div",{className:"level-up-icon",children:"⭐"})]}),s.jsx("style",{children:`
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
      `})]})}function lp(){const[e,t]=P.useState(()=>{try{const f=localStorage.getItem("ql_user");return f?JSON.parse(f):Ga}catch{return Ga}}),[n,r]=P.useState(()=>{try{const f=localStorage.getItem("ql_tasks");return f?JSON.parse(f):Ka}catch{return Ka}}),[l,i]=P.useState(()=>{try{const f=localStorage.getItem("ql_history");return f?JSON.parse(f):Ya}catch{return Ya}}),[o,a]=P.useState([]),[u,d]=P.useState(null);P.useEffect(()=>{localStorage.setItem("ql_user",JSON.stringify(e))},[e]),P.useEffect(()=>{localStorage.setItem("ql_tasks",JSON.stringify(n))},[n]),P.useEffect(()=>{localStorage.setItem("ql_history",JSON.stringify(l))},[l]);const h=P.useCallback((f,m,k=null,N=null)=>{const E=Dr();a(j=>[...j,{id:E,xp:f,gold:m,x:k,y:N}]),setTimeout(()=>{a(j=>j.filter(L=>L.id!==E))},2e3)},[]),y=P.useCallback((f,m)=>{t(k=>{const N=Qf(k.level,k.xp,f);return N.leveledUp&&(d({level:N.level,talentPoints:N.talentPointsEarned}),setTimeout(()=>d(null),4e3)),{...k,xp:N.xp,xpToNext:N.xpToNext,level:N.level,gold:k.gold+m,talentPoints:k.talentPoints+N.talentPointsEarned}})},[]),g=P.useCallback((f,m=null)=>{r(k=>{const N=k.find(L=>L.id===f);if(!N)return k;const{xp:E,gold:j}=uc(N,e.unlockedTalents);return y(E,j),h(E,j),i(L=>[{id:Dr(),title:N.title,completedAt:new Date().toISOString(),xpEarned:E,goldEarned:j},...L]),k.filter(L=>L.id!==f)})},[e.unlockedTalents,y,h]),S=P.useCallback((f,m)=>{r(k=>k.map(N=>{var j;if(N.id!==f)return N;if(!((j=N.subtasks.find(L=>L.id===m))==null?void 0:j.done)){const{xp:L,gold:D}=Hf(e.unlockedTalents);y(L,D),h(L,D)}return{...N,subtasks:N.subtasks.map(L=>L.id===m?{...L,done:!L.done}:L)}}))},[e.unlockedTalents,y,h]),v=P.useCallback(f=>{const m={id:Dr(),status:"pending",subtasks:[],createdAt:new Date().toISOString(),completedAt:null,isOverdue:!1,tags:[],notes:"",...f};return r(k=>[m,...k]),m},[]),x=P.useCallback((f,m=2)=>{r(k=>k.map(N=>{if(N.id!==f)return N;const E=new Date(Date.now()+m*60*60*1e3).toISOString();return{...N,dueAt:E,isOverdue:!1}}))},[]),z=P.useCallback(f=>{r(m=>m.filter(k=>k.id!==f))},[]),p=P.useCallback((f,m)=>{t(k=>k.talentPoints<m?k:{...k,talentPoints:k.talentPoints-m,unlockedTalents:[...k.unlockedTalents,f]})},[]),c=P.useCallback((f,m)=>{const{xp:k,gold:N}=Vf(f,m,e.unlockedTalents);return y(k,N),h(k,N),{xp:k,gold:N}},[e.unlockedTalents,y,h]);return{user:e,tasks:n,history:l,rewardEffects:o,levelUpData:u,completeTask:g,toggleSubtask:S,addTask:v,snoozeTask:x,deleteTask:z,unlockTalent:p,completeFocusSession:c,showReward:h}}function ip(e){const[t,n]=P.useState(null),r=P.useRef(null),l=P.useCallback((d,h=25)=>{const y=h*60;n({taskId:d.id,taskTitle:d.title,totalSeconds:y,secondsLeft:y,paused:!1,minutes:h})},[]),i=P.useCallback(()=>{n(d=>d?{...d,paused:!0}:null)},[]),o=P.useCallback(()=>{n(d=>d?{...d,paused:!1}:null)},[]),a=P.useCallback((d=!1)=>{if(t&&e){const h=Math.round((t.totalSeconds-t.secondsLeft)/60);e(h,d)}n(null)},[t,e]);return P.useEffect(()=>{if(!t||t.paused){clearInterval(r.current);return}return r.current=setInterval(()=>{n(d=>{if(!d)return null;const h=d.secondsLeft-1;return h<=0?(clearInterval(r.current),e&&e(d.minutes,!0),null):{...d,secondsLeft:h}})},1e3),()=>clearInterval(r.current)},[t==null?void 0:t.paused,t==null?void 0:t.taskId,e]),{session:t,start:l,pause:i,resume:o,stop:a,formatTime:d=>{const h=Math.floor(d/60).toString().padStart(2,"0"),y=(d%60).toString().padStart(2,"0");return`${h}:${y}`}}}function op(){const[e,t]=P.useState("dashboard"),{user:n,tasks:r,history:l,rewardEffects:i,levelUpData:o,completeTask:a,toggleSubtask:u,addTask:d,snoozeTask:h,deleteTask:y,unlockTalent:g,completeFocusSession:S}=lp(),v=P.useCallback((p,c)=>{p>0&&S(p,c)},[S]),x=ip(v);function z(p){x.start(p,25),t("focus")}return s.jsxs("div",{className:"app-layout",children:[s.jsx(Bf,{user:n,activeView:e,onNavigate:t,pendingCount:r.filter(p=>p.status==="pending").length}),s.jsxs("main",{className:"main-content",children:[e==="dashboard"&&s.jsx(Zf,{user:n,tasks:r,onComplete:a,onToggleSubtask:u,onSnooze:h,onDelete:y,onAddTask:d,onStartFocus:z}),e==="focus"&&s.jsx(qf,{session:x.session,onStart:x.start,onPause:x.pause,onResume:x.resume,onStop:x.stop,formatTime:x.formatTime,tasks:r.filter(p=>p.status==="pending")}),e==="rewards"&&s.jsx(tp,{user:n,history:l}),e==="talents"&&s.jsx(np,{user:n,onUnlock:g})]}),s.jsx(rp,{effects:i,levelUpData:o})]})}Yl.createRoot(document.getElementById("root")).render(s.jsx(_c.StrictMode,{children:s.jsx(op,{})}));
