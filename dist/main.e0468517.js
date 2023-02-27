"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,'/* stylelint-disable csstree/validator */\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family:\r\n    "Open Sans",\r\n    "Lucida Grande",\r\n    "tahoma",\r\n    "verdana",\r\n    "arial",\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #272727;\r\n  justify-content: center;\r\n}\r\n\r\nheader {\r\n  padding: 50px 0 30px 50px;\r\n  width: 100%;\r\n  max-width: 1500px;\r\n  background-color: #272727;\r\n  border: #e7e7e7 solid 2px;\r\n  border-bottom: none;\r\n  flex-wrap: wrap;\r\n  animation: animation 10s ease-in-out 0s infinite alternate forwards;\r\n}\r\n\r\n@keyframes animation {\r\n  0% {\r\n    text-shadow: rgb(215, 35, 35) 4px 4px;\r\n  }\r\n\r\n  25% {\r\n    text-shadow: rgb(25, 79, 229) 4px 4px;\r\n  }\r\n\r\n  50% {\r\n    text-shadow: rgb(227, 246, 9) 4px 4px;\r\n  }\r\n\r\n  75% {\r\n    text-shadow: #55af33 4px 4px;\r\n  }\r\n\r\n  100% {\r\n    text-shadow: silver 4px 4px;\r\n  }\r\n}\r\n\r\nh1 {\r\n  color: #e7e7e7;\r\n  font-size: clamp(2rem, 10vw, 7rem);\r\n}\r\n\r\nh2 {\r\n  color: #e7e7e7;\r\n  font-size: clamp(2rem, 3.5vw, 3rem);\r\n}\r\n\r\nmain {\r\n  border: #e7e7e7 solid 2px;\r\n  border-top: none;\r\n  background-color: #272727;\r\n  padding: 5% 2%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  max-width: 1500px;\r\n  justify-content: center;\r\n}\r\n\r\n.scores_container {\r\n  width: 50%;\r\n  min-width: 320px;\r\n  display: block;\r\n  padding: 0 2%;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.scores_header_container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.btn {\r\n  padding: 5px 10px;\r\n  background-color: #e7e7e7;\r\n  color: #272727;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  font-weight: 500;\r\n  transition: all ease 0.5s;\r\n  border: none;\r\n  animation: animation2 10s ease-in-out 0s infinite alternate forwards;\r\n}\r\n\r\n@keyframes animation2 {\r\n  0% {\r\n    box-shadow: rgb(215, 35, 35) 5px 5px;\r\n  }\r\n\r\n  25% {\r\n    box-shadow: rgb(25, 79, 229) 5px 5px;\r\n  }\r\n\r\n  50% {\r\n    box-shadow: rgb(227, 246, 9) 5px 5px;\r\n  }\r\n\r\n  75% {\r\n    box-shadow: #55af33 5px 5px;\r\n  }\r\n\r\n  100% {\r\n    box-shadow: silver 5px 5px;\r\n  }\r\n}\r\n\r\n.btn:hover {\r\n  background-color: silver;\r\n}\r\n\r\n.scores_list {\r\n  margin-top: 30px;\r\n  border: #e7e7e7 solid 2px;\r\n}\r\n\r\n.score {\r\n  list-style: none;\r\n  padding: 5px;\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  color: #e7e7e7;\r\n}\r\n\r\n.score:nth-child(odd) {\r\n  background: #323232;\r\n}\r\n\r\n.add_score_container {\r\n  width: 50%;\r\n  min-width: 320px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0 2%;\r\n  font-size: 1.7rem;\r\n  margin-bottom: 100px;\r\n}\r\n\r\nform {\r\n  margin-top: 30px;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 150px;\r\n  position: relative;\r\n}\r\n\r\ninput {\r\n  width: 300px;\r\n  padding: 5px;\r\n  border: #e7e7e7 solid 2px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: #28282b;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.submit_button {\r\n  width: 100px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  min-height: 50px;\r\n  border: #e7e7e7 solid 2px;\r\n  background-color: #e7e7e7;\r\n  max-width: 1500px;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n',""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=e(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var p=e(a[d]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},983:(n,r,e)=>{var t=e(379),o=e.n(t),a=e(795),i=e.n(a),s=e(569),c=e.n(s),d=e(565),p=e.n(d),l=e(216),u=e.n(l),f=e(589),m=e.n(f),h=e(426),x={};x.styleTagTransform=m(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),o()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;const b="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T7V7ogLg1WciER8lhmRb/scores",g=document.querySelector(".refresh_button"),v=document.querySelector("#form"),w=document.getElementById("name"),y=document.getElementById("score");v.onsubmit=n=>{n.preventDefault();(async(n,r)=>{const{data:e,stat:t}=await(async(n,r)=>{const e=await fetch(b,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user:n,score:r})});return{data:await e.json(),stat:e.status}})(n,r);201!==t?e.message:((n,r)=>{const e=document.createElement("li");e.innerHTML=`${n}: ${r}`,e.classList.add("score"),document.querySelector(".scores_list").appendChild(e)})(n,r)})(w.value,y.value),v.reset()},g.onclick=()=>(async()=>{const{data:n,stat:r}=await(async()=>{const n=await fetch(b);return{data:await n.json(),stat:n.status}})(),e=document.querySelector(".scores_list");200!==r?e.innerHTML=`Error ${r}: ${n.message}`:(e.innerHTML="",n.result.forEach((n=>{const r=document.createElement("li");r.classList.add("score"),r.innerHTML=`${n.user}: ${n.score}`,e.appendChild(r)})))})()}},n=>{n(n.s=983)}]);