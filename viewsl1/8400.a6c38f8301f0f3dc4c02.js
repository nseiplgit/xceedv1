"use strict";(self.webpackChunk_shared_routing_viewsl1=self.webpackChunk_shared_routing_viewsl1||[]).push([[8400],{93657:(e,t,a)=>{var l=a(95318),n=a(20862);t.Z=void 0;var m=n(a(92950)),c=(0,l(a(2108)).default)(m.createElement("path",{d:"M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt");t.Z=c},53375:(e,t,a)=>{var l=a(95318),n=a(20862);t.Z=void 0;var m=n(a(92950)),c=(0,l(a(2108)).default)(m.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.Z=c},48400:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x}),a(95866),a(99058);var l=a(92950),n=a.n(l),m=a(45237),c=a(80366),i=a(51673),r=a(282),s=a(868),o=a(78513),d=a(14439),u=a(27848),p=(a(15940),a(40900)),N=a(64059),S=a(24038),E=a(53375),g=a(93657),I=a(61956),f=a(52663),v=a(66083),D=a(29525),h=a(66856),C=a(39803),P=a(22318),y=a(17812),M=a(99940),A=a(17149),F=a(62810),z=a(30553),k=a(8981),_=a(47035),Z=a(47516),T=a(86893);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},L.apply(this,arguments)}const b=e=>{const{children:t,classes:a,onClose:l,...m}=e;return n().createElement(v.Z,L({disableTypography:!0,style:{padding:0}},m),n().createElement(P.Z,{variant:"h6",style:{marginTop:"0.5rem"}},t),l?n().createElement(y.Z,{"aria-label":"close",className:"calenderdialogrootclose",id:"fld1251L1TFCfiltercalenderclose",onClick:l},n().createElement(c.Z,null)):null)};function x(e){const t=(0,m.useSelector)((e=>e.form)),[a]=((0,m.useDispatch)(),(0,l.useState)(localStorage.getItem("userid"))),[v,P]=(0,l.useState)(!1),[y,L]=(0,l.useState)({name:"",type:""}),[x,q]=(0,l.useState)(""),[B,w]=(0,l.useState)([]),[R,H]=(0,l.useState)(1),[O,Q]=(0,l.useState)(0),[W,K]=(0,l.useState)(0),[V,U]=(0,l.useState)({from:"",to:"",type:"",dtype:"",fname:""}),[j,G]=(0,l.useState)({}),[$,Y]=(0,l.useState)(0),[J,X]=(0,l.useState)(""),[ee]=(0,l.useState)("1251"),[te,ae]=(0,l.useState)(!1),[le,ne]=(0,l.useState)(!1),[me,ce]=(0,l.useState)(!1),[ie,re]=(0,l.useState)(!1),[se,oe]=(0,l.useState)([]),[de,ue]=(0,l.useState)([]),[pe,Ne]=(0,l.useState)([]),[Se,Ee]=(0,l.useState)([]),[ge,Ie]=(0,l.useState)([]),[fe,ve]=(0,l.useState)([]),[De,he]=(0,l.useState)([]),[Ce,Pe]=(0,l.useState)([]),[ye,Me]=(0,l.useState)([]),[Ae,Fe]=(0,l.useState)([]),[ze,ke]=(0,l.useState)([]),[_e,Ze]=(0,l.useState)([]),[Te,Le]=(0,l.useState)([]),[be,xe]=(0,l.useState)([]),[qe,Be]=(0,l.useState)([]),[we,Re]=(0,l.useState)([]),[He,Oe]=(0,l.useState)([]),[Qe,We]=(0,l.useState)([]),[Ke,Ve]=(0,l.useState)([]),[Ue,je]=(0,l.useState)([]),[Ge,$e]=(0,l.useState)([]),[Ye,Je]=(0,l.useState)([]),[Xe,et]=(0,l.useState)([]),[tt,at]=(0,l.useState)([]),[lt,nt]=(0,l.useState)([]),[mt,ct]=(0,l.useState)([]),[it,rt]=(0,l.useState)([]),[st,ot]=(0,l.useState)([]),[dt,ut]=(0,l.useState)([]),[pt,Nt]=(0,l.useState)([]),[St,Et]=(0,l.useState)([]),[gt,It]=(0,l.useState)(!0);let ft=(0,k.Z)(),vt=(0,_.ZP)();(0,l.useEffect)((()=>{H(1),e.Report&&Mt({},e.Report)}),[e.Report]);const Dt=e=>ft[e],ht=e=>vt[e];function Ct(e,t){if(H(1),"P M S Accomodation Name"===y.name){let e=de.filter((e=>e!==de[t])),a=pe.filter((e=>e!==pe[t]));ue(e),Ne(a),0==e.length&&Ft("FilterPMSAccomodationID","P M S Accomodation Name","",1)}else if("P M S Category Name"===y.name){let e=Se.filter((e=>e!==Se[t])),a=ge.filter((e=>e!==ge[t]));Ee(e),Ie(a),0==e.length&&Ft("FilterPMSCategoryID","P M S Category Name","",1)}else if("Tenant Name"===y.name){let e=fe.filter((e=>e!==fe[t])),a=De.filter((e=>e!==De[t]));ve(e),he(a),0==e.length&&Ft("FilterPMSTenantID","Tenant Name","",1)}else if("P M S Quality Class Name"===y.name){let e=Ce.filter((e=>e!==Ce[t])),a=ye.filter((e=>e!==ye[t]));Pe(e),Me(a),0==e.length&&Ft("FilterPMSQualityClassID","P M S Quality Class Name","",1)}else if("Contract Name"===y.name){let e=Ae.filter((e=>e!==Ae[t])),a=ze.filter((e=>e!==ze[t]));Fe(e),ke(a),0==e.length&&Ft("FilterContractID","Contract Name","",1)}else if("Building Name"===y.name){let e=_e.filter((e=>e!==_e[t])),a=Te.filter((e=>e!==Te[t]));Ze(e),Le(a),0==e.length&&Ft("FilterBuildingID","Building Name","",1)}else if("Floor Name"===y.name){let e=be.filter((e=>e!==be[t])),a=qe.filter((e=>e!==qe[t]));xe(e),Be(a),0==e.length&&Ft("FilterFloorID","Floor Name","",1)}else if("Locality Name"===y.name){let e=we.filter((e=>e!==we[t])),a=He.filter((e=>e!==He[t]));Re(e),Oe(a),0==e.length&&Ft("FilterLocalityID","Locality Name","",1)}else if("Spot Name"===y.name){let e=Qe.filter((e=>e!==Qe[t])),a=Ke.filter((e=>e!==Ke[t]));We(e),Ve(a),0==e.length&&Ft("FilterSpotID","Spot Name","",1)}else if("Ass Wing Name"===y.name){let e=Ue.filter((e=>e!==Ue[t])),a=Ge.filter((e=>e!==Ge[t]));je(e),$e(a),0==e.length&&Ft("FilterAssWingID","Ass Wing Name","",1)}else if("Properitor Name"===y.name){let e=Ye.filter((e=>e!==Ye[t])),a=Xe.filter((e=>e!==Xe[t]));Je(e),et(a),0==e.length&&Ft("FilterPMProperitorID","Properitor Name","",1)}else if("P M Acc Size Name"===y.name){let e=tt.filter((e=>e!==tt[t])),a=lt.filter((e=>e!==lt[t]));at(e),nt(a),0==e.length&&Ft("FilterPMAccomodationSizeIDq","P M Acc Size Name","",1)}else if("P M Acc Size Sq Feet"===y.name){let e=mt.filter((e=>e!==mt[t])),a=it.filter((e=>e!==it[t]));ct(e),rt(a),0==e.length&&Ft("FilterPMAccomodationSizeIDq","P M Acc Size Sq Feet","",1)}else if("P M Acc Size Description"===y.name){let e=st.filter((e=>e!==st[t])),a=dt.filter((e=>e!==dt[t]));ot(e),ut(a),0==e.length&&Ft("FilterPMAccomodationSizeIDq","P M Acc Size Description","",1)}else if("P M Accomodation Size Code"===y.name){let e=pt.filter((e=>e!==pt[t])),a=St.filter((e=>e!==St[t]));Nt(e),Et(a),0==e.length&&Ft("FilterPMAccomodationSizeIDq","P M Accomodation Size Code","",1)}}function Pt(e,t,a){P(!0),L({name:e,type:t}),a.length>0?Ft(t,e,"",1):Ft(t,e,"",1,yt()),q("")}function yt(){let e=[...tt,...mt,...st,...pt],t=new Array;return e.map((e=>{t.includes(e)||t.push(e)})),t.toString()}const Mt=(t,a)=>{let l=p.v.Api+"FP1251S3/",n={data:{p1:t&&t.PMAccomodationSizeIDPKq?t.PMAccomodationSizeIDPKq:null,p2:t&&t.PMAccomodationSizeCode?t.PMAccomodationSizeCode:null,p3:t&&t.PMAccSizeName?t.PMAccSizeName:null,p4:t&&t.PMAccSizeSqFeet?t.PMAccSizeSqFeet:null,p5:t&&t.PMAccSizeDescription?t.PMAccSizeDescription:null,p6:"0",p7:null,p8:t&&t.PMSAccomodationID?t.PMSAccomodationID:null,p9:e.Dialogview?"1":null,p10:null,p11:t&&t.CreatedUserID?t.CreatedUserID:null,p12:t&&t.CreatedTtm?t.CreatedTtm:null,p13:t&&t.CreatedTtmType?t.CreatedTtmType:null,p14:t&&t.CreatedTtmBetween?t.CreatedTtmBetween:null,p15:null,p16:t&&t.PMSCategoryID?t.PMSCategoryID:null,p17:null,p18:t&&t.PMSTenantID?t.PMSTenantID:null,p19:null,p20:t&&t.PMSQualityClassID?t.PMSQualityClassID:null,p21:null,p22:t&&t.ContractID?t.ContractID:null,p23:null,p24:null,p25:t&&t.BuildingID?t.BuildingID:null,p26:null,p27:null,p28:t&&t.FloorID?t.FloorID:null,p29:null,p30:null,p31:t&&t.LocalityID?t.LocalityID:null,p32:null,p33:null,p34:t&&t.SpotID?t.SpotID:null,p35:null,p36:null,p37:t&&t.AssWingID?t.AssWingID:null,p38:null,p39:null,p40:t&&t.PMProperitorID?t.PMProperitorID:null,p41:null,p42:null,p43:null,p44:null,p45:null,p46:a.page,p47:a.pageSize,p48:"p1",p49:null,p50:null,p51:localStorage.getItem("UserGroupID"),p52:localStorage.getItem("userid")}};(0,i.Z)(l,n,e.token).then((t=>{e.data(t.Output.data),At(t.Output.data)}))},At=t=>{const a=p.v.Api+"FP20S3/",l={data:{p1:null,p2:null,p3:null,p4:null,p5:e.formID,p6:null,p7:null,p8:null,p9:null,p10:null,p11:null,p12:null,p13:null,p14:null,p15:null,p16:null,p17:null,p18:null,p19:null,p20:null,p21:1,p22:100,p23:"AdminUserGridViewID",p24:null,p25:null,p26:localStorage.getItem("UserGroupID"),p27:localStorage.getItem("userid")}};(0,i.Z)(a,l,e.token).then((a=>{e.visibleData(a.Output.data,t)}))};function Ft(a,l,n,m,c,r){const s=p.v.Api+"FP1251S3/",o={data:{p1:"P M Accomodation Size I D P Kq"==l&&n.length>0?"%"+n+"%":null,p2:"P M Accomodation Size Code"==l&&n.length>0?"%"+n+"%":null,p3:"P M Acc Size Name"==l&&n.length>0?"%"+n+"%":null,p4:"P M Acc Size Sq Feet"==l&&n.length>0?"%"+n+"%":null,p5:"P M Acc Size Description"==l&&n.length>0?"%"+n+"%":null,p6:null,p7:null,p8:t.PMSAccomodationRegistryPMSAccomodationID?t.PMSAccomodationRegistryPMSAccomodationID:"0",p9:e.Dialogview?"1":null,p10:null,p11:"Created User I D _varchar"==l&&n.length>0?n:null,p12:null,p13:null,p14:null,p15:null,p16:"P M S Category Name"!=l?r?"":Se.toString():null,p17:"P M S Category Name"==l&&n.length>0?"%"+n+"%":null,p18:"Tenant Name"!=l?r?"":fe.toString():null,p19:"Tenant Name"==l&&n.length>0?"%"+n+"%":null,p20:"P M S Quality Class Name"!=l?r?"":Ce.toString():null,p21:"P M S Quality Class Name"==l&&n.length>0?"%"+n+"%":null,p22:"Contract Name"!=l?r?"":Ae.toString():null,p23:"Contract Code"==l&&n.length>0?"%"+n+"%":null,p24:"Contract Name"==l&&n.length>0?"%"+n+"%":null,p25:"Building Name"!=l?r?"":_e.toString():null,p26:"Building Code"==l&&n.length>0?"%"+n+"%":null,p27:"Building Name"==l&&n.length>0?"%"+n+"%":null,p28:"Floor Name"!=l?r?"":be.toString():null,p29:"Floor Code"==l&&n.length>0?"%"+n+"%":null,p30:"Floor Name"==l&&n.length>0?"%"+n+"%":null,p31:"Locality Name"!=l?r?"":we.toString():null,p32:"Locality Code"==l&&n.length>0?"%"+n+"%":null,p33:"Locality Name"==l&&n.length>0?"%"+n+"%":null,p34:"Spot Name"!=l?r?"":Qe.toString():null,p35:"Spot Code"==l&&n.length>0?"%"+n+"%":null,p36:"Spot Name"==l&&n.length>0?"%"+n+"%":null,p37:"Ass Wing Name"!=l?r?"":Ue.toString():null,p38:"Ass Wing Code"==l&&n.length>0?"%"+n+"%":null,p39:"Ass Wing Name"==l&&n.length>0?"%"+n+"%":null,p40:"Properitor Name"!=l?r?"":Ye.toString():null,p41:"P M Properitor Code"==l&&n.length>0?"%"+n+"%":null,p42:"Properitor Name"==l&&n.length>0?"%"+n+"%":null,p43:"P M S Accomodation Code"==l&&n.length>0?"%"+n+"%":null,p44:"P M S Accomodation Name"==l&&n.length>0?"%"+n+"%":null,p45:"P M S Accomodation No"==l&&n.length>0?"%"+n+"%":null,p46:m,p47:10,p48:a,p49:null,p50:null,p51:localStorage.getItem("UserGroupID"),p52:localStorage.getItem("userid")}};(0,i.Z)(s,o,e.token).then((e=>{const t=e.Output.status.code,a=e.Output.data,n=new Array;if("200"===t)if(a.length>0)if(Q(a[0].TotalCount),1===m){a.map((e=>{"P M Acc Size Name"===l?n.push({id:e.PMAccomodationSizeIDqPK,name:e.PMAccSizeName}):"P M Acc Size Sq Feet"===l?n.push({id:e.PMAccomodationSizeIDqPK,name:e.PMAccSizeSqFeet}):"P M Acc Size Description"===l?n.push({id:e.PMAccomodationSizeIDqPK,name:e.PMAccSizeDescription}):"P M S Accomodation Name"===l&&n.push({id:e.PMSAccomodationIDPK,name:e.PMSAccomodationName})}));const e=n.map((e=>e.name)),t=n.filter((({name:t},a)=>!e.includes(t,a+1)));w(t)}else{a.map((e=>{"P M Acc Size Name"===l?n.push({id:e.PMAccomodationSizeIDqPK,name:e.PMAccSizeName}):"P M Acc Size Sq Feet"===l?n.push({id:e.PMAccomodationSizeIDqPK,name:e.PMAccSizeSqFeet}):"P M Acc Size Description"===l?n.push({id:e.PMAccomodationSizeIDqPK,name:e.PMAccSizeDescription}):"P M S Accomodation Name"===l&&n.push({id:e.PMSAccomodationIDPK,name:e.PMSAccomodationName})}));let e=B.concat(n);const t=e.map((e=>e.name)),m=e.filter((({name:e},a)=>!t.includes(e,a+1)));w(m)}else x.length>0&&w([]),Q(B.length)}))}function zt(){if("Created Ttm"===y.name)return n().createElement(N.Z,{frmctrlid:"fld1251L1TFCCreatedTtm",SendDateVal:(t,a,l,n,m)=>{!function(t,a,l,n,m,c){let i={CreatedTtm:t,CreatedTtmType:l,CreatedTtmBetween:a,PMAccomodationSizeIDPKq:yt().toString(),PMSAccomodationID:de.toString()};U({from:t,to:a,type:l,dtype:m,fname:c}),G(i),e.searchData(i)}(t,a,l,0,n,m)},keyboardback:()=>{P(!1),L({name:"",type:""})},title:Dt("Created Date"),fieldname:"CreatedTtm",save:e=>{ae(!0)}})}const kt=B.map(((e,t)=>{if("P M S Accomodation Name"===y.name){if(!de.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("P M S Category Name"===y.name){if(!Se.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Tenant Name"===y.name){if(!fe.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("P M S Quality Class Name"===y.name){if(!Ce.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Contract Name"===y.name){if(!Ae.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Building Name"===y.name){if(!_e.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Floor Name"===y.name){if(!be.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Locality Name"===y.name){if(!we.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Spot Name"===y.name){if(!Qe.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Ass Wing Name"===y.name){if(!Ue.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("Properitor Name"===y.name){if(!Ye.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("P M Acc Size Name"===y.name){if(!tt.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("P M Acc Size Sq Feet"===y.name){if(!mt.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}else if("P M Acc Size Description"===y.name){if(!st.some((t=>t===e.id)))return n().createElement("div",{id:"filda_1251_L1_"+e.name,key:t,className:"FilterItemDiv",onClick:()=>{_t(e)}},n().createElement(o.Z,{className:"DotIcon"}),n().createElement("span",null,e.name));if(1===B.length)return n().createElement("div",{key:t},n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, this record already selected.")))}}));function _t(e){"P M S Accomodation Name"===y.name?(ue((t=>[...t,e.id])),Ne((t=>[...t,e.name])),K(W+1)):"P M S Category Name"===y.name?(Ee((t=>[...t,e.id])),Ie((t=>[...t,e.name])),K(W+1)):"Tenant Name"===y.name?(ve((t=>[...t,e.id])),he((t=>[...t,e.name])),K(W+1)):"P M S Quality Class Name"===y.name?(Pe((t=>[...t,e.id])),Me((t=>[...t,e.name])),K(W+1)):"Contract Name"===y.name?(Fe((t=>[...t,e.id])),ke((t=>[...t,e.name])),K(W+1)):"Building Name"===y.name?(Ze((t=>[...t,e.id])),Le((t=>[...t,e.name])),K(W+1)):"Floor Name"===y.name?(xe((t=>[...t,e.id])),Be((t=>[...t,e.name])),K(W+1)):"Locality Name"===y.name?(Re((t=>[...t,e.id])),Oe((t=>[...t,e.name])),K(W+1)):"Spot Name"===y.name?(We((t=>[...t,e.id])),Ve((t=>[...t,e.name])),K(W+1)):"Ass Wing Name"===y.name?(je((t=>[...t,e.id])),$e((t=>[...t,e.name])),K(W+1)):"Properitor Name"===y.name?(Je((t=>[...t,e.id])),et((t=>[...t,e.name])),K(W+1)):"P M Acc Size Name"===y.name?(at((t=>[...t,e.id])),nt((t=>[...t,e.name])),K(W+1)):"P M Acc Size Sq Feet"===y.name?(ct((t=>[...t,e.id])),rt((t=>[...t,e.name])),K(W+1)):"P M Acc Size Description"===y.name&&(ot((t=>[...t,e.id])),ut((t=>[...t,e.name])),K(W+1)),B.filter((t=>t.id!==e.id));var t=document.getElementById("SelectedItems");t.scrollTop=t.scrollHeight}function Zt(){const t=`${p.v.MongoAPI}FilterFavorites_Select/`,a={data:{_id:0,UserID:localStorage.getItem("userid"),FormID:ee,IsQuick:!1,IsDashboard:!1,IsActive:!0,DeleStat:!1}};(0,i.Z)(t,a,e.token).then((e=>{oe(e.Output.data),re(!0)}))}return n().createElement("div",null,n().createElement(f.Z,{onClose:()=>ae(!1),className:"displayFlex","aria-labelledby":"customized-dialog-title",open:te},n().createElement(b,{id:"customized-dialog-title",onClose:()=>ae(!1)},"Add Favorite"),n().createElement(D.Z,{dividers:!0,style:{minWidth:"500px"}},n().createElement("form",{autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n().createElement(C.Z,{margin:"dense",id:"name",label:"Favorite Name",type:"text",value:J,onChange:e=>X(e.target.value),fullWidth:!0})),n().createElement(z.Z,{style:{color:"#337ab7"},control:n().createElement(M.Checkbox,{style:{color:"#rgb(52, 179, 68)",padding:"6px"},icon:n().createElement(A.Z,{fontSize:"small",style:{color:"rgb(52, 179, 68)"}}),checkedIcon:n().createElement(F.Z,{fontSize:"small",style:{color:"rgb(52, 179, 68)"}}),checked:le,onChange:e=>ne(e.target.checked)}),label:"Quick"}),n().createElement(z.Z,{style:{color:"#337ab7"},control:n().createElement(M.Checkbox,{style:{color:"#rgb(52, 179, 68)",padding:"6px"},icon:n().createElement(A.Z,{fontSize:"small",style:{color:"rgb(52, 179, 68)"}}),checkedIcon:n().createElement(F.Z,{fontSize:"small",style:{color:"rgb(52, 179, 68)"}}),checked:me,onChange:e=>ce(e.target.checked)}),label:"Dashboard"})),n().createElement(h.Z,null,n().createElement(r.Z,{onClick:()=>function(){let t=Object.assign({},j),a=[V],l=[];Object.keys(t).map(((e,a)=>{(e.includes("Ttm")||e.includes("Date"))&&delete t[e]})),a.map((e=>{l.push({name:e.fname,type:e.dtype})}));let n=`${p.v.MongoAPI}FilterFavorites_Save/`,m={data:{_id:$||0,UserID:localStorage.getItem("userid"),Name:J,FormID:ee,FormName:"PMSSizeofAccomodationRegistry",SearchParams:t,Date:l,CreatedDate:(new Date).toISOString(),IsQuick:le,IsDashboard:me,IsActive:!0,DeleStat:!1,PMAccSizeNameValData:lt,PMAccSizeSqFeetValData:it,PMAccSizeDescriptionValData:dt}};(0,I.Z)(n,m,{}).then((t=>{ae(!1),e.msg(t[0].status.message,"success")}))}(),color:"primary"},"Save"))),v?"Created Ttm"===y.name||y.name.includes("Date")?n().createElement(zt,null):n().createElement("div",null,n().createElement("div",{className:"columnHeader displayFlex"},n().createElement("div",{className:"columnFilterHeaderTitle width100 displayFlex"},n().createElement(d.Z,null,n().createElement(u.Z,{xs:6,sm:6,md:6,lg:6},n().createElement("p",{className:"columnHeaderp"},ht(y.name.replace(/\s/g,""))," (",B.length,"/",O,")")),n().createElement(u.Z,{xs:6,sm:6,md:6,lg:6},n().createElement(s.ZP,{title:Dt("Close"),placement:"top"},n().createElement("div",{className:"FilterItemClose",align:"right"},n().createElement(c.Z,{id:"fld1251L1TFCFilterItemCloseIcon",className:"FilterItemCloseIcon",onClick:function(){P(!1),L({name:"",type:""}),H(1)}}))),(tt.length>0||mt.length>0||st.length>0||pt.length>0||de.length>0)&&n().createElement("div",{className:"FiltercloseAlign",align:"right"},n().createElement(r.Z,{frmctrlid:"fld1251L1TFCFilterSelectedClearAll",className:"ColumnApplyButton",onClick:()=>{X(""),at([]),nt([]),ct([]),rt([]),ot([]),ut([]),Nt([]),Et([]),ue([]),Ne([]),K(0),Ft(y.type,y.name,"",1,0,"clear"),e.searchData({}),G({}),Mt({},{page:1,pageSize:10})}},n().createElement("span",{className:"ColumnApplyTitle"},Dt("Clear All")))))))),n().createElement("div",{className:"FilterParentDiv"},n().createElement("div",{"data-list-scroll-container":"true"},n().createElement("div",{id:"SelectedItems",tabIndex:"-1",className:"heightScrollY"},n().createElement("div",{className:"FilterMaximize"},gt?n().createElement(s.ZP,{title:"Maximize",placement:"right"},n().createElement("span",null,n().createElement(T.D7o,{className:"FilterMaximizeIcon",onClick:()=>{It(!1)}}))):n().createElement(s.ZP,{title:"Minimize",placement:"right"},n().createElement("span",null,n().createElement(T.dOw,{className:"FilterMaximizeIcon",onClick:()=>{It(!0)}})))),n().createElement("ul",null,"P M S Accomodation Name"===y.name?pe.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"P M S Category Name"===y.name?ge.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Tenant Name"===y.name?De.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"P M S Quality Class Name"===y.name?ye.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Contract Name"===y.name?ze.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Building Name"===y.name?Te.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Floor Name"===y.name?qe.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Locality Name"===y.name?He.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Spot Name"===y.name?Ke.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Ass Wing Name"===y.name?Ge.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"Properitor Name"===y.name?Xe.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"P M Acc Size Name"===y.name?lt.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"P M Acc Size Sq Feet"===y.name?it.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):"P M Acc Size Description"===y.name?dt.map(((e,t)=>n().createElement("div",{key:t,tabIndex:"-1",className:gt?"filterSelectedItems":"filterSelectedItemsMaximize"},n().createElement("div",{className:"filterSelectedItemNames"},n().createElement("span",null,e)),n().createElement("div",{className:"filterSelectedItemClose"},n().createElement("div",{id:"fildacls_1251_L1_"+e,onClick:()=>Ct(0,t)},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon"})))))):void 0)),n().createElement("div",{className:"displayFlex width100 FilterSearch"},n().createElement("div",{className:"FilterSearchInputDiv"},n().createElement(S.Z,{frmctrlid:"fld1251L1TFCFilterSearchInput",className:"filterSearchInput",type:"text",value:x,placeholder:Dt("Enter ")+" "+ht(y.name.replace(/\s/g,"")),onChange:e=>{q(e),Ft(y.type,y.name,e,1,yt())}})),n().createElement("div",{id:"fld1251L1TFCFilterGoForward",className:"FilterSearchBtn",onClick:function(){let t={CreatedTtm:V.from,CreatedTtmType:V.type,CreatedTtmBetween:V.to,PMSAccomodationID:de.toString()};[...tt,...mt,...st,...pt,...de].length>0&&(e.searchData(t),G(t),Mt(t,{page:1,pageSize:10}),P(!1))}},n().createElement(s.ZP,{title:"",placement:"top"},n().createElement(r.Z,{className:"ColumnSearchButton"},n().createElement("span",{className:"ColumnCloseTitle"},"Search"))))))),n().createElement("div",{id:"fld1251L1TFCScrollYDefault",className:"height65 scrollYDefault"},B.length>0&&kt,B.length+("P M S Accomodation Name"===y.name?de.length:"P M S Category Name"===y.name?Se.length:"Tenant Name"===y.name?fe.length:"P M S Quality Class Name"===y.name?Ce.length:"Contract Name"===y.name?Ae.length:"Building Name"===y.name?_e.length:"Floor Name"===y.name?be.length:"Locality Name"===y.name?we.length:"Spot Name"===y.name?Qe.length:"Ass Wing Name"===y.name?Ue.length:"Properitor Name"===y.name?Ye.length:"P M Acc Size Name"===y.name?tt.length:"P M Acc Size Sq Feet"===y.name?mt.length:"P M Acc Size Description"===y.name?st.length:void 0)<O&&B.length>0&&n().createElement("div",{id:"fld1251L1TFCMoreDataDiv",className:"MoreDataDiv",onClick:()=>{H(R+1),Ft(y.type,y.name,"",R+1)}},n().createElement("p",null," more... ")),0===B.length&&n().createElement("div",null,n().createElement("div",{className:"NoDataImage"},n().createElement("img",{src:p.v.NoData,alt:"NoImage"})),n().createElement("div",{className:"NoDataDesc"},n().createElement("span",null,"Sorry, no results found. Try a different search selection or refresh the list."))))):n().createElement("div",null,n().createElement("div",{className:"columnHeader displayFlex"},n().createElement("div",{className:"columnHeaderTitle"},n().createElement(Z.Ol$,{className:"columnHeaderIcon"}),n().createElement("p",{className:"columnHeaderp"}," ",Dt("Filter")," ",J.length>0&&`(${J})`)),n().createElement("div",{className:"columnHeaderbtn",align:"right"},n().createElement(s.ZP,{title:"Favorite List",placement:"top"},ie?n().createElement(c.Z,{className:"favlisticon",onClick:()=>{re(!1)}}):n().createElement(g.Z,{className:"favlisticon",onClick:()=>{Zt()}})),[...tt,...mt,...st,...pt,...de].length>0&&n().createElement(s.ZP,{title:"Save Favorites",placement:"top"},n().createElement(E.Z,{className:"favlisticon",onClick:()=>{ae(!0)}})),n().createElement(s.ZP,{title:"",placement:"top"},n().createElement(r.Z,{className:"ColumnApplyButton",onClick:()=>{Y(0),at([]),nt([]),ct([]),rt([]),ot([]),ut([]),Nt([]),Et([]),ue([]),Ne([]),K(0),e.searchData({}),G({}),Mt({},{page:1,pageSize:10}),P(!1),L({name:"",type:""}),U({from:"",to:"",type:"",dtype:"",fname:""})},id:"fld1251L1TFCColumApplyBttn"},n().createElement("span",{className:"ColumnApplyTitle"},Dt("Clear")))),n().createElement(s.ZP,{title:"",placement:"top"},n().createElement(r.Z,{className:"ColumnCloseButton",onClick:()=>{e.CloseBtnClk()},id:"fld1251L1TFCColumnCloseButton"},n().createElement("span",{className:"ColumnCloseTitle"},Dt("Close")))))),n().createElement("div",{className:"height65"},ie?n().createElement("div",{id:"fld1251L1TFCFilItemsShowFav",className:"FilterItems"},se.map((t=>n().createElement("div",{className:"FilterItemDivTitle"},n().createElement(d.Z,null,n().createElement(u.Z,{xs:3,md:3,lg:3,sm:3},n().createElement("span",{onClick:()=>{!function(t){let a={};t.Date.length>0&&t.Date.map((e=>{a=(0,N.i)(e.type,e.name)})),e.searchData({...t.SearchParams,...a}),G(t.SearchParams),re(!1),X(t.Name),Y(t._id),nt(t.PMAccSizeNameValData||[]),rt(t.PMAccSizeSqFeetValData||[]),ut(t.PMAccSizeDescriptionValData||[])}(t)}},t.Name)),n().createElement(u.Z,{xs:6,md:6,lg:6,sm:6}),n().createElement(u.Z,{align:"right",xs:3,md:3,lg:3,sm:3},n().createElement(c.Z,{className:"filterSelectedItemCloseIcon",onClick:()=>{!function(t){let a=`${p.v.MongoAPI}FilterFavorites_Save/`,l={data:{_id:t,DeleStat:!0}};(0,I.Z)(a,l,{}).then((t=>{e.msg(t[0].status.message,"success"),Zt()}))}(t._id)}}))))))):n().createElement("div",{id:"fld1251L1TFCFilItems",className:"FilterItems"},n().createElement("div",{className:"FilterItemDivTitle",onClick:()=>{Pt("Created Ttm","FilterPMAccomodationSizeIDPKq_varchar",V)}},Dt("Created Date"),V.from&&n().createElement("p",{className:"filterdatevalue"},"(",V.from+" to "+V.to,")")),n().createElement("div",{className:"FilterItemDivTitle",onClick:()=>{Pt("P M Acc Size Name","FilterPMAccomodationSizeIDq",tt)}},n().createElement("span",{className:lt.length>0?"FilterItemDivSmall":""},ht("PMAccSizeName")),lt.length>0&&n().createElement("div",{className:"FilterItemDivSelected"},n().createElement("span",{className:"RoundedDivName"},lt[0]),lt.length>1&&n().createElement("span",{className:"RoundedDivName"},lt[1]),lt.length>2&&n().createElement("span",{className:"RoundedDivNumber"},"+"+(lt.length-2)))),n().createElement("div",{className:"FilterItemDivTitle",onClick:()=>{Pt("P M Acc Size Sq Feet","FilterPMAccomodationSizeIDq",mt)}},n().createElement("span",{className:it.length>0?"FilterItemDivSmall":""},ht("PMAccSizeSqFeet")),it.length>0&&n().createElement("div",{className:"FilterItemDivSelected"},n().createElement("span",{className:"RoundedDivName"},it[0]),it.length>1&&n().createElement("span",{className:"RoundedDivName"},it[1]),it.length>2&&n().createElement("span",{className:"RoundedDivNumber"},"+"+(it.length-2)))),n().createElement("div",{className:"FilterItemDivTitle",onClick:()=>{Pt("P M Acc Size Description","FilterPMAccomodationSizeIDq",st)}},n().createElement("span",{className:dt.length>0?"FilterItemDivSmall":""},ht("PMAccSizeDescription")),dt.length>0&&n().createElement("div",{className:"FilterItemDivSelected"},n().createElement("span",{className:"RoundedDivName"},dt[0]),dt.length>1&&n().createElement("span",{className:"RoundedDivName"},dt[1]),dt.length>2&&n().createElement("span",{className:"RoundedDivNumber"},"+"+(dt.length-2))))))))}},47035:(e,t,a)=>{a.d(t,{ZP:()=>n});const l={English:{PMSSizeofAccomodationRegistry:"Size of Accommodation"},Arabic:{PMSSizeofAccomodationRegistry:"Size of Accommodation"}};function n(){let e=localStorage.getItem("Language");return l[e]}}}]);