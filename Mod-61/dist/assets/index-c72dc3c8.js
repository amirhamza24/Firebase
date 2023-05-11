(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function vy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mo={},yy={get exports(){return Mo},set exports(e){Mo=e}},_s={},T={},wy={get exports(){return T},set exports(e){T=e}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),_y=Symbol.for("react.portal"),Ey=Symbol.for("react.fragment"),ky=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),Iy=Symbol.for("react.provider"),Cy=Symbol.for("react.context"),by=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),Py=Symbol.for("react.memo"),xy=Symbol.for("react.lazy"),Bf=Symbol.iterator;function Ry(e){return e===null||typeof e!="object"?null:(e=Bf&&e[Bf]||e["@@iterator"],typeof e=="function"?e:null)}var hp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pp=Object.assign,mp={};function ri(e,t,n){this.props=e,this.context=t,this.refs=mp,this.updater=n||hp}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gp(){}gp.prototype=ri.prototype;function uc(e,t,n){this.props=e,this.context=t,this.refs=mp,this.updater=n||hp}var cc=uc.prototype=new gp;cc.constructor=uc;pp(cc,ri.prototype);cc.isPureReactComponent=!0;var Hf=Array.isArray,vp=Object.prototype.hasOwnProperty,fc={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function wp(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)vp.call(t,r)&&!yp.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ka,type:e,key:a,ref:o,props:i,_owner:fc.current}}function Ay(e,t){return{$$typeof:ka,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ka}function Ny(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wf=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ny(""+e.key):t.toString(36)}function yo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ka:case _y:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+nl(o,0):r,Hf(i)?(n="",e!=null&&(n=e.replace(Wf,"$&/")+"/"),yo(i,t,n,"",function(u){return u})):i!=null&&(dc(i)&&(i=Ay(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Hf(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+nl(a,s);o+=yo(a,t,n,l,i)}else if(l=Ry(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+nl(a,s++),o+=yo(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(e,t,n){if(e==null)return e;var r=[],i=0;return yo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Oy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},wo={transition:null},Dy={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:wo,ReactCurrentOwner:fc};Q.Children={map:Ha,forEach:function(e,t,n){Ha(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ha(e,function(){t++}),t},toArray:function(e){return Ha(e,function(t){return t})||[]},only:function(e){if(!dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=ri;Q.Fragment=Ey;Q.Profiler=Sy;Q.PureComponent=uc;Q.StrictMode=ky;Q.Suspense=Ty;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pp({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=fc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)vp.call(t,l)&&!yp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ka,type:e.type,key:i,ref:a,props:r,_owner:o}};Q.createContext=function(e){return e={$$typeof:Cy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Iy,_context:e},e.Consumer=e};Q.createElement=wp;Q.createFactory=function(e){var t=wp.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:by,render:e}};Q.isValidElement=dc;Q.lazy=function(e){return{$$typeof:xy,_payload:{_status:-1,_result:e},_init:Oy}};Q.memo=function(e,t){return{$$typeof:Py,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=wo.transition;wo.transition={};try{e()}finally{wo.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return ze.current.useCallback(e,t)};Q.useContext=function(e){return ze.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};Q.useEffect=function(e,t){return ze.current.useEffect(e,t)};Q.useId=function(){return ze.current.useId()};Q.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return ze.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};Q.useRef=function(e){return ze.current.useRef(e)};Q.useState=function(e){return ze.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return ze.current.useTransition()};Q.version="18.2.0";(function(e){e.exports=Q})(wy);const hc=vy(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=T,My=Symbol.for("react.element"),Uy=Symbol.for("react.fragment"),Fy=Object.prototype.hasOwnProperty,zy=Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jy={key:!0,ref:!0,__self:!0,__source:!0};function _p(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Fy.call(t,r)&&!jy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:My,type:e,key:a,ref:o,props:i,_owner:zy.current}}_s.Fragment=Uy;_s.jsx=_p;_s.jsxs=_p;(function(e){e.exports=_s})(yy);const x=Mo.jsx,q=Mo.jsxs;var Wl={},Vl={},$y={get exports(){return Vl},set exports(e){Vl=e}},Xe={},Kl={},By={get exports(){return Kl},set exports(e){Kl=e}},Ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,B){var V=N.length;N.push(B);e:for(;0<V;){var Y=V-1>>>1,le=N[Y];if(0<i(le,B))N[Y]=B,N[V]=le,V=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],V=N.pop();if(V!==B){N[0]=V;e:for(var Y=0,le=N.length,zn=le>>>1;Y<zn;){var Nt=2*(Y+1)-1,tt=N[Nt],Ot=Nt+1,pr=N[Ot];if(0>i(tt,V))Ot<le&&0>i(pr,tt)?(N[Y]=pr,N[Ot]=V,Y=Ot):(N[Y]=tt,N[Nt]=V,Y=Nt);else if(Ot<le&&0>i(pr,V))N[Y]=pr,N[Ot]=V,Y=Ot;else break e}}return B}function i(N,B){var V=N.sortIndex-B.sortIndex;return V!==0?V:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,p=3,g=!1,y=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,t(l,B);else break;B=n(u)}}function v(N){if(_=!1,m(N),!y)if(n(l)!==null)y=!0,et(k);else{var B=n(u);B!==null&&Fn(v,B.startTime-N)}}function k(N,B){y=!1,_&&(_=!1,f(R),R=-1),g=!0;var V=p;try{for(m(B),d=n(l);d!==null&&(!(d.expirationTime>B)||N&&!Me());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,p=d.priorityLevel;var le=Y(d.expirationTime<=B);B=e.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&r(l),m(B)}else r(l);d=n(l)}if(d!==null)var zn=!0;else{var Nt=n(u);Nt!==null&&Fn(v,Nt.startTime-B),zn=!1}return zn}finally{d=null,p=V,g=!1}}var b=!1,P=null,R=-1,U=5,H=-1;function Me(){return!(e.unstable_now()-H<U)}function ct(){if(P!==null){var N=e.unstable_now();H=N;var B=!0;try{B=P(!0,N)}finally{B?ft():(b=!1,P=null)}}else b=!1}var ft;if(typeof h=="function")ft=function(){h(ct)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,At=Rt.port2;Rt.port1.onmessage=ct,ft=function(){At.postMessage(null)}}else ft=function(){S(ct,0)};function et(N){P=N,b||(b=!0,ft())}function Fn(N,B){R=S(function(){N(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,et(k))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var V=p;p=B;try{return N()}finally{p=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=p;p=N;try{return B()}finally{p=V}},e.unstable_scheduleCallback=function(N,B,V){var Y=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,N){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=V+le,N={id:c++,callback:B,priorityLevel:N,startTime:V,expirationTime:le,sortIndex:-1},V>Y?(N.sortIndex=V,t(u,N),n(l)===null&&N===n(u)&&(_?(f(R),R=-1):_=!0,Fn(v,V-Y))):(N.sortIndex=le,t(l,N),y||g||(y=!0,et(k))),N},e.unstable_shouldYield=Me,e.unstable_wrapCallback=function(N){var B=p;return function(){var V=p;p=B;try{return N.apply(this,arguments)}finally{p=V}}}})(Ep);(function(e){e.exports=Ep})(By);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=T,qe=Kl;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sp=new Set,Yi={};function cr(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Yi[e]=t,e=0;e<t.length;e++)Sp.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,Hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vf={},Kf={};function Wy(e){return Yl.call(Kf,e)?!0:Yl.call(Vf,e)?!1:Hy.test(e)?Kf[e]=!0:(Vf[e]=!0,!1)}function Vy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ky(e,t,n,r){if(t===null||typeof t>"u"||Vy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var pc=/[\-:]([a-z])/g;function mc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pc,mc);xe[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pc,mc);xe[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pc,mc);xe[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function gc(e,t,n,r){var i=xe.hasOwnProperty(t)?xe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ky(t,n,i,r)&&(n=null),r||i===null?Wy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),yr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),wc=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),bp=Symbol.for("react.offscreen"),Yf=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=Yf&&e[Yf]||e["@@iterator"],typeof e=="function"?e:null)}var he=Object.assign,rl;function Ti(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function al(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function Yy(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case yr:return"Portal";case Gl:return"Profiler";case vc:return"StrictMode";case Ql:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cp:return(e.displayName||"Context")+".Consumer";case Ip:return(e._context.displayName||"Context")+".Provider";case yc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wc:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case ln:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function Gy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===vc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qy(e){var t=Tp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Va(e){e._valueTracker||(e._valueTracker=Qy(e))}function Pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return he({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xp(e,t){t=t.checked,t!=null&&gc(e,"checked",t,!1)}function Zl(e,t){xp(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&eu(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eu(e,t,n){(t!=="number"||Uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function Mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return he({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Pi(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function Rp(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ap(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ap(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ka,Np=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ka.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qy=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(e){qy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Di[t]=Di[e]})});function Op(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Di.hasOwnProperty(e)&&Di[e]?(""+t).trim():t+"px"}function Dp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Op(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Xy=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(e,t){if(t){if(Xy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function iu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ou=null,Ur=null,Fr=null;function Jf(e){if(e=Ca(e)){if(typeof ou!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Cs(t),ou(e.stateNode,e.type,t))}}function Lp(e){Ur?Fr?Fr.push(e):Fr=[e]:Ur=e}function Mp(){if(Ur){var e=Ur,t=Fr;if(Fr=Ur=null,Jf(e),t)for(e=0;e<t.length;e++)Jf(t[e])}}function Up(e,t){return e(t)}function Fp(){}var ol=!1;function zp(e,t,n){if(ol)return e(t,n);ol=!0;try{return Up(e,t,n)}finally{ol=!1,(Ur!==null||Fr!==null)&&(Fp(),Mp())}}function Qi(e,t){var n=e.stateNode;if(n===null)return null;var r=Cs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var su=!1;if(Wt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){su=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{su=!1}function Jy(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Li=!1,Fo=null,zo=!1,lu=null,Zy={onError:function(e){Li=!0,Fo=e}};function e0(e,t,n,r,i,a,o,s,l){Li=!1,Fo=null,Jy.apply(Zy,arguments)}function t0(e,t,n,r,i,a,o,s,l){if(e0.apply(this,arguments),Li){if(Li){var u=Fo;Li=!1,Fo=null}else throw Error(C(198));zo||(zo=!0,lu=u)}}function fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zf(e){if(fr(e)!==e)throw Error(C(188))}function n0(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Zf(i),e;if(a===r)return Zf(i),t;a=a.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function $p(e){return e=n0(e),e!==null?Bp(e):null}function Bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bp(e);if(t!==null)return t;e=e.sibling}return null}var Hp=qe.unstable_scheduleCallback,ed=qe.unstable_cancelCallback,r0=qe.unstable_shouldYield,i0=qe.unstable_requestPaint,ge=qe.unstable_now,a0=qe.unstable_getCurrentPriorityLevel,Ec=qe.unstable_ImmediatePriority,Wp=qe.unstable_UserBlockingPriority,jo=qe.unstable_NormalPriority,o0=qe.unstable_LowPriority,Vp=qe.unstable_IdlePriority,Es=null,bt=null;function s0(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:c0,l0=Math.log,u0=Math.LN2;function c0(e){return e>>>=0,e===0?32:31-(l0(e)/u0|0)|0}var Ya=64,Ga=4194304;function xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=xi(s):(a&=o,a!==0&&(r=xi(a)))}else o=n&~i,o!==0?r=xi(o):a!==0&&(r=xi(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-yt(t),i=1<<n,r|=e[n],t&=~i;return r}function f0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-yt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=f0(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kp(){var e=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),e}function sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=n}function h0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-yt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function kc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Yp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gp,Sc,Qp,qp,Xp,cu=!1,Qa=[],wn=null,_n=null,En=null,qi=new Map,Xi=new Map,cn=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function td(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":qi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(t.pointerId)}}function wi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ca(t),t!==null&&Sc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function m0(e,t,n,r,i){switch(t){case"focusin":return wn=wi(wn,e,t,n,r,i),!0;case"dragenter":return _n=wi(_n,e,t,n,r,i),!0;case"mouseover":return En=wi(En,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return qi.set(a,wi(qi.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Xi.set(a,wi(Xi.get(a)||null,e,t,n,r,i)),!0}return!1}function Jp(e){var t=Hn(e.target);if(t!==null){var n=fr(t);if(n!==null){if(t=n.tag,t===13){if(t=jp(n),t!==null){e.blockedOn=t,Xp(e.priority,function(){Qp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return t=Ca(n),t!==null&&Sc(t),e.blockedOn=n,!1;t.shift()}return!0}function nd(e,t,n){_o(e)&&n.delete(t)}function g0(){cu=!1,wn!==null&&_o(wn)&&(wn=null),_n!==null&&_o(_n)&&(_n=null),En!==null&&_o(En)&&(En=null),qi.forEach(nd),Xi.forEach(nd)}function _i(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,g0)))}function Ji(e){function t(i){return _i(i,e)}if(0<Qa.length){_i(Qa[0],e);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&_i(wn,e),_n!==null&&_i(_n,e),En!==null&&_i(En,e),qi.forEach(t),Xi.forEach(t),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)Jp(n),n.blockedOn===null&&cn.shift()}var zr=Jt.ReactCurrentBatchConfig,Bo=!0;function v0(e,t,n,r){var i=ee,a=zr.transition;zr.transition=null;try{ee=1,Ic(e,t,n,r)}finally{ee=i,zr.transition=a}}function y0(e,t,n,r){var i=ee,a=zr.transition;zr.transition=null;try{ee=4,Ic(e,t,n,r)}finally{ee=i,zr.transition=a}}function Ic(e,t,n,r){if(Bo){var i=fu(e,t,n,r);if(i===null)vl(e,t,r,Ho,n),td(e,r);else if(m0(i,e,t,n,r))r.stopPropagation();else if(td(e,r),t&4&&-1<p0.indexOf(e)){for(;i!==null;){var a=Ca(i);if(a!==null&&Gp(a),a=fu(e,t,n,r),a===null&&vl(e,t,r,Ho,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var Ho=null;function fu(e,t,n,r){if(Ho=null,e=_c(r),e=Hn(e),e!==null)if(t=fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function Zp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case Ec:return 1;case Wp:return 4;case jo:case o0:return 16;case Vp:return 536870912;default:return 16}default:return 16}}var gn=null,Cc=null,Eo=null;function em(){if(Eo)return Eo;var e,t=Cc,n=t.length,r,i="value"in gn?gn.value:gn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Eo=i.slice(e,1<r?1-r:void 0)}function ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qa(){return!0}function rd(){return!1}function Je(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qa:rd,this.isPropagationStopped=rd,this}return he(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),t}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=Je(ii),Ia=he({},ii,{view:0,detail:0}),w0=Je(Ia),ll,ul,Ei,ks=he({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(ll=e.screenX-Ei.screenX,ul=e.screenY-Ei.screenY):ul=ll=0,Ei=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),id=Je(ks),_0=he({},ks,{dataTransfer:0}),E0=Je(_0),k0=he({},Ia,{relatedTarget:0}),cl=Je(k0),S0=he({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),I0=Je(S0),C0=he({},ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),b0=Je(C0),T0=he({},ii,{data:0}),ad=Je(T0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function Tc(){return A0}var N0=he({},Ia,{key:function(e){if(e.key){var t=P0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O0=Je(N0),D0=he({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=Je(D0),L0=he({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),M0=Je(L0),U0=he({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Je(U0),z0=he({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Je(z0),$0=[9,13,27,32],Pc=Wt&&"CompositionEvent"in window,Mi=null;Wt&&"documentMode"in document&&(Mi=document.documentMode);var B0=Wt&&"TextEvent"in window&&!Mi,tm=Wt&&(!Pc||Mi&&8<Mi&&11>=Mi),sd=String.fromCharCode(32),ld=!1;function nm(e,t){switch(e){case"keyup":return $0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _r=!1;function H0(e,t){switch(e){case"compositionend":return rm(t);case"keypress":return t.which!==32?null:(ld=!0,sd);case"textInput":return e=t.data,e===sd&&ld?null:e;default:return null}}function W0(e,t){if(_r)return e==="compositionend"||!Pc&&nm(e,t)?(e=em(),Eo=Cc=gn=null,_r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tm&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function im(e,t,n,r){Lp(r),t=Wo(t,"onChange"),0<t.length&&(n=new bc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ui=null,Zi=null;function K0(e){mm(e,0)}function Ss(e){var t=Sr(e);if(Pp(t))return e}function Y0(e,t){if(e==="change")return t}var am=!1;if(Wt){var fl;if(Wt){var dl="oninput"in document;if(!dl){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),dl=typeof cd.oninput=="function"}fl=dl}else fl=!1;am=fl&&(!document.documentMode||9<document.documentMode)}function fd(){Ui&&(Ui.detachEvent("onpropertychange",om),Zi=Ui=null)}function om(e){if(e.propertyName==="value"&&Ss(Zi)){var t=[];im(t,Zi,e,_c(e)),zp(K0,t)}}function G0(e,t,n){e==="focusin"?(fd(),Ui=t,Zi=n,Ui.attachEvent("onpropertychange",om)):e==="focusout"&&fd()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(Zi)}function q0(e,t){if(e==="click")return Ss(t)}function X0(e,t){if(e==="input"||e==="change")return Ss(t)}function J0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:J0;function ea(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yl.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function dd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hd(e,t){var n=dd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dd(n)}}function sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lm(){for(var e=window,t=Uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uo(e.document)}return t}function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Z0(e){var t=lm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sm(n.ownerDocument.documentElement,n)){if(r!==null&&xc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=hd(n,a);var o=hd(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var e1=Wt&&"documentMode"in document&&11>=document.documentMode,Er=null,du=null,Fi=null,hu=!1;function pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Er==null||Er!==Uo(r)||(r=Er,"selectionStart"in r&&xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fi&&ea(Fi,r)||(Fi=r,r=Wo(du,"onSelect"),0<r.length&&(t=new bc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Er)))}function Xa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},hl={},um={};Wt&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Is(e){if(hl[e])return hl[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in um)return hl[e]=t[n];return e}var cm=Is("animationend"),fm=Is("animationiteration"),dm=Is("animationstart"),hm=Is("transitionend"),pm=new Map,md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){pm.set(e,t),cr(t,[e])}for(var pl=0;pl<md.length;pl++){var ml=md[pl],t1=ml.toLowerCase(),n1=ml[0].toUpperCase()+ml.slice(1);Dn(t1,"on"+n1)}Dn(cm,"onAnimationEnd");Dn(fm,"onAnimationIteration");Dn(dm,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(hm,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function gd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,t0(r,t,void 0,e),e.currentTarget=null}function mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;gd(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;gd(i,s,u),a=l}}}if(zo)throw e=lu,zo=!1,lu=null,e}function ie(e,t){var n=t[yu];n===void 0&&(n=t[yu]=new Set);var r=e+"__bubble";n.has(r)||(gm(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),gm(n,e,r,t)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[Ja]){e[Ja]=!0,Sp.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ja]||(t[Ja]=!0,gl("selectionchange",!1,t))}}function gm(e,t,n,r){switch(Zp(t)){case 1:var i=v0;break;case 4:i=y0;break;default:i=Ic}n=i.bind(null,t,n,e),i=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Hn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}zp(function(){var u=a,c=_c(n),d=[];e:{var p=pm.get(e);if(p!==void 0){var g=bc,y=e;switch(e){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":g=O0;break;case"focusin":y="focus",g=cl;break;case"focusout":y="blur",g=cl;break;case"beforeblur":case"afterblur":g=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=E0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=M0;break;case cm:case fm:case dm:g=I0;break;case hm:g=F0;break;case"scroll":g=w0;break;case"wheel":g=j0;break;case"copy":case"cut":case"paste":g=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=od}var _=(t&4)!==0,S=!_&&e==="scroll",f=_?p!==null?p+"Capture":null:p;_=[];for(var h=u,m;h!==null;){m=h;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Qi(h,f),v!=null&&_.push(na(h,v,m)))),S)break;h=h.return}0<_.length&&(p=new g(p,y,null,n,c),d.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==au&&(y=n.relatedTarget||n.fromElement)&&(Hn(y)||y[Vt]))break e;if((g||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Hn(y):null,y!==null&&(S=fr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=id,v="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(_=od,v="onPointerLeave",f="onPointerEnter",h="pointer"),S=g==null?p:Sr(g),m=y==null?p:Sr(y),p=new _(v,h+"leave",g,n,c),p.target=S,p.relatedTarget=m,v=null,Hn(c)===u&&(_=new _(f,h+"enter",y,n,c),_.target=m,_.relatedTarget=S,v=_),S=v,g&&y)t:{for(_=g,f=y,h=0,m=_;m;m=vr(m))h++;for(m=0,v=f;v;v=vr(v))m++;for(;0<h-m;)_=vr(_),h--;for(;0<m-h;)f=vr(f),m--;for(;h--;){if(_===f||f!==null&&_===f.alternate)break t;_=vr(_),f=vr(f)}_=null}else _=null;g!==null&&vd(d,p,g,_,!1),y!==null&&S!==null&&vd(d,S,y,_,!0)}}e:{if(p=u?Sr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=Y0;else if(ud(p))if(am)k=X0;else{k=Q0;var b=G0}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=q0);if(k&&(k=k(e,u))){im(d,k,n,c);break e}b&&b(e,p,u),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&eu(p,"number",p.value)}switch(b=u?Sr(u):window,e){case"focusin":(ud(b)||b.contentEditable==="true")&&(Er=b,du=u,Fi=null);break;case"focusout":Fi=du=Er=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,pd(d,n,c);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":pd(d,n,c)}var P;if(Pc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _r?nm(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(tm&&n.locale!=="ko"&&(_r||R!=="onCompositionStart"?R==="onCompositionEnd"&&_r&&(P=em()):(gn=c,Cc="value"in gn?gn.value:gn.textContent,_r=!0)),b=Wo(u,R),0<b.length&&(R=new ad(R,e,null,n,c),d.push({event:R,listeners:b}),P?R.data=P:(P=rm(n),P!==null&&(R.data=P)))),(P=B0?H0(e,n):W0(e,n))&&(u=Wo(u,"onBeforeInput"),0<u.length&&(c=new ad("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}mm(d,t)})}function na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Qi(e,n),a!=null&&r.unshift(na(e,a,i)),a=Qi(e,t),a!=null&&r.push(na(e,a,i))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Qi(n,a),l!=null&&o.unshift(na(n,l,s))):i||(l=Qi(n,a),l!=null&&o.push(na(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var i1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function yd(e){return(typeof e=="string"?e:""+e).replace(i1,`
`).replace(a1,"")}function Za(e,t,n){if(t=yd(t),yd(e)!==t&&n)throw Error(C(425))}function Vo(){}var pu=null,mu=null;function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,s1=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(e){return wd.resolve(null).then(e).catch(l1)}:vu;function l1(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ji(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ji(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ai=Math.random().toString(36).slice(2),It="__reactFiber$"+ai,ra="__reactProps$"+ai,Vt="__reactContainer$"+ai,yu="__reactEvents$"+ai,u1="__reactListeners$"+ai,c1="__reactHandles$"+ai;function Hn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_d(e);e!==null;){if(n=e[It])return n;e=_d(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){return e=e[It]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Cs(e){return e[ra]||null}var wu=[],Ir=-1;function Ln(e){return{current:e}}function oe(e){0>Ir||(e.current=wu[Ir],wu[Ir]=null,Ir--)}function re(e,t){Ir++,wu[Ir]=e.current,e.current=t}var Rn={},De=Ln(Rn),He=Ln(!1),Jn=Rn;function Gr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function We(e){return e=e.childContextTypes,e!=null}function Ko(){oe(He),oe(De)}function Ed(e,t,n){if(De.current!==Rn)throw Error(C(168));re(De,t),re(He,n)}function vm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Gy(e)||"Unknown",i));return he({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Jn=De.current,re(De,e),re(He,He.current),!0}function kd(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=vm(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,oe(He),oe(De),re(De,e)):oe(He),re(He,n)}var Mt=null,bs=!1,wl=!1;function ym(e){Mt===null?Mt=[e]:Mt.push(e)}function f1(e){bs=!0,ym(e)}function Mn(){if(!wl&&Mt!==null){wl=!0;var e=0,t=ee;try{var n=Mt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,bs=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(e+1)),Hp(Ec,Mn),i}finally{ee=t,wl=!1}}return null}var Cr=[],br=0,Go=null,Qo=0,it=[],at=0,Zn=null,Ft=1,zt="";function jn(e,t){Cr[br++]=Qo,Cr[br++]=Go,Go=e,Qo=t}function wm(e,t,n){it[at++]=Ft,it[at++]=zt,it[at++]=Zn,Zn=e;var r=Ft;e=zt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var a=32-yt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ft=1<<32-yt(t)+i|n<<i|r,zt=a+e}else Ft=1<<a|n<<i|r,zt=e}function Rc(e){e.return!==null&&(jn(e,1),wm(e,1,0))}function Ac(e){for(;e===Go;)Go=Cr[--br],Cr[br]=null,Qo=Cr[--br],Cr[br]=null;for(;e===Zn;)Zn=it[--at],it[at]=null,zt=it[--at],it[at]=null,Ft=it[--at],it[at]=null}var Qe=null,Ge=null,ue=!1,gt=null;function _m(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ge=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:Ft,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ge=null,!0):!1;default:return!1}}function _u(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eu(e){if(ue){var t=Ge;if(t){var n=t;if(!Sd(e,t)){if(_u(e))throw Error(C(418));t=kn(n.nextSibling);var r=Qe;t&&Sd(e,t)?_m(r,n):(e.flags=e.flags&-4097|2,ue=!1,Qe=e)}}else{if(_u(e))throw Error(C(418));e.flags=e.flags&-4097|2,ue=!1,Qe=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function eo(e){if(e!==Qe)return!1;if(!ue)return Id(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gu(e.type,e.memoizedProps)),t&&(t=Ge)){if(_u(e))throw Em(),Error(C(418));for(;t;)_m(e,t),t=kn(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Qe?kn(e.stateNode.nextSibling):null;return!0}function Em(){for(var e=Ge;e;)e=kn(e.nextSibling)}function Qr(){Ge=Qe=null,ue=!1}function Nc(e){gt===null?gt=[e]:gt.push(e)}var d1=Jt.ReactCurrentBatchConfig;function ht(e,t){if(e&&e.defaultProps){t=he({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qo=Ln(null),Xo=null,Tr=null,Oc=null;function Dc(){Oc=Tr=Xo=null}function Lc(e){var t=qo.current;oe(qo),e._currentValue=t}function ku(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jr(e,t){Xo=e,Oc=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Oc!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(Xo===null)throw Error(C(308));Tr=e,Xo.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var Wn=null;function Mc(e){Wn===null?Wn=[e]:Wn.push(e)}function km(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Mc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,Mc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function So(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}function Cd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,r){var i=e.updateQueue;un=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var p=s.lane,g=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,_=s;switch(p=t,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(g,d,p):y,p==null)break e;d=he({},d,p);break e;case 2:un=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);tr|=o,e.lanes=o,e.memoizedState=d}}function bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Im=new kp.Component().refs;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:he({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ts={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Cn(e),a=Bt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Sn(e,a,i),t!==null&&(wt(t,e,i,r),So(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=Cn(e),a=Bt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Sn(e,a,i),t!==null&&(wt(t,e,i,r),So(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Cn(e),i=Bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Sn(e,i,r),t!==null&&(wt(t,e,r,n),So(t,e,r))}};function Td(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ea(n,r)||!ea(i,a):!0}function Cm(e,t,n){var r=!1,i=Rn,a=t.contextType;return typeof a=="object"&&a!==null?a=lt(a):(i=We(t)?Jn:De.current,r=t.contextTypes,a=(r=r!=null)?Gr(e,i):Rn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Pd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ts.enqueueReplaceState(t,t.state,null)}function Iu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Im,Uc(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=lt(a):(a=We(t)?Jn:De.current,i.context=Gr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Su(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ts.enqueueReplaceState(i,i.state,null),Jo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===Im&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xd(e){var t=e._init;return t(e._payload)}function bm(e){function t(f,h){if(e){var m=f.deletions;m===null?(f.deletions=[h],f.flags|=16):m.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function i(f,h){return f=bn(f,h),f.index=0,f.sibling=null,f}function a(f,h,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<h?(f.flags|=2,h):m):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,h,m,v){return h===null||h.tag!==6?(h=bl(m,f.mode,v),h.return=f,h):(h=i(h,m),h.return=f,h)}function l(f,h,m,v){var k=m.type;return k===wr?c(f,h,m.props.children,v,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ln&&xd(k)===h.type)?(v=i(h,m.props),v.ref=ki(f,h,m),v.return=f,v):(v=xo(m.type,m.key,m.props,null,f.mode,v),v.ref=ki(f,h,m),v.return=f,v)}function u(f,h,m,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Tl(m,f.mode,v),h.return=f,h):(h=i(h,m.children||[]),h.return=f,h)}function c(f,h,m,v,k){return h===null||h.tag!==7?(h=qn(m,f.mode,v,k),h.return=f,h):(h=i(h,m),h.return=f,h)}function d(f,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=bl(""+h,f.mode,m),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wa:return m=xo(h.type,h.key,h.props,null,f.mode,m),m.ref=ki(f,null,h),m.return=f,m;case yr:return h=Tl(h,f.mode,m),h.return=f,h;case ln:var v=h._init;return d(f,v(h._payload),m)}if(Pi(h)||vi(h))return h=qn(h,f.mode,m,null),h.return=f,h;to(f,h)}return null}function p(f,h,m,v){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(f,h,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wa:return m.key===k?l(f,h,m,v):null;case yr:return m.key===k?u(f,h,m,v):null;case ln:return k=m._init,p(f,h,k(m._payload),v)}if(Pi(m)||vi(m))return k!==null?null:c(f,h,m,v,null);to(f,m)}return null}function g(f,h,m,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,s(h,f,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return f=f.get(v.key===null?m:v.key)||null,l(h,f,v,k);case yr:return f=f.get(v.key===null?m:v.key)||null,u(h,f,v,k);case ln:var b=v._init;return g(f,h,m,b(v._payload),k)}if(Pi(v)||vi(v))return f=f.get(m)||null,c(h,f,v,k,null);to(h,v)}return null}function y(f,h,m,v){for(var k=null,b=null,P=h,R=h=0,U=null;P!==null&&R<m.length;R++){P.index>R?(U=P,P=null):U=P.sibling;var H=p(f,P,m[R],v);if(H===null){P===null&&(P=U);break}e&&P&&H.alternate===null&&t(f,P),h=a(H,h,R),b===null?k=H:b.sibling=H,b=H,P=U}if(R===m.length)return n(f,P),ue&&jn(f,R),k;if(P===null){for(;R<m.length;R++)P=d(f,m[R],v),P!==null&&(h=a(P,h,R),b===null?k=P:b.sibling=P,b=P);return ue&&jn(f,R),k}for(P=r(f,P);R<m.length;R++)U=g(P,f,R,m[R],v),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?R:U.key),h=a(U,h,R),b===null?k=U:b.sibling=U,b=U);return e&&P.forEach(function(Me){return t(f,Me)}),ue&&jn(f,R),k}function _(f,h,m,v){var k=vi(m);if(typeof k!="function")throw Error(C(150));if(m=k.call(m),m==null)throw Error(C(151));for(var b=k=null,P=h,R=h=0,U=null,H=m.next();P!==null&&!H.done;R++,H=m.next()){P.index>R?(U=P,P=null):U=P.sibling;var Me=p(f,P,H.value,v);if(Me===null){P===null&&(P=U);break}e&&P&&Me.alternate===null&&t(f,P),h=a(Me,h,R),b===null?k=Me:b.sibling=Me,b=Me,P=U}if(H.done)return n(f,P),ue&&jn(f,R),k;if(P===null){for(;!H.done;R++,H=m.next())H=d(f,H.value,v),H!==null&&(h=a(H,h,R),b===null?k=H:b.sibling=H,b=H);return ue&&jn(f,R),k}for(P=r(f,P);!H.done;R++,H=m.next())H=g(P,f,R,H.value,v),H!==null&&(e&&H.alternate!==null&&P.delete(H.key===null?R:H.key),h=a(H,h,R),b===null?k=H:b.sibling=H,b=H);return e&&P.forEach(function(ct){return t(f,ct)}),ue&&jn(f,R),k}function S(f,h,m,v){if(typeof m=="object"&&m!==null&&m.type===wr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Wa:e:{for(var k=m.key,b=h;b!==null;){if(b.key===k){if(k=m.type,k===wr){if(b.tag===7){n(f,b.sibling),h=i(b,m.props.children),h.return=f,f=h;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ln&&xd(k)===b.type){n(f,b.sibling),h=i(b,m.props),h.ref=ki(f,b,m),h.return=f,f=h;break e}n(f,b);break}else t(f,b);b=b.sibling}m.type===wr?(h=qn(m.props.children,f.mode,v,m.key),h.return=f,f=h):(v=xo(m.type,m.key,m.props,null,f.mode,v),v.ref=ki(f,h,m),v.return=f,f=v)}return o(f);case yr:e:{for(b=m.key;h!==null;){if(h.key===b)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(f,h.sibling),h=i(h,m.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=Tl(m,f.mode,v),h.return=f,f=h}return o(f);case ln:return b=m._init,S(f,h,b(m._payload),v)}if(Pi(m))return y(f,h,m,v);if(vi(m))return _(f,h,m,v);to(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(f,h.sibling),h=i(h,m),h.return=f,f=h):(n(f,h),h=bl(m,f.mode,v),h.return=f,f=h),o(f)):n(f,h)}return S}var qr=bm(!0),Tm=bm(!1),ba={},Tt=Ln(ba),ia=Ln(ba),aa=Ln(ba);function Vn(e){if(e===ba)throw Error(C(174));return e}function Fc(e,t){switch(re(aa,t),re(ia,e),re(Tt,ba),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nu(t,e)}oe(Tt),re(Tt,t)}function Xr(){oe(Tt),oe(ia),oe(aa)}function Pm(e){Vn(aa.current);var t=Vn(Tt.current),n=nu(t,e.type);t!==n&&(re(ia,e),re(Tt,n))}function zc(e){ia.current===e&&(oe(Tt),oe(ia))}var fe=Ln(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function jc(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var Io=Jt.ReactCurrentDispatcher,El=Jt.ReactCurrentBatchConfig,er=0,de=null,_e=null,Ce=null,es=!1,zi=!1,oa=0,h1=0;function Ae(){throw Error(C(321))}function $c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Bc(e,t,n,r,i,a){if(er=a,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Io.current=e===null||e.memoizedState===null?v1:y1,e=n(r,i),zi){a=0;do{if(zi=!1,oa=0,25<=a)throw Error(C(301));a+=1,Ce=_e=null,t.updateQueue=null,Io.current=w1,e=n(r,i)}while(zi)}if(Io.current=ts,t=_e!==null&&_e.next!==null,er=0,Ce=_e=de=null,es=!1,t)throw Error(C(300));return e}function Hc(){var e=oa!==0;return oa=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?de.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function ut(){if(_e===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Ce===null?de.memoizedState:Ce.next;if(t!==null)Ce=t,_e=e;else{if(e===null)throw Error(C(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ce===null?de.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function sa(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=ut(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,de.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,_t(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,de.lanes|=a,tr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=ut(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);_t(a,t.memoizedState)||(Be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function xm(){}function Rm(e,t){var n=de,r=ut(),i=t(),a=!_t(r.memoizedState,i);if(a&&(r.memoizedState=i,Be=!0),r=r.queue,Wc(Om.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,la(9,Nm.bind(null,n,r,i,t),void 0,null),be===null)throw Error(C(349));er&30||Am(n,t,i)}return i}function Am(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nm(e,t,n,r){t.value=n,t.getSnapshot=r,Dm(t)&&Lm(e)}function Om(e,t,n){return n(function(){Dm(t)&&Lm(e)})}function Dm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function Lm(e){var t=Kt(e,1);t!==null&&wt(t,e,1,-1)}function Rd(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},t.queue=e,e=e.dispatch=g1.bind(null,de,e),[t.memoizedState,e]}function la(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mm(){return ut().memoizedState}function Co(e,t,n,r){var i=St();de.flags|=e,i.memoizedState=la(1|t,n,void 0,r===void 0?null:r)}function Ps(e,t,n,r){var i=ut();r=r===void 0?null:r;var a=void 0;if(_e!==null){var o=_e.memoizedState;if(a=o.destroy,r!==null&&$c(r,o.deps)){i.memoizedState=la(t,n,a,r);return}}de.flags|=e,i.memoizedState=la(1|t,n,a,r)}function Ad(e,t){return Co(8390656,8,e,t)}function Wc(e,t){return Ps(2048,8,e,t)}function Um(e,t){return Ps(4,2,e,t)}function Fm(e,t){return Ps(4,4,e,t)}function zm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jm(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4,4,zm.bind(null,t,e),n)}function Vc(){}function $m(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$c(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bm(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$c(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hm(e,t,n){return er&21?(_t(n,t)||(n=Kp(),de.lanes|=n,tr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function p1(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{ee=n,El.transition=r}}function Wm(){return ut().memoizedState}function m1(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vm(e))Km(t,n);else if(n=km(e,t,n,r),n!==null){var i=Fe();wt(n,e,r,i),Ym(n,t,r)}}function g1(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vm(e))Km(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,_t(s,o)){var l=t.interleaved;l===null?(i.next=i,Mc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=km(e,t,i,r),n!==null&&(i=Fe(),wt(n,e,r,i),Ym(n,t,r))}}function Vm(e){var t=e.alternate;return e===de||t!==null&&t===de}function Km(e,t){zi=es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ym(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kc(e,n)}}var ts={readContext:lt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},v1={readContext:lt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Ad,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,zm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=m1.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Rd,useDebugValue:Vc,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Rd(!1),t=e[0];return e=p1.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=St();if(ue){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),be===null)throw Error(C(349));er&30||Am(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ad(Om.bind(null,r,a,e),[e]),r.flags|=2048,la(9,Nm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=St(),t=be.identifierPrefix;if(ue){var n=zt,r=Ft;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=h1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},y1={readContext:lt,useCallback:$m,useContext:lt,useEffect:Wc,useImperativeHandle:jm,useInsertionEffect:Um,useLayoutEffect:Fm,useMemo:Bm,useReducer:kl,useRef:Mm,useState:function(){return kl(sa)},useDebugValue:Vc,useDeferredValue:function(e){var t=ut();return Hm(t,_e.memoizedState,e)},useTransition:function(){var e=kl(sa)[0],t=ut().memoizedState;return[e,t]},useMutableSource:xm,useSyncExternalStore:Rm,useId:Wm,unstable_isNewReconciler:!1},w1={readContext:lt,useCallback:$m,useContext:lt,useEffect:Wc,useImperativeHandle:jm,useInsertionEffect:Um,useLayoutEffect:Fm,useMemo:Bm,useReducer:Sl,useRef:Mm,useState:function(){return Sl(sa)},useDebugValue:Vc,useDeferredValue:function(e){var t=ut();return _e===null?t.memoizedState=e:Hm(t,_e.memoizedState,e)},useTransition:function(){var e=Sl(sa)[0],t=ut().memoizedState;return[e,t]},useMutableSource:xm,useSyncExternalStore:Rm,useId:Wm,unstable_isNewReconciler:!1};function Jr(e,t){try{var n="",r=t;do n+=Yy(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _1=typeof WeakMap=="function"?WeakMap:Map;function Gm(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rs||(rs=!0,Lu=r),Cu(e,t)},n}function Qm(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Cu(e,t),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Nd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D1.bind(null,e,t,n),t.then(e,e))}function Od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,Sn(n,t,1))),n.lanes|=1),e)}var E1=Jt.ReactCurrentOwner,Be=!1;function Ue(e,t,n,r){t.child=e===null?Tm(t,null,n,r):qr(t,e.child,n,r)}function Ld(e,t,n,r,i){n=n.render;var a=t.ref;return jr(t,i),r=Bc(e,t,n,r,a,i),n=Hc(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ue&&n&&Rc(t),t.flags|=1,Ue(e,t,r,i),t.child)}function Md(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Zc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,qm(e,t,a,r,i)):(e=xo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=bn(a,r),e.ref=t.ref,e.return=t,t.child=e}function qm(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ea(a,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return bu(e,t,n,r,i)}function Xm(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(xr,Ye),Ye|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(xr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,re(xr,Ye),Ye|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,re(xr,Ye),Ye|=r;return Ue(e,t,i,n),t.child}function Jm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bu(e,t,n,r,i){var a=We(n)?Jn:De.current;return a=Gr(t,a),jr(t,i),n=Bc(e,t,n,r,a,i),r=Hc(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ue&&r&&Rc(t),t.flags|=1,Ue(e,t,n,i),t.child)}function Ud(e,t,n,r,i){if(We(n)){var a=!0;Yo(t)}else a=!1;if(jr(t,i),t.stateNode===null)bo(e,t),Cm(t,n,r),Iu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=We(n)?Jn:De.current,u=Gr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Pd(t,o,r,u),un=!1;var p=t.memoizedState;o.state=p,Jo(t,r,o,i),l=t.memoizedState,s!==r||p!==l||He.current||un?(typeof c=="function"&&(Su(t,n,c,r),l=t.memoizedState),(s=un||Td(t,n,s,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Sm(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ht(t.type,s),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=We(n)?Jn:De.current,l=Gr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==l)&&Pd(t,o,r,l),un=!1,p=t.memoizedState,o.state=p,Jo(t,r,o,i);var y=t.memoizedState;s!==d||p!==y||He.current||un?(typeof g=="function"&&(Su(t,n,g,r),y=t.memoizedState),(u=un||Td(t,n,u,r,p,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Tu(e,t,n,r,a,i)}function Tu(e,t,n,r,i,a){Jm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&kd(t,n,!1),Yt(e,t,a);r=t.stateNode,E1.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=qr(t,e.child,null,a),t.child=qr(t,null,s,a)):Ue(e,t,s,a),t.memoizedState=r.state,i&&kd(t,n,!0),t.child}function Zm(e){var t=e.stateNode;t.pendingContext?Ed(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ed(e,t.context,!1),Fc(e,t.containerInfo)}function Fd(e,t,n,r,i){return Qr(),Nc(i),t.flags|=256,Ue(e,t,n,r),t.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function eg(e,t,n){var r=t.pendingProps,i=fe.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(fe,i&1),e===null)return Eu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=As(o,r,0,null),e=qn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=xu(n),t.memoizedState=Pu,e):Kc(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return k1(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=bn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=bn(s,a):(a=qn(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?xu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Pu,r}return a=e.child,e=a.sibling,r=bn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kc(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&Nc(r),qr(t,e.child,null,n),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function k1(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(C(422))),no(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=As({mode:"visible",children:r.children},i,0,null),a=qn(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&qr(t,e.child,null,o),t.child.memoizedState=xu(o),t.memoizedState=Pu,a);if(!(t.mode&1))return no(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(C(419)),r=Il(a,r,void 0),no(e,t,o,r)}if(s=(o&e.childLanes)!==0,Be||s){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Kt(e,i),wt(r,e,i,-1))}return Jc(),r=Il(Error(C(421))),no(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=L1.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ge=kn(i.nextSibling),Qe=t,ue=!0,gt=null,e!==null&&(it[at++]=Ft,it[at++]=zt,it[at++]=Zn,Ft=e.id,zt=e.overflow,Zn=t),t=Kc(t,r.children),t.flags|=4096,t)}function zd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ku(e.return,t,n)}function Cl(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function tg(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ue(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zd(e,n,t);else if(e.tag===19)zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cl(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cl(t,!0,n,null,a);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function S1(e,t,n){switch(t.tag){case 3:Zm(t),Qr();break;case 5:Pm(t);break;case 1:We(t.type)&&Yo(t);break;case 4:Fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(qo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?eg(e,t,n):(re(fe,fe.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);re(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Xm(e,t,n)}return Yt(e,t,n)}var ng,Ru,rg,ig;ng=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};rg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Vn(Tt.current);var a=null;switch(n){case"input":i=Jl(e,i),r=Jl(e,r),a=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),a=[];break;case"textarea":i=tu(e,i),r=tu(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vo)}ru(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};ig=function(e,t,n,r){n!==r&&(t.flags|=4)};function Si(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I1(e,t,n){var r=t.pendingProps;switch(Ac(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return We(t.type)&&Ko(),Ne(t),null;case 3:return r=t.stateNode,Xr(),oe(He),oe(De),jc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(Fu(gt),gt=null))),Ru(e,t),Ne(t),null;case 5:zc(t);var i=Vn(aa.current);if(n=t.type,e!==null&&t.stateNode!=null)rg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Ne(t),null}if(e=Vn(Tt.current),eo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[It]=t,r[ra]=a,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Ri.length;i++)ie(Ri[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Gf(r,a),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ie("invalid",r);break;case"textarea":qf(r,a),ie("invalid",r)}ru(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Za(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Za(r.textContent,s,e),i=["children",""+s]):Yi.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Va(r),Qf(r,a,!0);break;case"textarea":Va(r),Xf(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ap(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[ra]=r,ng(e,t,!1,!1),t.stateNode=e;e:{switch(o=iu(n,r),n){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ri.length;i++)ie(Ri[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":Gf(e,r),i=Jl(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),ie("invalid",e);break;case"textarea":qf(e,r),i=tu(e,r),ie("invalid",e);break;default:i=r}ru(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Dp(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Np(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Gi(e,l):typeof l=="number"&&Gi(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Yi.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ie("scroll",e):l!=null&&gc(e,a,l,o))}switch(n){case"input":Va(e),Qf(e,r,!1);break;case"textarea":Va(e),Xf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Mr(e,!!r.multiple,a,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)ig(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Vn(aa.current),Vn(Tt.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(a=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Za(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Za(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Ne(t),null;case 13:if(oe(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Ge!==null&&t.mode&1&&!(t.flags&128))Em(),Qr(),t.flags|=98560,a=!1;else if(a=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[It]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),a=!1}else gt!==null&&(Fu(gt),gt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Ee===0&&(Ee=3):Jc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Xr(),Ru(e,t),e===null&&ta(t.stateNode.containerInfo),Ne(t),null;case 10:return Lc(t.type._context),Ne(t),null;case 17:return We(t.type)&&Ko(),Ne(t),null;case 19:if(oe(fe),a=t.memoizedState,a===null)return Ne(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Si(a,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zo(e),o!==null){for(t.flags|=128,Si(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ge()>Zr&&(t.flags|=128,r=!0,Si(a,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Si(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ue)return Ne(t),null}else 2*ge()-a.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,Si(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,n=fe.current,re(fe,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function C1(e,t){switch(Ac(t),t.tag){case 1:return We(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),oe(He),oe(De),jc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zc(t),null;case 13:if(oe(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(fe),null;case 4:return Xr(),null;case 10:return Lc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var ro=!1,Oe=!1,b1=typeof WeakSet=="function"?WeakSet:Set,O=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Au(e,t,n){try{n()}catch(r){pe(e,t,r)}}var jd=!1;function T1(e,t){if(pu=Bo,e=lm(),xc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},Bo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,S=y.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:ht(t.type,_),S);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){pe(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=jd,jd=!1,y}function ji(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Au(t,n,a)}i=i.next}while(i!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ag(e){var t=e.alternate;t!==null&&(e.alternate=null,ag(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[ra],delete t[yu],delete t[u1],delete t[c1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function og(e){return e.tag===5||e.tag===3||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vo));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function Du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Du(e,t,n),e=e.sibling;e!==null;)Du(e,t,n),e=e.sibling}var Te=null,mt=!1;function an(e,t,n){for(n=n.child;n!==null;)sg(e,t,n),n=n.sibling}function sg(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:Oe||Pr(n,t);case 6:var r=Te,i=mt;Te=null,an(e,t,n),Te=r,mt=i,Te!==null&&(mt?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(mt?(e=Te,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Ji(e)):yl(Te,n.stateNode));break;case 4:r=Te,i=mt,Te=n.stateNode.containerInfo,mt=!0,an(e,t,n),Te=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Au(n,t,o),i=i.next}while(i!==r)}an(e,t,n);break;case 1:if(!Oe&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}an(e,t,n);break;case 21:an(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,an(e,t,n),Oe=r):an(e,t,n);break;default:an(e,t,n)}}function Bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new b1),t.forEach(function(r){var i=M1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Te=s.stateNode,mt=!1;break e;case 3:Te=s.stateNode.containerInfo,mt=!0;break e;case 4:Te=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(Te===null)throw Error(C(160));sg(a,o,i),Te=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lg(t,e),t=t.sibling}function lg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),kt(e),r&4){try{ji(3,e,e.return),xs(3,e)}catch(_){pe(e,e.return,_)}try{ji(5,e,e.return)}catch(_){pe(e,e.return,_)}}break;case 1:dt(t,e),kt(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(dt(t,e),kt(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{Gi(i,"")}catch(_){pe(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&xp(i,a),iu(s,o);var u=iu(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Dp(i,d):c==="dangerouslySetInnerHTML"?Np(i,d):c==="children"?Gi(i,d):gc(i,c,d,u)}switch(s){case"input":Zl(i,a);break;case"textarea":Rp(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Mr(i,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?Mr(i,!!a.multiple,a.defaultValue,!0):Mr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ra]=a}catch(_){pe(e,e.return,_)}}break;case 6:if(dt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){pe(e,e.return,_)}}break;case 3:if(dt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ji(t.containerInfo)}catch(_){pe(e,e.return,_)}break;case 4:dt(t,e),kt(e);break;case 13:dt(t,e),kt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Qc=ge())),r&4&&Bd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||c,dt(t,e),Oe=u):dt(t,e),kt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(O=e,c=e.child;c!==null;){for(d=O=c;O!==null;){switch(p=O,g=p.child,p.tag){case 0:case 11:case 14:case 15:ji(4,p,p.return);break;case 1:Pr(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){pe(r,n,_)}}break;case 5:Pr(p,p.return);break;case 22:if(p.memoizedState!==null){Wd(d);continue}}g!==null?(g.return=p,O=g):Wd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Op("display",o))}catch(_){pe(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){pe(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dt(t,e),kt(e),r&4&&Bd(e);break;case 21:break;default:dt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(og(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gi(i,""),r.flags&=-33);var a=$d(e);Du(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=$d(e);Ou(e,s,o);break;default:throw Error(C(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P1(e,t,n){O=e,ug(e)}function ug(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ro;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Oe;s=ro;var u=Oe;if(ro=o,(Oe=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Vd(i):l!==null?(l.return=o,O=l):Vd(i);for(;a!==null;)O=a,ug(a),a=a.sibling;O=i,ro=s,Oe=u}Hd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,O=a):Hd(e)}}function Hd(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&bd(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bd(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ji(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Oe||t.flags&512&&Nu(t)}catch(p){pe(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Wd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Vd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(l){pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){pe(t,i,l)}}var a=t.return;try{Nu(t)}catch(l){pe(t,a,l)}break;case 5:var o=t.return;try{Nu(t)}catch(l){pe(t,o,l)}}}catch(l){pe(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var x1=Math.ceil,ns=Jt.ReactCurrentDispatcher,Yc=Jt.ReactCurrentOwner,st=Jt.ReactCurrentBatchConfig,X=0,be=null,ye=null,Pe=0,Ye=0,xr=Ln(0),Ee=0,ua=null,tr=0,Rs=0,Gc=0,$i=null,$e=null,Qc=0,Zr=1/0,Dt=null,rs=!1,Lu=null,In=null,io=!1,vn=null,is=0,Bi=0,Mu=null,To=-1,Po=0;function Fe(){return X&6?ge():To!==-1?To:To=ge()}function Cn(e){return e.mode&1?X&2&&Pe!==0?Pe&-Pe:d1.transition!==null?(Po===0&&(Po=Kp()),Po):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Zp(e.type)),e):1}function wt(e,t,n,r){if(50<Bi)throw Bi=0,Mu=null,Error(C(185));Sa(e,n,r),(!(X&2)||e!==be)&&(e===be&&(!(X&2)&&(Rs|=n),Ee===4&&fn(e,Pe)),Ve(e,r),n===1&&X===0&&!(t.mode&1)&&(Zr=ge()+500,bs&&Mn()))}function Ve(e,t){var n=e.callbackNode;d0(e,t);var r=$o(e,e===be?Pe:0);if(r===0)n!==null&&ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ed(n),t===1)e.tag===0?f1(Kd.bind(null,e)):ym(Kd.bind(null,e)),s1(function(){!(X&6)&&Mn()}),n=null;else{switch(Yp(r)){case 1:n=Ec;break;case 4:n=Wp;break;case 16:n=jo;break;case 536870912:n=Vp;break;default:n=jo}n=vg(n,cg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cg(e,t){if(To=-1,Po=0,X&6)throw Error(C(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var r=$o(e,e===be?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=as(e,r);else{t=r;var i=X;X|=2;var a=dg();(be!==e||Pe!==t)&&(Dt=null,Zr=ge()+500,Qn(e,t));do try{N1();break}catch(s){fg(e,s)}while(1);Dc(),ns.current=a,X=i,ye!==null?t=0:(be=null,Pe=0,t=Ee)}if(t!==0){if(t===2&&(i=uu(e),i!==0&&(r=i,t=Uu(e,i))),t===1)throw n=ua,Qn(e,0),fn(e,r),Ve(e,ge()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!R1(i)&&(t=as(e,r),t===2&&(a=uu(e),a!==0&&(r=a,t=Uu(e,a))),t===1))throw n=ua,Qn(e,0),fn(e,r),Ve(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:$n(e,$e,Dt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Qc+500-ge(),10<t)){if($o(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vu($n.bind(null,e,$e,Dt),t);break}$n(e,$e,Dt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-yt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x1(r/1960))-r,10<r){e.timeoutHandle=vu($n.bind(null,e,$e,Dt),r);break}$n(e,$e,Dt);break;case 5:$n(e,$e,Dt);break;default:throw Error(C(329))}}}return Ve(e,ge()),e.callbackNode===n?cg.bind(null,e):null}function Uu(e,t){var n=$i;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=as(e,t),e!==2&&(t=$e,$e=n,t!==null&&Fu(t)),e}function Fu(e){$e===null?$e=e:$e.push.apply($e,e)}function R1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!_t(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Gc,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-yt(t),r=1<<n;e[n]=-1,t&=~r}}function Kd(e){if(X&6)throw Error(C(327));$r();var t=$o(e,0);if(!(t&1))return Ve(e,ge()),null;var n=as(e,t);if(e.tag!==0&&n===2){var r=uu(e);r!==0&&(t=r,n=Uu(e,r))}if(n===1)throw n=ua,Qn(e,0),fn(e,t),Ve(e,ge()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,$e,Dt),Ve(e,ge()),null}function qc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Zr=ge()+500,bs&&Mn())}}function nr(e){vn!==null&&vn.tag===0&&!(X&6)&&$r();var t=X;X|=1;var n=st.transition,r=ee;try{if(st.transition=null,ee=1,e)return e()}finally{ee=r,st.transition=n,X=t,!(X&6)&&Mn()}}function Xc(){Ye=xr.current,oe(xr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,o1(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Ac(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Xr(),oe(He),oe(De),jc();break;case 5:zc(r);break;case 4:Xr();break;case 13:oe(fe);break;case 19:oe(fe);break;case 10:Lc(r.type._context);break;case 22:case 23:Xc()}n=n.return}if(be=e,ye=e=bn(e.current,null),Pe=Ye=t,Ee=0,ua=null,Gc=Rs=tr=0,$e=$i=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wn=null}return e}function fg(e,t){do{var n=ye;try{if(Dc(),Io.current=ts,es){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}es=!1}if(er=0,Ce=_e=de=null,zi=!1,oa=0,Yc.current=null,n===null||n.return===null){Ee=1,ua=t,ye=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Od(o);if(g!==null){g.flags&=-257,Dd(g,o,s,a,t),g.mode&1&&Nd(a,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){Nd(a,u,t),Jc();break e}l=Error(C(426))}}else if(ue&&s.mode&1){var S=Od(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Dd(S,o,s,a,t),Nc(Jr(l,s));break e}}a=l=Jr(l,s),Ee!==4&&(Ee=2),$i===null?$i=[a]:$i.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Gm(a,l,t);Cd(a,f);break e;case 1:s=l;var h=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(In===null||!In.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var v=Qm(a,s,t);Cd(a,v);break e}}a=a.return}while(a!==null)}pg(n)}catch(k){t=k,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function dg(){var e=ns.current;return ns.current=ts,e===null?ts:e}function Jc(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),be===null||!(tr&268435455)&&!(Rs&268435455)||fn(be,Pe)}function as(e,t){var n=X;X|=2;var r=dg();(be!==e||Pe!==t)&&(Dt=null,Qn(e,t));do try{A1();break}catch(i){fg(e,i)}while(1);if(Dc(),X=n,ns.current=r,ye!==null)throw Error(C(261));return be=null,Pe=0,Ee}function A1(){for(;ye!==null;)hg(ye)}function N1(){for(;ye!==null&&!r0();)hg(ye)}function hg(e){var t=gg(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?pg(e):ye=t,Yc.current=null}function pg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=C1(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,ye=null;return}}else if(n=I1(n,t,Ye),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);Ee===0&&(Ee=5)}function $n(e,t,n){var r=ee,i=st.transition;try{st.transition=null,ee=1,O1(e,t,n,r)}finally{st.transition=i,ee=r}return null}function O1(e,t,n,r){do $r();while(vn!==null);if(X&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(h0(e,a),e===be&&(ye=be=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,vg(jo,function(){return $r(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=st.transition,st.transition=null;var o=ee;ee=1;var s=X;X|=4,Yc.current=null,T1(e,n),lg(n,e),Z0(mu),Bo=!!pu,mu=pu=null,e.current=n,P1(n),i0(),X=s,ee=o,st.transition=a}else e.current=n;if(io&&(io=!1,vn=e,is=i),a=e.pendingLanes,a===0&&(In=null),s0(n.stateNode),Ve(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rs)throw rs=!1,e=Lu,Lu=null,e;return is&1&&e.tag!==0&&$r(),a=e.pendingLanes,a&1?e===Mu?Bi++:(Bi=0,Mu=e):Bi=0,Mn(),null}function $r(){if(vn!==null){var e=Yp(is),t=st.transition,n=ee;try{if(st.transition=null,ee=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,is=0,X&6)throw Error(C(331));var i=X;for(X|=4,O=e.current;O!==null;){var a=O,o=a.child;if(O.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:ji(8,c,a)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var p=c.sibling,g=c.return;if(ag(c),c===u){O=null;break}if(p!==null){p.return=g,O=p;break}O=g}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var S=_.sibling;_.sibling=null,_=S}while(_!==null)}}O=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,O=o;else e:for(;O!==null;){if(a=O,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ji(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,O=f;break e}O=a.return}}var h=e.current;for(O=h;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=h;O!==null;){if(s=O,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xs(9,s)}}catch(k){pe(s,s.return,k)}if(s===o){O=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,O=v;break e}O=s.return}}if(X=i,Mn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{ee=n,st.transition=t}}return!1}function Yd(e,t,n){t=Jr(n,t),t=Gm(e,t,1),e=Sn(e,t,1),t=Fe(),e!==null&&(Sa(e,1,t),Ve(e,t))}function pe(e,t,n){if(e.tag===3)Yd(e,e,n);else for(;t!==null;){if(t.tag===3){Yd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){e=Jr(n,e),e=Qm(t,e,1),t=Sn(t,e,1),e=Fe(),t!==null&&(Sa(t,1,e),Ve(t,e));break}}t=t.return}}function D1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Pe&n)===n&&(Ee===4||Ee===3&&(Pe&130023424)===Pe&&500>ge()-Qc?Qn(e,0):Gc|=n),Ve(e,t)}function mg(e,t){t===0&&(e.mode&1?(t=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):t=1);var n=Fe();e=Kt(e,t),e!==null&&(Sa(e,t,n),Ve(e,n))}function L1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mg(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),mg(e,n)}var gg;gg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,S1(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ue&&t.flags&1048576&&wm(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var i=Gr(t,De.current);jr(t,n),i=Bc(null,t,r,e,i,n);var a=Hc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(a=!0,Yo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uc(t),i.updater=Ts,t.stateNode=i,i._reactInternals=t,Iu(t,r,e,n),t=Tu(null,t,r,!0,a,n)):(t.tag=0,ue&&a&&Rc(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=F1(r),e=ht(r,e),i){case 0:t=bu(null,t,r,e,n);break e;case 1:t=Ud(null,t,r,e,n);break e;case 11:t=Ld(null,t,r,e,n);break e;case 14:t=Md(null,t,r,ht(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),bu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Ud(e,t,r,i,n);case 3:e:{if(Zm(t),e===null)throw Error(C(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Sm(e,t),Jo(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Jr(Error(C(423)),t),t=Fd(e,t,r,n,i);break e}else if(r!==i){i=Jr(Error(C(424)),t),t=Fd(e,t,r,n,i);break e}else for(Ge=kn(t.stateNode.containerInfo.firstChild),Qe=t,ue=!0,gt=null,n=Tm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){t=Yt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return Pm(t),e===null&&Eu(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,gu(r,i)?o=null:a!==null&&gu(r,a)&&(t.flags|=32),Jm(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&Eu(t),null;case 13:return eg(e,t,n);case 4:return Fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Ld(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,re(qo,r._currentValue),r._currentValue=o,a!==null)if(_t(a.value,o)){if(a.children===i.children&&!He.current){t=Yt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Bt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ku(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(C(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ku(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jr(t,n),i=lt(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Md(e,t,r,i,n);case 15:return qm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),bo(e,t),t.tag=1,We(r)?(e=!0,Yo(t)):e=!1,jr(t,n),Cm(t,r,i),Iu(t,r,i,n),Tu(null,t,r,!0,e,n);case 19:return tg(e,t,n);case 22:return Xm(e,t,n)}throw Error(C(156,t.tag))};function vg(e,t){return Hp(e,t)}function U1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new U1(e,t,n,r)}function Zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F1(e){if(typeof e=="function")return Zc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yc)return 11;if(e===wc)return 14}return 2}function bn(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xo(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Zc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wr:return qn(n.children,i,a,t);case vc:o=8,i|=8;break;case Gl:return e=ot(12,n,t,i|2),e.elementType=Gl,e.lanes=a,e;case Ql:return e=ot(13,n,t,i),e.elementType=Ql,e.lanes=a,e;case ql:return e=ot(19,n,t,i),e.elementType=ql,e.lanes=a,e;case bp:return As(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ip:o=10;break e;case Cp:o=9;break e;case yc:o=11;break e;case wc:o=14;break e;case ln:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=ot(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function qn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=ot(22,e,r,t),e.elementType=bp,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function z1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ef(e,t,n,r,i,a,o,s,l){return e=new z1(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ot(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(a),e}function j1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yg(e){if(!e)return Rn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(We(n))return vm(e,n,t)}return t}function wg(e,t,n,r,i,a,o,s,l){return e=ef(n,r,!0,e,i,a,o,s,l),e.context=yg(null),n=e.current,r=Fe(),i=Cn(n),a=Bt(r,i),a.callback=t??null,Sn(n,a,i),e.current.lanes=i,Sa(e,i,r),Ve(e,r),e}function Ns(e,t,n,r){var i=t.current,a=Fe(),o=Cn(i);return n=yg(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Sn(i,t,o),e!==null&&(wt(e,i,o,a),So(e,i,o)),o}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tf(e,t){Gd(e,t),(e=e.alternate)&&Gd(e,t)}function $1(){return null}var _g=typeof reportError=="function"?reportError:function(e){console.error(e)};function nf(e){this._internalRoot=e}Os.prototype.render=nf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Ns(e,t,null,null)};Os.prototype.unmount=nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Ns(null,e,null,null)}),t[Vt]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=qp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&Jp(e)}};function rf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function B1(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=os(o);a.call(u)}}var o=wg(t,r,e,0,null,!1,!1,"",Qd);return e._reactRootContainer=o,e[Vt]=o.current,ta(e.nodeType===8?e.parentNode:e),nr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=os(l);s.call(u)}}var l=ef(e,0,!1,null,null,!1,!1,"",Qd);return e._reactRootContainer=l,e[Vt]=l.current,ta(e.nodeType===8?e.parentNode:e),nr(function(){Ns(t,l,n,r)}),l}function Ls(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=os(o);s.call(l)}}Ns(t,o,e,i)}else o=B1(n,t,e,i,r);return os(o)}Gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xi(t.pendingLanes);n!==0&&(kc(t,n|1),Ve(t,ge()),!(X&6)&&(Zr=ge()+500,Mn()))}break;case 13:nr(function(){var r=Kt(e,1);if(r!==null){var i=Fe();wt(r,e,1,i)}}),tf(e,1)}};Sc=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Fe();wt(t,e,134217728,n)}tf(e,134217728)}};Qp=function(e){if(e.tag===13){var t=Cn(e),n=Kt(e,t);if(n!==null){var r=Fe();wt(n,e,t,r)}tf(e,t)}};qp=function(){return ee};Xp=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};ou=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Cs(r);if(!i)throw Error(C(90));Pp(r),Zl(r,i)}}}break;case"textarea":Rp(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};Up=qc;Fp=nr;var H1={usingClientEntryPoint:!1,Events:[Ca,Sr,Cs,Lp,Mp,qc]},Ii={findFiberByHostInstance:Hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},W1={bundleType:Ii.bundleType,version:Ii.version,rendererPackageName:Ii.rendererPackageName,rendererConfig:Ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$p(e),e===null?null:e.stateNode},findFiberByHostInstance:Ii.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Es=ao.inject(W1),bt=ao}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H1;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(t))throw Error(C(200));return j1(e,t,null,n)};Xe.createRoot=function(e,t){if(!rf(e))throw Error(C(299));var n=!1,r="",i=_g;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ef(e,1,!1,null,null,n,!1,r,i),e[Vt]=t.current,ta(e.nodeType===8?e.parentNode:e),new nf(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=$p(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return nr(e)};Xe.hydrate=function(e,t,n){if(!Ds(t))throw Error(C(200));return Ls(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!rf(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=_g;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=wg(t,null,e,1,n??null,i,!1,a,o),e[Vt]=t.current,ta(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Os(t)};Xe.render=function(e,t,n){if(!Ds(t))throw Error(C(200));return Ls(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!Ds(e))throw Error(C(40));return e._reactRootContainer?(nr(function(){Ls(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};Xe.unstable_batchedUpdates=qc;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ds(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ls(e,t,n,!1,r)};Xe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Xe})($y);var qd=Vl;Wl.createRoot=qd.createRoot,Wl.hydrateRoot=qd.hydrateRoot;const V1="/assets/Logo-9c712c6f.svg";/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}var ve;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ve||(ve={}));const Xd="popstate";function K1(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return ca("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rr(i)}return G1(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ei(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y1(){return Math.random().toString(36).substr(2,8)}function Jd(e,t){return{usr:e.state,key:e.key,idx:t}}function ca(e,t,n,r){return n===void 0&&(n=null),Z({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zt(t):t,{state:n,key:t&&t.key||r||Y1()})}function rr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function G1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=ve.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Z({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=ve.Pop;let S=c(),f=S==null?null:S-u;u=S,l&&l({action:s,location:_.location,delta:f})}function p(S,f){s=ve.Push;let h=ca(_.location,S,f);n&&n(h,S),u=c()+1;let m=Jd(h,u),v=_.createHref(h);try{o.pushState(m,"",v)}catch{i.location.assign(v)}a&&l&&l({action:s,location:_.location,delta:1})}function g(S,f){s=ve.Replace;let h=ca(_.location,S,f);n&&n(h,S),u=c();let m=Jd(h,u),v=_.createHref(h);o.replaceState(m,"",v),a&&l&&l({action:s,location:_.location,delta:0})}function y(S){let f=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:rr(S);return G(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let _={get action(){return s},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Xd,d),l=S,()=>{i.removeEventListener(Xd,d),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let f=y(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:g,go(S){return o.go(S)}};return _}var we;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(we||(we={}));const Q1=new Set(["lazy","caseSensitive","path","id","index","children"]);function q1(e){return e.index===!0}function Eg(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),q1(i)){let l=Z({},i,t(i),{id:s});return r[s]=l,l}else{let l=Z({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=Eg(i.children,t,o,r)),l}})}function Rr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zt(t):t,i=oi(r.pathname||"/",n);if(i==null)return null;let a=kg(e);X1(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=ow(a[s],uw(i));return o}function kg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ht([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(G(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kg(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:iw(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Sg(a.path))i(a,o,l)}),t}function Sg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Sg(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function X1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:aw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J1=/^:\w+$/,Z1=3,ew=2,tw=1,nw=10,rw=-2,Zd=e=>e==="*";function iw(e,t){let n=e.split("/"),r=n.length;return n.some(Zd)&&(r+=rw),t&&(r+=ew),n.filter(i=>!Zd(i)).reduce((i,a)=>i+(J1.test(a)?Z1:a===""?tw:nw),r)}function aw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ow(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=sw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;a.push({params:r,pathname:Ht([i,c.pathname]),pathnameBase:hw(Ht([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ht([i,c.pathnameBase]))}return a}function sw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=s[d]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=cw(s[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function lw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ei(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function uw(e){try{return decodeURI(e)}catch(t){return ei(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cw(e,t){try{return decodeURIComponent(e)}catch(n){return ei(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function oi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zt(e):e;return{pathname:n?n.startsWith("/")?n:dw(n,t):t,search:pw(r),hash:mw(i)}}function dw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ta(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ms(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zt(e):(i=Z({},e),G(!i.pathname||!i.pathname.includes("?"),Pl("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Pl("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Pl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let d=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=fw(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),hw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),pw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,mw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class af{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ig(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cg=["post","put","patch","delete"],gw=new Set(Cg),vw=["get",...Cg],yw=new Set(vw),ww=new Set([301,302,303,307,308]),_w=new Set([307,308]),xl={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Ew={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},eh={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},bg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kw=!Tg,Sw=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Iw(e){G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t;if(e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){let w=e.detectErrorBoundary;t=E=>({hasErrorBoundary:w(E)})}else t=Sw;let n={},r=Eg(e.routes,t,void 0,n),i,a=e.basename||"/",o=Z({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),s=null,l=new Set,u=null,c=null,d=null,p=e.hydrationData!=null,g=Rr(r,e.history.location,a),y=null;if(g==null){let w=pt(404,{pathname:e.history.location.pathname}),{matches:E,route:I}=sh(r);g=E,y={[I.id]:w}}let _=!g.some(w=>w.route.lazy)&&(!g.some(w=>w.route.loader)||e.hydrationData!=null),S,f={historyAction:e.history.action,location:e.history.location,matches:g,initialized:_,navigation:xl,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},h=ve.Pop,m=!1,v,k=!1,b=!1,P=[],R=[],U=new Map,H=0,Me=-1,ct=new Map,ft=new Set,Rt=new Map,At=new Map,et=new Map,Fn=!1;function N(){return s=e.history.listen(w=>{let{action:E,location:I,delta:D}=w;if(Fn){Fn=!1;return}ei(et.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=zf({currentLocation:f.location,nextLocation:I,historyAction:E});if(M&&D!=null){Fn=!0,e.history.go(D*-1),za(M,{state:"blocked",location:I,proceed(){za(M,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),e.history.go(D)},reset(){mi(M),Y({blockers:new Map(S.state.blockers)})}});return}return tt(E,I)}),f.initialized||tt(ve.Pop,f.location),S}function B(){s&&s(),l.clear(),v&&v.abort(),f.fetchers.forEach((w,E)=>Gs(E)),f.blockers.forEach((w,E)=>mi(E))}function V(w){return l.add(w),()=>l.delete(w)}function Y(w){f=Z({},f,w),l.forEach(E=>E(f))}function le(w,E){var I,D;let M=f.actionData!=null&&f.navigation.formMethod!=null&&Lt(f.navigation.formMethod)&&f.navigation.state==="loading"&&((I=w.state)==null?void 0:I._isRedirect)!==!0,$;E.actionData?Object.keys(E.actionData).length>0?$=E.actionData:$=null:M?$=f.actionData:$=null;let W=E.loaderData?oh(f.loaderData,E.loaderData,E.matches||[],E.errors):f.loaderData;for(let[F]of et)mi(F);let z=m===!0||f.navigation.formMethod!=null&&Lt(f.navigation.formMethod)&&((D=w.state)==null?void 0:D._isRedirect)!==!0;i&&(r=i,i=void 0),Y(Z({},E,{actionData:$,loaderData:W,historyAction:h,location:w,initialized:!0,navigation:xl,revalidation:"idle",restoreScrollPosition:jf(w,E.matches||f.matches),preventScrollReset:z,blockers:new Map(f.blockers)})),k||h===ve.Pop||(h===ve.Push?e.history.push(w,w.state):h===ve.Replace&&e.history.replace(w,w.state)),h=ve.Pop,m=!1,k=!1,b=!1,P=[],R=[]}async function zn(w,E){if(typeof w=="number"){e.history.go(w);return}let I=zu(f.location,f.matches,a,o.v7_prependBasename,w,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:D,submission:M,error:$}=th(o.v7_normalizeFormMethod,!1,I,E),W=f.location,z=ca(f.location,D,E&&E.state);z=Z({},z,e.history.encodeLocation(z));let F=E&&E.replace!=null?E.replace:void 0,J=ve.Push;F===!0?J=ve.Replace:F===!1||M!=null&&Lt(M.formMethod)&&M.formAction===f.location.pathname+f.location.search&&(J=ve.Replace);let te=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,Re=zf({currentLocation:W,nextLocation:z,historyAction:J});if(Re){za(Re,{state:"blocked",location:z,proceed(){za(Re,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),zn(w,E)},reset(){mi(Re),Y({blockers:new Map(f.blockers)})}});return}return await tt(J,z,{submission:M,pendingError:$,preventScrollReset:te,replace:E&&E.replace})}function Nt(){if(Ks(),Y({revalidation:"loading"}),f.navigation.state!=="submitting"){if(f.navigation.state==="idle"){tt(f.historyAction,f.location,{startUninterruptedRevalidation:!0});return}tt(h||f.historyAction,f.navigation.location,{overrideNavigation:f.navigation})}}async function tt(w,E,I){v&&v.abort(),v=null,h=w,k=(I&&I.startUninterruptedRevalidation)===!0,py(f.location,f.matches),m=(I&&I.preventScrollReset)===!0;let D=i||r,M=I&&I.overrideNavigation,$=Rr(D,E,a);if(!$){let Se=pt(404,{pathname:E.pathname}),{matches:Ie,route:nt}=sh(D);Qs(),le(E,{matches:Ie,loaderData:{},errors:{[nt.id]:Se}});return}if(xw(f.location,E)&&!(I&&I.submission&&Lt(I.submission.formMethod))){le(E,{matches:$});return}v=new AbortController;let W=bi(e.history,E,v.signal,I&&I.submission),z,F;if(I&&I.pendingError)F={[Ar($).route.id]:I.pendingError};else if(I&&I.submission&&Lt(I.submission.formMethod)){let Se=await Ot(W,E,I.submission,$,{replace:I.replace});if(Se.shortCircuited)return;z=Se.pendingActionData,F=Se.pendingActionError,M=Z({state:"loading",location:E},I.submission),W=new Request(W.url,{signal:W.signal})}let{shortCircuited:J,loaderData:te,errors:Re}=await pr(W,E,$,M,I&&I.submission,I&&I.fetcherSubmission,I&&I.replace,z,F);J||(v=null,le(E,Z({matches:$},z?{actionData:z}:{},{loaderData:te,errors:Re})))}async function Ot(w,E,I,D,M){Ks();let $=Z({state:"submitting",location:E},I);Y({navigation:$});let W,z=ju(D,E);if(!z.route.action&&!z.route.lazy)W={type:we.error,error:pt(405,{method:w.method,pathname:E.pathname,routeId:z.route.id})};else if(W=await Ci("action",w,z,D,n,t,a),w.signal.aborted)return{shortCircuited:!0};if(Br(W)){let F;return M&&M.replace!=null?F=M.replace:F=W.location===f.location.pathname+f.location.search,await pi(f,W,{submission:I,replace:F}),{shortCircuited:!0}}if(Hi(W)){let F=Ar(D,z.route.id);return(M&&M.replace)!==!0&&(h=ve.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:W.error}}}if(Kn(W))throw pt(400,{type:"defer-action"});return{pendingActionData:{[z.route.id]:W.data}}}async function pr(w,E,I,D,M,$,W,z,F){let J=D;J||(J=Z({state:"loading",location:E,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},M));let te=M||$?M||$:J.formMethod&&J.formAction&&J.formData&&J.formEncType?{formMethod:J.formMethod,formAction:J.formAction,formData:J.formData,formEncType:J.formEncType}:void 0,Re=i||r,[Se,Ie]=nh(e.history,f,I,te,E,b,P,R,Rt,Re,a,z,F);if(Qs(ce=>!(I&&I.some(rt=>rt.route.id===ce))||Se&&Se.some(rt=>rt.route.id===ce)),Se.length===0&&Ie.length===0){let ce=Uf();return le(E,Z({matches:I,loaderData:{},errors:F||null},z?{actionData:z}:{},ce?{fetchers:new Map(f.fetchers)}:{})),{shortCircuited:!0}}if(!k){Ie.forEach(rt=>{let gr=f.fetchers.get(rt.key),el={state:"loading",data:gr&&gr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(rt.key,el)});let ce=z||f.actionData;Y(Z({navigation:J},ce?Object.keys(ce).length===0?{actionData:null}:{actionData:ce}:{},Ie.length>0?{fetchers:new Map(f.fetchers)}:{}))}Me=++H,Ie.forEach(ce=>{ce.controller&&U.set(ce.key,ce.controller)});let nt=()=>Ie.forEach(ce=>mr(ce.key));v&&v.signal.addEventListener("abort",nt);let{results:gi,loaderResults:qs,fetcherResults:ja}=await Lf(f.matches,I,Se,Ie,w);if(w.signal.aborted)return{shortCircuited:!0};v&&v.signal.removeEventListener("abort",nt),Ie.forEach(ce=>U.delete(ce.key));let rn=lh(gi);if(rn)return await pi(f,rn,{replace:W}),{shortCircuited:!0};let{loaderData:$a,errors:Xs}=ah(f,I,Se,qs,F,Ie,ja,At);At.forEach((ce,rt)=>{ce.subscribe(gr=>{(gr||ce.done)&&At.delete(rt)})});let Js=Uf(),Zs=Ff(Me),Ba=Js||Zs||Ie.length>0;return Z({loaderData:$a,errors:Xs},Ba?{fetchers:new Map(f.fetchers)}:{})}function Df(w){return f.fetchers.get(w)||Ew}function uy(w,E,I,D){if(kw)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");U.has(w)&&mr(w);let M=i||r,$=zu(f.location,f.matches,a,o.v7_prependBasename,I,E,D==null?void 0:D.relative),W=Rr(M,$,a);if(!W){Ys(w,E,pt(404,{pathname:$}));return}let{path:z,submission:F}=th(o.v7_normalizeFormMethod,!0,$,D),J=ju(W,z);if(m=(D&&D.preventScrollReset)===!0,F&&Lt(F.formMethod)){cy(w,E,z,J,W,F);return}Rt.set(w,{routeId:E,path:z}),fy(w,E,z,J,W,F)}async function cy(w,E,I,D,M,$){if(Ks(),Rt.delete(w),!D.route.action&&!D.route.lazy){let Ke=pt(405,{method:$.formMethod,pathname:I,routeId:E});Ys(w,E,Ke);return}let W=f.fetchers.get(w),z=Z({state:"submitting"},$,{data:W&&W.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(w,z),Y({fetchers:new Map(f.fetchers)});let F=new AbortController,J=bi(e.history,I,F.signal,$);U.set(w,F);let te=await Ci("action",J,D,M,n,t,a);if(J.signal.aborted){U.get(w)===F&&U.delete(w);return}if(Br(te)){U.delete(w),ft.add(w);let Ke=Z({state:"loading"},$,{data:void 0," _hasFetcherDoneAnything ":!0});return f.fetchers.set(w,Ke),Y({fetchers:new Map(f.fetchers)}),pi(f,te,{submission:$,isFetchActionRedirect:!0})}if(Hi(te)){Ys(w,E,te.error);return}if(Kn(te))throw pt(400,{type:"defer-action"});let Re=f.navigation.location||f.location,Se=bi(e.history,Re,F.signal),Ie=i||r,nt=f.navigation.state!=="idle"?Rr(Ie,f.navigation.location,a):f.matches;G(nt,"Didn't find any matches after fetcher action");let gi=++H;ct.set(w,gi);let qs=Z({state:"loading",data:te.data},$,{" _hasFetcherDoneAnything ":!0});f.fetchers.set(w,qs);let[ja,rn]=nh(e.history,f,nt,$,Re,b,P,R,Rt,Ie,a,{[D.route.id]:te.data},void 0);rn.filter(Ke=>Ke.key!==w).forEach(Ke=>{let tl=Ke.key,$f=f.fetchers.get(tl),gy={state:"loading",data:$f&&$f.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(tl,gy),Ke.controller&&U.set(tl,Ke.controller)}),Y({fetchers:new Map(f.fetchers)});let $a=()=>rn.forEach(Ke=>mr(Ke.key));F.signal.addEventListener("abort",$a);let{results:Xs,loaderResults:Js,fetcherResults:Zs}=await Lf(f.matches,nt,ja,rn,Se);if(F.signal.aborted)return;F.signal.removeEventListener("abort",$a),ct.delete(w),U.delete(w),rn.forEach(Ke=>U.delete(Ke.key));let Ba=lh(Xs);if(Ba)return pi(f,Ba);let{loaderData:ce,errors:rt}=ah(f,f.matches,ja,Js,void 0,rn,Zs,At),gr={state:"idle",data:te.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(w,gr);let el=Ff(gi);f.navigation.state==="loading"&&gi>Me?(G(h,"Expected pending action"),v&&v.abort(),le(f.navigation.location,{matches:nt,loaderData:ce,errors:rt,fetchers:new Map(f.fetchers)})):(Y(Z({errors:rt,loaderData:oh(f.loaderData,ce,nt,rt)},el?{fetchers:new Map(f.fetchers)}:{})),b=!1)}async function fy(w,E,I,D,M,$){let W=f.fetchers.get(w),z=Z({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},$,{data:W&&W.data," _hasFetcherDoneAnything ":!0});f.fetchers.set(w,z),Y({fetchers:new Map(f.fetchers)});let F=new AbortController,J=bi(e.history,I,F.signal);U.set(w,F);let te=await Ci("loader",J,D,M,n,t,a);if(Kn(te)&&(te=await Ag(te,J.signal,!0)||te),U.get(w)===F&&U.delete(w),J.signal.aborted)return;if(Br(te)){ft.add(w),await pi(f,te);return}if(Hi(te)){let Se=Ar(f.matches,E);f.fetchers.delete(w),Y({fetchers:new Map(f.fetchers),errors:{[Se.route.id]:te.error}});return}G(!Kn(te),"Unhandled fetcher deferred data");let Re={state:"idle",data:te.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(w,Re),Y({fetchers:new Map(f.fetchers)})}async function pi(w,E,I){var D;let{submission:M,replace:$,isFetchActionRedirect:W}=I===void 0?{}:I;E.revalidate&&(b=!0);let z=ca(w.location,E.location,Z({_isRedirect:!0},W?{_isFetchActionRedirect:!0}:{}));if(G(z,"Expected a location on the redirect navigation"),bg.test(E.location)&&Tg&&typeof((D=window)==null?void 0:D.location)<"u"){let Ie=e.history.createURL(E.location),nt=oi(Ie.pathname,a)==null;if(window.location.origin!==Ie.origin||nt){$?window.location.replace(E.location):window.location.assign(E.location);return}}v=null;let F=$===!0?ve.Replace:ve.Push,{formMethod:J,formAction:te,formEncType:Re,formData:Se}=w.navigation;!M&&J&&te&&Se&&Re&&(M={formMethod:J,formAction:te,formEncType:Re,formData:Se}),_w.has(E.status)&&M&&Lt(M.formMethod)?await tt(F,z,{submission:Z({},M,{formAction:E.location}),preventScrollReset:m}):W?await tt(F,z,{overrideNavigation:{state:"loading",location:z,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:M,preventScrollReset:m}):await tt(F,z,{overrideNavigation:{state:"loading",location:z,formMethod:M?M.formMethod:void 0,formAction:M?M.formAction:void 0,formEncType:M?M.formEncType:void 0,formData:M?M.formData:void 0},preventScrollReset:m})}async function Lf(w,E,I,D,M){let $=await Promise.all([...I.map(F=>Ci("loader",M,F,E,n,t,a)),...D.map(F=>F.matches&&F.match&&F.controller?Ci("loader",bi(e.history,F.path,F.controller.signal),F.match,F.matches,n,t,a):{type:we.error,error:pt(404,{pathname:F.path})})]),W=$.slice(0,I.length),z=$.slice(I.length);return await Promise.all([uh(w,I,W,W.map(()=>M.signal),!1,f.loaderData),uh(w,D.map(F=>F.match),z,D.map(F=>F.controller?F.controller.signal:null),!0)]),{results:$,loaderResults:W,fetcherResults:z}}function Ks(){b=!0,P.push(...Qs()),Rt.forEach((w,E)=>{U.has(E)&&(R.push(E),mr(E))})}function Ys(w,E,I){let D=Ar(f.matches,E);Gs(w),Y({errors:{[D.route.id]:I},fetchers:new Map(f.fetchers)})}function Gs(w){U.has(w)&&mr(w),Rt.delete(w),ct.delete(w),ft.delete(w),f.fetchers.delete(w)}function mr(w){let E=U.get(w);G(E,"Expected fetch controller: "+w),E.abort(),U.delete(w)}function Mf(w){for(let E of w){let D={state:"idle",data:Df(E).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};f.fetchers.set(E,D)}}function Uf(){let w=[],E=!1;for(let I of ft){let D=f.fetchers.get(I);G(D,"Expected fetcher: "+I),D.state==="loading"&&(ft.delete(I),w.push(I),E=!0)}return Mf(w),E}function Ff(w){let E=[];for(let[I,D]of ct)if(D<w){let M=f.fetchers.get(I);G(M,"Expected fetcher: "+I),M.state==="loading"&&(mr(I),ct.delete(I),E.push(I))}return Mf(E),E.length>0}function dy(w,E){let I=f.blockers.get(w)||eh;return et.get(w)!==E&&et.set(w,E),I}function mi(w){f.blockers.delete(w),et.delete(w)}function za(w,E){let I=f.blockers.get(w)||eh;G(I.state==="unblocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="blocked"||I.state==="blocked"&&E.state==="proceeding"||I.state==="blocked"&&E.state==="unblocked"||I.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+I.state+" -> "+E.state),f.blockers.set(w,E),Y({blockers:new Map(f.blockers)})}function zf(w){let{currentLocation:E,nextLocation:I,historyAction:D}=w;if(et.size===0)return;et.size>1&&ei(!1,"A router only supports one blocker at a time");let M=Array.from(et.entries()),[$,W]=M[M.length-1],z=f.blockers.get($);if(!(z&&z.state==="proceeding")&&W({currentLocation:E,nextLocation:I,historyAction:D}))return $}function Qs(w){let E=[];return At.forEach((I,D)=>{(!w||w(D))&&(I.cancel(),E.push(D),At.delete(D))}),E}function hy(w,E,I){if(u=w,d=E,c=I||(D=>D.key),!p&&f.navigation===xl){p=!0;let D=jf(f.location,f.matches);D!=null&&Y({restoreScrollPosition:D})}return()=>{u=null,d=null,c=null}}function py(w,E){if(u&&c&&d){let I=E.map(M=>ch(M,f.loaderData)),D=c(w,I)||w.key;u[D]=d()}}function jf(w,E){if(u&&c&&d){let I=E.map($=>ch($,f.loaderData)),D=c(w,I)||w.key,M=u[D];if(typeof M=="number")return M}return null}function my(w){i=w}return S={get basename(){return a},get state(){return f},get routes(){return r},initialize:N,subscribe:V,enableScrollRestoration:hy,navigate:zn,fetch:uy,revalidate:Nt,createHref:w=>e.history.createHref(w),encodeLocation:w=>e.history.encodeLocation(w),getFetcher:Df,deleteFetcher:Gs,dispose:B,getBlocker:dy,deleteBlocker:mi,_internalFetchControllers:U,_internalActiveDeferreds:At,_internalSetRoutes:my},S}function Cw(e){return e!=null&&"formData"in e}function zu(e,t,n,r,i,a,o){let s,l;if(a!=null&&o!=="path"){s=[];for(let c of t)if(s.push(c),c.route.id===a){l=c;break}}else s=t,l=t[t.length-1];let u=Ms(i||".",Ta(s).map(c=>c.pathnameBase),oi(e.pathname,n)||e.pathname,o==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!of(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Ht([n,u.pathname])),rr(u)}function th(e,t,n,r){if(!r||!Cw(r))return{path:n};if(r.formMethod&&!Nw(r.formMethod))return{path:n,error:pt(405,{method:r.formMethod})};let i;if(r.formData){let s=r.formMethod||"get";if(i={formMethod:e?s.toUpperCase():s.toLowerCase(),formAction:Rg(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},Lt(i.formMethod))return{path:n,submission:i}}let a=Zt(n),o=xg(r.formData);return t&&a.search&&of(a.search)&&o.append("index",""),a.search="?"+o,{path:rr(a),submission:i}}function bw(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function nh(e,t,n,r,i,a,o,s,l,u,c,d,p){let g=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,y=e.createURL(t.location),_=e.createURL(i),S=p?Object.keys(p)[0]:void 0,h=bw(n,S).filter((v,k)=>{if(v.route.lazy)return!0;if(v.route.loader==null)return!1;if(Tw(t.loaderData,t.matches[k],v)||o.some(R=>R===v.route.id))return!0;let b=t.matches[k],P=v;return rh(v,Z({currentUrl:y,currentParams:b.params,nextUrl:_,nextParams:P.params},r,{actionResult:g,defaultShouldRevalidate:a||y.pathname+y.search===_.pathname+_.search||y.search!==_.search||Pg(b,P)}))}),m=[];return l.forEach((v,k)=>{if(!n.some(U=>U.route.id===v.routeId))return;let b=Rr(u,v.path,c);if(!b){m.push({key:k,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let P=ju(b,v.path);if(s.includes(k)){m.push({key:k,routeId:v.routeId,path:v.path,matches:b,match:P,controller:new AbortController});return}rh(P,Z({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:a}))&&m.push({key:k,routeId:v.routeId,path:v.path,matches:b,match:P,controller:new AbortController})}),[h,m]}function Tw(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Pg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function rh(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ih(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ei(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Q1.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,Z({},t(i),{lazy:void 0}))}async function Ci(e,t,n,r,i,a,o,s,l,u){s===void 0&&(s=!1),l===void 0&&(l=!1);let c,d,p,g=S=>{let f,h=new Promise((m,v)=>f=v);return p=()=>f(),t.signal.addEventListener("abort",p),Promise.race([S({request:t,params:n.params,context:u}),h])};try{let S=n.route[e];if(n.route.lazy)if(S)d=(await Promise.all([g(S),ih(n.route,a,i)]))[0];else if(await ih(n.route,a,i),S=n.route[e],S)d=await g(S);else if(e==="action"){let f=new URL(t.url),h=f.pathname+f.search;throw pt(405,{method:t.method,pathname:h,routeId:n.route.id})}else return{type:we.data,data:void 0};else if(S)d=await g(S);else{let f=new URL(t.url),h=f.pathname+f.search;throw pt(404,{pathname:h})}G(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(S){c=we.error,d=S}finally{p&&t.signal.removeEventListener("abort",p)}if(Aw(d)){let S=d.status;if(ww.has(S)){let m=d.headers.get("Location");if(G(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!bg.test(m))m=zu(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!s){let v=new URL(t.url),k=m.startsWith("//")?new URL(v.protocol+m):new URL(m),b=oi(k.pathname,o)!=null;k.origin===v.origin&&b&&(m=k.pathname+k.search+k.hash)}if(s)throw d.headers.set("Location",m),d;return{type:we.redirect,status:S,location:m,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||we.data,response:d};let f,h=d.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?f=await d.json():f=await d.text(),c===we.error?{type:c,error:new af(S,d.statusText,f),headers:d.headers}:{type:we.data,data:f,statusCode:d.status,headers:d.headers}}if(c===we.error)return{type:c,error:d};if(Rw(d)){var y,_;return{type:we.deferred,deferredData:d,statusCode:(y=d.init)==null?void 0:y.status,headers:((_=d.init)==null?void 0:_.headers)&&new Headers(d.init.headers)}}return{type:we.data,data:d}}function bi(e,t,n,r){let i=e.createURL(Rg(t)).toString(),a={signal:n};if(r&&Lt(r.formMethod)){let{formMethod:o,formEncType:s,formData:l}=r;a.method=o.toUpperCase(),a.body=s==="application/x-www-form-urlencoded"?xg(l):l}return new Request(i,a)}function xg(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Pw(e,t,n,r,i){let a={},o=null,s,l=!1,u={};return n.forEach((c,d)=>{let p=t[d].route.id;if(G(!Br(c),"Cannot handle redirect results in processLoaderData"),Hi(c)){let g=Ar(e,p),y=c.error;r&&(y=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=y),a[p]=void 0,l||(l=!0,s=Ig(c.error)?c.error.status:500),c.headers&&(u[p]=c.headers)}else Kn(c)?(i.set(p,c.deferredData),a[p]=c.deferredData.data):a[p]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[p]=c.headers)}),r&&(o=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:u}}function ah(e,t,n,r,i,a,o,s){let{loaderData:l,errors:u}=Pw(t,n,r,i,s);for(let c=0;c<a.length;c++){let{key:d,match:p,controller:g}=a[c];G(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let y=o[c];if(!(g&&g.signal.aborted))if(Hi(y)){let _=Ar(e.matches,p==null?void 0:p.route.id);u&&u[_.route.id]||(u=Z({},u,{[_.route.id]:y.error})),e.fetchers.delete(d)}else if(Br(y))G(!1,"Unhandled fetcher revalidation redirect");else if(Kn(y))G(!1,"Unhandled fetcher deferred data");else{let _={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function oh(e,t,n,r){let i=Z({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Ar(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function sh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function pt(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(s="defer() is not supported in actions")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new af(e||500,o,new Error(s),!0)}function lh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Br(n))return n}}function Rg(e){let t=typeof e=="string"?Zt(e):e;return rr(Z({},t,{hash:""}))}function xw(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Kn(e){return e.type===we.deferred}function Hi(e){return e.type===we.error}function Br(e){return(e&&e.type)===we.redirect}function Rw(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Nw(e){return yw.has(e.toLowerCase())}function Lt(e){return gw.has(e.toLowerCase())}async function uh(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!Pg(u,l)&&(a&&a[l.route.id])!==void 0;if(Kn(s)&&(i||c)){let d=r[o];G(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Ag(s,d,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function Ag(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:we.data,data:e.deferredData.unwrappedData}}catch(i){return{type:we.error,error:i}}return{type:we.data,data:e.deferredData.data}}}function of(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ch(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function ju(e,t){let n=typeof t=="string"?Zt(t).search:t.search;if(e[e.length-1].route.index&&of(n||""))return e[e.length-1];let r=Ta(e);return r[r.length-1]}/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ss.apply(this,arguments)}const sf=T.createContext(null),Ng=T.createContext(null),si=T.createContext(null),Us=T.createContext(null),en=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Og=T.createContext(null);function Ow(e,t){let{relative:n}=t===void 0?{}:t;li()||G(!1);let{basename:r,navigator:i}=T.useContext(si),{hash:a,pathname:o,search:s}=Lg(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ht([r,o])),i.createHref({pathname:l,search:s,hash:a})}function li(){return T.useContext(Us)!=null}function dr(){return li()||G(!1),T.useContext(Us).location}function Dg(e){T.useContext(si).static||T.useLayoutEffect(e)}function lf(){let{isDataRoute:e}=T.useContext(en);return e?Yw():Dw()}function Dw(){li()||G(!1);let{basename:e,navigator:t}=T.useContext(si),{matches:n}=T.useContext(en),{pathname:r}=dr(),i=JSON.stringify(Ta(n).map(s=>s.pathnameBase)),a=T.useRef(!1);return Dg(()=>{a.current=!0}),T.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=Ms(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Ht([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const Lw=T.createContext(null);function Mw(e){let t=T.useContext(en).outlet;return t&&T.createElement(Lw.Provider,{value:e},t)}function Lg(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(en),{pathname:i}=dr(),a=JSON.stringify(Ta(r).map(o=>o.pathnameBase));return T.useMemo(()=>Ms(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Uw(e,t,n){li()||G(!1);let{navigator:r}=T.useContext(si),{matches:i}=T.useContext(en),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=dr(),u;if(t){var c;let _=typeof t=="string"?Zt(t):t;s==="/"||(c=_.pathname)!=null&&c.startsWith(s)||G(!1),u=_}else u=l;let d=u.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",g=Rr(e,{pathname:p}),y=Bw(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Ht([s,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?s:Ht([s,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return t&&y?T.createElement(Us.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ve.Pop}},y):y}function Fw(){let e=Kw(),t=Ig(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}const zw=T.createElement(Fw,null);class jw extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(en.Provider,{value:this.props.routeContext},T.createElement(Og.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $w(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(sf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(en.Provider,{value:t},r)}function Bw(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=a.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||G(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||zw);let p=t.concat(a.slice(0,u+1)),g=()=>{let y;return c?y=d:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,T.createElement($w,{match:l,routeContext:{outlet:s,matches:p,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(jw,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var $u;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})($u||($u={}));var ir;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ir||(ir={}));function Hw(e){let t=T.useContext(sf);return t||G(!1),t}function Mg(e){let t=T.useContext(Ng);return t||G(!1),t}function Ww(e){let t=T.useContext(en);return t||G(!1),t}function uf(e){let t=Ww(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function Vw(){let e=Mg(ir.UseLoaderData),t=uf(ir.UseLoaderData);if(e.errors&&e.errors[t]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")");return}return e.loaderData[t]}function Kw(){var e;let t=T.useContext(Og),n=Mg(ir.UseRouteError),r=uf(ir.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Yw(){let{router:e}=Hw($u.UseNavigateStable),t=uf(ir.UseNavigateStable),n=T.useRef(!1);return Dg(()=>{n.current=!0}),T.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ss({fromRouteId:t},a)))},[e,t])}function Gw(e){let{fallbackElement:t,router:n}=e,[r,i]=T.useState(n.state);T.useLayoutEffect(()=>n.subscribe(i),[n,i]);let a=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",s=T.useMemo(()=>({router:n,navigator:a,static:!1,basename:o}),[n,a,o]);return T.createElement(T.Fragment,null,T.createElement(sf.Provider,{value:s},T.createElement(Ng.Provider,{value:r},T.createElement(Jw,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?T.createElement(Qw,{routes:n.routes,state:r}):t))),null)}function Qw(e){let{routes:t,state:n}=e;return Uw(t,void 0,n)}function qw(e){let{to:t,replace:n,state:r,relative:i}=e;li()||G(!1);let{matches:a}=T.useContext(en),{pathname:o}=dr(),s=lf(),l=Ms(t,Ta(a).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return T.useEffect(()=>s(JSON.parse(u),{replace:n,state:r,relative:i}),[s,u,i,n,r]),null}function Xw(e){return Mw(e.context)}function Jw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ve.Pop,navigator:a,static:o=!1}=e;li()&&G(!1);let s=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Zt(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:g="default"}=r,y=T.useMemo(()=>{let _=oi(u,s);return _==null?null:{location:{pathname:_,search:c,hash:d,state:p,key:g},navigationType:i}},[s,u,c,d,p,g,i]);return y==null?null:T.createElement(si.Provider,{value:l},T.createElement(Us.Provider,{children:n,value:y}))}var fh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(fh||(fh={}));new Promise(()=>{});function Zw(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:T.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:T.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fa.apply(this,arguments)}function e_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function t_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n_(e,t){return e.button===0&&(!t||t==="_self")&&!t_(e)}const r_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function i_(e,t){return Iw({basename:t==null?void 0:t.basename,future:fa({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:K1({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||a_(),routes:e,mapRouteProperties:Zw}).initialize()}function a_(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=fa({},t,{errors:o_(t.errors)})),t}function o_(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new af(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}const s_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ut=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,d=e_(t,r_),{basename:p}=T.useContext(si),g,y=!1;if(typeof u=="string"&&l_.test(u)&&(g=u,s_))try{let h=new URL(window.location.href),m=u.startsWith("//")?new URL(h.protocol+u):new URL(u),v=oi(m.pathname,p);m.origin===h.origin&&v!=null?u=v+m.search+m.hash:y=!0}catch{}let _=Ow(u,{relative:i}),S=u_(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function f(h){r&&r(h),h.defaultPrevented||S(h)}return T.createElement("a",fa({},d,{href:g||_,onClick:y||a?r:f,ref:n,target:l}))});var dh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(dh||(dh={}));var hh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hh||(hh={}));function u_(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=lf(),l=dr(),u=Lg(e,{relative:o});return T.useCallback(c=>{if(n_(c,n)){c.preventDefault();let d=r!==void 0?r:rr(l)===rr(u);s(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},c_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],l=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Fg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,d=(a&3)<<4|s>>4;let p=(s&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[d],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ug(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||u==null||d==null)throw new f_;const p=a<<2|s>>4;if(r.push(p),u!==64){const g=s<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class f_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d_=function(e){const t=Ug(e);return Fg.encodeByteArray(t,!0)},zg=function(e){return d_(e).replace(/\./g,"")},jg=function(e){try{return Fg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=()=>h_().__FIREBASE_DEFAULTS__,m_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},g_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jg(e[1]);return t&&JSON.parse(t)},cf=()=>{try{return p_()||m_()||g_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},v_=e=>{var t,n;return(n=(t=cf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},y_=()=>{var e;return(e=cf())===null||e===void 0?void 0:e.config},$g=e=>{var t;return(t=cf())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function __(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function E_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function S_(){const e=Le();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I_(){try{return typeof indexedDB=="object"}catch{return!1}}function C_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="FirebaseError";class Un extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=b_,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?T_(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Un(i,s,r)}}function T_(e,t){return e.replace(P_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const P_=/\{\$([^}]+)}/g;function x_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ls(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(ph(a)&&ph(o)){if(!ls(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ph(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ai(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(a)}}),t}function Ni(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function R_(e,t){const n=new A_(e,t);return n.subscribe.bind(n)}class A_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");N_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Rl),i.error===void 0&&(i.error=Rl),i.complete===void 0&&(i.complete=Rl);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){return e&&e._delegate?e._delegate:e}class ti{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new w_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(L_(t))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=Bn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bn){return this.instances.has(t)}getOptions(t=Bn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Bn){return this.component?this.component.multipleInstances?t:Bn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D_(e){return e===Bn?void 0:e}function L_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new O_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ne||(ne={}));const U_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},F_=ne.INFO,z_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},j_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=z_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Bg{constructor(t){this.name=t,this._logLevel=F_,this._logHandler=j_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?U_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const $_=(e,t)=>t.some(n=>e instanceof n);let mh,gh;function B_(){return mh||(mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H_(){return gh||(gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hg=new WeakMap,Bu=new WeakMap,Wg=new WeakMap,Al=new WeakMap,ff=new WeakMap;function W_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(Tn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Hg.set(n,e)}).catch(()=>{}),ff.set(t,e),t}function V_(e){if(Bu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Bu.set(e,t)}let Hu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Bu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function K_(e){Hu=e(Hu)}function Y_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Nl(this),t,...n);return Wg.set(r,t.sort?t.sort():[t]),Tn(r)}:H_().includes(e)?function(...t){return e.apply(Nl(this),t),Tn(Hg.get(this))}:function(...t){return Tn(e.apply(Nl(this),t))}}function G_(e){return typeof e=="function"?Y_(e):(e instanceof IDBTransaction&&V_(e),$_(e,B_())?new Proxy(e,Hu):e)}function Tn(e){if(e instanceof IDBRequest)return W_(e);if(Al.has(e))return Al.get(e);const t=G_(e);return t!==e&&(Al.set(e,t),ff.set(t,e)),t}const Nl=e=>ff.get(e);function Q_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=Tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),s.then(l=>{a&&l.addEventListener("close",()=>a()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),s}const q_=["get","getKey","getAll","getAllKeys","count"],X_=["put","add","delete","clear"],Ol=new Map;function vh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ol.get(t))return Ol.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=X_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||q_.includes(n)))return;const a=async function(o,...s){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(s.shift())),(await Promise.all([u[n](...s),i&&l.done]))[0]};return Ol.set(t,a),a}K_(e=>({...e,get:(t,n,r)=>vh(t,n)||e.get(t,n,r),has:(t,n)=>!!vh(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Z_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Z_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Wu="@firebase/app",yh="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Bg("@firebase/app"),eE="@firebase/app-compat",tE="@firebase/analytics-compat",nE="@firebase/analytics",rE="@firebase/app-check-compat",iE="@firebase/app-check",aE="@firebase/auth",oE="@firebase/auth-compat",sE="@firebase/database",lE="@firebase/database-compat",uE="@firebase/functions",cE="@firebase/functions-compat",fE="@firebase/installations",dE="@firebase/installations-compat",hE="@firebase/messaging",pE="@firebase/messaging-compat",mE="@firebase/performance",gE="@firebase/performance-compat",vE="@firebase/remote-config",yE="@firebase/remote-config-compat",wE="@firebase/storage",_E="@firebase/storage-compat",EE="@firebase/firestore",kE="@firebase/firestore-compat",SE="firebase",IE="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="[DEFAULT]",CE={[Wu]:"fire-core",[eE]:"fire-core-compat",[nE]:"fire-analytics",[tE]:"fire-analytics-compat",[iE]:"fire-app-check",[rE]:"fire-app-check-compat",[aE]:"fire-auth",[oE]:"fire-auth-compat",[sE]:"fire-rtdb",[lE]:"fire-rtdb-compat",[uE]:"fire-fn",[cE]:"fire-fn-compat",[fE]:"fire-iid",[dE]:"fire-iid-compat",[hE]:"fire-fcm",[pE]:"fire-fcm-compat",[mE]:"fire-perf",[gE]:"fire-perf-compat",[vE]:"fire-rc",[yE]:"fire-rc-compat",[wE]:"fire-gcs",[_E]:"fire-gcs-compat",[EE]:"fire-fst",[kE]:"fire-fst-compat","fire-js":"fire-js",[SE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Map,Ku=new Map;function bE(e,t){try{e.container.addComponent(t)}catch(n){ar.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function da(e){const t=e.name;if(Ku.has(t))return ar.debug(`There were multiple attempts to register component ${t}.`),!1;Ku.set(t,e);for(const n of us.values())bE(n,e);return!0}function Vg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new Pa("app","Firebase",TE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=IE;function Kg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Vu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=y_()),!n)throw Pn.create("no-options");const a=us.get(i);if(a){if(ls(n,a.options)&&ls(r,a.config))return a;throw Pn.create("duplicate-app",{appName:i})}const o=new M_(i);for(const l of Ku.values())o.addComponent(l);const s=new PE(n,r,o);return us.set(i,s),s}function xE(e=Vu){const t=us.get(e);if(!t&&e===Vu)return Kg();if(!t)throw Pn.create("no-app",{appName:e});return t}function Hr(e,t,n){var r;let i=(r=CE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ar.warn(s.join(" "));return}da(new ti(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="firebase-heartbeat-database",AE=1,ha="firebase-heartbeat-store";let Dl=null;function Yg(){return Dl||(Dl=Q_(RE,AE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ha)}}}).catch(e=>{throw Pn.create("idb-open",{originalErrorMessage:e.message})})),Dl}async function NE(e){try{return(await Yg()).transaction(ha).objectStore(ha).get(Gg(e))}catch(t){if(t instanceof Un)ar.warn(t.message);else{const n=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ar.warn(n.message)}}}async function wh(e,t){try{const r=(await Yg()).transaction(ha,"readwrite");return await r.objectStore(ha).put(t,Gg(e)),r.done}catch(n){if(n instanceof Un)ar.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(r.message)}}}function Gg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=1024,DE=30*24*60*60*1e3;class LE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_h();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=DE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_h(),{heartbeatsToSend:n,unsentEntries:r}=ME(this._heartbeatsCache.heartbeats),i=zg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _h(){return new Date().toISOString().substring(0,10)}function ME(e,t=OE){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),Eh(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Eh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class UE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return I_()?C_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Eh(e){return zg(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e){da(new ti("platform-logger",t=>new J_(t),"PRIVATE")),da(new ti("heartbeat",t=>new LE(t),"PRIVATE")),Hr(Wu,yh,e),Hr(Wu,yh,"esm2017"),Hr("fire-js","")}FE("");function df(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Qg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zE=Qg,qg=new Pa("auth","Firebase",Qg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Bg("@firebase/auth");function jE(e,...t){cs.logLevel<=ne.WARN&&cs.warn(`Auth (${Ra}): ${e}`,...t)}function Ro(e,...t){cs.logLevel<=ne.ERROR&&cs.error(`Auth (${Ra}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,...t){throw hf(e,...t)}function Pt(e,...t){return hf(e,...t)}function $E(e,t,n){const r=Object.assign(Object.assign({},zE()),{[t]:n});return new Pa("auth","Firebase",r).create(t,{appName:e.name})}function hf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return qg.create(e,...t)}function j(e,t,...n){if(!e)throw hf(t,...n)}function jt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ro(t),new Error(t)}function Gt(e,t){e||jt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function BE(){return kh()==="http:"||kh()==="https:"}function kh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BE()||E_()||"connection"in navigator)?navigator.onLine:!0}function WE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,n){this.shortDelay=t,this.longDelay=n,Gt(n>t,"Short delay should be less than long delay!"),this.isMobile=__()||k_()}get(){return HE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e,t){Gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new Aa(3e4,6e4);function ui(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ci(e,t,n,r,i={}){return Jg(e,i,async()=>{let a={},o={};r&&(t==="GET"?o=r:a={body:JSON.stringify(r)});const s=xa(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Xg.fetch()(Zg(e,e.config.apiHost,n,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function Jg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},VE),t);try{const i=new YE(e),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw oo(e,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const s=a.ok?o.errorMessage:o.error.message,[l,u]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oo(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw oo(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $E(e,c,u);Et(e,c)}}catch(i){if(i instanceof Un)throw i;Et(e,"network-request-failed",{message:String(i)})}}async function Na(e,t,n,r,i={}){const a=await ci(e,t,n,r,i);return"mfaPendingCredential"in a&&Et(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Zg(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?pf(e.config,i):`${e.config.apiScheme}://${i}`}class YE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),KE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(e,t){return ci(e,"POST","/v1/accounts:delete",t)}async function QE(e,t){return ci(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qE(e,t=!1){const n=tn(e),r=await n.getIdToken(t),i=mf(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Wi(Ll(i.auth_time)),issuedAtTime:Wi(Ll(i.iat)),expirationTime:Wi(Ll(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ll(e){return Number(e)*1e3}function mf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=jg(n);return i?JSON.parse(i):(Ro("Failed to decode base64 JWT payload"),null)}catch(i){return Ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function XE(e){const t=mf(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Un&&JE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function JE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await pa(e,QE(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const o=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?nk(a.providerUserInfo):[],s=tk(e.providerData,o),l=e.isAnonymous,u=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),c=l?u:!1,d={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new ev(a.createdAt,a.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function ek(e){const t=tn(e);await fs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function tk(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function nk(e){return e.map(t=>{var{providerId:n}=t,r=df(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(e,t){const n=await Jg(e,{},async()=>{const r=xa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:a}=e.config,o=Zg(e,i,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Xg.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):XE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return j(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await rk(t,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,o=new ma;return r&&(j(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),a&&(j(typeof a=="number","internal-error",{appName:t}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ma,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Xn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,a=df(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ev(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await pa(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return qE(this,t)}reload(){return ek(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Xn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await fs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await pa(this,GE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,a,o,s,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(s=n.tenantId)!==null&&s!==void 0?s:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:k,providerData:b,stsTokenManager:P}=n;j(m&&P,t,"internal-error");const R=ma.fromJSON(this.name,P);j(typeof m=="string",t,"internal-error"),on(d,t.name),on(p,t.name),j(typeof v=="boolean",t,"internal-error"),j(typeof k=="boolean",t,"internal-error"),on(g,t.name),on(y,t.name),on(_,t.name),on(S,t.name),on(f,t.name),on(h,t.name);const U=new Xn({uid:m,auth:t,email:p,emailVerified:v,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:R,createdAt:f,lastLoginAt:h});return b&&Array.isArray(b)&&(U.providerData=b.map(H=>Object.assign({},H))),S&&(U._redirectEventId=S),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new ma;i.updateFromServerResponse(n);const a=new Xn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await fs(a),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;function $t(e){Gt(e instanceof Function,"Expected a class definition");let t=Sh.get(e);return t?(Gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sh.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}tv.type="NONE";const Ih=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e,t,n){return`firebase:${e}:${t}:${n}`}class Wr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Ao(this.userKey,i.apiKey,a),this.fullPersistenceKey=Ao("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Xn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Wr($t(Ih),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||$t(Ih);const o=Ao(r,t.config.apiKey,t.name);let s=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Xn._fromJSON(t,c);u!==a&&(s=d),a=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new Wr(a,t,r):(a=l[0],s&&await a._set(o,s.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(o)}catch{}})),new Wr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(iv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(nv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ov(t))return"Blackberry";if(sv(t))return"Webos";if(gf(t))return"Safari";if((t.includes("chrome/")||rv(t))&&!t.includes("edge/"))return"Chrome";if(av(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nv(e=Le()){return/firefox\//i.test(e)}function gf(e=Le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function rv(e=Le()){return/crios\//i.test(e)}function iv(e=Le()){return/iemobile/i.test(e)}function av(e=Le()){return/android/i.test(e)}function ov(e=Le()){return/blackberry/i.test(e)}function sv(e=Le()){return/webos/i.test(e)}function Fs(e=Le()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ik(e=Le()){var t;return Fs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ak(){return S_()&&document.documentMode===10}function lv(e=Le()){return Fs(e)||av(e)||sv(e)||ov(e)||/windows phone/i.test(e)||iv(e)}function ok(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(e,t=[]){let n;switch(e){case"Browser":n=Ch(Le());break;case"Worker":n=`${Ch(Le())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ra}/${r}`}async function cv(e,t){return ci(e,"GET","/v2/recaptchaConfig",ui(e,t))}function bh(e){return e!==void 0&&e.enterprise!==void 0}class fv{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function dv(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const a=Pt("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",sk().appendChild(r)})}function lk(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const uk="https://www.google.com/recaptcha/enterprise.js?render=",ck="recaptcha-enterprise",fk="NO_RECAPTCHA";class hv{constructor(t){this.type=ck,this.auth=fi(t)}async verify(t="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,s)=>{cv(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)s(new Error("recaptcha Enterprise site key undefined"));else{const u=new fv(l);return a.tenantId==null?a._agentRecaptchaConfig=u:a._tenantRecaptchaConfigs[a.tenantId]=u,o(u.siteKey)}}).catch(l=>{s(l)})})}function i(a,o,s){const l=window.grecaptcha;bh(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:t}).then(u=>{o(u)}).catch(()=>{o(fk)})}):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(s=>{if(!n&&bh(window.grecaptcha))i(s,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dv(uk+s).then(()=>{i(s,a,o)}).catch(l=>{o(l)})}}).catch(s=>{o(s)})})}}async function ds(e,t,n,r=!1){const i=new hv(e);let a;try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=a=>new Promise((o,s)=>{try{const l=t(a);o(l)}catch(l){s(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Th(this),this.idTokenSubscription=new Th(this),this.beforeStateQueue=new dk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===s)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await fs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=WE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?tn(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(t))})}async initializeRecaptchaConfig(){const t=await cv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new fv(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new hv(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Pa("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&$t(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>a(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=uv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&jE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fi(e){return tn(e)}class Th{constructor(t){this.auth=t,this.observer=null,this.addObserver=R_(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(e,t){const n=Vg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(ls(a,t??{}))return i;Et(i,"already-initialized")}return n.initialize({options:t})}function mk(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function gk(e,t,n){const r=fi(e);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=pv(t),{host:o,port:s}=vk(t),l=s===null?"":`:${s}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:s,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yk()}function pv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function vk(e){const t=pv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Ph(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:Ph(o)}}}function Ph(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function yk(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(t){return jt("not implemented")}_linkToIdToken(t,n){return jt("not implemented")}_getReauthenticationResolver(t){return jt("not implemented")}}async function wk(e,t){return ci(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(e,t){return Na(e,"POST","/v1/accounts:signInWithPassword",ui(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(e,t){return Na(e,"POST","/v1/accounts:signInWithEmailLink",ui(e,t))}async function Ek(e,t){return Na(e,"POST","/v1/accounts:signInWithEmailLink",ui(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends vf{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ga(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ga(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ds(t,r,"signInWithPassword");return Ml(t,i)}else return Ml(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const a=await ds(t,r,"signInWithPassword");return Ml(t,a)}else return Promise.reject(i)});case"emailLink":return _k(t,{email:this._email,oobCode:this._password});default:Et(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return wk(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ek(t,{idToken:n,email:this._email,oobCode:this._password});default:Et(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(e,t){return Na(e,"POST","/v1/accounts:signInWithIdp",ui(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="http://localhost";class or extends vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new or(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,a=df(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new or(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Vr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Vr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Vr(t,n)}buildRequest(){const t={requestUri:kk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=xa(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ik(e){const t=Ai(Ni(e)).link,n=t?Ai(Ni(t)).deep_link_id:null,r=Ai(Ni(e)).deep_link_id;return(r?Ai(Ni(r)).link:null)||r||n||t||e}class yf{constructor(t){var n,r,i,a,o,s;const l=Ai(Ni(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Sk((i=l.mode)!==null&&i!==void 0?i:null);j(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const n=Ik(t);try{return new yf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(t,n){return ga._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=yf.parseLink(n);return j(r,"argument-error"),ga._fromEmailAndCode(t,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends mv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Oa{constructor(){super("facebook.com")}static credential(t){return or._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return dn.credential(t.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Oa{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return or._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Oa{constructor(){super("github.com")}static credential(t){return or._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pn.credential(t.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Oa{constructor(){super("twitter.com")}static credential(t,n){return or._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(e,t){return Na(e,"POST","/v1/accounts:signUp",ui(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const a=await Xn._fromIdTokenResponse(t,r,i),o=xh(r);return new sr({user:a,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=xh(r);return new sr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function xh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Un{constructor(t,n,r,i){var a;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hs.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new hs(t,n,r,i)}}function gv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?hs._fromErrorAndOperation(e,a,t,r):a})}async function Ck(e,t,n=!1){const r=await pa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await pa(e,gv(r,i,t,e),n);j(a.idToken,r,"internal-error");const o=mf(a.idToken);j(o,r,"internal-error");const{sub:s}=o;return j(e.uid===s,r,"user-mismatch"),sr._forOperation(e,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(e,t,n=!1){const r="signIn",i=await gv(e,r,t),a=await sr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}async function Tk(e,t){return vv(fi(e),t)}async function Pk(e,t,n){var r;const i=fi(e),a={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ds(i,a,"signUpPassword");o=Ul(i,u)}else o=Ul(i,a).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ds(i,a,"signUpPassword");return Ul(i,c)}else return Promise.reject(u)});const s=await o.catch(u=>Promise.reject(u)),l=await sr._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(l.user),l}function xk(e,t,n){return Tk(tn(e),di.credential(t,n))}function Rk(e,t,n,r){return tn(e).onIdTokenChanged(t,n,r)}function Ak(e,t,n){return tn(e).beforeAuthStateChanged(t,n)}function Nk(e,t,n,r){return tn(e).onAuthStateChanged(t,n,r)}function Ok(e){return tn(e).signOut()}const ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ps,"1"),this.storage.removeItem(ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){const e=Le();return gf(e)||Fs(e)}const Lk=1e3,Mk=10;class wv extends yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dk()&&ok(),this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,s,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);ak()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Mk):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}wv.type="LOCAL";const Uk=wv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v extends yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}_v.type="SESSION";const Ev=_v;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new zs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:a}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(o).map(async u=>u(n.origin,a)),l=await Fk(s);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((s,l)=>{const u=wf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(p.data.response);break;default:clearTimeout(c),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function jk(e){xt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function $k(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bk(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Hk(){return kv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="firebaseLocalStorageDb",Wk=1,ms="firebaseLocalStorage",Iv="fbase_key";class Da{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function js(e,t){return e.transaction([ms],t?"readwrite":"readonly").objectStore(ms)}function Vk(){const e=indexedDB.deleteDatabase(Sv);return new Da(e).toPromise()}function Gu(){const e=indexedDB.open(Sv,Wk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ms,{keyPath:Iv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ms)?t(r):(r.close(),await Vk(),t(await Gu()))})})}async function Rh(e,t,n){const r=js(e,!0).put({[Iv]:t,value:n});return new Da(r).toPromise()}async function Kk(e,t){const n=js(e,!1).get(t),r=await new Da(n).toPromise();return r===void 0?null:r.value}function Ah(e,t){const n=js(e,!0).delete(t);return new Da(n).toPromise()}const Yk=800,Gk=3;class Cv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Gk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(Hk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $k(),!this.activeServiceWorker)return;this.sender=new zk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Bk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gu();return await Rh(t,ps,"1"),await Ah(t,ps),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Kk(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ah(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const a=js(i,!1).getAll();return new Da(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:a}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cv.type="LOCAL";const Qk=Cv;new Aa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(e,t){return t?$t(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends vf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Vr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Vr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Xk(e){return vv(e.auth,new _f(e),e.bypassAuthState)}function Jk(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),bk(n,new _f(e),e.bypassAuthState)}async function Zk(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),Ck(n,new _f(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(t,n,r,i,a=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:o,type:s}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Xk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Jk;default:Et(this.auth,"internal-error")}}resolve(t){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new Aa(2e3,1e4);class Nr extends bv{constructor(t,n,r,i,a){super(t,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const t=wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,eS.get())};t()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="pendingRedirect",No=new Map;class nS extends bv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=No.get(this.auth._key());if(!t){try{const r=await rS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}No.set(this.auth._key(),t)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rS(e,t){const n=oS(t),r=aS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iS(e,t){No.set(e._key(),t)}function aS(e){return $t(e._redirectPersistence)}function oS(e){return Ao(tS,e.config.apiKey,e.name)}async function sS(e,t,n=!1){const r=fi(e),i=qk(r,t),o=await new nS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=10*60*1e3;class uS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!cS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Tv(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nh(t))}saveEventToCache(t){this.cachedEventUids.add(Nh(t)),this.lastProcessedEventTime=Date.now()}}function Nh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Tv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function cS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(e,t={}){return ci(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hS=/^https?/;async function pS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fS(e);for(const n of t)try{if(mS(n))return}catch{}Et(e,"unauthorized-domain")}function mS(e){const t=Yu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hS.test(n))return!1;if(dS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=new Aa(3e4,6e4);function Oh(){const e=xt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function vS(e){return new Promise((t,n)=>{var r,i,a;function o(){Oh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Oh(),n(Pt(e,"network-request-failed"))},timeout:gS.get()})}if(!((i=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((a=xt().gapi)===null||a===void 0)&&a.load)o();else{const s=lk("iframefcb");return xt()[s]=()=>{gapi.load?o():n(Pt(e,"network-request-failed"))},dv(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>n(l))}}).catch(t=>{throw Oo=null,t})}let Oo=null;function yS(e){return Oo=Oo||vS(e),Oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Aa(5e3,15e3),_S="__/auth/iframe",ES="emulator/auth/iframe",kS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IS(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?pf(t,ES):`https://${e.config.authDomain}/${_S}`,r={apiKey:t.apiKey,appName:e.name,v:Ra},i=SS.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${xa(r).slice(1)}`}async function CS(e){const t=await yS(e),n=xt().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:IS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kS,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(e,"network-request-failed"),s=xt().setTimeout(()=>{a(o)},wS.get());function l(){xt().clearTimeout(s),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TS=500,PS=600,xS="_blank",RS="http://localhost";class Dh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AS(e,t,n,r=TS,i=PS){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},bS),{width:r.toString(),height:i.toString(),top:a,left:o}),u=Le().toLowerCase();n&&(s=rv(u)?xS:n),nv(u)&&(t=t||RS,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(ik(u)&&s!=="_self")return NS(t||"",s),new Dh(null);const d=window.open(t||"",s,c);j(d,e,"popup-blocked");try{d.focus()}catch{}return new Dh(d)}function NS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="__/auth/handler",DS="emulator/auth/handler",LS=encodeURIComponent("fac");async function Lh(e,t,n,r,i,a){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ra,eventId:i};if(t instanceof mv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",x_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(a||{}))o[c]=d}if(t instanceof Oa){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const s=o;for(const c of Object.keys(s))s[c]===void 0&&delete s[c];const l=await e._getAppCheckToken(),u=l?`#${LS}=${encodeURIComponent(l)}`:"";return`${MS(e)}?${xa(s).slice(1)}${u}`}function MS({config:e}){return e.emulator?pf(e,DS):`https://${e.authDomain}/${OS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="webStorageSupport";class US{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ev,this._completeRedirectFn=sS,this._overrideRedirectResult=iS}async _openPopup(t,n,r,i){var a;Gt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Lh(t,n,r,Yu(),i);return AS(t,o,wf())}async _openRedirect(t,n,r,i){await this._originValidation(t);const a=await Lh(t,n,r,Yu(),i);return jk(a),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await CS(t),r=new uS(t);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Fl,{type:Fl},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Fl];o!==void 0&&n(!!o),Et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return lv()||gf()||Fs()}}const FS=US;var Mh="@firebase/auth",Uh="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $S(e){da(new ti("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),j(!(s!=null&&s.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uv(e)},u=new hk(r,i,a,l);return mk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),da(new ti("auth-internal",t=>{const n=fi(t.getProvider("auth").getImmediate());return(r=>new zS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hr(Mh,Uh,jS(e)),Hr(Mh,Uh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=5*60,HS=$g("authIdTokenMaxAge")||BS;let Fh=null;const WS=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HS)return;const i=n==null?void 0:n.token;Fh!==i&&(Fh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VS(e=xE()){const t=Vg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=pk(e,{popupRedirectResolver:FS,persistence:[Qk,Uk,Ev]}),r=$g("authTokenSyncURL");if(r){const a=WS(r);Ak(n,a,()=>a(n.currentUser)),Rk(n,o=>a(o))}const i=v_("auth");return i&&gk(n,`http://${i}`),n}$S("Browser");var KS="firebase",YS="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hr(KS,YS,"app");const GS={apiKey:"AIzaSyA7txSrK2d93AHwUG03g95fVaTQ_xZaJxE",authDomain:"ema-john-with-firebase-a-7d329.firebaseapp.com",projectId:"ema-john-with-firebase-a-7d329",storageBucket:"ema-john-with-firebase-a-7d329.appspot.com",messagingSenderId:"533516862304",appId:"1:533516862304:web:ec92bc75ff935a5f551405"},QS=Kg(GS),La=T.createContext(null),so=VS(QS),qS=({children:e})=>{const[t,n]=T.useState(null),[r,i]=T.useState(!0),a=(u,c)=>(i(!0),Pk(so,u,c)),o=(u,c)=>(i(!0),xk(so,u,c)),s=()=>Ok(so);T.useEffect(()=>{const u=Nk(so,c=>{n(c),i(!1)});return()=>u()},[]);const l={user:t,loading:r,createUser:a,signIn:o,logOut:s};return x(La.Provider,{value:l,children:e})},XS=()=>{const{user:e,logOut:t}=T.useContext(La);console.log(e);const n=()=>{t().then(r=>{}).catch(r=>{console.log(r)})};return q("nav",{className:"header",children:[x("img",{src:V1,alt:""}),q("div",{children:[x(Ut,{to:"/",children:"Shop"}),x(Ut,{to:"/orders",children:"Orders"}),x(Ut,{to:"/inventory",children:"Inventory"}),x(Ut,{to:"/login",children:"Login"}),x(Ut,{to:"/signup",children:"Sign Up"}),e&&q("span",{className:"text-white",children:["Welcome ",e.email," ",x("button",{onClick:n,children:"Log Out"})]})]})]})},JS=e=>{let t=$s();const n=t[e];if(!n)t[e]=1;else{const r=n+1;t[e]=r}localStorage.setItem("shopping-cart",JSON.stringify(t))},ZS=e=>{const t=$s();e in t&&(delete t[e],localStorage.setItem("shopping-cart",JSON.stringify(t)))},$s=()=>{let e={};const t=localStorage.getItem("shopping-cart");return t&&(e=JSON.parse(t)),e},Pv=()=>{localStorage.removeItem("shopping-cart")};function zh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zh(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gs(e){return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(e)}function eI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jh(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tI(e,t,n){return t&&jh(e.prototype,t),n&&jh(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ef(e,t){return rI(e)||aI(e,t)||xv(e,t)||sI()}function Ma(e){return nI(e)||iI(e)||xv(e)||oI()}function nI(e){if(Array.isArray(e))return Qu(e)}function rI(e){if(Array.isArray(e))return e}function iI(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function aI(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function xv(e,t){if(e){if(typeof e=="string")return Qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qu(e,t)}}function Qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function oI(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $h=function(){},kf={},Rv={},Av=null,Nv={mark:$h,measure:$h};try{typeof window<"u"&&(kf=window),typeof document<"u"&&(Rv=document),typeof MutationObserver<"u"&&(Av=MutationObserver),typeof performance<"u"&&(Nv=performance)}catch{}var lI=kf.navigator||{},Bh=lI.userAgent,Hh=Bh===void 0?"":Bh,An=kf,se=Rv,Wh=Av,lo=Nv;An.document;var nn=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",Ov=~Hh.indexOf("MSIE")||~Hh.indexOf("Trident/"),uo,co,fo,ho,po,Qt="___FONT_AWESOME___",qu=16,Dv="fa",Lv="svg-inline--fa",lr="data-fa-i2svg",Xu="data-fa-pseudo-element",uI="data-fa-pseudo-element-pending",Sf="data-prefix",If="data-icon",Vh="fontawesome-i2svg",cI="async",fI=["HTML","HEAD","STYLE","SCRIPT"],Mv=function(){try{return!0}catch{return!1}}(),ae="classic",me="sharp",Cf=[ae,me];function Ua(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var va=Ua((uo={},ke(uo,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ke(uo,me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),uo)),ya=Ua((co={},ke(co,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ke(co,me,{solid:"fass",regular:"fasr"}),co)),wa=Ua((fo={},ke(fo,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ke(fo,me,{fass:"fa-solid",fasr:"fa-regular"}),fo)),dI=Ua((ho={},ke(ho,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ke(ho,me,{"fa-solid":"fass","fa-regular":"fasr"}),ho)),hI=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Uv="fa-layers-text",pI=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mI=Ua((po={},ke(po,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ke(po,me,{900:"fass",400:"fasr"}),po)),Fv=[1,2,3,4,5,6,7,8,9,10],gI=Fv.concat([11,12,13,14,15,16,17,18,19,20]),vI=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_a=new Set;Object.keys(ya[ae]).map(_a.add.bind(_a));Object.keys(ya[me]).map(_a.add.bind(_a));var yI=[].concat(Cf,Ma(_a),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yn.GROUP,Yn.SWAP_OPACITY,Yn.PRIMARY,Yn.SECONDARY]).concat(Fv.map(function(e){return"".concat(e,"x")})).concat(gI.map(function(e){return"w-".concat(e)})),Vi=An.FontAwesomeConfig||{};function wI(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function _I(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var EI=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];EI.forEach(function(e){var t=Ef(e,2),n=t[0],r=t[1],i=_I(wI(n));i!=null&&(Vi[r]=i)})}var zv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Dv,replacementClass:Lv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vi.familyPrefix&&(Vi.cssPrefix=Vi.familyPrefix);var ni=A(A({},zv),Vi);ni.autoReplaceSvg||(ni.observeMutations=!1);var L={};Object.keys(zv).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){ni[e]=n,Ki.forEach(function(r){return r(L)})},get:function(){return ni[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){ni.cssPrefix=t,Ki.forEach(function(n){return n(L)})},get:function(){return ni.cssPrefix}});An.FontAwesomeConfig=L;var Ki=[];function kI(e){return Ki.push(e),function(){Ki.splice(Ki.indexOf(e),1)}}var sn=qu,Ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function SI(e){if(!(!e||!nn)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return se.head.insertBefore(t,r),e}}var II="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ea(){for(var e=12,t="";e-- >0;)t+=II[Math.random()*62|0];return t}function hi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function bf(e){return e.classList?hi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function jv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function CI(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(jv(e[n]),'" ')},"").trim()}function Bs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Tf(e){return e.size!==Ct.size||e.x!==Ct.x||e.y!==Ct.y||e.rotate!==Ct.rotate||e.flipX||e.flipY}function bI(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function TI(e){var t=e.transform,n=e.width,r=n===void 0?qu:n,i=e.height,a=i===void 0?qu:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ov?l+="translate(".concat(t.x/sn-r/2,"em, ").concat(t.y/sn-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/sn,"em), calc(-50% + ").concat(t.y/sn,"em)) "):l+="translate(".concat(t.x/sn,"em, ").concat(t.y/sn,"em) "),l+="scale(".concat(t.size/sn*(t.flipX?-1:1),", ").concat(t.size/sn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var PI=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $v(){var e=Dv,t=Lv,n=L.cssPrefix,r=L.replacementClass,i=PI;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Kh=!1;function zl(){L.autoAddCss&&!Kh&&(SI($v()),Kh=!0)}var xI={mixout:function(){return{dom:{css:$v,insertCss:zl}}},hooks:function(){return{beforeDOMElementCreation:function(){zl()},beforeI2svg:function(){zl()}}}},qt=An||{};qt[Qt]||(qt[Qt]={});qt[Qt].styles||(qt[Qt].styles={});qt[Qt].hooks||(qt[Qt].hooks={});qt[Qt].shims||(qt[Qt].shims=[]);var vt=qt[Qt],Bv=[],RI=function e(){se.removeEventListener("DOMContentLoaded",e),vs=1,Bv.map(function(t){return t()})},vs=!1;nn&&(vs=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),vs||se.addEventListener("DOMContentLoaded",RI));function AI(e){nn&&(vs?setTimeout(e,0):Bv.push(e))}function Fa(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?jv(e):"<".concat(t," ").concat(CI(r),">").concat(a.map(Fa).join(""),"</").concat(t,">")}function Yh(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var NI=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},jl=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?NI(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function OI(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ju(e){var t=OI(e);return t.length===1?t[0].toString(16):null}function DI(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Gh(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Zu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Gh(t);typeof vt.hooks.addPack=="function"&&!i?vt.hooks.addPack(e,Gh(t)):vt.styles[e]=A(A({},vt.styles[e]||{}),a),e==="fas"&&Zu("fa",t)}var mo,go,vo,Or=vt.styles,LI=vt.shims,MI=(mo={},ke(mo,ae,Object.values(wa[ae])),ke(mo,me,Object.values(wa[me])),mo),Pf=null,Hv={},Wv={},Vv={},Kv={},Yv={},UI=(go={},ke(go,ae,Object.keys(va[ae])),ke(go,me,Object.keys(va[me])),go);function FI(e){return~yI.indexOf(e)}function zI(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!FI(i)?i:null}var Gv=function(){var t=function(a){return jl(Or,function(o,s,l){return o[l]=jl(s,a,{}),o},{})};Hv=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Wv=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Yv=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Or||L.autoFetchSvg,r=jl(LI,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Vv=r.names,Kv=r.unicodes,Pf=Hs(L.styleDefault,{family:L.familyDefault})};kI(function(e){Pf=Hs(e.styleDefault,{family:L.familyDefault})});Gv();function xf(e,t){return(Hv[e]||{})[t]}function jI(e,t){return(Wv[e]||{})[t]}function Gn(e,t){return(Yv[e]||{})[t]}function Qv(e){return Vv[e]||{prefix:null,iconName:null}}function $I(e){var t=Kv[e],n=xf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Nn(){return Pf}var Rf=function(){return{prefix:null,iconName:null,rest:[]}};function Hs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,i=va[r][e],a=ya[r][e]||ya[r][i],o=e in vt.styles?e:null;return a||o||null}var Qh=(vo={},ke(vo,ae,Object.keys(wa[ae])),ke(vo,me,Object.keys(wa[me])),vo);function Ws(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ke(t,ae,"".concat(L.cssPrefix,"-").concat(ae)),ke(t,me,"".concat(L.cssPrefix,"-").concat(me)),t),o=null,s=ae;(e.includes(a[ae])||e.some(function(u){return Qh[ae].includes(u)}))&&(s=ae),(e.includes(a[me])||e.some(function(u){return Qh[me].includes(u)}))&&(s=me);var l=e.reduce(function(u,c){var d=zI(L.cssPrefix,c);if(Or[c]?(c=MI[s].includes(c)?dI[s][c]:c,o=c,u.prefix=c):UI[s].indexOf(c)>-1?(o=c,u.prefix=Hs(c,{family:s})):d?u.iconName=d:c!==L.replacementClass&&c!==a[ae]&&c!==a[me]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?Qv(u.iconName):{},g=Gn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Or.far&&Or.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},Rf());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===me&&(Or.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Nn()||"fas"),l}var BI=function(){function e(){eI(this,e),this.definitions={}}return tI(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Zu(s,o[s]);var l=wa[ae][s];l&&Zu(l,o[s]),Gv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),qh=[],Dr={},Kr={},HI=Object.keys(Kr);function WI(e,t){var n=t.mixoutsTo;return qh=e,Dr={},Object.keys(Kr).forEach(function(r){HI.indexOf(r)===-1&&delete Kr[r]}),qh.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),gs(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Dr[o]||(Dr[o]=[]),Dr[o].push(a[o])})}r.provides&&r.provides(Kr)}),n}function ec(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Dr[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ur(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Dr[e]||[];i.forEach(function(a){a.apply(null,n)})}function Xt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Kr[e]?Kr[e].apply(null,t):void 0}function tc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Nn();if(t)return t=Gn(n,t)||t,Yh(qv.definitions,n,t)||Yh(vt.styles,n,t)}var qv=new BI,VI=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,ur("noAuto")},KI={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nn?(ur("beforeI2svg",t),Xt("pseudoElements2svg",t),Xt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,AI(function(){GI({autoReplaceSvgRoot:n}),ur("watch",t)})}},YI={icon:function(t){if(t===null)return null;if(gs(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Hs(t[0]);return{prefix:r,iconName:Gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(hI))){var i=Ws(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Nn(),iconName:Gn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Nn();return{prefix:a,iconName:Gn(a,t)||t}}}},Ze={noAuto:VI,config:L,dom:KI,parse:YI,library:qv,findIconDefinition:tc,toHtml:Fa},GI=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(vt.styles).length>0||L.autoFetchSvg)&&nn&&L.autoReplaceSvg&&Ze.dom.i2svg({node:r})};function Vs(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Fa(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nn){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function QI(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Tf(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Bs(A(A({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function qI(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:o}),children:r}]}]}function Af(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,y=r.found?r:n,_=y.width,S=y.height,f=i==="fak",h=[L.replacementClass,a?"".concat(L.cssPrefix,"-").concat(a):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),m={children:[],attributes:A(A({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(S)})},v=f&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/S*16*.0625,"em")}:{};g&&(m.attributes[lr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ea())},children:[l]}),delete m.attributes.title);var k=A(A({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},v),d.styles)}),b=r.found&&n.found?Xt("generateAbstractMask",k)||{children:[],attributes:{}}:Xt("generateAbstractIcon",k)||{children:[],attributes:{}},P=b.children,R=b.attributes;return k.children=P,k.attributes=R,s?qI(k):QI(k)}function Xh(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[lr]="");var c=A({},o.styles);Tf(i)&&(c.transform=TI({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Bs(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function XI(e){var t=e.content,n=e.title,r=e.extra,i=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Bs(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $l=vt.styles;function nc(e){var t=e[0],n=e[1],r=e.slice(4),i=Ef(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Yn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Yn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var JI={found:!1,width:512,height:512};function ZI(e,t){!Mv&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function rc(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=Nn()),new Promise(function(r,i){if(Xt("missingIconAbstract"),n==="fa"){var a=Qv(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&$l[t]&&$l[t][e]){var o=$l[t][e];return r(nc(o))}ZI(e,t),r(A(A({},JI),{},{icon:L.showMissingIcons&&e?Xt("missingIconAbstract")||{}:{}}))})}var Jh=function(){},ic=L.measurePerformance&&lo&&lo.mark&&lo.measure?lo:{mark:Jh,measure:Jh},Oi='FA "6.3.0"',eC=function(t){return ic.mark("".concat(Oi," ").concat(t," begins")),function(){return Xv(t)}},Xv=function(t){ic.mark("".concat(Oi," ").concat(t," ends")),ic.measure("".concat(Oi," ").concat(t),"".concat(Oi," ").concat(t," begins"),"".concat(Oi," ").concat(t," ends"))},Nf={begin:eC,end:Xv},Do=function(){};function Zh(e){var t=e.getAttribute?e.getAttribute(lr):null;return typeof t=="string"}function tC(e){var t=e.getAttribute?e.getAttribute(Sf):null,n=e.getAttribute?e.getAttribute(If):null;return t&&n}function nC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function rC(){if(L.autoReplaceSvg===!0)return Lo.replace;var e=Lo[L.autoReplaceSvg];return e||Lo.replace}function iC(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function aC(e){return se.createElement(e)}function Jv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?iC:aC:n;if(typeof e=="string")return se.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Jv(o,{ceFn:r}))}),i}function oC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Lo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Jv(i),n)}),n.getAttribute(lr)===null&&L.keepOriginalSource){var r=se.createComment(oC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~bf(n).indexOf(L.replacementClass))return Lo.replace(t);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===L.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Fa(s)}).join(`
`);n.setAttribute(lr,""),n.innerHTML=o}};function ep(e){e()}function Zv(e,t){var n=typeof t=="function"?t:Do;if(e.length===0)n();else{var r=ep;L.mutateApproach===cI&&(r=An.requestAnimationFrame||ep),r(function(){var i=rC(),a=Nf.begin("mutate");e.map(i),a(),n()})}}var Of=!1;function ey(){Of=!0}function ac(){Of=!1}var ys=null;function tp(e){if(Wh&&L.observeMutations){var t=e.treeCallback,n=t===void 0?Do:t,r=e.nodeCallback,i=r===void 0?Do:r,a=e.pseudoElementsCallback,o=a===void 0?Do:a,s=e.observeMutationsRoot,l=s===void 0?se:s;ys=new Wh(function(u){if(!Of){var c=Nn();hi(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Zh(d.addedNodes[0])&&(L.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Zh(d.target)&&~vI.indexOf(d.attributeName))if(d.attributeName==="class"&&tC(d.target)){var p=Ws(bf(d.target)),g=p.prefix,y=p.iconName;d.target.setAttribute(Sf,g||c),y&&d.target.setAttribute(If,y)}else nC(d.target)&&i(d.target)})}}),nn&&ys.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sC(){ys&&ys.disconnect()}function lC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function uC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ws(bf(e));return i.prefix||(i.prefix=Nn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=jI(i.prefix,e.innerText)||xf(i.prefix,Ju(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function cC(e){var t=hi(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||Ea()):(t["aria-hidden"]="true",t.focusable="false")),t}function fC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function np(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=uC(e),r=n.iconName,i=n.prefix,a=n.rest,o=cC(e),s=ec("parseNodeAttributes",{},e),l=t.styleParser?lC(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var dC=vt.styles;function ty(e){var t=L.autoReplaceSvg==="nest"?np(e,{styleParser:!1}):np(e);return~t.extra.classes.indexOf(Uv)?Xt("generateLayersText",e,t):Xt("generateSvgReplacementMutation",e,t)}var On=new Set;Cf.map(function(e){On.add("fa-".concat(e))});Object.keys(va[ae]).map(On.add.bind(On));Object.keys(va[me]).map(On.add.bind(On));On=Ma(On);function rp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nn)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat(Vh,"-").concat(d))},i=function(d){return n.remove("".concat(Vh,"-").concat(d))},a=L.autoFetchSvg?On:Cf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(dC));a.includes("fa")||a.push("fa");var o=[".".concat(Uv,":not([").concat(lr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(lr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=hi(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Nf.begin("onTree"),u=s.reduce(function(c,d){try{var p=ty(d);p&&c.push(p)}catch(g){Mv||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){Zv(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function hC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ty(e).then(function(n){n&&Zv([n],t)})}function pC(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:tc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:tc(i||{})),e(r,A(A({},n),{},{mask:i}))}}var mC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ct:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,g=n.titleId,y=g===void 0?null:g,_=n.classes,S=_===void 0?[]:_,f=n.attributes,h=f===void 0?{}:f,m=n.styles,v=m===void 0?{}:m;if(t){var k=t.prefix,b=t.iconName,P=t.icon;return Vs(A({type:"icon"},t),function(){return ur("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(p?h["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||Ea()):(h["aria-hidden"]="true",h.focusable="false")),Af({icons:{main:nc(P),mask:l?nc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:b,transform:A(A({},Ct),i),symbol:o,title:p,maskId:c,titleId:y,extra:{attributes:h,styles:v,classes:S}})})}},gC={mixout:function(){return{icon:pC(mC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=rp,n.nodeCallback=hC,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?se:r,a=n.callback,o=a===void 0?function(){}:a;return rp(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,y){Promise.all([rc(i,s),c.iconName?rc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var S=Ef(_,2),f=S[0],h=S[1];g([n,Af({icons:{main:f,mask:h},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Bs(s);l.length>0&&(i.style=l);var u;return Tf(o)&&(u=Xt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},vC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Vs({type:"layer"},function(){ur("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Ma(a)).join(" ")},children:o}]})}}}},yC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Vs({type:"counter",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),XI({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Ma(s))}})})}}}},wC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ct:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Vs({type:"text",content:n},function(){return ur("beforeDOMElementCreation",{content:n,params:r}),Xh({content:n,transform:A(A({},Ct),a),title:s,extra:{attributes:d,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Ma(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Ov){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Xh({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},_C=new RegExp('"',"ug"),ip=[1105920,1112319];function EC(e){var t=e.replace(_C,""),n=DI(t,0),r=n>=ip[0]&&n<=ip[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ju(i?t[0]:t),isSecondary:r||i}}function ap(e,t){var n="".concat(uI).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=hi(e.children),o=a.filter(function(P){return P.getAttribute(Xu)===t})[0],s=An.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(pI),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?me:ae,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ya[p][l[2].toLowerCase()]:mI[p][u],y=EC(d),_=y.value,S=y.isSecondary,f=l[0].startsWith("FontAwesome"),h=xf(g,_),m=h;if(f){var v=$I(_);v.iconName&&v.prefix&&(h=v.iconName,g=v.prefix)}if(h&&!S&&(!o||o.getAttribute(Sf)!==g||o.getAttribute(If)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var k=fC(),b=k.extra;b.attributes[Xu]=t,rc(h,g).then(function(P){var R=Af(A(A({},k),{},{icons:{main:P,mask:Rf()},prefix:g,iconName:m,extra:b,watchable:!0})),U=se.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=R.map(function(H){return Fa(H)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function kC(e){return Promise.all([ap(e,"::before"),ap(e,"::after")])}function SC(e){return e.parentNode!==document.head&&!~fI.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Xu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function op(e){if(nn)return new Promise(function(t,n){var r=hi(e.querySelectorAll("*")).filter(SC).map(kC),i=Nf.begin("searchPseudoElements");ey(),Promise.all(r).then(function(){i(),ac(),t()}).catch(function(){i(),ac(),n()})})}var IC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=op,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?se:r;L.searchPseudoElements&&op(i)}}},sp=!1,CC={mixout:function(){return{dom:{unwatch:function(){ey(),sp=!0}}}},hooks:function(){return{bootstrap:function(){tp(ec("mutationObserverCallbacks",{}))},noAuto:function(){sC()},watch:function(n){var r=n.observeMutationsRoot;sp?ac():tp(ec("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},lp=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},bC={mixout:function(){return{parse:{transform:function(n){return lp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=lp(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:A({},g.outer),children:[{tag:"g",attributes:A({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),g.path)}]}]}}}},Bl={x:0,y:0,width:"100%",height:"100%"};function up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function TC(e){return e.tag==="g"?e.children:[e]}var PC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ws(i.split(" ").map(function(o){return o.trim()})):Rf();return a.prefix||(a.prefix=Nn()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,p=o.icon,g=bI({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:A(A({},Bl),{},{fill:"white"})},_=c.children?{children:c.children.map(up)}:{},S={tag:"g",attributes:A({},g.inner),children:[up(A({tag:c.tag,attributes:A(A({},c.attributes),g.path)},_))]},f={tag:"g",attributes:A({},g.outer),children:[S]},h="mask-".concat(s||Ea()),m="clip-".concat(s||Ea()),v={tag:"mask",attributes:A(A({},Bl),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,f]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:TC(p)},v]};return r.push(k,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},Bl)}),{children:r,attributes:i}}}},xC={provides:function(t){var n=!1;An.matchMedia&&(n=An.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},RC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},AC=[xI,gC,vC,yC,wC,IC,CC,bC,PC,xC,RC];WI(AC,{mixoutsTo:Ze});Ze.noAuto;Ze.config;Ze.library;Ze.dom;var oc=Ze.parse;Ze.findIconDefinition;Ze.toHtml;var NC=Ze.icon;Ze.layer;Ze.text;Ze.counter;var K={},OC={get exports(){return K},set exports(e){K=e}},DC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",LC=DC,MC=LC;function ny(){}function ry(){}ry.resetWarningCache=ny;var UC=function(){function e(r,i,a,o,s,l){if(l!==MC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:ry,resetWarningCache:ny};return n.PropTypes=n,n};OC.exports=UC();function cp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cp(Object(n),!0).forEach(function(r){Lr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ws(e){return ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ws(e)}function Lr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function FC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function zC(e,t){if(e==null)return{};var n=FC(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sc(e){return jC(e)||$C(e)||BC(e)||HC()}function jC(e){if(Array.isArray(e))return lc(e)}function $C(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function BC(e,t){if(e){if(typeof e=="string")return lc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lc(e,t)}}function lc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function HC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WC(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,g=e.inverse,y=e.border,_=e.listItem,S=e.flip,f=e.size,h=e.rotation,m=e.pull,v=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":g,"fa-border":y,"fa-li":_,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Lr(t,"fa-".concat(f),typeof f<"u"&&f!==null),Lr(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Lr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Lr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(v).map(function(k){return v[k]?k:null}).filter(function(k){return k})}function VC(e){return e=e-0,e===e}function iy(e){return VC(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var KC=["style"];function YC(e){return e.charAt(0).toUpperCase()+e.slice(1)}function GC(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=iy(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[YC(i)]=a:t[i]=a,t},{})}function ay(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ay(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=GC(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[iy(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=zC(n,KC);return i.attrs.style=yn(yn({},i.attrs.style),o),e.apply(void 0,[t.tag,yn(yn({},i.attrs),s)].concat(sc(r)))}var oy=!1;try{oy=!0}catch{}function QC(){if(!oy&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function fp(e){if(e&&ws(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(oc.icon)return oc.icon(e);if(e===null)return null;if(e&&ws(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Hl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Lr({},e,t):{}}var hr=hc.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=fp(n),c=Hl("classes",[].concat(sc(WC(e)),sc(a.split(" ")))),d=Hl("transform",typeof e.transform=="string"?oc.transform(e.transform):e.transform),p=Hl("mask",fp(r)),g=NC(u,yn(yn(yn(yn({},c),d),p),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!g)return QC("Could not find icon",u),null;var y=g.abstract,_={ref:t};return Object.keys(e).forEach(function(S){hr.defaultProps.hasOwnProperty(S)||(_[S]=e[S])}),qC(y[0],_)});hr.displayName="FontAwesomeIcon";hr.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};hr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var qC=ay.bind(null,hc.createElement),XC={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},sy=XC,JC={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},ZC=JC;const ly=({cart:e,handleClearCart:t,children:n})=>{let r=0,i=0,a=0;for(const l of e)r=r+l.price*l.quantity,i=i+l.shipping,a=a+l.quantity;const o=r*7/100,s=r+i+o;return q("div",{className:"cart",children:[x("h4",{children:"Order Summary"}),q("p",{children:["Selected Items: ",a]}),q("p",{children:["Total Price: $",r]}),q("p",{children:["Shipping: $",i]}),q("p",{children:["Tax: $",o.toFixed(2)]}),q("h6",{children:["Grand Total: $",s.toFixed(2)," "]}),q("button",{onClick:t,className:"btn-clear-cart",children:[x("span",{children:"Clear Cart "}),x(hr,{icon:sy})]}),n]})};const eb=e=>{const{img:t,name:n,seller:r,ratings:i,price:a}=e.product,o=e.handleAddToCart;return q("div",{className:"product",children:[x("img",{src:t,alt:""}),q("div",{className:"product-info",children:[x("h6",{className:"product-name",children:n}),q("p",{children:["Price: $",a]}),q("p",{children:["Manufacturer: ",r]}),q("p",{children:["Rating: ",i," Stars"]})]}),q("button",{onClick:()=>o(e.product),className:"btn-cart",children:["Add to Cart",x(hr,{icon:ZC})]})]})};const tb=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]);T.useEffect(()=>{fetch("products.json").then(o=>o.json()).then(o=>t(o))},[]),T.useEffect(()=>{const o=$s(),s=[];for(const l in o){const u=e.find(c=>c.id===l);if(u){const c=o[l];u.quantity=c,s.push(u)}}r(s)},[e]);const i=o=>{let s=[];const l=n.find(u=>u.id===o.id);l?(l.quantity=l.quantity+1,s=[...n.filter(c=>c.id!==o.id),l]):(o.quantity=1,s=[...n,o]),r(s),JS(o.id)},a=()=>{r([]),Pv()};return q("div",{className:"shop-container",children:[x("div",{className:"products-container",children:e.map(o=>x(eb,{product:o,handleAddToCart:i},o.id))}),x("div",{className:"cart-container",children:x(ly,{cart:n,handleClearCart:a,children:x(Ut,{className:"proceed-link",to:"/orders",children:x("button",{className:"btn-proceed",children:"Review Order"})})})})]})};const nb=()=>q("div",{children:[x(XS,{}),x(Xw,{})]});const rb=({product:e,handleRemoveFromCart:t})=>{const{id:n,img:r,price:i,name:a,quantity:o}=e;return q("div",{className:"review-item",children:[x("img",{src:r,alt:""}),q("div",{className:"review-details",children:[x("p",{className:"product-title",children:a}),q("p",{children:["Price: ",q("span",{className:"orange-text",children:["$",i]})]}),q("p",{children:["Order Quantity: ",x("span",{className:"orange-text",children:o})]})]}),x("button",{onClick:()=>t(n),className:"btn-delete",children:x(hr,{className:"delete-icon",icon:sy})})]})};const ib=()=>{const e=Vw(),[t,n]=T.useState(e),r=a=>{const o=t.filter(s=>s.id!==a);n(o),ZS(a)},i=()=>{n([]),Pv()};return q("div",{className:"shop-container",children:[x("div",{className:"review-container",children:t.map(a=>x(rb,{product:a,handleRemoveFromCart:r},a.id))}),x("div",{className:"cart-container",children:x(ly,{cart:t,handleClearCart:i,children:x(Ut,{className:"proceed-link",to:"/checkout",children:x("button",{className:"btn-proceed",children:"Proceed Checkout"})})})})]})},ab=()=>x("div",{children:x("h3",{children:"Inventory page"})});const ob=()=>{var s,l;const[e,t]=T.useState(!1),{signIn:n}=T.useContext(La),r=lf(),i=dr();console.log(i);const a=((l=(s=i.state)==null?void 0:s.from)==null?void 0:l.pathname)||"/";return q("div",{className:"form-container",children:[x("h2",{className:"form-title",children:"Login"}),q("form",{onSubmit:u=>{u.preventDefault();const c=u.target,d=c.email.value,p=c.password.value;console.log(d,p),n(d,p).then(g=>{const y=g.user;console.log(y),c.reset(),r(a,{replace:!0})}).catch(g=>{console.log(g)})},action:"",children:[q("div",{className:"form-control",children:[x("label",{htmlFor:"email",children:"Email"}),x("input",{type:"email",name:"email",id:"",required:!0})]}),q("div",{className:"form-control",children:[x("label",{htmlFor:"password",children:"Password"}),x("input",{type:e?"text":"password",name:"password",id:"",required:!0}),x("p",{onClick:()=>t(!e),children:x("small",{children:e?x("span",{children:"Hide Password"}):x("span",{children:"Show Password"})})})]}),x("input",{className:"btn-submit",type:"submit",value:"Login"})]}),x("p",{children:q("small",{children:["New to Ema-John? ",x(Ut,{to:"/signup",children:"Create New Account"})]})})]})},sb=async()=>{const t=await(await fetch("products.json")).json(),n=$s(),r=[];for(const i in n){const a=t.find(o=>o.id===i);if(a){const o=n[i];a.quantity=o,r.push(a)}}return r},lb=()=>x("div",{children:x("h2",{children:"Checkout your order!!! page "})});const ub=()=>{const[e,t]=T.useState(""),{createUser:n}=T.useContext(La);return q("div",{className:"form-container",children:[x("h2",{className:"form-title",children:"Sign Up"}),q("form",{onSubmit:i=>{i.preventDefault();const a=i.target,o=a.email.value,s=a.password.value,l=a.confirm.value;if(console.log(o,s,l),t(""),s!==l){t("Your password did not match");return}else if(s.length<6){t("Password must be 6 characters long.");return}n(o,s).then(u=>{const c=u.user;console.log(c)}).catch(u=>{console.log(u),t(u.message)})},action:"",children:[q("div",{className:"form-control",children:[x("label",{htmlFor:"email",children:"Email"}),x("input",{type:"email",name:"email",id:"",required:!0})]}),q("div",{className:"form-control",children:[x("label",{htmlFor:"password",children:"Password"}),x("input",{type:"password",name:"password",id:"",required:!0})]}),q("div",{className:"form-control",children:[x("label",{htmlFor:"confirm",children:"Confirm Password"}),x("input",{type:"password",name:"confirm",id:"",required:!0})]}),x("input",{className:"btn-submit",type:"submit",value:"Sign Up"})]}),x("p",{children:q("small",{children:["Already have an account? ",x(Ut,{to:"/login",children:"Login"})]})}),x("p",{className:"text-error",children:e})]})},dp=({children:e})=>{const{user:t,loading:n}=T.useContext(La),r=dr();return console.log(r),n?x("div",{children:"Loading..."}):t?e:x(qw,{to:"/login",state:{from:r},replace:!0})},cb=i_([{path:"/",element:x(nb,{}),children:[{path:"/",element:x(tb,{})},{path:"orders",element:x(ib,{}),loader:sb},{path:"inventory",element:x(dp,{children:x(ab,{})})},{path:"checkout",element:x(dp,{children:x(lb,{})})},{path:"login",element:x(ob,{})},{path:"signup",element:x(ub,{})}]}]);Wl.createRoot(document.getElementById("root")).render(x(hc.StrictMode,{children:x(qS,{children:x(Gw,{router:cb})})}));
