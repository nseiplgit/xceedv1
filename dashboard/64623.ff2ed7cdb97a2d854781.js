"use strict";(self.webpackChunk_shared_routing_dashboard=self.webpackChunk_shared_routing_dashboard||[]).push([[64623],{51673:(e,t,a)=>{a.d(t,{Z:()=>n}),a(26537),a(40900);var o=a(25108);async function n(e,t,a,n){let r=localStorage.getItem("userid"),s=await async function(e){return e.data&&!Array.isArray(e.data)?{data:Object.fromEntries(Object.entries(e.data).filter((([e,t])=>null!=t)))}:e}(t);return(n&&"pdf"==n.type||n&&"excel"==n.type)&&(s={...s,file:n}),fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","x-userid":localStorage.getItem("userid"),"x-tokenid":a&&a.TokenIDPK,"x-tokenname":a&&a.TokenName,USER_ID:r,FORM_ID:1},body:JSON.stringify(s)}).then((e=>e.json())).then((async e=>{if(e.Output){if(e.Output&&e.Output.data&&e.Output.data.length>0){const t=await function(e){const t=new Set(["UGFzc3dvcmQ=","VXNlclBhc3N3b3Jk","VXNlckNvbmZpcm1QYXNzd29yZA==","UG9ydGFsUGFzc3dvcmQ=","VXNlckdyb3VwSUQ="]);if(e&&0===e.length)return o.log("DATA SCREENING NOT REQUIRED - NO DATA"),e;if(!Object.keys(e[0]).some((e=>t.has(e))))return o.log("DATA SCREENING NOT REQUIRED"),e;function a(e,t){return{[atob(e)]:atob(t)}}return o.log("DATA SCREENING PROCESSED"),Promise.all(e.map((e=>{const o={};for(const[n,r]of Object.entries(e))if(t.has(n)){const e=a(n,r);Object.assign(o,e)}else o[n]=r;return o})))}(e.Output.data);return{Output:{status:e.Output.status,data:t}}}return e}return{Output:e}})).catch((e=>{e&&(window.location.href,o.log(e,"error"))}))}},26537:(e,t,a)=>{a.d(t,{Z:()=>s}),a(92950);var o=a(40900),n=a(55905),r=!1;function s(e){const t=(0,n.decode)(localStorage.getItem("username"));let a=o.v.Api+"FPU19S3/",s=(localStorage.getItem("username"),localStorage.getItem("password"),{p1:localStorage.getItem("userid"),p2:localStorage.getItem("SessionID")});return fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},keepalive:!1,body:JSON.stringify(s)}).then((e=>e.json())).then((e=>e&&0==e.TokenIDPK&&"admin"!=t.toLowerCase()?(r||(r=!0,alert("It appears that your session has been taken over by another device. Please login again to regain access.")),localStorage.clear(),sessionStorage.clear(),window.location.href.toLowerCase().includes("adib")?window.location.href=logoutpath:window.location.href="/",{}):e)).catch((e=>e))}},64623:(e,t,a)=>{a.r(t),a.d(t,{ProcessDataSyncSave:()=>s});var o=a(26537),n=a(51673),r=a(25108);async function s(e,t,a,s,c){try{const r=await(0,o.Z)(0),{Output:{status:i,data:l}}=await(0,n.Z)(e,{data:t,...a},r);"200"===i.code?(s.alert({open:!0,color:"success",message:[i.message]}),l.length>0&&c.current.getRefresh(l)):s.alert({open:!0,color:"warning",message:[i.message]})}catch(e){r.error(e)}finally{s.loading(!1)}}},40900:(e,t,a)=>{a.d(t,{v:()=>o}),window.location.href.split("/");const o={Api:"http://13.127.67.252:5040/",MongoAPI:"",NoData:"http://13.127.67.252:5040/images/NoData.GIF",GoogleMapsAPI:"",excel:"http://13.127.67.252:5040/Images/Excel/",ImageUrl:"http://13.127.67.252:5040/Images/",ServerTime:0}}}]);