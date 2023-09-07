"use strict";(self.webpackChunk_shared_routing_dashboard=self.webpackChunk_shared_routing_dashboard||[]).push([[13258],{13258:(e,o,a)=>{a.d(o,{Z:()=>g});var t=a(22122),n=a(81253),r=a(92950),c=a(86010),i=a(56608),d=a(63786);const l=(0,d.Z)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=(0,d.Z)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");var p=a(59693);const u=(0,d.Z)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var h=a(93871),m=a(52543),v=r.createElement(s,null),b=r.createElement(l,null),f=r.createElement(u,null),k=r.forwardRef((function(e,o){var a=e.checkedIcon,d=void 0===a?v:a,l=e.classes,s=e.color,p=void 0===s?"secondary":s,u=e.icon,m=void 0===u?b:u,k=e.indeterminate,g=void 0!==k&&k,y=e.indeterminateIcon,Z=void 0===y?f:y,C=e.inputProps,z=e.size,x=void 0===z?"medium":z,S=(0,n.Z)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),I=g?Z:m,E=g?Z:d;return r.createElement(i.Z,(0,t.Z)({type:"checkbox",classes:{root:(0,c.default)(l.root,l["color".concat((0,h.Z)(p))],g&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:p,inputProps:(0,t.Z)({"data-indeterminate":g},C),icon:r.cloneElement(I,{fontSize:void 0===I.props.fontSize&&"small"===x?x:I.props.fontSize}),checkedIcon:r.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===x?x:E.props.fontSize}),ref:o},S))}));const g=(0,m.Z)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(k)},17812:(e,o,a)=>{a.d(o,{Z:()=>u});var t=a(22122),n=a(81253),r=a(92950),c=a(86010),i=a(52543),d=a(59693),l=a(32467),s=a(93871),p=r.forwardRef((function(e,o){var a=e.edge,i=void 0!==a&&a,d=e.children,p=e.classes,u=e.className,h=e.color,m=void 0===h?"default":h,v=e.disabled,b=void 0!==v&&v,f=e.disableFocusRipple,k=void 0!==f&&f,g=e.size,y=void 0===g?"medium":g,Z=(0,n.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return r.createElement(l.Z,(0,t.Z)({className:(0,c.default)(p.root,u,"default"!==m&&p["color".concat((0,s.Z)(m))],b&&p.disabled,"small"===y&&p["size".concat((0,s.Z)(y))],{start:p.edgeStart,end:p.edgeEnd}[i]),centerRipple:!0,focusRipple:!k,disabled:b,ref:o},Z),r.createElement("span",{className:p.label},d))}));const u=(0,i.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,d.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},56608:(e,o,a)=>{a.d(o,{Z:()=>h});var t=a(22122),n=a(28481),r=a(81253),c=a(92950),i=a(86010),d=a(22775),l=a(22601),s=a(52543),p=a(17812),u=c.forwardRef((function(e,o){var a=e.autoFocus,s=e.checked,u=e.checkedIcon,h=e.classes,m=e.className,v=e.defaultChecked,b=e.disabled,f=e.icon,k=e.id,g=e.inputProps,y=e.inputRef,Z=e.name,C=e.onBlur,z=e.onChange,x=e.onFocus,S=e.readOnly,I=e.required,E=e.tabIndex,F=e.type,R=e.value,B=(0,r.Z)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),w=(0,d.Z)({controlled:s,default:Boolean(v),name:"SwitchBase",state:"checked"}),O=(0,n.Z)(w,2),q=O[0],N=O[1],P=(0,l.Z)(),$=b;P&&void 0===$&&($=P.disabled);var _="checkbox"===F||"radio"===F;return c.createElement(p.Z,(0,t.Z)({component:"span",className:(0,i.default)(h.root,m,q&&h.checked,$&&h.disabled),disabled:$,tabIndex:null,role:void 0,onFocus:function(e){x&&x(e),P&&P.onFocus&&P.onFocus(e)},onBlur:function(e){C&&C(e),P&&P.onBlur&&P.onBlur(e)},ref:o},B),c.createElement("input",(0,t.Z)({autoFocus:a,checked:s,defaultChecked:v,className:h.input,disabled:$,id:_&&k,name:Z,onChange:function(e){var o=e.target.checked;N(o),z&&z(e,o)},readOnly:S,ref:y,required:I,tabIndex:E,type:F,value:R},g)),q?u:f)}));const h=(0,s.Z)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)}}]);