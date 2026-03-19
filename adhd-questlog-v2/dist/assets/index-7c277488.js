(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},vl={},hs={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Pc=Symbol.for("react.portal"),Dc=Symbol.for("react.fragment"),Mc=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),Fc=Symbol.for("react.suspense"),Ac=Symbol.for("react.memo"),$c=Symbol.for("react.lazy"),Ka=Symbol.iterator;function Bc(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var gs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xs=Object.assign,ys={};function gn(e,t,n){this.props=e,this.context=t,this.refs=ys,this.updater=n||gs}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ws(){}ws.prototype=gn.prototype;function ea(e,t,n){this.props=e,this.context=t,this.refs=ys,this.updater=n||gs}var ta=ea.prototype=new ws;ta.constructor=ea;xs(ta,gn.prototype);ta.isPureReactComponent=!0;var Ya=Array.isArray,ks=Object.prototype.hasOwnProperty,na={current:null},bs={key:!0,ref:!0,__self:!0,__source:!0};function Ss(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ks.call(t,r)&&!bs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:sr,type:e,key:o,ref:a,props:l,_owner:na.current}}function Uc(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Hc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ga=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hc(""+e.key):t.toString(36)}function Mr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case sr:case Pc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Dl(a,0):r,Ya(l)?(n="",e!=null&&(n=e.replace(Ga,"$&/")+"/"),Mr(l,t,n,"",function(d){return d})):l!=null&&(ra(l)&&(l=Uc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ga,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Ya(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Dl(o,s);a+=Mr(o,t,n,u,l)}else if(u=Bc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Dl(o,s++),a+=Mr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function mr(e,t,n){if(e==null)return e;var r=[],l=0;return Mr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Lr={transition:null},Wc={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Lr,ReactCurrentOwner:na};function Ns(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=gn;I.Fragment=Dc;I.Profiler=Lc;I.PureComponent=ea;I.StrictMode=Mc;I.Suspense=Fc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wc;I.act=Ns;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xs({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=na.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ks.call(t,u)&&!bs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:sr,type:e.type,key:l,ref:o,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:Oc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ic,_context:e},e.Consumer=e};I.createElement=Ss;I.createFactory=function(e){var t=Ss.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Rc,render:e}};I.isValidElement=ra;I.lazy=function(e){return{$$typeof:$c,_payload:{_status:-1,_result:e},_init:Vc}};I.memo=function(e,t){return{$$typeof:Ac,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Lr.transition;Lr.transition={};try{e()}finally{Lr.transition=t}};I.unstable_act=Ns;I.useCallback=function(e,t){return ve.current.useCallback(e,t)};I.useContext=function(e){return ve.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};I.useEffect=function(e,t){return ve.current.useEffect(e,t)};I.useId=function(){return ve.current.useId()};I.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ve.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};I.useRef=function(e){return ve.current.useRef(e)};I.useState=function(e){return ve.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ve.current.useTransition()};I.version="18.3.1";hs.exports=I;var j=hs.exports;const Qc=Tc(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=j,Kc=Symbol.for("react.element"),Yc=Symbol.for("react.fragment"),Gc=Object.prototype.hasOwnProperty,qc=Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jc={key:!0,ref:!0,__self:!0,__source:!0};function js(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Gc.call(t,r)&&!Jc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Kc,type:e,key:o,ref:a,props:l,_owner:qc.current}}vl.Fragment=Yc;vl.jsx=js;vl.jsxs=js;vs.exports=vl;var i=vs.exports,ao={},_s={exports:{}},_e={},Cs={exports:{}},Es={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var D=E.length;E.push(_);e:for(;0<D;){var F=D-1>>>1,V=E[F];if(0<l(V,_))E[F]=_,E[D]=V,D=F;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],D=E.pop();if(D!==_){E[0]=D;e:for(var F=0,V=E.length,Qe=V>>>1;F<Qe;){var St=2*(F+1)-1,Pl=E[St],Nt=St+1,fr=E[Nt];if(0>l(Pl,D))Nt<V&&0>l(fr,Pl)?(E[F]=fr,E[Nt]=D,F=Nt):(E[F]=Pl,E[St]=D,F=St);else if(Nt<V&&0>l(fr,D))E[F]=fr,E[Nt]=D,F=Nt;else break e}}return _}function l(E,_){var D=E.sortIndex-_.sortIndex;return D!==0?D:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],h=1,v=null,g=3,S=!1,m=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=E)r(d),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(d)}}function x(E){if(y=!1,p(E),!m)if(n(u)!==null)m=!0,U(k);else{var _=n(d);_!==null&&Z(x,_.startTime-E)}}function k(E,_){m=!1,y&&(y=!1,f(w),w=-1),S=!0;var D=g;try{for(p(_),v=n(u);v!==null&&(!(v.expirationTime>_)||E&&!A());){var F=v.callback;if(typeof F=="function"){v.callback=null,g=v.priorityLevel;var V=F(v.expirationTime<=_);_=e.unstable_now(),typeof V=="function"?v.callback=V:v===n(u)&&r(u),p(_)}else r(u);v=n(u)}if(v!==null)var Qe=!0;else{var St=n(d);St!==null&&Z(x,St.startTime-_),Qe=!1}return Qe}finally{v=null,g=D,S=!1}}var C=!1,b=null,w=-1,R=5,z=-1;function A(){return!(e.unstable_now()-z<R)}function M(){if(b!==null){var E=e.unstable_now();z=E;var _=!0;try{_=b(!0,E)}finally{_?L():(C=!1,b=null)}}else C=!1}var L;if(typeof c=="function")L=function(){c(M)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,H=O.port2;O.port1.onmessage=M,L=function(){H.postMessage(null)}}else L=function(){P(M,0)};function U(E){b=E,C||(C=!0,L())}function Z(E,_){w=P(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){m||S||(m=!0,U(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var D=g;g=_;try{return E()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var D=g;g=E;try{return _()}finally{g=D}},e.unstable_scheduleCallback=function(E,_,D){var F=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?F+D:F):D=F,E){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=D+V,E={id:h++,callback:_,priorityLevel:E,startTime:D,expirationTime:V,sortIndex:-1},D>F?(E.sortIndex=D,t(d,E),n(u)===null&&E===n(d)&&(y?(f(w),w=-1):y=!0,Z(x,D-F))):(E.sortIndex=V,t(u,E),m||S||(m=!0,U(k))),E},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(E){var _=g;return function(){var D=g;g=_;try{return E.apply(this,arguments)}finally{g=D}}}})(Es);Cs.exports=Es;var Zc=Cs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=j,je=Zc;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zs=new Set,Bn={};function Ft(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Bn[e]=t,e=0;e<t.length;e++)zs.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qa={},Ja={};function nd(e){return io.call(Ja,e)?!0:io.call(qa,e)?!1:td.test(e)?Ja[e]=!0:(qa[e]=!0,!1)}function rd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ld(e,t,n,r){if(t===null||typeof t>"u"||rd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function oa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,oa);se[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,oa);se[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,oa);se[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,t,n,r){var l=se.hasOwnProperty(t)?se[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ld(t,n,l,r)&&(n=null),r||l===null?nd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),ia=Symbol.for("react.strict_mode"),so=Symbol.for("react.profiler"),Ts=Symbol.for("react.provider"),Ps=Symbol.for("react.context"),sa=Symbol.for("react.forward_ref"),uo=Symbol.for("react.suspense"),co=Symbol.for("react.suspense_list"),ua=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Ds=Symbol.for("react.offscreen"),Za=Symbol.iterator;function wn(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ml;function En(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Ll=!1;function Il(e,t){if(!e||Ll)return"";Ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?En(e):""}function od(e){switch(e.tag){case 5:return En(e.type);case 16:return En("Lazy");case 13:return En("Suspense");case 19:return En("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function po(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Vt:return"Portal";case so:return"Profiler";case ia:return"StrictMode";case uo:return"Suspense";case co:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ps:return(e.displayName||"Context")+".Consumer";case Ts:return(e._context.displayName||"Context")+".Provider";case sa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ua:return t=e.displayName||null,t!==null?t:po(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return po(e(t))}catch{}}return null}function ad(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return po(t);case 8:return t===ia?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function id(e){var t=Ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=id(e))}function Ls(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ei(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Is(e,t){t=t.checked,t!=null&&aa(e,"checked",t,!1)}function mo(e,t){Is(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&vo(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ti(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vo(e,t,n){(t!=="number"||Wr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ni(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(zn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function Os(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ri(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Rs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Rs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){sd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function As(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function $s(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=As(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var ud=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,t){if(t){if(ud[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wo=null;function ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ko=null,rn=null,ln=null;function li(e){if(e=dr(e)){if(typeof ko!="function")throw Error(N(280));var t=e.stateNode;t&&(t=wl(t),ko(e.stateNode,e.type,t))}}function Bs(e){rn?ln?ln.push(e):ln=[e]:rn=e}function Us(){if(rn){var e=rn,t=ln;if(ln=rn=null,li(e),t)for(e=0;e<t.length;e++)li(t[e])}}function Hs(e,t){return e(t)}function Vs(){}var Ol=!1;function Ws(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return Hs(e,t,n)}finally{Ol=!1,(rn!==null||ln!==null)&&(Vs(),Us())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var bo=!1;if(Je)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){bo=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{bo=!1}function cd(e,t,n,r,l,o,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Mn=!1,Qr=null,Xr=!1,So=null,dd={onError:function(e){Mn=!0,Qr=e}};function pd(e,t,n,r,l,o,a,s,u){Mn=!1,Qr=null,cd.apply(dd,arguments)}function fd(e,t,n,r,l,o,a,s,u){if(pd.apply(this,arguments),Mn){if(Mn){var d=Qr;Mn=!1,Qr=null}else throw Error(N(198));Xr||(Xr=!0,So=d)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oi(e){if(At(e)!==e)throw Error(N(188))}function md(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return oi(l),e;if(o===r)return oi(l),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Xs(e){return e=md(e),e!==null?Ks(e):null}function Ks(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ks(e);if(t!==null)return t;e=e.sibling}return null}var Ys=je.unstable_scheduleCallback,ai=je.unstable_cancelCallback,vd=je.unstable_shouldYield,hd=je.unstable_requestPaint,ee=je.unstable_now,gd=je.unstable_getCurrentPriorityLevel,da=je.unstable_ImmediatePriority,Gs=je.unstable_UserBlockingPriority,Kr=je.unstable_NormalPriority,xd=je.unstable_LowPriority,qs=je.unstable_IdlePriority,hl=null,Ve=null;function yd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:bd,wd=Math.log,kd=Math.LN2;function bd(e){return e>>>=0,e===0?32:31-(wd(e)/kd|0)|0}var xr=64,yr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Tn(s):(o&=a,o!==0&&(r=Tn(o)))}else a=n&~l,a!==0?r=Tn(a):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function Sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Fe(o),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=Sd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function No(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Js(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function pa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var B=0;function Zs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eu,fa,tu,nu,ru,jo=!1,wr=[],ct=null,dt=null,pt=null,Vn=new Map,Wn=new Map,at=[],_d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ii(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function bn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=dr(t),t!==null&&fa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cd(e,t,n,r,l){switch(t){case"focusin":return ct=bn(ct,e,t,n,r,l),!0;case"dragenter":return dt=bn(dt,e,t,n,r,l),!0;case"mouseover":return pt=bn(pt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Vn.set(o,bn(Vn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Wn.set(o,bn(Wn.get(o)||null,e,t,n,r,l)),!0}return!1}function lu(e){var t=Ct(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=Qs(n),t!==null){e.blockedOn=t,ru(e.priority,function(){tu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wo=r,n.target.dispatchEvent(r),wo=null}else return t=dr(n),t!==null&&fa(t),e.blockedOn=n,!1;t.shift()}return!0}function si(e,t,n){Ir(e)&&n.delete(t)}function Ed(){jo=!1,ct!==null&&Ir(ct)&&(ct=null),dt!==null&&Ir(dt)&&(dt=null),pt!==null&&Ir(pt)&&(pt=null),Vn.forEach(si),Wn.forEach(si)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,jo||(jo=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Ed)))}function Qn(e){function t(l){return Sn(l,e)}if(0<wr.length){Sn(wr[0],e);for(var n=1;n<wr.length;n++){var r=wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&Sn(ct,e),dt!==null&&Sn(dt,e),pt!==null&&Sn(pt,e),Vn.forEach(t),Wn.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)lu(n),n.blockedOn===null&&at.shift()}var on=nt.ReactCurrentBatchConfig,Gr=!0;function zd(e,t,n,r){var l=B,o=on.transition;on.transition=null;try{B=1,ma(e,t,n,r)}finally{B=l,on.transition=o}}function Td(e,t,n,r){var l=B,o=on.transition;on.transition=null;try{B=4,ma(e,t,n,r)}finally{B=l,on.transition=o}}function ma(e,t,n,r){if(Gr){var l=_o(e,t,n,r);if(l===null)Xl(e,t,r,qr,n),ii(e,r);else if(Cd(l,e,t,n,r))r.stopPropagation();else if(ii(e,r),t&4&&-1<_d.indexOf(e)){for(;l!==null;){var o=dr(l);if(o!==null&&eu(o),o=_o(e,t,n,r),o===null&&Xl(e,t,r,qr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var qr=null;function _o(e,t,n,r){if(qr=null,e=ca(r),e=Ct(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gd()){case da:return 1;case Gs:return 4;case Kr:case xd:return 16;case qs:return 536870912;default:return 16}default:return 16}}var st=null,va=null,Or=null;function au(){if(Or)return Or;var e,t=va,n=t.length,r,l="value"in st?st.value:st.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Or=l.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function ui(){return!1}function Ce(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?kr:ui,this.isPropagationStopped=ui,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ha=Ce(xn),cr=q({},xn,{view:0,detail:0}),Pd=Ce(cr),Fl,Al,Nn,gl=q({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Fl=e.screenX-Nn.screenX,Al=e.screenY-Nn.screenY):Al=Fl=0,Nn=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Al}}),ci=Ce(gl),Dd=q({},gl,{dataTransfer:0}),Md=Ce(Dd),Ld=q({},cr,{relatedTarget:0}),$l=Ce(Ld),Id=q({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Od=Ce(Id),Rd=q({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fd=Ce(Rd),Ad=q({},xn,{data:0}),di=Ce(Ad),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ud={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ud[e])?!!t[e]:!1}function ga(){return Hd}var Vd=q({},cr,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wd=Ce(Vd),Qd=q({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pi=Ce(Qd),Xd=q({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),Kd=Ce(Xd),Yd=q({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gd=Ce(Yd),qd=q({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=Ce(qd),Zd=[9,13,27,32],xa=Je&&"CompositionEvent"in window,Ln=null;Je&&"documentMode"in document&&(Ln=document.documentMode);var ep=Je&&"TextEvent"in window&&!Ln,iu=Je&&(!xa||Ln&&8<Ln&&11>=Ln),fi=String.fromCharCode(32),mi=!1;function su(e,t){switch(e){case"keyup":return Zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function tp(e,t){switch(e){case"compositionend":return uu(t);case"keypress":return t.which!==32?null:(mi=!0,fi);case"textInput":return e=t.data,e===fi&&mi?null:e;default:return null}}function np(e,t){if(Qt)return e==="compositionend"||!xa&&su(e,t)?(e=au(),Or=va=st=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return iu&&t.locale!=="ko"?null:t.data;default:return null}}var rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rp[e.type]:t==="textarea"}function cu(e,t,n,r){Bs(r),t=Jr(t,"onChange"),0<t.length&&(n=new ha("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Xn=null;function lp(e){ku(e,0)}function xl(e){var t=Yt(e);if(Ls(t))return e}function op(e,t){if(e==="change")return t}var du=!1;if(Je){var Bl;if(Je){var Ul="oninput"in document;if(!Ul){var hi=document.createElement("div");hi.setAttribute("oninput","return;"),Ul=typeof hi.oninput=="function"}Bl=Ul}else Bl=!1;du=Bl&&(!document.documentMode||9<document.documentMode)}function gi(){In&&(In.detachEvent("onpropertychange",pu),Xn=In=null)}function pu(e){if(e.propertyName==="value"&&xl(Xn)){var t=[];cu(t,Xn,e,ca(e)),Ws(lp,t)}}function ap(e,t,n){e==="focusin"?(gi(),In=t,Xn=n,In.attachEvent("onpropertychange",pu)):e==="focusout"&&gi()}function ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(Xn)}function sp(e,t){if(e==="click")return xl(t)}function up(e,t){if(e==="input"||e==="change")return xl(t)}function cp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:cp;function Kn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!io.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function xi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yi(e,t){var n=xi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xi(n)}}function fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mu(){for(var e=window,t=Wr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function ya(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dp(e){var t=mu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fu(n.ownerDocument.documentElement,n)){if(r!==null&&ya(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=yi(n,o);var a=yi(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pp=Je&&"documentMode"in document&&11>=document.documentMode,Xt=null,Co=null,On=null,Eo=!1;function wi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eo||Xt==null||Xt!==Wr(r)||(r=Xt,"selectionStart"in r&&ya(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Kn(On,r)||(On=r,r=Jr(Co,"onSelect"),0<r.length&&(t=new ha("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},Hl={},vu={};Je&&(vu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function yl(e){if(Hl[e])return Hl[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vu)return Hl[e]=t[n];return e}var hu=yl("animationend"),gu=yl("animationiteration"),xu=yl("animationstart"),yu=yl("transitionend"),wu=new Map,ki="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){wu.set(e,t),Ft(t,[e])}for(var Vl=0;Vl<ki.length;Vl++){var Wl=ki[Vl],fp=Wl.toLowerCase(),mp=Wl[0].toUpperCase()+Wl.slice(1);wt(fp,"on"+mp)}wt(hu,"onAnimationEnd");wt(gu,"onAnimationIteration");wt(xu,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(yu,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function bi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,fd(r,t,void 0,e),e.currentTarget=null}function ku(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;bi(l,s,d),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;bi(l,s,d),o=u}}}if(Xr)throw e=So,Xr=!1,So=null,e}function Q(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var r=e+"__bubble";n.has(r)||(bu(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),bu(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[Sr]){e[Sr]=!0,zs.forEach(function(n){n!=="selectionchange"&&(vp.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Ql("selectionchange",!1,t))}}function bu(e,t,n,r){switch(ou(t)){case 1:var l=zd;break;case 4:l=Td;break;default:l=ma}n=l.bind(null,t,n,e),l=void 0,!bo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Ct(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Ws(function(){var d=o,h=ca(n),v=[];e:{var g=wu.get(e);if(g!==void 0){var S=ha,m=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":S=Wd;break;case"focusin":m="focus",S=$l;break;case"focusout":m="blur",S=$l;break;case"beforeblur":case"afterblur":S=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ci;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Kd;break;case hu:case gu:case xu:S=Od;break;case yu:S=Gd;break;case"scroll":S=Pd;break;case"wheel":S=Jd;break;case"copy":case"cut":case"paste":S=Fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=pi}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var c=d,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Hn(c,f),x!=null&&y.push(Gn(c,x,p)))),P)break;c=c.return}0<y.length&&(g=new S(g,m,null,n,h),v.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==wo&&(m=n.relatedTarget||n.fromElement)&&(Ct(m)||m[Ze]))break e;if((S||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,S?(m=n.relatedTarget||n.toElement,S=d,m=m?Ct(m):null,m!==null&&(P=At(m),m!==P||m.tag!==5&&m.tag!==6)&&(m=null)):(S=null,m=d),S!==m)){if(y=ci,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=pi,x="onPointerLeave",f="onPointerEnter",c="pointer"),P=S==null?g:Yt(S),p=m==null?g:Yt(m),g=new y(x,c+"leave",S,n,h),g.target=P,g.relatedTarget=p,x=null,Ct(h)===d&&(y=new y(f,c+"enter",m,n,h),y.target=p,y.relatedTarget=P,x=y),P=x,S&&m)t:{for(y=S,f=m,c=0,p=y;p;p=$t(p))c++;for(p=0,x=f;x;x=$t(x))p++;for(;0<c-p;)y=$t(y),c--;for(;0<p-c;)f=$t(f),p--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=$t(y),f=$t(f)}y=null}else y=null;S!==null&&Si(v,g,S,y,!1),m!==null&&P!==null&&Si(v,P,m,y,!0)}}e:{if(g=d?Yt(d):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var k=op;else if(vi(g))if(du)k=up;else{k=ip;var C=ap}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=sp);if(k&&(k=k(e,d))){cu(v,k,n,h);break e}C&&C(e,g,d),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&vo(g,"number",g.value)}switch(C=d?Yt(d):window,e){case"focusin":(vi(C)||C.contentEditable==="true")&&(Xt=C,Co=d,On=null);break;case"focusout":On=Co=Xt=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,wi(v,n,h);break;case"selectionchange":if(pp)break;case"keydown":case"keyup":wi(v,n,h)}var b;if(xa)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Qt?su(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(iu&&n.locale!=="ko"&&(Qt||w!=="onCompositionStart"?w==="onCompositionEnd"&&Qt&&(b=au()):(st=h,va="value"in st?st.value:st.textContent,Qt=!0)),C=Jr(d,w),0<C.length&&(w=new di(w,e,null,n,h),v.push({event:w,listeners:C}),b?w.data=b:(b=uu(n),b!==null&&(w.data=b)))),(b=ep?tp(e,n):np(e,n))&&(d=Jr(d,"onBeforeInput"),0<d.length&&(h=new di("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:d}),h.data=b))}ku(v,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Hn(e,n),o!=null&&r.unshift(Gn(e,o,l)),o=Hn(e,t),o!=null&&r.push(Gn(e,o,l))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Si(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Hn(n,o),u!=null&&a.unshift(Gn(n,u,s))):l||(u=Hn(n,o),u!=null&&a.push(Gn(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hp=/\r\n?/g,gp=/\u0000|\uFFFD/g;function Ni(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(gp,"")}function Nr(e,t,n){if(t=Ni(t),Ni(e)!==t&&n)throw Error(N(425))}function Zr(){}var zo=null,To=null;function Po(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Do=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,ji=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof ji<"u"?function(e){return ji.resolve(null).then(e).catch(wp)}:Do;function wp(e){setTimeout(function(){throw e})}function Kl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Qn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _i(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),He="__reactFiber$"+yn,qn="__reactProps$"+yn,Ze="__reactContainer$"+yn,Mo="__reactEvents$"+yn,kp="__reactListeners$"+yn,bp="__reactHandles$"+yn;function Ct(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_i(e);e!==null;){if(n=e[He])return n;e=_i(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[He]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function wl(e){return e[qn]||null}var Lo=[],Gt=-1;function kt(e){return{current:e}}function X(e){0>Gt||(e.current=Lo[Gt],Lo[Gt]=null,Gt--)}function W(e,t){Gt++,Lo[Gt]=e.current,e.current=t}var yt={},pe=kt(yt),ye=kt(!1),Mt=yt;function cn(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function el(){X(ye),X(pe)}function Ci(e,t,n){if(pe.current!==yt)throw Error(N(168));W(pe,t),W(ye,n)}function Su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,ad(e)||"Unknown",l));return q({},n,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Mt=pe.current,W(pe,e),W(ye,ye.current),!0}function Ei(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Su(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,X(ye),X(pe),W(pe,e)):X(ye),W(ye,n)}var Ke=null,kl=!1,Yl=!1;function Nu(e){Ke===null?Ke=[e]:Ke.push(e)}function Sp(e){kl=!0,Nu(e)}function bt(){if(!Yl&&Ke!==null){Yl=!0;var e=0,t=B;try{var n=Ke;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,kl=!1}catch(l){throw Ke!==null&&(Ke=Ke.slice(e+1)),Ys(da,bt),l}finally{B=t,Yl=!1}}return null}var qt=[],Jt=0,nl=null,rl=0,Ee=[],ze=0,Lt=null,Ye=1,Ge="";function jt(e,t){qt[Jt++]=rl,qt[Jt++]=nl,nl=e,rl=t}function ju(e,t,n){Ee[ze++]=Ye,Ee[ze++]=Ge,Ee[ze++]=Lt,Lt=e;var r=Ye;e=Ge;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var o=32-Fe(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Ye=1<<32-Fe(t)+l|n<<l|r,Ge=o+e}else Ye=1<<o|n<<l|r,Ge=e}function wa(e){e.return!==null&&(jt(e,1),ju(e,1,0))}function ka(e){for(;e===nl;)nl=qt[--Jt],qt[Jt]=null,rl=qt[--Jt],qt[Jt]=null;for(;e===Lt;)Lt=Ee[--ze],Ee[ze]=null,Ge=Ee[--ze],Ee[ze]=null,Ye=Ee[--ze],Ee[ze]=null}var Ne=null,Se=null,K=!1,Re=null;function _u(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Se=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ye,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Se=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oo(e){if(K){var t=Se;if(t){var n=t;if(!zi(e,t)){if(Io(e))throw Error(N(418));t=ft(n.nextSibling);var r=Ne;t&&zi(e,t)?_u(r,n):(e.flags=e.flags&-4097|2,K=!1,Ne=e)}}else{if(Io(e))throw Error(N(418));e.flags=e.flags&-4097|2,K=!1,Ne=e}}}function Ti(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function jr(e){if(e!==Ne)return!1;if(!K)return Ti(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Po(e.type,e.memoizedProps)),t&&(t=Se)){if(Io(e))throw Cu(),Error(N(418));for(;t;)_u(e,t),t=ft(t.nextSibling)}if(Ti(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ne?ft(e.stateNode.nextSibling):null;return!0}function Cu(){for(var e=Se;e;)e=ft(e.nextSibling)}function dn(){Se=Ne=null,K=!1}function ba(e){Re===null?Re=[e]:Re.push(e)}var Np=nt.ReactCurrentBatchConfig;function jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pi(e){var t=e._init;return t(e._payload)}function Eu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=gt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,x){return c===null||c.tag!==6?(c=no(p,f.mode,x),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,x){var k=p.type;return k===Wt?h(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lt&&Pi(k)===c.type)?(x=l(c,p.props),x.ref=jn(f,c,p),x.return=f,x):(x=Vr(p.type,p.key,p.props,null,f.mode,x),x.ref=jn(f,c,p),x.return=f,x)}function d(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ro(p,f.mode,x),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,x,k){return c===null||c.tag!==7?(c=Pt(p,f.mode,x,k),c.return=f,c):(c=l(c,p),c.return=f,c)}function v(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=no(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case vr:return p=Vr(c.type,c.key,c.props,null,f.mode,p),p.ref=jn(f,null,c),p.return=f,p;case Vt:return c=ro(c,f.mode,p),c.return=f,c;case lt:var x=c._init;return v(f,x(c._payload),p)}if(zn(c)||wn(c))return c=Pt(c,f.mode,p,null),c.return=f,c;_r(f,c)}return null}function g(f,c,p,x){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:return p.key===k?u(f,c,p,x):null;case Vt:return p.key===k?d(f,c,p,x):null;case lt:return k=p._init,g(f,c,k(p._payload),x)}if(zn(p)||wn(p))return k!==null?null:h(f,c,p,x,null);_r(f,p)}return null}function S(f,c,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,s(c,f,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vr:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,k);case Vt:return f=f.get(x.key===null?p:x.key)||null,d(c,f,x,k);case lt:var C=x._init;return S(f,c,p,C(x._payload),k)}if(zn(x)||wn(x))return f=f.get(p)||null,h(c,f,x,k,null);_r(c,x)}return null}function m(f,c,p,x){for(var k=null,C=null,b=c,w=c=0,R=null;b!==null&&w<p.length;w++){b.index>w?(R=b,b=null):R=b.sibling;var z=g(f,b,p[w],x);if(z===null){b===null&&(b=R);break}e&&b&&z.alternate===null&&t(f,b),c=o(z,c,w),C===null?k=z:C.sibling=z,C=z,b=R}if(w===p.length)return n(f,b),K&&jt(f,w),k;if(b===null){for(;w<p.length;w++)b=v(f,p[w],x),b!==null&&(c=o(b,c,w),C===null?k=b:C.sibling=b,C=b);return K&&jt(f,w),k}for(b=r(f,b);w<p.length;w++)R=S(b,f,w,p[w],x),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?w:R.key),c=o(R,c,w),C===null?k=R:C.sibling=R,C=R);return e&&b.forEach(function(A){return t(f,A)}),K&&jt(f,w),k}function y(f,c,p,x){var k=wn(p);if(typeof k!="function")throw Error(N(150));if(p=k.call(p),p==null)throw Error(N(151));for(var C=k=null,b=c,w=c=0,R=null,z=p.next();b!==null&&!z.done;w++,z=p.next()){b.index>w?(R=b,b=null):R=b.sibling;var A=g(f,b,z.value,x);if(A===null){b===null&&(b=R);break}e&&b&&A.alternate===null&&t(f,b),c=o(A,c,w),C===null?k=A:C.sibling=A,C=A,b=R}if(z.done)return n(f,b),K&&jt(f,w),k;if(b===null){for(;!z.done;w++,z=p.next())z=v(f,z.value,x),z!==null&&(c=o(z,c,w),C===null?k=z:C.sibling=z,C=z);return K&&jt(f,w),k}for(b=r(f,b);!z.done;w++,z=p.next())z=S(b,f,w,z.value,x),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?w:z.key),c=o(z,c,w),C===null?k=z:C.sibling=z,C=z);return e&&b.forEach(function(M){return t(f,M)}),K&&jt(f,w),k}function P(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Wt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vr:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===Wt){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===lt&&Pi(k)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=jn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Wt?(c=Pt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Vr(p.type,p.key,p.props,null,f.mode,x),x.ref=jn(f,c,p),x.return=f,f=x)}return a(f);case Vt:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=ro(p,f.mode,x),c.return=f,f=c}return a(f);case lt:return C=p._init,P(f,c,C(p._payload),x)}if(zn(p))return m(f,c,p,x);if(wn(p))return y(f,c,p,x);_r(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=no(p,f.mode,x),c.return=f,f=c),a(f)):n(f,c)}return P}var pn=Eu(!0),zu=Eu(!1),ll=kt(null),ol=null,Zt=null,Sa=null;function Na(){Sa=Zt=ol=null}function ja(e){var t=ll.current;X(ll),e._currentValue=t}function Ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){ol=e,Sa=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(ol===null)throw Error(N(308));Zt=e,ol.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Et=null;function _a(e){Et===null?Et=[e]:Et.push(e)}function Tu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,_a(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,_a(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}function Di(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,r){var l=e.updateQueue;ot=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(o!==null){var v=l.baseState;a=0,h=d=u=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,y=s;switch(g=t,S=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){v=m.call(S,v,g);break e}v=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,g=typeof m=="function"?m.call(S,v,g):m,g==null)break e;v=q({},v,g);break e;case 2:ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=S,u=v):h=h.next=S,a|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(1);if(h===null&&(u=v),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ot|=a,e.lanes=a,e.memoizedState=v}}function Mi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var pr={},We=kt(pr),Jn=kt(pr),Zn=kt(pr);function zt(e){if(e===pr)throw Error(N(174));return e}function Ea(e,t){switch(W(Zn,t),W(Jn,e),W(We,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}X(We),W(We,t)}function fn(){X(We),X(Jn),X(Zn)}function Du(e){zt(Zn.current);var t=zt(We.current),n=go(t,e.type);t!==n&&(W(Jn,e),W(We,n))}function za(e){Jn.current===e&&(X(We),X(Jn))}var Y=kt(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function Ta(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var Ar=nt.ReactCurrentDispatcher,ql=nt.ReactCurrentBatchConfig,It=0,G=null,ne=null,le=null,sl=!1,Rn=!1,er=0,jp=0;function ue(){throw Error(N(321))}function Pa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Da(e,t,n,r,l,o){if(It=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ar.current=e===null||e.memoizedState===null?zp:Tp,e=n(r,l),Rn){o=0;do{if(Rn=!1,er=0,25<=o)throw Error(N(301));o+=1,le=ne=null,t.updateQueue=null,Ar.current=Pp,e=n(r,l)}while(Rn)}if(Ar.current=ul,t=ne!==null&&ne.next!==null,It=0,le=ne=G=null,sl=!1,t)throw Error(N(300));return e}function Ma(){var e=er!==0;return er=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function Me(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(N(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function tr(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Me(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=a=null,u=null,d=o;do{var h=d.lane;if((It&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=v,a=r):u=u.next=v,G.lanes|=h,Ot|=h}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=s,$e(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,G.lanes|=o,Ot|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zl(e){var t=Me(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);$e(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mu(){}function Lu(e,t){var n=G,r=Me(),l=t(),o=!$e(r.memoizedState,l);if(o&&(r.memoizedState=l,xe=!0),r=r.queue,La(Ru.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,nr(9,Ou.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(N(349));It&30||Iu(n,t,l)}return l}function Iu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ou(e,t,n,r){t.value=n,t.getSnapshot=r,Fu(t)&&Au(e)}function Ru(e,t,n){return n(function(){Fu(t)&&Au(e)})}function Fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Au(e){var t=et(e,1);t!==null&&Ae(t,e,1,-1)}function Li(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ep.bind(null,G,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $u(){return Me().memoizedState}function $r(e,t,n,r){var l=Ue();G.flags|=e,l.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function bl(e,t,n,r){var l=Me();r=r===void 0?null:r;var o=void 0;if(ne!==null){var a=ne.memoizedState;if(o=a.destroy,r!==null&&Pa(r,a.deps)){l.memoizedState=nr(t,n,o,r);return}}G.flags|=e,l.memoizedState=nr(1|t,n,o,r)}function Ii(e,t){return $r(8390656,8,e,t)}function La(e,t){return bl(2048,8,e,t)}function Bu(e,t){return bl(4,2,e,t)}function Uu(e,t){return bl(4,4,e,t)}function Hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vu(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,Hu.bind(null,t,e),n)}function Ia(){}function Wu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xu(e,t,n){return It&21?($e(n,t)||(n=Js(),G.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function _p(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{B=n,ql.transition=r}}function Ku(){return Me().memoizedState}function Cp(e,t,n){var r=ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yu(e))Gu(t,n);else if(n=Tu(e,t,n,r),n!==null){var l=me();Ae(n,e,r,l),qu(n,t,r)}}function Ep(e,t,n){var r=ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))Gu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(l.hasEagerState=!0,l.eagerState=s,$e(s,a)){var u=t.interleaved;u===null?(l.next=l,_a(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Tu(e,t,l,r),n!==null&&(l=me(),Ae(n,e,r,l),qu(n,t,r))}}function Yu(e){var t=e.alternate;return e===G||t!==null&&t===G}function Gu(e,t){Rn=sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pa(e,n)}}var ul={readContext:De,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},zp={readContext:De,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ii,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Li,useDebugValue:Ia,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Li(!1),t=e[0];return e=_p.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,l=Ue();if(K){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),oe===null)throw Error(N(349));It&30||Iu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ii(Ru.bind(null,r,o,e),[e]),r.flags|=2048,nr(9,Ou.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ue(),t=oe.identifierPrefix;if(K){var n=Ge,r=Ye;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tp={readContext:De,useCallback:Wu,useContext:De,useEffect:La,useImperativeHandle:Vu,useInsertionEffect:Bu,useLayoutEffect:Uu,useMemo:Qu,useReducer:Jl,useRef:$u,useState:function(){return Jl(tr)},useDebugValue:Ia,useDeferredValue:function(e){var t=Me();return Xu(t,ne.memoizedState,e)},useTransition:function(){var e=Jl(tr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Lu,useId:Ku,unstable_isNewReconciler:!1},Pp={readContext:De,useCallback:Wu,useContext:De,useEffect:La,useImperativeHandle:Vu,useInsertionEffect:Bu,useLayoutEffect:Uu,useMemo:Qu,useReducer:Zl,useRef:$u,useState:function(){return Zl(tr)},useDebugValue:Ia,useDeferredValue:function(e){var t=Me();return ne===null?t.memoizedState=e:Xu(t,ne.memoizedState,e)},useTransition:function(){var e=Zl(tr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Lu,useId:Ku,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),l=ht(e),o=qe(r,l);o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,l),t!==null&&(Ae(t,e,l,r),Fr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),l=ht(e),o=qe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=mt(e,o,l),t!==null&&(Ae(t,e,l,r),Fr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=ht(e),l=qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=mt(e,l,r),t!==null&&(Ae(t,e,r,n),Fr(t,e,r))}};function Oi(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(l,o):!0}function Ju(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(l=we(t)?Mt:pe.current,r=t.contextTypes,o=(r=r!=null)?cn(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ri(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Ao(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ca(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=De(o):(o=we(t)?Mt:pe.current,l.context=cn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Sl.enqueueReplaceState(l,l.state,null),al(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=od(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $o(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dp=typeof WeakMap=="function"?WeakMap:Map;function Zu(e,t,n){n=qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,Go=r),$o(e,t)},n}function ec(e,t,n){n=qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){$o(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$o(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Fi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Qp.bind(null,e,t,n),t.then(e,e))}function Ai(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $i(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qe(-1,1),t.tag=2,mt(n,t,1))),n.lanes|=1),e)}var Mp=nt.ReactCurrentOwner,xe=!1;function fe(e,t,n,r){t.child=e===null?zu(t,null,n,r):pn(t,e.child,n,r)}function Bi(e,t,n,r,l){n=n.render;var o=t.ref;return an(t,l),r=Da(e,t,n,r,o,l),n=Ma(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(K&&n&&wa(t),t.flags|=1,fe(e,t,r,l),t.child)}function Ui(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ha(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,tc(e,t,o,r,l)):(e=Vr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(a,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Kn(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,tt(e,t,l)}return Bo(e,t,n,r,l)}function nc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(tn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(tn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(tn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(tn,be),be|=r;return fe(e,t,l,n),t.child}function rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bo(e,t,n,r,l){var o=we(n)?Mt:pe.current;return o=cn(t,o),an(t,l),n=Da(e,t,n,r,o,l),r=Ma(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):(K&&r&&wa(t),t.flags|=1,fe(e,t,n,l),t.child)}function Hi(e,t,n,r,l){if(we(n)){var o=!0;tl(t)}else o=!1;if(an(t,l),t.stateNode===null)Br(e,t),Ju(t,n,r),Ao(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=De(d):(d=we(n)?Mt:pe.current,d=cn(t,d));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ri(t,a,r,d),ot=!1;var g=t.memoizedState;a.state=g,al(t,r,a,l),u=t.memoizedState,s!==r||g!==u||ye.current||ot?(typeof h=="function"&&(Fo(t,n,h,r),u=t.memoizedState),(s=ot||Oi(t,n,s,r,g,u,d))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Pu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Ie(t.type,s),a.props=d,v=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=we(n)?Mt:pe.current,u=cn(t,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==v||g!==u)&&Ri(t,a,r,u),ot=!1,g=t.memoizedState,a.state=g,al(t,r,a,l);var m=t.memoizedState;s!==v||g!==m||ye.current||ot?(typeof S=="function"&&(Fo(t,n,S,r),m=t.memoizedState),(d=ot||Oi(t,n,d,r,g,m,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Uo(e,t,n,r,o,l)}function Uo(e,t,n,r,l,o){rc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Ei(t,n,!1),tt(e,t,o);r=t.stateNode,Mp.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=pn(t,e.child,null,o),t.child=pn(t,null,s,o)):fe(e,t,s,o),t.memoizedState=r.state,l&&Ei(t,n,!0),t.child}function lc(e){var t=e.stateNode;t.pendingContext?Ci(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ci(e,t.context,!1),Ea(e,t.containerInfo)}function Vi(e,t,n,r,l){return dn(),ba(l),t.flags|=256,fe(e,t,n,r),t.child}var Ho={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function oc(e,t,n){var r=t.pendingProps,l=Y.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),W(Y,l&1),e===null)return Oo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=_l(a,r,0,null),e=Pt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Ho,e):Oa(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Lp(e,t,a,r,s,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=gt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=gt(s,o):(o=Pt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Vo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ho,r}return o=e.child,e=o.sibling,r=gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oa(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&ba(r),pn(t,e.child,null,n),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lp(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(N(422))),Cr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),o=Pt(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pn(t,e.child,null,a),t.child.memoizedState=Vo(a),t.memoizedState=Ho,o);if(!(t.mode&1))return Cr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(N(419)),r=eo(o,r,void 0),Cr(e,t,a,r)}if(s=(a&e.childLanes)!==0,xe||s){if(r=oe,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,et(e,l),Ae(r,e,l,-1))}return Ua(),r=eo(Error(N(421))),Cr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Xp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Se=ft(l.nextSibling),Ne=t,K=!0,Re=null,e!==null&&(Ee[ze++]=Ye,Ee[ze++]=Ge,Ee[ze++]=Lt,Ye=e.id,Ge=e.overflow,Lt=t),t=Oa(t,r.children),t.flags|=4096,t)}function Wi(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ro(e.return,t,n)}function to(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function ac(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wi(e,n,t);else if(e.tag===19)Wi(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),to(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ip(e,t,n){switch(t.tag){case 3:lc(t),dn();break;case 5:Du(t);break;case 1:we(t.type)&&tl(t);break;case 4:Ea(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;W(ll,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?oc(e,t,n):(W(Y,Y.current&1),e=tt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return tt(e,t,n)}var ic,Wo,sc,uc;ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};sc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(We.current);var o=null;switch(n){case"input":l=fo(e,l),r=fo(e,r),o=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":l=ho(e,l),r=ho(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}xo(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Q("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Op(e,t,n){var r=t.pendingProps;switch(ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return we(t.type)&&el(),ce(t),null;case 3:return r=t.stateNode,fn(),X(ye),X(pe),Ta(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Zo(Re),Re=null))),Wo(e,t),ce(t),null;case 5:za(t);var l=zt(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return ce(t),null}if(e=zt(We.current),jr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[qn]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(l=0;l<Pn.length;l++)Q(Pn[l],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ei(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":ni(r,o),Q("invalid",r)}xo(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Nr(r.textContent,s,e),l=["children",""+s]):Bn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Q("scroll",r)}switch(n){case"input":hr(r),ti(r,o,!0);break;case"textarea":hr(r),ri(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Rs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[He]=t,e[qn]=r,ic(e,t,!1,!1),t.stateNode=e;e:{switch(a=yo(n,r),n){case"dialog":Q("cancel",e),Q("close",e),l=r;break;case"iframe":case"object":case"embed":Q("load",e),l=r;break;case"video":case"audio":for(l=0;l<Pn.length;l++)Q(Pn[l],e);l=r;break;case"source":Q("error",e),l=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),l=r;break;case"details":Q("toggle",e),l=r;break;case"input":ei(e,r),l=fo(e,r),Q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),Q("invalid",e);break;case"textarea":ni(e,r),l=ho(e,r),Q("invalid",e);break;default:l=r}xo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?$s(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fs(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Un(e,u):typeof u=="number"&&Un(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Q("scroll",e):u!=null&&aa(e,o,u,a))}switch(n){case"input":hr(e),ti(e,r,!1);break;case"textarea":hr(e),ri(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=zt(Zn.current),zt(We.current),jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Nr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Nr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ce(t),null;case 13:if(X(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Se!==null&&t.mode&1&&!(t.flags&128))Cu(),dn(),t.flags|=98560,o=!1;else if(o=jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[He]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Re!==null&&(Zo(Re),Re=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?re===0&&(re=3):Ua())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return fn(),Wo(e,t),e===null&&Yn(t.stateNode.containerInfo),ce(t),null;case 10:return ja(t.type._context),ce(t),null;case 17:return we(t.type)&&el(),ce(t),null;case 19:if(X(Y),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)_n(o,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=il(e),a!==null){for(t.flags|=128,_n(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&ee()>vn&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304)}else{if(!r)if(e=il(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!K)return ce(t),null}else 2*ee()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ee(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Ba(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Rp(e,t){switch(ka(t),t.tag){case 1:return we(t.type)&&el(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),X(ye),X(pe),Ta(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return za(t),null;case 13:if(X(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Y),null;case 4:return fn(),null;case 10:return ja(t.type._context),null;case 22:case 23:return Ba(),null;case 24:return null;default:return null}}var Er=!1,de=!1,Fp=typeof WeakSet=="function"?WeakSet:Set,T=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Qo(e,t,n){try{n()}catch(r){J(e,t,r)}}var Qi=!1;function Ap(e,t){if(zo=Gr,e=mu(),ya(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,h=0,v=e,g=null;t:for(;;){for(var S;v!==n||l!==0&&v.nodeType!==3||(s=a+l),v!==o||r!==0&&v.nodeType!==3||(u=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(S=v.firstChild)!==null;)g=v,v=S;for(;;){if(v===e)break t;if(g===n&&++d===l&&(s=a),g===o&&++h===r&&(u=a),(S=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(To={focusedElem:e,selectionRange:n},Gr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,P=m.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ie(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){J(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return m=Qi,Qi=!1,m}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Qo(t,n,o)}l=l.next}while(l!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cc(e){var t=e.alternate;t!==null&&(e.alternate=null,cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[qn],delete t[Mo],delete t[kp],delete t[bp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dc(e){return e.tag===5||e.tag===3||e.tag===4}function Xi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var ae=null,Oe=!1;function rt(e,t,n){for(n=n.child;n!==null;)pc(e,t,n),n=n.sibling}function pc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:de||en(n,t);case 6:var r=ae,l=Oe;ae=null,rt(e,t,n),ae=r,Oe=l,ae!==null&&(Oe?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Oe?(e=ae,n=n.stateNode,e.nodeType===8?Kl(e.parentNode,n):e.nodeType===1&&Kl(e,n),Qn(e)):Kl(ae,n.stateNode));break;case 4:r=ae,l=Oe,ae=n.stateNode.containerInfo,Oe=!0,rt(e,t,n),ae=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Qo(n,t,a),l=l.next}while(l!==r)}rt(e,t,n);break;case 1:if(!de&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){J(n,t,s)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,rt(e,t,n),de=r):rt(e,t,n);break;default:rt(e,t,n)}}function Ki(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fp),t.forEach(function(r){var l=Kp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Oe=!1;break e;case 3:ae=s.stateNode.containerInfo,Oe=!0;break e;case 4:ae=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(ae===null)throw Error(N(160));pc(o,a,l),ae=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){J(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Be(e),r&4){try{Fn(3,e,e.return),Nl(3,e)}catch(y){J(e,e.return,y)}try{Fn(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:Le(t,e),Be(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Le(t,e),Be(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var l=e.stateNode;try{Un(l,"")}catch(y){J(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Is(l,o),yo(s,a);var d=yo(s,o);for(a=0;a<u.length;a+=2){var h=u[a],v=u[a+1];h==="style"?$s(l,v):h==="dangerouslySetInnerHTML"?Fs(l,v):h==="children"?Un(l,v):aa(l,h,v,d)}switch(s){case"input":mo(l,o);break;case"textarea":Os(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?nn(l,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?nn(l,!!o.multiple,o.defaultValue,!0):nn(l,!!o.multiple,o.multiple?[]:"",!1))}l[qn]=o}catch(y){J(e,e.return,y)}}break;case 6:if(Le(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){J(e,e.return,y)}}break;case 3:if(Le(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:Le(t,e),Be(e);break;case 13:Le(t,e),Be(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Aa=ee())),r&4&&Ki(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(de=(d=de)||h,Le(t,e),de=d):Le(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(v=T=h;T!==null;){switch(g=T,S=g.child,g.tag){case 0:case 11:case 14:case 15:Fn(4,g,g.return);break;case 1:en(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:en(g,g.return);break;case 22:if(g.memoizedState!==null){Gi(v);continue}}S!==null?(S.return=g,T=S):Gi(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=v.stateNode,u=v.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=As("display",a))}catch(y){J(e,e.return,y)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(y){J(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Le(t,e),Be(e),r&4&&Ki(e);break;case 21:break;default:Le(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dc(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Un(l,""),r.flags&=-33);var o=Xi(e);Yo(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Xi(e);Ko(e,s,a);break;default:throw Error(N(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){T=e,mc(e)}function mc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Er;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||de;s=Er;var d=de;if(Er=a,(de=u)&&!d)for(T=l;T!==null;)a=T,u=a.child,a.tag===22&&a.memoizedState!==null?qi(l):u!==null?(u.return=a,T=u):qi(l);for(;o!==null;)T=o,mc(o),o=o.sibling;T=l,Er=s,de=d}Yi(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Yi(e)}}function Yi(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Mi(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mi(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&Qn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}de||t.flags&512&&Xo(t)}catch(g){J(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Gi(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function qi(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(u){J(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){J(t,l,u)}}var o=t.return;try{Xo(t)}catch(u){J(t,o,u)}break;case 5:var a=t.return;try{Xo(t)}catch(u){J(t,a,u)}}}catch(u){J(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Bp=Math.ceil,cl=nt.ReactCurrentDispatcher,Ra=nt.ReactCurrentOwner,Pe=nt.ReactCurrentBatchConfig,$=0,oe=null,te=null,ie=0,be=0,tn=kt(0),re=0,rr=null,Ot=0,jl=0,Fa=0,An=null,ge=null,Aa=0,vn=1/0,Xe=null,dl=!1,Go=null,vt=null,zr=!1,ut=null,pl=0,$n=0,qo=null,Ur=-1,Hr=0;function me(){return $&6?ee():Ur!==-1?Ur:Ur=ee()}function ht(e){return e.mode&1?$&2&&ie!==0?ie&-ie:Np.transition!==null?(Hr===0&&(Hr=Js()),Hr):(e=B,e!==0||(e=window.event,e=e===void 0?16:ou(e.type)),e):1}function Ae(e,t,n,r){if(50<$n)throw $n=0,qo=null,Error(N(185));ur(e,n,r),(!($&2)||e!==oe)&&(e===oe&&(!($&2)&&(jl|=n),re===4&&it(e,ie)),ke(e,r),n===1&&$===0&&!(t.mode&1)&&(vn=ee()+500,kl&&bt()))}function ke(e,t){var n=e.callbackNode;Nd(e,t);var r=Yr(e,e===oe?ie:0);if(r===0)n!==null&&ai(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ai(n),t===1)e.tag===0?Sp(Ji.bind(null,e)):Nu(Ji.bind(null,e)),yp(function(){!($&6)&&bt()}),n=null;else{switch(Zs(r)){case 1:n=da;break;case 4:n=Gs;break;case 16:n=Kr;break;case 536870912:n=qs;break;default:n=Kr}n=bc(n,vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vc(e,t){if(Ur=-1,Hr=0,$&6)throw Error(N(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Yr(e,e===oe?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fl(e,r);else{t=r;var l=$;$|=2;var o=gc();(oe!==e||ie!==t)&&(Xe=null,vn=ee()+500,Tt(e,t));do try{Vp();break}catch(s){hc(e,s)}while(1);Na(),cl.current=o,$=l,te!==null?t=0:(oe=null,ie=0,t=re)}if(t!==0){if(t===2&&(l=No(e),l!==0&&(r=l,t=Jo(e,l))),t===1)throw n=rr,Tt(e,0),it(e,r),ke(e,ee()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!Up(l)&&(t=fl(e,r),t===2&&(o=No(e),o!==0&&(r=o,t=Jo(e,o))),t===1))throw n=rr,Tt(e,0),it(e,r),ke(e,ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:_t(e,ge,Xe);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Aa+500-ee(),10<t)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Do(_t.bind(null,e,ge,Xe),t);break}_t(e,ge,Xe);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Fe(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bp(r/1960))-r,10<r){e.timeoutHandle=Do(_t.bind(null,e,ge,Xe),r);break}_t(e,ge,Xe);break;case 5:_t(e,ge,Xe);break;default:throw Error(N(329))}}}return ke(e,ee()),e.callbackNode===n?vc.bind(null,e):null}function Jo(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=fl(e,t),e!==2&&(t=ge,ge=n,t!==null&&Zo(t)),e}function Zo(e){ge===null?ge=e:ge.push.apply(ge,e)}function Up(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!$e(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Fa,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Ji(e){if($&6)throw Error(N(327));sn();var t=Yr(e,0);if(!(t&1))return ke(e,ee()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=No(e);r!==0&&(t=r,n=Jo(e,r))}if(n===1)throw n=rr,Tt(e,0),it(e,t),ke(e,ee()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,ge,Xe),ke(e,ee()),null}function $a(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(vn=ee()+500,kl&&bt())}}function Rt(e){ut!==null&&ut.tag===0&&!($&6)&&sn();var t=$;$|=1;var n=Pe.transition,r=B;try{if(Pe.transition=null,B=1,e)return e()}finally{B=r,Pe.transition=n,$=t,!($&6)&&bt()}}function Ba(){be=tn.current,X(tn)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xp(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:fn(),X(ye),X(pe),Ta();break;case 5:za(r);break;case 4:fn();break;case 13:X(Y);break;case 19:X(Y);break;case 10:ja(r.type._context);break;case 22:case 23:Ba()}n=n.return}if(oe=e,te=e=gt(e.current,null),ie=be=t,re=0,rr=null,Fa=jl=Ot=0,ge=An=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}Et=null}return e}function hc(e,t){do{var n=te;try{if(Na(),Ar.current=ul,sl){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}sl=!1}if(It=0,le=ne=G=null,Rn=!1,er=0,Ra.current=null,n===null||n.return===null){re=1,rr=t,te=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Ai(a);if(S!==null){S.flags&=-257,$i(S,a,s,o,t),S.mode&1&&Fi(o,d,t),t=S,u=d;var m=t.updateQueue;if(m===null){var y=new Set;y.add(u),t.updateQueue=y}else m.add(u);break e}else{if(!(t&1)){Fi(o,d,t),Ua();break e}u=Error(N(426))}}else if(K&&s.mode&1){var P=Ai(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),$i(P,a,s,o,t),ba(mn(u,s));break e}}o=u=mn(u,s),re!==4&&(re=2),An===null?An=[o]:An.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Zu(o,u,t);Di(o,f);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(vt===null||!vt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ec(o,s,t);Di(o,x);break e}}o=o.return}while(o!==null)}yc(n)}catch(k){t=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function gc(){var e=cl.current;return cl.current=ul,e===null?ul:e}function Ua(){(re===0||re===3||re===2)&&(re=4),oe===null||!(Ot&268435455)&&!(jl&268435455)||it(oe,ie)}function fl(e,t){var n=$;$|=2;var r=gc();(oe!==e||ie!==t)&&(Xe=null,Tt(e,t));do try{Hp();break}catch(l){hc(e,l)}while(1);if(Na(),$=n,cl.current=r,te!==null)throw Error(N(261));return oe=null,ie=0,re}function Hp(){for(;te!==null;)xc(te)}function Vp(){for(;te!==null&&!vd();)xc(te)}function xc(e){var t=kc(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?yc(e):te=t,Ra.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rp(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Op(n,t,be),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function _t(e,t,n){var r=B,l=Pe.transition;try{Pe.transition=null,B=1,Wp(e,t,n,r)}finally{Pe.transition=l,B=r}return null}function Wp(e,t,n,r){do sn();while(ut!==null);if($&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jd(e,o),e===oe&&(te=oe=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,bc(Kr,function(){return sn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var a=B;B=1;var s=$;$|=4,Ra.current=null,Ap(e,n),fc(n,e),dp(To),Gr=!!zo,To=zo=null,e.current=n,$p(n),hd(),$=s,B=a,Pe.transition=o}else e.current=n;if(zr&&(zr=!1,ut=e,pl=l),o=e.pendingLanes,o===0&&(vt=null),yd(n.stateNode),ke(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(dl)throw dl=!1,e=Go,Go=null,e;return pl&1&&e.tag!==0&&sn(),o=e.pendingLanes,o&1?e===qo?$n++:($n=0,qo=e):$n=0,bt(),null}function sn(){if(ut!==null){var e=Zs(pl),t=Pe.transition,n=B;try{if(Pe.transition=null,B=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,pl=0,$&6)throw Error(N(331));var l=$;for($|=4,T=e.current;T!==null;){var o=T,a=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Fn(8,h,o)}var v=h.child;if(v!==null)v.return=h,T=v;else for(;T!==null;){h=T;var g=h.sibling,S=h.return;if(cc(h),h===d){T=null;break}if(g!==null){g.return=S,T=g;break}T=S}}}var m=o.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}T=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,T=a;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){a=T;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,T=p;else e:for(a=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Nl(9,s)}}catch(k){J(s,s.return,k)}if(s===a){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if($=l,bt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(hl,e)}catch{}r=!0}return r}finally{B=n,Pe.transition=t}}return!1}function Zi(e,t,n){t=mn(n,t),t=Zu(e,t,1),e=mt(e,t,1),t=me(),e!==null&&(ur(e,1,t),ke(e,t))}function J(e,t,n){if(e.tag===3)Zi(e,e,n);else for(;t!==null;){if(t.tag===3){Zi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=mn(n,e),e=ec(t,e,1),t=mt(t,e,1),e=me(),t!==null&&(ur(t,1,e),ke(t,e));break}}t=t.return}}function Qp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ie&n)===n&&(re===4||re===3&&(ie&130023424)===ie&&500>ee()-Aa?Tt(e,0):Fa|=n),ke(e,t)}function wc(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=me();e=et(e,t),e!==null&&(ur(e,t,n),ke(e,n))}function Xp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wc(e,n)}function Kp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),wc(e,n)}var kc;kc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Ip(e,t,n);xe=!!(e.flags&131072)}else xe=!1,K&&t.flags&1048576&&ju(t,rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var l=cn(t,pe.current);an(t,n),l=Da(null,t,r,e,l,n);var o=Ma();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,tl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ca(t),l.updater=Sl,t.stateNode=l,l._reactInternals=t,Ao(t,r,e,n),t=Uo(null,t,r,!0,o,n)):(t.tag=0,K&&o&&wa(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gp(r),e=Ie(r,e),l){case 0:t=Bo(null,t,r,e,n);break e;case 1:t=Hi(null,t,r,e,n);break e;case 11:t=Bi(null,t,r,e,n);break e;case 14:t=Ui(null,t,r,Ie(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Bo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Hi(e,t,r,l,n);case 3:e:{if(lc(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Pu(e,t),al(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=mn(Error(N(423)),t),t=Vi(e,t,r,n,l);break e}else if(r!==l){l=mn(Error(N(424)),t),t=Vi(e,t,r,n,l);break e}else for(Se=ft(t.stateNode.containerInfo.firstChild),Ne=t,K=!0,Re=null,n=zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=tt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Du(t),e===null&&Oo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Po(r,l)?a=null:o!==null&&Po(r,o)&&(t.flags|=32),rc(e,t),fe(e,t,a,n),t.child;case 6:return e===null&&Oo(t),null;case 13:return oc(e,t,n);case 4:return Ea(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Bi(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,W(ll,r._currentValue),r._currentValue=a,o!==null)if($e(o.value,a)){if(o.children===l.children&&!ye.current){t=tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=qe(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ro(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(N(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ro(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=De(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),Ui(e,t,r,l,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Br(e,t),t.tag=1,we(r)?(e=!0,tl(t)):e=!1,an(t,n),Ju(t,r,l),Ao(t,r,l,n),Uo(null,t,r,!0,e,n);case 19:return ac(e,t,n);case 22:return nc(e,t,n)}throw Error(N(156,t.tag))};function bc(e,t){return Ys(e,t)}function Yp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Yp(e,t,n,r)}function Ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gp(e){if(typeof e=="function")return Ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sa)return 11;if(e===ua)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")Ha(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return Pt(n.children,l,o,t);case ia:a=8,l|=8;break;case so:return e=Te(12,n,t,l|2),e.elementType=so,e.lanes=o,e;case uo:return e=Te(13,n,t,l),e.elementType=uo,e.lanes=o,e;case co:return e=Te(19,n,t,l),e.elementType=co,e.lanes=o,e;case Ds:return _l(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ts:a=10;break e;case Ps:a=9;break e;case sa:a=11;break e;case ua:a=14;break e;case lt:a=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Te(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Pt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Ds,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Va(e,t,n,r,l,o,a,s,u){return e=new qp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(o),e}function Jp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sc(e){if(!e)return yt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(we(n))return Su(e,n,t)}return t}function Nc(e,t,n,r,l,o,a,s,u){return e=Va(n,r,!0,e,l,o,a,s,u),e.context=Sc(null),n=e.current,r=me(),l=ht(n),o=qe(r,l),o.callback=t??null,mt(n,o,l),e.current.lanes=l,ur(e,l,r),ke(e,r),e}function Cl(e,t,n,r){var l=t.current,o=me(),a=ht(l);return n=Sc(n),t.context===null?t.context=n:t.pendingContext=n,t=qe(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=mt(l,t,a),e!==null&&(Ae(e,l,a,o),Fr(e,l,a)),a}function ml(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function es(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wa(e,t){es(e,t),(e=e.alternate)&&es(e,t)}function Zp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qa(e){this._internalRoot=e}El.prototype.render=Qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Cl(e,t,null,null)};El.prototype.unmount=Qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rt(function(){Cl(null,e,null,null)}),t[Ze]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=nu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&lu(e)}};function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ts(){}function ef(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=ml(a);o.call(d)}}var a=Nc(t,r,e,0,null,!1,!1,"",ts);return e._reactRootContainer=a,e[Ze]=a.current,Yn(e.nodeType===8?e.parentNode:e),Rt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=ml(u);s.call(d)}}var u=Va(e,0,!1,null,null,!1,!1,"",ts);return e._reactRootContainer=u,e[Ze]=u.current,Yn(e.nodeType===8?e.parentNode:e),Rt(function(){Cl(t,u,n,r)}),u}function Tl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var u=ml(a);s.call(u)}}Cl(t,a,e,l)}else a=ef(n,t,e,l,r);return ml(a)}eu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(pa(t,n|1),ke(t,ee()),!($&6)&&(vn=ee()+500,bt()))}break;case 13:Rt(function(){var r=et(e,1);if(r!==null){var l=me();Ae(r,e,1,l)}}),Wa(e,1)}};fa=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=me();Ae(t,e,134217728,n)}Wa(e,134217728)}};tu=function(e){if(e.tag===13){var t=ht(e),n=et(e,t);if(n!==null){var r=me();Ae(n,e,t,r)}Wa(e,t)}};nu=function(){return B};ru=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ko=function(e,t,n){switch(t){case"input":if(mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=wl(r);if(!l)throw Error(N(90));Ls(r),mo(r,l)}}}break;case"textarea":Os(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Hs=$a;Vs=Rt;var tf={usingClientEntryPoint:!1,Events:[dr,Yt,wl,Bs,Us,$a]},Cn={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nf={bundleType:Cn.bundleType,version:Cn.version,rendererPackageName:Cn.rendererPackageName,rendererConfig:Cn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xs(e),e===null?null:e.stateNode},findFiberByHostInstance:Cn.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{hl=Tr.inject(nf),Ve=Tr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tf;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xa(t))throw Error(N(200));return Jp(e,t,null,n)};_e.createRoot=function(e,t){if(!Xa(e))throw Error(N(299));var n=!1,r="",l=jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Va(e,1,!1,null,null,n,!1,r,l),e[Ze]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Qa(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Xs(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return Rt(e)};_e.hydrate=function(e,t,n){if(!zl(t))throw Error(N(200));return Tl(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Xa(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=jc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Nc(t,null,e,1,n??null,l,!1,o,a),e[Ze]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new El(t)};_e.render=function(e,t,n){if(!zl(t))throw Error(N(200));return Tl(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!zl(e))throw Error(N(40));return e._reactRootContainer?(Rt(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};_e.unstable_batchedUpdates=$a;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Tl(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function _c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c)}catch(e){console.error(e)}}_c(),_s.exports=_e;var rf=_s.exports,ns=rf;ao.createRoot=ns.createRoot,ao.hydrateRoot=ns.hydrateRoot;const rs=[{id:"dashboard",icon:"⚔️",label:"Quests"},{id:"focus",icon:"🔮",label:"Focus"},{id:"inventory",icon:"🎒",label:"Gear"},{id:"shop",icon:"🛒",label:"Shop"},{id:"rewards",icon:"✨",label:"Rewards"},{id:"talents",icon:"🌟",label:"Talents"}];function lf({user:e,activeView:t,onNavigate:n,pendingCount:r,newLoot:l=!1}){const o=Math.round(e.xp/e.xpToNext*100),a=s=>s.id==="dashboard"&&r>0?r:s.id==="talents"&&e.talentPoints>0?"!":s.id==="inventory"&&l?"●":null;return i.jsxs(i.Fragment,{children:[i.jsxs("nav",{className:"sidebar",children:[i.jsxs("div",{className:"sidebar-logo",children:[i.jsx("div",{className:"logo-icon",children:"⚔"}),i.jsxs("div",{children:[i.jsx("div",{className:"logo-title",children:"QuestLog"}),i.jsx("div",{className:"logo-sub",children:"ADHD Task Manager"})]})]}),i.jsxs("div",{className:"sidebar-profile",children:[i.jsx("div",{className:"profile-avatar",children:e.displayName[0]}),i.jsxs("div",{className:"profile-info",children:[i.jsx("div",{className:"profile-name",children:e.displayName}),i.jsx("div",{className:"profile-title",children:e.title})]})]}),i.jsx("div",{className:"sidebar-stats",children:[{icon:"⚡",label:"Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Streak",value:`${e.streak}d`,color:"var(--amber)"}].map(s=>i.jsxs("div",{className:"stat-chip",children:[i.jsx("span",{className:"stat-icon",children:s.icon}),i.jsxs("div",{children:[i.jsx("div",{className:"stat-label",children:s.label}),i.jsx("div",{className:"stat-value",style:{color:s.color},children:s.value})]})]},s.label))}),i.jsxs("div",{className:"sidebar-xp",children:[i.jsxs("div",{className:"sidebar-xp-labels",children:[i.jsx("span",{className:"text-secondary text-xs",children:"XP"}),i.jsxs("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:[e.xp,"/",e.xpToNext]})]}),i.jsx("div",{className:"xp-bar-track",children:i.jsx("div",{className:"xp-bar-fill",style:{width:`${o}%`}})}),i.jsxs("div",{className:"text-xs text-muted",style:{marginTop:3},children:[e.xpToNext-e.xp," to Lv.",e.level+1]})]}),i.jsx("div",{className:"sidebar-nav",children:rs.map(s=>{const u=a(s);return i.jsxs("button",{className:`nav-item ${t===s.id?"active":""}`,onClick:()=>n(s.id),children:[i.jsx("span",{className:"nav-icon",children:s.icon}),i.jsx("span",{className:"nav-label",children:s.label}),u&&i.jsx("span",{className:`nav-badge ${s.id==="inventory"?"loot-badge":s.id==="talents"?"talent-badge":""}`,children:u})]},s.id)})})]}),i.jsx("nav",{className:"bottom-nav",children:rs.map(s=>{const u=a(s);return i.jsxs("button",{className:`bottom-tab ${t===s.id?"active":""}`,onClick:()=>n(s.id),children:[i.jsx("span",{className:"bottom-tab-icon",children:s.icon}),i.jsx("span",{className:"bottom-tab-label",children:s.label}),u&&i.jsx("span",{className:"bottom-tab-badge",children:u})]},s.id)})}),i.jsx("style",{children:`
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
      `})]})}const lr={ring_focus_1:{id:"ring_focus_1",name:"Ring of Slight Attention",slot:"ring",rarity:"common",icon:"💍",color:"#9E9BC0",stats:{focus:5,critChance:.02},effects:[{type:"task_xp_bonus",value:.1}],flavor:"You almost remember what you were doing."},ring_focus_2:{id:"ring_focus_2",name:"Band of Hyperfocus",slot:"ring",rarity:"uncommon",icon:"💍",color:"#4FC3F7",stats:{focus:14,critChance:.05,critDamage:.2},effects:[{type:"task_xp_bonus",value:.2}],flavor:"Time ceases to exist. So does lunch."},ring_speed_1:{id:"ring_speed_1",name:"Signet of Urgency",slot:"ring",rarity:"common",icon:"💍",color:"#F5A623",stats:{speed:.15},flavor:"Slightly faster. Slightly."},helmet_clarity_1:{id:"helmet_clarity_1",name:"Crown of Clarity",slot:"head",rarity:"uncommon",icon:"👑",color:"#F5C842",stats:{focus:8,critChance:.03},effects:[{type:"task_xp_bonus",value:.12}],flavor:"Your thoughts feel just slightly less like soup."},helmet_steel_1:{id:"helmet_steel_1",name:"Helm of Perseverance",slot:"head",rarity:"common",icon:"⛑️",color:"#B0BEC5",stats:{resilience:10,attack:3},flavor:"Dings from every missed deadline."},chest_focus_1:{id:"chest_focus_1",name:"Robe of Deep Work",slot:"body",rarity:"rare",icon:"🥋",color:"#B39DDB",stats:{focus:18,attack:5},effects:[{type:"task_xp_bonus",value:.25},{type:"focus_session_bonus",value:.15}],flavor:"Worn by those who have achieved inbox zero."},chest_iron_1:{id:"chest_iron_1",name:"Vest of Routine",slot:"body",rarity:"common",icon:"🦺",color:"#78909C",stats:{resilience:15,speed:.1},flavor:"Consistent. Reliable. Slightly itchy."},gloves_grip_1:{id:"gloves_grip_1",name:"Gloves of Getting Things Done",slot:"gloves",rarity:"common",icon:"🧤",color:"#FF8A65",stats:{attack:8,critChance:.02},flavor:'"Just start." — the gloves'},gloves_crit_1:{id:"gloves_crit_1",name:"Fingers of Fortune",slot:"gloves",rarity:"uncommon",icon:"🧤",color:"#FFD54F",stats:{critChance:.08,critDamage:.3},flavor:"Your pointing finger has become significantly more judgy."},legs_endure_1:{id:"legs_endure_1",name:"Leggings of Long Sessions",slot:"legs",rarity:"uncommon",icon:"👖",color:"#5C6BC0",stats:{resilience:12,focus:6},effects:[{type:"focus_session_bonus",value:.1}],flavor:"Technically pajamas. No one needs to know."},legs_swift_1:{id:"legs_swift_1",name:"Trousers of Momentum",slot:"legs",rarity:"common",icon:"👗",color:"#26A69A",stats:{speed:.12,attack:4},flavor:"Moving faster. Destination: unclear."},boots_speed_1:{id:"boots_speed_1",name:"Restless Boots",slot:"boots",rarity:"common",icon:"👟",color:"#66BB6A",stats:{speed:.2},flavor:"They tap. Constantly."},boots_speed_2:{id:"boots_speed_2",name:"Sprinters of Sudden Burst",slot:"boots",rarity:"uncommon",icon:"👟",color:"#26C6DA",stats:{speed:.35,critChance:.03},flavor:"Perfect for last-minute deadline runs."},necklace_resolve_1:{id:"necklace_resolve_1",name:"Amulet of Resolve",slot:"necklace",rarity:"rare",icon:"📿",color:"#EF5350",stats:{resilience:20,focus:10,attack:6},effects:[{type:"task_xp_bonus",value:.15}],flavor:'"You will finish this." It means it.'}},hn={common:{color:"#9E9BC0",bg:"rgba(158,155,192,0.12)",label:"Common"},uncommon:{color:"#5CDD8B",bg:"rgba(92,221,139,0.12)",label:"Uncommon"},rare:{color:"#4FC3F7",bg:"rgba(79,195,247,0.12)",label:"Rare"},epic:{color:"#B39DDB",bg:"rgba(179,157,219,0.15)",label:"Epic"},legendary:{color:"#F5C842",bg:"rgba(245,200,66,0.15)",label:"Legendary"}},of=[{id:"head",label:"Head",icon:"⛑️"},{id:"body",label:"Body",icon:"🦺"},{id:"gloves",label:"Gloves",icon:"🧤"},{id:"legs",label:"Legs",icon:"👖"},{id:"boots",label:"Boots",icon:"👟"},{id:"ring",label:"Ring 1",icon:"💍"},{id:"ring2",label:"Ring 2",icon:"💍"},{id:"necklace",label:"Necklace",icon:"📿"}];function af(e){return lr[e]||null}function Cc(e){const t={attack:0,speed:0,critChance:0,critDamage:0,focus:0,resilience:0},n=[];return Object.values(e).forEach(r=>{if(!r)return;const l=lr[r];l&&(Object.entries(l.stats||{}).forEach(([o,a])=>{t[o]=(t[o]||0)+a}),(l.effects||[]).forEach(o=>n.push(o)))}),e.ring&&e.ring2&&(t.critChance+=.05),{stats:t,effects:n}}const Bt={attack:10,speed:1,critChance:.05,critDamage:1.5,focus:0,resilience:0},sf=2e3;function Pr(e,t,n={}){const r={attack:Math.floor(e*2.5),critChance:e*.002,speed:0,critDamage:0,focus:0,resilience:0},{stats:l}=Cc(t);return{attack:Bt.attack+r.attack+(l.attack||0)+(n.attack||0),speed:Bt.speed+(l.speed||0)+(n.speed||0),critChance:Math.min(.75,Bt.critChance+r.critChance+(l.critChance||0)+(n.critChance||0)),critDamage:Bt.critDamage+(l.critDamage||0)+(n.critDamage||0),focus:Bt.focus+(l.focus||0)+(n.focus||0),resilience:Bt.resilience+(l.resilience||0)+(n.resilience||0)}}function uf(e,t=[]){let n=e.attack,r=e.critChance;t.forEach(a=>{a.type==="attack_mult"&&(n*=a.value),a.type==="crit_boost"&&(r=Math.min(.9,r+a.value)),a.type==="slow_player"&&(n*=a.value)});const l=Math.random()<r;return{damage:Math.round(l?n*e.critDamage:n*(.9+Math.random()*.2)),isCrit:l}}function cf(e){return e?1.4:1}function df(e){return e>=5?1.5:e>=3?1.3:e>=1?1.15:1}function pf(e,t){const n=Math.min(.7,t*.03);return Math.max(1,Math.round(e*(1-n)))}function ff(e,t,n){if(!e.phases)return null;for(const r of e.phases){const l=e.max_hp*r.hp_threshold;if(n>l&&t<=l)return r}return null}function mf(e,t,n){const r=Math.max(0,(n-t)/1e3),l=8*60*60,o=Math.min(r,l),a=e.attack*e.speed,s=Math.round(a*o*.5),u=Math.round(s*.015),d=Math.round(o/3600*10)/10;return{damage:s,gold:u,offlineSec:o,hours:d}}function ls(e){const[t,n]=e.gold_drop,r=t+Math.floor(Math.random()*(n-t+1)),l=e.xp_drop,o=[];return(e.loot_table||[]).forEach(a=>{Math.random()<a.chance&&o.push(a.item)}),{gold:r,xp:l,loot:o}}function Ec(e){const t=e.attack*(1+e.critChance*(e.critDamage-1));return Math.round(t*e.speed)}function vf(){const[e,t]=j.useState([]),[n,r]=j.useState([]),l=j.useRef(0),o=j.useCallback(s=>{const u=`toast-${Date.now()}-${l.current++}`,d={...s,id:u,ts:Date.now()};t(h=>[...h.slice(-3),d]),r(h=>[d,...h].slice(0,60)),setTimeout(()=>{t(h=>h.filter(v=>v.id!==u))},s.duration||3500)},[]),a=j.useCallback(s=>{t(u=>u.filter(d=>d.id!==s))},[]);return{toasts:e,log:n,addToast:o,dismissToast:a}}function hf({toasts:e,onDismiss:t}){return i.jsxs("div",{className:"toast-stack",children:[e.map(n=>i.jsx(gf,{toast:n,onDismiss:t},n.id)),i.jsx("style",{children:`
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
      `})]})}function gf({toast:e,onDismiss:t}){var a;const[n,r]=j.useState(!1);j.useEffect(()=>{const s=requestAnimationFrame(()=>r(!0));return()=>cancelAnimationFrame(s)},[]);const l={kill:{border:"var(--coral)",bg:"rgba(255,101,132,0.12)",icon:"☠"},boss:{border:"var(--gold)",bg:"rgba(245,200,66,0.14)",icon:"👑"},loot:{border:"var(--green)",bg:"rgba(92,221,139,0.12)",icon:"🎁"},offline:{border:"var(--xp-blue)",bg:"rgba(79,195,247,0.1)",icon:"🌙"},level:{border:"var(--gold)",bg:"rgba(245,200,66,0.14)",icon:"⭐"},default:{border:"var(--border-default)",bg:"var(--bg-elevated)",icon:"✦"}},o=l[e.type]||l.default;return i.jsxs("div",{className:`toast-item ${n?"visible":""}`,style:{borderColor:o.border,background:o.bg},onClick:()=>t(e.id),children:[i.jsx("span",{className:"toast-icon",children:e.icon||o.icon}),i.jsxs("div",{className:"toast-body",children:[i.jsx("div",{className:"toast-title",children:e.title}),e.sub&&i.jsx("div",{className:"toast-sub",children:e.sub}),((a=e.loot)==null?void 0:a.length)>0&&i.jsx("div",{className:"toast-loot",children:e.loot.map(s=>{const u=af(s);if(!u)return null;const d=hn[u.rarity]||hn.common;return i.jsxs("span",{className:"toast-loot-chip",style:{color:d.color,borderColor:d.color},children:[u.icon," ",u.name]},s)})})]}),i.jsx("div",{className:"toast-progress",style:{"--dur":`${e.duration||3500}ms`}})]})}function xf({log:e}){const[t,n]=j.useState(!1),r=e.slice(0,8);return i.jsxs("div",{className:"combat-log-wrap",children:[i.jsxs("button",{className:`log-toggle ${t?"open":""}`,onClick:()=>n(l=>!l),title:"Combat log",children:["📜 Log ",e.length>0&&i.jsx("span",{className:"log-count",children:e.length})]}),t&&i.jsxs("div",{className:"combat-log-panel",children:[i.jsxs("div",{className:"clp-header",children:[i.jsx("span",{className:"font-display",style:{fontSize:"0.75rem",color:"var(--gold)"},children:"Combat Log"}),i.jsx("button",{className:"btn btn-ghost",style:{fontSize:"0.8rem",padding:"2px 6px"},onClick:()=>n(!1),children:"×"})]}),r.length===0?i.jsx("div",{className:"clp-empty",children:"No events yet."}):r.map(l=>i.jsxs("div",{className:"clp-entry",children:[i.jsx("span",{className:"clp-icon",children:l.icon||"✦"}),i.jsxs("div",{className:"clp-content",children:[i.jsx("span",{className:"clp-title",children:l.title}),l.sub&&i.jsxs("span",{className:"clp-sub",children:[" — ",l.sub]})]}),i.jsx("span",{className:"clp-time",children:yf(l.ts)})]},l.id))]}),i.jsx("style",{children:`
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
      `})]})}function yf(e){const t=Math.round((Date.now()-e)/1e3);return t<60?`${t}s ago`:t<3600?`${Math.round(t/60)}m ago`:`${Math.round(t/3600)}h ago`}function wf({monster:e,currentHp:t,playerStats:n,activeBuffs:r=[],floatingNumbers:l=[],momentumMult:o=1,lowEnergyMode:a=!1,monstersKilled:s=0,onToggleLowEnergy:u,combatLog:d=[]}){var P,f,c;const[h,v]=j.useState(!1),g=Math.max(0,t/e.max_hp*100),S=Ec(n);j.useEffect(()=>{if(l.length>0){v(!0);const p=setTimeout(()=>v(!1),200);return()=>clearTimeout(p)}},[l.length]);const m=g>50?"#5CDD8B":g>25?"#F5A623":"#FF3860",y=(P=e.phases)==null?void 0:P.some(p=>Math.abs(g/100-p.hp_threshold)<.08);return i.jsxs("div",{className:`combat-strip ${a?"low-energy":""}`,children:[i.jsxs("div",{className:"combat-monster-section",children:[i.jsxs("div",{className:"combat-monster-info",children:[i.jsxs("div",{className:"combat-monster-name",style:{color:e.color},children:[e.name,e.isBoss&&i.jsx("span",{className:"boss-tag",children:"BOSS"})]}),i.jsxs("div",{className:"combat-hp-row",children:[i.jsxs("div",{className:"combat-hp-bar-track",children:[i.jsx("div",{className:"combat-hp-bar-fill",style:{width:`${g}%`,background:m,boxShadow:`0 0 8px ${m}60`}}),y&&i.jsx("div",{className:"phase-warn-line",style:{left:`${((c=(f=e.phases)==null?void 0:f[0])==null?void 0:c.hp_threshold)*100}%`}})]}),i.jsxs("div",{className:"combat-hp-text",children:[t.toLocaleString()," / ",e.max_hp.toLocaleString()]})]})]}),i.jsxs("div",{className:`combat-arena ${h?"shake":""}`,children:[i.jsxs("div",{className:"player-sprite",children:[i.jsx("div",{className:"sprite-figure player-figure",children:"🧙‍♂️"}),i.jsx("div",{className:"sprite-label",children:"You"}),r.length>0&&i.jsx("div",{className:"buff-indicators",children:r.map(p=>i.jsx("span",{className:"buff-pip",title:p.label,children:p.icon},p.id))})]}),i.jsx("div",{className:"attack-arrows",children:i.jsxs("div",{className:"arrow-row",children:[i.jsx("div",{className:"attack-arrow",style:{animationDelay:"0ms"},children:"→"}),i.jsx("div",{className:"attack-arrow",style:{animationDelay:"300ms"},children:"→"}),i.jsx("div",{className:"attack-arrow",style:{animationDelay:"600ms"},children:"→"})]})}),i.jsxs("div",{className:"monster-sprite",children:[i.jsx("div",{className:`sprite-figure monster-figure ${h?"monster-hit":""}`,style:{fontSize:e.isBoss?"2.2rem":"1.8rem"},children:e.sprite}),i.jsx("div",{className:"sprite-label",style:{color:e.color},children:e.isBoss?"⚡ BOSS":`Tier ${e.tier}`})]}),l.map(p=>i.jsx("div",{className:`float-dmg ${p.isCrit?"crit":""} ${p.isOffline?"offline":""}`,style:{left:`${p.x}%`},children:p.isOffline?`+${p.value} (idle)`:p.isCrit?`${p.value}!`:p.value},p.id))]})]}),i.jsxs("div",{className:"combat-stats-panel",children:[i.jsxs("div",{className:"combat-stat-row",children:[i.jsx("span",{className:"cs-label",children:"⚔ DPS"}),i.jsx("span",{className:"cs-value",children:S})]}),i.jsxs("div",{className:"combat-stat-row",children:[i.jsx("span",{className:"cs-label",children:"💥 ATK"}),i.jsx("span",{className:"cs-value",children:Math.round(n.attack)})]}),i.jsxs("div",{className:"combat-stat-row",children:[i.jsx("span",{className:"cs-label",children:"🎯 Crit"}),i.jsxs("span",{className:"cs-value",children:[Math.round(n.critChance*100),"%"]})]}),o>1&&i.jsxs("div",{className:"combat-stat-row momentum",children:[i.jsx("span",{className:"cs-label",children:"🔥 Momentum"}),i.jsxs("span",{className:"cs-value",children:[o.toFixed(1),"×"]})]}),i.jsxs("div",{className:"combat-stat-row muted",children:[i.jsx("span",{className:"cs-label",children:"☠ Kills"}),i.jsx("span",{className:"cs-value",children:s})]}),i.jsxs("div",{className:"combat-log-row",children:[i.jsx("button",{className:`low-energy-btn ${a?"active":""}`,onClick:u,title:"Low Energy Mode",children:"💙 Low E"}),i.jsx(xf,{log:d})]})]}),i.jsx("style",{children:`
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
      `})]})}const Ut={goldSmall:500,goldLarge:5e3,instantKill:!0};function kf({onAddGold:e,onInstantKill:t}){const[n,r]=j.useState(!1),[l,o]=j.useState("");function a(h){o(h),setTimeout(()=>o(""),1500)}function s(){e(Ut.goldSmall),a(`+${Ut.goldSmall} gold`)}function u(){e(Ut.goldLarge),a(`+${Ut.goldLarge} gold`)}function d(){t(),a("Monster slain!")}return i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"dev-toggle",onClick:()=>r(h=>!h),title:"Dev Panel (disable in devConfig.js)",children:"🛠"}),n&&i.jsxs("div",{className:"dev-panel",children:[i.jsxs("div",{className:"dev-header",children:[i.jsx("span",{className:"dev-title",children:"🛠 DEV MODE"}),i.jsx("span",{className:"dev-hint",children:"Set DEV_MODE=false to hide"}),i.jsx("button",{className:"dev-close",onClick:()=>r(!1),children:"×"})]}),l&&i.jsx("div",{className:"dev-flash",children:l}),i.jsxs("div",{className:"dev-actions",children:[i.jsxs("button",{className:"dev-btn gold",onClick:s,children:["💰 +",Ut.goldSmall," Gold"]}),i.jsxs("button",{className:"dev-btn gold-big",onClick:u,children:["💰💰 +",Ut.goldLarge," Gold"]}),i.jsx("button",{className:"dev-btn kill",onClick:d,children:"☠ Instant Kill"})]}),i.jsxs("div",{className:"dev-note",children:["Edit ",i.jsx("code",{children:"src/devConfig.js"})," to configure or disable."]})]}),i.jsx("style",{children:`
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
      `})]})}const or={LOW:{label:"Low",color:"#6C8EBF",icon:"○",xpMult:.8},MEDIUM:{label:"Medium",color:"#F5A623",icon:"◐",xpMult:1},HIGH:{label:"High",color:"#FF6584",icon:"●",xpMult:1.3},URGENT:{label:"Urgent",color:"#FF3860",icon:"⚡",xpMult:1.6}},ar={XS:{label:"Quick (5m)",minutes:5,baseXP:20},S:{label:"Short (15m)",minutes:15,baseXP:40},M:{label:"Medium (30m)",minutes:30,baseXP:75},L:{label:"Long (1h)",minutes:60,baseXP:140},XL:{label:"Deep (2h+)",minutes:120,baseXP:250}},bf=[{id:"quick_start",name:"Quick Start",description:"Earn +20 XP bonus for starting any task within 5 minutes of viewing it.",icon:"⚡",effect_type:"xp_bonus_on_start",effect_value:20,cost:1},{id:"deep_focus",name:"Deep Focus",description:"Focus sessions earn +15% more XP.",icon:"🔮",effect_type:"xp_mult_focus",effect_value:.15,cost:1},{id:"second_wind",name:"Second Wind",description:"Completing an overdue task gives full XP instead of reduced.",icon:"🌬️",effect_type:"no_overdue_penalty",effect_value:!0,cost:2},{id:"subtask_master",name:"Subtask Master",description:"Subtask XP increased by 50%.",icon:"📋",effect_type:"subtask_xp_mult",effect_value:.5,cost:1},{id:"streak_shield",name:"Streak Shield",description:"Once per week, missing a daily will not break your streak.",icon:"🛡️",effect_type:"streak_forgiveness",effect_value:1,cost:2}],os=[{id:"task-1",title:"Review project proposal",notes:"Check the Q3 roadmap and leave comments before the team meeting.",dueAt:new Date(Date.now()+2*60*60*1e3).toISOString(),priority:"HIGH",effort:"M",status:"pending",tags:["work"],subtasks:[{id:"st-1a",title:"Read through executive summary",done:!0},{id:"st-1b",title:"Add inline comments",done:!1},{id:"st-1c",title:"Write summary feedback",done:!1}],createdAt:new Date(Date.now()-24*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-2",title:"Reply to Sarah's email",notes:"",dueAt:new Date(Date.now()+30*60*1e3).toISOString(),priority:"URGENT",effort:"XS",status:"pending",tags:["work","comms"],subtasks:[],createdAt:new Date(Date.now()-60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-3",title:"Grocery run",notes:"Pick up ingredients for the week. Check the list on the fridge.",dueAt:new Date(Date.now()+5*60*60*1e3).toISOString(),priority:"MEDIUM",effort:"S",status:"pending",tags:["personal","errands"],subtasks:[{id:"st-3a",title:"Check fridge for what's needed",done:!1},{id:"st-3b",title:"Go to store",done:!1}],createdAt:new Date(Date.now()-2*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-4",title:"Do 20-min stretching routine",notes:"Back has been tight — do the hip flexor and shoulder opener sequences.",dueAt:new Date(Date.now()-60*60*1e3).toISOString(),priority:"LOW",effort:"XS",status:"pending",tags:["health"],subtasks:[],createdAt:new Date(Date.now()-5*60*60*1e3).toISOString(),completedAt:null,isOverdue:!0}],as={id:"user-1",displayName:"Adventurer",level:3,xp:340,xpToNext:500,gold:127,streak:5,talentPoints:1,unlockedTalents:["quick_start"],title:"Aspiring Chronicler"},is=[{id:"hist-1",title:"Morning standup notes",completedAt:new Date(Date.now()-3*60*60*1e3).toISOString(),xpEarned:40,goldEarned:8},{id:"hist-2",title:"Send weekly update to manager",completedAt:new Date(Date.now()-5*60*60*1e3).toISOString(),xpEarned:75,goldEarned:15}],lo={work:"#4FC3F7",personal:"#B39DDB",health:"#69F0AE",errands:"#F5A623",comms:"#FF6584",school:"#FFD54F"};function zc(e,t=[]){const n=ar[e.effort]||ar.M,r=or[e.priority]||or.MEDIUM;let l=n.baseXP,o=Math.round(l*r.xpMult);const a=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,s=t.includes("second_wind");a&&!s?o=Math.round(o*.6):a||(o=Math.round(o*1.1));const u=Math.round(o*.2);return{xp:o,gold:u,isOverdue:a}}function Sf(e=[]){return{xp:e.includes("subtask_master")?Math.round(12*1.5):12,gold:2}}function Nf(e,t,n=[]){const r=Math.round(e*2.5),l=n.includes("deep_focus")?1.15:1,o=t?1.25:.7,a=Math.round(r*l*o),s=Math.round(a*.15);return{xp:a,gold:s}}function oo(e){return Math.round(200*Math.pow(e,1.4))}function jf(e,t,n){let r=e,l=t+n,o=!1,a=0;for(;l>=oo(r);)l-=oo(r),r+=1,o=!0,a+=1;return{level:r,xp:l,xpToNext:oo(r),leveledUp:o,talentPointsEarned:a}}function _f(e){if(!e)return null;const t=new Date(e)-new Date,n=Math.abs(t);if(n<60*1e3)return t<0?"Just overdue":"Due now";if(n<60*60*1e3){const l=Math.round(n/6e4);return t<0?`${l}m overdue`:`in ${l}m`}if(n<24*60*60*1e3){const l=Math.round(n/36e5);return t<0?`${l}h overdue`:`in ${l}h`}const r=Math.round(n/864e5);return t<0?`${r}d overdue`:`in ${r}d`}function Dt(){return`${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Cf(e){const t={URGENT:0,HIGH:1,MEDIUM:2,LOW:3};return[...e].sort((n,r)=>{const l=n.isOverdue||n.dueAt&&new Date(n.dueAt)<new Date,o=r.isOverdue||r.dueAt&&new Date(r.dueAt)<new Date;if(l!==o)return l?-1:1;const a=(t[n.priority]||2)-(t[r.priority]||2);return a!==0?a:n.dueAt&&r.dueAt?new Date(n.dueAt)-new Date(r.dueAt):0})}function Ef({task:e,userTalents:t=[],onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:a,index:s=0}){var b;const[u,d]=j.useState(!1),[h,v]=j.useState(!1),[g,S]=j.useState(!1),m=or[e.priority]||or.MEDIUM,y=ar[e.effort]||ar.M,P=_f(e.dueAt),f=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,c=e.subtasks.filter(w=>w.done).length,p=e.subtasks.length,{xp:x,gold:k}=zc(e,t);function C(){v(!0),setTimeout(()=>n(e.id),400)}return i.jsxs("div",{className:`task-card ${h?"completing":""} ${f?"overdue":""}`,style:{animationDelay:`${s*60}ms`,"--priority-color":m.color},children:[i.jsx("div",{className:"priority-stripe",style:{background:m.color}}),i.jsxs("div",{className:"task-card-inner",children:[i.jsxs("div",{className:"task-main-row",children:[i.jsx("button",{className:`task-checkbox ${h?"completing":""}`,onClick:C,title:"Mark complete","aria-label":"Complete task",children:h&&i.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"✓"})}),i.jsxs("div",{className:"task-title-block",onClick:()=>d(w=>!w),children:[i.jsx("div",{className:"task-title",children:e.title}),e.notes&&!u&&i.jsx("div",{className:"task-notes-preview",children:e.notes})]}),i.jsxs("div",{className:"task-actions-inline",children:[a&&i.jsx("button",{className:"btn btn-ghost task-action-btn",onClick:()=>a(e),title:"Start focus session",children:"🔮"}),i.jsx("button",{className:`task-expand-btn ${u?"open":""}`,onClick:()=>d(w=>!w),"aria-label":"Toggle details",children:"▾"})]})]}),i.jsxs("div",{className:"task-meta-row",children:[i.jsxs("span",{className:"badge",style:{background:`${m.color}18`,color:m.color,border:`1px solid ${m.color}30`},children:[m.icon," ",m.label]}),i.jsxs("span",{className:"badge",style:{background:"var(--bg-elevated)",color:"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["⏱ ",y.label]}),P&&i.jsxs("span",{className:`badge ${f?"overdue-badge":"due-badge"}`,children:[f?"⚠ ":"📅 ",P]}),(b=e.tags)==null?void 0:b.map(w=>i.jsx("span",{className:"tag-chip",style:{background:`${lo[w]||"#888"}20`,color:lo[w]||"#888",border:`1px solid ${lo[w]||"#888"}30`},children:w},w)),p>0&&i.jsxs("span",{className:"badge",style:{background:c===p?"var(--green-dim)":"var(--bg-elevated)",color:c===p?"var(--green)":"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["☑ ",c,"/",p]}),i.jsxs("span",{className:"reward-preview",children:["+",x," XP · +",k," 💰"]})]}),u&&i.jsxs("div",{className:"task-expanded animate-in",children:[e.notes&&i.jsx("div",{className:"task-notes",children:e.notes}),p>0&&i.jsxs("div",{className:"subtask-list",children:[i.jsx("div",{className:"subtask-header",children:"Steps"}),e.subtasks.map(w=>i.jsxs("div",{className:`subtask-item ${w.done?"done":""}`,onClick:()=>r(e.id,w.id),children:[i.jsx("span",{className:"subtask-check",children:w.done?"✓":"○"}),i.jsx("span",{className:"subtask-title",children:w.title}),!w.done&&i.jsx("span",{className:"subtask-xp",children:"+12 XP"})]},w.id))]}),f&&i.jsxs("div",{className:"recovery-banner",children:[i.jsx("span",{children:"🌱"}),i.jsxs("div",{children:[i.jsx("div",{className:"recovery-title",children:"No worries — let's get back on track."}),i.jsxs("div",{className:"recovery-subtitle",children:["Completing it still earns you ",Math.round(x*.6)," XP. Or reschedule if needed."]})]})]}),i.jsxs("div",{className:"task-action-row",children:[i.jsxs("button",{className:"btn btn-success",onClick:C,children:["✓ Complete (+",x," XP)"]}),a&&i.jsx("button",{className:"btn btn-secondary",onClick:()=>a(e),children:"🔮 Focus"}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>l(e.id,2),children:"⏰ Snooze 2h"}),g?i.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[i.jsx("button",{className:"btn btn-danger",onClick:()=>o(e.id),children:"Delete"}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!1),children:"Cancel"})]}):i.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!0),style:{marginLeft:"auto"},children:"🗑"})]})]})]}),i.jsx("style",{children:`
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
      `})]})}const zf={title:"",notes:"",priority:"MEDIUM",effort:"S",dueAt:"",tags:[],subtasks:[]};function Tf({onAdd:e,onClose:t}){const[n,r]=j.useState(zf),[l,o]=j.useState(!1),[a,s]=j.useState(""),u=j.useRef(null);j.useEffect(()=>{var m;(m=u.current)==null||m.focus()},[]);function d(m){m.preventDefault(),n.title.trim()&&(e({...n,dueAt:n.dueAt?new Date(n.dueAt).toISOString():null,subtasks:n.subtasks}),t())}function h(){a.trim()&&(r(m=>({...m,subtasks:[...m.subtasks,{id:Dt(),title:a.trim(),done:!1}]})),s(""))}function v(m){r(y=>({...y,subtasks:y.subtasks.filter(P=>P.id!==m)}))}function g(m){r(y=>({...y,tags:y.tags.includes(m)?y.tags.filter(P=>P!==m):[...y.tags,m]}))}const S=["work","personal","health","errands","comms","school"];return i.jsxs("div",{className:"modal-overlay",onClick:m=>{m.target===m.currentTarget&&t()},children:[i.jsxs("div",{className:"modal-box",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{className:"font-display",style:{color:"var(--gold)"},children:"⚔ New Quest"}),i.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:"1.2rem"},children:"×"})]}),i.jsxs("form",{onSubmit:d,className:"add-task-form",children:[i.jsx("div",{className:"form-group",children:i.jsx("input",{ref:u,type:"text",placeholder:"What needs to be done?",value:n.title,onChange:m=>r(y=>({...y,title:m.target.value})),className:"title-input",required:!0})}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Priority"}),i.jsx("div",{className:"priority-selector",children:Object.entries(or).map(([m,y])=>i.jsxs("button",{type:"button",className:`priority-option ${n.priority===m?"active":""}`,style:{"--pcolor":y.color},onClick:()=>r(P=>({...P,priority:m})),children:[i.jsx("span",{children:y.icon}),i.jsx("span",{children:y.label})]},m))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"How long will this take?"}),i.jsx("div",{className:"effort-selector",children:Object.entries(ar).map(([m,y])=>i.jsx("button",{type:"button",className:`effort-option ${n.effort===m?"active":""}`,onClick:()=>r(P=>({...P,effort:m})),children:y.label},m))})]}),i.jsxs("button",{type:"button",className:"advanced-toggle",onClick:()=>o(m=>!m),children:[i.jsx("span",{children:l?"▾":"▸"}),i.jsx("span",{children:l?"Fewer options":"More options (notes, due date, subtasks, tags)"})]}),l&&i.jsxs("div",{className:"advanced-section animate-in",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Notes"}),i.jsx("textarea",{placeholder:"Any details or context...",value:n.notes,onChange:m=>r(y=>({...y,notes:m.target.value})),rows:3})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Due date"}),i.jsx("input",{type:"datetime-local",value:n.dueAt,onChange:m=>r(y=>({...y,dueAt:m.target.value}))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tags"}),i.jsx("div",{className:"tag-selector",children:S.map(m=>i.jsx("button",{type:"button",className:`tag-option ${n.tags.includes(m)?"active":""}`,onClick:()=>g(m),children:m},m))})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Break it down (subtasks)"}),i.jsxs("div",{className:"subtask-add-row",children:[i.jsx("input",{type:"text",placeholder:"Add a step...",value:a,onChange:m=>s(m.target.value),onKeyDown:m=>{m.key==="Enter"&&(m.preventDefault(),h())}}),i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:h,children:"+ Add"})]}),n.subtasks.length>0&&i.jsx("div",{className:"subtask-preview-list",children:n.subtasks.map(m=>i.jsxs("div",{className:"subtask-preview-item",children:[i.jsx("span",{children:"○"}),i.jsx("span",{style:{flex:1},children:m.title}),i.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>v(m.id),children:"×"})]},m.id))})]})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),i.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.title.trim(),children:"⚔ Add Quest"})]})]})]}),i.jsx("style",{children:`
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
      `})]})}function Pf({user:e,tasks:t,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onAddTask:a,onStartFocus:s}){const[u,d]=j.useState(!1),[h,v]=j.useState("all"),[g,S]=j.useState(""),m=j.useMemo(()=>Cf(t.filter(x=>x.status==="pending")),[t]),y=m.filter(x=>x.isOverdue||x.dueAt&&new Date(x.dueAt)<new Date);m.filter(x=>!x.isOverdue&&!(x.dueAt&&new Date(x.dueAt)<new Date));const P=j.useMemo(()=>h==="overdue"?y:h==="high"?m.filter(x=>["HIGH","URGENT"].includes(x.priority)):m,[h,m,y]);function f(x){x.preventDefault(),g.trim()&&(a({title:g.trim(),priority:"MEDIUM",effort:"S"}),S(""))}const c=m[0],p=(()=>{const x=new Date().getHours();return x<12?"Good morning":x<17?"Good afternoon":"Good evening"})();return i.jsxs("div",{className:"dashboard",children:[i.jsxs("div",{className:"dashboard-header",children:[i.jsxs("div",{children:[i.jsxs("h1",{className:"dashboard-title font-display",children:[p,", ",e.displayName]}),i.jsxs("div",{className:"dashboard-subtitle",children:[m.length===0?"🎉 All clear! You're on top of everything.":`You have ${m.length} quest${m.length!==1?"s":""} pending.`,y.length>0&&i.jsxs("span",{className:"overdue-warning",children:[" · ",y.length," overdue"]})]})]}),i.jsx("button",{className:"btn btn-primary add-quest-btn",onClick:()=>d(!0),children:"⚔ New Quest"})]}),c&&i.jsxs("div",{className:"next-action-spotlight",children:[i.jsxs("div",{className:"next-action-label",children:[i.jsx("span",{className:"pulse-dot"}),"NEXT BEST ACTION"]}),i.jsxs("div",{className:"next-action-content",children:[i.jsx("div",{className:"next-action-title",children:c.title}),i.jsxs("div",{className:"next-action-meta",children:[c.effort&&i.jsxs("span",{children:["~",c.effort==="XS"?"5":c.effort==="S"?"15":c.effort==="M"?"30":c.effort==="L"?"60":"120","min"]}),c.dueAt&&i.jsxs("span",{children:["· due ",new Date(c.dueAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]}),i.jsxs("div",{className:"next-action-btns",children:[i.jsx("button",{className:"btn btn-primary",onClick:()=>s(c),children:"🔮 Start Focus"}),i.jsx("button",{className:"btn btn-success",onClick:()=>n(c.id),children:"✓ Complete"})]})]}),i.jsxs("form",{onSubmit:f,className:"quick-add-bar",children:[i.jsx("input",{type:"text",placeholder:"Quick add a task… (press Enter)",value:g,onChange:x=>S(x.target.value),className:"quick-add-input"}),i.jsx("button",{type:"submit",className:"btn btn-secondary",children:"Add"}),i.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>d(!0),children:"+ Details"})]}),i.jsx("div",{className:"filter-tabs",children:[{id:"all",label:`All (${m.length})`},{id:"high",label:`High Priority (${m.filter(x=>["HIGH","URGENT"].includes(x.priority)).length})`},{id:"overdue",label:`Overdue (${y.length})`,danger:y.length>0}].map(x=>i.jsx("button",{className:`filter-tab ${h===x.id?"active":""} ${x.danger?"danger":""}`,onClick:()=>v(x.id),children:x.label},x.id))}),i.jsx("div",{className:"task-list",children:P.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"🌟"}),i.jsx("div",{className:"empty-title",children:"Nothing here!"}),i.jsx("div",{className:"empty-sub",children:h==="overdue"?"No overdue tasks — great work!":"Add your first quest to get started."})]}):P.map((x,k)=>i.jsx(Ef,{task:x,userTalents:e.unlockedTalents,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:s,index:k},x.id))}),u&&i.jsx(Tf,{onAdd:a,onClose:()=>d(!1)}),i.jsx("style",{children:`
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
      `})]})}const Df=[{label:"5 min",minutes:5,emoji:"⚡"},{label:"15 min",minutes:15,emoji:"🌊"},{label:"25 min",minutes:25,emoji:"🔮"},{label:"45 min",minutes:45,emoji:"🌙"},{label:"60 min",minutes:60,emoji:"⭐"}];function Mf({session:e,onStart:t,onPause:n,onResume:r,onStop:l,formatTime:o,tasks:a}){const[s,u]=j.useState(null),[d,h]=j.useState(25),v=e?1-e.secondsLeft/e.totalSeconds:0,g=2*Math.PI*120,S=g*(1-v);if(!e)return i.jsxs("div",{className:"focus-setup",children:[i.jsxs("div",{className:"focus-setup-inner",children:[i.jsx("div",{className:"focus-icon-big",children:"🔮"}),i.jsx("h1",{className:"font-display focus-heading",children:"Focus Session"}),i.jsxs("p",{className:"focus-subtitle",children:["Clear your mind. One task. One timer.",i.jsx("br",{}),"Earn bonus XP for every focused minute."]}),a.length>0&&i.jsxs("div",{className:"focus-section",children:[i.jsx("div",{className:"focus-section-label",children:"Working on"}),i.jsxs("div",{className:"task-picker",children:[i.jsx("button",{className:`task-pick-option ${s?"":"active"}`,onClick:()=>u(null),children:"Free focus (no task)"}),a.slice(0,5).map(c=>i.jsx("button",{className:`task-pick-option ${(s==null?void 0:s.id)===c.id?"active":""}`,onClick:()=>u(c),children:c.title},c.id))]})]}),i.jsxs("div",{className:"focus-section",children:[i.jsx("div",{className:"focus-section-label",children:"Duration"}),i.jsx("div",{className:"preset-grid",children:Df.map(c=>i.jsxs("button",{className:`preset-btn ${d===c.minutes?"active":""}`,onClick:()=>h(c.minutes),children:[i.jsx("span",{className:"preset-emoji",children:c.emoji}),i.jsx("span",{className:"preset-label",children:c.label})]},c.minutes))})]}),i.jsx("button",{className:"btn btn-primary focus-start-btn",onClick:()=>t(s||{id:"free",title:"Free Focus"},d),children:"🔮 Begin Session"}),i.jsx("div",{className:"focus-tip",children:"💡 Tip: Each minute focused earns 2.5 XP. Complete the session for a 25% bonus."})]}),i.jsx("style",{children:`
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
        `})]});const m=Math.floor(e.secondsLeft/60),y=e.secondsLeft%60,P=Math.round((e.totalSeconds-e.secondsLeft)/60),f=Math.round(P*2.5);return i.jsxs("div",{className:"focus-active",children:[i.jsxs("div",{className:"focus-active-inner",children:[i.jsx("div",{className:"focus-task-name",children:e.taskTitle}),i.jsxs("div",{className:"timer-ring-wrapper",children:[i.jsxs("svg",{viewBox:"0 0 280 280",className:"timer-ring",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:"var(--bg-elevated)",strokeWidth:"12"}),i.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:e.paused?"var(--amber)":"var(--xp-blue)",strokeWidth:"12",strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:S,transform:"rotate(-90 140 140)",style:{transition:"stroke-dashoffset 1s linear, stroke 0.3s"}})]}),i.jsxs("div",{className:"timer-display",children:[i.jsxs("div",{className:"timer-digits",children:[String(m).padStart(2,"0"),":",String(y).padStart(2,"0")]}),i.jsx("div",{className:"timer-status",children:e.paused?"⏸ paused":"● focusing"}),i.jsxs("div",{className:"timer-xp-preview",children:["+",f," XP earned so far"]})]})]}),i.jsxs("div",{className:"focus-controls",children:[e.paused?i.jsx("button",{className:"btn btn-primary focus-ctrl-btn",onClick:r,children:"▶ Resume"}):i.jsx("button",{className:"btn btn-secondary focus-ctrl-btn",onClick:n,children:"⏸ Pause"}),i.jsx("button",{className:"btn btn-success focus-ctrl-btn",onClick:()=>l(!0),children:"✓ Complete"}),i.jsx("button",{className:"btn btn-ghost focus-ctrl-btn",onClick:()=>l(!1),children:"✕ End early"})]}),i.jsx("div",{className:"focus-reminder",children:"Put your phone down. You've got this. 💙"})]}),i.jsx("style",{children:`
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
      `})]})}const Lf=[{id:"first_quest",icon:"⚔️",name:"First Quest",desc:"Completed your first task",earned:!0},{id:"week_streak",icon:"🔥",name:"Week Warrior",desc:"7-day streak",earned:!0},{id:"focus_ten",icon:"🔮",name:"Deep Thinker",desc:"10 focus sessions",earned:!1},{id:"early_bird",icon:"🌅",name:"Early Bird",desc:"Complete a task before 9am",earned:!1},{id:"level_5",icon:"⭐",name:"Rising Star",desc:"Reach Level 5",earned:!1},{id:"hundred_tasks",icon:"🏆",name:"Century",desc:"Complete 100 tasks",earned:!1}];function If({user:e,history:t}){const n=t.reduce((l,o)=>l+o.xpEarned,0);t.reduce((l,o)=>l+o.goldEarned,0);const r=Math.round(e.xp/e.xpToNext*100);return i.jsxs("div",{className:"rewards-screen",children:[i.jsxs("div",{className:"rewards-hero",children:[i.jsxs("div",{className:"rewards-avatar",children:[i.jsx("span",{className:"rewards-level font-display",children:e.level}),i.jsx("span",{className:"rewards-level-label",children:"LVL"})]}),i.jsxs("div",{className:"rewards-hero-info",children:[i.jsx("h1",{className:"font-display rewards-name",children:e.displayName}),i.jsx("div",{className:"rewards-title-text",children:e.title}),i.jsxs("div",{className:"xp-section",children:[i.jsxs("div",{className:"xp-section-labels",children:[i.jsx("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:"XP Progress"}),i.jsxs("span",{className:"text-xs text-muted",children:[e.xp," / ",e.xpToNext]})]}),i.jsx("div",{className:"xp-bar-track",children:i.jsx("div",{className:"xp-bar-fill",style:{width:`${r}%`}})}),i.jsxs("div",{className:"text-xs text-muted",style:{marginTop:4},children:[e.xpToNext-e.xp," XP until Level ",e.level+1]})]})]})]}),i.jsx("div",{className:"stats-grid",children:[{icon:"⚡",label:"Current Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Total Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Day Streak",value:`${e.streak}d`,color:"var(--amber)"},{icon:"✅",label:"Tasks Done",value:t.length,color:"var(--green)"},{icon:"🌟",label:"Total XP Earned",value:`${n.toLocaleString()}`,color:"var(--purple)"},{icon:"🎯",label:"Talent Points",value:e.talentPoints,color:"var(--coral)"}].map(l=>i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-card-icon",style:{color:l.color},children:l.icon}),i.jsx("div",{className:"stat-card-value",style:{color:l.color},children:l.value}),i.jsx("div",{className:"stat-card-label",children:l.label})]},l.label))}),i.jsxs("div",{className:"section",children:[i.jsx("h2",{className:"section-title font-display",children:"Achievements"}),i.jsx("div",{className:"badges-grid",children:Lf.map(l=>i.jsxs("div",{className:`badge-card ${l.earned?"earned":"locked"}`,children:[i.jsx("div",{className:"badge-icon",children:l.icon}),i.jsx("div",{className:"badge-name",children:l.name}),i.jsx("div",{className:"badge-desc",children:l.desc}),!l.earned&&i.jsx("div",{className:"badge-lock",children:"🔒"})]},l.id))})]}),i.jsxs("div",{className:"section",children:[i.jsx("h2",{className:"section-title font-display",children:"Recent Completions"}),i.jsx("div",{className:"history-list",children:t.length===0?i.jsx("div",{className:"text-muted",style:{textAlign:"center",padding:"var(--space-6)"},children:"No completed tasks yet. Go conquer something! ⚔️"}):t.slice(0,20).map(l=>i.jsxs("div",{className:"history-item animate-in",children:[i.jsx("div",{className:"history-title",children:l.title}),i.jsx("div",{className:"history-meta",children:i.jsx("span",{className:"text-xs text-muted",children:new Date(l.completedAt).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})}),i.jsxs("div",{className:"history-rewards",children:[i.jsxs("span",{className:"history-xp",children:["+",l.xpEarned," XP"]}),i.jsxs("span",{className:"history-gold",children:["+",l.goldEarned," 💰"]})]})]},l.id))})]}),i.jsx("style",{children:`
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
      `})]})}function Of({user:e,onUnlock:t}){return i.jsxs("div",{className:"talents-screen",children:[i.jsxs("div",{className:"talents-header",children:[i.jsx("h1",{className:"font-display talents-title",children:"Talent Tree"}),i.jsx("div",{className:"talents-subtitle",children:"Unlock perks that make productivity easier — not just look better."}),i.jsxs("div",{className:"talent-points-display",children:[i.jsx("span",{className:"talent-points-icon",children:"🌟"}),i.jsx("span",{className:"talent-points-value",children:e.talentPoints}),i.jsx("span",{className:"talent-points-label",children:"Talent Points Available"})]})]}),i.jsx("div",{className:"talents-grid",children:bf.map(n=>{const r=e.unlockedTalents.includes(n.id),l=e.talentPoints>=n.cost;return i.jsxs("div",{className:`talent-card ${r?"unlocked":""} ${!r&&l?"available":""}`,children:[i.jsx("div",{className:"talent-icon",children:n.icon}),i.jsxs("div",{className:"talent-info",children:[i.jsx("div",{className:"talent-name",children:n.name}),i.jsx("div",{className:"talent-desc",children:n.description})]}),i.jsx("div",{className:"talent-action",children:r?i.jsxs("div",{className:"talent-status unlocked-status",children:[i.jsx("span",{children:"✓"})," Unlocked"]}):i.jsxs("button",{className:`btn ${l?"btn-primary":"btn-secondary"} talent-unlock-btn`,onClick:()=>t(n.id,n.cost),disabled:!l,children:["🌟 ",n.cost," ",n.cost===1?"point":"points"]})})]},n.id)})}),i.jsxs("div",{className:"talents-tip",children:[i.jsx("span",{children:"💡"}),i.jsx("span",{children:"You earn Talent Points by leveling up. Every level grants 1 point. Keep completing quests to unlock more perks!"})]}),i.jsx("style",{children:`
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
      `})]})}function ss({item:e,onAction:t,actionLabel:n,actionStyle:r="primary",showSlot:l=!1}){if(!e)return null;const o=hn[e.rarity]||hn.common;return i.jsxs("div",{className:"item-card",style:{borderColor:o.color,"--rc":o.color},children:[i.jsxs("div",{className:"item-card-top",children:[i.jsx("span",{className:"item-icon",children:e.icon}),i.jsxs("div",{className:"item-header",children:[i.jsx("div",{className:"item-name",style:{color:o.color},children:e.name}),i.jsxs("div",{className:"item-meta-row",children:[i.jsx("span",{className:"rarity-badge",style:{background:o.bg,color:o.color},children:o.label}),l&&i.jsx("span",{className:"slot-badge",children:e.slot})]})]})]}),i.jsxs("div",{className:"item-stats",children:[Object.entries(e.stats||{}).map(([a,s])=>i.jsxs("div",{className:"item-stat",children:[i.jsx("span",{className:"istat-name",children:a}),i.jsx("span",{className:"istat-val",children:a==="critChance"||a==="critDamage"||a==="speed"?`+${(s*100).toFixed(0)}%`:`+${s}`})]},a)),(e.effects||[]).map((a,s)=>i.jsxs("div",{className:"item-stat effect",children:[i.jsx("span",{className:"istat-name",children:a.type==="task_xp_bonus"?"📚 Task XP":a.type==="focus_session_bonus"?"🔮 Focus XP":a.type}),i.jsxs("span",{className:"istat-val",children:["+",(a.value*100).toFixed(0),"%"]})]},s))]}),e.flavor&&i.jsxs("div",{className:"item-flavor",children:['"',e.flavor,'"']}),t&&i.jsx("button",{className:`btn btn-${r} item-action-btn`,onClick:()=>t(e),children:n})]})}function Rf({combat:e,userLevel:t}){const[n,r]=j.useState(null),[l,o]=j.useState("equipped"),{equipped:a,inventory:s,equipItem:u,unequipItem:d,playerStats:h}=e,{stats:v}=Cc(a),g=s.map(m=>lr[m]).filter(Boolean);function S(m){let y=m.slot;y==="ring"&&(y=a.ring?"ring2":"ring"),u(m.id,y),r(null)}return i.jsxs("div",{className:"inventory-screen",children:[i.jsxs("div",{className:"inv-header",children:[i.jsx("h1",{className:"font-display inv-title",children:"Equipment"}),i.jsxs("div",{className:"inv-dps-badge",children:[i.jsx("span",{children:"⚔"}),i.jsxs("span",{children:[Ec(h)," DPS"]})]})]}),i.jsxs("div",{className:"gear-summary",children:[Object.entries(v).map(([m,y])=>y!==0?i.jsxs("div",{className:"gear-stat-chip",children:[i.jsx("span",{className:"gs-name",children:m}),i.jsx("span",{className:"gs-val",children:m==="critChance"||m==="critDamage"||m==="speed"?`+${(y*100).toFixed(0)}%`:`+${y}`})]},m):null),Object.values(v).every(m=>m===0)&&i.jsx("div",{className:"text-muted text-sm",children:"No gear bonuses yet — equip some items!"})]}),i.jsx("div",{className:"inv-tabs",children:[{id:"equipped",label:`Equipped (${Object.values(a).filter(Boolean).length}/8)`},{id:"inventory",label:`Bag (${s.length})`}].map(m=>i.jsx("button",{className:`filter-tab ${l===m.id?"active":""}`,onClick:()=>o(m.id),children:m.label},m.id))}),l==="equipped"&&i.jsx("div",{className:"slots-grid animate-in",children:of.map(m=>{const y=a[m.id],P=y?lr[y]:null;return i.jsxs("div",{className:`equip-slot ${P?"has-item":"empty"}`,children:[i.jsxs("div",{className:"slot-label",children:[m.icon," ",m.label]}),P?i.jsx(ss,{item:P,onAction:()=>d(m.id),actionLabel:"Unequip",actionStyle:"ghost"}):i.jsx("div",{className:"empty-slot-hint",children:"Empty"})]},m.id)})}),l==="inventory"&&i.jsx("div",{className:"inv-bag animate-in",children:g.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"🎒"}),i.jsx("div",{className:"empty-title",children:"Bag is empty"}),i.jsx("div",{className:"empty-sub",children:"Defeat monsters or buy from the Shop to earn gear."})]}):i.jsx("div",{className:"bag-grid",children:g.map((m,y)=>i.jsx(ss,{item:m,showSlot:!0,onAction:S,actionLabel:"Equip",actionStyle:"primary"},`${m.id}-${y}`))})}),i.jsx("style",{children:`
        .inventory-screen {
          padding: var(--space-8);
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .inv-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
        }

        .inv-title {
          font-size: 1.8rem;
          background: linear-gradient(135deg, var(--amber), var(--gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

        .gs-name { color: var(--text-muted); font-weight: 600; text-transform: capitalize; }
        .gs-val  { color: var(--green); font-weight: 800; }

        .inv-tabs {
          display: flex;
          gap: var(--space-2);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: var(--space-3);
        }

        /* Equipped slots */
        .slots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: var(--space-3);
        }

        .equip-slot {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .equip-slot.has-item { border-color: var(--border-default); }
        .equip-slot.empty { opacity: 0.6; }

        .slot-label {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .empty-slot-hint {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-style: italic;
          text-align: center;
          padding: var(--space-3);
          border: 1px dashed var(--border-subtle);
          border-radius: var(--radius-md);
        }

        /* Item card */
        .item-card {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          background: var(--bg-elevated);
          border: 1px solid;
          border-radius: var(--radius-md);
          padding: var(--space-3);
          transition: all 0.15s;
        }

        .item-card:hover {
          background: var(--bg-card-hover);
          box-shadow: 0 0 12px rgba(0,0,0,0.2);
        }

        .item-card-top {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
        }

        .item-icon { font-size: 1.5rem; flex-shrink: 0; }

        .item-header { flex: 1; }
        .item-name { font-size: 0.85rem; font-weight: 700; line-height: 1.2; }

        .item-meta-row {
          display: flex;
          gap: 4px;
          margin-top: 3px;
          flex-wrap: wrap;
        }

        .rarity-badge, .slot-badge {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 1px 6px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .slot-badge {
          background: var(--bg-card);
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
        }

        .item-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .item-stat {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.7rem;
          background: var(--bg-card);
          border-radius: var(--radius-sm);
          padding: 2px 6px;
          border: 1px solid var(--border-subtle);
        }

        .item-stat.effect { border-color: rgba(92,221,139,0.2); }

        .istat-name { color: var(--text-muted); text-transform: capitalize; }
        .istat-val  { color: var(--green); font-weight: 800; }

        .item-flavor {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.4;
        }

        .item-action-btn {
          font-size: 0.75rem;
          padding: var(--space-1) var(--space-3);
          align-self: flex-start;
        }

        /* Bag grid */
        .inv-bag { min-height: 200px; }

        .bag-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-3);
        }

        @media (max-width: 600px) {
          .inventory-screen { padding: var(--space-4); }
          .slots-grid, .bag-grid { grid-template-columns: 1fr; }
        }
      `})]})}const Ff={shop_id:"starter_shop",name:"Wandering Merchant",icon:"🛒",items:[{item_id:"ring_focus_1",price:80,currency:"gold"},{item_id:"ring_speed_1",price:80,currency:"gold"},{item_id:"boots_speed_1",price:90,currency:"gold"},{item_id:"gloves_grip_1",price:100,currency:"gold"},{item_id:"helmet_steel_1",price:110,currency:"gold"},{item_id:"chest_iron_1",price:140,currency:"gold"},{item_id:"legs_swift_1",price:100,currency:"gold"}]},us=[[{item_id:"ring_focus_2",price:220,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"},{item_id:"helmet_clarity_1",price:200,currency:"gold"}],[{item_id:"boots_speed_2",price:200,currency:"gold"},{item_id:"legs_endure_1",price:190,currency:"gold"},{item_id:"ring_focus_2",price:220,currency:"gold"}],[{item_id:"necklace_resolve_1",price:350,currency:"gold"},{item_id:"chest_focus_1",price:400,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"}]],Af=24;function cs(){const e=36e5*Af,t=Date.now();return(Math.floor(t/e)+1)*e-t}const Ht=50;function $f(e){const t=Math.floor(e/36e5),n=Math.floor(e%36e5/6e4);return`${t}h ${n}m`}function ds({itemId:e,price:t,currency:n,userGold:r,onBuy:l,owned:o}){const a=lr[e];if(!a)return null;const s=hn[a.rarity]||hn.common,u=r>=t,[d,h]=j.useState(!1),[v,g]=j.useState(!1);function S(){if(!u||d||v)return;h(!0),l(e,t)&&g(!0),setTimeout(()=>h(!1),300)}return i.jsxs("div",{className:`shop-item ${v?"bought":""} ${u?"":"cant-afford"}`,style:{"--rc":s.color,borderColor:v?"var(--green)":s.color},children:[i.jsxs("div",{className:"shop-item-top",children:[i.jsx("span",{className:"shop-item-icon",children:a.icon}),i.jsxs("div",{className:"shop-item-header",children:[i.jsx("div",{className:"shop-item-name",style:{color:s.color},children:a.name}),i.jsx("span",{className:"rarity-badge",style:{background:s.bg,color:s.color},children:s.label})]})]}),i.jsx("div",{className:"shop-item-stats",children:Object.entries(a.stats||{}).map(([m,y])=>i.jsxs("span",{className:"shop-stat-chip",children:[i.jsx("span",{className:"ssc-name",children:m}),i.jsx("span",{className:"ssc-val",children:m==="critChance"||m==="critDamage"||m==="speed"?`+${(y*100).toFixed(0)}%`:`+${y}`})]},m))}),a.flavor&&i.jsxs("div",{className:"shop-item-flavor",children:['"',a.flavor,'"']}),i.jsxs("div",{className:"shop-item-footer",children:[i.jsxs("div",{className:`shop-price ${u?"":"unaffordable"}`,children:["💰 ",t," gold"]}),v?i.jsx("div",{className:"shop-bought-badge",children:"✓ Added to bag"}):i.jsx("button",{className:`btn ${u?"btn-primary":"btn-secondary"} shop-buy-btn`,onClick:S,disabled:!u||d,children:d?"...":u?"Buy":"Need gold"})]})]})}function Bf({userGold:e,onBuy:t,onRefreshSpend:n}){const[r,l]=j.useState(cs()),[o,a]=j.useState(0),[s,u]=j.useState(!1),d=(()=>{const v=Math.floor(Date.now()/864e5);return us[(v+o)%us.length]})();j.useEffect(()=>{const v=setInterval(()=>l(cs()),6e4);return()=>clearInterval(v)},[]);function h(){e<Ht||(n(Ht),a(v=>v+1),u(!0),setTimeout(()=>u(!1),600))}return i.jsxs("div",{className:"shop-screen",children:[i.jsxs("div",{className:"shop-header",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"font-display shop-title",children:"🛒 Shop"}),i.jsx("div",{className:"shop-subtitle",children:"Gear up. The monsters aren't getting weaker."})]}),i.jsxs("div",{className:"gold-display",children:[i.jsx("span",{children:"💰"}),i.jsx("span",{className:"gold-amount",children:e}),i.jsx("span",{className:"gold-label",children:"gold"})]})]}),i.jsxs("div",{className:"shop-section",children:[i.jsxs("div",{className:"shop-section-header",children:[i.jsxs("div",{className:"shop-section-title",children:[i.jsx("span",{className:"section-icon",children:"⭐"}),i.jsx("span",{className:"font-display",children:"Daily Arrivals"}),i.jsx("span",{className:"recommended-tag",children:"RECOMMENDED"})]}),i.jsxs("div",{className:"refresh-row",children:[i.jsxs("div",{className:"refresh-countdown",children:["🔄 Free in ",$f(r)]}),i.jsxs("button",{className:`refresh-btn ${s?"flash":""} ${e<Ht?"cant-afford":""}`,onClick:h,disabled:e<Ht,title:`Spend ${Ht} gold to refresh the shop now`,children:["💰 ",Ht,"g — Refresh now"]})]})]}),i.jsx("div",{className:`shop-items-grid ${s?"flash-grid":""}`,children:d.map(v=>i.jsx(ds,{itemId:v.item_id,price:v.price,currency:v.currency,userGold:e,onBuy:t},v.item_id))})]}),i.jsxs("div",{className:"shop-section",children:[i.jsx("div",{className:"shop-section-header",children:i.jsxs("div",{className:"shop-section-title",children:[i.jsx("span",{className:"section-icon",children:"🛍"}),i.jsx("span",{className:"font-display",children:"General Store"}),i.jsx("span",{className:"always-tag",children:"ALWAYS OPEN"})]})}),i.jsx("div",{className:"shop-items-grid",children:Ff.items.map(v=>i.jsx(ds,{itemId:v.item_id,price:v.price,currency:v.currency,userGold:e,onBuy:t},v.item_id))})]}),i.jsx("div",{className:"shop-tip",children:"💡 Items go directly to your bag. Equip them in the Equipment screen."}),i.jsx("style",{children:`
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
      `})]})}function Uf({effects:e,levelUpData:t}){return i.jsxs(i.Fragment,{children:[e.map(n=>i.jsxs("div",{className:"reward-float",style:{left:n.x!=null?`${n.x}px`:"50%",top:n.y!=null?`${n.y}px`:"40%",transform:n.x==null?"translateX(-50%)":void 0},children:[i.jsxs("span",{style:{color:"var(--xp-blue)",textShadow:"0 0 10px rgba(79,195,247,0.5)"},children:["+",n.xp," XP"]}),i.jsxs("span",{style:{color:"var(--gold)",textShadow:"0 0 10px var(--gold-glow)",fontSize:"0.8rem"},children:["+",n.gold," 💰"]})]},n.id)),t&&i.jsxs("div",{className:"level-up-banner",children:[i.jsx("div",{className:"level-up-glow"}),i.jsx("div",{className:"level-up-icon",children:"⭐"}),i.jsxs("div",{className:"level-up-text",children:[i.jsx("div",{className:"level-up-title font-display",children:"LEVEL UP!"}),i.jsxs("div",{className:"level-up-subtitle",children:["You reached Level ",i.jsx("strong",{children:t.level})]}),t.talentPoints>0&&i.jsxs("div",{className:"level-up-bonus",children:["🌟 +",t.talentPoints," Talent Point",t.talentPoints>1?"s":""," — check the Talents tab!"]})]}),i.jsx("div",{className:"level-up-icon",children:"⭐"})]}),i.jsx("style",{children:`
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
      `})]})}function Hf(){const[e,t]=j.useState(()=>{try{const k=localStorage.getItem("ql_user");return k?JSON.parse(k):as}catch{return as}}),[n,r]=j.useState(()=>{try{const k=localStorage.getItem("ql_tasks");return k?JSON.parse(k):os}catch{return os}}),[l,o]=j.useState(()=>{try{const k=localStorage.getItem("ql_history");return k?JSON.parse(k):is}catch{return is}}),[a,s]=j.useState([]),[u,d]=j.useState(null);j.useEffect(()=>{localStorage.setItem("ql_user",JSON.stringify(e))},[e]),j.useEffect(()=>{localStorage.setItem("ql_tasks",JSON.stringify(n))},[n]),j.useEffect(()=>{localStorage.setItem("ql_history",JSON.stringify(l))},[l]);const h=j.useCallback((k,C,b=null,w=null)=>{const R=Dt();s(z=>[...z,{id:R,xp:k,gold:C,x:b,y:w}]),setTimeout(()=>{s(z=>z.filter(A=>A.id!==R))},2e3)},[]),v=j.useCallback((k,C)=>{t(b=>{const w=jf(b.level,b.xp,k);return w.leveledUp&&(d({level:w.level,talentPoints:w.talentPointsEarned}),setTimeout(()=>d(null),4e3)),{...b,xp:w.xp,xpToNext:w.xpToNext,level:w.level,gold:b.gold+C,talentPoints:b.talentPoints+w.talentPointsEarned}})},[]),g=j.useCallback((k,C=null)=>{r(b=>{const w=b.find(A=>A.id===k);if(!w)return b;const{xp:R,gold:z}=zc(w,e.unlockedTalents);return v(R,z),h(R,z),o(A=>[{id:Dt(),title:w.title,completedAt:new Date().toISOString(),xpEarned:R,goldEarned:z},...A]),b.filter(A=>A.id!==k)})},[e.unlockedTalents,v,h]),S=j.useCallback((k,C)=>{r(b=>b.map(w=>{var z;if(w.id!==k)return w;if(!((z=w.subtasks.find(A=>A.id===C))==null?void 0:z.done)){const{xp:A,gold:M}=Sf(e.unlockedTalents);v(A,M),h(A,M)}return{...w,subtasks:w.subtasks.map(A=>A.id===C?{...A,done:!A.done}:A)}}))},[e.unlockedTalents,v,h]),m=j.useCallback(k=>{const C={id:Dt(),status:"pending",subtasks:[],createdAt:new Date().toISOString(),completedAt:null,isOverdue:!1,tags:[],notes:"",...k};return r(b=>[C,...b]),C},[]),y=j.useCallback((k,C=2)=>{r(b=>b.map(w=>{if(w.id!==k)return w;const R=new Date(Date.now()+C*60*60*1e3).toISOString();return{...w,dueAt:R,isOverdue:!1}}))},[]),P=j.useCallback(k=>{r(C=>C.filter(b=>b.id!==k))},[]),f=j.useCallback((k,C)=>{t(b=>b.talentPoints<C?b:{...b,talentPoints:b.talentPoints-C,unlockedTalents:[...b.unlockedTalents,k]})},[]),c=j.useCallback((k,C)=>{const{xp:b,gold:w}=Nf(k,C,e.unlockedTalents);return v(b,w),h(b,w),{xp:b,gold:w}},[e.unlockedTalents,v,h]),p=j.useCallback(k=>{t(C=>({...C,gold:Math.max(0,C.gold+k)}))},[]),x=j.useCallback(k=>{v(k,0)},[v]);return{user:e,tasks:n,history:l,rewardEffects:a,levelUpData:u,completeTask:g,toggleSubtask:S,addTask:m,snoozeTask:y,deleteTask:P,unlockTalent:f,completeFocusSession:c,showReward:h,applyGoldReward:p,applyXpReward:x}}function Vf(e){const[t,n]=j.useState(null),r=j.useRef(null),l=j.useCallback((d,h=25)=>{const v=h*60;n({taskId:d.id,taskTitle:d.title,totalSeconds:v,secondsLeft:v,paused:!1,minutes:h})},[]),o=j.useCallback(()=>{n(d=>d?{...d,paused:!0}:null)},[]),a=j.useCallback(()=>{n(d=>d?{...d,paused:!1}:null)},[]),s=j.useCallback((d=!1)=>{if(t&&e){const h=Math.round((t.totalSeconds-t.secondsLeft)/60);e(h,d)}n(null)},[t,e]);return j.useEffect(()=>{if(!t||t.paused){clearInterval(r.current);return}return r.current=setInterval(()=>{n(d=>{if(!d)return null;const h=d.secondsLeft-1;return h<=0?(clearInterval(r.current),e&&e(d.minutes,!0),null):{...d,secondsLeft:h}})},1e3),()=>clearInterval(r.current)},[t==null?void 0:t.paused,t==null?void 0:t.taskId,e]),{session:t,start:l,pause:o,resume:a,stop:s,formatTime:d=>{const h=Math.floor(d/60).toString().padStart(2,"0"),v=(d%60).toString().padStart(2,"0");return`${h}:${v}`}}}const ir=[{id:"slime_distract",name:"Distracto Slime",tier:1,max_hp:400,regen:0,armor:0,gold_drop:[8,18],xp_drop:12,sprite:"🟢",color:"#5CDD8B",flavor:"It jiggles every time you check your phone.",loot_table:[{item:"ring_focus_1",chance:.12},{item:"boots_speed_1",chance:.06}]},{id:"goblin_procrastin",name:"Procrastin Goblin",tier:1,max_hp:650,regen:0,armor:1,gold_drop:[12,25],xp_drop:20,sprite:"👺",color:"#FF6584",flavor:`"I'll deal with you in a minute." It has been 3 hours.`,loot_table:[{item:"gloves_grip_1",chance:.1},{item:"ring_focus_1",chance:.08}]},{id:"troll_overwhelm",name:"Overwhelm Troll",tier:2,max_hp:3500,regen:1,armor:3,gold_drop:[40,80],xp_drop:80,sprite:"🧌",color:"#B39DDB",flavor:"It throws seventeen tasks at you at once.",loot_table:[{item:"helmet_clarity_1",chance:.15},{item:"chest_focus_1",chance:.08},{item:"necklace_resolve_1",chance:.06}]},{id:"witch_avoidance",name:"Avoidance Witch",tier:2,max_hp:5e3,regen:2,armor:4,gold_drop:[60,120],xp_drop:110,sprite:"🧙",color:"#4FC3F7",flavor:'She whispers "you can do it tomorrow."',loot_table:[{item:"ring_focus_2",chance:.1},{item:"boots_speed_2",chance:.08},{item:"legs_endure_1",chance:.07}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:3}]},{id:"boss_procrastination",name:"The Eternal Procrastinator",tier:3,max_hp:5e4,regen:5,armor:10,gold_drop:[500,800],xp_drop:300,sprite:"👑",color:"#F5C842",flavor:`"I'll fight you properly once conditions are perfect." It never happens.`,isBoss:!0,loot_table:[{item:"ring_focus_2",chance:1},{item:"necklace_resolve_1",chance:.5},{item:"chest_focus_1",chance:.4}],phases:[{hp_threshold:.75,effect:"armor_boost",effect_value:5},{hp_threshold:.5,effect:"slow_player",effect_value:.5},{hp_threshold:.25,effect:"regen_boost",effect_value:10}]},{id:"boss_burnout",name:"Lord Burnout",tier:3,max_hp:8e4,regen:8,armor:15,gold_drop:[800,1200],xp_drop:500,sprite:"🔥",color:"#FF3860",flavor:"You have faced him before. You will face him again.",isBoss:!0,loot_table:[{item:"chest_focus_1",chance:1},{item:"helmet_clarity_1",chance:.6},{item:"ring_focus_2",chance:.4}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:15},{hp_threshold:.2,effect:"armor_boost",effect_value:8}]}],ps=ir.map(e=>e.id);function Dr(e){return ir.find(t=>t.id===e)||ir[0]}function fs(e){const t=ps.indexOf(e);return t===-1||t>=ps.length-1?{...ir[0],_loop:!0}:ir[t+1]}const Wf={head:null,body:null,gloves:null,legs:null,boots:null,ring:null,ring2:null,necklace:null},ms={currentMonsterId:"slime_distract",monsterHp:null,monstersKilled:0,equipped:Wf,inventory:[],activeBuffs:[],phaseEffects:[],lastActiveMs:Date.now(),momentumCount:0,momentumWindowStart:Date.now(),lowEnergyMode:!1};function Qf({user:e,focusSessionActive:t=!1,onGoldEarned:n,onXpEarned:r,onLootDrop:l,onKillToast:o,onOfflineToast:a}){const[s,u]=j.useState(()=>{try{const M=localStorage.getItem("ql_combat");if(M){const L=JSON.parse(M);return{...ms,...L,activeBuffs:[],phaseEffects:[]}}}catch{}return ms}),[d,h]=j.useState([]),v=j.useRef(null),g=j.useRef(s);g.current=s,j.useEffect(()=>{const{activeBuffs:M,phaseEffects:L,...O}=s;O.lastActiveMs=Date.now(),localStorage.setItem("ql_combat",JSON.stringify(O))},[s]);const S=Dr(s.currentMonsterId),m=s.monsterHp??S.max_hp,y=Pr(e.level,s.equipped),P=df(s.momentumCount),f=cf(t);j.useEffect(()=>{const M=localStorage.getItem("ql_combat");if(M)try{const O=JSON.parse(M).lastActiveMs||Date.now();if(Date.now()-O>6e4){const U=mf(y,O,Date.now());U.damage>0&&(p(U.damage,!1,!0),U.gold>0&&n&&n(U.gold),a&&a(U))}}catch{}},[]);const c=j.useCallback((M,L,O=!1)=>{const H=Dt(),U=30+Math.random()*40;h(Z=>[...Z,{id:H,value:M,isCrit:L,isOffline:O,x:U}]),setTimeout(()=>{h(Z=>Z.filter(E=>E.id!==H))},1400)},[]),p=j.useCallback((M,L=!1,O=!1)=>{u(H=>{const U=Dr(H.currentMonsterId),Z=H.monsterHp??U.max_hp,E=pf(M,U.armor),_=Math.max(0,Z-E),D=ff(U,_,Z);let F=[...H.phaseEffects||[]];if(D&&F.push({id:Dt(),...D,expiresAt:1/0}),_<=0){const V=ls(U);n&&n(V.gold),r&&r(V.xp),V.loot.length>0&&l&&l(V.loot,U.name),o&&o({...V,monsterName:U.name,isBoss:U.isBoss});const Qe=fs(H.currentMonsterId);return{...H,currentMonsterId:Qe.id,monsterHp:Qe.max_hp,monstersKilled:H.monstersKilled+1,phaseEffects:[]}}return{...H,monsterHp:_,phaseEffects:F}}),O||c(M,L)},[n,r,l,c]);j.useEffect(()=>(v.current=setInterval(()=>{const M=g.current,L=Dr(M.currentMonsterId),O=Pr(e.level,M.equipped),H=[...M.activeBuffs||[],...M.phaseEffects||[]],U=Date.now(),Z=(M.activeBuffs||[]).filter(F=>F.expiresAt>U);Z.length!==(M.activeBuffs||[]).length&&u(F=>({...F,activeBuffs:Z}));const{damage:E,isCrit:_}=uf(O,H),D=Math.round(E*P*f);L.regen>0&&u(F=>{const V=F.monsterHp??L.max_hp,Qe=Math.min(L.max_hp,V+L.regen);return{...F,monsterHp:Qe}}),p(D,_)},sf),()=>clearInterval(v.current)),[e.level,s.equipped,P,f]);const x=j.useCallback(()=>{const M=Pr(e.level,s.equipped),L=Math.round(M.attack*5*P),O=Math.random()<Math.min(.8,M.critChance+.2),H=O?Math.round(L*M.critDamage):L,U={id:Dt(),type:"attack_mult",label:"Task Focus!",value:1.5,expiresAt:Date.now()+1e4,icon:"⚡"};u(Z=>({...Z,activeBuffs:[...(Z.activeBuffs||[]).filter(E=>E.id!=="focus_boost"),U],momentumCount:Z.momentumCount+1})),p(H,O)},[e.level,s.equipped,P,p]),k=j.useCallback(()=>{const M=Pr(e.level,s.equipped),L=Math.round(M.attack*1.2);p(L,!1)},[e.level,s.equipped,p]),C=j.useCallback((M,L)=>{u(O=>{const H=O.equipped[L],U=H?[...O.inventory,H]:[...O.inventory],Z=U.filter((E,_)=>!(E===M&&_===U.lastIndexOf(M)));return{...O,equipped:{...O.equipped,[L]:M},inventory:Z}})},[]),b=j.useCallback(M=>{u(L=>{const O=L.equipped[M];return O?{...L,equipped:{...L.equipped,[M]:null},inventory:[...L.inventory,O]}:L})},[]),w=j.useCallback(M=>{u(L=>({...L,inventory:[...L.inventory,M]}))},[]),R=j.useCallback((M,L,O)=>O(L)?(w(M),!0):!1,[w]),z=j.useCallback(()=>{u(M=>{const L=Dr(M.currentMonsterId),O=ls(L);n&&n(O.gold),r&&r(O.xp),O.loot.length>0&&l&&l(O.loot,L.name),o&&o({...O,monsterName:L.name,isBoss:L.isBoss});const H=fs(M.currentMonsterId);return{...M,currentMonsterId:H.id,monsterHp:H.max_hp,monstersKilled:M.monstersKilled+1,phaseEffects:[]}})},[n,r,l,o]),A=j.useCallback(()=>{u(M=>({...M,lowEnergyMode:!M.lowEnergyMode}))},[]);return{monster:S,currentHp:m,monsterMaxHp:S.max_hp,playerStats:y,equipped:s.equipped,inventory:s.inventory,activeBuffs:s.activeBuffs||[],monstersKilled:s.monstersKilled,floatingNumbers:d,lowEnergyMode:s.lowEnergyMode,momentumCount:s.momentumCount,momentumMult:P,onTaskComplete:x,onSubtaskComplete:k,equipItem:C,unequipItem:b,addToInventory:w,buyItem:R,instantKill:z,toggleLowEnergy:A}}function Xf(){const[e,t]=j.useState("dashboard"),[n,r]=j.useState(!1),{toasts:l,log:o,addToast:a,dismissToast:s}=vf(),{user:u,tasks:d,history:h,rewardEffects:v,levelUpData:g,completeTask:S,toggleSubtask:m,addTask:y,snoozeTask:P,deleteTask:f,unlockTalent:c,completeFocusSession:p,applyGoldReward:x,applyXpReward:k}=Hf(),C=j.useCallback((_,D)=>{_>0&&p(_,D)},[p]),b=Vf(C),w=j.useCallback(_=>{var D,F;a({type:_.isBoss?"boss":"kill",icon:_.isBoss?"👑":"☠",title:`${_.monsterName} defeated!`,sub:`+${_.gold} gold · +${_.xp} XP`,loot:_.loot,duration:((D=_.loot)==null?void 0:D.length)>0?5e3:3e3}),((F=_.loot)==null?void 0:F.length)>0&&r(!0)},[a]),R=j.useCallback(_=>{a({type:"offline",icon:"🌙",title:`Welcome back! Hero fought for ${_.hours}h`,sub:`${_.damage.toLocaleString()} damage dealt · +${_.gold} gold`,duration:6e3})},[a]),z=Qf({user:u,focusSessionActive:!!b.session,onGoldEarned:_=>x(_),onXpEarned:_=>k(_),onLootDrop:_=>_.forEach(D=>z.addToInventory(D)),onKillToast:w,onOfflineToast:R}),A=j.useCallback(_=>{S(_),z.onTaskComplete(),a({type:"default",icon:"⚡",title:"Task complete! Power burst!",sub:"+10s attack speed boost",duration:2500})},[S,z,a]),M=j.useCallback((_,D)=>{m(_,D),z.onSubtaskComplete()},[m,z]),L=j.useCallback((_,D)=>u.gold<D?!1:(x(-D),z.addToInventory(_),!0),[u.gold,x,z]),O=j.useCallback(_=>{x(-_)},[x]),H=j.useCallback(_=>{x(_),a({type:"default",icon:"🛠",title:`DEV: +${_} gold`,duration:2e3})},[x,a]),U=j.useCallback(()=>{z.instantKill()},[z]);function Z(_){b.start(_,25),t("focus")}function E(_){_==="inventory"&&r(!1),t(_)}return i.jsxs("div",{className:"app-layout",children:[i.jsx(lf,{user:u,activeView:e,onNavigate:E,pendingCount:d.filter(_=>_.status==="pending").length,newLoot:n}),i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,overflow:"hidden"},children:[i.jsx(wf,{monster:z.monster,currentHp:z.currentHp,playerStats:z.playerStats,activeBuffs:z.activeBuffs,floatingNumbers:z.floatingNumbers,momentumMult:z.momentumMult,lowEnergyMode:z.lowEnergyMode,monstersKilled:z.monstersKilled,onToggleLowEnergy:z.toggleLowEnergy,combatLog:o}),i.jsxs("main",{className:"main-content",children:[e==="dashboard"&&i.jsx(Pf,{user:u,tasks:d,onComplete:A,onToggleSubtask:M,onSnooze:P,onDelete:f,onAddTask:y,onStartFocus:Z}),e==="focus"&&i.jsx(Mf,{session:b.session,onStart:b.start,onPause:b.pause,onResume:b.resume,onStop:b.stop,formatTime:b.formatTime,tasks:d.filter(_=>_.status==="pending")}),e==="inventory"&&i.jsx(Rf,{combat:z,userLevel:u.level}),e==="shop"&&i.jsx(Bf,{userGold:u.gold,onBuy:L,onRefreshSpend:O}),e==="rewards"&&i.jsx(If,{user:u,history:h}),e==="talents"&&i.jsx(Of,{user:u,onUnlock:c})]})]}),i.jsx(Uf,{effects:v,levelUpData:g}),i.jsx(hf,{toasts:l,onDismiss:s}),i.jsx(kf,{onAddGold:H,onInstantKill:U})]})}ao.createRoot(document.getElementById("root")).render(i.jsx(Qc.StrictMode,{children:i.jsx(Xf,{})}));
