"use strict";(self.webpackChunk_shared_routing_dashboard=self.webpackChunk_shared_routing_dashboard||[]).push([[16846],{82285:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(22122),n=a(81253),o=a(92950),i=a(12181),c=a(79437),l=a(12666),d=a(17294),v=a(8920),h=a(43366),s=a(5653);function m(e,t){var a=function(e,t){var a,r=t.getBoundingClientRect();if(t.fakeTransform)a=t.fakeTransform;else{var n=window.getComputedStyle(t);a=n.getPropertyValue("-webkit-transform")||n.getPropertyValue("transform")}var o=0,i=0;if(a&&"none"!==a&&"string"==typeof a){var c=a.split("(")[1].split(")")[0].split(",");o=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-r.top,"px)"):"translateY(-".concat(r.top+r.height-i,"px)")}(e,t);a&&(t.style.webkitTransform=a,t.style.transform=a)}var p={enter:h.x9.enteringScreen,exit:h.x9.leavingScreen};const u=o.forwardRef((function(e,t){var a=e.children,h=e.direction,u=void 0===h?"down":h,f=e.in,g=e.onEnter,z=e.onEntered,Z=e.onEntering,H=e.onExit,y=e.onExited,E=e.onExiting,b=e.style,k=e.timeout,V=void 0===k?p:k,w=e.TransitionComponent,M=void 0===w?l.ZP:w,x=(0,n.Z)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),C=(0,v.Z)(),L=o.useRef(null),$=o.useCallback((function(e){L.current=i.findDOMNode(e)}),[]),S=(0,d.Z)(a.ref,$),R=(0,d.Z)(S,t),T=function(e){return function(t){e&&(void 0===t?e(L.current):e(L.current,t))}},A=T((function(e,t){m(u,e),(0,s.n)(e),g&&g(e,t)})),N=T((function(e,t){var a=(0,s.C)({timeout:V,style:b},{mode:"enter"});e.style.webkitTransition=C.transitions.create("-webkit-transform",(0,r.Z)({},a,{easing:C.transitions.easing.easeOut})),e.style.transition=C.transitions.create("transform",(0,r.Z)({},a,{easing:C.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",Z&&Z(e,t)})),O=T(z),I=T(E),_=T((function(e){var t=(0,s.C)({timeout:V,style:b},{mode:"exit"});e.style.webkitTransition=C.transitions.create("-webkit-transform",(0,r.Z)({},t,{easing:C.transitions.easing.sharp})),e.style.transition=C.transitions.create("transform",(0,r.Z)({},t,{easing:C.transitions.easing.sharp})),m(u,e),H&&H(e)})),B=T((function(e){e.style.webkitTransition="",e.style.transition="",y&&y(e)})),D=o.useCallback((function(){L.current&&m(u,L.current)}),[u]);return o.useEffect((function(){if(!f&&"down"!==u&&"right"!==u){var e=(0,c.Z)((function(){L.current&&m(u,L.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[u,f]),o.useEffect((function(){f||D()}),[f,D]),o.createElement(M,(0,r.Z)({nodeRef:L,onEnter:A,onEntered:O,onEntering:N,onExit:_,onExited:B,onExiting:I,appear:!0,in:f,timeout:V},x),(function(e,t){return o.cloneElement(a,(0,r.Z)({ref:R,style:(0,r.Z)({visibility:"exited"!==e||f?void 0:"hidden"},b,a.props.style)},t))}))}))},9570:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(22122),n=a(81253),o=a(92950),i=a(86010),c=a(52543),l=a(59693),d=a(93871),v=a(56608),h=o.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.color,h=void 0===l?"secondary":l,s=e.edge,m=void 0!==s&&s,p=e.size,u=void 0===p?"medium":p,f=(0,n.Z)(e,["classes","className","color","edge","size"]),g=o.createElement("span",{className:a.thumb});return o.createElement("span",{className:(0,i.default)(a.root,c,{start:a.edgeStart,end:a.edgeEnd}[m],"small"===u&&a["size".concat((0,d.Z)(u))])},o.createElement(v.Z,(0,r.Z)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:(0,i.default)(a.switchBase,a["color".concat((0,d.Z)(h))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},f)),o.createElement("span",{className:a.track}))}));const s=(0,c.Z)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,l.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(h)},63957:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},51767:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"AppsRounded");t.Z=i},70329:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"}),"Attachment");t.Z=i},89875:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=i},66735:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=i},80366:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},60625:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"}),"DateRange");t.Z=i},28428:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},35308:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.Z=i},70195:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"}),"EventAvailable");t.Z=i},89260:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"}),"EventNote");t.Z=i},87239:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.Z=i},60314:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zM2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm15 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.1-.9-2-2-2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3v2h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v2h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2z"}),"Filter3Rounded");t.Z=i},22261:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-6.75-2.49l3.58-7.17c.11-.22.17-.47.17-.72 0-.9-.72-1.62-1.62-1.62H12c-.55 0-1 .45-1 1s.45 1 1 1h3l-3.36 6.71c-.3.59.13 1.29.8 1.29h.01c.34 0 .65-.19.8-.49z"}),"Filter7Rounded");t.Z=i},43099:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.Z=i},51115:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.Z=i},25281:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.Z=i},64379:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=i},34874:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"}),"LibraryMusic");t.Z=i},72576:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M21.26 21.21L3.79 3.74 2.38 5.15l2.74 2.74-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88 1.41-1.41zM7 19V9.77L16.23 19H7zm3.84-14H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z"}),"NoSimOutlined");t.Z=i},88995:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i},60796:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"}),"SwapHoriz");t.Z=i},89883:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}),"Today");t.Z=i},54769:(e,t,a)=>{var r=a(95318),n=a(20862);t.Z=void 0;var o=n(a(92950)),i=(0,r(a(2108)).default)(o.createElement("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"}),"VideoLibrary");t.Z=i}}]);