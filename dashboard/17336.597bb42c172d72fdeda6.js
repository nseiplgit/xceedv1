"use strict";(self.webpackChunk_shared_routing_dashboard=self.webpackChunk_shared_routing_dashboard||[]).push([[17336],{64059:(e,t,a)=>{a.d(t,{Z:()=>b,i:()=>N});var l=a(92950),s=a.n(l),n=a(51767),c=a(74239),r=a(60625),m=a(70195),i=a(89260),d=a(60314),o=a(22261),y=a(14439),p=a(27848),u=a(64379),E=a(49174),g=a(60796),D=a(89883),f=a(10635),v=(a(61956),a(99940),a(40900),a(282));function N(e,t){const a=new Date,l=(0,f.format)(a,"dd-MM-yyyy");a.setDate(a.getDate()-1);const s=(0,f.format)(a,"dd-MM-yyyy");a.setDate(a.getDate()-1);const n=(0,f.format)(a,"dd-MM-yyyy");var c=n.split("-"),r=l.split("-");c[1].replace(/^0+/,""),c[0],r[1].replace(/^0+/,""),r[0],a.setDate(a.getDate()-4);const m=(0,f.format)(a,"dd-MM-yyyy");var i=m.split("-"),d=l.split("-");i[1].replace(/^0+/,""),i[0],d[1].replace(/^0+/,""),d[0],a.setDate(a.getDate()-8);const o=(0,f.format)(a,"dd-MM-yyyy");var y=o.split("-"),p=l.split("-");y[1].replace(/^0+/,""),y[0],p[1].replace(/^0+/,""),p[0],a.setDate(a.getDate()-15);const u=(0,f.format)(a,"dd-MM-yyyy");var E=u.split("-"),g=l.split("-");E[1].replace(/^0+/,""),E[0],g[1].replace(/^0+/,""),g[0];const D=new Date,v=new Date(D.getFullYear(),D.getMonth()-1,1),N=new Date(D.getFullYear(),D.getMonth()-1+1,0);var b=D.getDate()-D.getDay(),h=b+6,w=new Date(D.setDate(b));w.setDate(w.getDate()-1);const M=(0,f.format)(new Date(w),"dd-MM-yyyy");w.setDate(w.getDate()-6);const C=(0,f.format)(new Date(w),"dd-MM-yyyy");var k=C.split("-"),B=M.split("-");k[1].replace(/^0+/,""),k[0],B[1].replace(/^0+/,""),B[0];const L=(0,f.format)(new Date(v),"dd-MM-yyyy"),x=(0,f.format)(new Date(N),"dd-MM-yyyy");var Z=L.split("-"),S=x.split("-");Z[1].replace(/^0+/,""),Z[0],S[1].replace(/^0+/,""),S[0];const T=new Date,F=new Date(T.getFullYear(),T.getMonth()+1,1),A=new Date(T.getFullYear(),T.getMonth()+1+1,0);T.setDate(T.getDate()+1);const I=(0,f.format)(new Date(T),"dd-MM-yyyy");T.setDate(T.getDate()+1);const G=(0,f.format)(new Date(T),"dd-MM-yyyy");var _=l.split("-"),W=G.split("-");_[1].replace(/^0+/,""),_[0],W[1].replace(/^0+/,""),W[0],T.setDate(T.getDate()+4);const Y=(0,f.format)(new Date(T),"dd-MM-yyyy");var V=l.split("-"),R=Y.split("-");V[1].replace(/^0+/,""),V[0],R[1].replace(/^0+/,""),R[0];var O=new Date(D.setDate(h));O.setDate(O.getDate()+1);const H=(0,f.format)(new Date(O),"dd-MM-yyyy");O.setDate(O.getDate()+6);const P=(0,f.format)(new Date(O),"dd-MM-yyyy");var z=H.split("-"),j=P.split("-");z[1].replace(/^0+/,""),z[0],j[1].replace(/^0+/,""),j[0],T.setDate(T.getDate()+8);const J=(0,f.format)(new Date(T),"dd-MM-yyyy");var U=l.split("-"),q=J.split("-");U[1].replace(/^0+/,""),U[0],q[1].replace(/^0+/,""),q[0],T.setDate(T.getDate()+15);const K=(0,f.format)(new Date(T),"dd-MM-yyyy");var X=l.split("-"),$=K.split("-");X[1].replace(/^0+/,""),X[0],$[1].replace(/^0+/,""),$[0];const Q=(0,f.format)(new Date(F),"dd-MM-yyyy"),ee=(0,f.format)(new Date(A),"dd-MM-yyyy");var te=Q.split("-"),ae=ee.split("-");if(te[1].replace(/^0+/,""),te[0],ae[1].replace(/^0+/,""),ae[0],"today"===e){let e=l.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:"",[t+"Type"]:"DATE"}}if("yestar"===e){let e=s.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:"",[t+"Type"]:"DATE"}}if("tomrw"===e){let e=I.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:"",[t+"Type"]:"DATE"}}if("3day"===e){let e=n.split("-"),a=l.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:a[2]+"-"+a[1]+"-"+a[0],[t+"Type"]:"BETWEEN"}}if("next3day"===e){let e=G.split("-"),a=l.split("-");return{[t]:a[2]+"-"+a[1]+"-"+a[0],[t+"Between"]:e[2]+"-"+e[1]+"-"+e[0],[t+"Type"]:"BETWEEN"}}if("7day"===e){let e=m.split("-"),a=l.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:a[2]+"-"+a[1]+"-"+a[0],[t+"Type"]:"BETWEEN"}}if("next7day"===e){let e=Y.split("-"),a=l.split("-");return{[t]:a[2]+"-"+a[1]+"-"+a[0],[t+"Between"]:e[2]+"-"+e[1]+"-"+e[0],[t+"Type"]:"BETWEEN"}}if("15day"===e){let e=o.split("-"),a=l.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:a[2]+"-"+a[1]+"-"+a[0],[t+"Type"]:"BETWEEN"}}if("next15day"===e){let e=J.split("-"),a=l.split("-");return{[t]:a[2]+"-"+a[1]+"-"+a[0],[t+"Between"]:e[2]+"-"+e[1]+"-"+e[0],[t+"Type"]:"BETWEEN"}}if("lastweek"===e){let e=C.split("-"),t=M.split("-");return e[2],e[1],e[0],t[2],t[1],t[0],"BETWEEN"}if("nextweek"===e){let e=P.split("-"),a=H.split("-");return{[t]:a[2]+"-"+a[1]+"-"+a[0],[t+"Between"]:e[2]+"-"+e[1]+"-"+e[0],[t+"Type"]:"BETWEEN"}}if("30day"===e){let e=u.split("-"),t=l.split("-");return e[2],e[1],e[0],t[2],t[1],t[0],"BETWEEN"}if("next30day"===e){let e=K.split("-"),a=l.split("-");return{[t]:a[2]+"-"+a[1]+"-"+a[0],[t+"Between"]:e[2]+"-"+e[1]+"-"+e[0],[t+"Type"]:"BETWEEN"}}if("lastmonth"===e){let e=L.split("-"),a=x.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:a[2]+"-"+a[1]+"-"+a[0],[t+"Type"]:"BETWEEN"}}if("nextmonth"===e){let e=Q.split("-"),a=ee.split("-");return{[t]:e[2]+"-"+e[1]+"-"+e[0],[t+"Between"]:a[2]+"-"+a[1]+"-"+a[0],[t+"Type"]:"BETWEEN"}}}const b=function(e){const t=new Date,a=(0,f.format)(t,"dd-MM-yyyy");t.setDate(t.getDate()-1);const N=(0,f.format)(t,"dd-MM-yyyy");t.setDate(t.getDate()-1);const b=["All","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=(0,f.format)(t,"dd-MM-yyyy");var w=h.split("-"),M=a.split("-");const C=b[w[1].replace(/^0+/,"")]+"-"+w[0]+" - "+b[M[1].replace(/^0+/,"")]+"-"+M[0];t.setDate(t.getDate()-4);const k=(0,f.format)(t,"dd-MM-yyyy");var B=k.split("-"),L=a.split("-");const x=b[B[1].replace(/^0+/,"")]+"-"+B[0]+" - "+b[L[1].replace(/^0+/,"")]+"-"+L[0];t.setDate(t.getDate()-8);const Z=(0,f.format)(t,"dd-MM-yyyy");var S=Z.split("-"),T=a.split("-");const F=b[S[1].replace(/^0+/,"")]+"-"+S[0]+" - "+b[T[1].replace(/^0+/,"")]+"-"+T[0];t.setDate(t.getDate()-15);const A=(0,f.format)(t,"dd-MM-yyyy");var I=A.split("-"),G=a.split("-");const _=b[I[1].replace(/^0+/,"")]+"-"+I[0]+" - "+b[G[1].replace(/^0+/,"")]+"-"+G[0],W=new Date,Y=new Date(W.getFullYear(),W.getMonth()-1,1),V=new Date(W.getFullYear(),W.getMonth()-1+1,0);var R=W.getDate()-W.getDay(),O=R+6,H=new Date(W.setDate(R));H.setDate(H.getDate()-1);const P=(0,f.format)(new Date(H),"dd-MM-yyyy");H.setDate(H.getDate()-6);const z=(0,f.format)(new Date(H),"dd-MM-yyyy");var j=z.split("-"),J=P.split("-");const U=b[j[1].replace(/^0+/,"")]+"-"+j[0]+" - "+b[J[1].replace(/^0+/,"")]+"-"+J[0],q=(0,f.format)(new Date(Y),"dd-MM-yyyy"),K=(0,f.format)(new Date(V),"dd-MM-yyyy");var X=q.split("-"),$=K.split("-");const Q=b[X[1].replace(/^0+/,"")]+"-"+X[0]+" - "+b[$[1].replace(/^0+/,"")]+"-"+$[0],ee=new Date,te=new Date(ee.getFullYear(),ee.getMonth()+1,1),ae=new Date(ee.getFullYear(),ee.getMonth()+1+1,0);ee.setDate(ee.getDate()+1);const le=(0,f.format)(new Date(ee),"dd-MM-yyyy");ee.setDate(ee.getDate()+1);const se=(0,f.format)(new Date(ee),"dd-MM-yyyy");var ne=a.split("-"),ce=se.split("-");const re=b[ne[1].replace(/^0+/,"")]+"-"+ne[0]+" - "+b[ce[1].replace(/^0+/,"")]+"-"+ce[0];ee.setDate(ee.getDate()+4);const me=(0,f.format)(new Date(ee),"dd-MM-yyyy");var ie=a.split("-"),de=me.split("-");const oe=b[ie[1].replace(/^0+/,"")]+"-"+ie[0]+" - "+b[de[1].replace(/^0+/,"")]+"-"+de[0];var ye=new Date(W.setDate(O));ye.setDate(ye.getDate()+1);const pe=(0,f.format)(new Date(ye),"dd-MM-yyyy");ye.setDate(ye.getDate()+6);const ue=(0,f.format)(new Date(ye),"dd-MM-yyyy");var Ee=pe.split("-"),ge=ue.split("-");const De=b[Ee[1].replace(/^0+/,"")]+"-"+Ee[0]+" - "+b[ge[1].replace(/^0+/,"")]+"-"+ge[0];ee.setDate(ee.getDate()+8);const fe=(0,f.format)(new Date(ee),"dd-MM-yyyy");var ve=a.split("-"),Ne=fe.split("-");const be=b[ve[1].replace(/^0+/,"")]+"-"+ve[0]+" - "+b[Ne[1].replace(/^0+/,"")]+"-"+Ne[0];ee.setDate(ee.getDate()+15);const he=(0,f.format)(new Date(ee),"dd-MM-yyyy");var we=a.split("-"),Me=he.split("-");const Ce=b[we[1].replace(/^0+/,"")]+"-"+we[0]+" - "+b[Me[1].replace(/^0+/,"")]+"-"+Me[0],ke=(0,f.format)(new Date(te),"dd-MM-yyyy"),Be=(0,f.format)(new Date(ae),"dd-MM-yyyy");var Le=ke.split("-"),xe=Be.split("-");const Ze=b[Le[1].replace(/^0+/,"")]+"-"+Le[0]+" - "+b[xe[1].replace(/^0+/,"")]+"-"+xe[0],[Se,Te]=(0,l.useState)({from:null,to:null}),[Fe,Ae]=(0,l.useState)(""),[Ie,Ge]=(0,l.useState)(""),[_e,We]=(0,l.useState)(""),[Ye,Ve]=(0,l.useState)(""),[Re,Oe]=(0,l.useState)(""),[He,Pe]=(0,l.useState)(!1),[ze,je]=(0,l.useState)(!1),[Je,Ue]=(0,l.useState)(!1),[qe,Ke]=(0,l.useState)(!1),[Xe,$e]=(0,l.useState)(!0),Qe=new Date,[et,tt]=(0,l.useState)(Qe),[at,lt]=(0,l.useState)(Qe),[st,nt]=(0,l.useState)(!1),[ct,rt]=(0,l.useState)(null);function mt(t){if("today"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[0].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[0].classList.add("activedate");let t=a.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],"","DATE","today",e.fieldname),e.keyboardback()}if("yestar"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[1].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[1].classList.add("activedate");let t=N.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],"","DATE","yestar",e.fieldname),e.keyboardback()}if("tomrw"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[1].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[1].classList.add("activedate");let t=le.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],"","DATE","tomrw",e.fieldname),e.keyboardback()}if("3day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[2].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[2].classList.add("activedate");let t=h.split("-"),l=a.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],l[2]+"-"+l[1]+"-"+l[0],"BETWEEN","3day",e.fieldname),e.keyboardback()}if("next3day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[2].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[2].classList.add("activedate");let t=se.split("-"),l=a.split("-");e.SendDateVal(l[2]+"-"+l[1]+"-"+l[0],t[2]+"-"+t[1]+"-"+t[0],"BETWEEN","next3day",e.fieldname),e.keyboardback()}if("7day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[3].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[3].classList.add("activedate");let t=k.split("-"),l=a.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],l[2]+"-"+l[1]+"-"+l[0],"BETWEEN","7day",e.fieldname),e.keyboardback()}if("next7day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[3].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[3].classList.add("activedate");let t=me.split("-"),l=a.split("-");e.SendDateVal(l[2]+"-"+l[1]+"-"+l[0],t[2]+"-"+t[1]+"-"+t[0],"BETWEEN","next7day",e.fieldname),e.keyboardback()}if("15day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[4].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[4].classList.add("activedate");let t=Z.split("-"),l=a.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],l[2]+"-"+l[1]+"-"+l[0],"BETWEEN","15day",e.fieldname),e.keyboardback()}if("next15day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[4].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[4].classList.add("activedate");let t=fe.split("-"),l=a.split("-");e.SendDateVal(l[2]+"-"+l[1]+"-"+l[0],t[2]+"-"+t[1]+"-"+t[0],"BETWEEN","next15day",e.fieldname),e.keyboardback()}if("lastweek"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[5].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[5].classList.add("activedate");let t=z.split("-"),a=P.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],a[2]+"-"+a[1]+"-"+a[0],"BETWEEN","lastweek",e.fieldname),e.keyboardback()}if("nextweek"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[5].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[5].classList.add("activedate");let t=ue.split("-"),a=pe.split("-");e.SendDateVal(a[2]+"-"+a[1]+"-"+a[0],t[2]+"-"+t[1]+"-"+t[0],"BETWEEN","nextweek",e.fieldname),e.keyboardback()}if("30day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[6].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[6].classList.add("activedate");let t=A.split("-"),l=a.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],l[2]+"-"+l[1]+"-"+l[0],"BETWEEN","30day",e.fieldname),e.keyboardback()}if("next30day"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[6].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[6].classList.add("activedate");let t=he.split("-"),l=a.split("-");e.SendDateVal(l[2]+"-"+l[1]+"-"+l[0],t[2]+"-"+t[1]+"-"+t[0],"BETWEEN","next30day",e.fieldname),e.keyboardback()}if("lastmonth"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[7].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[7].classList.add("activedate");let t=q.split("-"),a=K.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],a[2]+"-"+a[1]+"-"+a[0],"BETWEEN","lastmonth",e.fieldname),e.keyboardback()}if("nextmonth"===t){for(let e=0;e<8;e++)document.getElementsByClassName("Datemrg")[e].classList.remove("activedate"),document.getElementsByClassName("Datemrg")[7].classList.add("activedate"),document.getElementsByClassName("icondate")[e].classList.remove("activedate"),document.getElementsByClassName("icondate")[7].classList.add("activedate");let t=ke.split("-"),a=Be.split("-");e.SendDateVal(t[2]+"-"+t[1]+"-"+t[0],a[2]+"-"+a[1]+"-"+a[0],"BETWEEN","nextmonth",e.fieldname),e.keyboardback()}if("range"===t&&(Pe(!0),je(!1),Ke(!1),$e(!1)),"month"===t){Pe(!1),je(!0),Ue(!1),Ke(!1),$e(!1);let e=et.getFullYear()+"-"+(et.getMonth()+1)+"-"+et.getDate();rt(t),We(e),Ve(null),Oe("MONTH")}if("monthyear"===t){Pe(!1),je(!1),Ue(!0),Ke(!1),$e(!1);let e=et.getFullYear()+"-"+(et.getMonth()+1)+"-"+et.getDate();rt(t),We(e),Ve(null),Oe("MONTHYEAR")}if("year"===t){Pe(!1),je(!1),Ue(!1),Ke(!0),$e(!1);let e=at.getFullYear()+"-"+(at.getMonth()+1)+"-"+at.getDate();rt(t),We(e),Ve(null),Oe("YEAR")}"Datetype"===t&&(Pe(!1),je(!1),Ue(!1),Ke(!1),$e(!0))}function it(e){let t=(0,f.format)(new Date(e),"yyyy-MM-dd");!0===ze&&(tt(t),We(t),Oe("MONTH")),!0===Je&&(tt(t),We(t),Oe("MONTHYEAR"))}return s().createElement(s().Fragment,null,s().createElement("div",{className:"columnHeader displayFlex"},s().createElement("div",{className:"columnFilterHeaderTitle"},s().createElement("div",{className:"displayFlex width70"},s().createElement(u.Z,{className:"columnHeaderIcon",style:{cursor:"pointer"},onClick:e.keyboardback}),s().createElement("p",{className:"columnHeaderp"},e.title)),s().createElement("div",{className:"width30",align:"right"},!Xe&&s().createElement(s().Fragment,null,s().createElement(v.Z,{className:"ColumnCloseButton",onClick:()=>{e.SendDateVal(_e,Ye,Re,ct,e.fieldname),e.keyboardback()}},s().createElement("span",{className:"ColumnCloseTitle"},"Apply"))),Xe&&s().createElement(g.Z,{className:"iconswap",onClick:()=>{nt(!1===st)}})))),s().createElement("div",{className:"FilterParentDiv"},s().createElement("div",{"data-list-scroll-container":"true"},Xe?s().createElement(y.Z,{style:{width:"calc(100% + 0px)",margin:"0px"}},s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("today")},s().createElement(m.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Today"),s().createElement("div",{className:"datelabel"},a)),st?s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("tomrw")},s().createElement(D.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Tommorow"),s().createElement("div",{className:"datelabel"},le)):s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("yestar")},s().createElement(D.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Yesterday"),s().createElement("div",{className:"datelabel"},N)),st?s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("next3day")},s().createElement(d.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Next 3 Days"),s().createElement("div",{className:"datelabel"},re)):s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("3day")},s().createElement(d.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Last 3 Days"),s().createElement("div",{className:"datelabel"},C)),st?s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("next7day")},s().createElement(o.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Next 7 Days"),s().createElement("div",{className:"datelabel"},oe)):s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("7day")},s().createElement(o.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Last 7 Days"),s().createElement("div",{className:"datelabel"},x)),st?s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("nextweek")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Next Week"),s().createElement("div",{className:"datelabel"},De)):s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("lastweek")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Last Week"),s().createElement("div",{className:"datelabel"},U)),st?s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("next15day")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Next 15 Days"),s().createElement("div",{className:"datelabel"},be)):s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("15day")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Last 15 Days"),s().createElement("div",{className:"datelabel"},F)),st?s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("next30day")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Next 30 Days"),s().createElement("div",{className:"datelabel"},Ce)):s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("30day")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Last 30 Days"),s().createElement("div",{className:"datelabel"},_)),st?s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("nextmonth")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Next Month"),s().createElement("div",{className:"datelabel"},Ze)):s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("lastmonth")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Last Month"),s().createElement("div",{className:"datelabel"},Q)),s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("month")},s().createElement(n.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Month")),s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("range")},s().createElement(i.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Range")),s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("monthyear")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Month&year")),s().createElement(p.Z,{xs:4,sm:4,md:4,className:"GridDate",onClick:()=>mt("year")},s().createElement(r.Z,{className:"icondate"}),s().createElement("div",{className:"btnDate Datemrg"},"Year"))):null,He?s().createElement("div",null,s().createElement("span",null,Fe," ",Ie?" to "+Ie:null),s().createElement(c.Calendar,{value:Se,onChange:function(e){Te(e),e?(Ae((0,f.format)(new Date(e.from&&e.from.year+"-"+e.from.month+"-"+e.from.day),"yyyy-MM-dd")),We((0,f.format)(new Date(e.from&&e.from.year+"-"+e.from.month+"-"+e.from.day),"yyyy-MM-dd")),Ge((0,f.format)(new Date(e.to&&e.to.year+"-"+e.to.month+"-"+e.to.day),"yyyy-MM-dd")),Ve((0,f.format)(new Date(e.to&&e.to.year+"-"+e.to.month+"-"+e.to.day),"yyyy-MM-dd")),Oe(e.to?"BETWEEN":"DATE")):(Ge(null),Ve(null),Oe("DATE"))},colorPrimary:"#0fbcf9",colorPrimaryLight:"rgba(75, 207, 250, 0.4)",shouldHighlightWeekends:!0})):null,Je?s().createElement(E.Z,{value:et,label:"Month & Year",change:e=>it(e),maxDate:new Date("2030-12-01"),minDate:new Date("2000-01-01"),view:["year","month"],format:"MM-yyyy",variant:"static",onErr:e=>{}}):null,ze?s().createElement(E.Z,{value:et,label:"Month",change:e=>it(e),view:["month"],format:"MM",variant:"static",onErr:e=>{}}):null,qe?s().createElement(E.Z,{value:at,label:"Year",change:e=>function(e){let t=(0,f.format)(new Date(e),"yyyy-MM-dd");lt(t),We(t),Oe("YEAR")}(e),maxDate:new Date("2030-12-01"),minDate:new Date("2000-01-01"),view:["year"],format:"yyyy",variant:"static",onErr:e=>{}}):null)))}},5109:(e,t,a)=>{a.d(t,{Z:()=>I});var l=a(92950),s=a.n(l),n=a(65589),c=a(94775),r=a(61956),m=a(51673),i=a(282),d=a(26537),o=a(66321),y=a(14602),p=a.n(y),u=a(35131),E=a.n(u),g=a(40900),D=a(868),f=a(71168),v=a.n(f),N=a(59067),b=a(52663),h=a(66856),w=a(29525),M=a(7212),C=a(66083),k=a(39803),B=a(30553),L=a(64436),x=a(96019),Z=a(63163),S=a(53854),T=a(86893),F=a(5434),A=a(6562);function I(e){const[t]=(0,l.useState)(localStorage.getItem("Language")),a=e=>"English"==t?e:Arabic[e]?Arabic[e]:e,y=(0,l.useRef)(null),u=(0,l.useRef)(null),f=(0,l.useRef)(null),[I,G]=(0,l.useState)([]),[_,W]=(0,l.useState)([]),[Y,V]=(0,l.useState)([]),[R,O]=(0,l.useState)([]),[H,P]=(0,l.useState)([]),[z,j]=(0,l.useState)([]),[J,U]=(0,l.useState)([]),[q,K]=(0,l.useState)(!0),[X,$]=(0,l.useState)(!1),[Q,ee]=(0,l.useState)({}),[te,ae]=(0,l.useState)(""),[le,se]=(0,l.useState)("varchar"),[ne,ce]=(0,l.useState)(null),[re,me]=(0,l.useState)("table"),[ie,de]=v()("");(0,l.useEffect)((()=>{fe(!1)}),[e.select]),(0,l.useEffect)((()=>{y.current.classList.add("btnListActive")}),[]);const oe=t=>"cancel"==t?($(!1),!1):te?void("save"==t&&(ve(I,Y,R,_,H),$(!1))):(e.AltMsg("Please Enter the Field Name","warning"),!1),ye=(0,n.SortableContainer)((({items:e,frmctrlid:t})=>s().createElement("div",{className:"Showcase__style__list Showcase__style__stylizedList",id:`Showcase__style_${t}`},e.map(((e,a)=>s().createElement(D.ZP,{key:a,title:"Sort",placement:"top"},s().createElement(pe,{index:a,value:e,id:t}))))))),pe=(0,n.SortableElement)((({value:t})=>s().createElement("div",null,s().createElement("div",{className:"Showcase__style__item Showcase__style__stylizedItem",id:e.frmctrlid+"_"+t.name+"_drag"},"table"==re&&s().createElement(s().Fragment,null,s().createElement(F.iVq,{style:{cursor:"grabbing",justifyContent:"space-between",marginLeft:"5px"}}),s().createElement("div",{className:""},s().createElement(N.Z,{style:{paddingLeft:"1px",marginLeft:"4px"},className:"LockIcon",id:e.frmctrlid+"_editIcon",onClick:()=>{$(!0),ee(t),ae(t.desc),se(t.fielddatatype)}})),s().createElement("span",{style:{fontSize:"0.688rem",width:"100%",paddingLeft:"5px"}},t.desc),s().createElement("div",null,s().createElement("div",{className:"",style:{}},s().createElement(A.Z,{row:!0},s().createElement(B.Z,{labelPlacement:"bottom",control:s().createElement(Z.Z,{checked:-1!==Y.indexOf(t.name),onChange:()=>{ue(t.name)}})}))))),"view"==re&&s().createElement(s().Fragment,null,s().createElement("span",{style:{fontSize:"0.688rem",width:"100%",paddingLeft:"5px"}},t.desc),s().createElement("div",null,s().createElement("div",{className:"",style:{}},s().createElement(A.Z,{row:!0},s().createElement(B.Z,{labelPlacement:"bottom",control:s().createElement(Z.Z,{checked:-1!==R.indexOf(t.name),onChange:()=>Ee(t.name)})}))))),"filter"==re&&s().createElement(s().Fragment,null,s().createElement("span",{style:{fontSize:"0.688rem",width:"100%",paddingLeft:"5px"}},t.desc),s().createElement("div",null,s().createElement("div",{className:"",style:{}},s().createElement(A.Z,{row:!0},s().createElement(B.Z,{labelPlacement:"bottom",control:s().createElement(Z.Z,{checked:-1!==H.indexOf(t.name),onChange:()=>{ge(t.name)}})}))))))))),ue=e=>{const t=Y.indexOf(e),a=[...Y];-1===t?a.push(e):a.splice(t,1),V(a)},Ee=e=>{const t=R.indexOf(e),a=[...R];-1===t?a.push(e):a.splice(t,1),O(a)},ge=e=>{const t=H.indexOf(e),a=[...H];-1===t?a.push(e):a.splice(t,1),P(a)};function De(e,t,a){return e.sort((function(e,l){var s=e[a],n=l[a];return t.indexOf(s)>t.indexOf(n)?1:-1})),e}function fe(t){e.loading(!0);const a=g.v.Api+"FP20S3/",l={data:{p1:null,p2:null,p3:null,p4:null,p5:e.userGridViewFormID,p6:null,p7:null,p8:null,p9:null,p10:null,p11:null,p12:null,p13:null,p14:null,p15:null,p16:null,p17:null,p18:null,p19:null,p20:null,p21:null,p22:null,p23:null,p24:null,p25:1,p26:10,p27:"AdminUserGridViewID",p28:null,p29:null,p30:Number(localStorage.getItem("UserGroupID")),p31:Number(localStorage.getItem("userid"))}};(0,d.Z)(0).then((s=>{(0,m.Z)(a,l,s).then((a=>{try{let l="";if(l=a.Output.status?a.Output.status.code:a.Output.message.code,"200"==l){const l=a.Output.data;let s=[],n=[],c=[],r=[],m=[],i=[];l.map(((e,t)=>{s.push({id:parseInt(e.AdminUserGridViewIDPK),name:e.FieldName,desc:e.FieldDescription,visible:e.IsVisible,apptoview:e.IsApplyToView,order:e.FieldOrder,fieldwidth:e.FieldWidth,fielddisplay:e.FieldDisplay,active:e.IsActive,fielddatatype:e.FieldDataType,GroupID:e.GroupID,GroupName:e.GroupName,IsForeign:e.IsForeign,IsDraft:e.IsDraft,Remarks:e.Remarks}),n.push({name:e.FieldName,desc:e.FieldDescription,active:e.IsActive,fielddatatype:e.FieldDataType}),"1"==e.IsVisible&&r.push(e.FieldName),"1"==e.IsApplyToView&&m.push(e.FieldName),"1"==e.IsDraft&&i.push(e.FieldName)})),G(n),W(s.filter((e=>e.visible))?.sort(((e,t)=>Number(e.Remarks)-Number(t.Remarks)))),U(c),V(r),O(m),P(i),j(s),e.loading(!1),t&&e.saved(!0,a.Output.data)}else e.AltMsg(a.Output.error,"error"),e.loading(!1)}catch(t){e.AltMsg(t.message,"error"),e.loading(!1)}}))}))}function ve(t,l,s,n,c){const m=g.v.Api+"FP20S1/";let i=[],o=[],y=[],p=[],u=[],D=[],f=[],v=[],N=[];t.map((e=>{l.includes(e.name)&&i.push(e.name)})),n.map((e=>{l.includes(e.name)&&o.push(e.name)})),z.map((e=>{l.includes(e.name)?(e.visible=1,y.push(e)):(e.visible=0,p.push(e)),c.includes(e.name)?(e.IsDraft=1,u.push(e)):(e.IsDraft=0,D.push(e))})),y=De(y,i,"name"),[...y,...p].map(((e,t)=>{e.order=t+1,s.includes(e.name)?e.apptoview=1:e.apptoview=0,v.push(e)})),u=De(u,o,"name"),[...u,...D].map(((e,t)=>{e.Remarks=t+1,N.push(e)}));const b=N.map((e=>{const t=v.find((({id:t})=>t===e.id));return t?{...e,...t}:e}));if(0===i.length)return e.AltMsg("Please Select Column","warning"),!1;{if(X&&!te.trim())return e.AltMsg("Please Enter the Field Name","warning"),$(!0),!1;b.map((t=>{let a={p1:t.id,p2:t.name,p3:t.desc?t.desc.trim():t.desc,p4:Number(localStorage.getItem("userid")),p5:Number(e.userGridViewFormID),p6:t.GroupID,p7:t.GroupName,p8:t.apptoview,p9:t.IsForeign,p10:t.visible,p11:Number(t.order),p12:Number(t.fieldwidth),p13:t.fielddisplay,p14:null,p15:t.fielddatatype,p16:t.IsDraft,p17:t.Remarks,p18:!0,p19:!1,p20:Number(localStorage.getItem("userid")),p21:E()().format("YYYY-MM-DD hh:mm:ss"),p22:Number(localStorage.getItem("userid")),p23:E()().format("YYYY-MM-DD hh:mm:ss")};f.push(a)})),e.loading(!0);const t={data:f};(0,d.Z)(0).then((l=>{(0,r.Z)(m,t,l).then((t=>{const l=t[0].status;t[0].error,200==l.code?(fe(!0),e.loading(!1),e.AltMsg(a("Applied"),"success"),de(Number(e.userGridViewFormID))):e.saved(!1)}))}))}}const Ne=(e,t)=>{"fieldname"==t?ae(e.target.value):se(e);let a=z.filter((e=>e.name==Q.name));var l=new Object;l={id:a[0].id,name:a[0].name,desc:"fieldname"==t?e.target.value:a[0].desc,visible:a[0].visible,order:a[0].order,fieldwidth:a[0].fieldwidth,fielddisplay:a[0].fielddisplay,active:a[0].active,fielddatatype:"fieldalign"==t?e:a[0].fielddatatype,GroupID:a[0].GroupID,GroupName:a[0].GroupName,IsForeign:a[0].IsForeign,IsDraft:a[0].IsDraft,Remarks:a[0].Remarks};const s=[...z],n=s.findIndex((e=>e.name==Q.name)),c=s[n];s.splice(n,1,{...c,...l}),j(s)};return s().createElement("div",{className:"columnDiv"},s().createElement("div",{className:"columnHeader displayFlex"},s().createElement("div",{className:"columnHeaderTitle"},s().createElement(o.Z,{className:"columnHeaderIcon"}),s().createElement("p",{className:"columnHeaderp"},a("Manage Column"))),s().createElement("div",{className:"columnHeaderbtn",align:"right"},s().createElement(i.Z,{className:"ColumnApplyButton",startIcon:s().createElement(c.Z,{className:"ColumnApplyIcon"}),onClick:()=>ve(I,Y,R,_,H),id:e.frmctrlid+"_clmnApply"},s().createElement("span",{className:"ColumnApplyTitle"},a("Apply"))))),s().createElement("div",null,s().createElement("div",{style:{display:"flex",alignItem:"center",margin:"5px",justifyContent:"center"}},s().createElement("div",{className:"b2",id:"button-11",style:{background:"lightgray"}},s().createElement("div",{className:"btnList",ref:y,id:e.frmctrlid+"table",style:{borderTopRightRadius:"4px",borderBottomRightRadius:"4px",cursor:"pointer"},onClick:()=>{me("table"),y.current.classList.add("btnListActive"),u.current.classList.remove("btnListActive"),f.current.classList.remove("btnListActive")}},s().createElement("span",{style:{fontSize:"14px",color:"#14181F"}},s().createElement(T.aCJ,null)),s().createElement("span",null,a("Table"))),s().createElement("div",{className:"btnList",ref:u,id:e.frmctrlid+"display",onClick:()=>{me("view"),y.current.classList.remove("btnListActive"),u.current.classList.add("btnListActive"),f.current.classList.remove("btnListActive")},style:{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px",cursor:"pointer"}},s().createElement("span",{style:{fontSize:"14px",color:"#14181F"}},s().createElement(S.umT,null)),s().createElement("span",null,a("Display"))),s().createElement("div",{className:"btnList",ref:f,id:e.frmctrlid+"filter",onClick:()=>{me("filter"),y.current.classList.remove("btnListActive"),u.current.classList.remove("btnListActive"),f.current.classList.add("btnListActive")},style:{borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px",cursor:"pointer"}},s().createElement("span",{style:{fontSize:"14px",color:"#14181F"}},s().createElement(S.umT,null)),s().createElement("span",null,a("Filter"))))),s().createElement(ye,{distance:1,lockAxis:"y",items:"filter"==re?_:I,onSortEnd:({oldIndex:e,newIndex:t})=>{if("view"==re)return!1;K(!1),"filter"==re?W(p()(_,e,t)):G(p()(I,e,t))},frmctrlid:e.frmctrlid+"_sortable"})),s().createElement(b.Z,{open:X,onClose:oe,"aria-labelledby":"form-dialog-title"},s().createElement(C.Z,{id:"form-dialog-title"},a("Change Header Name")),s().createElement(w.Z,null,s().createElement(M.Z,null,a("please enter your header name here"),"."),s().createElement(k.Z,{autoFocus:!0,margin:"dense",id:e.frmctrlid+"_textfld",label:a("Field Name"),type:"text",fullWidth:!0,value:te,onChange:e=>{ce(null),Ne(e,"fieldname")},helperText:ne}),"bit"!=Q.fielddatatype&&s().createElement(L.Z,{component:"fieldset"},s().createElement(x.Z,{component:"legend",style:{width:"auto",paddingBottom:"5px"}},a("Field Align")),s().createElement("div",{className:"fradio"},s().createElement("label",{className:"radiocontainer",style:{marginBottom:"10px"}},a("Left"),s().createElement("input",{id:e.frmctrlid+"_left",type:"radio",value:le,checked:"varchar"===le,onChange:e=>Ne("varchar","fieldalign")}),s().createElement("span",{className:"radiomark"})),s().createElement("label",{className:"radiocontainer"},a("Right"),s().createElement("input",{id:e.frmctrlid+"_right",type:"radio",value:le,checked:"int"===le,onChange:e=>Ne("int","fieldalign")}),s().createElement("span",{className:"radiomark"}))))),s().createElement(h.Z,null,s().createElement(i.Z,{id:e.frmctrlid+"_cancel",onClick:()=>oe("cancel"),color:"primary"},a("Cancel")),s().createElement(i.Z,{id:e.frmctrlid+"_save",onClick:()=>oe("save"),color:"primary"},a("Update")))))}},94986:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(92950),s=a.n(l),n=a(79895),c=a(82302),r=a(99613),m=a(88222),i=a(56847),d=a(83750),o=a(57394);function y(e){const[t,a]=(0,l.useState)([]),[y,p]=(0,l.useState)([]);return(0,l.useEffect)((()=>{if(e.data.length>0){let t=Object.keys(e.data[0]);a(t),p(e.data)}}),[e]),s().createElement(i.Z,{component:n.Z,className:"TableScrollContainer scrollY"},s().createElement(c.Z,{stickyHeader:!0,id:e.id},s().createElement(d.Z,null,s().createElement(o.Z,null,t.map(((e,t)=>s().createElement(m.Z,{className:"StyledTableCellHeadStyles listColor",key:t,style:{minWidth:"auto",whiteSpace:"nowrap"}},s().createElement("span",{style:{color:"#3873bb",fontWeight:"600",minWidth:"fit-content"}},e)))))),s().createElement(r.Z,null,y.map(((e,a)=>s().createElement(o.Z,{key:"body"+a},t.map(((t,a)=>s().createElement(m.Z,{className:"StyledTableCellBodyStyles",key:a,style:{minWidth:"auto",whiteSpace:"nowrap"}},!0===e[t]||!1===e[t]?!0===e[t]?1:0:e[t])))))))))}},63163:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(92950),s=a.n(l),n=a(93379),c=a.n(n),r=a(7795),m=a.n(r),i=a(90569),d=a.n(i),o=a(3565),y=a.n(o),p=a(19216),u=a.n(p),E=a(44589),g=a.n(E),D=a(89177),f={};f.styleTagTransform=g(),f.setAttributes=y(),f.insert=d().bind(null,"head"),f.domAPI=m(),f.insertStyleElement=u(),c()(D.Z,f),D.Z&&D.Z.locals&&D.Z.locals;const v=function(e){const[t,a]=(0,l.useState)(e.checked);return(0,l.useEffect)((()=>{a(e.checked)}),[e.checked]),s().createElement("label",{className:"toggle-switch"},s().createElement("input",{type:"checkbox",checked:t,onChange:l=>{a(t),e.onChange(l)},frmctrlid:e.frmctrlid,frmctrlidname:e.frmctrlidname,fieldorder:e.fieldorder,tfLabel:e.tfLabel}),s().createElement("span",{className:"switch"}))}},89177:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(23645),s=a.n(l)()((function(e){return e[1]}));s.push([e.id,'.toggle-switch {\n    position: relative;\n    display: inline-block;\n    width: 36px;\n    height: 18px;\n  }\n  \n  .toggle-switch input[type="checkbox"] {\n    display: none;\n  }\n  \n  .toggle-switch .switch {\n    position: absolute;\n    cursor: pointer;\n    background-color: #ccc;\n    border-radius: 25px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transition: background-color 0.2s ease;\n  }\n  \n  .toggle-switch .switch::before {\n    position: absolute;\n    content: "";\n    left: 3px;\n    top: 3px;\n    width: 12px;\n    height: 12px;\n    background-color: #fff;\n    border-radius: 50%;\n    transition: transform 0.3s ease;\n  }\n  \n  .toggle-switch input[type="checkbox"]:checked + .switch::before {\n    transform: translateX(18px);\n    background-color: #fff;\n  }\n  \n  .toggle-switch input[type="checkbox"]:checked + .switch {\n    background-color: var(--BGButton);\n  }\n  ',""]);const n=s}}]);