(function(t){function e(e){for(var o,a,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],o=!0,c=1;c<r.length;c++){var i=r[c];0!==n[i]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var o={},n={app:0},s=[];function a(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=o,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(r,o,function(e){return t[e]}.bind(null,o));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"379e":function(t,e,r){"use strict";var o=r("cace"),n=r.n(o);n.a},"55c2":function(t,e,r){"use strict";var o=r("5eae"),n=r.n(o);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("Encabezado")],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("Proveedor")],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("Pep")],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("Pedido")],1)])])])},s=[],a=r("bc3a"),c=r.n(a),i=r("a7fe"),l=r.n(i),u=r("2f62"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"proveedor"},[r("div",{staticClass:"card border-info mt-4",attrs:{hidden:t.hidden}},[r("div",{staticClass:"card-body text-info"},[r("h5",{staticClass:"card-title"},[t._v("Proveedores")]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.text},on:{keyup:function(e){return t.textSearch(t.text)},input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.proveedorTable,function(e,o){return r("tr",{key:o},[r("td",{staticClass:"cell-1"},[t._v(t._s(e.numeroProveedor))]),r("td",{staticClass:"cell-2"},[t._v(t._s(e.nombreProveedor))]),r("td",{staticClass:"cell-3"},[t._v(t._s(e.subtotal2018))]),r("td",{staticClass:"cell-4"},[t._v(t._s(e.subtotal2019))]),r("td",{staticClass:"cell-5"},[r("a",{staticClass:"btn btn-info",on:{click:function(r){return t.loadProveedor(e.numeroProveedor)}}},[r("span",[t._v("DRILLDOWN")]),r("i",{staticClass:"fa fa-caret-down ml-2"})])])])}),0),r("tfoot",[r("tr",[r("th"),r("th",[t._v("TOTALES")]),r("th",[t._v(t._s(t.total2018))]),r("th",[t._v(t._s(t.total2019))]),r("th")])])])])])])])])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("Numero")]),r("th",[t._v("Nombre")]),r("th",[t._v("Subtotal 2018")]),r("th",[t._v("Subtotal 2019")]),r("th",[t._v("Peps")])])}],v=(r("8e6e"),r("456d"),r("28a5"),r("ac6a"),r("bd86"));function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach(function(e){Object(v["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={name:"Proveedor",data:function(){return{text:""}},computed:h({},u["a"].mapState(["proveedores","proveedor","level"]),{conteo:function(){var t=0;return this.proveedores.forEach(function(e){t+=e.conteoPep}),t},total2018:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=0;return this.proveedores.forEach(function(t){e+=t.subtotal2018}),"$".concat(t(e))},total2019:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=0;return this.proveedores.forEach(function(t){e+=t.subtotal2019}),"$".concat(t(e))},hidden:function(){var t;return t=0!==this.level,t},proveedorTable:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=[];return this.proveedores.forEach(function(r){var o={numeroProveedor:r.numeroProveedor,nombreProveedor:r.nombreProveedor,subtotal2018:"$".concat(t(r.subtotal2018)),subtotal2019:"$".concat(t(r.subtotal2019))};e.push(o)}),e}}),mounted:function(){this.requestProveedores()},methods:h({},u["a"].mapMutations(["setProveedores","setProveedor","setPeps","setLevel"]),{},u["a"].mapActions(["requestProveedores","requestPeps"]),{loadProveedor:function(t){this.setProveedor(t),this.setLevel(1),this.requestPeps({proveedor:t,text:""})},textSearch:function(t){this.requestProveedores(t)}})},g=b,m=(r("379e"),r("2877")),P=Object(m["a"])(g,d,p,!1,null,"64f810a7",null),_=P.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"proveedor"},[r("div",{staticClass:"card mt-4 border-info",attrs:{hidden:t.hidden}},[r("div",{staticClass:"card-body text-info"},[r("h5",{staticClass:"card-title"},[t._v("Peps")]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.text},on:{keyup:function(e){return t.textSearch(t.text)},input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"col-lg-2 align-self-end"},[r("button",{staticClass:"btn btn-success back",on:{click:function(e){return t.setLevel(0)}}},[t._m(0)])])]),r("br"),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("table",{staticClass:"table"},[t._m(1),r("tbody",t._l(t.pepTable,function(e,o){return r("tr",{key:o},[r("td",{staticClass:"cell-1"},[t._v(t._s(e.codigoPep))]),r("td",{staticClass:"cell-2"},[t._v(t._s(e.descripcionPep))]),r("td",{staticClass:"cell-3"},[t._v(t._s(e.subtotal2018))]),r("td",{staticClass:"cell-4"},[t._v(t._s(e.subtotal2019))]),r("td",{staticClass:"cell-5"},[r("a",{staticClass:"btn btn-info",on:{click:function(r){return t.loadPep(e.codigoPep)}}},[r("span",[t._v("DRILLDOWN")]),r("i",{staticClass:"fa fa-caret-down ml-2"})])])])}),0),r("tfoot",[r("tr",[r("th"),r("th",[t._v("TOTALES")]),r("th",[t._v(t._s(t.total2018))]),r("th",[t._v(t._s(t.total2019))]),r("th")])])])])])])])])},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("i",{staticClass:"fa fa-caret-left mr-4"},[r("span",[t._v("BACK")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Codigo")]),r("th",[t._v("Descripcion")]),r("th",[t._v("Subtotal 2018")]),r("th",[t._v("Subtotal 2019")]),r("th",[t._v("Pedidos")])])])}];function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(r,!0).forEach(function(e){Object(v["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var w={name:"Pep",data:function(){return{text:""}},computed:x({},u["a"].mapState(["peps","pep","proveedor","level","pedidos"]),{conteo:function(){var t=0;return this.proveedores.forEach(function(e){t+=e.conteoPep}),t},total2018:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=0;return this.peps.forEach(function(t){e+=t.subtotal2018}),"$".concat(t(e))},total2019:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=0;return this.peps.forEach(function(t){e+=t.subtotal2019}),"$".concat(t(e))},hidden:function(){var t;return t=1!==this.level,t},pepTable:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=[];return this.peps.forEach(function(r){var o={codigoPep:r.codigoPep,descripcionPep:r.descripcionPep,subtotal2018:"$".concat(t(r.subtotal2018)),subtotal2019:"$".concat(t(r.subtotal2019))};e.push(o)}),e}}),mounted:function(){},methods:x({},u["a"].mapMutations(["setPeps","setPep","setPedidos","setLevel"]),{},u["a"].mapActions(["requestPeps","requestPedidos"]),{loadPep:function(t){this.setLevel(2),this.setPep(t),this.requestPedidos({pep:t,text:"",proveedor:this.proveedor})},textSearch:function(t){this.requestPeps({proveedor:this.proveedor,text:t})}})},j=w,E=(r("6946"),Object(m["a"])(j,O,y,!1,null,"79600d16",null)),S=E.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"proveedor"},[r("div",{staticClass:"card my-4 border-info",attrs:{hidden:t.hidden}},[r("div",{staticClass:"card-body text-info"},[r("h5",{staticClass:"card-title"},[t._v("Pedidos")]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.text},on:{keyup:function(e){return t.textSearch(t.text)},input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"col-lg-2"},[r("button",{staticClass:"btn btn-success btn-block",on:{click:function(e){return t.setLevel(1)}}},[t._m(0)])])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("table",{staticClass:"table"},[t._m(1),r("tbody",t._l(t.pedidosTable,function(e,o){return r("tr",{key:o},[r("td",[t._v(t._s(e.numeroPedido))]),r("td",[t._v(t._s(e.conceptoPedido))]),r("td",[t._v(t._s(e.subtotal2018))]),r("td",[t._v(t._s(e.subtotal2019))])])}),0),r("tfoot",[r("tr",[r("th"),r("th",[t._v("TOTALES")]),r("th",[t._v(t._s(t.total2018))]),r("th",[t._v(t._s(t.total2019))])])])])])])])])])},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("i",{staticClass:"fa fa-caret-left mx-4"},[r("span",[t._v("BACK")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("NUmero Pedido")]),r("th",[t._v("Concepto")]),r("th",[t._v("Subtotal 2018")]),r("th",[t._v("Subtotal 2019")])])}];function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(r,!0).forEach(function(e){Object(v["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var L={name:"Pedido",data:function(){return{text:""}},computed:D({},u["a"].mapState(["pedidos","pep","level","proveedor"]),{conteo:function(){var t=0;return this.pedidos.forEach(function(e){t+=e.conteoPep}),t},total2018:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=0;return this.pedidos.forEach(function(t){e+=t.subtotal2018}),"$".concat(t(e))},total2019:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=0;return this.pedidos.forEach(function(t){e+=t.subtotal2019}),"$".concat(t(e))},hidden:function(){var t;return t=2!==this.level,t},pedidosTable:function(){function t(t){for(var e=parseFloat(t),r=e.toFixed(2),o=r.split(".",2),n=o[0],s=o[1],a=[],c=0;c<n.length;c++){var i=n.length-c-1,l=c+1,u=n.substr(i,1);l%3===0&&0!==i&&"-"!==n.substr(0,1)?(a.push(u),a.push(",")):a.push(u)}for(var d="",p=0;p<a.length;p++){var v=a.length-p-1,f=a[v];d+=f}return d+=".",d+=s,d}var e=[];return this.pedidos.forEach(function(r){var o={numeroPedido:r.numeroPedido,conceptoPedido:r.conceptoPedido,subtotal2018:"$".concat(t(r.subtotal2018)),subtotal2019:"$".concat(t(r.subtotal2019))};e.push(o)}),e}}),mounted:function(){},methods:D({},u["a"].mapMutations(["setPedidos","setLevel"]),{},u["a"].mapActions(["requestPedidos"]),{textSearch:function(t){this.requestPedidos({pep:this.pep,text:t,proveedor:this.proveedor})}})},T=L,q=(r("8fec"),Object(m["a"])(T,$,k,!1,null,"45721d98",null)),A=q.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"encabezado"},[r("div",{staticClass:"card border-info my-3"},[r("div",{staticClass:"card-body text-info"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"display-4"},[t._v("VARIACIONES DE REAL V.S. PRESUPUESTO")])])])])])}],R={name:"Encabezado",data:function(){return{text:""}}},z=R,I=(r("55c2"),Object(m["a"])(z,N,M,!1,null,"541edc73",null)),B=I.exports,U={name:"app",components:{Proveedor:_,Pep:S,Pedido:A,Encabezado:B},data:function(){return{}},computed:{}},J=U,K=Object(m["a"])(J,n,s,!1,null,null,null),V=K.exports;o["a"].use(u["a"]);var W=new u["a"].Store({state:{level:0,proveedores:[],proveedor:null,peps:[],pep:null,pedidos:[],pedido:null},mutations:{setLevel:function(t,e){t.level=e},setProveedor:function(t,e){t.proveedor=e},setPedido:function(t,e){t.pedido=e},setPep:function(t,e){t.pep=e},setProveedores:function(t,e){t.proveedores=e},setPeps:function(t,e){t.peps=e},setPedidos:function(t,e){t.pedidos=e}},actions:{requestProveedores:function(t){var e,r=t.commit,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log(o),e=""===o?"http://35.196.24.250/sugerencia-pit-api/public/proveedor/search":"http://35.196.24.250/sugerencia-pit-api/public/proveedor/search/".concat(o),console.log(e),c.a.get(e).then(function(t){r("setProveedores",t.data)})},requestPeps:function(t,e){var r,o=t.commit;console.log(e),r=""===e.text?"http://35.196.24.250/sugerencia-pit-api/public/pep/search/".concat(e.proveedor):"http://35.196.24.250/sugerencia-pit-api/public/pep/search/".concat(e.proveedor,"/").concat(e.text),c.a.get(r).then(function(t){o("setPeps",t.data)})},requestPedidos:function(t,e){var r,o=t.commit;console.log(e),r=""===e.text?"http://35.196.24.250/sugerencia-pit-api/public/pedido/search/".concat(e.pep,"/").concat(e.proveedor):"http://35.196.24.250/sugerencia-pit-api/public/pedido/search/".concat(e.pep,"/").concat(e.proveedor,"/").concat(e.text),c.a.get(r).then(function(t){o("setPedidos",t.data)})}}}),G=r("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].use(l.a,c.a),o["a"].config.productionTip=!1,new o["a"]({store:W,render:function(t){return t(V)}}).$mount("#app")},"5eae":function(t,e,r){},"65aa":function(t,e,r){},6946:function(t,e,r){"use strict";var o=r("f480"),n=r.n(o);n.a},"8fec":function(t,e,r){"use strict";var o=r("65aa"),n=r.n(o);n.a},cace:function(t,e,r){},f480:function(t,e,r){}});
//# sourceMappingURL=app.362cabef.js.map