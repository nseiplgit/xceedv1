/*! For license information please see 7308.54c96651a292906da4e4.js.LICENSE.txt */
"use strict";(self.webpackChunk_shared_routing_viewsl0l2=self.webpackChunk_shared_routing_viewsl0l2||[]).push([[7308,5419],{61956:(e,t,a)=>{function r(e,t,a){let r=localStorage.getItem("userid");return fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-userid":localStorage.getItem("userid"),"x-tokenid":a&&a.TokenIDPK,"x-tokenname":a&&a.TokenName,USER_ID:r,FORM_ID:1},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>Array.isArray(e)?e:[e])).catch((e=>{e&&(window.location.href.split("/"),localStorage.setItem("error",e))}))}a.d(t,{Z:()=>r}),a(26537),a(40900)},51673:(e,t,a)=>{a.d(t,{Z:()=>n}),a(26537),a(40900);var r=a(25108);async function n(e,t,a,n){let o=localStorage.getItem("userid"),l=await async function(e){return e.data&&!Array.isArray(e.data)?{data:Object.fromEntries(Object.entries(e.data).filter((([e,t])=>null!=t)))}:e}(t);return(n&&"pdf"==n.type||n&&"excel"==n.type)&&(l={...l,file:n}),fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-userid":localStorage.getItem("userid"),"x-tokenid":a&&a.TokenIDPK,"x-tokenname":a&&a.TokenName,USER_ID:o,FORM_ID:1},body:JSON.stringify(l)}).then((e=>e.json())).then((async e=>{if(e.Output){if(e.Output&&e.Output.data&&e.Output.data.length>0){const t=await function(e){const t=new Set(["UGFzc3dvcmQ=","VXNlclBhc3N3b3Jk","VXNlckNvbmZpcm1QYXNzd29yZA==","UG9ydGFsUGFzc3dvcmQ=","VXNlckdyb3VwSUQ="]);if(e&&0===e.length)return r.log("DATA SCREENING NOT REQUIRED - NO DATA"),e;if(!Object.keys(e[0]).some((e=>t.has(e))))return r.log("DATA SCREENING NOT REQUIRED"),e;function a(e,t){return{[atob(e)]:atob(t)}}return r.log("DATA SCREENING PROCESSED"),Promise.all(e.map((e=>{const r={};for(const[n,o]of Object.entries(e))if(t.has(n)){const e=a(n,o);Object.assign(r,e)}else r[n]=o;return r})))}(e.Output.data);return{Output:{status:e.Output.status,data:t}}}return e}return{Output:e}})).catch((e=>{e&&(window.location.href.split("/"),localStorage.setItem("error",e),r.log(e,"error"))}))}},26537:(e,t,a)=>{a.d(t,{Z:()=>l}),a(92950);var r=a(40900),n=a(55905),o=!1;function l(e){const t=(0,n.decode)(localStorage.getItem("username"));let a=r.v.Api+"FPU19S3/",l=(localStorage.getItem("username"),localStorage.getItem("password"),{p1:localStorage.getItem("userid"),p2:localStorage.getItem("SessionID")});return fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},keepalive:!1,body:JSON.stringify(l)}).then((e=>e.json())).then((e=>e&&0==e.TokenIDPK&&"admin"!=t.toLowerCase()?(o||(o=!0,alert("It appears that your session has been taken over by another device. Please login again to regain access.")),localStorage.clear(),sessionStorage.clear(),window.location.href.toLowerCase().includes("adib")?window.location.href=logoutpath:window.location.href="/",{}):e)).catch((e=>e))}},14439:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(92950),n=a.n(r),o=a(45697),l=a.n(o),i=a(41749);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function d({...e}){const{classes:t,children:a,className:r,...o}=e;return n().createElement(i.Z,s({container:!0},o,{className:r}),a)}d.propTypes={classes:l().object,className:l().string,children:l().node};const c=d},27848:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(41749),n=a(45697),o=a.n(n),l=a(92950),i=a.n(l);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function d({...e}){const{classes:t,children:a,className:n,...o}=e;return i().createElement(r.Z,s({item:!0,className:n+" GridItemPadding"},o),a)}d.propTypes={classes:o().object,className:o().string,children:o().node};const c=d},24038:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(92950),n=a.n(r);function o(e){return n().createElement("div",null,n().createElement("form",{autoComplete:"off",onSubmit:e=>{e.preventDefault()}},n().createElement("input",{className:e.className,type:e.type,placeholder:e.placeholder,value:e.value,disabled:e.disabled,onChange:t=>{e.onChange(t.target.value.replace(/["']/g,""),t)}})))}},49174:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(11504),n=a(48904),o=a(13457),l=a(92950),i=a.n(l),s=a(40826),d=a(93890),c=a.n(d);const u=(0,n.Z)({overrides:{MuiInput:{underline:{"&:before":{borderBottom:"2px solid red"},"&:after":{borderBottom:"2px solid #34ace0"}}}}}),p=(0,n.Z)({overrides:{MuiInput:{underline:{"&:before":{borderBottom:"2px solid #34ace0"},"&:after":{borderBottom:"2px solid #34ace0"}}}}}),m=function(e){const[t,a]=(0,l.useState)(null),[n,d]=(0,l.useState)("");return i().createElement("form",{autoComplete:"off",onSubmit:e=>{e.preventDefault()},style:{width:"100%"}},i().createElement(o.Z,{theme:e.value?p:u},i().createElement(r.MuiPickersUtilsProvider,{utils:c()},i().createElement(r.KeyboardDatePicker,{id:e.id,autoOk:!0,label:e.label,fullWidth:!e.fullWidth,value:e.value?e.value:null,variant:e.variant?e.variant:"inline",InputAdornmentProps:{position:"end"},format:e.format?e.format:"dd-MM-yyyy",maxDate:e.maxDate&&new Date(e.maxDate),minDate:e.minDate&&new Date(e.minDate),minDateMessage:"Min Date Invalid",onError:(t,a)=>{d(t),e.onErr(t)},onChange:e.change?e.change:t=>{"Invalid Date"==t||null==t?e.onChange(t):e.onChange((0,s.format)(t,"yyyy-MM-dd"))},disabled:!!e.disabled&&e.disabled,views:e.view?e.view:["date"],openTo:e.openTo?e.openTo:null}))))}},8981:(e,t,a)=>{a.d(t,{Z:()=>n});const r={English:{New:"New","Filter Data":"Filter Data",Filter:"Filter","Add/Remove Columns":"Add/Remove Columns",Migration:"Migration",Print:"Print","Excel Export":"Excel Export",Refresh:"Refresh",Draft:"Draft",Search:"Search",Submit:"Submit",setDefault:"setDefault",Add:"Add","per page Of":"per page Of",Active:"Active",Clear:"Clear",Save:"Save",Close:"Close",IsDefault:"IsDefault","Clear All":"Clear All",Attachment:"Attachment",Files:"Files",Edit:"Edit",Apply:"Apply",Assign:"Assign",Update:"Update",Import:"Import",Revise:"Revise",Delete:"Delete","Table Scroll Data":"Table Scroll Data","Grid View":"Grid View","Tile View":"Tile View",List:"List",Card:"Card",Tile:"Tile",Drafts:"Drafts","List View":"List View","Are you sure?":"Are you sure?",Yes:"Yes",Cancel:"Cancel","Do you want to update this record?":"Do you want to update this record?","Do you want to Save?":"Do you want to Save?","Enter ":"Enter ","Select ":"Select ","View More":"View More",Action:"Action","Currency Symbol":"Currency Symbol","Manage Column":"Manage Column","Drag/Drop to Rearrange":"Drag/Drop to Rearrange","Change Header Name":"Change Header Name",Left:"Left",Right:"Right","Field Align":"Field Align","Field Name":"Field Name","please enter your header name here":"please enter your header name here",Applied:"Applied","Default Record Configured":"Default Record Configured","Saved to Draft":"Saved to Draft",Browse:"Browse",download:"download","There is no Record Found":"There is no Record Found",More:"More",View:"View",view:"view","Deleted Successfully":"Deleted Successfully","Please enter the primary fields":"Please enter the primary fields","Please save atleast one record":"Please save atleast one record","Expand Less":"Expand Less","Expand More":"Expand More","Collapse Grid View":"Collapse Grid View","Expand Grid View":"Expand Grid View",SetDefault:"Set Default",GetDefault:"Get Default",Reset:"Reset",Attach:"Attach","Created Date":"Created Date","Created By":"Created By","Please enter the":"Please enter the ","Please select the":"Please select the","Please select the ":"Please select the ",Invalid:"Invalid"},Arabic:{New:"جديد","Filter Data":"تصفية البيانات",Filter:"منقي","Add/Remove Columns":"إضافة / إزالة الأعمدة",Migration:"الهجرة",Print:"مطبعة","Excel Export":"اكسل يصدّر",Refresh:"ينعش",Draft:"مسودة",Search:"يبحث",Submit:"يُقدِّم",setDefault:"الوضع الإفتراضي",Add:"يضيف","per page Of":"لكل صفحة من",Active:"نشيط",Clear:"صافي",Save:"يحفظ",Close:"قريب",IsDefault:"إفتراضي هو","Clear All":"امسح الكل",Attachments:"المرفق",Files:"الملفات",Edit:"يحرر",Apply:"يتقدم",Assign:"تعيين",Update:"تحديث",Import:"يستورد",Revise:"تراجع",Delete:"حذف","Table Scroll Data":"بيانات تمرير الجدول","Grid View":"عرض شبكي","Tile View":"عرض البلاط",List:"قائمة",Card:"بطاقة",Tile:"البلاط",Drafts:"المسودات","List View":"عرض القائمة","Are you sure?":"هل أنت واثق؟",Yes:"نعم",Cancel:"يلغي","Do you want to Update?":"هل تريد التحديث؟","Do you want to Save?":"هل تريد حفظ؟","Enter ":" يدخل","Select ":" يختار","View More":"عرض المزيد",Action:"عمل","Currency Symbol":"رمز العملة","Manage Column":"إدارة العمود","Drag/Drop to Rearrange":"اسحب / أفلت لإعادة الترتيب","Change Header Name":"تغيير اسم الرأس",Left:"اليسار",Right:"الصحيح","Field Align":"محاذاة المجال","Field Name":"اسم الحقل","please enter your header name here":"الرجاء إدخال اسم رأسك هنا.",Applied:"مُطبَّق","Default Record Configured":"تم تكوين السجل الافتراضي","Saved to Draft":"تم الحفظ في المسودة",Browse:"تصفح",download:"تحميل","There is no Record Found":"لم يتم العثور على أي سجل",More:"أكثر",View:"رأي",view:"رأي","Deleted Successfully":"حذف بنجاح","Saved to Draft":"تم الحفظ في المسودة","Please enter the primary fields":"الرجاء إدخال الحقول الأساسية","Please save atleast one record":"يرجى حفظ سجل واحد على الأقل","Expand Less":"قم بتوسيع أقل","Expand More":"","Collapse Grid View":"تصغير عرض الشبكة","Expand Grid View":"قم بتوسيع عرض الشبكة",SetDefault:"الوضع الإفتراضي",GetDefault:"احصل على الافتراضي",Reset:"إعادة ضبط",Attach:"يربط","Created Date":"تاريخ الإنشاء","Created By":"انشأ من قبل","Please enter the":"الرجاء إدخال",Invalid:"غير صالح","Please select the":"Please select the","Please select the ":"Please select the "}};function n(){let e=localStorage.getItem("Language");return r[e]}},40900:(e,t,a)=>{a.d(t,{v:()=>r}),window.location.href.split("/");const r={Api:"http://13.127.67.252:5040/",MongoAPI:"",NoData:"http://13.127.67.252:5040/images/NoData.GIF",GoogleMapsAPI:"",excel:"http://13.127.67.252:5040/Images/Excel/",ImageUrl:"http://13.127.67.252:5040/Images/",ServerTime:0}}}]);