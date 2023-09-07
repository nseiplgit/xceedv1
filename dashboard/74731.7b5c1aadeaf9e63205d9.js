"use strict";(self.webpackChunk_shared_routing_dashboard=self.webpackChunk_shared_routing_dashboard||[]).push([[74731],{69685:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(22122),o=a(81253),n=a(92950),i=(a(59864),a(86010)),l=a(52543),c=n.forwardRef((function(e,t){var a=e.cellHeight,l=e.children,c=e.classes,d=e.className,s=e.cols,h=void 0===s?2:s,p=e.component,m=void 0===p?"ul":p,v=e.gap,u=void 0===v?4:v,g=e.rowHeight,f=void 0===g?180:g,y=e.spacing,b=e.style,Z=(0,o.Z)(e,["cellHeight","children","classes","className","cols","component","gap","rowHeight","spacing","style"]),k=y||u,E=a||f;return n.createElement(m,(0,r.Z)({className:(0,i.default)(c.root,d),ref:t,style:(0,r.Z)({margin:-k/2},b)},Z),n.Children.map(l,(function(e){if(!n.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return n.cloneElement(e,{style:(0,r.Z)({width:"".concat(100/h*t,"%"),height:"auto"===E?"auto":E*a+k,padding:k/2},e.props.style)})})))}));const d=(0,l.Z)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiImageList"})(c)},9570:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(22122),o=a(81253),n=a(92950),i=a(86010),l=a(52543),c=a(59693),d=a(93871),s=a(56608),h=n.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.color,h=void 0===c?"secondary":c,p=e.edge,m=void 0!==p&&p,v=e.size,u=void 0===v?"medium":v,g=(0,o.Z)(e,["classes","className","color","edge","size"]),f=n.createElement("span",{className:a.thumb});return n.createElement("span",{className:(0,i.default)(a.root,l,{start:a.edgeStart,end:a.edgeEnd}[m],"small"===u&&a["size".concat((0,d.Z)(u))])},n.createElement(s.Z,(0,r.Z)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:(0,i.default)(a.switchBase,a["color".concat((0,d.Z)(h))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},g)),n.createElement("span",{className:a.track}))}));const p=(0,l.Z)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,c.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(h)},76211:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(22122),o=a(28481),n=a(81253),i=a(92950),l=a(12666),c=a(43366),d=a(8920),s=a(5653),h=a(17294),p={entering:{transform:"none"},entered:{transform:"none"}},m={enter:c.x9.enteringScreen,exit:c.x9.leavingScreen};const v=i.forwardRef((function(e,t){var a=e.children,c=e.disableStrictModeCompat,v=void 0!==c&&c,u=e.in,g=e.onEnter,f=e.onEntered,y=e.onEntering,b=e.onExit,Z=e.onExited,k=e.onExiting,E=e.style,w=e.timeout,z=void 0===w?m:w,x=e.TransitionComponent,C=void 0===x?l.ZP:x,H=(0,n.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),M=(0,d.Z)(),V=M.unstable_strictMode&&!v,$=i.useRef(null),L=(0,h.Z)(a.ref,t),S=(0,h.Z)(V?$:void 0,L),N=function(e){return function(t,a){if(e){var r=V?[$.current,t]:[t,a],n=(0,o.Z)(r,2),i=n[0],l=n[1];void 0===l?e(i):e(i,l)}}},R=N(y),_=N((function(e,t){(0,s.n)(e);var a=(0,s.C)({style:E,timeout:z},{mode:"enter"});e.style.webkitTransition=M.transitions.create("transform",a),e.style.transition=M.transitions.create("transform",a),g&&g(e,t)})),A=N(f),O=N(k),I=N((function(e){var t=(0,s.C)({style:E,timeout:z},{mode:"exit"});e.style.webkitTransition=M.transitions.create("transform",t),e.style.transition=M.transitions.create("transform",t),b&&b(e)})),F=N(Z);return i.createElement(C,(0,r.Z)({appear:!0,in:u,nodeRef:V?$:void 0,onEnter:_,onEntered:A,onEntering:R,onExit:I,onExited:F,onExiting:O,timeout:z},H),(function(e,t){return i.cloneElement(a,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==e||u?void 0:"hidden"},p[e],E,a.props.style),ref:S},t))}))}))},63957:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},89875:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=i},66735:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=i},35308:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.Z=i},87239:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.Z=i},83173:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined");t.Z=i},43099:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.Z=i},51115:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.Z=i},25281:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");t.Z=i},34874:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"}),"LibraryMusic");t.Z=i},72576:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M21.26 21.21L3.79 3.74 2.38 5.15l2.74 2.74-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88 1.41-1.41zM7 19V9.77L16.23 19H7zm3.84-14H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z"}),"NoSimOutlined");t.Z=i},54769:(e,t,a)=>{var r=a(95318),o=a(20862);t.Z=void 0;var n=o(a(92950)),i=(0,r(a(2108)).default)(n.createElement("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"}),"VideoLibrary");t.Z=i}}]);