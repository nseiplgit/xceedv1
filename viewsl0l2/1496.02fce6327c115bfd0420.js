"use strict";(self.webpackChunk_shared_routing_viewsl0l2=self.webpackChunk_shared_routing_viewsl0l2||[]).push([[1496],{10794:(e,t,l)=>{l.d(t,{E:()=>a,p:()=>n});const a={count:0,ExpandDetailValue:"",IsDraft:!1,loading:!1,AccessRights:{IsAdd:!1,IsEdit:!1,IsView:!1,IsDelete:!1,IsPrint:!1,IsExport:!1},createEasy:!1,ConfirmAlert:null,editData:[],clearFunc:"",ShowDetail:!1,Add:!1,viewonly:!1,showDetail:!1,ExpandTableValue:!0,id:"",PrimaryId:"",token:[],showTableview:[],language:{}};function n(e,t){switch(t.type){case"count":return{...e,count:t.payload};case"ExpandDetailValue":return{...e,ExpandDetailValue:t.payload};case"IsDraft":return{...e,IsDraft:t.payload};case"loading":return{...e,loading:t.payload};case"AccessRights":return{...e,AccessRights:t.payload};case"createEasy":return{...e,createEasy:t.payload};case"ConfirmAlert":return{...e,ConfirmAlert:t.payload};case"editData":return{...e,editData:t.payload};case"ShowDetail":return{...e,ShowDetail:t.payload};case"Add":return{...e,Add:t.payload};case"viewonly":return{...e,viewonly:t.payload};case"showDetail":return{...e,showDetail:t.payload};case"ExpandTableValue":return{...e,ExpandTableValue:t.payload};case"id":return{...e,id:t.payload};case"PrimaryId":return{...e,PrimaryId:t.payload};case"token":return{...e,token:t.payload};case"showTableview":return{...e,showTableview:t.payload};case"language":return{...e,language:t.payload};default:throw new Error(`Unhandled action type: ${t.type}`)}}},13235:(e,t,l)=>{l(92950),l(8981)},31496:(e,t,l)=>{l.r(t),l.d(t,{ContextApi:()=>q,PPMSSSupAddOnContext:()=>H,default:()=>z});var a=l(92950),n=l.n(a),S=l(45237),d=l(37148),u=l(3212),r=l(29800),P=l(14439),i=l(27848),o=(l(10966),l(36939)),p=l(61201),m=l(50743),s=(l(21392),l(51673)),c=l(40900),M=l(26537),b=(l(24038),l(30553)),y=(l(44528),l(61956)),C=(l(49174),l(38773),l(19089)),g=(l(99090),l(35131)),D=l.n(g),I=l(11377),E=l(1695),h=(l(13235),l(61924)),f=l.n(h),A=l(868),O=l(40826),v=(l(82729),l(75355),l(11107),l(92371));const T={EnterKeyValues:{PPMSSSupAddOn:["PPMSSSubAddOnCode","PPMSSSubStartDateTime","PPMSSSubEndDateTime","PPMSSSubTechTotal","PPMSSSubTechRemarks","IsPPMSSSubTechManual","PPMSSSubLattitude","PPMSSSubCCMLongitude","PPMSSSupEmployeeKey","IsPPMSSSupChargable","SSCreWorkOrder"]},Label:{PPMSSSupAddOn:{PPMSSSubAddOnCode:["PPMSSSubAddOnCode"],PPMSSSubStartDateTime:["PPMSSSubAddOnCode"],PPMSSSubEndDateTime:["PPMSSSubAddOnCode"],PPMSSSubTechTotal:["PPMSSSubAddOnCode"],PPMSSSubTechRemarks:["PPMSSSubAddOnCode"],IsPPMSSSubTechManual:["PPMSSSubAddOnCode"],PPMSSSubLattitude:["PPMSSSubAddOnCode"],PPMSSSubCCMLongitude:["PPMSSSubAddOnCode"],PPMSSSupEmployeeKey:["PPMSSSubAddOnCode"],IsPPMSSSupChargable:["PPMSSSubAddOnCode"],PPMSSCreationWorkOrderID:["PPMSSSubAddOnCode"]}},LabelHeader:{PPMSSSupAddOn:{PPMSSSubAddOnCode:["PPMSSSubAddOnCode"],PPMSSSubStartDateTime:["PPMSSSubAddOnCode"],PPMSSSubEndDateTime:["PPMSSSubAddOnCode"],PPMSSSubTechTotal:["PPMSSSubAddOnCode"],PPMSSSubTechRemarks:["PPMSSSubAddOnCode"],IsPPMSSSubTechManual:["PPMSSSubAddOnCode"],PPMSSSubLattitude:["PPMSSSubAddOnCode"],PPMSSSubCCMLongitude:["PPMSSSubAddOnCode"],PPMSSSupEmployeeKey:["PPMSSSubAddOnCode"],IsPPMSSSupChargable:["PPMSSSubAddOnCode"],PPMSSCreationWorkOrderID:["PPMSSSubAddOnCode"]}},Property:{PPMSSSupAddOn:{PPMSSSubAddOnCode:{id:"fld913_22786",labelID:"PPMSSSubAddOnCode",maxLength:"50",labelname:"",frmctrlid:"fld913_22786",frmctrlidname:"PPMSSSubAddOnCode",type:"text",mandatory:!0,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSSubStartDateTime:{id:"fld913_22787",labelID:"PPMSSSubStartDateTime",maxLength:"",labelname:"",frmctrlid:"fld913_22787",frmctrlidname:"PPMSSSubStartDateTime",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSSubEndDateTime:{id:"fld913_22788",labelID:"PPMSSSubEndDateTime",maxLength:"",labelname:"",frmctrlid:"fld913_22788",frmctrlidname:"PPMSSSubEndDateTime",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSSubTechTotal:{id:"fld913_22789",labelID:"PPMSSSubTechTotal",maxLength:"",labelname:"",frmctrlid:"fld913_22789",frmctrlidname:"PPMSSSubTechTotal",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSSubTechRemarks:{id:"fld913_22790",labelID:"PPMSSSubTechRemarks",maxLength:"-1",labelname:"",frmctrlid:"fld913_22790",frmctrlidname:"PPMSSSubTechRemarks",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},IsPPMSSSubTechManual:{id:"fld913_22791",labelID:"IsPPMSSSubTechManual",maxLength:"",labelname:"",frmctrlid:"fld913_22791",frmctrlidname:"IsPPMSSSubTechManual",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSSubLattitude:{id:"fld913_22792",labelID:"PPMSSSubLattitude",maxLength:"-1",labelname:"",frmctrlid:"fld913_22792",frmctrlidname:"PPMSSSubLattitude",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSSubCCMLongitude:{id:"fld913_22793",labelID:"PPMSSSubCCMLongitude",maxLength:"-1",labelname:"",frmctrlid:"fld913_22793",frmctrlidname:"PPMSSSubCCMLongitude",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSSupEmployeeKey:{id:"fld913_22794",labelID:"PPMSSSupEmployeeKey",maxLength:"",labelname:"",frmctrlid:"fld913_22794",frmctrlidname:"PPMSSSupEmployeeKey",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},IsPPMSSSupChargable:{id:"fld913_22795",labelID:"IsPPMSSSupChargable",maxLength:"",labelname:"",frmctrlid:"fld913_22795",frmctrlidname:"IsPPMSSSupChargable",type:"text",mandatory:!1,masked:!1,masktype:"",disabled:!1,autogen:!1},PPMSSCreationWorkOrderID:{id:"fld913_22798",clearID:"PPMSSSupAddOnSSCreWorkOrderClear",type:"select",labelID:"PPMSSCreationWorkOrderIDPK",labelname:"",fielddisplayname:"SSCreWorkOrder",foreignName:[],createEasy:!1,advanceSearch:!1,disabled:!1,mandatory:!0}}},SubForms:{},POPLabel:{PPMSSSupAddOn:{PPMSSCreationWorkOrderID:["BuildingID","ContractID","DisciplineID","DivisionID","FloorID","FrequencyID","LocalityID","PPMStageID","SpotID","SSCreWorkOrder","SSCreWoDateTime","SSCreSLAHours"]}}};var k=l(99940),x=l(63163),w=l(63750),L=l(45155),N=(l(79117),l(8981));const F={PPMSSSubAddOnIDPK:"",PPMSSSubAddOnCode:"",PPMSSSubStartDateTime:"",PPMSSSubStartDateTimeType:"",PPMSSSubStartDateTimeBetween:"",PPMSSSubEndDateTime:"",PPMSSSubEndDateTimeType:"",PPMSSSubEndDateTimeBetween:"",PPMSSSubTechTotal:"",PPMSSSubTechRemarks:"",IsPPMSSSubTechManual:!1,PPMSSSubLattitude:"",PPMSSSubCCMLongitude:"",PPMSSSupEmployeeKey:"",IsPPMSSSupChargable:!1,IsDraft:!1,Remarks:"",PPMSSCreationWorkOrderID:null,IsActive:!0,DeleStat:!1,CreatedUserID:null,CreatedTtm:"",CreatedTtmType:"",CreatedTtmBetween:"",UpdatedTtm:"",ContractID:null,ContractCode:"",ContractName:"",LocalityID:null,LocalityCode:"",LocalityName:"",BuildingID:null,BuildingCode:"",BuildingName:"",FloorID:null,FloorCode:"",FloorName:"",SpotID:null,SpotCode:"",SpotName:"",DivisionID:null,DivisionCode:"",DivisionName:"",DisciplineID:null,DisciplineCode:"",DisciplineName:"",FrequencyID:null,FrequencyCode:"",FrequencyName:"",PPMBusinessFlowID:null,BriefDetails:"",FlowCode:"",FlowDisplayName:"",PPMFixonBusinessFlowID:null,FixonBusinessFlowName:"",PPMFixonBusinessFlowCode:"",PPMStageID:null,PPMStageName:"",StageSeqNo:"",SSCreWorkOrder:"",Type:"PPMSSSubAddOnID",UserGroupKey:localStorage.getItem("UserGroupID"),UserAccessKey:localStorage.getItem("userid")},B=(0,a.forwardRef)(((e,t)=>{(0,S.useSelector)((e=>e.form));const l=(0,S.useDispatch)(),[u,r]=(0,a.useState)("1"),[o,p]=(0,a.useReducer)(v.Z,F),[m,g]=(0,a.useState)(!1),[h,B]=(0,a.useState)([]),R=(0,a.useContext)(H),{cstate:K,cdispatch:W}=q(),[Z,_]=(0,a.useState)(""),[V,G]=(0,a.useState)(""),[Y,j]=(0,a.useState)(!0),[U,z]=(0,a.useState)(""),[J,$]=(0,a.useState)(""),[Q,X]=(0,a.useState)(!0),[ee,te]=(0,a.useState)(!0),[le,ae]=(0,a.useState)(!0),[ne,Se]=(0,a.useState)(!0),[de,ue]=(0,a.useState)(!0),[re,Pe]=(0,a.useState)(!1);let ie=(0,N.Z)();const oe=e=>ie?.[e]?ie[e]:e,pe=e=>K.language?.[e]?K.language[e]:e;(0,a.useEffect)((()=>{K.PrimaryId&&_(Number(K.PrimaryId))}),[K.PrimaryId]),(0,a.useEffect)((()=>{l((e=>{0==K.token.length&&(0,M.Z)(1).then((t=>{var l=new Array;l.push(t),e({type:"PPMSSSupAddOnToken",PPMSSSupAddOnToken:l})}))})),Me()}),[]),(0,a.useEffect)((()=>{K.editData.length>0?ce(K.editData[0],""):K.Add&&Me()}),[K.editData]),(0,a.useImperativeHandle)(t,(()=>({clear:Me})));const me=e=>{if(e){let l=(t=e)?t.split("-").reverse().join("-"):null;return"Invalid Date"!=new Date(l)?(0,O.format)(new Date(l),"yyyy-MM-dd"):e}return null;var t},se=e=>{if(!e)return e;if(e){let t=e.split(" "),l=t[0].split("-").reverse().join("-");return 2==t.length?l+" "+t[1]:l}},ce=(t,l)=>{let a=t;Object.keys(a).forEach((function(e){0==a[e]&&(a[e]=null)})),_(a.PPMSSSubAddOnIDPK),"SetDefaultPPMSSSubAddOnID"==l?G(a.PPMSSSubAddOnIDPK):(_(e.primid?Number(e.primid):a.PPMSSSubAddOnIDPK?a.PPMSSSubAddOnIDPK:0),W({type:"PrimaryId",payload:a.PPMSSSubAddOnIDPK})),p({type:"text",name:"PPMSSSubAddOnCode",value:a.PPMSSSubAddOnCode?a.PPMSSSubAddOnCode:""}),p({type:"text",name:"PPMSSSubStartDateTime",value:a.PPMSSSubStartDateTime?se(a.PPMSSSubStartDateTime):null}),p({type:"text",name:"PPMSSSubEndDateTime",value:a.PPMSSSubEndDateTime?se(a.PPMSSSubEndDateTime):null}),p({type:"number",name:"PPMSSSubTechTotal",number:a.PPMSSSubTechTotal}),p({type:"text",name:"PPMSSSubTechRemarks",value:a.PPMSSSubTechRemarks?a.PPMSSSubTechRemarks:""}),p({type:"boolean",name:"IsPPMSSSubTechManual",boolean:!!a.IsPPMSSSubTechManual&&a.IsPPMSSSubTechManual}),p({type:"text",name:"PPMSSSubLattitude",value:a.PPMSSSubLattitude?a.PPMSSSubLattitude:""}),p({type:"text",name:"PPMSSSubCCMLongitude",value:a.PPMSSSubCCMLongitude?a.PPMSSSubCCMLongitude:""}),p({type:"number",name:"PPMSSSupEmployeeKey",number:a.PPMSSSupEmployeeKey}),p({type:"boolean",name:"IsPPMSSSupChargable",boolean:!!a.IsPPMSSSupChargable&&a.IsPPMSSSupChargable}),p({type:"number",name:"PPMSSCreationWorkOrderID",number:a.PPMSSCreationWorkOrderID?Number(a.PPMSSCreationWorkOrderID):0}),p({type:"text",name:"SSCreWorkOrder",value:a.SSCreWorkOrder}),a.IsActive&&r("1"==a.IsActive)},Me=()=>{_(""),W({type:"PrimaryId",payload:""}),p({type:"text",name:"PPMSSSubAddOnCode",value:""}),p({type:"text",name:"PPMSSSubStartDateTime",value:null}),p({type:"text",name:"PPMSSSubEndDateTime",value:null}),p({type:"number",name:"PPMSSSubTechTotal",number:0}),p({type:"text",name:"PPMSSSubTechRemarks",value:""}),p({type:"boolean",name:"IsPPMSSSubTechManual",boolean:!1}),p({type:"text",name:"PPMSSSubLattitude",value:""}),p({type:"text",name:"PPMSSSubCCMLongitude",value:""}),p({type:"number",name:"PPMSSSupEmployeeKey",number:0}),p({type:"boolean",name:"IsPPMSSSupChargable",boolean:!1}),p({type:"text",name:"PPMSSCreationWorkOrderID",value:null}),p({type:"text",name:"SSCreWorkOrder",value:""}),document.getElementById("PPMSSSupAddOnSSCreWorkOrderClear")&&document.getElementById("PPMSSSupAddOnSSCreWorkOrderClear").click(),r(!0)},be=e=>{R.loading(!0),R.ConfirmAlert(null);const t=c.v.Api+"FP913S2/",l={data:[{p1:"SetDefaultPPMSSSubAddOnID"==e?"NORECORDS"!=V&&V?V:0:Z,p2:Ee(o.PPMSSSubAddOnCode),p3:o.PPMSSSubStartDateTime?me(o.PPMSSSubStartDateTime):null,p4:o.PPMSSSubEndDateTime?me(o.PPMSSSubEndDateTime):null,p5:o.PPMSSSubTechTotal?Number(o.PPMSSSubTechTotal):0,p6:Ee(o.PPMSSSubTechRemarks),p7:o.IsPPMSSSubTechManual,p8:Ee(o.PPMSSSubLattitude),p9:Ee(o.PPMSSSubCCMLongitude),p10:o.PPMSSSupEmployeeKey?Number(o.PPMSSSupEmployeeKey):0,p11:o.IsPPMSSSupChargable,p12:!1,p13:"SetDefaultPPMSSSubAddOnID"==e?"SetDefault":null,p14:o.PPMSSCreationWorkOrderID?o.PPMSSCreationWorkOrderID:0,p15:u,p16:"SetDefaultPPMSSSubAddOnID"==e,p17:localStorage.getItem("userid"),p18:D()().format("YYYY-MM-DD hh:mm:ss"),p19:localStorage.getItem("userid"),p20:D()().format("YYYY-MM-DD hh:mm:ss")}]};(0,M.Z)(0).then((a=>{(0,s.Z)(t,l,a).then((t=>{const l=t.Output[0].status;let a=t.Output[0].Data,n=new Array,S=new Array;"200"===l.code&&(a.map((e=>{e&&(n.push(e.IsAlert),S.push(e.AlertMessage),e.AlertMessage)})),n.some((e=>"1"==e))?(R.alert({open:!0,color:"warning",message:S}),R.loading(!1)):ye(e))}))}))},ye=e=>{j(!0),X(!0),te(!0),ae(!0),Se(!0),ue(!0),R.loading(!0),R.ConfirmAlert(null);const t=c.v.Api+"FP913S1/",l={data:[{p1:"SetDefaultPPMSSSubAddOnID"==e?"NORECORDS"!=V&&V?V:0:Z,p2:Ee(o.PPMSSSubAddOnCode),p3:o.PPMSSSubStartDateTime?me(o.PPMSSSubStartDateTime):null,p4:o.PPMSSSubEndDateTime?me(o.PPMSSSubEndDateTime):null,p5:o.PPMSSSubTechTotal?Number(o.PPMSSSubTechTotal):0,p6:Ee(o.PPMSSSubTechRemarks),p7:o.IsPPMSSSubTechManual,p8:Ee(o.PPMSSSubLattitude),p9:Ee(o.PPMSSSubCCMLongitude),p10:o.PPMSSSupEmployeeKey?Number(o.PPMSSSupEmployeeKey):0,p11:o.IsPPMSSSupChargable,p12:!1,p13:"SetDefaultPPMSSSubAddOnID"==e?"SetDefault":null,p14:o.PPMSSCreationWorkOrderID?o.PPMSSCreationWorkOrderID:0,p15:u,p16:"SetDefaultPPMSSSubAddOnID"==e,p17:localStorage.getItem("userid"),p18:D()().format("YYYY-MM-DD hh:mm:ss"),p19:localStorage.getItem("userid"),p20:D()().format("YYYY-MM-DD hh:mm:ss")}]};(0,M.Z)(0).then((e=>{(0,y.Z)(t,l,e).then((e=>{const t=e[0].status;200==t.code?(R.alert({open:!0,color:"success",message:[t.message]}),R.attachmentSave(e[0].Data.IDPK),R.loading(!1),R.RefreshTable(),K.AccessRights.IsApproval&&R.Approval(!0),Me(),document.getElementById("overlayimgAttPPMSSSupAddOn")&&(document.getElementById("overlayimgAttPPMSSSupAddOn").style.width="0%",document.getElementById("overlayimgAttPPMSSSupAddOn").style.display="none",document.getElementById("divPPMSSSupAddOn-Entry").style.width="100%")):(R.alert({open:!0,color:"warning",message:[t.message]}),R.loading(!1)),Ce(1,null,"SetDefaultPPMSSSubAddOnID",K.token[0])}))}))},Ce=(t,l,a,n,S,d)=>{const u=c.v.Api+"FP913S3/",r={data:{p1:null,p2:null,p3:o.PPMSSSubStartDateTime?o.PPMSSSubStartDateTime:null,p4:null,p5:null,p6:o.PPMSSSubEndDateTime?o.PPMSSSubEndDateTime:null,p7:null,p8:null,p9:null,p10:null,p11:1==o.IsPPMSSSubTechManual,p12:l?"%"+l+"%":null,p13:l?"%"+l+"%":null,p14:l?"%"+l+"%":null,p15:1==o.IsPPMSSSupChargable,p16:null,p17:null,p18:"0"==o.PPMSSCreationWorkOrderID?null:o.PPMSSCreationWorkOrderID,p19:e.Dialogview?"1":null,p20:null,p21:null,p22:null,p23:null,p24:null,p25:null,p26:"0"==o.ContractID?null:o.ContractID,p27:l?"%"+l+"%":null,p28:l?"%"+l+"%":null,p29:"0"==o.LocalityID?null:o.LocalityID,p30:l?"%"+l+"%":null,p31:l?"%"+l+"%":null,p32:"0"==o.BuildingID?null:o.BuildingID,p33:l?"%"+l+"%":null,p34:l?"%"+l+"%":null,p35:"0"==o.FloorID?null:o.FloorID,p36:l?"%"+l+"%":null,p37:l?"%"+l+"%":null,p38:"0"==o.SpotID?null:o.SpotID,p39:l?"%"+l+"%":null,p40:l?"%"+l+"%":null,p41:"0"==o.DivisionID?null:o.DivisionID,p42:l?"%"+l+"%":null,p43:l?"%"+l+"%":null,p44:"0"==o.DisciplineID?null:o.DisciplineID,p45:l?"%"+l+"%":null,p46:l?"%"+l+"%":null,p47:"0"==o.FrequencyID?null:o.FrequencyID,p48:l?"%"+l+"%":null,p49:l?"%"+l+"%":null,p50:"0"==o.PPMBusinessFlowID?null:o.PPMBusinessFlowID,p51:l?"%"+l+"%":null,p52:l?"%"+l+"%":null,p53:l?"%"+l+"%":null,p54:"0"==o.PPMFixonBusinessFlowID?null:o.PPMFixonBusinessFlowID,p55:l?"%"+l+"%":null,p56:l?"%"+l+"%":null,p57:"0"==o.PPMStageID?null:o.PPMStageID,p58:l?"%"+l+"%":null,p59:l?"%"+l+"%":null,p60:l?"%"+l+"%":null,p61:t,p62:10,p63:a,p64:null,p65:null,p66:localStorage.getItem("UserGroupID"),p67:localStorage.getItem("userid")}},P=Object.keys(r.data).slice(0,Object.keys(r.data).length).reduce(((e,t,l)=>(e[t]=l>Object.keys(r.data).length-8?r.data[t]:null,e)),{});g(!0);const i={data:P};return(0,s.Z)(u,"ClearAll"==a?i:r,"SetDefaultPPMSSSubAddOnID"==a&&n?n:K.token[0]).then((e=>{const l=e.Output.status.code,n=e.Output.data;if("200"==l){const e=n.length;if(S)return 1==n.length?n[0]:{};B(1==t?e>0?n:[]:h.concat(n)),"SetDefaultPPMSSSubAddOnID"==a&&(e>0?ce(n[0],"SetDefaultPPMSSSubAddOnID"):G("NORECORDS")),g(!1)}else R.alert({open:!0,color:"warning",message:[e.Output.status.message]}),g(!1)}))},ge=(t,l,a)=>{const n=c.v.Api+"FP913S3/",S={data:{p1:null,p2:"PPMSSSubAddOnCode"==a&&l?"%"+l+"%":null,p3:null,p4:null,p5:null,p6:null,p7:null,p8:null,p9:"PPMSSSubTechTotal"==a&&l?"%"+l+"%":null,p10:null,p11:null,p12:null,p13:null,p14:null,p15:null,p16:null,p17:null,p18:null,p19:e.Dialogview?"1":null,p20:null,p21:null,p22:null,p23:null,p24:null,p25:null,p26:null,p27:null,p28:null,p29:null,p30:null,p31:null,p32:null,p33:null,p34:null,p35:null,p36:null,p37:null,p38:null,p39:null,p40:null,p41:null,p42:null,p43:null,p44:null,p45:null,p46:null,p47:null,p48:null,p49:null,p50:null,p51:null,p52:null,p53:null,p54:null,p55:null,p56:null,p57:null,p58:null,p59:null,p60:null,p61:t,p62:10,p63:"PPMSSSubAddOnID",p64:null,p65:null,p66:localStorage.getItem("UserGroupID"),p67:localStorage.getItem("userid")}},d={data:Object.keys(S.data).slice(0,Object.keys(S.data).length).reduce(((e,t,l)=>(e[t]=l>Object.keys(S.data).length-8?S.data[t]:null,e)),{})};g(!0),(0,s.Z)(n,"ClearAll"==a?d:S,K.token[0]).then((e=>{const l=e.Output.status.code,n=e.Output.data;if("200"==l){const e=n.length;1==t?("PPMSSSubAddOnCode"==a&&j(e>0),"PPMSSSubTechTotal"==a&&X(e>0),"PPMSSSubTechRemarks"==a&&te(e>0),"PPMSSSubLattitude"==a&&ae(e>0),"PPMSSSubCCMLongitude"==a&&Se(e>0),"PPMSSSupEmployeeKey"==a&&ue(e>0),B(n)):("PPMSSSubAddOnCode"==a&&j(!0),"PPMSSSubTechTotal"==a&&X(!0),"PPMSSSubTechRemarks"==a&&te(!0),"PPMSSSubLattitude"==a&&ae(!0),"PPMSSSubCCMLongitude"==a&&Se(!0),"PPMSSSupEmployeeKey"==a&&ue(!0),B(h.concat(n))),g(!1)}else R.alert({open:!0,color:"warning",message:[e.Output.status.message]}),g(!1)}))},De=(0,a.useCallback)((async(e,t,l)=>{"text"==l?p({type:l,name:t,value:e}):"number"==l?p({type:l,name:t,number:Number(e)}):"boolean"==l?p({type:l,name:t,boolean:e}):"date"==l?p({type:"text",name:t,value:e}):"select"==l&&"PPMSSCreationWorkOrderID"==t&&(p({type:"text",name:"PPMSSCreationWorkOrderID",value:e.PPMSSCreationWorkOrderIDPK?e.PPMSSCreationWorkOrderIDPK:null}),p({type:"text",name:"SSCreWorkOrder",value:e.SSCreWorkOrder?e.SSCreWorkOrder:null}))}),[o]),Ie=e=>{R.ConfirmAlert(n().createElement(f(),{Size:"sm",style:{display:"block",marginTop:"100px"},tilte:"",onConfirm:()=>function(e){R.ConfirmAlert(null),p({type:"text",name:"PPMSSSubAddOnCode",value:e.PPMSSSubAddOnCode?e.PPMSSSubAddOnCode:""}),p({type:"text",name:"PPMSSSubStartDateTime",value:e.PPMSSSubStartDateTime?se(e.PPMSSSubStartDateTime):null}),p({type:"text",name:"PPMSSSubEndDateTime",value:e.PPMSSSubEndDateTime?se(e.PPMSSSubEndDateTime):null}),p({type:"text",name:"PPMSSSubTechTotal",value:e.PPMSSSubTechTotal?e.PPMSSSubTechTotal:""}),p({type:"text",name:"PPMSSSubTechRemarks",value:e.PPMSSSubTechRemarks?e.PPMSSSubTechRemarks:""}),p({type:"boolean",name:"IsPPMSSSubTechManual",boolean:!!e.IsPPMSSSubTechManual&&e.IsPPMSSSubTechManual}),p({type:"text",name:"PPMSSSubLattitude",value:e.PPMSSSubLattitude?e.PPMSSSubLattitude:""}),p({type:"text",name:"PPMSSSubCCMLongitude",value:e.PPMSSSubCCMLongitude?e.PPMSSSubCCMLongitude:""}),p({type:"text",name:"PPMSSSupEmployeeKey",value:e.PPMSSSupEmployeeKey?e.PPMSSSupEmployeeKey:""}),p({type:"boolean",name:"IsPPMSSSupChargable",boolean:!!e.IsPPMSSSupChargable&&e.IsPPMSSSupChargable}),p({type:"number",name:"PPMSSCreationWorkOrderID",number:e.PPMSSCreationWorkOrderID?Number(e.PPMSSCreationWorkOrderID):0}),p({type:"text",name:"SSCreWorkOrder",value:e.SSCreWorkOrder?e.SSCreWorkOrder:""})}(e),onCancel:()=>R.ConfirmAlert(null),confirmBtnCssClass:"swalokbtn",cancelBtnCssClass:"swalcancelbtn",confirmBtnText:oe("Yes"),cancelBtnText:oe("No"),showCancel:!0},oe("Do you want to update this record?")))},Ee=e=>"string"==typeof e?e.trim():e;return n().createElement("div",null,n().createElement("div",{className:"displayFlex backgroundLightLev1 borderRadiusTop width100"},n().createElement("div",{className:"displayFlex EntryHeader"},n().createElement("p",{className:"ListP",title:"10.0.0.59-3:08:17 PM-18-7[913]"},oe("Add"),pe(913))),n().createElement("div",{className:"displayFlex EntryHeaderBtn"},K.AccessRights.IsDelete&&n().createElement("div",{className:"GridAlign"},n().createElement("div",{className:"Entry-Checkbox",style:{minWidth:"70px"}},n().createElement(k.FormGroup,{row:!0},n().createElement(b.Z,{labelPlacement:"bottom",id:"fld913L0ECEntryCheckbox",control:n().createElement(x.Z,{checked:"1"==u,onChange:e=>r(e.target.checked)}),label:oe(1==u?"Active":"In Active")})))),Z||!K.AccessRights.IsAdd||!V&&"NORECORDS"!=V?!Z&&n().createElement(A.ZP,{placement:"top",title:"Get Default"},n().createElement("div",{className:"GridAlignDefault",onClick:()=>{Ce(1,null,"SetDefaultPPMSSSubAddOnID",K.token[0])},id:"fld913L0ECGetDefault"},n().createElement("div",{className:"Entry-Checkbox"},n().createElement(w.j39,{className:"Iconstyles"})),n().createElement("div",{className:"GridLabel"},n().createElement("p",null,oe("GetDefault"))))):n().createElement(A.ZP,{placement:"top",title:"Set Default"},n().createElement("div",{className:"GridAlignDefault",onClick:()=>{ye("SetDefaultPPMSSSubAddOnID")},id:"fld913L0ECSetDefault"},n().createElement("div",{className:"Entry-Checkbox"},n().createElement(w.j39,{className:"Iconstyles"})),n().createElement("div",{className:"GridLabel"},n().createElement("p",null,oe("SetDefault"))))),n().createElement(A.ZP,{placement:"top",title:"Attach"},n().createElement("div",{className:"GridAlign",onClick:()=>{R.AttachExpand(!0)},id:"fld913L0ECIconButton"},n().createElement("div",{className:"Entry-Checkbox"},n().createElement("div",{disableRipple:!0,disabled:!1},n().createElement(L.Ypb,{className:"Iconstyles"}))),n().createElement("div",{className:"GridLabel"},n().createElement("p",null,oe("Attach"))))),!K.PrimaryId&&n().createElement("div",{className:"GridAlign",disabled:!1,onClick:()=>{Me()},id:"fld913L0ECClearBtn"},n().createElement("div",{className:"Entry-Checkbox"},n().createElement(L.pYJ,{className:"Iconstyles"})),n().createElement("div",{className:"GridLabel"},n().createElement("p",null,oe("Reset")))),K.AccessRights.IsAdd&&n().createElement(E.Z,{name:K.PrimaryId?"Update":"Save",disabled:!1,onClick:()=>{Ee(o.PPMSSSubAddOnCode)?o.PPMSSCreationWorkOrderID&&0!=o.PPMSSCreationWorkOrderID?R.ConfirmAlert(n().createElement(f(),{warning:!0,Size:"sm",style:{display:"block",marginTop:"100px"},title:oe("Are you sure?"),onConfirm:()=>be(),onCancel:()=>R.ConfirmAlert(null),confirmBtnCssClass:"swalokbtn",cancelBtnCssClass:"swalcancelbtn",confirmBtnText:oe("Yes"),cancelBtnText:oe("Cancel"),showCancel:!0},K.PrimarId?oe("Do you want to Update?"):oe("Do you want to Save?"))):R.alert({open:!0,color:"warning",message:[oe("Please select the ")+" "+pe("PPMSSCreationWorkOrderID")]}):R.alert({open:!0,color:"warning",message:[oe("Please enter the")+""+pe("PPMSSSubAddOnCode")]})}}),K.editData.length>0&&n().createElement(d.Z,{disabled:!1,onClick:()=>{Me(),R.RefreshTable(!1)}}))),n().createElement("div",{id:"PPMSSSupAddOn-Main",className:"width100 displayFlex componentMainDiv cardDiv"},n().createElement("div",{id:"PPMSSSupAddOn-Detail",className:"detailCard detailDiv"},n().createElement("div",{id:"PPMSSSupAddOn-MainBody",className:"padding paddingLeft"},n().createElement("div",null,n().createElement(P.Z,{spacing:2},n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3},n().createElement(I.Z,{"data-testid":o.PPMSSSubAddOnCode,json:T,SPName:"PPMSSSupAddOn",FieldName:"PPMSSSubAddOnCode",tfLabel:pe("PPMSSSubAddOnCode"),EnterSave:t=>{t&&e.submitConfirmation(t)},onSelect:t=>!e.createEasy&&Ie(t),onClick:()=>{Y&&ge(1,"","ClearAll"),j(!0)},frmctrlid:"fld913_22786",frmctrlidName:"PPMSSSubAddOnCode",fieldorder:"1",data:h,foreign:!1,foreignFld:[],foreignClick:()=>{},totalCount:h.length>0?h[0].TotalCount:0,onChange:(e,t)=>{Y&&ge(e,t,"PPMSSSubAddOnCode"),De(t,"PPMSSSubAddOnCode","text")},onKeyDown:e=>{"8"!=e.keyCode&&"46"!=e.keyCode||j(!0)},showList:Y,SideEntryView:!1,KeyBack:e=>{},value:o.PPMSSSubAddOnCode,loading:m,clear:e=>{e&&(p({type:"text",name:"PPMSSSubAddOnCode",value:""}),j(!0))}})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3,className:"flexEnd"},n().createElement(C.Z,{"data-testid":o.PPMSSSubStartDateTime,value:o.PPMSSSubStartDateTime,skipMin:!0,onErr:e=>{z(e)},onChange:e=>{De(e,"PPMSSSubStartDateTime","date")},label:pe("PPMSSSubStartDateTime"),frmctrlid:"fld913_22787",frmctrlidName:"PPMSSSubStartDateTime",fieldorder:"2"})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3,className:"flexEnd"},n().createElement(C.Z,{"data-testid":o.PPMSSSubEndDateTime,value:o.PPMSSSubEndDateTime,skipMin:!0,onErr:e=>{$(e)},onChange:e=>{De(e,"PPMSSSubEndDateTime","date")},label:pe("PPMSSSubEndDateTime"),frmctrlid:"fld913_22788",frmctrlidName:"PPMSSSubEndDateTime",fieldorder:"3"})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3},n().createElement(I.Z,{"data-testid":o.PPMSSSubTechTotal,json:T,SPName:"PPMSSSupAddOn",FieldName:"PPMSSSubTechTotal",tfLabel:pe("PPMSSSubTechTotal"),EnterSave:t=>{t&&e.submitConfirmation(t)},onSelect:t=>!e.createEasy&&Ie(t),onClick:()=>{Q&&ge(1,"","ClearAll"),X(!0)},frmctrlid:"fld913_22789",frmctrlidName:"PPMSSSubTechTotal",fieldorder:"4",data:h,foreign:!1,foreignFld:[],foreignClick:()=>{},totalCount:h.length>0?h[0].TotalCount:0,onChange:(e,t)=>{Q&&ge(e,t,"PPMSSSubTechTotal"),De(t,"PPMSSSubTechTotal","text")},onKeyDown:e=>{"8"!=e.keyCode&&"46"!=e.keyCode||X(!0)},showList:Q,SideEntryView:!1,KeyBack:e=>{},value:o.PPMSSSubTechTotal,loading:m,clear:e=>{e&&(p({type:"text",name:"PPMSSSubTechTotal",value:""}),X(!0))}})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3},n().createElement(I.Z,{"data-testid":o.PPMSSSubTechRemarks,json:T,SPName:"PPMSSSupAddOn",FieldName:"PPMSSSubTechRemarks",tfLabel:pe("PPMSSSubTechRemarks"),EnterSave:t=>{t&&e.submitConfirmation(t)},onSelect:t=>!e.createEasy&&Ie(t),onClick:()=>{ee&&ge(1,"","ClearAll"),te(!0)},frmctrlid:"fld913_22790",frmctrlidName:"PPMSSSubTechRemarks",fieldorder:"1",data:h,foreign:!1,foreignFld:[],foreignClick:()=>{},totalCount:h.length>0?h[0].TotalCount:0,onChange:(e,t)=>{ee&&ge(e,t,"PPMSSSubTechRemarks"),De(t,"PPMSSSubTechRemarks","text")},onKeyDown:e=>{"8"!=e.keyCode&&"46"!=e.keyCode||te(!0)},showList:ee,SideEntryView:!1,KeyBack:e=>{},value:o.PPMSSSubTechRemarks,loading:m,clear:e=>{e&&(p({type:"text",name:"PPMSSSubTechRemarks",value:""}),te(!0))}})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3,className:"flexEnd"},n().createElement("div",{className:"EntryView-Checkbox"},n().createElement(b.Z,{style:{color:"#337ab7"},"data-testid":o.IsPPMSSSubTechManual,labelPlacement:"end",control:n().createElement(x.Z,{checked:"1"==o.IsPPMSSSubTechManual,onChange:e=>{De(e.target.checked,"IsPPMSSSubTechManual","boolean")},frmctrlid:"fld913_22791",frmctrlidname:"IsPPMSSSubTechManual",fieldorder:"2",tfLabel:pe("IsPPMSSSubTechManual")}),label:n().createElement("p",{className:"ToggleSwitchLabel",style:{color:o.IsPPMSSSubTechManual?"#21446F":"#999"}},pe("IsPPMSSSubTechManual"))}))),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3},n().createElement(I.Z,{"data-testid":o.PPMSSSubLattitude,json:T,SPName:"PPMSSSupAddOn",FieldName:"PPMSSSubLattitude",tfLabel:pe("PPMSSSubLattitude"),EnterSave:t=>{t&&e.submitConfirmation(t)},onSelect:t=>!e.createEasy&&Ie(t),onClick:()=>{le&&ge(1,"","ClearAll"),ae(!0)},frmctrlid:"fld913_22792",frmctrlidName:"PPMSSSubLattitude",fieldorder:"3",data:h,foreign:!1,foreignFld:[],foreignClick:()=>{},totalCount:h.length>0?h[0].TotalCount:0,onChange:(e,t)=>{le&&ge(e,t,"PPMSSSubLattitude"),De(t,"PPMSSSubLattitude","text")},onKeyDown:e=>{"8"!=e.keyCode&&"46"!=e.keyCode||ae(!0)},showList:le,SideEntryView:!1,KeyBack:e=>{},value:o.PPMSSSubLattitude,loading:m,clear:e=>{e&&(p({type:"text",name:"PPMSSSubLattitude",value:""}),ae(!0))}})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3},n().createElement(I.Z,{"data-testid":o.PPMSSSubCCMLongitude,json:T,SPName:"PPMSSSupAddOn",FieldName:"PPMSSSubCCMLongitude",tfLabel:pe("PPMSSSubCCMLongitude"),EnterSave:t=>{t&&e.submitConfirmation(t)},onSelect:t=>!e.createEasy&&Ie(t),onClick:()=>{ne&&ge(1,"","ClearAll"),Se(!0)},frmctrlid:"fld913_22793",frmctrlidName:"PPMSSSubCCMLongitude",fieldorder:"4",data:h,foreign:!1,foreignFld:[],foreignClick:()=>{},totalCount:h.length>0?h[0].TotalCount:0,onChange:(e,t)=>{ne&&ge(e,t,"PPMSSSubCCMLongitude"),De(t,"PPMSSSubCCMLongitude","text")},onKeyDown:e=>{"8"!=e.keyCode&&"46"!=e.keyCode||Se(!0)},showList:ne,SideEntryView:!1,KeyBack:e=>{},value:o.PPMSSSubCCMLongitude,loading:m,clear:e=>{e&&(p({type:"text",name:"PPMSSSubCCMLongitude",value:""}),Se(!0))}})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3},n().createElement(I.Z,{"data-testid":o.PPMSSSupEmployeeKey,json:T,SPName:"PPMSSSupAddOn",FieldName:"PPMSSSupEmployeeKey",tfLabel:pe("PPMSSSupEmployeeKey"),EnterSave:t=>{t&&e.submitConfirmation(t)},onSelect:t=>!e.createEasy&&Ie(t),onClick:()=>{de&&ge(1,"","ClearAll"),ue(!0)},frmctrlid:"fld913_22794",frmctrlidName:"PPMSSSupEmployeeKey",fieldorder:"1",data:h,foreign:!1,foreignFld:[],foreignClick:()=>{},totalCount:h.length>0?h[0].TotalCount:0,onChange:(e,t)=>{de&&ge(e,t,"PPMSSSupEmployeeKey"),De(t,"PPMSSSupEmployeeKey","text")},onKeyDown:e=>{"8"!=e.keyCode&&"46"!=e.keyCode||ue(!0)},showList:de,SideEntryView:!1,KeyBack:e=>{},value:o.PPMSSSupEmployeeKey,loading:m,clear:e=>{e&&(p({type:"text",name:"PPMSSSupEmployeeKey",value:""}),ue(!0))}})),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3,className:"flexEnd"},n().createElement("div",{className:"EntryView-Checkbox"},n().createElement(b.Z,{style:{color:"#337ab7"},"data-testid":o.IsPPMSSSupChargable,labelPlacement:"end",control:n().createElement(x.Z,{checked:"1"==o.IsPPMSSSupChargable,onChange:e=>{De(e.target.checked,"IsPPMSSSupChargable","boolean")},frmctrlid:"fld913_22795",frmctrlidname:"IsPPMSSSupChargable",fieldorder:"2",tfLabel:pe("IsPPMSSSupChargable")}),label:n().createElement("p",{className:"ToggleSwitchLabel",style:{color:o.IsPPMSSSupChargable?"#21446F":"#999"}},pe("IsPPMSSSupChargable"))}))),n().createElement(i.Z,{xs:3,md:3,lg:3,sm:3},n().createElement(I.Z,{json:T,id:o.PPMSSCreationWorkOrderID,"data-testid":o.PPMSSCreationWorkOrderID,value:o.SSCreWorkOrder,SPName:"PPMSSSupAddOn",FieldName:"PPMSSCreationWorkOrderID",tfLabel:pe("PPMSSCreationWorkOrderID"),EnterSave:t=>{t&&e.submitConfirmation(t)},SideEntryView:!1,onSelect:e=>De(e,"PPMSSCreationWorkOrderID","select"),onChange:(e,t)=>{Ce(e,t,"PPMSSCreationWorkOrderIDPK")},KeyBack:e=>{!function(e){if(!o.PPMSSCreationWorkOrderID)return!1;p({type:"text",name:"PPMSSCreationWorkOrderID",value:null})}()},fieldorder:"3",data:h,foreign:!1,foreignFld:[],foreignClick:()=>{},totalCount:h.length>0?h[0].TotalCount:0,openSlide:()=>{},Tabledialog:()=>{},loading:m,clear:e=>{e&&function(e){if(!o.PPMSSCreationWorkOrderID)return!1;p({type:"text",name:"PPMSSCreationWorkOrderID",value:null}),p({type:"text",name:"SSCreWorkOrder",value:""}),document.getElementById("PPMSSSupAddOnSSCreWorkOrderClear")&&document.getElementById("PPMSSSupAddOnSSCreWorkOrderClear").click()}()}}))))))))}));l(77366),l(97829);var R=l(65197);const K=(0,a.forwardRef)(((e,t)=>{const l=(0,a.useRef)(),[d,P]=((0,S.useSelector)((e=>e.form)),(0,a.useState)([])),[i,b]=(0,a.useState)(!0),[y,C]=(0,a.useState)(e.showDetail),[g,D]=(0,a.useState)(""),[I,E]=n().useState(!1),[h,f]=n().useState(""),[A,O]=n().useState(!1),v=(0,a.useContext)(H),{cstate:T,cdispatch:k}=q(),[x,w]=(0,a.useState)(!1),[L,F]=(0,a.useState)(""),[K,W]=(0,a.useState)(""),[Z,_]=(0,a.useState)("");let V=(0,N.Z)();(0,a.useEffect)((()=>{P(T.editData)}),[T.editData]),(0,a.useImperativeHandle)(t,(()=>({tableClick:e=>{b(e),E(null)},viewtoggle:()=>{E(!1)},viewlistProps:(t,l)=>{!function(t,l=!1){let a=c.v.Api+"FP913S3/",n={data:{p1:t,p2:null,p3:null,p4:null,p5:null,p6:null,p7:null,p8:null,p9:null,p10:null,p11:null,p12:null,p13:null,p14:null,p15:null,p16:null,p17:null,p18:null,p19:e.Dialogview?"1":null,p20:null,p21:null,p22:null,p23:null,p24:null,p25:null,p26:null,p27:null,p28:null,p29:null,p30:null,p31:null,p32:null,p33:null,p34:null,p35:null,p36:null,p37:null,p38:null,p39:null,p40:null,p41:null,p42:null,p43:null,p44:null,p45:null,p46:null,p47:null,p48:null,p49:null,p50:null,p51:null,p52:null,p53:null,p54:null,p55:null,p56:null,p57:null,p58:null,p59:null,p60:null,p61:1,p62:10,p63:T.IsDraft?"DraftPPMSSSubAddOnID":"PPMSSSubAddOnID",p64:null,p65:null,p66:localStorage.getItem("UserGroupID"),p67:localStorage.getItem("userid")}};(0,M.Z)(0).then((e=>{(0,s.Z)(a,n,e).then((e=>{v.loading(!1),"200"==e.Output.status.code&&P(e.Output.data)}))}))}(t,l)},clear:()=>{"panel0"===I&&l.current.clear()}})));const G=e=>V?.[e]?V?.[e]:e,Y=e=>T.language?.[e]?T.language[e]:e;function j(e,t){}return n().createElement("div",null,n().createElement(o.Z,{expanded:i,onChange:()=>()=>{e.expandTable&&b(!i)}},!I&&n().createElement(m.Z,null,n().createElement("div",{className:"padding2 displayFlex backgroundLight borderRadiusTop width100"},i?n().createElement("div",{className:"displayFlex EntryViewHeader"}):n().createElement("div",{className:"displayFlex EntryHeaderBtn"},T.AccessRights.IsEdit?n().createElement(r.Z,{frmctrlid:"fld913L0VCEditBtn",onClick:()=>{v.edit()},disabled:!1}):"",0==T.editData.length&&T.AccessRights.IsAdd?n().createElement(u.Z,{className:"L1AddBtnCommon",frmctrlid:"fld913L0VCAddBtn",onClick:()=>{k({type:"Add",payload:!0})},disabled:!1}):""))),n().createElement(p.Z,{style:{display:"block"}},d.map(((e,t)=>n().createElement("div",{key:t},I==="panel"+t?n().createElement(B,{ref:l}):n().createElement(n().Fragment,null,n().createElement(R.Z,{tableName:"PPMSSSupAddOn",tableID:913,parentID:e.PPMSSSubAddOnIDPK,fldid:"fld913L0VCContainer",OpenSlideComponent:j,index:t,val:e,tf:Y,t:G,title:"10.0.0.59-3:08:17 PM-18-7[913]"}))))))))}));var W=l(67698),Z=l(55995),_=l(45965),V=l(10794),G=l(9175),Y=l.n(G),j=l(71168),U=l.n(j);const H=(0,a.createContext)(),q=()=>{const e=(0,a.useContext)(H);if(void 0===e)throw new Error("ContextApi must be used within  PPMSSSupAddOnContext Provider");return e},z=function(e){const t=(0,a.useRef)(),l=(0,a.useRef)(),d=(0,a.useRef)(),u=(0,a.useRef)(),r=((0,S.useSelector)((e=>e.form)),(0,S.useDispatch)()),[P,i]=(0,a.useState)(!0),[o,p]=(0,a.useState)(!1),[m,b]=(0,a.useState)(0),[y,C]=(0,a.useState)(!1),[g,D]=(0,a.useState)(),[I,E]=(0,a.useReducer)(V.p,V.E),[h,f]=(0,a.useState)([]),[A,O]=(0,a.useState)(!1),[v,T]=U()("913");(0,a.useEffect)((()=>{document.getElementById("divPPMSSSupAddOn-Entry").style.width="100%",document.getElementById("PPMSSSupAddOn-MainEntry").style.width="auto",document.getElementById("PPMSSSupAddOn-MainEntry").style.height="80vh",document.getElementById("PPMSSSupAddOn-MainDiv").classList.remove("displayFlex"),document.getElementById("PPMSSSupAddOn-MainDiv").classList.add("displayGrid")}),[]),(0,a.useEffect)((()=>{p(!0),document.getElementById("divPPMSSSupAddOn-Entry").style.width="100%",document.getElementById("PPMSSSupAddOn-MainEntry").style.width="auto",document.getElementById("PPMSSSupAddOn-MainDiv").classList.remove("displayFlex"),document.getElementById("PPMSSSupAddOn-MainDiv").classList.add("displayGrid")}),[]),(0,a.useEffect)((()=>{!function(e){let t=[],l=[],a=[],n=[];e.map((e=>{"1"==e.IsVisible&&(t.push({id:e.FieldDisplay,name:e.FieldDescription,type:e.FieldDataType}),"IsDraft"!==!e.FieldName&&(l.push(e.FieldDisplay),a.push(e.FieldDescription)));let S=localStorage.getItem("Language");n.push({[e.FieldName]:e[{English:"FieldDescription",Arabic:"ArabicLang",Other:"OtherLang"}[S]]})})),E({type:"language",payload:Object.assign({},...n)})}(v)}),[v]);const k=e=>{document.getElementById("divPPMSSSupAddOn-Entry").style.width="100%",document.getElementById("PPMSSSupAddOnEntryTable").style.width="100%",document.getElementById("PPMSSSupAddOn-MainEntry").style.width="auto",document.getElementById("PPMSSSupAddOn-MainEntry").style.display="block",document.getElementById("PPMSSSupAddOn-MainEntry").style.height="80vh",document.getElementById("PPMSSSupAddOn-MainDiv").classList.add("displayFlex"),document.getElementById("PPMSSSupAddOn-MainDiv").classList.remove("displayGrid"),document.getElementById("overlayimgAttPPMSSSupAddOn").style.width="0%",document.getElementById("overlayimgAttPPMSSSupAddOn").style.display="none"};(0,a.useEffect)((()=>{r((e=>{(0,M.Z)(1).then((e=>{var t=new Array;t.push(e),E({type:"token",payload:t}),w(e),b(t.length),x(e)}))}))}),[]);const x=e=>{(0,_.Z)(e,913).then((e=>E({type:"AccessRights",payload:e})))},w=t=>{i(!0);let l=c.v.Api+"FP913S3/",a={data:{p1:null,p2:null,p3:null,p4:null,p5:null,p6:null,p7:null,p8:null,p9:null,p10:null,p11:null,p12:null,p13:null,p14:null,p15:null,p16:null,p17:null,p18:null,p19:e.Dialogview?"1":null,p20:null,p21:null,p22:null,p23:null,p24:null,p25:null,p26:null,p27:null,p28:null,p29:null,p30:null,p31:null,p32:null,p33:null,p34:null,p35:null,p36:null,p37:null,p38:null,p39:null,p40:null,p41:null,p42:null,p43:null,p44:null,p45:null,p46:null,p47:null,p48:null,p49:null,p50:null,p51:null,p52:null,p53:null,p54:null,p55:null,p56:null,p57:null,p58:null,p59:null,p60:null,p61:1,p62:10,p63:"PPMSSSubAddOnID",p64:null,p65:null,p66:null,p67:null}};(0,s.Z)(l,a,t).then((e=>{i(!1),"200"==e.Output.status.code&&(e.Output.data.length>0?e.Output.data&&E({type:"editData",payload:e.Output.data}):E({type:"editData",payload:[]}))}))};return n().createElement("div",null,n().createElement(H.Provider,{value:{cstate:I,cdispatch:E,ContextApi:q,loading:t=>e.loading(t),alert:t=>e.alertmsg(t),ConfirmAlert:t=>e.ConfirmAlert(t),SlideComponentType:t=>e.SlideComponentType(t),openNav:t=>e.openNav(t),AttachExpand:e=>(d.current.AttachmentData(I.PrimaryId),void(o&&(document.getElementById("overlayimgAttPPMSSSupAddOn").style.width="25%",document.getElementById("divPPMSSSupAddOn-Entry").style.width="100%",document.getElementById("PPMSSSupAddOn-MainEntry").style.width="auto",document.getElementById("PPMSSSupAddOn-MainDiv").classList.remove("displayFlex"),document.getElementById("PPMSSSupAddOn-MainDiv").classList.add("displayGrid"),document.getElementById("overlayimgAttPPMSSSupAddOn").style.display="block",document.getElementById("PPMSSSupAddOnEntryTable").style.width="100%"))),RefreshTable:()=>{w(I.token[0]),C(!1)},edit:()=>C(!0),attachmentSave:e=>{u.current.tempsave(e,h),f([])}}},n().createElement("div",{id:"PPMSSSupAddOn-MainDiv",className:"MainDivStyles displayFlex"},n().createElement("div",{id:"PPMSSSupAddOn-MainEntry",className:"Maincontent"},0==I.editData.length?n().createElement("div",{style:{display:"flex"}},n().createElement("div",{id:"PPMSSSupAddOnEntryTable",style:{width:"100%"}},n().createElement("div",{className:"displayFlex width100"},n().createElement("div",{id:"divPPMSSSupAddOn-Entry",style:{width:"100%"}},n().createElement(B,{ref:t,parentId:e.parentId}))),n().createElement(Z.Z,{ref:u,fileId:"LogoImgPPMSSSupAddOn",menurefID:913,imgloading:e=>D(e),valueIDPK:I.PrimaryId,AttachmentVal:e=>d.current.AttachmentData(e),previd:"overlayPreviewPPMSSSupAddOn",tempImg:e=>{d.current.tempImg(e),f(e)},clearTempData:I.Add})),n().createElement(W.Z,{ImgAttachment:e=>k(),menurefID:913,fileId:"AttImgPPMSSSupAddOn",imgid:"overlayimgAttPPMSSSupAddOn",valueIDPK:I.PrimaryId,PriviewData:(e,t,l,a)=>{u.current.PriviewItem(e,t,l,a)},ref:d,previd:"overlayPreviewPPMSSSupAddOn",ConfirmAlert:t=>{e.ConfirmAlert(t)},imgloading:g,timglist:e=>u.current.timglist(e)})):n().createElement("div",null,y?n().createElement("div",{style:{display:"flex"}},n().createElement("div",{id:"PPMSSSupAddOnEntryTable",style:{width:"100%"}},n().createElement("div",{className:"displayFlex width100"},n().createElement("div",{id:"divPPMSSSupAddOn-Entry",style:{width:"100%"}},n().createElement(B,{ref:t,parentId:e.parentId}))),n().createElement(Z.Z,{ref:u,fileId:"LogoImgPPMSSSupAddOn",menurefID:913,imgloading:e=>D(e),valueIDPK:I.PrimaryId,AttachmentVal:e=>d.current.AttachmentData(e),previd:"overlayPreviewPPMSSSupAddOn",tempImg:e=>{d.current.tempImg(e),f(e)},clearTempData:I.Add})),n().createElement(W.Z,{ImgAttachment:e=>k(),menurefID:913,fileId:"AttImgPPMSSSupAddOn",imgid:"overlayimgAttPPMSSSupAddOn",valueIDPK:I.PrimaryId,PriviewData:(e,t)=>{u.current.PriviewItem(e,t)},ref:d,previd:"overlayPreviewPPMSSSupAddOn",ConfirmAlert:t=>{e.ConfirmAlert(t)},imgloading:g,clearTempData:I.Add})):n().createElement("div",{id:"divPPMSSSupAddOn-Entry"},0!==m?n().createElement(K,{ref:l,parentId:e.parentId}):null)))),!e.inboxdata&&A&&n().createElement(Y(),{openDialog:A,closeDialog:e=>O(e),formID:913,PrimID:e.parentId,alert:(e,t,l)=>{},loading:t=>{e.loading(t)}})))}}}]);