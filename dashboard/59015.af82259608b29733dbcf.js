/*! For license information please see 59015.af82259608b29733dbcf.js.LICENSE.txt */
"use strict";(self.webpackChunk_shared_routing_dashboard=self.webpackChunk_shared_routing_dashboard||[]).push([[59015],{41027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(92950),n=a.n(l),r=a(14439),s=a(27848),o=a(40900),i=a(45155),c=a(55886),p=a(282),d=a(92772),m=a(86893),u=a(53854),g=a(5434),h=a(25108);const b=(0,l.forwardRef)(((e,t)=>{const[a,b]=(0,l.useState)("Select * From Android_Gcm"),[f,E]=(0,l.useState)([]),[y,x]=(0,l.useState)("table"),[v,I]=(0,l.useState)(""),[w,C]=(0,l.useState)(""),S=o.v.Api+"SelectQuery/",T={width:"99%",height:"300px",lineHeight:1.4,padding:"15px",outlineColor:"#21446F",borderRadius:"12px",border:"none",backgroundColor:"#ededed",maxWidth:"100%"},N=()=>{E([]),I(""),C("")};return n().createElement("div",null,n().createElement("div",{id:"PPMCreationDelete-Main",className:"width100 displayFlex componentMainDiv cardDiv"},n().createElement("div",{id:"PPMCreationDelete-Detail",className:"detailCard detailDiv"},n().createElement(r.Z,{spacing:0},n().createElement(s.Z,{xs:12,md:12,lg:12,sm:12,style:{display:"flex",justifyContent:"right",gap:"10px",alignItems:"flex-end",padding:"10px"}},n().createElement("div",{className:"GridAlign",style:{marginTop:"10px"},disabled:!1,onClick:()=>{N()}},n().createElement("div",{className:"Entry-Checkbox"},n().createElement(i.pYJ,{className:"Iconstyles"})),n().createElement("div",{className:"GridLabel"},n().createElement("p",null,"Reset"))),n().createElement(p.Z,{className:"boxShadowNone SubmitBtnIcon clearBtnppm2rec",startIcon:n().createElement(c.Z,{style:{marginRight:"5px",fontSize:"16px"}}),onClick:()=>{(async()=>{N(),e.loading(!0);try{const t=await async function(e,t){try{const a=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",USER_ID:localStorage.getItem("userid")},body:JSON.stringify(t)});return await a.json()}catch(e){throw e}}(S,{query:a});if(400==t.Output.status.code)e.alertmsg({open:!0,color:"error",message:[t.Output.status.message]}),x("result"),C(t.Output.status.message);else{e.alertmsg({open:!0,color:"success",message:[t.Output.status.message]});const a=t.Output.data[0],l=t.Output.script,n=t.Output.rowsAffected;n&&n.length>0&&(I(l),x("result"),C(`rowsAffected : ${n}`)),a&&a.length>0&&(E(a),x("table")),l&&l.length>0&&(I(l),x("script"))}}catch(e){h.error(e)}finally{e.loading(!1)}})()}},"EXECUTE")),n().createElement(s.Z,{xs:12,md:12,lg:12,sm:12},n().createElement("p",{className:"ViewBodypTag Note "},n().createElement("div",{style:{marginLeft:"8px"}},n().createElement("textarea",{"aria-label":"minimum height",minRows:20,style:T,placeholder:"Execute Your Queries here",onChange:e=>{b(e.target.value)},value:a}))))),n().createElement(r.Z,{spacing:1},n().createElement(s.Z,{xs:12,md:12,lg:12,sm:12},n().createElement("div",null,n().createElement("div",{style:{display:"flex",alignItem:"center",marginLeft:"8px",justifyContent:"flex-start"}},n().createElement("div",{className:"b2",id:"button-11"},n().createElement("div",{className:"table"==y?"buttonList":"buttonGrid",style:{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"},onClick:()=>{x("table")}},n().createElement("span",{style:{fontSize:"14px",color:"#14181F"}},n().createElement(g.f_H,null)),n().createElement("span",null,"Table")),n().createElement("div",{className:"result"==y?"buttonList":"buttonGrid",onClick:()=>{x("result")}},n().createElement("span",{style:{fontSize:"14px",color:"#14181F"}},n().createElement(m.x8h,null)),n().createElement("span",null,"Result")),n().createElement("div",{className:"script"==y?"buttonList":"buttonGrid",style:{borderTopRightRadius:"4px",borderBottomRightRadius:"4px"},onClick:()=>{x("script")}},n().createElement("span",{style:{fontSize:"14px",color:"#14181F"}},n().createElement(u.umT,null)),n().createElement("span",null,"Script")))))),n().createElement(s.Z,{xs:12,md:12,lg:12,sm:12},"table"==y&&n().createElement(n().Fragment,null,f.length>0?n().createElement("div",{style:{width:"100%",maxWidth:"95vw",height:"50vh",paddingLeft:"10px"},className:"displayFlex padding"},n().createElement(d.default,{pageSize:100,hideExportPrint:!0,dynamic:!0,tableData:f,searchdisabled:!0,TableVisibleItem:[],TableBodyItem:[]})):n().createElement("p",{className:"ListP ListPlevl1",style:{padding:"10px"}},"No Records Found")),"script"==y&&n().createElement("p",{className:"ViewBodypTag Note "},n().createElement("div",{style:{marginLeft:"8px"}},n().createElement("textarea",{readOnly:!0,value:v,minRows:50,style:T}))),"result"==y&&n().createElement("p",{className:"ViewBodypTag Note "},n().createElement("div",{style:{marginLeft:"8px"}},n().createElement("textarea",{readOnly:!0,minRows:50,value:w,style:T}))))))))}))},26537:(e,t,a)=>{a.d(t,{Z:()=>s}),a(92950);var l=a(40900),n=a(55905),r=!1;function s(e){const t=(0,n.decode)(localStorage.getItem("username"));let a=l.v.Api+"FPU2S3/",s={data:{UserName:localStorage.getItem("username"),Password:localStorage.getItem("password"),UserID:localStorage.getItem("userid"),IsActive:e,SessionID:localStorage.getItem("SessionID")}};return fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},keepalive:!1,body:JSON.stringify(s)}).then((e=>e.json())).then((e=>e&&0==e.TokenIDPK&&"admin"!=t.toLowerCase()?(r||(r=!0,alert("It appears that your session has been taken over by another device. Please login again to regain access.")),localStorage.clear(),sessionStorage.clear(),window.location.href.toLowerCase().includes("adib")?window.location.href=logoutpath:window.location.href="/",{}):e)).catch((e=>e))}},96622:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(92950),n=a.n(l),r=(a(94184),a(45697)),s=a.n(r),o=a(282);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}const c=n().forwardRef(((e,t)=>{const{color:a,round:l,children:r,fullWidth:s,disabled:c,simple:p,size:d,block:m,link:u,justIcon:g,className:h,muiClasses:b,...f}=e;return n().createElement(o.Z,i({},f,{ref:t}),r)}));c.propTypes={color:s().oneOf(["primary","info","success","warning","danger","rose","smartgreen","smartblue","white","twitter","facebook","google","linkedin","pinterest","youtube","tumblr","github","behance","dribbble","reddit","transparent","themecolor"]),size:s().oneOf(["sm","lg"]),simple:s().bool,round:s().bool,fullWidth:s().bool,disabled:s().bool,block:s().bool,link:s().bool,justIcon:s().bool,className:s().string,muiClasses:s().object,children:s().node};const p=c},14439:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(92950),n=a.n(l),r=a(45697),s=a.n(r),o=a(41749);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}function c({...e}){const{classes:t,children:a,className:l,...r}=e;return n().createElement(o.Z,i({container:!0},r,{className:l}),a)}c.propTypes={classes:s().object,className:s().string,children:s().node};const p=c},27848:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(41749),n=a(45697),r=a.n(n),s=a(92950),o=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}function c({...e}){const{classes:t,children:a,className:n,...r}=e;return o().createElement(l.Z,i({item:!0,className:n+" GridItemPadding"},r),a)}c.propTypes={classes:r().object,className:r().string,children:r().node};const p=c},39431:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(92950),n=a.n(l),r=a(13258),s=a(30553);function o(e){return n().createElement(s.Z,{style:{margin:"0"},control:n().createElement(r.Z,{style:{minWidth:"auto",height:"100%",opacity:"1",position:"relative",width:"auto"},className:"MUICheckbox",checked:e.checked,onChange:t=>{e.onClick&&e.onClick(t.target.checked)},disabled:e.disabled}),label:e.label&&e.label})}},92772:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(92950),n=a.n(l),r=a(13089),s=a(61657),o=a(7320),i=a(282),c=a(20067),p=a(25108);const d=function(e){const t=(0,l.useRef)(null),[a,d]=(0,l.useState)(e.tableData),[m,u]=(0,l.useState)([]),[g,h]=(0,l.useState)([]),[b,f]=(0,l.useState)([]),[E,y]=(0,l.useState)([]),[x,v]=(0,l.useState)(0),[I,w]=(0,l.useState)({}),[C,S]=(0,l.useState)({}),[T,N]=(0,l.useState)(0),[D,P]=(0,l.useState)({current:1,pageSize:e.pageSize?e.pageSize:10}),k=[{columns:b,data:E}];(0,l.useEffect)((()=>{e.TableVisibleItem.length>0&&(u(e.TableVisibleItem),h(e.TableBodyItem))}),[e.TableVisibleItem]),(0,l.useEffect)((()=>{let t=[];e.tableData.map((e=>{let a=[];g.map((t=>{a.push(e[t])})),t.push(a)})),y(t)}),[g]);const R=100*x,Z=R+100;function O(e,t,a){return e.slice((a-1)*t,a*t)}return e.tableData.slice(R,Z),(0,l.useEffect)((()=>{if(P({current:1,pageSize:e.pageSize?e.pageSize:10}),e.tableData.length>0)if(e.dynamic){let t=[],a=[],l=[];Object.keys(e.tableData[0]).map((e=>{!(e.startsWith("Is")||e.includes("ID")||e.includes("PageIndex")||e.includes("PageSize")||e.includes("TotalCount"))&&(t.push({id:e,name:e.replace(/([A-Z])/g," $1").trim(),type:"varchar"}),a.push(e.trim()),l.push(e.replace(/([A-Z])/g," $1").trim()))})),0==Object.keys(I).length&&w(a.reduce(((e,t)=>(e[t]="",e)),{})),u(t),h(a),f(l),d(e.tableData)}else d(e.tableData);else d([])}),[e.tableData]),n().createElement("div",{id:"ExcelMigrationTabDiv",style:{width:"100%",height:"100%",position:"relative",marginTop:e.marginTop&&e.marginTop}},e.name&&n().createElement("div",{className:"ListHeader displayFlex",style:{justifyContent:"space-between"}},n().createElement("p",{className:"ListP"}," ",e.name," ( ",a.length>0?a[0].TotalCount?a[0].TotalCount:a.length:""," )"),n().createElement("div",{className:"salQuclsExp",style:{padding:"3px"}},e.X_Status?.length>0&&e.X_Status.map((e=>n().createElement("span",{className:"columnHeaderp",style:{width:"100%",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"4px 4px 4px 8px",marginRight:"4px",borderRadius:"4px",borderLeft:"3px solid #3873bb"}},e)))),n().createElement("div",null,e.showPrintBtn&&a.length>0?n().createElement(i.Z,{variant:"contained",color:"secondary",startIcon:n().createElement(c.Z,{style:{marginRight:"10px"},className:"SubmitBtnIcon"}),style:{backgroundColor:"#21446F",fontSize:"12px",fontWeight:"500"},onClick:t=>{e.privewRecord("pdf")}},"Print Preview"):"")),a.length>0&&!e.hideExportPrint&&n().createElement("div",{style:{display:"flex",alignItems:"center",height:"35px"}},n().createElement(o.Z,{formctrlidprint:"fld4L1TCExportPrint",formctrlidexport:"fld4L1TCExportTable",formctrlidrefresh:"fld4L1TCExportRefresh",title:e.name,data:a,TableVisibleItem:m,exportData:k,Items:g,columnIndex:b,triggerApi:t=>{var a;a=t,d(e.tableData),N(e.tableData[0]?.TotalCount),e.PrintPdf(a)},TotalCount:e.tableData[0]?.TotalCount?e.tableData[0]?.TotalCount:1e3,Refresh:()=>{O(a,1,10),v(0),P({current:1,pageSize:10}),e.Refresh()},disabledPrint:!1,disabledExport:!1,ref:t})),!e.paging&&n().createElement("div",{className:`${e.pagcls} tableTopPagination displayFlex floatOrder`},n().createElement("div",{style:{display:"flex"}},n().createElement("div",{style:{width:e.width?e.width:"100%"}},e.clientsidePaging?n().createElement(s.Z,{rowsPerPageOptions:[],component:"div",count:e.tableData.length,rowsPerPage:100,page:x,onPageChange:(e,t)=>{v(t)}}):n().createElement(s.Z,{style:{color:"#777"},rowsPerPageOptions:[],component:"div",count:e.tableData[0]?.TotalCount?e.tableData[0].TotalCount:a.length,page:x,onPageChange:(t,a)=>{v(a),e.tableData[0]?.TotalCount&&e.onPageChange(a+1),P({current:a+1,pageSize:D.pageSize})},rowsPerPage:e.pageSize?e.pageSize:10,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"}})))),n().createElement(r.Z,{id:"ExcelMigrationTable",headerdata:m,tablesearchparams:e.tablesearchparams?e.tablesearchparams:I,searchvalue:t=>e.searchvalue(t),bodydata:O(a,D.pageSize,D.current),ondrag:(e,t)=>p.log(e,t),bodyitem:g,visibleitem:m,action:"none",IsDraft:!1,IsView:!!e.ExpandTable&&e.ExpandTable,IsSub:!1,tableExp:!!e.ExpandTable&&e.ExpandTable,accessrights:{},expanded:e=>{},edit:(t,a,l)=>{p.log(t,"rowa"),e.onDoubleClick&&e.edit(t,a,l)},viewtoggle:()=>{},isexpanded:!!e.Action&&e.Action,ViewComp:(t,a)=>n().createElement("div",null,e.ViewComp(t,a)),height:e.height,color:!0,colwid:e.colwid,onDoubleClick:t=>{p.log(t,"eee"),e.onDoubleClick(t)},searchdisabled:e.searchdisabled,IsDrag:e.IsDrag,OnDrop:e.OnDrop,DraglistRw:e.DraglistRw,RemoveAll:e.RemoveAll}))}},7320:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(92950),n=a.n(l),r=a(96622),s=(a(14439),a(27848),a(4820)),o=a(20394),i=a(82483),c=a(55546),p=a.n(c),d=a(38431),m=a.n(d),u=a(36210),g=(a(61924),a(868)),h=a(40900),b=a(26537);const f=p().ExcelFile,E=p().ExcelFile.ExcelSheet,y=(0,l.forwardRef)(((e,t)=>{const{classes:a}=e,c=(0,l.useRef)(),p=(0,l.useRef)(),d=(0,l.useRef)(),[y,x]=(0,l.useState)(""),[v,I]=(0,l.useState)({});let w=localStorage.getItem("userid");(0,l.useEffect)((()=>{!function(){let e=h.v.Api+"FP95S3/",t={data:{p1:null,p2:null,p3:null,p4:null,p5:null,p6:null,p7:null,p8:null,p9:null,p10:null,p11:null,p12:null,p13:null,p14:null,p15:null,p16:null,p17:null,p18:null,p19:null,p20:null,p21:null,p22:null,p23:null,p24:null,p25:null,p26:null,p27:null,p28:null,p29:null,p30:null,p31:null,p32:null,p33:null,p34:null,p35:null,p36:null,p37:null,p38:null,p39:null,p40:null,p41:null,p42:null,p43:null,p44:null,p45:null,p46:null,p47:null,p48:null,p49:null,p50:null,p51:null,p52:null,p53:null,p54:null,p55:null,p56:null,p57:null,p58:null,p59:null,p60:null,p61:null,p62:null,p63:null,p64:null,p65:null,p66:null,p67:null,p68:null,p69:null,p70:null,p71:null,p72:null,p73:null,p74:null,p75:null,p76:null,p77:1,p78:10,p79:"BrandingID",p80:null,p81:null,p82:Number(localStorage.getItem("UserGroupID")),p83:Number(localStorage.getItem("userid"))}};(0,b.Z)(0).then((a=>{fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",USER_ID:w,FORM_ID:1,"x-userid":w,"x-tokenid":a.TokenIDPK,"x-tokenname":a.TokenName},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{I(e.Output.data[0])}))}))}()}),[]),(0,l.useImperativeHandle)(t,(()=>({PrintValue:()=>{C()},Printreport:()=>{S()}})));const C=()=>{y?p.current.click():d.current.click()},S=()=>{p.current.click()};return n().createElement("div",null,n().createElement("div",{style:{display:"none"}},n().createElement(i.Z,{ref:e=>c.current=e,data:e.data,index:e.Items.length>10?e.Items.slice(0,10):e.Items,columnTitle:e.columnIndex.length>10?e.columnIndex.slice(0,10):e.columnIndex,Title:e.title,Brandingdata:v})),n().createElement("div",{style:{display:"flex",alignItems:"center",height:"35px"}},!e.disabledPrint&&n().createElement("div",{className:"buttoncard",onClick:t=>{e.triggerApi({type:"pdf",alertName:"Print",count:e.TotalCount,table:e.title,format:"A4",landscape:!0,TableVisibleItem:e.TableVisibleItem?e.TableVisibleItem:[],userGridViewFormID:e.userGridViewFormID?e.userGridViewFormID:null,username:localStorage.getItem("username")}),x(!0)}},n().createElement(g.ZP,{title:"Print",placement:"top"},n().createElement(o.Z,{className:"tableFilterColumnIcon tablExpicon fontSize18"})),n().createElement("span",{className:e.iconinfo?e.iconinfo:"iconinfo"},"Print")),n().createElement(m(),{trigger:()=>n().createElement(r.Z,{style:{display:"none"},ref:p}," Print"),content:()=>c.current}),!e.disabledExport&&e.exportData&&n().createElement("div",{className:"buttoncard",onClick:()=>{e.triggerApi({type:"excel",alertName:"Print",count:e.TotalCount,table:e.title,format:"A4",landscape:!0,TableVisibleItem:e.TableVisibleItem?e.TableVisibleItem:[],userGridViewFormID:e.userGridViewFormID?e.userGridViewFormID:null,username:localStorage.getItem("username")}),x(!1)}},n().createElement(g.ZP,{title:"Excel Export",placement:"top"},n().createElement(s.Z,{className:"tableFilterColumnIcon tablExpicon fontSize18"})),n().createElement("span",{className:e.iconinfo?e.iconinfo:"iconinfo"},"Excel Export")),e.exportData&&n().createElement(f,{filename:e.title,element:n().createElement(r.Z,{style:{display:"none"},ref:d}," Excel Export")},n().createElement(E,{dataSet:e.exportData,name:e.title})),e.Refresh&&n().createElement("div",{className:"buttoncard",onClick:e.Refresh},n().createElement(g.ZP,{title:"Refresh",placement:"top"},n().createElement(u.Z,{className:"tableFilterColumnIcon tablExpicon fontSize18"})),n().createElement("span",{className:e.iconinfo?e.iconinfo:"iconinfo"},"Refresh"))))}))},99173:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(92950),n=a.n(l),r=a(35996),s=a(52795),o=a(20067),i=a(28270),c=(a(41823),a(25108));const p=(0,l.forwardRef)(((e,t)=>{const[a,p]=(0,l.useState)(!1),[d,m]=(0,l.useState)(""),[u,g]=(0,l.useState)(""),h=(0,l.useRef)();e.id;let b=e.mandatory,f=e.disabled,E=e.maxLength,y=e.labelname;return(0,l.useImperativeHandle)(t,(()=>({clear:()=>{h.current.value=""}}))),(0,l.useEffect)((()=>{m(e.value)}),[e.value]),(0,l.useEffect)((()=>{"password"===e.type&&g(e.type),g(e.type)}),[e.type]),n().createElement(s.Z,{onClickAway:()=>{p(!1)}},n().createElement("div",{className:e.isCommon?"L2TableTextCommon":"L2TableText"},n().createElement("form",{autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n().createElement("div",{className:e.newtxt?"l2drop":"floating-label ",style:{marginTop:e.marginTop?e.marginTop:"12%"}},e.Iscurr&&n().createElement("span",{className:"pretext"},localStorage.getItem("DefCurrenct")),n().createElement("input",{className:(e.newtxt?"l2drop2":e.logincss?e.logincss:b&&!d?" errorinput ":e.removebrandingclr||e.isCommon?"successinput":" successTableinput ")+("password"===e.type?" floating-input floating-input-password":" floating-input ")+(e.Iscurr&&"paddingcurr"),placeholder:" ",ref:h,value:d,id:e.id+"_input",onChange:function(t){if(y.includes("%"))t.target.value<=100&&(p(!0),m(t.target.value.replace(/["']/g,"")),e.onChange(t.target.value.replace(/["']/g,"")));else{if("number"===u){let a=t.target.value;return a.length>1&&(a=t.target.value.replace(/[^0-9]/gi,"")),a.length<=Number(E)?(e.onChange(a),!1):(c.log("false",t.target.value),!1)}p(!0),m(t.target.value.toString().replace(/[=<>;?/$#"']/g,"")),e.onChange(t.target.value.toString().replace(/[=<>;?/$#"']/g,""))}},onBlur:e.onBlur?e.onBlur:null,type:"password"===e.type?u:e.type,disabled:f?"disabled":"",maxLength:E||"",onKeyDown:t=>{"Enter"===t.key&&e.keyPress&&e.onKeyPress(t.target.value)}}),n().createElement("label",{className:e.Iscurr?"float-Tablelabel shrinklabel floatTure":e.logincss?"float-loginlabel":e.removebrandingclr&&e.isCommon?"float-label":"float-Tablelabel"},e.hideLabel?y="":(e.value?" ":"Enter ")+y+(d?.length>0&&E&&"select"!==e.type?"("+d?.length+"/"+E+")":"")),"password"===e.type?"password"===u?n().createElement(i.Z,{className:e.ChgCss?"ChgpassVisibleIcon":"passwordVisibleIcon",onMouseDown:()=>g("text")}):"text"===u&&n().createElement(o.Z,{className:e.ChgCss?"ChgpassVisibleIcon":"passwordVisibleIcon",onMouseUp:()=>g("password")}):null,n().createElement("div",{id:e.id+"_cls",className:"L2DropDownInputClearDiv",onClick:t=>{m(""),e.onChange(""),e.clear(!0,t)}},d&&!f?n().createElement(r.Z,{title:"clear",className:e.logincss?"LoginClearIcon":"FilterClearIcon"}):""),n().createElement("span",null,e.helpertext&&e.helpertext)))))}))},49174:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(11504),n=a(48904),r=a(13457),s=a(92950),o=a.n(s),i=a(10635),c=a(93890),p=a.n(c);const d=(0,n.Z)({overrides:{MuiInput:{underline:{"&:before":{borderBottom:"2px solid red"},"&:after":{borderBottom:"2px solid #34ace0"}}}}}),m=(0,n.Z)({overrides:{MuiInput:{underline:{"&:before":{borderBottom:"2px solid #34ace0"},"&:after":{borderBottom:"2px solid #34ace0"}}}}}),u=function(e){const[t,a]=(0,s.useState)(null),[n,c]=(0,s.useState)("");return o().createElement("form",{autoComplete:"off",onSubmit:e=>{e.preventDefault()},style:{width:"100%"}},o().createElement(r.Z,{theme:e.value?m:d},o().createElement(l.MuiPickersUtilsProvider,{utils:p()},o().createElement(l.KeyboardDatePicker,{id:e.id,autoOk:!0,label:e.label,fullWidth:!e.fullWidth,value:e.value?e.value:null,variant:e.variant?e.variant:"inline",InputAdornmentProps:{position:"end"},format:e.format?e.format:"dd-MM-yyyy",maxDate:e.maxDate&&new Date(e.maxDate),minDate:e.minDate&&new Date(e.minDate),minDateMessage:"Min Date Invalid",onError:(t,a)=>{c(t),e.onErr(t)},onChange:e.change?e.change:t=>{"Invalid Date"==t||null==t?e.onChange(t):e.onChange((0,i.format)(t,"yyyy-MM-dd"))},disabled:!!e.disabled&&e.disabled,views:e.view?e.view:["date"],openTo:e.openTo?e.openTo:null}))))}},82483:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(92950),n=a.n(l),r=(a(40900),a(55905));class s extends n().Component{constructor(e){super(e),this.state={name:localStorage.getItem("username")},this.today=new Date,this.date=this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate(),this.time=this.today.getHours()+":"+this.today.getMinutes()+":"+this.today.getSeconds(),this.dateTime=this.date+" "+this.time}render(){let e=this.props.Brandingdata,t="https://via.placeholder.com/400x160/FFFFFF/CCCCCC?text=Upload%20Logo";return n().createElement("div",null,n().createElement("div",{className:"page-footer"},n().createElement("p",{style:{marginLeft:"25px",color:"rgb(125, 124, 124)",fontSize:"10px"}},"Generated from ","SmartFM"," on ",(new Date).toLocaleString(),"   By - ",(0,r.decode)(localStorage.getItem("username")),"/Reg")),n().createElement("table",{style:{width:"100%"}},n().createElement("thead",null,n().createElement("tr",null,n().createElement("td",null,n().createElement("div",{className:"page-header-space"},n().createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},n().createElement("img",{className:"reportimg",src:e.ReportLeftHeaderPath?e.ReportLeftHeaderPath:t,alt:"logo"}),n().createElement("div",{className:"headertitle",style:{textAlign:"center"}},n().createElement("p",{className:"headerTxtBold"},e.WRTitle1),n().createElement("p",{className:"headerTxt1"},e.WRTitle2),n().createElement("p",{className:"headerTxt"},e.WRTitle3),n().createElement("p",{className:"headerTxt"},"PH:",e.WMContactNo1,",EMAIL:",e.WMEmailAddress1,".")),n().createElement("img",{className:"reportimgR",src:e.ReportRightHeaderPath?e.ReportRightHeaderPath:t,alt:"logo"})))))),n().createElement("tbody",{style:{width:"100%"}},n().createElement("tr",null,n().createElement("td",null,n().createElement("div",{className:"page",style:{lineHeight:"2"}},n().createElement("div",{className:"page-heading",style:{marginTop:"0%",background:"#fff"}},n().createElement("h5",null,this.props.Title)),n().createElement("table",{id:"yearCustomer"},n().createElement("thead",null,n().createElement("tr",null,0===this.props.columnTitle.length?null:this.props.columnTitle.map(((e,t)=>n().createElement("td",{key:t,className:"print_tdhead"},e))))),n().createElement("tbody",{className:"print_tdbody"},0===this.props.data.length?null:this.props.data.map(((e,t)=>n().createElement("tr",{key:t},this.props.index.map(((t,a)=>"Is"==t.slice(0,2)?n().createElement("td",{key:a,className:"print_td"},n().createElement("input",{type:"checkbox",checked:e[t]})):n().createElement("td",{key:a,className:"print_td"},e[t])))))))))))),n().createElement("tfoot",null,n().createElement("tr",null,n().createElement("td",null,n().createElement("div",{className:"page-footer-space"}))))))}}const o=s},40900:(e,t,a)=>{a.d(t,{v:()=>l}),window.location.href.split("/");const l={Api:"http://13.127.67.252:5040/",MongoAPI:"",NoData:"http://13.127.67.252:5040/images/NoData.GIF",GoogleMapsAPI:"",excel:"http://13.127.67.252:5040/Images/Excel/",ImageUrl:"http://13.127.67.252:5040/Images/",ServerTime:0}}}]);