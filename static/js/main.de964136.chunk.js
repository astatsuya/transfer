(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},29:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=a(5);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(36),m=a(37),u=function(e){return{addInfo:function(t){return e(function(e){return{type:"ADD_INFO",info:e}}(t))},updateForm:function(t){return e(function(e){return{type:"AUPDATE_FORM",object:e.name,value:e.value}}(t))},alertForm:function(t){return e(function(e){return{type:"ALERT_FORM",nameEmpty:e.nameEmpty,nameAlertColor:e.nameAlertColor,wrongArrival:e.wrongArrival,arrivalAlertColor:e.arrivalAlertColor}}(t))},clearForm:function(){return e({type:"CLEAR_FORM"})},sortTable:function(t,a){return e(function(e,t){return{type:"SORT_TABLE",sortCase:e,order:t}}(t,a))},changeForm:function(t){return e(function(e){return{type:"CHANGE_FORM",name:e.name,value:e.value}}(t))}}},s=function(e){return{formContents:e.updateForm.formContents,columns:e.addInfo.columns,searchForm:e.searchForm.searchForm,sortedInfo:function(e,t){switch(t.sortCase){case"ID":return"asc"===t.order?e.sort(function(e,t){return e.id-t.id}):e.sort(function(e,t){return t.id-e.id});case"Name":return e.sort(function(e,a){var n=e.name.toUpperCase(),r=a.name.toUpperCase();return"asc"===t.order?n<r?-1:n>r?1:0:"desc"===t.order?n>r?-1:n<r?1:0:0});case"Age":return"asc"===t.order?e.sort(function(e,t){return e.age-t.age}):e.sort(function(e,t){return t.age-e.age});case"Gender":return e.sort(function(e,a){var n=e.gender.toUpperCase(),r=a.gender.toUpperCase();return"asc"===t.order?n<r?-1:n>r?1:0:"desc"===t.order?n>r?-1:n<r?1:0:0});case"Department":return e.sort(function(e,a){var n=e.department.toUpperCase(),r=a.department.toUpperCase();return"asc"===t.order?n<r?-1:n>r?1:0:"desc"===t.order?n>r?-1:n<r?1:0:0});case"Position":return e.sort(function(e,a){var n=e.position.toUpperCase(),r=a.position.toUpperCase();return"asc"===t.order?n<r?-1:n>r?1:0:"desc"===t.order?n>r?-1:n<r?1:0:0});case"Arrival":return"asc"===t.order?e.sort(function(e,t){return e.arrival-t.arrival}):e.sort(function(e,t){return t.arrival-e.arrival});case"Leave":return"asc"===t.order?e.sort(function(e,t){return e.leave-t.leave}):e.sort(function(e,t){return t.leave-e.leave});case"Location":return e.sort(function(e,a){var n=e.location.toUpperCase(),r=a.location.toUpperCase();return"asc"===t.order?n<r?-1:n>r?1:0:"desc"===t.order?n>r?-1:n<r?1:0:0});default:return e}}(e.addInfo.info,e.sortTable),info:e.addInfo.info,state:e}},d=Object(c.b)(s,u)(function(e){var t=e.formContents,a=e.addInfo,n=e.updateForm,o=e.alertForm,l=e.clearForm,c=t.name,i=t.age,m=t.gender,u=t.department,s=t.position,d=t.arrival,p=t.leave,E=t.location,v=t.nameEmpty,f=t.wrongArrival,g=t.nameAlertColor,b=t.arrivalAlertColor,h=t.id,O=function(e){var t,a=e.target,r=a.name;t="number"===a.type?parseInt(e.target.value,10):e.target.value,n({name:r,value:t})};return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),""===c?o({nameEmpty:"Put in your Name",nameAlertColor:"red",wrongArrival:"",arrivalAlertColor:""}):d>p?o({wrongArrival:"Should be earlier than Leaving",arrivalAlertColor:"red",nameEmpty:"",nameAlertColor:""}):(n({name:"id",value:h+=1}),a({id:h,name:c,age:i,gender:m,department:u,position:s,arrival:d,leave:p,location:E}),l())}},r.a.createElement("label",{htmlFor:"name",style:{backgroundColor:g}},"Name",r.a.createElement("br",null),v,r.a.createElement("input",{type:"text",name:"name",id:"name",value:c,onChange:O,style:{backgroundColor:g}})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"age"},"Age",r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"age",id:"age",value:i,onChange:O})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"gender"}," ",r.a.createElement("br",null),r.a.createElement("select",{id:"gender",name:"gender",onChange:O,value:m},r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"department"}," ","Department",r.a.createElement("br",null),r.a.createElement("select",{id:"department",name:"department",onChange:O,value:u},r.a.createElement("option",{value:"Marketing"},"Marketing"),r.a.createElement("option",{value:"Engineering"},"Engineering"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"position"}," ","Position",r.a.createElement("br",null),r.a.createElement("select",{id:"position",name:"position",onChange:O,value:s},r.a.createElement("option",{value:"Director"},"Director"),r.a.createElement("option",{value:"Manager"},"Manager"),r.a.createElement("option",{value:"Chief"},"Chief"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"arrival",style:{backgroundColor:b}},"Arrival",r.a.createElement("br",null),f,r.a.createElement("input",{type:"number",id:"arrival",name:"arrival",value:d,onChange:O,style:{backgroundColor:b}})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"leave"},"Leaving",r.a.createElement("br",null),r.a.createElement("input",{type:"number",id:"leave",name:"leave",value:p,onChange:O})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"location"}," ","Location",r.a.createElement("br",null),r.a.createElement("select",{id:"location",name:"location",onChange:O,value:E},r.a.createElement("option",{value:"Tokyo"},"Tokyo"),r.a.createElement("option",{value:"Osaka"},"Osaka"),r.a.createElement("option",{value:"OverSeas"},"OverSeas"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"Send"},"Submit"),r.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),l()}},"Reset"))}),p=Object(c.b)(s,u)(function(e){var t=e.columns,a=e.sortedInfo,n=e.sortTable;return r.a.createElement("table",{className:"database"},r.a.createElement("tbody",null,r.a.createElement("tr",{key:"ascStr",style:{border:"none"}},t.map(function(e){return r.a.createElement("td",{key:"asc".concat(e),style:{border:"none"}},r.a.createElement("button",{type:"button",style:{width:40},onClick:function(){return n(e,"asc")}},"\u2193"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",style:{width:40},onClick:function(){return n(e,"desc")}},"\u2191"))})),r.a.createElement("tr",{key:"columnStr"},t.map(function(e){return r.a.createElement("th",{key:"columnsth".concat(e)},e)})),a.map(function(e){return r.a.createElement("tr",{key:"tr".concat(e.id)},r.a.createElement("td",{key:"id".concat(e.id)},e.id+1),r.a.createElement("td",{key:"name".concat(e.id)},e.name),r.a.createElement("td",{key:"age".concat(e.id)},e.age),r.a.createElement("td",{key:"gender".concat(e.id)},e.gender),r.a.createElement("td",{key:"department".concat(e.id)},e.department),r.a.createElement("td",{key:"position".concat(e.id)},e.position),r.a.createElement("td",{key:"arrival".concat(e.id)},e.arrival),r.a.createElement("td",{key:"leave".concat(e.id)},e.leave),r.a.createElement("td",{key:"location".concat(e.id)},e.location))})))}),E=Object(c.b)(s)(function(e){var t=e.info,a=e.searchForm,n=function(e){return e.reduce(function(e,t){return e+t},0)},o=function(e){return e.reduce(function(){return e.length},0)},l=t.filter(function(e){for(var t=Object.keys(a),n=0;n<Object.keys(a).length;n+=1)if("all"!==a[t[n]]&&e[t[n]]!==a[t[n]])return!1;return!0}),c=l.map(function(e){return e.leave-e.arrival}),i=l.map(function(e){return e.position}),m=t.map(function(e){return e.leave-e.arrival}),u=t.map(function(e){return e.name}),s=t.map(function(e){return e.location}),d=o(u),p=n(m)/d?(n(m)/d).toFixed(1):0,E=o(i),v=n(c)/E?(n(c)/E).toFixed(1):0,f=l.map(function(e){return e.location});return r.a.createElement("div",{className:"searchresult"},"\u5168\u4eba\u6570 :"," ",d,"\u4eba",r.a.createElement("br",null),"\u7570\u52d5\u307e\u3067\u306e\u5e73\u5747\u5e74\u6570(\u5168\u4f53) :"," ",p,"\u5e74",r.a.createElement("br",null),"\u7570\u52d5\u5148(\u5168\u4f53)"," ",function(){var e=s.filter(function(e){return"Tokyo"===e}).length,t=s.filter(function(e){return"Osaka"===e}).length,a=s.filter(function(e){return"OverSeas"===e}).length,n=s.filter(function(e){return"Others"===e}).length;return"\u6771\u4eac: ".concat(e,"\u4eba\n            \u5927\u962a: ").concat(t,"\u4eba\n            \u6d77\u5916: ").concat(a,"\u4eba\n            \u305d\u306e\u4ed6: ").concat(n,"\u4eba")}(),r.a.createElement("br",null),r.a.createElement("br",null),"\u8a72\u5f53\u8005\u6570 :"," ",E,"\u4eba",r.a.createElement("br",null),"\u7570\u52d5\u307e\u3067\u306e\u5e73\u5747\u5e74\u6570(\u8a72\u5f53\u8005) :"," ",v,"\u5e74",r.a.createElement("br",null),"\u7570\u52d5\u5148(\u8a72\u5f53\u8005)"," ",function(){var e=f.filter(function(e){return"Tokyo"===e}).length,t=f.filter(function(e){return"Osaka"===e}).length,a=f.filter(function(e){return"OverSeas"===e}).length,n=f.filter(function(e){return"Others"===e}).length;return"\u6771\u4eac: ".concat(e,"\u4eba\n            \u5927\u962a: ").concat(t,"\u4eba\n            \u6d77\u5916: ").concat(a,"\u4eba\n            \u305d\u306e\u4ed6: ").concat(n,"\u4eba")}(),r.a.createElement("br",null))}),v=Object(c.b)(s,u)(function(e){var t=e.searchForm,a=e.changeForm,n=t.gender,o=t.department,l=t.position,c=t.location,i=function(e){var t=e.target,n=t.value,r=t.name;a({name:r,value:n})};return r.a.createElement("form",{className:"searchform"},r.a.createElement("label",{htmlFor:"gender"}," ","Gender:",r.a.createElement("select",{id:"gender",name:"gender",onChange:i,value:n},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"department"}," ","Department:",r.a.createElement("select",{id:"department",name:"department",onChange:i,value:o},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Marketing"},"Marketing"),r.a.createElement("option",{value:"Engineering"},"Engineering"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"position"}," ","Position:",r.a.createElement("select",{id:"position",name:"position",onChange:i,value:l},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Director"},"Director"),r.a.createElement("option",{value:"Manager"},"Manager"),r.a.createElement("option",{value:"Chief"},"Chief"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"location"}," ","Location:",r.a.createElement("select",{id:"location",name:"location",onChange:i,value:c},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Tokyo"},"Tokyo"),r.a.createElement("option",{value:"Osaka"},"Osaka"),r.a.createElement("option",{value:"OverSeas"},"OverSeas"),r.a.createElement("option",{value:"Others"},"Others"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E,{gender:n,department:o,position:l,location:c}),r.a.createElement("br",null))}),f=a(35),g=function(){return r.a.createElement("div",{className:"pagecontents"},r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(f.a,{to:"/search/"},"\u60c5\u5831\u691c\u7d22"),"\u304b\u3089\u6761\u4ef6\u3092\u6307\u5b9a\u3057\u3066\u7570\u52d5\u72b6\u6cc1\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),r.a.createElement("p",null,r.a.createElement(f.a,{to:"/database/"},"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"),"\u3067\u5168\u3066\u306e\u30ea\u30b9\u30c8\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"\u203b\u60c5\u5831\u5165\u529b\u3092\u3055\u308c\u3066\u3044\u306a\u3044\u65b9\u306f",r.a.createElement(f.a,{to:"/form/"},"\u60c5\u5831\u5165\u529b\u30da\u30fc\u30b8"),"\u304b\u3089\u5165\u529b\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),r.a.createElement("br",null))},b=function(e){var t=e.buttonName;return r.a.createElement("button",{className:"link-button",type:"button"},t)},h=function(){return r.a.createElement("div",{className:"topbar"},r.a.createElement("h3",null,"\u793e\u54e1\u30c7\u30fc\u30bf"),r.a.createElement(f.a,{to:"".concat("/transfer","/")},r.a.createElement(b,{buttonName:"\u30c8\u30c3\u30d7"})),r.a.createElement(f.a,{to:"/form/"},r.a.createElement(b,{buttonName:"\u60c5\u5831\u5165\u529b"})),r.a.createElement(f.a,{to:"/search/"},r.a.createElement(b,{buttonName:"\u60c5\u5831\u691c\u7d22"})),r.a.createElement(f.a,{to:"/database/"},r.a.createElement(b,{buttonName:"\u767b\u9332\u30c7\u30fc\u30bf"})))},O=(a(31),function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"main-page"},r.a.createElement(h,null),r.a.createElement(m.a,{path:"".concat("/transfer","/"),exact:!0,component:g}),r.a.createElement(m.a,{path:"".concat("/transfer","/form"),component:d}),r.a.createElement(m.a,{path:"".concat("/transfer","/search"),component:v}),r.a.createElement(m.a,{path:"".concat("/transfer","/dataBase"),component:p})))}),C=a(7),y=a(18),k=a(8),A=a(4),F={searchForm:{gender:"all",department:"all",position:"all",location:"all"},formContents:{id:4,name:"",age:30,arrival:2010,leave:2010,gender:"Male",department:"Marketing",position:"Director",location:"Tokyo",nameEmpty:"",nameAlertColor:"",wrongArrival:"",arrivalAlertColor:""},columns:["ID","Name","Age","Gender","Department","Position","Arrival","Leave","Location"],info:[{id:0,name:"Tom",age:42,gender:"Male",department:"Marketing",position:"Manager",arrival:2015,leave:2017,location:"Tokyo"},{id:1,name:"Bob",age:33,gender:"Male",department:"Marketing",position:"Chief",arrival:2013,leave:2019,location:"Osaka"},{id:2,name:"Josephine",age:45,gender:"Female",department:"Engineering",position:"Others",arrival:2015,leave:2020,location:"OverSeas"},{id:3,name:"Linda",age:49,gender:"Others",department:"Others",position:"Director",arrival:2015,leave:2022,location:"Others"},{id:4,name:"Taro",age:22,gender:"Others",department:"Engineering",position:"Others",arrival:2018,leave:2029,location:"Osaka"}]},w=Object(C.b)({addInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INFO":return Object(A.a)({},e,{info:Object(y.a)(e.info).concat([t.info])});default:return e}},updateForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUPDATE_FORM":return Object(A.a)({},e,{formContents:Object(A.a)({},e.formContents,Object(k.a)({},t.object,t.value))});case"ALERT_FORM":return Object(A.a)({},e,{formContents:Object(A.a)({},e.formContents,{nameEmpty:t.nameEmpty,nameAlertColor:t.nameAlertColor,wrongArrival:t.wrongArrival,arrivalAlertColor:t.arrivalAlertColor})});case"CLEAR_FORM":return Object(A.a)({},e,{formContents:Object(A.a)({},e.formContents,{name:"",age:30,arrival:2010,leave:2010,gender:"Male",department:"Marketing",position:"Director",location:"Tokyo",nameEmpty:"",nameAlertColor:"",wrongArrival:"",arrivalAlertColor:""})});default:return e}},sortTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sortCase:"ID",order:"asc"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_TABLE":return Object(A.a)({},e.sortTable,{sortCase:t.sortCase,order:t.order});default:return e}},searchForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FORM":return Object(A.a)({},e,{searchForm:Object(A.a)({},e.searchForm,Object(k.a)({},t.name,t.value))});default:return e}}}),M=Object(C.c)(w);window.store=M,M.subscribe(function(){return console.log(M.getState().searchForm.searchForm)}),l.a.render(r.a.createElement(c.a,{store:M},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.de964136.chunk.js.map