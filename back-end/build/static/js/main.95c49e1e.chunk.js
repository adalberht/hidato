(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(43)},21:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(12),l=n.n(o),c=(n(21),n(2)),i=n.n(c),u=n(5),s=n(14),d=n(4),p=n(13),m=n.n(p);var v=function(e){return a.a.createElement("input",{key:"hidato-cell-".concat(e.row,"-").concat(e.col),className:"hidato-cell",disabled:!e.fromInput&&""!==e.val,style:{textAlign:"center",border:"1px solid gray",visibility:e.visible?"visible":"hidden",backgroundColor:1==e.val||40==e.val?"#d50000":e.fromInput&&""!==e.val?"#4dd0e1":"white",transition:"all 0.5s",fontSize:"1.2rem",color:1==e.val||40==e.val?"white":e.fromInput?"#424242":"green"},value:e.val,onChange:function(t){t.preventDefault();var n=t.target.value,r=Number(t.target.value);""===n||Number.isInteger(r)&&r>=1&&r<=40?e.callback(t.target.value):window.alert("Input must be positive number between 0 and 40 (inclusive)")}})};function f(){return[{startX:0,endX:4},{startX:0,endX:4},{startX:0,endX:5},{startX:0,endX:5},{startX:0,endX:6},{startX:2,endX:6},{startX:4,endX:7},{startX:6,endX:7}].map(function(e,t){var n=e.startX,r=e.endX;return new Array(8).fill(0).map(function(e,a){return{row:t,col:a,visible:a>=n&&a<=r,val:"",fromInput:!1}})})}function w(e){return new Set(e.map(function(e){return e.val}))}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(i.a.mark(function e(t){var n,r,a,o,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e){return e.reduce(function(e,t){var n=t.filter(function(e){return e.visible&&""!=e.val});return e.concat(n.map(function(e){return{row:e.row+1,col:e.col+1,val:Number(e.val)}}))},[])}(t),r=w(n),a=!0,r.size!==n.length&&(window.alert("Input should be unique. There is duplicate element"),a=!1),n.sort(function(e,t){return e.val-t.val}),n.length<15&&(window.alert("You should provide a minimum of 15 numbers"),a=!1),1===n[0].val&&40===n[n.length-1].val||(window.alert("Please input 1 and 40"),a=!1),a){e.next=10;break}return e.abrupt("return",t);case 10:return e.prev=10,e.next=13,m.a.post("http://localhost:8000/solve",n,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"}});case 13:return o=e.sent,console.log("Get response: "),console.log(o),l=new Array(8).fill(0).map(function(){return new Array(8).fill(0)}),o.data.forEach(function(e,t){l[e.row-1][e.col-1]=e.val}),console.log(l),console.log(t),t=t.map(function(e){return e.map(function(e){return Object(u.a)({},e,{val:l[e.row][e.col]})})}),e.abrupt("return",t);case 24:return e.prev=24,e.t0=e.catch(10),window.alert("Error: "+e.t0),e.abrupt("return",t);case 28:case"end":return e.stop()}},e,null,[[10,24]])}))).apply(this,arguments)}var g=function(){var e=Object(r.useState)(f()),t=Object(s.a)(e,2),n=t[0],o=t[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 2.5rem)",gridTemplateRows:"repeat(8, 2.5rem)"}},n.reduce(function(e,t){return e.concat(t.map(function(e){return a.a.createElement(v,Object.assign({key:"hidato-cell-".concat(e.row,"-").concat(e.col),callback:function(t){var r=n.map(function(n,r){return r!==e.row?n:n.map(function(n,r){return r!==e.col?n:Object(u.a)({},n,{val:t,fromInput:!0})})});o(r)}},e))}))},[])),a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginTop:"1rem"}},a.a.createElement("button",{onClick:Object(d.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n,o);case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}},e)}))},"Solve"),a.a.createElement("button",{style:{marginLeft:"1rem"},onClick:function(){return o(f())}},"Clear")))};n(42);var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Hidato Solver"),a.a.createElement("h2",null,"Standard Square-shaped")),a.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.95c49e1e.chunk.js.map