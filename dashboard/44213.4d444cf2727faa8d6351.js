(self.webpackChunk_shared_routing_dashboard=self.webpackChunk_shared_routing_dashboard||[]).push([[44213],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},20862:(e,t,o)=>{var r=o(50008).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(a=function(e){return e?o:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var o=a(t);if(o&&o.has(e))return o.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=s?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(n,c,l):n[c]=e[c]}return n.default=e,o&&o.set(e,n),n},e.exports.__esModule=!0,e.exports.default=e.exports},50008:e=>{function t(o){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},28546:(e,t,o)=>{"use strict";o.r(t),o.d(t,{capitalize:()=>r.Z,createChainedFunction:()=>a.Z,createSvgIcon:()=>n.Z,debounce:()=>s.Z,deprecatedPropType:()=>c,isMuiElement:()=>l.Z,ownerDocument:()=>u.Z,ownerWindow:()=>i.Z,requirePropFactory:()=>d,setRef:()=>p.Z,unstable_useId:()=>S.Z,unsupportedProp:()=>f,useControlled:()=>m.Z,useEventCallback:()=>g.Z,useForkRef:()=>h.Z,useIsFocusVisible:()=>v.Z});var r=o(93871),a=o(82568),n=o(63786),s=o(79437);function c(e,t){return function(){return null}}var l=o(83711),u=o(30626),i=o(80713);function d(e){return function(){return null}}var p=o(34236);function f(e,t,o,r,a){return null}var m=o(22775),g=o(55192),h=o(17294),S=o(95001),v=o(24896)},95001:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(92950);function a(e){var t=r.useState(e),o=t[0],a=t[1],n=e||o;return r.useEffect((function(){null==o&&a("mui-".concat(Math.round(1e5*Math.random())))}),[o]),n}},83173:(e,t,o)=>{"use strict";var r=o(95318),a=o(20862);t.Z=void 0;var n=a(o(92950)),s=(0,r(o(2108)).default)(n.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined");t.Z=s},2108:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=o(28546)},51673:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a}),o(26537),o(40900);var r=o(25108);async function a(e,t,o,a){let n=localStorage.getItem("userid"),s=await async function(e){return e.data&&!Array.isArray(e.data)?{data:Object.fromEntries(Object.entries(e.data).filter((([e,t])=>null!=t)))}:e}(t);return(a&&"pdf"==a.type||a&&"excel"==a.type)&&(s={...s,file:a}),fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-userid":localStorage.getItem("userid"),"x-tokenid":o&&o.TokenIDPK,"x-tokenname":o&&o.TokenName,USER_ID:n,FORM_ID:1},body:JSON.stringify(s)}).then((e=>e.json())).then((e=>e.Output?e:{Output:e})).catch((e=>{e&&(window.location.href,r.log(e,"error"))}))}},26537:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s}),o(92950);var r=o(40900),a=o(55905),n=!1;function s(e){const t=(0,a.decode)(localStorage.getItem("username"));let o=r.v.Api+"FPU2S3/",s={data:{UserName:localStorage.getItem("username"),Password:localStorage.getItem("password"),UserID:localStorage.getItem("userid"),IsActive:e,SessionID:localStorage.getItem("SessionID")}};return fetch(o,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},keepalive:!1,body:JSON.stringify(s)}).then((e=>e.json())).then((e=>e&&0==e.TokenIDPK&&"admin"!=t.toLowerCase()?(n||(n=!0,alert("It appears that your session has been taken over by another device. Please login again to regain access.")),localStorage.clear(),sessionStorage.clear(),window.location.href.toLowerCase().includes("adib")?window.location.href=logoutpath:window.location.href="/",{}):e)).catch((e=>e))}},44213:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var r=o(92950),a=o.n(r),n=(o(15940),o(45237)),s=o(83173),c=o(40900),l=o(51673),u=o(26537),i=o(55905);const d=(0,r.forwardRef)(((e,t)=>{(0,n.useDispatch)();const[o]=(0,r.useState)(localStorage.getItem("userid")),[d,p]=(0,r.useState)(0),[f,m]=(0,r.useState)(!0),[g,h]=(0,r.useState)(e.showDetail),[S,v]=(0,r.useState)(!1),[y,I]=(0,r.useState)(""),[b,w]=(0,r.useState)(""),[_,x]=(0,r.useState)({});return s.Z,(0,r.useEffect)((()=>{(0,u.Z)(0).then((e=>{x(e)}));var e=navigator.connection;e.rtt,p(e.rtt)}),[]),(0,r.useEffect)((()=>{w(localStorage.getItem("error")),I("Internal Server Error")}),[localStorage.getItem("error")]),a().createElement("div",{className:"c"},a().createElement("div",{className:"_404"},"oops!!"),a().createElement("div",{className:"_1"},y),a().createElement("div",{className:"_2"},b),a().createElement("div",{onClick:()=>function(){localStorage.setItem("reload",!0);let e=c.v.Api+"CommonCustomUpdate/",t={data:{SessionID:(0,i.decode)(localStorage.getItem("SessionID")),Username:(0,i.decode)(localStorage.getItem("username"))}};(0,l.Z)(e,t,_).then((e=>{"Session Deleted Successfully"===e.Output.status.message&&(localStorage.clear(),window.location.href="/")}))}()},a().createElement("a",{className:"btn"},"Back To LoginPage")))}))},40900:(e,t,o)=>{"use strict";o.d(t,{v:()=>r}),window.location.href.split("/");const r={Api:"http://13.127.67.252:5040/",MongoAPI:"",NoData:"http://13.127.67.252:5040/images/NoData.GIF",GoogleMapsAPI:"",excel:"http://13.127.67.252:5040/Images/Excel/",ImageUrl:"http://13.127.67.252:5040/Images/",ServerTime:0}}}]);