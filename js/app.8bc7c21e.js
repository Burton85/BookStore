(function(e){function t(t){for(var o,l,a=t[0],s=t[1],u=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},c=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var i=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"6c79":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t){var n=Object(o["v"])("router-view");return Object(o["q"])(),Object(o["f"])(n)}const c={};c.render=r;var l=c,a=n("6c02");function s(e,t){return null}const u={};u.render=s;var i=u;function b(e,t,n,r,c,l){var a=Object(o["v"])("book-list"),s=Object(o["v"])("router-view");return Object(o["q"])(),Object(o["f"])(o["a"],null,[Object(o["h"])(a),Object(o["h"])(s)],64)}var d={class:"book-list mt-24"},h={class:"h-100 w-full lg:w-8/12 flex flex-col m-auto flex-nowrap md:flex-row"},p={class:"flex justify-center"},f=Object(o["h"])("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),v=Object(o["h"])("path",{d:"M18 15l-6-6l-6 6h12",transform:"rotate(270 12 12)"},null,-1),m=Object(o["h"])("path",{stroke:"none",d:"M0 0h24v24H0z"},null,-1),j=Object(o["h"])("path",{d:"M18 15l-6-6l-6 6h12",transform:"rotate(90 12 12)"},null,-1);function w(e,t,n,r,c,l){var a=Object(o["v"])("book-card");return Object(o["q"])(),Object(o["f"])("div",d,[Object(o["h"])("div",h,[Object(o["h"])(o["c"],{name:"fade"},{default:Object(o["A"])((function(){return[(Object(o["q"])(!0),Object(o["f"])(o["a"],null,Object(o["u"])(e.filterList,(function(t){return Object(o["q"])(),Object(o["f"])(a,{key:t.id,book:t,onClick:function(n){return e.clickBookHandler(t.id)},"selected-id":e.selectId},null,8,["book","onClick","selected-id"])})),128))]})),_:1})]),Object(o["h"])("div",p,[Object(o["h"])("button",{class:"focus:outline-none",onClick:t[1]||(t[1]=function(){return e.pervBook&&e.pervBook.apply(e,arguments)})},[(Object(o["q"])(),Object(o["f"])("svg",{class:["h-10 w-10 text-gray-800","leftmost"==e.listStatus?"opacity-50":"opacity-100"],width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[f,v],2))]),Object(o["h"])("button",{class:"focus:outline-none ",onClick:t[2]||(t[2]=function(){return e.nextBook&&e.nextBook.apply(e,arguments)})},[(Object(o["q"])(),Object(o["f"])("svg",{class:["h-10 w-10 text-gray-800","rightmost"==e.listStatus?"opacity-50":"opacity-100"],width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[m,j],2))])])])}n("fb6a");var O=n("1da1"),g=(n("96cf"),n("bc3a")),y=n.n(g),k={getData:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(t,{headers:{"Content-Type":"application/json"},responseType:"json"}).then((function(e){return e.data})).catch((function(e){console.log(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},x={updateData:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(t,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y()({method:"patch",url:t,data:n,headers:{"Content-Type":"application/json",responseType:"json"}}).then((function(e){return e})).catch((function(e){console.log(e)}));case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},C=function(){var e=Object(a["d"])(),t=Object(o["t"])([]),n=Object(o["t"])([]),r=Object(o["t"])(0),c=Object(o["t"])("leftmost"),l=Object(o["t"])(""),s=function(t){l.value=t+"",e.push("/books/"+t);var n=document.getElementById("app")||{scrollHeight:0};window.scroll(0,n.scrollHeight)},u=function(){k.getData("https://fe-interview-api.unnotech.com/books").then((function(e){t.value=e,n.value=e.slice(0,4)}))},i=function(){r.value>t.value.length-5?c.value="rightmost":(r.value++,r.value>t.value.length-5&&(c.value="rightmost"))},b=function(){r.value<=0?c.value="leftmost":(r.value--,r.value<=0&&(c.value="leftmost"))};return Object(o["z"])(r,(function(){n.value=t.value.slice(r.value,r.value+4)})),u(),{curIndex:r,nextBook:i,pervBook:b,filterList:n,rawList:t,listStatus:c,selectId:l,clickBookHandler:s}};n("b0c0");function B(e,t,n,r,c,l){return Object(o["q"])(),Object(o["f"])("div",{class:["book-card flex-1 m-2 rounded bg-white border-4 border-gray-500 border-opacity-50 cursor-pointer transform hover:-translate-y-2 hover:shadow-xl duration-200",e.book.id==e.selectedId?"-translate-y-2 shadow-xl border-yellow-500":"translate-y-0 * border-gray-500"],onClick:t[1]||(t[1]=function(t){return e.$emit("click",e.book.id)})},[Object(o["h"])("img",{src:e.book.image,alt:"book.name",class:"object-contain m-auto w-50 h-60 p-3"},null,8,["src"]),Object(o["h"])("h1",{class:["p-3 h-20 text-sm",e.book.id==e.selectedId?"bg-yellow-300":"bg-gray-300"]},Object(o["x"])(e.book.name),3)],2)}var z=Object(o["i"])({name:"BookCard",props:{book:Object,selectedId:String}});z.render=B;var M=z,H={props:{id:String},components:{BookCard:M},setup:function(e){return C()}};H.render=w;var A=H,q=Object(o["i"])({name:"Home",components:{BookList:A}});q.render=b;var S=q,D={class:"detail relative bg-gray-200 bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-6/12 m-auto my-24 flex border-4 border-gray-500 border-opacity-50"},I={class:"input-container w-3/4 sm:w-1/2"},P={class:"sm:flex sm:items-center my-6"},_=Object(o["h"])("div",{class:"w-1/2 sm:w-full"},[Object(o["h"])("label",{class:"block text-gray-500 font-bold text-right mb-1 sm:mb-0 sm:pr-4",for:"inline-full-name"}," 價格 ")],-1),T=Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),V=Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),L={class:"sm:flex sm:items-center my-6"},R=Object(o["h"])("div",{class:"w-1/2 sm:w-full"},[Object(o["h"])("label",{class:"block text-gray-500 font-bold text-right mb-1 sm:mb-0 sm:pr-4",for:"inline-full-name"}," 數量 ")],-1),J=Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2 ",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),E=Object(o["h"])("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),$={class:"submit-button sm:flex sm:items-center w-1/4 sm:w-1/2"},F=Object(o["h"])("div",{class:"sm:w-1/3 h-0 sm:h-full"},null,-1),G={class:"sm:w-2/3 h-full sm:h-full flex justify-center items-center"};function K(e,t,n,r,c,l){var a=Object(o["v"])("my-alert");return Object(o["q"])(),Object(o["f"])("form",D,[Object(o["h"])("div",I,[Object(o["h"])("div",P,[_,Object(o["h"])("button",{onClick:t[1]||(t[1]=function(t){return e.reducePrice()}),class:"sm:w-1/8 focus:outline-none hover:text-yellow-500 "},[T]),Object(o["h"])("input",{class:"w-2/4 sm:w-2/4 bg-gray-300 appearance-none rounded py-2 mx-2 sm:mx-8 text-center text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500",type:"number",placeholder:e.bookDetail.price},null,8,["placeholder"]),Object(o["h"])("button",{onClick:t[2]||(t[2]=function(t){return e.addPrice()}),class:"sm:w-1/8 focus:outline-none hover:text-yellow-500"},[V])]),Object(o["h"])("div",L,[R,Object(o["h"])("button",{onClick:t[3]||(t[3]=function(t){return e.reduceCount()}),class:"sm:w-1/8 focus:outline-none hover:text-yellow-500"},[J]),Object(o["h"])("input",{class:"w-2/4 sm:w-2/4 bg-gray-300 appearance-none rounded py-2  mx-2 sm:mx-8 text-center text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500",type:"number",placeholder:e.bookDetail.count},null,8,["placeholder"]),Object(o["h"])("button",{onClick:t[4]||(t[4]=function(t){return e.addCount()}),class:"sm:w-1/8 focus:outline-none hover:text-yellow-500"},[E])])]),Object(o["h"])("div",$,[F,Object(o["h"])("div",G,[Object(o["h"])("button",{class:"h-full sm:h-10 shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",type:"button",onClick:t[5]||(t[5]=function(t){return e.submitData()})}," 確認修改 ")])]),Object(o["h"])(a,{msg:e.msg,msgtype:e.msgtype},null,8,["msg","msgtype"])])}var N=function(){var e=Object(o["t"])(""),t=Object(o["t"])(""),n=function(n,o){if(""==e.value){e.value=n,t.value=o;var r=window.setTimeout((function(){e.value="",t.value="",window.clearInterval(r)}),1500)}};return{msg:e,msgtype:t,showAlert:n}},Q=function(){var e=N(),t=e.msg,n=e.msgtype,r=e.showAlert,c=Object(a["c"])(),l=Object(o["t"])({}),s=Object(o["t"])({price:0,count:0}),u=function(){k.getData("https://fe-interview-api.unnotech.com/profile/"+c.params.bookId).then((function(e){l.value={price:e.price,count:e.count},s.value=e})).catch((function(e){l.value={price:0,count:0},s.value={price:0,count:0},r("查無資料","fail")}))},i=function(){return s.value.price++},b=function(){if(s.value.price>0)return s.value.price--},d=function(){return s.value.count++},h=function(){if(s.value.count>0)return s.value.count--},p=Object(o["d"])((function(){return c.params.bookId}));function f(e,t){return e.count===t.count}function v(e,t){return e.price===t.price}Object(o["z"])(p,(function(){u()}));var m=function(){f(l.value,s.value)&&v(l.value,s.value)?r("請修改後再提交","warn"):x.updateData("https://fe-interview-api.unnotech.com/profile/"+p.value,{price:s.value.price,count:s.value.count}).then((function(e){200==e.status?r("修改成功","suss"):r("網路異常","fail")})).catch((function(e){l.value={price:0,count:0},s.value={price:0,count:0},r("查無資料","fail")}))};return u(),{msg:t,msgtype:n,addCount:d,reduceCount:h,addPrice:i,reducePrice:b,bookDetail:s,submitData:m}},U={key:0,class:"absolute w-8/12 sm:w-6/12 inset-center bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md",role:"alert"},W={class:"flex"},X=Object(o["h"])("div",{class:"py-1"},[Object(o["h"])("svg",{class:"fill-current h-6 w-6 text-green-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["h"])("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),Y={class:"font-bold  text-green-900 leading-loose"},Z={key:0,class:"absolute w-8/12 sm:w-6/12 inset-center bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md",role:"alert"},ee={class:"flex"},te=Object(o["h"])("div",{class:"py-1"},[Object(o["h"])("svg",{class:"fill-current h-6 w-6 text-red-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["h"])("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),ne={class:"font-bold  text-red-900 leading-loose"},oe={key:0,class:"absolute w-8/12 sm:w-6/12 inset-center   bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md",role:"alert"},re={class:"flex"},ce=Object(o["h"])("div",{class:"py-1"},[Object(o["h"])("svg",{class:"fill-current h-6 w-6 text-yellow-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[Object(o["h"])("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),le={class:"font-bold  text-yellow-900 leading-loose"};function ae(e,t,n,r,c,l){return Object(o["q"])(),Object(o["f"])(o["a"],null,[Object(o["h"])(o["b"],{name:"rise"},{default:Object(o["A"])((function(){return["suss"==e.msgtype?(Object(o["q"])(),Object(o["f"])("div",U,[Object(o["h"])("div",W,[X,Object(o["h"])("div",null,[Object(o["h"])("p",Y,Object(o["x"])(e.msg),1)])])])):Object(o["g"])("",!0)]})),_:1}),Object(o["h"])(o["b"],{name:"rise"},{default:Object(o["A"])((function(){return["fail"==e.msgtype?(Object(o["q"])(),Object(o["f"])("div",Z,[Object(o["h"])("div",ee,[te,Object(o["h"])("div",null,[Object(o["h"])("p",ne,Object(o["x"])(e.msg),1)])])])):Object(o["g"])("",!0)]})),_:1}),Object(o["h"])(o["b"],{name:"rise"},{default:Object(o["A"])((function(){return["warn"==e.msgtype?(Object(o["q"])(),Object(o["f"])("div",oe,[Object(o["h"])("div",re,[ce,Object(o["h"])("div",null,[Object(o["h"])("p",le,Object(o["x"])(e.msg),1)])])])):Object(o["g"])("",!0)]})),_:1})],64)}var se=Object(o["i"])({name:"myAlert",props:{msg:String,msgtype:String}});se.render=ae;var ue=se,ie={setup:function(e){return Q()},components:{MyAlert:ue}};ie.render=K;var be=ie,de=[{path:"/:pathMatch(.*)*",redirect:"/books"},{path:"/books",name:"Books",component:S,children:[{path:"",name:"Home",component:i},{path:":bookId",name:"Detail",component:be}]}],he=Object(a["a"])({history:Object(a["b"])(),routes:de}),pe=he;n("6c79");Object(o["e"])(l).use(pe).mount("#app")}});
//# sourceMappingURL=app.8bc7c21e.js.map