(this["webpackJsonpcontaminacio-cat"]=this["webpackJsonpcontaminacio-cat"]||[]).push([[0],{21:function(e,t,n){e.exports={table:"TableMonthHour_table__1pQAj",row:"TableMonthHour_row__1V9aJ",header:"TableMonthHour_header__3KzZq",cell:"TableMonthHour_cell__2Rx8e"}},52:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),u=n.n(c),o=(n(51),n(29)),i=(n(52),n(66)),s=n(67),h=n(68),l=n(69),j=n(70),b=n(1);function f(e){var t=e.to,n=e.children;return Object(b.jsx)(o.b,{className:"nav-link",to:t,children:n})}function v(e){var t=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{bg:"primary",children:Object(b.jsx)(j.a,{children:Object(b.jsx)(f,{to:"/",children:"Contaminacio-Cat"})})}),t]})}var O=n(6),d=O.c,p=n(18),x=["h01","h02","h03","h04","h05","h06","h07","h08","h09","h10","h11","h12","h13","h14","h15","h16","h17","h18","h19","h20","h21","h22","h23","h24"];function m(e){return e.filters}var y=Object(p.a)((function(e){return e.history}),m,(function(e,t){var n=e,r=t.years,a=t.weekdays;return n=(n=n.filter((function(e){return r[e.year-2010]}))).filter((function(e){return a[e.dayOfTheWeek]}))})),g=Object(p.a)(y,(function(e){for(var t=[],n=0;n<24;n+=1){t[n]=[];for(var r=0;r<12;r+=1)t[n][r]={count:0,sum:0}}return e.forEach((function(e){var n=e.month-1;x.forEach((function(r,a){var c,u;c=t[a][n],u=e[r],c.count+=1,c.sum+=u}))})),t}));var k=Object(p.a)(g,(function(e){return e.map((function(e){return e.map((function(e){var t=e.count,n=e.sum;return t?Math.floor(n/t):null}))}))})),w=n(22),N=[].concat(Object(w.a)(T([0,255,0],[225,225,0],20)),Object(w.a)(T([225,225,0],[255,0,0],20)),Object(w.a)(T([255,0,0],[225,0,225],20)),Object(w.a)(T([225,0,225],[64,0,64],20)));function C(e,t){return null==t?"rgb(255,255,255)":(t>e.length&&(t=e.length-1),t<0&&(t=0),e[t=Math.floor(t)])}function T(e,t,n){for(var r=[],a=0;a<n;a++){var c=a/n,u=1-c;r.push("rgb(".concat(Math.floor(e[0]*u+t[0]*c),",").concat(Math.floor(e[1]*u+t[1]*c),",").concat(Math.floor(e[2]*u+t[2]*c),")"))}return r}var _=n(21),M=n.n(_),A=["gen","feb","ma\xe7","abr","mag","jun","jul","ago","set","oct","nov","dec"];function D(){var e=d(k);return Object(b.jsxs)("table",{className:M.a.table,children:[Object(b.jsx)(E,{}),x.map((function(t,n){return Object(b.jsx)(I,{hour:t,hourIndex:n,table:e},t)}))]})}function E(){return Object(b.jsxs)(S,{className:M.a.header,children:[Object(b.jsx)(H,{}),A.map((function(e,t){return Object(b.jsx)(H,{children:e},t)}))]})}function I(e){var t=e.hour,n=e.hourIndex,r=e.table;return Object(b.jsxs)(S,{children:[Object(b.jsx)(H,{children:t}),A.map((function(e,t){return Object(b.jsx)(H,{value:r[n][t],children:r[n][t]},t)}))]})}function S(e){var t=e.className,n=e.children;return Object(b.jsx)("div",{className:"".concat(M.a.row," ").concat(t),children:n})}function H(e){var t=e.children,n=e.value;return Object(b.jsx)("div",{className:M.a.cell,style:{backgroundColor:C(N,n)},children:t})}var G=n(64),B=n(65);function F(e){return e.sources}var P="sources/ESTACIO_CHANGED",R="sources/CONTAMINANT_CHANGED";var L=["NO","NO2","NOX","O3","PM10","H2S","SO2"];function Y(){var e=d(F).contaminant;return Object(b.jsx)(G.a,{children:L.map((function(t){return Object(b.jsx)(W,{name:t,current:e},t)}))})}function W(e){var t=e.name,n=e.current,a=Object(O.b)(),c=Object(r.useCallback)((function(){return a({type:R,value:t})}),[t]);return Object(b.jsx)(B.a,{active:t===n,onClick:c,children:t})}var J=n(71),$=["Barber\xe0 del Vall\xe8s","Barcelona (Poblenou)","Badalona","Manresa","Martorell","Rub\xed","Santa Perp\xe8tua de Mogoda","Sort"];function K(){var e=d(F).estacio;return Object(b.jsx)(J.a,{children:$.map((function(t){return Object(b.jsx)(V,{name:t,current:e},t)}))})}function V(e){var t=e.name,n=e.current,a=Object(O.b)(),c=Object(r.useCallback)((function(){return a({type:P,value:t})}),[t]);return Object(b.jsx)(J.a.Item,{action:!0,active:t===n,onClick:c,children:t})}var q="filters/WEEKDAY_TOGGLED",z="filters/YEAR_TOGGLED";var Q=["","dll","dm","dx","dj","dv","ds","dg"];function X(){var e=d(m).weekdays;return Object(b.jsx)(G.a,{children:Q.map((function(t,n){return t&&Object(b.jsx)(Z,{name:t,value:n,active:e[n]},t)}))})}function Z(e){var t=e.name,n=e.value,a=e.active,c=Object(O.b)(),u=Object(r.useCallback)((function(){return c(function(e){return{type:q,value:e}}(n))}),[n,c]);return Object(b.jsx)(B.a,{active:a,onClick:u,children:t})}var U=new Array(12).fill(2010).map((function(e,t){return e+t}));function ee(){var e=d(m).years;return Object(b.jsx)(G.a,{children:U.map((function(t,n){return t&&Object(b.jsx)(te,{name:t,value:n,active:e[n]},t)}))})}function te(e){var t=e.name,n=e.value,a=e.active,c=Object(O.b)(),u=Object(r.useCallback)((function(){return c(function(e){return{type:z,value:e}}(n))}),[n,c]);return Object(b.jsx)(B.a,{active:a,onClick:u,children:t})}var ne=function(){return Object(b.jsxs)(v,{children:[Object(b.jsx)("br",{}),Object(b.jsx)(i.a,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsxs)(h.a,{children:[Object(b.jsx)(D,{}),Object(b.jsx)("br",{}),Object(b.jsx)(Y,{}),Object(b.jsx)(X,{}),Object(b.jsx)(ee,{})]}),Object(b.jsx)(h.a,{children:Object(b.jsx)(K,{})})]})})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)}))},ae=n(14),ce=n(45),ue=n(8),oe={weekdays:new Array(8).fill(!0),years:new Array(12).fill(!0)};var ie=n(12),se=n.n(ie),he=n(20),le=n(46),je=n(39),be=n.n(je);function fe(e){return ve.apply(this,arguments)}function ve(){return(ve=Object(he.a)(se.a.mark((function e(t){var n,r,a,c,u=arguments;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"NO2",r="estacio:".concat(t,"#contaminant:").concat(n),e.next=4,be.a.getItem(r);case 4:if(a=e.sent){e.next=11;break}return e.next=8,Oe(t,n);case 8:return a=e.sent,e.next=11,be.a.setItem(r,a);case 11:return(c=xe(a)).forEach((function(e){var t=new Date(e.data),n=t.getDay();e.date=t,e.year=t.getFullYear(),e.month=t.getMonth()+1,e.day=t.getDate(),e.dayOfTheWeek=n<1?7:n,e.weekend=0===n||6===n,e.h01=pe(e.h01),e.h02=pe(e.h02),e.h03=pe(e.h03),e.h04=pe(e.h04),e.h05=pe(e.h05),e.h06=pe(e.h06),e.h07=pe(e.h07),e.h08=pe(e.h08),e.h09=pe(e.h09),e.h10=pe(e.h10),e.h11=pe(e.h11),e.h12=pe(e.h12),e.h13=pe(e.h13),e.h14=pe(e.h14),e.h15=pe(e.h15),e.h16=pe(e.h16),e.h17=pe(e.h17),e.h18=pe(e.h18),e.h19=pe(e.h19),e.h20=pe(e.h20),e.h21=pe(e.h21),e.h22=pe(e.h22),e.h23=pe(e.h23),e.h24=pe(e.h24)})),e.abrupt("return",c.filter((function(e){return e.nom_estacio})));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e,t){return de.apply(this,arguments)}function de(){return(de=Object(he.a)(se.a.mark((function e(t,n){var r,a,c;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="data between '2010-01-01T00:00:00' and '2021-02-28T00:00:00'AND nom_estacio='".concat(t,"'AND CONTAMINANT='").concat(n,"'").replace(/ /g,"%20").replace(/'/g,"%27"),a="https://analisi.transparenciacatalunya.cat/resource/tasf-thgu.csv?$limit=2853004&$offset=0&$where=".concat(r),e.next=4,fetch(a);case 4:return c=e.sent,e.abrupt("return",c.text());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e){return""===e?null:+e}function xe(e){var t=e.replace(/"+/g,"").split("\n").map((function(e){return e.split(",")})),n=Object(le.a)(t),r=n[0];return n.slice(1).map((function(e){var t={};return r.forEach((function(n,r){t[n]=e[r]})),t}))}var me="history/HISTORY_CHANGED",ye="history/LOAD_HISTORY";function ge(){return{type:ye}}var ke=[];var we={contaminant:"NO2",estacio:"Barcelona (Poblenou)"};var Ne=Object(ae.combineReducers)({filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(ue.a)(Object(ue.a)({},e),{},{weekdays:e.weekdays.map((function(e,n){return n===t.value?!e:e}))});case z:return Object(ue.a)(Object(ue.a)({},e),{},{years:e.years.map((function(e,n){return n===t.value?!e:e}))});default:return e}},history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return t.value;default:return e}},sources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(ue.a)(Object(ue.a)({},e),{},{contaminant:t.value});case P:return Object(ue.a)(Object(ue.a)({},e),{},{estacio:t.value});default:return e}}}),Ce=Object(ae.createStore)(Ne,Object(ce.composeWithDevTools)(Object(ae.applyMiddleware)((function(e){return function(t){return function(){var n=Object(he.a)(se.a.mark((function n(r){var a,c,u,o;return se.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(r),n.t0=r.type,n.next=n.t0===P||n.t0===R?4:n.t0===ye?6:12;break;case 4:return e.dispatch(ge()),n.abrupt("break",12);case 6:return a=F(e.getState()),c=a.estacio,u=a.contaminant,n.next=9,fe(c,u);case 9:return o=n.sent,e.dispatch({type:me,value:o}),n.abrupt("break",12);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))));Ce.dispatch(ge()),u.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(O.a,{store:Ce,children:Object(b.jsx)(ne,{})})})}),document.getElementById("root")),re()}},[[62,1,2]]]);
//# sourceMappingURL=main.9589cdbf.chunk.js.map