var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),_=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for(`react.element`),g=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function j(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&M(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function M(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return ke.call(Mt,e)?!0:ke.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(bu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,`passive`,{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=f({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=f({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(f({},Nn,{dataTransfer:0})),In=Tn(f({},On,{relatedTarget:0})),Ln=Tn(f({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(f({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(f({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(f({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(f({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(f({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(f({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(f({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=Tn(f({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=hn&&`CompositionEvent`in window,$n=null;hn&&`documentMode`in document&&($n=document.documentMode);var er=hn&&`TextEvent`in window&&!$n,tr=hn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function N(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function sr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=xn(),bn=yn=vn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){yd(e,0)}function mr(e){if(Vt(Ct(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(hn){var _r;if(hn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,cn(e)),pn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=hn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Ht(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=Ed(Ir,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};hn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),Ot(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=pi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=pi(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=pi(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ke(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Gi(e){if(e!==Ri)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=Ri=null,F=!1}function qi(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=fe(null),Xi=null,Zi=null;function Qi(e,t,n){k(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,pe(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,da={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new ca,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=dd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=D.S;D.S=function(e,t){eu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=fe(null);function Ca(){var e=Sa.current;return e===null?q.pooledCache:e}function wa(e,t){t===null?k(Sa,Sa.current):k(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:da._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===m?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case g:return n=_i(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case E:return t=Ma(t),f(e,t,n)}if(ce(t)||ae(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===C)return f(e,oa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case g:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Ma(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===C)return p(e,t,oa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case g:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Ma(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===C)return m(e,t,n,oa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function _(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case g:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Ma(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),_(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===C)return b(e,r,oa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(Y&p)===p:(r&p)===p){p!==0&&p===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;p=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,p);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,p=typeof h==`function`?h.call(_,d,p):h,p==null)break a;d=f({},d,p);break a;case 2:Wa=!0}}p=s.callback,p!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=m,c=d):u=u.next=m,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=fe(null),ro=fe(0);function io(e,t){e=Ul,k(ro,e),k(no,t),Ul=e|t.baseLanes}function ao(){k(ro,Ul),k(no,no.current)}function oo(){Ul=ro.current,pe(no),pe(ro)}var so=fe(null),co=null;function lo(e){var t=e.alternate;k(ho,ho.current&1),k(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){k(ho,ho.current),k(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(k(ho,ho.current),k(so,e),co===null&&(co=e)):po(e)}function po(){k(ho,ho.current),k(so,so.current)}function mo(e){pe(so),co===e&&(co=null),pe(ho)}var ho=fe(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,vo=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Vs:Hs,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){D.H=Bs;var t=L!==null&&L.next!==null;if(_o=0,vo=L=I=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||ac||(e=e.dependencies,e!==null&&ra(e)&&(ac=!0))}function ko(e,t,n,r){I=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,vo=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Us,o=t(n,r)}while(bo);return o}function Ao(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}_o=0,vo=L=I=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vo===null?I.memoizedState=vo=e:vo=vo.next=e,vo}function z(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=vo===null?I.memoizedState:vo.next;if(t!==null)vo=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},vo===null?I.memoizedState=vo=e:vo=vo.next=e}return vo}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=ja(wo,e,t),t=I,(vo===null?t.memoizedState:vo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Vs:Hs),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return aa(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),L,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((_o&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(ac=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(ac=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=I,a=z(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,ac=!0),a=a.queue,ps(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||vo!==null&&vo.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||_o&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Fo(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Jo(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,L,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(F){var n=q.formState;if(n!==null){a:{var r=I;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Yo(!1),a=Ls.bind(null,I,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),L,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=L;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Fo(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function B(){return z().memoizedState}function us(e,t,n,r){var i=Po();I.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&Eo(r,L.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(I.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Fo(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=z().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return Dr(n,t)?n:no.current===null?!(_o&42)||_o&1073741824&&!(Y&261930)?(ac=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),Dr(e,t)||(ac=!0),e)}function Ts(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ls(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,ba(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,le,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return aa(Qf)}function js(){return z().memoizedState}function Ms(){return z().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=qa(n);var r=Ja(t,e,n);r!==null&&(hu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),V(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),q===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),V(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function V(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Bs={readContext:aa,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Bs.useEffectEvent=R;var Vs={readContext:aa,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=Po();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=q.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Hs={readContext:aa,use:Lo,useCallback:xs,useContext:aa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Bo,useRef:B,useState:function(){return Bo(zo)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(z(),L.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:js,useHostTransitionStatus:As,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),L,e,t)},useMemoCache:Ro,useCacheRefresh:Ms};Hs.useEffectEvent=hs;var Us={readContext:aa,use:Lo,useCallback:xs,useContext:aa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Ho,useRef:B,useState:function(){return Ho(zo)},useDebugValue:bs,useDeferredValue:function(e,t){var n=z();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:js,useHostTransitionStatus:As,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,L,e,t)},useMemoCache:Ro,useCacheRefresh:Ms};Us.useEffectEvent=hs;function Ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:f({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(hu(t,e,n),Ya(t,e,n))}};function Ks(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gs.enqueueReplaceState(t,t.state,null)}function Js(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=f({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ys(e){ti(e)}function Xs(e){console.error(e)}function Zs(e){ti(e)}function Qs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Qs(e,t)},n}function tc(e){return e=qa(e),e.tag=3,e}function nc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){$s(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){$s(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=so.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=ec(e.stateNode,r,a),Xa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ec(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=tc(a),nc(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var ic=Error(i(461)),ac=!1;function H(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!ac?(Mo(e,t,i),kc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,H(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(ac=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(ac=!0);else return t.lanes=e.lanes,kc(e,t,i)}return hc(e,t,n,r,i)}function U(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return H(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:da._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Ha(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,mo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(uo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ac||na(e,t,n,!1),a=(n&e.childLanes)!==0,ac||a){if(r=q,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),ic;Du(),t=fc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=dc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return ia(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!ac?(Mo(e,t,i),kc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,H(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!ac?(Mo(e,t,a),kc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,H(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ws(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Gs.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Js(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&qs(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Ws(t,n,d,r),l=t.memoizedState),(c=Wa||Ks(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=Js(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&qs(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Ws(t,n,s,r),p=t.memoizedState),(u=Wa||Ks(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):H(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Ki(),t.flags|=256,H(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:Ta()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(ho.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?lo(t):po(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(lo(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(ac||na(e,t,n,!1),s=(n&e.childLanes)!==0,ac||s){if(s=q,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),ic;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=Ta():(l=da._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Ha(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ho.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(ho,o),H(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function jc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Qi(t,da,e.memoizedState.cache),Ki();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(ho,ho.current),r)break;return null;case 22:return t.lanes=0,U(e,t,n,t.pendingProps);case 24:Qi(t,da,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ac=!0;else{if(!Ac(e,n)&&!(t.flags&128))return ac=!1,jc(e,t,n);ac=!!(e.flags&131072)}else ac=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=Js(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Js(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,da,r),r!==o.cache&&ta(t,[da],n,!0),Qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=vc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=kc(e,t,n);break a}H(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Ri=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),H(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),mc(e,t),H(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Sc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):H(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return H(e,t,t.pendingProps,n),t.child;case 8:return H(e,t,t.pendingProps.children,n),t.child;case 12:return H(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),H(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,H(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return U(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(da),e===null?(a=Ca(),a===null&&(a=q,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),Qi(t,da,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,da,r),r!==a.cache&&ta(t,[da],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,da,r))),H(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Na=ka,Da}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:A(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(da),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=me.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=me.current,Gi(t))Ui(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mo(t),t):(mo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(mo(t),t):(mo(t),null)}return mo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return $i(t.type),W(t),null;case 19:if(pe(ho),r=t.memoizedState,r===null)return W(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return k(ho,ho.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}else{if(!a)if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return W(t),null}else 2*Pe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=ho.current,k(ho,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return mo(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(da),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(da),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(mo(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ho),null;case 4:return ye(),null;case 10:return $i(t.type),null;case 22:case 23:return mo(t),oo(),e!==null&&pe(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(da),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ii(t),t.tag){case 3:$i(da),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&mo(t);break;case 13:mo(t);break;case 19:pe(ho);break;case 10:$i(t.type);break;case 22:case 23:mo(t),oo(),e!==null&&pe(Sa);break;case 24:$i(da)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=Js(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Js(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Js(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,(n.subtreeFlags&8772)!=0):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null)if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(i(160));ul(o,s,a),G=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=aa(da),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(da).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:D.T===null?lt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||F){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Jl=e}else Jl=536870912;return e=so.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),rt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Pe(),10<a)){if(yu(r,t,Jl,!Bl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},jl(t,a,d);var m=(a&62914560)===a?$l-Pe():(a&4194048)===a?eu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&M(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Zi=Xi=null,No(e),Ia=null,La=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=hi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=tt(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ai(),n}function Cu(e,t){I=null,D.H=Bs,t===Ea||t===Oa?(t=Pa(),X=3):t===Da?(t=Pa(),X=4):X=t===ic?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Qs(e,Ci(t,e.current)))}function wu(){var e=so.current;return e===null?!0:(Y&4194048)===Y?co===null:(Y&62914560)===Y||Y&536870912?e===co:!1}function Tu(){var e=D.H;return D.H=Bs,e===null?Bs:e}function Eu(){var e=D.A;return D.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&so.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,ai()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Pe()+500,Su(e,t)):Vl=tt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Aa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=Xi=null,D.H=r,D.A=a,K=n,J===null?(q=null,Y=0,ai(),Wl):0}function ju(){for(;J!==null&&!Me();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:No(t);default:Bc(n,t),t=J=gi(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Zi=Xi=null,No(t),Ia=null,La=0;var i=t.return;try{if(rc(e,i,t,n,Y)){Wl=1,Qs(e,Ci(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Qs(e,Ci(n,e.current)),J=null;return}t.flags&32768?(F||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=ec(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=tc(2),r=Ja(t,n,2),r!==null&&(nc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Pe()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=A()),e=ci(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=et(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),ct(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=et(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ga;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Gr:case Kr:case qr:l=Ln;break;case Zr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?N(e,n):sr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=mn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=f({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=f({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=wt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=f({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=f({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=f({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=j(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=j(0),this.hiddenUpdates=j(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(hu(n,e,t),Ya(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=cn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=St(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ys,s=Xs,c=Zs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),y=s(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=u(p(),1),x=y();function S(e,t){return function(){return e.apply(t,arguments)}}var{toString:C}=Object.prototype,{getPrototypeOf:w}=Object,{iterator:T,toStringTag:ee}=Symbol,te=(e=>t=>{let n=C.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),E=e=>(e=e.toLowerCase(),t=>te(t)===e),ne=e=>t=>typeof t===e,{isArray:re}=Array,ie=ne(`undefined`);function ae(e){return e!==null&&!ie(e)&&e.constructor!==null&&!ie(e.constructor)&&D(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var oe=E(`ArrayBuffer`);function se(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&oe(e.buffer),t}var ce=ne(`string`),D=ne(`function`),O=ne(`number`),le=e=>typeof e==`object`&&!!e,ue=e=>e===!0||e===!1,de=e=>{if(te(e)!==`object`)return!1;let t=w(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(ee in e)&&!(T in e)},fe=e=>{if(!le(e)||ae(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},pe=E(`Date`),k=E(`File`),me=e=>!!(e&&e.uri!==void 0),he=e=>e&&e.getParts!==void 0,ge=E(`Blob`),_e=E(`FileList`),ve=e=>le(e)&&D(e.pipe);function ye(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var be=ye(),xe=be.FormData===void 0?void 0:be.FormData,Se=e=>{let t;return e&&(xe&&e instanceof xe||D(e.append)&&((t=te(e))===`formdata`||t===`object`&&D(e.toString)&&e.toString()===`[object FormData]`))},Ce=E(`URLSearchParams`),[we,Te,Ee,De]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(E),Oe=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function ke(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),re(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(ae(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function Ae(e,t){if(ae(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}var je=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Me=e=>!ie(e)&&e!==je;function Ne(){let{caseless:e,skipUndefined:t}=Me(this)&&this||{},n={},r=(r,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=e&&Ae(n,i)||i;de(n[a])&&de(r)?n[a]=Ne(n[a],r):de(r)?n[a]=Ne({},r):re(r)?n[a]=r.slice():(!t||!ie(r))&&(n[a]=r)};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&ke(arguments[e],r);return n}var Pe=(e,t,n,{allOwnKeys:r}={})=>(ke(t,(t,r)=>{n&&D(t)?Object.defineProperty(e,r,{value:S(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Fe=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ie=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,`constructor`,{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,`super`,{value:t.prototype}),n&&Object.assign(e.prototype,n)},Le=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&w(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Re=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},ze=e=>{if(!e)return null;if(re(e))return e;let t=e.length;if(!O(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},Be=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&w(Uint8Array)),Ve=(e,t)=>{let n=(e&&e[T]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},He=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ue=E(`HTMLFormElement`),We=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),Ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ke=E(`RegExp`),qe=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};ke(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},Je=e=>{qe(e,(t,n)=>{if(D(e)&&[`arguments`,`caller`,`callee`].indexOf(n)!==-1)return!1;let r=e[n];if(D(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},Ye=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return re(e)?r(e):r(String(e).split(t)),n},Xe=()=>{},Ze=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Qe(e){return!!(e&&D(e.append)&&e[ee]===`FormData`&&e[T])}var $e=e=>{let t=Array(10),n=(e,r)=>{if(le(e)){if(t.indexOf(e)>=0)return;if(ae(e))return e;if(!(`toJSON`in e)){t[r]=e;let i=re(e)?[]:{};return ke(e,(e,t)=>{let a=n(e,r+1);!ie(a)&&(i[t]=a)}),t[r]=void 0,i}}return e};return n(e,0)},et=E(`AsyncFunction`),tt=e=>e&&(le(e)||D(e))&&D(e.then)&&D(e.catch),nt=((e,t)=>e?setImmediate:t?((e,t)=>(je.addEventListener(`message`,({source:n,data:r})=>{n===je&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),je.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,D(je.postMessage)),A={isArray:re,isArrayBuffer:oe,isBuffer:ae,isFormData:Se,isArrayBufferView:se,isString:ce,isNumber:O,isBoolean:ue,isObject:le,isPlainObject:de,isEmptyObject:fe,isReadableStream:we,isRequest:Te,isResponse:Ee,isHeaders:De,isUndefined:ie,isDate:pe,isFile:k,isReactNativeBlob:me,isReactNative:he,isBlob:ge,isRegExp:Ke,isFunction:D,isStream:ve,isURLSearchParams:Ce,isTypedArray:Be,isFileList:_e,forEach:ke,merge:Ne,extend:Pe,trim:Oe,stripBOM:Fe,inherits:Ie,toFlatObject:Le,kindOf:te,kindOfTest:E,endsWith:Re,toArray:ze,forEachEntry:Ve,matchAll:He,isHTMLForm:Ue,hasOwnProperty:Ge,hasOwnProp:Ge,reduceDescriptors:qe,freezeMethods:Je,toObjectSet:Ye,toCamelCase:We,noop:Xe,toFiniteNumber:Ze,findKey:Ae,global:je,isContextDefined:Me,isSpecCompliantForm:Qe,toJSONObject:$e,isAsyncFn:et,isThenable:tt,setImmediate:nt,asap:typeof queueMicrotask<`u`?queueMicrotask.bind(je):typeof process<`u`&&process.nextTick||nt,isIterable:e=>e!=null&&D(e[T])},j=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return s.cause=t,s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,`message`,{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:A.toJSONObject(this.config),code:this.code,status:this.status}}};j.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,j.ERR_BAD_OPTION=`ERR_BAD_OPTION`,j.ECONNABORTED=`ECONNABORTED`,j.ETIMEDOUT=`ETIMEDOUT`,j.ERR_NETWORK=`ERR_NETWORK`,j.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,j.ERR_DEPRECATED=`ERR_DEPRECATED`,j.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,j.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,j.ERR_CANCELED=`ERR_CANCELED`,j.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,j.ERR_INVALID_URL=`ERR_INVALID_URL`;function rt(e){return A.isPlainObject(e)||A.isArray(e)}function it(e){return A.endsWith(e,`[]`)?e.slice(0,-2):e}function M(e,t,n){return e?e.concat(t).map(function(e,t){return e=it(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function at(e){return A.isArray(e)&&!e.some(rt)}var ot=A.toFlatObject(A,{},null,function(e){return/^is[A-Z]/.test(e)});function st(e,t,n){if(!A.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=A.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!A.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||l,a=n.dots,o=n.indexes,s=(n.Blob||typeof Blob<`u`&&Blob)&&A.isSpecCompliantForm(t);if(!A.isFunction(i))throw TypeError(`visitor must be a function`);function c(e){if(e===null)return``;if(A.isDate(e))return e.toISOString();if(A.isBoolean(e))return e.toString();if(!s&&A.isBlob(e))throw new j(`Blob is not supported. Use a Buffer instead.`);return A.isArrayBuffer(e)||A.isTypedArray(e)?s&&typeof Blob==`function`?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let s=e;if(A.isReactNative(t)&&A.isReactNativeBlob(e))return t.append(M(i,n,a),c(e)),!1;if(e&&!i&&typeof e==`object`){if(A.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(A.isArray(e)&&at(e)||(A.isFileList(e)||A.endsWith(n,`[]`))&&(s=A.toArray(e)))return n=it(n),s.forEach(function(e,r){!(A.isUndefined(e)||e===null)&&t.append(o===!0?M([n],r,a):o===null?n:n+`[]`,c(e))}),!1}return rt(e)?!0:(t.append(M(i,n,a),c(e)),!1)}let u=[],d=Object.assign(ot,{defaultVisitor:l,convertValue:c,isVisitable:rt});function f(e,n){if(!A.isUndefined(e)){if(u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),A.forEach(e,function(e,r){(!(A.isUndefined(e)||e===null)&&i.call(t,e,A.isString(r)?r.trim():r,n,d))===!0&&f(e,n?n.concat(r):[r])}),u.pop()}}if(!A.isObject(e))throw TypeError(`data must be an object`);return f(e),t}function ct(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`,"%00":`\0`};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function lt(e,t){this._pairs=[],e&&st(e,this,t)}var ut=lt.prototype;ut.append=function(e,t){this._pairs.push([e,t])},ut.toString=function(e){let t=e?function(t){return e.call(this,t,ct)}:ct;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function dt(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function ft(e,t,n){if(!t)return e;let r=n&&n.encode||dt,i=A.isFunction(n)?{serialize:n}:n,a=i&&i.serialize,o;if(o=a?a(t,i):A.isURLSearchParams(t)?t.toString():new lt(t,i).toString(r),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var pt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){A.forEach(this.handlers,function(t){t!==null&&e(t)})}},mt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},ht={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:lt,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},gt=c({hasBrowserEnv:()=>_t,hasStandardBrowserEnv:()=>yt,hasStandardBrowserWebWorkerEnv:()=>bt,navigator:()=>vt,origin:()=>xt}),_t=typeof window<`u`&&typeof document<`u`,vt=typeof navigator==`object`&&navigator||void 0,yt=_t&&(!vt||[`ReactNative`,`NativeScript`,`NS`].indexOf(vt.product)<0),bt=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,xt=_t&&window.location.href||`http://localhost`,St={...gt,...ht};function Ct(e,t){return st(e,new St.classes.URLSearchParams,{visitor:function(e,t,n,r){return St.isNode&&A.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}function wt(e){return A.matchAll(/\w+|\[(\w*)]/g,e).map(e=>e[0]===`[]`?``:e[1]||e[0])}function Tt(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Et(e){function t(e,n,r,i){let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&A.isArray(r)?r.length:a,s?(A.hasOwnProp(r,a)?r[a]=[r[a],n]:r[a]=n,!o):((!r[a]||!A.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&A.isArray(r[a])&&(r[a]=Tt(r[a])),!o)}if(A.isFormData(e)&&A.isFunction(e.entries)){let n={};return A.forEachEntry(e,(e,r)=>{t(wt(e),r,n,0)}),n}return null}function Dt(e,t,n){if(A.isString(e))try{return(t||JSON.parse)(e),A.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var Ot={transitional:mt,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=A.isObject(e);if(i&&A.isHTMLForm(e)&&(e=new FormData(e)),A.isFormData(e))return r?JSON.stringify(Et(e)):e;if(A.isArrayBuffer(e)||A.isBuffer(e)||A.isStream(e)||A.isFile(e)||A.isBlob(e)||A.isReadableStream(e))return e;if(A.isArrayBufferView(e))return e.buffer;if(A.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return Ct(e,this.formSerializer).toString();if((a=A.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let t=this.env&&this.env.FormData;return st(a?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType(`application/json`,!1),Dt(e)):e}],transformResponse:[function(e){let t=this.transitional||Ot.transitional,n=t&&t.forcedJSONParsing,r=this.responseType===`json`;if(A.isResponse(e)||A.isReadableStream(e))return e;if(e&&A.isString(e)&&(n&&!this.responseType||r)){let n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(e){if(n)throw e.name===`SyntaxError`?j.from(e,j.ERR_BAD_RESPONSE,this,null,this.response):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};A.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`],e=>{Ot.headers[e]={}});var kt=A.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),At=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&kt[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t},jt=Symbol(`internals`),Mt=e=>!/[\r\n]/.test(e);function Nt(e,t){if(!(e===!1||e==null)){if(A.isArray(e)){e.forEach(e=>Nt(e,t));return}if(!Mt(String(e)))throw Error(`Invalid character in header content ["${t}"]`)}}function Pt(e){return e&&String(e).trim().toLowerCase()}function Ft(e){let t=e.length;for(;t>0;){let n=e.charCodeAt(t-1);if(n!==10&&n!==13)break;--t}return t===e.length?e:e.slice(0,t)}function It(e){return e===!1||e==null?e:A.isArray(e)?e.map(It):Ft(String(e))}function Lt(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Rt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function zt(e,t,n,r,i){if(A.isFunction(r))return r.call(this,t,n);if(i&&(t=n),A.isString(t)){if(A.isString(r))return t.indexOf(r)!==-1;if(A.isRegExp(r))return r.test(t)}}function Bt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function Vt(e,t){let n=A.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Ht=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Pt(t);if(!i)throw Error(`header name must be a non-empty string`);let a=A.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(Nt(e,t),r[a||t]=It(e))}let a=(e,t)=>A.forEach(e,(e,n)=>i(e,n,t));if(A.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(A.isString(e)&&(e=e.trim())&&!Rt(e))a(At(e),t);else if(A.isObject(e)&&A.isIterable(e)){let n={},r,i;for(let t of e){if(!A.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);n[i=t[0]]=(r=n[i])?A.isArray(r)?[...r,t[1]]:[r,t[1]]:t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Pt(e),e){let n=A.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Lt(e);if(A.isFunction(t))return t.call(this,e,n);if(A.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Pt(e),e){let n=A.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||zt(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Pt(e),e){let i=A.findKey(n,e);i&&(!t||zt(n,n[i],i,t))&&(delete n[i],r=!0)}}return A.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||zt(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return A.forEach(this,(r,i)=>{let a=A.findKey(n,i);if(a){t[a]=It(r),delete t[i];return}let o=e?Bt(i):String(i).trim();o!==i&&delete t[i],t[o]=It(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return A.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&A.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[jt]=this[jt]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Pt(e);t[r]||(Vt(n,e),t[r]=!0)}return A.isArray(e)?e.forEach(r):r(e),this}};Ht.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),A.reduceDescriptors(Ht.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),A.freezeMethods(Ht);function Ut(e,t){let n=this||Ot,r=t||n,i=Ht.from(r.headers),a=r.data;return A.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Wt(e){return!!(e&&e.__CANCEL__)}var Gt=class extends j{constructor(e,t,n){super(e??`canceled`,j.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function Kt(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new j(`Request failed with status code `+n.status,[j.ERR_BAD_REQUEST,j.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function qt(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||``}function Jt(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function Yt(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var Xt=(e,t,n=3)=>{let r=0,i=Jt(50,250);return Yt(n=>{let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=a-r,c=i(s),l=a<=o;r=a,e({loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:c||void 0,estimated:c&&o&&l?(o-a)/c:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},Zt=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Qt=e=>(...t)=>A.asap(()=>e(...t)),$t=St.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,St.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(St.origin),St.navigator&&/(msie|trident)/i.test(St.navigator.userAgent)):()=>!0,en=St.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];A.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),A.isString(r)&&s.push(`path=${r}`),A.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),A.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.match(RegExp(`(?:^|; )`+e+`=([^;]*)`));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function tn(e){return typeof e==`string`?/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e):!1}function nn(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}function rn(e,t,n){let r=!tn(t);return e&&(r||n==0)?nn(e,t):t}var an=e=>e instanceof Ht?{...e}:e;function on(e,t){t||={};let n={};function r(e,t,n,r){return A.isPlainObject(e)&&A.isPlainObject(t)?A.merge.call({caseless:r},e,t):A.isPlainObject(t)?A.merge({},t):A.isArray(t)?t.slice():t}function i(e,t,n,i){if(!A.isUndefined(t))return r(e,t,n,i);if(!A.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!A.isUndefined(t))return r(void 0,t)}function o(e,t){if(!A.isUndefined(t))return r(void 0,t);if(!A.isUndefined(e))return r(void 0,e)}function s(n,i,a){if(a in t)return r(n,i);if(a in e)return r(void 0,n)}let c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(e,t,n)=>i(an(e),an(t),n,!0)};return A.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=A.hasOwnProp(c,r)?c[r]:i,o=a(e[r],t[r],r);A.isUndefined(o)&&a!==s||(n[r]=o)}),n}var sn=e=>{let t=on({},e),{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:o,auth:s}=t;if(t.headers=o=Ht.from(o),t.url=ft(rn(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&o.set(`Authorization`,`Basic `+btoa((s.username||``)+`:`+(s.password?unescape(encodeURIComponent(s.password)):``))),A.isFormData(n)){if(St.hasStandardBrowserEnv||St.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(A.isFunction(n.getHeaders)){let e=n.getHeaders(),t=[`content-type`,`content-length`];Object.entries(e).forEach(([e,n])=>{t.includes(e.toLowerCase())&&o.set(e,n)})}}if(St.hasStandardBrowserEnv&&(r&&A.isFunction(r)&&(r=r(t)),r||r!==!1&&$t(t.url))){let e=i&&a&&en.read(a);e&&o.set(i,e)}return t},cn=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=sn(e),i=r.data,a=Ht.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Ht.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());Kt(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf(`file:`)===0)||setTimeout(g)},h.onabort=function(){h&&=(n(new j(`Request aborted`,j.ECONNABORTED,e,h)),null)},h.onerror=function(t){let r=new j(t&&t.message?t.message:`Network Error`,j.ERR_NETWORK,e,h);r.event=t||null,n(r),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||mt;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new j(t,i.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,e,h)),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&A.forEach(a.toJSON(),function(e,t){h.setRequestHeader(t,e)}),A.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=Xt(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=Xt(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new Gt(null,e,h):t),h.abort(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=qt(r.url);if(_&&St.protocols.indexOf(_)===-1){n(new j(`Unsupported protocol `+_+`:`,j.ERR_BAD_REQUEST,e));return}h.send(i||null)})},ln=(e,t)=>{let{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n=new AbortController,r,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof j?t:new Gt(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new j(`timeout of ${t}ms exceeded`,j.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i));let{signal:s}=n;return s.unsubscribe=()=>A.asap(o),s}},un=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},dn=async function*(e,t){for await(let n of fn(e))yield*un(n,t)},fn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},pn=(e,t,n,r)=>{let i=dn(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},mn=64*1024,{isFunction:hn}=A,gn=(({Request:e,Response:t})=>({Request:e,Response:t}))(A.global),{ReadableStream:_n,TextEncoder:vn}=A.global,yn=(e,...t)=>{try{return!!e(...t)}catch{return!1}},bn=e=>{e=A.merge.call({skipUndefined:!0},gn,e);let{fetch:t,Request:n,Response:r}=e,i=t?hn(t):typeof fetch==`function`,a=hn(n),o=hn(r);if(!i)return!1;let s=i&&hn(_n),c=i&&(typeof vn==`function`?(e=>t=>e.encode(t))(new vn):async e=>new Uint8Array(await new n(e).arrayBuffer())),l=a&&s&&yn(()=>{let e=!1,t=new _n,r=new n(St.origin,{body:t,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`);return t.cancel(),e&&!r}),u=o&&s&&yn(()=>A.isReadableStream(new r(``).body)),d={stream:u&&(e=>e.body)};i&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!d[e]&&(d[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new j(`Response type '${e}' is not supported`,j.ERR_NOT_SUPPORT,n)})});let f=async e=>{if(e==null)return 0;if(A.isBlob(e))return e.size;if(A.isSpecCompliantForm(e))return(await new n(St.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(A.isArrayBufferView(e)||A.isArrayBuffer(e))return e.byteLength;if(A.isURLSearchParams(e)&&(e+=``),A.isString(e))return(await c(e)).byteLength},p=async(e,t)=>A.toFiniteNumber(e.getContentLength())??f(t);return async e=>{let{url:i,method:o,data:s,signal:c,cancelToken:f,timeout:m,onDownloadProgress:h,onUploadProgress:g,responseType:_,headers:v,withCredentials:y=`same-origin`,fetchOptions:b}=sn(e),x=t||fetch;_=_?(_+``).toLowerCase():`text`;let S=ln([c,f&&f.toAbortSignal()],m),C=null,w=S&&S.unsubscribe&&(()=>{S.unsubscribe()}),T;try{if(g&&l&&o!==`get`&&o!==`head`&&(T=await p(v,s))!==0){let e=new n(i,{method:`POST`,body:s,duplex:`half`}),t;if(A.isFormData(s)&&(t=e.headers.get(`content-type`))&&v.setContentType(t),e.body){let[t,n]=Zt(T,Xt(Qt(g)));s=pn(e.body,mn,t,n)}}A.isString(y)||(y=y?`include`:`omit`);let t=a&&`credentials`in n.prototype,c={...b,signal:S,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:`half`,credentials:t?y:void 0};C=a&&new n(i,c);let f=await(a?x(C,b):x(i,c)),m=u&&(_===`stream`||_===`response`);if(u&&(h||m&&w)){let e={};[`status`,`statusText`,`headers`].forEach(t=>{e[t]=f[t]});let t=A.toFiniteNumber(f.headers.get(`content-length`)),[n,i]=h&&Zt(t,Xt(Qt(h),!0))||[];f=new r(pn(f.body,mn,n,()=>{i&&i(),w&&w()}),e)}_||=`text`;let ee=await d[A.findKey(d,_)||`text`](f,e);return!m&&w&&w(),await new Promise((t,n)=>{Kt(t,n,{data:ee,headers:Ht.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:C})})}catch(t){throw w&&w(),t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)?Object.assign(new j(`Network Error`,j.ERR_NETWORK,e,C,t&&t.response),{cause:t.cause||t}):j.from(t,t&&t.code,e,C,t&&t.response)}}},xn=new Map,Sn=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=xn;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:bn(t)),l=c;return c};Sn();var Cn={http:null,xhr:cn,fetch:{get:Sn}};A.forEach(Cn,(e,t)=>{if(e){try{Object.defineProperty(e,`name`,{value:t})}catch{}Object.defineProperty(e,`adapterName`,{value:t})}});var wn=e=>`- ${e}`,Tn=e=>A.isFunction(e)||e===null||e===!1;function En(e,t){e=A.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!Tn(r)&&(i=Cn[(n=String(r)).toLowerCase()],i===void 0))throw new j(`Unknown adapter '${n}'`);if(i&&(A.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new j(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(wn).join(`
`):` `+wn(e[0]):`as no adapter specified`),`ERR_NOT_SUPPORT`)}return i}var Dn={getAdapter:En,adapters:Cn};function On(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Gt(null,e)}function kn(e){return On(e),e.headers=Ht.from(e.headers),e.data=Ut.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),Dn.getAdapter(e.adapter||Ot.adapter,e)(e).then(function(t){return On(e),t.data=Ut.call(e,e.transformResponse,t),t.headers=Ht.from(t.headers),t},function(t){return Wt(t)||(On(e),t&&t.response&&(t.response.data=Ut.call(e,e.transformResponse,t.response),t.response.headers=Ht.from(t.response.headers))),Promise.reject(t)})}var An=`1.15.0`,jn={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{jn[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var Mn={};jn.transitional=function(e,t,n){function r(e,t){return`[Axios v`+An+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new j(r(i,` has been removed`+(t?` in `+t:``)),j.ERR_DEPRECATED);return t&&!Mn[i]&&(Mn[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),e?e(n,i,a):!0}},jn.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function Nn(e,t,n){if(typeof e!=`object`)throw new j(`options must be an object`,j.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-- >0;){let a=r[i],o=t[a];if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new j(`option `+a+` must be `+n,j.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new j(`Unknown option `+a,j.ERR_BAD_OPTION)}}var Pn={assertOptions:Nn,validators:jn},Fn=Pn.validators,In=class{constructor(e){this.defaults=e||{},this.interceptors={request:new pt,response:new pt}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=on(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&Pn.assertOptions(n,{silentJSONParsing:Fn.transitional(Fn.boolean),forcedJSONParsing:Fn.transitional(Fn.boolean),clarifyTimeoutError:Fn.transitional(Fn.boolean),legacyInterceptorReqResOrdering:Fn.transitional(Fn.boolean)},!1),r!=null&&(A.isFunction(r)?t.paramsSerializer={serialize:r}:Pn.assertOptions(r,{encode:Fn.function,serialize:Fn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),Pn.assertOptions(t,{baseUrl:Fn.spelling(`baseURL`),withXsrfToken:Fn.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&A.merge(i.common,i[t.method]);i&&A.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`common`],e=>{delete i[e]}),t.headers=Ht.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||mt;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[kn.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=kn.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=on(this.defaults,e),ft(rn(e.baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}};A.forEach([`delete`,`get`,`head`,`options`],function(e){In.prototype[e]=function(t,n){return this.request(on(n||{},{method:e,url:t,data:(n||{}).data}))}}),A.forEach([`post`,`put`,`patch`],function(e){function t(t){return function(n,r,i){return this.request(on(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}In.prototype[e]=t(),In.prototype[e+`Form`]=t(!0)});var Ln=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new Gt(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function Rn(e){return function(t){return e.apply(null,t)}}function zn(e){return A.isObject(e)&&e.isAxiosError===!0}var Bn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Bn).forEach(([e,t])=>{Bn[t]=e});function Vn(e){let t=new In(e),n=S(In.prototype.request,t);return A.extend(n,In.prototype,t,{allOwnKeys:!0}),A.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Vn(on(e,t))},n}var Hn=Vn(Ot);Hn.Axios=In,Hn.CanceledError=Gt,Hn.CancelToken=Ln,Hn.isCancel=Wt,Hn.VERSION=An,Hn.toFormData=st,Hn.AxiosError=j,Hn.Cancel=Hn.CanceledError,Hn.all=function(e){return Promise.all(e)},Hn.spread=Rn,Hn.isAxiosError=zn,Hn.mergeConfig=on,Hn.AxiosHeaders=Ht,Hn.formToJSON=e=>Et(A.isHTMLForm(e)?new FormData(e):e),Hn.getAdapter=Dn.getAdapter,Hn.HttpStatusCode=Bn,Hn.default=Hn;var Un=``,Wn=`pinst_token`,Gn=e=>localStorage.setItem(Wn,e),Kn=()=>localStorage.getItem(Wn),qn=Hn.create({baseURL:Un});qn.interceptors.request.use(e=>{let t=Kn();return t&&(e.headers.Authorization=`Bearer ${t}`),e});var Jn=``,Yn=null;function Xn(){try{let e=window?.Telegram?.WebApp;if(e?.initData)return e.initData}catch{}return``}async function Zn(){let e=Xn();if(console.log(`[pinst][auth] initData`,e?`length=${e.length}`:`EMPTY`),!e){console.error(`[pinst][auth] initData is empty — Telegram WebApp not available or not inside Telegram`);return}try{let t=new URLSearchParams(e),n=t.get(`user`);console.log(`[pinst][auth] initData user field:`,n),console.log(`[pinst][auth] initData auth_date:`,t.get(`auth_date`))}catch(e){console.warn(`[pinst][auth] failed to parse initData fields:`,e)}let t=await Hn.post(`${Jn}/api/auth/telegram`,{init_data:e});console.log(`[pinst][auth] server response status:`,t.status),Gn(t.data.token),console.log(`[pinst][auth] auth ok, token saved`)}var Qn=()=>{Yn=null},$n=()=>(Yn||=Zn().catch(e=>{console.warn(`[pinst] auth error:`,e?.response?.status,e?.message),Yn=null}),Yn),er=`modulepreload`,tr=function(e){return`/`+e},nr={},rr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=tr(t,n),t in nr)return;nr[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:er,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ir=`popstate`;function ar(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function or(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return ur(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:dr(t)}return pr(t,n,null,e)}function N(e,t){if(e===!1||e==null)throw Error(t)}function sr(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function cr(){return Math.random().toString(36).substring(2,10)}function lr(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ur(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?fr(t):t,state:n,key:t&&t.key||r||cr(),unstable_mask:i}}function dr({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function fr(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function pr(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ar(e)?e:ur(h.location,e,t);n&&n(r,e),l=u()+1;let d=lr(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ar(e)?e:ur(h.location,e,t);n&&n(r,e),l=u();let i=lr(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return mr(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ir,d),c=e,()=>{i.removeEventListener(ir,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function mr(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),N(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:dr(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function hr(e,t,n=`/`){return gr(e,t,n,!1)}function gr(e,t,n,r){let i=Pr((typeof t==`string`?fr(t):t).pathname||`/`,n);if(i==null)return null;let a=vr(e);br(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Nr(i);o=Ar(a[e],t,r)}return o}function _r(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function vr(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;N(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Ur([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(N(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),vr(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Or(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of yr(e.path))a(e,t,!0,n)}),t}function yr(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=yr(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function br(e){e.sort((e,t)=>e.score===t.score?kr(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var xr=/^:[\w-]+$/,Sr=3,Cr=2,wr=1,Tr=10,Er=-2,Dr=e=>e===`*`;function Or(e,t){let n=e.split(`/`),r=n.length;return n.some(Dr)&&(r+=Er),t&&(r+=Cr),n.filter(e=>!Dr(e)).reduce((e,t)=>e+(xr.test(t)?Sr:t===``?wr:Tr),r)}function kr(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ar(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=jr({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=jr({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Ur([a,u.pathname]),pathnameBase:Gr(Ur([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Ur([a,u.pathnameBase]))}return o}function jr(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Mr(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Mr(e,t=!1,n=!0){sr(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Nr(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return sr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Pr(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Fr=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ir(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?fr(e):e,a;return n?(n=Hr(n),a=n.startsWith(`/`)?Lr(n.substring(1),`/`):Lr(n,t)):a=t,{pathname:a,search:Kr(r),hash:qr(i)}}function Lr(e,t){let n=Wr(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Rr(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zr(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Br(e){let t=zr(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Vr(e,t,n,r=!1){let i;typeof e==`string`?i=fr(e):(i={...e},N(!i.pathname||!i.pathname.includes(`?`),Rr(`?`,`pathname`,`search`,i)),N(!i.pathname||!i.pathname.includes(`#`),Rr(`#`,`pathname`,`hash`,i)),N(!i.search||!i.search.includes(`#`),Rr(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ir(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Hr=e=>e.replace(/\/\/+/g,`/`),Ur=e=>Hr(e.join(`/`)),Wr=e=>e.replace(/\/+$/,``),Gr=e=>Wr(e).replace(/^\/*/,`/`),Kr=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,qr=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Jr=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Yr(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Xr(e){return Ur(e.map(e=>e.route.path).filter(Boolean))||`/`}var Zr=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Qr(e,t){let n=e;if(typeof n!=`string`||!Fr.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Zr)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Pr(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{sr(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var $r=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set($r);var ei=[`GET`,...$r];new Set(ei);var ti=b.createContext(null);ti.displayName=`DataRouter`;var ni=b.createContext(null);ni.displayName=`DataRouterState`;var ri=b.createContext(!1);function ii(){return b.useContext(ri)}var ai=b.createContext({isTransitioning:!1});ai.displayName=`ViewTransition`;var oi=b.createContext(new Map);oi.displayName=`Fetchers`;var si=b.createContext(null);si.displayName=`Await`;var ci=b.createContext(null);ci.displayName=`Navigation`;var li=b.createContext(null);li.displayName=`Location`;var ui=b.createContext({outlet:null,matches:[],isDataRoute:!1});ui.displayName=`Route`;var di=b.createContext(null);di.displayName=`RouteError`;var fi=`REACT_ROUTER_ERROR`,pi=`REDIRECT`,mi=`ROUTE_ERROR_RESPONSE`;function hi(e){if(e.startsWith(`${fi}:${pi}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function gi(e){if(e.startsWith(`${fi}:${mi}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Jr(t.status,t.statusText,t.data)}catch{}}function _i(e,{relative:t}={}){N(vi(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(ci),{hash:i,pathname:a,search:o}=wi(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Ur([n,a])),r.createHref({pathname:s,search:o,hash:i})}function vi(){return b.useContext(li)!=null}function yi(){return N(vi(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext(li).location}var bi=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function xi(e){b.useContext(ci).static||b.useLayoutEffect(e)}function Si(){let{isDataRoute:e}=b.useContext(ui);return e?Vi():Ci()}function Ci(){N(vi(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(ti),{basename:t,navigator:n}=b.useContext(ci),{matches:r}=b.useContext(ui),{pathname:i}=yi(),a=JSON.stringify(Br(r)),o=b.useRef(!1);return xi(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(sr(o.current,bi),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Vr(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Ur([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}b.createContext(null);function wi(e,{relative:t}={}){let{matches:n}=b.useContext(ui),{pathname:r}=yi(),i=JSON.stringify(Br(n));return b.useMemo(()=>Vr(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ti(e,t){return Ei(e,t)}function Ei(e,t,n){N(vi(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=b.useContext(ci),{matches:i}=b.useContext(ui),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Ui(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=yi(),d;if(t){let e=typeof t==`string`?fr(t):t;N(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=hr(e,{pathname:p});sr(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),sr(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ni(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Ur([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Ur([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?b.createElement(li.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function Di(){let e=Bi(),t=Yr(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var Oi=b.createElement(Di,null),ki=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=gi(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:b.createElement(ui.Provider,{value:this.props.routeContext},b.createElement(di.Provider,{value:e,children:this.props.component}));return this.context?b.createElement(ji,{error:e},t):t}};ki.contextType=ri;var Ai=new WeakMap;function ji({children:e,error:t}){let{basename:n}=b.useContext(ci);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=hi(t.digest);if(e){let r=Ai.get(t);if(r)throw r;let i=Qr(e.location,n);if(Zr&&!Ai.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Ai.set(t,n),n}return b.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Mi({routeContext:e,match:t,children:n}){let r=b.useContext(ti);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(ui.Provider,{value:e},n)}function Ni(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);N(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Xr(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Oi,o&&(s<0&&c===0?(Ui(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?b.createElement(n.route.Component,null):n.route.element?n.route.element:e,b.createElement(Mi,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?b.createElement(ki,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Pi(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fi(e){let t=b.useContext(ti);return N(t,Pi(e)),t}function Ii(e){let t=b.useContext(ni);return N(t,Pi(e)),t}function Li(e){let t=b.useContext(ui);return N(t,Pi(e)),t}function Ri(e){let t=Li(e),n=t.matches[t.matches.length-1];return N(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function P(){return Ri(`useRouteId`)}function F(){return Ii(`useNavigation`).navigation}function zi(){let{matches:e,loaderData:t}=Ii(`useMatches`);return b.useMemo(()=>e.map(e=>_r(e,t)),[e,t])}function Bi(){let e=b.useContext(di),t=Ii(`useRouteError`),n=Ri(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Vi(){let{router:e}=Fi(`useNavigate`),t=Ri(`useNavigate`),n=b.useRef(!1);return xi(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{sr(n.current,bi),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Hi={};function Ui(e,t,n){!t&&!Hi[e]&&(Hi[e]=!0,sr(!1,n))}b.useOptimistic,b.memo(Wi);function Wi({routes:e,future:t,state:n,isStatic:r,onError:i}){return Ei(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function Gi({to:e,replace:t,state:n,relative:r}){N(vi(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=b.useContext(ci);sr(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=b.useContext(ui),{pathname:o}=yi(),s=Si(),c=Vr(e,Br(a),o,r===`path`),l=JSON.stringify(c);return b.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Ki(e){N(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function qi({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){N(!vi(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=b.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=fr(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=b.useMemo(()=>{let e=Pr(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return sr(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(ci.Provider,{value:c},b.createElement(li.Provider,{children:t,value:h}))}function Ji({children:e,location:t}){return Ti(Yi(e),t)}b.Component;function Yi(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,Yi(e.props.children,i));return}N(e.type===Ki,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),N(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Yi(e.props.children,i)),n.push(a)}),n}var Xi=`get`,Zi=`application/x-www-form-urlencoded`;function Qi(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function $i(e){return Qi(e)&&e.tagName.toLowerCase()===`button`}function ea(e){return Qi(e)&&e.tagName.toLowerCase()===`form`}function ta(e){return Qi(e)&&e.tagName.toLowerCase()===`input`}function na(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ra(e,t){return e.button===0&&(!t||t===`_self`)&&!na(e)}var ia=null;function aa(){if(ia===null)try{new FormData(document.createElement(`form`),0),ia=!1}catch{ia=!0}return ia}var oa=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function sa(e){return e!=null&&!oa.has(e)?(sr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zi}"`),null):e}function ca(e,t){let n,r,i,a,o;if(ea(e)){let o=e.getAttribute(`action`);r=o?Pr(o,t):null,n=e.getAttribute(`method`)||Xi,i=sa(e.getAttribute(`enctype`))||Zi,a=new FormData(e)}else if($i(e)||ta(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Pr(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Xi,i=sa(e.getAttribute(`formenctype`))||sa(o.getAttribute(`enctype`))||Zi,a=new FormData(o,e),!aa()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Qi(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Xi,r=null,i=Zi,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var la={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},ua=/[&><\u2028\u2029]/g;function da(e){return e.replace(ua,e=>la[e])}function fa(e,t){if(e===!1||e==null)throw Error(t)}function pa(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Pr(i.pathname,t)===`/`?i.pathname=`${Wr(t)}/_root.${r}`:i.pathname=`${Wr(i.pathname)}.${r}`,i}async function ma(e,t){if(e.id in t)return t[e.id];try{let n=await rr(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ha(e){return e!=null&&typeof e.page==`string`}function ga(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function _a(e,t,n){return Sa((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await ma(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(ga).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function va(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function ya(e,t,{includeHydrateFallback:n}={}){return ba(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function ba(e){return[...new Set(e)]}function xa(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Sa(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!ha(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(xa(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Ca(){let e=b.useContext(ti);return fa(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function wa(){let e=b.useContext(ni);return fa(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Ta=b.createContext(void 0);Ta.displayName=`FrameworkContext`;function Ea(){let e=b.useContext(Ta);return fa(e,`You must render this element inside a <HydratedRouter> element`),e}function Da(e,t){let n=b.useContext(Ta),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Oa(s,p),onBlur:Oa(c,m),onMouseEnter:Oa(l,p),onMouseLeave:Oa(u,m),onTouchStart:Oa(d,p)}]:[a,f,{}]:[!1,f,{}]}function Oa(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ka({page:e,...t}){let n=ii(),{router:r}=Ca(),i=b.useMemo(()=>hr(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?b.createElement(ja,{page:e,matches:i,...t}):b.createElement(Ma,{page:e,matches:i,...t}):null}function Aa(e){let{manifest:t,routeModules:n}=Ea(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return _a(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function ja({page:e,matches:t,...n}){let r=yi(),{future:i}=Ea(),{basename:a}=Ca(),o=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=pa(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return b.createElement(b.Fragment,null,o.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Ma({page:e,matches:t,...n}){let r=yi(),{future:i,manifest:a,routeModules:o}=Ea(),{basename:s}=Ca(),{loaderData:c,matches:l}=wa(),u=b.useMemo(()=>va(e,t,l,a,r,`data`),[e,t,l,a,r]),d=b.useMemo(()=>va(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=pa(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=b.useMemo(()=>ya(d,a),[d,a]),m=Aa(d);return b.createElement(b.Fragment,null,f.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Na(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}b.Component;var Pa=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Pa&&(window.__reactRouterVersion=`7.14.1`)}catch{}function Fa({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=b.useRef();i.current??=or({window:r,v5Compat:!0});let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),c=b.useCallback(e=>{n===!1?s(e):b.startTransition(()=>s(e))},[n]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(qi,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Ia({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=b.useState({action:n.action,location:n.location}),o=b.useCallback(e=>{r===!1?a(e):b.startTransition(()=>a(e))},[r]);return b.useLayoutEffect(()=>n.listen(o),[n,o]),b.createElement(qi,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Ia.displayName=`unstable_HistoryRouter`;var La=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ra=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=b.useContext(ci),v=typeof l==`string`&&La.test(l),y=Qr(l,h);l=y.to;let x=_i(l,{relative:r}),S=yi(),C=null;if(o){let e=Vr(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Ur([h,e.pathname])),C=g.createHref(e)}let[w,T,ee]=Da(n,p),te=Ga(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function E(t){e&&e(t),t.defaultPrevented||te(t)}let ne=!(y.isExternal||i),re=b.createElement(`a`,{...p,...ee,href:(ne?C:void 0)||y.absoluteURL||x,onClick:ne?E:e,ref:Na(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?b.createElement(b.Fragment,null,re,b.createElement(ka,{page:x})):re});Ra.displayName=`Link`;var za=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=wi(a,{relative:c.relative}),d=yi(),f=b.useContext(ni),{navigator:p,basename:m}=b.useContext(ci),h=f!=null&&to(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Pr(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof i==`function`?i(C):i;return b.createElement(Ra,{...c,"aria-current":w,className:T,ref:l,style:ee,to:a,viewTransition:o},typeof s==`function`?s(C):s)});za.displayName=`NavLink`;var Ba=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Xi,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=b.useContext(ci),g=Ja(),_=Ya(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&La.test(s);return b.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?b.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Ba.displayName=`Form`;function Va({getKey:e,storageKey:t,...n}){let r=b.useContext(Ta),{basename:i}=b.useContext(ci),a=yi(),o=zi();$a({getKey:e,storageKey:t});let s=b.useMemo(()=>{if(!r||!e)return null;let t=Qa(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return b.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${da(JSON.stringify(t||Xa))}, ${da(JSON.stringify(s))})`}})}Va.displayName=`ScrollRestoration`;function Ha(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ua(e){let t=b.useContext(ti);return N(t,Ha(e)),t}function Wa(e){let t=b.useContext(ni);return N(t,Ha(e)),t}function Ga(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=Si(),d=yi(),f=wi(e,{relative:o});return b.useCallback(p=>{if(ra(p,t)){p.preventDefault();let t=n===void 0?dr(d)===dr(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?b.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Ka=0,qa=()=>`__${String(++Ka)}__`;function Ja(){let{router:e}=Ua(`useSubmit`),{basename:t}=b.useContext(ci),n=P(),r=e.fetch,i=e.navigate;return b.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=ca(e,t);a.navigate===!1?await r(a.fetcherKey||qa(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Ya(e,{relative:t}={}){let{basename:n}=b.useContext(ci),r=b.useContext(ui);N(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...wi(e||`.`,{relative:t})},o=yi();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Ur([n,a.pathname])),dr(a)}var Xa=`react-router-scroll-positions`,Za={};function Qa(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Pr(e.pathname,n)||e.pathname},t)),i??=e.key,i}function $a({getKey:e,storageKey:t}={}){let{router:n}=Ua(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Wa(`useScrollRestoration`),{basename:a}=b.useContext(ci),o=yi(),s=zi(),c=F();b.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),eo(b.useCallback(()=>{if(c.state===`idle`){let t=Qa(o,s,a,e);Za[t]=window.scrollY}try{sessionStorage.setItem(t||Xa,JSON.stringify(Za))}catch(e){sr(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(b.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Xa);e&&(Za=JSON.parse(e))}catch{}},[t]),b.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Za,()=>window.scrollY,e?(t,n)=>Qa(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),b.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{sr(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function eo(e,t){let{capture:n}=t||{};b.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function to(e,{relative:t}={}){let n=b.useContext(ai);N(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ua(`useViewTransitionState`),i=wi(e,{relative:t});if(!n.isTransitioning)return!1;let a=Pr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Pr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return jr(i.pathname,o)!=null||jr(i.pathname,a)!=null}var no=s((()=>{(function(){var e={},t=``;try{t=location.hash.toString()}catch{}var n=c(t),r=_(`initParams`);if(r)for(var i in r)n[i]===void 0&&(n[i]=r[i]);g(`initParams`,n);var a=!1,o;try{if(a=window.parent!=null&&window!=window.parent,a){window.addEventListener(`message`,function(e){if(e.source===window.parent){try{var t=JSON.parse(e.data)}catch{return}if(!(!t||!t.eventType))if(t.eventType==`set_custom_style`)e.origin===`https://web.telegram.org`&&(o.innerHTML=t.eventData);else if(t.eventType==`reload_iframe`){try{window.parent.postMessage(JSON.stringify({eventType:`iframe_will_reload`}),`*`)}catch{}location.reload()}else f(t.eventType,t.eventData)}}),o=document.createElement(`style`),document.head.appendChild(o);try{window.parent.postMessage(JSON.stringify({eventType:`iframe_ready`,eventData:{reload_supported:!0}}),`*`)}catch{}}}catch{}function s(e){try{return e=e.replace(/\+/g,`%20`),decodeURIComponent(e)}catch{return e}}function c(e){e=e.replace(/^#/,``);var t={};if(!e.length)return t;if(e.indexOf(`=`)<0&&e.indexOf(`?`)<0)return t._path=s(e),t;var n=e.indexOf(`?`);n>=0&&(t._path=s(e.substr(0,n)),e=e.substr(n+1));var r=l(e);for(var i in r)t[i]=r[i];return t}function l(e){var t={};if(!e.length)return t;var n=e.split(`&`),r,i,a,o;for(r=0;r<n.length;r++)i=n[r].split(`=`),a=s(i[0]),o=i[1]==null?null:s(i[1]),t[a]=o;return t}function u(e,t){var n=e.indexOf(`#`);if(n<0)return e+`#`+t;var r=e.substr(n+1);return r.indexOf(`=`)>=0||r.indexOf(`?`)>=0?e+`&`+t:r.length>0?e+`?`+t:e+t}function d(e,t,n){if(t||=function(){},n===void 0&&(n=``),console.log(`[Telegram.WebView] > postEvent`,e,n),window.TelegramWebviewProxy!==void 0)TelegramWebviewProxy.postEvent(e,JSON.stringify(n)),t();else if(window.external&&`notify`in window.external)window.external.notify(JSON.stringify({eventType:e,eventData:n})),t();else if(a)try{var r=`https://web.telegram.org`;r=`*`,window.parent.postMessage(JSON.stringify({eventType:e,eventData:n}),r),t()}catch(e){t(e)}else t({notAvailable:!0})}function f(e,t){console.log(`[Telegram.WebView] < receiveEvent`,e,t),p(e,function(n){n(e,t)})}function p(t,n){var r=e[t];if(!(r===void 0||!r.length))for(var i=0;i<r.length;i++)try{n(r[i])}catch{}}function m(t,n){e[t]===void 0&&(e[t]=[]),e[t].indexOf(n)===-1&&e[t].push(n)}function h(t,n){if(e[t]!==void 0){var r=e[t].indexOf(n);r!==-1&&e[t].splice(r,1)}}function g(e,t){try{return window.sessionStorage.setItem(`__telegram__`+e,JSON.stringify(t)),!0}catch{}return!1}function _(e){try{return JSON.parse(window.sessionStorage.getItem(`__telegram__`+e))}catch{}return null}window.Telegram||(window.Telegram={}),window.Telegram.WebView={initParams:n,isIframe:a,onEvent:m,offEvent:h,postEvent:d,receiveEvent:f,callEventCallbacks:p},window.Telegram.Utils={urlSafeDecode:s,urlParseQueryString:l,urlParseHashParams:c,urlAppendHashParams:u,sessionStorageSet:g,sessionStorageGet:_},window.TelegramGameProxy_receiveEvent=f,window.TelegramGameProxy={receiveEvent:f}})(),(function(){var e=window.Telegram.Utils,t=window.Telegram.WebView,n=t.initParams,r=t.isIframe,i={},a=``,o={},s={},c=`light`,l=`6.0`,u=`unknown`,d=!0,f=!1,p=!1,m=`bg_color`,h=`bg_color`,g=null;if(n.tgWebAppData&&n.tgWebAppData.length)for(var _ in a=n.tgWebAppData,o=e.urlParseQueryString(a),o){var v=o[_];try{(v.substr(0,1)==`{`&&v.substr(-1)==`}`||v.substr(0,1)==`[`&&v.substr(-1)==`]`)&&(o[_]=JSON.parse(v))}catch{}}var y=e.sessionStorageGet(`themeParams`);if(n.tgWebAppThemeParams&&n.tgWebAppThemeParams.length){var b=n.tgWebAppThemeParams;try{var x=JSON.parse(b);x&&pe(x)}catch{}}y&&pe(y);var S=e.sessionStorageGet(`defaultColors`);if(n.tgWebAppDefaultColors&&n.tgWebAppDefaultColors.length){var C=n.tgWebAppDefaultColors;try{var w=JSON.parse(C);w&&k(w)}catch{}}S&&k(S),n.tgWebAppVersion&&(l=n.tgWebAppVersion),n.tgWebAppPlatform&&(u=n.tgWebAppPlatform);var T=e.sessionStorageGet(`isFullscreen`);n.tgWebAppFullscreen&&de(!0),T&&de(T==`yes`);var ee=e.sessionStorageGet(`isOrientationLocked`);ee&&fe(ee==`yes`);function te(e,t){t.theme_params&&(pe(t.theme_params),window.Telegram.WebApp.MainButton.setParams({}),window.Telegram.WebApp.SecondaryButton.setParams({}),Je(),Qe(),A(),D(`themeChanged`))}var E=window.innerHeight;function ne(e,t){t.height&&(window.removeEventListener(`resize`,re),ye(t))}function re(e){E!=window.innerHeight&&(E=window.innerHeight,D(`viewportChanged`,{isStateStable:!0}))}function ie(e,t){t&&xe(t)}function ae(e,t){t&&Ce(t)}function oe(e,t){t.is_visible?(d=!0,D(`activated`)):(d=!1,D(`deactivated`))}function se(e){if(!(e.metaKey||e.ctrlKey)){for(var t=e.target;t.tagName!=`A`&&t.parentNode;)t=t.parentNode;t.tagName==`A`&&t.target!=`_blank`&&(t.protocol==`http:`||t.protocol==`https:`)&&t.hostname==`t.me`&&(i.openTgLink(t.href),e.preventDefault())}}function ce(e){return e.toString().replace(/^\s+|\s+$/g,``)}function D(e){var n=Array.prototype.slice.call(arguments);e=n.shift(),t.callEventCallbacks(`webview:`+e,function(e){e.apply(i,n)})}function O(e,n){t.onEvent(`webview:`+e,n)}function le(e,n){t.offEvent(`webview:`+e,n)}function ue(e,t){var n=document.documentElement;n&&n.style&&n.style.setProperty&&n.style.setProperty(`--tg-`+e,t)}function de(t){f=!!t,e.sessionStorageSet(`isFullscreen`,f?`yes`:`no`)}function fe(t){p=!!t,e.sessionStorageSet(`isOrientationLocked`,p?`yes`:`no`)}function pe(t){t.bg_color==`#1c1c1d`&&t.bg_color==t.secondary_bg_color&&(t.secondary_bg_color=`#2c2c2e`);var n;for(var r in t)(n=j(t[r]))&&(s[r]=n,r==`bg_color`&&(c=rt(n)?`dark`:`light`,ue(`color-scheme`,c)),r=`theme-`+r.split(`_`).join(`-`),ue(r,n));e.sessionStorageSet(`themeParams`,s)}function k(t){c==`dark`?(t.bg_dark_color&&(m=t.bg_dark_color),t.header_dark_color&&(h=null,g=t.header_dark_color)):(t.bg_color&&(m=t.bg_color),t.header_color&&(h=null,g=t.header_color)),e.sessionStorageSet(`defaultColors`,t)}var me={};function he(e){for(var t=100;--t;){for(var n=``,r=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`,i=r.length,a=0;a<e;a++)n+=r[Math.floor(Math.random()*i)];if(!me[n])return me[n]={},n}throw Error(`WebAppCallbackIdGenerateFailed`)}var ge=!1,_e=!1,ve=!0;function ye(e){e!==void 0&&(ve=!!e.is_expanded,ge=e.height,e.is_state_stable&&(_e=e.height),D(`viewportChanged`,{isStateStable:!!e.is_state_stable}));var t=ge===!1?lt?`calc(100vh - `+lt+`px)`:`100vh`:ge-lt+`px`,n=_e===!1?lt?`calc(100vh - `+lt+`px)`:`100vh`:_e-lt+`px`;ue(`viewport-height`,t),ue(`viewport-stable-height`,n)}var be={top:0,bottom:0,left:0,right:0};function xe(e){e!==void 0&&(e.top!==void 0&&(be.top=e.top),e.bottom!==void 0&&(be.bottom=e.bottom),e.left!==void 0&&(be.left=e.left),e.right!==void 0&&(be.right=e.right),D(`safeAreaChanged`)),ue(`safe-area-inset-top`,be.top+`px`),ue(`safe-area-inset-bottom`,be.bottom+`px`),ue(`safe-area-inset-left`,be.left+`px`),ue(`safe-area-inset-right`,be.right+`px`)}var Se={top:0,bottom:0,left:0,right:0};function Ce(e){e!==void 0&&(e.top!==void 0&&(Se.top=e.top),e.bottom!==void 0&&(Se.bottom=e.bottom),e.left!==void 0&&(Se.left=e.left),e.right!==void 0&&(Se.right=e.right),D(`contentSafeAreaChanged`)),ue(`content-safe-area-inset-top`,Se.top+`px`),ue(`content-safe-area-inset-bottom`,Se.bottom+`px`),ue(`content-safe-area-inset-left`,Se.left+`px`),ue(`content-safe-area-inset-right`,Se.right+`px`)}var we=!1;function Te(e){if(!M(`6.2`)){console.warn(`[Telegram.WebApp] Closing confirmation is not supported in version `+l);return}we=!!e,t.postEvent(`web_app_setup_closing_behavior`,!1,{need_confirmation:we})}var Ee=!0;function De(e){if(!M(`7.7`)){console.warn(`[Telegram.WebApp] Changing swipes behavior is not supported in version `+l);return}Ee=!!e,t.postEvent(`web_app_setup_swipe_behavior`,!1,{allow_vertical_swipe:Ee})}function Oe(e,t){de(t.is_fullscreen),D(`fullscreenChanged`)}function ke(e,t){t.error==`ALREADY_FULLSCREEN`&&!f&&de(!0),D(`fullscreenFailed`,{error:t.error})}function Ae(e){if(!M(`8.0`)){console.warn(`[Telegram.WebApp] Orientation locking is not supported in version `+l);return}fe(e),t.postEvent(`web_app_toggle_orientation_lock`,!1,{locked:p})}var je=[];function Me(e,t){D(`homeScreenAdded`)}function Ne(e,t){var n=t.status||`unknown`;if(je.length>0){for(var r=0;r<je.length;r++){var i=je[r];i(n)}je=[]}D(`homeScreenChecked`,{status:n})}var Pe=!1;function Fe(e,t){if(Pe){var n=Pe;Pe=!1,n.callback&&n.callback(!0),D(`shareMessageSent`)}}function Ie(e,t){if(Pe){var n=Pe;Pe=!1,n.callback&&n.callback(!1),D(`shareMessageFailed`,{error:t.error})}}var Le=!1;function Re(e,t){if(Le){var n=Le;Le=!1,n.callback&&n.callback(!0),D(`emojiStatusSet`)}}function ze(e,t){if(Le){var n=Le;Le=!1,n.callback&&n.callback(!1),D(`emojiStatusFailed`,{error:t.error})}}var Be=!1;function Ve(e,t){if(Be){var n=Be;Be=!1,n.callback&&n.callback(t.status==`allowed`),D(`emojiStatusAccessRequested`,{status:t.status})}}var He=!1;function Ue(e,t){if(He){var n=He;He=!1;var r=null;t.button_id!==void 0&&(r=t.button_id),n.callback&&n.callback(r),D(`popupClosed`,{button_id:r})}}function We(){return h==`secondary_bg_color`?s.secondary_bg_color:h==`bg_color`?s.bg_color:g}function Ge(e){if(!M(`6.1`)){console.warn(`[Telegram.WebApp] Header color is not supported in version `+l);return}M(`6.9`)||(s.bg_color&&s.bg_color==e?e=`bg_color`:s.secondary_bg_color&&s.secondary_bg_color==e&&(e=`secondary_bg_color`));var t=null,n=null;if(e==`bg_color`||e==`secondary_bg_color`)n=e;else if(M(`6.9`)&&(t=j(e),!t))throw console.error(`[Telegram.WebApp] Header color format is invalid`,e),Error(`WebAppHeaderColorInvalid`);if(!M(`6.9`)&&n!=`bg_color`&&n!=`secondary_bg_color`)throw console.error(`[Telegram.WebApp] Header color key should be one of Telegram.WebApp.themeParams.bg_color, Telegram.WebApp.themeParams.secondary_bg_color, 'bg_color', 'secondary_bg_color'`,e),Error(`WebAppHeaderColorKeyInvalid`);h=n,g=t,Je()}var Ke=null,qe=null;function Je(){(Ke!=h||qe!=g)&&(Ke=h,qe=g,qe?t.postEvent(`web_app_set_header_color`,!1,{color:g}):t.postEvent(`web_app_set_header_color`,!1,{color_key:h}))}function Ye(){return m==`secondary_bg_color`?s.secondary_bg_color:m==`bg_color`?s.bg_color:m}function Xe(e){if(!M(`6.1`)){console.warn(`[Telegram.WebApp] Background color is not supported in version `+l);return}var t;if(e==`bg_color`||e==`secondary_bg_color`)t=e;else if(t=j(e),!t)throw console.error(`[Telegram.WebApp] Background color format is invalid`,e),Error(`WebAppBackgroundColorInvalid`);m=t,Qe()}var Ze=null;function Qe(){var e=Ye();Ze!=e&&(Ze=e,t.postEvent(`web_app_set_background_color`,!1,{color:e}))}var $e=`bottom_bar_bg_color`;function et(){return $e==`bottom_bar_bg_color`?s.bottom_bar_bg_color||s.secondary_bg_color||`#ffffff`:$e==`secondary_bg_color`?s.secondary_bg_color:$e==`bg_color`?s.bg_color:$e}function tt(e){if(!M(`7.10`)){console.warn(`[Telegram.WebApp] Bottom bar color is not supported in version `+l);return}var t;if(e==`bg_color`||e==`secondary_bg_color`||e==`bottom_bar_bg_color`)t=e;else if(t=j(e),!t)throw console.error(`[Telegram.WebApp] Bottom bar color format is invalid`,e),Error(`WebAppBottomBarColorInvalid`);$e=t,A(),window.Telegram.WebApp.SecondaryButton.setParams({})}var nt=null;function A(){var e=et();nt!=e&&(nt=e,t.postEvent(`web_app_set_bottom_bar_color`,!1,{color:e})),n.tgWebAppDebug&&pt()}function j(e){e+=``;var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e))return`#`+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return(`#`+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var n=parseInt(t[1]),r=parseInt(t[2]),i=parseInt(t[3]);return n=(n<16?`0`:``)+n.toString(16),r=(r<16?`0`:``)+r.toString(16),i=(i<16?`0`:``)+i.toString(16),`#`+n+r+i}return!1}function rt(e){e=e.replace(/[\s#]/g,``),e.length==3&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e.substr(0,2),16),n=parseInt(e.substr(2,2),16),r=parseInt(e.substr(4,2),16);return Math.sqrt(t*t*.299+n*n*.587+r*r*.114)<120}function it(e,t){typeof e!=`string`&&(e=``),typeof t!=`string`&&(t=``),e=e.replace(/^\s+|\s+$/g,``).split(`.`),t=t.replace(/^\s+|\s+$/g,``).split(`.`);var n=Math.max(e.length,t.length),r,i,a;for(r=0;r<n;r++)if(i=parseInt(e[r])||0,a=parseInt(t[r])||0,i!=a)return i>a?1:-1;return 0}function M(e){return it(l,e)>=0}function at(e){if(window.Blob)try{return new Blob([e]).size}catch{}for(var t=e.length,n=e.length-1;n>=0;n--){var r=e.charCodeAt(n);r>127&&r<=2047?t++:r>2047&&r<=65535&&(t+=2),r>=56320&&r<=57343&&n--}return t}var ot=(function(){var e=!1,n={};Object.defineProperty(n,`isVisible`,{set:function(e){u({is_visible:e})},get:function(){return e},enumerable:!0});var r=null;t.onEvent(`back_button_pressed`,i);function i(){D(`backButtonClicked`)}function a(){return{is_visible:e}}function o(e){return e===void 0&&(e=a()),JSON.stringify(e)}function s(){return M(`6.1`)?!0:(console.warn(`[Telegram.WebApp] BackButton is not supported in version `+l),!1)}function c(){var e=a(),n=o(e);r!==n&&(r=n,t.postEvent(`web_app_setup_back_button`,!1,e))}function u(t){return s()?(t.is_visible!==void 0&&(e=!!t.is_visible),c(),n):n}return n.onClick=function(e){return s()&&O(`backButtonClicked`,e),n},n.offClick=function(e){return s()&&le(`backButtonClicked`,e),n},n.show=function(){return u({is_visible:!0})},n.hide=function(){return u({is_visible:!1})},n})(),st=null,ct={},lt=0;if(n.tgWebAppDebug){st=document.createElement(`tg-bottom-bar`);var ut={display:`flex`,gap:`7px`,font:`600 14px/18px sans-serif`,width:`100%`,background:et(),position:`fixed`,left:`0`,right:`0`,bottom:`0`,margin:`0`,padding:`7px`,textAlign:`center`,boxSizing:`border-box`,zIndex:`10000`};for(var dt in ut)st.style[dt]=ut[dt];document.addEventListener(`DOMContentLoaded`,function e(t){document.removeEventListener(`DOMContentLoaded`,e),document.body.appendChild(st)});var ft=document.createElement(`style`);ft.innerHTML=`tg-bottom-button.shine { position: relative; overflow: hidden; } tg-bottom-button.shine:before { content:""; position: absolute; top: 0; width: 100%; height: 100%; background: linear-gradient(120deg, transparent, rgba(255, 255, 255, .2), transparent); animation: tg-bottom-button-shine 5s ease-in-out infinite; } @-webkit-keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}} @keyframes tg-bottom-button-shine { 0% {left: -100%;} 12%,100% {left: 100%}}`,st.appendChild(ft)}function pt(){var e=ct.main._bottomButton,t=ct.secondary._bottomButton;e.isVisible||t.isVisible?(st.style.display=`flex`,lt=58,e.isVisible&&t.isVisible&&(t.position==`top`?(st.style.flexDirection=`column-reverse`,lt+=51):t.position==`bottom`?(st.style.flexDirection=`column`,lt+=51):t.position==`left`?st.style.flexDirection=`row-reverse`:t.position==`right`&&(st.style.flexDirection=`row`))):(st.style.display=`none`,lt=0),st.style.background=et(),document.documentElement&&(document.documentElement.style.boxSizing=`border-box`,document.documentElement.style.paddingBottom=lt+`px`),ye()}var mt=function(e){var r=e==`main`;if(r)var i=`web_app_setup_main_button`,a=`main_button_pressed`,o=`mainButtonClicked`,c=`Continue`,l=function(){return s.button_color||`#2481cc`},u=function(){return s.button_text_color||`#ffffff`};else var i=`web_app_setup_secondary_button`,a=`secondary_button_pressed`,o=`secondaryButtonClicked`,c=`Cancel`,l=function(){return et()},u=function(){return s.button_color||`#2481cc`};var d=!1,f=!0,p=!1,m=!1,h=e,g=c,_=!1,v=!1,y=`left`,b={};Object.defineProperty(b,`type`,{get:function(){return h},enumerable:!0}),Object.defineProperty(b,`text`,{set:function(e){b.setParams({text:e})},get:function(){return g},enumerable:!0}),Object.defineProperty(b,`color`,{set:function(e){b.setParams({color:e})},get:function(){return _||l()},enumerable:!0}),Object.defineProperty(b,`textColor`,{set:function(e){b.setParams({text_color:e})},get:function(){return v||u()},enumerable:!0}),Object.defineProperty(b,`isVisible`,{set:function(e){b.setParams({is_visible:e})},get:function(){return d},enumerable:!0}),Object.defineProperty(b,`isProgressVisible`,{get:function(){return m},enumerable:!0}),Object.defineProperty(b,`isActive`,{set:function(e){b.setParams({is_active:e})},get:function(){return f},enumerable:!0}),Object.defineProperty(b,`hasShineEffect`,{set:function(e){b.setParams({has_shine_effect:e})},get:function(){return p},enumerable:!0}),r||Object.defineProperty(b,`position`,{set:function(e){b.setParams({position:e})},get:function(){return y},enumerable:!0});var x=null;t.onEvent(a,T);var S=null;if(n.tgWebAppDebug){S=document.createElement(`tg-bottom-button`);var C={display:`none`,width:`100%`,height:`44px`,borderRadius:`0`,background:`no-repeat right center`,padding:`13px 15px`,textAlign:`center`,boxSizing:`border-box`};for(var w in C)S.style[w]=C[w];st.appendChild(S),S.addEventListener(`click`,T,!1),S._bottomButton=b,ct[e]=S}function T(){f&&D(o)}function ee(){var e=b.color,t=b.textColor;if(d){var n={is_visible:!0,is_active:f,is_progress_visible:m,text:g,color:e,text_color:t,has_shine_effect:p&&f&&!m};r||(n.position=y)}else var n={is_visible:!1};return n}function te(e){return e===void 0&&(e=ee()),JSON.stringify(e)}function E(){var e=ee(),r=te(e);x!==r&&(x=r,t.postEvent(i,!1,e),n.tgWebAppDebug&&ne(e))}function ne(e){e.is_visible?(S.style.display=`block`,S.style.opacity=e.is_active?`1`:`0.8`,S.style.cursor=e.is_active?`pointer`:`auto`,S.disabled=!e.is_active,S.innerText=e.text,S.className=e.has_shine_effect?`shine`:``,S.style.backgroundImage=e.is_progress_visible?`url('data:image/svg+xml,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewport="0 0 48 48" width="48px" height="48px"><circle cx="50%" cy="50%" stroke="`+e.text_color+`" stroke-width="2.25" stroke-linecap="round" fill="none" stroke-dashoffset="106" r="9" stroke-dasharray="56.52" rotate="-90"><animate attributeName="stroke-dashoffset" attributeType="XML" dur="360s" from="0" to="12500" repeatCount="indefinite"></animate><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="-90 24 24" to="630 24 24" repeatCount="indefinite"></animateTransform></circle></svg>`)+`')`:`none`,S.style.backgroundColor=e.color,S.style.color=e.text_color):S.style.display=`none`,pt()}function re(e){if(e.text!==void 0){var t=ce(e.text);if(!t.length)throw console.error(`[Telegram.WebApp] Bottom button text is required`,e.text),Error(`WebAppBottomButtonParamInvalid`);if(t.length>64)throw console.error(`[Telegram.WebApp] Bottom button text is too long`,t),Error(`WebAppBottomButtonParamInvalid`);g=t}if(e.color!==void 0)if(e.color===!1||e.color===null)_=!1;else{var n=j(e.color);if(!n)throw console.error(`[Telegram.WebApp] Bottom button color format is invalid`,e.color),Error(`WebAppBottomButtonParamInvalid`);_=n}if(e.text_color!==void 0)if(e.text_color===!1||e.text_color===null)v=!1;else{var i=j(e.text_color);if(!i)throw console.error(`[Telegram.WebApp] Bottom button text color format is invalid`,e.text_color),Error(`WebAppBottomButtonParamInvalid`);v=i}if(e.is_visible!==void 0){if(e.is_visible&&!b.text.length)throw console.error(`[Telegram.WebApp] Bottom button text is required`),Error(`WebAppBottomButtonParamInvalid`);d=!!e.is_visible}if(e.has_shine_effect!==void 0&&(p=!!e.has_shine_effect),!r&&e.position!==void 0){if(e.position!=`left`&&e.position!=`right`&&e.position!=`top`&&e.position!=`bottom`)throw console.error(`[Telegram.WebApp] Bottom button posiition is invalid`,e.position),Error(`WebAppBottomButtonParamInvalid`);y=e.position}return e.is_active!==void 0&&(f=!!e.is_active),E(),b}return b.setText=function(e){return b.setParams({text:e})},b.onClick=function(e){return O(o,e),b},b.offClick=function(e){return le(o,e),b},b.show=function(){return b.setParams({is_visible:!0})},b.hide=function(){return b.setParams({is_visible:!1})},b.enable=function(){return b.setParams({is_active:!0})},b.disable=function(){return b.setParams({is_active:!1})},b.showProgress=function(e){return f=!!e,m=!0,E(),b},b.hideProgress=function(){return b.isActive||(f=!0),m=!1,E(),b},b.setParams=re,b},ht=mt(`main`),gt=mt(`secondary`),_t=(function(){var e=!1,n={};Object.defineProperty(n,`isVisible`,{set:function(e){u({is_visible:e})},get:function(){return e},enumerable:!0});var r=null;t.onEvent(`settings_button_pressed`,i);function i(){D(`settingsButtonClicked`)}function a(){return{is_visible:e}}function o(e){return e===void 0&&(e=a()),JSON.stringify(e)}function s(){return M(`6.10`)?!0:(console.warn(`[Telegram.WebApp] SettingsButton is not supported in version `+l),!1)}function c(){var e=a(),n=o(e);r!==n&&(r=n,t.postEvent(`web_app_setup_settings_button`,!1,e))}function u(t){return s()?(t.is_visible!==void 0&&(e=!!t.is_visible),c(),n):n}return n.onClick=function(e){return s()&&O(`settingsButtonClicked`,e),n},n.offClick=function(e){return s()&&le(`settingsButtonClicked`,e),n},n.show=function(){return u({is_visible:!0})},n.hide=function(){return u({is_visible:!1})},n})(),vt=(function(){var e={};function n(n){if(!M(`6.1`))return console.warn(`[Telegram.WebApp] HapticFeedback is not supported in version `+l),e;if(n.type==`impact`){if(n.impact_style!=`light`&&n.impact_style!=`medium`&&n.impact_style!=`heavy`&&n.impact_style!=`rigid`&&n.impact_style!=`soft`)throw console.error(`[Telegram.WebApp] Haptic impact style is invalid`,n.impact_style),Error(`WebAppHapticImpactStyleInvalid`)}else if(n.type==`notification`){if(n.notification_type!=`error`&&n.notification_type!=`success`&&n.notification_type!=`warning`)throw console.error(`[Telegram.WebApp] Haptic notification type is invalid`,n.notification_type),Error(`WebAppHapticNotificationTypeInvalid`)}else if(n.type!=`selection_change`)throw console.error(`[Telegram.WebApp] Haptic feedback type is invalid`,n.type),Error(`WebAppHapticFeedbackTypeInvalid`);return t.postEvent(`web_app_trigger_haptic_feedback`,!1,n),e}return e.impactOccurred=function(e){return n({type:`impact`,impact_style:e})},e.notificationOccurred=function(e){return n({type:`notification`,notification_type:e})},e.selectionChanged=function(){return n({type:`selection_change`})},e})(),yt=(function(){var e={};function t(t,n,r){if(!M(`6.9`))throw console.error(`[Telegram.WebApp] CloudStorage is not supported in version `+l),Error(`WebAppMethodUnsupported`);return zt(t,n,r),e}return e.setItem=function(e,n,r){return t(`saveStorageValue`,{key:e,value:n},r)},e.getItem=function(t,n){return e.getItems([t],n?function(e,r){e?n(e):n(null,r[t])}:null)},e.getItems=function(e,n){return t(`getStorageValues`,{keys:e},n)},e.removeItem=function(t,n){return e.removeItems([t],n)},e.removeItems=function(e,n){return t(`deleteStorageValues`,{keys:e},n)},e.getKeys=function(e){return t(`getStorageKeys`,{},e)},e})(),bt=(function(){var e=!1,n=!1,r=`unknown`,i=!1,a=!1,o=!1,s=``,c={};Object.defineProperty(c,`isInited`,{get:function(){return e},enumerable:!0}),Object.defineProperty(c,`isBiometricAvailable`,{get:function(){return e&&n},enumerable:!0}),Object.defineProperty(c,`biometricType`,{get:function(){return r||`unknown`},enumerable:!0}),Object.defineProperty(c,`isAccessRequested`,{get:function(){return i},enumerable:!0}),Object.defineProperty(c,`isAccessGranted`,{get:function(){return i&&a},enumerable:!0}),Object.defineProperty(c,`isBiometricTokenSaved`,{get:function(){return o},enumerable:!0}),Object.defineProperty(c,`deviceId`,{get:function(){return s||``},enumerable:!0});var u={callbacks:[]},d=!1,f=!1,p=!1;t.onEvent(`biometry_info_received`,m),t.onEvent(`biometry_auth_requested`,h),t.onEvent(`biometry_token_updated`,g);function m(t,c){if(e=!0,c.available?(n=!0,r=c.type||`unknown`,c.access_requested?(i=!0,a=!!c.access_granted,o=!!c.token_saved):(i=!1,a=!1,o=!1)):(n=!1,r=`unknown`,i=!1,a=!1,o=!1),s=c.device_id||``,u.callbacks.length>0){for(var l=0;l<u.callbacks.length;l++){var f=u.callbacks[l];f()}u.callbacks=[]}if(d){var p=d;d=!1,p.callback&&p.callback(a)}D(`biometricManagerUpdated`)}function h(e,t){var n=t.status==`authorized`,r=t.token||``;if(f){var i=f;f=!1,i.callback&&i.callback(n,n?r:null)}D(`biometricAuthRequested`,n?{isAuthenticated:!0,biometricToken:r}:{isAuthenticated:!1})}function g(e,t){var r=!1;if(n&&i&&(t.status==`updated`?(o=!0,r=!0):t.status==`removed`&&(o=!1,r=!0)),p){var a=p;p=!1,a.callback&&a.callback(r)}D(`biometricTokenUpdated`,{isUpdated:r})}function _(){return M(`7.2`)?!0:(console.warn(`[Telegram.WebApp] BiometricManager is not supported in version `+l),!1)}function v(){if(!e)throw console.error(`[Telegram.WebApp] BiometricManager should be inited before using.`),Error(`WebAppBiometricManagerNotInited`);return!0}return c.init=function(n){return!_()||e?c:(n&&u.callbacks.push(n),t.postEvent(`web_app_biometry_get_info`,!1),c)},c.requestAccess=function(e,r){if(!_())return c;if(v(),!n)throw console.error(`[Telegram.WebApp] Biometrics is not available on this device.`),Error(`WebAppBiometricManagerBiometricsNotAvailable`);if(d)throw console.error(`[Telegram.WebApp] Access is already requested`),Error(`WebAppBiometricManagerAccessRequested`);var i={};if(e.reason!==void 0){var a=ce(e.reason);if(a.length>128)throw console.error(`[Telegram.WebApp] Biometric reason is too long`,a),Error(`WebAppBiometricRequestAccessParamInvalid`);a.length>0&&(i.reason=a)}return d={callback:r},t.postEvent(`web_app_biometry_request_access`,!1,i),c},c.authenticate=function(e,r){if(!_())return c;if(v(),!n)throw console.error(`[Telegram.WebApp] Biometrics is not available on this device.`),Error(`WebAppBiometricManagerBiometricsNotAvailable`);if(!a)throw console.error(`[Telegram.WebApp] Biometric access was not granted by the user.`),Error(`WebAppBiometricManagerBiometricAccessNotGranted`);if(f)throw console.error(`[Telegram.WebApp] Authentication request is already in progress.`),Error(`WebAppBiometricManagerAuthenticationRequested`);var i={};if(e.reason!==void 0){var o=ce(e.reason);if(o.length>128)throw console.error(`[Telegram.WebApp] Biometric reason is too long`,o),Error(`WebAppBiometricRequestAccessParamInvalid`);o.length>0&&(i.reason=o)}return f={callback:r},t.postEvent(`web_app_biometry_request_auth`,!1,i),c},c.updateBiometricToken=function(e,r){if(!_())return c;if(e||=``,e.length>1024)throw console.error(`[Telegram.WebApp] Token is too long`,e),Error(`WebAppBiometricManagerTokenInvalid`);if(v(),!n)throw console.error(`[Telegram.WebApp] Biometrics is not available on this device.`),Error(`WebAppBiometricManagerBiometricsNotAvailable`);if(!a)throw console.error(`[Telegram.WebApp] Biometric access was not granted by the user.`),Error(`WebAppBiometricManagerBiometricAccessNotGranted`);if(p)throw console.error(`[Telegram.WebApp] Token request is already in progress.`),Error(`WebAppBiometricManagerTokenUpdateRequested`);return p={callback:r},t.postEvent(`web_app_biometry_update_token`,!1,{token:e}),c},c.openSettings=function(){if(!_())return c;if(v(),!n)throw console.error(`[Telegram.WebApp] Biometrics is not available on this device.`),Error(`WebAppBiometricManagerBiometricsNotAvailable`);if(!i)throw console.error(`[Telegram.WebApp] Biometric access was not requested yet.`),Error(`WebAppBiometricManagerBiometricsAccessNotRequested`);return a?(console.warn(`[Telegram.WebApp] Biometric access was granted by the user, no need to go to settings.`),c):(t.postEvent(`web_app_biometry_open_settings`,!1),c)},c})(),xt=(function(){var e=!1,n=!1,r=!1,i=!1,a={};Object.defineProperty(a,`isInited`,{get:function(){return e},enumerable:!0}),Object.defineProperty(a,`isLocationAvailable`,{get:function(){return e&&n},enumerable:!0}),Object.defineProperty(a,`isAccessRequested`,{get:function(){return r},enumerable:!0}),Object.defineProperty(a,`isAccessGranted`,{get:function(){return r&&i},enumerable:!0});var o={callbacks:[]},s={callbacks:[]};t.onEvent(`location_checked`,c),t.onEvent(`location_requested`,u);function c(t,a){if(e=!0,a.available?(n=!0,a.access_requested?(r=!0,i=!!a.access_granted):(r=!1,i=!1)):(n=!1,r=!1,i=!1),o.callbacks.length>0){for(var s=0;s<o.callbacks.length;s++){var c=o.callbacks[s];c()}o.callbacks=[]}D(`locationManagerUpdated`)}function u(e,a){if(!a.available)s=null;else{var s={latitude:a.latitude,longitude:a.longitude,altitude:null,course:null,speed:null,horizontal_accuracy:null,vertical_accuracy:null,course_accuracy:null,speed_accuracy:null};a.altitude!==void 0&&a.altitude!==null&&(s.altitude=a.altitude),a.course!==void 0&&a.course!==null&&(s.course=a.course%360),a.speed!==void 0&&a.speed!==null&&(s.speed=a.speed),a.horizontal_accuracy!==void 0&&a.horizontal_accuracy!==null&&(s.horizontal_accuracy=a.horizontal_accuracy),a.vertical_accuracy!==void 0&&a.vertical_accuracy!==null&&(s.vertical_accuracy=a.vertical_accuracy),a.course_accuracy!==void 0&&a.course_accuracy!==null&&(s.course_accuracy=a.course_accuracy),a.speed_accuracy!==void 0&&a.speed_accuracy!==null&&(s.speed_accuracy=a.speed_accuracy)}!a.available||!n||!r||!i?(o.callbacks.push(function(){d(s)}),t.postEvent(`web_app_check_location`,!1)):d(s)}function d(e){if(s.callbacks.length>0){for(var t=0;t<s.callbacks.length;t++){var n=s.callbacks[t];n(e)}s.callbacks=[]}e!==null&&D(`locationRequested`,{locationData:e})}function f(){return M(`8.0`)?!0:(console.warn(`[Telegram.WebApp] LocationManager is not supported in version `+l),!1)}function p(){if(!e)throw console.error(`[Telegram.WebApp] LocationManager should be inited before using.`),Error(`WebAppLocationManagerNotInited`);return!0}return a.init=function(n){return!f()||e?a:(n&&o.callbacks.push(n),t.postEvent(`web_app_check_location`,!1),a)},a.getLocation=function(e){if(!f())return a;if(p(),!n)throw console.error(`[Telegram.WebApp] Location is not available on this device.`),Error(`WebAppLocationManagerLocationNotAvailable`);return s.callbacks.push(e),t.postEvent(`web_app_request_location`),a},a.openSettings=function(){if(!f())return a;if(p(),!n)throw console.error(`[Telegram.WebApp] Location is not available on this device.`),Error(`WebAppLocationManagerLocationNotAvailable`);if(!r)throw console.error(`[Telegram.WebApp] Location access was not requested yet.`),Error(`WebAppLocationManagerLocationAccessNotRequested`);return i?(console.warn(`[Telegram.WebApp] Location access was granted by the user, no need to go to settings.`),a):(t.postEvent(`web_app_open_location_settings`,!1),a)},a})(),St=(function(){var e=!1,n=null,r=null,i=null,a=[],o=[],s={};Object.defineProperty(s,`isStarted`,{get:function(){return e},enumerable:!0}),Object.defineProperty(s,`x`,{get:function(){return n},enumerable:!0}),Object.defineProperty(s,`y`,{get:function(){return r},enumerable:!0}),Object.defineProperty(s,`z`,{get:function(){return i},enumerable:!0}),t.onEvent(`accelerometer_started`,c),t.onEvent(`accelerometer_stopped`,u),t.onEvent(`accelerometer_changed`,d),t.onEvent(`accelerometer_failed`,f);function c(t,n){if(e=!0,a.length>0){for(var r=0;r<a.length;r++){var i=a[r];i(!0)}a=[]}D(`accelerometerStarted`)}function u(t,n){if(e=!1,o.length>0){for(var r=0;r<o.length;r++){var i=o[r];i(!0)}o=[]}D(`accelerometerStopped`)}function d(e,t){n=t.x,r=t.y,i=t.z,D(`accelerometerChanged`)}function f(e,t){if(a.length>0){for(var n=0;n<a.length;n++){var r=a[n];r(!1)}a=[]}D(`accelerometerFailed`,{error:t.error})}function p(){return M(`8.0`)?!0:(console.warn(`[Telegram.WebApp] Accelerometer is not supported in version `+l),!1)}return s.start=function(e,n){if(e||={},!p())return s;var r={},i=parseInt(e.refresh_rate||1e3);return isNaN(i)||i<20||i>1e3?console.warn(`[Telegram.WebApp] Accelerometer refresh_rate is invalid`,i):r.refresh_rate=i,n&&a.push(n),t.postEvent(`web_app_start_accelerometer`,!1,r),s},s.stop=function(e){return p()?(e&&o.push(e),t.postEvent(`web_app_stop_accelerometer`),s):s},s})(),Ct=(function(){var e=!1,n=null,r=null,i=null,a=!1,o=[],s=[],c={};Object.defineProperty(c,`isStarted`,{get:function(){return e},enumerable:!0}),Object.defineProperty(c,`absolute`,{get:function(){return a},enumerable:!0}),Object.defineProperty(c,`alpha`,{get:function(){return n},enumerable:!0}),Object.defineProperty(c,`beta`,{get:function(){return r},enumerable:!0}),Object.defineProperty(c,`gamma`,{get:function(){return i},enumerable:!0}),t.onEvent(`device_orientation_started`,u),t.onEvent(`device_orientation_stopped`,d),t.onEvent(`device_orientation_changed`,f),t.onEvent(`device_orientation_failed`,p);function u(t,n){if(e=!0,o.length>0){for(var r=0;r<o.length;r++){var i=o[r];i(!0)}o=[]}D(`deviceOrientationStarted`)}function d(t,n){if(e=!1,s.length>0){for(var r=0;r<s.length;r++){var i=s[r];i(!0)}s=[]}D(`deviceOrientationStopped`)}function f(e,t){a=!!t.absolute,n=t.alpha,r=t.beta,i=t.gamma,D(`deviceOrientationChanged`)}function p(e,t){if(o.length>0){for(var n=0;n<o.length;n++){var r=o[n];r(!1)}o=[]}D(`deviceOrientationFailed`,{error:t.error})}function m(){return M(`8.0`)?!0:(console.warn(`[Telegram.WebApp] DeviceOrientation is not supported in version `+l),!1)}return c.start=function(e,n){if(e||={},!m())return c;var r={},i=parseInt(e.refresh_rate||1e3);return isNaN(i)||i<20||i>1e3?console.warn(`[Telegram.WebApp] DeviceOrientation refresh_rate is invalid`,i):r.refresh_rate=i,r.need_absolute=!!e.need_absolute,n&&o.push(n),t.postEvent(`web_app_start_device_orientation`,!1,r),c},c.stop=function(e){return m()?(e&&s.push(e),t.postEvent(`web_app_stop_device_orientation`),c):c},c})(),wt=(function(){var e=!1,n=null,r=null,i=null,a=[],o=[],s={};Object.defineProperty(s,`isStarted`,{get:function(){return e},enumerable:!0}),Object.defineProperty(s,`x`,{get:function(){return n},enumerable:!0}),Object.defineProperty(s,`y`,{get:function(){return r},enumerable:!0}),Object.defineProperty(s,`z`,{get:function(){return i},enumerable:!0}),t.onEvent(`gyroscope_started`,c),t.onEvent(`gyroscope_stopped`,u),t.onEvent(`gyroscope_changed`,d),t.onEvent(`gyroscope_failed`,f);function c(t,n){if(e=!0,a.length>0){for(var r=0;r<a.length;r++){var i=a[r];i(!0)}a=[]}D(`gyroscopeStarted`)}function u(t,n){if(e=!1,o.length>0){for(var r=0;r<o.length;r++){var i=o[r];i(!0)}o=[]}D(`gyroscopeStopped`)}function d(e,t){n=t.x,r=t.y,i=t.z,D(`gyroscopeChanged`)}function f(e,t){if(a.length>0){for(var n=0;n<a.length;n++){var r=a[n];r(!1)}a=[]}D(`gyroscopeFailed`,{error:t.error})}function p(){return M(`8.0`)?!0:(console.warn(`[Telegram.WebApp] Gyroscope is not supported in version `+l),!1)}return s.start=function(e,n){if(e||={},!p())return s;var r={},i=parseInt(e.refresh_rate||1e3);return isNaN(i)||i<20||i>1e3?console.warn(`[Telegram.WebApp] Gyroscope refresh_rate is invalid`,i):r.refresh_rate=i,n&&a.push(n),t.postEvent(`web_app_start_gyroscope`,!1,r),s},s.stop=function(e){return p()?(e&&o.push(e),t.postEvent(`web_app_stop_gyroscope`),s):s},s})(),Tt={};function Et(e,t){if(t.slug&&Tt[t.slug]){var n=Tt[t.slug];delete Tt[t.slug],n.callback&&n.callback(t.status),D(`invoiceClosed`,{url:n.url,status:t.status})}}var He=!1;function Ue(e,t){if(He){var n=He;He=!1;var r=null;t.button_id!==void 0&&(r=t.button_id),n.callback&&n.callback(r),D(`popupClosed`,{button_id:r})}}var Dt=!1;function Ot(e,n){if(Dt){var r=Dt,i=null;n.data!==void 0&&(i=n.data),r.callback&&r.callback(i)&&(Dt=!1,t.postEvent(`web_app_close_scan_qr_popup`,!1)),D(`qrTextReceived`,{data:i})}}function kt(e,t){Dt=!1,D(`scanQrPopupClosed`)}function At(e,t){if(t.req_id&&me[t.req_id]){var n=me[t.req_id];delete me[t.req_id];var r=null;t.data!==void 0&&(r=t.data),n.callback&&n.callback(r),D(`clipboardTextReceived`,{data:r})}}var jt=!1;function Mt(e,t){if(jt){var n=jt;jt=!1,n.callback&&n.callback(t.status==`allowed`),D(`writeAccessRequested`,{status:t.status})}}function Nt(e,t){var n,r,i=0,a=function(){zt(`getRequestedContact`,{},function(t,o){o&&o.length?(clearTimeout(r),e(o)):(i+=50,n=setTimeout(a,i))})};r=setTimeout(function(){clearTimeout(n),e(``)},t),a()}var Pt=!1;function Ft(t,n){if(Pt){var r=Pt;Pt=!1;var i=n.status==`sent`,a={status:n.status};i?Nt(function(t){if(t&&t.length)for(var n in a.response=t,a.responseUnsafe=e.urlParseQueryString(t),a.responseUnsafe){var o=a.responseUnsafe[n];try{(o.substr(0,1)==`{`&&o.substr(-1)==`}`||o.substr(0,1)==`[`&&o.substr(-1)==`]`)&&(a.responseUnsafe[n]=JSON.parse(o))}catch{}}r.callback&&r.callback(i,a),D(`contactRequested`,a)},3e3):(r.callback&&r.callback(i,a),D(`contactRequested`,a))}}var It=!1;function Lt(e,t){if(It){var n=It;It=!1;var r=t.status==`downloading`;n.callback&&n.callback(r),D(`fileDownloadRequested`,{status:r?`downloading`:`cancelled`})}}function Rt(e,t){if(t.req_id&&me[t.req_id]){var n=me[t.req_id];delete me[t.req_id];var r=null,i=null;t.result!==void 0&&(r=t.result),t.error!==void 0&&(i=t.error),n.callback&&n.callback(i,r)}}function zt(e,n,r){if(!M(`6.9`))throw console.error(`[Telegram.WebApp] Method invokeCustomMethod is not supported in version `+l),Error(`WebAppMethodUnsupported`);var i=he(16),a={req_id:i,method:e,params:n||{}};me[i]={callback:r},t.postEvent(`web_app_invoke_custom_method`,!1,a)}window.Telegram||(window.Telegram={}),Object.defineProperty(i,`initData`,{get:function(){return a},enumerable:!0}),Object.defineProperty(i,`initDataUnsafe`,{get:function(){return o},enumerable:!0}),Object.defineProperty(i,`version`,{get:function(){return l},enumerable:!0}),Object.defineProperty(i,`platform`,{get:function(){return u},enumerable:!0}),Object.defineProperty(i,`colorScheme`,{get:function(){return c},enumerable:!0}),Object.defineProperty(i,`themeParams`,{get:function(){return s},enumerable:!0}),Object.defineProperty(i,`isExpanded`,{get:function(){return ve},enumerable:!0}),Object.defineProperty(i,`viewportHeight`,{get:function(){return(ge===!1?window.innerHeight:ge)-lt},enumerable:!0}),Object.defineProperty(i,`viewportStableHeight`,{get:function(){return(_e===!1?window.innerHeight:_e)-lt},enumerable:!0}),Object.defineProperty(i,`safeAreaInset`,{get:function(){return be},enumerable:!0}),Object.defineProperty(i,`contentSafeAreaInset`,{get:function(){return Se},enumerable:!0}),Object.defineProperty(i,`isClosingConfirmationEnabled`,{set:function(e){Te(e)},get:function(){return we},enumerable:!0}),Object.defineProperty(i,`isVerticalSwipesEnabled`,{set:function(e){De(e)},get:function(){return Ee},enumerable:!0}),Object.defineProperty(i,`isFullscreen`,{get:function(){return f},enumerable:!0}),Object.defineProperty(i,`isOrientationLocked`,{set:function(e){Ae(e)},get:function(){return p},enumerable:!0}),Object.defineProperty(i,`isActive`,{get:function(){return d},enumerable:!0}),Object.defineProperty(i,`headerColor`,{set:function(e){Ge(e)},get:function(){return We()},enumerable:!0}),Object.defineProperty(i,`backgroundColor`,{set:function(e){Xe(e)},get:function(){return Ye()},enumerable:!0}),Object.defineProperty(i,`bottomBarColor`,{set:function(e){tt(e)},get:function(){return et()},enumerable:!0}),Object.defineProperty(i,`BackButton`,{value:ot,enumerable:!0}),Object.defineProperty(i,`MainButton`,{value:ht,enumerable:!0}),Object.defineProperty(i,`SecondaryButton`,{value:gt,enumerable:!0}),Object.defineProperty(i,`SettingsButton`,{value:_t,enumerable:!0}),Object.defineProperty(i,`HapticFeedback`,{value:vt,enumerable:!0}),Object.defineProperty(i,`CloudStorage`,{value:yt,enumerable:!0}),Object.defineProperty(i,`BiometricManager`,{value:bt,enumerable:!0}),Object.defineProperty(i,`Accelerometer`,{value:St,enumerable:!0}),Object.defineProperty(i,`DeviceOrientation`,{value:Ct,enumerable:!0}),Object.defineProperty(i,`Gyroscope`,{value:wt,enumerable:!0}),Object.defineProperty(i,`LocationManager`,{value:xt,enumerable:!0}),i.isVersionAtLeast=function(e){return M(e)},i.setHeaderColor=function(e){i.headerColor=e},i.setBackgroundColor=function(e){i.backgroundColor=e},i.setBottomBarColor=function(e){i.bottomBarColor=e},i.enableClosingConfirmation=function(){i.isClosingConfirmationEnabled=!0},i.disableClosingConfirmation=function(){i.isClosingConfirmationEnabled=!1},i.enableVerticalSwipes=function(){i.isVerticalSwipesEnabled=!0},i.disableVerticalSwipes=function(){i.isVerticalSwipesEnabled=!1},i.lockOrientation=function(){i.isOrientationLocked=!0},i.unlockOrientation=function(){i.isOrientationLocked=!1},i.requestFullscreen=function(){if(!M(`8.0`))throw console.error(`[Telegram.WebApp] Method requestFullscreen is not supported in version `+l),Error(`WebAppMethodUnsupported`);t.postEvent(`web_app_request_fullscreen`)},i.exitFullscreen=function(){if(!M(`8.0`))throw console.error(`[Telegram.WebApp] Method exitFullscreen is not supported in version `+l),Error(`WebAppMethodUnsupported`);t.postEvent(`web_app_exit_fullscreen`)},i.addToHomeScreen=function(){if(!M(`8.0`))throw console.error(`[Telegram.WebApp] Method addToHomeScreen is not supported in version `+l),Error(`WebAppMethodUnsupported`);t.postEvent(`web_app_add_to_home_screen`)},i.checkHomeScreenStatus=function(e){if(!M(`8.0`))throw console.error(`[Telegram.WebApp] Method checkHomeScreenStatus is not supported in version `+l),Error(`WebAppMethodUnsupported`);e&&je.push(e),t.postEvent(`web_app_check_home_screen`)},i.onEvent=function(e,t){O(e,t)},i.offEvent=function(e,t){le(e,t)},i.sendData=function(e){if(!e||!e.length)throw console.error(`[Telegram.WebApp] Data is required`,e),Error(`WebAppDataInvalid`);if(at(e)>4096)throw console.error(`[Telegram.WebApp] Data is too long`,e),Error(`WebAppDataInvalid`);t.postEvent(`web_app_data_send`,!1,{data:e})},i.switchInlineQuery=function(e,r){if(!M(`6.6`))throw console.error(`[Telegram.WebApp] Method switchInlineQuery is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(!n.tgWebAppBotInline)throw console.error(`[Telegram.WebApp] Inline mode is disabled for this bot. Read more about inline mode: https://core.telegram.org/bots/inline`),Error(`WebAppInlineModeDisabled`);if(e||=``,e.length>256)throw console.error(`[Telegram.WebApp] Inline query is too long`,e),Error(`WebAppInlineQueryInvalid`);var i=[];if(r){if(!Array.isArray(r))throw console.error(`[Telegram.WebApp] Choose chat types should be an array`,r),Error(`WebAppInlineChooseChatTypesInvalid`);for(var a={users:1,bots:1,groups:1,channels:1},o=0;o<r.length;o++){var s=r[o];if(!a[s])throw console.error(`[Telegram.WebApp] Choose chat type is invalid`,s),Error(`WebAppInlineChooseChatTypeInvalid`);a[s]!=2&&(a[s]=2,i.push(s))}}t.postEvent(`web_app_switch_inline_query`,!1,{query:e,chat_types:i})},i.openLink=function(e,n){var r=document.createElement(`A`);if(r.href=e,r.protocol!=`http:`&&r.protocol!=`https:`)throw console.error(`[Telegram.WebApp] Url protocol is not supported`,e),Error(`WebAppTgUrlInvalid`);var e=r.href;if(n||={},M(`6.1`)){var i={url:e};M(`6.4`)&&n.try_instant_view&&(i.try_instant_view=!0),M(`7.6`)&&n.try_browser&&(i.try_browser=n.try_browser),t.postEvent(`web_app_open_link`,!1,i)}else window.open(e,`_blank`)},i.openTelegramLink=function(e,n){var i=document.createElement(`A`);if(i.href=e,i.protocol!=`http:`&&i.protocol!=`https:`)throw console.error(`[Telegram.WebApp] Url protocol is not supported`,e),Error(`WebAppTgUrlInvalid`);if(i.hostname!=`t.me`)throw console.error(`[Telegram.WebApp] Url host is not supported`,e),Error(`WebAppTgUrlInvalid`);var a=i.pathname+i.search;if(n||={},r||M(`6.1`)){var o={path_full:a};n.force_request&&(o.force_request=!0),t.postEvent(`web_app_open_tg_link`,!1,o)}else location.href=`https://t.me`+a},i.openInvoice=function(e,n){var r=document.createElement(`A`),i,a;if(r.href=e,r.protocol!=`http:`&&r.protocol!=`https:`||r.hostname!=`t.me`||!(i=r.pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/))||!(a=i[2]))throw console.error(`[Telegram.WebApp] Invoice url is invalid`,e),Error(`WebAppInvoiceUrlInvalid`);if(!M(`6.1`))throw console.error(`[Telegram.WebApp] Method openInvoice is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(Tt[a])throw console.error(`[Telegram.WebApp] Invoice is already opened`),Error(`WebAppInvoiceOpened`);Tt[a]={url:e,callback:n},t.postEvent(`web_app_open_invoice`,!1,{slug:a})},i.showPopup=function(e,n){if(!M(`6.2`))throw console.error(`[Telegram.WebApp] Method showPopup is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(He)throw console.error(`[Telegram.WebApp] Popup is already opened`),Error(`WebAppPopupOpened`);var r=``,i=``,a=[],o={};if(e.title!==void 0){if(r=ce(e.title),r.length>64)throw console.error(`[Telegram.WebApp] Popup title is too long`,r),Error(`WebAppPopupParamInvalid`);r.length>0&&(o.title=r)}if(e.message!==void 0&&(i=ce(e.message)),!i.length)throw console.error(`[Telegram.WebApp] Popup message is required`,e.message),Error(`WebAppPopupParamInvalid`);if(i.length>256)throw console.error(`[Telegram.WebApp] Popup message is too long`,i),Error(`WebAppPopupParamInvalid`);if(o.message=i,e.buttons!==void 0){if(!Array.isArray(e.buttons))throw console.error(`[Telegram.WebApp] Popup buttons should be an array`,e.buttons),Error(`WebAppPopupParamInvalid`);for(var s=0;s<e.buttons.length;s++){var c=e.buttons[s],u={},d=``;if(c.id!==void 0&&(d=c.id.toString(),d.length>64))throw console.error(`[Telegram.WebApp] Popup button id is too long`,d),Error(`WebAppPopupParamInvalid`);u.id=d;var f=c.type;if(f===void 0&&(f=`default`),u.type=f,!(f==`ok`||f==`close`||f==`cancel`))if(f==`default`||f==`destructive`){var p=``;if(c.text!==void 0&&(p=ce(c.text)),!p.length)throw console.error(`[Telegram.WebApp] Popup button text is required for type `+f,c.text),Error(`WebAppPopupParamInvalid`);if(p.length>64)throw console.error(`[Telegram.WebApp] Popup button text is too long`,p),Error(`WebAppPopupParamInvalid`);u.text=p}else throw console.error(`[Telegram.WebApp] Popup button type is invalid`,f),Error(`WebAppPopupParamInvalid`);a.push(u)}}else a.push({id:``,type:`close`});if(a.length<1)throw console.error(`[Telegram.WebApp] Popup should have at least one button`),Error(`WebAppPopupParamInvalid`);if(a.length>3)throw console.error(`[Telegram.WebApp] Popup should not have more than 3 buttons`),Error(`WebAppPopupParamInvalid`);o.buttons=a,He={callback:n},t.postEvent(`web_app_open_popup`,!1,o)},i.showAlert=function(e,t){i.showPopup({message:e},t?function(){t()}:null)},i.showConfirm=function(e,t){i.showPopup({message:e,buttons:[{type:`ok`,id:`ok`},{type:`cancel`}]},t?function(e){t(e==`ok`)}:null)},i.showScanQrPopup=function(e,n){if(!M(`6.4`))throw console.error(`[Telegram.WebApp] Method showScanQrPopup is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(Dt)throw console.error(`[Telegram.WebApp] Popup is already opened`),Error(`WebAppScanQrPopupOpened`);var r=``,i={};if(e.text!==void 0){if(r=ce(e.text),r.length>64)throw console.error(`[Telegram.WebApp] Scan QR popup text is too long`,r),Error(`WebAppScanQrPopupParamInvalid`);r.length>0&&(i.text=r)}Dt={callback:n},t.postEvent(`web_app_open_scan_qr_popup`,!1,i)},i.closeScanQrPopup=function(){if(!M(`6.4`))throw console.error(`[Telegram.WebApp] Method closeScanQrPopup is not supported in version `+l),Error(`WebAppMethodUnsupported`);Dt=!1,t.postEvent(`web_app_close_scan_qr_popup`,!1)},i.readTextFromClipboard=function(e){if(!M(`6.4`))throw console.error(`[Telegram.WebApp] Method readTextFromClipboard is not supported in version `+l),Error(`WebAppMethodUnsupported`);var n=he(16),r={req_id:n};me[n]={callback:e},t.postEvent(`web_app_read_text_from_clipboard`,!1,r)},i.requestWriteAccess=function(e){if(!M(`6.9`))throw console.error(`[Telegram.WebApp] Method requestWriteAccess is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(jt)throw console.error(`[Telegram.WebApp] Write access is already requested`),Error(`WebAppWriteAccessRequested`);jt={callback:e},t.postEvent(`web_app_request_write_access`)},i.requestContact=function(e){if(!M(`6.9`))throw console.error(`[Telegram.WebApp] Method requestContact is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(Pt)throw console.error(`[Telegram.WebApp] Contact is already requested`),Error(`WebAppContactRequested`);Pt={callback:e},t.postEvent(`web_app_request_phone`)},i.downloadFile=function(e,n){if(!M(`8.0`))throw console.error(`[Telegram.WebApp] Method downloadFile is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(It)throw console.error(`[Telegram.WebApp] Popup is already opened`),Error(`WebAppDownloadFilePopupOpened`);var r=document.createElement(`A`),i={};if(!e||!e.url||!e.url.length)throw console.error(`[Telegram.WebApp] Url is required`),Error(`WebAppDownloadFileParamInvalid`);if(r.href=e.url,r.protocol!=`https:`)throw console.error(`[Telegram.WebApp] Url protocol is not supported`,url),Error(`WebAppDownloadFileParamInvalid`);if(i.url=r.href,!e||!e.file_name||!e.file_name.length)throw console.error(`[Telegram.WebApp] File name is required`),Error(`WebAppDownloadFileParamInvalid`);i.file_name=e.file_name,It={callback:n},t.postEvent(`web_app_request_file_download`,!1,i)},i.shareToStory=function(e,n){if(n||={},!M(`7.8`))throw console.error(`[Telegram.WebApp] Method shareToStory is not supported in version `+l),Error(`WebAppMethodUnsupported`);var r=document.createElement(`A`);if(r.href=e,r.protocol!=`http:`&&r.protocol!=`https:`)throw console.error(`[Telegram.WebApp] Media url protocol is not supported`,url),Error(`WebAppMediaUrlInvalid`);var i={};if(i.media_url=r.href,n.text!==void 0){var a=ce(n.text);if(a.length>2048)throw console.error(`[Telegram.WebApp] Text is too long`,a),Error(`WebAppShareToStoryParamInvalid`);a.length>0&&(i.text=a)}if(n.widget_link!==void 0){if(n.widget_link=n.widget_link||{},r.href=n.widget_link.url,r.protocol!=`http:`&&r.protocol!=`https:`)throw console.error(`[Telegram.WebApp] Link protocol is not supported`,url),Error(`WebAppShareToStoryParamInvalid`);var o={url:r.href};if(n.widget_link.name!==void 0){var s=ce(n.widget_link.name);if(s.length>48)throw console.error(`[Telegram.WebApp] Link name is too long`,s),Error(`WebAppShareToStoryParamInvalid`);s.length>0&&(o.name=s)}i.widget_link=o}t.postEvent(`web_app_share_to_story`,!1,i)},i.shareMessage=function(e,n){if(!M(`8.0`))throw console.error(`[Telegram.WebApp] Method shareMessage is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(Pe)throw console.error(`[Telegram.WebApp] Share message is already opened`),Error(`WebAppShareMessageOpened`);Pe={callback:n},t.postEvent(`web_app_send_prepared_message`,!1,{id:e})},i.setEmojiStatus=function(e,n,r){if(n||={},!M(`8.0`))throw console.error(`[Telegram.WebApp] Method setEmojiStatus is not supported in version `+l),Error(`WebAppMethodUnsupported`);var i={};if(i.custom_emoji_id=e,n.duration!==void 0&&(i.duration=n.duration),Le)throw console.error(`[Telegram.WebApp] Emoji status is already requested`),Error(`WebAppEmojiStatusRequested`);Le={callback:r},t.postEvent(`web_app_set_emoji_status`,!1,i)},i.requestEmojiStatusAccess=function(e){if(!M(`8.0`))throw console.error(`[Telegram.WebApp] Method requestEmojiStatusAccess is not supported in version `+l),Error(`WebAppMethodUnsupported`);if(Be)throw console.error(`[Telegram.WebApp] Emoji status permission is already requested`),Error(`WebAppEmojiStatusAccessRequested`);Be={callback:e},t.postEvent(`web_app_request_emoji_status_access`)},i.invokeCustomMethod=function(e,t,n){zt(e,t,n)},i.ready=function(){t.postEvent(`web_app_ready`)},i.expand=function(){t.postEvent(`web_app_expand`)},i.close=function(e){e||={};var n={};M(`7.6`)&&e.return_back&&(n.return_back=!0),t.postEvent(`web_app_close`,!1,n)},window.Telegram.WebApp=i,Je(),Qe(),A(),ye(),n.tgWebAppShowSettings&&_t.show(),window.addEventListener(`resize`,re),r&&document.addEventListener(`click`,se),t.onEvent(`theme_changed`,te),t.onEvent(`viewport_changed`,ne),t.onEvent(`safe_area_changed`,ie),t.onEvent(`content_safe_area_changed`,ae),t.onEvent(`visibility_changed`,oe),t.onEvent(`invoice_closed`,Et),t.onEvent(`popup_closed`,Ue),t.onEvent(`qr_text_received`,Ot),t.onEvent(`scan_qr_popup_closed`,kt),t.onEvent(`clipboard_text_received`,At),t.onEvent(`write_access_requested`,Mt),t.onEvent(`phone_requested`,Ft),t.onEvent(`file_download_requested`,Lt),t.onEvent(`custom_method_invoked`,Rt),t.onEvent(`fullscreen_changed`,Oe),t.onEvent(`fullscreen_failed`,ke),t.onEvent(`home_screen_added`,Me),t.onEvent(`home_screen_checked`,Ne),t.onEvent(`prepared_message_sent`,Fe),t.onEvent(`prepared_message_failed`,Ie),t.onEvent(`emoji_status_set`,Re),t.onEvent(`emoji_status_failed`,ze),t.onEvent(`emoji_status_access_requested`,Ve),t.postEvent(`web_app_request_theme`),t.postEvent(`web_app_request_viewport`),t.postEvent(`web_app_request_safe_area`),t.postEvent(`web_app_request_content_safe_area`)})()})),ro=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.WebApp=void 0,no(),e.WebApp=window.Telegram.WebApp})),io=u(s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default=ro().WebApp}))(),1),ao=(e,t)=>{try{return e()}catch{return t}};function oo(){return ao(()=>window?.Telegram?.WebApp?.initDataUnsafe?.user,void 0)||ao(()=>io.default.initDataUnsafe?.user,void 0)}var so=()=>{let[e,t]=(0,b.useState)(()=>oo()),n=ao(()=>io.default.colorScheme,`dark`);return(0,b.useEffect)(()=>{let n=window?.Telegram?.WebApp;if(console.log(`[pinst][tg] window.Telegram.WebApp exists:`,!!n),console.log(`[pinst][tg] initData length:`,n?.initData?.length??0),console.log(`[pinst][tg] initDataUnsafe.user:`,JSON.stringify(n?.initDataUnsafe?.user??null)),console.log(`[pinst][tg] @twa-dev/sdk user:`,JSON.stringify(io.default.initDataUnsafe?.user??null)),e){console.log(`[pinst][tg] user already resolved on mount:`,JSON.stringify(e));return}let r=oo();if(r){console.log(`[pinst][tg] resolved after mount:`,JSON.stringify(r)),t(r);return}console.warn(`[pinst][tg] user not available yet, starting poll`);let i=0,a=setInterval(()=>{i++;let e=oo();e?(console.log(`[pinst][tg] resolved after ${i} poll attempts:`,JSON.stringify(e)),t(e),clearInterval(a)):i>=20&&(console.error(`[pinst][tg] user still null after 2s — not running inside Telegram?`),clearInterval(a))},100);return()=>clearInterval(a)},[]),{user:e,colorScheme:n,onClose:()=>ao(()=>io.default.close(),void 0),onReady:()=>ao(()=>io.default.ready(),void 0),expandApp:()=>ao(()=>io.default.expand(),void 0),showAlert:e=>ao(()=>io.default.showAlert(e),void 0),showConfirm:(e,t)=>ao(()=>io.default.showConfirm(e,t),void 0),hapticFeedback:e=>ao(()=>io.default.HapticFeedback.impactOccurred(e),void 0),setColors:()=>{ao(()=>io.default.setHeaderColor(`#0a0a0f`),void 0),ao(()=>io.default.setBackgroundColor(`#0a0a0f`),void 0)},WebApp:io.default}},co=()=>qn.get(`/api/profile`),lo=null,uo=!1,fo=null,po=new Set,mo=()=>po.forEach(e=>e()),ho=async()=>{try{await $n();try{let e=await co();console.log(`[pinst][api] /api/user/me response:`,JSON.stringify(e.data)),lo=e.data}catch(e){if(e?.response?.status===401){Gn(``),Qn(),await $n();let e=await co();console.log(`[pinst][api] /api/user/me retry response:`,JSON.stringify(e.data)),lo=e.data}else throw e}}catch(e){console.warn(`[pinst] fetchUser failed:`,e?.response?.status,e?.message),lo=null}finally{uo=!0,fo=null,mo()}},go=()=>{let[,e]=(0,b.useState)(0);return(0,b.useEffect)(()=>{let t=()=>e(e=>e+1);return po.add(t),!uo&&!fo&&(fo=ho()),()=>{po.delete(t)}},[]),{user:lo,loading:!uo,error:null,refetch:()=>{uo=!1,lo=null,fo=ho()}}},_o=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=s(((e,t)=>{t.exports=_o()}))();function L(){let e=yi(),t=Si(),{hapticFeedback:n}=so(),r=e=>{n(`light`),t(e)},i=e.pathname===`/create`,a=e.pathname===`/catalog`,o=e.pathname===`/chat`,s=e=>e?`#a78bfa`:`rgba(255,255,255,0.4)`,c=e=>e?`#a78bfa`:`rgba(255,255,255,0.4)`;return(0,I.jsxs)(`div`,{style:{position:`fixed`,bottom:0,left:0,right:0,height:84,background:`rgba(10,10,15,0.92)`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`,borderTop:`1px solid rgba(139,92,246,0.15)`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,paddingBottom:`calc(env(safe-area-inset-bottom) + 14px)`,zIndex:100},children:[(0,I.jsxs)(`button`,{onClick:()=>r(`/catalog`),style:{background:`none`,border:`none`,cursor:`pointer`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4,padding:`0 0 10px`,flex:1},children:[(0,I.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`2`,stroke:s(a),strokeWidth:`1.8`,fill:a?`rgba(139,92,246,0.2)`:`none`}),(0,I.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`2`,stroke:s(a),strokeWidth:`1.8`,fill:a?`rgba(139,92,246,0.2)`:`none`}),(0,I.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`2`,stroke:s(a),strokeWidth:`1.8`,fill:a?`rgba(139,92,246,0.2)`:`none`}),(0,I.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`2`,stroke:s(a),strokeWidth:`1.8`,fill:a?`rgba(139,92,246,0.2)`:`none`})]}),(0,I.jsx)(`span`,{style:{fontSize:10,color:c(a),fontFamily:`Inter, sans-serif`,fontWeight:a?600:400},children:`Каталог`})]}),(0,I.jsxs)(`button`,{onClick:()=>r(`/create`),style:{flex:1,background:`none`,border:`none`,cursor:`pointer`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:5,padding:`0 0 8px`},children:[(0,I.jsx)(`div`,{style:{width:44,height:44,borderRadius:`50%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,boxShadow:i?`0 0 24px rgba(139,92,246,0.9), 0 4px 16px rgba(0,0,0,0.5)`:`0 0 16px rgba(139,92,246,0.6), 0 4px 12px rgba(0,0,0,0.4)`,display:`flex`,alignItems:`center`,justifyContent:`center`,transform:`translateY(-14px)`,border:`3px solid #0a0a0f`,transition:`box-shadow 0.2s ease`},children:(0,I.jsx)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M12 5V19M5 12H19`,stroke:`#ffffff`,strokeWidth:`2.5`,strokeLinecap:`round`})})}),(0,I.jsx)(`span`,{style:{fontSize:10,color:c(i),fontFamily:`Inter, sans-serif`,fontWeight:i?600:400,marginTop:-10},children:`Создать`})]}),(0,I.jsxs)(`button`,{onClick:()=>r(`/chat`),style:{background:`none`,border:`none`,cursor:`pointer`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4,padding:`0 0 10px`,flex:1},children:[(0,I.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M21 15C21 15.5 20.8 16 20.4 16.4C20 16.8 19.5 17 19 17H7L3 21V5C3 4.5 3.2 4 3.6 3.6C4 3.2 4.5 3 5 3H19C19.5 3 20 3.2 20.4 3.6C20.8 4 21 4.5 21 5V15Z`,stroke:s(o),strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,fill:o?`rgba(139,92,246,0.2)`:`none`}),o&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`circle`,{cx:`8.5`,cy:`10`,r:`1`,fill:`#a78bfa`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`10`,r:`1`,fill:`#a78bfa`}),(0,I.jsx)(`circle`,{cx:`15.5`,cy:`10`,r:`1`,fill:`#a78bfa`})]})]}),(0,I.jsx)(`span`,{style:{fontSize:10,color:c(o),fontFamily:`Inter, sans-serif`,fontWeight:o?600:400},children:`Чат`})]})]})}function vo(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{style:{position:`fixed`,width:300,height:300,background:`radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)`,top:-100,right:-100,pointerEvents:`none`,zIndex:0}}),(0,I.jsx)(`div`,{style:{position:`fixed`,width:250,height:250,background:`radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 70%)`,bottom:-80,left:-80,pointerEvents:`none`,zIndex:0}})]})}var yo=(0,b.createContext)({});function bo(e){let t=(0,b.useRef)(null);return t.current===null&&(t.current=e()),t.current}var xo=typeof window<`u`?b.useLayoutEffect:b.useEffect,So=(0,b.createContext)(null);function Co(e,t){e.indexOf(t)===-1&&e.push(t)}function wo(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var To=(e,t,n)=>n>t?t:n<e?e:n,R={},Eo=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Do(e){return typeof e==`object`&&!!e}var Oo=e=>/^0[^.\s]+$/u.test(e);function ko(e){let t;return()=>(t===void 0&&(t=e()),t)}var Ao=e=>e,jo=(e,t)=>n=>t(e(n)),Mo=(...e)=>e.reduce(jo),No=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Po=class{constructor(){this.subscriptions=[]}add(e){return Co(this.subscriptions,e),()=>wo(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},z=e=>e*1e3,Fo=e=>e/1e3;function Io(e,t){return t?1e3/t*e:0}var Lo=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Ro=1e-7,zo=12;function Bo(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Lo(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Ro&&++s<zo);return o}function Vo(e,t,n,r){if(e===t&&n===r)return Ao;let i=t=>Bo(t,0,1,e,n);return e=>e===0||e===1?e:Lo(i(e),t,r)}var Ho=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Uo=e=>t=>1-e(1-t),Wo=Vo(.33,1.53,.69,.99),Go=Uo(Wo),Ko=Ho(Go),qo=e=>e>=1?1:(e*=2)<1?.5*Go(e):.5*(2-2**(-10*(e-1))),Jo=e=>1-Math.sin(Math.acos(e)),Yo=Uo(Jo),Xo=Ho(Jo),Zo=Vo(.42,0,1,1),Qo=Vo(0,0,.58,1),$o=Vo(.42,0,.58,1),es=e=>Array.isArray(e)&&typeof e[0]!=`number`,ts=e=>Array.isArray(e)&&typeof e[0]==`number`,ns={linear:Ao,easeIn:Zo,easeInOut:$o,easeOut:Qo,circIn:Jo,circInOut:Xo,circOut:Yo,backIn:Go,backInOut:Ko,backOut:Wo,anticipate:qo},rs=e=>typeof e==`string`,is=e=>{if(ts(e)){e.length;let[t,n,r,i]=e;return Vo(t,n,r,i)}else if(rs(e))return ns[e],`${e}`,ns[e];return e},as=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],os={value:null,addProjectionMetrics:null};function ss(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&os.value&&os.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var cs=40;function ls(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=as.reduce((e,n)=>(e[n]=ss(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=R.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,cs),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:as.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<as.length;t++)o[as[t]].cancel(e)},state:i,steps:o}}var{schedule:B,cancel:us,state:ds,steps:fs}=ls(typeof requestAnimationFrame<`u`?requestAnimationFrame:Ao,!0),ps;function ms(){ps=void 0}var hs={now:()=>(ps===void 0&&hs.set(ds.isProcessing||R.useManualTiming?ds.timestamp:performance.now()),ps),set:e=>{ps=e,queueMicrotask(ms)}},gs={layout:0,mainThread:0,waapi:0},_s=e=>t=>typeof t==`string`&&t.startsWith(e),vs=_s(`--`),ys=_s(`var(--`),bs=e=>ys(e)?xs.test(e.split(`/*`)[0].trim()):!1,xs=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ss(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Cs={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},ws={...Cs,transform:e=>To(0,1,e)},Ts={...Cs,default:1},Es=e=>Math.round(e*1e5)/1e5,Ds=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Os(e){return e==null}var ks=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,As=(e,t)=>n=>!!(typeof n==`string`&&ks.test(n)&&n.startsWith(e)||t&&!Os(n)&&Object.prototype.hasOwnProperty.call(n,t)),js=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Ds);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Ms=e=>To(0,255,e),Ns={...Cs,transform:e=>Math.round(Ms(e))},Ps={test:As(`rgb`,`red`),parse:js(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Ns.transform(e)+`, `+Ns.transform(t)+`, `+Ns.transform(n)+`, `+Es(ws.transform(r))+`)`};function Fs(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Is={test:As(`#`),parse:Fs,transform:Ps.transform},Ls=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Rs=Ls(`deg`),zs=Ls(`%`),V=Ls(`px`),Bs=Ls(`vh`),Vs=Ls(`vw`),Hs={...zs,parse:e=>zs.parse(e)/100,transform:e=>zs.transform(e*100)},Us={test:As(`hsl`,`hue`),parse:js(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+zs.transform(Es(t))+`, `+zs.transform(Es(n))+`, `+Es(ws.transform(r))+`)`},Ws={test:e=>Ps.test(e)||Is.test(e)||Us.test(e),parse:e=>Ps.test(e)?Ps.parse(e):Us.test(e)?Us.parse(e):Is.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Ps.transform(e):Us.transform(e),getAnimatableNone:e=>{let t=Ws.parse(e);return t.alpha=0,Ws.transform(t)}},Gs=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ks(e){return isNaN(e)&&typeof e==`string`&&(e.match(Ds)?.length||0)+(e.match(Gs)?.length||0)>0}var qs=`number`,Js=`color`,Ys=`var`,Xs=`var(`,Zs="${}",Qs=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $s(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Qs,e=>(Ws.test(e)?(r.color.push(a),i.push(Js),n.push(Ws.parse(e))):e.startsWith(Xs)?(r.var.push(a),i.push(Ys),n.push(e)):(r.number.push(a),i.push(qs),n.push(parseFloat(e))),++a,Zs)).split(Zs),indexes:r,types:i}}function ec(e){return $s(e).values}function tc({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===qs?i+=Es(r[a]):e===Js?i+=Ws.transform(r[a]):i+=r[a]}return i}}function nc(e){return tc($s(e))}var rc=e=>typeof e==`number`?0:Ws.test(e)?Ws.getAnimatableNone(e):e,ic=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:rc(e);function ac(e){let t=$s(e);return tc(t)(t.values.map((e,n)=>ic(e,t.split[n])))}var H={test:Ks,parse:ec,createTransformer:nc,getAnimatableNone:ac};function oc(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function sc({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=oc(s,r,e+1/3),a=oc(s,r,e),o=oc(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function cc(e,t){return n=>n>0?t:e}var U=(e,t,n)=>e+(t-e)*n,lc=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},uc=[Is,Ps,Us],dc=e=>uc.find(t=>t.test(e));function fc(e){let t=dc(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Us&&(n=sc(n)),n}var pc=(e,t)=>{let n=fc(e),r=fc(t);if(!n||!r)return cc(e,t);let i={...n};return e=>(i.red=lc(n.red,r.red,e),i.green=lc(n.green,r.green,e),i.blue=lc(n.blue,r.blue,e),i.alpha=U(n.alpha,r.alpha,e),Ps.transform(i))},mc=new Set([`none`,`hidden`]);function hc(e,t){return mc.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function gc(e,t){return n=>U(e,t,n)}function _c(e){return typeof e==`number`?gc:typeof e==`string`?bs(e)?cc:Ws.test(e)?pc:xc:Array.isArray(e)?vc:typeof e==`object`?Ws.test(e)?pc:yc:cc}function vc(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>_c(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function yc(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=_c(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function bc(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var xc=(e,t)=>{let n=H.createTransformer(t),r=$s(e),i=$s(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?mc.has(e)&&!i.values.length||mc.has(t)&&!r.values.length?hc(e,t):Mo(vc(bc(r,i),i.values),n):(`${e}${t}`,cc(e,t))};function Sc(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?U(e,t,n):_c(e)(e,t)}var Cc=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>B.update(t,e),stop:()=>us(t),now:()=>ds.isProcessing?ds.timestamp:hs.now()}},wc=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Tc=2e4;function Ec(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Dc(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Ec(r),Tc);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:Fo(i)}}var Oc={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function kc(e,t){return e*Math.sqrt(1-t*t)}var Ac=12;function jc(e,t,n){let r=n;for(let n=1;n<Ac;n++)r-=e(r)/t(r);return r}var Mc=.001;function Nc({duration:e=Oc.duration,bounce:t=Oc.bounce,velocity:n=Oc.velocity,mass:r=Oc.mass}){let i,a;Oc.maxDuration;let o=1-t;o=To(Oc.minDamping,Oc.maxDamping,o),e=To(Oc.minDuration,Oc.maxDuration,Fo(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=kc(t,o),c=Math.exp(-i);return Mc-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=kc(t**2,o);return(-i(t)+Mc>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-Mc+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=jc(i,a,s);if(e=z(e),isNaN(c))return{stiffness:Oc.stiffness,damping:Oc.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Pc=[`duration`,`bounce`],Fc=[`stiffness`,`damping`,`mass`];function Ic(e,t){return t.some(t=>e[t]!==void 0)}function Lc(e){let t={velocity:Oc.velocity,stiffness:Oc.stiffness,damping:Oc.damping,mass:Oc.mass,isResolvedFromDuration:!1,...e};if(!Ic(e,Fc)&&Ic(e,Pc))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*To(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Oc.mass,stiffness:i,damping:a}}else{let n=Nc({...e,velocity:0});t={...t,...n,mass:Oc.mass},t.isResolvedFromDuration=!0}return t}function W(e=Oc.visualDuration,t=Oc.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Lc({...n,velocity:-Fo(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=Fo(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?Oc.restSpeed.granular:Oc.restSpeed.default,i||=v?Oc.restDelta.granular:Oc.restDelta.default;let y,b,x,S,C,w;if(h<1)x=kc(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>z(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=z(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=z(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Ec(T),Tc),t=wc(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}W.applyToOptions=e=>{let t=Dc(e,100,W);return e.ease=t.ease,e.duration=z(t.duration),e.type=`keyframes`,e};var Rc=5;function zc(e,t,n){let r=Math.max(t-Rc,0);return Io(n-e(r),t-r)}function Bc({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=W({keyframes:[f.value,m(f.value)],velocity:zc(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Vc(e,t,n){let r=[],i=n||R.mix||Sc,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Mo(Array.isArray(t)?t[n]||Ao:t,a)),r.push(a)}return r}function Hc(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Vc(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=No(e[r],e[r+1],n);return s[r](i)};return n?t=>l(To(e[0],e[a-1],t)):l}function Uc(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=No(0,t,r);e.push(U(n,1,i))}}function Wc(e){let t=[0];return Uc(t,e.length-1),t}function Gc(e,t){return e.map(e=>e*t)}function Kc(e,t){return e.map(()=>t||$o).splice(0,e.length-1)}function qc({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=es(r)?r.map(is):is(r),a={done:!1,value:t[0]},o=Hc(Gc(n&&n.length===t.length?n:Wc(t),e),t,{ease:Array.isArray(i)?i:Kc(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Jc=e=>e!==null;function Yc(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Jc),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Xc={decay:Bc,inertia:Bc,tween:qc,keyframes:qc,spring:W};function Zc(e){typeof e.type==`string`&&(e.type=Xc[e.type])}var Qc=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},$c=e=>e/100,el=class extends Qc{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==hs.now()&&this.tick(hs.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},gs.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Zc(e);let{type:t=qc,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||qc;s!==qc&&typeof o[0]!=`number`&&(this.mixKeyframes=Mo($c,Sc(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Ec(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=To(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Bc&&(b.value=Yc(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return Fo(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Fo(e)}get time(){return Fo(this.currentTime)}set time(e){e=z(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return zc(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(hs.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Fo(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Cc,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(hs.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,gs.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function tl(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var nl=e=>e*180/Math.PI,rl=e=>al(nl(Math.atan2(e[1],e[0]))),il={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:rl,rotateZ:rl,skewX:e=>nl(Math.atan(e[1])),skewY:e=>nl(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},al=e=>(e%=360,e<0&&(e+=360),e),ol=rl,sl=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),G=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),cl={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sl,scaleY:G,scale:e=>(sl(e)+G(e))/2,rotateX:e=>al(nl(Math.atan2(e[6],e[5]))),rotateY:e=>al(nl(Math.atan2(-e[2],e[0]))),rotateZ:ol,rotate:ol,skewX:e=>nl(Math.atan(e[4])),skewY:e=>nl(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ll(e){return+!!e.includes(`scale`)}function ul(e,t){if(!e||e===`none`)return ll(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=cl,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=il,i=t}if(!i)return ll(t);let a=r[t],o=i[1].split(`,`).map(fl);return typeof a==`function`?a(o):o[a]}var dl=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return ul(n,t)};function fl(e){return parseFloat(e.trim())}var pl=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],ml=new Set(pl),hl=e=>e===Cs||e===V,gl=new Set([`x`,`y`,`z`]),_l=pl.filter(e=>!gl.has(e));function vl(e){let t=[];return _l.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var yl={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ul(t,`x`),y:(e,{transform:t})=>ul(t,`y`)};yl.translateX=yl.x,yl.translateY=yl.y;var bl=new Set,xl=!1,Sl=!1,Cl=!1;function wl(){if(Sl){let e=Array.from(bl).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=vl(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}Sl=!1,xl=!1,bl.forEach(e=>e.complete(Cl)),bl.clear()}function Tl(){bl.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Sl=!0)})}function El(){Cl=!0,Tl(),wl(),Cl=!1}var Dl=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(bl.add(this),xl||(xl=!0,B.read(Tl),B.resolveKeyframes(wl))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}tl(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),bl.delete(this)}cancel(){this.state===`scheduled`&&(bl.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},Ol=e=>e.startsWith(`--`);function kl(e,t,n){Ol(t)?e.style.setProperty(t,n):e.style[t]=n}var Al={};function jl(e,t){let n=ko(e);return()=>Al[t]??n()}var Ml=jl(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),Nl=jl(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Pl=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Fl={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Pl([0,.65,.55,1]),circOut:Pl([.55,0,1,.45]),backIn:Pl([.31,.01,.66,-.59]),backOut:Pl([.33,1.53,.69,.99])};function Il(e,t){if(e)return typeof e==`function`?Nl()?wc(e,t):`ease-out`:ts(e)?Pl(e):Array.isArray(e)?e.map(e=>Il(e,t)||Fl.easeOut):Fl[e]}function Ll(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Il(s,i);Array.isArray(d)&&(u.easing=d),os.value&&gs.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return os.value&&p.finished.finally(()=>{gs.waapi--}),p}function Rl(e){return typeof e==`function`&&`applyToOptions`in e}function K({type:e,...t}){return Rl(e)&&Nl()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var q=class extends Qc{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=K(e);this.animation=Ll(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Yc(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),kl(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return Fo(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+Fo(e)}get time(){return Fo(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=z(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Ml()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Ao):r(this)}},J={anticipate:qo,backInOut:Ko,circInOut:Xo};function Y(e){return e in J}function X(e){typeof e.ease==`string`&&Y(e.ease)&&(e.ease=J[e.ease])}var zl=10,Bl=class extends q{constructor(e){X(e),Zc(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new el({...a,autoplay:!1}),s=Math.max(zl,hs.now()-this.startTime),c=To(0,zl,s-zl),l=o.sample(s).value,{name:u}=this.options;i&&u&&kl(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Vl=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(H.test(e)||e===`0`)&&!e.startsWith(`url(`));function Hl(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Ul(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Vl(i,t),s=Vl(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Hl(e)||(n===`spring`||Rl(n))&&r}function Wl(e){e.duration=0,e.type=`keyframes`}var Gl=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Kl=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function ql(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Kl.test(e[t]))return!0;return!1}var Jl=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Yl=ko(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Xl(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Yl()&&n&&(Gl.has(n)||Jl.has(n)&&ql(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Zl=40,Ql=class extends Qc{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=hs.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Dl)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=hs.now();let u=!0;Ul(e,i,a,o)||(u=!1,(R.instantAnimations||!s)&&l?.(Yc(e,n,t)),e[0]=e[e.length-1],Wl(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Zl?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Xl(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Bl({...d,element:p})}catch{m=new el(d)}else m=new el(d);m.finished.then(()=>{this.notifyFinished()}).catch(Ao),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),El()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function $l(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var eu=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function tu(e){let t=eu.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function nu(e,t,n=1){`${e}`;let[r,i]=tu(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Eo(e)?parseFloat(e):e}return bs(i)?nu(i,t,n+1):i}var ru={type:`spring`,stiffness:500,damping:25,restSpeed:10},iu=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),au={type:`keyframes`,duration:.8},ou={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},su=(e,{keyframes:t})=>t.length>2?au:ml.has(e)?e.startsWith(`scale`)?iu(t[1]):ru:ou;function cu(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function lu(e,t){let n=e?.[t]??e?.default??e;return n===e?n:cu(n,e)}var uu=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function du(e){for(let t in e)if(!uu.has(t))return!0;return!1}var fu=(e,t,n,r={},i,a)=>o=>{let s=lu(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=z(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};du(s)||Object.assign(u,su(e,u)),u.duration&&=z(u.duration),u.repeatDelay&&=z(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Wl(u),u.delay===0&&(d=!0)),(R.instantAnimations||R.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Wl(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Yc(u.keyframes,s);if(e!==void 0){B.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new el(u):new Ql(u)};function pu(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function mu(e,t,n,r){if(typeof t==`function`){let[i,a]=pu(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=pu(r);t=t(n===void 0?e.custom:n,i,a)}return t}function hu(e,t,n){let r=e.getProps();return mu(r,t,n===void 0?r.custom:n,e)}var gu=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...pl]),_u=30,vu=e=>!isNaN(parseFloat(e)),yu={current:void 0},bu=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=hs.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=hs.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=vu(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Po);let n=this.events[e].add(t);return e===`change`?()=>{n(),B.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return yu.current&&yu.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=hs.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>_u)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,_u);return Io(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function xu(e,t){return new bu(e,t)}var Su=e=>Array.isArray(e);function Cu(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,xu(n))}function wu(e){return Su(e)?e[e.length-1]||0:e}function Tu(e,t){let{transitionEnd:n={},transition:r={},...i}=hu(e,t)||{};i={...i,...n};for(let t in i)Cu(e,t,wu(i[t]))}var Eu=e=>!!(e&&e.getVelocity);function Du(e){return!!(Eu(e)&&e.add)}function Ou(e,t){let n=e.getValue(`willChange`);if(Du(n))return n.add(t);if(!n&&R.WillChange){let n=new R.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ku(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Au=`data-`+ku(`framerAppearId`);function ju(e){return e.props[Au]}function Mu({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Nu(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?cu(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&Mu(d,t))continue;let o={delay:n,...lu(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){B.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=ju(e);if(n){let e=window.MotionHandoffAnimation(n,t,B);e!==null&&(o.startTime=e,f=!0)}}Ou(e,t);let p=l??e.shouldReduceMotion;r.start(fu(t,r,i,p&&gu.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>B.update(()=>{o&&Tu(e,o)});u.length?Promise.all(u).then(t):t()}return u}function Pu(e,t,n={}){let r=hu(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Nu(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Fu(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Fu(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Pu(c,t,{...o,delay:n+(typeof r==`function`?0:r)+$l(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Iu(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Pu(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Pu(e,t,n);else{let i=typeof t==`function`?hu(e,t,n.custom):t;r=Promise.all(Nu(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Lu={test:e=>e===`auto`,parse:e=>e},Ru=e=>t=>t.test(e),zu=[Cs,V,zs,Rs,Vs,Bs,Lu],Bu=e=>zu.find(Ru(e));function Vu(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||Oo(e)}var Hu=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Uu(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Ds)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Hu.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Wu=/\b([a-z-]*)\(.*?\)/gu,Z={...H,getAnimatableNone:e=>{let t=e.match(Wu);return t?t.map(Uu).join(` `):e}},Gu={...H,getAnimatableNone:e=>{let t=H.parse(e);return H.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Ku={...Cs,transform:Math.round},qu={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,top:V,right:V,bottom:V,left:V,inset:V,insetBlock:V,insetBlockStart:V,insetBlockEnd:V,insetInline:V,insetInlineStart:V,insetInlineEnd:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,paddingBlock:V,paddingBlockStart:V,paddingBlockEnd:V,paddingInline:V,paddingInlineStart:V,paddingInlineEnd:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,marginBlock:V,marginBlockStart:V,marginBlockEnd:V,marginInline:V,marginInlineStart:V,marginInlineEnd:V,fontSize:V,backgroundPositionX:V,backgroundPositionY:V,rotate:Rs,rotateX:Rs,rotateY:Rs,rotateZ:Rs,scale:Ts,scaleX:Ts,scaleY:Ts,scaleZ:Ts,skew:Rs,skewX:Rs,skewY:Rs,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:ws,originX:Hs,originY:Hs,originZ:V,zIndex:Ku,fillOpacity:ws,strokeOpacity:ws,numOctaves:Ku},Ju={...qu,color:Ws,backgroundColor:Ws,outlineColor:Ws,fill:Ws,stroke:Ws,borderColor:Ws,borderTopColor:Ws,borderRightColor:Ws,borderBottomColor:Ws,borderLeftColor:Ws,filter:Z,WebkitFilter:Z,mask:Gu,WebkitMask:Gu},Yu=e=>Ju[e],Xu=new Set([Z,Gu]);function Zu(e,t){let n=Yu(e);return Xu.has(n)||(n=H),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Qu=new Set([`auto`,`none`,`0`]);function $u(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Qu.has(t)&&$s(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Zu(n,i)}var ed=class extends Dl{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),bs(r))){let i=nu(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!gu.has(n)||e.length!==2)return;let[r,i]=e,a=Bu(r),o=Bu(i);if(Ss(r)!==Ss(i)&&yl[n]){this.needsMeasurement=!0;return}if(a!==o)if(hl(a)&&hl(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else yl[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Vu(e[t]))&&n.push(t);n.length&&$u(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yl[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=yl[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function td(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var nd=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function rd(e){return Do(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:id,cancel:ad}=ls(queueMicrotask,!1),od={x:!1,y:!1};function sd(){return od.x||od.y}function cd(e){return e===`x`||e===`y`?od[e]?null:(od[e]=!0,()=>{od[e]=!1}):od.x||od.y?null:(od.x=od.y=!0,()=>{od.x=od.y=!1})}function ld(e,t){let n=td(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ud(e){return!(e.pointerType===`touch`||sd())}function dd(e,t,n={}){let[r,i,a]=ld(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!ud(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var fd=(e,t)=>t?e===t?!0:fd(e,t.parentElement):!1,pd=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,md=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function hd(e){return md.has(e.tagName)||e.isContentEditable===!0}var gd=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function _d(e){return gd.has(e.tagName)||e.isContentEditable===!0}var vd=new WeakSet;function yd(e){return t=>{t.key===`Enter`&&e(t)}}function Q(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var bd=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=yd(()=>{if(vd.has(n))return;Q(n,`down`);let e=yd(()=>{Q(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Q(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function xd(e){return pd(e)&&!sd()}var Sd=new WeakSet;function Cd(e,t,n={}){let[r,i,a]=ld(e,n),o=e=>{let r=e.currentTarget;if(!xd(e)||Sd.has(e))return;vd.add(r),n.stopPropagation&&Sd.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),vd.has(r)&&vd.delete(r),xd(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||fd(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),rd(e)&&(e.addEventListener(`focus`,e=>bd(e,i)),!hd(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function wd(e){return Do(e)&&`ownerSVGElement`in e}var Td=new WeakMap,Ed,Dd=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:wd(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Od=Dd(`inline`,`width`,`offsetWidth`),kd=Dd(`block`,`height`,`offsetHeight`);function Ad({target:e,borderBoxSize:t}){Td.get(e)?.forEach(n=>{n(e,{get width(){return Od(e,t)},get height(){return kd(e,t)}})})}function jd(e){e.forEach(Ad)}function Md(){typeof ResizeObserver>`u`||(Ed=new ResizeObserver(jd))}function $(e,t){Ed||Md();let n=td(e);return n.forEach(e=>{let n=Td.get(e);n||(n=new Set,Td.set(e,n)),n.add(t),Ed?.observe(e)}),()=>{n.forEach(e=>{let n=Td.get(e);n?.delete(t),n?.size||Ed?.unobserve(e)})}}var Nd=new Set,Pd;function Fd(){Pd=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Nd.forEach(t=>t(e))},window.addEventListener(`resize`,Pd)}function Id(e){return Nd.add(e),Pd||Fd(),()=>{Nd.delete(e),!Nd.size&&typeof Pd==`function`&&(window.removeEventListener(`resize`,Pd),Pd=void 0)}}function Ld(e,t){return typeof e==`function`?Id(e):$(e,t)}function Rd(e){return wd(e)&&e.tagName===`svg`}var zd=[...zu,Ws,H],Bd=e=>zd.find(Ru(e)),Vd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hd=()=>({x:Vd(),y:Vd()}),Ud=()=>({min:0,max:0}),Wd=()=>({x:Ud(),y:Ud()}),Gd=new WeakMap;function Kd(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function qd(e){return typeof e==`string`||Array.isArray(e)}var Jd=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Yd=[`initial`,...Jd];function Xd(e){return Kd(e.animate)||Yd.some(t=>qd(e[t]))}function Zd(e){return!!(Xd(e)||e.variants)}function Qd(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Eu(i))e.addValue(r,i);else if(Eu(a))e.addValue(r,xu(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,xu(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var $d={current:null},ef={current:!1},tf=typeof window<`u`;function nf(){if(ef.current=!0,tf)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>$d.current=e.matches;e.addEventListener(`change`,t),t()}else $d.current=!1}var rf=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],af={};function of(e){af=e}function sf(){return af}var cf=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Dl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=hs.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,B.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Xd(t),this.isVariantNode=Zd(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Eu(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Gd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(ef.current||nf(),this.shouldReduceMotion=$d.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),us(this.notifyUpdate),us(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Gl.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new q({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:z(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=ml.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&B.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in af){let t=af[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Wd()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<rf.length;t++){let n=rf[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Qd(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=xu(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Eo(n)||Oo(n))?n=parseFloat(n):!Bd(n)&&H.test(t)&&(n=Zu(e,t)),this.setBaseTarget(e,Eu(n)?n.get():n)),Eu(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=mu(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Eu(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Po),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){id.render(this.render)}},lf=class extends cf{constructor(){super(...arguments),this.KeyframeResolver=ed}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Eu(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},uf=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function df({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ff({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function pf(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function mf(e){return e===void 0||e===1}function hf({scale:e,scaleX:t,scaleY:n}){return!mf(e)||!mf(t)||!mf(n)}function gf(e){return hf(e)||_f(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _f(e){return vf(e.x)||vf(e.y)}function vf(e){return e&&e!==`0%`}function yf(e,t,n){return n+t*(e-n)}function bf(e,t,n,r,i){return i!==void 0&&(e=yf(e,i,r)),yf(e,n,r)+t}function xf(e,t=0,n=1,r,i){e.min=bf(e.min,t,n,r,i),e.max=bf(e.max,t,n,r,i)}function Sf(e,{x:t,y:n}){xf(e.x,t.translate,t.scale,t.originPoint),xf(e.y,n.translate,n.scale,n.originPoint)}var Cf=.999999999999,wf=1.0000000000001;function Tf(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Ef(e.x,-a.scroll.offset.x),Ef(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Sf(e,o)),r&&gf(a.latestValues)&&kf(e,a.latestValues,a.layout?.layoutBox))}t.x<wf&&t.x>Cf&&(t.x=1),t.y<wf&&t.y>Cf&&(t.y=1)}function Ef(e,t){e.min+=t,e.max+=t}function Df(e,t,n,r,i=.5){xf(e,t,n,U(e.min,e.max,i),r)}function Of(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function kf(e,t,n){let r=n??e;Df(e.x,Of(t.x,r.x),t.scaleX,t.scale,t.originX),Df(e.y,Of(t.y,r.y),t.scaleY,t.scale,t.originY)}function Af(e,t){return df(pf(e.getBoundingClientRect(),t))}function jf(e,t,n){let r=Af(e,n),{scroll:i}=t;return i&&(Ef(r.x,i.offset.x),Ef(r.y,i.offset.y)),r}var Mf={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Nf=pl.length;function Pf(e,t,n){let r=``,i=!0;for(let a=0;a<Nf;a++){let o=pl[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=nd(s,qu[o]);if(!c){i=!1;let t=Mf[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Ff(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(ml.has(e)){o=!0;continue}else if(vs(e)){i[e]=n;continue}else{let t=nd(n,qu[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Pf(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function If(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Lf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Rf={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(V.test(e))e=parseFloat(e);else return e;return`${Lf(e,t.target.x)}% ${Lf(e,t.target.y)}%`}},zf={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=H.parse(e);if(i.length>5)return r;let a=H.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=U(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Bf={borderRadius:{...Rf,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Rf,borderTopRightRadius:Rf,borderBottomLeftRadius:Rf,borderBottomRightRadius:Rf,boxShadow:zf};function Vf(e,{layout:t,layoutId:n}){return ml.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Bf[e]||e===`opacity`)}function Hf(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Eu(r[t])||i&&Eu(i[t])||Vf(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Uf(e){return window.getComputedStyle(e)}var Wf=class extends lf{constructor(){super(...arguments),this.type=`html`,this.renderInstance=If}readValueFromInstance(e,t){if(ml.has(t))return this.projection?.isProjecting?ll(t):dl(e,t);{let n=Uf(e),r=(vs(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Af(e,t)}build(e,t,n){Ff(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Hf(e,t,n)}},Gf={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Kf={offset:`strokeDashoffset`,array:`strokeDasharray`};function qf(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Gf:Kf;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Jf=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Yf(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Ff(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Jf)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&qf(d,i,a,o,!1)}var Xf=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Zf=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Qf(e,t,n,r){If(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Xf.has(n)?n:ku(n),t.attrs[n])}function $f(e,t,n){let r=Hf(e,t,n);for(let n in e)if(Eu(e[n])||Eu(t[n])){let t=pl.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var ep=class extends lf{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Wd}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ml.has(t)){let e=Yu(t);return e&&e.default||0}return t=Xf.has(t)?t:ku(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return $f(e,t,n)}build(e,t,n){Yf(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Qf(e,t,n,r)}mount(e){this.isSVGTag=Zf(e.tagName),super.mount(e)}},tp=Yd.length;function np(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&np(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<tp;n++){let r=Yd[n],i=e.props[r];(qd(i)||i===!1)&&(t[r]=i)}return t}function rp(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var ip=[...Jd].reverse(),ap=Jd.length;function op(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Iu(e,t,n)))}function sp(e){let t=op(e),n=up(),r=!0,i=!1,a=t=>(n,r)=>{let i=hu(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=np(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<ap;t++){let p=ip[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=qd(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Kd(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=cp(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},ee=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Su(t)&&Su(n)?!rp(t,n):t!==n,r?t==null?u.add(e):ee(e):t!==void 0&&u.has(e)?ee(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let te=v&&y;b&&(!te||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!te&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=hu(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=$l(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=hu(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=up(),i=!0}}}function cp(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!rp(t,e):!1}function lp(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function up(){return{animate:lp(!0),whileInView:lp(),whileHover:lp(),whileTap:lp(),whileDrag:lp(),whileFocus:lp(),exit:lp()}}function dp(e,t){e.min=t.min,e.max=t.max}function fp(e,t){dp(e.x,t.x),dp(e.y,t.y)}function pp(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var mp=1e-4,hp=1-mp,gp=1+mp,_p=.01,vp=0-_p,yp=0+_p;function bp(e){return e.max-e.min}function xp(e,t,n){return Math.abs(e-t)<=n}function Sp(e,t,n,r=.5){e.origin=r,e.originPoint=U(t.min,t.max,e.origin),e.scale=bp(n)/bp(t),e.translate=U(n.min,n.max,e.origin)-e.originPoint,(e.scale>=hp&&e.scale<=gp||isNaN(e.scale))&&(e.scale=1),(e.translate>=vp&&e.translate<=yp||isNaN(e.translate))&&(e.translate=0)}function Cp(e,t,n,r){Sp(e.x,t.x,n.x,r?r.originX:void 0),Sp(e.y,t.y,n.y,r?r.originY:void 0)}function wp(e,t,n,r=0){e.min=(r?U(n.min,n.max,r):n.min)+t.min,e.max=e.min+bp(t)}function Tp(e,t,n,r){wp(e.x,t.x,n.x,r?.x),wp(e.y,t.y,n.y,r?.y)}function Ep(e,t,n,r=0){let i=r?U(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+bp(t)}function Dp(e,t,n,r){Ep(e.x,t.x,n.x,r?.x),Ep(e.y,t.y,n.y,r?.y)}function Op(e,t,n,r,i){return e-=t,e=yf(e,1/n,r),i!==void 0&&(e=yf(e,1/i,r)),e}function kp(e,t=0,n=1,r=.5,i,a=e,o=e){if(zs.test(t)&&(t=parseFloat(t),t=U(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=U(a.min,a.max,r);e===a&&(s-=t),e.min=Op(e.min,t,n,s,i),e.max=Op(e.max,t,n,s,i)}function Ap(e,t,[n,r,i],a,o){kp(e,t[n],t[r],t[i],t.scale,a,o)}var jp=[`x`,`scaleX`,`originX`],Mp=[`y`,`scaleY`,`originY`];function Np(e,t,n,r){Ap(e.x,t,jp,n?n.x:void 0,r?r.x:void 0),Ap(e.y,t,Mp,n?n.y:void 0,r?r.y:void 0)}function Pp(e){return e.translate===0&&e.scale===1}function Fp(e){return Pp(e.x)&&Pp(e.y)}function Ip(e,t){return e.min===t.min&&e.max===t.max}function Lp(e,t){return Ip(e.x,t.x)&&Ip(e.y,t.y)}function Rp(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function zp(e,t){return Rp(e.x,t.x)&&Rp(e.y,t.y)}function Bp(e){return bp(e.x)/bp(e.y)}function Vp(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Hp(e){return[e(`x`),e(`y`)]}function Up(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Wp=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],Gp=Wp.length,Kp=e=>typeof e==`string`?parseFloat(e):e,qp=e=>typeof e==`number`||V.test(e);function Jp(e,t,n,r,i,a){i?(e.opacity=U(0,n.opacity??1,Xp(r)),e.opacityExit=U(t.opacity??1,0,Zp(r))):a&&(e.opacity=U(t.opacity??1,n.opacity??1,r));for(let i=0;i<Gp;i++){let a=Wp[i],o=Yp(t,a),s=Yp(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||qp(o)===qp(s)?(e[a]=Math.max(U(Kp(o),Kp(s),r),0),(zs.test(s)||zs.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=U(t.rotate||0,n.rotate||0,r))}function Yp(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Xp=Qp(0,.5,Yo),Zp=Qp(.5,.95,Ao);function Qp(e,t,n){return r=>r<e?0:r>t?1:n(No(e,t,r))}function $p(e,t,n){let r=Eu(e)?e:xu(e);return r.start(fu(``,r,t,n)),r.animation}function em(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var tm=(e,t)=>e.depth-t.depth,nm=class{constructor(){this.children=[],this.isDirty=!1}add(e){Co(this.children,e),this.isDirty=!0}remove(e){wo(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(tm),this.isDirty=!1,this.children.forEach(e)}};function rm(e,t){let n=hs.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(us(r),e(a-t))};return B.setup(r,!0),()=>us(r)}function im(e){return Eu(e)?e.get():e}var am=class{constructor(){this.members=[]}add(e){Co(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(wo(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(wo(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},om={hasAnimatedSinceResize:!0,hasEverUpdated:!1},sm={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},cm=[``,`X`,`Y`,`Z`],lm=1e3,um=0;function dm(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function fm(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=ju(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,B,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&fm(r)}function pm({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=um++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,os.value&&(sm.nodes=sm.calculatedTargetDeltas=sm.calculatedProjections=0),this.nodes.forEach(gm),this.nodes.forEach(Tm),this.nodes.forEach(Em),this.nodes.forEach(_m),os.addProjectionMetrics&&os.addProjectionMetrics(sm)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new nm)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Po),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=wd(t)&&!Rd(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;B.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=rm(i,250),om.hasAnimatedSinceResize&&(om.hasAnimatedSinceResize=!1,this.nodes.forEach(wm)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Nm,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!zp(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...lu(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||wm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),us(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Dm),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&fm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(bm),this.nodes.forEach(ym);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(xm);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Sm),this.nodes.forEach(Cm),this.nodes.forEach(mm),this.nodes.forEach(hm)):this.nodes.forEach(xm),this.clearAllSnapshots();let e=hs.now();ds.delta=To(0,1e3/60,e-ds.timestamp),ds.timestamp=e,ds.isProcessing=!0,fs.update.process(ds),fs.preRender.process(ds),fs.render.process(ds),ds.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,id.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vm),this.sharedNodes.forEach(Om)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!bp(this.snapshot.measuredBox.x)&&!bp(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=Wd(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Fp(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||gf(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Lm(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Wd();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(zm))){let{scroll:e}=this.root;e&&(Ef(t.x,e.offset.x),Ef(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Wd();if(fp(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&fp(t,e),Ef(t.x,i.offset.x),Ef(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Wd();fp(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Ef(r.x,-n.scroll.offset.x),Ef(r.y,-n.scroll.offset.y)),gf(n.latestValues)&&kf(r,n.latestValues,n.layout?.layoutBox)}return gf(this.latestValues)&&kf(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Wd();fp(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!gf(n.latestValues))continue;let r;n.instance&&(hf(n.latestValues)&&n.updateSnapshot(),r=Wd(),fp(r,n.measurePageBox())),Np(t,n.latestValues,n.snapshot?.layoutBox,r)}return gf(this.latestValues)&&Np(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ds.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=ds.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Wd(),this.targetWithTransforms=Wd()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Tp(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):fp(this.target,this.layout.layoutBox),Sf(this.target,this.targetDelta)):fp(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),os.value&&sm.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||hf(this.parent.latestValues)||_f(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Wd(),this.relativeTargetOrigin=Wd(),Dp(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),fp(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===ds.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;fp(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Tf(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Wd());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pp(this.prevProjectionDelta.x,this.projectionDelta.x),pp(this.prevProjectionDelta.y,this.projectionDelta.y)),Cp(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Vp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Vp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),os.value&&sm.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Hd(),this.projectionDelta=Hd(),this.projectionDeltaWithTransform=Hd()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Hd();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=Wd(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(Mm));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;km(a.x,e.x,n),km(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dp(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),jm(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Lp(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=Wd(),fp(d,this.relativeTarget)),s&&(this.animationValues=i,Jp(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(us(this.pendingAnimation),void 0),this.pendingAnimation=B.update(()=>{om.hasAnimatedSinceResize=!0,gs.layout++,this.motionValue||=xu(0),this.motionValue.jump(0,!1),this.currentAnimation=$p(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{gs.layout--},onComplete:()=>{gs.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Rm(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||Wd();let t=bp(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=bp(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}fp(t,n),kf(t,i),Cp(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new am),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&dm(`z`,e,r,this.animationValues);for(let t=0;t<cm.length;t++)dm(`rotate${cm[t]}`,e,r,this.animationValues),dm(`skew${cm[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=im(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=im(t?.pointerEvents)||``),this.hasProjected&&!gf(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Up(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Bf){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Bf[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?im(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(ym),this.root.sharedNodes.clear()}}}function mm(e){e.updateLayout()}function hm(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Hp(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=bp(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;dp(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Rm(i,t.layoutBox,n)&&Hp(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=bp(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Hd();Cp(o,n,t.layoutBox);let s=Hd();a?Cp(s,e.applyTransform(r,!0),t.measuredBox):Cp(s,n,t.layoutBox);let c=!Fp(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Wd();Dp(s,t.layoutBox,i.layoutBox,o);let c=Wd();Dp(c,n,a.layoutBox,o),zp(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function gm(e){os.value&&sm.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function _m(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function vm(e){e.clearSnapshot()}function ym(e){e.clearMeasurements()}function bm(e){e.isLayoutDirty=!0,e.updateLayout()}function xm(e){e.isLayoutDirty=!1}function Sm(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Cm(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function wm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Tm(e){e.resolveTargetDelta()}function Em(e){e.calcProjection()}function Dm(e){e.resetSkewAndRotation()}function Om(e){e.removeLeadSnapshot()}function km(e,t,n){e.translate=U(t.translate,0,n),e.scale=U(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Am(e,t,n,r){e.min=U(t.min,n.min,r),e.max=U(t.max,n.max,r)}function jm(e,t,n,r){Am(e.x,t.x,n.x,r),Am(e.y,t.y,n.y,r)}function Mm(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Nm={duration:.45,ease:[.4,0,.1,1]},Pm=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Fm=Pm(`applewebkit/`)&&!Pm(`chrome/`)?Math.round:Ao;function Im(e){e.min=Fm(e.min),e.max=Fm(e.max)}function Lm(e){Im(e.x),Im(e.y)}function Rm(e,t,n){return e===`position`||e===`preserve-aspect`&&!xp(Bp(t),Bp(n),.2)}function zm(e){return e!==e.root&&e.scroll?.wasRoot}var Bm=pm({attachResizeListener:(e,t)=>em(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Vm={current:void 0},Hm=pm({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vm.current){let e=new Bm({});e.mount(window),e.setOptions({layoutScroll:!0}),Vm.current=e}return Vm.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Um=(0,b.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function Wm(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Gm(...e){return t=>{let n=!1,r=e.map(e=>{let r=Wm(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():Wm(e[t],null)}}}}function Km(...e){return b.useCallback(Gm(...e),e)}var qm=class extends b.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(rd(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=rd(e)&&e.offsetWidth||0,r=rd(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Jm({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,b.useId)(),s=(0,b.useRef)(null),c=(0,b.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,b.useContext)(Um),u=Km(s,e.props?.ref??e?.ref);return(0,b.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,I.jsx)(qm,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:b.cloneElement(e,{ref:u})})}var Ym=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=bo(Xm),d=(0,b.useId)(),f=!0,p=(0,b.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,b.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),b.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,I.jsx)(Jm,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,I.jsx)(So.Provider,{value:p,children:e})};function Xm(){return new Map}function Zm(e=!0){let t=(0,b.useContext)(So);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,b.useId)();(0,b.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,b.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Qm=e=>e.key||``;function $m(e){let t=[];return b.Children.forEach(e,e=>{(0,b.isValidElement)(e)&&t.push(e)}),t}var eh=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Zm(o),f=(0,b.useMemo)(()=>$m(e),[e]),p=o&&!u?[]:f.map(Qm),m=(0,b.useRef)(!0),h=(0,b.useRef)(f),g=bo(()=>new Map),_=(0,b.useRef)(new Set),[v,y]=(0,b.useState)(f),[x,S]=(0,b.useState)(f);xo(()=>{m.current=!1,h.current=f;for(let e=0;e<x.length;e++){let t=Qm(x[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[x,p.length,p.join(`-`)]);let C=[];if(f!==v){let e=[...f];for(let t=0;t<x.length;t++){let n=x[t],r=Qm(n);p.includes(r)||(e.splice(t,0,n),C.push(n))}return a===`wait`&&C.length&&(e=C),S($m(e)),y(f),null}let{forceRender:w}=(0,b.useContext)(yo);return(0,I.jsx)(I.Fragment,{children:x.map(e=>{let v=Qm(e),y=o&&!u?!1:f===x||p.includes(v);return(0,I.jsx)(Ym,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(w?.(),S(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},th=(0,b.createContext)({strict:!1}),nh={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},rh=!1;function ih(){if(rh)return;let e={};for(let t in nh)e[t]={isEnabled:e=>nh[t].some(t=>!!e[t])};of(e),rh=!0}function ah(){return ih(),sf()}function oh(e){let t=ah();for(let n in e)t[n]={...t[n],...e[n]};of(t)}var sh=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function ch(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||sh.has(e)}var lh=c({default:()=>uh}),uh,dh=o((()=>{throw uh={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),fh=e=>!ch(e);function ph(e){typeof e==`function`&&(fh=t=>t.startsWith(`on`)?!ch(t):e(t))}try{ph((dh(),d(lh)).default)}catch{}function mh(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||Eu(e[i])||(fh(i)||n===!0&&ch(i)||!t&&!ch(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var hh=(0,b.createContext)({});function gh(e,t){if(Xd(e)){let{initial:t,animate:n}=e;return{initial:t===!1||qd(t)?t:void 0,animate:qd(n)?n:void 0}}return e.inherit===!1?{}:t}function _h(e){let{initial:t,animate:n}=gh(e,(0,b.useContext)(hh));return(0,b.useMemo)(()=>({initial:t,animate:n}),[vh(t),vh(n)])}function vh(e){return Array.isArray(e)?e.join(` `):e}var yh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function bh(e,t,n){for(let r in t)!Eu(t[r])&&!Vf(r,n)&&(e[r]=t[r])}function xh({transformTemplate:e},t){return(0,b.useMemo)(()=>{let n=yh();return Ff(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Sh(e,t){let n=e.style||{},r={};return bh(r,n,e),Object.assign(r,xh(e,t)),r}function Ch(e,t){let n={},r=Sh(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var wh=()=>({...yh(),attrs:{}});function Th(e,t,n,r){let i=(0,b.useMemo)(()=>{let n=wh();return Yf(n,t,Zf(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};bh(t,e.style,e),i.style={...t,...i.style}}return i}var Eh=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Dh(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Eh.indexOf(e)>-1||/[A-Z]/u.test(e))}function Oh(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Dh(e)?Th:Ch)(t,r,i,e),c=mh(t,typeof e==`string`,a),l=e===b.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,b.useMemo)(()=>Eu(u)?u.get():u,[u]);return(0,b.createElement)(e,{...l,children:d})}function kh({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Ah(n,r,i,e),renderState:t()}}function Ah(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=im(a[e]);let{initial:o,animate:s}=e,c=Xd(e),l=Zd(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Kd(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=mu(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var jh=e=>(t,n)=>{let r=(0,b.useContext)(hh),i=(0,b.useContext)(So),a=()=>kh(e,t,r,i);return n?a():bo(a)},Mh=jh({scrapeMotionValuesFromProps:Hf,createRenderState:yh}),Nh=jh({scrapeMotionValuesFromProps:$f,createRenderState:wh}),Ph=Symbol.for(`motionComponentSymbol`);function Fh(e,t,n){let r=(0,b.useRef)(n);(0,b.useInsertionEffect)(()=>{r.current=n});let i=(0,b.useRef)(null);return(0,b.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var Ih=(0,b.createContext)({});function Lh(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Rh(e,t,n,r,i,a){let{visualElement:o}=(0,b.useContext)(hh),s=(0,b.useContext)(th),c=(0,b.useContext)(So),l=(0,b.useContext)(Um),u=l.reducedMotion,d=l.skipAnimations,f=(0,b.useRef)(null),p=(0,b.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,b.useContext)(Ih);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&zh(f.current,n,i,h);let g=(0,b.useRef)(!1);(0,b.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[Au],v=(0,b.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return xo(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,b.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function zh(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Bh(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Lh(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Bh(e){if(e)return e.options.allowProjection===!1?Bh(e.parent):e.projection}function Vh(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&oh(r);let a=n?n===`svg`:Dh(e),o=a?Nh:Mh;function s(n,s){let c,l={...(0,b.useContext)(Um),...n,layoutId:Hh(n)},{isStatic:u}=l,d=_h(n),f=o(n,u);if(!u&&typeof window<`u`){Uh(l,r);let t=Wh(l);c=t.MeasureLayout,d.visualElement=Rh(e,f,l,i,t.ProjectionNode,a)}return(0,I.jsxs)(hh.Provider,{value:d,children:[c&&d.visualElement?(0,I.jsx)(c,{visualElement:d.visualElement,...l}):null,Oh(e,n,Fh(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,b.forwardRef)(s);return c[Ph]=e,c}function Hh({layoutId:e}){let t=(0,b.useContext)(yo).id;return t&&e!==void 0?t+`-`+e:e}function Uh(e,t){(0,b.useContext)(th).strict}function Wh(e){let{drag:t,layout:n}=ah();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Gh(e,t){if(typeof Proxy>`u`)return Vh;let n=new Map,r=(n,r)=>Vh(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Vh(a,void 0,e,t)),n.get(a))})}var Kh=(e,t)=>t.isSVG??Dh(e)?new ep(t):new Wf(t,{allowProjection:e!==b.Fragment}),qh=class extends uf{constructor(e){super(e),e.animationState||=sp(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Kd(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Jh=0,Yh={animation:{Feature:qh},exit:{Feature:class extends uf{constructor(){super(...arguments),this.id=Jh++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=hu(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Xh(e){return{point:{x:e.pageX,y:e.pageY}}}var Zh=e=>t=>pd(t)&&e(t,Xh(t));function Qh(e,t,n,r){return em(e,t,Zh(n),r)}var $h=({current:e})=>e?e.ownerDocument.defaultView:null,eg=(e,t)=>Math.abs(e-t);function tg(e,t){let n=eg(e.x,t.x),r=eg(e.y,t.y);return Math.sqrt(n**2+r**2)}var ng=new Set([`auto`,`scroll`]),rg=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ig(this.lastRawMoveEventInfo,this.transformPagePoint));let e=og(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=tg(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=ds;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=ig(t,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=og(e.type===`pointercancel`?this.lastMoveEventInfo:ig(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!pd(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=ig(Xh(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=ds;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,og(s,this.history)),this.removeListeners=Mo(Qh(this.contextWindow,`pointermove`,this.handlePointerMove),Qh(this.contextWindow,`pointerup`,this.handlePointerUp),Qh(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(ng.has(e.overflowX)||ng.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),B.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),us(this.updatePoint)}};function ig(e,t){return t?{point:t(e.point)}:e}function ag(e,t){return{x:e.x-t.x,y:e.y-t.y}}function og({point:e},t){return{point:e,delta:ag(e,cg(t)),offset:ag(e,sg(t)),velocity:lg(t,.1)}}function sg(e){return e[0]}function cg(e){return e[e.length-1]}function lg(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=cg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>z(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>z(t)*2&&(r=e[1]);let a=Fo(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ug(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?U(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?U(n,e,r.max):Math.min(e,n)),e}function dg(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function fg(e,{top:t,left:n,bottom:r,right:i}){return{x:dg(e.x,n,i),y:dg(e.y,t,r)}}function pg(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function mg(e,t){return{x:pg(e.x,t.x),y:pg(e.y,t.y)}}function hg(e,t){let n=.5,r=bp(e),i=bp(t);return i>r?n=No(t.min,t.max-r,e.min):r>i&&(n=No(e.min,e.max-i,t.min)),To(0,1,n)}function gg(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var _g=.35;function vg(e=_g){return e===!1?e=0:e===!0&&(e=_g),{x:yg(e,`left`,`right`),y:yg(e,`top`,`bottom`)}}function yg(e,t,n){return{min:bg(e,t),max:bg(e,n)}}function bg(e,t){return typeof e==`number`?e:e[t]||0}var xg=new WeakMap,Sg=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Wd(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Xh(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=cd(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hp(e=>{let t=this.getAxisMotionValue(e).get()||0;if(zs.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=bp(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&B.update(()=>i(e,t),!1,!0),Ou(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Eg(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&B.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new rg(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:$h(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&B.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Tg(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=ug(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Lh(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=fg(n.layoutBox,e):this.constraints=!1,this.elastic=vg(t),r!==this.constraints&&!Lh(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Hp(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=gg(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Lh(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=jf(n,r.root,this.visualElement.getTransformPagePoint()),a=mg(r.layout.layoutBox,i);if(t){let e=t(ff(a));this.hasMutatedConstraints=!!e,e&&(a=df(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Hp(o=>{if(!Tg(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Ou(this.visualElement,e),n.start(fu(e,n,0,t,this.visualElement,!1))}stopAnimation(){Hp(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Hp(t=>{let{drag:n}=this.getProps();if(!Tg(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-U(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Lh(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Hp(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=hg({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Hp(t=>{if(!Tg(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(U(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;xg.set(this.visualElement,this);let e=this.visualElement.current,t=Qh(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&_d(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Lh(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=wg(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),B.read(r);let o=em(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Hp(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=_g,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Cg(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function wg(e,t,n){let r=Ld(e,Cg(n)),i=Ld(t,Cg(n));return()=>{r(),i()}}function Tg(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Eg(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Dg=class extends uf{constructor(e){super(e),this.removeGroupControls=Ao,this.removeListeners=Ao,this.controls=new Sg(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ao}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Og=e=>(t,n)=>{e&&B.update(()=>e(t,n),!1,!0)},kg=class extends uf{constructor(){super(...arguments),this.removePointerDownListener=Ao}onPointerDown(e){this.session=new rg(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:$h(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Og(e),onStart:Og(t),onMove:Og(n),onEnd:(e,t)=>{delete this.session,r&&B.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Qh(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},Ag=!1,jg=class extends b.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),Ag&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),om.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),Ag=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||B.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),id.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;Ag=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Mg(e){let[t,n]=Zm(),r=(0,b.useContext)(yo);return(0,I.jsx)(jg,{...e,layoutGroup:r,switchLayoutGroup:(0,b.useContext)(Ih),isPresent:t,safeToRemove:n})}var Ng={pan:{Feature:kg},drag:{Feature:Dg,ProjectionNode:Hm,MeasureLayout:Mg}};function Pg(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&B.postRender(()=>i(t,Xh(t)))}var Fg=class extends uf{mount(){let{current:e}=this.node;e&&(this.unmount=dd(e,(e,t)=>(Pg(this.node,t,`Start`),e=>Pg(this.node,e,`End`))))}unmount(){}},Ig=class extends uf{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Mo(em(this.node.current,`focus`,()=>this.onFocus()),em(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Lg(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&B.postRender(()=>i(t,Xh(t)))}var Rg=class extends uf{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Cd(e,(e,t)=>(Lg(this.node,t,`Start`),(e,{success:t})=>Lg(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},zg=new WeakMap,Bg=new WeakMap,Vg=e=>{let t=zg.get(e.target);t&&t(e)},Hg=e=>{e.forEach(Vg)};function Ug({root:e,...t}){let n=e||document;Bg.has(n)||Bg.set(n,{});let r=Bg.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Hg,{root:e,...t})),r[i]}function Wg(e,t,n){let r=Ug(t);return zg.set(e,n),r.observe(e),()=>{zg.delete(e),r.unobserve(e)}}var Gg={some:0,all:1},Kg=class extends uf{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Gg[r]};this.stopObserver=Wg(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(qg(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function qg({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Jg={inView:{Feature:Kg},tap:{Feature:Rg},focus:{Feature:Ig},hover:{Feature:Fg}},Yg={layout:{ProjectionNode:Hm,MeasureLayout:Mg}},Xg=Gh({...Yh,...Jg,...Ng,...Yg},Kh),Zg={default:{border:`rgba(255,255,255,0.22)`,glow:`rgba(139,92,246,0.12)`,text:`rgba(255,255,255,0.92)`},success:{border:`rgba(74,222,128,0.35)`,glow:`rgba(34,197,94,0.15)`,text:`rgba(220,252,231,0.98)`},error:{border:`rgba(248,113,113,0.4)`,glow:`rgba(239,68,68,0.12)`,text:`rgba(254,242,242,0.98)`}};function Qg({message:e,type:t=`default`,visible:n,onHide:r}){(0,b.useEffect)(()=>{if(n){let e=setTimeout(r,2800);return()=>clearTimeout(e)}},[n,r]);let i=Zg[t];return(0,I.jsx)(eh,{children:n&&(0,I.jsx)(`div`,{style:{position:`fixed`,bottom:0,left:0,right:0,zIndex:9999,display:`flex`,justifyContent:`center`,pointerEvents:`none`,paddingBottom:`calc(88px + env(safe-area-inset-bottom))`,paddingLeft:16,paddingRight:16},children:(0,I.jsx)(Xg.div,{initial:{opacity:0,y:12,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:8,scale:.98},transition:{type:`spring`,damping:28,stiffness:380},style:{pointerEvents:`auto`,maxWidth:320,width:`fit-content`,minWidth:0,padding:`8px 14px`,borderRadius:999,fontSize:12,fontWeight:500,letterSpacing:`0.01em`,lineHeight:1.35,color:i.text,textAlign:`center`,background:`linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)`,backdropFilter:`blur(24px) saturate(1.6)`,WebkitBackdropFilter:`blur(24px) saturate(1.6)`,border:`1px solid ${i.border}`,boxShadow:`
                0 4px 24px rgba(0,0,0,0.35),
                0 0 0 1px rgba(255,255,255,0.06) inset,
                0 1px 0 rgba(255,255,255,0.12) inset,
                0 -8px 32px ${i.glow}
              `},children:e})})})}var $g=()=>qn.get(`/api/notifications`),e_=e=>qn.post(`/api/notifications/${e}/seen`),t_=()=>qn.post(`/api/channel/recheck`),n_=6e4;function r_(){let[e,t]=(0,b.useState)([]),[n,r]=(0,b.useState)(!1),i=Si(),{hapticFeedback:a}=so(),{user:o,refetch:s}=go(),c=async()=>{try{let e=(await $g()).data.items??[];e.length>0&&a(`medium`),t(e)}catch{}};(0,b.useEffect)(()=>{if(!o)return;c();let e=setInterval(c,n_);return()=>clearInterval(e)},[o?.telegram_id]);let l=e[0];if(!l)return null;let u=async()=>{if(n)return;r(!0),a(`light`);let e=l.id;t(e=>e.slice(1));try{await e_(e)}catch{}finally{r(!1)}},d=e=>{try{let t=window?.Telegram?.WebApp;t?.openTelegramLink&&e.includes(`t.me`)?t.openTelegramLink(e):t?.openLink?t.openLink(e):window.open(e,`_blank`)}catch{window.open(e,`_blank`)}};return(0,I.jsx)(`div`,{style:{position:`fixed`,inset:0,zIndex:600,background:`rgba(0,0,0,0.7)`,backdropFilter:`blur(8px)`,WebkitBackdropFilter:`blur(8px)`,display:`flex`,alignItems:`flex-end`,justifyContent:`center`},children:(0,I.jsxs)(`div`,{style:{background:`linear-gradient(180deg, #13121f 0%, #0a0a0f 100%)`,border:`1px solid rgba(139,92,246,0.3)`,borderRadius:`24px 24px 0 0`,padding:`28px 24px`,paddingBottom:`max(28px, calc(28px + env(safe-area-inset-bottom)))`,width:`100%`,textAlign:`center`},children:[(0,I.jsx)(`div`,{style:{fontSize:44,marginBottom:14},children:i_(l.kind)}),l.title&&(0,I.jsx)(`p`,{style:{color:`#fff`,fontSize:20,fontWeight:700,margin:`0 0 8px`},children:l.title}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.65)`,fontSize:14,margin:`0 0 22px`,lineHeight:1.5},children:l.message}),l.cta_label&&(0,I.jsx)(`button`,{onClick:async()=>{if(n)return;r(!0),a(`medium`);let e=l.cta_action??`/create`;if(l.kind===`welcome_unsubscribed`){(e.startsWith(`http://`)||e.startsWith(`https://`))&&d(e),r(!1);return}let o=l.id;try{await e_(o)}catch{}if(t(e=>e.slice(1)),e.startsWith(`http://`)||e.startsWith(`https://`)?d(e):e.startsWith(`/`)&&i(e),l.kind===`welcome_subscribed`||l.kind===`channel_bonus`)try{s()}catch{}r(!1)},disabled:n,style:a_,children:l.cta_label}),l.kind===`welcome_unsubscribed`&&(0,I.jsx)(`button`,{onClick:async()=>{if(!n){r(!0),a(`medium`);try{if((await t_()).data.subscribed){let e=l.id;try{await e_(e)}catch{}t(e=>e.slice(1));try{s()}catch{}await c()}}catch{}finally{r(!1)}}},disabled:n,style:{...o_,marginTop:10},children:`Я подписался — проверить`}),!l.cta_label&&(0,I.jsx)(`button`,{onClick:u,disabled:n,style:a_,children:`Понятно`}),l.cta_label&&(0,I.jsx)(`button`,{onClick:u,disabled:n,style:{...s_,marginTop:10},children:`Позже`})]})})}function i_(e){switch(e){case`welcome_subscribed`:return`✨`;case`welcome_unsubscribed`:return`🎁`;case`channel_bonus`:return`🎉`;case`low_quota`:return`🔔`;case`quota_exhausted`:return`😔`;case`sub_expired`:return`⏰`;case`lite_upsell_10d`:return`🔥`;default:return`✨`}}var a_={width:`100%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,border:`none`,borderRadius:14,color:`#fff`,fontSize:16,fontWeight:600,padding:`15px 24px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`,boxShadow:`0 0 24px rgba(139,92,246,0.5)`},o_={width:`100%`,background:`rgba(255,255,255,0.06)`,border:`1px solid rgba(255,255,255,0.12)`,borderRadius:14,color:`#fff`,fontSize:15,fontWeight:500,padding:`13px 24px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`},s_={width:`100%`,background:`transparent`,border:`none`,color:`rgba(255,255,255,0.55)`,fontSize:14,fontWeight:500,padding:`10px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`},c_=`max(12px, env(safe-area-inset-top))`,l_={paddingLeft:16,paddingBottom:12,paddingTop:c_,borderBottom:`1px solid rgba(139,92,246,0.12)`,flexShrink:0,display:`flex`,gap:12,background:`rgba(10,10,15,0.94)`,backdropFilter:`blur(16px)`,WebkitBackdropFilter:`blur(16px)`,zIndex:2},u_={width:40,height:40,borderRadius:`50%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 16px rgba(139,92,246,0.5)`,flexShrink:0};function d_({icon:e,title:t,subtitle:n,extra:r,profileButton:i}){let a=Si(),{hapticFeedback:o}=so(),{user:s,loading:c}=go(),l=c||!!s?.subscription;return(0,I.jsxs)(`div`,{style:{...l_,paddingRight:i?16:52,alignItems:i?`center`:`flex-start`},children:[e!=null&&(0,I.jsx)(`div`,{style:u_,children:e}),(0,I.jsxs)(`div`,{style:{flex:1,minWidth:0,display:`flex`,flexDirection:`column`,gap:r?6:0},children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:15,fontWeight:600,margin:0},children:t}),n!=null&&n!==``&&(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.45)`,fontSize:12,margin:`2px 0 0`,lineHeight:1.35,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:n})]}),r]}),i&&(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexShrink:0},children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>{o(`light`),a(`/tariffs`)},"aria-label":`Купить подписку`,style:{visibility:l?`hidden`:`visible`,background:`linear-gradient(135deg, #a855f7, #ec4899)`,border:`none`,boxShadow:`0 0 14px rgba(168,85,247,0.7), 0 0 28px rgba(236,72,153,0.35)`,cursor:`pointer`,padding:`0 14px`,height:34,borderRadius:100,flexShrink:0,display:`flex`,alignItems:`center`,color:`#ffffff`,fontSize:13,fontWeight:700,fontFamily:`Inter, sans-serif`,letterSpacing:`0.01em`},children:`Купить`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>{o(`light`),a(`/profile`)},"aria-label":`Профиль`,style:{background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,border:`1.5px solid rgba(139,92,246,0.45)`,cursor:`pointer`,padding:0,width:40,height:40,borderRadius:`50%`,flexShrink:0,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 16px rgba(139,92,246,0.5)`},children:(0,I.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`,stroke:`rgba(255,255,255,0.9)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`,stroke:`rgba(255,255,255,0.9)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})]})}var f_={display:`flex`,flexDirection:`column`,height:`calc(100dvh - 84px)`,position:`relative`,zIndex:1},p_={flex:1,minHeight:0,overflowY:`auto`,overflowX:`hidden`,WebkitOverflowScrolling:`touch`,overscrollBehavior:`none`,padding:`16px 16px`,paddingBottom:`max(24px, calc(24px + env(safe-area-inset-bottom)))`};function m_({children:e,style:t,className:n,onClick:r}){return(0,I.jsx)(`div`,{onClick:r,className:n,style:{background:`rgba(255,255,255,0.05)`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:20,...t},children:e})}function h_({children:e,onClick:t,variant:n=`primary`,disabled:r=!1,style:i,fullWidth:a=!0}){let o={border:`none`,borderRadius:16,fontSize:16,fontWeight:600,padding:`16px 24px`,width:a?`100%`:`auto`,cursor:r?`not-allowed`:`pointer`,transition:`all 0.2s ease`,fontFamily:`Inter, sans-serif`,opacity:r?.5:1,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8},s={primary:{background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,color:`#ffffff`,boxShadow:`0 0 30px rgba(139,92,246,0.5)`},secondary:{background:`rgba(139,92,246,0.1)`,border:`1px solid rgba(139,92,246,0.3)`,color:`#a78bfa`},ghost:{background:`transparent`,color:`rgba(255,255,255,0.3)`,fontSize:14,padding:`10px 16px`}};return(0,I.jsx)(`button`,{onClick:r?void 0:t,style:{...o,...s[n],...i},children:e})}function g_({message:e=`Загрузка...`}){let[t,n]=(0,b.useState)(0);return(0,b.useEffect)(()=>{let e=setInterval(()=>{n(e=>e>=95?e:e+Math.random()*3)},300);return()=>clearInterval(e)},[]),(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:24,padding:40},children:[(0,I.jsxs)(`div`,{style:{position:`relative`,width:80,height:80},children:[(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,borderRadius:`50%`,background:`radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)`,animation:`pulse 1.5s ease-in-out infinite`}}),(0,I.jsx)(`div`,{style:{position:`absolute`,inset:8,borderRadius:`50%`,border:`2px solid transparent`,borderTopColor:`#8b5cf6`,borderRightColor:`#8b5cf6`,animation:`spin 1s linear infinite`}}),(0,I.jsx)(`div`,{style:{position:`absolute`,inset:16,borderRadius:`50%`,border:`2px solid transparent`,borderBottomColor:`#a78bfa`,animation:`spin 1.5s linear infinite reverse`}})]}),(0,I.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:16,fontWeight:500,margin:0},children:e}),(0,I.jsxs)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:13,margin:`8px 0 0`},children:[Math.round(t),`%`]})]}),(0,I.jsx)(`div`,{style:{width:160,height:4,borderRadius:100,background:`rgba(255,255,255,0.08)`,overflow:`hidden`},children:(0,I.jsx)(`div`,{style:{height:`100%`,width:`${t}%`,borderRadius:100,background:`linear-gradient(90deg, #8b5cf6, #a78bfa)`,transition:`width 0.3s ease`}})})]})}var __=e=>qn.post(`/api/create/simple`,e),v_=e=>qn.post(`/api/create/reference`,e),y_=e=>qn.post(`/api/create/retouch`,e),b_=()=>qn.get(`/api/gallery`),x_=e=>qn.post(`/api/gallery/${e}/send`),S_=e=>qn.post(`/api/gallery/send`,{image_url:e});function C_(e,t){let n=`/api/task/${encodeURIComponent(e)}/stream`,r=Kn();return new Promise((e,i)=>{let a=new AbortController;t&&t.addEventListener(`abort`,()=>a.abort()),fetch(n,{headers:r?{Authorization:`Bearer ${r}`}:{},signal:a.signal}).then(t=>{if(!t.ok||!t.body)return t.json().then(e=>i(Error(e?.error??`HTTP ${t.status}`)),()=>i(Error(`HTTP ${t.status}`)));let n=t.body.getReader(),r=new TextDecoder,a=``,o=()=>n.read().then(({done:t,value:s})=>{if(t){i(Error(`stream closed without result`));return}a+=r.decode(s,{stream:!0});let c=a.split(`

`);a=c.pop()??``;for(let t of c){let r=t.trim();if(r.startsWith(`data:`)){let t=r.slice(5).trim();try{e(JSON.parse(t)),n.cancel()}catch{i(Error(`invalid SSE payload`))}return}}return o()});o().catch(e=>{e?.name!==`AbortError`&&i(e)})}).catch(e=>{e?.name!==`AbortError`&&i(e)})})}var w_=[{title:`⚡ Новые`,packs:[{id:`hearts`,name:`Коллаж с сердцами`,image:`https://i.imgur.com/bdo93fI.jpeg`,prompt:`CRITICAL: IDENTITY PRESERVATION

Reference Image Analysis:
- This image is the ABSOLUTE SOURCE OF TRUTH for the person's appearance
- Study and memorize EXACT facial features before generation:
  * Precise face shape and proportions
  * Exact eye shape, size, color, iris patterns, eyelid structure
  * Specific nose bridge height, nostril shape, tip angle
  * Exact lip shape, thickness, cupid's bow definition
  * Precise cheekbone structure and position
  * Exact jawline and chin shape
  * Specific eyebrow shape, thickness, arch
  * Exact distance ratios between features (eye spacing, nose-to-lip distance)
  * Skin tone, texture, any distinctive marks or features
  * Hair color, texture, hairline (if changing hairstyle, keep natural growth patterns)

Task: YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON. This person is your ONLY reference for facial features and identity. Create a vertical collage of THREE separate selfie photos stacked vertically in a single image, featuring THE EXACT PERSON from the input image. 

CRITICAL: The face, features, and identity MUST match the input image perfectly. Do not create a generic person - use the EXACT person provided.

Layout: three equal-height horizontal sections, no borders between them, seamless vertical stack. Setting: modern bedroom with light beige built-in wardrobes, warm ceiling lighting, bed visible in background (same background for all three photos).

Photo 1 (TOP): Close-up selfie of THE PERSON FROM INPUT IMAGE, their right hand index finger touching/pressing lips in "shh" gesture, looking directly at camera with soft neutral expression, long dark hair flowing down. Add decorative pink/rose gradient hearts floating above the head as overlay graphics (5-7 hearts of varying sizes, cartoon style hearts, pink to darker pink gradient).

Photo 2 (MIDDLE): Close-up selfie of THE SAME PERSON FROM INPUT IMAGE, head tilted slightly to the right, right hand gently touching cheek/face area, soft gentle smile, relaxed pose. Add decorative pink/rose gradient hearts floating above the head as overlay graphics (5-7 hearts of varying sizes, cartoon style hearts, pink to darker pink gradient).

Photo 3 (BOTTOM): Close-up selfie of THE SAME PERSON FROM INPUT IMAGE, both hands near face in thoughtful/cute pose, fingers near chin and cheek area, gentle expression with slight smile or contemplative look. Add decorative pink/rose gradient hearts floating above the head as overlay graphics (5-7 hearts of varying sizes, cartoon style hearts, pink to darker pink gradient).

HEARTS PLACEMENT - CRITICAL:
- TOP photo (Photo 1): YES - pink gradient hearts floating above head (5-7 hearts)
- MIDDLE photo (Photo 2): YES - pink gradient hearts floating above head (5-7 hearts)
- BOTTOM photo (Photo 3): YES - pink gradient hearts floating above head (5-7 hearts)
ALL THREE PHOTOS MUST HAVE HEARTS!

All three photos: Pink/rose lace camisole top with thin straps, same outfit in all frames. Warm soft lighting, selfie camera angle (slightly from above), intimate close-up framing showing face and upper shoulders. The person's natural hair from input image, styled long and flowing. Authentic smartphone selfie quality and perspective.

MANDATORY CONSTRAINTS:
- THE PERSON IN ALL THREE PHOTOS MUST BE THE EXACT SAME PERSON FROM THE INPUT IMAGE
- Study the input image facial features BEFORE generating anything
- Zero tolerance for feature changes from input image - every facial detail must match
- Do NOT create a different person or generic face
- Do NOT idealize, beautify, or "fix" any features from the input
- Do NOT blend with other faces or use generic features
- The person must be INSTANTLY recognizable from the input image in all three photos
- ALL THREE PHOTOS must have pink gradient hearts floating above the head
- Hair color and texture must match the input image (can be styled long for this shoot)

IDENTITY VERIFICATION CHECKLIST:
Before finalizing, verify:
✓ Does this person look EXACTLY like the person in the input image?
✓ Would someone who knows the input person recognize them immediately?
✓ Are the eye shape, color, and characteristics from input image preserved?
✓ Is the nose from input image identical in all dimensions?
✓ Do the lips match the input image precisely?
✓ Are facial proportions from input image preserved in all three photos?
✓ Are distinctive features from input visible in all frames?
✓ Is this the SAME person across all three photos?
✓ Do ALL THREE photos have hearts floating above the head?

ALLOWED VARIATIONS FROM INPUT IMAGE:
- Hand positions exactly as described for each photo
- Head tilt and angle specific to each frame
- Expression variations as specified (neutral, gentle smile, contemplative)
- Hair can be styled longer if needed, but must maintain input's color and texture
- Clothing: pink lace camisole (different from input outfit)
- Setting: bedroom background (different from input setting)
- Hearts overlay on ALL THREE photos

WHAT MUST STAY IDENTICAL TO INPUT:
- Face shape and all facial features
- Skin tone
- Eye shape, color, characteristics
- Nose structure
- Lip shape
- Facial proportions and feature spacing
- Any distinctive marks or features
- Overall identity and recognizability

OUTPUT REQUIREMENTS:
- Single vertical image containing three stacked photos of THE PERSON FROM INPUT
- Each section equal height, seamless transitions
- Photorealistic quality matching modern smartphone camera
- Natural skin texture with soft warm indoor lighting
- Authentic selfie perspective in all three frames
- Consistent background across all photos
- Pink lace camisole visible in all frames
- Hearts in ALL THREE sections: pink gradient, cartoon/decorative style, floating above head (5-7 hearts of varying sizes per photo)
- TOP photo: pink gradient hearts above head
- MIDDLE photo: pink gradient hearts above head
- BOTTOM photo: pink gradient hearts above head
- Sharp focus on face in all photos
- Warm color temperature (2800-3200K)
- No filters - natural authentic look

ERROR PREVENTION:
- FIRST: Study the input image facial features thoroughly
- THEN: Generate all three photos featuring that EXACT person
- If uncertain about ANY facial feature - refer back to input image
- The same person from input must appear in all three photos with zero variation in identity
- When in doubt about features, choose accuracy to input over artistic liberty
- Preserve imperfections from input - they define identity
- Hearts are graphic overlay elements in ALL THREE photos
- Maintain exact outfit (pink lace camisole) across all three frames
- CONFIRM HEARTS PLACEMENT: Top = YES, Middle = YES, Bottom = YES (all three have 5-7 pink gradient hearts)`,photoMode:`single`,preset:{id:`unstaged`,name:`Живая любовь`}},{id:`studio`,image:`https://i.imgur.com/qfuBxSE.jpeg`,prompt:`CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY

YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.

ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.

STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):
Extract and lock in these features from the input image:
1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle
2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes
3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle
4. LIPS: Upper lip shape, lower lip fullness, cupid's bow definition, mouth width, lip color
5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline
6. CHEEKBONES: Height, prominence, width
7. JAW: Angle, width, chin shape (pointed/rounded/square)
8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks
9. HAIR: EXACT color from input (do not change), texture, natural growth pattern
10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio
11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features

LOCK THESE IN. DO NOT DEVIATE.

Task: Create a romantic lifestyle photograph of THIS EXACT PERSON (from input image) in a modern apartment setting surrounded by flowers.

SCENE & SETTING:
- Location: Modern luxury apartment/penthouse kitchen area
- Time: Evening/night (dark outside visible through windows)
- Flooring: Dark hardwood floors
- Background elements: 
  * Contemporary dark wood kitchen cabinets
  * Large floor-to-ceiling windows showing night cityscape/darkness outside
  * Modern minimalist interior design
  * Soft ambient indoor lighting

FLOWERS - CRITICAL ELEMENT:
- Multiple large arrangements of RED ROSES throughout the scene
- Subject holding: Large wicker basket filled with vibrant RED TULIPS (60-80 tulips, tightly arranged)
- Additional arrangements visible:
  * Large bouquet of red roses in glass vase (left side)
  * Multiple wicker baskets with red roses positioned around the space
  * At least 3-4 separate flower arrangements visible in frame
- Flowers: fresh, vibrant, luxurious abundance
- Creates romantic Valentine's Day / special occasion atmosphere

SUBJECT POSITION & POSE:
- Subject crouching/squatting on the floor
- Position: centered in frame, knees bent, sitting on heels
- Body turned slightly toward camera (3/4 angle)
- Holding large wicker basket of red tulips with both hands
- Basket positioned in front of torso
- Barefoot on dark hardwood floor
- Relaxed, natural, intimate pose

CLOTHING:
- White oversized button-up shirt (men's style shirt worn as dress)
- Shirt appears silky or satin material
- Sleeves rolled or pushed up to mid-forearm
- Shirt worn loosely, casually elegant
- Legs visible (shirt worn short, revealing thighs)
- Minimalist, effortlessly chic styling

HAIR - FROM INPUT IMAGE:
- Use the EXACT hair color from the input image (do not change)
- If input has blonde hair → keep blonde
- If input has dark hair → keep dark
- If input has brown/other hair → keep that exact color
- Style: Long, tousled, naturally styled with volume
- Hair appears slightly messy/bedhead style (authentic, lived-in look)
- Some strands falling around face
- Swept to one side with natural movement
- BUT COLOR MUST MATCH INPUT EXACTLY

EXPRESSION & MOOD:
- Soft, intimate gaze toward camera
- Gentle, subtle smile or serene expression
- Romantic, vulnerable, authentic emotion
- Eyes: direct contact with camera, warm and inviting
- Overall mood: intimate, romantic, special moment captured

LIGHTING:
- Indoor ambient lighting (warm tones)
- Soft, natural-looking illumination
- Not harsh studio lights - appears like home lighting
- Warm glow creating intimate atmosphere
- Some shadows for depth and realism
- Evening/romantic lighting quality

CAMERA & TECHNICAL:
- Shot appears taken with high-quality camera or professional smartphone
- Slight film grain or natural texture (not overly polished)
- Authentic, lifestyle photography aesthetic
- Not overly staged - feels candid and real
- Portrait orientation (vertical frame)
- Medium-close composition showing full upper body and environment

MANDATORY IDENTITY CONSTRAINTS:
✓ This is the SAME PERSON, not a lookalike
✓ Use ZERO generic features - every feature comes from input image
✓ Do NOT blend or average with other faces
✓ Do NOT "beautify" or "fix" features
✓ Do NOT make symmetrical if input is asymmetric
✓ Do NOT change ethnic characteristics
✓ Do NOT alter bone structure
✓ Do NOT modify facial proportions
✓ Hair color MUST match input (this is non-negotiable)
✓ Skin tone MUST match input exactly
✓ Every measurement and ratio must be preserved

VERIFICATION PROTOCOL:
Before finalizing, confirm:
1. Could their family recognize them instantly? (YES required)
2. Eye shape, color, and characteristics EXACTLY match input? (YES required)
3. Nose structure IDENTICAL to input in all dimensions? (YES required)
4. Lip shape and fullness PRECISE match to input? (YES required)
5. Face shape and proportions EXACT match? (YES required)
6. Hair color SAME as input? (YES required)
7. Skin tone IDENTICAL to input? (YES required)
8. All unique features preserved? (YES required)
9. Is this THE SAME PERSON? (MUST be YES)
10. Would they recognize this photo as themselves? (YES required)

If ANY answer is NO → RESTART and copy features more precisely.

WHAT CHANGES vs INPUT:
- Setting: modern apartment with flowers
- Clothing: white oversized shirt
- Pose: crouching/squatting position holding basket
- Props: multiple flower arrangements, wicker baskets
- Lighting: intimate evening home lighting
- Hair styling: tousled, natural (but COLOR stays same as input)
- Context: romantic flower surprise scenario

WHAT NEVER CHANGES:
- Face structure (bone structure, proportions)
- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)
- Skin tone and undertone
- Hair color (CRITICAL - must match input exactly)
- Ethnic characteristics
- Eye color and characteristics
- Natural facial asymmetries
- Unique identifying features
- The fundamental DNA and identity of the face

OUTPUT REQUIREMENTS:
- High-quality lifestyle photography (8K resolution)
- Romantic, intimate atmosphere
- Warm color grading with natural tones
- Vibrant red flowers as key visual element
- Dark moody background (evening setting)
- Natural skin texture visible
- Authentic, candid feeling (not overly staged)
- Portrait orientation
- Focus sharp on subject's face
- Slight depth of field with background softly blurred
- The subject should be INSTANTLY recognizable as the person from input

CRITICAL REMINDERS:
- You are photographing an EXISTING person in a romantic scenario, not creating a new person
- Every facial feature is a direct copy from the input - no modifications
- "Similar" is failure - only "identical" is acceptable
- Hair COLOR from input is LOCKED - styling can change but color cannot
- This is a lifestyle/intimate photo, not a professional studio shoot
- Think of this as: "Same person, romantic surprise moment at home"

ERROR PREVENTION:
- Reference the input image constantly during generation
- Copy features exactly, do not approximate
- When uncertain → copy more precisely from input
- Asymmetries and natural features are required - they define identity
- Natural lighting should enhance, not excuse feature changes
- The romantic setting should not distract from identity accuracy`,name:`Розы в квартире`,photoMode:`single`,preset:{id:`studio`,name:`Студийный`}},{id:`light`,name:`Нежный свет`,image:`https://i.imgur.com/V77jCcy.jpeg`,prompt:`CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY

YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.

ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.

STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):
Extract and lock in these features from the input image:
1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle
2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes
3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle
4. LIPS: Upper lip shape, lower lip fullness, cupid's bow definition, mouth width, lip color
5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline
6. CHEEKBONES: Height, prominence, width
7. JAW: Angle, width, chin shape (pointed/rounded/square)
8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks
9. HAIR: EXACT color from input (do not change), texture, natural growth pattern
10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio
11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features

LOCK THESE IN. DO NOT DEVIATE.

Task: Create a cinematic portrait of THIS EXACT PERSON (from input image) in a new setting and pose.

Setting: Professional fashion photography studio with neutral background.
Angle: 3/4 side profile, face turned slightly to the right.

LIGHTING SPECIFICATION:
- Single horizontal beam of warm golden sunlight crosses the face at EYE LEVEL
- The beam illuminates BOTH EYES, creating golden glow in the irises
- Light also catches upper cheekbone and nose bridge
- Source: appears like sunlight through horizontal window blinds or gap
- Background: soft gray-blue, slightly out of focus
- Overall: dramatic but natural, cinematic quality

HAIR - FROM INPUT IMAGE:
- Use the EXACT hair color from the input image (do not invent new color)
- If input has blonde hair → keep blonde
- If input has dark hair → keep dark  
- If input has red/auburn hair → keep red/auburn
- Only variation allowed: styling (can be worn long and straight with bangs IF it suits the input person's natural hair texture)
- But COLOR must match input exactly

CLOTHING & STYLING:
- Simple black tank top with thin straps
- Small gold hoop earrings
- Natural makeup that enhances without changing features

Expression: Serene, contemplative, eyes looking slightly upward toward the light source, lips gently parted.

MANDATORY IDENTITY CONSTRAINTS:
✓ This is the SAME PERSON, not a lookalike
✓ Use ZERO generic features - every feature comes from input image
✓ Do NOT blend or average with other faces
✓ Do NOT "beautify" or "fix" features
✓ Do NOT make symmetrical if input is asymmetric
✓ Do NOT change ethnic characteristics
✓ Do NOT alter bone structure
✓ Do NOT modify facial proportions
✓ Hair color MUST match input (this is non-negotiable)
✓ Skin tone MUST match input exactly
✓ Every measurement and ratio must be preserved

VERIFICATION PROTOCOL:
Before finalizing, confirm:
1. Could their mother recognize them instantly? (YES required)
2. Eye shape EXACTLY matches input? (YES required)
3. Nose structure IDENTICAL to input in all dimensions? (YES required)
4. Lip shape PRECISE match to input? (YES required)
5. Face shape and proportions EXACT match? (YES required)
6. Hair color SAME as input? (YES required)
7. Skin tone IDENTICAL to input? (YES required)
8. All unique features (moles, asymmetries) preserved? (YES required)
9. Would face recognition AI identify as same person? (YES required)
10. Is this THE SAME PERSON or just similar? (MUST be SAME)

If ANY answer is NO or "similar but not exact" → RESTART and copy features more precisely.

WHAT CHANGES vs INPUT:
- Pose/angle: 3/4 profile instead of input angle
- Lighting: dramatic golden beam (different from input lighting)
- Background: neutral studio (different from input background)
- Clothing: black tank top (different from input outfit)
- Hair styling: can be styled long with bangs (but COLOR stays same as input)
- Expression: serene upward gaze (different from input expression)

WHAT NEVER CHANGES:
- Face structure (bone structure, proportions)
- Every individual facial feature (eyes, nose, lips, etc.)
- Skin tone
- Hair color (CRITICAL - must match input)
- Ethnic characteristics
- Unique identifying features
- The fundamental DNA and identity of the face

OUTPUT REQUIREMENTS:
- 8K photorealistic quality
- Professional fashion/editorial photography
- Horizontal golden light beam at eye level, illuminating the eyes
- Sharp focus on face, especially eyes
- Natural skin texture preserved
- Cinematic warm color grading
- 85mm lens equivalent, f/1.8-2.0
- Soft bokeh background
- The subject should be INSTANTLY recognizable as the person from input

CRITICAL REMINDERS:
- You are photographing an EXISTING person in a new setting, not creating a new person
- Every facial feature is a direct copy from the input - no modifications
- "Similar" is failure - only "identical" is acceptable
- Hair color from input is LOCKED - do not change it
- Lighting and styling can change, but the face underneath cannot
- Think of this as: "Same person, different photoshoot"

ERROR PREVENTION:
- Reference the input image constantly during generation
- Copy features exactly, do not approximate
- When uncertain → copy more precisely from input
- Asymmetries and imperfections are required - they define identity
- The light should enhance visibility, not excuse feature changes`,photoMode:`single`,preset:{id:`roses`,name:`В объятиях роз`}},{id:`golden`,name:`Золотой час`,image:`https://i.imgur.com/WVu8odn.jpeg`,prompt:`CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY

YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.

ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.

STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):
Extract and lock in these features from the input image:
1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle
2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes
3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle
4. LIPS: Upper lip shape, lower lip fullness, cupid's bow definition, mouth width, lip color
5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline
6. CHEEKBONES: Height, prominence, width
7. JAW: Angle, width, chin shape (pointed/rounded/square)
8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks
9. HAIR: EXACT color from input (do not change), texture, natural growth pattern
10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio
11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features

LOCK THESE IN. DO NOT DEVIATE.

Task: Create a professional fashion/beauty portrait of THIS EXACT PERSON (from input image) in a studio setting.

COMPOSITION:
- Front-facing portrait with head slightly tilted to the subject's left
- Upper body visible (shoulders and torso in frame)
- Subject positioned centrally
- Camera angle: straight on, eye level
- 3/4 view with face turned slightly toward camera

BACKGROUND:
- Deep rich burgundy/maroon red color (solid, uniform)
- Professional studio backdrop
- No texture or patterns, just clean solid color
- Creates dramatic contrast with subject

LIGHTING:
- Professional studio lighting setup
- Main key light from front-left, creating soft directional light
- Subtle shadow on right side of face for dimension
- Catchlights visible in eyes
- Overall: soft, flattering, high-fashion editorial lighting
- Smooth even skin illumination
- No harsh shadows, but defined contours

HAIR - FROM INPUT IMAGE:
- Use the EXACT hair color from the input image (do not change)
- If input has blonde hair → keep blonde
- If input has dark hair → keep dark
- If input has red/brown hair → keep that exact shade
- Style: Long, voluminous, flowing hair with natural wave and movement
- Hair swept back and to the side with volume at crown
- Some strands falling naturally around face and shoulders
- Texture: soft, silky, with natural movement and body
- BUT COLOR MUST MATCH INPUT EXACTLY

CLOTHING:
- Black sleeveless high-neck top/turtleneck
- Simple, elegant, minimalist
- Allows focus to remain on face
- Professional fashion styling

MAKEUP & STYLING:
- Professional editorial makeup
- Defined eyes with neutral/bronze eyeshadow tones
- Well-defined eyebrows (matching input person's natural brow shape)
- Natural-looking lashes or subtle enhancement
- Lips: natural nude/pink tone with slight gloss
- Skin: flawless but natural-looking finish
- Overall look: polished, sophisticated, high-fashion editorial

EXPRESSION & POSE:
- Direct eye contact with camera
- Confident, strong, editorial gaze
- Lips slightly parted in neutral/sultry expression
- Neck elongated, chin slightly down
- Shoulders visible, relaxed posture
- Arms positioned naturally (hands not visible or just touching hair/neck area)
- Overall demeanor: confident, poised, professional model energy

MANDATORY IDENTITY CONSTRAINTS:
✓ This is the SAME PERSON, not a lookalike
✓ Use ZERO generic features - every feature comes from input image
✓ Do NOT blend or average with other faces
✓ Do NOT "beautify" or "fix" features beyond professional makeup
✓ Do NOT make symmetrical if input is asymmetric
✓ Do NOT change ethnic characteristics
✓ Do NOT alter bone structure
✓ Do NOT modify facial proportions
✓ Hair color MUST match input (this is non-negotiable)
✓ Skin tone MUST match input exactly
✓ Every measurement and ratio must be preserved

VERIFICATION PROTOCOL:
Before finalizing, confirm:
1. Could their family recognize them instantly? (YES required)
2. Eye shape, color, and characteristics EXACTLY match input? (YES required)
3. Nose structure IDENTICAL to input in all dimensions? (YES required)
4. Lip shape and fullness PRECISE match to input? (YES required)
5. Face shape and proportions EXACT match? (YES required)
6. Hair color SAME as input? (YES required)
7. Skin tone IDENTICAL to input? (YES required)
8. Cheekbone and jaw structure match input? (YES required)
9. All unique features preserved? (YES required)
10. Is this THE SAME PERSON? (MUST be YES)

If ANY answer is NO → RESTART and copy features more precisely.

WHAT CHANGES vs INPUT:
- Setting: professional studio with burgundy backdrop
- Lighting: professional fashion photography lighting
- Hair styling: voluminous, flowing (but same COLOR as input)
- Clothing: black high-neck sleeveless top
- Makeup: professional editorial (enhancing, not changing features)
- Expression: confident editorial gaze
- Pose: front-facing with slight head tilt

WHAT NEVER CHANGES:
- Face structure (bone structure, proportions)
- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)
- Skin tone and undertone
- Hair color (CRITICAL - must match input exactly)
- Ethnic characteristics
- Eye color
- Natural facial asymmetries
- Unique identifying features (moles, marks, etc.)
- The fundamental DNA and identity of the face

OUTPUT REQUIREMENTS:
- 8K photorealistic quality
- Professional fashion/beauty editorial photography
- Studio lighting: soft, flattering, dimensional
- Background: solid deep burgundy/maroon red
- Sharp focus on face and eyes
- Natural skin texture visible (not over-retouched)
- Professional color grading with rich warm tones
- 85mm portrait lens equivalent, f/2.8
- Slight depth of field with background softly out of focus
- High-end fashion magazine aesthetic (Vogue, Harper's Bazaar style)
- The subject should be INSTANTLY recognizable as the person from input

CRITICAL REMINDERS:
- You are photographing an EXISTING person in a professional studio, not creating a new person
- Every facial feature is a direct copy from the input - no modifications
- "Similar" is failure - only "identical" is acceptable
- Hair COLOR from input is LOCKED - styling can change but color cannot
- Professional makeup enhances but does not alter underlying features
- Think of this as: "Same person, professional photoshoot with makeup and styling"

ERROR PREVENTION:
- Reference the input image constantly during generation
- Copy features exactly, do not approximate
- When uncertain → copy more precisely from input
- Asymmetries and natural features are required - they define identity
- Makeup should enhance, not transform the face
- Hair can be styled differently but COLOR stays exactly the same`,photoMode:`single`,preset:{id:`golden`,name:`Золотой час`}}]},{title:`💜 Студийные`,packs:[{id:`light`,name:`Нежный свет`,image:`https://i.imgur.com/V77jCcy.jpeg`,prompt:`CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY

YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.

ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.

STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):
Extract and lock in these features from the input image:
1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle
2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes
3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle
4. LIPS: Upper lip shape, lower lip fullness, cupid's bow definition, mouth width, lip color
5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline
6. CHEEKBONES: Height, prominence, width
7. JAW: Angle, width, chin shape (pointed/rounded/square)
8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks
9. HAIR: EXACT color from input (do not change), texture, natural growth pattern
10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio
11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features

LOCK THESE IN. DO NOT DEVIATE.

Task: Create a cinematic portrait of THIS EXACT PERSON (from input image) in a new setting and pose.

Setting: Professional fashion photography studio with neutral background.
Angle: 3/4 side profile, face turned slightly to the right.

LIGHTING SPECIFICATION:
- Single horizontal beam of warm golden sunlight crosses the face at EYE LEVEL
- The beam illuminates BOTH EYES, creating golden glow in the irises
- Light also catches upper cheekbone and nose bridge
- Source: appears like sunlight through horizontal window blinds or gap
- Background: soft gray-blue, slightly out of focus
- Overall: dramatic but natural, cinematic quality

HAIR - FROM INPUT IMAGE:
- Use the EXACT hair color from the input image (do not invent new color)
- If input has blonde hair → keep blonde
- If input has dark hair → keep dark  
- If input has red/auburn hair → keep red/auburn
- Only variation allowed: styling (can be worn long and straight with bangs IF it suits the input person's natural hair texture)
- But COLOR must match input exactly

CLOTHING & STYLING:
- Simple black tank top with thin straps
- Small gold hoop earrings
- Natural makeup that enhances without changing features

Expression: Serene, contemplative, eyes looking slightly upward toward the light source, lips gently parted.

MANDATORY IDENTITY CONSTRAINTS:
✓ This is the SAME PERSON, not a lookalike
✓ Use ZERO generic features - every feature comes from input image
✓ Do NOT blend or average with other faces
✓ Do NOT "beautify" or "fix" features
✓ Do NOT make symmetrical if input is asymmetric
✓ Do NOT change ethnic characteristics
✓ Do NOT alter bone structure
✓ Do NOT modify facial proportions
✓ Hair color MUST match input (this is non-negotiable)
✓ Skin tone MUST match input exactly
✓ Every measurement and ratio must be preserved

VERIFICATION PROTOCOL:
Before finalizing, confirm:
1. Could their mother recognize them instantly? (YES required)
2. Eye shape EXACTLY matches input? (YES required)
3. Nose structure IDENTICAL to input in all dimensions? (YES required)
4. Lip shape PRECISE match to input? (YES required)
5. Face shape and proportions EXACT match? (YES required)
6. Hair color SAME as input? (YES required)
7. Skin tone IDENTICAL to input? (YES required)
8. All unique features (moles, asymmetries) preserved? (YES required)
9. Would face recognition AI identify as same person? (YES required)
10. Is this THE SAME PERSON or just similar? (MUST be SAME)

If ANY answer is NO or "similar but not exact" → RESTART and copy features more precisely.

WHAT CHANGES vs INPUT:
- Pose/angle: 3/4 profile instead of input angle
- Lighting: dramatic golden beam (different from input lighting)
- Background: neutral studio (different from input background)
- Clothing: black tank top (different from input outfit)
- Hair styling: can be styled long with bangs (but COLOR stays same as input)
- Expression: serene upward gaze (different from input expression)

WHAT NEVER CHANGES:
- Face structure (bone structure, proportions)
- Every individual facial feature (eyes, nose, lips, etc.)
- Skin tone
- Hair color (CRITICAL - must match input)
- Ethnic characteristics
- Unique identifying features
- The fundamental DNA and identity of the face

OUTPUT REQUIREMENTS:
- 8K photorealistic quality
- Professional fashion/editorial photography
- Horizontal golden light beam at eye level, illuminating the eyes
- Sharp focus on face, especially eyes
- Natural skin texture preserved
- Cinematic warm color grading
- 85mm lens equivalent, f/1.8-2.0
- Soft bokeh background
- The subject should be INSTANTLY recognizable as the person from input

CRITICAL REMINDERS:
- You are photographing an EXISTING person in a new setting, not creating a new person
- Every facial feature is a direct copy from the input - no modifications
- "Similar" is failure - only "identical" is acceptable
- Hair color from input is LOCKED - do not change it
- Lighting and styling can change, but the face underneath cannot
- Think of this as: "Same person, different photoshoot"

ERROR PREVENTION:
- Reference the input image constantly during generation
- Copy features exactly, do not approximate
- When uncertain → copy more precisely from input
- Asymmetries and imperfections are required - they define identity
- The light should enhance visibility, not excuse feature changes`,photoMode:`single`,preset:{id:`roses`,name:`В объятиях роз`}},{id:`golden`,name:`Золотой час`,image:`https://i.imgur.com/WVu8odn.jpeg`,prompt:`CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY

YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.

ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.

STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):
Extract and lock in these features from the input image:
1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle
2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes
3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle
4. LIPS: Upper lip shape, lower lip fullness, cupid's bow definition, mouth width, lip color
5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline
6. CHEEKBONES: Height, prominence, width
7. JAW: Angle, width, chin shape (pointed/rounded/square)
8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks
9. HAIR: EXACT color from input (do not change), texture, natural growth pattern
10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio
11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features

LOCK THESE IN. DO NOT DEVIATE.

Task: Create a professional fashion/beauty portrait of THIS EXACT PERSON (from input image) in a studio setting.

COMPOSITION:
- Front-facing portrait with head slightly tilted to the subject's left
- Upper body visible (shoulders and torso in frame)
- Subject positioned centrally
- Camera angle: straight on, eye level
- 3/4 view with face turned slightly toward camera

BACKGROUND:
- Deep rich burgundy/maroon red color (solid, uniform)
- Professional studio backdrop
- No texture or patterns, just clean solid color
- Creates dramatic contrast with subject

LIGHTING:
- Professional studio lighting setup
- Main key light from front-left, creating soft directional light
- Subtle shadow on right side of face for dimension
- Catchlights visible in eyes
- Overall: soft, flattering, high-fashion editorial lighting
- Smooth even skin illumination
- No harsh shadows, but defined contours

HAIR - FROM INPUT IMAGE:
- Use the EXACT hair color from the input image (do not change)
- If input has blonde hair → keep blonde
- If input has dark hair → keep dark
- If input has red/brown hair → keep that exact shade
- Style: Long, voluminous, flowing hair with natural wave and movement
- Hair swept back and to the side with volume at crown
- Some strands falling naturally around face and shoulders
- Texture: soft, silky, with natural movement and body
- BUT COLOR MUST MATCH INPUT EXACTLY

CLOTHING:
- Black sleeveless high-neck top/turtleneck
- Simple, elegant, minimalist
- Allows focus to remain on face
- Professional fashion styling

MAKEUP & STYLING:
- Professional editorial makeup
- Defined eyes with neutral/bronze eyeshadow tones
- Well-defined eyebrows (matching input person's natural brow shape)
- Natural-looking lashes or subtle enhancement
- Lips: natural nude/pink tone with slight gloss
- Skin: flawless but natural-looking finish
- Overall look: polished, sophisticated, high-fashion editorial

EXPRESSION & POSE:
- Direct eye contact with camera
- Confident, strong, editorial gaze
- Lips slightly parted in neutral/sultry expression
- Neck elongated, chin slightly down
- Shoulders visible, relaxed posture
- Arms positioned naturally (hands not visible or just touching hair/neck area)
- Overall demeanor: confident, poised, professional model energy

MANDATORY IDENTITY CONSTRAINTS:
✓ This is the SAME PERSON, not a lookalike
✓ Use ZERO generic features - every feature comes from input image
✓ Do NOT blend or average with other faces
✓ Do NOT "beautify" or "fix" features beyond professional makeup
✓ Do NOT make symmetrical if input is asymmetric
✓ Do NOT change ethnic characteristics
✓ Do NOT alter bone structure
✓ Do NOT modify facial proportions
✓ Hair color MUST match input (this is non-negotiable)
✓ Skin tone MUST match input exactly
✓ Every measurement and ratio must be preserved

VERIFICATION PROTOCOL:
Before finalizing, confirm:
1. Could their family recognize them instantly? (YES required)
2. Eye shape, color, and characteristics EXACTLY match input? (YES required)
3. Nose structure IDENTICAL to input in all dimensions? (YES required)
4. Lip shape and fullness PRECISE match to input? (YES required)
5. Face shape and proportions EXACT match? (YES required)
6. Hair color SAME as input? (YES required)
7. Skin tone IDENTICAL to input? (YES required)
8. Cheekbone and jaw structure match input? (YES required)
9. All unique features preserved? (YES required)
10. Is this THE SAME PERSON? (MUST be YES)

If ANY answer is NO → RESTART and copy features more precisely.

WHAT CHANGES vs INPUT:
- Setting: professional studio with burgundy backdrop
- Lighting: professional fashion photography lighting
- Hair styling: voluminous, flowing (but same COLOR as input)
- Clothing: black high-neck sleeveless top
- Makeup: professional editorial (enhancing, not changing features)
- Expression: confident editorial gaze
- Pose: front-facing with slight head tilt

WHAT NEVER CHANGES:
- Face structure (bone structure, proportions)
- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)
- Skin tone and undertone
- Hair color (CRITICAL - must match input exactly)
- Ethnic characteristics
- Eye color
- Natural facial asymmetries
- Unique identifying features (moles, marks, etc.)
- The fundamental DNA and identity of the face

OUTPUT REQUIREMENTS:
- 8K photorealistic quality
- Professional fashion/beauty editorial photography
- Studio lighting: soft, flattering, dimensional
- Background: solid deep burgundy/maroon red
- Sharp focus on face and eyes
- Natural skin texture visible (not over-retouched)
- Professional color grading with rich warm tones
- 85mm portrait lens equivalent, f/2.8
- Slight depth of field with background softly out of focus
- High-end fashion magazine aesthetic (Vogue, Harper's Bazaar style)
- The subject should be INSTANTLY recognizable as the person from input

CRITICAL REMINDERS:
- You are photographing an EXISTING person in a professional studio, not creating a new person
- Every facial feature is a direct copy from the input - no modifications
- "Similar" is failure - only "identical" is acceptable
- Hair COLOR from input is LOCKED - styling can change but color cannot
- Professional makeup enhances but does not alter underlying features
- Think of this as: "Same person, professional photoshoot with makeup and styling"

ERROR PREVENTION:
- Reference the input image constantly during generation
- Copy features exactly, do not approximate
- When uncertain → copy more precisely from input
- Asymmetries and natural features are required - they define identity
- Makeup should enhance, not transform the face
- Hair can be styled differently but COLOR stays exactly the same`,photoMode:`single`,preset:{id:`golden`,name:`Золотой час`}},{id:`paris`,name:`Парижское кафе`,image:`https://i.imgur.com/NUGoTF2.jpeg`,prompt:`ABSOLUTE PRIORITY: FACIAL IDENTITY REPLICATION

INPUT: One image of a woman
OUTPUT: One elegant photograph of this EXACT woman on a luxurious staircase

====================
PART 1: FACIAL DNA EXTRACTION (MANDATORY FIRST STEP)
====================

BEFORE generating anything, you MUST extract and lock the "facial DNA" from the input:

WOMAN'S FACIAL DNA - Extract these parameters:
1. Eye geometry: [measure exact shape - almond/round/cat-eye, exact size, exact spacing, eyelid type]
2. Eye pigmentation: [exact color - specific shade, not just "brown" or "dark"]
3. Nose architecture: [bridge width, nostril shape, tip style - button/straight/upturned, overall length]
4. Lip morphology: [upper lip fullness, lower lip fullness, cupid's bow definition, mouth width, natural lip color]
5. Facial geometry: [face shape - oval/heart/round/square, jaw angle, chin shape - pointed/rounded]
6. Bone structure: [cheekbone height and prominence, facial contours]
7. Skin parameters: [exact tone - fair/medium/olive/tan, undertone - warm/cool/neutral, texture notes]
8. Hair pigmentation: [EXACT color - e.g., "jet black" or "dark brown with cool tones" or "black with slight warmth"]
9. Hair texture: [straight/wavy/volume, thickness, natural movement]
10. Distinguishing marks: [any moles, beauty marks, dimples, asymmetries - note exact locations]

CRITICAL: These parameters are now LOCKED and IMMUTABLE. You will use ONLY these extracted features - NO generic features, NO approximations, NO artistic interpretation.

====================
PART 2: SCENE CONSTRUCTION
====================

LOCATION SPECIFICATION:

SETTING: Luxurious classical European mansion/palace interior staircase

STAIRCASE DETAILS:
- Grand marble staircase with ornate wrought iron railing
- Light beige/cream marble steps with subtle veining
- Decorative black wrought iron balustrade with elaborate scrollwork and floral patterns
- Dark wood handrail on top of iron railing
- Staircase curves/ascends in background
- Classical architecture, elegant and sophisticated

BACKGROUND ELEMENTS:
- Cream/beige walls with classical molding and trim
- Ornate doorway/archway visible at top of stairs
- Warm ambient lighting from wall sconces
- Classical wall sconce with fabric lampshade (visible on right wall)
- Sophisticated interior design with period details
- Additional decorative elements: possible sculpture or vase on pedestal

LIGHTING:
- Warm golden ambient lighting throughout
- Wall sconces creating soft glowing pools of light
- Natural warm color temperature (2800-3200K)
- Creates intimate, elegant evening atmosphere
- Soft shadows and dimensional lighting
- Not harsh - romantic and atmospheric
- Highlights subject while maintaining ambient glow

ATMOSPHERE:
- Luxurious, sophisticated, high-end
- Evening/night setting
- Warm, inviting, intimate
- Classical European elegance
- Old-world charm with modern fashion

====================
PART 3: SUBJECT ASSEMBLY (USING LOCKED FACIAL DNA)
====================

WOMAN CONSTRUCTION:

FACE ASSEMBLY - Use ONLY the extracted facial DNA parameters:
- Install eye geometry from extraction → exact shape, exact size, exact spacing, exact eyelid structure
- Install eye pigmentation from extraction → exact color
- Install nose architecture from extraction → exact bridge, nostrils, tip, length
- Install lip morphology from extraction → exact fullness, width, shape, cupid's bow
- Install facial geometry from extraction → exact face shape, jaw, chin
- Install bone structure from extraction → exact cheekbone placement and prominence
- Install skin parameters from extraction → exact tone and undertone
- Install distinguishing marks from extraction → exact positions

HAIR:
- Color: Use EXACT pigmentation from extraction (not approximate - the specific shade identified)
- Style: Long, flowing, voluminous
- Texture: Slightly wavy with natural body and movement
- Length: Past shoulders, reaching mid-back or lower
- Styling: Loose, tousled, natural-looking waves
- Falls over shoulders and down back
- Some strands around face
- Appears slightly windswept/naturally styled

MAKEUP:
- Natural to soft glam
- Defined but not heavy
- Subtle eye makeup - possibly light liner or neutral shadow
- Natural-looking lashes
- Well-groomed eyebrows matching natural shape from DNA
- Soft nude or pink lip color with slight gloss
- Fresh, dewy skin
- Subtle highlight on cheekbones
- Natural, elegant makeup enhancing features without transforming

OUTFIT - CRITICAL DETAILS:

TOP:
- Black sheer lace long-sleeve crop top
- Intricate floral/botanical lace pattern throughout
- See-through mesh/lace fabric
- Long sleeves extending to wrists
- OPEN BACK design - back is completely exposed/bare
- High neckline in front
- Cropped length - ends above natural waist, exposing midriff
- Elegant, sophisticated, evening wear

BOTTOM:
- High-waisted black wide-leg trousers or palazzo pants
- Sleek, tailored fit at waist
- Flowing wide legs
- Floor-length or near floor-length
- Clean, elegant silhouette
- Matches the sophistication of the lace top

STYLING:
- Elegant, high-fashion evening look
- Combination of delicate (lace) and structured (trousers)
- Shows skin strategically (open back, midriff)
- Sophisticated and refined

POSITION & POSE - SPECIFIC:

BODY POSITIONING:
- Standing on marble staircase, approximately 4-5 steps up from bottom
- Body oriented facing UP the stairs (back toward camera)
- Torso twisted to look back over shoulder at camera
- Left hand resting on wrought iron railing
- Right arm relaxed at side or touching hair
- Weight on right leg, left leg slightly behind or to side
- Elegant, elongated posture

HEAD & FACE:
- Head turned to look back over left shoulder
- Face in 3/4 back view toward camera
- Direct eye contact with camera over shoulder
- Chin slightly lifted
- Graceful neck line visible

EXPRESSION:
- Soft, confident gaze at camera
- Slight subtle smile or serene expression
- Elegant, poised, sophisticated
- Mysterious, alluring but refined
- Natural, not overly posed

BODY LANGUAGE:
- Relaxed but elegant stance
- One hand on railing for support/composition
- Back fully visible showing lace detail and bare skin
- Hair cascading down back
- Graceful, feminine posture
- Confident, editorial modeling energy

CAMERA ANGLE & FRAMING:
- Shot from below (photographer at bottom of stairs looking up)
- Medium-full shot showing subject from feet/calves up
- Captures staircase environment and architecture
- Subject positioned in lower third to middle of frame
- Staircase and background visible behind/above subject
- Vertical/portrait orientation
- Environmental portrait style

====================
PART 4: QUALITY ASSURANCE CHECKLIST
====================

BEFORE FINALIZING, verify EACH item = TRUE:

IDENTITY CHECK - WOMAN:
[ ] Eyes: EXACT match to extracted DNA (shape, color, all parameters)
[ ] Nose: EXACT match to extracted DNA (all dimensions)
[ ] Lips: EXACT match to extracted DNA (fullness, shape, width)
[ ] Face shape: EXACT match to extracted DNA
[ ] Cheekbones: EXACT match to extracted DNA
[ ] Hair color: EXACT match to extracted DNA (specific shade, not approximate)
[ ] Skin tone: EXACT match to extracted DNA
[ ] Unique features: All marks/asymmetries present from DNA
[ ] INSTANT RECOGNITION TEST: Her family/friends would say "that's her" not "looks like her"
[ ] Face recognition software would identify as same person

SETTING CHECK:
[ ] Grand marble staircase visible
[ ] Ornate wrought iron railing with scrollwork
[ ] Warm ambient lighting from wall sconces
[ ] Classical mansion/palace interior
[ ] Cream/beige walls with molding
[ ] Elegant, luxurious atmosphere

OUTFIT CHECK:
[ ] Black sheer lace long-sleeve crop top
[ ] Intricate lace pattern visible
[ ] OPEN BACK clearly visible (bare back showing)
[ ] High-waisted black wide-leg trousers
[ ] Midriff exposed between top and pants
[ ] Elegant, sophisticated styling

POSE CHECK:
[ ] Subject on staircase facing away, looking back over shoulder
[ ] Hand on wrought iron railing
[ ] 3/4 back view with face turned to camera
[ ] Hair flowing down back
[ ] Elegant, poised posture
[ ] Shot from below looking up stairs

PHOTOGRAPHY CHECK:
[ ] Portrait orientation (vertical)
[ ] Medium-full framing
[ ] Warm golden lighting
[ ] Sharp focus on subject
[ ] Environmental portrait showing setting
[ ] Professional editorial quality
[ ] 8K resolution

IF ANY CHECKBOX = FALSE → DO NOT PROCEED → REGENERATE WITH CORRECTIONS

====================
PART 5: EXECUTION PROTOCOL
====================

STEP 1: Study woman's input image for 20 seconds - extract facial DNA
STEP 2: Lock facial DNA profile - this is now immutable
STEP 3: Construct scene (luxurious staircase, warm lighting)
STEP 4: Assemble woman using ONLY her facial DNA (no generic features)
STEP 5: Position subject on staircase in over-shoulder pose
STEP 6: Run quality assurance checklist
STEP 7: If all checks pass → finalize
STEP 8: If any check fails → regenerate with corrections

CRITICAL SUCCESS CRITERIA:

1. IDENTITY PRECISION: Woman must be IDENTICAL to input (not similar - IDENTICAL)
   - Test: Would facial recognition software match her? YES required
   - Test: Would her family recognize her instantly? YES required
   - Test: Are you using her exact features or approximating? EXACT required

2. SETTING ACCURACY: Luxurious classical staircase environment
   - Test: Marble stairs with ornate iron railing? YES required
   - Test: Warm ambient lighting? YES required
   - Test: Elegant mansion interior? YES required

3. STYLING ACCURACY: Black lace crop top with open back + black trousers
   - Test: Sheer lace long-sleeve top? YES required
   - Test: Open back visible? YES required
   - Test: High-waisted black trousers? YES required

4. POSE ACCURACY: Over-shoulder look back pose on stairs
   - Test: Subject facing up stairs, looking back? YES required
   - Test: Hand on railing? YES required
   - Test: Shot from below? YES required

FAILURE STATES:
- "The woman looks similar to input" = FAILURE (must be identical)
- "I used some generic features" = FAILURE (only input features allowed)
- "Hair color is approximately right" = FAILURE (must be exact)
- "Back not visible" = FAILURE (open back is key element)

SUCCESS STATE:
- Woman is UNMISTAKABLY the same individual from input
- Elegant staircase setting captured
- Sophisticated styling and pose executed
- Professional editorial photography quality

COLOR GRADING:
- Warm golden tones throughout
- Romantic, luxurious atmosphere
- Subtle, sophisticated
- Natural warm skin tones
- Rich blacks in outfit
- Cream/beige architecture tones
- Intimate evening ambiance
- High-end fashion editorial aesthetic

OUTPUT: One 8K photorealistic photograph of this exact woman in an elegant over-shoulder pose on a luxurious classical staircase, wearing a black lace crop top with open back and black trousers.`,photoMode:`single`,preset:{id:`paris`,name:`Парижское кафе`}},{id:`coastal`,name:`Легкий люкс`,image:`https://i.imgur.com/tBqzTsp.jpeg`,prompt:`EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION

YOU ARE A COPY MACHINE, NOT AN ARTIST.
TASK: Transplant EXACT faces from inputs into Valentine's Cupid photoshoot.

====================
PART 1: FACIAL DNA EXTRACTION (MANDATORY - 60 SECONDS)
====================

Study EACH input for 30 seconds. Extract and LOCK exact DNA:

WOMAN'S FACIAL DNA - EXACT parameters (NO approximations):

1. Eye geometry:
   - Shape: [round? almond? cat-eye? upturned? - EXACT contour]
   - Size: [small/medium/large - EXACT]
   - Spacing: [close? medium? wide? - EXACT]
   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? hazel? green?]
   - Eyelid: [monolid? double? hooded? - EXACT]

2. Nose architecture:
   - Bridge: [narrow? medium? wide? - EXACT]
   - Tip: [button? straight? upturned? pointed? - EXACT]
   - Nostrils: [round? oval? tight? flared? - EXACT]
   - Length: [short? medium? long? - EXACT]

3. Lip morphology:
   - Upper lip: [thin? medium? full? - EXACT]
   - Lower lip: [thin? medium? full? - EXACT]
   - Ratio: [upper:lower - EXACT]
   - Cupid's bow: [sharp? soft? undefined? - EXACT]
   - Width: [narrow? medium? wide? - EXACT]

4. Facial geometry:
   - Shape: [oval? heart? diamond? round? square? - EXACT]
   - Jaw: [soft? defined? angular? - EXACT]
   - Chin: [pointed? rounded? small? prominent? - EXACT]

5. Bone structure:
   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT position]

6. Skin parameters:
   - Tone: [fair? light? medium? olive? tan? - EXACT]
   - Undertone: [warm? cool? neutral? - EXACT]

7. Hair pigmentation:
   - Color: [NOT "dark" - EXACT: jet black? dark brown? medium brown? with cool/warm tones?]
   - Texture: [straight? wavy? curly? - EXACT]
   - Length: [short? medium? long? - EXACT]

8. Proportions (measure):
   - Eye spacing ÷ face width = [ratio]
   - Nose width ÷ face width = [ratio]

MAN'S FACIAL DNA - EXACT parameters (NO approximations):

1. Eye geometry:
   - Shape: [round? almond? hooded? deep-set? - EXACT]
   - Size: [small/medium/large - EXACT]
   - Spacing: [close? medium? wide? - EXACT]
   - Color: [NOT "blue/brown" - EXACT: light blue? gray-blue? hazel? medium brown? dark brown?]
   - Eyelid: [monolid? double? hooded? - EXACT]

2. Nose architecture:
   - Bridge: [narrow? medium? wide? - EXACT]
   - Tip: [bulbous? pointed? button? straight? upturned? - EXACT]
   - Nostrils: [round? oval? flared? - EXACT]
   - Length: [short? medium? long? - EXACT]

3. Lip morphology:
   - Upper lip: [thin? medium? full? - EXACT]
   - Lower lip: [thin? medium? full? - EXACT]
   - Width: [narrow? medium? wide? - EXACT]

4. Facial geometry:
   - Shape: [square? oval? rectangular? round? - EXACT]
   - Jaw: [sharp angular? soft rounded? strong? - EXACT]
   - Chin: [pointed? rounded? square? prominent? - EXACT]

5. Bone structure:
   - Cheekbones: [high? medium? low? - EXACT]

6. Skin parameters:
   - Tone: [fair? light? medium? tan? - EXACT]
   - Undertone: [warm? cool? neutral? - EXACT]

7. Hair pigmentation:
   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? with warm/cool undertones?]
   - Style: [buzzed? short? textured? - EXACT]

8. Facial hair pattern:
   - Style: [clean-shaven? stubble? short beard? full beard? - EXACT]
   - Coverage: [chin? full face? mustache? - EXACT]
   - Color: [same as hair? darker? - EXACT]
   - Density: [sparse? medium? thick? - EXACT]

9. Proportions (measure):
   - Eye spacing ÷ face width = [ratio]
   - Nose width ÷ face width = [ratio]

DNA NOW LOCKED. IMMUTABLE. ZERO DEVIATION ALLOWED.

====================
PRE-GENERATION TEST
====================

Answer these BEFORE generating:
1. Woman's EXACT eye color? (not "brown" - specific shade)
2. Woman's EXACT hair color? (not "dark" - specific shade with tones)
3. Woman's EXACT nose shape? (specific structure, not "normal")
4. Man's EXACT eye color? (specific shade)
5. Man's EXACT hair color? (shade with undertones)
6. Man's EXACT facial hair? (style, coverage, density, color)

If ANY answer is vague → STUDY INPUTS AGAIN.

====================
PART 2: SCENE SPECIFICATION
====================

BACKGROUND: Pink draped fabric curtain (soft blush to rose pink), vertical folds

LIGHTING: Studio - soft, even, warm-neutral (3500-4000K), romantic

FLOOR: Light pink or white seamless

ATMOSPHERE: Playful, romantic, Valentine's/Cupid theme

====================
PART 3: ASSEMBLY USING LOCKED DNA
====================

WOMAN (CUPID) - Use ONLY locked DNA:

FACE:
- Install EXACT eye geometry + pigmentation from DNA
- Install EXACT nose architecture from DNA (ALL dimensions)
- Install EXACT lip morphology from DNA
- Install EXACT facial geometry from DNA
- Install EXACT bone structure from DNA
- Install EXACT skin parameters from DNA

HAIR:
- Install EXACT pigmentation from DNA (PRECISE shade, NOT "dark")
- Style: Long, flowing, wavy
- Center or off-center part
- Volume, movement, soft waves
- BUT COLOR EXACT FROM DNA

MAKEUP:
- Romantic feminine
- Soft pink eyeshadow
- Defined lashes
- Rosy blush
- Pink/rose lips with gloss

COSTUME:
- Pink satin corset (sweetheart neckline, lace-up front)
- White ruffled mini skirt (tiered pleats, tutu-style)
- White thigh-high stockings
- Pearl choker necklace (multiple strands)
- White/light heels
- Large white feathered ANGEL WINGS (spread behind)

PROP:
- White/silver Cupid bow
- White feathered arrow
- Red heart on arrow tip

POSE:
- Standing
- One leg slightly forward/raised
- Playful, flirtatious stance
- Looking down at man with smile
- Holding bow/arrow aimed at man
- Dynamic, energetic, confident

MAN - Use ONLY locked DNA:

FACE:
- Install EXACT eye geometry + pigmentation from DNA
- Install EXACT nose architecture from DNA (ALL dimensions)
- Install EXACT lip morphology from DNA
- Install EXACT facial geometry from DNA
- Install EXACT bone structure from DNA
- Install EXACT skin parameters from DNA
- Install EXACT facial hair from DNA (if present)

HAIR:
- Install EXACT pigmentation from DNA (PRECISE shade, NOT category)
- Style: Neat, groomed, professional

OUTFIT:
- Black tailored suit (jacket + trousers)
- White dress shirt
- Collar visible, no tie or open
- Black dress shoes

POSE:
- Sitting/kneeling on floor
- Looking up at woman
- Lower than woman (she stands, he sits)
- Engaged, interested expression
- Relaxed, attentive
- Leaning back on one arm
- Legs extended or crossed

DYNAMICS:
- Woman standing above/over man
- She aims arrow at him playfully
- He looks up admiringly
- Fun, flirtatious, romantic
- Valentine's "Cupid shooting love arrow" concept
- Lighthearted, playful energy

FRAMING: Portrait/vertical, full body both subjects, woman upper portion, man lower, wings visible

====================
VERIFICATION - ALL MUST BE "YES"
====================

WOMAN'S IDENTITY:
☐ Eyes: shape EXACTLY matches DNA?
☐ Eyes: color EXACTLY matches DNA (specific shade)?
☐ Nose: ALL dimensions EXACTLY match DNA?
☐ Lips: shape, fullness EXACTLY match DNA?
☐ Face shape: EXACTLY matches DNA?
☐ Jaw/chin: EXACTLY match DNA?
☐ Cheekbones: EXACTLY match DNA?
☐ Hair color: EXACTLY matches DNA (precise shade, not "dark")?
☐ Skin tone: EXACTLY matches DNA?
☐ Proportions: ratios match DNA?
☐ TEST: Would her mother say "That's her" instantly?

MAN'S IDENTITY:
☐ Eyes: shape EXACTLY matches DNA?
☐ Eyes: color EXACTLY matches DNA (specific shade)?
☐ Nose: ALL dimensions EXACTLY match DNA?
☐ Lips: EXACTLY match DNA?
☐ Face shape: EXACTLY matches DNA?
☐ Jaw: EXACTLY matches DNA?
☐ Facial hair: style, coverage, density, color ALL EXACTLY match DNA?
☐ Hair color: EXACTLY matches DNA (precise shade with undertones)?
☐ Skin tone: EXACTLY matches DNA?
☐ Proportions: ratios match DNA?
☐ TEST: Would his mother say "That's him" instantly?

SCENE:
☐ Pink draped backdrop?
☐ Woman in pink corset + white skirt + angel wings?
☐ Woman holding Cupid bow and arrow?
☐ Man in black suit?
☐ Man sitting/kneeling, woman standing?
☐ Playful Valentine's interaction?

IF ANY = NO → FAILED. REGENERATE USING EXACT DNA.

====================
EXECUTION PROTOCOL
====================

1. Study woman's face 30sec → extract DNA → LOCK
2. Study man's face 30sec → extract DNA → LOCK
3. Answer pre-generation test (verify knowledge)
4. Build woman using ONLY her locked DNA
5. Build man using ONLY his locked DNA
6. Position in Valentine's scene
7. Run verification checklist
8. All YES → finalize / Any NO → regenerate

====================
CRITICAL RULES
====================

1. HAIR COLORS: EXACT shades from DNA (not categories - EXACT tones)
2. FACIAL HAIR: EXACT style, coverage, density, color from DNA
3. FEATURES: EXACT shapes from DNA (not "similar" - EXACT)
4. PROPORTIONS: EXACT ratios from DNA
5. This is FACE TRANSPLANT, not similarity creation

====================
OUTPUT
====================

Professional Valentine's portrait: Woman as Cupid (pink corset, white skirt, angel wings, holding bow/arrow) standing, man in black suit sitting/kneeling looking up, pink draped backdrop, playful romantic interaction, 8K quality.

BOTH people: 100% EXACT match to inputs - facial recognition must confirm same individuals.

ZERO TOLERANCE FOR DEVIATION.
EXACT DNA REPLICATION REQUIRED.`,photoMode:`single`,preset:{id:`coastal`,name:`Прибрежный`}}]},{title:`💞 Парные`,packs:[{id:`love_story`,image:`https://i.imgur.com/BCriZGn.jpeg`,prompt:`ABSOLUTE PRIORITY: FACIAL IDENTITY REPLICATION

INPUT: Two separate images - one man, one woman
OUTPUT: Overhead photograph of these EXACT two people in elevator with mirror

====================
PART 1: FACIAL DNA EXTRACTION (MANDATORY - 60 SECONDS)
====================

Study EACH input for 30 seconds. Extract and LOCK exact DNA:

MAN'S FACIAL DNA - EXACT parameters (NO approximations):

1. Eye geometry:
   - Shape: [round? almond? hooded? deep-set? - describe EXACT contour]
   - Size: [small/medium/large relative to face - EXACT]
   - Spacing: [close-set? wide-set? - measure EXACT distance]
   - Color: [NOT "blue/brown" - EXACT: light blue? gray-blue? hazel? medium brown? dark brown?]
   - Eyelid: [monolid? double? hooded? - EXACT type]

2. Nose architecture:
   - Bridge: [narrow? medium? wide? - EXACT width]
   - Nostrils: [round? oval? flared? tight? - EXACT shape]
   - Tip: [bulbous? pointed? button? upturned? straight? downturned? - EXACT]
   - Length: [short? medium? long? - EXACT]

3. Lip morphology:
   - Upper lip: [thin? medium? full? - EXACT thickness]
   - Lower lip: [thin? medium? full? - EXACT thickness]
   - Ratio: [upper:lower proportion - EXACT]
   - Width: [narrow? medium? wide? - EXACT]
   - Cupid's bow: [defined? soft? flat? - EXACT]

4. Facial geometry:
   - Shape: [square? oval? rectangular? round? long? - EXACT]
   - Jaw: [sharp angular? soft rounded? strong? - EXACT angle]
   - Chin: [pointed? rounded? square? prominent? recessed? - EXACT]

5. Bone structure:
   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT position]

6. Skin parameters:
   - Tone: [fair? light? medium? tan? olive? - EXACT shade]
   - Undertone: [warm/golden? cool/pink? neutral? - EXACT]

7. Hair pigmentation:
   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? with warm/cool undertones?]
   - Style: [buzzed? short crop? textured? - EXACT]

8. Facial hair pattern:
   - Style: [clean-shaven? stubble? short beard? full beard? goatee? - EXACT]
   - Coverage: [chin only? full face? mustache? - EXACT areas]
   - Color: [same as hair? darker? - EXACT]
   - Density: [sparse? medium? thick? - EXACT]

9. Proportions (measure):
   - Eye spacing ÷ face width = [ratio]
   - Nose width ÷ face width = [ratio]

WOMAN'S FACIAL DNA - EXACT parameters (NO approximations):

1. Eye geometry:
   - Shape: [round? almond? cat-eye? upturned? downturned? - EXACT]
   - Size: [small/medium/large - EXACT]
   - Spacing: [close? medium? wide? - EXACT]
   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? hazel? amber?]
   - Eyelid: [monolid? double? hooded? - EXACT]

2. Nose architecture:
   - Bridge: [narrow? medium? wide? - EXACT]
   - Tip: [button? straight? upturned? pointed? - EXACT]
   - Nostrils: [round? oval? tight? - EXACT]
   - Length: [short? medium? long? - EXACT]

3. Lip morphology:
   - Upper lip: [thin? medium? full? - EXACT]
   - Lower lip: [thin? medium? full? - EXACT]
   - Ratio: [upper:lower - EXACT]
   - Cupid's bow: [sharp? soft? undefined? - EXACT]
   - Width: [narrow? medium? wide? - EXACT]

4. Facial geometry:
   - Shape: [oval? heart? diamond? round? square? - EXACT]
   - Jaw: [soft? defined? angular? - EXACT]
   - Chin: [pointed? rounded? small? prominent? - EXACT]

5. Bone structure:
   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT position]

6. Skin parameters:
   - Tone: [fair? light? medium? olive? tan? - EXACT]
   - Undertone: [warm? cool? neutral? - EXACT]

7. Hair pigmentation:
   - Color: [NOT "dark" - EXACT: jet black? dark brown? medium brown? with cool/warm tones?]
   - Texture: [straight? wavy? - EXACT]

8. Proportions (measure):
   - Eye spacing ÷ face width = [ratio]
   - Nose width ÷ face width = [ratio]

DNA NOW LOCKED. IMMUTABLE. ZERO DEVIATION PERMITTED.

====================
PRE-GENERATION TEST
====================

Before proceeding, answer:
1. Man's EXACT eye color? (not "blue" - specific shade)
2. Man's EXACT nose shape? (not "normal" - specific structure)
3. Man's EXACT facial hair? (not "beard" - style, coverage, density, color)
4. Man's EXACT hair color? (not "brown" - shade with undertones)
5. Woman's EXACT eye color? (not "brown" - specific shade)
6. Woman's EXACT hair color? (not "dark" - specific shade with tones)

If ANY answer is vague → STUDY INPUTS AGAIN. Do NOT proceed.

====================
PART 2: ELEVATOR SPECIFICATION
====================

CAMERA: Ceiling-mounted, 90° straight down (bird's eye view)

FLOOR:
- Light gray commercial vinyl/concrete (#C5C5C5 to #D3D3D3)
- Matte to slight sheen
- Clean, modern

WALLS (3 visible):

BACK WALL (behind subjects):
- FULL-LENGTH MIRROR (floor to ceiling)
- Reflects BACK VIEW of both subjects
- Shows: back of heads, shoulders, backs
- Realistic glass mirror quality
- Standard elevator mirror

LEFT WALL:
- Dark charcoal gray (#3A4A5A)
- Matte painted surface
- Flat, simple

RIGHT WALL:
- Dark charcoal gray (same as left)
- ONE horizontal brushed steel handrail
- Matte painted surface

FRONT WALL (doors):
- Not visible (outside frame from overhead angle)

LIGHTING:
- LED ceiling lights, 4500K cool white
- Even overhead distribution
- Soft shadows beneath subjects
- Standard elevator lighting (not dramatic)

MUST BE REAL: Office building elevator. NOT futuristic, NOT CGI, REAL.

====================
PART 3: ASSEMBLY USING LOCKED DNA
====================

MAN - Use ONLY locked DNA (NO generic features):

FACE:
- Install EXACT eye geometry + pigmentation from DNA
- Install EXACT nose architecture from DNA (ALL dimensions)
- Install EXACT lip morphology from DNA
- Install EXACT facial geometry from DNA (shape, jaw, chin)
- Install EXACT bone structure from DNA
- Install EXACT skin parameters from DNA

HAIR:
- Install EXACT pigmentation from DNA (PRECISE shade, NOT category)
- Style: Medium length, swept back, textured

FACIAL HAIR:
- Install EXACT pattern from DNA (style, coverage, density, color - ALL exact)

OUTFIT:
- Black suit jacket (tailored)
- White or light blue shirt
- Open collar
- Black dress shoes

POSITION:
- Right-of-center
- Facing forward/slightly toward woman
- Head tilted up, looking at ceiling camera
- Serious, intense upward gaze
- Confident, upright posture
- Back/shoulders visible in mirror reflection

WOMAN - Use ONLY locked DNA (NO generic features):

FACE:
- Install EXACT eye geometry + pigmentation from DNA
- Install EXACT nose architecture from DNA (ALL dimensions)
- Install EXACT lip morphology from DNA
- Install EXACT facial geometry from DNA (shape, jaw, chin)
- Install EXACT bone structure from DNA
- Install EXACT skin parameters from DNA

HAIR:
- Install EXACT pigmentation from DNA (PRECISE shade, NOT "dark")
- Style: Long, straight, sleek with blunt bangs
- Past shoulders, smooth

OUTFIT:
- Black sleeveless dress or top
- Form-fitting, sophisticated
- Bare shoulders
- Black shoes

POSITION:
- Left-of-center, slightly forward of man
- Facing forward
- Head tilted up, looking at ceiling camera
- Soft, serene upward gaze
- Graceful, elegant posture
- Back with long hair visible in mirror reflection

SPACING: 30-40cm gap between them, centered as pair

====================
VERIFICATION - ALL MUST BE "YES"
====================

MAN'S IDENTITY:
☐ Eyes: shape EXACTLY matches DNA?
☐ Eyes: color EXACTLY matches DNA (specific shade)?
☐ Nose: ALL dimensions EXACTLY match DNA?
☐ Lips: EXACTLY match DNA?
☐ Face shape: EXACTLY matches DNA?
☐ Jaw: EXACTLY matches DNA?
☐ Facial hair: style, coverage, density, color ALL EXACTLY match DNA?
☐ Hair color: EXACTLY matches DNA (precise shade, not approximation)?
☐ Skin tone: EXACTLY matches DNA?
☐ Proportions: ratios match DNA?
☐ TEST: Would his mother say "That's him" instantly?

WOMAN'S IDENTITY:
☐ Eyes: shape EXACTLY matches DNA?
☐ Eyes: color EXACTLY matches DNA (specific shade)?
☐ Nose: ALL dimensions EXACTLY match DNA?
☐ Lips: EXACTLY match DNA?
☐ Face shape: EXACTLY matches DNA?
☐ Jaw/chin: EXACTLY match DNA?
☐ Cheekbones: EXACTLY match DNA?
☐ Hair color: EXACTLY matches DNA (precise shade, not "dark")?
☐ Skin tone: EXACTLY matches DNA?
☐ Proportions: ratios match DNA?
☐ TEST: Would her mother say "That's her" instantly?

MIRROR:
☐ Full-length mirror on back wall?
☐ Clear reflections of both subjects' backs?
☐ Back of heads visible?
☐ Realistic glass mirror quality?

ELEVATOR REALISM:
☐ Looks like REAL photo in REAL elevator?
☐ Light gray floor?
☐ Dark walls?
☐ Standard LED lighting?
☐ NOT CGI/artificial?

CAMERA:
☐ Overhead angle (90° straight down)?
☐ Both subjects visible?
☐ Sharp focus on faces?

IF ANY = NO → FAILED. REGENERATE USING EXACT DNA.

====================
EXECUTION PROTOCOL
====================

1. Study man's face 30sec → extract DNA → LOCK
2. Study woman's face 30sec → extract DNA → LOCK
3. Answer pre-generation test (verify knowledge)
4. Build man using ONLY his locked DNA
5. Build woman using ONLY her locked DNA
6. Position in elevator
7. Add mirror with reflections
8. Run verification checklist
9. All YES → finalize / Any NO → regenerate

====================
CRITICAL RULES
====================

1. HAIR COLORS: EXACT shades from DNA (not categories - EXACT identified tones)
2. FACIAL HAIR: EXACT style, coverage, density, color from DNA
3. FEATURES: EXACT shapes from DNA (not "similar" - EXACT)
4. PROPORTIONS: EXACT ratios from DNA
5. MIRROR: Mandatory, must show back reflections
6. REALISM: Must look like REAL elevator photo

This is IDENTITY TRANSPLANT, not similarity creation.

====================
OUTPUT
====================

Overhead photograph (90° bird's eye): Man and woman standing in modern elevator with mirrored back wall, light gray floor, dark walls, cool LED lighting, both looking up at camera, professional quality, 8K.

BOTH people: 100% EXACT match to inputs - facial recognition must confirm same individuals.

ZERO TOLERANCE FOR DEVIATION.
EXACT DNA REPLICATION REQUIRED.
MIRROR WITH REFLECTIONS MANDATORY.
REAL ELEVATOR AESTHETIC REQUIRED.`,name:`История любви`,photoMode:`couple`,preset:{id:`love_story`,name:`История любви`}},{id:`sweet_moment`,image:`https://i.imgur.com/naZItyw.jpeg`,prompt:`ABSOLUTE PRIORITY: FACIAL IDENTITY REPLICATION

INPUT: Two separate images - one man, one woman
OUTPUT: One elegant couple portrait of these EXACT two people

====================
PART 1: FACIAL DNA EXTRACTION (MANDATORY - 60 SECONDS TOTAL)
====================

BEFORE generating ANYTHING, extract and LOCK facial DNA from BOTH inputs:

MAN'S FACIAL DNA - Study his face for 30 seconds, extract EXACT:

1. Eye geometry: 
   - Shape: [round? almond? hooded? deep-set? - EXACT contour]
   - Size: [small/medium/large relative to face]
   - Spacing: [close-set? wide-set? measure exact distance]
   - Color: [NOT "blue/brown" - EXACT shade: light blue? gray-blue? hazel? dark brown?]
   - Eyelid: [monolid? double? hooded? exact type]

2. Nose architecture:
   - Bridge width: [narrow? medium? wide? - EXACT]
   - Bridge height: [low? medium? high?]
   - Nostril shape: [round? oval? flared? - EXACT]
   - Tip shape: [bulbous? pointed? button? upturned? straight? - EXACT]
   - Overall length: [short? medium? long? - EXACT]

3. Lip morphology:
   - Upper lip: [thin? medium? full? - EXACT thickness]
   - Lower lip: [thin? medium? full? - EXACT thickness]
   - Ratio: [upper:lower proportion - EXACT]
   - Width: [narrow? medium? wide? - EXACT]
   - Cupid's bow: [defined? soft? flat? - EXACT]

4. Facial geometry:
   - Shape: [square? oval? rectangular? round? long? - EXACT]
   - Jaw: [sharp 90°? soft rounded? strong? delicate? - EXACT angle]
   - Chin: [pointed? rounded? square? prominent? recessed? - EXACT]
   - Width: [narrow? medium? wide? - EXACT]

5. Bone structure:
   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT position]
   - Face contours: [angular? soft? - EXACT]

6. Skin parameters:
   - Tone: [very fair? fair? light? medium? tan? olive? dark? - EXACT shade]
   - Undertone: [warm/golden? cool/pink? neutral? - EXACT]
   - Texture: [smooth? some texture? visible pores?]

7. Hair pigmentation:
   - Color: [NOT "brown/blonde" - EXACT: light brown? medium brown? dark brown? dirty blonde? ash blonde? golden blonde? with what undertones? warm? cool?]
   - Style: [buzzed? short crop? textured? length?]
   - Texture: [straight? wavy? thick? fine?]

8. Facial hair pattern:
   - Style: [clean-shaven? stubble? short beard? full beard? goatee? - EXACT]
   - Coverage: [just chin? full face? mustache? - EXACT areas]
   - Length: [5 o'clock shadow? 3mm? 1cm? - EXACT]
   - Density: [sparse? medium? thick? - EXACT]
   - Color: [same as hair? darker? lighter? graying? - EXACT]

9. Distinguishing marks:
   - Moles, scars, asymmetries: [note EXACT locations]

10. Proportions (measure ratios):
    - Eye spacing ÷ face width = [ratio]
    - Nose width ÷ face width = [ratio]
    - Face length ÷ face width = [ratio]

WOMAN'S FACIAL DNA - Study her face for 30 seconds, extract EXACT:

1. Eye geometry:
   - Shape: [round? almond? cat-eye? upturned? downturned? - EXACT]
   - Size: [small/medium/large relative to face]
   - Spacing: [close? medium? wide? - EXACT]
   - Color: [NOT "brown" - EXACT: light brown? medium brown? dark brown? hazel? green? amber?]
   - Eyelid: [monolid? double? hooded? - EXACT]

2. Nose architecture:
   - Bridge width: [narrow? medium? wide? - EXACT]
   - Nostril shape: [round? oval? tight? - EXACT]
   - Tip: [button? straight? upturned? pointed? - EXACT]
   - Length: [short? medium? long? - EXACT]

3. Lip morphology:
   - Upper lip: [thin? medium? full? - EXACT]
   - Lower lip: [thin? medium? full? - EXACT]
   - Fullness ratio: [upper:lower - EXACT]
   - Cupid's bow: [sharp? soft? undefined? - EXACT]
   - Width: [narrow? medium? wide? - EXACT]

4. Facial geometry:
   - Shape: [oval? heart? diamond? round? square? - EXACT]
   - Jaw: [soft? defined? angular? delicate? - EXACT]
   - Chin: [pointed? rounded? small? prominent? - EXACT]

5. Bone structure:
   - Cheekbones: [high? medium? low? prominent? subtle? - EXACT]
   - Position: [where exactly on face?]

6. Skin parameters:
   - Tone: [fair? light? medium? olive? tan? - EXACT shade]
   - Undertone: [warm? cool? neutral? - EXACT]

7. Hair pigmentation:
   - Color: [NOT "dark" - EXACT: jet black? dark brown? medium brown? with cool tones? warm tones?]
   - Texture: [straight? wavy? curly? fine? thick?]
   - Length: [short? medium? long? shoulder-length?]

8. Distinguishing marks:
   - Moles, dimples, asymmetries: [EXACT locations]

9. Proportions (measure ratios):
   - Eye spacing ÷ face width = [ratio]
   - Nose width ÷ face width = [ratio]
   - Face length ÷ face width = [ratio]

CRITICAL: DNA is now LOCKED. These are IMMUTABLE templates. ZERO deviation allowed.

====================
TEST BEFORE PROCEEDING
====================

Ask yourself:
1. Can I describe the man's EXACT eye color? (not "blue" - the specific shade)
2. Can I describe the man's EXACT nose shape? (not "normal" - the specific structure)
3. Can I describe the man's EXACT facial hair? (not "beard" - the specific style, length, coverage)
4. Can I describe the man's EXACT hair color? (not "brown" - the specific shade with undertones)
5. Can I describe the woman's EXACT eye shape? (not "almond" - the specific contour)
6. Can I describe the woman's EXACT hair color? (not "dark" - the specific shade)

If ANY answer is "no" or "approximately" → STUDY INPUTS AGAIN. Do NOT proceed.

====================
PART 2: SCENE CONSTRUCTION
====================

BACKGROUND: Dark charcoal to black gradient (#1A1A1A to #0D0D0D), professional studio backdrop

LIGHTING: 
- Main: Soft beauty light front-left 45°
- Fill: Gentle right fill
- Rim: Subtle edge light
- Temperature: Warm-neutral (3200-3800K)
- Effect: Flattering, editorial, catchlights in eyes

CAMERA: 85mm portrait lens, f/2.0-2.8, portrait orientation, waist-up framing

====================
PART 3: ASSEMBLY USING LOCKED DNA (NOT APPROXIMATION)
====================

MAN CONSTRUCTION:

FACE - Use ONLY locked DNA (NO generic features):
- Eyes: Install EXACT geometry + EXACT pigmentation from DNA
- Nose: Install EXACT architecture from DNA (bridge, tip, nostrils - ALL dimensions)
- Lips: Install EXACT morphology from DNA
- Face: Install EXACT geometry from DNA (shape, jaw, chin)
- Bones: Install EXACT structure from DNA (cheekbones)
- Skin: Install EXACT parameters from DNA (tone, undertone)

HAIR:
- Install EXACT pigmentation from DNA (the PRECISE shade identified, NOT approximation)
- Style: Short, groomed, professional

FACIAL HAIR:
- Install EXACT pattern from DNA (style, coverage, length, density, color - ALL exact)

OUTFIT:
- Black pinstripe suit (thin stripes)
- Black shirt underneath
- Silver chain necklace (medium, visible at neck)
- Silver bracelet
- Polished, sophisticated

POSE:
- Right side of frame
- Right arm around woman's waist
- Left hand holding woman's hand
- Looking at camera
- Confident, warm expression

WOMAN CONSTRUCTION:

FACE - Use ONLY locked DNA (NO generic features):
- Eyes: Install EXACT geometry + EXACT pigmentation from DNA
- Nose: Install EXACT architecture from DNA (ALL dimensions)
- Lips: Install EXACT morphology from DNA (shape, fullness, cupid's bow)
- Face: Install EXACT geometry from DNA (shape, jaw, chin)
- Bones: Install EXACT structure from DNA (cheekbones exact position)
- Skin: Install EXACT parameters from DNA (tone, undertone)

HAIR:
- Install EXACT pigmentation from DNA (the PRECISE shade identified, NOT "dark")
- Style: Long, voluminous waves over left shoulder
- Glossy, healthy, professional styling

MAKEUP:
- Professional glam
- Defined eyes, groomed brows
- Natural nude lip with gloss
- Glowing skin, subtle highlight

JEWELRY:
- Large crystal/diamond chandelier earrings
- Delicate necklace (optional)
- Bracelet, rings (optional)

OUTFIT:
- Black lace overlay dress
- Strapless/off-shoulder
- Nude underlayer visible through lace
- Elegant, form-fitting, glamorous

POSE:
- Left side of frame
- Body turned toward man (3/4 back)
- Looking over left shoulder at camera
- Right arm around man's torso
- Left hand holding man's hand
- Soft, elegant, confident expression

COUPLE DYNAMICS:
- Bodies touching, intimate embrace
- Man's arm around woman
- Hands clasped at waist
- Woman's head turned back to camera
- Natural, comfortable intimacy
- Balanced composition

====================
VERIFICATION - EVERY ITEM MUST BE "YES"
====================

MAN'S IDENTITY:
☐ Eyes: shape EXACTLY matches locked DNA?
☐ Eyes: color EXACTLY matches locked DNA (the specific shade)?
☐ Nose: ALL dimensions EXACTLY match locked DNA?
☐ Lips: shape and size EXACTLY match locked DNA?
☐ Face shape: EXACTLY matches locked DNA?
☐ Jaw angle: EXACTLY matches locked DNA?
☐ Chin: EXACTLY matches locked DNA?
☐ Cheekbones: position EXACTLY matches locked DNA?
☐ Facial hair: style, coverage, length, color ALL EXACTLY match locked DNA?
☐ Hair color: EXACTLY matches locked DNA (the precise shade, not category)?
☐ Skin tone: EXACTLY matches locked DNA?
☐ Proportions: eye spacing, nose width, all ratios match locked DNA?
☐ TEST: Would his mother say "That's him" instantly (not "looks like him")?

WOMAN'S IDENTITY:
☐ Eyes: shape EXACTLY matches locked DNA?
☐ Eyes: color EXACTLY matches locked DNA (the specific shade)?
☐ Nose: ALL dimensions EXACTLY match locked DNA?
☐ Lips: shape, fullness, cupid's bow EXACTLY match locked DNA?
☐ Face shape: EXACTLY matches locked DNA?
☐ Jaw/chin: EXACTLY match locked DNA?
☐ Cheekbones: position EXACTLY matches locked DNA?
☐ Hair color: EXACTLY matches locked DNA (the precise shade, not "dark")?
☐ Skin tone: EXACTLY matches locked DNA?
☐ Proportions: all ratios match locked DNA?
☐ TEST: Would her mother say "That's her" instantly (not "looks like her")?

COMPOSITION:
☐ Man in pinstripe suit + chain necklace?
☐ Woman in lace dress + chandelier earrings?
☐ Dark background?
☐ Intimate embrace pose?
☐ Woman looking over shoulder?
☐ Professional lighting?

IF ANY ANSWER IS "NO" → FAILED. REGENERATE USING EXACT LOCKED DNA.

====================
EXECUTION PROTOCOL
====================

1. Study man's face 30 sec → extract DNA → LOCK
2. Study woman's face 30 sec → extract DNA → LOCK
3. Verify you can describe EXACT features (not approximations)
4. Build man using ONLY his locked DNA
5. Build woman using ONLY her locked DNA
6. Position couple
7. Run verification checklist
8. If all YES → finalize
9. If any NO → regenerate with EXACT DNA copying

====================
CRITICAL RULES
====================

1. HAIR COLORS: Use EXACT shades from DNA (not categories - EXACT identified tones)
2. FACIAL HAIR: Use EXACT style, coverage, length, color from DNA
3. FEATURES: Use EXACT shapes from DNA (not "similar" - EXACT)
4. PROPORTIONS: Use EXACT ratios from DNA measurements
5. This is TRANSPLANT not SIMILARITY - same people in new photo

====================
OUTPUT
====================

Professional editorial portrait: Man (right) and woman (left) in elegant couple embrace, dark studio background, man in pinstripe suit with chain, woman in lace dress with chandelier earrings, warm studio lighting, 8K quality.

BOTH people: 100% EXACT identity match to inputs - facial recognition must confirm same individuals.

ZERO TOLERANCE FOR DEVIATION.
EXACT DNA REPLICATION REQUIRED.и`,name:`Нежный момент`,photoMode:`couple`,preset:{id:`sweet_moment`,name:`Нежный момент`}},{id:`dreamy_pink`,name:`День влюбленных`,image:`https://i.imgur.com/BPtlUnw.jpeg`,prompt:`EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION

YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.
YOUR ONLY JOB: COPY THE EXACT FACES FROM INPUT INTO NEW PHOTO.

====================
ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT'S EXPLICITLY LISTED
====================

INPUT: Two separate images - one woman, one man
OUTPUT: Valentine's/Cupid-themed couple photoshoot with these EXACT two people

WHAT CHANGES (ONLY THESE):
1. Setting → pink draped backdrop studio
2. Costumes → woman as Cupid (pink corset, angel wings), man in black suit
3. Props → Cupid's bow and arrow with heart
4. Pose → playful Valentine's theme interaction

WHAT NEVER CHANGES (EVERYTHING ELSE):
- EVERY facial feature of BOTH people
- EVERY hair COLOR characteristic of BOTH people
- EVERY skin characteristic of BOTH people
- EVERY unique detail of BOTH people

IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN'T CHANGE

====================
PART 1: FACE EXTRACTION FOR BOTH PEOPLE (MANDATORY)
====================

STEP 1: Open BOTH input images. Study each face for 30 seconds.

FOR THE WOMAN - LOCK THESE EXACT FEATURES:
- Exact eye shape, color, size, spacing, eyelid structure
- Exact eyebrow shape, thickness, color, arch
- Exact nose bridge, nostril shape, tip, length
- Exact lip shape, fullness, cupid's bow, width
- Exact face shape, jaw, chin
- Exact cheekbone position and prominence
- EXACT skin tone and undertone
- EXACT hair color (not "dark" - the PRECISE shade: black? Dark brown? Cool/warm tones?)
- Hair texture and characteristics
- Any unique marks or features

FOR THE MAN - LOCK THESE EXACT FEATURES:
- Exact eye shape, color, size, spacing, eyelid structure
- Exact eyebrow shape, thickness, color
- Exact nose bridge, nostril shape, tip, length
- Exact lip shape, fullness, width
- Exact face shape, jaw, chin
- Exact cheekbone position
- EXACT skin tone and undertone
- EXACT hair color (the PRECISE shade)
- Hair texture, style, hairline
- Facial hair (beard, stubble, clean-shaven - EXACT style from input)
- Any unique marks or features

CRITICAL: Both people's features are now LOCKED. NO CHANGES ALLOWED.

====================
PART 2: SCENE CONSTRUCTION
====================

SETTING - VALENTINE'S STUDIO:

BACKGROUND:
- Pink draped curtain/fabric backdrop
- Soft blush pink to rose pink gradient
- Fabric has vertical draping/folds
- Creates romantic, dreamy atmosphere
- Studio photography setup
- Clean, simple, focuses attention on subjects

LIGHTING:
- Professional studio lighting
- Soft, even illumination
- Creates slight shadows in fabric draping
- Warm-neutral color temperature (3500-4000K)
- Flattering, romantic lighting
- No harsh shadows on subjects

FLOOR/BASE:
- Light pink or white seamless floor
- Studio backdrop continuation
- Clean, professional

ATMOSPHERE:
- Playful, romantic, Valentine's Day theme
- Fun, lighthearted, whimsical
- Cupid and Valentine concept
- Professional themed photoshoot

====================
PART 3: SUBJECTS ASSEMBLY (USING LOCKED FEATURES)
====================

WOMAN CONSTRUCTION (CUPID):

FACE ASSEMBLY - Use ONLY extracted features from woman's input:
- Install EXACT eyes (shape, color, spacing)
- Install EXACT nose (all dimensions)
- Install EXACT lips (shape, fullness)
- Install EXACT face shape, jaw, chin
- Install EXACT cheekbones
- Install EXACT skin tone
- Install EXACT eyebrows

HAIR:
- COLOR: EXACT color from woman's input (DO NOT CHANGE - if black, stay black; if dark brown, stay exact shade)
- Style: Long, flowing, wavy
- Parted in center or slightly off-center
- Falls over shoulders with volume and movement
- Styled with soft waves or natural texture
- BUT COLOR MUST MATCH INPUT EXACTLY

MAKEUP:
- Romantic, feminine
- Soft pink eyeshadow tones
- Defined lashes
- Rosy blush on cheeks
- Pink or rose-toned lips with gloss
- Fresh, pretty, Valentine's aesthetic

COSTUME - CUPID OUTFIT:

CORSET:
- Pink satin or silk corset
- Sweetheart neckline with structured cups
- Lace-up front detail (ribbon lacing down center)
- Boned/structured for shape
- Romantic, feminine, lingerie-inspired

SKIRT:
- White ruffled mini skirt
- Tiered pleated layers
- Short length (mini)
- Fluffy, voluminous ruffles
- Ballet/tutu-inspired

ACCESSORIES:
- White thigh-high stockings
- Pearl choker necklace (multiple strands)
- White or light-colored heels/pumps
- Large white feathered ANGEL WINGS on back
- Wings spread out behind her

ANGEL WINGS:
- Large white feathered wings
- Attached to back/shoulders
- Spread wide creating dramatic silhouette
- Realistic feather texture
- Classic angel wing design

CUPID PROP:
- White/silver Cupid's bow (archery bow)
- White feathered arrow
- Red heart attached to arrow tip
- Held in hands as if shooting

WOMAN'S POSE:
- Standing position
- One leg slightly forward/raised
- Playful, flirtatious stance
- Looking down at man with smile
- Holding bow and arrow aimed playfully at man
- Dynamic, energetic pose
- Confident, fun expression

MAN CONSTRUCTION:

FACE ASSEMBLY - Use ONLY extracted features from man's input:
- Install EXACT eyes (shape, color, spacing)
- Install EXACT nose (all dimensions)
- Install EXACT lips (shape, fullness)
- Install EXACT face shape, jaw, chin
- Install EXACT cheekbones
- Install EXACT skin tone
- Install EXACT eyebrows
- Install EXACT facial hair (if present in input)

HAIR:
- COLOR: EXACT color from man's input (DO NOT CHANGE)
- Style: Neat, groomed, professional
- Styled appropriately for formal look
- BUT COLOR MUST MATCH INPUT EXACTLY

OUTFIT - FORMAL SUIT:

SUIT:
- Black tailored suit
- Classic fit, professional
- Suit jacket and trousers

SHIRT:
- White dress shirt
- Crisp, clean
- Collar visible
- No tie or open collar

SHOES:
- Black dress shoes
- Formal, polished

MAN'S POSE:
- Sitting/kneeling on floor
- Looking up at woman
- Positioned lower than woman (she's standing, he's sitting/kneeling)
- Engaged, looking at her with interest
- Relaxed but attentive posture
- Leaning back slightly on one arm
- Legs extended or crossed casually

INTERACTION & DYNAMICS:
- Woman standing above/over man
- She's playfully aiming Cupid's arrow at him
- He's looking up at her admiringly
- Fun, flirtatious, romantic dynamic
- Valentine's Day "Cupid shooting arrow of love" concept
- Lighthearted, playful energy between them

CAMERA & TECHNICAL:

FRAMING:
- Portrait orientation (vertical)
- Full body shot showing both subjects
- Woman in upper portion, man in lower portion
- Composition shows height difference (she standing, he sitting)
- Angel wings visible spread behind woman

CAMERA ANGLE:
- Straight-on, medium height
- Captures both subjects clearly
- Balanced composition

FOCUS:
- Both subjects in sharp focus
- Background slightly soft
- Professional photography quality
- Clear detail on costumes and props

====================
PART 4: PRE-GENERATION CHECKLIST
====================

FOR WOMAN:
[ ] I studied her face for 30+ seconds - YES required
[ ] I identified her EXACT hair color - YES required
[ ] I identified her EXACT facial features - YES required
[ ] I will use her EXACT features (not approximate) - YES required

FOR MAN:
[ ] I studied his face for 30+ seconds - YES required
[ ] I identified his EXACT hair color - YES required
[ ] I identified his EXACT facial features - YES required
[ ] I identified his EXACT facial hair situation - YES required
[ ] I will use his EXACT features (not approximate) - YES required

====================
PART 5: POST-GENERATION VERIFICATION
====================

WOMAN VERIFICATION:
1. Is her hair EXACTLY the same color as input? YES/NO
2. Are her eyes EXACTLY the same as input? YES/NO
3. Is her nose EXACTLY the same as input? YES/NO
4. Are her lips EXACTLY the same as input? YES/NO
5. Is her face shape EXACTLY the same as input? YES/NO
6. Is her skin tone EXACTLY the same as input? YES/NO

MAN VERIFICATION:
7. Is his hair EXACTLY the same color as input? YES/NO
8. Are his eyes EXACTLY the same as input? YES/NO
9. Is his nose EXACTLY the same as input? YES/NO
10. Are his lips EXACTLY the same as input? YES/NO
11. Is his face shape EXACTLY the same as input? YES/NO
12. Is his facial hair EXACTLY the same as input? YES/NO
13. Is his skin tone EXACTLY the same as input? YES/NO

COMPOSITION:
14. Pink draped backdrop? YES/NO
15. Woman in pink corset with angel wings? YES/NO
16. Woman holding Cupid bow and arrow? YES/NO
17. Man in black suit sitting/kneeling? YES/NO
18. Playful Valentine's interaction? YES/NO

IDENTITY:
19. Would both people be recognized by their families? YES/NO
20. Are these the SAME two people from inputs? YES required

If ANY answer is wrong → Regenerate with exact copying.

====================
FINAL DIRECTIVE
====================

DO NOT CHANGE HAIR COLORS FOR EITHER PERSON.
DO NOT CHANGE ANY FACIAL FEATURES FOR EITHER PERSON.
This is COPYING TWO FACES, not CREATING similar people.

====================
COLOR GRADING
====================

- Soft romantic pink tones
- Blush pink background
- White and pink costume elements
- Black suit contrast
- Warm, flattering skin tones
- Professional retouching maintaining natural features
- Valentine's/romantic aesthetic
- Playful, whimsical mood

OUTPUT: Professional Valentine's themed portrait of these EXACT two people from inputs (100% identity match for both), woman as Cupid with pink corset and angel wings holding bow and arrow, man in black suit, pink draped backdrop, playful romantic interaction, 8K quality.

ZERO TOLERANCE FOR DEVIATION.
EXACT COPY OF BOTH FACES REQUIRED.`,photoMode:`couple`,preset:{id:`dreamy_pink`,name:`Розовый сон`}},{id:`velvet_night`,name:`Темная студия`,image:`https://i.imgur.com/smv6FJI.jpeg`,prompt:`CRITICAL: EXACT FACE TRANSPLANT - NOT SIMILARITY, BUT IDENTITY CLONING

YOU ARE A PRECISION COPYING MACHINE.
TASK: Transplant EXACT faces from two input images into couple portrait.

====================
STEP 1: FORENSIC FACE ANALYSIS (60 SECONDS TOTAL)
====================

MAN'S FACE - Study for 30 seconds, lock EXACT:

EYES:
- Exact shape (round? almond? deep-set? hooded?)
- Exact color (blue? green? gray? hazel? brown? - PRECISE shade)
- Exact size relative to face
- Exact spacing between eyes
- Exact eyelid type

NOSE:
- Exact bridge width (narrow? medium? wide?)
- Exact length (short? medium? long?)
- Exact tip shape (bulbous? pointed? rounded? upturned? straight?)
- Exact nostril size and shape

LIPS:
- Exact thickness (thin? medium? full?)
- Exact width (narrow? medium? wide?)
- Exact shape when relaxed

FACE STRUCTURE:
- Exact face shape (oval? square? rectangular? round? long?)
- Exact jaw angle (sharp 90°? soft rounded? strong defined?)
- Exact chin shape (pointed? square? rounded? recessed? prominent?)
- Exact cheekbones (high? low? prominent? subtle?)

FACIAL HAIR:
- Exact style (clean-shaven? stubble? short beard? full beard? goatee?)
- Exact coverage area (just chin? full face? mustache?)
- Exact length and density
- Exact color (same as hair? different? darker? lighter?)

HAIR:
- EXACT color (not "brown" - light brown? medium brown? dark brown? dirty blonde? ash blonde? golden blonde? - the PRECISE shade with undertones)
- Exact style (buzzed? short crop? textured? slicked? messy?)
- Exact length

SKIN:
- Exact tone (very fair? fair? light? medium? tan? dark?)
- Exact undertone (warm/golden? cool/pink? neutral?)

PROPORTIONS:
- Eye-to-eye distance
- Eyes-to-nose distance
- Nose-to-lips distance
- Face width-to-length ratio

WOMAN'S FACE - Study for 30 seconds, lock EXACT:

EYES:
- Exact shape (round? almond? cat-eye? upturned? downturned?)
- Exact color (brown? dark brown? hazel? green? - PRECISE shade)
- Exact size relative to face
- Exact spacing between eyes
- Exact eyelid type (monolid? double? hooded?)

NOSE:
- Exact bridge width
- Exact length
- Exact tip shape (button? straight? slightly upturned? pointed?)
- Exact nostril size and shape

LIPS:
- Exact upper lip thickness
- Exact lower lip thickness
- Exact fullness ratio (upper vs lower)
- Exact cupid's bow definition
- Exact width

FACE STRUCTURE:
- Exact face shape (oval? heart? diamond? round? square?)
- Exact jaw shape (soft? defined? angular?)
- Exact chin shape (pointed? rounded? small? prominent?)
- Exact cheekbones (high? medium? subtle? prominent?)

HAIR:
- EXACT color (not "dark" - black? dark brown? medium brown? warm tones? cool tones? - the PRECISE shade)
- Exact texture (straight? wavy? curly?)
- Exact length

SKIN:
- Exact tone (fair? light? medium? olive? tan?)
- Exact undertone (warm? cool? neutral?)

PROPORTIONS:
- Eye-to-eye distance
- Eyes-to-nose distance
- Nose-to-lips distance
- Face width-to-length ratio

CRITICAL: These features are now FROZEN. NOT ONE PIXEL can deviate.

====================
STEP 2: SCENE SPECIFICATION
====================

BACKGROUND: Pure black (#000000), studio seamless backdrop

LIGHTING: Professional studio - main light front-left, clean, modern, neutral-cool (4500K)

MAN - Left side of frame:
- Black crew neck t-shirt
- Black pants
- Standing upright, straight posture
- Arms at sides, relaxed
- Looking directly at camera
- Serious, confident expression
- NO TATTOOS (default - clean skin on neck and arms)

WOMAN - Right side of frame:
- Black long-sleeve fitted top
- Black pants
- Standing upright
- Right hand raised near face/chin (elegant gesture)
- Left arm at side
- Looking directly at camera
- Confident, composed expression
- Small hoop earrings
- NO TATTOOS (default)

POSITIONING:
- Man on left, woman on right
- Standing close but not touching
- Both facing camera straight-on
- Equal prominence
- Centered in frame

FRAMING: Portrait orientation, waist-up, both subjects fully visible

====================
STEP 3: GENERATION PROTOCOL - EXACT COPYING
====================

FOR MAN:
1. Open his input image
2. Stare at face for 15 seconds
3. Ask: "What makes HIS face unique and recognizable?"
4. Use EXACT eye shape you see (not generic eyes)
5. Use EXACT nose you see (not generic nose)
6. Use EXACT lips you see (not generic lips)
7. Use EXACT face shape you see (not generic face)
8. Use EXACT jaw you see (his specific jaw, not idealized)
9. Use EXACT hair color you see (the precise shade, not category)
10. Use EXACT facial hair you see (his exact style and coverage)

TEST: If you showed this to his mother, would she say "That's my son" instantly?
If NO → You failed. Start over with exact copying.

FOR WOMAN:
1. Open her input image
2. Stare at face for 15 seconds
3. Ask: "What makes HER face unique and recognizable?"
4. Use EXACT eye shape you see (not generic eyes)
5. Use EXACT nose you see (not generic nose)
6. Use EXACT lips you see (not generic lips)
7. Use EXACT face shape you see (not generic face)
8. Use EXACT jaw/chin you see (her specific structure)
9. Use EXACT hair color you see (the precise shade, not category)

TEST: If you showed this to her mother, would she say "That's my daughter" instantly?
If NO → You failed. Start over with exact copying.

====================
VERIFICATION CHECKLIST - BEFORE FINALIZING
====================

MAN'S IDENTITY (ALL MUST BE "EXACT MATCH"):
☐ Eyes: shape matches input? Color matches input?
☐ Nose: all dimensions match input?
☐ Lips: shape and size match input?
☐ Face shape: matches input?
☐ Jaw angle: matches input?
☐ Chin: matches input?
☐ Facial hair: EXACT style and color from input?
☐ Hair color: EXACT shade from input (not approximation)?
☐ Skin tone: EXACT from input?
☐ Proportions: eye spacing, feature distances all match?

WOMAN'S IDENTITY (ALL MUST BE "EXACT MATCH"):
☐ Eyes: shape matches input? Color matches input?
☐ Nose: all dimensions match input?
☐ Lips: shape, fullness match input?
☐ Face shape: matches input?
☐ Jaw/chin: matches input?
☐ Cheekbones: match input?
☐ Hair color: EXACT shade from input (not approximation)?
☐ Skin tone: EXACT from input?
☐ Proportions: eye spacing, feature distances all match?

SCENE:
☐ Black background?
☐ Both in black clothing?
☐ Man left, woman right?
☐ Woman's hand near face?
☐ Both looking at camera?

FINAL TEST:
☐ Would facial recognition AI identify both as same people from inputs?
☐ Would their families recognize them instantly?
☐ Are these THE SAME two people (not lookalikes)?

IF ANY CHECKBOX = NO → REGENERATE WITH EXACT COPYING

====================
CRITICAL RULES - READ THREE TIMES
====================

1. HAIR COLOR: Copy the EXACT shade you see in input - not "brown" or "blonde" but the SPECIFIC tone visible
   - Man's hair: Look closely, identify precise shade, USE THAT EXACT SHADE
   - Woman's hair: Look closely, identify precise shade, USE THAT EXACT SHADE

2. FACIAL FEATURES: Copy EXACT shapes - not "similar" shapes
   - If man has strong square jaw → output has strong square jaw
   - If man has narrow nose → output has narrow nose
   - If woman has full lips → output has full lips
   - Copy what you SEE, don't idealize

3. FACIAL HAIR (men): Copy EXACT style visible in input
   - Clean-shaven in input? → Clean-shaven in output
   - Stubble in input? → Stubble in output (same density, color)
   - Beard in input? → Beard in output (same length, coverage, color)

4. PROPORTIONS: Copy EXACT measurements
   - Eye spacing from input → same spacing in output
   - Face width:length from input → same ratio in output
   - Feature sizes relative to face → maintain exact ratios

5. NO TATTOOS: Unless explicitly visible in input, do NOT add tattoos

6. NO "IMPROVEMENTS": Do NOT make faces more symmetric, more idealized, more beautiful
   - Copy asymmetries
   - Copy unique characteristics
   - Copy "imperfections" - they define identity

====================
THINK LIKE THIS
====================

WRONG: "Create a man and woman who look generally like the inputs"
RIGHT: "Transplant the exact faces from inputs into this new scene"

WRONG: "Man has brown hair and beard"
RIGHT: "Man has THIS specific shade of medium-warm brown hair with THIS exact short beard style"

WRONG: "Woman has dark hair and brown eyes"
RIGHT: "Woman has THIS specific shade of cool-toned dark brown hair with THESE exact almond-shaped medium brown eyes"

WRONG: "Similar facial structure"
RIGHT: "IDENTICAL facial structure - every angle, proportion, and feature"

====================
OUTPUT SPECIFICATION
====================

Professional editorial portrait: Man (left) and woman (right) standing side by side against pure black background, both in black clothing, clean studio lighting, modern aesthetic, woman's hand near face, both looking at camera with confident expressions.

MAN: EXACT face from input - every feature, proportion, color precisely replicated
WOMAN: EXACT face from input - every feature, proportion, color precisely replicated

Quality: 8K, sharp focus, professional photography

ZERO TOLERANCE FOR DEVIATION FROM INPUT FACES.
THIS IS IDENTITY CLONING, NOT SIMILARITY CREATION.`,photoMode:`couple`,preset:{id:`velvet_night`,name:`Бархатная ночь`}}]},{title:`🌸 Цветочные`,packs:[{id:`dreamy_pink`,name:`Розовый сон`,image:`https://i.imgur.com/bQuqsnZ.jpeg`,prompt:`EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION

YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.
YOUR ONLY JOB: COPY THE EXACT FACE FROM INPUT INTO NEW PHOTO.

====================
ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT'S EXPLICITLY LISTED
====================

WHAT CHANGES (ONLY THESE):
1. Background → black studio backdrop
2. Lighting → dramatic warm lighting
3. Pose → holding roses, eyes closed
4. Clothing → may be different (obscured anyway)

WHAT NEVER CHANGES (EVERYTHING ELSE):
- EVERY facial feature
- EVERY hair characteristic  
- EVERY skin characteristic
- EVERY unique detail

IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN'T CHANGE

====================
PART 1: FACE EXTRACTION (MANDATORY)
====================

STEP 1: Open input image. Stare at the face for 30 full seconds.

STEP 2: Ask yourself - what makes THIS specific person recognizable?
- Not "she has brown hair" → What EXACT shade? Highlights? Undertones?
- Not "she has a nose" → What is UNIQUE about THIS nose?
- Not "she has eyes" → What makes THESE eyes different from all other eyes?

STEP 3: LOCK THE FOLLOWING (exact measurements):

EYES - NO CHANGES ALLOWED:
- Exact shape from input (copy, don't interpret)
- Exact color from input (not "brown" - the PRECISE shade visible)
- Exact size from input
- Exact spacing from input
- Exact eyelid structure from input
- IF INPUT HAS: hooded lids → output has hooded lids
- IF INPUT HAS: double lids → output has double lids
- IF INPUT HAS: close-set eyes → output has close-set eyes
- COPY EXACTLY, DO NOT "IMPROVE" OR "STANDARDIZE"

EYEBROWS - NO CHANGES ALLOWED:
- Exact shape from input (every curve, every angle)
- Exact thickness from input
- Exact color from input
- Exact arch position from input
- If input has sparse brows → output has sparse brows
- If input has thick brows → output has thick brows
- COPY EXACTLY

NOSE - NO CHANGES ALLOWED:
- Exact bridge width from input
- Exact nostril shape from input
- Exact tip shape from input
- Exact length from input
- If input has wide nose → output has wide nose
- If input has narrow nose → output has narrow nose
- If input has bump on bridge → output has bump on bridge
- COPY EXACTLY, INCLUDING "IMPERFECTIONS"

LIPS - NO CHANGES ALLOWED:
- Exact upper lip shape from input
- Exact lower lip shape from input
- Exact fullness ratio from input
- Exact cupid's bow from input
- Exact width from input
- If input has thin lips → output has thin lips
- If input has asymmetric lips → output has asymmetric lips
- COPY EXACTLY

FACE SHAPE - NO CHANGES ALLOWED:
- Exact face outline from input
- Exact jaw shape from input
- Exact chin shape from input
- Exact face width from input
- Exact face length from input
- If input has round face → output has round face
- If input has square jaw → output has square jaw
- COPY EXACTLY

CHEEKBONES - NO CHANGES ALLOWED:
- Exact position from input
- Exact prominence from input
- If input has high cheekbones → output has high cheekbones
- If input has subtle cheekbones → output has subtle cheekbones
- COPY EXACTLY

SKIN - NO CHANGES ALLOWED:
- EXACT tone from input (not "similar" - EXACT)
- EXACT undertone from input (warm/cool/neutral - match precisely)
- Any moles → copy exact positions
- Any marks → copy exact positions
- Skin texture → match input
- DO NOT "SMOOTH" OR "PERFECT" - COPY AS IS

HAIR - ABSOLUTE ZERO CHANGES ALLOWED:
This is where you keep failing. Read carefully:

HAIR COLOR - FORBIDDEN TO CHANGE:
- Look at input hair color for 10 seconds
- What is the EXACT shade? Light brown? Medium brown? Dark brown? Black? Auburn? Ash? Warm? Cool?
- Does it have highlights? Lowlights? Dimension? Multiple tones?
- Lock this EXACT color
- In output: USE THAT EXACT COLOR - DO NOT:
  * Make it darker
  * Make it lighter  
  * Change the undertone
  * Remove dimension
  * Add dimension that wasn't there
  * "Standardize" to generic brown/black
- IF INPUT = light brown with caramel tones → OUTPUT = light brown with caramel tones
- IF INPUT = dark brown with cool tones → OUTPUT = dark brown with cool tones
- IF INPUT = black → OUTPUT = black
- NO EXCEPTIONS. ZERO TOLERANCE.

HAIR LENGTH - FORBIDDEN TO CHANGE:
- Look at input hair length
- Shoulder-length? Mid-back? Long? Short? Bob?
- Lock this exact length
- Output MUST match - DO NOT:
  * Make it longer
  * Make it shorter
  * "Adjust for composition"
- EXACT LENGTH FROM INPUT

HAIR TEXTURE - FORBIDDEN TO CHANGE:
- Look at input hair texture
- Straight? Wavy? Curly? Fine? Thick? Coarse?
- Lock this exact texture
- Output MUST match - DO NOT:
  * Make straight hair wavy
  * Make wavy hair straight
  * Change thickness
  * Change volume
- EXACT TEXTURE FROM INPUT

HAIR STYLE - LIMITED CHANGES ALLOWED:
- Input style can be adapted to: sleek straight bob with bangs for this photo
- BUT: color, length category, and texture CANNOT change
- Example: If input has wavy shoulder-length light brown hair → output can style it sleek, BUT it stays shoulder-length light brown with natural wave texture capability

BANGS/FRINGE:
- Can add straight-across bangs for this specific photo composition
- But bangs must be in the EXACT hair color from input
- No color changes allowed even for bangs

CRITICAL HAIR RULE:
Before generating, ask: "Am I using the EXACT hair color from input, or am I changing it even slightly?"
If answer is "changing it" → STOP. Use exact input color.

====================
PART 2: SCENE (minimal description - focus is on identity)
====================

Background: Pure black (#000000)
Lighting: Warm dramatic from above-left (2800-3000K)
Roses: 7-10 red roses held at chest level
Expression: Eyes gently closed, peaceful
Pose: Head tilted slightly down toward roses
Hands: Both hands holding rose stems
Upper body visible, shoulders bare/obscured

====================
PART 3: ASSEMBLY WITH ZERO DEVIATION
====================

Take the face you analyzed.
Place it in the new scene.
Change NOTHING about the face.
Change NOTHING about the hair color.
Change NOTHING about the skin tone.

Think: "Photoshop cut-and-paste" - you're cutting the exact face from input and pasting into new background.

NOT: "Create similar person in new scene"
YES: "Move exact same person to new scene"

====================
PART 4: PRE-GENERATION CHECKLIST
====================

Before you generate, answer honestly:

[ ] I studied the input face for 30+ seconds - YES required
[ ] I identified the EXACT hair color (specific shade) - YES required
[ ] I identified EXACT eye color - YES required  
[ ] I identified EXACT nose shape - YES required
[ ] I identified EXACT lip shape - YES required
[ ] I identified EXACT face shape - YES required
[ ] I identified EXACT skin tone - YES required
[ ] I will use EXACT hair color (not change it) - YES required
[ ] I will use EXACT features (not approximate) - YES required
[ ] I understand this is COPY not CREATE - YES required

If ANY answer is NO → Study input more, do not generate yet

====================
PART 5: POST-GENERATION VERIFICATION
====================

After generating, ask:

HAIR CHECK (most common failure point):
1. Is the hair EXACTLY the same color as input? (not similar - EXACT) YES/NO
2. Did I darken the hair color? NO required
3. Did I lighten the hair color? NO required
4. Did I change the undertone? NO required
5. Is it the SAME shade I see in input? YES required

FACE CHECK:
6. Are these the SAME eyes from input? YES/NO
7. Is this the SAME nose from input? YES/NO
8. Are these the SAME lips from input? YES/NO
9. Is this the SAME face shape from input? YES/NO
10. Is this the SAME skin tone from input? YES/NO

IDENTITY CHECK:
11. Would the input person's best friend say "that's her"? YES/NO
12. Would facial recognition match this to input? YES/NO
13. Is this the SAME PERSON or a lookalike? SAME required

If ANY answer is wrong → You failed. Regenerate with exact copying.

====================
FAILURE PATTERNS TO AVOID
====================

COMMON MISTAKES YOU KEEP MAKING:

❌ "Input has medium brown hair, I'll make it dark brown for drama" → FORBIDDEN
✅ "Input has medium brown hair, output has medium brown hair" → CORRECT

❌ "Input hair is a bit messy, I'll make it sleeker" → Color must stay exact
✅ "I'll style it sleek but keep EXACT color from input" → CORRECT

❌ "Input has subtle nose bump, I'll smooth it" → FORBIDDEN  
✅ "Input has subtle nose bump, I copy it exactly" → CORRECT

❌ "Input eyes are slightly asymmetric, I'll make them symmetric" → FORBIDDEN
✅ "Input eyes are slightly asymmetric, I keep the asymmetry" → CORRECT

❌ "This feature isn't perfect, I'll improve it" → FORBIDDEN
✅ "I copy every feature exactly as is, including imperfections" → CORRECT

====================
FINAL DIRECTIVE
====================

Your success is measured by ONE metric:
"Can the input person look at this output and say 'That's a photo of ME'"?

Not: "That looks like me"
Not: "That's similar to me"  
YES: "That IS me"

Hair color is the #1 failure point. 
DO NOT CHANGE HAIR COLOR.
DO NOT CHANGE HAIR COLOR.
DO NOT CHANGE HAIR COLOR.

I don't care if you think a different color would look better.
I don't care if you think it needs to be darker for contrast.
I don't care about artistic vision.

USE THE EXACT HAIR COLOR FROM INPUT.

Same for every other feature.
This is COPYING, not CREATING.

====================
EXECUTION
====================

1. Study input for 30 seconds minimum
2. Lock every feature (especially hair color)
3. Generate scene with EXACT features
4. Run verification checklist  
5. If verification fails → regenerate with exact copying

OUTPUT: A photograph of the EXACT SAME PERSON from input (100% identity match), holding red roses, eyes closed, black background, warm lighting, professional 8K quality.

ZERO TOLERANCE FOR DEVIATION.
EXACT COPY REQUIRED.`,photoMode:`single`,preset:{id:`dreamy_pink`,name:`Розовый сон`}},{id:`velvet_night`,name:`Нежный букет`,image:`https://i.imgur.com/fTUpi38.jpeg`,prompt:`EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION

YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.
YOUR ONLY JOB: COPY THE EXACT FACE FROM INPUT INTO NEW PHOTO.

====================
ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT'S EXPLICITLY LISTED
====================

WHAT CHANGES (ONLY THESE):
1. Background → warm neutral/beige studio backdrop
2. Lighting → soft natural warm window light
3. Pose → holding bouquet of roses in front of lower face
4. Flowers → pastel roses (cream, blush pink, peach)

WHAT NEVER CHANGES (EVERYTHING ELSE):
- EVERY facial feature
- EVERY hair characteristic  
- EVERY skin characteristic
- EVERY unique detail

IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN'T CHANGE

====================
PART 1: FACE EXTRACTION (MANDATORY)
====================

STEP 1: Open input image. Stare at the face for 30 full seconds.

STEP 2: LOCK THE FOLLOWING (exact measurements):

EYES - NO CHANGES ALLOWED:
- Exact shape from input (copy, don't interpret)
- Exact color from input (green? Blue-green? Hazel? The PRECISE shade visible)
- Exact size from input
- Exact spacing from input
- Exact eyelid structure from input
- COPY EXACTLY, DO NOT "IMPROVE" OR "STANDARDIZE"

EYEBROWS - NO CHANGES ALLOWED:
- Exact shape from input (every curve, every angle)
- Exact thickness from input
- Exact color from input
- Exact arch position from input
- COPY EXACTLY

NOSE - NO CHANGES ALLOWED:
- Exact bridge width from input
- Exact nostril shape from input
- Exact tip shape from input
- Exact length from input
- COPY EXACTLY, INCLUDING "IMPERFECTIONS"

LIPS - NO CHANGES ALLOWED:
- Exact upper lip shape from input
- Exact lower lip shape from input
- Exact fullness ratio from input
- Exact cupid's bow from input
- Exact width from input
- COPY EXACTLY

FACE SHAPE - NO CHANGES ALLOWED:
- Exact face outline from input
- Exact jaw shape from input
- Exact chin shape from input
- Exact face width from input
- COPY EXACTLY

CHEEKBONES - NO CHANGES ALLOWED:
- Exact position from input
- Exact prominence from input
- COPY EXACTLY

SKIN - NO CHANGES ALLOWED:
- EXACT tone from input (not "similar" - EXACT)
- EXACT undertone from input (warm/cool/neutral - match precisely)
- Any moles → copy exact positions
- DO NOT "SMOOTH" OR "PERFECT" - COPY AS IS

HAIR - ABSOLUTE ZERO CHANGES ALLOWED:

HAIR COLOR - FORBIDDEN TO CHANGE:
- Look at input hair color for 10 seconds
- What is the EXACT shade? Light brown? Dirty blonde? Dark blonde? Honey blonde? Ash brown? Warm tones? Cool tones?
- Does it have highlights? Lowlights? Dimension? Multiple tones?
- Lock this EXACT color
- In output: USE THAT EXACT COLOR - DO NOT:
  * Make it darker
  * Make it lighter  
  * Change the undertone
  * Remove dimension
  * Add dimension that wasn't there
- IF INPUT = light brown with golden highlights → OUTPUT = light brown with golden highlights
- IF INPUT = dark blonde with dimension → OUTPUT = dark blonde with dimension
- NO EXCEPTIONS. ZERO TOLERANCE.

HAIR LENGTH - FORBIDDEN TO CHANGE:
- Look at input hair length
- Appears to be shoulder-length or just past shoulders
- Lock this exact length
- Output MUST match - DO NOT make it longer or shorter

HAIR TEXTURE - FORBIDDEN TO CHANGE:
- Look at input hair texture
- Appears to have natural wave/slight texture
- Lock this exact texture
- Output MUST match

HAIR STYLE - LIMITED CHANGES ALLOWED:
- Can be styled swept back or to side with some volume
- Some strands around face/falling naturally
- Tousled, natural, effortless look
- BUT: color, length, and base texture CANNOT change

CRITICAL HAIR RULE:
Before generating, ask: "Am I using the EXACT hair color from input, or am I changing it even slightly?"
If answer is "changing it" → STOP. Use exact input color.

====================
PART 2: SCENE CONSTRUCTION
====================

BACKGROUND:
- Warm neutral background (beige/cream/soft tan tones)
- Soft gradient or subtle texture
- Out of focus, bokeh effect
- Natural, warm, inviting atmosphere
- Possibly suggestion of window light on wall

LIGHTING - NATURAL SOFT LIGHT:
- Soft natural window light from left side
- Warm golden hour quality (3000-3500K)
- Diffused, gentle, flattering
- Creates soft shadows for dimension
- Not harsh - romantic and soft
- Warm glow on skin
- Highlights on hair creating natural shine

ATMOSPHERE:
- Romantic, soft, feminine
- Natural beauty aesthetic
- Warm and inviting
- Elegant, timeless
- Fresh and natural

====================
PART 3: SUBJECT ASSEMBLY (USING LOCKED FEATURES)
====================

WOMAN CONSTRUCTION:

FACE ASSEMBLY - Use ONLY the extracted features:
- Install EXACT eyes from input (shape, color, spacing)
- Install EXACT nose from input (all dimensions)
- Install EXACT lips from input (shape, fullness, width)
- Install EXACT face shape from input
- Install EXACT cheekbones from input
- Install EXACT skin tone from input
- Install EXACT eyebrows from input

HAIR:
- Use EXACT color from input (the specific shade identified)
- Style: Tousled, swept back/to side with volume
- Some strands falling around face
- Natural, effortless, slightly messy-chic
- Texture: Natural wave/movement
- BUT COLOR STAYS EXACT FROM INPUT

MAKEUP:
- Natural, soft glam
- Defined but not heavy
- Soft neutral eyeshadow (warm tones)
- Defined lashes (natural or subtle enhancement)
- Well-groomed eyebrows matching natural shape
- Soft nude-pink lip color with slight gloss
- Fresh, dewy skin with warm glow
- Subtle highlight on cheekbones
- Natural, radiant beauty look

JEWELRY:
- Small gold hoop earrings visible
- Simple, delicate, elegant

EXPRESSION:
- Direct eye contact with camera
- Soft, serene, confident gaze
- Slight subtle smile or neutral peaceful expression
- Relaxed, natural, genuine
- Romantic, dreamy mood

ROSES & BOUQUET - CRITICAL ELEMENT:

FLOWER DETAILS:
- Large luxurious bouquet
- Mix of PASTEL-colored roses:
  * Cream/ivory white roses (3-4)
  * Soft blush pink roses (4-5)
  * Peachy-pink roses (3-4)
  * Light champagne/nude roses (2-3)
- Total: approximately 12-15 roses visible
- Fully bloomed, fresh, perfect condition
- Multiple layers of soft petals
- Some green leaves visible
- Professional florist quality
- Romantic, elegant, soft color palette

BOUQUET POSITIONING:
- Held in front of lower face (covering chin, mouth, lower cheeks)
- Roses positioned from just below nose level down to chest
- Upper face fully visible (eyes, forehead, most of nose visible)
- Lower face partially obscured by flowers
- Both hands holding stems (not clearly visible, obscured by flowers)
- Bouquet creates beautiful frame around face
- Flowers fill lower portion of frame

BODY & POSE:

POSITIONING:
- Upper body visible (shoulders, upper chest)
- Bare shoulders visible or soft neutral-toned top
- Straight-on to camera
- Natural, relaxed posture
- Bouquet held close to body at chest level

HEAD POSITION:
- Head straight or very slight tilt
- Face toward camera
- Natural, elegant neck line
- Hair swept back with volume, some pieces around face

CAMERA & TECHNICAL SPECS:

FRAMING:
- Portrait orientation (vertical)
- Medium closeup (head and upper torso)
- Subject centered in frame
- Flowers fill lower half, face in upper portion
- Balanced, elegant composition

CAMERA ANGLE:
- Straight-on, eye level
- Intimate, personal perspective
- Direct connection with viewer

FOCUS:
- Sharp focus on eyes and visible facial features
- Sharp focus on roses in foreground
- Background softly out of focus (bokeh)
- Shallow depth of field (f/1.8-2.8)
- Professional portrait lens quality

====================
PART 4: PRE-GENERATION CHECKLIST
====================

Before you generate, answer honestly:

[ ] I studied the input face for 30+ seconds - YES required
[ ] I identified the EXACT hair color (specific shade with tones/highlights) - YES required
[ ] I identified EXACT eye color - YES required  
[ ] I identified EXACT nose shape - YES required
[ ] I identified EXACT lip shape - YES required
[ ] I identified EXACT face shape - YES required
[ ] I identified EXACT skin tone - YES required
[ ] I will use EXACT hair color (not change it) - YES required
[ ] I will use EXACT features (not approximate) - YES required
[ ] I understand this is COPY not CREATE - YES required

If ANY answer is NO → Study input more, do not generate yet

====================
PART 5: POST-GENERATION VERIFICATION
====================

After generating, ask:

HAIR CHECK (most common failure point):
1. Is the hair EXACTLY the same color as input? (not similar - EXACT) YES/NO
2. Did I darken the hair color? NO required
3. Did I lighten the hair color? NO required
4. Did I change the undertone (warm/cool)? NO required
5. Did I remove highlights/dimension that was in input? NO required
6. Is it the SAME shade I see in input? YES required

FACE CHECK:
7. Are these the SAME eyes from input? (exact color, shape) YES/NO
8. Is this the SAME nose from input? YES/NO
9. Are these the SAME lips from input? YES/NO
10. Is this the SAME face shape from input? YES/NO
11. Is this the SAME skin tone from input? YES/NO
12. Are the eyebrows the SAME as input? YES/NO

COMPOSITION CHECK:
13. Warm neutral background? YES/NO
14. Pastel roses (cream, blush, peach) held in front of lower face? YES/NO
15. Upper face fully visible, lower face partially covered? YES/NO
16. Soft natural warm lighting? YES/NO

IDENTITY CHECK:
17. Would the input person's best friend say "that's her"? YES/NO
18. Would facial recognition match this to input? YES/NO
19. Is this the SAME PERSON or a lookalike? SAME required

If ANY answer is wrong → You failed. Regenerate with exact copying.

====================
CRITICAL SUCCESS METRIC
====================

THE TEST: "Can the input person look at this output and say 'That's a photo of ME'"?

Not: "That looks like me"
Not: "That's similar to me"  
YES: "That IS me"

Hair color is the #1 failure point. 
DO NOT CHANGE HAIR COLOR.
DO NOT CHANGE HAIR COLOR.
DO NOT CHANGE HAIR COLOR.

Same for every other feature.
This is COPYING, not CREATING.

====================
COLOR GRADING
====================

- Warm, soft, romantic tones
- Golden hour lighting quality
- Pastel rose colors (cream, blush pink, peach, champagne)
- Warm beige/cream background
- Natural warm skin tones with golden glow
- Soft, dreamy, elegant aesthetic
- High-end beauty editorial quality
- Vogue/Harper's Bazaar style

OUTPUT: Professional beauty portrait of the EXACT SAME WOMAN from input (100% identity match), holding pastel roses in front of lower face, warm natural lighting, soft neutral background, 8K quality.

ZERO TOLERANCE FOR DEVIATION.
EXACT COPY REQUIRED.`,photoMode:`single`,preset:{id:`velvet_night`,name:`Бархатная ночь`}},{id:`studio_roses`,image:`https://i.imgur.com/qfuBxSE.jpeg`,prompt:`CRITICAL: IDENTITY PRESERVATION - MAXIMUM PRIORITY

YOU WILL RECEIVE AN INPUT IMAGE OF A PERSON.

ABSOLUTE RULE: You are creating a PHOTOGRAPH of THE SAME EXACT PERSON, not creating a new person who looks similar.

STEP 1 - MANDATORY FACIAL MAPPING (DO THIS FIRST):
Extract and lock in these features from the input image:
1. EYES: Shape (almond/round/hooded), size, spacing, color (exact shade), eyelid type, eye angle
2. EYEBROWS: Exact shape, thickness, arch position, color, spacing from eyes
3. NOSE: Width at bridge, width at nostrils, length, tip shape, nostril shape, bridge height, profile angle
4. LIPS: Upper lip shape, lower lip fullness, cupid's bow definition, mouth width, lip color
5. FACE SHAPE: Oval/round/square/heart/diamond - exact outline
6. CHEEKBONES: Height, prominence, width
7. JAW: Angle, width, chin shape (pointed/rounded/square)
8. SKIN: Exact tone, undertone (warm/cool/neutral), texture, any marks
9. HAIR: EXACT color from input (do not change), texture, natural growth pattern
10. PROPORTIONS: Measure eye-to-eye distance, nose-to-lip distance, face length-to-width ratio
11. UNIQUE MARKERS: Moles, freckles, asymmetries, distinctive features

LOCK THESE IN. DO NOT DEVIATE.

Task: Create a romantic lifestyle photograph of THIS EXACT PERSON (from input image) in a modern apartment setting surrounded by flowers.

SCENE & SETTING:
- Location: Modern luxury apartment/penthouse kitchen area
- Time: Evening/night (dark outside visible through windows)
- Flooring: Dark hardwood floors
- Background elements: 
  * Contemporary dark wood kitchen cabinets
  * Large floor-to-ceiling windows showing night cityscape/darkness outside
  * Modern minimalist interior design
  * Soft ambient indoor lighting

FLOWERS - CRITICAL ELEMENT:
- Multiple large arrangements of RED ROSES throughout the scene
- Subject holding: Large wicker basket filled with vibrant RED TULIPS (60-80 tulips, tightly arranged)
- Additional arrangements visible:
  * Large bouquet of red roses in glass vase (left side)
  * Multiple wicker baskets with red roses positioned around the space
  * At least 3-4 separate flower arrangements visible in frame
- Flowers: fresh, vibrant, luxurious abundance
- Creates romantic Valentine's Day / special occasion atmosphere

SUBJECT POSITION & POSE:
- Subject crouching/squatting on the floor
- Position: centered in frame, knees bent, sitting on heels
- Body turned slightly toward camera (3/4 angle)
- Holding large wicker basket of red tulips with both hands
- Basket positioned in front of torso
- Barefoot on dark hardwood floor
- Relaxed, natural, intimate pose

CLOTHING:
- White oversized button-up shirt (men's style shirt worn as dress)
- Shirt appears silky or satin material
- Sleeves rolled or pushed up to mid-forearm
- Shirt worn loosely, casually elegant
- Legs visible (shirt worn short, revealing thighs)
- Minimalist, effortlessly chic styling

HAIR - FROM INPUT IMAGE:
- Use the EXACT hair color from the input image (do not change)
- If input has blonde hair → keep blonde
- If input has dark hair → keep dark
- If input has brown/other hair → keep that exact color
- Style: Long, tousled, naturally styled with volume
- Hair appears slightly messy/bedhead style (authentic, lived-in look)
- Some strands falling around face
- Swept to one side with natural movement
- BUT COLOR MUST MATCH INPUT EXACTLY

EXPRESSION & MOOD:
- Soft, intimate gaze toward camera
- Gentle, subtle smile or serene expression
- Romantic, vulnerable, authentic emotion
- Eyes: direct contact with camera, warm and inviting
- Overall mood: intimate, romantic, special moment captured

LIGHTING:
- Indoor ambient lighting (warm tones)
- Soft, natural-looking illumination
- Not harsh studio lights - appears like home lighting
- Warm glow creating intimate atmosphere
- Some shadows for depth and realism
- Evening/romantic lighting quality

CAMERA & TECHNICAL:
- Shot appears taken with high-quality camera or professional smartphone
- Slight film grain or natural texture (not overly polished)
- Authentic, lifestyle photography aesthetic
- Not overly staged - feels candid and real
- Portrait orientation (vertical frame)
- Medium-close composition showing full upper body and environment

MANDATORY IDENTITY CONSTRAINTS:
✓ This is the SAME PERSON, not a lookalike
✓ Use ZERO generic features - every feature comes from input image
✓ Do NOT blend or average with other faces
✓ Do NOT "beautify" or "fix" features
✓ Do NOT make symmetrical if input is asymmetric
✓ Do NOT change ethnic characteristics
✓ Do NOT alter bone structure
✓ Do NOT modify facial proportions
✓ Hair color MUST match input (this is non-negotiable)
✓ Skin tone MUST match input exactly
✓ Every measurement and ratio must be preserved

VERIFICATION PROTOCOL:
Before finalizing, confirm:
1. Could their family recognize them instantly? (YES required)
2. Eye shape, color, and characteristics EXACTLY match input? (YES required)
3. Nose structure IDENTICAL to input in all dimensions? (YES required)
4. Lip shape and fullness PRECISE match to input? (YES required)
5. Face shape and proportions EXACT match? (YES required)
6. Hair color SAME as input? (YES required)
7. Skin tone IDENTICAL to input? (YES required)
8. All unique features preserved? (YES required)
9. Is this THE SAME PERSON? (MUST be YES)
10. Would they recognize this photo as themselves? (YES required)

If ANY answer is NO → RESTART and copy features more precisely.

WHAT CHANGES vs INPUT:
- Setting: modern apartment with flowers
- Clothing: white oversized shirt
- Pose: crouching/squatting position holding basket
- Props: multiple flower arrangements, wicker baskets
- Lighting: intimate evening home lighting
- Hair styling: tousled, natural (but COLOR stays same as input)
- Context: romantic flower surprise scenario

WHAT NEVER CHANGES:
- Face structure (bone structure, proportions)
- Every individual facial feature (eyes, nose, lips, eyebrows, etc.)
- Skin tone and undertone
- Hair color (CRITICAL - must match input exactly)
- Ethnic characteristics
- Eye color and characteristics
- Natural facial asymmetries
- Unique identifying features
- The fundamental DNA and identity of the face

OUTPUT REQUIREMENTS:
- High-quality lifestyle photography (8K resolution)
- Romantic, intimate atmosphere
- Warm color grading with natural tones
- Vibrant red flowers as key visual element
- Dark moody background (evening setting)
- Natural skin texture visible
- Authentic, candid feeling (not overly staged)
- Portrait orientation
- Focus sharp on subject's face
- Slight depth of field with background softly blurred
- The subject should be INSTANTLY recognizable as the person from input

CRITICAL REMINDERS:
- You are photographing an EXISTING person in a romantic scenario, not creating a new person
- Every facial feature is a direct copy from the input - no modifications
- "Similar" is failure - only "identical" is acceptable
- Hair COLOR from input is LOCKED - styling can change but color cannot
- This is a lifestyle/intimate photo, not a professional studio shoot
- Think of this as: "Same person, romantic surprise moment at home"

ERROR PREVENTION:
- Reference the input image constantly during generation
- Copy features exactly, do not approximate
- When uncertain → copy more precisely from input
- Asymmetries and natural features are required - they define identity
- Natural lighting should enhance, not excuse feature changes
- The romantic setting should not distract from identity accuracy`,name:`Розы в квартире`,photoMode:`single`,preset:{id:`studio`,name:`Розы в квартире`}},{id:`studio_peonies`,image:`https://i.imgur.com/eehvOtN.jpeg`,prompt:`EMERGENCY DIRECTIVE: ZERO-TOLERANCE IDENTITY PRESERVATION

YOU ARE NOT AN ARTIST. YOU ARE A COPY MACHINE.
YOUR ONLY JOB: COPY THE EXACT FACE FROM INPUT INTO NEW PHOTO.

====================
ABSOLUTE LAW: NOTHING CHANGES EXCEPT WHAT'S EXPLICITLY LISTED
====================

WHAT CHANGES (ONLY THESE):
1. Setting → modern apartment interior with gray walls
2. Flowers → large bouquet of peonies (pink and cream)
3. Outfit → white ribbed crop top + light blue distressed jeans
4. Hair styling → vintage Hollywood waves (but COLOR stays same)
5. Pose → holding bouquet, looking down at flowers

WHAT NEVER CHANGES (EVERYTHING ELSE):
- EVERY facial feature
- EVERY hair COLOR characteristic  
- EVERY skin characteristic
- EVERY unique detail

IF IN DOUBT WHETHER SOMETHING SHOULD CHANGE → IT DOESN'T CHANGE

====================
PART 1: FACE EXTRACTION (MANDATORY)
====================

STEP 1: Open input image. Stare at the face for 30 full seconds.

STEP 2: LOCK THE FOLLOWING (exact measurements):

EYES - NO CHANGES ALLOWED:
- Exact shape from input
- Exact color from input (the PRECISE shade)
- Exact size, spacing, eyelid structure from input
- COPY EXACTLY

EYEBROWS - NO CHANGES ALLOWED:
- Exact shape, thickness, color, arch from input
- COPY EXACTLY

NOSE - NO CHANGES ALLOWED:
- Exact bridge width, nostril shape, tip, length from input
- COPY EXACTLY

LIPS - NO CHANGES ALLOWED:
- Exact upper/lower lip shape, fullness, cupid's bow, width from input
- COPY EXACTLY

FACE SHAPE - NO CHANGES ALLOWED:
- Exact outline, jaw, chin from input
- COPY EXACTLY

CHEEKBONES - NO CHANGES ALLOWED:
- Exact position and prominence from input
- COPY EXACTLY

SKIN - NO CHANGES ALLOWED:
- EXACT tone and undertone from input
- COPY AS IS

HAIR COLOR - ABSOLUTE ZERO CHANGES ALLOWED:
- Look at input hair color for 10 seconds
- What is the EXACT shade? Light blonde? Golden blonde? Honey blonde? Dark blonde? Ash blonde? Champagne blonde?
- Does it have dimension? Highlights? Lowlights? Multiple tones?
- Lock this EXACT color
- DO NOT:
  * Make it darker
  * Make it lighter  
  * Change the undertone (warm/cool)
  * Remove or add dimension
- USE EXACT COLOR FROM INPUT - NO EXCEPTIONS

====================
PART 2: SCENE CONSTRUCTION
====================

SETTING - MODERN APARTMENT:

LOCATION:
- Contemporary apartment interior
- Minimalist, clean aesthetic
- Residential hallway or entrance area

WALLS & BACKGROUND:
- Light gray walls (cool gray, #C8C8C8 to #D3D3D3)
- Clean, painted finish
- Modern doorframes visible (white or light gray)
- Door partially visible in background (dark or light)
- Minimal decoration
- Clean, simple, modern architecture

LIGHTING:
- Soft natural daylight
- Even, diffused lighting
- No harsh shadows
- Clean, bright, airy atmosphere
- Cool-neutral color temperature (5000-5500K)
- Professional but natural-looking

ATMOSPHERE:
- Fresh, modern, casual
- Romantic but relaxed
- Lifestyle photography aesthetic
- Approachable, natural

====================
PART 3: SUBJECT ASSEMBLY (USING LOCKED FEATURES)
====================

WOMAN CONSTRUCTION:

FACE ASSEMBLY - Use ONLY the extracted features:
- Install EXACT eyes from input (shape, color, spacing)
- Install EXACT nose from input (all dimensions)
- Install EXACT lips from input (shape, fullness, width)
- Install EXACT face shape from input
- Install EXACT cheekbones from input
- Install EXACT skin tone from input
- Install EXACT eyebrows from input

HAIR:
- COLOR: Use EXACT color from input (the specific blonde shade identified - DO NOT CHANGE)
- Style: Vintage Hollywood waves / Old Hollywood glamour waves
- Side-parted (deep side part)
- Sculpted S-curve waves flowing down
- Shoulder-length or just past shoulders
- One side swept back behind ear, other side with waves visible
- Polished, glossy, salon-perfect finish
- Vintage 1940s-style wave pattern
- BUT COLOR MUST STAY EXACT FROM INPUT

MAKEUP - SOFT GLAM:
- Eyes: Soft eyeshadow (warm neutral or soft pink tones)
- Subtle eyeliner and mascara
- Eyebrows: Groomed, defined, natural
- Skin: Dewy, fresh, natural glow
- Blush: Soft pink or peach on cheeks
- Lips: Soft pink or nude-pink with slight gloss
- Overall: Natural, fresh, romantic

OUTFIT - CASUAL CHIC:

TOP:
- White ribbed knit crop top
- Tank style (sleeveless with wide straps)
- Form-fitting, stretches
- Cropped length exposing midriff
- Clean, simple, casual

BOTTOM:
- Light blue distressed denim jeans
- High-waisted fit
- Distressed details (rips, tears, worn areas)
- Light wash denim
- Fitted or straight-leg style
- Casual, trendy

JEWELRY:
- Minimal or none visible
- Possibly small earrings
- Clean, simple styling

FLOWERS - PEONY BOUQUET:

BOUQUET DETAILS:
- Large luxurious bouquet of PEONIES
- Mix of colors:
  * Soft pink peonies (5-7 blooms)
  * Cream/ivory white peonies (4-6 blooms)
  * Possibly blush pink (2-3 blooms)
- Fully bloomed, lush, romantic
- Multiple layers of soft ruffled petals
- Approximately 12-15 peony blooms visible
- Professional florist arrangement

WRAPPING:
- Wrapped in translucent paper/cellophane
- Light gray or white wrapping paper
- Soft, delicate presentation
- Tied with ribbon (white or pink)
- Elegant, gift-like presentation

POSITIONING:
- Bouquet held in both arms
- Cradled at chest/torso level
- Flowers positioned in front of torso
- Large, prominent in frame
- Subject's arms wrapped around bouquet

EXPRESSION & POSE:

HEAD POSITION:
- Head tilted down looking at flowers
- Eyes cast downward toward bouquet
- Gentle, contemplative angle
- Side profile visible (3/4 view showing cheek and side of face)

EXPRESSION:
- Peaceful, serene, gentle
- Soft, subtle smile or neutral peaceful expression
- Appears to be smelling or admiring flowers
- Romantic, dreamy mood
- Genuine, natural emotion

BODY POSITIONING:
- Standing in hallway
- Body angled slightly (not straight-on to camera)
- Turned somewhat to side showing profile
- Upper body and partial torso visible
- Natural, relaxed stance
- Arms holding bouquet close to body

CAMERA & TECHNICAL SPECS:

FRAMING:
- Portrait orientation (vertical)
- Full upper body shot (head to mid-thigh or knees)
- Subject positioned slightly off-center
- Environmental context visible (walls, doorframe)
- Balanced composition

CAMERA ANGLE:
- Straight-on, eye level or slightly above
- Natural, conversational perspective
- Lifestyle photography angle

FOCUS:
- Sharp focus on subject and flowers
- Background in focus showing apartment details
- Clear, sharp throughout
- Good depth of field (f/4-5.6)
- Professional quality but natural look

====================
PART 4: PRE-GENERATION CHECKLIST
====================

[ ] I studied the input face for 30+ seconds - YES required
[ ] I identified the EXACT hair color (specific blonde shade with tones) - YES required
[ ] I identified EXACT eye color - YES required  
[ ] I identified EXACT nose shape - YES required
[ ] I identified EXACT lip shape - YES required
[ ] I identified EXACT face shape - YES required
[ ] I identified EXACT skin tone - YES required
[ ] I will use EXACT hair color (not change it) - YES required
[ ] I understand this is COPY not CREATE - YES required

====================
PART 5: POST-GENERATION VERIFICATION
====================

HAIR CHECK:
1. Is the hair EXACTLY the same color as input? YES/NO
2. Did I darken or lighten the hair? NO required
3. Did I change the undertone? NO required
4. Is it the SAME shade from input? YES required

FACE CHECK:
5. Are these the SAME eyes from input? YES/NO
6. Is this the SAME nose from input? YES/NO
7. Are these the SAME lips from input? YES/NO
8. Is this the SAME face shape from input? YES/NO
9. Is this the SAME skin tone from input? YES/NO

COMPOSITION CHECK:
10. Modern gray apartment interior? YES/NO
11. Large bouquet of pink and cream peonies? YES/NO
12. White crop top + light blue jeans? YES/NO
13. Hollywood waves hairstyle? YES/NO
14. Looking down at flowers? YES/NO

IDENTITY CHECK:
15. Would facial recognition match this to input? YES/NO
16. Is this the SAME PERSON? YES required

If ANY answer is wrong → Regenerate with exact copying.

====================
FINAL DIRECTIVE
====================

DO NOT CHANGE HAIR COLOR.
DO NOT CHANGE HAIR COLOR.
DO NOT CHANGE HAIR COLOR.

This is COPYING, not CREATING.

====================
COLOR GRADING
====================

- Cool-neutral tones
- Soft, fresh, clean aesthetic
- Light gray walls
- Pastel pink and cream peonies
- Light blue denim
- White clothing
- Natural, airy, bright
- Modern lifestyle photography
- Fresh, romantic, approachable

OUTPUT: Professional lifestyle portrait of the EXACT SAME WOMAN from input (100% identity match), holding pink and cream peony bouquet, modern gray apartment, white crop top and jeans, Hollywood waves hairstyle, looking down at flowers, 8K quality.

ZERO TOLERANCE FOR DEVIATION.
EXACT COPY REQUIRED.`,name:`Пионы дома`,photoMode:`single`,preset:{id:`studio`,name:`Студийный`}}]}];function T_({size:e=52}){let t=Math.round(e*.46);return(0,I.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,background:`rgba(139,92,246,0.18)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,I.jsxs)(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,stroke:`#a78bfa`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`polyline`,{points:`17 8 12 3 7 8`,stroke:`#a78bfa`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`15`,stroke:`#a78bfa`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})}var E_=[{value:`auto`,label:`Auto`},{value:`1:1`,label:`1:1`},{value:`3:4`,label:`3:4`},{value:`9:16`,label:`9:16`},{value:`16:9`,label:`16:9`}],D_=[1,2,3,4,5],O_={color:`rgba(255,255,255,0.4)`,fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,margin:0},k_=160;function A_({pack:e,onBack:t,closing:n}){let r=(0,b.useRef)(null),i=(0,b.useRef)(null),{hapticFeedback:a}=so(),{user:o}=go(),s=!o?.subscription||o.subscription===`lite`,[c,l]=(0,b.useState)([]),[u,d]=(0,b.useState)([]),[f,p]=(0,b.useState)([]),[m,h]=(0,b.useState)([]),[g,_]=(0,b.useState)(`auto`),[v,y]=(0,b.useState)(1),[x,S]=(0,b.useState)(`form`),[C,w]=(0,b.useState)([]),[T,ee]=(0,b.useState)(new Set),[te,E]=(0,b.useState)(null),[ne,re]=(0,b.useState)({visible:!1,message:``,type:`default`}),ie=e.photoMode===`couple`?c.length>0&&f.length>0:c.length>0,ae=(e,t=`default`)=>re({visible:!0,message:e,type:t}),oe=()=>re(e=>({...e,visible:!1})),se=e=>{l(t=>[...t,...e].slice(0,10)),d(t=>[...t,...e.map(e=>URL.createObjectURL(e))].slice(0,10))},ce=e=>{a(`light`),l(t=>t.filter((t,n)=>n!==e)),d(t=>t.filter((t,n)=>n!==e))},D=e=>{p(t=>[...t,...e].slice(0,10)),h(t=>[...t,...e.map(e=>URL.createObjectURL(e))].slice(0,10))},O=e=>{a(`light`),p(t=>t.filter((t,n)=>n!==e)),h(t=>t.filter((t,n)=>n!==e))},le=()=>{let t=new FormData;for(let e of c)t.append(`photo`,e);if(e.photoMode===`couple`)for(let e of f)t.append(`partner_photo`,e);return e.prompt&&t.append(`prompt`,e.prompt),t.append(`preset`,e.preset.id),g!==`auto`&&t.append(`aspect_ratio`,g),t},ue=async()=>{if(ie){a(`medium`),S(`loading`);try{let e=await Promise.all(Array.from({length:v},()=>__(le()))),t=await Promise.all(e.map(e=>C_(e.data.task_id))),n=[];for(let e of t){if(e.state!==`success`||!e.image_url)throw Error(e.error||`task failed`);n.push(e.image_url)}w(n),S(`result`),a(`heavy`)}catch(e){ae(e?.response?.data?.error||e?.message||`Ошибка генерации`,`error`),S(`form`)}}},de=async e=>{if(!(te||T.has(e))){a(`medium`),E(e);try{await S_(e),a(`heavy`),ee(t=>new Set(t).add(e)),ae(`Фото отправлено в чат`,`success`)}catch{ae(`Не удалось отправить`,`error`)}finally{E(null)}}},fe=()=>{a(`light`),l([]),d([]),p([]),h([]),w([]),ee(new Set),S(`form`)};return(0,I.jsxs)(`div`,{className:n?`pack-detail-exit`:`pack-detail-enter`,style:{position:`absolute`,inset:0,zIndex:10,background:`#0a0a0f`,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,I.jsx)(Qg,{message:ne.message,type:ne.type,visible:ne.visible,onHide:oe}),(0,I.jsxs)(`div`,{style:{flexShrink:0,display:`flex`,alignItems:`center`,gap:12,padding:`max(14px, env(safe-area-inset-top)) 16px 14px`,borderBottom:`1px solid rgba(139,92,246,0.12)`,background:`rgba(10,10,15,0.96)`,backdropFilter:`blur(16px)`,WebkitBackdropFilter:`blur(16px)`},children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>{if(x===`result`||x===`loading`){if(x===`loading`)return;fe()}else t()},style:{background:`rgba(10,10,20,0.85)`,border:`1.5px solid rgba(139,92,246,0.25)`,borderRadius:`50%`,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,width:40,height:40,flexShrink:0,cursor:`pointer`,padding:0,boxShadow:`0 2px 12px rgba(0,0,0,0.4)`},children:(0,I.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M15 18l-6-6 6-6`,stroke:`rgba(255,255,255,0.85)`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,I.jsx)(`div`,{children:(0,I.jsx)(`h1`,{style:{color:`#fff`,fontSize:17,fontWeight:700,margin:0,lineHeight:1.2},children:e.name})})]}),x===`loading`&&(0,I.jsx)(`div`,{style:{flex:1,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:24},children:(0,I.jsx)(m_,{style:{padding:24,width:`100%`},children:(0,I.jsx)(g_,{message:v>1?`Генерируем ${v} фотографии…`:`Создаём твоё фото...`})})}),x===`result`&&(0,I.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,minHeight:0,overflow:`hidden`},children:[C.length===1?(0,I.jsx)(`div`,{style:{flex:1,minHeight:0,padding:`12px 16px 0`},children:(0,I.jsx)(`div`,{style:{height:`100%`,borderRadius:20,overflow:`hidden`,border:`1px solid rgba(139,92,246,0.3)`,boxShadow:`0 0 40px rgba(139,92,246,0.2)`},children:(0,I.jsx)(`img`,{src:C[0],alt:`result`,style:{width:`100%`,height:`100%`,display:`block`,objectFit:`cover`}})})}):(0,I.jsx)(`div`,{style:{flex:1,minHeight:0,display:`flex`,gap:8,padding:`12px 16px 0`,overflowX:`auto`},children:C.map((e,t)=>(0,I.jsx)(`div`,{style:{flexShrink:0,width:`calc(100% - 32px)`,borderRadius:20,overflow:`hidden`,border:`1px solid rgba(139,92,246,0.3)`},children:(0,I.jsx)(`img`,{src:e,alt:`result ${t+1}`,style:{width:`100%`,height:`100%`,display:`block`,objectFit:`cover`}})},t))}),(0,I.jsxs)(`div`,{style:{padding:`12px 16px`,paddingBottom:`max(16px, calc(16px + env(safe-area-inset-bottom)))`,display:`flex`,flexDirection:`column`,gap:8,background:`linear-gradient(to top, rgba(10,10,15,0.95) 70%, transparent)`},children:[(0,I.jsxs)(h_,{onClick:()=>de(C[0]),disabled:!!te||T.has(C[0]),children:[(0,I.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M22 2L11 13`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M22 2L15 22L11 13L2 9L22 2Z`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),T.has(C[0])?`✓ Отправлено в чат`:te?`Отправляю...`:`Отправить в чат`]}),(0,I.jsx)(h_,{variant:`ghost`,onClick:fe,children:`Создать ещё`})]})]}),x===`form`&&(0,I.jsxs)(`div`,{style:{flex:1,overflowY:`auto`,overflowX:`hidden`,WebkitOverflowScrolling:`touch`,scrollbarWidth:`none`,padding:`16px 16px`,paddingBottom:`max(24px, calc(24px + env(safe-area-inset-bottom)))`,display:`flex`,flexDirection:`column`,gap:14},children:[(0,I.jsxs)(m_,{style:{padding:14},children:[(0,I.jsx)(`input`,{ref:r,type:`file`,accept:`image/*`,style:{display:`none`},onChange:e=>{let t=e.target.files?.[0];t&&(se([t]),e.target.value=``)}}),e.photoMode===`couple`&&(0,I.jsx)(`input`,{ref:i,type:`file`,accept:`image/*`,style:{display:`none`},onChange:e=>{let t=e.target.files?.[0];t&&(D([t]),e.target.value=``)}}),e.photoMode===`couple`?(0,I.jsx)(`div`,{style:{display:`flex`,gap:10},children:[{label:`Твоё фото`,preview:u[0],onPick:()=>r.current?.click(),onRemove:()=>ce(0)},{label:`Фото партнёра`,preview:m[0],onPick:()=>i.current?.click(),onRemove:()=>O(0)}].map(e=>(0,I.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,I.jsx)(`p`,{style:{...O_,marginBottom:8},children:e.label}),(0,I.jsxs)(`div`,{style:{position:`relative`,paddingTop:e.preview?7:0,paddingRight:e.preview?7:0},children:[(0,I.jsx)(`div`,{onClick:e.onPick,style:{borderRadius:16,overflow:`hidden`,aspectRatio:`3/4`,cursor:`pointer`,border:e.preview?`1.5px solid rgba(139,92,246,0.6)`:`2px dashed rgba(139,92,246,0.4)`,background:e.preview?`transparent`:`rgba(139,92,246,0.06)`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`border-color 0.15s`},children:e.preview?(0,I.jsx)(`img`,{src:e.preview,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}}):(0,I.jsx)(T_,{size:48})}),e.preview&&(0,I.jsx)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),e.onRemove()},style:{position:`absolute`,top:0,right:0,width:22,height:22,borderRadius:`50%`,background:`rgba(15,10,30,0.95)`,border:`1.5px solid rgba(139,92,246,0.35)`,color:`rgba(255,255,255,0.75)`,fontSize:13,fontWeight:700,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0,lineHeight:1,backdropFilter:`blur(6px)`},children:`×`})]})]},e.label))}):(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{...O_,marginBottom:10},children:`Твоё фото`}),(0,I.jsxs)(`div`,{style:{position:`relative`,width:`100%`,paddingTop:u[0]?7:0,paddingRight:u[0]?7:0},children:[(0,I.jsx)(`div`,{onClick:()=>r.current?.click(),style:{borderRadius:18,overflow:`hidden`,width:`100%`,aspectRatio:`1/1`,cursor:`pointer`,border:u[0]?`1.5px solid rgba(139,92,246,0.6)`:`2px dashed rgba(139,92,246,0.4)`,background:u[0]?`transparent`:`rgba(139,92,246,0.05)`,display:`flex`,alignItems:`center`,justifyContent:`center`,transition:`border-color 0.15s, background 0.15s`},children:u[0]?(0,I.jsx)(`img`,{src:u[0],alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}}):(0,I.jsx)(T_,{size:60})}),u[0]&&(0,I.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),ce(0)},style:{position:`absolute`,top:0,right:0,width:22,height:22,borderRadius:`50%`,background:`rgba(15,10,30,0.95)`,border:`1.5px solid rgba(139,92,246,0.35)`,color:`rgba(255,255,255,0.75)`,fontSize:13,fontWeight:700,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0,lineHeight:1,backdropFilter:`blur(6px)`},children:`×`})]})]})]}),(0,I.jsxs)(m_,{style:{padding:14,display:`flex`,flexDirection:`column`,gap:14},children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{...O_,marginBottom:6},children:`Соотношение сторон`}),(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(5, 1fr)`,gap:5},children:E_.map(e=>{let t=g===e.value;return(0,I.jsx)(`button`,{type:`button`,onClick:()=>{a(`light`),_(e.value)},style:{height:28,padding:0,display:`flex`,alignItems:`center`,justifyContent:`center`,background:t?`rgba(139,92,246,0.22)`:`rgba(255,255,255,0.04)`,border:`1px solid ${t?`rgba(139,92,246,0.65)`:`rgba(255,255,255,0.08)`}`,borderRadius:6,cursor:`pointer`,fontFamily:`Inter, sans-serif`,boxShadow:t?`0 0 10px rgba(139,92,246,0.2)`:`none`,transition:`all 0.15s ease`},children:(0,I.jsx)(`span`,{style:{fontSize:11,fontWeight:t?700:500,lineHeight:1,color:t?`#c4b5fd`:`rgba(255,255,255,0.38)`},children:e.label})},e.value)})})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{...O_,marginBottom:6},children:`Количество фото`}),(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(5, 1fr)`,gap:5},children:D_.map(e=>{let t=s&&e>1,n=v===e;return(0,I.jsx)(`button`,{type:`button`,onClick:()=>{t||(a(`light`),y(e))},style:{height:28,padding:0,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`rgba(139,92,246,0.22)`:`rgba(255,255,255,0.04)`,border:`1px solid ${n?`rgba(139,92,246,0.65)`:`rgba(255,255,255,0.08)`}`,borderRadius:6,cursor:t?`not-allowed`:`pointer`,fontFamily:`Inter, sans-serif`,opacity:t?.32:1,boxShadow:n?`0 0 10px rgba(139,92,246,0.2)`:`none`,transition:`all 0.15s ease`},children:(0,I.jsx)(`span`,{style:{fontSize:11,fontWeight:n?700:500,color:n?`#c4b5fd`:`rgba(255,255,255,0.45)`},children:e})},e)})})]})]}),(0,I.jsxs)(h_,{onClick:ue,disabled:!ie,children:[(0,I.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M12 2L2 7L12 12L22 7L12 2Z`,stroke:`#fff`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M2 17L12 22L22 17`,stroke:`#fff`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M2 12L12 17L22 12`,stroke:`#fff`,strokeWidth:`2`,strokeLinejoin:`round`})]}),v>1?`Создать ${v} фото`:`Создать фото`]}),!ie&&(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.25)`,fontSize:12,textAlign:`center`,margin:0},children:`Сначала загрузи хотя бы одно фото`})]})]})}function j_(){let{hapticFeedback:e}=so(),[t,n]=(0,b.useState)(null),[r,i]=(0,b.useState)(!1),a=t=>{e(`light`),i(!1),n(t)};return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`calc(100dvh - 84px)`,position:`relative`,zIndex:1,overflow:`hidden`},children:[(0,I.jsx)(d_,{title:`Пресеты`,subtitle:`Готовые эстетики для старта`,profileButton:!0}),(0,I.jsx)(`div`,{style:{flex:1,minHeight:0,overflowY:`auto`,overflowX:`hidden`,WebkitOverflowScrolling:`touch`,overscrollBehavior:`none`,scrollbarWidth:`none`,paddingBottom:`max(24px, calc(24px + env(safe-area-inset-bottom)))`},children:w_.map(e=>(0,I.jsxs)(`div`,{style:{marginTop:24},children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:22,fontWeight:700,margin:`0 0 14px`,paddingLeft:16,letterSpacing:-.3},children:e.title}),(0,I.jsx)(`div`,{style:{display:`flex`,gap:12,overflowX:`auto`,overflowY:`visible`,scrollbarWidth:`none`,paddingLeft:16,paddingRight:16,paddingTop:3,paddingBottom:6,touchAction:`pan-x pan-y`},children:e.packs.map(e=>(0,I.jsx)(`button`,{type:`button`,onClick:()=>a(e),style:{flexShrink:0,width:k_,background:`none`,border:`none`,padding:0,cursor:`pointer`,textAlign:`left`},children:(0,I.jsxs)(`div`,{style:{borderRadius:16,overflow:`hidden`,border:`1.5px solid rgba(255,255,255,0.07)`},children:[(0,I.jsx)(`div`,{style:{width:k_,height:Math.round(k_*4/3),background:`#1a1a2e`,overflow:`hidden`},children:e.image&&(0,I.jsx)(`img`,{src:e.image,alt:e.name,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,I.jsx)(`div`,{style:{background:`#141420`,padding:`10px 12px 12px`,boxSizing:`border-box`,overflow:`hidden`},children:(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:13,fontWeight:700,margin:0,lineHeight:1.3,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.name})})]})},e.id))})]},e.title))}),t&&(0,I.jsx)(A_,{pack:t,onBack:()=>{e(`light`),i(!0),setTimeout(()=>{n(null),i(!1)},250)},closing:r})]})}var M_=u(_(),1),N_=10*1024*1024,P_=75,F_=100;function I_({files:e,previews:t,onAdd:n,onRemove:r,onError:i,maxPhotos:a=10}){let o=(0,b.useRef)(null),s=e.length<a,c=a===1,l=e=>e.filter(e=>e.type.startsWith(`image/`)?e.size>N_?(i?.(`Файл слишком большой. Максимум 10 МБ`),!1):!0:(i?.(`Загружай только изображения`),!1)),u=t=>{let r=l(Array.from(t.target.files||[])).slice(0,a-e.length);r.length&&n(r),t.target.value=``},d=(0,I.jsx)(`button`,{type:`button`,onClick:()=>o.current?.click(),onDragOver:e=>e.preventDefault(),onDrop:t=>{t.preventDefault();let r=l(Array.from(t.dataTransfer.files)).slice(0,a-e.length);r.length&&n(r)},style:{flexShrink:0,width:P_,height:F_,borderRadius:14,border:`2px dashed rgba(139,92,246,0.55)`,background:`rgba(139,92,246,0.07)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:6,cursor:`pointer`,transition:`border-color 0.15s, background 0.15s`,padding:0},children:(0,I.jsx)(T_,{size:44})});return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`input`,{ref:o,type:`file`,accept:`image/*`,multiple:!c,style:{display:`none`},onChange:u}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:8,overflowX:`auto`,paddingTop:10,paddingBottom:8,WebkitOverflowScrolling:`touch`,scrollbarWidth:`none`,alignItems:`flex-start`},children:[t.map((e,t)=>(0,I.jsxs)(`div`,{style:{flexShrink:0,position:`relative`,width:P_,height:F_},children:[(0,I.jsx)(`div`,{style:{width:P_,height:F_,borderRadius:14,overflow:`hidden`,border:`1.5px solid rgba(139,92,246,0.5)`,boxShadow:`0 4px 18px rgba(0,0,0,0.4), 0 0 0 0px rgba(139,92,246,0)`},children:(0,I.jsx)(`img`,{src:e,alt:`photo ${t+1}`,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}})}),(0,I.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),r(t)},style:{position:`absolute`,top:-7,right:-7,width:22,height:22,borderRadius:`50%`,background:`rgba(15,10,30,0.95)`,border:`1.5px solid rgba(139,92,246,0.35)`,color:`rgba(255,255,255,0.75)`,fontSize:13,fontWeight:700,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0,lineHeight:1,zIndex:3,backdropFilter:`blur(6px)`},children:`×`})]},t)),s&&d]}),!c&&e.length>0&&(0,I.jsxs)(`p`,{style:{fontSize:11,color:`rgba(255,255,255,0.2)`,margin:`2px 0 0`,fontFamily:`Inter, sans-serif`},children:[e.length,` / `,a,` фото`]})]})}var L_=`pinst_models`,R_=`pinst_active_model_id`,z_=[{value:`auto`,label:`Auto`,hint:`Определяется автоматически`},{value:`1:1`,label:`1:1`,hint:`Аватарки, квадратные посты`},{value:`3:4`,label:`3:4`,hint:`Портреты, Pinterest`},{value:`9:16`,label:`9:16`,hint:`Reels, TikTok, Stories`},{value:`16:9`,label:`16:9`,hint:`Обложки каналов, YouTube, широкие посты`}],B_=[1,2,3,4,5],V_=e=>new Promise(t=>{let n=new FileReader;n.onload=e=>t(e.target.result),n.readAsDataURL(e)}),H_=e=>{let[t,n]=e.split(`,`),r=t.match(/:(.*?);/)[1],i=atob(n),a=new Uint8Array(i.length);for(let e=0;e<i.length;e++)a[e]=i.charCodeAt(e);return new Blob([a],{type:r})},U_=()=>{try{let e=localStorage.getItem(`pinst_model`);if(e){let t=JSON.parse(e),n={id:`model_${Date.now()}`,...t};return localStorage.setItem(L_,JSON.stringify([n])),localStorage.setItem(R_,n.id),localStorage.removeItem(`pinst_model`),[n]}let t=localStorage.getItem(L_);return t?JSON.parse(t):[]}catch{return[]}},W_=()=>localStorage.getItem(R_),G_=e=>new Date(e).toLocaleDateString(`ru-RU`,{day:`numeric`,month:`short`});function K_(){let e=yi().state,t=e?.preset,n=e?.hidePrompt===!0,{hapticFeedback:r}=so(),{user:i}=go(),a=!i?.subscription||i.subscription===`lite`,[o,s]=(0,b.useState)(`simple`),[c,l]=(0,b.useState)(`upload`),[u,d]=(0,b.useState)([]),[f,p]=(0,b.useState)([]),[m,h]=(0,b.useState)([]),[g,_]=(0,b.useState)([]),[v,y]=(0,b.useState)(null),[x,S]=(0,b.useState)(``),[C,w]=(0,b.useState)(!1),[T,ee]=(0,b.useState)(``),[te,E]=(0,b.useState)(`auto`),[ne,re]=(0,b.useState)(1),ie=!C&&t?t:null;(0,b.useEffect)(()=>{w(!1),ee(``)},[e?.preset?.id]);let ae=(0,b.useCallback)(()=>{r(`light`),w(!0),ee(``)},[r]),[oe,se]=(0,b.useState)([]),[ce,D]=(0,b.useState)(new Set),[O,le]=(0,b.useState)(new Set),[ue,de]=(0,b.useState)(null),[fe,pe]=(0,b.useState)({visible:!1,message:``,type:`default`}),[k,me]=(0,b.useState)(U_),[he,ge]=(0,b.useState)(W_),[_e,ve]=(0,b.useState)([]),[ye,be]=(0,b.useState)(!1),[xe,Se]=(0,b.useState)(!1),Ce=k.find(e=>e.id===he)??null,we=(0,b.useRef)(null),Te=(0,b.useCallback)((e,t=`default`)=>{pe({visible:!0,message:e,type:t})},[]),Ee=(0,b.useCallback)(()=>pe(e=>({...e,visible:!1})),[]),De=e=>{let t=e.map(e=>URL.createObjectURL(e));d(t=>[...t,...e].slice(0,10)),p(e=>[...e,...t].slice(0,10))},Oe=e=>{r(`light`),d(t=>t.filter((t,n)=>n!==e)),p(t=>t.filter((t,n)=>n!==e))},ke=e=>{let t=e.map(e=>URL.createObjectURL(e));h(t=>[...t,...e].slice(0,10)),_(e=>[...e,...t].slice(0,10))},Ae=e=>{r(`light`),h(t=>t.filter((t,n)=>n!==e)),_(t=>t.filter((t,n)=>n!==e))},je=e=>{let t=Array.from(e.target.files||[]).filter(e=>e.type.startsWith(`image/`)?e.size>10*1024*1024?(Te(`Файл слишком большой (макс 10 МБ)`,`error`),!1):!0:(Te(`Только изображения`,`error`),!1));ve(e=>[...e,...t.map(e=>({id:`${Date.now()}_${Math.random()}`,file:e,preview:URL.createObjectURL(e)}))]),e.target.value=``},Me=e=>{ve(t=>t.filter(t=>t.id!==e))},Ne=async()=>{if(_e.length!==0){Se(!0);try{let e=await Promise.all(_e.map(async({file:e})=>({dataUrl:await V_(e)}))),t={id:`model_${Date.now()}`,photos:e,savedAt:new Date().toISOString()},n=[t,...k];localStorage.setItem(L_,JSON.stringify(n)),localStorage.setItem(R_,t.id),me(n),ge(t.id),ve([]),be(!1),r(`heavy`),Te(`Модель сохранена!`,`success`)}catch{Te(`Не удалось сохранить модель`,`error`)}Se(!1)}},Pe=e=>{r(`medium`),localStorage.setItem(R_,e),ge(e),be(!1),Te(`Модель выбрана`,`success`)},Fe=(e,t)=>{t?.stopPropagation(),r(`medium`);let n=k.filter(t=>t.id!==e);if(localStorage.setItem(L_,JSON.stringify(n)),me(n),he===e){let e=n[0]?.id??null;e?localStorage.setItem(R_,e):localStorage.removeItem(R_),ge(e)}Te(`Модель удалена`,`default`)},Ie=()=>{r(`light`),be(!0)},Le=()=>{be(!1),ve([])},Re=e=>{r(`light`),s(e),e!==`reference`&&(h([]),_([])),e!==`enhance`&&(y(null),S(``)),be(!1),ve([])},ze=e=>{y(e);let t=new FileReader;t.onload=e=>S(e.target?.result),t.readAsDataURL(e)},Be=async()=>{if(v){r(`medium`),l(`loading`);try{let e=new FormData;e.append(`photo`,v);let{data:{task_id:t}}=await y_(e),n=await C_(t);if(n.state!==`success`||!n.image_url)throw Error(n.error||`task failed`);se([n.image_url]),l(`result`)}catch(e){l(`upload`),Te(e?.response?.data?.error||e?.message||`Ошибка улучшения фото`,`error`)}}},Ve=Ce?!0:u.length>0,He=()=>{let e=new FormData;if(Ce)for(let t of Ce.photos)e.append(`model_photo`,H_(t.dataUrl),`model.jpg`);else for(let t of u)e.append(`photo`,t);if(o===`reference`)for(let t of m)e.append(`reference`,t);return T&&e.append(`prompt`,T),ie&&o===`simple`&&e.append(`preset`,ie.id),te!==`auto`&&e.append(`aspect_ratio`,te),e},Ue=async()=>{if(!Ve)return;r(`medium`),l(`loading`);let e=o===`reference`?v_:__;try{let t=await Promise.all(Array.from({length:ne},()=>e(He()))),n=await Promise.all(t.map(e=>C_(e.data.task_id))),r=[];for(let e of n){if(e.state!==`success`||!e.image_url)throw Error(e.error||`task failed`);r.push(e.image_url)}se(r)}catch(e){Te(e?.response?.data?.error||e?.message||`Ошибка генерации`,`error`),l(`upload`);return}r(`heavy`),l(`result`)};(0,b.useEffect)(()=>{D(new Set(oe))},[oe]);let We=e=>{r(`light`),D(t=>{if(t.has(e)&&t.size===1)return t;let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},Ge=async()=>{let e=oe.filter(e=>ce.has(e)&&!O.has(e));if(e.length){r(`medium`),de(`sending`);try{for(let t of e)await S_(t),le(e=>new Set(e).add(t));r(`heavy`),Te(e.length===1?`Фото отправлено в чат`:`${e.length} фото отправлены в чат`,`success`),setTimeout(()=>Ke(),1200)}catch{r(`heavy`),Te(`Не удалось отправить`,`error`)}finally{de(null)}}},Ke=()=>{r(`light`),d([]),p([]),h([]),_([]),se([]),le(new Set),l(`upload`)},qe=ie!=null&&o===`simple`?(0,I.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:5,flexShrink:0,maxWidth:`58%`,background:`rgba(139,92,246,0.15)`,border:`1px solid rgba(139,92,246,0.3)`,borderRadius:100,color:`#a78bfa`,fontSize:12,padding:`3px 4px 3px 10px`},children:[(0,I.jsx)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,minWidth:0},children:ie.name}),(0,I.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),ae()},"aria-label":`Убрать пресет`,style:{flexShrink:0,border:`none`,background:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`2px 2px 2px 4px`,margin:0,lineHeight:0},children:(0,I.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,children:(0,I.jsx)(`path`,{d:`M6 6L18 18M18 6L6 18`,stroke:`#a78bfa`,strokeWidth:`2.2`,strokeLinecap:`round`})})})]}):null,Je={...p_,paddingBottom:`max(90px, calc(90px + env(safe-area-inset-bottom)))`,gap:c===`result`?10:14,display:`flex`,flexDirection:`column`},Ye={flex:1,display:`flex`,flexDirection:`column`,minHeight:0,overflow:`hidden`},Xe=(0,I.jsxs)(m_,{style:{padding:16},children:[k.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:12},children:[(0,I.jsx)(`p`,{style:{...q_,margin:0},children:`История моделей`}),(0,I.jsxs)(`span`,{style:{fontSize:11,color:`rgba(255,255,255,0.25)`},children:[k.length,` `,k.length===1?`модель`:k.length<5?`модели`:`моделей`]})]}),(0,I.jsx)(`div`,{style:{display:`flex`,gap:10,overflowX:`auto`,paddingBottom:6,marginBottom:18,WebkitOverflowScrolling:`touch`,scrollbarWidth:`none`},children:k.map(e=>{let t=e.id===he,n=e.photos[0]?.dataUrl;return(0,I.jsxs)(`div`,{style:{flexShrink:0,position:`relative`,width:80},children:[(0,I.jsxs)(`button`,{type:`button`,onClick:()=>!t&&Pe(e.id),style:{display:`block`,width:80,background:`transparent`,border:`none`,padding:0,cursor:t?`default`:`pointer`},children:[(0,I.jsxs)(`div`,{style:{width:80,height:96,borderRadius:12,overflow:`hidden`,border:t?`2px solid #8b5cf6`:`1.5px solid rgba(255,255,255,0.1)`,boxShadow:t?`0 0 16px rgba(139,92,246,0.5)`:`none`,transition:`border 0.15s, box-shadow 0.15s`,position:`relative`},children:[n?(0,I.jsx)(`img`,{src:n,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}}):(0,I.jsx)(`div`,{style:{width:`100%`,height:`100%`,background:`rgba(139,92,246,0.1)`}}),!t&&(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(0,0,0,0.18)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsx)(`div`,{style:{background:`rgba(255,255,255,0.15)`,borderRadius:20,padding:`3px 8px`,fontSize:10,color:`rgba(255,255,255,0.8)`,fontFamily:`Inter, sans-serif`,fontWeight:500},children:`Выбрать`})})]}),t&&(0,I.jsx)(`div`,{style:{position:`absolute`,top:6,left:6,width:22,height:22,borderRadius:`50%`,background:`#8b5cf6`,border:`2px solid #0a0a0f`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 2px 6px rgba(139,92,246,0.6)`},children:(0,I.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 12 12`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M2 6L5 9L10 3`,stroke:`#fff`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,I.jsxs)(`p`,{style:{margin:`5px 0 0`,fontSize:10,textAlign:`center`,fontFamily:`Inter, sans-serif`,color:t?`#a78bfa`:`rgba(255,255,255,0.3)`,fontWeight:t?600:400},children:[t?`● `:``,G_(e.savedAt)]})]}),(0,I.jsx)(`button`,{type:`button`,onClick:t=>Fe(e.id,t),style:{position:`absolute`,top:-6,right:-6,width:22,height:22,borderRadius:`50%`,background:`rgba(20,10,40,0.95)`,border:`1.5px solid rgba(255,255,255,0.18)`,color:`rgba(255,255,255,0.55)`,fontSize:13,fontWeight:700,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0,lineHeight:1},children:`×`})]},e.id)})}),(0,I.jsx)(`div`,{style:{height:1,background:`rgba(139,92,246,0.12)`,marginBottom:16}})]}),k.length===0?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`p`,{style:q_,children:`Установить модель`}),(0,I.jsx)(`p`,{style:{fontSize:13,color:`rgba(255,255,255,0.5)`,margin:`0 0 14px`,lineHeight:1.5},children:`Добавь любое количество фото — они будут использоваться вместо загрузки каждый раз`})]}):(0,I.jsx)(`p`,{style:{...q_,marginBottom:12},children:`Добавить новую модель`}),_e.length>0&&(0,I.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,marginBottom:12},children:_e.map(e=>(0,I.jsxs)(`div`,{style:{position:`relative`},children:[(0,I.jsx)(`div`,{style:{width:72,height:72,borderRadius:10,overflow:`hidden`,border:`1px solid rgba(139,92,246,0.3)`},children:(0,I.jsx)(`img`,{src:e.preview,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}),(0,I.jsx)(`button`,{onClick:()=>Me(e.id),style:{position:`absolute`,top:-7,right:-7,width:22,height:22,borderRadius:`50%`,background:`rgba(15,10,30,0.95)`,border:`1.5px solid rgba(139,92,246,0.35)`,color:`rgba(255,255,255,0.75)`,fontSize:13,fontWeight:700,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0,lineHeight:1,backdropFilter:`blur(6px)`},children:`×`})]},e.id))}),(0,I.jsx)(`input`,{ref:we,type:`file`,accept:`image/*`,multiple:!0,style:{display:`none`},onChange:je}),(0,I.jsxs)(`button`,{onClick:()=>we.current?.click(),style:{width:`100%`,background:`rgba(139,92,246,0.08)`,border:`1.5px dashed rgba(139,92,246,0.4)`,borderRadius:12,color:`#a78bfa`,fontSize:14,fontWeight:500,padding:`12px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8},children:[(0,I.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:`#8b5cf6`,strokeWidth:`2`}),(0,I.jsx)(`path`,{d:`M12 8V16M8 12H16`,stroke:`#8b5cf6`,strokeWidth:`2`,strokeLinecap:`round`})]}),_e.length>0?`Добавить ещё`:`Добавить фото`]}),_e.length>0&&(0,I.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:12},children:[(0,I.jsx)(h_,{onClick:Ne,disabled:xe,style:{flex:1},children:xe?`Сохраняем…`:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16L21 8V19C21 20.1 20.1 21 19 21Z`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M17 21V13H7V21`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M7 3V8H15`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),`Сохранить`]})}),(0,I.jsx)(`button`,{onClick:()=>ve([]),style:{background:`rgba(255,255,255,0.06)`,border:`1px solid rgba(255,255,255,0.1)`,borderRadius:12,color:`rgba(255,255,255,0.5)`,fontSize:13,padding:`0 16px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`},children:`Отмена`})]})]});return(0,I.jsxs)(`div`,{style:f_,children:[(0,I.jsx)(Qg,{message:fe.message,type:fe.type,visible:fe.visible,onHide:Ee}),(0,I.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,minHeight:0,overflow:`hidden`},children:(0,I.jsxs)(eh,{mode:`wait`,children:[c===`loading`&&(0,I.jsxs)(Xg.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.2},style:Ye,children:[(0,I.jsx)(d_,{title:ne>1?`Создаём ${ne} фото`:`Создаём фото`,subtitle:`Пару секунд…`,profileButton:!0}),(0,I.jsx)(`div`,{style:{...Je,paddingTop:8},children:(0,I.jsx)(m_,{style:{padding:20},children:(0,I.jsx)(g_,{message:ne>1?`Генерируем ${ne} фотографии…`:`Создаём твоё фото...`})})})]},`loading`),c===`result`&&(0,I.jsxs)(Xg.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.25},style:{...Ye,paddingBottom:0},children:[(0,I.jsx)(d_,{title:oe.length>1?`Готово ✦ ${oe.length} фото`:`Готово ✦`,subtitle:oe.length>1?`Нажми на фото, чтобы снять выбор`:void 0,profileButton:!0}),(0,I.jsx)(`div`,{style:{flex:1,minHeight:0,display:`flex`,overflowX:`auto`,overflowY:`hidden`,scrollSnapType:`x mandatory`,scrollBehavior:`smooth`,WebkitOverflowScrolling:`touch`,msOverflowStyle:`none`,scrollbarWidth:`none`,gap:12,padding:`12px 16px 0`},children:oe.map((e,t)=>{let n=ce.has(e),r=O.has(e),i=ce.size===1&&n,a=oe.length===1;return(0,I.jsxs)(`div`,{onClick:()=>!a&&!r&&We(e),style:{flex:`0 0 calc(100% - 32px)`,scrollSnapAlign:`center`,position:`relative`,borderRadius:20,overflow:`hidden`,border:r?`2px solid rgba(139,92,246,0.7)`:n?`2px solid rgba(139,92,246,0.55)`:`2px solid rgba(255,255,255,0.1)`,boxShadow:n&&!r?`0 0 32px rgba(139,92,246,0.25)`:`0 0 16px rgba(0,0,0,0.3)`,cursor:a||r||i?`default`:`pointer`,transition:`border-color 0.2s, box-shadow 0.2s`},children:[(0,I.jsx)(`img`,{src:e,alt:`result ${t+1}`,style:{width:`100%`,height:`100%`,display:`block`,objectFit:`cover`}}),!a&&!n&&!r&&(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(0,0,0,0.52)`,transition:`opacity 0.2s`}}),r&&(0,I.jsx)(Xg.div,{initial:{opacity:0},animate:{opacity:1},style:{position:`absolute`,inset:0,background:`rgba(139,92,246,0.18)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsx)(`div`,{style:{width:52,height:52,borderRadius:`50%`,background:`rgba(139,92,246,0.9)`,backdropFilter:`blur(8px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 24px rgba(139,92,246,0.5)`},children:(0,I.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M20 6L9 17L4 12`,stroke:`#fff`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})}),!a&&!r&&(0,I.jsx)(`div`,{style:{position:`absolute`,top:12,right:12,width:30,height:30,borderRadius:`50%`,background:n?`#8b5cf6`:`rgba(10,10,15,0.6)`,border:n?`2px solid #8b5cf6`:`2px solid rgba(255,255,255,0.4)`,display:`flex`,alignItems:`center`,justifyContent:`center`,backdropFilter:`blur(8px)`,boxShadow:n?`0 0 14px rgba(139,92,246,0.7)`:`none`,transition:`all 0.15s ease`},children:n&&(0,I.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M20 6L9 17L4 12`,stroke:`#fff`,strokeWidth:`2.8`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),!a&&(0,I.jsxs)(`div`,{style:{position:`absolute`,top:12,left:12,background:`rgba(10,10,15,0.65)`,backdropFilter:`blur(8px)`,border:`1px solid rgba(255,255,255,0.1)`,borderRadius:20,padding:`3px 10px`,fontSize:12,fontWeight:600,color:`rgba(255,255,255,0.8)`},children:[t+1,` / `,oe.length]})]},t)})}),(0,I.jsxs)(`div`,{style:{padding:`12px 16px`,paddingBottom:`max(12px, calc(12px + env(safe-area-inset-bottom)))`,display:`flex`,flexDirection:`column`,gap:8,background:`linear-gradient(to top, rgba(10,10,15,0.95) 70%, transparent)`},children:[(()=>{let e=[...ce].filter(e=>!O.has(e)).length;return(0,I.jsxs)(h_,{onClick:Ge,disabled:!!ue||e===0,children:[(0,I.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M22 2L11 13`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M22 2L15 22L11 13L2 9L22 2Z`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),ue?`Отправляю...`:e===0?`✓ Все отправлены`:oe.length===1?`Отправить фото`:`Отправить выбранные (${e})`]})})(),(0,I.jsx)(h_,{variant:`ghost`,onClick:Ke,children:`Создать ещё`})]})]},`result`),c===`upload`&&(0,I.jsxs)(Xg.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.15},style:Ye,children:[(0,I.jsx)(d_,{title:`Создать фото`,subtitle:`Выбери режим и загрузи фото`,profileButton:!0}),(0,I.jsxs)(`div`,{style:Je,children:[!n&&(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(139,92,246,0.15)`,borderRadius:14,padding:4,gap:4},children:[{key:`simple`,label:`Обычный`,icon:`✦`},{key:`reference`,label:`Референс`,icon:`◈`},{key:`enhance`,label:`Обработка`,icon:`✧`}].map(e=>(0,I.jsxs)(`button`,{onClick:()=>Re(e.key),style:{background:o===e.key?`linear-gradient(135deg, #8b5cf6, #6d28d9)`:`transparent`,border:`none`,borderRadius:10,color:o===e.key?`#ffffff`:`rgba(255,255,255,0.4)`,fontSize:12,fontWeight:o===e.key?600:400,padding:`9px 4px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,transition:`all 0.15s ease`,boxShadow:o===e.key?`0 0 12px rgba(139,92,246,0.4)`:`none`},children:[(0,I.jsx)(`span`,{style:{fontSize:13},children:e.icon}),e.label]},e.key))}),(0,I.jsxs)(Xg.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.2},style:{display:`flex`,flexDirection:`column`,gap:14},children:[o!==`enhance`&&Ce?(0,I.jsxs)(m_,{style:{padding:0,overflow:`hidden`},children:[(0,I.jsxs)(`button`,{type:`button`,onClick:Ie,style:{width:`100%`,background:`transparent`,border:`none`,padding:`11px 14px`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:8},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,I.jsx)(`p`,{style:{...q_,margin:0},children:`Моя модель`}),k.length>1&&(0,I.jsxs)(`span`,{style:{fontSize:10,color:`rgba(167,139,250,0.7)`,background:`rgba(139,92,246,0.12)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:6,padding:`1px 6px`,fontFamily:`Inter, sans-serif`},children:[k.length,` сохранено`]})]}),(0,I.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0},children:[(0,I.jsx)(`path`,{d:`M11 4H4C3.4 4 3 4.4 3 5V20C3 20.6 3.4 21 4 21H19C19.6 21 20 20.6 20 20V13`,stroke:`rgba(167,139,250,0.5)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M18.5 2.5L21.5 5.5L12 15H9V12L18.5 2.5Z`,stroke:`rgba(167,139,250,0.5)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),(0,I.jsx)(`div`,{style:{height:1,background:`rgba(139,92,246,0.1)`}}),(0,I.jsxs)(`div`,{style:{padding:`12px 14px 14px`},children:[(0,I.jsx)(`div`,{style:{display:`flex`,gap:8,overflowX:`auto`,paddingBottom:2},children:Ce.photos.map((e,t)=>(0,I.jsx)(`div`,{style:{flexShrink:0},children:(0,I.jsx)(`div`,{style:{width:58,height:58,borderRadius:10,overflow:`hidden`,border:`1px solid rgba(139,92,246,0.4)`},children:(0,I.jsx)(`img`,{src:e.dataUrl,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}})})},t))}),(0,I.jsx)(`p`,{style:{fontSize:12,color:`rgba(255,255,255,0.3)`,marginTop:10,marginBottom:0},children:`Используется вместо своего фото`})]})]}):o===`enhance`?null:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`button`,{type:`button`,onClick:Ie,style:{background:`transparent`,border:`1px solid rgba(139,92,246,0.25)`,borderRadius:12,color:`rgba(167,139,250,0.8)`,fontSize:13,fontWeight:500,padding:`10px 16px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:7},children:[(0,I.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`4`,stroke:`#a78bfa`,strokeWidth:`2`}),(0,I.jsx)(`path`,{d:`M12 8V16M8 12H16`,stroke:`#a78bfa`,strokeWidth:`2`,strokeLinecap:`round`})]}),`Установить модель`]}),(0,I.jsxs)(m_,{style:{padding:14},children:[(0,I.jsx)(`p`,{style:{...q_,margin:`0 0 10px`},children:`Твоё фото`}),(0,I.jsx)(I_,{files:u,previews:f,onAdd:De,onRemove:Oe,onError:e=>Te(e,`error`),maxPhotos:10})]})]}),(0,I.jsx)(eh,{mode:`sync`,children:o===`reference`&&(0,I.jsx)(Xg.div,{initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.2},style:{flexShrink:0},children:(0,I.jsxs)(m_,{style:{padding:14},children:[(0,I.jsx)(`p`,{style:{...q_,margin:`0 0 10px`},children:`Референс`}),(0,I.jsx)(I_,{files:m,previews:g,onAdd:ke,onRemove:Ae,onError:e=>Te(e,`error`),maxPhotos:1})]})},`ref`)}),o!==`enhance`&&(()=>{let e=!n&&o!==`reference`;return(0,I.jsxs)(m_,{style:e?{padding:0,overflow:`hidden`}:{padding:14},children:[e&&(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(`div`,{style:{padding:`10px 12px 6px`},children:[(0,I.jsx)(`p`,{style:{...q_,margin:`0 0 8px`},children:`Промпт`}),(0,I.jsxs)(`div`,{style:{position:`relative`},children:[(0,I.jsx)(`textarea`,{value:T,onChange:e=>ee(e.target.value.slice(0,200)),placeholder:`Например: осенний парк, мягкий свет, бежевые тона`,rows:3,style:{width:`100%`,background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:10,color:`#ffffff`,fontSize:14,padding:`10px 11px`,resize:`none`,outline:`none`,fontFamily:`Inter, sans-serif`,boxSizing:`border-box`,lineHeight:1.5}}),(0,I.jsxs)(`span`,{style:{position:`absolute`,bottom:8,right:10,fontSize:11,color:`rgba(255,255,255,0.2)`},children:[T.length,`/200`]})]}),qe&&(0,I.jsx)(`div`,{style:{marginTop:8},children:qe})]})}),(0,I.jsxs)(`div`,{style:e?{padding:`6px 12px 10px`,display:`flex`,flexDirection:`column`,gap:12}:{display:`flex`,flexDirection:`column`,gap:14},children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{...q_,marginBottom:6},children:`Соотношение сторон`}),(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(5, 1fr)`,gap:5},children:z_.map(e=>{let t=te===e.value;return(0,I.jsx)(`button`,{type:`button`,onClick:()=>{r(`light`),E(e.value)},style:{height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:t?`rgba(139,92,246,0.22)`:`rgba(255,255,255,0.04)`,border:`1px solid ${t?`rgba(139,92,246,0.65)`:`rgba(255,255,255,0.08)`}`,borderRadius:6,cursor:`pointer`,fontFamily:`Inter, sans-serif`,boxShadow:t?`0 0 10px rgba(139,92,246,0.2)`:`none`,transition:`all 0.15s ease`,padding:0},children:(0,I.jsx)(`span`,{style:{fontSize:11,fontWeight:t?700:500,lineHeight:1,color:t?`#c4b5fd`:`rgba(255,255,255,0.38)`},children:e.label})},e.value)})})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{...q_,marginBottom:6},children:`Количество фото`}),(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(5, 1fr)`,gap:5},children:B_.map(e=>{let t=a&&e>1,n=ne===e;return(0,I.jsx)(`button`,{type:`button`,onClick:()=>{t||(r(`light`),re(e))},style:{height:28,display:`flex`,alignItems:`center`,justifyContent:`center`,background:n?`rgba(139,92,246,0.22)`:`rgba(255,255,255,0.04)`,border:`1px solid ${n?`rgba(139,92,246,0.65)`:`rgba(255,255,255,0.08)`}`,borderRadius:6,cursor:t?`not-allowed`:`pointer`,fontFamily:`Inter, sans-serif`,opacity:t?.32:1,boxShadow:n?`0 0 10px rgba(139,92,246,0.2)`:`none`,transition:`all 0.15s ease`,padding:0},children:(0,I.jsx)(`span`,{style:{fontSize:11,fontWeight:n?700:500,color:n?`#c4b5fd`:`rgba(255,255,255,0.45)`},children:e})},e)})})]})]})]})})(),o!==`enhance`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(h_,{onClick:Ue,disabled:!Ve,style:{marginTop:2},children:[(0,I.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M12 2L2 7L12 12L22 7L12 2Z`,stroke:`#fff`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M2 17L12 22L22 17`,stroke:`#fff`,strokeWidth:`2`,strokeLinejoin:`round`}),(0,I.jsx)(`path`,{d:`M2 12L12 17L22 12`,stroke:`#fff`,strokeWidth:`2`,strokeLinejoin:`round`})]}),ne>1?`Создать ${ne} фото`:o===`reference`?`Создать по референсу`:`Создать фото`]}),!Ve&&(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.25)`,fontSize:12,textAlign:`center`,margin:0},children:`Сначала загрузи хотя бы одно фото`})]}),o===`enhance`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(m_,{style:{padding:0,overflow:`hidden`},children:(0,I.jsxs)(`div`,{style:{padding:`10px 12px`},children:[(0,I.jsx)(`p`,{style:{...q_,margin:`0 0 8px`},children:`Фото для улучшения`}),x?(0,I.jsxs)(`div`,{style:{position:`relative`},children:[(0,I.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),y(null),S(``)},style:{position:`absolute`,top:-8,right:-8,zIndex:10,width:24,height:24,borderRadius:`50%`,background:`rgba(20,10,40,0.95)`,border:`1.5px solid rgba(255,255,255,0.18)`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0},children:(0,I.jsx)(`svg`,{width:`10`,height:`10`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M6 6L18 18M18 6L6 18`,stroke:`rgba(255,255,255,0.7)`,strokeWidth:`2.5`,strokeLinecap:`round`})})}),(0,I.jsxs)(`label`,{style:{display:`block`,cursor:`pointer`},children:[(0,I.jsx)(`input`,{type:`file`,accept:`image/*`,style:{display:`none`},onChange:e=>{let t=e.target.files?.[0];t&&ze(t)}}),(0,I.jsxs)(`div`,{style:{position:`relative`,borderRadius:12,overflow:`hidden`,aspectRatio:`1/1`},children:[(0,I.jsx)(`img`,{src:x,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`}}),(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(0,0,0,0.35)`,display:`flex`,alignItems:`center`,justifyContent:`center`,opacity:0,transition:`opacity 0.2s`},onMouseEnter:e=>e.currentTarget.style.opacity=`1`,onMouseLeave:e=>e.currentTarget.style.opacity=`0`,children:(0,I.jsx)(`div`,{style:{width:48,height:48,borderRadius:`50%`,background:`rgba(139,92,246,0.7)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsxs)(`svg`,{width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`polyline`,{points:`17 8 12 3 7 8`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`15`,stroke:`#fff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})})]})]})]}):(0,I.jsxs)(`label`,{style:{display:`block`,cursor:`pointer`},children:[(0,I.jsx)(`input`,{type:`file`,accept:`image/*`,style:{display:`none`},onChange:e=>{let t=e.target.files?.[0];t&&ze(t)}}),(0,I.jsx)(`div`,{style:{border:`1.5px dashed rgba(139,92,246,0.4)`,borderRadius:12,aspectRatio:`1/1`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`rgba(139,92,246,0.04)`},children:(0,I.jsx)(T_,{size:56})})]})]})}),(0,I.jsxs)(h_,{onClick:Be,disabled:!v,children:[(0,I.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z`,stroke:`#fff`,strokeWidth:`2`,strokeLinejoin:`round`})}),`Улучшить фото`]}),!v&&(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.25)`,fontSize:12,textAlign:`center`,margin:0},children:`Сначала загрузи фото`})]})]})]})]},`upload`)]})}),(0,M_.createPortal)((0,I.jsx)(eh,{children:ye&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Xg.div,{role:`presentation`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:Le,style:{position:`fixed`,inset:0,zIndex:250,background:`rgba(0,0,0,0.55)`,backdropFilter:`blur(4px)`}},`model-sheet-backdrop`),(0,I.jsxs)(Xg.div,{role:`dialog`,"aria-modal":`true`,initial:{y:`100%`},animate:{y:0},exit:{y:`100%`},transition:{type:`spring`,damping:32,stiffness:380},style:{position:`fixed`,left:0,right:0,bottom:0,zIndex:251,maxHeight:`min(88dvh, 560px)`,overflowY:`auto`,WebkitOverflowScrolling:`touch`,paddingBottom:`max(20px, calc(16px + env(safe-area-inset-bottom)))`,paddingLeft:16,paddingRight:16,paddingTop:10,borderTopLeftRadius:20,borderTopRightRadius:20,background:`linear-gradient(180deg, rgba(16,16,24,0.98) 0%, #0a0a0f 100%)`,border:`1px solid rgba(139,92,246,0.2)`,borderBottom:`none`,boxShadow:`0 -12px 48px rgba(0,0,0,0.55)`},children:[(0,I.jsx)(`div`,{style:{width:36,height:4,borderRadius:4,background:`rgba(255,255,255,0.15)`,margin:`0 auto 14px`}}),Xe]},`model-sheet`)]})}),document.body)]})}var q_={color:`rgba(255,255,255,0.4)`,fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,margin:`0 0 10px`},J_=(e,t)=>qn.post(`/api/payment/create`,{plan:e,method:t}),Y_={lite:[`30 генераций в месяц`,`Безлимитный ИИ ассистент`,`Работа с референсом`,`Обработка фото`,`Пресеты эстетик`],pro:[`100 генераций в месяц`,`Качество 4K`,`Серии фото`]},X_=[];function Z_(){let e=Si(),{hapticFeedback:t}=so(),[n,r]=(0,b.useState)({open:!1,plan:null}),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(null),[c,l]=(0,b.useState)({visible:!1,message:``}),u=e=>l({visible:!0,message:e}),d=(0,b.useCallback)(()=>l(e=>({...e,visible:!1})),[]),f=e=>{t(`light`),r({open:!0,plan:e})},p=async e=>{if(n.plan){t(`medium`),a(!0);try{await $n(),console.log(`[pinst][pay] createPayment plan=%s method=%s`,n.plan,e);let i=await J_(n.plan,e);console.log(`[pinst][pay] createPayment response:`,JSON.stringify(i.data));let{url:o}=i.data,c=window?.Telegram?.WebApp;c?.openLink?c.openLink(o):window.open(o,`_blank`);let l=async()=>{if(!document.hidden){document.removeEventListener(`visibilitychange`,l),clearTimeout(d),await new Promise(e=>setTimeout(e,1500));try{let e=await co();a(!1),e.data.subscription?(r({open:!1,plan:null}),s(n.plan),t(`heavy`)):u(`Оплата обрабатывается — статус придёт в Telegram`)}catch{a(!1),u(`Не удалось проверить статус — загляни в профиль`)}}},d=setTimeout(()=>{document.removeEventListener(`visibilitychange`,l),a(!1),u(`Время ожидания истекло. Проверь статус в профиле`)},600*1e3);document.addEventListener(`visibilitychange`,l)}catch(e){a(!1);let t=e?.response?.status,n=e?.response?.data?.error||e?.message||`unknown`;console.error(`[pinst][pay] error status=%s msg=%s`,t,n),u(`Ошибка ${t??``}: ${n}`)}}};return o?(0,I.jsxs)(Xg.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:`80px 24px`,gap:24,position:`relative`,zIndex:1},children:[(0,I.jsx)(`div`,{style:{width:80,height:80,borderRadius:`50%`,background:`rgba(34,197,94,0.15)`,border:`2px solid rgba(34,197,94,0.5)`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 30px rgba(34,197,94,0.3)`},children:(0,I.jsx)(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M5 12L10 17L19 8`,stroke:`#22c55e`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,I.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,I.jsx)(`h2`,{style:{color:`#ffffff`,fontSize:22,fontWeight:600,margin:`0 0 8px`},children:`Подписка активирована!`}),(0,I.jsxs)(`p`,{style:{color:`rgba(255,255,255,0.5)`,fontSize:15,margin:0},children:[`Осталось `,o===`pro`?100:30,` генераций`]})]}),(0,I.jsx)(h_,{onClick:()=>{t(`light`),e(`/create`)},children:`Создать первое фото`})]}):(0,I.jsxs)(`div`,{style:{padding:`24px 16px`,paddingBottom:`max(80px, calc(80px + env(safe-area-inset-bottom)))`,display:`flex`,flexDirection:`column`,gap:16,position:`relative`},children:[(0,I.jsx)(Qg,{message:c.message,type:`error`,visible:c.visible,onHide:d}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,I.jsx)(`button`,{onClick:()=>{t(`light`),e(-1)},style:{background:`rgba(255,255,255,0.06)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:`50%`,width:36,height:36,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,I.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M15 18L9 12L15 6`,stroke:`rgba(255,255,255,0.7)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,I.jsx)(`h2`,{style:{color:`#ffffff`,fontSize:22,fontWeight:600,margin:0},children:`Выбери тариф`})]}),(0,I.jsxs)(m_,{style:{padding:20},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:16},children:[(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4},children:[(0,I.jsx)(`h3`,{style:{color:`#ffffff`,fontSize:20,fontWeight:600,margin:0},children:`Lite`}),(0,I.jsx)(`span`,{style:{background:`rgba(139,92,246,0.1)`,border:`1px solid rgba(139,92,246,0.3)`,borderRadius:100,color:`#a78bfa`,fontSize:11,fontWeight:600,padding:`2px 10px`},children:`☕ По цене чашки кофе`})]}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:13,margin:0},children:`Ежемесячная подписка`})]}),(0,I.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,I.jsx)(`span`,{style:{color:`#ffffff`,fontSize:22,fontWeight:700},children:`349 ₽`}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:12,margin:`2px 0 0`},children:`/ месяц`})]})]}),(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,marginBottom:16},children:Y_.lite.map(e=>(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,I.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,I.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:`rgba(139,92,246,0.5)`,strokeWidth:`1.5`}),(0,I.jsx)(`path`,{d:`M5 8L7 10L11 6`,stroke:`#8b5cf6`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,I.jsx)(`span`,{style:{color:`rgba(255,255,255,0.7)`,fontSize:14},children:e})]},e))}),(0,I.jsx)(h_,{variant:`secondary`,onClick:()=>f(`lite`),children:`Выбрать Lite`})]}),(0,I.jsxs)(m_,{style:{padding:20,border:`1px solid rgba(139,92,246,0.5)`,boxShadow:`0 0 30px rgba(139,92,246,0.15)`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:16},children:[(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:4},children:[(0,I.jsx)(`h3`,{style:{color:`#ffffff`,fontSize:20,fontWeight:600,margin:0},children:`Pro`}),(0,I.jsx)(`span`,{style:{background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,borderRadius:100,color:`#fff`,fontSize:11,fontWeight:600,padding:`2px 10px`},children:`🔥 Популярный`})]}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:13,margin:0},children:`Ежемесячная подписка`})]}),(0,I.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,I.jsx)(`span`,{style:{color:`#ffffff`,fontSize:22,fontWeight:700},children:`899 ₽`}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:12,margin:`2px 0 0`},children:`/ месяц`})]})]}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.35)`,fontSize:12,margin:`0 0 10px`},children:`Всё из Lite плюс:`}),(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,marginBottom:16},children:Y_.pro.map(e=>{let t=X_.includes(e);return(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,I.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,I.jsx)(`circle`,{cx:`8`,cy:`8`,r:`7`,stroke:t?`rgba(139,92,246,0.3)`:`rgba(139,92,246,0.5)`,strokeWidth:`1.5`}),(0,I.jsx)(`path`,{d:`M5 8L7 10L11 6`,stroke:t?`rgba(139,92,246,0.4)`:`#8b5cf6`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,I.jsxs)(`span`,{style:{color:t?`rgba(255,255,255,0.3)`:`rgba(255,255,255,0.7)`,fontSize:14},children:[e,t&&(0,I.jsx)(`span`,{style:{marginLeft:6,fontSize:10,color:`rgba(139,92,246,0.5)`,background:`rgba(139,92,246,0.1)`,borderRadius:4,padding:`1px 5px`},children:`soon`})]})]},e)})}),(0,I.jsx)(h_,{onClick:()=>f(`pro`),children:`Выбрать Pro`})]}),(0,I.jsx)(eh,{children:n.open&&(0,I.jsx)(Xg.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.7)`,backdropFilter:`blur(8px)`,WebkitBackdropFilter:`blur(8px)`,zIndex:200,display:`flex`,alignItems:`flex-end`},onClick:()=>!i&&r({open:!1,plan:null}),children:(0,I.jsxs)(Xg.div,{initial:{y:`100%`},animate:{y:0},exit:{y:`100%`},transition:{type:`spring`,damping:25,stiffness:300},onClick:e=>e.stopPropagation(),style:{width:`100%`,background:`#0f0f18`,borderTopLeftRadius:24,borderTopRightRadius:24,border:`1px solid rgba(139,92,246,0.2)`,padding:`24px 20px`,paddingBottom:`max(24px, calc(24px + env(safe-area-inset-bottom)))`,display:`flex`,flexDirection:`column`,gap:16,maxHeight:`90vh`,overflowY:`auto`},children:[(0,I.jsx)(`div`,{style:{width:40,height:4,borderRadius:100,background:`rgba(255,255,255,0.2)`,margin:`0 auto -8px`}}),(0,I.jsx)(`h3`,{style:{color:`#ffffff`,fontSize:18,fontWeight:600,margin:0,textAlign:`center`},children:`Способ оплаты`}),(0,I.jsxs)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:13,margin:`-8px 0 0`,textAlign:`center`},children:[`Тариф `,n.plan===`pro`?`Pro · 899 ₽/мес`:`Lite · 349 ₽/мес`]}),i?(0,I.jsxs)(`div`,{style:{padding:`20px 0`,textAlign:`center`},children:[(0,I.jsx)(`div`,{style:{width:32,height:32,border:`3px solid rgba(139,92,246,0.3)`,borderTopColor:`#8b5cf6`,borderRadius:`50%`,animation:`spin 0.8s linear infinite`,margin:`0 auto 12px`}}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.5)`,fontSize:14,margin:0},children:`Ожидаем оплату...`})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`button`,{onClick:()=>p(`card`),style:{background:`rgba(255,255,255,0.05)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:16,padding:`16px 20px`,display:`flex`,alignItems:`center`,gap:14,cursor:`pointer`},children:[(0,I.jsx)(`div`,{style:{width:40,height:40,borderRadius:12,background:`rgba(139,92,246,0.15)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`rect`,{x:`2`,y:`5`,width:`20`,height:`14`,rx:`3`,stroke:`#8b5cf6`,strokeWidth:`2`}),(0,I.jsx)(`path`,{d:`M2 10H22`,stroke:`#8b5cf6`,strokeWidth:`2`}),(0,I.jsx)(`path`,{d:`M6 15H8M10 15H12`,stroke:`#8b5cf6`,strokeWidth:`2`,strokeLinecap:`round`})]})}),(0,I.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:15,fontWeight:500,margin:0},children:`Картой`}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:12,margin:`2px 0 0`},children:`разовая оплата`})]})]}),(0,I.jsxs)(`button`,{onClick:()=>p(`sbp`),style:{background:`rgba(255,255,255,0.05)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:16,padding:`16px 20px`,display:`flex`,alignItems:`center`,gap:14,cursor:`pointer`},children:[(0,I.jsx)(`div`,{style:{width:40,height:40,borderRadius:12,background:`rgba(139,92,246,0.15)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M3 12H21M3 6H21M3 18H12`,stroke:`#8b5cf6`,strokeWidth:`2`,strokeLinecap:`round`})})}),(0,I.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:15,fontWeight:500,margin:0},children:`СБП`}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:12,margin:`2px 0 0`},children:`разовая оплата`})]})]})]})]})})})]})}function Q_({remaining:e,limit:t}){let n=(t-e)/t*100,r=e<=3,i=r?`#ef4444`:`#8b5cf6`;return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,I.jsx)(`span`,{style:{fontSize:14,color:`rgba(255,255,255,0.6)`},children:`Генерации`}),(0,I.jsxs)(`span`,{style:{background:`rgba(139,92,246,0.2)`,border:`1px solid rgba(139,92,246,0.4)`,borderRadius:100,color:r?`#ef4444`:`#a78bfa`,fontSize:12,padding:`4px 12px`,fontWeight:600},children:[e,` / `,t]})]}),(0,I.jsx)(`div`,{style:{height:6,borderRadius:100,background:`rgba(255,255,255,0.08)`,overflow:`hidden`},children:(0,I.jsx)(`div`,{style:{height:`100%`,width:`${n}%`,borderRadius:100,background:i,boxShadow:`0 0 8px ${i}80`,transition:`width 0.4s ease`}})})]})}var $_=[{id:`1`,image_url:`https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80`,created_at:new Date(Date.now()-2*864e5).toISOString()},{id:`2`,image_url:`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80`,created_at:new Date(Date.now()-5*864e5).toISOString()},{id:`3`,image_url:`https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=400&q=80`,created_at:new Date(Date.now()-7*864e5).toISOString()},{id:`4`,image_url:`https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80`,created_at:new Date(Date.now()-10*864e5).toISOString()},{id:`5`,image_url:`https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80`,created_at:new Date(Date.now()-12*864e5).toISOString()},{id:`6`,image_url:`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80`,created_at:new Date(Date.now()-14*864e5).toISOString()}],ev={lite:`Lite`,pro:`Pro`};function tv(e){return new Date(e).toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`})}function nv(e){return new Date(e).toLocaleDateString(`ru-RU`,{day:`numeric`,month:`short`})}function rv(){let e=Si(),{user:t,hapticFeedback:n,WebApp:r}=so(),{user:i,loading:a}=go(),[o,s]=(0,b.useState)([]),[c,l]=(0,b.useState)(!0),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(null),[m,h]=(0,b.useState)(!1),[g,_]=(0,b.useState)(!1),[v,y]=(0,b.useState)({visible:!1,message:``,type:`default`}),x=(0,b.useCallback)(()=>y(e=>({...e,visible:!1})),[]),S=`pinstaitestbot`,C=(0,b.useMemo)(()=>t?.id==null?``:`https://t.me/${S}?startapp=r${t.id}`,[t?.id,S]);return(0,b.useEffect)(()=>{b_().then(e=>s(e.data)).catch(()=>s($_)).finally(()=>l(!1))},[]),(0,I.jsxs)(`div`,{style:{padding:`20px 16px`,paddingBottom:`max(90px, calc(90px + env(safe-area-inset-bottom)))`,display:`flex`,flexDirection:`column`,gap:14,position:`relative`,zIndex:1},children:[(0,I.jsx)(Qg,{message:v.message,type:v.type,visible:v.visible,onHide:x}),(0,I.jsx)(m_,{style:{padding:16},children:(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:14},children:[t?.photo_url?(0,I.jsx)(`img`,{src:t.photo_url,alt:`avatar`,style:{width:56,height:56,borderRadius:`50%`,border:`2px solid rgba(139,92,246,0.5)`,objectFit:`cover`,flexShrink:0}}):(0,I.jsx)(`div`,{style:{width:56,height:56,borderRadius:`50%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:22,color:`#fff`,flexShrink:0,border:`2px solid rgba(139,92,246,0.4)`},children:(i?.first_name?.[0]||t?.first_name?.[0]||`?`).toUpperCase()}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:16,fontWeight:600,margin:0},children:i?.first_name||t?.first_name||``}),(i?.username||t?.username)&&(0,I.jsxs)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:13,margin:`3px 0 0`},children:[`@`,i?.username||t?.username]})]})]})}),(0,I.jsxs)(m_,{style:{padding:16},children:[(0,I.jsx)(`p`,{style:iv,children:`Подписка`}),a?(0,I.jsx)(`div`,{style:{height:70,background:`rgba(139,92,246,0.08)`,borderRadius:10,animation:`pulse 1.5s ease-in-out infinite`}}):i?.subscription?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:12},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,I.jsx)(`span`,{style:{color:`#ffffff`,fontSize:17,fontWeight:600},children:ev[i.subscription]}),(0,I.jsx)(`span`,{style:{background:`rgba(34,197,94,0.15)`,border:`1px solid rgba(34,197,94,0.3)`,borderRadius:100,color:`#22c55e`,fontSize:11,padding:`2px 8px`},children:`Активна`})]}),i.subscription_end_at&&(0,I.jsxs)(`span`,{style:{color:`rgba(255,255,255,0.35)`,fontSize:12},children:[`до `,tv(i.subscription_end_at)]})]}),(0,I.jsx)(Q_,{remaining:i.remaining_photo,limit:i.limits_photo}),(0,I.jsx)(`div`,{style:{marginTop:12},children:(0,I.jsx)(h_,{variant:`secondary`,onClick:()=>{n(`light`),e(`/tariffs`)},style:{width:`100%`,padding:`11px 12px`,fontSize:13},children:`Сменить тариф`})})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:(i?.remaining_photo??0)>0?12:0},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,I.jsx)(`div`,{style:{width:7,height:7,borderRadius:`50%`,background:`#ef4444`,boxShadow:`0 0 6px rgba(239,68,68,0.6)`}}),(0,I.jsx)(`span`,{style:{color:`rgba(255,255,255,0.5)`,fontSize:14},children:`Нет подписки`})]}),(0,I.jsx)(`button`,{onClick:()=>{n(`light`),e(`/tariffs`)},style:{background:`linear-gradient(135deg, #a855f7, #ec4899)`,border:`none`,borderRadius:100,color:`#fff`,fontSize:13,fontWeight:700,padding:`0 14px`,height:34,cursor:`pointer`,fontFamily:`Inter, sans-serif`,letterSpacing:`0.01em`,boxShadow:`0 0 14px rgba(168,85,247,0.7), 0 0 28px rgba(236,72,153,0.35)`},children:`Подключить`})]}),(i?.remaining_photo??0)>0&&(0,I.jsx)(Q_,{remaining:i.remaining_photo,limit:i.remaining_photo})]})]}),(0,I.jsxs)(m_,{style:{padding:16},children:[(0,I.jsx)(`p`,{style:iv,children:`Реферальная программа`}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:8,marginBottom:14},children:[(0,I.jsxs)(`div`,{style:{flex:1,background:`rgba(139,92,246,0.08)`,border:`1px solid rgba(139,92,246,0.18)`,borderRadius:12,padding:`10px 12px`,textAlign:`center`},children:[(0,I.jsx)(`p`,{style:{color:`#a78bfa`,fontSize:22,fontWeight:700,margin:0,lineHeight:1},children:i?.referral_invited??0}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:11,margin:`4px 0 0`},children:`приглашено друзей`})]}),(0,I.jsxs)(`div`,{style:{flex:1,background:`rgba(139,92,246,0.08)`,border:`1px solid rgba(139,92,246,0.18)`,borderRadius:12,padding:`10px 12px`,textAlign:`center`},children:[(0,I.jsx)(`p`,{style:{color:`#a78bfa`,fontSize:22,fontWeight:700,margin:0,lineHeight:1},children:i?.referral_bonus??0}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.4)`,fontSize:11,margin:`4px 0 0`},children:`получено генераций`})]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`stretch`,gap:8,marginBottom:12},children:[(0,I.jsx)(`div`,{style:{flex:1,minWidth:0,background:`rgba(0,0,0,0.25)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:12,padding:`8px 10px`,display:`flex`,alignItems:`center`},children:(0,I.jsx)(`span`,{style:{color:`rgba(255,255,255,0.85)`,fontSize:11,lineHeight:1.35,fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,wordBreak:`break-all`},children:C})}),(0,I.jsx)(`button`,{type:`button`,onClick:async()=>{n(`medium`);try{await navigator.clipboard.writeText(C),y({visible:!0,message:`Скопировано`,type:`default`})}catch{y({visible:!0,message:`Не удалось скопировать`,type:`error`})}},"aria-label":`Копировать ссылку`,style:{flexShrink:0,width:36,height:36,alignSelf:`center`,borderRadius:10,background:`rgba(139,92,246,0.12)`,border:`1px solid rgba(139,92,246,0.28)`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0},children:(0,I.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,children:[(0,I.jsx)(`rect`,{x:`9`,y:`9`,width:`13`,height:`13`,rx:`2`,stroke:`#a78bfa`,strokeWidth:`2`}),(0,I.jsx)(`path`,{d:`M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 4V5`,stroke:`#a78bfa`,strokeWidth:`2`})]})})]}),(0,I.jsxs)(h_,{onClick:()=>{n(`light`);let e=`https://t.me/share/url?url=${encodeURIComponent(C)}&text=%D0%97%D0%B0%D1%85%D0%BE%D0%B4%D0%B8%20%D0%B2%20Pinst%20%E2%80%94%20%D1%84%D0%BE%D1%82%D0%BE%20%D0%B2%20%D1%81%D1%82%D0%B8%D0%BB%D0%B5%20Pinterest%20%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%20%D0%B2%20Telegram%20%F0%9F%8E%A8`,t=window?.Telegram?.WebApp;t?.openTelegramLink?t.openTelegramLink(e):r.openLink(e)},style:{width:`100%`,padding:`11px 12px`,fontSize:13},children:[(0,I.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M4 12V20H20V12`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`}),(0,I.jsx)(`path`,{d:`M12 16V4M12 4L8 8M12 4L16 8`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),`Поделиться в Telegram`]})]}),(0,I.jsx)(m_,{style:{padding:0,overflow:`hidden`},children:(0,I.jsxs)(`button`,{onClick:()=>{n(`light`),d(!0)},style:{background:`none`,border:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,width:`100%`,padding:`16px 16px`},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,I.jsx)(`div`,{style:{width:38,height:38,borderRadius:12,background:`rgba(139,92,246,0.15)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1.5`,stroke:`#8b5cf6`,strokeWidth:`1.8`}),(0,I.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1.5`,stroke:`#8b5cf6`,strokeWidth:`1.8`}),(0,I.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1.5`,stroke:`#8b5cf6`,strokeWidth:`1.8`}),(0,I.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1.5`,stroke:`#8b5cf6`,strokeWidth:`1.8`})]})}),(0,I.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:15,fontWeight:500,margin:0},children:`История генераций`}),!c&&(0,I.jsxs)(`p`,{style:{color:`rgba(255,255,255,0.35)`,fontSize:12,margin:`2px 0 0`},children:[o.length,` `,(o.length===1||o.length>=2&&o.length,`фото`)]})]})]}),(0,I.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M9 18L15 12L9 6`,stroke:`rgba(255,255,255,0.3)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})}),(0,I.jsx)(m_,{style:{padding:14},children:(0,I.jsxs)(`button`,{onClick:()=>{n(`light`);try{let e=window?.Telegram?.WebApp;e?.openTelegramLink?e.openTelegramLink(`https://t.me/balooBoss`):r.openLink(`https://t.me/balooBoss`)}catch{try{r.openLink(`https://t.me/balooBoss`)}catch{}}},style:{background:`none`,border:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,width:`100%`,padding:0},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,I.jsx)(`div`,{style:{width:34,height:34,borderRadius:10,background:`rgba(139,92,246,0.12)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M21 15C21 15.5 20.8 16 20.4 16.4C20 16.8 19.5 17 19 17H7L3 21V5C3 4.5 3.2 4 3.6 3.6C4 3.2 4.5 3 5 3H19C19.5 3 20 3.2 20.4 3.6C20.8 4 21 4.5 21 5V15Z`,stroke:`#8b5cf6`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,I.jsx)(`span`,{style:{color:`#ffffff`,fontSize:14},children:`Написать в поддержку`})]}),(0,I.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M9 18L15 12L9 6`,stroke:`rgba(255,255,255,0.25)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})}),(0,M_.createPortal)((0,I.jsx)(eh,{children:u&&(0,I.jsxs)(Xg.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.96},transition:{duration:.2,ease:`easeOut`},style:{position:`fixed`,inset:0,background:`#0f0f18`,zIndex:200,display:`flex`,flexDirection:`column`},children:[(0,I.jsxs)(`div`,{style:{padding:`max(16px, calc(12px + env(safe-area-inset-top))) 20px 12px`,flexShrink:0,display:`flex`,alignItems:`center`,gap:12,borderBottom:`1px solid rgba(139,92,246,0.12)`},children:[(0,I.jsx)(`button`,{onClick:()=>d(!1),style:{background:`rgba(15,15,24,0.9)`,border:`1.5px solid rgba(139,92,246,0.45)`,borderRadius:`50%`,width:38,height:38,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,padding:0,flexShrink:0,boxShadow:`0 0 0 1px rgba(139,92,246,0.15), 0 2px 12px rgba(0,0,0,0.4)`},children:(0,I.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M15 18L9 12L15 6`,stroke:`rgba(255,255,255,0.85)`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,I.jsx)(`h3`,{style:{color:`#ffffff`,fontSize:18,fontWeight:600,margin:0},children:`История генераций`})]}),(0,I.jsx)(`div`,{style:{flex:1,minHeight:0,overflowY:`auto`,overflowX:`hidden`,WebkitOverflowScrolling:`touch`,scrollbarWidth:`none`,padding:`12px 16px`,paddingBottom:`max(32px, calc(32px + env(safe-area-inset-bottom)))`},children:c?(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:8},children:[1,2,3,4,5,6].map(e=>(0,I.jsx)(`div`,{style:{aspectRatio:`1`,borderRadius:10,background:`rgba(139,92,246,0.08)`,animation:`pulse 1.5s ease-in-out infinite`,animationDelay:`${e*.08}s`}},e))}):o.length===0?(0,I.jsxs)(`div`,{style:{padding:`40px 0`,textAlign:`center`},children:[(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.3)`,fontSize:15,margin:`0 0 12px`},children:`Ещё нет генераций`}),(0,I.jsx)(`button`,{onClick:()=>{d(!1),e(`/create`)},style:{background:`none`,border:`none`,color:`#a78bfa`,fontSize:14,fontWeight:600,cursor:`pointer`,fontFamily:`Inter, sans-serif`},children:`Создать первое →`})]}):(0,I.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:8},children:o.map((e,t)=>(0,I.jsxs)(Xg.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:t*.04,duration:.18},onClick:()=>{n(`light`),p(e)},style:{aspectRatio:`1`,borderRadius:10,overflow:`hidden`,cursor:`pointer`,position:`relative`,border:`1px solid rgba(139,92,246,0.12)`},children:[(0,I.jsx)(`img`,{src:e.image_url,alt:``,style:{width:`100%`,height:`100%`,objectFit:`cover`}}),(0,I.jsx)(`span`,{style:{position:`absolute`,bottom:4,right:5,fontSize:9,color:`rgba(255,255,255,0.6)`,background:`rgba(0,0,0,0.45)`,backdropFilter:`blur(4px)`,padding:`2px 5px`,borderRadius:5},children:nv(e.created_at)})]},e.id))})})]},`history`)}),document.body),(0,M_.createPortal)((0,I.jsx)(eh,{children:f&&(0,I.jsxs)(Xg.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.95)`,zIndex:300,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,padding:16},children:[(0,I.jsx)(Xg.img,{initial:{scale:.9},animate:{scale:1},src:f.image_url,alt:``,style:{maxWidth:`100%`,maxHeight:`72vh`,borderRadius:20,objectFit:`contain`}}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:10,marginTop:20,width:`100%`,paddingBottom:`max(16px, env(safe-area-inset-bottom))`},children:[(0,I.jsx)(h_,{onClick:async()=>{if(!(!f||m)){n(`medium`),h(!0);try{await x_(f.id),n(`heavy`),_(!0)}catch{n(`heavy`)}finally{h(!1)}}},disabled:m||g,style:{flex:1},children:g?`✓ Отправлено`:m?`Отправляю...`:`Отправить в чат`}),(0,I.jsx)(h_,{variant:`secondary`,onClick:()=>{p(null),_(!1)},style:{flex:1},children:`Закрыть`})]})]})}),document.body)]})}var iv={color:`rgba(255,255,255,0.35)`,fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,margin:`0 0 12px`};async function av(){try{return(await qn.get(`/api/chat/history`)).data??[]}catch{return[]}}async function ov(){try{await qn.delete(`/api/chat/history`)}catch{}}var sv=!1;async function cv(){sv||(sv=!0,await $n(),await ov())}var lv=``;async function uv(e,t){let n=Kn(),r=await fetch(`${lv}/api/chat`,{method:`POST`,headers:{"Content-Type":`application/json`,Accept:`text/event-stream`,...n?{Authorization:`Bearer ${n}`}:{}},body:JSON.stringify(e),signal:t.signal});if(!r.ok||!r.body){let e=`chat failed: ${r.status}`;try{let t=await r.json();t?.error&&(e=t.error)}catch{}throw Error(e)}let i=r.body.getReader(),a=new TextDecoder,o=``,s=``,c=(e,n)=>{if(!n)return;let r;try{r=JSON.parse(n)}catch{return}if(e===`delta`&&typeof r.content==`string`)s+=r.content,t.onDelta(r.content);else if(e===`done`)typeof r.reply==`string`&&r.reply.length>s.length&&(s=r.reply);else if(e===`error`)throw Error(r.error||`chat failed`)};for(;;){let{done:e,value:t}=await i.read();if(e)break;o+=a.decode(t,{stream:!0});let n;for(;(n=o.indexOf(`

`))!==-1;){let e=o.slice(0,n);o=o.slice(n+2);let t=`message`,r=[];for(let n of e.split(`
`))n.startsWith(`event:`)?t=n.slice(6).trim():n.startsWith(`data:`)&&r.push(n.slice(5).trim());c(t,r.join(`
`))}}return t.onDone?.(s),s}var dv=[`Помоги написать промпт для генерации`,`Придумай идеи для контента на неделю`,`Помоги написать пост для соцсетей`,`Как сочетать цвета в одежде?`],fv=18;function pv(e){return e.split(/(\*\*[^*]+\*\*)/g).map((e,t)=>e.startsWith(`**`)&&e.endsWith(`**`)?(0,I.jsx)(`strong`,{style:{fontWeight:700},children:e.slice(2,-2)},t):e)}function mv(){let e=Si(),{hapticFeedback:t}=so(),{user:n,loading:r}=go(),i=r||!!n?.subscription,[a,o]=(0,b.useState)([]),[s,c]=(0,b.useState)(!0),[l,u]=(0,b.useState)(``),[d,f]=(0,b.useState)(!1),p=(0,b.useRef)(null),m=(0,b.useRef)(null),h=(0,b.useRef)(``),g=(0,b.useRef)(0),_=(0,b.useRef)(!1),v=(0,b.useRef)(null),y=(0,b.useRef)(null),x=(0,b.useRef)(!1);(0,b.useEffect)(()=>{let e=!1;async function t(){if(await cv(),e)return;let t=await av();e||(c(!1),t.length>0?o(t.map((e,t)=>({id:`hist_${t}`,role:e.role===`assistant`?`ai`:`user`,text:e.content,ts:new Date(e.ts).getTime()}))):o([{id:`0`,role:`ai`,text:`Привет! Я Pinst AI — помогу тебе придумать описание для поста, идею для фотосессии или расскажу про тренды 💜`,ts:Date.now()}]))}return t(),()=>{e=!0}},[]);let S=(0,b.useCallback)(()=>{v.current!==null&&(clearInterval(v.current),v.current=null)},[]),C=(0,b.useCallback)(e=>{S(),v.current=setInterval(()=>{let t=h.current,n=g.current,r=t.length-n;if(r<=0){_.current&&(S(),y.current=null,x.current=!1);return}let i=n+(r>40?3:r>15?2:1);g.current=i;let a=t.slice(0,i);o(t=>t.map(t=>t.id===e?{...t,text:a}:t))},fv)},[S]);(0,b.useEffect)(()=>{p.current?.scrollIntoView({behavior:x.current?`instant`:`smooth`})},[a,d]);let w=(0,b.useCallback)(async e=>{let n=e.trim();if(!n||d)return;t(`light`),u(``);let r={id:Date.now().toString(),role:`user`,text:n,ts:Date.now()},i=(Date.now()+1).toString();o(e=>[...e,r]),f(!0),h.current=``,g.current=0,_.current=!1,y.current=null,x.current=!1;let a=!0;try{await uv({prompt:n},{onDelta:e=>{h.current+=e,a&&(a=!1,y.current=i,x.current=!0,f(!1),o(e=>[...e,{id:i,role:`ai`,text:``,ts:Date.now()}]),C(i))}})}catch(e){S();let t=e?.message?`Ошибка: ${e.message}`:`Не удалось получить ответ. Попробуй ещё раз.`;o(a?e=>[...e,{id:i,role:`ai`,text:t,ts:Date.now()}]:e=>e.map(e=>e.id===i?{...e,text:h.current}:e)),y.current=null,x.current=!1}finally{_.current=!0,t(`light`),f(!1)}},[d,t,C,S]);return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,minHeight:0,overflow:`hidden`,position:`relative`},children:[(0,I.jsxs)(`div`,{style:{paddingLeft:16,paddingRight:16,paddingBottom:12,paddingTop:c_,borderBottom:`1px solid rgba(139,92,246,0.12)`,flexShrink:0,display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,gap:12,background:`rgba(10,10,15,0.94)`,backdropFilter:`blur(16px)`,WebkitBackdropFilter:`blur(16px)`,zIndex:2},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12,flex:1,minWidth:0},children:[(0,I.jsx)(`div`,{style:{width:40,height:40,borderRadius:`50%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 16px rgba(139,92,246,0.5)`,flexShrink:0},children:(0,I.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,children:[(0,I.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12C2 14.1 2.64 16.06 3.74 17.69L2.29 21.71L6.31 20.26C7.94 21.36 9.9 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z`,fill:`rgba(255,255,255,0.15)`,stroke:`#ffffff`,strokeWidth:`1.5`}),(0,I.jsx)(`circle`,{cx:`8.5`,cy:`12`,r:`1.2`,fill:`#ffffff`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1.2`,fill:`#ffffff`}),(0,I.jsx)(`circle`,{cx:`15.5`,cy:`12`,r:`1.2`,fill:`#ffffff`})]})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:15,fontWeight:600,margin:0},children:`Pinst AI`}),(0,I.jsxs)(`p`,{style:{color:`#22c55e`,fontSize:11,margin:`2px 0 0`,display:`flex`,alignItems:`center`,gap:4},children:[(0,I.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:`#22c55e`,display:`inline-block`,boxShadow:`0 0 6px rgba(34,197,94,0.7)`}}),`Онлайн`]})]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexShrink:0},children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>{t(`light`),e(`/tariffs`)},"aria-label":`Купить подписку`,style:{visibility:i?`hidden`:`visible`,background:`linear-gradient(135deg, #a855f7, #ec4899)`,border:`none`,boxShadow:`0 0 14px rgba(168,85,247,0.7), 0 0 28px rgba(236,72,153,0.35)`,cursor:`pointer`,padding:`0 14px`,height:34,borderRadius:100,flexShrink:0,display:`flex`,alignItems:`center`,color:`#ffffff`,fontSize:13,fontWeight:700,fontFamily:`Inter, sans-serif`,letterSpacing:`0.01em`},children:`Купить`}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>{t(`light`),e(`/profile`)},"aria-label":`Профиль`,style:{background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,border:`1.5px solid rgba(139,92,246,0.45)`,cursor:`pointer`,padding:0,width:40,height:40,borderRadius:`50%`,flexShrink:0,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 16px rgba(139,92,246,0.5)`},children:(0,I.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`,stroke:`rgba(255,255,255,0.9)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`,stroke:`rgba(255,255,255,0.9)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})]}),(0,I.jsxs)(`div`,{style:{flex:1,minHeight:0,overflowY:`auto`,overflowX:`hidden`,overscrollBehavior:`contain`,WebkitOverflowScrolling:`touch`,padding:`16px 16px 8px`,display:`flex`,flexDirection:`column`,gap:10},children:[s?(0,I.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`32px 0`},children:(0,I.jsx)(`div`,{style:{width:24,height:24,borderRadius:`50%`,border:`2.5px solid rgba(139,92,246,0.2)`,borderTopColor:`#8b5cf6`,animation:`spin 0.7s linear infinite`}})}):a.map(e=>(0,I.jsxs)(Xg.div,{initial:{opacity:0,y:8,scale:.97},animate:{opacity:1,y:0,scale:1},transition:{duration:.2},style:{display:`flex`,justifyContent:e.role===`user`?`flex-end`:`flex-start`},children:[e.role===`ai`&&(0,I.jsx)(`div`,{style:{width:28,height:28,borderRadius:`50%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,marginRight:8,alignSelf:`flex-end`,boxShadow:`0 0 10px rgba(139,92,246,0.45)`},children:(0,I.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12C2 14.1 2.64 16.06 3.74 17.69L2.29 21.71L6.31 20.26C7.94 21.36 9.9 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z`,fill:`rgba(255,255,255,0.2)`,stroke:`#ffffff`,strokeWidth:`1.5`}),(0,I.jsx)(`circle`,{cx:`8.5`,cy:`12`,r:`1.1`,fill:`#ffffff`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1.1`,fill:`#ffffff`}),(0,I.jsx)(`circle`,{cx:`15.5`,cy:`12`,r:`1.1`,fill:`#ffffff`})]})}),(0,I.jsx)(`div`,{style:{maxWidth:`78%`,background:e.role===`user`?`linear-gradient(135deg, #8b5cf6, #6d28d9)`:`rgba(255,255,255,0.06)`,border:e.role===`ai`?`1px solid rgba(139,92,246,0.18)`:`none`,borderRadius:e.role===`user`?`18px 18px 4px 18px`:`18px 18px 18px 4px`,padding:`10px 14px`,boxShadow:e.role===`user`?`0 4px 16px rgba(139,92,246,0.35)`:`none`},children:(0,I.jsx)(`p`,{style:{color:`#ffffff`,fontSize:14,margin:0,lineHeight:1.55,whiteSpace:`pre-line`,fontFamily:`Inter, sans-serif`},children:pv(e.text)})})]},e.id)),(0,I.jsx)(eh,{children:d&&(0,I.jsxs)(Xg.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:6},transition:{duration:.15},style:{display:`flex`,alignItems:`flex-end`,gap:8},children:[(0,I.jsx)(`div`,{style:{width:28,height:28,borderRadius:`50%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,boxShadow:`0 0 10px rgba(139,92,246,0.45)`},children:(0,I.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,I.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12C2 14.1 2.64 16.06 3.74 17.69L2.29 21.71L6.31 20.26C7.94 21.36 9.9 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z`,fill:`rgba(255,255,255,0.2)`,stroke:`#ffffff`,strokeWidth:`1.5`}),(0,I.jsx)(`circle`,{cx:`8.5`,cy:`12`,r:`1.1`,fill:`#ffffff`}),(0,I.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1.1`,fill:`#ffffff`}),(0,I.jsx)(`circle`,{cx:`15.5`,cy:`12`,r:`1.1`,fill:`#ffffff`})]})}),(0,I.jsx)(`div`,{style:{background:`rgba(255,255,255,0.06)`,border:`1px solid rgba(139,92,246,0.18)`,borderRadius:`18px 18px 18px 4px`,padding:`12px 16px`,display:`flex`,gap:5,alignItems:`center`},children:[0,1,2].map(e=>(0,I.jsx)(`div`,{style:{width:7,height:7,borderRadius:`50%`,background:`#a78bfa`,animation:`pulse 1.2s ease-in-out infinite`,animationDelay:`${e*.18}s`}},e))})]})}),a.length===1&&!d&&(0,I.jsx)(Xg.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},style:{display:`flex`,flexWrap:`wrap`,gap:8,marginTop:4},children:dv.map(e=>(0,I.jsx)(`button`,{onClick:()=>w(e),style:{background:`rgba(139,92,246,0.1)`,border:`1px solid rgba(139,92,246,0.25)`,borderRadius:100,color:`#c4b5fd`,fontSize:12,padding:`7px 14px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`,transition:`all 0.15s ease`},children:e},e))}),(0,I.jsx)(`div`,{ref:p})]}),(0,I.jsxs)(`div`,{style:{padding:`10px 12px`,paddingBottom:`max(12px, calc(12px + env(safe-area-inset-bottom)))`,borderTop:`1px solid rgba(139,92,246,0.12)`,flexShrink:0,display:`flex`,gap:10,alignItems:`flex-end`,background:`rgba(10,10,15,0.8)`},children:[(0,I.jsx)(`textarea`,{ref:m,value:l,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),w(l))},placeholder:`Спроси о стиле, пресетах...`,rows:1,style:{flex:1,background:`rgba(255,255,255,0.05)`,border:`1px solid rgba(139,92,246,0.2)`,borderRadius:20,color:`#ffffff`,fontSize:14,padding:`10px 16px`,resize:`none`,outline:`none`,fontFamily:`Inter, sans-serif`,lineHeight:1.5,maxHeight:100,overflowY:`auto`}}),(0,I.jsx)(`button`,{onClick:()=>w(l),disabled:!l.trim()||d,style:{width:42,height:42,borderRadius:`50%`,flexShrink:0,background:l.trim()&&!d?`linear-gradient(135deg, #8b5cf6, #6d28d9)`:`rgba(255,255,255,0.07)`,border:`none`,cursor:l.trim()&&!d?`pointer`:`default`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:l.trim()&&!d?`0 0 14px rgba(139,92,246,0.5)`:`none`,transition:`all 0.2s ease`},children:(0,I.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,children:(0,I.jsx)(`path`,{d:`M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13`,stroke:l.trim()&&!d?`#ffffff`:`rgba(255,255,255,0.3)`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})]})}function hv(){let e=yi();return(0,I.jsx)(`div`,{style:{minHeight:`100%`,height:`100%`},children:(0,I.jsxs)(Ji,{location:e,children:[(0,I.jsx)(Ki,{path:`/`,element:(0,I.jsx)(Gi,{to:`/catalog`,replace:!0})}),(0,I.jsx)(Ki,{path:`/catalog`,element:(0,I.jsx)(j_,{})}),(0,I.jsx)(Ki,{path:`/create`,element:(0,I.jsx)(K_,{})}),(0,I.jsx)(Ki,{path:`/tariffs`,element:(0,I.jsx)(Z_,{})}),(0,I.jsx)(Ki,{path:`/profile`,element:(0,I.jsx)(rv,{})}),(0,I.jsx)(Ki,{path:`/chat`,element:(0,I.jsx)(mv,{})}),(0,I.jsx)(Ki,{path:`*`,element:(0,I.jsx)(Gi,{to:`/catalog`,replace:!0})})]})},e.pathname)}function gv(){let{user:e}=go(),{hapticFeedback:t}=so(),[n,r]=(0,b.useState)(0),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{if(!e||!e.telegram_id)return;let n=`pinst_bonus_seen_${e.telegram_id}`,i=`pinst_invited_seen_${e.telegram_id}`,o=parseInt(localStorage.getItem(n)??`0`,10),c=parseInt(localStorage.getItem(i)??`0`,10);e.referral_bonus>o&&(r(e.referral_bonus-o),a(e.referral_invited<=c),s(!0),t(`medium`))},[e?.telegram_id,e?.referral_bonus]),o?(0,I.jsx)(`div`,{style:{position:`fixed`,inset:0,zIndex:500,background:`rgba(0,0,0,0.7)`,backdropFilter:`blur(8px)`,WebkitBackdropFilter:`blur(8px)`,display:`flex`,alignItems:`flex-end`,justifyContent:`center`},children:(0,I.jsxs)(`div`,{style:{background:`linear-gradient(180deg, #13121f 0%, #0a0a0f 100%)`,border:`1px solid rgba(139,92,246,0.3)`,borderRadius:`24px 24px 0 0`,padding:`28px 24px`,paddingBottom:`max(28px, calc(28px + env(safe-area-inset-bottom)))`,width:`100%`,textAlign:`center`},children:[(0,I.jsx)(`div`,{style:{fontSize:52,marginBottom:16},children:`🎁`}),(0,I.jsxs)(`p`,{style:{color:`#ffffff`,fontSize:20,fontWeight:700,margin:`0 0 8px`},children:[`+`,n,` бонусных генераций!`]}),(0,I.jsx)(`p`,{style:{color:`rgba(255,255,255,0.5)`,fontSize:14,margin:`0 0 24px`,lineHeight:1.5},children:i?`Тебя пригласили в Pinst — и ты получаешь бонусные генерации в подарок. Они уже на твоём счёте!`:`Твой друг присоединился к Pinst по твоей реферальной ссылке. Генерации уже на твоём счёте.`}),(0,I.jsx)(`button`,{onClick:()=>{e&&(t(`light`),localStorage.setItem(`pinst_bonus_seen_${e.telegram_id}`,String(e.referral_bonus)),localStorage.setItem(`pinst_invited_seen_${e.telegram_id}`,String(e.referral_invited)),s(!1))},style:{width:`100%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,border:`none`,borderRadius:14,color:`#fff`,fontSize:16,fontWeight:600,padding:`15px 24px`,cursor:`pointer`,fontFamily:`Inter, sans-serif`,boxShadow:`0 0 24px rgba(139,92,246,0.5)`},children:`Отлично!`})]})}):null}function _v(){let e=Si(),t=yi(),{onReady:n,expandApp:r,setColors:i,user:a,hapticFeedback:o}=so(),[s,c]=(0,b.useState)(!navigator.onLine),l=t.pathname!==`/profile`&&t.pathname!==`/tariffs`&&t.pathname!==`/chat`&&t.pathname!==`/catalog`&&t.pathname!==`/create`,u=t.pathname===`/chat`,d=t.pathname===`/tariffs`;return(0,b.useEffect)(()=>{n(),r(),i(),$n();let e=()=>c(!0),t=()=>c(!1);return window.addEventListener(`offline`,e),window.addEventListener(`online`,t),()=>{window.removeEventListener(`offline`,e),window.removeEventListener(`online`,t)}},[]),(0,I.jsxs)(`div`,{style:{minHeight:`100dvh`,height:`100dvh`,background:`#0a0a0f`,fontFamily:`Inter, sans-serif`,overflow:`hidden`,position:`relative`},children:[(0,I.jsx)(vo,{}),l&&(0,I.jsx)(`button`,{type:`button`,className:`app-fixed-profile-btn`,onClick:()=>{o(`light`),e(`/profile`)},"aria-label":`Профиль`,style:{position:`fixed`,top:`max(12px, env(safe-area-inset-top))`,right:`max(12px, env(safe-area-inset-right))`,zIndex:200,background:`none`,border:`none`,cursor:`pointer`,padding:0,width:40,height:40,flexShrink:0},children:a?.photo_url?(0,I.jsx)(`img`,{src:a.photo_url,alt:``,style:{width:40,height:40,borderRadius:`50%`,border:`1.5px solid rgba(139,92,246,0.45)`,objectFit:`cover`,display:`block`,boxShadow:`0 0 16px rgba(139,92,246,0.5)`}}):(0,I.jsx)(`div`,{style:{width:40,height:40,borderRadius:`50%`,background:`linear-gradient(135deg, #8b5cf6, #6d28d9)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:16,fontWeight:600,color:`#fff`,border:`1.5px solid rgba(139,92,246,0.45)`,boxShadow:`0 0 16px rgba(139,92,246,0.5)`},children:(a?.first_name?.[0]||`P`).toUpperCase()})}),(0,I.jsx)(`div`,{id:`app-main-scroll`,style:{height:d?`100dvh`:`calc(100dvh - 84px)`,overflowY:u?`hidden`:`auto`,overflowX:`hidden`,WebkitOverflowScrolling:`touch`,overscrollBehavior:`none`,position:`relative`},children:(0,I.jsx)(hv,{})}),!d&&(0,I.jsx)(L,{}),(0,I.jsx)(Qg,{message:`Нет соединения`,type:`error`,visible:s,onHide:()=>{}}),(0,I.jsx)(gv,{}),(0,I.jsx)(r_,{})]})}function vv(){return(0,I.jsx)(Fa,{children:(0,I.jsx)(_v,{})})}(0,x.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(b.StrictMode,{children:(0,I.jsx)(vv,{})}));