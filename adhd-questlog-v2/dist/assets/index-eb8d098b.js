(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function _c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cs={exports:{}},fl={},ds={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Ec=Symbol.for("react.portal"),Cc=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),Pc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Mc=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Oc=Symbol.for("react.memo"),Ic=Symbol.for("react.lazy"),Qi=Symbol.iterator;function Rc(e){return e===null||typeof e!="object"?null:(e=Qi&&e[Qi]||e["@@iterator"],typeof e=="function"?e:null)}var fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ps=Object.assign,ms={};function mn(e,t,n){this.props=e,this.context=t,this.refs=ms,this.updater=n||fs}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vs(){}vs.prototype=mn.prototype;function Jo(e,t,n){this.props=e,this.context=t,this.refs=ms,this.updater=n||fs}var Zo=Jo.prototype=new vs;Zo.constructor=Jo;ps(Zo,mn.prototype);Zo.isPureReactComponent=!0;var Xi=Array.isArray,hs=Object.prototype.hasOwnProperty,ei={current:null},gs={key:!0,ref:!0,__self:!0,__source:!0};function ys(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)hs.call(t,r)&&!gs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:or,type:e,key:o,ref:i,props:l,_owner:ei.current}}function Fc(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ti(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Ac(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gi=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ac(""+e.key):t.toString(36)}function Tr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case or:case Ec:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+zl(i,0):r,Xi(l)?(n="",e!=null&&(n=e.replace(Gi,"$&/")+"/"),Tr(l,t,n,"",function(d){return d})):l!=null&&(ti(l)&&(l=Fc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Gi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Xi(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+zl(o,s);i+=Tr(o,t,n,u,l)}else if(u=Rc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+zl(o,s++),i+=Tr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function fr(e,t,n){if(e==null)return e;var r=[],l=0;return Tr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function $c(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Pr={transition:null},Bc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:ei};function xs(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:fr,forEach:function(e,t,n){fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fr(e,function(){t++}),t},toArray:function(e){return fr(e,function(t){return t})||[]},only:function(e){if(!ti(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=mn;O.Fragment=Cc;O.Profiler=Tc;O.PureComponent=Jo;O.StrictMode=zc;O.Suspense=Lc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bc;O.act=xs;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ps({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=ei.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)hs.call(t,u)&&!gs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:or,type:e.type,key:l,ref:o,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:Dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pc,_context:e},e.Consumer=e};O.createElement=ys;O.createFactory=function(e){var t=ys.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Mc,render:e}};O.isValidElement=ti;O.lazy=function(e){return{$$typeof:Ic,_payload:{_status:-1,_result:e},_init:$c}};O.memo=function(e,t){return{$$typeof:Oc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};O.unstable_act=xs;O.useCallback=function(e,t){return me.current.useCallback(e,t)};O.useContext=function(e){return me.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return me.current.useDeferredValue(e)};O.useEffect=function(e,t){return me.current.useEffect(e,t)};O.useId=function(){return me.current.useId()};O.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return me.current.useMemo(e,t)};O.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};O.useRef=function(e){return me.current.useRef(e)};O.useState=function(e){return me.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return me.current.useTransition()};O.version="18.3.1";ds.exports=O;var E=ds.exports;const Uc=_c(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=E,Vc=Symbol.for("react.element"),Wc=Symbol.for("react.fragment"),Qc=Object.prototype.hasOwnProperty,Xc=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gc={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Qc.call(t,r)&&!Gc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Vc,type:e,key:o,ref:i,props:l,_owner:Xc.current}}fl.Fragment=Wc;fl.jsx=ws;fl.jsxs=ws;cs.exports=fl;var a=cs.exports,lo={},ks={exports:{}},_e={},Ss={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var D=z.length;z.push(M);e:for(;0<D;){var A=D-1>>>1,X=z[A];if(0<l(X,M))z[A]=M,z[D]=X,D=A;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],D=z.pop();if(D!==M){z[0]=D;e:for(var A=0,X=z.length,cr=X>>>1;A<cr;){var St=2*(A+1)-1,Cl=z[St],Nt=St+1,dr=z[Nt];if(0>l(Cl,D))Nt<X&&0>l(dr,Cl)?(z[A]=dr,z[Nt]=D,A=Nt):(z[A]=Cl,z[St]=D,A=St);else if(Nt<X&&0>l(dr,D))z[A]=dr,z[Nt]=D,A=Nt;else break e}}return M}function l(z,M){var D=z.sortIndex-M.sortIndex;return D!==0?D:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var u=[],d=[],h=1,g=null,y=3,S=!1,p=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=z)r(d),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(d)}}function v(z){if(x=!1,m(z),!p)if(n(u)!==null)p=!0,J(w);else{var M=n(d);M!==null&&ke(v,M.startTime-z)}}function w(z,M){p=!1,x&&(x=!1,f(k),k=-1),S=!0;var D=y;try{for(m(M),g=n(u);g!==null&&(!(g.expirationTime>M)||z&&!_());){var A=g.callback;if(typeof A=="function"){g.callback=null,y=g.priorityLevel;var X=A(g.expirationTime<=M);M=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(u)&&r(u),m(M)}else r(u);g=n(u)}if(g!==null)var cr=!0;else{var St=n(d);St!==null&&ke(v,St.startTime-M),cr=!1}return cr}finally{g=null,y=D,S=!1}}var j=!1,N=null,k=-1,I=5,C=-1;function _(){return!(e.unstable_now()-C<I)}function L(){if(N!==null){var z=e.unstable_now();C=z;var M=!0;try{M=N(!0,z)}finally{M?F():(j=!1,N=null)}}else j=!1}var F;if(typeof c=="function")F=function(){c(L)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,B=Q.port2;Q.port1.onmessage=L,F=function(){B.postMessage(null)}}else F=function(){P(L,0)};function J(z){N=z,j||(j=!0,F())}function ke(z,M){k=P(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){p||S||(p=!0,J(w))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(y){case 1:case 2:case 3:var M=3;break;default:M=y}var D=y;y=M;try{return z()}finally{y=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=y;y=z;try{return M()}finally{y=D}},e.unstable_scheduleCallback=function(z,M,D){var A=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?A+D:A):D=A,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,z={id:h++,callback:M,priorityLevel:z,startTime:D,expirationTime:X,sortIndex:-1},D>A?(z.sortIndex=D,t(d,z),n(u)===null&&z===n(d)&&(x?(f(k),k=-1):x=!0,ke(v,D-A))):(z.sortIndex=X,t(u,z),p||S||(p=!0,J(w))),z},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(z){var M=y;return function(){var D=y;y=M;try{return z.apply(this,arguments)}finally{y=D}}}})(Ns);Ss.exports=Ns;var Kc=Ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=E,je=Kc;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bs=new Set,Fn={};function Rt(e,t){on(e,t),on(e+"Capture",t)}function on(e,t){for(Fn[e]=t,e=0;e<t.length;e++)bs.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=Object.prototype.hasOwnProperty,qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ki={},Yi={};function Jc(e){return oo.call(Yi,e)?!0:oo.call(Ki,e)?!1:qc.test(e)?Yi[e]=!0:(Ki[e]=!0,!1)}function Zc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ed(e,t,n,r){if(t===null||typeof t>"u"||Zc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ni=/[\-:]([a-z])/g;function ri(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ni,ri);ae[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ni,ri);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ni,ri);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function li(e,t,n,r){var l=ae.hasOwnProperty(t)?ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ed(t,n,l,r)&&(n=null),r||l===null?Jc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),oi=Symbol.for("react.strict_mode"),io=Symbol.for("react.profiler"),js=Symbol.for("react.provider"),_s=Symbol.for("react.context"),ii=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),so=Symbol.for("react.suspense_list"),ai=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Es=Symbol.for("react.offscreen"),qi=Symbol.iterator;function gn(e){return e===null||typeof e!="object"?null:(e=qi&&e[qi]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Tl;function jn(e){if(Tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tl=t&&t[1]||""}return`
`+Tl+e}var Pl=!1;function Dl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function td(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case Bt:return"Portal";case io:return"Profiler";case oi:return"StrictMode";case ao:return"Suspense";case so:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _s:return(e.displayName||"Context")+".Consumer";case js:return(e._context.displayName||"Context")+".Provider";case ii:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ai:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return uo(e(t))}catch{}}return null}function nd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(t);case 8:return t===oi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rd(e){var t=Cs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){e._valueTracker||(e._valueTracker=rd(e))}function zs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function co(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ji(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ts(e,t){t=t.checked,t!=null&&li(e,"checked",t,!1)}function fo(e,t){Ts(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?po(e,t.type,n):t.hasOwnProperty("defaultValue")&&po(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function po(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _n=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(_n(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function Ps(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ta(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ld=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){ld.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Ls(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Os(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ls(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var od=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function si(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,en=null,tn=null;function na(e){if(e=sr(e)){if(typeof xo!="function")throw Error(b(280));var t=e.stateNode;t&&(t=gl(t),xo(e.stateNode,e.type,t))}}function Is(e){en?tn?tn.push(e):tn=[e]:en=e}function Rs(){if(en){var e=en,t=tn;if(tn=en=null,na(e),t)for(e=0;e<t.length;e++)na(t[e])}}function Fs(e,t){return e(t)}function As(){}var Ml=!1;function $s(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return Fs(e,t,n)}finally{Ml=!1,(en!==null||tn!==null)&&(As(),Rs())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var wo=!1;if(qe)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){wo=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{wo=!1}function id(e,t,n,r,l,o,i,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Tn=!1,Hr=null,Vr=!1,ko=null,ad={onError:function(e){Tn=!0,Hr=e}};function sd(e,t,n,r,l,o,i,s,u){Tn=!1,Hr=null,id.apply(ad,arguments)}function ud(e,t,n,r,l,o,i,s,u){if(sd.apply(this,arguments),Tn){if(Tn){var d=Hr;Tn=!1,Hr=null}else throw Error(b(198));Vr||(Vr=!0,ko=d)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ra(e){if(Ft(e)!==e)throw Error(b(188))}function cd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ra(l),e;if(o===r)return ra(l),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Us(e){return e=cd(e),e!==null?Hs(e):null}function Hs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hs(e);if(t!==null)return t;e=e.sibling}return null}var Vs=je.unstable_scheduleCallback,la=je.unstable_cancelCallback,dd=je.unstable_shouldYield,fd=je.unstable_requestPaint,Z=je.unstable_now,pd=je.unstable_getCurrentPriorityLevel,ui=je.unstable_ImmediatePriority,Ws=je.unstable_UserBlockingPriority,Wr=je.unstable_NormalPriority,md=je.unstable_LowPriority,Qs=je.unstable_IdlePriority,pl=null,Ve=null;function vd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:yd,hd=Math.log,gd=Math.LN2;function yd(e){return e>>>=0,e===0?32:31-(hd(e)/gd|0)|0}var hr=64,gr=4194304;function En(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=En(s):(o&=i,o!==0&&(r=En(o)))}else i=n&~l,i!==0?r=En(i):o!==0&&(r=En(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function xd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Fe(o),s=1<<i,u=l[i];u===-1?(!(s&n)||s&r)&&(l[i]=xd(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xs(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function kd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ci(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var $=0;function Gs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ks,di,Ys,qs,Js,No=!1,yr=[],ut=null,ct=null,dt=null,Bn=new Map,Un=new Map,ot=[],Sd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oa(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function xn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=sr(t),t!==null&&di(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Nd(e,t,n,r,l){switch(t){case"focusin":return ut=xn(ut,e,t,n,r,l),!0;case"dragenter":return ct=xn(ct,e,t,n,r,l),!0;case"mouseover":return dt=xn(dt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Bn.set(o,xn(Bn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Un.set(o,xn(Un.get(o)||null,e,t,n,r,l)),!0}return!1}function Zs(e){var t=_t(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Bs(n),t!==null){e.blockedOn=t,Js(e.priority,function(){Ys(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=sr(n),t!==null&&di(t),e.blockedOn=n,!1;t.shift()}return!0}function ia(e,t,n){Dr(e)&&n.delete(t)}function bd(){No=!1,ut!==null&&Dr(ut)&&(ut=null),ct!==null&&Dr(ct)&&(ct=null),dt!==null&&Dr(dt)&&(dt=null),Bn.forEach(ia),Un.forEach(ia)}function wn(e,t){e.blockedOn===t&&(e.blockedOn=null,No||(No=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,bd)))}function Hn(e){function t(l){return wn(l,e)}if(0<yr.length){wn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&wn(ut,e),ct!==null&&wn(ct,e),dt!==null&&wn(dt,e),Bn.forEach(t),Un.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)Zs(n),n.blockedOn===null&&ot.shift()}var nn=tt.ReactCurrentBatchConfig,Xr=!0;function jd(e,t,n,r){var l=$,o=nn.transition;nn.transition=null;try{$=1,fi(e,t,n,r)}finally{$=l,nn.transition=o}}function _d(e,t,n,r){var l=$,o=nn.transition;nn.transition=null;try{$=4,fi(e,t,n,r)}finally{$=l,nn.transition=o}}function fi(e,t,n,r){if(Xr){var l=bo(e,t,n,r);if(l===null)Vl(e,t,r,Gr,n),oa(e,r);else if(Nd(l,e,t,n,r))r.stopPropagation();else if(oa(e,r),t&4&&-1<Sd.indexOf(e)){for(;l!==null;){var o=sr(l);if(o!==null&&Ks(o),o=bo(e,t,n,r),o===null&&Vl(e,t,r,Gr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var Gr=null;function bo(e,t,n,r){if(Gr=null,e=si(r),e=_t(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pd()){case ui:return 1;case Ws:return 4;case Wr:case md:return 16;case Qs:return 536870912;default:return 16}default:return 16}}var at=null,pi=null,Mr=null;function tu(){if(Mr)return Mr;var e,t=pi,n=t.length,r,l="value"in at?at.value:at.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Mr=l.slice(e,1<r?1-r:void 0)}function Lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function aa(){return!1}function Ee(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xr:aa,this.isPropagationStopped=aa,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=Ee(vn),ar=Y({},vn,{view:0,detail:0}),Ed=Ee(ar),Ol,Il,kn,ml=Y({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Ol=e.screenX-kn.screenX,Il=e.screenY-kn.screenY):Il=Ol=0,kn=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),sa=Ee(ml),Cd=Y({},ml,{dataTransfer:0}),zd=Ee(Cd),Td=Y({},ar,{relatedTarget:0}),Rl=Ee(Td),Pd=Y({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dd=Ee(Pd),Md=Y({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ld=Ee(Md),Od=Y({},vn,{data:0}),ua=Ee(Od),Id={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fd[e])?!!t[e]:!1}function vi(){return Ad}var $d=Y({},ar,{key:function(e){if(e.key){var t=Id[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vi,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bd=Ee($d),Ud=Y({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ca=Ee(Ud),Hd=Y({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vi}),Vd=Ee(Hd),Wd=Y({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qd=Ee(Wd),Xd=Y({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gd=Ee(Xd),Kd=[9,13,27,32],hi=qe&&"CompositionEvent"in window,Pn=null;qe&&"documentMode"in document&&(Pn=document.documentMode);var Yd=qe&&"TextEvent"in window&&!Pn,nu=qe&&(!hi||Pn&&8<Pn&&11>=Pn),da=String.fromCharCode(32),fa=!1;function ru(e,t){switch(e){case"keyup":return Kd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function qd(e,t){switch(e){case"compositionend":return lu(t);case"keypress":return t.which!==32?null:(fa=!0,da);case"textInput":return e=t.data,e===da&&fa?null:e;default:return null}}function Jd(e,t){if(Ht)return e==="compositionend"||!hi&&ru(e,t)?(e=tu(),Mr=pi=at=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nu&&t.locale!=="ko"?null:t.data;default:return null}}var Zd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zd[e.type]:t==="textarea"}function ou(e,t,n,r){Is(r),t=Kr(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Vn=null;function ef(e){hu(e,0)}function vl(e){var t=Qt(e);if(zs(t))return e}function tf(e,t){if(e==="change")return t}var iu=!1;if(qe){var Fl;if(qe){var Al="oninput"in document;if(!Al){var ma=document.createElement("div");ma.setAttribute("oninput","return;"),Al=typeof ma.oninput=="function"}Fl=Al}else Fl=!1;iu=Fl&&(!document.documentMode||9<document.documentMode)}function va(){Dn&&(Dn.detachEvent("onpropertychange",au),Vn=Dn=null)}function au(e){if(e.propertyName==="value"&&vl(Vn)){var t=[];ou(t,Vn,e,si(e)),$s(ef,t)}}function nf(e,t,n){e==="focusin"?(va(),Dn=t,Vn=n,Dn.attachEvent("onpropertychange",au)):e==="focusout"&&va()}function rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Vn)}function lf(e,t){if(e==="click")return vl(t)}function of(e,t){if(e==="input"||e==="change")return vl(t)}function af(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:af;function Wn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!oo.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ga(e,t){var n=ha(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ha(n)}}function su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uu(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sf(e){var t=uu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&su(n.ownerDocument.documentElement,n)){if(r!==null&&gi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ga(n,o);var i=ga(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uf=qe&&"documentMode"in document&&11>=document.documentMode,Vt=null,jo=null,Mn=null,_o=!1;function ya(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_o||Vt==null||Vt!==Ur(r)||(r=Vt,"selectionStart"in r&&gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Wn(Mn,r)||(Mn=r,r=Kr(jo,"onSelect"),0<r.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},$l={},cu={};qe&&(cu=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function hl(e){if($l[e])return $l[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cu)return $l[e]=t[n];return e}var du=hl("animationend"),fu=hl("animationiteration"),pu=hl("animationstart"),mu=hl("transitionend"),vu=new Map,xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){vu.set(e,t),Rt(t,[e])}for(var Bl=0;Bl<xa.length;Bl++){var Ul=xa[Bl],cf=Ul.toLowerCase(),df=Ul[0].toUpperCase()+Ul.slice(1);xt(cf,"on"+df)}xt(du,"onAnimationEnd");xt(fu,"onAnimationIteration");xt(pu,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(mu,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function wa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ud(r,t,void 0,e),e.currentTarget=null}function hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;wa(l,s,d),o=u}else for(i=0;i<r.length;i++){if(s=r[i],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;wa(l,s,d),o=u}}}if(Vr)throw e=ko,Vr=!1,ko=null,e}function H(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(gu(t,e,2,!1),n.add(r))}function Hl(e,t,n){var r=0;t&&(r|=4),gu(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Qn(e){if(!e[kr]){e[kr]=!0,bs.forEach(function(n){n!=="selectionchange"&&(ff.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,Hl("selectionchange",!1,t))}}function gu(e,t,n,r){switch(eu(t)){case 1:var l=jd;break;case 4:l=_d;break;default:l=fi}n=l.bind(null,t,n,e),l=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;s!==null;){if(i=_t(s),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}s=s.parentNode}}r=r.return}$s(function(){var d=o,h=si(n),g=[];e:{var y=vu.get(e);if(y!==void 0){var S=mi,p=e;switch(e){case"keypress":if(Lr(n)===0)break e;case"keydown":case"keyup":S=Bd;break;case"focusin":p="focus",S=Rl;break;case"focusout":p="blur",S=Rl;break;case"beforeblur":case"afterblur":S=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Vd;break;case du:case fu:case pu:S=Dd;break;case mu:S=Qd;break;case"scroll":S=Ed;break;case"wheel":S=Gd;break;case"copy":case"cut":case"paste":S=Ld;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ca}var x=(t&4)!==0,P=!x&&e==="scroll",f=x?y!==null?y+"Capture":null:y;x=[];for(var c=d,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=$n(c,f),v!=null&&x.push(Xn(c,v,m)))),P)break;c=c.return}0<x.length&&(y=new S(y,p,null,n,h),g.push({event:y,listeners:x}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&n!==yo&&(p=n.relatedTarget||n.fromElement)&&(_t(p)||p[Je]))break e;if((S||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,S?(p=n.relatedTarget||n.toElement,S=d,p=p?_t(p):null,p!==null&&(P=Ft(p),p!==P||p.tag!==5&&p.tag!==6)&&(p=null)):(S=null,p=d),S!==p)){if(x=sa,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=ca,v="onPointerLeave",f="onPointerEnter",c="pointer"),P=S==null?y:Qt(S),m=p==null?y:Qt(p),y=new x(v,c+"leave",S,n,h),y.target=P,y.relatedTarget=m,v=null,_t(h)===d&&(x=new x(f,c+"enter",p,n,h),x.target=m,x.relatedTarget=P,v=x),P=v,S&&p)t:{for(x=S,f=p,c=0,m=x;m;m=At(m))c++;for(m=0,v=f;v;v=At(v))m++;for(;0<c-m;)x=At(x),c--;for(;0<m-c;)f=At(f),m--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=At(x),f=At(f)}x=null}else x=null;S!==null&&ka(g,y,S,x,!1),p!==null&&P!==null&&ka(g,P,p,x,!0)}}e:{if(y=d?Qt(d):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var w=tf;else if(pa(y))if(iu)w=of;else{w=rf;var j=nf}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(w=lf);if(w&&(w=w(e,d))){ou(g,w,n,h);break e}j&&j(e,y,d),e==="focusout"&&(j=y._wrapperState)&&j.controlled&&y.type==="number"&&po(y,"number",y.value)}switch(j=d?Qt(d):window,e){case"focusin":(pa(j)||j.contentEditable==="true")&&(Vt=j,jo=d,Mn=null);break;case"focusout":Mn=jo=Vt=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,ya(g,n,h);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":ya(g,n,h)}var N;if(hi)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ht?ru(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(nu&&n.locale!=="ko"&&(Ht||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ht&&(N=tu()):(at=h,pi="value"in at?at.value:at.textContent,Ht=!0)),j=Kr(d,k),0<j.length&&(k=new ua(k,e,null,n,h),g.push({event:k,listeners:j}),N?k.data=N:(N=lu(n),N!==null&&(k.data=N)))),(N=Yd?qd(e,n):Jd(e,n))&&(d=Kr(d,"onBeforeInput"),0<d.length&&(h=new ua("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=N))}hu(g,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=$n(e,n),o!=null&&r.unshift(Xn(e,o,l)),o=$n(e,t),o!=null&&r.push(Xn(e,o,l))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ka(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=$n(n,o),u!=null&&i.unshift(Xn(n,u,s))):l||(u=$n(n,o),u!=null&&i.push(Xn(n,u,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var pf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function Sa(e){return(typeof e=="string"?e:""+e).replace(pf,`
`).replace(mf,"")}function Sr(e,t,n){if(t=Sa(t),Sa(e)!==t&&n)throw Error(b(425))}function Yr(){}var Eo=null,Co=null;function zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,vf=typeof clearTimeout=="function"?clearTimeout:void 0,Na=typeof Promise=="function"?Promise:void 0,hf=typeof queueMicrotask=="function"?queueMicrotask:typeof Na<"u"?function(e){return Na.resolve(null).then(e).catch(gf)}:To;function gf(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Hn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Hn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),He="__reactFiber$"+hn,Gn="__reactProps$"+hn,Je="__reactContainer$"+hn,Po="__reactEvents$"+hn,yf="__reactListeners$"+hn,xf="__reactHandles$"+hn;function _t(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ba(e);e!==null;){if(n=e[He])return n;e=ba(e)}return t}e=n,n=e.parentNode}return null}function sr(e){return e=e[He]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function gl(e){return e[Gn]||null}var Do=[],Xt=-1;function wt(e){return{current:e}}function V(e){0>Xt||(e.current=Do[Xt],Do[Xt]=null,Xt--)}function U(e,t){Xt++,Do[Xt]=e.current,e.current=t}var yt={},de=wt(yt),ye=wt(!1),Dt=yt;function an(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function qr(){V(ye),V(de)}function ja(e,t,n){if(de.current!==yt)throw Error(b(168));U(de,t),U(ye,n)}function yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(b(108,nd(e)||"Unknown",l));return Y({},n,r)}function Jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Dt=de.current,U(de,e),U(ye,ye.current),!0}function _a(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=yu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,V(ye),V(de),U(de,e)):V(ye),U(ye,n)}var Xe=null,yl=!1,Ql=!1;function xu(e){Xe===null?Xe=[e]:Xe.push(e)}function wf(e){yl=!0,xu(e)}function kt(){if(!Ql&&Xe!==null){Ql=!0;var e=0,t=$;try{var n=Xe;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,yl=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),Vs(ui,kt),l}finally{$=t,Ql=!1}}return null}var Gt=[],Kt=0,Zr=null,el=0,Ce=[],ze=0,Mt=null,Ge=1,Ke="";function bt(e,t){Gt[Kt++]=el,Gt[Kt++]=Zr,Zr=e,el=t}function wu(e,t,n){Ce[ze++]=Ge,Ce[ze++]=Ke,Ce[ze++]=Mt,Mt=e;var r=Ge;e=Ke;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var o=32-Fe(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ge=1<<32-Fe(t)+l|n<<l|r,Ke=o+e}else Ge=1<<o|n<<l|r,Ke=e}function yi(e){e.return!==null&&(bt(e,1),wu(e,1,0))}function xi(e){for(;e===Zr;)Zr=Gt[--Kt],Gt[Kt]=null,el=Gt[--Kt],Gt[Kt]=null;for(;e===Mt;)Mt=Ce[--ze],Ce[ze]=null,Ke=Ce[--ze],Ce[ze]=null,Ge=Ce[--ze],Ce[ze]=null}var be=null,Ne=null,W=!1,Re=null;function ku(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ea(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Ne=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Ge,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Ne=null,!0):!1;default:return!1}}function Mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(W){var t=Ne;if(t){var n=t;if(!Ea(e,t)){if(Mo(e))throw Error(b(418));t=ft(n.nextSibling);var r=be;t&&Ea(e,t)?ku(r,n):(e.flags=e.flags&-4097|2,W=!1,be=e)}}else{if(Mo(e))throw Error(b(418));e.flags=e.flags&-4097|2,W=!1,be=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Nr(e){if(e!==be)return!1;if(!W)return Ca(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zo(e.type,e.memoizedProps)),t&&(t=Ne)){if(Mo(e))throw Su(),Error(b(418));for(;t;)ku(e,t),t=ft(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=be?ft(e.stateNode.nextSibling):null;return!0}function Su(){for(var e=Ne;e;)e=ft(e.nextSibling)}function sn(){Ne=be=null,W=!1}function wi(e){Re===null?Re=[e]:Re.push(e)}var kf=tt.ReactCurrentBatchConfig;function Sn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function za(e){var t=e._init;return t(e._payload)}function Nu(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=ht(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,m,v){return c===null||c.tag!==6?(c=Zl(m,f.mode,v),c.return=f,c):(c=l(c,m),c.return=f,c)}function u(f,c,m,v){var w=m.type;return w===Ut?h(f,c,m.props.children,v,m.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&za(w)===c.type)?(v=l(c,m.props),v.ref=Sn(f,c,m),v.return=f,v):(v=Br(m.type,m.key,m.props,null,f.mode,v),v.ref=Sn(f,c,m),v.return=f,v)}function d(f,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=eo(m,f.mode,v),c.return=f,c):(c=l(c,m.children||[]),c.return=f,c)}function h(f,c,m,v,w){return c===null||c.tag!==7?(c=Tt(m,f.mode,v,w),c.return=f,c):(c=l(c,m),c.return=f,c)}function g(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zl(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pr:return m=Br(c.type,c.key,c.props,null,f.mode,m),m.ref=Sn(f,null,c),m.return=f,m;case Bt:return c=eo(c,f.mode,m),c.return=f,c;case rt:var v=c._init;return g(f,v(c._payload),m)}if(_n(c)||gn(c))return c=Tt(c,f.mode,m,null),c.return=f,c;br(f,c)}return null}function y(f,c,m,v){var w=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(f,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pr:return m.key===w?u(f,c,m,v):null;case Bt:return m.key===w?d(f,c,m,v):null;case rt:return w=m._init,y(f,c,w(m._payload),v)}if(_n(m)||gn(m))return w!==null?null:h(f,c,m,v,null);br(f,m)}return null}function S(f,c,m,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,s(c,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pr:return f=f.get(v.key===null?m:v.key)||null,u(c,f,v,w);case Bt:return f=f.get(v.key===null?m:v.key)||null,d(c,f,v,w);case rt:var j=v._init;return S(f,c,m,j(v._payload),w)}if(_n(v)||gn(v))return f=f.get(m)||null,h(c,f,v,w,null);br(c,v)}return null}function p(f,c,m,v){for(var w=null,j=null,N=c,k=c=0,I=null;N!==null&&k<m.length;k++){N.index>k?(I=N,N=null):I=N.sibling;var C=y(f,N,m[k],v);if(C===null){N===null&&(N=I);break}e&&N&&C.alternate===null&&t(f,N),c=o(C,c,k),j===null?w=C:j.sibling=C,j=C,N=I}if(k===m.length)return n(f,N),W&&bt(f,k),w;if(N===null){for(;k<m.length;k++)N=g(f,m[k],v),N!==null&&(c=o(N,c,k),j===null?w=N:j.sibling=N,j=N);return W&&bt(f,k),w}for(N=r(f,N);k<m.length;k++)I=S(N,f,k,m[k],v),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?k:I.key),c=o(I,c,k),j===null?w=I:j.sibling=I,j=I);return e&&N.forEach(function(_){return t(f,_)}),W&&bt(f,k),w}function x(f,c,m,v){var w=gn(m);if(typeof w!="function")throw Error(b(150));if(m=w.call(m),m==null)throw Error(b(151));for(var j=w=null,N=c,k=c=0,I=null,C=m.next();N!==null&&!C.done;k++,C=m.next()){N.index>k?(I=N,N=null):I=N.sibling;var _=y(f,N,C.value,v);if(_===null){N===null&&(N=I);break}e&&N&&_.alternate===null&&t(f,N),c=o(_,c,k),j===null?w=_:j.sibling=_,j=_,N=I}if(C.done)return n(f,N),W&&bt(f,k),w;if(N===null){for(;!C.done;k++,C=m.next())C=g(f,C.value,v),C!==null&&(c=o(C,c,k),j===null?w=C:j.sibling=C,j=C);return W&&bt(f,k),w}for(N=r(f,N);!C.done;k++,C=m.next())C=S(N,f,k,C.value,v),C!==null&&(e&&C.alternate!==null&&N.delete(C.key===null?k:C.key),c=o(C,c,k),j===null?w=C:j.sibling=C,j=C);return e&&N.forEach(function(L){return t(f,L)}),W&&bt(f,k),w}function P(f,c,m,v){if(typeof m=="object"&&m!==null&&m.type===Ut&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case pr:e:{for(var w=m.key,j=c;j!==null;){if(j.key===w){if(w=m.type,w===Ut){if(j.tag===7){n(f,j.sibling),c=l(j,m.props.children),c.return=f,f=c;break e}}else if(j.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rt&&za(w)===j.type){n(f,j.sibling),c=l(j,m.props),c.ref=Sn(f,j,m),c.return=f,f=c;break e}n(f,j);break}else t(f,j);j=j.sibling}m.type===Ut?(c=Tt(m.props.children,f.mode,v,m.key),c.return=f,f=c):(v=Br(m.type,m.key,m.props,null,f.mode,v),v.ref=Sn(f,c,m),v.return=f,f=v)}return i(f);case Bt:e:{for(j=m.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=l(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=eo(m,f.mode,v),c.return=f,f=c}return i(f);case rt:return j=m._init,P(f,c,j(m._payload),v)}if(_n(m))return p(f,c,m,v);if(gn(m))return x(f,c,m,v);br(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,m),c.return=f,f=c):(n(f,c),c=Zl(m,f.mode,v),c.return=f,f=c),i(f)):n(f,c)}return P}var un=Nu(!0),bu=Nu(!1),tl=wt(null),nl=null,Yt=null,ki=null;function Si(){ki=Yt=nl=null}function Ni(e){var t=tl.current;V(tl),e._currentValue=t}function Oo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rn(e,t){nl=e,ki=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(ki!==e)if(e={context:e,memoizedValue:t,next:null},Yt===null){if(nl===null)throw Error(b(308));Yt=e,nl.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return t}var Et=null;function bi(e){Et===null?Et=[e]:Et.push(e)}function ju(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,bi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ze(e,n)}return l=r.interleaved,l===null?(t.next=t,bi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ze(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ci(e,n)}}function Ta(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;lt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,i===null?o=d:i.next=d,i=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;i=0,h=d=u=null,s=o;do{var y=s.lane,S=s.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,x=s;switch(y=t,S=n,x.tag){case 1:if(p=x.payload,typeof p=="function"){g=p.call(S,g,y);break e}g=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=x.payload,y=typeof p=="function"?p.call(S,g,y):p,y==null)break e;g=Y({},g,y);break e;case 2:lt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[s]:y.push(s))}else S={eventTime:S,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=S,u=g):h=h.next=S,i|=y;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(1);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Ot|=i,e.lanes=i,e.memoizedState=g}}function Pa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(b(191,l));l.call(r)}}}var ur={},We=wt(ur),Kn=wt(ur),Yn=wt(ur);function Ct(e){if(e===ur)throw Error(b(174));return e}function _i(e,t){switch(U(Yn,t),U(Kn,e),U(We,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vo(t,e)}V(We),U(We,t)}function cn(){V(We),V(Kn),V(Yn)}function Eu(e){Ct(Yn.current);var t=Ct(We.current),n=vo(t,e.type);t!==n&&(U(Kn,e),U(We,n))}function Ei(e){Kn.current===e&&(V(We),V(Kn))}var G=wt(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Ci(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Ir=tt.ReactCurrentDispatcher,Gl=tt.ReactCurrentBatchConfig,Lt=0,K=null,te=null,re=null,ol=!1,Ln=!1,qn=0,Sf=0;function se(){throw Error(b(321))}function zi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Ti(e,t,n,r,l,o){if(Lt=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ir.current=e===null||e.memoizedState===null?_f:Ef,e=n(r,l),Ln){o=0;do{if(Ln=!1,qn=0,25<=o)throw Error(b(301));o+=1,re=te=null,t.updateQueue=null,Ir.current=Cf,e=n(r,l)}while(Ln)}if(Ir.current=il,t=te!==null&&te.next!==null,Lt=0,re=te=K=null,ol=!1,t)throw Error(b(300));return e}function Pi(){var e=qn!==0;return qn=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?K.memoizedState=re=e:re=re.next=e,re}function Me(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?K.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(b(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?K.memoizedState=re=e:re=re.next=e}return re}function Jn(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=Me(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=te,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,u=null,d=o;do{var h=d.lane;if((Lt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,i=r):u=u.next=g,K.lanes|=h,Ot|=h}d=d.next}while(d!==null&&d!==o);u===null?i=r:u.next=s,$e(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,K.lanes|=o,Ot|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=Me(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);$e(o,t.memoizedState)||(ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cu(){}function zu(e,t){var n=K,r=Me(),l=t(),o=!$e(r.memoizedState,l);if(o&&(r.memoizedState=l,ge=!0),r=r.queue,Di(Du.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Zn(9,Pu.bind(null,n,r,l,t),void 0,null),le===null)throw Error(b(349));Lt&30||Tu(n,t,l)}return l}function Tu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pu(e,t,n,r){t.value=n,t.getSnapshot=r,Mu(t)&&Lu(e)}function Du(e,t,n){return n(function(){Mu(t)&&Lu(e)})}function Mu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Lu(e){var t=Ze(e,1);t!==null&&Ae(t,e,1,-1)}function Da(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=jf.bind(null,K,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ou(){return Me().memoizedState}function Rr(e,t,n,r){var l=Ue();K.flags|=e,l.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function xl(e,t,n,r){var l=Me();r=r===void 0?null:r;var o=void 0;if(te!==null){var i=te.memoizedState;if(o=i.destroy,r!==null&&zi(r,i.deps)){l.memoizedState=Zn(t,n,o,r);return}}K.flags|=e,l.memoizedState=Zn(1|t,n,o,r)}function Ma(e,t){return Rr(8390656,8,e,t)}function Di(e,t){return xl(2048,8,e,t)}function Iu(e,t){return xl(4,2,e,t)}function Ru(e,t){return xl(4,4,e,t)}function Fu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Au(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,Fu.bind(null,t,e),n)}function Mi(){}function $u(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bu(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uu(e,t,n){return Lt&21?($e(n,t)||(n=Xs(),K.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Nf(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{$=n,Gl.transition=r}}function Hu(){return Me().memoizedState}function bf(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vu(e))Wu(t,n);else if(n=ju(e,t,n,r),n!==null){var l=pe();Ae(n,e,r,l),Qu(n,t,r)}}function jf(e,t,n){var r=vt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Wu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,$e(s,i)){var u=t.interleaved;u===null?(l.next=l,bi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ju(e,t,l,r),n!==null&&(l=pe(),Ae(n,e,r,l),Qu(n,t,r))}}function Vu(e){var t=e.alternate;return e===K||t!==null&&t===K}function Wu(e,t){Ln=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ci(e,n)}}var il={readContext:De,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},_f={readContext:De,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Ma,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rr(4194308,4,Fu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bf.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Da,useDebugValue:Mi,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Da(!1),t=e[0];return e=Nf.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,l=Ue();if(W){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),le===null)throw Error(b(349));Lt&30||Tu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ma(Du.bind(null,r,o,e),[e]),r.flags|=2048,Zn(9,Pu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ue(),t=le.identifierPrefix;if(W){var n=Ke,r=Ge;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ef={readContext:De,useCallback:$u,useContext:De,useEffect:Di,useImperativeHandle:Au,useInsertionEffect:Iu,useLayoutEffect:Ru,useMemo:Bu,useReducer:Kl,useRef:Ou,useState:function(){return Kl(Jn)},useDebugValue:Mi,useDeferredValue:function(e){var t=Me();return Uu(t,te.memoizedState,e)},useTransition:function(){var e=Kl(Jn)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1},Cf={readContext:De,useCallback:$u,useContext:De,useEffect:Di,useImperativeHandle:Au,useInsertionEffect:Iu,useLayoutEffect:Ru,useMemo:Bu,useReducer:Yl,useRef:Ou,useState:function(){return Yl(Jn)},useDebugValue:Mi,useDeferredValue:function(e){var t=Me();return te===null?t.memoizedState=e:Uu(t,te.memoizedState,e)},useTransition:function(){var e=Yl(Jn)[0],t=Me().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Io(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wl={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=vt(e),o=Ye(r,l);o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,l),t!==null&&(Ae(t,e,l,r),Or(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=vt(e),o=Ye(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,l),t!==null&&(Ae(t,e,l,r),Or(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=vt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Ae(t,e,r,n),Or(t,e,r))}};function La(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,r)||!Wn(l,o):!0}function Xu(e,t,n){var r=!1,l=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=De(o):(l=xe(t)?Dt:de.current,r=t.contextTypes,o=(r=r!=null)?an(e,l):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function Ro(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ji(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=De(o):(o=xe(t)?Dt:de.current,l.context=an(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Io(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&wl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var n="",r=t;do n+=td(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zf=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,Go=r),Fo(e,t)},n}function Ku(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Fo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ia(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Hf.bind(null,e,t,n),t.then(e,e))}function Ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var Tf=tt.ReactCurrentOwner,ge=!1;function fe(e,t,n,r){t.child=e===null?bu(t,null,n,r):un(t,e.child,n,r)}function Aa(e,t,n,r,l){n=n.render;var o=t.ref;return rn(t,l),r=Ti(e,t,n,r,o,l),n=Pi(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(W&&n&&yi(t),t.flags|=1,fe(e,t,r,l),t.child)}function $a(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Bi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Yu(e,t,o,r,l)):(e=Br(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(i,r)&&e.ref===t.ref)return et(e,t,l)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function Yu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Wn(o,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,et(e,t,l)}return Ao(e,t,n,r,l)}function qu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Jt,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Jt,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U(Jt,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U(Jt,Se),Se|=r;return fe(e,t,l,n),t.child}function Ju(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ao(e,t,n,r,l){var o=xe(n)?Dt:de.current;return o=an(t,o),rn(t,l),n=Ti(e,t,n,r,o,l),r=Pi(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,et(e,t,l)):(W&&r&&yi(t),t.flags|=1,fe(e,t,n,l),t.child)}function Ba(e,t,n,r,l){if(xe(n)){var o=!0;Jr(t)}else o=!1;if(rn(t,l),t.stateNode===null)Fr(e,t),Xu(t,n,r),Ro(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var u=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=De(d):(d=xe(n)?Dt:de.current,d=an(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Oa(t,i,r,d),lt=!1;var y=t.memoizedState;i.state=y,rl(t,r,i,l),u=t.memoizedState,s!==r||y!==u||ye.current||lt?(typeof h=="function"&&(Io(t,n,h,r),u=t.memoizedState),(s=lt||La(t,n,s,r,y,u,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,_u(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Oe(t.type,s),i.props=d,g=t.pendingProps,y=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=De(u):(u=xe(n)?Dt:de.current,u=an(t,u));var S=n.getDerivedStateFromProps;(h=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||y!==u)&&Oa(t,i,r,u),lt=!1,y=t.memoizedState,i.state=y,rl(t,r,i,l);var p=t.memoizedState;s!==g||y!==p||ye.current||lt?(typeof S=="function"&&(Io(t,n,S,r),p=t.memoizedState),(d=lt||La(t,n,d,r,y,p,u)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,p,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,p,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=u,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,o,l)}function $o(e,t,n,r,l,o){Ju(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&_a(t,n,!1),et(e,t,o);r=t.stateNode,Tf.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=un(t,e.child,null,o),t.child=un(t,null,s,o)):fe(e,t,s,o),t.memoizedState=r.state,l&&_a(t,n,!0),t.child}function Zu(e){var t=e.stateNode;t.pendingContext?ja(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ja(e,t.context,!1),_i(e,t.containerInfo)}function Ua(e,t,n,r,l){return sn(),wi(l),t.flags|=256,fe(e,t,n,r),t.child}var Bo={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,n){var r=t.pendingProps,l=G.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(G,l&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Nl(i,r,0,null),e=Tt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Uo(n),t.memoizedState=Bo,e):Li(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Pf(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ht(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=ht(s,o):(o=Tt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Uo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Bo,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Li(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jr(e,t,n,r){return r!==null&&wi(r),un(t,e.child,null,n),e=Li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(b(422))),jr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),o=Tt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&un(t,e.child,null,i),t.child.memoizedState=Uo(i),t.memoizedState=Bo,o);if(!(t.mode&1))return jr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(b(419)),r=ql(o,r,void 0),jr(e,t,i,r)}if(s=(i&e.childLanes)!==0,ge||s){if(r=le,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ze(e,l),Ae(r,e,l,-1))}return $i(),r=ql(Error(b(421))),jr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Vf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ne=ft(l.nextSibling),be=t,W=!0,Re=null,e!==null&&(Ce[ze++]=Ge,Ce[ze++]=Ke,Ce[ze++]=Mt,Ge=e.id,Ke=e.overflow,Mt=t),t=Li(t,r.children),t.flags|=4096,t)}function Ha(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oo(e.return,t,n)}function Jl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function tc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ha(e,n,t);else if(e.tag===19)Ha(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Jl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Jl(t,!0,n,null,o);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Df(e,t,n){switch(t.tag){case 3:Zu(t),sn();break;case 5:Eu(t);break;case 1:xe(t.type)&&Jr(t);break;case 4:_i(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(tl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?ec(e,t,n):(U(G,G.current&1),e=et(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,qu(e,t,n)}return et(e,t,n)}var nc,Ho,rc,lc;nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ho=function(){};rc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(We.current);var o=null;switch(n){case"input":l=co(e,l),r=co(e,r),o=[];break;case"select":l=Y({},l,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":l=mo(e,l),r=mo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yr)}ho(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Fn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&H("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mf(e,t,n){var r=t.pendingProps;switch(xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return xe(t.type)&&qr(),ue(t),null;case 3:return r=t.stateNode,cn(),V(ye),V(de),Ci(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(qo(Re),Re=null))),Ho(e,t),ue(t),null;case 5:Ei(t);var l=Ct(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return ue(t),null}if(e=Ct(We.current),Nr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[He]=t,r[Gn]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<Cn.length;l++)H(Cn[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ji(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":ea(r,o),H("invalid",r)}ho(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),l=["children",""+s]):Fn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&H("scroll",r)}switch(n){case"input":mr(r),Zi(r,o,!0);break;case"textarea":mr(r),ta(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ds(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[He]=t,e[Gn]=r,nc(e,t,!1,!1),t.stateNode=e;e:{switch(i=go(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<Cn.length;l++)H(Cn[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":Ji(e,r),l=co(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Y({},r,{value:void 0}),H("invalid",e);break;case"textarea":ea(e,r),l=mo(e,r),H("invalid",e);break;default:l=r}ho(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Os(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ms(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&An(e,u):typeof u=="number"&&An(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&H("scroll",e):u!=null&&li(e,o,u,i))}switch(n){case"input":mr(e),Zi(e,r,!1);break;case"textarea":mr(e),ta(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)lc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Ct(Yn.current),Ct(We.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return ue(t),null;case 13:if(V(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ne!==null&&t.mode&1&&!(t.flags&128))Su(),sn(),t.flags|=98560,o=!1;else if(o=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[He]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Re!==null&&(qo(Re),Re=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?ne===0&&(ne=3):$i())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return cn(),Ho(e,t),e===null&&Qn(t.stateNode.containerInfo),ue(t),null;case 10:return Ni(t.type._context),ue(t),null;case 17:return xe(t.type)&&qr(),ue(t),null;case 19:if(V(G),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Nn(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ll(e),i!==null){for(t.flags|=128,Nn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>fn&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ll(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!W)return ue(t),null}else 2*Z()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Ai(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Lf(e,t){switch(xi(t),t.tag){case 1:return xe(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),V(ye),V(de),Ci(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ei(t),null;case 13:if(V(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(G),null;case 4:return cn(),null;case 10:return Ni(t.type._context),null;case 22:case 23:return Ai(),null;case 24:return null;default:return null}}var _r=!1,ce=!1,Of=typeof WeakSet=="function"?WeakSet:Set,T=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function Vo(e,t,n){try{n()}catch(r){q(e,t,r)}}var Va=!1;function If(e,t){if(Eo=Xr,e=uu(),gi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,u=-1,d=0,h=0,g=e,y=null;t:for(;;){for(var S;g!==n||l!==0&&g.nodeType!==3||(s=i+l),g!==o||r!==0&&g.nodeType!==3||(u=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(S=g.firstChild)!==null;)y=g,g=S;for(;;){if(g===e)break t;if(y===n&&++d===l&&(s=i),y===o&&++h===r&&(u=i),(S=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=S}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Co={focusedElem:e,selectionRange:n},Xr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var x=p.memoizedProps,P=p.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Oe(t.type,x),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(v){q(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return p=Va,Va=!1,p}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Vo(t,n,o)}l=l.next}while(l!==r)}}function kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function oc(e){var t=e.alternate;t!==null&&(e.alternate=null,oc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[Gn],delete t[Po],delete t[yf],delete t[xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ic(e){return e.tag===5||e.tag===3||e.tag===4}function Wa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yr));else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}var oe=null,Ie=!1;function nt(e,t,n){for(n=n.child;n!==null;)ac(e,t,n),n=n.sibling}function ac(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:ce||qt(n,t);case 6:var r=oe,l=Ie;oe=null,nt(e,t,n),oe=r,Ie=l,oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ie?(e=oe,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),Hn(e)):Wl(oe,n.stateNode));break;case 4:r=oe,l=Ie,oe=n.stateNode.containerInfo,Ie=!0,nt(e,t,n),oe=r,Ie=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Vo(n,t,i),l=l.next}while(l!==r)}nt(e,t,n);break;case 1:if(!ce&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){q(n,t,s)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,nt(e,t,n),ce=r):nt(e,t,n);break;default:nt(e,t,n)}}function Qa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Of),t.forEach(function(r){var l=Wf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Ie=!1;break e;case 3:oe=s.stateNode.containerInfo,Ie=!0;break e;case 4:oe=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(oe===null)throw Error(b(160));ac(o,i,l),oe=null,Ie=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){q(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sc(t,e),t=t.sibling}function sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Be(e),r&4){try{On(3,e,e.return),kl(3,e)}catch(x){q(e,e.return,x)}try{On(5,e,e.return)}catch(x){q(e,e.return,x)}}break;case 1:Le(t,e),Be(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Le(t,e),Be(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{An(l,"")}catch(x){q(e,e.return,x)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ts(l,o),go(s,i);var d=go(s,o);for(i=0;i<u.length;i+=2){var h=u[i],g=u[i+1];h==="style"?Os(l,g):h==="dangerouslySetInnerHTML"?Ms(l,g):h==="children"?An(l,g):li(l,h,g,d)}switch(s){case"input":fo(l,o);break;case"textarea":Ps(l,o);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Zt(l,!!o.multiple,S,!1):y!==!!o.multiple&&(o.defaultValue!=null?Zt(l,!!o.multiple,o.defaultValue,!0):Zt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Gn]=o}catch(x){q(e,e.return,x)}}break;case 6:if(Le(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(b(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(x){q(e,e.return,x)}}break;case 3:if(Le(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hn(t.containerInfo)}catch(x){q(e,e.return,x)}break;case 4:Le(t,e),Be(e);break;case 13:Le(t,e),Be(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ri=Z())),r&4&&Qa(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(d=ce)||h,Le(t,e),ce=d):Le(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(g=T=h;T!==null;){switch(y=T,S=y.child,y.tag){case 0:case 11:case 14:case 15:On(4,y,y.return);break;case 1:qt(y,y.return);var p=y.stateNode;if(typeof p.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(x){q(r,n,x)}}break;case 5:qt(y,y.return);break;case 22:if(y.memoizedState!==null){Ga(g);continue}}S!==null?(S.return=y,T=S):Ga(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ls("display",i))}catch(x){q(e,e.return,x)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(x){q(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Le(t,e),Be(e),r&4&&Qa(e);break;case 21:break;default:Le(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ic(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(An(l,""),r.flags&=-33);var o=Wa(e);Xo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Wa(e);Qo(e,s,i);break;default:throw Error(b(161))}}catch(u){q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e,t,n){T=e,uc(e)}function uc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||_r;if(!i){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ce;s=_r;var d=ce;if(_r=i,(ce=u)&&!d)for(T=l;T!==null;)i=T,u=i.child,i.tag===22&&i.memoizedState!==null?Ka(l):u!==null?(u.return=i,T=u):Ka(l);for(;o!==null;)T=o,uc(o),o=o.sibling;T=l,_r=s,ce=d}Xa(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Xa(e)}}function Xa(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Pa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Hn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ce||t.flags&512&&Wo(t)}catch(y){q(t,t.return,y)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Ga(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Ka(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kl(4,t)}catch(u){q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){q(t,l,u)}}var o=t.return;try{Wo(t)}catch(u){q(t,o,u)}break;case 5:var i=t.return;try{Wo(t)}catch(u){q(t,i,u)}}}catch(u){q(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Ff=Math.ceil,al=tt.ReactCurrentDispatcher,Oi=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,R=0,le=null,ee=null,ie=0,Se=0,Jt=wt(0),ne=0,er=null,Ot=0,Sl=0,Ii=0,In=null,he=null,Ri=0,fn=1/0,Qe=null,sl=!1,Go=null,mt=null,Er=!1,st=null,ul=0,Rn=0,Ko=null,Ar=-1,$r=0;function pe(){return R&6?Z():Ar!==-1?Ar:Ar=Z()}function vt(e){return e.mode&1?R&2&&ie!==0?ie&-ie:kf.transition!==null?($r===0&&($r=Xs()),$r):(e=$,e!==0||(e=window.event,e=e===void 0?16:eu(e.type)),e):1}function Ae(e,t,n,r){if(50<Rn)throw Rn=0,Ko=null,Error(b(185));ir(e,n,r),(!(R&2)||e!==le)&&(e===le&&(!(R&2)&&(Sl|=n),ne===4&&it(e,ie)),we(e,r),n===1&&R===0&&!(t.mode&1)&&(fn=Z()+500,yl&&kt()))}function we(e,t){var n=e.callbackNode;wd(e,t);var r=Qr(e,e===le?ie:0);if(r===0)n!==null&&la(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&la(n),t===1)e.tag===0?wf(Ya.bind(null,e)):xu(Ya.bind(null,e)),hf(function(){!(R&6)&&kt()}),n=null;else{switch(Gs(r)){case 1:n=ui;break;case 4:n=Ws;break;case 16:n=Wr;break;case 536870912:n=Qs;break;default:n=Wr}n=gc(n,cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cc(e,t){if(Ar=-1,$r=0,R&6)throw Error(b(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Qr(e,e===le?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var l=R;R|=2;var o=fc();(le!==e||ie!==t)&&(Qe=null,fn=Z()+500,zt(e,t));do try{Bf();break}catch(s){dc(e,s)}while(1);Si(),al.current=o,R=l,ee!==null?t=0:(le=null,ie=0,t=ne)}if(t!==0){if(t===2&&(l=So(e),l!==0&&(r=l,t=Yo(e,l))),t===1)throw n=er,zt(e,0),it(e,r),we(e,Z()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!Af(l)&&(t=cl(e,r),t===2&&(o=So(e),o!==0&&(r=o,t=Yo(e,o))),t===1))throw n=er,zt(e,0),it(e,r),we(e,Z()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:jt(e,he,Qe);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Ri+500-Z(),10<t)){if(Qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=To(jt.bind(null,e,he,Qe),t);break}jt(e,he,Qe);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Fe(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ff(r/1960))-r,10<r){e.timeoutHandle=To(jt.bind(null,e,he,Qe),r);break}jt(e,he,Qe);break;case 5:jt(e,he,Qe);break;default:throw Error(b(329))}}}return we(e,Z()),e.callbackNode===n?cc.bind(null,e):null}function Yo(e,t){var n=In;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=cl(e,t),e!==2&&(t=he,he=n,t!==null&&qo(t)),e}function qo(e){he===null?he=e:he.push.apply(he,e)}function Af(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!$e(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Ii,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Ya(e){if(R&6)throw Error(b(327));ln();var t=Qr(e,0);if(!(t&1))return we(e,Z()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=So(e);r!==0&&(t=r,n=Yo(e,r))}if(n===1)throw n=er,zt(e,0),it(e,t),we(e,Z()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,he,Qe),we(e,Z()),null}function Fi(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(fn=Z()+500,yl&&kt())}}function It(e){st!==null&&st.tag===0&&!(R&6)&&ln();var t=R;R|=1;var n=Pe.transition,r=$;try{if(Pe.transition=null,$=1,e)return e()}finally{$=r,Pe.transition=n,R=t,!(R&6)&&kt()}}function Ai(){Se=Jt.current,V(Jt)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vf(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(xi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:cn(),V(ye),V(de),Ci();break;case 5:Ei(r);break;case 4:cn();break;case 13:V(G);break;case 19:V(G);break;case 10:Ni(r.type._context);break;case 22:case 23:Ai()}n=n.return}if(le=e,ee=e=ht(e.current,null),ie=Se=t,ne=0,er=null,Ii=Sl=Ot=0,he=In=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Et=null}return e}function dc(e,t){do{var n=ee;try{if(Si(),Ir.current=il,ol){for(var r=K.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(Lt=0,re=te=K=null,Ln=!1,qn=0,Oi.current=null,n===null||n.return===null){ne=1,er=t,ee=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Ra(i);if(S!==null){S.flags&=-257,Fa(S,i,s,o,t),S.mode&1&&Ia(o,d,t),t=S,u=d;var p=t.updateQueue;if(p===null){var x=new Set;x.add(u),t.updateQueue=x}else p.add(u);break e}else{if(!(t&1)){Ia(o,d,t),$i();break e}u=Error(b(426))}}else if(W&&s.mode&1){var P=Ra(i);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Fa(P,i,s,o,t),wi(dn(u,s));break e}}o=u=dn(u,s),ne!==4&&(ne=2),In===null?In=[o]:In.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Gu(o,u,t);Ta(o,f);break e;case 1:s=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mt===null||!mt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ku(o,s,t);Ta(o,v);break e}}o=o.return}while(o!==null)}mc(n)}catch(w){t=w,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function fc(){var e=al.current;return al.current=il,e===null?il:e}function $i(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Ot&268435455)&&!(Sl&268435455)||it(le,ie)}function cl(e,t){var n=R;R|=2;var r=fc();(le!==e||ie!==t)&&(Qe=null,zt(e,t));do try{$f();break}catch(l){dc(e,l)}while(1);if(Si(),R=n,al.current=r,ee!==null)throw Error(b(261));return le=null,ie=0,ne}function $f(){for(;ee!==null;)pc(ee)}function Bf(){for(;ee!==null&&!dd();)pc(ee)}function pc(e){var t=hc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?mc(e):ee=t,Oi.current=null}function mc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lf(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=Mf(n,t,Se),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function jt(e,t,n){var r=$,l=Pe.transition;try{Pe.transition=null,$=1,Uf(e,t,n,r)}finally{Pe.transition=l,$=r}return null}function Uf(e,t,n,r){do ln();while(st!==null);if(R&6)throw Error(b(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(kd(e,o),e===le&&(ee=le=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Er||(Er=!0,gc(Wr,function(){return ln(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=$;$=1;var s=R;R|=4,Oi.current=null,If(e,n),sc(n,e),sf(Co),Xr=!!Eo,Co=Eo=null,e.current=n,Rf(n),fd(),R=s,$=i,Pe.transition=o}else e.current=n;if(Er&&(Er=!1,st=e,ul=l),o=e.pendingLanes,o===0&&(mt=null),vd(n.stateNode),we(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(sl)throw sl=!1,e=Go,Go=null,e;return ul&1&&e.tag!==0&&ln(),o=e.pendingLanes,o&1?e===Ko?Rn++:(Rn=0,Ko=e):Rn=0,kt(),null}function ln(){if(st!==null){var e=Gs(ul),t=Pe.transition,n=$;try{if(Pe.transition=null,$=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,ul=0,R&6)throw Error(b(331));var l=R;for(R|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(T=d;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:On(8,h,o)}var g=h.child;if(g!==null)g.return=h,T=g;else for(;T!==null;){h=T;var y=h.sibling,S=h.return;if(oc(h),h===d){T=null;break}if(y!==null){y.return=S,T=y;break}T=S}}}var p=o.alternate;if(p!==null){var x=p.child;if(x!==null){p.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:On(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){i=T;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,T=m;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:kl(9,s)}}catch(w){q(s,s.return,w)}if(s===i){T=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,T=v;break e}T=s.return}}if(R=l,kt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(pl,e)}catch{}r=!0}return r}finally{$=n,Pe.transition=t}}return!1}function qa(e,t,n){t=dn(n,t),t=Gu(e,t,1),e=pt(e,t,1),t=pe(),e!==null&&(ir(e,1,t),we(e,t))}function q(e,t,n){if(e.tag===3)qa(e,e,n);else for(;t!==null;){if(t.tag===3){qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=dn(n,e),e=Ku(t,e,1),t=pt(t,e,1),e=pe(),t!==null&&(ir(t,1,e),we(t,e));break}}t=t.return}}function Hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ie&n)===n&&(ne===4||ne===3&&(ie&130023424)===ie&&500>Z()-Ri?zt(e,0):Ii|=n),we(e,t)}function vc(e,t){t===0&&(e.mode&1?(t=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):t=1);var n=pe();e=Ze(e,t),e!==null&&(ir(e,t,n),we(e,n))}function Vf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vc(e,n)}function Wf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),vc(e,n)}var hc;hc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Df(e,t,n);ge=!!(e.flags&131072)}else ge=!1,W&&t.flags&1048576&&wu(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var l=an(t,de.current);rn(t,n),l=Ti(null,t,r,e,l,n);var o=Pi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,Jr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ji(t),l.updater=wl,t.stateNode=l,l._reactInternals=t,Ro(t,r,e,n),t=$o(null,t,r,!0,o,n)):(t.tag=0,W&&o&&yi(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Xf(r),e=Oe(r,e),l){case 0:t=Ao(null,t,r,e,n);break e;case 1:t=Ba(null,t,r,e,n);break e;case 11:t=Aa(null,t,r,e,n);break e;case 14:t=$a(null,t,r,Oe(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ao(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ba(e,t,r,l,n);case 3:e:{if(Zu(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,l=o.element,_u(e,t),rl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=dn(Error(b(423)),t),t=Ua(e,t,r,n,l);break e}else if(r!==l){l=dn(Error(b(424)),t),t=Ua(e,t,r,n,l);break e}else for(Ne=ft(t.stateNode.containerInfo.firstChild),be=t,W=!0,Re=null,n=bu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=et(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Eu(t),e===null&&Lo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,zo(r,l)?i=null:o!==null&&zo(r,o)&&(t.flags|=32),Ju(e,t),fe(e,t,i,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return ec(e,t,n);case 4:return _i(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Aa(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,U(tl,r._currentValue),r._currentValue=i,o!==null)if($e(o.value,i)){if(o.children===l.children&&!ye.current){t=et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ye(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Oo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(b(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Oo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,rn(t,n),l=De(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),$a(e,t,r,l,n);case 15:return Yu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Fr(e,t),t.tag=1,xe(r)?(e=!0,Jr(t)):e=!1,rn(t,n),Xu(t,r,l),Ro(t,r,l,n),$o(null,t,r,!0,e,n);case 19:return tc(e,t,n);case 22:return qu(e,t,n)}throw Error(b(156,t.tag))};function gc(e,t){return Vs(e,t)}function Qf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Qf(e,t,n,r)}function Bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xf(e){if(typeof e=="function")return Bi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ii)return 11;if(e===ai)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Br(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Bi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ut:return Tt(n.children,l,o,t);case oi:i=8,l|=8;break;case io:return e=Te(12,n,t,l|2),e.elementType=io,e.lanes=o,e;case ao:return e=Te(13,n,t,l),e.elementType=ao,e.lanes=o,e;case so:return e=Te(19,n,t,l),e.elementType=so,e.lanes=o,e;case Es:return Nl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case js:i=10;break e;case _s:i=9;break e;case ii:i=11;break e;case ai:i=14;break e;case rt:i=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Te(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Tt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Es,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function eo(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ui(e,t,n,r,l,o,i,s,u){return e=new Gf(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ji(o),e}function Kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yc(e){if(!e)return yt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(xe(n))return yu(e,n,t)}return t}function xc(e,t,n,r,l,o,i,s,u){return e=Ui(n,r,!0,e,l,o,i,s,u),e.context=yc(null),n=e.current,r=pe(),l=vt(n),o=Ye(r,l),o.callback=t??null,pt(n,o,l),e.current.lanes=l,ir(e,l,r),we(e,r),e}function bl(e,t,n,r){var l=t.current,o=pe(),i=vt(l);return n=yc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,i),e!==null&&(Ae(e,l,i,o),Or(e,l,i)),i}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ja(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hi(e,t){Ja(e,t),(e=e.alternate)&&Ja(e,t)}function Yf(){return null}var wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vi(e){this._internalRoot=e}jl.prototype.render=Vi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));bl(e,t,null,null)};jl.prototype.unmount=Vi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){bl(null,e,null,null)}),t[Je]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=qs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&Zs(e)}};function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}function qf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=dl(i);o.call(d)}}var i=xc(t,r,e,0,null,!1,!1,"",Za);return e._reactRootContainer=i,e[Je]=i.current,Qn(e.nodeType===8?e.parentNode:e),It(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=dl(u);s.call(d)}}var u=Ui(e,0,!1,null,null,!1,!1,"",Za);return e._reactRootContainer=u,e[Je]=u.current,Qn(e.nodeType===8?e.parentNode:e),It(function(){bl(t,u,n,r)}),u}function El(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var u=dl(i);s.call(u)}}bl(t,i,e,l)}else i=qf(n,t,e,l,r);return dl(i)}Ks=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=En(t.pendingLanes);n!==0&&(ci(t,n|1),we(t,Z()),!(R&6)&&(fn=Z()+500,kt()))}break;case 13:It(function(){var r=Ze(e,1);if(r!==null){var l=pe();Ae(r,e,1,l)}}),Hi(e,1)}};di=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=pe();Ae(t,e,134217728,n)}Hi(e,134217728)}};Ys=function(e){if(e.tag===13){var t=vt(e),n=Ze(e,t);if(n!==null){var r=pe();Ae(n,e,t,r)}Hi(e,t)}};qs=function(){return $};Js=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};xo=function(e,t,n){switch(t){case"input":if(fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=gl(r);if(!l)throw Error(b(90));zs(r),fo(r,l)}}}break;case"textarea":Ps(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Fs=Fi;As=It;var Jf={usingClientEntryPoint:!1,Events:[sr,Qt,gl,Is,Rs,Fi]},bn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zf={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Us(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||Yf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cr.isDisabled&&Cr.supportsFiber)try{pl=Cr.inject(Zf),Ve=Cr}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jf;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wi(t))throw Error(b(200));return Kf(e,t,null,n)};_e.createRoot=function(e,t){if(!Wi(e))throw Error(b(299));var n=!1,r="",l=wc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ui(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,Qn(e.nodeType===8?e.parentNode:e),new Vi(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Us(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return It(e)};_e.hydrate=function(e,t,n){if(!_l(t))throw Error(b(200));return El(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Wi(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=wc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=xc(t,null,e,1,n??null,l,!1,o,i),e[Je]=t.current,Qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new jl(t)};_e.render=function(e,t,n){if(!_l(t))throw Error(b(200));return El(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!_l(e))throw Error(b(40));return e._reactRootContainer?(It(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};_e.unstable_batchedUpdates=Fi;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return El(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)}catch(e){console.error(e)}}kc(),ks.exports=_e;var ep=ks.exports,es=ep;lo.createRoot=es.createRoot,lo.hydrateRoot=es.hydrateRoot;const tp=[{id:"dashboard",icon:"⚔️",label:"Quest Board"},{id:"focus",icon:"🔮",label:"Focus Mode"},{id:"inventory",icon:"🎒",label:"Equipment"},{id:"shop",icon:"🛒",label:"Shop"},{id:"rewards",icon:"✨",label:"Rewards"},{id:"talents",icon:"🌟",label:"Talents"}];function np({user:e,activeView:t,onNavigate:n,pendingCount:r,newLoot:l=!1}){const o=Math.round(e.xp/e.xpToNext*100);return a.jsxs("nav",{className:"sidebar",children:[a.jsxs("div",{className:"sidebar-logo",children:[a.jsx("div",{className:"logo-icon",children:"⚔"}),a.jsxs("div",{children:[a.jsx("div",{className:"logo-title",children:"QuestLog"}),a.jsx("div",{className:"logo-sub",children:"ADHD Task Manager"})]})]}),a.jsxs("div",{className:"sidebar-profile",children:[a.jsx("div",{className:"profile-avatar",children:e.displayName[0]}),a.jsxs("div",{className:"profile-info",children:[a.jsx("div",{className:"profile-name",children:e.displayName}),a.jsx("div",{className:"profile-title",children:e.title})]})]}),a.jsxs("div",{className:"sidebar-stats",children:[a.jsxs("div",{className:"stat-chip",children:[a.jsx("span",{className:"stat-icon",children:"⚡"}),a.jsxs("div",{children:[a.jsx("div",{className:"stat-label",children:"Level"}),a.jsx("div",{className:"stat-value font-display",children:e.level})]})]}),a.jsxs("div",{className:"stat-chip",children:[a.jsx("span",{className:"stat-icon gold",children:"💰"}),a.jsxs("div",{children:[a.jsx("div",{className:"stat-label",children:"Gold"}),a.jsx("div",{className:"stat-value text-gold",children:e.gold})]})]}),a.jsxs("div",{className:"stat-chip",children:[a.jsx("span",{className:"stat-icon",children:"🔥"}),a.jsxs("div",{children:[a.jsx("div",{className:"stat-label",children:"Streak"}),a.jsxs("div",{className:"stat-value",style:{color:"var(--amber)"},children:[e.streak,"d"]})]})]})]}),a.jsxs("div",{className:"sidebar-xp",children:[a.jsxs("div",{className:"sidebar-xp-labels",children:[a.jsx("span",{className:"text-secondary text-xs",children:"XP Progress"}),a.jsxs("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:[e.xp," / ",e.xpToNext]})]}),a.jsx("div",{className:"xp-bar-track",children:a.jsx("div",{className:"xp-bar-fill",style:{width:`${o}%`}})}),a.jsxs("div",{className:"text-xs text-muted",style:{marginTop:4},children:[e.xpToNext-e.xp," XP to Level ",e.level+1]})]}),a.jsx("div",{className:"sidebar-nav",children:tp.map(i=>a.jsxs("button",{className:`nav-item ${t===i.id?"active":""}`,onClick:()=>n(i.id),children:[a.jsx("span",{className:"nav-icon",children:i.icon}),a.jsx("span",{className:"nav-label",children:i.label}),i.id==="dashboard"&&r>0&&a.jsx("span",{className:"nav-badge",children:r}),i.id==="talents"&&e.talentPoints>0&&a.jsx("span",{className:"nav-badge talent-badge",children:e.talentPoints}),i.id==="inventory"&&l&&a.jsx("span",{className:"nav-badge loot-badge",children:"NEW"})]},i.id))}),a.jsx("style",{children:`
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
          width: 40px; height: 40px;
          background: var(--gold-dim);
          border: 1px solid var(--gold-glow);
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-family: var(--font-display);
          color: var(--gold);
        }
        .logo-title { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--gold); letter-spacing: 0.05em; }
        .logo-sub { font-size: 0.65rem; color: var(--text-muted); letter-spacing: 0.05em; text-transform: uppercase; }
        .sidebar-profile {
          display: flex; align-items: center; gap: var(--space-3);
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-3);
        }
        .profile-avatar {
          width: 36px; height: 36px;
          background: linear-gradient(135deg, var(--purple), var(--xp-blue));
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 800; color: white; flex-shrink: 0;
        }
        .profile-name { font-size: 0.85rem; font-weight: 700; color: var(--text-primary); }
        .profile-title { font-size: 0.7rem; color: var(--purple); font-style: italic; }
        .sidebar-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-2); }
        .stat-chip {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          background: var(--bg-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md); padding: var(--space-2) var(--space-1);
          text-align: center;
        }
        .stat-icon { font-size: 1rem; }
        .stat-label { font-size: 0.62rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.04em; }
        .stat-value { font-size: 0.9rem; font-weight: 800; color: var(--text-primary); }
        .sidebar-xp { display: flex; flex-direction: column; gap: var(--space-2); }
        .sidebar-xp-labels { display: flex; justify-content: space-between; align-items: center; }
        .sidebar-nav { display: flex; flex-direction: column; gap: var(--space-1); flex: 1; }
        .nav-item {
          display: flex; align-items: center; gap: var(--space-3);
          padding: var(--space-3); border-radius: var(--radius-md);
          background: transparent; color: var(--text-secondary);
          font-size: 0.875rem; font-weight: 600; font-family: var(--font-body);
          width: 100%; text-align: left;
          transition: all 0.15s var(--ease-out);
          position: relative;
        }
        .nav-item:hover { background: var(--bg-elevated); color: var(--text-primary); }
        .nav-item.active { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-glow); }
        .nav-icon { font-size: 1.1rem; }
        .nav-label { flex: 1; }
        .nav-badge {
          background: var(--coral); color: white;
          border-radius: var(--radius-full); min-width: 20px; height: 20px;
          padding: 0 6px; display: inline-flex; align-items: center; justify-content: center;
          font-size: 0.7rem; font-weight: 800;
        }
        .talent-badge { background: var(--purple); }
        .loot-badge { background: var(--gold); color: var(--text-inverse); }
        @media (max-width: 768px) {
          .sidebar { width: 100%; height: auto; flex-direction: row; flex-wrap: wrap; position: relative; padding: var(--space-3); }
          .sidebar-logo, .sidebar-profile, .sidebar-stats, .sidebar-xp { display: none; }
          .sidebar-nav { flex-direction: row; flex: unset; }
          .nav-label { display: none; }
        }
      `})]})}const tr={ring_focus_1:{id:"ring_focus_1",name:"Ring of Slight Attention",slot:"ring",rarity:"common",icon:"💍",color:"#9E9BC0",stats:{focus:5,critChance:.02},effects:[{type:"task_xp_bonus",value:.1}],flavor:"You almost remember what you were doing."},ring_focus_2:{id:"ring_focus_2",name:"Band of Hyperfocus",slot:"ring",rarity:"uncommon",icon:"💍",color:"#4FC3F7",stats:{focus:14,critChance:.05,critDamage:.2},effects:[{type:"task_xp_bonus",value:.2}],flavor:"Time ceases to exist. So does lunch."},ring_speed_1:{id:"ring_speed_1",name:"Signet of Urgency",slot:"ring",rarity:"common",icon:"💍",color:"#F5A623",stats:{speed:.15},flavor:"Slightly faster. Slightly."},helmet_clarity_1:{id:"helmet_clarity_1",name:"Crown of Clarity",slot:"head",rarity:"uncommon",icon:"👑",color:"#F5C842",stats:{focus:8,critChance:.03},effects:[{type:"task_xp_bonus",value:.12}],flavor:"Your thoughts feel just slightly less like soup."},helmet_steel_1:{id:"helmet_steel_1",name:"Helm of Perseverance",slot:"head",rarity:"common",icon:"⛑️",color:"#B0BEC5",stats:{resilience:10,attack:3},flavor:"Dings from every missed deadline."},chest_focus_1:{id:"chest_focus_1",name:"Robe of Deep Work",slot:"body",rarity:"rare",icon:"🥋",color:"#B39DDB",stats:{focus:18,attack:5},effects:[{type:"task_xp_bonus",value:.25},{type:"focus_session_bonus",value:.15}],flavor:"Worn by those who have achieved inbox zero."},chest_iron_1:{id:"chest_iron_1",name:"Vest of Routine",slot:"body",rarity:"common",icon:"🦺",color:"#78909C",stats:{resilience:15,speed:.1},flavor:"Consistent. Reliable. Slightly itchy."},gloves_grip_1:{id:"gloves_grip_1",name:"Gloves of Getting Things Done",slot:"gloves",rarity:"common",icon:"🧤",color:"#FF8A65",stats:{attack:8,critChance:.02},flavor:'"Just start." — the gloves'},gloves_crit_1:{id:"gloves_crit_1",name:"Fingers of Fortune",slot:"gloves",rarity:"uncommon",icon:"🧤",color:"#FFD54F",stats:{critChance:.08,critDamage:.3},flavor:"Your pointing finger has become significantly more judgy."},legs_endure_1:{id:"legs_endure_1",name:"Leggings of Long Sessions",slot:"legs",rarity:"uncommon",icon:"👖",color:"#5C6BC0",stats:{resilience:12,focus:6},effects:[{type:"focus_session_bonus",value:.1}],flavor:"Technically pajamas. No one needs to know."},legs_swift_1:{id:"legs_swift_1",name:"Trousers of Momentum",slot:"legs",rarity:"common",icon:"👗",color:"#26A69A",stats:{speed:.12,attack:4},flavor:"Moving faster. Destination: unclear."},boots_speed_1:{id:"boots_speed_1",name:"Restless Boots",slot:"boots",rarity:"common",icon:"👟",color:"#66BB6A",stats:{speed:.2},flavor:"They tap. Constantly."},boots_speed_2:{id:"boots_speed_2",name:"Sprinters of Sudden Burst",slot:"boots",rarity:"uncommon",icon:"👟",color:"#26C6DA",stats:{speed:.35,critChance:.03},flavor:"Perfect for last-minute deadline runs."},necklace_resolve_1:{id:"necklace_resolve_1",name:"Amulet of Resolve",slot:"necklace",rarity:"rare",icon:"📿",color:"#EF5350",stats:{resilience:20,focus:10,attack:6},effects:[{type:"task_xp_bonus",value:.15}],flavor:'"You will finish this." It means it.'}},pn={common:{color:"#9E9BC0",bg:"rgba(158,155,192,0.12)",label:"Common"},uncommon:{color:"#5CDD8B",bg:"rgba(92,221,139,0.12)",label:"Uncommon"},rare:{color:"#4FC3F7",bg:"rgba(79,195,247,0.12)",label:"Rare"},epic:{color:"#B39DDB",bg:"rgba(179,157,219,0.15)",label:"Epic"},legendary:{color:"#F5C842",bg:"rgba(245,200,66,0.15)",label:"Legendary"}},rp=[{id:"head",label:"Head",icon:"⛑️"},{id:"body",label:"Body",icon:"🦺"},{id:"gloves",label:"Gloves",icon:"🧤"},{id:"legs",label:"Legs",icon:"👖"},{id:"boots",label:"Boots",icon:"👟"},{id:"ring",label:"Ring 1",icon:"💍"},{id:"ring2",label:"Ring 2",icon:"💍"},{id:"necklace",label:"Necklace",icon:"📿"}];function lp(e){return tr[e]||null}function Sc(e){const t={attack:0,speed:0,critChance:0,critDamage:0,focus:0,resilience:0},n=[];return Object.values(e).forEach(r=>{if(!r)return;const l=tr[r];l&&(Object.entries(l.stats||{}).forEach(([o,i])=>{t[o]=(t[o]||0)+i}),(l.effects||[]).forEach(o=>n.push(o)))}),e.ring&&e.ring2&&(t.critChance+=.05),{stats:t,effects:n}}const $t={attack:10,speed:1,critChance:.05,critDamage:1.5,focus:0,resilience:0},op=2e3;function zr(e,t,n={}){const r={attack:Math.floor(e*2.5),critChance:e*.002,speed:0,critDamage:0,focus:0,resilience:0},{stats:l}=Sc(t);return{attack:$t.attack+r.attack+(l.attack||0)+(n.attack||0),speed:$t.speed+(l.speed||0)+(n.speed||0),critChance:Math.min(.75,$t.critChance+r.critChance+(l.critChance||0)+(n.critChance||0)),critDamage:$t.critDamage+(l.critDamage||0)+(n.critDamage||0),focus:$t.focus+(l.focus||0)+(n.focus||0),resilience:$t.resilience+(l.resilience||0)+(n.resilience||0)}}function ip(e,t=[]){let n=e.attack,r=e.critChance;t.forEach(i=>{i.type==="attack_mult"&&(n*=i.value),i.type==="crit_boost"&&(r=Math.min(.9,r+i.value)),i.type==="slow_player"&&(n*=i.value)});const l=Math.random()<r;return{damage:Math.round(l?n*e.critDamage:n*(.9+Math.random()*.2)),isCrit:l}}function ap(e){return e?1.4:1}function sp(e){return e>=5?1.5:e>=3?1.3:e>=1?1.15:1}function up(e,t){const n=Math.min(.7,t*.03);return Math.max(1,Math.round(e*(1-n)))}function cp(e,t,n){if(!e.phases)return null;for(const r of e.phases){const l=e.max_hp*r.hp_threshold;if(n>l&&t<=l)return r}return null}function dp(e,t,n){const r=Math.max(0,(n-t)/1e3),l=8*60*60,o=Math.min(r,l),i=e.attack*e.speed,s=Math.round(i*o*.5),u=Math.round(s*.015),d=Math.round(o/3600*10)/10;return{damage:s,gold:u,offlineSec:o,hours:d}}function fp(e){const[t,n]=e.gold_drop,r=t+Math.floor(Math.random()*(n-t+1)),l=e.xp_drop,o=[];return(e.loot_table||[]).forEach(i=>{Math.random()<i.chance&&o.push(i.item)}),{gold:r,xp:l,loot:o}}function Nc(e){const t=e.attack*(1+e.critChance*(e.critDamage-1));return Math.round(t*e.speed)}function pp({monster:e,currentHp:t,playerStats:n,activeBuffs:r=[],floatingNumbers:l=[],momentumMult:o=1,lowEnergyMode:i=!1,monstersKilled:s=0,onToggleLowEnergy:u}){var x,P,f;const[d,h]=E.useState(!1),g=Math.max(0,t/e.max_hp*100),y=Nc(n);E.useEffect(()=>{if(l.length>0){h(!0);const c=setTimeout(()=>h(!1),200);return()=>clearTimeout(c)}},[l.length]);const S=g>50?"#5CDD8B":g>25?"#F5A623":"#FF3860",p=(x=e.phases)==null?void 0:x.some(c=>Math.abs(g/100-c.hp_threshold)<.08);return a.jsxs("div",{className:`combat-strip ${i?"low-energy":""}`,children:[a.jsxs("div",{className:"combat-monster-section",children:[a.jsxs("div",{className:"combat-monster-info",children:[a.jsxs("div",{className:"combat-monster-name",style:{color:e.color},children:[e.name,e.isBoss&&a.jsx("span",{className:"boss-tag",children:"BOSS"})]}),a.jsxs("div",{className:"combat-hp-row",children:[a.jsxs("div",{className:"combat-hp-bar-track",children:[a.jsx("div",{className:"combat-hp-bar-fill",style:{width:`${g}%`,background:S,boxShadow:`0 0 8px ${S}60`}}),p&&a.jsx("div",{className:"phase-warn-line",style:{left:`${((f=(P=e.phases)==null?void 0:P[0])==null?void 0:f.hp_threshold)*100}%`}})]}),a.jsxs("div",{className:"combat-hp-text",children:[t.toLocaleString()," / ",e.max_hp.toLocaleString()]})]})]}),a.jsxs("div",{className:`combat-arena ${d?"shake":""}`,children:[a.jsxs("div",{className:"player-sprite",children:[a.jsx("div",{className:"sprite-figure player-figure",children:"🧙‍♂️"}),a.jsx("div",{className:"sprite-label",children:"You"}),r.length>0&&a.jsx("div",{className:"buff-indicators",children:r.map(c=>a.jsx("span",{className:"buff-pip",title:c.label,children:c.icon},c.id))})]}),a.jsx("div",{className:"attack-arrows",children:a.jsxs("div",{className:"arrow-row",children:[a.jsx("div",{className:"attack-arrow",style:{animationDelay:"0ms"},children:"→"}),a.jsx("div",{className:"attack-arrow",style:{animationDelay:"300ms"},children:"→"}),a.jsx("div",{className:"attack-arrow",style:{animationDelay:"600ms"},children:"→"})]})}),a.jsxs("div",{className:"monster-sprite",children:[a.jsx("div",{className:`sprite-figure monster-figure ${d?"monster-hit":""}`,style:{fontSize:e.isBoss?"2.2rem":"1.8rem"},children:e.sprite}),a.jsx("div",{className:"sprite-label",style:{color:e.color},children:e.isBoss?"⚡ BOSS":`Tier ${e.tier}`})]}),l.map(c=>a.jsx("div",{className:`float-dmg ${c.isCrit?"crit":""} ${c.isOffline?"offline":""}`,style:{left:`${c.x}%`},children:c.isOffline?`+${c.value} (idle)`:c.isCrit?`${c.value}!`:c.value},c.id))]})]}),a.jsxs("div",{className:"combat-stats-panel",children:[a.jsxs("div",{className:"combat-stat-row",children:[a.jsx("span",{className:"cs-label",children:"⚔ DPS"}),a.jsx("span",{className:"cs-value",children:y})]}),a.jsxs("div",{className:"combat-stat-row",children:[a.jsx("span",{className:"cs-label",children:"💥 ATK"}),a.jsx("span",{className:"cs-value",children:Math.round(n.attack)})]}),a.jsxs("div",{className:"combat-stat-row",children:[a.jsx("span",{className:"cs-label",children:"🎯 Crit"}),a.jsxs("span",{className:"cs-value",children:[Math.round(n.critChance*100),"%"]})]}),o>1&&a.jsxs("div",{className:"combat-stat-row momentum",children:[a.jsx("span",{className:"cs-label",children:"🔥 Momentum"}),a.jsxs("span",{className:"cs-value",children:[o.toFixed(1),"×"]})]}),a.jsxs("div",{className:"combat-stat-row muted",children:[a.jsx("span",{className:"cs-label",children:"☠ Kills"}),a.jsx("span",{className:"cs-value",children:s})]}),a.jsx("button",{className:`low-energy-btn ${i?"active":""}`,onClick:u,title:"Low Energy Mode: easier enemies, bigger rewards, smaller tasks",children:i?"💙 Low Energy ON":"💙 Low Energy"})]}),a.jsx("style",{children:`
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

        .low-energy-btn {
          margin-top: 4px;
          font-size: 0.62rem;
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
        }
      `})]})}function mp({reward:e,onDismiss:t}){var n;return e?a.jsxs("div",{className:"modal-overlay",onClick:t,children:[a.jsxs("div",{className:"kill-modal scale-in",onClick:r=>r.stopPropagation(),children:[a.jsxs("div",{className:"kill-header",children:[e.isBoss?a.jsx("div",{className:"kill-title-boss font-display",children:"⚡ BOSS DEFEATED!"}):a.jsx("div",{className:"kill-title font-display",children:"☠ Defeated!"}),a.jsx("div",{className:"kill-monster",children:e.monsterName})]}),a.jsxs("div",{className:"kill-rewards",children:[a.jsxs("div",{className:"kill-reward-chip gold",children:[a.jsx("span",{children:"💰"}),a.jsxs("span",{children:["+",e.gold," Gold"]})]}),a.jsxs("div",{className:"kill-reward-chip xp",children:[a.jsx("span",{children:"⚡"}),a.jsxs("span",{children:["+",e.xp," XP"]})]})]}),((n=e.loot)==null?void 0:n.length)>0&&a.jsxs("div",{className:"kill-loot",children:[a.jsx("div",{className:"kill-loot-label",children:"🎁 Loot Drop!"}),e.loot.map(r=>{const l=lp(r);if(!l)return null;const o=pn[l.rarity]||pn.common;return a.jsxs("div",{className:"loot-item",style:{borderColor:o.color,background:o.bg},children:[a.jsx("span",{className:"loot-icon",children:l.icon}),a.jsxs("div",{children:[a.jsx("div",{className:"loot-name",style:{color:o.color},children:l.name}),a.jsx("div",{className:"loot-flavor",children:l.flavor})]})]},r)})]}),a.jsx("button",{className:"btn btn-primary",style:{width:"100%",marginTop:16},onClick:t,children:"Onward! →"})]}),a.jsx("style",{children:`
        .kill-modal {
          background: var(--bg-elevated);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-xl);
          padding: 28px;
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: var(--shadow-lg), 0 0 40px rgba(245,200,66,0.1);
        }
        .kill-header { text-align: center; }
        .kill-title { font-size: 1.3rem; color: var(--text-primary); }
        .kill-title-boss { font-size: 1.5rem; color: var(--gold); text-shadow: 0 0 20px var(--gold-glow); }
        .kill-monster { color: var(--text-muted); font-size: 0.9rem; margin-top: 4px; font-style: italic; }
        .kill-rewards { display: flex; gap: 10px; justify-content: center; }
        .kill-reward-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 16px; border-radius: var(--radius-full);
          font-size: 0.9rem; font-weight: 800;
        }
        .kill-reward-chip.gold { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-glow); }
        .kill-reward-chip.xp   { background: var(--xp-blue-dim); color: var(--xp-blue); border: 1px solid rgba(79,195,247,0.3); }
        .kill-loot { display: flex; flex-direction: column; gap: 8px; }
        .kill-loot-label { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); }
        .loot-item { display: flex; gap: 10px; align-items: center; padding: 10px; border-radius: var(--radius-md); border: 1px solid; }
        .loot-icon { font-size: 1.4rem; }
        .loot-name { font-size: 0.85rem; font-weight: 700; }
        .loot-flavor { font-size: 0.72rem; color: var(--text-muted); font-style: italic; margin-top: 2px; }
      `})]}):null}function vp({gains:e,onDismiss:t}){return e?a.jsxs("div",{className:"modal-overlay",onClick:t,children:[a.jsxs("div",{className:"offline-modal scale-in",onClick:n=>n.stopPropagation(),children:[a.jsx("div",{className:"offline-icon",children:"🌙"}),a.jsx("div",{className:"offline-title font-display",children:"Welcome Back!"}),a.jsxs("div",{className:"offline-sub",children:["Your hero kept fighting for ",e.hours,"h while you were away."]}),a.jsxs("div",{className:"offline-rewards",children:[a.jsxs("div",{className:"offline-chip dmg",children:[a.jsx("span",{children:"⚔"}),a.jsxs("span",{children:[e.damage.toLocaleString()," damage dealt"]})]}),e.gold>0&&a.jsxs("div",{className:"offline-chip gold",children:[a.jsx("span",{children:"💰"}),a.jsxs("span",{children:["+",e.gold," gold earned"]})]})]}),a.jsx("div",{className:"offline-note",children:"Idle efficiency is 50% — active play is always stronger."}),a.jsx("button",{className:"btn btn-primary",style:{width:"100%",marginTop:8},onClick:t,children:"Let's go! ⚔"})]}),a.jsx("style",{children:`
        .offline-modal {
          background: var(--bg-elevated);
          border: 1px solid var(--border-default);
          border-radius: var(--radius-xl);
          padding: 28px;
          width: 100%;
          max-width: 340px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          box-shadow: var(--shadow-lg);
        }
        .offline-icon { font-size: 2.5rem; }
        .offline-title { font-size: 1.4rem; color: var(--xp-blue); }
        .offline-sub { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; }
        .offline-rewards { display: flex; flex-direction: column; gap: 8px; width: 100%; }
        .offline-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: var(--radius-md);
          font-size: 0.85rem; font-weight: 700;
          justify-content: center;
        }
        .offline-chip.dmg  { background: rgba(255,101,132,0.12); color: var(--coral); border: 1px solid rgba(255,101,132,0.25); }
        .offline-chip.gold { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-glow); }
        .offline-note { font-size: 0.72rem; color: var(--text-muted); font-style: italic; }
      `})]}):null}const nr={LOW:{label:"Low",color:"#6C8EBF",icon:"○",xpMult:.8},MEDIUM:{label:"Medium",color:"#F5A623",icon:"◐",xpMult:1},HIGH:{label:"High",color:"#FF6584",icon:"●",xpMult:1.3},URGENT:{label:"Urgent",color:"#FF3860",icon:"⚡",xpMult:1.6}},rr={XS:{label:"Quick (5m)",minutes:5,baseXP:20},S:{label:"Short (15m)",minutes:15,baseXP:40},M:{label:"Medium (30m)",minutes:30,baseXP:75},L:{label:"Long (1h)",minutes:60,baseXP:140},XL:{label:"Deep (2h+)",minutes:120,baseXP:250}},hp=[{id:"quick_start",name:"Quick Start",description:"Earn +20 XP bonus for starting any task within 5 minutes of viewing it.",icon:"⚡",effect_type:"xp_bonus_on_start",effect_value:20,cost:1},{id:"deep_focus",name:"Deep Focus",description:"Focus sessions earn +15% more XP.",icon:"🔮",effect_type:"xp_mult_focus",effect_value:.15,cost:1},{id:"second_wind",name:"Second Wind",description:"Completing an overdue task gives full XP instead of reduced.",icon:"🌬️",effect_type:"no_overdue_penalty",effect_value:!0,cost:2},{id:"subtask_master",name:"Subtask Master",description:"Subtask XP increased by 50%.",icon:"📋",effect_type:"subtask_xp_mult",effect_value:.5,cost:1},{id:"streak_shield",name:"Streak Shield",description:"Once per week, missing a daily will not break your streak.",icon:"🛡️",effect_type:"streak_forgiveness",effect_value:1,cost:2}],ts=[{id:"task-1",title:"Review project proposal",notes:"Check the Q3 roadmap and leave comments before the team meeting.",dueAt:new Date(Date.now()+2*60*60*1e3).toISOString(),priority:"HIGH",effort:"M",status:"pending",tags:["work"],subtasks:[{id:"st-1a",title:"Read through executive summary",done:!0},{id:"st-1b",title:"Add inline comments",done:!1},{id:"st-1c",title:"Write summary feedback",done:!1}],createdAt:new Date(Date.now()-24*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-2",title:"Reply to Sarah's email",notes:"",dueAt:new Date(Date.now()+30*60*1e3).toISOString(),priority:"URGENT",effort:"XS",status:"pending",tags:["work","comms"],subtasks:[],createdAt:new Date(Date.now()-60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-3",title:"Grocery run",notes:"Pick up ingredients for the week. Check the list on the fridge.",dueAt:new Date(Date.now()+5*60*60*1e3).toISOString(),priority:"MEDIUM",effort:"S",status:"pending",tags:["personal","errands"],subtasks:[{id:"st-3a",title:"Check fridge for what's needed",done:!1},{id:"st-3b",title:"Go to store",done:!1}],createdAt:new Date(Date.now()-2*60*60*1e3).toISOString(),completedAt:null,isOverdue:!1},{id:"task-4",title:"Do 20-min stretching routine",notes:"Back has been tight — do the hip flexor and shoulder opener sequences.",dueAt:new Date(Date.now()-60*60*1e3).toISOString(),priority:"LOW",effort:"XS",status:"pending",tags:["health"],subtasks:[],createdAt:new Date(Date.now()-5*60*60*1e3).toISOString(),completedAt:null,isOverdue:!0}],ns={id:"user-1",displayName:"Adventurer",level:3,xp:340,xpToNext:500,gold:127,streak:5,talentPoints:1,unlockedTalents:["quick_start"],title:"Aspiring Chronicler"},rs=[{id:"hist-1",title:"Morning standup notes",completedAt:new Date(Date.now()-3*60*60*1e3).toISOString(),xpEarned:40,goldEarned:8},{id:"hist-2",title:"Send weekly update to manager",completedAt:new Date(Date.now()-5*60*60*1e3).toISOString(),xpEarned:75,goldEarned:15}],to={work:"#4FC3F7",personal:"#B39DDB",health:"#69F0AE",errands:"#F5A623",comms:"#FF6584",school:"#FFD54F"};function bc(e,t=[]){const n=rr[e.effort]||rr.M,r=nr[e.priority]||nr.MEDIUM;let l=n.baseXP,o=Math.round(l*r.xpMult);const i=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,s=t.includes("second_wind");i&&!s?o=Math.round(o*.6):i||(o=Math.round(o*1.1));const u=Math.round(o*.2);return{xp:o,gold:u,isOverdue:i}}function gp(e=[]){return{xp:e.includes("subtask_master")?Math.round(12*1.5):12,gold:2}}function yp(e,t,n=[]){const r=Math.round(e*2.5),l=n.includes("deep_focus")?1.15:1,o=t?1.25:.7,i=Math.round(r*l*o),s=Math.round(i*.15);return{xp:i,gold:s}}function no(e){return Math.round(200*Math.pow(e,1.4))}function xp(e,t,n){let r=e,l=t+n,o=!1,i=0;for(;l>=no(r);)l-=no(r),r+=1,o=!0,i+=1;return{level:r,xp:l,xpToNext:no(r),leveledUp:o,talentPointsEarned:i}}function wp(e){if(!e)return null;const t=new Date(e)-new Date,n=Math.abs(t);if(n<60*1e3)return t<0?"Just overdue":"Due now";if(n<60*60*1e3){const l=Math.round(n/6e4);return t<0?`${l}m overdue`:`in ${l}m`}if(n<24*60*60*1e3){const l=Math.round(n/36e5);return t<0?`${l}h overdue`:`in ${l}h`}const r=Math.round(n/864e5);return t<0?`${r}d overdue`:`in ${r}d`}function Pt(){return`${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function kp(e){const t={URGENT:0,HIGH:1,MEDIUM:2,LOW:3};return[...e].sort((n,r)=>{const l=n.isOverdue||n.dueAt&&new Date(n.dueAt)<new Date,o=r.isOverdue||r.dueAt&&new Date(r.dueAt)<new Date;if(l!==o)return l?-1:1;const i=(t[n.priority]||2)-(t[r.priority]||2);return i!==0?i:n.dueAt&&r.dueAt?new Date(n.dueAt)-new Date(r.dueAt):0})}function Sp({task:e,userTalents:t=[],onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:i,index:s=0}){var N;const[u,d]=E.useState(!1),[h,g]=E.useState(!1),[y,S]=E.useState(!1),p=nr[e.priority]||nr.MEDIUM,x=rr[e.effort]||rr.M,P=wp(e.dueAt),f=e.isOverdue||e.dueAt&&new Date(e.dueAt)<new Date,c=e.subtasks.filter(k=>k.done).length,m=e.subtasks.length,{xp:v,gold:w}=bc(e,t);function j(){g(!0),setTimeout(()=>n(e.id),400)}return a.jsxs("div",{className:`task-card ${h?"completing":""} ${f?"overdue":""}`,style:{animationDelay:`${s*60}ms`,"--priority-color":p.color},children:[a.jsx("div",{className:"priority-stripe",style:{background:p.color}}),a.jsxs("div",{className:"task-card-inner",children:[a.jsxs("div",{className:"task-main-row",children:[a.jsx("button",{className:`task-checkbox ${h?"completing":""}`,onClick:j,title:"Mark complete","aria-label":"Complete task",children:h&&a.jsx("span",{style:{color:"white",fontSize:"0.75rem"},children:"✓"})}),a.jsxs("div",{className:"task-title-block",onClick:()=>d(k=>!k),children:[a.jsx("div",{className:"task-title",children:e.title}),e.notes&&!u&&a.jsx("div",{className:"task-notes-preview",children:e.notes})]}),a.jsxs("div",{className:"task-actions-inline",children:[i&&a.jsx("button",{className:"btn btn-ghost task-action-btn",onClick:()=>i(e),title:"Start focus session",children:"🔮"}),a.jsx("button",{className:`task-expand-btn ${u?"open":""}`,onClick:()=>d(k=>!k),"aria-label":"Toggle details",children:"▾"})]})]}),a.jsxs("div",{className:"task-meta-row",children:[a.jsxs("span",{className:"badge",style:{background:`${p.color}18`,color:p.color,border:`1px solid ${p.color}30`},children:[p.icon," ",p.label]}),a.jsxs("span",{className:"badge",style:{background:"var(--bg-elevated)",color:"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["⏱ ",x.label]}),P&&a.jsxs("span",{className:`badge ${f?"overdue-badge":"due-badge"}`,children:[f?"⚠ ":"📅 ",P]}),(N=e.tags)==null?void 0:N.map(k=>a.jsx("span",{className:"tag-chip",style:{background:`${to[k]||"#888"}20`,color:to[k]||"#888",border:`1px solid ${to[k]||"#888"}30`},children:k},k)),m>0&&a.jsxs("span",{className:"badge",style:{background:c===m?"var(--green-dim)":"var(--bg-elevated)",color:c===m?"var(--green)":"var(--text-secondary)",border:"1px solid var(--border-subtle)"},children:["☑ ",c,"/",m]}),a.jsxs("span",{className:"reward-preview",children:["+",v," XP · +",w," 💰"]})]}),u&&a.jsxs("div",{className:"task-expanded animate-in",children:[e.notes&&a.jsx("div",{className:"task-notes",children:e.notes}),m>0&&a.jsxs("div",{className:"subtask-list",children:[a.jsx("div",{className:"subtask-header",children:"Steps"}),e.subtasks.map(k=>a.jsxs("div",{className:`subtask-item ${k.done?"done":""}`,onClick:()=>r(e.id,k.id),children:[a.jsx("span",{className:"subtask-check",children:k.done?"✓":"○"}),a.jsx("span",{className:"subtask-title",children:k.title}),!k.done&&a.jsx("span",{className:"subtask-xp",children:"+12 XP"})]},k.id))]}),f&&a.jsxs("div",{className:"recovery-banner",children:[a.jsx("span",{children:"🌱"}),a.jsxs("div",{children:[a.jsx("div",{className:"recovery-title",children:"No worries — let's get back on track."}),a.jsxs("div",{className:"recovery-subtitle",children:["Completing it still earns you ",Math.round(v*.6)," XP. Or reschedule if needed."]})]})]}),a.jsxs("div",{className:"task-action-row",children:[a.jsxs("button",{className:"btn btn-success",onClick:j,children:["✓ Complete (+",v," XP)"]}),i&&a.jsx("button",{className:"btn btn-secondary",onClick:()=>i(e),children:"🔮 Focus"}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>l(e.id,2),children:"⏰ Snooze 2h"}),y?a.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[a.jsx("button",{className:"btn btn-danger",onClick:()=>o(e.id),children:"Delete"}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!1),children:"Cancel"})]}):a.jsx("button",{className:"btn btn-ghost",onClick:()=>S(!0),style:{marginLeft:"auto"},children:"🗑"})]})]})]}),a.jsx("style",{children:`
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
      `})]})}const Np={title:"",notes:"",priority:"MEDIUM",effort:"S",dueAt:"",tags:[],subtasks:[]};function bp({onAdd:e,onClose:t}){const[n,r]=E.useState(Np),[l,o]=E.useState(!1),[i,s]=E.useState(""),u=E.useRef(null);E.useEffect(()=>{var p;(p=u.current)==null||p.focus()},[]);function d(p){p.preventDefault(),n.title.trim()&&(e({...n,dueAt:n.dueAt?new Date(n.dueAt).toISOString():null,subtasks:n.subtasks}),t())}function h(){i.trim()&&(r(p=>({...p,subtasks:[...p.subtasks,{id:Pt(),title:i.trim(),done:!1}]})),s(""))}function g(p){r(x=>({...x,subtasks:x.subtasks.filter(P=>P.id!==p)}))}function y(p){r(x=>({...x,tags:x.tags.includes(p)?x.tags.filter(P=>P!==p):[...x.tags,p]}))}const S=["work","personal","health","errands","comms","school"];return a.jsxs("div",{className:"modal-overlay",onClick:p=>{p.target===p.currentTarget&&t()},children:[a.jsxs("div",{className:"modal-box",children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"font-display",style:{color:"var(--gold)"},children:"⚔ New Quest"}),a.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:"1.2rem"},children:"×"})]}),a.jsxs("form",{onSubmit:d,className:"add-task-form",children:[a.jsx("div",{className:"form-group",children:a.jsx("input",{ref:u,type:"text",placeholder:"What needs to be done?",value:n.title,onChange:p=>r(x=>({...x,title:p.target.value})),className:"title-input",required:!0})}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Priority"}),a.jsx("div",{className:"priority-selector",children:Object.entries(nr).map(([p,x])=>a.jsxs("button",{type:"button",className:`priority-option ${n.priority===p?"active":""}`,style:{"--pcolor":x.color},onClick:()=>r(P=>({...P,priority:p})),children:[a.jsx("span",{children:x.icon}),a.jsx("span",{children:x.label})]},p))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"How long will this take?"}),a.jsx("div",{className:"effort-selector",children:Object.entries(rr).map(([p,x])=>a.jsx("button",{type:"button",className:`effort-option ${n.effort===p?"active":""}`,onClick:()=>r(P=>({...P,effort:p})),children:x.label},p))})]}),a.jsxs("button",{type:"button",className:"advanced-toggle",onClick:()=>o(p=>!p),children:[a.jsx("span",{children:l?"▾":"▸"}),a.jsx("span",{children:l?"Fewer options":"More options (notes, due date, subtasks, tags)"})]}),l&&a.jsxs("div",{className:"advanced-section animate-in",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Notes"}),a.jsx("textarea",{placeholder:"Any details or context...",value:n.notes,onChange:p=>r(x=>({...x,notes:p.target.value})),rows:3})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Due date"}),a.jsx("input",{type:"datetime-local",value:n.dueAt,onChange:p=>r(x=>({...x,dueAt:p.target.value}))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Tags"}),a.jsx("div",{className:"tag-selector",children:S.map(p=>a.jsx("button",{type:"button",className:`tag-option ${n.tags.includes(p)?"active":""}`,onClick:()=>y(p),children:p},p))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Break it down (subtasks)"}),a.jsxs("div",{className:"subtask-add-row",children:[a.jsx("input",{type:"text",placeholder:"Add a step...",value:i,onChange:p=>s(p.target.value),onKeyDown:p=>{p.key==="Enter"&&(p.preventDefault(),h())}}),a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:h,children:"+ Add"})]}),n.subtasks.length>0&&a.jsx("div",{className:"subtask-preview-list",children:n.subtasks.map(p=>a.jsxs("div",{className:"subtask-preview-item",children:[a.jsx("span",{children:"○"}),a.jsx("span",{style:{flex:1},children:p.title}),a.jsx("button",{type:"button",className:"btn btn-ghost",onClick:()=>g(p.id),children:"×"})]},p.id))})]})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.title.trim(),children:"⚔ Add Quest"})]})]})]}),a.jsx("style",{children:`
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
      `})]})}function jp({user:e,tasks:t,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onAddTask:i,onStartFocus:s}){const[u,d]=E.useState(!1),[h,g]=E.useState("all"),[y,S]=E.useState(""),p=E.useMemo(()=>kp(t.filter(v=>v.status==="pending")),[t]),x=p.filter(v=>v.isOverdue||v.dueAt&&new Date(v.dueAt)<new Date);p.filter(v=>!v.isOverdue&&!(v.dueAt&&new Date(v.dueAt)<new Date));const P=E.useMemo(()=>h==="overdue"?x:h==="high"?p.filter(v=>["HIGH","URGENT"].includes(v.priority)):p,[h,p,x]);function f(v){v.preventDefault(),y.trim()&&(i({title:y.trim(),priority:"MEDIUM",effort:"S"}),S(""))}const c=p[0],m=(()=>{const v=new Date().getHours();return v<12?"Good morning":v<17?"Good afternoon":"Good evening"})();return a.jsxs("div",{className:"dashboard",children:[a.jsxs("div",{className:"dashboard-header",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"dashboard-title font-display",children:[m,", ",e.displayName]}),a.jsxs("div",{className:"dashboard-subtitle",children:[p.length===0?"🎉 All clear! You're on top of everything.":`You have ${p.length} quest${p.length!==1?"s":""} pending.`,x.length>0&&a.jsxs("span",{className:"overdue-warning",children:[" · ",x.length," overdue"]})]})]}),a.jsx("button",{className:"btn btn-primary add-quest-btn",onClick:()=>d(!0),children:"⚔ New Quest"})]}),c&&a.jsxs("div",{className:"next-action-spotlight",children:[a.jsxs("div",{className:"next-action-label",children:[a.jsx("span",{className:"pulse-dot"}),"NEXT BEST ACTION"]}),a.jsxs("div",{className:"next-action-content",children:[a.jsx("div",{className:"next-action-title",children:c.title}),a.jsxs("div",{className:"next-action-meta",children:[c.effort&&a.jsxs("span",{children:["~",c.effort==="XS"?"5":c.effort==="S"?"15":c.effort==="M"?"30":c.effort==="L"?"60":"120","min"]}),c.dueAt&&a.jsxs("span",{children:["· due ",new Date(c.dueAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]}),a.jsxs("div",{className:"next-action-btns",children:[a.jsx("button",{className:"btn btn-primary",onClick:()=>s(c),children:"🔮 Start Focus"}),a.jsx("button",{className:"btn btn-success",onClick:()=>n(c.id),children:"✓ Complete"})]})]}),a.jsxs("form",{onSubmit:f,className:"quick-add-bar",children:[a.jsx("input",{type:"text",placeholder:"Quick add a task… (press Enter)",value:y,onChange:v=>S(v.target.value),className:"quick-add-input"}),a.jsx("button",{type:"submit",className:"btn btn-secondary",children:"Add"}),a.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>d(!0),children:"+ Details"})]}),a.jsx("div",{className:"filter-tabs",children:[{id:"all",label:`All (${p.length})`},{id:"high",label:`High Priority (${p.filter(v=>["HIGH","URGENT"].includes(v.priority)).length})`},{id:"overdue",label:`Overdue (${x.length})`,danger:x.length>0}].map(v=>a.jsx("button",{className:`filter-tab ${h===v.id?"active":""} ${v.danger?"danger":""}`,onClick:()=>g(v.id),children:v.label},v.id))}),a.jsx("div",{className:"task-list",children:P.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"🌟"}),a.jsx("div",{className:"empty-title",children:"Nothing here!"}),a.jsx("div",{className:"empty-sub",children:h==="overdue"?"No overdue tasks — great work!":"Add your first quest to get started."})]}):P.map((v,w)=>a.jsx(Sp,{task:v,userTalents:e.unlockedTalents,onComplete:n,onToggleSubtask:r,onSnooze:l,onDelete:o,onFocus:s,index:w},v.id))}),u&&a.jsx(bp,{onAdd:i,onClose:()=>d(!1)}),a.jsx("style",{children:`
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
      `})]})}const _p=[{label:"5 min",minutes:5,emoji:"⚡"},{label:"15 min",minutes:15,emoji:"🌊"},{label:"25 min",minutes:25,emoji:"🔮"},{label:"45 min",minutes:45,emoji:"🌙"},{label:"60 min",minutes:60,emoji:"⭐"}];function Ep({session:e,onStart:t,onPause:n,onResume:r,onStop:l,formatTime:o,tasks:i}){const[s,u]=E.useState(null),[d,h]=E.useState(25),g=e?1-e.secondsLeft/e.totalSeconds:0,y=2*Math.PI*120,S=y*(1-g);if(!e)return a.jsxs("div",{className:"focus-setup",children:[a.jsxs("div",{className:"focus-setup-inner",children:[a.jsx("div",{className:"focus-icon-big",children:"🔮"}),a.jsx("h1",{className:"font-display focus-heading",children:"Focus Session"}),a.jsxs("p",{className:"focus-subtitle",children:["Clear your mind. One task. One timer.",a.jsx("br",{}),"Earn bonus XP for every focused minute."]}),i.length>0&&a.jsxs("div",{className:"focus-section",children:[a.jsx("div",{className:"focus-section-label",children:"Working on"}),a.jsxs("div",{className:"task-picker",children:[a.jsx("button",{className:`task-pick-option ${s?"":"active"}`,onClick:()=>u(null),children:"Free focus (no task)"}),i.slice(0,5).map(c=>a.jsx("button",{className:`task-pick-option ${(s==null?void 0:s.id)===c.id?"active":""}`,onClick:()=>u(c),children:c.title},c.id))]})]}),a.jsxs("div",{className:"focus-section",children:[a.jsx("div",{className:"focus-section-label",children:"Duration"}),a.jsx("div",{className:"preset-grid",children:_p.map(c=>a.jsxs("button",{className:`preset-btn ${d===c.minutes?"active":""}`,onClick:()=>h(c.minutes),children:[a.jsx("span",{className:"preset-emoji",children:c.emoji}),a.jsx("span",{className:"preset-label",children:c.label})]},c.minutes))})]}),a.jsx("button",{className:"btn btn-primary focus-start-btn",onClick:()=>t(s||{id:"free",title:"Free Focus"},d),children:"🔮 Begin Session"}),a.jsx("div",{className:"focus-tip",children:"💡 Tip: Each minute focused earns 2.5 XP. Complete the session for a 25% bonus."})]}),a.jsx("style",{children:`
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
        `})]});const p=Math.floor(e.secondsLeft/60),x=e.secondsLeft%60,P=Math.round((e.totalSeconds-e.secondsLeft)/60),f=Math.round(P*2.5);return a.jsxs("div",{className:"focus-active",children:[a.jsxs("div",{className:"focus-active-inner",children:[a.jsx("div",{className:"focus-task-name",children:e.taskTitle}),a.jsxs("div",{className:"timer-ring-wrapper",children:[a.jsxs("svg",{width:"280",height:"280",className:"timer-ring",children:[a.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:"var(--bg-elevated)",strokeWidth:"12"}),a.jsx("circle",{cx:"140",cy:"140",r:"120",fill:"none",stroke:e.paused?"var(--amber)":"var(--xp-blue)",strokeWidth:"12",strokeLinecap:"round",strokeDasharray:y,strokeDashoffset:S,transform:"rotate(-90 140 140)",style:{transition:"stroke-dashoffset 1s linear, stroke 0.3s"}})]}),a.jsxs("div",{className:"timer-display",children:[a.jsxs("div",{className:"timer-digits",children:[String(p).padStart(2,"0"),":",String(x).padStart(2,"0")]}),a.jsx("div",{className:"timer-status",children:e.paused?"⏸ paused":"● focusing"}),a.jsxs("div",{className:"timer-xp-preview",children:["+",f," XP earned so far"]})]})]}),a.jsxs("div",{className:"focus-controls",children:[e.paused?a.jsx("button",{className:"btn btn-primary focus-ctrl-btn",onClick:r,children:"▶ Resume"}):a.jsx("button",{className:"btn btn-secondary focus-ctrl-btn",onClick:n,children:"⏸ Pause"}),a.jsx("button",{className:"btn btn-success focus-ctrl-btn",onClick:()=>l(!0),children:"✓ Complete"}),a.jsx("button",{className:"btn btn-ghost focus-ctrl-btn",onClick:()=>l(!1),children:"✕ End early"})]}),a.jsx("div",{className:"focus-reminder",children:"Put your phone down. You've got this. 💙"})]}),a.jsx("style",{children:`
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
      `})]})}const Cp=[{id:"first_quest",icon:"⚔️",name:"First Quest",desc:"Completed your first task",earned:!0},{id:"week_streak",icon:"🔥",name:"Week Warrior",desc:"7-day streak",earned:!0},{id:"focus_ten",icon:"🔮",name:"Deep Thinker",desc:"10 focus sessions",earned:!1},{id:"early_bird",icon:"🌅",name:"Early Bird",desc:"Complete a task before 9am",earned:!1},{id:"level_5",icon:"⭐",name:"Rising Star",desc:"Reach Level 5",earned:!1},{id:"hundred_tasks",icon:"🏆",name:"Century",desc:"Complete 100 tasks",earned:!1}];function zp({user:e,history:t}){const n=t.reduce((l,o)=>l+o.xpEarned,0);t.reduce((l,o)=>l+o.goldEarned,0);const r=Math.round(e.xp/e.xpToNext*100);return a.jsxs("div",{className:"rewards-screen",children:[a.jsxs("div",{className:"rewards-hero",children:[a.jsxs("div",{className:"rewards-avatar",children:[a.jsx("span",{className:"rewards-level font-display",children:e.level}),a.jsx("span",{className:"rewards-level-label",children:"LVL"})]}),a.jsxs("div",{className:"rewards-hero-info",children:[a.jsx("h1",{className:"font-display rewards-name",children:e.displayName}),a.jsx("div",{className:"rewards-title-text",children:e.title}),a.jsxs("div",{className:"xp-section",children:[a.jsxs("div",{className:"xp-section-labels",children:[a.jsx("span",{className:"text-xs",style:{color:"var(--xp-blue)"},children:"XP Progress"}),a.jsxs("span",{className:"text-xs text-muted",children:[e.xp," / ",e.xpToNext]})]}),a.jsx("div",{className:"xp-bar-track",children:a.jsx("div",{className:"xp-bar-fill",style:{width:`${r}%`}})}),a.jsxs("div",{className:"text-xs text-muted",style:{marginTop:4},children:[e.xpToNext-e.xp," XP until Level ",e.level+1]})]})]})]}),a.jsx("div",{className:"stats-grid",children:[{icon:"⚡",label:"Current Level",value:e.level,color:"var(--xp-blue)"},{icon:"💰",label:"Total Gold",value:e.gold,color:"var(--gold)"},{icon:"🔥",label:"Day Streak",value:`${e.streak}d`,color:"var(--amber)"},{icon:"✅",label:"Tasks Done",value:t.length,color:"var(--green)"},{icon:"🌟",label:"Total XP Earned",value:`${n.toLocaleString()}`,color:"var(--purple)"},{icon:"🎯",label:"Talent Points",value:e.talentPoints,color:"var(--coral)"}].map(l=>a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-card-icon",style:{color:l.color},children:l.icon}),a.jsx("div",{className:"stat-card-value",style:{color:l.color},children:l.value}),a.jsx("div",{className:"stat-card-label",children:l.label})]},l.label))}),a.jsxs("div",{className:"section",children:[a.jsx("h2",{className:"section-title font-display",children:"Achievements"}),a.jsx("div",{className:"badges-grid",children:Cp.map(l=>a.jsxs("div",{className:`badge-card ${l.earned?"earned":"locked"}`,children:[a.jsx("div",{className:"badge-icon",children:l.icon}),a.jsx("div",{className:"badge-name",children:l.name}),a.jsx("div",{className:"badge-desc",children:l.desc}),!l.earned&&a.jsx("div",{className:"badge-lock",children:"🔒"})]},l.id))})]}),a.jsxs("div",{className:"section",children:[a.jsx("h2",{className:"section-title font-display",children:"Recent Completions"}),a.jsx("div",{className:"history-list",children:t.length===0?a.jsx("div",{className:"text-muted",style:{textAlign:"center",padding:"var(--space-6)"},children:"No completed tasks yet. Go conquer something! ⚔️"}):t.slice(0,20).map(l=>a.jsxs("div",{className:"history-item animate-in",children:[a.jsx("div",{className:"history-title",children:l.title}),a.jsx("div",{className:"history-meta",children:a.jsx("span",{className:"text-xs text-muted",children:new Date(l.completedAt).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})})}),a.jsxs("div",{className:"history-rewards",children:[a.jsxs("span",{className:"history-xp",children:["+",l.xpEarned," XP"]}),a.jsxs("span",{className:"history-gold",children:["+",l.goldEarned," 💰"]})]})]},l.id))})]}),a.jsx("style",{children:`
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
      `})]})}function Tp({user:e,onUnlock:t}){return a.jsxs("div",{className:"talents-screen",children:[a.jsxs("div",{className:"talents-header",children:[a.jsx("h1",{className:"font-display talents-title",children:"Talent Tree"}),a.jsx("div",{className:"talents-subtitle",children:"Unlock perks that make productivity easier — not just look better."}),a.jsxs("div",{className:"talent-points-display",children:[a.jsx("span",{className:"talent-points-icon",children:"🌟"}),a.jsx("span",{className:"talent-points-value",children:e.talentPoints}),a.jsx("span",{className:"talent-points-label",children:"Talent Points Available"})]})]}),a.jsx("div",{className:"talents-grid",children:hp.map(n=>{const r=e.unlockedTalents.includes(n.id),l=e.talentPoints>=n.cost;return a.jsxs("div",{className:`talent-card ${r?"unlocked":""} ${!r&&l?"available":""}`,children:[a.jsx("div",{className:"talent-icon",children:n.icon}),a.jsxs("div",{className:"talent-info",children:[a.jsx("div",{className:"talent-name",children:n.name}),a.jsx("div",{className:"talent-desc",children:n.description})]}),a.jsx("div",{className:"talent-action",children:r?a.jsxs("div",{className:"talent-status unlocked-status",children:[a.jsx("span",{children:"✓"})," Unlocked"]}):a.jsxs("button",{className:`btn ${l?"btn-primary":"btn-secondary"} talent-unlock-btn`,onClick:()=>t(n.id,n.cost),disabled:!l,children:["🌟 ",n.cost," ",n.cost===1?"point":"points"]})})]},n.id)})}),a.jsxs("div",{className:"talents-tip",children:[a.jsx("span",{children:"💡"}),a.jsx("span",{children:"You earn Talent Points by leveling up. Every level grants 1 point. Keep completing quests to unlock more perks!"})]}),a.jsx("style",{children:`
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
      `})]})}function ls({item:e,onAction:t,actionLabel:n,actionStyle:r="primary",showSlot:l=!1}){if(!e)return null;const o=pn[e.rarity]||pn.common;return a.jsxs("div",{className:"item-card",style:{borderColor:o.color,"--rc":o.color},children:[a.jsxs("div",{className:"item-card-top",children:[a.jsx("span",{className:"item-icon",children:e.icon}),a.jsxs("div",{className:"item-header",children:[a.jsx("div",{className:"item-name",style:{color:o.color},children:e.name}),a.jsxs("div",{className:"item-meta-row",children:[a.jsx("span",{className:"rarity-badge",style:{background:o.bg,color:o.color},children:o.label}),l&&a.jsx("span",{className:"slot-badge",children:e.slot})]})]})]}),a.jsxs("div",{className:"item-stats",children:[Object.entries(e.stats||{}).map(([i,s])=>a.jsxs("div",{className:"item-stat",children:[a.jsx("span",{className:"istat-name",children:i}),a.jsx("span",{className:"istat-val",children:i==="critChance"||i==="critDamage"||i==="speed"?`+${(s*100).toFixed(0)}%`:`+${s}`})]},i)),(e.effects||[]).map((i,s)=>a.jsxs("div",{className:"item-stat effect",children:[a.jsx("span",{className:"istat-name",children:i.type==="task_xp_bonus"?"📚 Task XP":i.type==="focus_session_bonus"?"🔮 Focus XP":i.type}),a.jsxs("span",{className:"istat-val",children:["+",(i.value*100).toFixed(0),"%"]})]},s))]}),e.flavor&&a.jsxs("div",{className:"item-flavor",children:['"',e.flavor,'"']}),t&&a.jsx("button",{className:`btn btn-${r} item-action-btn`,onClick:()=>t(e),children:n})]})}function Pp({combat:e,userLevel:t}){const[n,r]=E.useState(null),[l,o]=E.useState("equipped"),{equipped:i,inventory:s,equipItem:u,unequipItem:d,playerStats:h}=e,{stats:g}=Sc(i),y=s.map(p=>tr[p]).filter(Boolean);function S(p){let x=p.slot;x==="ring"&&(x=i.ring?"ring2":"ring"),u(p.id,x),r(null)}return a.jsxs("div",{className:"inventory-screen",children:[a.jsxs("div",{className:"inv-header",children:[a.jsx("h1",{className:"font-display inv-title",children:"Equipment"}),a.jsxs("div",{className:"inv-dps-badge",children:[a.jsx("span",{children:"⚔"}),a.jsxs("span",{children:[Nc(h)," DPS"]})]})]}),a.jsxs("div",{className:"gear-summary",children:[Object.entries(g).map(([p,x])=>x!==0?a.jsxs("div",{className:"gear-stat-chip",children:[a.jsx("span",{className:"gs-name",children:p}),a.jsx("span",{className:"gs-val",children:p==="critChance"||p==="critDamage"||p==="speed"?`+${(x*100).toFixed(0)}%`:`+${x}`})]},p):null),Object.values(g).every(p=>p===0)&&a.jsx("div",{className:"text-muted text-sm",children:"No gear bonuses yet — equip some items!"})]}),a.jsx("div",{className:"inv-tabs",children:[{id:"equipped",label:`Equipped (${Object.values(i).filter(Boolean).length}/8)`},{id:"inventory",label:`Bag (${s.length})`}].map(p=>a.jsx("button",{className:`filter-tab ${l===p.id?"active":""}`,onClick:()=>o(p.id),children:p.label},p.id))}),l==="equipped"&&a.jsx("div",{className:"slots-grid animate-in",children:rp.map(p=>{const x=i[p.id],P=x?tr[x]:null;return a.jsxs("div",{className:`equip-slot ${P?"has-item":"empty"}`,children:[a.jsxs("div",{className:"slot-label",children:[p.icon," ",p.label]}),P?a.jsx(ls,{item:P,onAction:()=>d(p.id),actionLabel:"Unequip",actionStyle:"ghost"}):a.jsx("div",{className:"empty-slot-hint",children:"Empty"})]},p.id)})}),l==="inventory"&&a.jsx("div",{className:"inv-bag animate-in",children:y.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"🎒"}),a.jsx("div",{className:"empty-title",children:"Bag is empty"}),a.jsx("div",{className:"empty-sub",children:"Defeat monsters or buy from the Shop to earn gear."})]}):a.jsx("div",{className:"bag-grid",children:y.map((p,x)=>a.jsx(ls,{item:p,showSlot:!0,onAction:S,actionLabel:"Equip",actionStyle:"primary"},`${p.id}-${x}`))})}),a.jsx("style",{children:`
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
      `})]})}const Dp={shop_id:"starter_shop",name:"Wandering Merchant",icon:"🛒",items:[{item_id:"ring_focus_1",price:80,currency:"gold"},{item_id:"ring_speed_1",price:80,currency:"gold"},{item_id:"boots_speed_1",price:90,currency:"gold"},{item_id:"gloves_grip_1",price:100,currency:"gold"},{item_id:"helmet_steel_1",price:110,currency:"gold"},{item_id:"chest_iron_1",price:140,currency:"gold"},{item_id:"legs_swift_1",price:100,currency:"gold"}]},os=[[{item_id:"ring_focus_2",price:220,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"},{item_id:"helmet_clarity_1",price:200,currency:"gold"}],[{item_id:"boots_speed_2",price:200,currency:"gold"},{item_id:"legs_endure_1",price:190,currency:"gold"},{item_id:"ring_focus_2",price:220,currency:"gold"}],[{item_id:"necklace_resolve_1",price:350,currency:"gold"},{item_id:"chest_focus_1",price:400,currency:"gold"},{item_id:"gloves_crit_1",price:180,currency:"gold"}]],jc=24;function Mp(e=Date.now()){const t=Math.floor(e/(36e5*jc));return os[t%os.length]}function is(){const e=36e5*jc,t=Date.now();return(Math.floor(t/e)+1)*e-t}function Lp(e){const t=Math.floor(e/36e5),n=Math.floor(e%36e5/6e4);return`${t}h ${n}m`}function as({itemId:e,price:t,currency:n,userGold:r,onBuy:l,owned:o}){const i=tr[e];if(!i)return null;const s=pn[i.rarity]||pn.common,u=r>=t,[d,h]=E.useState(!1),[g,y]=E.useState(!1);function S(){if(!u||d||g)return;h(!0),l(e,t)&&y(!0),setTimeout(()=>h(!1),300)}return a.jsxs("div",{className:`shop-item ${g?"bought":""} ${u?"":"cant-afford"}`,style:{"--rc":s.color,borderColor:g?"var(--green)":s.color},children:[a.jsxs("div",{className:"shop-item-top",children:[a.jsx("span",{className:"shop-item-icon",children:i.icon}),a.jsxs("div",{className:"shop-item-header",children:[a.jsx("div",{className:"shop-item-name",style:{color:s.color},children:i.name}),a.jsx("span",{className:"rarity-badge",style:{background:s.bg,color:s.color},children:s.label})]})]}),a.jsx("div",{className:"shop-item-stats",children:Object.entries(i.stats||{}).map(([p,x])=>a.jsxs("span",{className:"shop-stat-chip",children:[a.jsx("span",{className:"ssc-name",children:p}),a.jsx("span",{className:"ssc-val",children:p==="critChance"||p==="critDamage"||p==="speed"?`+${(x*100).toFixed(0)}%`:`+${x}`})]},p))}),i.flavor&&a.jsxs("div",{className:"shop-item-flavor",children:['"',i.flavor,'"']}),a.jsxs("div",{className:"shop-item-footer",children:[a.jsxs("div",{className:`shop-price ${u?"":"unaffordable"}`,children:["💰 ",t," gold"]}),g?a.jsx("div",{className:"shop-bought-badge",children:"✓ Added to bag"}):a.jsx("button",{className:`btn ${u?"btn-primary":"btn-secondary"} shop-buy-btn`,onClick:S,disabled:!u||d,children:d?"...":u?"Buy":"Need gold"})]})]})}function Op({userGold:e,onBuy:t}){const[n,r]=E.useState(is()),l=Mp();return E.useEffect(()=>{const o=setInterval(()=>r(is()),6e4);return()=>clearInterval(o)},[]),a.jsxs("div",{className:"shop-screen",children:[a.jsxs("div",{className:"shop-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"font-display shop-title",children:"🛒 Shop"}),a.jsx("div",{className:"shop-subtitle",children:"Gear up. The monsters aren't getting weaker."})]}),a.jsxs("div",{className:"gold-display",children:[a.jsx("span",{children:"💰"}),a.jsx("span",{className:"gold-amount",children:e}),a.jsx("span",{className:"gold-label",children:"gold"})]})]}),a.jsxs("div",{className:"shop-section",children:[a.jsxs("div",{className:"shop-section-header",children:[a.jsxs("div",{className:"shop-section-title",children:[a.jsx("span",{className:"section-icon",children:"⭐"}),a.jsx("span",{className:"font-display",children:"Daily Arrivals"}),a.jsx("span",{className:"recommended-tag",children:"RECOMMENDED"})]}),a.jsxs("div",{className:"refresh-countdown",children:["🔄 Refreshes in ",Lp(n)]})]}),a.jsx("div",{className:"shop-items-grid",children:l.map(o=>a.jsx(as,{itemId:o.item_id,price:o.price,currency:o.currency,userGold:e,onBuy:t},o.item_id))})]}),a.jsxs("div",{className:"shop-section",children:[a.jsx("div",{className:"shop-section-header",children:a.jsxs("div",{className:"shop-section-title",children:[a.jsx("span",{className:"section-icon",children:"🛍"}),a.jsx("span",{className:"font-display",children:"General Store"}),a.jsx("span",{className:"always-tag",children:"ALWAYS OPEN"})]})}),a.jsx("div",{className:"shop-items-grid",children:Dp.items.map(o=>a.jsx(as,{itemId:o.item_id,price:o.price,currency:o.currency,userGold:e,onBuy:t},o.item_id))})]}),a.jsx("div",{className:"shop-tip",children:"💡 Items go directly to your bag. Equip them in the Equipment screen."}),a.jsx("style",{children:`
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

        .refresh-countdown {
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
      `})]})}function Ip({effects:e,levelUpData:t}){return a.jsxs(a.Fragment,{children:[e.map(n=>a.jsxs("div",{className:"reward-float",style:{left:n.x!=null?`${n.x}px`:"50%",top:n.y!=null?`${n.y}px`:"40%",transform:n.x==null?"translateX(-50%)":void 0},children:[a.jsxs("span",{style:{color:"var(--xp-blue)",textShadow:"0 0 10px rgba(79,195,247,0.5)"},children:["+",n.xp," XP"]}),a.jsxs("span",{style:{color:"var(--gold)",textShadow:"0 0 10px var(--gold-glow)",fontSize:"0.8rem"},children:["+",n.gold," 💰"]})]},n.id)),t&&a.jsxs("div",{className:"level-up-banner",children:[a.jsx("div",{className:"level-up-glow"}),a.jsx("div",{className:"level-up-icon",children:"⭐"}),a.jsxs("div",{className:"level-up-text",children:[a.jsx("div",{className:"level-up-title font-display",children:"LEVEL UP!"}),a.jsxs("div",{className:"level-up-subtitle",children:["You reached Level ",a.jsx("strong",{children:t.level})]}),t.talentPoints>0&&a.jsxs("div",{className:"level-up-bonus",children:["🌟 +",t.talentPoints," Talent Point",t.talentPoints>1?"s":""," — check the Talents tab!"]})]}),a.jsx("div",{className:"level-up-icon",children:"⭐"})]}),a.jsx("style",{children:`
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
      `})]})}function Rp(){const[e,t]=E.useState(()=>{try{const w=localStorage.getItem("ql_user");return w?JSON.parse(w):ns}catch{return ns}}),[n,r]=E.useState(()=>{try{const w=localStorage.getItem("ql_tasks");return w?JSON.parse(w):ts}catch{return ts}}),[l,o]=E.useState(()=>{try{const w=localStorage.getItem("ql_history");return w?JSON.parse(w):rs}catch{return rs}}),[i,s]=E.useState([]),[u,d]=E.useState(null);E.useEffect(()=>{localStorage.setItem("ql_user",JSON.stringify(e))},[e]),E.useEffect(()=>{localStorage.setItem("ql_tasks",JSON.stringify(n))},[n]),E.useEffect(()=>{localStorage.setItem("ql_history",JSON.stringify(l))},[l]);const h=E.useCallback((w,j,N=null,k=null)=>{const I=Pt();s(C=>[...C,{id:I,xp:w,gold:j,x:N,y:k}]),setTimeout(()=>{s(C=>C.filter(_=>_.id!==I))},2e3)},[]),g=E.useCallback((w,j)=>{t(N=>{const k=xp(N.level,N.xp,w);return k.leveledUp&&(d({level:k.level,talentPoints:k.talentPointsEarned}),setTimeout(()=>d(null),4e3)),{...N,xp:k.xp,xpToNext:k.xpToNext,level:k.level,gold:N.gold+j,talentPoints:N.talentPoints+k.talentPointsEarned}})},[]),y=E.useCallback((w,j=null)=>{r(N=>{const k=N.find(_=>_.id===w);if(!k)return N;const{xp:I,gold:C}=bc(k,e.unlockedTalents);return g(I,C),h(I,C),o(_=>[{id:Pt(),title:k.title,completedAt:new Date().toISOString(),xpEarned:I,goldEarned:C},..._]),N.filter(_=>_.id!==w)})},[e.unlockedTalents,g,h]),S=E.useCallback((w,j)=>{r(N=>N.map(k=>{var C;if(k.id!==w)return k;if(!((C=k.subtasks.find(_=>_.id===j))==null?void 0:C.done)){const{xp:_,gold:L}=gp(e.unlockedTalents);g(_,L),h(_,L)}return{...k,subtasks:k.subtasks.map(_=>_.id===j?{..._,done:!_.done}:_)}}))},[e.unlockedTalents,g,h]),p=E.useCallback(w=>{const j={id:Pt(),status:"pending",subtasks:[],createdAt:new Date().toISOString(),completedAt:null,isOverdue:!1,tags:[],notes:"",...w};return r(N=>[j,...N]),j},[]),x=E.useCallback((w,j=2)=>{r(N=>N.map(k=>{if(k.id!==w)return k;const I=new Date(Date.now()+j*60*60*1e3).toISOString();return{...k,dueAt:I,isOverdue:!1}}))},[]),P=E.useCallback(w=>{r(j=>j.filter(N=>N.id!==w))},[]),f=E.useCallback((w,j)=>{t(N=>N.talentPoints<j?N:{...N,talentPoints:N.talentPoints-j,unlockedTalents:[...N.unlockedTalents,w]})},[]),c=E.useCallback((w,j)=>{const{xp:N,gold:k}=yp(w,j,e.unlockedTalents);return g(N,k),h(N,k),{xp:N,gold:k}},[e.unlockedTalents,g,h]),m=E.useCallback(w=>{t(j=>({...j,gold:Math.max(0,j.gold+w)}))},[]),v=E.useCallback(w=>{g(w,0)},[g]);return{user:e,tasks:n,history:l,rewardEffects:i,levelUpData:u,completeTask:y,toggleSubtask:S,addTask:p,snoozeTask:x,deleteTask:P,unlockTalent:f,completeFocusSession:c,showReward:h,applyGoldReward:m,applyXpReward:v}}function Fp(e){const[t,n]=E.useState(null),r=E.useRef(null),l=E.useCallback((d,h=25)=>{const g=h*60;n({taskId:d.id,taskTitle:d.title,totalSeconds:g,secondsLeft:g,paused:!1,minutes:h})},[]),o=E.useCallback(()=>{n(d=>d?{...d,paused:!0}:null)},[]),i=E.useCallback(()=>{n(d=>d?{...d,paused:!1}:null)},[]),s=E.useCallback((d=!1)=>{if(t&&e){const h=Math.round((t.totalSeconds-t.secondsLeft)/60);e(h,d)}n(null)},[t,e]);return E.useEffect(()=>{if(!t||t.paused){clearInterval(r.current);return}return r.current=setInterval(()=>{n(d=>{if(!d)return null;const h=d.secondsLeft-1;return h<=0?(clearInterval(r.current),e&&e(d.minutes,!0),null):{...d,secondsLeft:h}})},1e3),()=>clearInterval(r.current)},[t==null?void 0:t.paused,t==null?void 0:t.taskId,e]),{session:t,start:l,pause:o,resume:i,stop:s,formatTime:d=>{const h=Math.floor(d/60).toString().padStart(2,"0"),g=(d%60).toString().padStart(2,"0");return`${h}:${g}`}}}const lr=[{id:"slime_distract",name:"Distracto Slime",tier:1,max_hp:400,regen:0,armor:0,gold_drop:[8,18],xp_drop:12,sprite:"🟢",color:"#5CDD8B",flavor:"It jiggles every time you check your phone.",loot_table:[{item:"ring_focus_1",chance:.12},{item:"boots_speed_1",chance:.06}]},{id:"goblin_procrastin",name:"Procrastin Goblin",tier:1,max_hp:650,regen:0,armor:1,gold_drop:[12,25],xp_drop:20,sprite:"👺",color:"#FF6584",flavor:`"I'll deal with you in a minute." It has been 3 hours.`,loot_table:[{item:"gloves_grip_1",chance:.1},{item:"ring_focus_1",chance:.08}]},{id:"troll_overwhelm",name:"Overwhelm Troll",tier:2,max_hp:3500,regen:1,armor:3,gold_drop:[40,80],xp_drop:80,sprite:"🧌",color:"#B39DDB",flavor:"It throws seventeen tasks at you at once.",loot_table:[{item:"helmet_clarity_1",chance:.15},{item:"chest_focus_1",chance:.08},{item:"necklace_resolve_1",chance:.06}]},{id:"witch_avoidance",name:"Avoidance Witch",tier:2,max_hp:5e3,regen:2,armor:4,gold_drop:[60,120],xp_drop:110,sprite:"🧙",color:"#4FC3F7",flavor:'She whispers "you can do it tomorrow."',loot_table:[{item:"ring_focus_2",chance:.1},{item:"boots_speed_2",chance:.08},{item:"legs_endure_1",chance:.07}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:3}]},{id:"boss_procrastination",name:"The Eternal Procrastinator",tier:3,max_hp:5e4,regen:5,armor:10,gold_drop:[500,800],xp_drop:300,sprite:"👑",color:"#F5C842",flavor:`"I'll fight you properly once conditions are perfect." It never happens.`,isBoss:!0,loot_table:[{item:"ring_focus_2",chance:1},{item:"necklace_resolve_1",chance:.5},{item:"chest_focus_1",chance:.4}],phases:[{hp_threshold:.75,effect:"armor_boost",effect_value:5},{hp_threshold:.5,effect:"slow_player",effect_value:.5},{hp_threshold:.25,effect:"regen_boost",effect_value:10}]},{id:"boss_burnout",name:"Lord Burnout",tier:3,max_hp:8e4,regen:8,armor:15,gold_drop:[800,1200],xp_drop:500,sprite:"🔥",color:"#FF3860",flavor:"You have faced him before. You will face him again.",isBoss:!0,loot_table:[{item:"chest_focus_1",chance:1},{item:"helmet_clarity_1",chance:.6},{item:"ring_focus_2",chance:.4}],phases:[{hp_threshold:.5,effect:"regen_boost",effect_value:15},{hp_threshold:.2,effect:"armor_boost",effect_value:8}]}],ss=lr.map(e=>e.id);function ro(e){return lr.find(t=>t.id===e)||lr[0]}function Ap(e){const t=ss.indexOf(e);return t===-1||t>=ss.length-1?{...lr[0],_loop:!0}:lr[t+1]}const $p={head:null,body:null,gloves:null,legs:null,boots:null,ring:null,ring2:null,necklace:null},us={currentMonsterId:"slime_distract",monsterHp:null,monstersKilled:0,equipped:$p,inventory:[],activeBuffs:[],phaseEffects:[],lastActiveMs:Date.now(),momentumCount:0,momentumWindowStart:Date.now(),lowEnergyMode:!1,pendingOfflineGains:null,killRewardPending:null};function Bp({user:e,focusSessionActive:t=!1,onGoldEarned:n,onXpEarned:r,onLootDrop:l}){const[o,i]=E.useState(()=>{try{const _=localStorage.getItem("ql_combat");if(_){const L=JSON.parse(_);return{...us,...L,activeBuffs:[],phaseEffects:[]}}}catch{}return us}),[s,u]=E.useState([]),d=E.useRef(null),h=E.useRef(o);h.current=o,E.useEffect(()=>{const{activeBuffs:_,phaseEffects:L,pendingOfflineGains:F,killRewardPending:Q,...B}=o;B.lastActiveMs=Date.now(),localStorage.setItem("ql_combat",JSON.stringify(B))},[o]);const g=ro(o.currentMonsterId),y=o.monsterHp??g.max_hp,S=zr(e.level,o.equipped),p=sp(o.momentumCount),x=ap(t);E.useEffect(()=>{const _=localStorage.getItem("ql_combat");if(_)try{const F=JSON.parse(_).lastActiveMs||Date.now();if(Date.now()-F>6e4){const B=dp(S,F,Date.now());B.damage>0&&(i(J=>({...J,pendingOfflineGains:B})),f(B.damage,!1,!0),B.gold>0&&n&&n(B.gold))}}catch{}},[]);const P=E.useCallback((_,L,F=!1)=>{const Q=Pt(),B=30+Math.random()*40;u(J=>[...J,{id:Q,value:_,isCrit:L,isOffline:F,x:B}]),setTimeout(()=>{u(J=>J.filter(ke=>ke.id!==Q))},1400)},[]),f=E.useCallback((_,L=!1,F=!1)=>{i(Q=>{const B=ro(Q.currentMonsterId),J=Q.monsterHp??B.max_hp,ke=up(_,B.armor),z=Math.max(0,J-ke),M=cp(B,z,J);let D=[...Q.phaseEffects||[]];if(M&&D.push({id:Pt(),...M,expiresAt:1/0}),z<=0){const A=fp(B);n&&n(A.gold),r&&r(A.xp),A.loot.length>0&&l&&l(A.loot,B.name);const X=Ap(Q.currentMonsterId);return{...Q,currentMonsterId:X.id,monsterHp:X.max_hp,monstersKilled:Q.monstersKilled+1,phaseEffects:[],killRewardPending:{...A,monsterName:B.name,isBoss:B.isBoss}}}return{...Q,monsterHp:z,phaseEffects:D}}),F||P(_,L)},[n,r,l,P]);E.useEffect(()=>(d.current=setInterval(()=>{const _=h.current,L=ro(_.currentMonsterId),F=zr(e.level,_.equipped),Q=[..._.activeBuffs||[],..._.phaseEffects||[]],B=Date.now(),J=(_.activeBuffs||[]).filter(D=>D.expiresAt>B);J.length!==(_.activeBuffs||[]).length&&i(D=>({...D,activeBuffs:J}));const{damage:ke,isCrit:z}=ip(F,Q),M=Math.round(ke*p*x);L.regen>0&&i(D=>{const A=D.monsterHp??L.max_hp,X=Math.min(L.max_hp,A+L.regen);return{...D,monsterHp:X}}),f(M,z)},op),()=>clearInterval(d.current)),[e.level,o.equipped,p,x]);const c=E.useCallback(()=>{const _=zr(e.level,o.equipped),L=Math.round(_.attack*5*p),F=Math.random()<Math.min(.8,_.critChance+.2),Q=F?Math.round(L*_.critDamage):L,B={id:Pt(),type:"attack_mult",label:"Task Focus!",value:1.5,expiresAt:Date.now()+1e4,icon:"⚡"};i(J=>({...J,activeBuffs:[...(J.activeBuffs||[]).filter(ke=>ke.id!=="focus_boost"),B],momentumCount:J.momentumCount+1})),f(Q,F)},[e.level,o.equipped,p,f]),m=E.useCallback(()=>{const _=zr(e.level,o.equipped),L=Math.round(_.attack*1.2);f(L,!1)},[e.level,o.equipped,f]),v=E.useCallback((_,L)=>{i(F=>{const Q=F.equipped[L],B=Q?[...F.inventory,Q]:[...F.inventory],J=B.filter((ke,z)=>!(ke===_&&z===B.lastIndexOf(_)));return{...F,equipped:{...F.equipped,[L]:_},inventory:J}})},[]),w=E.useCallback(_=>{i(L=>{const F=L.equipped[_];return F?{...L,equipped:{...L.equipped,[_]:null},inventory:[...L.inventory,F]}:L})},[]),j=E.useCallback(_=>{i(L=>({...L,inventory:[...L.inventory,_]}))},[]),N=E.useCallback((_,L,F)=>F(L)?(j(_),!0):!1,[j]),k=E.useCallback(()=>{i(_=>({..._,killRewardPending:null}))},[]),I=E.useCallback(()=>{i(_=>({..._,pendingOfflineGains:null}))},[]),C=E.useCallback(()=>{i(_=>({..._,lowEnergyMode:!_.lowEnergyMode}))},[]);return{monster:g,currentHp:y,monsterMaxHp:g.max_hp,playerStats:S,equipped:o.equipped,inventory:o.inventory,activeBuffs:o.activeBuffs||[],monstersKilled:o.monstersKilled,floatingNumbers:s,lowEnergyMode:o.lowEnergyMode,killRewardPending:o.killRewardPending,pendingOfflineGains:o.pendingOfflineGains,momentumCount:o.momentumCount,momentumMult:p,onTaskComplete:c,onSubtaskComplete:m,equipItem:v,unequipItem:w,addToInventory:j,buyItem:N,dismissKillReward:k,dismissOfflineGains:I,toggleLowEnergy:C}}function Up(){const[e,t]=E.useState("dashboard"),[n,r]=E.useState(!1),{user:l,tasks:o,history:i,rewardEffects:s,levelUpData:u,completeTask:d,toggleSubtask:h,addTask:g,snoozeTask:y,deleteTask:S,unlockTalent:p,completeFocusSession:x,applyGoldReward:P,applyXpReward:f}=Rp(),c=E.useCallback((C,_)=>{C>0&&x(C,_)},[x]),m=Fp(c),v=Bp({user:l,focusSessionActive:!!m.session,onGoldEarned:C=>P(C),onXpEarned:C=>f(C),onLootDrop:(C,_)=>{C.forEach(L=>v.addToInventory(L)),r(!0)}}),w=E.useCallback(C=>{d(C),v.onTaskComplete()},[d,v]),j=E.useCallback((C,_)=>{h(C,_),v.onSubtaskComplete()},[h,v]),N=E.useCallback((C,_)=>l.gold<_?!1:(P(-_),v.addToInventory(C),!0),[l.gold,P,v]);function k(C){m.start(C,25),t("focus")}function I(C){C==="inventory"&&r(!1),t(C)}return a.jsxs("div",{className:"app-layout",children:[a.jsx(np,{user:l,activeView:e,onNavigate:I,pendingCount:o.filter(C=>C.status==="pending").length,newLoot:n}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[a.jsx(pp,{monster:v.monster,currentHp:v.currentHp,playerStats:v.playerStats,activeBuffs:v.activeBuffs,floatingNumbers:v.floatingNumbers,momentumMult:v.momentumMult,lowEnergyMode:v.lowEnergyMode,monstersKilled:v.monstersKilled,onToggleLowEnergy:v.toggleLowEnergy}),a.jsxs("main",{className:"main-content",children:[e==="dashboard"&&a.jsx(jp,{user:l,tasks:o,onComplete:w,onToggleSubtask:j,onSnooze:y,onDelete:S,onAddTask:g,onStartFocus:k}),e==="focus"&&a.jsx(Ep,{session:m.session,onStart:m.start,onPause:m.pause,onResume:m.resume,onStop:m.stop,formatTime:m.formatTime,tasks:o.filter(C=>C.status==="pending")}),e==="inventory"&&a.jsx(Pp,{combat:v,userLevel:l.level}),e==="shop"&&a.jsx(Op,{userGold:l.gold,onBuy:N}),e==="rewards"&&a.jsx(zp,{user:l,history:i}),e==="talents"&&a.jsx(Tp,{user:l,onUnlock:p})]})]}),a.jsx(Ip,{effects:s,levelUpData:u}),a.jsx(mp,{reward:v.killRewardPending,onDismiss:v.dismissKillReward}),a.jsx(vp,{gains:v.pendingOfflineGains,onDismiss:v.dismissOfflineGains})]})}lo.createRoot(document.getElementById("root")).render(a.jsx(Uc.StrictMode,{children:a.jsx(Up,{})}));
